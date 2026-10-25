# 01 · Semantic HTML5: Boxes with Names
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B1*
**Layer:** Frontend (HTML structure)

> **Today in one sentence:** use tags whose *names* say what the box is for, so people, Google, screen readers and AI can understand your page.

## The picture to keep in your head

**Boxes / rooms with names**: `<div class="header">` → `<header>`; Google, screen readers and AI read the names.

Think of a house. A good house plan does not say "room 1, room 2, room 3". It says **kitchen**, **bedroom**, **bathroom**. When a guest arrives, they know where to go. When a plumber comes, they go straight to the kitchen and the bathroom.

A web page is the same. A page made only of `<div>` boxes is a house with "room 1, room 2, room 3". It can *look* fine, but nobody can tell which box is the menu and which box is the main story. Semantic tags are the room names.

| Analogy (house) | Real thing (HTML) |
|---|---|
| The sign over the front door | `<header>` (logo, site name) |
| The hallway with doors to every room | `<nav>` (the main links) |
| The main living room, only one per house | `<main>` (the main content of this page) |
| A themed corner of a room, with its own sign | `<section>` (a group of content **with a heading**) |
| A letter you could post to someone else and it still makes sense | `<article>` (a blog post, a news item, a product card) |
| A side table with extra things | `<aside>` (related links, tips, ads) |
| The back door with the address plate | `<footer>` (contact, copyright) |
| An unlabeled cardboard box | `<div>` (a block box with no meaning) |
| A highlighter on a few words | `<span>` (an inline box with no meaning) |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Semantic | "Has meaning." A semantic tag tells you what its content **is**, not how it looks. | `<nav>` = "these are the main links" |
| Landmark | A big named area of the page that screen readers can jump to. | `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` |
| `<header>` | The top area of a page or of an article: logo, title, maybe the nav. | Momo House logo + name |
| `<nav>` | A block of **main navigation links**. Not every group of links: only the main ones. | Home · Menu · Order · About |
| `<main>` | The main content of this page. **Only one per page.** | The menu table on `menu.html` |
| `<section>` | A themed group of content. **It should start with a heading.** | "Today's specials" with its `<h2>` |
| `<article>` | A self-contained piece that makes sense alone. | One blog post on the TSI Blog |
| `<aside>` | Content beside the main story: related, but not the main thing. | "Related posts", a tip box |
| `<footer>` | The bottom area: contact, copyright, small links. | "© 2026 Momo House, Thamel" |
| `<figure>` + `<figcaption>` | An image (or a chart, or code) with its caption. | A momo photo with "Steam momo, Rs. 150" |
| `<div>` / `<span>` | Boxes with no meaning. `div` is a block, `span` is inline. Use them only for styling hooks. | `<div class="row">`, `<span class="price">` |
| `<button>` | A real button: the Tab key reaches it, Enter and Space press it. | `<button>Subscribe</button>` |

## How it works

### Why bother? The page looks the same

Semantic tags have almost **no look** of their own. `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` and `<footer>` all display like a `<div>`: a block on its own line. So why change?

Because four readers use your page, and only one of them has eyes:

1. **You and your team.** `</main>` is easier to read than the fifth `</div>` in a row.
2. **Screen readers.** A blind visitor can press one key and jump to "main" or "navigation". With only divs, there is nothing to jump to.
3. **Google and other search engines.** They give more weight to the text inside `<main>` and `<article>`.
4. **AI tools.** When you paste your page into an AI tutor, named boxes help it understand the page too.

### A typical page plan

```text
┌──────────────────────── <header> ────────────────────────┐
│  logo   Momo House                                        │
│  ┌──────────────────────── <nav> ──────────────────────┐ │
│  │  Home   Menu   Order   About                         │ │
│  └──────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────┘
┌──────────────── <main> ────────────────┐ ┌─── <aside> ───┐
│ ┌──────────── <section> ─────────────┐ │ │ Tip of the    │
│ │ <h2> Today's specials              │ │ │ day           │
│ │ <article> Jhol momo ... </article> │ │ │               │
│ │ <article> Kothey ...    </article> │ │ │               │
│ └────────────────────────────────────┘ │ └───────────────┘
└────────────────────────────────────────┘
┌──────────────────────── <footer> ────────────────────────┐
│  © 2026 Momo House · Thamel, Kathmandu                    │
└───────────────────────────────────────────────────────────┘
```

