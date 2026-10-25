# D1-06 · Canteen News

**Time:** 10 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair heading, entity and closing-tag mistakes in a news page.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Didi writes the **TSI Canteen Weekly** every Sunday. This week the page looks strange. Help her.

File: `index.html` (one file).

**There are 5 bugs. Find at least 3.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Headings**: how many `<h1>` should one page have?
- **Entities**: how do you *print* a `<` or `>` on the page? Look for one that is spelled wrong, too.
- **Indent that never stops**: check how the quote ends.
- **Italic that never stops**: check every opening inline tag has its closing tag.

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

- One `<h1>` only.
- The tip shows `Wrap text in <p> tags.` on one line.
- The price shows `Rs. 150`.
- Only Didi's words are indented. Only "do not" is italic.
- Problems panel: 0 problems.

## Scoreboard

Write this in your notebook:

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. Read the page from top to bottom in Chrome. Where does it *start* to look wrong? The mistake is just above that point.
2. Open the Problems panel (Ctrl+Shift+M). Two of the bugs are listed there.
3. Check the entities table in `notes/04-text-tags-and-entities.md`.

## Fast?

Try **D1-FF1 Entity art** in `classwork/fast-finishers/`.
