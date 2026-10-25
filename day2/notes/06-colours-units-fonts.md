# 06 · Colours, Units, Fonts and Text: The Paint Shop and the Measuring Tape
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B6*
**Layer:** Frontend (CSS)

> **Today in one sentence:** CSS values are exact: a colour must be a real paint code, and a size needs a number **and** a unit, with no space between them.

## The picture to keep in your head

**Paint shop** (colours), then **measuring tape** (units). Two pictures, on two different slides.

**The paint shop.** At a paint shop in Kathmandu you can ask for paint in different ways: by **name** ("maroon"), by the **code** on the tin (`#800000`), or by **mixing** red, green and blue yourself (`rgb(128, 0, 0)`). You can also ask for a **see-through** version (`rgba(128, 0, 0, 0.5)`). If you write a code that does not exist (`#gg0000`), the shop gives you nothing, and the wall stays the old colour.

**The measuring tape.** A tailor never writes "the sleeve is 30". 30 what? Centimetres? Inches? In CSS, a size needs a **unit**: `30px`, `2rem`, `50%`. The tape has different scales:
- `px`: a fixed mark on the tape,
- `%`: "half of the cloth" (a part of the parent),
- `rem`: "times the standard size" (the page's root font size, usually 16 px),
- `em`: "times this element's own font size" (for `font-size` itself: the parent's). `rem` is simpler: × 16 px. Use rem.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Named colour | One of about 140 colour words CSS knows. | `maroon`, `navy`, `white`, `tomato` |
| Hex colour | `#` + 6 hex digits: 2 for red, 2 for green, 2 for blue. Digits are 0–9 and a–f. | `#14213D` (TSI navy), `#990011` (cherry) |
| Short hex | 3 digits, each one doubled. | `#fff` = `#ffffff` |
| `rgb()` | Red, green, blue, each 0–255. **Three** numbers. | `rgb(20, 33, 61)` |
| `rgba()` | rgb + **alpha** (see-through): 0 = invisible, 1 = solid. | `rgba(0, 0, 0, 0.5)` |
| Unit | What a number measures. **No space** between the number and the unit. | `16px`, `1.5rem` |
| `px` | Pixels: a fixed size on screen. | `width: 300px;` |
| `%` | A percentage of the **parent** (for widths). | `width: 50%;` |
| `rem` | Times the **root** (html) font size, usually 16 px. `2rem` = 32 px. | `font-size: 1.25rem;` |
| `em` | Times **this element's** font size (for `font-size` itself, × the **parent's**). `rem` is simpler: × 16 px. Use rem. | `padding: 0.5em;` |
| Font stack | A list of fonts. The browser uses the **first one it has**. End with a generic family. | `"Momo Sans", Arial, sans-serif` |
| Generic family | A fallback that always exists. | `serif`, `sans-serif`, `monospace` |
| `line-height` | The height of each line. Best written **without a unit**. | `line-height: 1.6;` |

## How it works

### Colours: four ways to ask for the same paint

```css
h1 {
  color: maroon;
}

h2 {
  color: #800000;
}

h3 {
  color: rgb(128, 0, 0);
}

h4 {
  color: rgba(128, 0, 0, 0.5);
}
```

The first three are the **same** colour. The fourth is the same colour at half strength.

How a hex code works:

```text
#  99   00   11
   │    │    └─ blue  (00 = none … ff = full)
   │    └────── green
   └─────────── red    → #990011 = lots of red, no green, a little blue = TSI cherry
```

Hex digits are `0 1 2 3 4 5 6 7 8 9 a b c d e f`. There is no `g`. A hex colour has **3 or 6** digits (also 4 or 8 with see-through). `#fffff` (5 digits) is not a colour; it is dropped.

`color` sets the **text** colour. `background-color` sets the **background**. CSS uses the American spelling `color` everywhere in code, even though these notes write "colour" in sentences.

**Contrast tip (accessibility):** dark text on a light background (or the opposite). TSI navy `#14213D` on white is excellent. Light grey on white fails Lighthouse.

### Units: number + unit, glued together

```text
width: 300px;      ✔
width: 300;        ✘  no unit → the browser drops the declaration
font-size: 1.5rem; ✔
font-size: 1.5 rem;✘  a space breaks it → dropped
width: 0;          ✔  zero is the only length that needs no unit
```

Which unit when?

| Use | Good unit | Why |
|---|---|---|
| Font sizes | `rem` | Respects the user's browser font setting; easy maths (16 px × n) |
| Borders, small fixed details | `px` | A 1 px line should stay 1 px |
| Widths of boxes | `%`, or `px` with `max-width` | Fits different screens |
| Spacing around text (padding) | `rem` or `em` | Grows with the text |
| `line-height` | no unit (`1.6`) | Means "1.6 × this element's font size" |

**rem in one line:** the root (`<html>`) font size is 16 px in most browsers, so `1rem` = 16 px, `1.5rem` = 24 px, `2rem` = 32 px.

**em in one line:** `em` = × this element's font size (for `font-size` itself, × the parent's). A heading with `font-size: 40px` and `padding: 0.5em` gets 20 px of padding. Inside a box with `font-size: 20px`, `font-size: 2em` = 40 px. Nested `em`s multiply, which surprises people. `rem` is simpler: × 16 px. Use rem.

