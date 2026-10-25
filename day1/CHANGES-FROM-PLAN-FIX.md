# W2D1 · Changes from the final review (Fixer, 2026-10-25)

Source: `.firstmate/reports/review-final.md` (required fixes 1–10, polish 1–10). No starter bug, solution fix or BUGS.md line number changed.

| # | File:line | Change |
|---|---|---|
| Fix 2 | `notes/09-forms.md:78, 85` | `type="number"`: you cannot type `+` or a space; the spinner arrow drops a leading 0 (try 09841000000, press ↑). Use `tel`. (Old text said Chrome sends an empty value.) |
| Fix 2 | `homework/_solutions/D1-HW3-Answer-Key.md:160` | Same correction in the full-marks line. |
| Fix 2 | `classwork/D1-13-broken-signup-form/README.md:27` | Hint 2 adds "Try typing `+977 980` in the phone box." (the hint had no wrong claim; this lets students see the rule). |
| Fix 5 | `instructor-guide/W2D1-Instructor-Guide.md:752, 755` | B8 code-along: type step-01 with me (2 min: the two label + input pairs); watch steps 02–04 on the projector; students type radios, select, textarea in D1-13 / D1-14. |
| Fix 5 | `deck/_build/build-deck.js:772` (slide 46) | Brief "type 01, watch 02–04"; code box marks the radio lines `<!-- watch only: steps 02–04 -->`; notes rewritten. **Deviation:** the review's wording says "watch … (2 min)"; I kept the total at the run sheet's 3 min (2 typing + watching 02–03 on slide 46, step-04 is slide 47's existing minute), so no run-sheet arithmetic changes. |
| Fix 6 | `homework/W2D1-Homework-Sheet.md:6, 25–27, 30, 34, 64, 98` | "about 2.5 h; HW1 and HW3 are the must-do (1 h), HW2 if you can". Per-task times now HW1 40 min, HW2 about 1.5 h, HW3 20 min, so the parts add up. |
| Fix 6 | `homework/D1-HW1…/README.md:3`, `D1-HW2…/README.md:3`, `D1-HW3…md:2`, guide :957–961, `W2D1-Run-Sheet.md:26` | Same times everywhere. |
| Fix 6 | `deck/_build/build-deck.js:882, 891–896` (slide 53) | Notes and table: header "about 2.5 h: MUST-DO first (1 h), HW2 if you can"; rows tagged MUST-DO / If you can; times 40 min / about 1.5 h / 20 min. |
| Fix 8 | `homework/D1-HW1…/README.md:27, 56, 70`, `homework/D1-HW4…/README.md:24, 52, 66` | `my-repairs.md` → `my-bugs.md` (matches the sheet's submit checklist). |
| Fix 9 | `notes/01-how-the-web-works.md:117, 195, 250` | "Live Server adds one more row called `ws`. It is not a parcel. Don't count it." (under the 7-parcels text, in Step 2, and a new common-mistakes row "Your count is 8, not 7"). |
| Fix 10 | `homework/D1-HW3-Self-Check-and-Interview-Prep.md:9` | Dead `_solutions/` path → "Your instructor shares the answer key after you try." |
| Polish 1 | 40 lines in 31 files (list below) | Momo House is in **Dillibazar** (the logo says so). Only Momo House's location changed. Thamel stays where it is a place: the `thamel.svg` picture and its alt text, Kathmandu Treks, Thamel Guesthouse (D1-HW4), the FF6 gallery caption. B6 step-05 figcaption "Thamel, where Momo House lives." → "Thamel, Kathmandu." All edits are inside one line, so no BUGS.md line moved (check_pack PASS). |
| Polish 4 | `notes/06-links-and-paths.md:42` | `../` = "Go downstairs one folder. Other people call this 'go up one folder'; it is the same thing." |
| Polish 5 | `notes/03-html-skeleton-and-anatomy.md:270`, `homework/D1-HW3…md:41` | Skeleton = 10 lines (was "9 lines" / "8–10 lines"). |
| Polish 6 | `classwork/D1-01…/README.md:26, 31`, `deck/_build/build-deck.js:182, 189` (slide 9), guide :163 | D1-01 asks for the `<h1>` text **and** line number everywhere (matches `my-findings.md`). |
| Polish 7 | `notes/09-forms.md:9, 22, 35` | "files your answer under" → "writes your answer in the column called name". |
| Polish 7 | `notes/10-debugging-and-validating-html.md:107`, `homework/_solutions/D1-HW3-Answer-Key.md:125` | "foster-parenting" dropped; plain "moves the text out and puts it before the table". |
| Polish 8 | `notes/11-day1-cheatsheet.md:110, 115` | Tags aligned with BUGS.md: `<titel>` = V + D(HH); lone `<li>` = V + D(F12). |
| Polish 9 | `notes/01-how-the-web-works.md:124, 198` | "304 or from cache": Chrome may show "(memory cache)". |
| Polish 10 | `deck/_build/build-deck.js:202–204, 386–388, 801–805` (slides 10, 21, 47) | Placeholder pill "SCREENSHOT n" → "LIVE DEMO" with a cue ("LIVE: open VS Code → …"). Notes: "LIVE: Switch to the live tool here." A PNG dropped into `deck/_build/shots/` still replaces the box on rebuild. |

Momo House location edits (Thamel → Dillibazar): `README.md:74`; `notes/06-links-and-paths.md:187, 244`; D1-02 `target.html:10`, `solution/index.html:10`; B2 `step-02-emmet-structures/index.html:10`, `STEPS.md:35`; D1-09 `index.html:11`, `pages/about.html:11` (+ solution copies); B6 `step-02…/about.html`, `step-03…/pages/about.html`, `step-04…/pages/about.html`, `step-05…/pages/about.html:11, 14`; D1-15 starter + solution and D1-HW2 starter + `_solutions` (`index.html:6, 18, 26`, `about.html`, `menu.html`, `order.html` footers, `catering.html:62`).

Rebuilt: deck (`TSI-W2D1-HTML-Core-Deck.pptx`), guide `.docx`, all four print PDFs (notes, homework, booklet, answer keys), both zips.
