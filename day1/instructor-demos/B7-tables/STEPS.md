# B7 · Tables — demo steps

**Four tags, one team**: `table`, `tr`, `th`, `td`. A table is the **canteen price board**: for data, not for page
layout. The `<style>` block in `<head>` only draws the cell lines (paste it; CSS is Day 2).

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · Four tags, one team

**Folder:** `step-01-basic-price-board/`

**Emmet:** `table>tr*4>td*2` then change the first row's `td` to `th`

**Type exactly:**

```html
<h1>TSI Canteen price board</h1>
<table>
  <tr><th>Item</th><th>Price</th></tr>
  <tr><td>Veg momo</td><td>Rs. 120</td></tr>
  <tr><td>Chicken momo</td><td>Rs. 150</td></tr>
  <tr><td>Milk tea</td><td>Rs. 25</td></tr>
</table>
```

**Point at:** the header row is bold and centred: `th` does that by itself.

> 🗣️ **Say this:** "Table is the board. Tr is one row. Th is a header cell. Td is a normal data cell. Four tags, one team."

## Step 2 · caption, thead, tbody, tfoot, scope

**Folder:** `step-02-caption-thead-tbody-tfoot/`

**Type exactly:**

```html
<h1>TSI Canteen price board</h1>
<table>
  <caption>Today's prices</caption>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Veg momo</td><td>Rs. 120</td></tr>
    <tr><td>Chicken momo</td><td>Rs. 150</td></tr>
    <tr><td>Milk tea</td><td>Rs. 25</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Combo: momo + tea</td><td>Rs. 160</td></tr>
  </tfoot>
</table>
```

**Point at:** nothing much changes on screen; F12 → Elements shows the three groups. "Screen readers use this."

> 🗣️ **Say this:** "Caption is the title of the board. Thead, tbody and tfoot are the top, the middle and the bottom. Scope col says: this header is for the whole column."

## Step 3 · colspan and rowspan

**Folder:** `step-03-colspan-rowspan/`

**Type exactly:**

```html
<h1>TSI Canteen price board</h1>
<table>
  <caption>Today's prices</caption>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Size</th><th scope="col">Price</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">Chicken momo</td><td>Half plate</td><td>Rs. 80</td></tr>
    <tr><td>Full plate</td><td>Rs. 150</td></tr>
    <tr><td>Milk tea</td><td>Cup</td><td>Rs. 25</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">All prices include achar.</td></tr>
  </tfoot>
</table>
```

**Point at:** draw the 3-column grid on the board. The rowspan cell takes a place in the next row, so that row has only 2 `td`s. Then change `colspan="3"` to `"2"`: the row stops short and leaves a gap (that is D1-11 and D1-15). (A colspan that is too big, like `"4"`, shows nothing at all: the extra column is 0 px wide.)

> 🗣️ **Say this:** "Colspan joins cells across. Rowspan joins cells down. Every row must still add up to the same number of columns."
