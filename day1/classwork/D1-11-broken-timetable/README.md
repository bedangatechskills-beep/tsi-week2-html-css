# D1-11 · Broken Timetable

**Time:** 8 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair a table: header cells, cell counts, colspan and rowspan.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

This is the TSI Week 2 timetable. It has **6 columns**: Time + Sun, Mon, Tue, Wed, Thu. Every row must fill 6 columns. A `colspan` or `rowspan` cell counts for more than one.

File: `index.html` (one file). The `<style>` in `<head>` only draws lines around the cells. Leave it.

**There are 5 bugs. Find at least 3.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Header row**: which tag makes a header cell?
- **Count the cells**: count every row. Each row must fill 6 columns.
- **Spelling**: check the attribute that joins cells across a row.
- **rowspan**: a cell that goes down 2 rows takes a place in the next row too.
- **Text outside cells**: all text in a table must be inside `<td>` or `<th>`.

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

- The header row is bold.
- Every row lines up: no gaps, nothing sticks out on the right.
- Lunch and Tea break each fill the five day columns.
- Nothing shows above the table except the caption.

## Scoreboard

Write this in your notebook:

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. Put your finger on the screen and count the cells in each row.
2. Draw the table on paper: 6 columns. Mark which cells the `rowspan` and `colspan` take.
3. F12 → Elements: click a row (`<tr>`) to highlight it on the page.

## Fast?

Try **D1-FF4 Evil page** in `classwork/fast-finishers/`.
