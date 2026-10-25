# Changes from PLAN v2 — Builder A1 (Day 1 code pack)

Each change was made because something in the plan did not work in Chrome 155 or the linters, or as a small build decision.

| Id / area | What | Why |
|---|---|---|
| D1-07 bug 1 | Tag **D(F12) → V + D(F12)**. The README hint now reads "look for the missing indent (and the missing bullets)". | In Chrome, an `<li>` with no `<ul>` around it shows **no** bullet: the marker hangs off the left edge of the page (the screenshot proves it). The plan's "bullets still show" is wrong. The bug itself is unchanged. |
| D1-15 bug 5, D1-FF4 bug 5 | Tag **D(F12) → V + D(F12)**. | Same reason: `<li>`s directly in `<body>`, or inside a `<div>`, lose their bullets and their indent. |
| D1-15 bug 4 | `colspan="4"` → **`colspan="2"`** in the 3-column menu table. The README table hint now reads "a colspan must fill the rest of the row exactly". | A colspan that is too big is **invisible** in Chrome: the extra 4th column is 0 px wide, so nothing sticks out. A colspan that is too small leaves a visible gap at the end of the row, so the bug stays **V** and keeps the same lesson (colspan arithmetic). The B7 demo STEPS now say both. |
| D1-15 bug 3, D1-FF5 bugs 1 + 6, D1-HW1 bug 1 | Added **+ D(HH) tag-pair** to the plan's tag. | HTMLHint also fires on these: the unclosed `<a>`, the second `<head>`, `</hr>`, the unclosed `<title>`. The plan's tag is kept and the extra tool is added. (Relay bonus point: accept either tag.) |
| D1-HW4 bug 2 (`<title>` in body) | Tagged **D(F12)** only, as in the plan. | Checked: HTMLHint `title-require` does **not** fire, and the tab still shows the title. |
| D1-11 | "5 columns: Time + Sun–Thu" is read as **6 columns** (Time + 5 days). Bug 2 is "the 11:00 row has 4 day cells instead of 5". | Sun–Thu is 5 days, and the Lunch row's `colspan="5"` in the plan only works with Time + 5 days. |
| D1-11, D1-15 menu, D1-HW1 treks (+ all solution tables) | Header cells are `<th scope="col">` in the solutions. In D1-11 the bug fix says `<th scope="col">`. | html-validate (`wcag/h63`) rejects these tables without `scope`. |
| Tables (D1-11, D1-12, D1-15 menu, D1-FF3, D1-FF5, D1-HW1, D1-HW2, D1-HW4, B7 demos) | A 2-line `<style>` in `<head>` draws the cell borders, with the comment "CSS comes on Day 2". | `border="1"` is obsolete and fails html-validate. Without lines the table bugs are hard to see. |
| D1-13, D1-15, D1-14, HW forms | `<form method="get">` with no `action` (A0 note, PLAN §8.4). | An empty `action=""` fails html-validate and W3C. |
| D1-FF4 | Added `images/momo.svg` (starter + solution). | The "img without alt" bug needs a real image. The §3 tree lists no image for FF4. |
| B3-skeleton step-05 | Added `images/momo.svg`. | The img-without-alt demo needs a real picture. |
| D1-01 / B1 parcel page | `<link rel="icon" href="data:,">` with a comment. The README says "don't count the `ws` line". | Otherwise Chrome adds a `favicon.ico` 404 and the count is not 7. Live Server's WebSocket shows in the Network tab as `ws`. |
| D1-FF3 | The solution's "Visit Momo House" link goes to `../../../D1-15-momo-house-repair/index.html`. The README tells students to use `../../D1-15-momo-house-repair/index.html`. | Keeps it offline and inside the pack. |
| D1-HW4 | The Deluxe price is **Rs. 3,500** in the rates table. | It matches the price drawn on `room-deluxe.svg`. |
| D1-HW4 bug 11 | The "room-type radios" are Standard / With balcony, next to the Room `<select>` of bug 10. | Both bugs from the plan in one form, without overlap. |
| CHECK-REPORT | Written to `_tools/CHECK-REPORT-day1.md` (the PLAN §3.1 name; the brief said `CHECK-REPORT.md`). | The plan wins. |
| `_tools/make_assets.py` (A0's file, minimal edit) | `patan-durbar.svg`: the label box is 95–305 (was 110–290) and the dots are at x = 22, 58, 342, 378 (were 40, 75, 325, 360). Only that one SVG was regenerated; every other output is byte-identical (checked). | Firstmate request: the dots must stay clear of the "Patan Durbar Square" label, even with a wider fallback font. |
| `_tools/make_zips.py` (A0's file, minimal edit) | Added `"*.tmp"` to `JUNK`. | The zip crashed on a locked Word temp file (`print/msoB539.tmp`) while Builder B was building print files. Temp files never belong in a zip. |
| Demos | B3 steps 1–2 and B8 steps 1–3 fail html-validate on purpose. They are half-built teaching steps: there is no `<body>` before B3 step 3, and no submit button before B8 step 4. B3 step 5 and B10 step 1 contain their planned errors. | Staged demos show the finished state of each step, as §6 asks. |