### Fonts: always carry a spare

`font-family` takes a **list**. The browser walks the list from left to right and uses the first font installed on the visitor's computer:

```text
font-family: "Momo Sans", Arial, Helvetica, sans-serif;
              │            │      │          └─ last resort: any sans-serif font. Always exists.
              │            │      └─ on Mac
              │            └─ on almost every Windows PC
              └─ the font you dream of (here: a font that does not exist anywhere)
```

- Quote names with spaces: `"Times New Roman"`, `"Momo Sans"`.
- Generic families (`serif`, `sans-serif`, `monospace`) are keywords: **never** quote them.
- With **no** fallback, a missing font falls back to the browser's default, which is usually Times New Roman. Your modern menu suddenly looks like an old newspaper.

### Text properties you will use every day

| Property | Does | Example |
|---|---|---|
| `font-size` | size of the letters | `1.125rem` |
| `font-weight` | thickness | `normal`, `bold`, `700` |
| `font-style` | italic or not | `italic` |
| `line-height` | space between lines | `1.6` |
| `text-align` | left, center, right | `center` (US spelling!) |
| `text-decoration` | underline or not | `none` (removes link underlines) |
| `letter-spacing` | space between letters | `2px` |
| `text-transform` | capital letters | `uppercase` |

`line-height: 1.5` and `line-height: 1.5px` are very different: the first means "1.5 lines", the second means "lines 1.5 pixels tall", so every line sits on top of the one before.

## Code you built today

### Step 1: the paint shop

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen | Paint shop</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>TSI Canteen colours</h1>
  <p class="named">Named: maroon</p>
  <p class="hex">Hex: #990011 (TSI cherry)</p>
  <p class="rgb">rgb: rgb(20, 33, 61) (TSI navy)</p>
  <p class="see-through">rgba: half see-through navy background</p>
</body>
</html>
```

File: `css/style.css`
```css
body {
  background-color: #fdf6ec;
}

.named {
  color: maroon;
}

.hex {
  color: #990011;
}

.rgb {
  color: rgb(20, 33, 61);
}

.see-through {
  background-color: rgba(20, 33, 61, 0.3);
}
```

**Predict:** change `.hex` to `color: #gg0011;`. What colour is that line now? What does DevTools Styles show next to it?

### Step 2: the measuring tape

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen | Measuring tape</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Price board sizes</h1>
  <div class="board-px">300px wide, always</div>
  <div class="board-percent">50% of the page width</div>
  <p class="big">2rem text = 32 px</p>
  <p class="small">0.875rem text = 14 px</p>
</body>
</html>
```

File: `css/style.css`
```css
.board-px {
  width: 300px;
  background-color: #fca311;
}

.board-percent {
  width: 50%;
  background-color: #14213D;
  color: white;
}

.big {
  font-size: 2rem;
}

.small {
  font-size: 0.875rem;
}
```

**Predict:** make the browser window narrower. Which board changes width, and which one stays the same?

### Step 3: fonts and text on the canteen menu

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen | Menu</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>TSI Canteen menu</h1>
  <p class="tagline">Fresh every morning, Sunday to Thursday</p>
  <p>Didi makes everything in the canteen kitchen. Lunch is served from 12:00 to 14:00. Ask for extra chutney: it is free.</p>
  <p class="price">Veg momo: Rs.&nbsp;120 · Chicken momo: Rs.&nbsp;150 · Milk tea: Rs.&nbsp;30</p>
</body>
</html>
```

