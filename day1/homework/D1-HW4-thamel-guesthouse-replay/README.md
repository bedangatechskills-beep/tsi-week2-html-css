# D1-HW4 · Thamel Guesthouse replay (stretch, optional)

**Time at home:** about 30 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** The last of the bugs that were cut from the class hunts. A replay of the whole day.

## Open it

Open the `W2D1` folder in VS Code. Open this folder's `index.html` with Live Server.

## Your task

**Thamel Guesthouse** has a two-page website. It *looks* nearly fine. Many of these bugs only show with a tool, a submit, or a careful read.

```
D1-HW4-thamel-guesthouse-replay/
├── index.html     4 bugs
├── booking.html   8 bugs
└── images/        (guesthouse.svg, room-deluxe.svg)
```

**There are 12 bugs. Find at least 10.**

For each bug, write one line in a file called `my-bugs.md` in this folder:
`page · line · what was wrong · how I saw it (V / D(HH) / D(F12) / D(URL) / D(W3C) / H / R)`

### Hints (one per bug type)

- **Skeleton**: the first line, and where `<title>` lives.
- **Pictures**: `alt`, and capital letters in file names.
- **Tables**: every row has `<tr>`; the caption comes first.
- **Forms**: input types, spelling of attributes, `name` on every field, options inside the select, radio names, and where the button is.
- **Use every tool**: Problems panel, F12 → Elements, submit + read the URL, and (Wi-Fi) the W3C validator.

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

- Problems panel: 0 on both pages.
- The form stops an empty name and a bad email. Deluxe is in the drop-down. Only one room type can be ticked.
- Submit and read the URL: it has `guest`, `email`, `room` and `room-type`.
- `my-bugs.md` has 12 lines.

## Scoreboard

`I found __ / 12. The bug I am proudest of: ________`

## Stuck?

1. The tab shows the title, so the title is fine? Look again: *where* is it?
2. Paste each page into validator.w3.org (Wi-Fi). It finds the one bug no other tool shows.
3. Every bug here appeared in class (D1-04, D1-09, D1-11, D1-13, D1-15).

## Submit

Zip this folder (with `my-bugs.md` inside) and send it the way your instructor asks. See `homework/W2D1-Homework-Sheet.md` for the checklist.
