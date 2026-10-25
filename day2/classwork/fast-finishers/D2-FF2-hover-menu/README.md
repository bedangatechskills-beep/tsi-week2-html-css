# D2-FF2 · Hover menu

**Time:** fast finisher · **Type:** ✏️ Modify

**Goal:** Make the Momo House menu answer the mouse: change colour, background and underline on `:hover`.

Open `index.html` with Live Server (right-click → **Open with Live Server**).

## Task

- [ ] Add **one** new rule at the end of `css/style.css`: `.menu a:hover { … }`.
- [ ] On hover: a cherry background `#990011`.
- [ ] On hover: a different text colour (try `#ffcc66`).
- [ ] On hover: `text-decoration: underline;`.
- [ ] **Bonus:** change the colour of the bottom border on hover (`border-bottom-color`).

## Done looks like

When the mouse is over a menu item, it changes colour and background and gets an underline. When the mouse leaves, it goes back.

## Stuck?

1. Nothing happens? Check the colon: `a:hover`, no space before `hover`.
2. Only the text changes, not the box? The links need `display: inline-block` and padding (they already have it).
3. F12 → Elements → click a link → in Styles, click **:hov** and tick **:hover** to freeze the hover state.

## Fast?

Try **D2-FF4** Haunted stylesheet.
