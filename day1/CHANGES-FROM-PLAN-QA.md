# Changes made by QA · Day 1

QA (fm-qa) fixed only small, clear defects. Each row gives the file, the change and the reason.

| # | File | Change | Why |
|---|---|---|---|
| 1 | `deck/TSI-W2D1-HTML-Core-Deck.pptx` slide 19 + `deck/_build/build-deck.js` line 361 | The callout said "Then compare with solution/index.html." It now says "Then compare with notes/03-html-skeleton-and-anatomy.md." | The student zip has no `solution/` folders, so students could not open that file. The new text matches the D1-03 README ("Stuck?" step 3). The slide was edited in place with python-pptx (one run) and the build script was changed too, so a rebuild keeps the fix. |
| 2 | `classwork/D1-01-see-the-letters-arrive/README.md` line 17 | `**Ctrl+`**` → `menu **Terminal → New Terminal** (shortcut: **Ctrl** + the key under Esc)` | The lone backtick broke B's md→docx converter: the booklet printed `**Ctrl+`**` literally (booklet page 3). |
| 3 | `instructor-guide/W2D1-Instructor-Guide.md` line 155, and the `.docx` rebuilt with `instructor-guide/_build/md2docx.py` | `(Ctrl+`)` → `(Terminal → New Terminal, or Ctrl + the key under Esc)` | The same lone backtick opened a code span that swallowed the rest of the line, so the guide's D1-01 talk-track was garbled in the docx (page 6). |
| 4 | `classwork/D1-13-broken-signup-form/solution/BUGS.md` line 17 | "Type 9841000000 and press the up arrow… A leading 0 is lost." → "Type 09841000000 and press the up arrow: it becomes 9841000001. The leading 0 is lost and the phone number is wrong." | Tested in Chrome 155: a typed leading 0 is kept (`09841000000`), but the spinner arrow drops it (`9841000001`). The old example had no leading 0 to lose. This settles the point B raised. |
| 5 | `print/W2D1-Classwork-Booklet.docx/.pdf`, `print/instructor/W2D1-Answer-Keys.docx/.pdf` | Rebuilt with `python print/_build_print.py --day 1 --only booklet,keys` (via Word). | This picks up fixes 2 and 4. The notes and homework sheet were not changed, so they were not rebuilt. |
| 6 | `_tools/make_zips.py` (`excluded()`) | The student zip now leaves out `print/_*.py` (`_build_print.py`, `_test_snippets.py`). | These are build scripts, not student material (B's open item). The instructor zip still has them. |
| 7 | `_dist/W2D1-Student-Pack.zip`, `_dist/W2D1-Instructor-Pack.zip` | Rebuilt after all fixes. | The old zips were built before B and C finished. The old student zip had no Classwork Booklet. |

QA did **not** change any starter, solution, demo step or asset.
