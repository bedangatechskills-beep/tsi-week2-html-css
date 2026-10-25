"""Test every code snippet in Builder B's Markdown (notes, homework sheets, HW3).

Usage:
    python _test_snippets.py --day 1|2 [--root <week2>] [--render] [files or folders ...]

Default targets: week2/dayN/notes and the dayN homework sheet + HW3 files.

Fence conventions (the info string after ```):
    ```html            full file (starts with <!DOCTYPE html>) or a fragment (auto-wrapped in a skeleton)
    ```css             a stylesheet or a fragment of one
    ```html broken     a planted mistake on purpose: not validated (GitHub still colours it as html)
    ```css broken      same for CSS
    ```text / bash / anything else: not tested
A line like  File: `css/style.css`  (within the 3 lines above a fence) names the file. Files that are named in
the same "###" section are written into one folder, so an index.html and its css/style.css are tested together.

Checks:
    html  -> npx html-validate (the day's _tools/.htmlvalidate.json; fragments use a relaxed copy) + every local
             src/href resolves (images are copied in from assets/images)
    css   -> npx csstree-validator
    --render -> headless Chrome screenshot of every html file into <scratch>/snippet-shots/dayN/
Exit code 0 = every tested snippet is clean.
"""
import argparse, json, os, re, shutil, subprocess, sys, tempfile

HTML_VALIDATE = "html-validate@11.17.0"
CSSTREE = "csstree-validator@4.0.1"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

FENCE = re.compile(r"^```(\w*)\s*(.*)$")
FILELINE = re.compile(r"File:\s*`([^`]+)`")

WRAP = {  # first tag of a fragment -> (before, after) inside <body>
    "li": ("<ul>\n", "\n</ul>"), "tr": ("<table>\n", "\n</table>"), "td": ("<table><tr>\n", "\n</tr></table>"),
    "th": ("<table><tr>\n", "\n</tr></table>"), "thead": ("<table>\n", "\n</table>"),
    "tbody": ("<table>\n", "\n</table>"), "caption": ("<table>\n", "\n<tr><td>x</td></tr></table>"),
    "dt": ("<dl>\n", "\n</dl>"), "option": ("<label for=\"s\">x</label><select id=\"s\">\n", "\n</select>"),
    "source": ("<video controls>\n", "\n</video>"),
}
HEAD_TAGS = ("meta", "link", "title", "style", "base")


def blocks(md_path):
    lines = open(md_path, encoding="utf-8").read().split("\n")
    out, i, section = [], 0, 0
    while i < len(lines):
        if lines[i].startswith("#"):
            section += 1
        m = FENCE.match(lines[i])
        if m:
            lang, flags = m.group(1).lower(), m.group(2).lower()
            fname = None
            for back in range(1, 4):
                if i - back >= 0:
                    fm = FILELINE.search(lines[i - back])
                    if fm:
                        fname = fm.group(1)
                        break
            j = i + 1
            while j < len(lines) and not lines[j].startswith("```"):
                j += 1
            out.append({"lang": lang, "flags": flags, "file": fname, "code": "\n".join(lines[i + 1:j]),
                        "line": i + 1, "section": section})
            i = j + 1
            continue
        i += 1
    return out


def wrap_fragment(code):
    first = re.search(r"<\s*([a-zA-Z0-9]+)", code)
    tag = first.group(1).lower() if first else ""
    head_extra, body = "", code
    if tag in HEAD_TAGS:
        head_extra, body = code, "<p>Head snippet.</p>"
    elif tag in WRAP:
        b, a = WRAP[tag]
        body = b + code + a
    return ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n"
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
            + ("" if "<title" in head_extra else "<title>Snippet</title>\n") + head_extra + "\n</head>\n<body>\n"
            + body + "\n</body>\n</html>\n")


def npx(args, cwd):
    exe = shutil.which("npx") or shutil.which("npx.cmd")
    p = subprocess.run([exe, "--yes"] + args, cwd=cwd, capture_output=True, text=True, encoding="utf-8",
                       errors="replace", shell=False)
    return p.returncode, p.stdout + p.stderr


