"""check_pack.py — checks a Week 2 code pack against PLAN v2 (§3, §4, §6 A0).

Usage:
  python check_pack.py --day 1 --root <path>         # <path> = week2/ or week2/day1 (both work)
  python check_pack.py --day 2 --root <path> --only D2-04 --verbose
Options:
  --only ID[,ID]    check only these ids (pack-level checks still run)
  --no-lint         skip npx html-validate / htmlhint (fast; offline)
  --allow-missing   exit 0 when the only problems are MISSING (half-built pack)
  --verbose         also list INFO lines (e.g. starter links that do not resolve; usually planted bugs)
Exit code: 0 = pass, 1 = at least one FAIL or MISSING.

Checks (PLAN §6 A0):
  1. every id in §4 has its folder and the files §3 lists              -> MISSING when absent
  2. every solution HTML passes `npx html-validate` (_tools/.htmlvalidate.json) and HTMLHint (.htmlhintrc),
     and every href / src / poster / CSS url() in a solution resolves (exact case, #anchors too)
  3. every bug-hunt has solution/BUGS.md with the §4 bug count; its README says "N bugs"
  4. the starter differs from the solution at each BUGS.md line (±1 line)
  5. no starter code file contains the words "bug", "fix" or "TODO: bug"
  6. every asset file copied into an exercise exists in assets/ and is byte-identical (nobody redraws)
  7. the master assets of §3.3 exist and are under the size limits
BUGS.md format (one table; extra columns are fine):
  | # | File | Line | Bug | Fix | Tag |
  | 1 | index.html | 1 | `<!DOCTYPE html>` missing | add it | D(HH) |
  File is relative to the exercise starter folder. Line = the starter line (several numbers allowed: "12, 30").
"""
import argparse
import difflib
import filecmp
import html.parser
import json
import os
import re
import shutil
import subprocess
import sys
from urllib.parse import unquote

HTML_VALIDATE = "html-validate@11.17.0"
HTMLHINT = "htmlhint@1.9.2"

# ---------------------------------------------------------------- the pack spec (PLAN v2 §3.1 / §3.2 / §4)
# kind: cw = classwork, ff = fast finisher, hw = homework (solution in homework/_solutions/<id>/), md = single file
# files: starter files ("dir/" = a folder that must exist). sol: solution files; "=" means "every starter file except
# README.md / my-findings.md". bugs: planted-bug count (bug-hunts only).
MOMO4 = ["images/logo-momo-house.svg", "images/momo.svg", "images/momo-plate.svg", "images/chef-didi.svg"]
P1 = ["images/logo-momo-house.svg", "images/momo.svg", "images/momo-plate.svg", "images/thamel.svg", "images/swayambhu.svg"]

