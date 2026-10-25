# D2-HW1 · Haunted portfolio repair

**Time:** 40 min (at home, must-do) · **Type:** 🐞 Bug-hunt

**Goal:** Rajan's portfolio is haunted: semantic mistakes and CSS mistakes together. Mend both pages and the stylesheet.

Open the folder in VS Code, then open `index.html` with Live Server.

## Task

1. Open both pages: `index.html` and `projects.html`. Compare how they look.
2. Mend the home page's `<link>` first (see below). Then go through the rest.
3. Check each page with your eyes, HTMLHint (Problems panel), F12 → Elements and Lighthouse.
4. Write each bug you found in a short list: file, line, what was wrong, how you mended it.

## The bugs

**There are 12 bugs. Find at least 10.**

> **Fix this first:** bug 1, the `<link>` in `index.html`. Until the home page loads its CSS, you can't see the CSS bugs there.

Hints, one per bug type:

- **The link:** where is the CSS file?
- **Semantic:** how many `<main>`? Does every `<section>` have a heading?
- **Images:** every meaningful image needs words.
- **Values:** units, hex digits, typos in `display`.
- **Selectors:** capital letters; `#` is for ids, `.` is for classes.
- **Box model:** do two cards fit side by side? Does every border have a style?
- **Braces:** every `{` needs a `}`.

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

Both pages share one look: a navy bar with a horizontal white menu, a centred white hero with a round photo, two project cards side by side with grey borders, and a navy footer. HTMLHint shows no problems.

## Scoreboard

`I found __ / 12. The reveal taught me: ________`

## Stuck?

1. Do the easy ones first: anything you can see. Then the semantic ones (read the code).
2. F12 → Elements → Styles shows crossed-out declarations and missing rules.
3. Ask the AI tutor to explain an error message, not to mend the file for you.

## Fast?

Start **D2-HW2** (style your own portfolio).
