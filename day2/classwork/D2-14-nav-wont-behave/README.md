# D2-14 · Nav won't behave

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Mend `display` mistakes so the Momo House header becomes a neat horizontal menu bar.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Look at the header. It should show the logo, then one row of 4 red menu buttons, and below that a cream hero with a centred "Order now" button.
2. Find the CSS rule for each part that looks wrong.
3. Mend each mistake in `css/style.css`. Save and check.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Spelling of values:** read every `display` value letter by letter.
- **Missing things:** something is on the page in HTML but not on the screen. Who hid it?
- **Bullets:** a menu bar has no bullets.
- **The bench:** inline boxes can't be pushed up or down. Which value keeps them side by side *and* lets them have size?
- **Selectors:** does the class in the CSS exist in the HTML?

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

The logo at the top, 4 red buttons in one row with no bullets and no overlap, and a centred 200 px "Order now" button in the cream hero.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. F12 → Elements → hover each link: the blue/green overlay shows its padding and margin.
2. Read the "queue vs the bench" slide.
3. Ask the AI tutor: "Why is margin-top ignored on my inline link?"

## Fast?

Try **D2-FF2** Hover menu.
