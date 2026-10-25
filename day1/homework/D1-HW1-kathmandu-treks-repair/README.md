# D1-HW1 · Kathmandu Treks repair

**Time at home:** about 40 min (must-do) · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repeat every bug type from today on a new 3-page site (spaced practice).

## Open it

Open the `W2D1` folder in VS Code. Open this folder's `index.html` with Live Server.

## Your task

**Kathmandu Treks** is a small trekking company in Thamel. Their website has 12 bugs across 3 pages.

```
D1-HW1-kathmandu-treks-repair/
├── index.html     4 bugs
├── treks.html     3 bugs
├── booking.html   5 bugs
└── images/        (everest.svg, annapurna.svg, langtang.svg)
```

**There are 12 bugs. Find at least 10.**

> ⚠️ **Fix this first:** `index.html` is completely blank. That is on purpose. If a page is completely blank, fix this first.

For each bug, write one line in a file called `my-bugs.md` in this folder:
`page · line · what was wrong · how I saw it (V / D(HH) / D(F12) / D(URL) / D(W3C) / H / R)`

### Hints (one per bug type)

- **Blank page**: some tags swallow everything after them if they are not closed.
- **File names**: compare every `src` with the real file name, letter by letter, capitals too.
- **Links**: every page link ends in `.html`; every `#name` must match an `id`.
- **Nested lists**: the sub-list lives inside its parent `<li>`.
- **Tables**: header cells; count the cells when a `rowspan` is used.
- **Forms**: labels, input types (phone, date), radio names, and what the button does.

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

- All 3 pages show. Every link works.
- The tables line up. The "Go straight to the booking form" link lands on the form.
- The form: labels work, phone has no arrows, the date has a calendar, only one trek can be ticked, and **Book now** sends the form (read the URL).
- `my-bugs.md` has 12 lines (or at least 10).

## Scoreboard

`I found __ / 12. The bug I am proudest of: ________`

## Stuck?

1. Blank page? Look at the `<head>` first. Which tag there has text inside it?
2. One bug is invisible on Windows. Read every file name in `images/` and compare.
3. Compare with the class bug-hunts: D1-04, D1-07, D1-09, D1-11, D1-13.

## Submit

Zip this folder (with `my-bugs.md` inside) and send it the way your instructor asks. See `homework/W2D1-Homework-Sheet.md` for the checklist.
