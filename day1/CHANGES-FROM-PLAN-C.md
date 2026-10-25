# CHANGES-FROM-PLAN — Builder C (Day 1 deck + instructor guide)

One line per change: id / slide — what — why.

- Deck slides 16, 18, 25, 30, 34, 35, 39, 46, 47 — code-along slides carry the ACTIVITY tag and point at their `instructor-demos/<block>/step-NN-*` folder (no exercise id) — tsi-deck-theme-v2 hard rule: everything interactive is tagged; students type along. PLAN §5 said only exercise/quiz/exit slides are ACTIVITY.
- Deck slide 14 — "HTML is the Skeleton" is a dark block-opener slide (`Block 3 · 30 min`) instead of a white analogy slide — §5 has no block-divider slides; this keeps the slide count at 53 and gives the theme its dark rhythm.
- Deck slide 2 — the roadmap shows 8 rows (blocks merged in pairs, both breaks named) instead of 11 — the theme agenda pattern holds at most 8 rows.
- Deck slide 31 — title "D1-07 + D1-08 · Fix, then build" (two-part slide as §5 says) — the long title wrapped into the brief line.
- Deck slides 10, 21, 47 — numbered screenshot slots (1, 2, 3) left as placeholders — the theme forbids drawn fake UI; they need real VS Code / Chrome screenshots (listed in the guide's Instructor notes). `deck/_build/shots/<name>.png` fills them on the next build.
- Deck slide 52 — the 10 quiz questions are in the speaker notes and the guide, not on the slide — 10 A/B/C/D questions do not fit one readable slide; the instructor reads them aloud (offline) or runs Kahoot.
- Guide — `W2D1-Instructor-Guide.docx` is built from the .md by `instructor-guide/_build/md2docx.py` (python-docx, the docx-pattern palette and section order) instead of the `docx` npm package — same pattern, and one .md stays the single source.

## Reconcile with A0 / A1 / B change logs (after A1 STATUS done)

- D1-07 bug 1, D1-15 bug 5 — deck notes + guide now say **V + D(F12)** and "the bullets hang off the left edge"; slide 31 hint "missing indent + missing bullets" — A1 found Chrome shows no bullets without a `<ul>`.
- D1-15 bug 4 — deck notes + guide: `colspan="2"` (too small → visible gap), fix `colspan="3"`; slide 40 notes + guide B7 explain "too big is invisible, too small leaves a gap" — A1 change.
- D1-15 bug 3, D1-FF5 bugs 1 + 6, D1-HW1 bug 1 — extra **+ D(HH)** tag; relay rules (slide 50 notes, guide B9) accept either tag for the bonus point — A1 change.
- D1-11 — slide 42 + guide: **6 columns** (Time + Sun–Thu); bug 2 = "the 11:00 row has 4 day cells"; bug 4 = the 2:00 row's Thursday cell; bug 5 fix `<tr><td>3:00</td><td colspan="5">Tea break</td></tr>`; bug 1 fix `<th scope="col">` — matched to A1's BUGS.md.
- Tables — guide notes the 2-line `<style>` in table demos/exercises ("CSS comes on Day 2") — A1 change (`border="1"` fails html-validate).
- D1-01 — slide 9 notes + guide: don't count Live Server's `ws` row; no favicon row (data: icon) — A1 change.
- Code-along slides 16, 18, 25, 29, 30, 34, 35, 39, 40, 46, 47 and the guide's code blocks — re-copied from A1's actual `instructor-demos/*/step-NN-*` files (Sunita's page, Patan, Rs. 170 milk tea, Spices sub-list, `#contact`, Veg/Chicken momo price board, Today's prices rowspan table, `name="name"` order slip, the real submit URL) — so what the instructor types matches the slide and the guide line for line.
- Path check: every `W2D1/...` folder named in the deck notes, run sheet and guide exists (57 paths, 0 missing).
