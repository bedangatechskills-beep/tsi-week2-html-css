"""Builds every shared asset for Week 2 (Day 1 + Day 2): SVG images, the bell WAV and the momo-steam MP4.

Usage:  python make_assets.py --root <path to week2/>      (default: two folders up from this file)
Writes: week2/day1/assets/images/*.svg
        week2/day2/assets/images/*.svg
        week2/day2/assets/media/{canteen-bell.wav, momo-steam.mp4}
Needs:  Python 3, Pillow (MP4 frames), ffmpeg on PATH or `pip install imageio-ffmpeg`.
Re-running overwrites the files with identical output. Nobody redraws an asset by hand (PLAN §3.0).
"""
import argparse
import math
import os
import shutil
import struct
import subprocess
import sys
import wave

# TSI palette (tsi-deck-theme-v2 tokens.json)
NAVY, CHERRY, GOLD, AMBER, TEAL = "#14213D", "#990011", "#C8963E", "#F5EBD8", "#1F6F78"
PINK, GREEN, TINT, DECO, CREAM, WHITE = "#FFF3F4", "#1E6B34", "#E6ECF7", "#2A3F63", "#FDF6EC", "#FFFFFF"
DOUGH, DOUGH_D, SKIN, SKIN_D, SKY = "#FBF3E4", "#E2CFA8", "#C98E64", "#A8704C", "#DCE8F5"
FONT = "Segoe UI, Arial, sans-serif"


def svg(w, h, title, body, bg=None, par=""):
    """par="none": the picture stretches like a photo when CSS width/height disagree (avatars; D2-12 bug 5 oval)."""
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    par = f' preserveAspectRatio="{par}"' if par else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}"{par} '
            f'role="img" aria-label="{title}">\n<title>{title}</title>\n{rect}{body}\n</svg>\n')


def text(x, y, s, size=20, fill=NAVY, weight="normal", anchor="start", family=FONT, extra=""):
    return (f'<text x="{x}" y="{y}" font-family="{family}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}"{extra}>{s}</text>')


# ---------- reusable drawings ----------

def momo(cx, cy, r, pleats=True):
    """One momo: a round dumpling with a pleated top."""
    out = [f'<ellipse cx="{cx}" cy="{cy + r * 0.55:.1f}" rx="{r * 1.05:.1f}" ry="{r * 0.25:.1f}" fill="#000" opacity="0.12"/>',
           f'<path d="M{cx - r:.1f},{cy + r * 0.45:.1f} Q{cx - r * 1.05:.1f},{cy - r * 0.55:.1f} {cx:.1f},{cy - r * 0.95:.1f} '
           f'Q{cx + r * 1.05:.1f},{cy - r * 0.55:.1f} {cx + r:.1f},{cy + r * 0.45:.1f} Q{cx:.1f},{cy + r * 0.7:.1f} '
           f'{cx - r:.1f},{cy + r * 0.45:.1f} Z" fill="{DOUGH}" stroke="{DOUGH_D}" stroke-width="{max(1.5, r * 0.06):.1f}"/>']
    if pleats:
        for i in (-2, -1, 0, 1, 2):
            x2 = cx + i * r * 0.32
            out.append(f'<path d="M{cx:.1f},{cy - r * 0.9:.1f} Q{cx + i * r * 0.2:.1f},{cy - r * 0.35:.1f} {x2:.1f},{cy + r * 0.05:.1f}" '
                       f'fill="none" stroke="{DOUGH_D}" stroke-width="{max(1.2, r * 0.05):.1f}" stroke-linecap="round"/>')
        out.append(f'<circle cx="{cx}" cy="{cy - r * 0.92:.1f}" r="{r * 0.1:.1f}" fill="{DOUGH_D}"/>')
    return "".join(out)


def steam(x, y, h, opacity=0.7, color=WHITE, width=5):
    return (f'<path d="M{x},{y} q-12,-{h * 0.25} 0,-{h * 0.5} t0,-{h * 0.5}" fill="none" stroke="{color}" '
            f'stroke-width="{width}" stroke-linecap="round" opacity="{opacity}"/>')


def face(cx, cy, r, hair, hair_style, skin=SKIN, shirt=TEAL, extra=""):
    """Head-and-shoulders portrait centred on (cx, cy) with head radius r."""
    out = [f'<path d="M{cx - r * 1.9:.1f},{cy + r * 2.6:.1f} Q{cx - r * 1.8:.1f},{cy + r * 1.25:.1f} {cx:.1f},{cy + r * 1.2:.1f} '
           f'Q{cx + r * 1.8:.1f},{cy + r * 1.25:.1f} {cx + r * 1.9:.1f},{cy + r * 2.6:.1f} Z" fill="{shirt}"/>',
           f'<rect x="{cx - r * 0.3:.1f}" y="{cy + r * 0.7:.1f}" width="{r * 0.6:.1f}" height="{r * 0.6:.1f}" fill="{SKIN_D}"/>']
    if hair_style == "long":
        out.append(f'<path d="M{cx - r * 1.1:.1f},{cy + r * 1.5:.1f} L{cx - r * 1.15:.1f},{cy - r * 0.2:.1f} '
                   f'A{r * 1.15:.1f},{r * 1.15:.1f} 0 0 1 {cx + r * 1.15:.1f},{cy - r * 0.2:.1f} L{cx + r * 1.1:.1f},{cy + r * 1.5:.1f} Z" fill="{hair}"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{skin}"/>')
    if hair_style == "short":
        out.append(f'<path d="M{cx - r * 1.02:.1f},{cy - r * 0.05:.1f} A{r * 1.02:.1f},{r * 1.05:.1f} 0 0 1 {cx + r * 1.02:.1f},{cy - r * 0.05:.1f} '
                   f'Q{cx + r * 0.6:.1f},{cy - r * 0.55:.1f} {cx - r * 0.1:.1f},{cy - r * 0.45:.1f} Q{cx - r * 0.7:.1f},{cy - r * 0.4:.1f} '
                   f'{cx - r * 1.02:.1f},{cy - r * 0.05:.1f} Z" fill="{hair}"/>')
    elif hair_style == "long":
        out.append(f'<path d="M{cx - r * 1.05:.1f},{cy + r * 0.1:.1f} A{r * 1.05:.1f},{r * 1.08:.1f} 0 0 1 {cx + r * 1.05:.1f},{cy + r * 0.1:.1f} '
                   f'Q{cx + r * 0.2:.1f},{cy - r * 0.6:.1f} {cx - r * 1.05:.1f},{cy + r * 0.1:.1f} Z" fill="{hair}"/>')
    elif hair_style == "curly":
        for i in range(7):
            a = math.pi + i * math.pi / 6
            out.append(f'<circle cx="{cx + math.cos(a) * r * 0.85:.1f}" cy="{cy + math.sin(a) * r * 0.85:.1f}" r="{r * 0.36:.1f}" fill="{hair}"/>')
    ex = r * 0.38
    out += [f'<circle cx="{cx - ex:.1f}" cy="{cy + r * 0.05:.1f}" r="{r * 0.09:.1f}" fill="{NAVY}"/>',
            f'<circle cx="{cx + ex:.1f}" cy="{cy + r * 0.05:.1f}" r="{r * 0.09:.1f}" fill="{NAVY}"/>',
            f'<path d="M{cx - r * 0.35:.1f},{cy + r * 0.4:.1f} Q{cx:.1f},{cy + r * 0.68:.1f} {cx + r * 0.35:.1f},{cy + r * 0.4:.1f}" '
            f'fill="none" stroke="{NAVY}" stroke-width="{r * 0.08:.1f}" stroke-linecap="round"/>',
            f'<circle cx="{cx - r * 0.62:.1f}" cy="{cy + r * 0.35:.1f}" r="{r * 0.13:.1f}" fill="#E07A6A" opacity="0.45"/>',
            f'<circle cx="{cx + r * 0.62:.1f}" cy="{cy + r * 0.35:.1f}" r="{r * 0.13:.1f}" fill="#E07A6A" opacity="0.45"/>',
            extra]
    return "".join(out)