Today we have no CSS layout yet (no flexbox or grid), so `<aside>` will sit **under** `<main>` on your screen, not beside it. That is fine. The *names* are what matter today.

### section vs article vs div: the three questions

Ask these questions in order:

1. **Would this make sense on its own**, posted somewhere else (a post, a news item, a product card)? → `<article>`
2. **Is it a themed group with its own heading?** → `<section>`
3. **Do I only need a box to hang CSS on?** → `<div>`

### One main per page

`<main>` means "the main content of **this** page". A page has one main story, so it has **one** `<main>`. Two `<main>` elements confuse screen readers. The W3C validator reports it; your eyes and HTMLHint do not. That is why it is an **R** (rule check) bug in class.

### Sections need headings

A `<section>` is a themed group, and a theme has a name. So every `<section>` should start with a heading (`<h2>`, `<h3>`…). If you have a group with no heading, it is probably just a `<div>`.

### nav is for the main links only

`<nav>` is the hallway. It holds the **main links** of the site. It is not for a paragraph of text, and not for every single link on the page (a link inside a sentence stays in its `<p>`).

### button vs div: the Tab key test

A `<div class="btn">Subscribe</div>` can be styled to *look* like a button. But:
- the **Tab** key skips it (a keyboard user can never reach it),
- **Enter** and **Space** do nothing,
- a screen reader says "Subscribe", not "Subscribe, button".

A real `<button>` gets all of this for free. The rule: **if you click it to do something, use `<button>`. If you click it to go somewhere, use `<a href>`.**

### Linked editing: rename both tags at once

The class `W2D2` folder turns on `"editor.linkedEditing": true`. Put your cursor in `div` of `<div class="header">`, delete `div` and type `header`. The closing `</div>` changes to `</header>` by itself. Then delete the `class="header"` part.

## Code you built today

### Step 1: the div soup (before)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Div soup</title>
</head>
<body>
  <div class="header">
    <img src="images/logo-momo-house.svg" alt="Momo House logo" width="80">
    <h1>Momo House</h1>
    <div class="nav">
      <a href="index.html">Home</a> |
      <a href="index.html">Menu</a> |
      <a href="index.html">About</a>
    </div>
  </div>
  <div class="main">
    <div class="section">
      <h2>Today's specials</h2>
      <div class="article">
        <h3>Jhol momo</h3>
        <p>Steamed momo in a warm sesame and tomato soup. Rs. 200.</p>
      </div>
    </div>
  </div>
  <div class="aside">
    <p>Tip: order before 12:00 and skip the lunch queue.</p>
  </div>
  <div class="footer">
    <p>&copy; 2026 Momo House, Thamel, Kathmandu</p>
  </div>
</body>
</html>
```
- Every box is a `<div>`. The class names *try* to say what each box is, but browsers, Google and screen readers ignore class names.

**Predict:** open F12 → Elements. How many landmarks (header, nav, main…) does the browser know about? (Look at the tag names, not the class names.)

### Step 2: the same page, with names (after)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Home</title>
</head>
<body>
  <header>
    <img src="images/logo-momo-house.svg" alt="Momo House logo" width="80">
    <h1>Momo House</h1>
    <nav>
      <a href="index.html">Home</a> |
      <a href="index.html">Menu</a> |
      <a href="index.html">About</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Today's specials</h2>
      <article>
        <h3>Jhol momo</h3>
        <p>Steamed momo in a warm sesame and tomato soup. Rs. 200.</p>
      </article>
    </section>
  </main>
  <aside>
    <p>Tip: order before 12:00 and skip the lunch queue.</p>
  </aside>
  <footer>
    <p>&copy; 2026 Momo House, Thamel, Kathmandu</p>
  </footer>
</body>
</html>
```
- `<div class="header">` became `<header>` (the same for nav, main, section, article, aside, footer).
- The page **looks exactly the same**. Only the names changed. That is the point.
- `<section>` starts with its `<h2>`. `<article>` (one dish) makes sense alone.

**Predict:** press Ctrl+F5. Did anything on the screen move? Now look in the Elements panel. What changed?

