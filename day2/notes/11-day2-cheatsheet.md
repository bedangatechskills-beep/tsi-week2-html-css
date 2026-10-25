# 11 · Day 2 Cheatsheet: Semantic HTML, A11y, Media → CSS Basics
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Keep this next to your keyboard*
**Layer:** Frontend

> **The day in one sentence:** name the boxes (semantic HTML), make them work for everyone (a11y), then dress them with one shared stylesheet (CSS).

## The analogies (same words as class)

| Topic | Picture |
|---|---|
| CSS idea | **Skeleton & outfit**: same HTML, new stylesheet |
| Semantic HTML | **Boxes / rooms with names**: kitchen, bedroom, not "room 1, room 2" |
| Accessibility + meta | **The parcel label read aloud** |
| Audio, video, iframe | **TV, radio, and a window into another room** |
| 3 ways to add CSS | **Sticky note** (inline) / **outfit list** (internal) / **school uniform** (external) |
| Selectors | **Calling students in class**: everyone / red team / Aarav by name / red team in row 2 |
| Colours, units | **Paint shop** / **measuring tape** |
| Box model | **Parcels being shipped**: item / bubble wrap / cardboard / gap |
| Display | **The queue vs the bench** |
| Bootstrap | **IKEA for websites** |

## A complete page that uses (almost) everything

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Momo House in Thamel: steam, fried and jhol momo made by Didi.">
  <title>Momo House | Home</title>
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <a href="index.html"><img src="images/logo-momo-house.svg" alt="Momo House home page" width="60"></a>
    <nav>
      <ul class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Menu</a></li>
        <li><a href="index.html">Order</a></li>
      </ul>
    </nav>
  </header>
  <main class="wrapper">
    <h1>Fresh momo in Thamel</h1>
    <section>
      <h2>Today's specials</h2>
      <article class="card">
        <h3>Jhol momo</h3>
        <p class="price">Rs. 200</p>
      </article>
    </section>
    <figure>
      <video controls width="320" poster="images/poster-momo-steam.svg">
        <source src="media/momo-steam.mp4" type="video/mp4">
        Your browser cannot play this video.
      </video>
      <figcaption>Didi's steamer at work.</figcaption>
    </figure>
  </main>
  <footer class="site-footer">
    <p>&copy; 2026 Momo House, Thamel, Kathmandu</p>
  </footer>
</body>
</html>
```

File: `css/style.css`
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: #14213D;
  background-color: #fdf6ec;
}

.site-header,
.site-footer {
  padding: 12px 24px;
  background-color: #14213D;
  color: white;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  background-color: #990011;
}

.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
}

.card {
  width: 300px;
  padding: 16px;
  border: 2px solid #14213D;
  border-radius: 12px;
  background-color: white;
}

.price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #990011;
}
```

## Semantic tags

| Tag | Use for | Rule |
|---|---|---|
| `header` | logo, site name, nav | top of page or article |
| `nav` | main links | links only |
| `main` | this page's main content | **one** per page |
| `section` | themed group | starts with a heading |
| `article` | stands alone (post, card) | makes sense elsewhere |
| `aside` | related, extra | not the main story |
| `footer` | contact, © | bottom |
| `figure` + `figcaption` | image + caption | |
| `button` / `a href` | **do** something / **go** somewhere | never `div class="btn"` |

## Accessibility + head checklist

`<html lang="en">` · a real `<title>` · `meta charset` · `meta viewport` · `meta description` · favicon · every `img` has `alt` (decorative: `alt=""`) · link text makes sense alone (no "click here") · every input has `<label for>` + `id` · headings in order h1 → h2 → h3 · strong contrast · the **Tab walk** reaches everything · **Lighthouse** → Accessibility.

## Media

| Tag | Must have |
|---|---|
| `<audio>` | `controls`, correct `src` |
| `<video>` | `controls`, `<source>` **inside** with the right `type`, `poster` path right |
| `<iframe>` | `src`, `title`, `width`, `height` |

Boolean attributes (`controls`, `muted`, `loop`, `autoplay`) are ON when present: `controls="false"` is still ON. Autoplay needs `muted` or a file with no sound track (and is best avoided).

