# W2D2 · Changes from the final review (Fixer, 2026-10-25)

Source: `.firstmate/reports/review-final.md`. A2-owned files were changed in the generator (`.firstmate/a2-build/cw1.py`, `demos.py`, `hw.py`) and rebuilt with `python build.py`; a diff against a full backup showed only the intended files changed. No starter bug, solution fix or BUGS.md line number changed.

| # | File:line | Change |
|---|---|---|
| Fix 1 | `notes/04-css-basics-and-linking.md:305` | Missing `;` symptom → "Both declarations are dropped: the browser reads them as one broken value". |
| Fix 3 | `homework/_solutions/D2-HW3-Answer-Key.md:49` (T3) | "links that say only 'click here'" → "links with no text at all (an icon with no name)" + "Vague text like 'click here' is NOT caught: a human must read the links." |
| Fix 4 | `notes/06-colours-units-fonts.md:17, 32, 94` | `em` = × this element's font size (for `font-size` itself, × the parent's); `rem` is simpler: × 16 px. Use rem. Worked example: heading 40 px + `padding: 0.5em` = 20 px. |
| Fix 4 (consistency) | `deck/_build/build-deck.js:525, 530` (slide 33), `instructor-guide/W2D2-Instructor-Guide.md:538` | Same em rule on the slide label ("x this element's font"), its notes, and the guide. |
| Fix 6 | `homework/W2D2-Homework-Sheet.md:6, 27–29, 32, 36, 67, 97` | "about 2.5 h; HW1 and HW3 are the must-do (1 h), HW2 if you can". HW1 40 min, HW2 about 1.5 h, HW3 20 min. |
| Fix 6 | `homework/D2-HW1…/README.md` + `D2-HW2…/README.md` (via `hw.py`), `D2-HW3…md:2`, guide :867–871, `W2D2-Run-Sheet.md:25` | Same times everywhere. |
| Fix 6 | `deck/_build/build-deck.js:782, 791–796` (slide 49) | Notes and table: header "about 2.5 h: MUST-DO first (1 h), HW2 if you can"; rows tagged MUST-DO / If you can. |
| Fix 7 | `classwork/D2-03-a11y-audit/README.md:12` (via `cw1.py`) | "tick **Accessibility** only". The reveal text in `solution/BUGS.md` says the same. |
| Fix 7 | `instructor-demos/B2-a11y-meta/STEPS.md:17` (via `demos.py`) | Instructor keeps SEO; added "SEO will also show 'Document does not have a meta description'; say: that is tomorrow's bug, D2-HW4 bug 1. Students tick Accessibility only in D2-03." |
| Fix 10 | `homework/D2-HW3-Self-Check-and-Interview-Prep.md:9` | Dead `_solutions/` path → "Your instructor shares the answer key after you try." |
| Polish 2 | `notes/07-box-model.md:66`, `homework/_solutions/D2-HW3-Answer-Key.md` (C2) | "(The cards are `display: inline-block`, see note 08. Normal block boxes never sit side by side.)" |
| Polish 3 | `notes/03-audio-video-iframe.md:32`, `notes/11-day2-cheatsheet.md:160` | Autoplay rule: allowed when `muted` **or the file has no sound track**. |
| Polish 7 | `notes/05-selectors.md:21` | "Aarav, stand up" vs "Red team, stay seated": Aarav stands up (name beats team). |
| Polish 7 | `notes/04-css-basics-and-linking.md:55` | "You may leave out the last `;`. Write it anyway." |
| Polish 7 | `notes/08-display.md` (was line 167) | Deleted the `.logo { display: inline-block; }` rule that had no visible effect. |
| Polish 10 | `deck/_build/build-deck.js:240–242, 389–391` (slides 14, 24) | Placeholder pill "SCREENSHOT n" → "LIVE DEMO" with a cue ("LIVE: open F12 → Lighthouse → tick Accessibility only → Analyze page load"; "LIVE: right-click the h1 → Inspect → Styles …"). Notes: "LIVE: Switch to the live tool here." |

Rebuilt: deck (`TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx`), guide `.docx`, all four print PDFs, both zips.