### Step 3: figure, a real button, and a link

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Blog | Momo week</title>
</head>
<body>
  <header>
    <h1>TSI Blog</h1>
    <nav>
      <a href="index.html">Home</a> |
      <a href="index.html">Posts</a> |
      <a href="index.html">Contact</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>Sunita tries every momo in Thamel</h2>
      <p>Sunita Gurung spent one week at Momo House. Here is what she learnt.</p>
      <figure>
        <img src="images/momo-plate.svg" alt="A plate of ten steamed momo with red chutney" width="300">
        <figcaption>Didi's steam momo, Rs. 150 a plate.</figcaption>
      </figure>
      <p>Her favourite was the jhol momo.</p>
    </article>
    <section>
      <h2>Get new posts</h2>
      <p>One email every Friday. No spam.</p>
      <button type="button">Subscribe</button>
    </section>
  </main>
  <aside>
    <h2>Related posts</h2>
    <p><a href="index.html">Aarav's first week at TSI</a></p>
  </aside>
  <footer>
    <p>&copy; 2026 TSI Blog, Dillibazar, Kathmandu</p>
  </footer>
</body>
</html>
```
- The **main blog post** is the `<article>` inside `<main>`. "Related posts" is extra, so it goes in `<aside>`.
- `<figure>` keeps the photo and its caption together.
- `<button>` is reachable with the Tab key. (It does nothing yet. JavaScript comes in session 4.)

**Predict:** click in the page and press **Tab** again and again. Which things get a focus ring, and in what order?

## Quick reference

| You have… | Use |
|---|---|
| Logo + site name at the top | `<header>` |
| The main menu links | `<nav>` |
| The main content of this page (once) | `<main>` |
| A themed group **with a heading** | `<section>` |
| A blog post, news item, product or review card | `<article>` |
| Related links, tips, ads | `<aside>` |
| Contact, copyright, small print | `<footer>` |
| An image with a caption | `<figure>` + `<figcaption>` |
| A box only for styling | `<div>` (block) / `<span>` (inline) |
| Something you click to **do** something | `<button>` |
| Something you click to **go** somewhere | `<a href="…">` |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| The validator says "duplicate main" | Two `<main>` elements on one page | Keep one `<main>`; make the other a `<section>` | D2-02 bug 1, D2-HW1 bug 2 |
| A `<nav>` full of sentences | `<nav>` wraps a paragraph, not links | Put the text in `<p>`; keep `<nav>` for the main links | D2-02 bug 2 |
| A `<section>` with no title | Sections are themed groups, and themes have names | Add an `<h2>`, or change it to a `<div>` | D2-02 bug 3, D2-HW1 bug 3 |
| The main post is in `<aside>`, the extras are in `<main>` | The boxes are swapped | Main story → `<main>`; related box → `<aside>` | D2-02 bug 4 |
| The Tab key skips your "button" | `<div class="btn">` is not a button | Use `<button>` | D2-02 bug 5, D2-FF5 bug 5 |
| `<header>` inside `<footer>` | Wrong nesting of landmarks | Header at the top, footer at the bottom, not inside each other | D2-FF5 bug 1 |
| The site menu is an `<article>` | `<article>` is for self-contained content | Use `<nav>` for the menu | D2-FF5 bug 2 |
| "Warning:" in `<b>` | `<b>` only makes text bold; it carries no meaning | Use `<strong>` for important text | D2-FF5 bug 3 |

## Check yourself

1. Name the seven semantic tags you met today, and say in one line what each one is for.
2. The page looks the same with divs and with semantic tags. Give three reasons to change anyway.
3. How many `<main>` elements can a page have? Why?
4. You have a box with three news items. Is the box a `<section>` or an `<article>`? And each news item?
5. What two things does a `<div class="btn">` fail to do that a `<button>` does?
6. When do you use `<button>` and when do you use `<a href>`?
7. Explain semantic HTML to a friend who is not technical, using the house and room names.

## Try it

- **D2-01** Div soup → semantic: replace 7 `div class="…"` boxes. Use linked editing.
- **D2-02** 🐞 Semantic Misuse: 5 bugs on the TSI Blog. All of them are **R** or **V** (the Tab key).
- **D2-FF5** 🐞 Lost & Found: bugs 1–3 are semantic.
- **D2-HW1** 🐞 Haunted portfolio repair: bugs 2 and 3.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Here is my page plan: a list of three news items, each with a title and a date. Should the list be a section or an article, and each item? Explain why. Don't write the HTML for me."*

## Go deeper

- MDN: [HTML elements reference, "Content sectioning"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)
- freeCodeCamp: Responsive Web Design → "Learn HTML by Building a Cat Photo App" (the semantic steps)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [02 · Accessibility and meta](02-accessibility-and-meta.md): the parcel label read aloud.*