DAY1 = [
    ("D1-00-setup-check", "cw", ["README.md", "index.html"], "=", 0),
    ("D1-01-see-the-letters-arrive", "cw", ["README.md", "my-findings.md", "index.html", "style.css"] + P1, ["sample-findings.md"], 0),
    ("D1-02-emmet-speed-drill", "cw", ["README.md", "index.html", "target.html"], ["index.html"], 0),
    ("D1-03-skeleton-from-memory", "cw", ["README.md", "index.html"], "=", 0),
    ("D1-04-broken-skeleton", "cw", ["README.md", "index.html"], "=", 6),
    ("D1-05-grandmothers-note", "cw", ["README.md", "index.html"], "=", 0),
    ("D1-06-canteen-news-bughunt", "cw", ["README.md", "index.html"], "=", 5),
    ("D1-07-broken-lists", "cw", ["README.md", "index.html"], "=", 4),
    ("D1-08-momo-recipe", "cw", ["README.md", "index.html", "images/momo-plate.svg"], "=", 0),
    ("D1-09-broken-paths", "cw", ["README.md", "index.html", "pages/about.html", "pages/menu.html",
                                  "images/logo-momo-house.svg", "images/momo.svg", "images/thamel.svg"], "=", 6),
    ("D1-10-kathmandu-gallery", "cw", ["README.md", "index.html", "images/swayambhu.svg", "images/patan-durbar.svg"], "=", 0),
    ("D1-11-broken-timetable", "cw", ["README.md", "index.html"], "=", 5),
    ("D1-12-exam-results-table", "cw", ["README.md", "index.html"], "=", 0),
    ("D1-13-broken-signup-form", "cw", ["README.md", "index.html"], "=", 6),
    ("D1-14-extend-order-slip", "cw", ["README.md", "index.html"], "=", 0),
    ("D1-15-momo-house-repair", "cw", ["README.md", "index.html", "menu.html", "order.html", "about.html"] + MOMO4, "=", 10),
    ("D1-16-validate-self-audit", "cw", ["README.md"], None, 0),
    ("D1-FF1-entity-art", "ff", ["README.md", "index.html"], "=", 0),
    ("D1-FF2-table-of-contents", "ff", ["README.md", "index.html"], "=", 0),
    ("D1-FF3-mystery-page", "ff", ["README.md", "target.svg", "index.html", "images/chef-didi.svg"],
     ["index.html", "images/chef-didi.svg"], 0),
    ("D1-FF4-evil-page-bughunt", "ff", ["README.md", "index.html"], "=", 8),
    ("D1-FF5-notice-board-bughunt", "ff", ["README.md", "index.html", "images/notice-board.svg"], "=", 12),
    ("D1-FF6-gallery-detail-page", "ff", ["README.md", "index.html", "places/", "images/swayambhu.svg", "images/boudha.svg",
                                         "images/thamel.svg"],
     ["index.html", "places/swayambhu.html", "images/swayambhu.svg", "images/boudha.svg", "images/thamel.svg"], 0),
    ("D1-HW1-kathmandu-treks-repair", "hw", ["README.md", "index.html", "treks.html", "booking.html", "images/everest.svg",
                                            "images/annapurna.svg", "images/langtang.svg"], "=", 12),
    ("D1-HW2-momo-house-catering-page", "hw", ["README.md", "index.html", "menu.html", "order.html", "about.html"] + MOMO4,
     ["index.html", "menu.html", "order.html", "about.html", "catering.html"] + MOMO4, 0),
    ("D1-HW3-Self-Check-and-Interview-Prep.md", "md", ["_solutions/D1-HW3-Answer-Key.md"], None, 0),
    ("D1-HW4-thamel-guesthouse-replay", "hw", ["README.md", "index.html", "booking.html", "images/guesthouse.svg",
                                             "images/room-deluxe.svg"], "=", 12),
]

