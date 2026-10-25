# D1-HW2 · Momo House catering page

**Time at home:** about 1.5 h (if you can; HW1 and HW3 come first) · **Type:** 🔨 Build · **Work:** alone

**Goal:** Add a new page to a real site: one table and one form, linked from every page.

## Open it

Open the `W2D1` folder in VS Code. Open this folder's `index.html` with Live Server.
This is the **repaired** Momo House site from class (D1-15). Everything works.

## Your task

Didi wants to offer **catering** (momo for weddings, birthdays and office parties). Build `catering.html`.

1. Create `catering.html` next to `index.html`. Start with `!` + Tab. Copy the logo and nav from `about.html`.
2. Add an `<h1>` and one short intro paragraph.
3. Add **one table** of packages:
   - [ ] `<caption>`, `<thead>` with `<th scope="col">`, `<tbody>`
   - [ ] 3 packages (for example Small / Party / Wedding), with what you get and the price per person
   - [ ] Bonus: a `<tfoot>` row with `colspan` ("Minimum 20 people …")
4. Add **one form** (`method="get"`):
   - [ ] the event **date** (`type="date"`)
   - [ ] the **number of people** (`type="number"`, with `min`)
   - [ ] the **package**: a radio group with one shared `name` and a `value` on each, inside `<fieldset>` + `<legend>`
   - [ ] **notes**: a `<textarea>` (with a real `</textarea>`!)
   - [ ] a submit button
   - [ ] every input has a `<label for="…">`
5. Add a **Catering** link to the nav on **all 5 pages** (index, menu, order, catering, about).
6. Check: the Problems panel (Ctrl+Shift+M) shows **0** problems on all 5 pages.

## Done looks like

- From any page you can reach any other page in one click.
- The table has a caption and a bold header row.
- Fill the form and submit. The URL shows something like:
  `catering.html?event-date=2026-12-20&people=60&package=wedding&notes=…`
- HTMLHint: 0 problems on all 5 pages.

## Stuck?

1. Copy, don't retype: the order form in `order.html` already has most of the parts you need.
2. The nav is the same 5 links on every page. Make it once, then copy it into the other 4 pages.
3. Look at `notes/08-tables.md` and `notes/09-forms.md`.

## Submit

Zip this folder and send it the way your instructor asks. See `homework/W2D1-Homework-Sheet.md` for the checklist.
