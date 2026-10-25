# D1-08 · Momo recipe

**Time:** 5 min · **Type:** 🔨 Build · **Work:** alone

**Goal:** Choose the right list for the job: ul, ol, a nested list, and (bonus) dl.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

The recipe text is inside a comment in `index.html`. Build it as real HTML:

- [ ] `<h2>Ingredients</h2>` + a `<ul>` (shopping list: order does not matter)
- [ ] Inside the **Spices** `<li>`, a **nested** `<ul>` with 4 spices
- [ ] `<h2>Steps</h2>` + an `<ol>` (recipe steps: order matters)
- [ ] One `<img>` of `images/momo-plate.svg` with a good `alt`
- [ ] Bonus: a `<dl>` "Kitchen words" glossary with 2 words (`dt`) and their meanings (`dd`)
- [ ] Delete the comment when you are done

## Done looks like

- Bullets for ingredients, with the 4 spices indented under "Spices".
- Numbers 1–4 for the steps.
- The momo plate picture shows.

## Stuck?

1. Emmet helps: `ul>li*5` then Tab.
2. The nested list goes **inside** the Spices `<li>`, before its `</li>`.
3. Look at the nested list example in `notes/05-lists.md`.

## Fast?

Try **D1-FF2 Table of contents** in `classwork/fast-finishers/`.