OUTFITS = ["css/outfit-traditional.css", "css/outfit-modern.css", "css/outfit-night.css"]
MEDIA = ["media/canteen-bell.wav", "media/momo-steam.mp4"]
MOMO5 = MOMO4 + ["images/hero-momo.svg"]
DAY2 = [
    ("D2-00-outfit-swap", "cw", ["README.md", "index.html"] + OUTFITS, ["README-answer.md"], 0),
    ("D2-01-div-soup-to-semantic", "cw", ["README.md", "index.html"], "=", 0),
    ("D2-02-semantic-misuse-bughunt", "cw", ["README.md", "index.html"], "=", 5),
    ("D2-03-a11y-audit", "cw", ["README.md", "index.html", "images/tsi-building.svg", "images/decorative-pattern.svg"], "=", 6),
    ("D2-04-broken-media", "cw", ["README.md", "index.html", "kathmandu-map.html", "images/poster-momo-steam.svg",
                                  "images/kathmandu-map.svg"] + MEDIA, "=", 5),
    ("D2-05-media-corner", "cw", ["README.md", "index.html", "kathmandu-map.html"], "=", 0),
    ("D2-06-stylesheet-not-loading", "cw", ["README.md", "index.html", "css/style.css"], "=", 6),
    ("D2-07-restyle-the-bio", "cw", ["README.md", "index.html", "css/style.css"], "=", 0),
    ("D2-08-selector-mixups", "cw", ["README.md", "index.html", "css/style.css"], "=", 5),
    ("D2-09-selector-target-practice", "cw", ["README.md", "index.html", "css/style.css"], ["css/style.css"], 0),
    ("D2-10-units-and-colours", "cw", ["README.md", "index.html", "css/style.css"], "=", 5),
    ("D2-11-theme-the-canteen-menu", "cw", ["README.md", "index.html", "css/style.css"], "=", 0),
    ("D2-12-broken-cards", "cw", ["README.md", "index.html", "css/style.css", "images/avatar-aarav.svg",
                                  "images/avatar-sunita.svg", "images/avatar-rajan.svg"], "=", 5),
    ("D2-13-profile-card", "cw", ["README.md", "index.html", "css/style.css", "images/avatar-sunita.svg"], "=", 0),
    ("D2-14-nav-wont-behave", "cw", ["README.md", "index.html", "css/style.css", "images/logo-momo-house.svg"], "=", 5),
    ("D2-15-style-momo-house", "cw", ["README.md", "index.html", "menu.html", "order.html", "about.html", "css/style.css"] + MOMO5, "=", 0),
    ("D2-FF1-tsi-id-card", "ff", ["README.md", "target.svg", "index.html", "css/style.css", "images/avatar-aarav.svg"],
     ["index.html", "css/style.css", "images/avatar-aarav.svg"], 0),
    ("D2-FF2-hover-menu", "ff", ["README.md", "index.html", "css/style.css"], "=", 0),
    ("D2-FF3-specificity-duel", "ff", ["README.md", "index.html", "css/style.css"], ["ANSWERS.md"], 0),
    ("D2-FF4-haunted-stylesheet", "ff", ["README.md", "index.html", "css/style.css"], "=", 10),
    ("D2-FF5-lost-and-found-bughunt", "ff", ["README.md", "index.html", "kathmandu-map.html", "css/style.css",
                                            "images/kathmandu-map.svg"], "=", 11),
    ("D2-FF6-bootstrap-try-it", "ff", ["README.md", "index.html", "css/bootstrap.min.css"], ["index.html"], 0),
    ("D2-HW1-haunted-portfolio-repair", "hw", ["README.md", "index.html", "projects.html", "css/style.css",
                                              "images/avatar-rajan.svg", "images/project-1.svg", "images/project-2.svg"], "=", 12),
    ("D2-HW2-style-your-portfolio", "hw", ["README.md", "CHECKLIST.md"],
     ["index.html", "about.html", "css/style.css", "images/avatar-rajan.svg"], 0),
    ("D2-HW3-Self-Check-and-Interview-Prep.md", "md", ["_solutions/D2-HW3-Answer-Key.md"], None, 0),
    ("D2-HW4-patan-craft-shop-replay", "hw", ["README.md", "index.html", "css/style.css", "media/momo-steam.mp4",
                                             "images/craft-shop.svg", "images/poster-momo-steam.svg"], "=", 10),
]

ASSETS = {
    1: ["logo-momo-house.svg", "momo.svg", "momo-plate.svg", "chef-didi.svg", "thamel.svg", "swayambhu.svg",
        "patan-durbar.svg", "boudha.svg", "everest.svg", "annapurna.svg", "langtang.svg", "avatar-aarav.svg",
        "avatar-sunita.svg", "mystery-target.svg", "notice-board.svg", "guesthouse.svg", "room-deluxe.svg"],
    2: ["logo-momo-house.svg", "momo.svg", "momo-plate.svg", "chef-didi.svg", "avatar-aarav.svg", "avatar-sunita.svg",
        "avatar-rajan.svg", "hero-momo.svg", "tsi-building.svg", "decorative-pattern.svg", "kathmandu-map.svg",
        "poster-momo-steam.svg", "project-1.svg", "project-2.svg", "tsi-id-card-target.svg", "craft-shop.svg", "favicon.svg"],
}
EXTRA_ASSETS = {2: [("media/canteen-bell.wav", 100_000), ("media/momo-steam.mp4", 300_000),
                    ("vendor/bootstrap-5.3.3/bootstrap.min.css", None), ("vendor/bootstrap-5.3.3/LICENSE", None)]}
