# D2-09 · Selector target practice

**Time:** 5 min · **Type:** 🔨 Build

**Goal:** Hit 5 targets, with one CSS rule each. Do not touch the HTML.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

- [ ] **Target 1:** every paragraph → grey text `#666666`. *(element selector)*
- [ ] **Target 2:** only the veg dishes → light green background `#dff3dc`. *(class selector)*
- [ ] **Target 3:** today's special → bold and `1.5rem`. *(id selector)*
- [ ] **Target 4:** only the links **inside the nav** → no underline. The "Back to top" link keeps its underline. *(descendant selector)*
- [ ] **Target 5:** only dishes that are **both** `dish` and `spicy` → `3px solid red` border. *(two classes, no space)*
- [ ] Write each rule under its comment in `css/style.css`. Save after each one.

> **Calling students in class:** `p` = "everyone", `.veg` = "the green team", `#todays-special` = "Aarav, by name", `nav a` = "the green team in row 2".

## Done looks like

Grey paragraphs; Veg chowmein and Aloo achar are light green; today's special is big and bold; the nav links have no underline but "Back to top" does; Aloo achar and Buff sekuwa have red borders.

## Stuck?

1. Read `index.html` first: which `class` and `id` does each element have?
2. `nav a` (with a space) means "an `a` somewhere inside a `nav`". `.dish.spicy` (no space) means "one element with both classes".
3. Target hit the wrong things? F12 → Elements → click the element and read which rule matched.

## Fast?

Try **D2-FF3** Specificity duel: predict who wins before you look.
