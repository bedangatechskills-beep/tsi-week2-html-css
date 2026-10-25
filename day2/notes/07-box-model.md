# 07 · The Box Model: Parcels Being Shipped
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B7*
**Layer:** Frontend (CSS)

> **Today in one sentence:** every element on a web page is a box made of four layers (content, padding, border, margin), and you can measure every layer.

## The picture to keep in your head

**Boxes being shipped** (parcels being shipped). Didi sends a plate of momo to a customer by courier:

```text
           margin  = the GAP between this parcel and the next one on the truck
    ┌───────────────────────────────────────────┐
    │  border = the CARDBOARD box               │
    │   ┌───────────────────────────────────┐   │
    │   │ padding = the BUBBLE WRAP         │   │
    │   │   ┌───────────────────────────┐   │   │
    │   │   │ content = the ITEM        │   │   │
    │   │   │ (the momo plate: text,    │   │   │
    │   │   │  an image)                │   │   │
    │   │   └───────────────────────────┘   │   │
    │   └───────────────────────────────────┘   │
    └───────────────────────────────────────────┘
```

| Parcel | CSS | Has a colour? |
|---|---|---|
| The item | **content** (`width`, `height`) | the background colour shows here |
| Bubble wrap | **padding** | yes: the background colour fills the padding too |
| Cardboard | **border** | its own colour (`border: 2px solid navy`) |
| Gap to the next parcel | **margin** | no: always see-through |

More bubble wrap makes the parcel **bigger**, even if the item stays the same. That is the most important idea today, and the cause of the most common bug (see box-sizing below).

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Box model | The rule that every element is a box of content + padding + border + margin. | everything on the page |
| `width` / `height` | The size of the **content** (by default). | `width: 300px;` |
| `padding` | Space **inside** the border, around the content. Cannot be negative. | `padding: 20px;` |
| `border` | The line around the padding: **width, style, colour**. | `border: 2px solid #14213D;` |
| `margin` | Space **outside** the border, between boxes. Can be negative; can be `auto`. | `margin: 16px;` |
| Shorthand | One property that sets several sides at once. | `padding: 10px 20px;` |
| `margin: 0 auto` | No margin top and bottom; left and right share the free space equally → the box is **centred**. Needs a width. | `.wrapper { max-width: 960px; margin: 0 auto; }` |
| `box-sizing: border-box` | Makes `width` include the padding and the border. | `* { box-sizing: border-box; }` |
| `border-radius` | Rounds the corners. `50%` on a square = a circle. | `border-radius: 12px;` |
| `max-width` | "Be at most this wide; narrower on small screens is fine." | `max-width: 960px;` |
| Box diagram | The coloured rectangles in DevTools (Elements → Computed) showing each layer in pixels. | margin orange, border yellow, padding green, content blue |

## How it works

### The box maths

By default (`box-sizing: content-box`), `width` is only the **item**. The visible box is bigger:

```text
visible width = border-left + padding-left + width + padding-right + border-right

.card { width: 300px; padding: 20px; border: 5px solid navy; }

          5  +   20   +  300  +   20   +   5   = 350px on screen   (not 300!)
       border  padding  content padding border
```

Three of those cards side by side need 3 × 350 = **1050 px**. In a 960 px row, the third card does not fit, so it **wraps** to the next line. (The cards are `display: inline-block`, see note 08. Normal block boxes never sit side by side.)

### box-sizing: border-box (the fix)

```text
.card { box-sizing: border-box; width: 300px; padding: 20px; border: 5px solid navy; }

the whole parcel is 300px; the item shrinks to 300 − 20 − 20 − 5 − 5 = 250px
three cards = 900px → they fit in a 960px row
```

Most developers put this at the top of every stylesheet, so widths always mean "the whole parcel":

```css
* {
  box-sizing: border-box;
}
```

(`*` is the **universal** selector: it matches every element.)

### Shorthand: 1, 2, 3 or 4 values

Padding and margin go **clockwise from the top**, like a clock: **T**op, **R**ight, **B**ottom, **L**eft. Remember **"TRouBLe"**.

