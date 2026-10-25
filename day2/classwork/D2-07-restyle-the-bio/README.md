# D2-07 · Restyle the bio

**Time:** 4 min · **Type:** ✏️ Modify

**Goal:** Change 4 values in a stylesheet and watch Sunita's page change. Use the school-uniform file: `css/style.css`.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

- [ ] **Body background:** in `body`, change `white` to a soft colour (try `#fdf6ec`).
- [ ] **h1 colour:** in `h1`, change `black` to a strong colour (try `#990011`).
- [ ] **Paragraph size:** in `p`, change `16px` to `18px`.
- [ ] **Link colour:** in `a`, change `blue` to a dark colour (try `#14213d`).
- [ ] Save after **each** change and look at the page.
- [ ] **DevTools bonus:** F12 → Elements → click `<h1>` → in **Styles**, click the colour value and type a new one. The page changes, but the file does not. Copy the value you like into `style.css`.

> **The school uniform.** One external stylesheet dresses every page that links to it.

## Done looks like

Four changes are visible, and `index.html` has not changed at all. Show your neighbour your colours.

## Stuck?

1. Nothing changes? Did you save `style.css`? Is the `<link>` in `index.html` still there?
2. A change does not work? Look for the `;` at the end of the line and the `}` at the end of the rule.
3. Hex colours start with `#` and have 6 characters: 0–9 and a–f.

## Fast?

Change the font too: `font-family: Georgia, serif;`. Then try **D2-FF4**.
