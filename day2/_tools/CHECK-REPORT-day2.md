# CHECK-REPORT · Day 2 (Builder A2)

Commands run from `week2/`:

```
python day1/_tools/check_pack.py --day 2 --root . -v
python day1/_tools/make_zips.py --day 2 --root .
```

Lint inside check_pack: `npx html-validate@11.17.0` (config `_tools/.htmlvalidate.json`) + `npx htmlhint@1.9.2`
(`.htmlhintrc`) on every solution HTML. There is no separate CSS linter: every CSS solution was checked by rendering
it in Chrome, and pass 2 below renders each planted CSS mistake on its own.

## Pass 1 · check_pack.py (first full build)

`INFO` lines = starter links that do not resolve. All 5 are planted bugs (D2-04 bugs 2, 4, 5; D2-06 bug 2; D2-HW1 bug 1).

```
check_pack.py --day 2  root: D:\TSI AI powered Web App Devloper\Daily Planner +PPT\week2\day2

INFO    D2-04: starter classwork/D2-04-broken-media/index.html:19 <audio src="media/canteen_bell.wav"> file not found (exact case)
INFO    D2-04: starter classwork/D2-04-broken-media/index.html:23 <video poster="image/poster-momo-steam.svg"> file not found (exact case)
INFO    D2-04: starter classwork/D2-04-broken-media/index.html:30 <iframe src="kathmandu-map.htm"> file not found (exact case)
INFO    D2-06: starter classwork/D2-06-stylesheet-not-loading/index.html:7 <link href="css/styles.css"> file not found (exact case)
INFO    D2-HW1: starter homework/D2-HW1-haunted-portfolio-repair/index.html:7 <link href="style.css"> file not found (exact case)

| Check | Pass | Fail | Missing |
|---|---|---|---|
| pack files | 9 | 0 | 0 |
| assets | 21 | 0 | 0 |
| folders | 27 | 0 | 0 |
| files | 25 | 0 | 0 |
| starter words | 51 | 0 | 0 |
| solution links | 30 | 0 | 0 |
| bug count | 24 | 0 | 0 |
| starter vs solution | 85 | 0 | 0 |
| asset copies | 105 | 0 | 0 |
| html-validate | 30 | 0 | 0 |
| htmlhint | 30 | 0 | 0 |
| **total** | 437 | 0 | 0 |

RESULT: PASS
```

## Pass 2 · recheck from scratch

1. Rebuilt every A2 file from the generator, deleted `_tools/screens/` and re-rendered all 109 pages (every starter,
   solution and demo step) in headless Chrome 155 over a local HTTP server (like Live Server). Screens:
   `_tools/screens/`. Only planted 404s appear; the other 404 is Chrome's automatic `/favicon.ico` request.
2. **Single-fix render test** for every bug tagged V that is a text change: copy the starter to a fresh folder, render
   every page, apply **only that one fix**, render again, and compare the pixels. Prerequisite "fix first" mends are
   applied to the baseline (D2-06 bugs 3–6 need the `<link>` mended; D2-HW1 bugs 5–12 need its `<link>`, and bugs 8–9 also need `.card`).
   Rows marked "manual" are whole-HTML rewrites; those were checked by looking at the starter/solution screenshots.
   **Defect found and mended in this pass:** D2-HW1 bug 10 was invisible. See CHANGES-FROM-PLAN-A2.md.
3. check_pack.py run again on the final files:

