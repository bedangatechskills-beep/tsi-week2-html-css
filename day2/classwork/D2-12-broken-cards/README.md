# D2-12 · Broken cards

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Mend box-model mistakes: size arithmetic, border shorthand, centring, round images.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save. Make the browser window wide (maximise it).

## Task

1. Look at the page: three cards should sit side by side in one row, in a cream box in the middle of a grey page.
2. F12 → Elements → hover each box. Read the box diagram (content, padding, border, margin).
3. Mend each mistake in `css/style.css`. Save and check.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Arithmetic:** add up width + padding + border for one card. Do three fit in the row?
- **Centring:** `margin: 0 auto` only works when the box has a width.
- **Padding:** some values are impossible.
- **Border shorthand:** width, **style**, colour. Is one missing?
- **Circles:** `border-radius: 50%` makes a circle only on a square.

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

> **Boxes being shipped:** content = the item, padding = bubble wrap, border = the cardboard, margin = the gap between parcels.

## Done looks like

Three cards in one row, a cream box centred on a grey page, an orange border around the note, red tags with space around the text, and round avatars.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. F12 → Elements → **Computed** tab: the box diagram shows each number.
2. Read the "width trap: content-box vs border-box" slide.
3. Ask the AI tutor: "Why does border-radius 50% make an oval on my image?"

## Fast?

Go on to **D2-13**. Then try **D2-FF1** TSI ID card.
