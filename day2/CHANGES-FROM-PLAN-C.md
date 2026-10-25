# CHANGES-FROM-PLAN — Builder C (Day 2: deck + instructor guide)

| Id / slide | What changed | Why |
|---|---|---|
| Deck slides 6, 13, 16, 23, 28, 39, 44 | Code-along slides carry the ACTIVITY tag (brief "Code-along · N min · type with me · W2D2/instructor-demos/<block>/step-…"), although §5 says ACTIVITY slides map to exercise ids | tsi-deck-theme-v2 hard rule: everything interactive (typing along) is tagged. They point at the demo step folders instead of an exercise id |
| Deck slide 21 | "CSS is the outfit" is a dark block-opener slide (Block 4 · 24 min) | §5.2 has no block-divider slides; the theme wants dark dividers for rhythm. Slide count kept at 49 |
| Deck slide 14 | Title shortened to "Demo: Narrator, Tab walk, Lighthouse"; it is not tagged (instructor demo; students do the Tab walk + Lighthouse in D2-03, slide 15) | Title fit; plan says Narrator is instructor-only |
| Deck slide 46 | D2-15 uses a checkpoint table on one activity slide (no step/gate slides) | §5.2 has one slide for D2-15; separate gate slides would change the count |
| Deck slide 3 | Real headless-Chrome renders of `instructor-demos/B0-outfit/step-02-three-outfits` with each of the 3 stylesheets (`deck/_build/shots/outfit-*.png`) | §5.2 "3 images"; real screenshots, not drawings |
| Deck slides 14, 24 | Screenshot slots 4 (Lighthouse) and 5 (DevTools Styles) stay numbered placeholders | Theme rule: never draw a fake UI; DevTools cannot be captured headless. Capture before class |
| Deck slide 32 | The "named" swatch is a text tile (maroon / navy / white), not a coloured swatch | Theme palette has no exact named-colour match; avoids a wrong label |
| Guide | Demo talk-tracks use "**Step N —**" paragraphs instead of numbered lists | The md→docx converter restarts numbering after a code block |
| Reconcile A2: D2-03 bugs 5 / 6 | Deck slide 15 notes + guide: bug 5 tagged R, bug 6 tagged V; reveal script now says "don't trust one tool" | A2 log: Lighthouse 13 skips same-page link text and accepts a placeholder as a name |
| Reconcile A2: D2-04 bug 4 | "black box" → "an empty box" (video has `preload="none"`) on slide 17, slide 18 notes, guide | A2 log + BUGS.md wording |
| Reconcile A2: D2-06 bugs 3 / 4 | Missing `;` drops BOTH declarations; missing `}` swallows `.highlight` (slides 22, 25 notes; guide) | A2 log / BUGS.md |
| Reconcile A2: D2-09 target 2 | `.veg` → light-green background (`#dff3dc`) on slide 31 and in the guide model answer | A2 log: green text would be hidden by target 1 |
| Reconcile A2: D2-14 bugs 1 / 3 | `display: blok` is on `.order-button`; bug 3 shows only while bug 5 is there (slide 45 notes, guide) | A2 log |
| Reconcile A2: D2-15 | Guide "watch for": dish cards are 290px wide | A2 log |
- Slides 39, 44 (final pass by the parent) — briefs now name the real block folders (`B7-box-model/ (steps 01–04)`, `B8-display/ (steps 01–02)`) instead of `step-01 …` shorthand, so every `W2D2/...` path in deck + guide + run sheet resolves (66 paths, 0 missing).
- Guide .docx rebuilt with the fixed converter (H1 page breaks via `page_break_before` (no blank spill pages), numbered lists no longer restart after code blocks, table header rows keep with the next row).
