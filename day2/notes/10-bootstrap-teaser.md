# 10 · Bootstrap Teaser: IKEA for Websites
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B10*
**Layer:** Frontend (CSS framework)

> **Today in one sentence:** Bootstrap is a big stylesheet someone else wrote; you use its ready-made classes instead of writing every rule yourself.

## The picture to keep in your head

**IKEA furniture** (ready-made parts vs raw wood): **IKEA for websites**.

Today you built furniture from **raw wood**: you cut every board yourself (`padding: 20px`, `border: 2px solid`, `border-radius: 12px`…). It takes time, but you understand every piece.

IKEA gives you **ready-made parts** with names: "BILLY shelf", "LACK table". You don't cut wood. You pick the part and assemble it. Bootstrap does the same for websites: it gives you ready-made **classes** with names: `container`, `btn`, `card`.

| IKEA | Bootstrap |
|---|---|
| The IKEA store (all the parts) | `bootstrap.min.css` (one big stylesheet, about 230 KB) |
| A part with a name: "BILLY shelf" | a class: `card`, `btn`, `container` |
| A colour option for the part | a modifier class: `btn-primary`, `btn-danger` |
| The instruction booklet | getbootstrap.com/docs |
| Raw wood and a saw | your own CSS (what you learnt today) |

Important: IKEA furniture still needs **you** to know what a table is. Bootstrap is easy **only** if you know CSS. When a Bootstrap page looks wrong, you debug it with the box model, selectors and DevTools, exactly as in note 09.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| CSS framework | A ready-made stylesheet with named classes. | Bootstrap, Tailwind (later in the course) |
| Bootstrap | The most famous CSS framework. We use version 5.3.3, as a local file. | `css/bootstrap.min.css` |
| `.min.css` | "Minified": all spaces and new lines removed so the file is smaller. Not for reading. | `bootstrap.min.css` |
| Utility / component class | A class that does one job (`text-center`) or builds one thing (`card`). | `class="btn btn-primary"` |
| `container` | A centred box with a max width and side padding. (You built this yourself: `max-width` + `margin: 0 auto`.) | `<div class="container">` |
| `btn` + `btn-primary` | A styled button (base class + colour class). Works on `<button>` and `<a>`. | `<button class="btn btn-primary">` |
| `card` | A box with border, radius and padding parts (`card-body`, `card-title`, `card-text`). | a dish card |
| CDN | A public server that hosts files like Bootstrap. Needs internet. | `cdn.jsdelivr.net` |
| Local copy | The file saved in your project, so it works offline (our class way). | `W2D2/assets/vendor/bootstrap-5.3.3/` |

## How it works

### Step by step: from plain page to Bootstrap

1. Copy `bootstrap.min.css` from `W2D2/assets/vendor/bootstrap-5.3.3/` into your project's `css/` folder.
2. Link it in the `<head>`, **before** your own stylesheet:

```text
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
```

3. Add Bootstrap's class names to your HTML.

Why before your own file? The cascade (note 04): with equal selectors, the **later** rule wins. Your `style.css` comes later, so your own rules can override Bootstrap's.

### The three parts you saw in class

```text
container                      btn btn-primary                card
┌─────────────────────────┐    ┌──────────────┐               ┌─────────────────────┐
│ centred, max width,      │    │  Order now   │  ← blue,     │ image               │
│ padding on the sides     │    └──────────────┘    rounded,  ├─────────────────────┤
│ (like your .wrapper)     │       hover darker               │ card-body           │
└─────────────────────────┘                                   │  card-title         │
                                                              │  card-text          │
                                                              └─────────────────────┘
```

The `btn` class does the shape and padding. The second class (`btn-primary`, `btn-success`, `btn-danger`, `btn-outline-primary`…) picks the colour. You need **both**.

### Hand-written CSS vs Bootstrap

| | Your own CSS | Bootstrap |
|---|---|---|
| Speed | slower to start | very fast to start |
| Look | unique | many sites look the same ("Bootstrap look") |
| File size | tiny (a few KB) | big (≈ 230 KB) |
| Understanding | you know every line | you must learn its class names, and still need CSS to fix things |
| Best for | learning, small unique sites | admin panels, quick prototypes, team projects |

Interviewers in Kathmandu often ask: "Have you used Bootstrap? Can you also write the CSS without it?" The right answer is **yes to both**.

## Code you built today

### Step 1: the plain page (raw wood, no CSS yet)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Plain</title>
</head>
<body>
  <div>
    <h1>Momo House</h1>
    <p>Fresh momo in Thamel, made by Didi.</p>
    <button type="button">Order now</button>
    <div>
      <img src="images/momo-plate.svg" alt="A plate of steam momo with chutney" width="300">
      <h2>Steam momo</h2>
      <p>Ten pieces, Rs. 150.</p>
    </div>
  </div>
