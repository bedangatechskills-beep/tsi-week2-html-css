# D2-01 · Div soup → semantic

**Time:** 7 min · **Type:** ✏️ Modify

**Goal:** Turn 7 unlabeled boxes (`<div class="…">`) into boxes with real names.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

- [ ] `<div class="header">` → `<header>`
- [ ] `<div class="nav">` → `<nav>`
- [ ] `<div class="main">` → `<main>`
- [ ] `<div class="section" id="today">` → `<section id="today">`
- [ ] `<div class="article" id="review">` → `<article id="review">`
- [ ] `<div class="aside" id="hours">` → `<aside id="hours">`
- [ ] `<div class="footer">` → `<footer>`
- [ ] Delete each `class="…"` you no longer need. **Keep the `id`s**: the nav links jump to them.
- [ ] Open F12 → **Elements**. You now see `header`, `nav`, `main` … instead of 7 × `div`.

> **Rooms with names.** A house plan that says "room 1, room 2, room 3" tells you nothing. "Kitchen, bedroom, bathroom" tells you everything. `<div>` is "room 1". `<header>` is "the front door".

## Done looks like

The page looks exactly the same as before. The Elements panel shows 7 named boxes and no `div` at all.

## Stuck?

1. **Linked editing:** click inside the word `div` of the opening tag and type the new name. The closing `</div>` changes by itself. (It is on in this folder's `.vscode/settings.json`.)
2. Not sure which `</div>` belongs to which box? Click on the opening tag: VS Code highlights its partner.
3. The page still works if a `class` is left in, but tidy code has no labels it does not need.

## Fast?

Answer: who reads these names? (Google, screen readers, AI tools, your teammates.) Then start D2-02.
