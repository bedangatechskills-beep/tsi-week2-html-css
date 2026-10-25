# D1-FF6 · Gallery detail page

**Time:** 15 min · **Type:** 🔨 Build · **Work:** alone

**Goal:** Make a page inside a sub-folder and link it with `../`.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The gallery links to `places/swayambhu.html`, but that page does not exist yet. The `places/` folder is empty.

1. In VS Code, right-click the `places` folder → **New File** → `swayambhu.html`. Type `!` + Tab.
2. Add:
   - [ ] a link back to the gallery: `<a href="../index.html">Back to the gallery</a>` (go downstairs one floor)
   - [ ] an `<h1>` and 2 short paragraphs about Swayambhunath
   - [ ] the picture, using `../images/swayambhu.svg`, with `alt`
   - [ ] a `mailto:` link to the **TSI tour desk**: `<a href="mailto:tours@tsi.edu.np">TSI tour desk</a>`
3. Bonus: make `places/boudha.html` the same way and link it from the gallery caption.

## Done looks like

- Gallery → Swayambhunath → Back to the gallery works both ways.
- The picture shows on the detail page.
- Clicking "TSI tour desk" opens your email app (or asks which app to use).

## Stuck?

1. The detail page is one floor up (inside `places/`). Every path to something outside `places/` starts with `../`.
2. Broken picture? Hover over the `src` path in VS Code and Ctrl+click it. Does VS Code find the file?
3. Look at `notes/06-links-and-paths.md`: "go downstairs one floor".

## Fast?

Make all three detail pages, and link each caption.