def avatar_body(kind, size=200):
    s = size / 200.0
    if kind == "aarav":
        bg, hair, style, shirt = TINT, "#2B1B12", "short", TEAL
    elif kind == "sunita":
        bg, hair, style, shirt = PINK, "#1F140E", "long", CHERRY
    else:  # rajan
        bg, hair, style, shirt = AMBER, "#3A2618", "curly", NAVY
    body = (f'<rect width="{size}" height="{size}" fill="{bg}"/>'
            f'<g transform="scale({s})">{face(100, 88, 38, hair, style, shirt=shirt)}</g>')
    if kind == "rajan":  # glasses
        body += (f'<g transform="scale({s})" fill="none" stroke="{NAVY}" stroke-width="3">'
                 f'<circle cx="85.6" cy="90" r="10"/><circle cx="114.4" cy="90" r="10"/><path d="M95.6,90 h8.8"/></g>')
    return body


def prayer_flags(x1, y1, x2, y2, n=9, sag=18):
    cols = ["#1F5FBF", WHITE, "#C0262D", "#2E8B57", "#E8B923"]
    out = [f'<path d="M{x1},{y1} Q{(x1 + x2) / 2},{(y1 + y2) / 2 + sag * 2} {x2},{y2}" fill="none" stroke="#7A6A55" stroke-width="1.5"/>']
    for i in range(n):
        t = (i + 0.5) / n
        x = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * (x1 + x2) / 2 + t * t * x2
        y = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * ((y1 + y2) / 2 + sag * 2) + t * t * y2
        out.append(f'<rect x="{x - 6:.1f}" y="{y:.1f}" width="12" height="14" fill="{cols[i % 5]}" stroke="#00000022"/>')
    return "".join(out)


def stupa_eyes(cx, cy, w):
    return (f'<path d="M{cx - w:.1f},{cy} q{w * 0.35:.1f},-{w * 0.3:.1f} {w * 0.7:.1f},0" fill="none" stroke="{NAVY}" stroke-width="2.5"/>'
            f'<path d="M{cx + w * 0.3:.1f},{cy} q{w * 0.35:.1f},-{w * 0.3:.1f} {w * 0.7:.1f},0" fill="none" stroke="{NAVY}" stroke-width="2.5"/>'
            f'<circle cx="{cx - w * 0.65:.1f}" cy="{cy - w * 0.05:.1f}" r="{w * 0.1:.1f}" fill="{NAVY}"/>'
            f'<circle cx="{cx + w * 0.65:.1f}" cy="{cy - w * 0.05:.1f}" r="{w * 0.1:.1f}" fill="{NAVY}"/>'
            f'<path d="M{cx},{cy + w * 0.1:.1f} q-{w * 0.12:.1f},{w * 0.25:.1f} 0,{w * 0.35:.1f}" fill="none" stroke="{NAVY}" stroke-width="2.5"/>')


def pagoda(cx, base_y, w, tiers, color=CHERRY):
    out = [f'<rect x="{cx - w * 0.55:.1f}" y="{base_y - 18}" width="{w * 1.1:.1f}" height="18" fill="#B8A07A"/>',
           f'<rect x="{cx - w * 0.45:.1f}" y="{base_y - 34}" width="{w * 0.9:.1f}" height="16" fill="#A88E66"/>']
    y = base_y - 34
    tw = w
    for i in range(tiers):
        bh = 26 - i * 3
        out.append(f'<rect x="{cx - tw * 0.32:.1f}" y="{y - bh}" width="{tw * 0.64:.1f}" height="{bh}" fill="#7A3B1E"/>')
        out.append(f'<rect x="{cx - tw * 0.12:.1f}" y="{y - bh + 6}" width="{tw * 0.24:.1f}" height="{bh - 6}" fill="#4A2412"/>')
        y -= bh
        out.append(f'<path d="M{cx - tw * 0.62:.1f},{y + 4} L{cx:.1f},{y - 20} L{cx + tw * 0.62:.1f},{y + 4} Z" fill="{color}"/>')
        y -= 14
        tw *= 0.74
    out.append(f'<path d="M{cx - 4:.1f},{y + 8} L{cx:.1f},{y - 16} L{cx + 4:.1f},{y + 8} Z" fill="{GOLD}"/>')
    return "".join(out)


