# 08 · Tables: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B7 · Layer: Frontend*

> **Today in one sentence:** A table is for data in rows and columns, like the canteen price board, never for page layout.

## The picture to keep in your head

**Four tags, one team** / the **canteen price board**: data, not layout.

```text
          TSI CANTEEN PRICE BOARD            ← <caption>
┌──────────────┬──────────┬────────────┐
│ Item         │ Half     │ Full       │    ← a row <tr> of header cells <th>
├──────────────┼──────────┼────────────┤
│ Steam momo   │ Rs. 90   │ Rs. 150    │    ← a row <tr> of data cells <td>
│ Fried momo   │ Rs. 110  │ Rs. 180    │
│ Milk tea     │ Rs. 30 (one size)     │    ← one cell spread over 2 columns: colspan="2"
└──────────────┴──────────┴────────────┘
```

| The team | Its job |
|---|---|
| `<table>` | The whole board |
| `<tr>` | **T**able **r**ow: one line across the board |
| `<th>` | **T**able **h**eader cell: the title of a column (or row), bold and centred |
| `<td>` | **T**able **d**ata cell: one value |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Row | A line of cells across | `<tr>…</tr>` |
| Column | A line of cells down. HTML has no column tag: columns come from cell position | the "Price" column |
| Cell | One box: `th` or `td` | `<td>Rs. 150</td>` |
| `<caption>` | The title of the table, right after `<table>` | `<caption>TSI Canteen prices</caption>` |
| `<thead>` | The group of header rows | the row with "Item, Price" |
| `<tbody>` | The group of data rows | all the food rows |
| `<tfoot>` | The group of summary rows | a "Total" row |
| `colspan` | One cell stretches across several columns | `<td colspan="5">Lunch</td>` |
| `rowspan` | One cell stretches down several rows | `<td rowspan="2">Project lab</td>` |
| `scope` | Says what a `th` is the header for: `col` or `row` | `<th scope="col">Price</th>` |

## How it works

### 1. The counting rule

**Every row must add up to the same number of columns.** A normal cell counts 1. A cell with `colspan="3"`
counts 3.

```text
6 columns (Time + Sun, Mon, Tue, Wed, Thu):
<tr> th + td + td + td + td + td </tr>     = 1+5 = 6      ✔
<tr> th + td + td + td + td </tr>          = 1+4 = 5      ✘ the row is short; a gap on the right
<tr> th + td colspan="5" </tr>             = 1+5 = 6      ✔ (the Lunch row)
<tr> th + td colspan="2" </tr>             = 1+2 = 3      ✘ colspan too small: a gap at the end
```

### 2. The rowspan rule

A cell with `rowspan="2"` **also takes a seat in the row below**. So the row below must have **one cell less**.

```text
            Sun          Mon
10:00   Project lab    HTML        ← "Project lab" has rowspan="2"
11:00   (taken ↑)      CSS         ← this row writes only 2 cells: time + CSS
```

If the row below still writes its own cell, there is one cell too many and it sticks out on the right
(D1-11 bug 4, D1-HW1 bug 6).

### 3. `th` vs `td`

- `th` = a title cell. Bold, centred, and screen readers announce it with each value ("Price: Rs. 150").
- `td` = a value.
- A header row made of `td` looks plain and loses that meaning (D1-11 bug 1, D1-HW1 bug 5).
- Add `scope="col"` to column headers and `scope="row"` to row headers. It tells screen readers which way the header points.

### 4. Everything must be inside a cell

Text, links, images: all go **inside** a `th` or `td`. Text written between `</tr>` and `<tr>` is outside every
cell. The browser cannot leave it there, so it **moves it above the table** (D1-11 bug 5). Cells written directly
in `<table>` with no `<tr>`: the browser invents a `<tr>` for them (D1-FF5 bug 12, D1-HW4 bug 5). Note 10
shows both in Chrome.

### 5. Caption first

`<caption>` must be the first thing inside `<table>`. If it comes after a row, Chrome still shows it, but it is
invalid HTML (D1-HW4 bug 6, D(W3C)).

### 6. Data, not layout

Old websites used tables to place things side by side. Don't. Tables are for **data**. Layout is CSS's job
(flexbox and grid, session 3.2).

## Code you built today

### Step 1: the basic price board

File: `prices.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen · Price board</title>
</head>
<body>
  <h1>TSI Canteen</h1>
  <table>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
    </tr>
    <tr>
      <td>Steam momo</td>
      <td>Rs. 150</td>
    </tr>
    <tr>
      <td>Fried momo</td>
      <td>Rs. 180</td>
    </tr>
    <tr>
      <td>Jhol momo</td>
      <td>Rs. 200</td>
    </tr>
  </table>
</body>
</html>
```

- Emmet: `table>tr*4>td*2`, then change the first row's `td` to `th`.
- There are no borders yet. Borders are CSS (Day 2). F12 → hover each `<td>` to see the cells.

### Step 2: caption, thead, tbody, tfoot

