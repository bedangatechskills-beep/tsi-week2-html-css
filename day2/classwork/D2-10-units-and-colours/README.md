# D2-10 · Units & colours

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Mend values: units, colours, font fallbacks.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Look at the page. Read the "Done looks like" below and compare.
2. Read each value in `css/style.css`. Is it a value the browser understands?
3. Mend each mistake. Save and check.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Units:** a size like `300` needs a unit (`px`, `rem`, `%`).
- **Hex colours:** only 0–9 and a–f.
- **Spaces:** a number and its unit stick together.
- **Fonts:** always give a fallback list that ends with a generic family.
- **Line height:** `1.5px` and `1.5` are very different.

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

A white price board 300 px wide with a navy border, red prices, a bigger cherry special, an Arial font, and a note whose lines have space between them.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. F12 → Elements → Styles: ⚠ and a crossed-out line = a value the browser could not read.
2. Look at the "Measuring tape" slide: px, %, rem, em.
3. Ask the AI tutor: "What is the difference between line-height 1.5 and 1.5px?"

## Fast?

Go on to **D2-11**. Then try **D2-FF4**.