def local_refs_ok(html, folder):
    bad = []
    for ref in re.findall(r'(?:src|href|poster)="([^"]+)"', html):
        if re.match(r"^(https?:|mailto:|tel:|#|data:|javascript:)", ref) or ref.startswith("//"):
            continue
        path = ref.split("#")[0].split("?")[0]
        if path and not os.path.exists(os.path.join(folder, path)):
            bad.append(ref)
    return bad


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--day", type=int, required=True)
    ap.add_argument("--root", default=os.path.join(os.path.dirname(__file__), "..", ".."))
    ap.add_argument("--render", action="store_true")
    ap.add_argument("--keep", help="write the test folders here instead of a temp dir")
    ap.add_argument("targets", nargs="*")
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    if os.path.basename(root).startswith("day"):
        root = os.path.dirname(root)
    day = os.path.join(root, f"day{a.day}")
    targets = a.targets or [os.path.join(day, "notes"), os.path.join(day, "homework")]
    mds = []
    for t in targets:
        if os.path.isdir(t):
            for dp, _, fs in os.walk(t):
                for f in sorted(fs):
                    if f.endswith(".md") and (os.path.basename(dp) in ("notes", "homework", "_solutions")):
                        if os.path.basename(dp) != "notes" and not re.search(r"Homework-Sheet|HW3", f):
                            continue
                        mds.append(os.path.join(dp, f))
        elif t.endswith(".md"):
            mds.append(t)
    work = a.keep or tempfile.mkdtemp(prefix=f"snip-d{a.day}-")
    os.makedirs(work, exist_ok=True)
    cfg_src = os.path.join(day, "_tools", ".htmlvalidate.json")
    if not os.path.exists(cfg_src):
        cfg_src = os.path.join(root, "day1", "_tools", ".htmlvalidate.json")
    cfg = json.load(open(cfg_src, encoding="utf-8"))
    frag_cfg = json.loads(json.dumps(cfg))
    frag_cfg["rules"].update({"heading-level": "off", "no-dup-id": "error", "missing-doctype": "off"})
    full_cfg_path = os.path.join(work, "full.json")
    frag_cfg_path = os.path.join(work, "frag.json")
    json.dump(cfg, open(full_cfg_path, "w"), indent=1)
    json.dump(frag_cfg, open(frag_cfg_path, "w"), indent=1)
    assets = os.path.join(day, "assets", "images")
    media = os.path.join(day, "assets", "media")
    bootstrap = os.path.join(day, "assets", "vendor", "bootstrap-5.3.3", "bootstrap.min.css")

    html_full, html_frag, css_files, rows, problems = [], [], [], [], []
    counts = {"tested": 0, "broken-skipped": 0, "other": 0}
    for md in mds:
        base = re.sub(r"[^A-Za-z0-9]+", "-", os.path.splitext(os.path.basename(md))[0])
        n = 0
        for b in blocks(md):
            if b["lang"] not in ("html", "css"):
                counts["other"] += 1
                continue
            if "broken" in b["flags"]:
                counts["broken-skipped"] += 1
                continue
            n += 1
            counts["tested"] += 1
            folder = os.path.join(work, base, f"s{b['section']:02d}" if b["file"] else f"x{n:02d}")
            os.makedirs(folder, exist_ok=True)
            if os.path.isdir(assets) and not os.path.exists(os.path.join(folder, "images")):
                shutil.copytree(assets, os.path.join(folder, "images"))
            if os.path.isdir(media) and not os.path.exists(os.path.join(folder, "media")):
                shutil.copytree(media, os.path.join(folder, "media"))
            if os.path.isfile(bootstrap) and not os.path.exists(os.path.join(folder, "css", "bootstrap.min.css")):
                os.makedirs(os.path.join(folder, "css"), exist_ok=True)
                shutil.copy(bootstrap, os.path.join(folder, "css", "bootstrap.min.css"))
            name = b["file"] or ("snippet.html" if b["lang"] == "html" else "snippet.css")
            path = os.path.join(folder, name.replace("/", os.sep))
            os.makedirs(os.path.dirname(path), exist_ok=True)
            code = b["code"]
            tag = f"{os.path.basename(md)}:{b['line']}"
            if b["lang"] == "html":
                full = code.lstrip().lower().startswith("<!doctype")
                text = code + "\n" if full else wrap_fragment(code)
                open(path, "w", encoding="utf-8", newline="\n").write(text)
                (html_full if full else html_frag).append((path, tag))
            else:
                open(path, "w", encoding="utf-8", newline="\n").write(code + "\n")
                css_files.append((path, tag))
    # local refs after all files are written
    for path, tag in html_full + html_frag:
        bad = local_refs_ok(open(path, encoding="utf-8").read(), os.path.dirname(path))
        if (path, tag) in html_frag:  # fragments: only pictures/media must exist; page links are illustrations
            bad = [r for r in bad if not r.split("#")[0].endswith(".html")]
        if bad:
            problems.append(f"{tag}: unresolved {bad}")
    # html-validate
    for group, cfgp in ((html_full, full_cfg_path), (html_frag, frag_cfg_path)):
        for k in range(0, len(group), 30):
            chunk = group[k:k + 30]
            rc, out = npx([HTML_VALIDATE, "--config", cfgp, "--formatter", "json"] + [p for p, _ in chunk], work)
            try:
                data = json.loads(out[out.index("["):out.rindex("]") + 1]) if "[" in out else []
            except ValueError:
                data = []
                if rc:
                    problems.append("html-validate could not run: " + out[:300])
            bypath = {os.path.normcase(os.path.abspath(r["filePath"] if os.path.isabs(r["filePath"]) else
                                                       os.path.join(work, r["filePath"]))): r for r in data}
            for p, tag in chunk:
                r = bypath.get(os.path.normcase(os.path.abspath(p)))
                if r and r.get("messages"):
                    msgs = "; ".join(f"L{m['line']} {m['ruleId']}: {m['message']}" for m in r["messages"][:5])
                    problems.append(f"{tag}: {msgs}")
    # css
    for p, tag in css_files:
        rc, out = npx([CSSTREE, p], work)
        if rc != 0 or "error" in out.lower() and "0 errors" not in out.lower():
            if "No issues found" in out or out.strip() == "":
                continue
            problems.append(f"{tag}: css: {out.strip()[:400]}")
    # render
    if a.render:
        shots = os.path.join(os.environ.get("SNIP_SHOTS", work), "snippet-shots", f"day{a.day}")
        os.makedirs(shots, exist_ok=True)
        for p, tag in html_full + html_frag:
            out_png = os.path.join(shots, re.sub(r"[^A-Za-z0-9]+", "_", tag) + ".png")
            subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                            f"--screenshot={out_png}", "--window-size=900,700", "file:///" + p.replace(os.sep, "/")],
                           capture_output=True, timeout=60)
        print(f"screenshots: {shots}")
    print(f"files: {len(mds)} md | html full {len(html_full)}, html fragments {len(html_frag)}, css {len(css_files)} | "
          f"broken on purpose (skipped) {counts['broken-skipped']} | other fences {counts['other']}")
    print(f"work folder: {work}")
    if problems:
        print(f"PROBLEMS ({len(problems)}):")
        for pr in problems:
            print("  - " + pr)
        sys.exit(1)
    print("RESULT: all tested snippets clean")


if __name__ == "__main__":
    main()
