# 05 · Selectors: Calling Students in Class
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B5*
**Layer:** Frontend (CSS)

> **Today in one sentence:** a selector is how you *call* the elements you want to style: everyone, a team, one person by name, or a team in one row.

## The picture to keep in your head

**Calling students in class.** The instructor stands at the front of the TSI classroom:

| The instructor says… | Who stands up | CSS selector | Example |
|---|---|---|---|
| "**Everyone**, stand up." | every student | **element** selector | `p { … }` = every paragraph |
| "**Red team**, stand up." | everyone wearing a red-team badge | **class** selector | `.veg { … }` = every element with `class="veg"` |
| "**Aarav, by name**, stand up." | exactly one person | **id** selector | `#todays-special { … }` = the one element with that id |
| "**Red team in row 2**, stand up." | red-team students who sit **inside** row 2 | **descendant** selector | `nav a { … }` = links inside a nav |
| "Red team **and** blue team, stand up." | both groups, same instruction | **grouping** | `h1, h2 { … }` |
| "Students on the red team **who are also** captains." | only people with **both** badges | **two classes together** | `.dish.spicy { … }` |
| "Whoever I am pointing at right now." | changes as the finger moves | **`:hover`** | `a:hover { … }` |

Aarav is on the red team. The instructor says "Aarav, stand up" and also "Red team, stay seated". Aarav stands up: he listens to his **name**, because a name is more specific than a team. CSS works the same way (specificity, below).

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Element (type) selector | Matches every tag of that name. | `p`, `h1`, `a`, `li` |
| Class | A label you can put on **many** elements. An element can have many classes, separated by **spaces**. | `class="dish veg"` |
| Class selector | A **dot** + the class name. | `.veg` |
| id | A name for **one** element. Unique on the page. | `id="todays-special"` |
| id selector | A **hash** `#` + the id. | `#todays-special` |
| Grouping | One rule for several selectors, separated by **commas**. | `h1, h2, h3 { … }` |
| Descendant selector | Two selectors with a **space**: the second **inside** the first (at any depth). | `nav a` |
| Compound (`.a.b`) | Two classes with **no space**: one element that has **both**. | `.dish.spicy` |
| Pseudo-class | A colon + a state word. | `:hover` (the mouse is over it) |
| Specificity | The score that decides which rule wins when two rules disagree. | id beats class beats element |
| Case-sensitive | `Card` and `card` are different names. | `.card` does not match `class="Card"` |

## How it works

### The punctuation is the whole language

```text
p            no symbol   → element  ("everyone who is a p")
.price       dot         → class    ("everyone with the price badge")
#menu        hash        → id       ("the one called menu")
h1, h2       comma       → grouping ("h1s AND h2s")
nav a        space       → descendant ("a's that are INSIDE a nav")
.dish.spicy  no space    → compound ("one element with BOTH classes")
a:hover      colon       → state    ("an a while the mouse is on it")
```

One missing dot or one extra space changes the meaning completely. Read selectors slowly, symbol by symbol.

### Class vs id

| | class | id |
|---|---|---|
| How many elements can have it? | many | **one** per page |
| How many can one element have? | many (`class="dish veg spicy"`) | one |
| In CSS | `.name` | `#name` |
| Used for | styling groups | one special element, and `#anchor` links (Day 1) |
| Strength | medium | strong |

**Habit:** style with **classes**. Keep ids for the few unique things (and for links like `href="#menu"`).

### Space or no space? `.btn .primary` vs `.btn.primary`

```text
.btn .primary    (space)    → an element with class "primary" INSIDE an element with class "btn"
                              <div class="btn"><span class="primary">…</span></div>   ✔ matches the span
.btn.primary     (no space) → ONE element with BOTH classes
                              <button class="btn primary">…</button>                  ✔ matches the button
```

### Classes in HTML: spaces, not commas

`class="card special"` gives the element **two** classes: `card` and `special`.
`class="card, special"` gives it the classes `card,` (with a comma!) and `special`. Now `.card` does **not** match. HTML separates classes with spaces only.

### Names must match exactly

The selector and the HTML must match letter for letter, **including capital letters**: `.card` ≠ `class="Card"`, `#menu` ≠ `id="main-menu"`. When a rule "does nothing", first compare the two names side by side.

### Light specificity: who wins?

When two rules set the same property on the same element:

1. **The stronger selector wins**: `#id` (strong) > `.class` (medium) > `element` (weak).
2. If they are **equally** strong, the **later** rule wins (note 04).

```text
p              { color: blue; }    weak
.note          { color: green; }   medium
#only          { color: red; }     strong     → <p class="note" id="only"> is RED
                                               → <p class="note">           is GREEN
                                               → <p>                        is BLUE
```

(We checked this in Chrome. The order of the three rules does not matter here, because their strengths are different.)

You will learn the exact scoring (and why you avoid `!important`) in session 3.2. For now: **id > class > element, then last wins.**

### `:hover`

`a:hover { … }` applies only while the mouse is over the link. Write the colon **directly** after the selector, with no space: `a:hover`, not `a :hover`. A typo like `a:hoverr` is an unknown state, and the **whole rule is dropped** (note 09).

## Code you built today

### Step 1: element, class and id

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Menu</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Momo House menu</h1>
  <p>All momo come with tomato and sesame chutney.</p>
  <p class="dish veg">Veg momo, Rs. 120</p>
  <p class="dish">Chicken momo, Rs. 150</p>
  <p class="dish veg">Paneer momo, Rs. 160</p>
  <p class="dish" id="todays-special">Today's special: jhol momo, Rs. 200</p>
</body>
</html>
```

File: `css/style.css`
```css
/* everyone */
p {
  color: #555555;
}

