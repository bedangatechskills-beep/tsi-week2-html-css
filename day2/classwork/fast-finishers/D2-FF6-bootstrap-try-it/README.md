# D2-FF6 · Bootstrap try-it

**Time:** fast finisher · **Type:** ✏️ Modify

**Goal:** Use ready-made parts (Bootstrap) instead of raw wood (your own CSS). Compare the two.

Open `index.html` with Live Server (right-click → **Open with Live Server**). The Bootstrap file is already in `css/` (no internet needed).

## Task

- [ ] In `<head>`, add `<link rel="stylesheet" href="css/bootstrap.min.css">`. Save. The font changes already.
- [ ] Wrap everything in `<body>` in `<div class="container py-4">` … `</div>`.
- [ ] Give the first link `class="btn btn-primary"`.
- [ ] Turn the `<div>` with "This week" into a card: `<div class="card mt-4">` with an inner `<div class="card-body">`. Add `class="card-title"` to its h2 and `class="card-text"` to its p.
- [ ] **Bonus:** `class="lead"` on the first paragraph; `btn btn-outline-primary` on "I'm coming".
- [ ] **Compare:** how many lines of CSS did you write? How many did your D2-13 card need?

> **IKEA for websites.** Bootstrap gives you ready-made parts. Fast, but every site looks a bit the same, and you still need to understand CSS to change them.

## Done looks like

A centred page with a blue button and a neat card, and you wrote **zero** lines of CSS.

## Stuck?

1. Nothing changes? Check the `<link>` path: `css/bootstrap.min.css`.
2. Class names are separated by **spaces**: `btn btn-primary`.
3. Want more parts? With Wi-Fi, look at getbootstrap.com → Docs → Components.

## Fast?

You finished everything! Help a neighbour, or start **D2-HW2** (style your portfolio).
