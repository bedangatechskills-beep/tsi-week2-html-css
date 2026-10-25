# D2-15 · Style Momo House

**Time:** 28 min (5 checkpoints) · **Type:** 🔨 Build

**Goal:** Opening night! Dress Didi's restaurant with **one** stylesheet for all 4 pages: the school uniform.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

The 4 pages (`index.html`, `menu.html`, `order.html`, `about.html`) already have header, nav, main and footer, and the
classes you need. You write **only** `css/style.css`. The instructor checks the room at each checkpoint.

## Task

### CP1 (about 0:06) · Link + base
- [ ] Add `<link rel="stylesheet" href="css/style.css">` inside `<head>` on **all 4 pages**.
- [ ] `body`: `margin: 0`, a background colour, a text colour, a font stack with a fallback, `line-height: 1.6`.
- [ ] `main`: `max-width: 960px; margin: 0 auto; padding: 16px;`
- [ ] Click through all 4 pages: they all change. That is the uniform.

### CP2 (about 0:12) · Header + horizontal nav
- [ ] `.site-header`: a dark background and padding.
- [ ] `.menu`: `list-style: none; margin` and `padding` 0.
- [ ] `.menu li`: `display: inline-block;`
- [ ] `.menu a`: white, no underline, `display: inline-block`, padding.

### CP3 (about 0:18) · Hero + h1
- [ ] `.hero-img`: `display: block; width: 100%; height: auto;`
- [ ] `.hero`: `text-align: center`, a background, padding at the bottom.
- [ ] `h1` and `h2`: your accent colour; `h1` `2.5rem`.
- [ ] `.button`: an inline-block pill (background, white text, padding, `border-radius`).

### CP4 (about 0:24) · Menu table + 3 dish cards (box model)
- [ ] `.price-table`: `border-collapse: collapse`; `th` and `td` get a border and padding; `th` gets a dark background.
- [ ] `.card`: `display: inline-block; box-sizing: border-box; width: 290px;` + padding, border, `border-radius`, margin.
- [ ] `.card img`: `width: 100%; height: auto;`
- [ ] **Bonus:** style the order form (`.order-form label` as block, inputs full width) and make the About photo round.

### CP5 (about 0:28) · Footer + hover
- [ ] `.site-footer`: dark background, white centred text, padding.
- [ ] `:hover` on the nav links (and the button): change the background colour.
- [ ] Final check: click every nav link on every page. Everything wears the same uniform.

## Done looks like

All 4 pages share one look: a navy header with the logo and a horizontal menu, a cream page, cherry headings, a
full-width hero picture, a neat price table, 3 dish cards in one row, and a navy footer. Hovering the menu changes
its colour. `css/style.css` is the **only** CSS file.

## Stuck?

1. Only one page changed? The `<link>` must be on **every** page.
2. Menu still vertical? `display: inline-block` goes on `.menu li` (the items), not on `.menu`.
3. Third card drops to a new line? Add `box-sizing: border-box` to `.card`, or make the width a little smaller.

## Fast?

Try **D2-FF2** Hover menu, or **D2-FF6** Bootstrap try-it (compare 100 lines of your CSS with Bootstrap's classes).
