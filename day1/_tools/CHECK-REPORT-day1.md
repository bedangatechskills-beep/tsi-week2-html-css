# CHECK-REPORT · Day 1 (Builder A1)

Date: 2026-10-25. Tools: `check_pack.py` (A0), html-validate 11.17.0, HTMLHint 1.9.2, headless Chrome 155 (Playwright).

## Pass 1

### `python _tools/check_pack.py --day 1 --root ..` → exit 0

```
check_pack.py --day 1  root: D:\TSI AI powered Web App Devloper\Daily Planner +PPT\week2\day1


| Check | Pass | Fail | Missing |
|---|---|---|---|
| pack files | 9 | 0 | 0 |
| assets | 17 | 0 | 0 |
| folders | 28 | 0 | 0 |
| files | 26 | 0 | 0 |
| starter words | 38 | 0 | 0 |
| solution links | 37 | 0 | 0 |
| bug count | 22 | 0 | 0 |
| starter vs solution | 86 | 0 | 0 |
| asset copies | 69 | 0 | 0 |
| html-validate | 37 | 0 | 0 |
| htmlhint | 37 | 0 | 0 |
| **total** | 406 | 0 | 0 |

RESULT: PASS
```

### Starter lint vs BUGS.md

- HTMLHint (`.htmlhintrc`) on all 37 starter pages: `_tools/lint-starters-htmlhint.txt` (25 errors in 10 files, all planted bugs).
- Every bug tagged **D(HH)** in a BUGS.md has an HTMLHint hit on its line, and no V/R/F12-only bug is flagged on its own line.
  Four extra hits (D1-15 b3, D1-FF5 b1 + b6, D1-HW1 b1) were re-tagged `+ D(HH)`; see `CHANGES-FROM-PLAN-A1.md`.
  Cross-check: `_tools/lint-starters-vs-BUGS.txt`.
- html-validate on starters (for information only; starters are broken on purpose; D1-02/D1-03 start empty): `_tools/lint-starters-html-validate.txt`.
- Demos: `_tools/lint-demos-htmlhint.txt` fires only on `B3-skeleton/step-05-htmlhint-demo` (3 planned errors) and `B10-validate/step-01-before`
  (5 planned errors). `_tools/lint-demos-html-validate.txt` adds the half-built steps B3 step 1–2 (no body yet) and B8 step 1–3 (no submit yet).

### Chrome render + behaviour (pass 1)

- 107 pages (every starter, solution and demo step) rendered over HTTP into `_tools/screens/`, and looked at on contact sheets.
- Found and fixed from the screenshots: li-without-ul shows **no** bullets (D1-07 b1, D1-15 b5, FF4 b5 → V);
  `colspan="4"` is invisible (D1-15 b4 → `colspan="2"`); the HW4 Deluxe price did not match its picture (3,800 → 3,500).
  The patan-durbar label is now clear of the dots.
- After the fixes: 118 PASS / 0 FAIL.

### Zips (pass 1)

`make_zips.py --day 1 --root ..` failed at first on a locked `print/msoB539.tmp` (Builder B's Word was running).
I added `*.tmp` to the JUNK list (logged). Rebuilt: Student 139 entries, Instructor 397 entries, both OK.

## Pass 2 (recheck from scratch)

1. Deleted every A1 folder and regenerated it. The md5 of all A1 files was **identical** before and after (`1dc657c3…`).
2. `check_pack.py --day 1` → **exit 0**, 406 pass / 0 fail / 0 missing (full output below).
3. HTMLHint starters vs BUGS.md: 81 OK. The 5 `!!` lines are neighbour hits (another bug's line inside the ±1 window), not mismatches.
4. Chrome: screenshots deleted and re-rendered (107 pages). Behaviour checks: **118 PASS, 0 FAIL** (`_tools/chrome-bug-checks.txt`).
5. Zips rebuilt: `_dist/W2D1-Student-Pack.zip` (139 entries) and `_dist/W2D1-Instructor-Pack.zip` (400 entries), both re-opened OK.
   The student zip has **no** `solution/`, `_solutions/`, `BUGS.md`, `instructor-demos/`, `_tools/`, `00-plan/`, `CHANGES-FROM-PLAN-*`.
   Its full listing is in `_tools/student-zip-contents.txt`. Top folder `W2D1/`, and the empty `places/` folder is kept.

### `check_pack.py --day 1` (pass 2)

```
check_pack.py --day 1  root: D:\TSI AI powered Web App Devloper\Daily Planner +PPT\week2\day1


| Check | Pass | Fail | Missing |
|---|---|---|---|
| pack files | 9 | 0 | 0 |
| assets | 17 | 0 | 0 |
| folders | 28 | 0 | 0 |
| files | 26 | 0 | 0 |
| starter words | 38 | 0 | 0 |
| solution links | 37 | 0 | 0 |
| bug count | 22 | 0 | 0 |
| starter vs solution | 86 | 0 | 0 |
| asset copies | 69 | 0 | 0 |
| html-validate | 37 | 0 | 0 |
| htmlhint | 37 | 0 | 0 |
| **total** | 406 | 0 | 0 |

RESULT: PASS
```