File: `css/style.css`
```css
body {
  font-family: "Momo Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #14213D;
  background-color: #fdf6ec;
}

h1 {
  font-size: 2rem;
  text-align: center;
  color: #990011;
}

.tagline {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}

.price {
  font-size: 1.25rem;
  font-style: italic;
}
```
- "Momo Sans" does not exist anywhere, so the browser moves on to Arial. That is the fallback working.
- `line-height: 1.6` (no unit) gives comfortable space between the lines of the long paragraph.

**Predict:** delete `Arial, Helvetica, sans-serif` so only `"Momo Sans"` is left. What does the text look like? Then change `line-height: 1.6;` to `line-height: 1.6px;`.

## Quick reference

| Want | Write |
|---|---|
| Text colour | `color: #14213D;` |
| Background | `background-color: #fdf6ec;` |
| See-through | `rgba(20, 33, 61, 0.5)` |
| Font with fallback | `font-family: "Momo Sans", Arial, sans-serif;` |
| Readable body text | `font-size: 1rem; line-height: 1.6;` |
| Big heading | `font-size: 2rem;` |
| Centre text | `text-align: center;` |
| No underline | `text-decoration: none;` |
| Spaced capitals | `text-transform: uppercase; letter-spacing: 2px;` |

TSI palette used in class: navy `#14213D`, cherry `#990011`, amber `#fca311`, cream `#fdf6ec`.

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| The box ignores its width | `width: 300;` no unit | `300px` | D2-10 bug 1, D2-HW1 bug 7 (`padding: 20;`), D2-FF4 (`padding: 20`) |
| The colour does not change | `#gg0000`: g is not a hex digit | `#cc0000` (0–9, a–f only) | D2-10 bug 2 |
| The colour does not change | `#fffff`: 5 digits | `#ffffff` or `#fff` | D2-HW1 bug 11 |
| The size does not change | `1.5 rem` with a space | `1.5rem` | D2-10 bug 3, D2-FF4 (`16 px`), D2-FF5 bug 8 (`20 px`) |
| The page looks like an old newspaper | `"Momo Sans"` with no fallback | `"Momo Sans", Arial, sans-serif` | D2-10 bug 4 |
| The lines sit on top of each other | `line-height: 1.5px` | `line-height: 1.5` | D2-10 bug 5 |
| The background stays white | `rgb(255, 200)`: only two numbers | three numbers: `rgb(255, 200, 0)` | D2-HW4 bug 7 |
| The page scrolls sideways | `.banner { width: 120%; }` is wider than its parent | `width: 100%` (or less) | D2-HW4 bug 8 |
| DevTools: "Unknown property name" | `colour:` British spelling in code | `color:` | D2-06 bug 5, D2-FF4 |

## Check yourself

1. Write TSI navy three ways: hex, rgb, and rgba at 50 %.
2. Why is `#gg0000` not a colour? Which characters can a hex code use?
3. What is `1.5rem` in pixels, if the root font size is 16 px? And `0.75rem`?
4. What is wrong with `font-size: 1.5 rem;` and with `width: 300;`?
5. Why does a font stack end with `sans-serif` or `serif`, and why is that word not in quotes?
6. What is the difference between `line-height: 1.5` and `line-height: 1.5px`?
7. Explain `rem` vs `%` to a friend using the measuring tape.

## Try it

- **D2-10** 🐞 Units & Colours (5 bugs on the canteen price page).
- **D2-11** Theme the canteen menu: a 3-colour hex palette, a font stack with a fallback, rem sizes, `line-height: 1.6`.
- **D2-FF1** TSI ID card (fonts and colours from a picture).
- **D2-HW4** 🐞 Patan Craft Shop replay: bugs 6–8.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Explain the difference between px, %, rem and em with one example each about font size and box width. Which should a beginner use for font sizes, and why? No full stylesheet, please."*

## Go deeper

- MDN: [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- MDN: [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [07 · The box model](07-box-model.md): parcels being shipped.*
