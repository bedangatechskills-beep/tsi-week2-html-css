# D1-FF5 · Notice Board

**Time:** 20–25 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Find the bugs that were cut from today's class hunts. Nothing is thrown away!

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The TSI notice board page has one of every kind of bug from today: skeleton, text, lists, paths and tables.

Files: `index.html` and `images/notice-board.svg`.

**There are 12 bugs. Find at least 10.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Skeleton**: check how `<head>` ends, and that nothing comes after `</html>`.
- **Headings**: one level at a time; headings are not for making text bold.
- **Spacing**: `<br>` is a pause, not a spacer. Is every void tag written correctly?
- **Lists**: a nested list lives inside an `<li>`; a list only holds `<li>`s; open and close with the same tag.
- **Paths**: file names have no spaces. A `#link` must match an `id` exactly.
- **Tables**: every cell lives in a row.

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

- The picture shows. The divider line shows. No big gap.
- "Events" jumps to the Events heading.
- Problems panel: 0. F12 → Elements matches your code.

## Scoreboard

Write this in your notebook:

`I found __ / 12. The reveal taught me: ________`

## Stuck?

1. Problems panel first (Ctrl+Shift+M). Then your eyes. Then F12 → Elements.
2. Each hint above is one or two bugs. Tick them off.
3. The bug types come from D1-04, D1-06, D1-07, D1-09 and D1-11. Look back at those reveals.

## Fast?

Try **D1-FF6 Gallery detail page**.