# copies that carry a different name from their master in assets/
ALIASES = {1: {"target.svg": "images/mystery-target.svg"},
           2: {"target.svg": "images/tsi-id-card-target.svg", "bootstrap.min.css": "vendor/bootstrap-5.3.3/bootstrap.min.css"}}
COPY_EXT = (".svg", ".wav", ".mp4", ".png", ".jpg")
CODE_EXT = (".html", ".htm", ".css", ".js")
FORBIDDEN = re.compile(r"\b(bugs?|fix|fixes|fixme)\b|todo:\s*bug", re.I)
SKIP_DIRS = {"solution", "_solutions"}

# ---------------------------------------------------------------- results


class Report:
    def __init__(self, verbose):
        self.rows = {}  # check -> [pass, fail, missing]
        self.lines = []
        self.verbose = verbose

    def add(self, check, status, msg=""):
        r = self.rows.setdefault(check, [0, 0, 0])
        r[{"PASS": 0, "FAIL": 1, "MISSING": 2}[status]] += 1
        if status != "PASS":
            self.lines.append(f"{status:7} [{check}] {msg}")

    def info(self, msg):
        if self.verbose:
            self.lines.append(f"INFO    {msg}")


def rel(path, base):
    return os.path.relpath(path, base).replace("\\", "/")


def exists_exact(path):
    """os.path.exists, but case-sensitive on Windows too (a real Linux server is)."""
    path = os.path.normpath(path)
    if not os.path.exists(path):
        return False
    drive, rest = os.path.splitdrive(os.path.abspath(path))
    cur = drive + os.sep
    for part in [p for p in rest.split(os.sep) if p]:
        try:
            if part not in os.listdir(cur):
                return False
        except OSError:
            return False
        cur = os.path.join(cur, part)
    return True


def read(path):
    with open(path, encoding="utf-8", errors="replace") as fh:
        return fh.read()


def walk_files(top, skip_solution=False):
    for dp, dns, fns in os.walk(top):
        if skip_solution:
            dns[:] = [d for d in dns if d not in SKIP_DIRS]
        for fn in fns:
            yield os.path.join(dp, fn)


# ---------------------------------------------------------------- HTML / CSS reference parsing


class RefParser(html.parser.HTMLParser):
    ATTRS = {"href", "src", "poster", "data"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs, self.ids = [], set()

    def handle_starttag(self, tag, attrs):
        for k, v in attrs:
            if k in ("id", "name") and v:
                self.ids.add(v)
            if k in self.ATTRS and v is not None:
                self.refs.append((self.getpos()[0], tag, k, v.strip()))

    handle_startendtag = handle_starttag


def parse_html(path):
    p = RefParser()
    try:
        p.feed(read(path))
        p.close()
    except Exception:  # noqa: BLE001 - a broken file must not stop the run
        pass
    return p


CSS_URL = re.compile(r"""url\(\s*['"]?([^'")]+)['"]?\s*\)|@import\s+['"]([^'"]+)['"]""")


def check_target(url, src_file, day_root, id_cache):
    """None if the reference resolves, else a reason."""
    if not url or url.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "//")):
        return None
    if re.match(r"^[A-Za-z]:[\\/]", url) or "\\" in url:
        return "is a path on one computer (backslash / drive letter)"
    if re.match(r"^[a-z][a-z0-9+.-]*:", url, re.I):
        return None
    path, _, frag = url.partition("#")
    path = unquote(path.split("?")[0])
    if path:
        base = day_root if path.startswith("/") else os.path.dirname(src_file)
        target = os.path.normpath(os.path.join(base, path.lstrip("/")))
        if os.path.isdir(target):
            target = os.path.join(target, "index.html")
        if not exists_exact(target):
            return "file not found (exact case)"
    else:
        target = src_file
    if frag and frag != "top" and target.lower().endswith((".html", ".htm")):
        if target not in id_cache:
            id_cache[target] = parse_html(target).ids
        if unquote(frag) not in id_cache[target]:
            return f'no id="{frag}" in {os.path.basename(target)}'
    return None


