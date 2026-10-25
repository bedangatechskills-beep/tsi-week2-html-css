# D2-FF4 · Haunted stylesheet

**Time:** fast finisher · **Type:** 🐞 Bug-hunt

**Goal:** Chase 10 ghosts out of a stylesheet. Every CSS mistake type from today is here.

Open `index.html` with Live Server (right-click → **Open with Live Server**).

## Task

1. Look at the page, then read `css/style.css` from top to bottom.
2. Mend each mistake. Save after each one and look at the page.
3. All 10 mistakes are in `css/style.css`. Do not change `index.html`.

## The bugs

**There are 10 bugs. Find at least 8.**

Hints, one per bug type:

- **Braces:** every `{` needs a `}`.
- **Units:** sizes need a unit, with no space before it.
- **Selectors:** capital letters, and ids that do not exist.
- **Spelling:** of properties and of values.
- **Shorthand:** a border needs a style.
- **Comments:** CSS has only `/* … */`.

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

A purple nav bar, a big ghost-green title, a large italic subtitle, red-bordered story boxes, gold headings, a 140 px badge on its own line, a green rules list, a green marker on "no bell in the courtyard", and a grey centred footer.

## Scoreboard

`I found __ / 10. The reveal taught me: ________`

## Stuck?

1. F12 → Elements → Styles: crossed-out lines with ⚠ are dropped declarations.
2. A whole rule missing from Styles? Its selector does not match (or a brace/comment above it is broken).
3. Read `notes/09-debugging-css.md`: "what the browser drops".

## Fast?

Try **D2-FF5** Lost & Found.