def mountain_scene(title, peaks, sky, label, sub):
    body = [f'<rect width="400" height="300" fill="{sky}"/>', f'<circle cx="330" cy="60" r="26" fill="#FFE7A3"/>']
    for pts, col, snow in peaks:
        body.append(f'<polygon points="{pts}" fill="{col}"/>')
        if snow:
            body.append(f'<polygon points="{snow}" fill="{WHITE}"/>')
    body += ['<rect y="232" width="400" height="68" fill="#4E7D4A"/>',
             '<path d="M0,240 Q100,225 200,240 T400,238 V300 H0 Z" fill="#3F6B3C"/>',
             f'<rect x="12" y="250" width="{len(label) * 13 + 30}" height="38" rx="8" fill="{NAVY}" opacity="0.88"/>',
             text(27, 276, label, 22, WHITE, "bold"),
             text(388, 284, sub, 14, WHITE, "normal", "end")]
    return svg(400, 300, title, "".join(body))


def browser_frame(w, h, url, inner):
    return (f'<rect width="{w}" height="{h}" fill="#D9DEE7"/>'
            f'<rect x="10" y="10" width="{w - 20}" height="{h - 20}" rx="10" fill="{WHITE}" stroke="#AEB6C4"/>'
            f'<path d="M10,20 a10,10 0 0 1 10,-10 h{w - 40} a10,10 0 0 1 10,10 v26 h-{w - 20} Z" fill="#EEF1F5"/>'
            f'<circle cx="30" cy="28" r="6" fill="#FF5F56"/><circle cx="48" cy="28" r="6" fill="#FFBD2E"/><circle cx="66" cy="28" r="6" fill="#27C93F"/>'
            f'<rect x="84" y="18" width="{w - 110}" height="20" rx="10" fill="{WHITE}" stroke="#C9CFD8"/>'
            + text(98, 33, url, 12, "#555") + inner)


# ---------- the assets ----------