| You write | Means |
|---|---|
| `padding: 10px;` | all four sides 10 px |
| `padding: 10px 20px;` | top + bottom 10 px · left + right 20 px |
| `padding: 10px 20px 30px;` | top 10 · left + right 20 · bottom 30 |
| `padding: 10px 20px 30px 40px;` | top 10 · right 20 · bottom 30 · left 40 |
| `padding: 10px 20px 10px 20px 5px;` | **5 values = invalid** → the whole declaration is dropped |

Single sides also exist: `padding-top`, `margin-left`, `border-bottom`…

### Border: three parts, and the style is not optional

```text
border:  2px     solid    #fca311;
         width   STYLE    colour
```

The style can be `solid`, `dashed`, `dotted`, `double`… The default style is `none`. So `border: 2px orange;` is accepted, but the style stays `none`, and **no border appears**. (Chrome keeps the declaration; the border is just invisible.)

### Centring a box: margin: 0 auto

`margin: 0 auto` says: "top and bottom 0; left and right `auto` (share the free space)". It only works when the box is **narrower** than its parent. A block box with no width already fills the whole line, so there is no free space to share, and nothing moves. Give it a `width` or (better) a `max-width`.

### Negative values

- `padding: -10px;` is **invalid** (you can't have negative bubble wrap). Chrome drops it, so the padding stays 0.
- `margin: -10px;` is **valid**: it pulls the box closer (or on top of a neighbour). Use it rarely.

### Rounded corners and round photos

`border-radius: 12px` rounds the corners. `border-radius: 50%` on a **square** element makes a **circle**. On a rectangle (120 × 80), `50%` makes an **oval**. For a round avatar, make the width and the height equal.

### Height and long text

If you fix `height: 100px` and the text needs 160 px, the text does not get cut: it **spills out** of the box and runs over the next thing. Usually it is better not to set a height at all; let the content decide.

### See it in DevTools

Right-click the card → **Inspect** → **Computed** tab (or the bottom of the Styles tab). The box diagram shows margin, border, padding and content with their real pixel numbers. Hover over each layer: the page highlights it.

## Code you built today

### Step 1: content width and padding

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box model | Step 1</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>TSI student cards</h1>
  <div class="card">
    <h2>Sunita Gurung</h2>
    <p>Morning batch · Dillibazar</p>
  </div>
</body>
</html>
```

File: `css/style.css`
```css
.card {
  width: 300px;
  padding: 20px;
  background-color: #fdf6ec;
}
```

**Predict:** how wide is the cream box on screen? Check with F12 → Computed.

### Step 2: border and margin

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box model | Step 2</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>TSI student cards</h1>
  <div class="card">
    <h2>Sunita Gurung</h2>
    <p>Morning batch · Dillibazar</p>
  </div>
  <div class="card">
    <h2>Aarav</h2>
    <p>Evening batch · Dillibazar</p>
  </div>
</body>
</html>
```

File: `css/style.css`
```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid #14213D;
  margin: 16px;
  background-color: #fdf6ec;
}
```
- Each card is now 5 + 20 + 300 + 20 + 5 = **350 px** wide.
- The 16 px margin is the gap between the two parcels.

**Predict:** change `border: 5px solid #14213D;` to `border: 5px #14213D;`. What happens to the border?

### Step 3: centre it and fix the maths

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box model | Step 3</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="wrapper">
    <h1>TSI student cards</h1>
    <div class="card">
      <h2>Sunita Gurung</h2>
      <p>Morning batch · Dillibazar</p>
    </div>
  </div>
</body>
</html>
```

File: `css/style.css`
```css
* {
  box-sizing: border-box;
}

.wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #fdf6ec;
}

.card {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid #14213D;
  background-color: white;
}
```
- `box-sizing: border-box`: the card is now exactly **300 px** on screen.
- The wrapper is at most 600 px wide and centred on the page. The card is centred inside the wrapper.

**Predict:** delete `max-width: 600px;` from `.wrapper`. Does the cream wrapper still look centred? Why?

### Step 4: the profile card (D2-13)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunita's profile card</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main class="profile">
    <img class="avatar" src="images/avatar-sunita.svg" alt="Sunita Gurung" width="120" height="120">
    <h1>Sunita Gurung</h1>
    <p>Student, AI-Powered Full Stack Developer Program</p>
    <p>TSI · Dillibazar, Kathmandu</p>
  </main>
</body>
</html>
```

