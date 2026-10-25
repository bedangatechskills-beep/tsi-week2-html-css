# D2-HW4 · Patan Craft Shop replay (stretch)

**Time:** +30 min (at home, optional) · **Type:** 🐞 Bug-hunt

**Goal:** A last round: 10 mistakes from every Day 2 topic on a craft shop in Patan.

Open the folder in VS Code, then open `index.html` with Live Server.

## Task

1. Look at the page in a normal window and in a narrow window (or F12 → device toolbar, Ctrl+Shift+M in DevTools).
2. Press play on both videos.
3. Run Lighthouse (Accessibility + SEO + Best practices).
4. Mend each mistake in `index.html` and `css/style.css`.

## The bugs

**There are 10 bugs. Find at least 8.**

Hints, one per bug type:

- **The label on the parcel:** two `<meta>` tags are missing from `<head>`.
- **Media:** where must `<source>` go? Is its `type` real?
- **Selectors:** capital letters.
- **Values:** how many values can `padding` take? How many numbers does `rgb()` need?
- **Sizes:** more than 100% is wider than the window. A fixed height can be too small.
- **Hiding:** one way hides and keeps the space; the other removes the box.

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

## Done looks like

A brown header band, no gap under it, an orange banner that fits the window (no sideways scroll), a story card whose text stays inside, and two videos that both play.

## Scoreboard

`I found __ / 10. The reveal taught me: ________`

## Stuck?

1. Sideways scroll? F12 → Elements → hover the boxes: which one is wider than the window?
2. A video shows 0:00 and will not play? Read its `<source>` line very carefully.
3. Read `notes/09-debugging-css.md`.

## Fast?

You have done every Day 2 hunt. Help a classmate, or polish D2-HW2.
