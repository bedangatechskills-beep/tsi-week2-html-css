# 08 · Display: The Queue vs the Bench
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B8*
**Layer:** Frontend (CSS)

> **Today in one sentence:** `display` decides whether a box stands in its own line, sits next to others, or leaves the page.

## The picture to keep in your head

**The queue vs the bench.** Think of the TSI Canteen at lunch time:

| Canteen | `display` value | How it behaves |
|---|---|---|
| **The queue**: each student stands on their **own line**, one behind the other, as wide as the queue | `block` | starts on a new line, fills the full width; width, height, margin and padding all work |
| **The bench**: students sit **side by side**; you **can't push one person up or down** | `inline` | sits in the line of text, as wide as its content; `width`, `height` and vertical margin are **ignored** |
| Side by side on the bench, but each person **keeps their own size** (a chair you can resize) | `inline-block` | sits in the line like inline, but width, height, margin and padding work like block |
| The student **left the room** | `none` | gone: takes no space at all |
| (bonus) The student is **invisible but still sitting there** | `visibility: hidden` | not seen, but the empty seat still takes its space |

## Words you now own

| Term | What it means (plain English) | Example elements |
|---|---|---|
| `display` | The CSS property that says how a box joins the layout. | `display: inline-block;` |
| Block | Own line, full width. | `div`, `p`, `h1`–`h6`, `ul`, `li`, `section`, `header`, `nav`, `footer` |
| Inline | In the line of text, content width. | `a`, `span`, `strong`, `em`, `img` (an inline element with a size of its own) |
| Inline-block | In the line, but with its own width, height and vertical margins. | buttons, nav links, badges |
| `none` | Removed from the page (still in the HTML). | a hidden logo |
| `visibility: hidden` | Invisible, but keeps its space. | an empty gap where a badge was |
| Default display | Every element has one before you write any CSS. | `li` is block → a vertical list |
| `list-style: none` | Removes the bullets (or numbers) of a list. | `ul.menu { list-style: none; }` |
| Horizontal nav | A row of links made from a `ul` of `li`s set to `inline-block`. | Home · Menu · Order · About |

## How it works

### Block vs inline, in one picture

```text
BLOCK (the queue)                          INLINE (the bench)
┌──────────────────────────────┐           Text text <a>link</a> text <strong>bold</strong> text
│ <h1> fills the whole line    │           └ they sit in the line of text, side by side,
└──────────────────────────────┘             as wide as their words
┌──────────────────────────────┐
│ <p> starts on a new line     │           INLINE-BLOCK (the bench, own chair size)
└──────────────────────────────┘           [ Home ] [ Menu ] [ Order ] ← side by side, but each
                                                                          has padding, width, margin
```

### Why inline ignores vertical margin

An inline box lives **inside a line of text**. If it could push itself down with `margin-top`, it would break the line. So the browser **ignores** vertical margin on inline boxes, and `width` / `height` too.

Vertical **padding** on an inline box is even trickier: the background grows up and down, but the line does **not** move. So the coloured link **overlaps** the lines above and below it. We checked this in Chrome: a link with `display: inline; padding: 12px 16px; margin-top: 20px;` stays exactly in its line (margin-top ignored), and its 41 px tall background spills over its neighbours.

The fix for nav links is almost always `display: inline-block`: now padding and margin push things away properly.

### none vs visibility: hidden

```text
display: none        → [A] [C]        B left the room. A and C close the gap.
visibility: hidden   → [A] [  ] [C]   B is invisible, but its seat is still taken.
```

`display: none` is how you hide something completely. `visibility: hidden` is rare; use it only when you really want the empty space.

### The recipe for a horizontal nav

A menu is a **list of links**, so the HTML is a `ul`. Then three lines of CSS make it horizontal:

```text
1. ul.menu      → list-style: none;   (no bullets)  + padding: 0; (no indent)
2. .menu li     → display: inline-block;   (side by side, keep their size)
3. .menu a      → display: inline-block; padding: …;   (big, clickable buttons)
```

You will learn flexbox in session 3.2, which is the modern way to do this. Today's inline-block way still works everywhere, and it teaches you how display really behaves.

## Code you built today

### Step 1: block and inline side by side

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display | Queue and bench</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>The queue and the bench</h1>
  <p>This paragraph is a block. It has a <a href="index.html">link</a> and a <span class="tag">tag</span> inside it.</p>
  <p>Another block, on its own line.</p>
  <p>Inline-block badges: <span class="badge">Veg</span> <span class="badge">Spicy</span> <span class="badge">New</span></p>
</body>
</html>
```

File: `css/style.css`
```css
p {
  background-color: #fdf6ec;
}

.tag {
  background-color: #fca311;
  margin-top: 30px;
  width: 200px;
}