File: `css/style.css`
```css
* {
  box-sizing: border-box;
}

body {
  background-color: #fdf6ec;
  font-family: Arial, Helvetica, sans-serif;
}

.profile {
  width: 320px;
  margin: 40px auto;
  padding: 24px;
  border: 2px solid #14213D;
  border-radius: 12px;
  background-color: white;
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border: 4px solid #990011;
  border-radius: 50%;
}

h1 {
  font-size: 1.5rem;
  color: #14213D;
}
```
- `margin: 40px auto`: 40 px top and bottom, centred left and right.
- The avatar is 120 × 120 (a square), so `border-radius: 50%` gives a **circle** with a cherry ring.

**Predict:** change the avatar's `height` to `80px`. What shape do you get?

## Quick reference

| Want | Write |
|---|---|
| Widths that include padding + border | `* { box-sizing: border-box; }` |
| Space inside | `padding: 20px;` / `padding: 10px 20px;` |
| Space outside | `margin: 16px;` |
| A line around | `border: 2px solid #14213D;` (width style colour) |
| Centre a box | `max-width: 960px; margin: 0 auto;` |
| Round corners | `border-radius: 12px;` |
| A circle | equal width and height + `border-radius: 50%;` |
| Shorthand order | top right bottom left (TRouBLe) |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| The third card wraps to a new line | width + padding + border = 350 px, not 300 | `box-sizing: border-box` | D2-12 bug 1, D2-HW1 bug 9 |
| `margin: 0 auto` does not centre | The box has no `width`/`max-width`, so it fills the line | Add `max-width` | D2-12 bug 2 |
| The padding is 0 | `padding: -10px;` is invalid and dropped | Use 0 or a positive value | D2-12 bug 3 |
| No border at all | `border: 2px orange;` has no style | `border: 2px solid orange;` | D2-12 bug 4, D2-HW1 bug 8, D2-FF4 |
| An oval avatar | `border-radius: 50%` on a 120 × 80 image | Equal width and height | D2-12 bug 5 |
| The padding is ignored | `padding: 10px 20px 10px 20px 5px;` (5 values) | 1 to 4 values only | D2-HW4 bug 6 |
| Text spills out of the box | `.card { height: 100px; }` with long text | Remove the fixed height | D2-HW4 bug 9 |
| `padding: 20` does nothing | no unit | `20px` | D2-HW1 bug 7, D2-FF4 |

## Check yourself

1. Name the four layers of the box model, from the inside out, with the parcel word for each.
2. A box has `width: 200px; padding: 10px; border: 2px solid;`. How wide is it on screen? And with `box-sizing: border-box`?
3. What does `padding: 5px 15px;` mean, side by side?
4. Why does `border: 2px orange;` show no border?
5. `margin: 0 auto` does nothing. What is missing?
6. Which can be negative: padding or margin?
7. How do you make a round photo, and why can it come out oval?
8. Explain padding vs margin to a friend using the parcel and the bubble wrap.

## Try it

- **D2-12** 🐞 Broken Cards (5 bugs: Aarav, Sunita and Rajan's cards).
- **D2-13** Profile card: then show & tell.
- **D2-FF1** TSI ID card: rebuild it from `target.svg` (card 360 × 220, padding 16 px, 12 px radius, 80 px round avatar).
- **D2-15** Style Momo House, checkpoint 4: 3 dish cards.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"My three cards are each 300px wide in a 960px row, but the third one wraps to the next line. Here is my CSS. Walk me through the box-model maths. Don't give me the fixed code."*

## Go deeper

- MDN: [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- Chrome DevTools docs: "View and change CSS" → the box model diagram.

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [08 · Display](08-display.md): the queue vs the bench.*
