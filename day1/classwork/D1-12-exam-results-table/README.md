# D1-12 · Exam results table

**Time:** 6 min · **Type:** ✏️ Modify · **Work:** alone

**Goal:** Turn a plain table into a well-built data table.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The table has the data, but no structure. Add:

- [ ] a `<caption>` (the table's title): "TSI Week 1 quiz results (morning batch)"
- [ ] `<thead>` around the first row, and `<tbody>` around the 4 student rows
- [ ] header cells: change the first row's `<td>` to `<th scope="col">`
- [ ] a **Class total** row at the bottom: one cell with `colspan="3"` that says "Class total", and one cell with the sum (142)
- [ ] Bonus: put the Class total row in a `<tfoot>`

## Done looks like

- A caption above the table, a bold header row, and a total row where "Class total" spans 3 columns.
- Every row fills exactly 4 columns.

## Stuck?

1. The order inside `<table>` is: caption, thead, tbody, tfoot.
2. `colspan="3"` + 1 more cell = 4 columns. Count!
3. Look at the price-board example in `notes/08-tables.md`.

## Fast?

Try **D1-FF3 Mystery page** in `classwork/fast-finishers/`.