/* the veg team */
.veg {
  color: green;
}

/* one dish, by name */
#todays-special {
  font-weight: bold;
  font-size: 22px;
}
```
- `p` makes every paragraph grey. `.veg` makes the two veg dishes green. `#todays-special` makes one dish bold and bigger.
- The veg dishes are green, not grey: `.veg` (a class) is stronger than `p` (an element).

**Predict:** add `class="veg"` to the jhol momo line. What colour is it? Is it still bold?

### Step 2: grouping, descendant and two classes

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Menu</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="index.html">Menu</a>
    <a href="index.html">Order</a>
  </nav>
  <h1>Momo House menu</h1>
  <h2>Steam</h2>
  <p class="dish">Chicken momo, Rs. 150</p>
  <p class="dish spicy">Chilli momo, Rs. 180</p>
  <h2>Contact</h2>
  <p>Questions? <a href="index.html">Talk to Didi</a>.</p>
</body>
</html>
```

File: `css/style.css`
```css
/* two groups, one instruction */
h1,
h2 {
  color: #990011;
  font-family: Arial, Helvetica, sans-serif;
}

/* only links INSIDE the nav */
nav a {
  text-decoration: none;
  margin-right: 12px;
}

/* only elements with BOTH classes */
.dish.spicy {
  border: 2px solid red;
}
```
- `h1, h2` styles both heading levels with one rule.
- `nav a` removes the underline from the three menu links, but **not** from "Talk to Didi", which is outside the nav.
- `.dish.spicy` puts a red border on the chilli momo only.

**Predict:** you change `nav a` to `nav, a`. Which elements lose their underline now, and what else changes?

### Step 3: hover and the strength test

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selector strength</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Who wins?</h1>
  <p>Plain paragraph.</p>
  <p class="note">Paragraph with a class.</p>
  <p class="note" id="only">Paragraph with a class and an id.</p>
  <p><a href="index.html">Hover over me</a></p>
</body>
</html>
```

File: `css/style.css`
```css
#only {
  color: red;
}

.note {
  color: green;
}

p {
  color: blue;
}

a:hover {
  color: white;
  background-color: #14213D;
}
```
- The rules are in "wrong" order on purpose: `#only` comes first, but it still wins on its paragraph. Strength beats order.
- Hover over the link: it turns white on navy.

**Predict:** before you open it, write the colour of each paragraph. Then check with F12 → Styles: which declarations are crossed out?

## Quick reference

| Selector | Matches | Example |
|---|---|---|
| `p` | every `<p>` | `p { color: grey; }` |
| `.veg` | every element with class `veg` | `<li class="veg">` |
| `#cart` | the one element with `id="cart"` | `<div id="cart">` |
| `h1, h2` | every h1 **and** every h2 | grouping |
| `nav a` | every `a` inside a `nav` | descendant |
| `.dish.spicy` | elements with **both** classes | `<p class="dish spicy">` |
| `a:hover` | an `a` while the mouse is on it | state |
| Strength | `#id` > `.class` > `element`; equal → last wins | |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| The rule does nothing | `.card` in CSS, `class="Card"` in HTML | Same case in both | D2-08 bug 1, D2-HW1 bug 6, D2-FF4 (`.Title`) |
| The rule does nothing | `#menu` in CSS, `id="main-menu"` in HTML | Same name in both | D2-08 bug 2, D2-FF4 (`#nav`), D2-HW1 bug 12 (`#footer` vs `class="footer"`), D2-HW4 bug 5 (`#Header`) |
| Prices are not styled | `price { … }` missing its dot | `.price { … }` | D2-08 bug 3 |
| Neither h1 nor h2 is styled | `h1, h2, { … }`: a trailing comma makes the selector invalid, so the whole rule is dropped | Remove the last comma | D2-08 bug 4 |
| Nothing happens on hover | `a:hoverr` typo; the whole rule is dropped | `a:hover` | D2-08 bug 5 |
| The primary button is not styled | `.btn .primary` (space) means "inside" | `.btn.primary` | D2-FF5 bug 10 |
| `.card` does not match | HTML `class="card, special"` (comma) | `class="card special"` | D2-FF5 bug 11 |
| Your class colour is ignored | An `#id` rule on the same element wins | Use the id rule, or drop it | D2-FF3 (specificity duel) |

## Check yourself

1. Write the selector for: every `li`; everything with class `veg`; the element with id `cart`.
2. What is the difference between `.btn .primary` and `.btn.primary`? Draw the HTML each one matches.
3. Why does `h1, h2, { color: red; }` style nothing at all?
4. A `<p class="note" id="only">` has three rules: `p` blue, `.note` green, `#only` red. What colour is it? Does the order of the rules matter?
5. Why should you style mostly with classes, not ids?
6. `class="card, special"`: how many classes does this element have, and what are they?
7. Explain class vs id to a friend using "red team" and "Aarav, by name".

## Try it

- **D2-08** 🐞 Selector Mix-ups (5 bugs on the Momo House menu).
- **D2-09** Selector target practice: 5 targets, one rule each, **no HTML edits**.
- **D2-FF2** Hover menu. **D2-FF3** Specificity duel: predict 8 colours, check in DevTools.
- **D2-FF5** 🐞 Lost & Found: bugs 10–11.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Here is one HTML element and three CSS rules that match it. Explain, step by step, which colour wins and why. Don't give me new CSS."*

## Go deeper

- MDN: [CSS selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- CSS Diner (Wi-Fi): flukeout.github.io: a selector game. Do levels 1–14.

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [06 · Colours, units, fonts](06-colours-units-fonts.md): the paint shop and the measuring tape.*