def build_svgs():
    A = {}

    A["logo-momo-house.svg"] = svg(400, 120, "Momo House logo", "".join([
        f'<rect width="400" height="120" rx="16" fill="{NAVY}"/>',
        f'<circle cx="62" cy="60" r="44" fill="{CHERRY}"/>',
        steam(50, 30, 18, 0.8, WHITE, 3), steam(64, 26, 20, 0.8, WHITE, 3), steam(78, 30, 18, 0.8, WHITE, 3),
        momo(62, 70, 24),
        text(124, 64, "Momo House", 40, WHITE, "bold"),
        text(126, 92, "DILLIBAZAR · KATHMANDU", 15, GOLD, "bold", extra=' letter-spacing="2"'),
    ]))

    A["momo.svg"] = svg(400, 300, "One steamed momo", "".join([
        f'<rect width="400" height="300" fill="{AMBER}"/>',
        f'<circle cx="200" cy="165" r="118" fill="{WHITE}" stroke="{GOLD}" stroke-width="6"/>',
        steam(170, 70, 50, 0.9, "#C9B79A", 5), steam(200, 60, 55, 0.9, "#C9B79A", 5), steam(230, 70, 50, 0.9, "#C9B79A", 5),
        momo(200, 180, 78),
    ]))

    plate = [f'<rect width="400" height="300" fill="{CREAM}"/>',
             f'<ellipse cx="200" cy="170" rx="180" ry="112" fill="{WHITE}" stroke="{GOLD}" stroke-width="5"/>',
             f'<ellipse cx="200" cy="170" rx="150" ry="88" fill="none" stroke="{AMBER}" stroke-width="3"/>']
    for (x, y) in [(120, 140), (190, 120), (260, 140), (140, 200), (215, 195), (285, 200)]:
        plate.append(momo(x, y, 34))
    plate += [f'<circle cx="335" cy="98" r="30" fill="{WHITE}" stroke="{GOLD}" stroke-width="3"/>',
              f'<circle cx="335" cy="98" r="22" fill="#D2502A"/>',
              text(335, 50, "achar", 16, CHERRY, "bold", "middle"),
              text(20, 32, "Momo plate · 10 pcs", 18, NAVY, "bold")]
    A["momo-plate.svg"] = svg(400, 300, "A plate of momos with achar", "".join(plate))

    hat = (f'<path d="M110,92 Q96,46 130,50 Q140,22 160,30 Q178,14 194,32 Q222,26 212,58 Q232,74 200,94 Z" fill="{WHITE}" stroke="#C9CFD8" stroke-width="3"/>'
           f'<rect x="108" y="86" width="96" height="20" rx="4" fill="{WHITE}" stroke="#C9CFD8" stroke-width="3"/>')
    didi = [f'<rect width="300" height="300" fill="{PINK}"/>',
            f'<g transform="translate(-6,8)">{face(156, 138, 46, "#1F140E", "long", shirt=WHITE)}</g>',
            f'<g transform="translate(-6,8)">{hat}</g>',
            f'<path d="M110,236 h80 v64 h-80 Z" fill="{CHERRY}"/>',
            f'<path d="M118,236 L150,216 L182,236" fill="none" stroke="{CHERRY}" stroke-width="5"/>',
            f'<circle cx="150" cy="268" r="10" fill="{GOLD}"/>',
            text(150, 28, "Chef Didi", 22, CHERRY, "bold", "middle")]
    A["chef-didi.svg"] = svg(300, 300, "Chef Didi of Momo House", "".join(didi))

    th = [f'<rect width="400" height="300" fill="{SKY}"/>',
          '<rect x="0" y="70" width="110" height="190" fill="#B5553C"/>', '<rect x="290" y="60" width="110" height="200" fill="#C77A48"/>',
          '<rect x="110" y="110" width="70" height="150" fill="#D9A066"/>', '<rect x="220" y="100" width="70" height="160" fill="#9C4A3A"/>']
    for x, y in [(15, 90), (60, 90), (15, 150), (60, 150), (305, 80), (350, 80), (305, 140), (350, 140), (122, 130), (232, 120)]:
        th.append(f'<rect x="{x}" y="{y}" width="32" height="38" fill="#FFE7A3" stroke="#5A2A1A" stroke-width="3"/>')
    th += ['<rect y="260" width="400" height="40" fill="#8C8C8C"/>', '<path d="M180,260 L200,170 L220,260 Z" fill="#A9A9A9"/>',
           prayer_flags(0, 40, 400, 30, 12, 20),
           f'<rect x="12" y="206" width="90" height="26" fill="{CHERRY}"/>', text(57, 225, "TREKS", 15, WHITE, "bold", "middle"),
           f'<rect x="298" y="206" width="94" height="26" fill="{TEAL}"/>', text(345, 225, "MOMO 150", 15, WHITE, "bold", "middle"),
           f'<rect x="130" y="270" width="140" height="24" rx="6" fill="{NAVY}"/>', text(200, 288, "Thamel", 16, WHITE, "bold", "middle")]
    A["thamel.svg"] = svg(400, 300, "A busy street in Thamel with prayer flags", "".join(th))

    sw = [f'<rect width="400" height="300" fill="{SKY}"/>',
          '<path d="M0,300 Q200,150 400,300 Z" fill="#4E7D4A"/>', '<path d="M30,300 Q200,185 370,300 Z" fill="#5E9156"/>',
          '<path d="M118,196 A82,62 0 0 1 282,196 Z" fill="#FAFAF7" stroke="#C9CFD8" stroke-width="3"/>',
          '<rect x="104" y="196" width="192" height="14" fill="#E6E2D6"/>',
          '<rect x="168" y="112" width="64" height="30" fill="#E8C66A"/>', stupa_eyes(200, 128, 16),
          '<path d="M174,112 L200,34 L226,112 Z" fill="#E1B341"/>']
    for i in range(6):
        sw.append(f'<rect x="{180 + i * 1.5:.1f}" y="{100 - i * 12}" width="{40 - i * 3}" height="5" fill="#B88A1E"/>')
    sw += ['<path d="M195,34 h10 l-5,-14 Z" fill="#E1B341"/>',
           prayer_flags(200, 40, 20, 170, 10, 6), prayer_flags(200, 40, 380, 170, 10, 6),
           f'<rect x="120" y="262" width="160" height="28" rx="6" fill="{NAVY}"/>', text(200, 282, "Swayambhu", 17, WHITE, "bold", "middle")]
    A["swayambhu.svg"] = svg(400, 300, "Swayambhunath stupa on its hill", "".join(sw))

    pd = [f'<rect width="400" height="300" fill="#F7E3C4"/>', '<rect y="262" width="400" height="38" fill="#C9B38E"/>',
          pagoda(110, 262, 130, 3, CHERRY), pagoda(290, 262, 110, 2, "#7A3B1E"),
          '<path d="M0,262 h400" stroke="#8C7A5C" stroke-width="3"/>',
          f'<rect x="95" y="268" width="210" height="26" rx="6" fill="{NAVY}"/>', text(200, 287, "Patan Durbar Square", 15, WHITE, "bold", "middle")]
    for x in (22, 58, 342, 378):  # dots stay clear of the label, even with a wider fallback font
        pd.append(f'<circle cx="{x}" cy="282" r="5" fill="#7A6A55"/>')
    A["patan-durbar.svg"] = svg(400, 300, "Temples at Patan Durbar Square", "".join(pd))

    bo = [f'<rect width="400" height="300" fill="{SKY}"/>', '<rect y="230" width="400" height="70" fill="#D8D2C2"/>',
          '<rect x="40" y="214" width="320" height="18" fill="#EDE8DC"/>', '<rect x="60" y="198" width="280" height="18" fill="#F4F0E6"/>',
          '<path d="M80,200 A120,84 0 0 1 320,200 Z" fill="#FFFFFF" stroke="#C9CFD8" stroke-width="3"/>',
          '<rect x="164" y="96" width="72" height="30" fill="#E8C66A"/>', stupa_eyes(200, 112, 18),
          '<path d="M170,96 L200,30 L230,96 Z" fill="#E1B341"/>',
          prayer_flags(200, 34, 10, 190, 12, 4), prayer_flags(200, 34, 390, 190, 12, 4),
          f'<rect x="140" y="258" width="120" height="28" rx="6" fill="{NAVY}"/>', text(200, 278, "Boudha", 17, WHITE, "bold", "middle")]
    for x in range(52, 360, 34):
        bo.append(f'<rect x="{x}" y="232" width="18" height="22" rx="3" fill="{CHERRY}"/>')
    A["boudha.svg"] = svg(400, 300, "Boudhanath stupa with prayer flags", "".join(bo))

    A["everest.svg"] = mountain_scene("Mount Everest", [
        ("0,240 90,140 160,240", "#7E8FA8", ""),
        ("90,240 220,40 350,240", "#5D6F8C", "220,40 186,95 205,88 220,104 236,86 252,94"),
        ("260,240 330,150 400,240", "#8597B1", "")], "#BFD9F2", "Everest", "8,849 m")
    A["annapurna.svg"] = mountain_scene("Annapurna range", [
        ("0,240 70,110 140,240", "#6E7F99", "70,110 55,138 70,132 85,140"),
        ("90,240 190,70 290,240", "#5A6B86", "190,70 166,110 182,104 192,118 206,102 214,110"),
        ("230,240 320,100 400,240", "#6E7F99", "320,100 300,132 318,126 330,136 340,130")], "#F6D8B8", "Annapurna", "8,091 m")
    A["langtang.svg"] = mountain_scene("Langtang valley", [
        ("0,240 120,120 240,240", "#6A8C6A", "120,120 104,142 120,138 134,146"),
        ("160,240 280,90 400,240", "#587B66", "280,90 258,120 276,114 290,126 304,116")], "#CFE8E2", "Langtang", "7,234 m")

    for kind, name in (("aarav", "Aarav"), ("sunita", "Sunita Gurung"), ("rajan", "Rajan")):
        A[f"avatar-{kind}.svg"] = svg(200, 200, f"Avatar of {name}", avatar_body(kind), par="none")

    # D1-FF3 target: a picture of an unstyled page to rebuild (h1, image, 2 lists, a table, a link)
    serif = "Times New Roman, Times, serif"
    inner = [text(40, 92, "Didi's Kitchen Corner", 34, "#000", "bold", family=serif),
             f'<rect x="40" y="112" width="150" height="150" fill="{PINK}" stroke="#999"/>',
             f'<g transform="translate(40,112) scale(0.5)">{face(150, 146, 46, "#1F140E", "long", shirt=WHITE)}{hat}</g>',
             text(40, 296, "Our momos", 24, "#000", "bold", family=serif)]
    for i, s in enumerate(["Chicken momo", "Veg momo", "Buff momo"]):
        inner.append(f'<circle cx="68" cy="{326 + i * 26 - 6}" r="3.5" fill="#000"/>' + text(82, 326 + i * 26, s, 17, "#000", family=serif))
    inner.append(text(40, 430, "How to order", 24, "#000", "bold", family=serif))
    for i, s in enumerate(["Choose your momo.", "Tell Didi at the counter.", "Pay and enjoy."]):
        inner.append(text(60, 460 + i * 26, f"{i + 1}. {s}", 17, "#000", family=serif))
    inner.append(text(40, 566, "Prices", 24, "#000", "bold", family=serif))
    rows = [("Item", "Price"), ("Steam momo", "Rs. 150"), ("Fried momo", "Rs. 180"), ("Jhol momo", "Rs. 200")]
    for r, (a, b) in enumerate(rows):
        y = 582 + r * 30
        inner.append(f'<rect x="40" y="{y}" width="170" height="30" fill="none" stroke="#777"/><rect x="210" y="{y}" width="110" height="30" fill="none" stroke="#777"/>')
        wgt = "bold" if r == 0 else "normal"
        inner.append(text(125 if r == 0 else 48, y + 21, a, 17, "#000", wgt, "middle" if r == 0 else "start", family=serif))
        inner.append(text(265 if r == 0 else 218, y + 21, b, 17, "#000", wgt, "middle" if r == 0 else "start", family=serif))
    inner.append(text(40, 744, "Visit Momo House", 17, "#0000EE", family=serif, extra=' text-decoration="underline"'))
    inner.append('<path d="M40,747 h132" stroke="#0000EE" stroke-width="1.2"/>')
    A["mystery-target.svg"] = svg(600, 800, "Mystery page to rebuild: Didi's Kitchen Corner",
                                  browser_frame(600, 800, "mystery-page/index.html", "".join(inner)))

    nb = [f'<rect width="400" height="300" fill="#6B4A2E"/>', '<rect x="16" y="16" width="368" height="268" fill="#C9A06A"/>']
    for x in range(30, 380, 22):
        for y in range(30, 280, 22):
            nb.append(f'<circle cx="{x + (y % 44) / 4}" cy="{y}" r="1.4" fill="#A9804F"/>')
    notes = [(38, 38, -4, "#FFF7B0", "EXAM", "Sunday 10 am"), (148, 34, 3, PINK, "CANTEEN", "Momo day Thu"),
             (262, 40, -2, TINT, "LAB", "Room 2 open"), (70, 160, 2, "#DDF2DF", "EVENT", "Hackathon Fri"),
             (200, 156, -3, WHITE, "LOST", "Blue water bottle")]
    for x, y, rot, col, head, sub in notes:
        nb.append(f'<g transform="rotate({rot} {x + 50} {y + 50})"><rect x="{x}" y="{y}" width="104" height="96" fill="{col}" stroke="#00000022"/>'
                  + text(x + 52, y + 36, head, 18, NAVY, "bold", "middle") + text(x + 52, y + 64, sub, 12, DECO, "normal", "middle")
                  + f'<circle cx="{x + 52}" cy="{y + 10}" r="6" fill="{CHERRY}"/></g>')
    nb.append(f'<rect x="300" y="240" width="76" height="30" rx="4" fill="{NAVY}"/>' + text(338, 260, "TSI", 16, WHITE, "bold", "middle"))
    A["notice-board.svg"] = svg(400, 300, "TSI notice board with pinned notes", "".join(nb))

    gh = [f'<rect width="400" height="300" fill="{SKY}"/>', prayer_flags(0, 50, 400, 60, 12, 12),
          '<rect x="80" y="90" width="240" height="180" fill="#B5553C"/>',
          '<path d="M60,96 L200,50 L340,96 Z" fill="#5A2A1A"/>', '<rect x="60" y="160" width="280" height="10" fill="#5A2A1A"/>']
    for x in (100, 170, 240):
        gh.append(f'<rect x="{x}" y="108" width="40" height="40" fill="#FFE7A3" stroke="#5A2A1A" stroke-width="4"/>')
    for x in (100, 240):
        gh.append(f'<rect x="{x}" y="186" width="40" height="40" fill="#FFE7A3" stroke="#5A2A1A" stroke-width="4"/>')
    gh += ['<rect x="176" y="196" width="48" height="74" fill="#5A2A1A"/>', '<rect y="270" width="400" height="30" fill="#8C8C8C"/>',
           f'<rect x="120" y="66" width="160" height="24" fill="{CHERRY}" transform="translate(0,-2)"/>',
           text(200, 82, "THAMEL GUESTHOUSE", 13, WHITE, "bold", "middle"),
           '<circle cx="40" cy="250" r="22" fill="#3F6B3C"/>', '<circle cx="362" cy="250" r="22" fill="#3F6B3C"/>']
    A["guesthouse.svg"] = svg(400, 300, "Thamel Guesthouse building", "".join(gh))

    rd = [f'<rect width="400" height="300" fill="{AMBER}"/>', '<rect y="210" width="400" height="90" fill="#B98B5E"/>',
          '<rect x="250" y="40" width="110" height="90" fill="#BFD9F2" stroke="#7A3B1E" stroke-width="8"/>',
          '<path d="M250,85 h110 M305,40 v90" stroke="#7A3B1E" stroke-width="5"/>',
          '<rect x="40" y="150" width="200" height="70" rx="8" fill="{w}"/>'.replace("{w}", WHITE),
          '<rect x="40" y="110" width="24" height="120" fill="#7A3B1E"/>', '<rect x="40" y="200" width="200" height="30" fill="#7A3B1E"/>',
          f'<rect x="70" y="140" width="60" height="26" rx="10" fill="{TINT}"/>', f'<rect x="140" y="140" width="60" height="26" rx="10" fill="{TINT}"/>',
          f'<rect x="80" y="166" width="160" height="40" fill="{CHERRY}"/>',
          '<rect x="270" y="170" width="60" height="50" fill="#7A3B1E"/>', '<circle cx="300" cy="160" r="12" fill="#FFE7A3"/>',
          f'<rect x="14" y="16" width="150" height="30" rx="6" fill="{NAVY}"/>', text(89, 37, "Deluxe room", 16, WHITE, "bold", "middle"),
          text(386, 286, "Rs. 3,500 / night", 15, WHITE, "bold", "end")]
    A["room-deluxe.svg"] = svg(400, 300, "Deluxe room with a double bed", "".join(rd))

    # ---------- Day 2 only ----------
    hero = [f'<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="{NAVY}"/><stop offset="0.55" stop-color="{DECO}"/>'
            f'<stop offset="1" stop-color="{CHERRY}"/></linearGradient></defs>',
            '<rect width="1200" height="400" fill="url(#g)"/>']
    for i in range(14):
        hero.append(f'<circle cx="{40 + i * 46}" cy="{360 - (i % 3) * 18}" r="3" fill="{GOLD}" opacity="0.6"/>')
    hero += ['<ellipse cx="900" cy="300" rx="250" ry="62" fill="#B07A3E"/>', '<rect x="650" y="210" width="500" height="90" fill="#C48A48"/>',
             '<ellipse cx="900" cy="210" rx="250" ry="62" fill="#D9A866"/>', '<ellipse cx="900" cy="210" rx="224" ry="50" fill="#F2E3C4"/>']
    for x in range(660, 1150, 30):
        hero.append(f'<path d="M{x},212 v88" stroke="#A9733A" stroke-width="3" opacity="0.6"/>')
    for (x, y) in [(790, 200), (870, 186), (950, 186), (1030, 200), (830, 230), (910, 222), (990, 230)]:
        hero.append(momo(x, y, 34))
    for x in (800, 880, 960, 1040):
        hero.append(steam(x, 150, 90, 0.75, WHITE, 7))
    A["hero-momo.svg"] = svg(1200, 400, "Momos steaming in a bamboo basket", "".join(hero))

    tb = [f'<rect width="400" height="300" fill="{SKY}"/>', '<rect y="262" width="400" height="38" fill="#9AA3AE"/>',
          '<rect x="70" y="60" width="260" height="202" fill="#F4F0E6" stroke="#B9C2CF" stroke-width="3"/>',
          f'<rect x="70" y="60" width="260" height="34" fill="{NAVY}"/>', text(200, 84, "TECH SKILLS INSTITUTE", 16, WHITE, "bold", "middle")]
    for row in range(3):
        for col in range(4):
            tb.append(f'<rect x="{90 + col * 58}" y="{108 + row * 44}" width="44" height="30" fill="#BFD9F2" stroke="{DECO}" stroke-width="2"/>')
    tb += ['<rect x="176" y="212" width="48" height="50" fill="#7A3B1E"/>', f'<rect x="168" y="204" width="64" height="8" fill="{CHERRY}"/>',
           '<circle cx="40" cy="244" r="24" fill="#3F6B3C"/>', '<circle cx="362" cy="244" r="24" fill="#3F6B3C"/>',
           text(200, 290, "Dillibazar, Kathmandu", 14, NAVY, "bold", "middle")]
    A["tsi-building.svg"] = svg(400, 300, "The TSI building in Dillibazar", "".join(tb))

    dp = [f'<rect width="800" height="40" fill="{CHERRY}"/>']
    for i in range(20):
        x = i * 40
        dp.append(f'<path d="M{x},40 L{x + 20},6 L{x + 40},40 Z" fill="{NAVY}"/>')
        dp.append(f'<path d="M{x + 20},14 L{x + 28},26 L{x + 20},38 L{x + 12},26 Z" fill="{GOLD}"/>')
        dp.append(f'<circle cx="{x + 40}" cy="10" r="4" fill="{WHITE}"/>')
    A["decorative-pattern.svg"] = svg(800, 40, "Decorative dhaka pattern strip", "".join(dp))

    km = [f'<rect width="600" height="450" fill="#EEF1E6"/>',
          '<path d="M0,330 C120,300 180,380 300,340 S480,300 600,360" fill="none" stroke="#8DB8E0" stroke-width="12"/>',
          text(560, 386, "Bagmati", 14, "#3D6E9E", "bold", "end"),
          '<ellipse cx="300" cy="215" rx="230" ry="160" fill="none" stroke="#E2A23A" stroke-width="10"/>',
          text(300, 48, "Ring Road", 15, "#9A701F", "bold", "middle")]
    pins = [("TSI · Dillibazar", 330, 200, CHERRY), ("Thamel", 255, 160, NAVY), ("Swayambhu", 120, 175, TEAL),
            ("Patan", 285, 340, "#7A3B1E"), ("Boudha", 470, 170, GREEN)]
    for name, x, y, col in pins:
        km.append(f'<path d="M{x},{y} c-14,-18 -16,-26 -16,-32 a16,16 0 0 1 32,0 c0,6 -2,14 -16,32 Z" fill="{col}"/>'
                  f'<circle cx="{x}" cy="{y - 32}" r="6" fill="{WHITE}"/>')
        km.append(f'<rect x="{x + 14}" y="{y - 46}" width="{len(name) * 9 + 16}" height="24" rx="5" fill="{WHITE}" stroke="{col}" stroke-width="2"/>'
                  + text(x + 22, y - 29, name, 14, col, "bold"))
    km += [f'<rect x="14" y="400" width="190" height="36" rx="6" fill="{NAVY}"/>', text(109, 424, "Kathmandu map", 17, WHITE, "bold", "middle"),
           '<path d="M560,400 l10,-24 l10,24 l-10,-6 Z" fill="#555"/>', text(570, 440, "N", 14, "#555", "bold", "middle")]
    A["kathmandu-map.svg"] = svg(600, 450, "Map of Kathmandu: Ring Road and 5 places", "".join(km))

    ps = [f'<rect width="640" height="360" fill="#2B1D14"/>', '<ellipse cx="320" cy="300" rx="230" ry="40" fill="#000" opacity="0.35"/>',
          '<rect x="110" y="190" width="420" height="100" fill="#B07A3E"/>', '<ellipse cx="320" cy="290" rx="210" ry="40" fill="#B07A3E"/>',
          '<ellipse cx="320" cy="190" rx="210" ry="46" fill="#D9A866"/>', '<ellipse cx="320" cy="190" rx="190" ry="36" fill="#F2E3C4"/>']
    for (x, y) in [(220, 186), (290, 176), (360, 176), (430, 186), (260, 206), (330, 202), (400, 206)]:
        ps.append(momo(x, y, 28))
    for x in (230, 300, 370, 440):
        ps.append(steam(x, 140, 90, 0.7, WHITE, 8))
    ps += [f'<circle cx="320" cy="80" r="34" fill="{CHERRY}" opacity="0.92"/>', '<path d="M308,62 L340,80 L308,98 Z" fill="#FFFFFF"/>',
           text(24, 340, "Momo House · fresh from the steamer", 18, AMBER, "bold")]
    A["poster-momo-steam.svg"] = svg(640, 360, "Video poster: momos in a steamer", "".join(ps))

    def project(title_txt, sub, accent, kind):
        inner = [f'<rect x="10" y="46" width="380" height="40" fill="{accent}"/>', text(26, 72, title_txt, 17, WHITE, "bold")]
        if kind == 1:
            inner += [f'<rect x="26" y="102" width="160" height="110" rx="6" fill="{AMBER}"/>', momo(106, 160, 34),
                      f'<rect x="200" y="104" width="170" height="14" rx="4" fill="{NAVY}"/>',
                      f'<rect x="200" y="128" width="150" height="10" rx="4" fill="#B9C2CF"/>',
                      f'<rect x="200" y="146" width="160" height="10" rx="4" fill="#B9C2CF"/>',
                      f'<rect x="200" y="176" width="90" height="30" rx="6" fill="{CHERRY}"/>', text(245, 196, "Order", 14, WHITE, "bold", "middle")]
        else:
            for r in range(4):
                y = 104 + r * 28
                fill = NAVY if r == 0 else (TINT if r % 2 else WHITE)
                ink = WHITE if r == 0 else NAVY
                inner.append(f'<rect x="26" y="{y}" width="348" height="28" fill="{fill}" stroke="#B9C2CF"/>')
                cells = [("Item", "Price"), ("Chowmein", "Rs. 120"), ("Momo", "Rs. 150"), ("Tea", "Rs. 30")][r]
                inner.append(text(40, y + 19, cells[0], 14, ink, "bold" if r == 0 else "normal") + text(360, y + 19, cells[1], 14, ink, "bold" if r == 0 else "normal", "end"))
        inner.append(text(200, 236, sub, 13, DECO, "normal", "middle"))
        return svg(400, 250, f"Project screenshot: {title_txt}", browser_frame(400, 250, "rajan.dev/" + title_txt.lower().replace(" ", "-"), "".join(inner)))

    A["project-1.svg"] = project("Momo House", "Project 1 · HTML + CSS restaurant site", CHERRY, 1)
    A["project-2.svg"] = project("TSI Canteen Menu", "Project 2 · a styled price table", TEAL, 2)

    # D2-FF1 target: the ID card to recreate, with box-model measurements written around it
    card = [f'<rect width="640" height="400" fill="#F4F6FA"/>',
            f'<rect x="140" y="80" width="360" height="220" rx="12" fill="{WHITE}" stroke="{NAVY}" stroke-width="2"/>',
            f'<path d="M140,92 a12,12 0 0 1 12,-12 h336 a12,12 0 0 1 12,12 v32 h-360 Z" fill="{NAVY}"/>',
            text(320, 109, "TECH SKILLS INSTITUTE", 16, WHITE, "bold", "middle", extra=' letter-spacing="2"'),
            f'<clipPath id="av"><circle cx="206" cy="194" r="40"/></clipPath>',
            f'<g clip-path="url(#av)"><g transform="translate(166,154) scale(0.4)">{avatar_body("aarav")}</g></g>',
            f'<circle cx="206" cy="194" r="40" fill="none" stroke="{CHERRY}" stroke-width="3"/>',
            text(262, 180, "Aarav", 26, NAVY, "bold"),
            text(262, 202, "AI-Powered Full Stack Developer", 13, DECO),
            text(262, 226, "ID: TSI-W2-014", 14, NAVY, "bold"),
            text(262, 246, "Batch: Morning (Sun–Thu)", 13, DECO),
            f'<path d="M140,282 h360 v6 a12,12 0 0 1 -12,12 h-336 a12,12 0 0 1 -12,-12 Z" fill="{CHERRY}"/>']
    g = "#6B7A90"
    card += [f'<path d="M140,330 h360 M140,322 v16 M500,322 v16" stroke="{g}" stroke-width="1.5" fill="none"/>',
             text(320, 352, "width: 360px · padding: 16px · border: 2px solid navy · border-radius: 12px", 13, g, "normal", "middle"),
             f'<path d="M110,80 v220 M102,80 h16 M102,300 h16" stroke="{g}" stroke-width="1.5" fill="none"/>',
             text(96, 194, "220px", 13, g, "normal", "end"),
             text(320, 50, "Target: TSI ID card (avatar 80px round · name 26px bold)", 15, NAVY, "bold", "middle"),
             text(320, 380, "Colours: navy #14213D · cherry #990011 · text #2A3F63", 13, g, "normal", "middle")]
    A["tsi-id-card-target.svg"] = svg(640, 400, "Target picture: TSI ID card for Aarav", "".join(card))

    cs = [f'<rect width="400" height="300" fill="#F7E3C4"/>', '<rect x="40" y="70" width="320" height="200" fill="#9C4A3A"/>',
          '<path d="M20,78 L200,30 L380,78 Z" fill="#5A2A1A"/>',
          f'<rect x="110" y="44" width="180" height="26" fill="{GOLD}"/>', text(200, 63, "PATAN CRAFT SHOP", 14, NAVY, "bold", "middle"),
          '<rect x="70" y="96" width="110" height="80" fill="#5A2A1A"/>', '<rect x="220" y="96" width="110" height="80" fill="#5A2A1A"/>']
    for x0 in (70, 220):
        for i in range(5):
            cs.append(f'<path d="M{x0 + 10 + i * 22},100 v72" stroke="#C48A48" stroke-width="5"/>')
        cs.append(f'<path d="M{x0},136 h110" stroke="#C48A48" stroke-width="5"/>')
    cs += ['<rect y="270" width="400" height="30" fill="#C9B38E"/>']
    for x, h, col in [(80, 60, "#B5553C"), (130, 44, "#C77A48"), (180, 70, "#9C4A3A"), (250, 50, "#B5553C"), (300, 64, "#D9A066")]:
        cs.append(f'<path d="M{x - 18},{270} q-8,-{h * 0.6} 6,-{h} h24 q14,{h * 0.4} 6,{h} Z" fill="{col}" stroke="#5A2A1A" stroke-width="2"/>')
    A["craft-shop.svg"] = svg(400, 300, "Patan craft shop with carved windows and pots", "".join(cs))

    A["favicon.svg"] = svg(64, 64, "Momo House favicon", f'<rect width="64" height="64" rx="14" fill="{CHERRY}"/>' + momo(32, 38, 20))

    return A