.badge {
  display: inline-block;
  width: 70px;
  margin-top: 10px;
  padding: 4px 8px;
  background-color: #14213D;
  color: white;
  text-align: center;
}
```
- Each `p` is a block: own line, full width (look at the cream background).
- The `.tag` span is inline, so its `width: 200px` and `margin-top: 30px` are ignored.
- The badges are inline-block: side by side, each 70 px wide, pushed down by their margin.

**Predict:** change `.badge` to `display: inline;`. Which of its properties stop working?

### Step 2: the horizontal Momo House nav

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Nav</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <img class="logo" src="images/logo-momo-house.svg" alt="Momo House logo" width="60">
    <nav>
      <ul class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Menu</a></li>
        <li><a href="index.html">Order</a></li>
        <li><a href="index.html">About</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Fresh momo in Thamel</h1>
  </main>
</body>
</html>
```

File: `css/style.css`
```css
.site-header {
  background-color: #14213D;
  padding: 12px 24px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  padding: 12px 16px;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  background-color: #990011;
}
```
- `list-style: none` removes the bullets. `padding: 0` removes the list's indent.
- `.menu li { display: inline-block; }` puts the four items side by side.
- The links are inline-block too, so their padding makes big, safe click areas that don't overlap anything.

**Predict:** delete the `.menu li` rule. What happens to the menu? Then put it back and change `.menu a` to `display: inline;`. What changes on hover?

### Step 3: none vs visibility

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display | None vs hidden</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Who left the room?</h1>
  <p class="row"><span class="seat">Aarav</span><span class="seat gone">Sunita</span><span class="seat">Rajan</span></p>
  <p class="row"><span class="seat">Aarav</span><span class="seat hidden">Sunita</span><span class="seat">Rajan</span></p>
</body>
</html>
```

File: `css/style.css`
```css
.seat {
  display: inline-block;
  width: 100px;
  margin-right: 8px;
  padding: 8px;
  background-color: #fca311;
  text-align: center;
}

.gone {
  display: none;
}

.hidden {
  visibility: hidden;
}
```

**Predict:** in which row is there a gap between Aarav and Rajan? Why?

## Quick reference

| Want | Write |
|---|---|
| Own line, full width | `display: block;` |
| Side by side, sizes work | `display: inline-block;` |
| Gone completely | `display: none;` |
| Invisible, keep the space | `visibility: hidden;` |
| No bullets | `list-style: none;` (+ `padding: 0;`) |
| Horizontal nav | `ul { list-style: none; }` · `li { display: inline-block; }` · `a { display: inline-block; padding: …; }` |

| Element | Default display |
|---|---|
| div, p, h1–h6, ul, ol, li, section, header, nav, main, footer, form, table | block |
| a, span, strong, em, label, img, input, button | inline (img, input and button behave like inline-block) |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| Nothing changed | `display: blok;` typo; dropped | `display: block;` | D2-14 bug 1, D2-FF4 |
| The logo is missing | `.logo { display: none; }` left in | Delete it | D2-14 bug 2 |
| Bullets in the nav | `list-style: none` missing | Add it on the `ul` | D2-14 bug 3 |
| Nav links overlap the hero; `margin-top` does nothing | Links are `display: inline` | `display: inline-block` | D2-14 bug 4 |
| The nav stays vertical | CSS `.menu-li`, HTML `<ul class="menu"><li>` | `.menu li` | D2-14 bug 5 |
| Nav stays vertical | `display: inline-blok;` typo | `inline-block` | D2-HW1 bug 5 |
| An empty gap where the badge was | `visibility: hidden` instead of `display: none` | `display: none` | D2-HW4 bug 10 |

## Check yourself

1. Name four block elements and four inline elements.
2. Which three properties does an inline element ignore?
3. What is the difference between `inline` and `inline-block`?
4. `display: none` vs `visibility: hidden`: which one leaves a gap?
5. Write the three rules that turn a `ul` of links into a horizontal nav.
6. A nav link has `margin-top: 20px` but does not move. Why? How do you fix it?
7. Explain block vs inline to a friend using the queue and the bench.

## Try it

- **D2-14** 🐞 Nav Won't Behave (5 bugs on the Momo House header).
- **D2-15** Style Momo House, checkpoint 2: header + horizontal nav.
- **D2-FF2** Hover menu.
- **D2-HW1** bug 5 and **D2-HW4** bug 10.

## Coming later

Flexbox and grid (session 3.2) are the modern tools for rows and columns. `position` (relative, absolute, fixed, sticky) and responsive design with media queries also come later. Today's inline-block nav is the foundation.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Why does margin-top do nothing on my nav links, while padding makes the background overlap the next section? Explain inline vs inline-block. Don't write my CSS."*

## Go deeper

- MDN: [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- MDN: [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [09 · Debugging CSS](09-debugging-css.md): what the browser drops.*