# ---------------------------------------------------------------- BUGS.md


def parse_bugs(path):
    """Returns (rows, error). rows = [(num, file, [lines])]."""
    rows, header = [], None
    for line in read(path).splitlines():
        if not line.strip().startswith("|"):
            if header and rows:
                break
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        low = [c.lower().strip("* ") for c in cells]
        if header is None:
            if "#" in low and any(c.startswith("line") for c in low):
                header = {name: i for i, name in enumerate(low)}
            continue
        if set(line.replace("|", "").strip()) <= set("-: "):
            continue
        num_cell = cells[header["#"]] if header["#"] < len(cells) else ""
        if not re.match(r"^\d+$", num_cell):
            continue
        fcol = next((i for n, i in header.items() if n.startswith("file")), None)
        lcol = next(i for n, i in header.items() if n.startswith("line"))
        fname = cells[fcol].strip("` ") if fcol is not None and fcol < len(cells) else "index.html"
        nums = [int(x) for x in re.findall(r"\d+", cells[lcol])] if lcol < len(cells) else []
        rows.append((int(num_cell), fname, nums))
    if header is None:
        return [], "no table with '#' and 'Line' columns"
    return rows, None


def changed_lines(starter, solution):
    a, b = read(starter).splitlines(), read(solution).splitlines()
    changed = set()
    for tag, i1, i2, _, _ in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if tag == "equal":
            continue
        if i1 == i2:  # pure insertion: the lines around it count
            changed.update({i1, i1 + 1})
        else:
            changed.update(range(i1 + 1, i2 + 1))
    return changed


# ---------------------------------------------------------------- lint via npx


def npx_json(args, cwd):
    npx = shutil.which("npx") or shutil.which("npx.cmd")
    if not npx:
        return None, "npx not found (install Node.js)"
    try:
        proc = subprocess.run([npx, "--yes"] + args, cwd=cwd, capture_output=True, text=True, encoding="utf-8",
                              errors="replace", timeout=600)
    except (OSError, subprocess.TimeoutExpired) as exc:
        return None, str(exc)
    out = proc.stdout.strip()
    start = min([i for i in (out.find("["), out.find("{")) if i >= 0], default=-1)
    if start < 0:
        return [], None if proc.returncode == 0 else (proc.stderr.strip()[:300] or "no output")
    try:
        return json.loads(out[start:]), None
    except json.JSONDecodeError:
        return None, "could not read JSON output: " + out[:200]


def lint(files, day_root, tools_dir, rep):
    if not files:
        return
    rels = [rel(f, day_root) for f in files]
    cfg = os.path.join(day_root, "_tools", ".htmlvalidate.json")
    if not os.path.exists(cfg):
        cfg = os.path.join(tools_dir, ".htmlvalidate.json")
    bad = {}
    for i in range(0, len(rels), 40):
        data, err = npx_json([HTML_VALIDATE, "--config", cfg, "--formatter", "json"] + rels[i:i + 40], day_root)
        if err:
            rep.add("html-validate", "FAIL", f"could not run: {err}")
            return
        for res in data or []:
            for m in res.get("messages", []):
                if m.get("severity", 2) >= 2:
                    bad.setdefault(rel(os.path.join(day_root, res["filePath"]), day_root), []).append(
                        f'{m.get("line")}:{m.get("column")} {m.get("message")} ({m.get("ruleId")})')
    for r in rels:
        if r in bad:
            rep.add("html-validate", "FAIL", f"{r}: " + " | ".join(bad[r][:4]) + (" …" if len(bad[r]) > 4 else ""))
        else:
            rep.add("html-validate", "PASS")
    hh = {}
    rc = os.path.join(day_root, ".htmlhintrc")
    for i in range(0, len(rels), 40):
        data, err = npx_json([HTMLHINT, "--config", rc, "--format", "json"] + rels[i:i + 40], day_root)
        if err:
            rep.add("htmlhint", "FAIL", f"could not run: {err}")
            return
        for res in data or []:
            msgs = [f'{m.get("line")}:{m.get("col")} {m.get("message")} ({m.get("rule", {}).get("id")})'
                    for m in res.get("messages", []) if m.get("type") in ("error", "warning")]
            if msgs:
                hh[rel(os.path.join(day_root, res["file"]), day_root)] = msgs
    for r in rels:
        if r in hh:
            rep.add("htmlhint", "FAIL", f"{r}: " + " | ".join(hh[r][:4]))
        else:
            rep.add("htmlhint", "PASS")


