"""make_zips.py — builds the Week 2 student and instructor zips (PLAN v2 §6 A0).

Usage:
  python make_zips.py --day 1 --root <path>                    # <path> = week2/ or week2/day1
  python make_zips.py --day 2 --root <path> --with-solutions   # only the after-class student zip
Writes into week2/dayN/_dist/:
  W2DN-Student-Pack.zip      top folder W2DN/; no solution/, _solutions/, instructor-demos/, instructor-guide/,
                             00-plan/, _tools/, _dist/, deck/, print/instructor/, CHANGES-FROM-PLAN-*.md
  W2DN-Instructor-Pack.zip   top folder W2DN/; everything except _dist/
  W2DN-Student-Pack-with-Solutions.zip   (--with-solutions) the student zip plus solution/ and _solutions/
Empty folders (e.g. D1-FF6 places/) are kept. Each zip is re-opened and checked after writing.
"""
import argparse
import fnmatch
import os
import sys
import time
import zipfile

STUDENT_TOP_EXCLUDE = {"instructor-demos", "instructor-guide", "00-plan", "_tools", "_dist", "deck"}
SOLUTION_DIRS = {"solution", "_solutions"}
JUNK = ["__pycache__", "*.pyc", ".DS_Store", "Thumbs.db", "~$*", "*.tmp", "desktop.ini", ".git"]


def is_junk(name):
    return any(fnmatch.fnmatch(name, p) for p in JUNK)


def excluded(parts, mode):
    """parts = path relative to the day root, split on '/'. mode = student | solutions | instructor."""
    if any(is_junk(p) for p in parts):
        return True
    if parts[0] == "_dist":
        return True
    if mode == "instructor":
        return False
    if parts[0] in STUDENT_TOP_EXCLUDE:
        return True
    if parts[:2] == ["print", "instructor"]:
        return True
    if len(parts) == 2 and parts[0] == "print" and parts[1].startswith("_"):  # print builder scripts (QA)
        return True
    if len(parts) == 1 and fnmatch.fnmatch(parts[0], "CHANGES-FROM-PLAN-*.md"):
        return True
    if mode == "student" and any(p in SOLUTION_DIRS for p in parts):
        return True
    return False


def build(day_root, top, out_path, mode):
    files = dirs = 0
    tmp = out_path + ".tmp"
    with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for dp, dns, fns in os.walk(day_root):
            relp = os.path.relpath(dp, day_root).replace("\\", "/")
            parts = [] if relp == "." else relp.split("/")
            if parts and excluded(parts, mode):
                dns[:] = []
                continue
            dns[:] = sorted(d for d in dns if not excluded(parts + [d], mode))
            kept = sorted(f for f in fns if not excluded(parts + [f], mode))
            if parts and not os.listdir(dp):  # keep folders that are empty on disk (e.g. D1-FF6 places/)
                z.writestr(zipfile.ZipInfo("/".join([top] + parts) + "/", time.localtime()[:6]), "")
                dirs += 1
            for f in kept:
                z.write(os.path.join(dp, f), "/".join([top] + parts + [f]))
                files += 1
    os.replace(tmp, out_path)
    return files, dirs


def verify(out_path, top, mode):
    problems = []
    with zipfile.ZipFile(out_path) as z:
        if z.testzip() is not None:
            problems.append("CRC error")
        for n in z.namelist():
            parts = n.rstrip("/").split("/")
            if parts[0] != top:
                problems.append(f"entry outside {top}/: {n}")
            elif len(parts) > 1 and excluded(parts[1:], mode):
                problems.append(f"excluded entry present: {n}")
        names = z.namelist()
    return problems, len(names)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser(description="Build the Week 2 zips.")
    ap.add_argument("--day", type=int, choices=(1, 2), required=True)
    ap.add_argument("--root", default=os.path.normpath(os.path.join(here, "..", "..")), help="week2/ or week2/dayN")
    ap.add_argument("--with-solutions", action="store_true", help="build only the student zip WITH solutions")
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    day_root = os.path.join(root, f"day{a.day}") if os.path.isdir(os.path.join(root, f"day{a.day}")) else root
    if not os.path.isdir(day_root):
        print(f"root not found: {day_root}")
        return 1
    top = f"W2D{a.day}"
    dist = os.path.join(day_root, "_dist")
    os.makedirs(dist, exist_ok=True)
    jobs = ([(f"{top}-Student-Pack-with-Solutions.zip", "solutions")] if a.with_solutions else
            [(f"{top}-Student-Pack.zip", "student"), (f"{top}-Instructor-Pack.zip", "instructor")])
    rc = 0
    for name, mode in jobs:
        out = os.path.join(dist, name)
        files, dirs = build(day_root, top, out, mode)
        problems, entries = verify(out, top, mode)
        size = os.path.getsize(out)
        print(f"{name}: {files} files + {dirs} empty folders, {entries} entries, {size / 1024:.0f} KB, top folder {top}/"
              + ("  OK" if not problems else "  PROBLEMS:"))
        for p in problems[:20]:
            print("   ", p)
            rc = 1
    return rc


if __name__ == "__main__":
    sys.exit(main())
