# D1-14 · Extend the order slip

**Time:** 7 min · **Type:** ✏️ Modify · **Work:** alone

**Goal:** Add new kinds of inputs to a working form, and test each one in the URL.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The TSI Canteen order slip works. Make it better.

**Required (3):**
- [ ] a **Phone** field with `type="tel"` and its `<label>`
- [ ] a **batch** radio group: Morning / Evening. Both radios share **one** `name` and have their own `value`
- [ ] a `<fieldset>` with a `<legend>Your batch</legend>` around the two radios

**Bonus:**
- [ ] a pickup date: `type="date"`
- [ ] two checkboxes: "Extra achar" and "Extra soup"
- [ ] `type="color"`: "Favourite colour for your TSI T-shirt"

Every new input needs a `<label>` with `for` = the input's `id`. Then fill the form, press **Send order**, and read the URL.

## Done looks like

- Clicking each label puts the cursor in (or ticks) its input.
- Only one batch can be chosen.
- The URL shows your new fields, for example `…&phone=9841000000&batch=evening&…`.

## Stuck?

1. Copy an existing `<p>` block (Alt+Shift+↓) and change it. Faster and fewer typos.
2. Radios: same `name`, different `id` and `value`.
3. Nothing in the URL for a field? It has no `name`.

## Fast?

Try **D1-FF5 Notice Board** in `classwork/fast-finishers/`.
