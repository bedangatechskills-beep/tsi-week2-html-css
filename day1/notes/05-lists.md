# 05 · Lists: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B5 · Layer: Frontend*

> **Today in one sentence:** Ask one question before every list: does the order matter?

## The picture to keep in your head

**Shopping list** (order doesn't matter → `ul`) vs **recipe steps** (order matters → `ol`);
a nested list = a **sub-list under one item**.

```text
SHOPPING LIST (ul)              RECIPE STEPS (ol)
• flour                         1. Make the dough.
• minced chicken                2. Make the filling.
• onion                         3. Fold the momos.
• spices                        4. Steam for 12 minutes.
   ◦ cumin      ← sub-list
   ◦ coriander    under "spices"
```

If you swap two shopping items, nothing changes. If you swap steps 2 and 4, you eat raw dough.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| `<ul>` | Unordered list: bullets, order does not matter | a shopping list |
| `<ol>` | Ordered list: numbers, order matters | recipe steps, a ranking |
| `<li>` | List item: one entry. Lives **only** inside `ul` or `ol` | `<li>Veg momo</li>` |
| Nested list | A whole list inside one `<li>` | spices → cumin, coriander |
| `type` (on `ol`) | Which kind of numbers | `type="A"` → A, B, C · `type="i"` → i, ii, iii |
| `start` (on `ol`) | The first number | `start="5"` → 5, 6, 7 |
| `<dl>` | Description list: terms and their meanings, like a glossary | momo glossary |
| `<dt>` | Description term: the word | `<dt>Jhol</dt>` |
| `<dd>` | Description details: what it means | `<dd>Momo in a soup</dd>` |

## How it works

### 1. The family rule

A `<li>` must have a `<ul>` or `<ol>` parent. A `<ul>` or `<ol>` may contain **only** `<li>` elements
directly. No bare text, no `<p>`, no other list directly inside it.

```text
ul ─┬─ li
    ├─ li ─── ul ─┬─ li     ← a nested list lives INSIDE an li
    │             └─ li
    └─ li
```

Browsers are polite guessers. If you forget the `<ul>`, Chrome does not complain. The items still show, one per
line, so the page looks almost right (D1-07 bug 1). The clues: **the list is not indented, and the bullets are
gone** (they hang off the left edge of the page, where you can't see them). The Elements panel shows the truth: no
`<ul>` box around the items.

### 2. Nested lists go inside the `<li>`

The sub-list must sit **before** the `</li>` of its parent item:

```text
RIGHT:  <li>Spices
          <ul> <li>Cumin</li> <li>Coriander</li> </ul>
        </li>

WRONG:  <li>Spices</li>
        <ul> <li>Cumin</li> <li>Coriander</li> </ul>    ← the sub-list is an orphan between items
```

The wrong version often **looks** right (it is still indented), so this is a **D(F12)** bug (D1-FF5 bug 7,
D1-HW1 bug 4).

### 3. Ordered list options

| Attribute | Example | Gives |
|---|---|---|
| (none) | `<ol>` | 1, 2, 3 |
| `type="A"` | `<ol type="A">` | A, B, C |
| `type="a"` | `<ol type="a">` | a, b, c |
| `type="I"` | `<ol type="I">` | I, II, III |
| `start="4"` | `<ol start="4">` | 4, 5, 6 |
| `reversed` | `<ol reversed>` | 3, 2, 1 (a countdown) |

### 4. Description lists: a glossary

`<dl>` holds pairs: a `<dt>` (the word) followed by one or more `<dd>` (what it means). Use it for a glossary,
an FAQ, or "label: value" details. `<li>` does not belong inside `<dl>` (D1-07 bug 4).

## Code you built today

### Step 1: ul and ol

File: `lists.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo shopping list and steps</title>
</head>
<body>
  <h1>Didi's momo plan</h1>

  <h2>Shopping list</h2>
  <ul>
    <li>Flour</li>
    <li>Minced chicken</li>
    <li>Onion</li>
    <li>Ginger and garlic</li>
  </ul>

  <h2>Steps</h2>
  <ol>
    <li>Make the dough.</li>
    <li>Make the filling.</li>
    <li>Fold the momos.</li>
    <li>Steam for 12 minutes.</li>
  </ol>
</body>
</html>
```

**Predict:** change `<ol>` to `<ol type="A" start="3">`. What will the first step be labelled?

### Step 2: a nested list

File: `nested.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nested shopping list</title>
</head>
<body>
  <h1>Shopping list</h1>
  <ul>
    <li>Flour</li>
    <li>Minced chicken</li>
    <li>Spices
      <ul>
        <li>Cumin</li>
        <li>Coriander</li>
        <li>Timur (Sichuan pepper)</li>
      </ul>
    </li>
    <li>Onion</li>
  </ul>
</body>
</html>
```

- The inner `<ul>` opens and closes **between** `Spices` and `</li>`.
- The browser shows the sub-list with a different bullet (◦).
- Open F12 → Elements: the inner `ul` sits inside the `li`. That is what "nested" means.

### Step 3: a description list

File: `glossary.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo glossary</title>
</head>
<body>
  <h1>Momo glossary</h1>
  <dl>
    <dt>Steam momo</dt>
    <dd>Momo cooked in steam. Soft and light.</dd>
    <dt>Jhol momo</dt>
    <dd>Momo served in a spicy, sour soup.</dd>
    <dt>Kothey</dt>
    <dd>Half fried, half steamed.</dd>
    <dd>Crispy on one side only.</dd>
  </dl>
</body>
</html>
```

- One `<dt>` can have two `<dd>` (Kothey has two).
- No bullets, no numbers: the details are indented under each term.

### Step 4: the full momo recipe (D1-08 style)

Copy `momo-plate.svg` into an `images` folder next to the file.

File: `recipe.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo recipe · Momo House</title>
</head>
<body>
  <h1>Didi's chicken momo</h1>
  <img src="images/momo-plate.svg" alt="A plate of ten steamed momos with red chutney" width="300">

  <h2>Ingredients</h2>
  <ul>
    <li>2 cups flour</li>
    <li>500 g minced chicken</li>
    <li>Spices
      <ul>
        <li>Cumin</li>
        <li>Coriander</li>
      </ul>
    </li>
    <li>1 onion</li>
  </ul>

  <h2>Steps</h2>
  <ol>
    <li>Mix flour and water into a dough. Rest it for 30 minutes.</li>
    <li>Mix the chicken, onion and spices.</li>
    <li>Roll small circles of dough and fold in the filling.</li>
    <li>Steam for 12 minutes.</li>
  </ol>

  <h2>Words</h2>
  <dl>
    <dt>Achar</dt>
    <dd>The tomato chutney served with momo.</dd>
  </dl>
</body>
</html>
```

**Predict:** if you move `</li>` from after the inner `</ul>` to right after the word `Spices`, does the page
look different? Check in the browser, then in the Elements panel.

## Quick reference

| You want... | Write |
|---|---|
| Bullets | `<ul><li>…</li></ul>` |
| Numbers | `<ol><li>…</li></ol>` |
| Letters / Roman numbers | `<ol type="A">`, `<ol type="i">` |
| Start at 5 | `<ol start="5">` |
| Sub-list | `<li>Item <ul><li>…</li></ul></li>` |
| Glossary | `<dl><dt>Word</dt><dd>Meaning</dd></dl>` |
| Emmet | `ul>li*4`, `ol>li*3`, `dl>(dt+dd)*3` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| Items with **no indent and no bullets** | `<li>`s with no `<ul>` around them (D1-07 bug 1, D1-15 bug 5) — V + D(F12) | Wrap them in `<ul>` |
| Steps shown with bullets | Order matters but you used `ul` (D1-07 bug 2) | `<ol>` |
| One item has no bullet; HTMLHint complains | `<il>` typo (D1-07 bug 3) | `<li>` |
| Glossary meanings show bullets | `<li>` used inside `<dl>` (D1-07 bug 4) | `<dd>` |
| Sub-list looks fine but F12 shows it between items | Nested list placed after `</li>` (D1-FF5 bug 7, D1-HW1 bug 4) — D(F12) | Move it inside the `<li>` |
| HTMLHint: tag must be paired | `<ol>` closed with `</ul>` (D1-FF5 bug 8) | `</ol>` |
| A heading word appears inside the list box | Bare text "Notices:" directly inside `<ul>` (D1-FF5 bug 9) | Put it in an `<h2>` or `<p>` before the list |

## Check yourself

1. What single question decides `ul` or `ol`?
2. Give two real examples of each, from your own day.
3. Where exactly does a nested list go? Write the lines.
4. Why can a missing `<ul>` hide from your eyes? What clue gives it away?
5. What do `type="I"` and `start="10"` do on an `ol`?
6. What is a `dl` for? Which two tags live inside it?
7. **Predict:** what does `<ol reversed><li>a</li><li>b</li><li>c</li></ol>` show?
8. Explain to a friend why a recipe is an `ol` but a shopping list is a `ul`.

## Try it

- **D1-07 Broken Lists**: 4 bugs. Hint for bug 1: look for the missing indent (and the missing bullets).
- **D1-08 Momo recipe**: ingredients `ul` with one nested sub-list inside an `li`, steps `ol`, one image with alt. Bonus: a `dl` glossary.
- **D1-FF5 Notice Board**: bugs 7–9 are list bugs.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "Why does my nested `<ul>` have to be inside the `<li>` and not after it, if both look the same in Chrome? Explain simply, no code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [06 · Links and paths](06-links-and-paths.md).*
