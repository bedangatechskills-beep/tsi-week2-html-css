# D2-FF5 · Lost & Found

**Time:** fast finisher · **Type:** 🐞 Bug-hunt

**Goal:** Find 11 mistakes from every part of today: semantic tags, accessibility, media, CSS values and selectors.

Open `index.html` with Live Server (right-click → **Open with Live Server**).

## Task

1. Check the page with your eyes, the **Tab** key and **Lighthouse** (F12 → Lighthouse → Accessibility).
2. Read `index.html` against the rules for semantic tags and headings.
3. Read `css/style.css` for values and selectors that do not work.
4. Mend each mistake. Save and check.

## The bugs

**There are 11 bugs. Find at least 9.**

Hints, one per bug type:

- **Semantic:** is each box named correctly? Can a footer hold a header?
- **Meaning:** bold that only looks bold vs bold that means "important".
- **Headings:** h1 → h2 → h3, no jumps.
- **Controls:** can Tab reach the Apply button?
- **Tables:** header cells are `th`, not `td` + `b`.
- **Frames:** every iframe needs a title.
- **CSS values:** units, and `:` not `=`.
- **Selectors:** a space in a selector means "inside". A comma does not belong in `class="…"`.

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

## Done looks like

A cream page with a bigger intro line, a real nav, h2 Programme, a fee table with a navy header row, a red pill Apply button you can Tab to, a white card with a red left edge, and a map with a title.

## Scoreboard

`I found __ / 11. The reveal taught me: ________`

## Stuck?

1. Lighthouse finds 2 of them. Tab finds 1. Your eyes find the CSS ones.
2. F12 → Elements: click the card. Which classes does the browser see?
3. Read `notes/01-semantic-html5.md` and `notes/09-debugging-css.md`.

## Fast?

Try **D2-FF6** Bootstrap try-it.
