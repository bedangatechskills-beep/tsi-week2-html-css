# D1-07 · Broken Lists

**Time:** 7 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair the structure of four lists.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Aarav is cooking momo for his friends. His shopping list, spice box, steps and kitchen words are all lists, and some of them are broken.

File: `index.html` (one file).

**There are 4 bugs. Find at least 2.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Missing parent**: look for the missing indent (and the missing bullets).
- **Order matters**: shopping list or recipe steps? Which list type gives numbers?
- **Typo**: read every list item tag letter by letter.
- **Glossary**: `dl` holds `dt` (the word) and `dd` (the meaning). Nothing else.

### How bugs hide (the visibility legend)

| Tag | Meaning | How you see it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code (Problems panel: Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser really built | F12 → Elements |
| **D(URL)** | Submit the form and read the address bar | the URL bar |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi) |
| **H** | Hidden on Windows; breaks on a real Linux server (capital letters in a file name) | the instructor explains |
| **R** | Rule check: no tool shows it. Read the code and check the rule | your brain + the notes |

## Done looks like

- Every list is indented the same way.
- The cooking steps are numbered 1–4.
- "Garlic" has a bullet.
- The kitchen words show the meaning indented under each word, with no bullets.

## Scoreboard

Write this in your notebook:

`I found __ / 4. The reveal taught me: ________`

## Stuck?

1. Press F12 → Elements. Open `<body>`. Is every `<li>` inside a `<ul>` or `<ol>`?
2. Shopping list = order does not matter. Recipe steps = order matters.
3. Compare with the `<dl>` example in `notes/05-lists.md`.

## Fast?

Go on to **D1-08 Momo recipe**.
