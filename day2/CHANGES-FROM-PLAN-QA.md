# Changes made by QA · Day 2

QA (fm-qa) fixed only small, clear defects. Each row gives the file, the change and the reason.

| # | File | Change | Why |
|---|---|---|---|
| 1 | `deck/TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx` slide 4 + `deck/_build/build-deck.js` line 89 | The D2-00 callout said "Answer in solution/README-answer.md." It now says "Answer at the reveal." | The student zip has no `solution/` folders, so students could not open that file. The instructor still has `solution/README-answer.md` (named in the slide's speaker notes). The slide was edited in place with python-pptx (one run) and the build script was changed too. |
| 2 | `_dist/W2D2-Student-Pack.zip`, `_dist/W2D2-Instructor-Pack.zip` | Rebuilt with `day1/_tools/make_zips.py --day 2` after all fixes. | The old zips were built before B and C finished. The student zip now also has the Classwork Booklet, and the instructor zip has the final deck and guide. |

QA did **not** change any Day 2 starter, solution, demo step, note or asset.
