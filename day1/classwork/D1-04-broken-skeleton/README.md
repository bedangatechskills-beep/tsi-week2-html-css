# D1-04 · Broken Skeleton

**Time:** 10 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair the skeleton of a page. Use HTMLHint and F12 to see the silent problems.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Aarav wrote his first page last night. Some parts are broken. The browser is a polite guesser: it shows *something*, but not what Aarav wanted.

File: `index.html` (one file).

**There are 6 bugs. Find at least 4.**

> ⚠️ **Fix this first:** if most of the page is giant and bold, repair the heading first. It makes the other problems hard to see.

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **First line**: what must every HTML file start with?
- **The `<html>` tag**: it should say which language the page is in.
- **The browser tab**: does it show the page name? Check the spelling of the tag in `<head>`.
- **Giant text**: a heading that never ends.
- **Nesting**: last box opened, first box closed.
- **Missing footer**: how does a comment end?

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

- No squiggles in VS Code. The Problems panel (Ctrl+Shift+M) shows **0** problems for this file.
- The tab says **Aarav's Page**.
- Only "Hello, I am Aarav" is big.
- The line and "Made by Aarav, Week 2" show at the bottom.

## Scoreboard

Write this in your notebook:

`I found __ / 6. The reveal taught me: ________`

## Stuck?

1. Open the Problems panel (Ctrl+Shift+M). Click each problem. VS Code jumps to the line.
2. Press F12 → Elements. Compare what the browser built with your code.
3. Compare with the skeleton in your notes (`notes/03-html-skeleton-and-anatomy.md`) line by line.

## Fast?

Try **D1-FF4 Evil page** in `classwork/fast-finishers/`.