```
check_pack.py --day 2  root: D:\TSI AI powered Web App Devloper\Daily Planner +PPT\week2\day2

INFO    D2-04: starter classwork/D2-04-broken-media/index.html:19 <audio src="media/canteen_bell.wav"> file not found (exact case)
INFO    D2-04: starter classwork/D2-04-broken-media/index.html:23 <video poster="image/poster-momo-steam.svg"> file not found (exact case)
INFO    D2-04: starter classwork/D2-04-broken-media/index.html:30 <iframe src="kathmandu-map.htm"> file not found (exact case)
INFO    D2-06: starter classwork/D2-06-stylesheet-not-loading/index.html:7 <link href="css/styles.css"> file not found (exact case)
INFO    D2-HW1: starter homework/D2-HW1-haunted-portfolio-repair/index.html:7 <link href="style.css"> file not found (exact case)

| Check | Pass | Fail | Missing |
|---|---|---|---|
| pack files | 9 | 0 | 0 |
| assets | 21 | 0 | 0 |
| folders | 27 | 0 | 0 |
| files | 25 | 0 | 0 |
| starter words | 51 | 0 | 0 |
| solution links | 30 | 0 | 0 |
| bug count | 24 | 0 | 0 |
| starter vs solution | 85 | 0 | 0 |
| asset copies | 105 | 0 | 0 |
| html-validate | 30 | 0 | 0 |
| htmlhint | 30 | 0 | 0 |
| **total** | 437 | 0 | 0 |

RESULT: PASS
```

### Single-fix render test (pass 2)

| Id | Bug | Tag | Result |
|---|---|---|---|
| D2-02 | 1 | R / D(W3C) | skip (not V) |
| D2-02 | 2 | R | skip (not V) |
| D2-02 | 3 | R | skip (not V) |
| D2-02 | 4 | R | skip (not V) |
| D2-02 | 5 | V | manual (HTML rewrite; checked in screenshots) |
| D2-03 | 1 | D(LH) / D(HH) | skip (not V) |
| D2-03 | 2 | R | skip (not V) |
| D2-03 | 3 | D(LH) / D(HH) | skip (not V) |
| D2-03 | 4 | R | skip (not V) |
| D2-03 | 5 | R | skip (not V) |
| D2-03 | 6 | V | manual (HTML rewrite; checked in screenshots) |
| D2-04 | 1 | V | manual (HTML rewrite; checked in screenshots) |
| D2-04 | 2 | V | manual (HTML rewrite; checked in screenshots) |
| D2-04 | 3 | V | manual (HTML rewrite; checked in screenshots) |
| D2-04 | 4 | V | manual (HTML rewrite; checked in screenshots) |
| D2-04 | 5 | V | manual (HTML rewrite; checked in screenshots) |
| D2-06 | 1 | V | visible change ✔ |
| D2-06 | 2 | V | manual (HTML rewrite; checked in screenshots) |
| D2-06 | 3 | V | visible change ✔ |
| D2-06 | 4 | V | visible change ✔ |
| D2-06 | 5 | V | visible change ✔ |
| D2-06 | 6 | V | visible change ✔ |
| D2-08 | 1 | V | visible change ✔ |
| D2-08 | 2 | V | visible change ✔ |
| D2-08 | 3 | V | visible change ✔ |
| D2-08 | 4 | V | visible change ✔ |
| D2-08 | 5 | V (on hover) | visible change ✔ |
| D2-10 | 1 | V | visible change ✔ |
| D2-10 | 2 | V | visible change ✔ |
| D2-10 | 3 | V | visible change ✔ |
| D2-10 | 4 | V | visible change ✔ |
| D2-10 | 5 | V | visible change ✔ |
| D2-12 | 1 | V | visible change ✔ |
| D2-12 | 2 | V | visible change ✔ |
| D2-12 | 3 | V | visible change ✔ |
| D2-12 | 4 | V | visible change ✔ |
| D2-12 | 5 | V | visible change ✔ |
| D2-14 | 1 | V | visible change ✔ |
| D2-14 | 2 | V | visible change ✔ |
| D2-14 | 3 | V | visible change ✔ |
| D2-14 | 4 | V | visible change ✔ |
| D2-14 | 5 | V | visible change ✔ |
| D2-FF4 | 1 | V | visible change ✔ |
| D2-FF4 | 2 | V | visible change ✔ |
| D2-FF4 | 3 | V | visible change ✔ |
| D2-FF4 | 4 | V | visible change ✔ |
| D2-FF4 | 5 | V | visible change ✔ |
| D2-FF4 | 6 | V | visible change ✔ |
| D2-FF4 | 7 | V | visible change ✔ |
| D2-FF4 | 8 | V | visible change ✔ |
| D2-FF4 | 9 | V | visible change ✔ |
| D2-FF4 | 10 | V | visible change ✔ |
| D2-FF5 | 1 | D(W3C) | skip (not V) |
| D2-FF5 | 2 | R | skip (not V) |
| D2-FF5 | 3 | R | skip (not V) |
| D2-FF5 | 4 | D(LH) | skip (not V) |
| D2-FF5 | 5 | V | manual (HTML rewrite; checked in screenshots) |
| D2-FF5 | 6 | R | skip (not V) |
| D2-FF5 | 7 | D(LH) | skip (not V) |
| D2-FF5 | 8 | V | visible change ✔ |
| D2-FF5 | 9 | V | visible change ✔ |
| D2-FF5 | 10 | V | visible change ✔ |
| D2-FF5 | 11 | V | manual (HTML rewrite; checked in screenshots) |
| D2-HW1 | 1 | V | manual (HTML rewrite; checked in screenshots) |
| D2-HW1 | 2 | R / D(W3C) | skip (not V) |
| D2-HW1 | 3 | R | skip (not V) |
| D2-HW1 | 4 | D(HH) / D(LH) | skip (not V) |
| D2-HW1 | 5 | V | visible change ✔ |
| D2-HW1 | 6 | V | visible change ✔ |
| D2-HW1 | 7 | V | visible change ✔ |
| D2-HW1 | 8 | V | visible change ✔ |
| D2-HW1 | 9 | V | visible change ✔ |
| D2-HW1 | 10 | V | visible change ✔ |
| D2-HW1 | 11 | V | visible change ✔ |
| D2-HW1 | 12 | V | visible change ✔ |
| D2-HW4 | 1 | D(LH) | skip (not V) |
| D2-HW4 | 2 | R | skip (not V) |
| D2-HW4 | 3 | V | manual (HTML rewrite; checked in screenshots) |
| D2-HW4 | 4 | V | manual (HTML rewrite; checked in screenshots) |
| D2-HW4 | 5 | V | visible change ✔ |
| D2-HW4 | 6 | V | visible change ✔ |
| D2-HW4 | 7 | V | visible change ✔ |
| D2-HW4 | 8 | V | visible change ✔ |
| D2-HW4 | 9 | V | visible change ✔ |
| D2-HW4 | 10 | V | visible change ✔ |

