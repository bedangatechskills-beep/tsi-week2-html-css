# D2-05 · Media corner

**Time:** 3 min · **Type:** 🔨 Build

**Goal:** Add a window into another room: an `<iframe>` that shows the Kathmandu map page.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

- [ ] In the section "A window: how to find us", replace the line `<p>Your iframe goes here.</p>`.
- [ ] Add an `<iframe>` with `src="kathmandu-map.html"`.
- [ ] Give it a `title` that says what is inside (a screen reader reads it).
- [ ] Give it `width="620"` and `height="520"`.
- [ ] **Bonus:** inside `<video>`, after `<source …>`, add fallback text: `Your browser cannot play this video.`

> **TV, radio, and a window into another room.** `<video>` = the TV, `<audio>` = the radio, `<iframe>` = a window that shows another page.

## Done looks like

The map page shows inside a box on your page. You can scroll inside the box.

## Stuck?

1. Type `iframe` and press Tab: Emmet writes `<iframe src="" frameborder="0"></iframe>`. Delete `frameborder="0"` (it is old HTML).
2. The window shows "Cannot GET"? Check the spelling of `kathmandu-map.html`.
3. The title does not show on the page. That is normal: it is for screen readers. Check it in F12 → Elements.

## Fast?

Try **D2-FF5** Lost & Found.
