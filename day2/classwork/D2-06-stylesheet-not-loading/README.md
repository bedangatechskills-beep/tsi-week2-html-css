# D2-06 · Stylesheet not loading

**Time:** 9 min · **Type:** 🐞 Bug-hunt

**Goal:** Mend the link to the stylesheet and the CSS mistakes, so Didi's page wears its outfit.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Look at the page. It should have a cream background, a big cherry title, a yellow marker on one sentence and a navy footer.
2. Mend the `<link>` in `index.html` first. Save. Now the outfit loads.
3. Then read `css/style.css` line by line and mend each mistake. Save after each one and look.

## The bugs

**There are 6 bugs. Find at least 4.**

> **Fix this first:** bugs 1 and 2 (the `<link>` line). Until the stylesheet loads, you cannot see any of the others.

Hints, one per bug type:

- **The link:** check every letter of `rel` and every letter of the file name.
- **Braces:** every `{` needs its `}`.
- **Semicolons:** every declaration ends with `;`.
- **Spelling:** CSS uses American English.
- **Comments:** CSS has only one comment style: `/* … */`.

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

Cream page, cherry h1, maroon h2 with a line under it, navy body text with space between lines, a yellow marker on "She still folds every momo by hand", and a navy footer with white text.

## Scoreboard

`I found __ / 6. The reveal taught me: ________`

## Stuck?

1. F12 → **Console**: a red 404 means the file name in `href` is wrong.
2. F12 → Elements → click an element → **Styles**. A crossed-out line with ⚠ is a declaration the browser dropped.
3. Ask the AI tutor: "Why would a CSS rule after a missing brace stop working?"

## Fast?

Try **D2-FF4** Haunted stylesheet (10 CSS mistakes).