File: `price-board.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen · Full price board</title>
</head>
<body>
  <h1>TSI Canteen</h1>
  <table>
    <caption>Price board, Week 2</caption>
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Half plate</th>
        <th scope="col">Full plate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Steam momo</th>
        <td>Rs. 90</td>
        <td>Rs. 150</td>
      </tr>
      <tr>
        <th scope="row">Fried momo</th>
        <td>Rs. 110</td>
        <td>Rs. 180</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Prices include tax.</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

- Here each food name is a **row header** (`th scope="row"`).
- The footer row has one cell with `colspan="3"`: 3 = 3 columns. ✔
- **Predict:** change `colspan="3"` to `colspan="4"`. What happens on the right side?

### Step 3: colspan and rowspan (the timetable)

File: `timetable.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Week 2 timetable</title>
</head>
<body>
  <h1>TSI Week 2 timetable</h1>
  <table>
    <caption>Morning batch</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Sun</th>
        <th scope="col">Mon</th>
        <th scope="col">Tue</th>
        <th scope="col">Wed</th>
        <th scope="col">Thu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">7:00</th>
        <td>HTML</td>
        <td>HTML</td>
        <td rowspan="2">Project lab</td>
        <td>CSS</td>
        <td>CSS</td>
      </tr>
      <tr>
        <th scope="row">8:00</th>
        <td>Lists</td>
        <td>Tables</td>
        <td>Box model</td>
        <td>Display</td>
      </tr>
      <tr>
        <th scope="row">9:00</th>
        <td colspan="5">Lunch</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

Count every row: it must be 6 (Time + 5 days).
- Row 7:00: 1 + 5 = 6 ✔ ("Project lab" counts 1 here)
- Row 8:00: 1 + 4 = 5 cells written + 1 seat taken by "Project lab" = 6 ✔
- Row 9:00: 1 + 5 (colspan) = 6 ✔

**Predict:** add a 5th `<td>` to the 8:00 row. Where does it appear?

### Step 4: the exam results table (D1-12 style)

File: `results.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Week 2 quiz results</title>
</head>
<body>
  <h1>Week 2 quiz results</h1>
  <table>
    <caption>HTML quiz, out of 20</caption>
    <thead>
      <tr>
        <th scope="col">Student</th>
        <th scope="col">HTML</th>
        <th scope="col">Forms</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aarav</td>
        <td>14</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Sunita Gurung</td>
        <td>18</td>
        <td>19</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Total</td>
        <td>63</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

- Total row: `colspan="2"` + 1 cell = 3 columns ✔. 14 + 12 + 18 + 19 = 63.

## Quick reference

```text
<table>
  <caption>Title</caption>
  <thead> <tr> <th scope="col">A</th> <th scope="col">B</th> </tr> </thead>
  <tbody> <tr> <td>1</td> <td>2</td> </tr> </tbody>
  <tfoot> <tr> <td colspan="2">Note</td> </tr> </tfoot>
</table>
```

| You want... | Write |
|---|---|
| A cell over 3 columns | `<td colspan="3">` |
| A cell down 2 rows | `<td rowspan="2">` (and one cell less in the next row) |
| A column header | `<th scope="col">` |
| A row header | `<th scope="row">` |
| A table quickly | Emmet `table>tr*3>td*4` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| Header row is not bold | `td` used for headers (D1-11 bug 1, D1-HW1 bug 5) | `th scope="col"` |
| Cells shifted left; a gap on the right | A row has 4 day cells, not 5 (D1-11 bug 2) | Add the missing cell |
| "Lunch" fills only one column | `colspam` typo: unknown attribute, ignored (D1-11 bug 3) | `colspan` |
| An extra cell sticks out on the right | A rowspan cell already takes that seat (D1-11 bug 4, D1-HW1 bug 6) | Delete one cell in the next row |
| "Tea break 3:00" appears **above** the table | Text outside any cell (D1-11 bug 5) | Put it in a `<td colspan="…">` in its own row |
| A gap at the end of one row | `colspan="2"` where the row needs 3 columns (D1-15 bug 4). A colspan that is too *big* is almost invisible in Chrome (the extra column is 0 px wide) | `colspan="3"` |
| F12 shows a `<tr>` you never wrote | Cells directly in `<table>` (D1-FF5 bug 12, D1-HW4 bug 5) — D(F12) | Wrap them in `<tr>` |
| W3C: caption in the wrong place | `<caption>` after the first row (D1-HW4 bug 6) — D(W3C) | Move it right after `<table>` |

## Check yourself

1. Name the four team tags and the job of each.
2. Why does HTML have no "column" tag? Where do columns come from?
3. A table has 4 columns. A row has `<th>` + `<td colspan="2">`. Is the row complete? What is missing?
4. A cell has `rowspan="3"`. What must the next two rows do?
5. Why use `th` and not a bold `td`?
6. What does `scope="col"` tell a screen reader?
7. **Predict:** where does the browser put text that you write between two `<tr>`s?
8. Explain to a friend why a table is a price board and not a way to arrange a page.

## Try it

- **D1-11 Broken Timetable**: 5 bugs. Count the cells in every row.
- **D1-12 Exam results table**: add `caption`, `thead`/`tbody`, `th scope="col"` and a Total row with `colspan`. Bonus: `tfoot`.
- **D1-FF5 Notice Board**: bug 12 is a table bug.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "My table has 6 columns and one cell has rowspan='2'. Explain how many cells the next row should have and why. No code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [09 · Forms](09-forms.md).*