## CSS rule and linking

```text
selector { property: value; property: value; }
<link rel="stylesheet" href="css/style.css">     ← in <head>, spelt exactly
/* comment */                                     ← never //
```

Cascade: equal selectors → **last wins**. Stronger selector → **wins anyway**: `#id` > `.class` > `element`.

## Selectors

| Write | Means |
|---|---|
| `p` | every p |
| `.veg` | class veg |
| `#cart` | id cart |
| `h1, h2` | both (no trailing comma!) |
| `nav a` | a inside nav |
| `.dish.spicy` | one element, both classes |
| `a:hover` | mouse over a |

Names are case-sensitive. HTML classes are separated by **spaces**, never commas.

## Values

| Kind | Examples | Watch out |
|---|---|---|
| Colour | `maroon` · `#14213D` · `#fff` · `rgb(20, 33, 61)` · `rgba(0, 0, 0, 0.5)` | hex = 0–9 a–f, 3 or 6 digits; rgb = 3 numbers |
| Length | `16px` · `50%` · `1.5rem` · `2em` · `0` | unit glued on, no space; no unit only for 0 |
| Font stack | `"Momo Sans", Arial, Helvetica, sans-serif` | always end with a generic family |
| Line height | `1.6` | no unit |

## Box model

```text
margin (gap) › border (cardboard) › padding (bubble wrap) › content (item)
visible width = border + padding + width + padding + border     ← unless box-sizing: border-box
padding / margin shorthand: top right bottom left (TRouBLe) · 1, 2, 3 or 4 values
border: 2px solid #14213D;   ← width STYLE colour (no style = no border)
centre a box: max-width: 960px; margin: 0 auto;
circle: equal width + height, border-radius: 50%
```

## Display

| Value | Behaves |
|---|---|
| `block` | own line, full width (div, p, h1, li, section…) |
| `inline` | in the text line; ignores width, height, vertical margin (a, span, strong) |
| `inline-block` | in the line, but sizes and margins work (nav links, badges) |
| `none` | gone, no space |
| `visibility: hidden` | invisible, space kept |

Horizontal nav = `ul { list-style: none; padding: 0; }` + `li { display: inline-block; }` + `a { display: inline-block; padding: …; }`

## Debugging CSS in 4 questions

1. **Loaded?** Network → `style.css` 200 (not 404); `rel="stylesheet"`; right path.
2. **Matches?** Inspect → is the rule listed in Styles? Compare names letter by letter.
3. **Understood?** A yellow ⚠ = invalid value or unknown property → dropped.
4. **Won?** Crossed out with no ⚠ = a later or stronger rule won.

What the browser drops: a bad declaration → that line only · a bad selector (`h1, h2,` · `a:hoverr` · after `//`) → the whole rule · a missing `;` → two declarations · a missing `}` → the next rule is swallowed · a bad `<link>` → everything.

## Keyboard and DevTools

| Do | Keys / place |
|---|---|
| Inspect an element | right-click → Inspect, or Ctrl+Shift+C |
| See box sizes | Elements → Computed → box diagram |
| See dropped/losing CSS | Elements → Styles (⚠ / crossed out) |
| See missing files | Network → refresh → red 404 |
| Accessibility report | Lighthouse → Accessibility → Analyze |
| Keyboard test | Tab / Shift+Tab / Enter / Space |
| Rename a tag pair | just retype the opening tag (linked editing is on in `W2D2`) |
| HTMLHint problems | Ctrl+Shift+M |

## Coming later

Flexbox and grid (3.2) · positioning (3.2) · responsive design and media queries (3.2) · the Bootstrap grid (3.3) · JavaScript for buttons (4.2).

## AI rule for this week

**Stage 1: AI as Tutor.** AI explains; you type every line. Debug first with the 4 questions; then ask.
A good prompt: *"Here is one CSS rule that DevTools shows crossed out without a warning triangle. Explain why it lost. Don't rewrite my stylesheet."*

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next session: 3 / 3.2: CSS from basics to layout (flexbox and grid). Homework first: `homework/W2D2-Homework-Sheet.md`.*