# ---------------------------------------------------------------- main checks


def resolve_day_root(root, day):
    root = os.path.abspath(root)
    cand = os.path.join(root, f"day{day}")
    if os.path.isdir(cand):
        return cand
    return root


def check_assets(day, day_root, rep):
    adir = os.path.join(day_root, "assets")
    for name in ASSETS[day]:
        p = os.path.join(adir, "images", name)
        if not exists_exact(p):
            rep.add("assets", "MISSING", f"assets/images/{name}")
        elif os.path.getsize(p) > 30_000:
            rep.add("assets", "FAIL", f"assets/images/{name} is {os.path.getsize(p)} bytes (> 30 KB)")
        else:
            rep.add("assets", "PASS")
    for relp, limit in EXTRA_ASSETS.get(day, []):
        p = os.path.join(adir, relp)
        if not exists_exact(p):
            rep.add("assets", "MISSING", f"assets/{relp}")
        elif limit and os.path.getsize(p) > limit:
            rep.add("assets", "FAIL", f"assets/{relp} is {os.path.getsize(p)} bytes (> {limit})")
        else:
            rep.add("assets", "PASS")


def asset_master(day, day_root, path):
    name = os.path.basename(path)
    adir = os.path.join(day_root, "assets")
    if name in ALIASES[day]:
        return os.path.join(adir, ALIASES[day][name])
    for sub in ("images", "media"):
        p = os.path.join(adir, sub, name)
        if os.path.exists(p):
            return p
    if name == "favicon.svg":
        return os.path.join(adir, "images", name)
    return None


def check_copies(day, day_root, rep):
    """Every image/media/vendor file inside classwork, homework and demos is an exact copy of a master asset."""
    for top in ("classwork", "homework", "instructor-demos"):
        t = os.path.join(day_root, top)
        if not os.path.isdir(t):
            continue
        for f in walk_files(t):
            name = os.path.basename(f)
            if not (name.lower().endswith(COPY_EXT) or name == "bootstrap.min.css"):
                continue
            master = asset_master(day, day_root, f)
            if master is None or not os.path.exists(master):
                rep.add("asset copies", "FAIL", f"{rel(f, day_root)}: no master file in assets/ with this name")
            elif not filecmp.cmp(f, master, shallow=False):
                rep.add("asset copies", "FAIL", f"{rel(f, day_root)}: differs from assets/{rel(master, os.path.join(day_root, 'assets'))} (redrawn?)")
            else:
                rep.add("asset copies", "PASS")


def check_pack_files(day, day_root, rep):
    for f in ["README.md", "START-HERE.md", ".vscode/settings.json", ".htmlhintrc", "_tools/.htmlvalidate.json",
              "classwork/fast-finishers/README.md", f"homework/W2D{day}-Homework-Sheet.md", "instructor-demos/README.md"]:
        rep.add("pack files", "PASS" if exists_exact(os.path.join(day_root, f)) else "MISSING", f)
    sp = os.path.join(day_root, ".vscode", "settings.json")
    if os.path.exists(sp):
        try:
            s = json.load(open(sp, encoding="utf-8"))
            ok = s.get("editor.linkedEditing") is True and s.get("editor.tabSize") == 2 and s.get("files.eol") == "\n"
            rep.add("pack files", "PASS" if ok else "FAIL", ".vscode/settings.json: needs linkedEditing true, tabSize 2, eol LF")
        except ValueError as exc:
            rep.add("pack files", "FAIL", f".vscode/settings.json is not valid JSON: {exc}")