## Other checks

- **Demos:** `npx html-validate` on all 48 demo pages. The only errors are on purpose: `B2-a11y-meta/step-01-before`
  (lang, alt, label: the page Narrator reads aloud) and the muted `autoplay` video in B3 step 02/03 (the rule fires on
  any autoplay; the STEPS talk-track says so). HTMLHint: 2 errors, both in B2 step-01-before.
- **Lighthouse 13.5.0** (`npx lighthouse`, headless Chrome):
  - D2-03 starter: accessibility 84; fails html-has-lang and image-alt.
  - D2-03 solution: accessibility 100.
  - D2-FF5 starter: fails frame-title and heading-order.
  - D2-HW2 model answer: accessibility 100 on both pages.
  - D2-HW4 starter: fails meta-description.

  Three planned D(LH) tags do not fire, so they were re-tagged: D2-03 bugs 5–6 and D2-HW4 bug 2 (see the change log).
- **D2-FF3:** Chrome's computed colours match `ANSWERS.md` for all 8 puzzles: green, red, purple, teal, crimson, navy, green, maroon.
- **D2-04:** both audio players, the video and the iframe work in the solution. The starter shows no first player, a
  0:00 player, an invisible video and a 404 window.
- **Zips** (`_dist/`): W2D2-Student-Pack.zip (152 entries, top folder `W2D2/`, CRC OK). It contains **no** `solution/`,
  `_solutions/`, BUGS.md, ANSWERS.md, README-answer.md, instructor-demos, _tools, deck or instructor-guide.
  W2D2-Instructor-Pack.zip: 493 entries.