</body>
</html>
```

**Predict:** with no CSS at all, where on the screen will the heading start? Will the button look like a "modern" button?

### Step 2: the same page with Bootstrap (IKEA parts)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Bootstrap</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Momo House</h1>
    <p>Fresh momo in Thamel, made by Didi.</p>
    <button type="button" class="btn btn-primary">Order now</button>
    <div class="card">
      <img src="images/momo-plate.svg" class="card-img-top" alt="A plate of steam momo with chutney">
      <div class="card-body">
        <h2 class="card-title">Steam momo</h2>
        <p class="card-text">Ten pieces, Rs. 150.</p>
        <a href="index.html" class="btn btn-outline-primary">See the menu</a>
      </div>
    </div>
  </div>
</body>
</html>
```
- `container` centres the content and adds side padding.
- `btn btn-primary` gives a blue, rounded button with a hover effect.
- `card` + `card-img-top` + `card-body` + `card-title` + `card-text` build the dish card.
- We did not write one line of CSS. Bootstrap's file did it.

**Predict:** make the window narrow, then wide. What does `container` do to the width of the content?

### Step 3: your own rules on top

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Bootstrap + my CSS</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <h1>Momo House</h1>
    <div class="card dish-card">
      <div class="card-body">
        <h2 class="card-title">Jhol momo</h2>
        <p class="card-text">In warm sesame soup, Rs. 200.</p>
        <button type="button" class="btn btn-primary">Add to order</button>
      </div>
    </div>
  </div>
</body>
</html>
```

File: `css/style.css`
```css
/* my own rules come AFTER Bootstrap, so they can override it */
h1 {
  color: #990011;
}

.dish-card {
  max-width: 320px;
  border: 2px solid #14213D;
}
```
- Your `style.css` is linked **after** Bootstrap, so your `h1` colour wins.
- `.dish-card` adds your own width and border to Bootstrap's card.

**Predict:** swap the two `<link>` lines (your file first, Bootstrap second). Does the h1 stay cherry? Check in F12 → Styles which rule is crossed out.

## Quick reference

| Want | Bootstrap class | You built it yourself as |
|---|---|---|
| Centred page width | `container` | `max-width: 960px; margin: 0 auto; padding: 0 16px;` |
| A button | `btn btn-primary` | padding + background + border-radius + `:hover` |
| An outline button | `btn btn-outline-primary` | border + colour, no background |
| A card | `card` › `card-body` › `card-title`, `card-text` | `.card { padding; border; border-radius; }` |
| Centre text | `text-center` | `text-align: center;` |
| Space below | `mb-3` | `margin-bottom: 1rem;` |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| No Bootstrap styles at all | The `<link>` path is wrong, or the file was not copied into `css/` | Check Network for 404; copy the file | D2-FF6 |
| The button is plain grey text | Only `btn-primary`, no `btn` (or only `btn`) | Use both: `btn btn-primary` | D2-FF6 |
| Your own colour never shows | Your stylesheet is linked **before** Bootstrap | Link yours **after** | (the cascade, note 04) |
| No styles when the Wi-Fi is off | Linked to a CDN URL | Use the local copy | (class setup) |
| A Bootstrap page breaks and you don't know why | You don't know the CSS under it | Inspect: it is the same box model and selectors | (notes 05–09) |

## Check yourself

1. What is a CSS framework? Name one advantage and one disadvantage.
2. Why do we link `bootstrap.min.css` before our own `style.css`?
3. What do `btn` and `btn-primary` each do? Why do you need both?
4. Which of your own CSS rules from today does `container` replace?
5. Why do we use a local copy of Bootstrap in class instead of a CDN link?
6. An interviewer asks: "Why learn CSS if Bootstrap exists?" What do you say?
7. Explain Bootstrap to a friend using IKEA furniture and raw wood.

## Try it

- **D2-FF6** Bootstrap try-it: add `container`, `btn btn-primary` and a `card` to a plain page with the local Bootstrap file; compare with your hand-written CSS from D2-13.

## Coming later

Session **3.3 Bootstrap deep dive**: the grid system (rows and columns), navbars, forms and responsive breakpoints. Bootstrap's grid uses flexbox, which you meet in session 3.2. Tailwind (another framework) comes later in the program.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Explain what the Bootstrap classes container, btn, btn-primary and card each do in plain CSS terms (padding, margin, border). Don't build a page for me."*

## Go deeper

- Bootstrap docs (Wi-Fi): getbootstrap.com/docs/5.3 → Components → Buttons, Card; Layout → Containers.
- MDN: [CSS frameworks and libraries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Overview)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [11 · Day 2 cheatsheet](11-day2-cheatsheet.md).*