def exercise_dirs(day_root, ex_id, kind):
    if kind == "ff":
        start = os.path.join(day_root, "classwork", "fast-finishers", ex_id)
        return start, os.path.join(start, "solution")
    if kind == "hw":
        return os.path.join(day_root, "homework", ex_id), os.path.join(day_root, "homework", "_solutions", ex_id)
    if kind == "md":
        return os.path.join(day_root, "homework", ex_id), None
    start = os.path.join(day_root, "classwork", ex_id)
    return start, os.path.join(start, "solution")


def check_exercise(day, day_root, spec, rep, sol_html):
    ex_id, kind, files, sol, nbugs = spec
    short = ex_id.split("-")[0] + "-" + ex_id.split("-")[1]
    start, sdir = exercise_dirs(day_root, ex_id, kind)
    if kind == "md":
        rep.add("folders", "PASS" if exists_exact(start) else "MISSING", f"{short}: homework/{ex_id}")
        for f in files:
            rep.add("folders", "PASS" if exists_exact(os.path.join(day_root, "homework", f)) else "MISSING", f"{short}: homework/{f}")
        return
    if not os.path.isdir(start):
        rep.add("folders", "MISSING", f"{short}: folder {rel(start, day_root)}/ missing")
        return
    rep.add("folders", "PASS")
    missing = [f for f in files if not exists_exact(os.path.join(start, f.rstrip("/")))]
    for f in missing:
        rep.add("files", "MISSING", f"{short}: {rel(start, day_root)}/{f}")
    if not missing:
        rep.add("files", "PASS")
    sol_files = []
    if sol == "=":
        sol_files = [f for f in files if f not in ("README.md", "my-findings.md", "target.html") and not f.endswith("/")]
        if nbugs:
            sol_files.append("BUGS.md")
    elif sol:
        sol_files = list(sol) + (["BUGS.md"] if nbugs else [])
    for f in sol_files:
        if not exists_exact(os.path.join(sdir, f)):
            rep.add("files", "MISSING", f"{short}: {rel(sdir, day_root)}/{f}")
    # starters: forbidden words
    for f in walk_files(start, skip_solution=True):
        if f.lower().endswith(CODE_EXT) and os.path.basename(f) != "bootstrap.min.css":
            for n, line in enumerate(read(f).splitlines(), 1):
                m = FORBIDDEN.search(line)
                if m:
                    rep.add("starter words", "FAIL", f'{short}: {rel(f, day_root)}:{n} contains "{m.group(0)}"')
                    break
            else:
                rep.add("starter words", "PASS")
            if f.lower().endswith((".html", ".htm")):
                ids = {}
                for ln, tag, attr, url in parse_html(f).refs:
                    why = check_target(url, f, day_root, ids)
                    if why:
                        rep.info(f"{short}: starter {rel(f, day_root)}:{ln} <{tag} {attr}=\"{url}\"> {why}")
    # solutions: refs + collect HTML for lint
    if sdir and os.path.isdir(sdir):
        ids = {}
        for f in walk_files(sdir):
            low = f.lower()
            if low.endswith((".html", ".htm")):
                sol_html.append(f)
                refs = parse_html(f).refs
                bad = [(ln, tag, attr, url, check_target(url, f, day_root, ids)) for ln, tag, attr, url in refs]
                bad = [b for b in bad if b[4]]
                for ln, tag, attr, url, why in bad:
                    rep.add("solution links", "FAIL", f'{short}: {rel(f, day_root)}:{ln} <{tag} {attr}="{url}"> {why}')
                if not bad:
                    rep.add("solution links", "PASS")
            elif low.endswith(".css"):
                for n, line in enumerate(read(f).splitlines(), 1):
                    for m in CSS_URL.finditer(line):
                        url = m.group(1) or m.group(2)
                        why = check_target(url, f, day_root, ids)
                        rep.add("solution links", "FAIL" if why else "PASS", f"{short}: {rel(f, day_root)}:{n} url({url}) {why}")
    # bug-hunts
    if not nbugs:
        return
    readme = os.path.join(start, "README.md")
    if os.path.exists(readme):
        txt = read(readme)
        ok = re.search(rf"\b{nbugs}\s+bugs\b", txt, re.I) is not None
        rep.add("bug count", "PASS" if ok else "FAIL", f'{short}: README.md does not say "{nbugs} bugs"')
    bugs_md = os.path.join(sdir, "BUGS.md")
    if not os.path.exists(bugs_md):
        return  # already reported as MISSING
    rows, err = parse_bugs(bugs_md)
    if err:
        rep.add("bug count", "FAIL", f"{short}: BUGS.md {err}")
        return
    nums = sorted({r[0] for r in rows})
    if nums != list(range(1, nbugs + 1)):
        rep.add("bug count", "FAIL", f"{short}: BUGS.md lists bugs {nums}, PLAN §4 says 1..{nbugs}")
    else:
        rep.add("bug count", "PASS")
    cache = {}
    for num, fname, lines in rows:
        s, t = os.path.join(start, fname), os.path.join(sdir, fname)
        if not (os.path.exists(s) and os.path.exists(t)):
            rep.add("starter vs solution", "FAIL", f"{short}: bug {num}: file '{fname}' not found in starter and solution")
            continue
        if not lines:
            rep.add("starter vs solution", "FAIL", f"{short}: bug {num}: no line number in BUGS.md")
            continue
        if fname not in cache:
            cache[fname] = changed_lines(s, t)
        ch = cache[fname]
        if any(x in ch for ln in lines for x in (ln - 1, ln, ln + 1)):
            rep.add("starter vs solution", "PASS")
        else:
            rep.add("starter vs solution", "FAIL", f"{short}: bug {num}: {fname} line {lines} is the same in starter and solution")


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser(description="Check a Week 2 code pack against PLAN v2.")
    ap.add_argument("--day", type=int, choices=(1, 2), required=True)
    ap.add_argument("--root", default=os.path.normpath(os.path.join(here, "..", "..")), help="week2/ or week2/dayN")
    ap.add_argument("--only", default="", help="comma-separated ids, e.g. D1-04,D1-FF5")
    ap.add_argument("--no-lint", action="store_true")
    ap.add_argument("--allow-missing", action="store_true")
    ap.add_argument("--verbose", "-v", action="store_true")
    a = ap.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    day_root = resolve_day_root(a.root, a.day)
    rep = Report(a.verbose)
    if not os.path.isdir(day_root):
        print(f"root not found: {day_root}")
        return 1
    only = {x.strip().upper() for x in a.only.split(",") if x.strip()}
    specs = DAY1 if a.day == 1 else DAY2

    check_pack_files(a.day, day_root, rep)
    check_assets(a.day, day_root, rep)
    sol_html = []
    for spec in specs:
        short = "-".join(spec[0].split("-")[:2]).upper()
        if only and short not in only:
            continue
        try:
            check_exercise(a.day, day_root, spec, rep, sol_html)
        except Exception as exc:  # noqa: BLE001 - report, never crash on a half-built pack
            rep.add("folders", "FAIL", f"{short}: checker error {type(exc).__name__}: {exc}")
    check_copies(a.day, day_root, rep)
    if not a.no_lint:
        lint(sol_html, day_root, here, rep)

    print(f"check_pack.py --day {a.day}  root: {day_root}\n")
    for line in rep.lines:
        print(line)
    print("\n| Check | Pass | Fail | Missing |\n|---|---|---|---|")
    tot = [0, 0, 0]
    for check, (p, f, m) in rep.rows.items():
        print(f"| {check} | {p} | {f} | {m} |")
        tot = [tot[0] + p, tot[1] + f, tot[2] + m]
    print(f"| **total** | {tot[0]} | {tot[1]} | {tot[2]} |")
    if a.no_lint:
        print("\n(lint skipped: --no-lint)")
    ok = tot[1] == 0 and (tot[2] == 0 or a.allow_missing)
    print("\nRESULT:", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
