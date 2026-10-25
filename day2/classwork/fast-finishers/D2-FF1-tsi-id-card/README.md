# D2-FF1 · TSI ID card

**Time:** fast finisher · **Type:** 🔨 Build

**Goal:** Recreate Aarav's TSI ID card from a picture, using the box model and fonts.

Open `index.html` with Live Server (right-click → **Open with Live Server**). Open `target.svg` in a second tab (or in VS Code) next to it.

## Task

- [ ] Read the sizes written around the card in `target.svg`.
- [ ] `.id-card`: 360 × 220 px, `padding: 16px`, `border: 2px solid #14213D`, `border-radius: 12px`, white, centred. Use `box-sizing: border-box`.
- [ ] `.band`: navy background, white bold text, centred.
- [ ] `.avatar`: 80 px round, with a cherry `#990011` ring.
- [ ] `.details`: `display: inline-block` so it sits next to the photo. Text colour `#2A3F63`.
- [ ] `.name`: 26 px bold. `.stripe`: a cherry stripe at the bottom.
- [ ] You may **not** change `index.html`.

## Done looks like

Put your page and `target.svg` side by side. A friend should not be able to tell which is which from 2 metres away.

## Stuck?

1. Photo and text on top of each other? `.details` needs `display: inline-block`.
2. Card bigger than 360 px in F12? Add `box-sizing: border-box`.
3. Text not lined up with the photo? Try `vertical-align: middle` on both `.avatar` and `.details`.

## Fast?

Try **D2-FF3** Specificity duel.