DAY1 = ["logo-momo-house.svg", "momo.svg", "momo-plate.svg", "chef-didi.svg", "thamel.svg", "swayambhu.svg",
        "patan-durbar.svg", "boudha.svg", "everest.svg", "annapurna.svg", "langtang.svg", "avatar-aarav.svg",
        "avatar-sunita.svg", "mystery-target.svg", "notice-board.svg", "guesthouse.svg", "room-deluxe.svg"]
DAY2 = ["logo-momo-house.svg", "momo.svg", "momo-plate.svg", "chef-didi.svg", "avatar-aarav.svg", "avatar-sunita.svg",
        "avatar-rajan.svg", "hero-momo.svg", "tsi-building.svg", "decorative-pattern.svg", "kathmandu-map.svg",
        "poster-momo-steam.svg", "project-1.svg", "project-2.svg", "tsi-id-card-target.svg", "craft-shop.svg", "favicon.svg"]


def make_wav(path, seconds=2.0, rate=22050):
    n = int(seconds * rate)
    frames = bytearray()
    for i in range(n):
        t = i / rate
        env = min(1.0, t / 0.005) * math.exp(-3.2 * t) * (1 - t / seconds) ** 0.5
        v = 0.55 * math.sin(2 * math.pi * 880 * t) + 0.35 * math.sin(2 * math.pi * 1320 * t) * math.exp(-1.5 * t)
        frames += struct.pack("<h", int(max(-1, min(1, v * env)) * 30000))
    with wave.open(path, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(rate)
        w.writeframes(bytes(frames))


def find_ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        sys.exit("BLOCKED: no ffmpeg. Run: pip install imageio-ffmpeg")


def make_mp4(path, seconds=4, fps=24, w=640, h=360):
    from PIL import Image, ImageDraw, ImageFilter
    ff = find_ffmpeg()
    cmd = [ff, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{w}x{h}", "-r", str(fps),
           "-i", "-", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-pix_fmt", "yuv420p",
           "-profile:v", "main", "-movflags", "+faststart", path]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    puffs = [(230 + (k % 4) * 70, (k * 37) % 100 / 100.0) for k in range(12)]
    for f in range(seconds * fps):
        t = f / fps
        img = Image.new("RGB", (w, h), (43, 29, 20))
        d = ImageDraw.Draw(img)
        d.ellipse((110, 250, 530, 330), fill=(176, 122, 62))
        d.rectangle((110, 190, 530, 290), fill=(176, 122, 62))
        d.ellipse((110, 144, 530, 236), fill=(217, 168, 102))
        d.ellipse((130, 154, 510, 226), fill=(242, 227, 196))
        for (x, y) in [(220, 186), (290, 176), (360, 176), (430, 186), (260, 206), (330, 202), (400, 206)]:
            d.ellipse((x - 28, y - 22, x + 28, y + 18), fill=(251, 243, 228), outline=(226, 207, 168), width=2)
            d.line((x, y - 20, x, y + 2), fill=(226, 207, 168), width=2)
        layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        for x0, phase in puffs:
            p = (t / 2.0 + phase) % 1.0
            y = 170 - p * 170
            x = x0 + 14 * math.sin(2 * math.pi * (p * 1.5 + phase))
            r = 14 + 26 * p
            a = int(150 * (1 - p))
            ld.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, a))
        layer = layer.filter(ImageFilter.GaussianBlur(6))
        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
        d = ImageDraw.Draw(img)
        d.text((24, 326), "Momo House - fresh from the steamer", fill=(245, 235, 216))
        proc.stdin.write(img.tobytes())
    proc.stdin.close()
    if proc.wait() != 0:
        sys.exit("BLOCKED: ffmpeg failed to write the MP4")


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--root", default=os.path.normpath(os.path.join(here, "..", "..")), help="path to week2/")
    args = ap.parse_args()
    assets = build_svgs()
    for day, names in (("day1", DAY1), ("day2", DAY2)):
        out = os.path.join(args.root, day, "assets", "images")
        os.makedirs(out, exist_ok=True)
        for name in names:
            with open(os.path.join(out, name), "w", encoding="utf-8", newline="\n") as fh:
                fh.write(assets[name])
    media = os.path.join(args.root, "day2", "assets", "media")
    os.makedirs(media, exist_ok=True)
    make_wav(os.path.join(media, "canteen-bell.wav"))
    make_mp4(os.path.join(media, "momo-steam.mp4"))
    print(f"wrote {len(DAY1)} day1 SVGs, {len(DAY2)} day2 SVGs, canteen-bell.wav, momo-steam.mp4")


if __name__ == "__main__":
    main()
