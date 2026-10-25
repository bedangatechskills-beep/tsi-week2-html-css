# 06 · Links and Paths: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B6 (part 1) · Layer: Frontend*

> **Today in one sentence:** A link is an address. Write the address from where **you** are standing.

## The picture to keep in your head

**Same house vs postal address**: relative = "the kitchen", absolute = full postal address.
`../` = **"go downstairs one floor"**.

- Inside your own house you say "get it from the kitchen". You don't say "House 14, Dillibazar, Kathmandu,
  Nepal, the kitchen". That is a **relative** path: it starts from where you are.
- To send a letter to another city you need the **full postal address**. That is an **absolute** URL:
  `https://www.wikipedia.org`.
- If you are upstairs in `pages/` and want something on the ground floor, first **go downstairs one floor**: `../`.

```text
momo-house/                 ← ground floor (the site root)
├── index.html
├── images/
│   ├── logo-momo-house.svg
│   └── thamel.svg
└── pages/                  ← first floor
    ├── about.html
    └── menu.html

From index.html          to pages/about.html   →  href="pages/about.html"     (go up the stairs into pages)
From pages/about.html    to index.html          →  href="../index.html"        (go downstairs one floor)
From pages/about.html    to images/thamel.svg   →  src="../images/thamel.svg"  (downstairs, then into images)
From pages/about.html    to pages/menu.html     →  href="menu.html"            (same floor, next room)
```

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| `<a>` | Anchor: a link | `<a href="menu.html">Menu</a>` |
| `href` | Hypertext reference: where the link goes | `href="pages/about.html"` |
| Link text | The words the visitor clicks. Must say where it goes | "See the menu", never "click here" |
| Absolute URL | A full address with `https://` | `https://www.wikipedia.org` |
| Relative path | An address that starts from the current file's folder | `pages/menu.html`, `../index.html` |
| `../` | Go downstairs one folder. Other people call this "go up one folder"; it is the same thing. | `../images/momo.svg` |
| Site root | The top folder of the site | `W2D1/classwork/D1-09-broken-paths/` |
| `target="_blank"` | Open the link in a new tab | for links to other websites |
| `mailto:` | A link that opens an email | `href="mailto:tour@tsi.edu.np"` |
| `tel:` | A link that phones a number (on a phone) | `href="tel:+9779800000000"` |
| Fragment / anchor | `#` + an id: jump to a spot on a page | `href="#menu"` → `id="menu"` |
| 404 | "Not Found": nothing at that address | a typo in `href` |

## How it works

### 1. Anatomy of a link

```text
<a href="pages/menu.html" target="_blank">See today's menu</a>
   └────────┬───────────┘ └──────┬──────┘ └──────┬───────┘
     where it goes          new tab (optional)   what the visitor clicks
```

### 2. Absolute or relative?

| Going to... | Use | Example |
|---|---|---|
| Another website | absolute, with `https://` | `https://www.wikipedia.org` |
| A page in your own site | relative | `menu.html`, `pages/about.html` |
| An image in your own site | relative | `images/momo.svg` |

**Never** use a path from your own computer like `C:\Users\Aarav\Desktop\site\index.html`. It works only on
Aarav's laptop. On anyone else's computer, and on a real server, that path does not exist (D1-09 bug 6).

**Never** forget `https://` on an external link. `href="www.wikipedia.org"` has no scheme, so the browser thinks
it is a **file in your folder** named `www.wikipedia.org` → 404 (D1-09 bug 3, D1-15 bug 10).

### 3. How the browser reads a relative path

The browser starts **in the folder of the current page** and follows the path one step at a time.

```text
Page:  pages/about.html      Path: ../images/thamel.svg
Start in  pages/
../       → go down to the root
images/   → into the images folder
thamel.svg → the file.  ✔
```

If the page is `index.html` (already on the ground floor) and you write `../images/…`, you walk out of the site
(D1-15 bug 9). If the page is `pages/about.html` and you write `images/thamel.svg`, the browser looks for
`pages/images/thamel.svg`, which does not exist (D1-09 bug 5).

### 4. File names: exact, lowercase, no spaces

- `menu.html` is not `menu.htm` (D1-15 bug 1) and not `menu` (D1-HW1 bug 3).
- `images/` is not `image/` (D1-09 bug 1).
- **Case matters on real servers.** Windows treats `Everest.svg` and `everest.svg` as the same file, so the
  picture shows on your laptop. Most web servers run Linux, where they are **different files**, so the picture
  breaks once you go live (D1-HW1 bug 2, tag **H**). Rule: always lowercase, words joined with `-`.
- **No spaces.** `notice-board .svg` (with a space) is a different name (D1-FF5 bug 10).

### 5. Jump links: `#id`

```text
<a href="#specials">Jump to specials</a>     ...     <h2 id="specials">Today's specials</h2>
                 └───────── must match exactly, without the # ─────────┘
```

- `#top` on its own jumps to the top of the page (browsers support it even with no `id="top"`, but in this class we
  add `id="top"` to the `h1` so the link has a clear target).
- You can jump to a spot on **another** page: `href="treks.html#prices"`. The id must exist on that page
  (D1-HW1 bug 7, D1-FF5 bug 11).
- An `id` must be unique on a page. Two elements with the same id is an error (D1-FF4).

### 6. Links must close

`<a>` must end with `</a>`. If you forget it in a nav, the next `<a>` closes it for you, so it looks fine.
But if the **last** link is not closed, everything after it (even the `<h1>`) becomes part of that link
(D1-15 bug 3). Note 10 shows this in Chrome.

### 7. New tab, email, phone

- `target="_blank"`: use it for links that leave your site, so your page stays open.
- `mailto:` opens the visitor's email app. `tel:` lets a phone call the number. Write the number with the country
  code: `+977`.

## Code you built today

### Step 1: an external link

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Home</title>
</head>
<body>
  <h1>Momo House</h1>
  <p>Read about momo on <a href="https://en.wikipedia.org/wiki/Momo_(food)" target="_blank">Wikipedia</a>.</p>
</body>
</html>
```

**Predict:** delete `https://` and click the link. What does the URL bar show? What status?

### Step 2: a small site with folders and `../`

Build this whole folder. All three pages work together.

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Home</title>
</head>
<body>
  <img src="images/logo-momo-house.svg" alt="Momo House logo" width="160">
  <h1>Momo House</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="pages/about.html">About</a>
    <a href="pages/menu.html">Menu</a>
  </nav>
  <p>The best momo in Kathmandu.</p>
</body>
</html>
```

File: `pages/about.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · About</title>
</head>
<body>
  <h1>About Momo House</h1>
  <nav>
    <a href="../index.html">Home</a>
    <a href="menu.html">Menu</a>
  </nav>
  <p>Didi opened Momo House in Dillibazar in 2015.</p>
  <img src="../images/thamel.svg" alt="A busy street in Thamel with shop signs" width="300">
</body>
</html>
```

File: `pages/menu.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Menu</title>
</head>
<body>
  <h1>Menu</h1>
  <nav>
    <a href="../index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
  <p>Steam, fried and jhol momo.</p>
</body>
</html>
```

- `index.html` is on the ground floor: `pages/about.html` goes up into `pages`.
- `about.html` is upstairs: `../index.html` goes downstairs one floor.
- `about.html` → `menu.html`: same floor, no folder needed.
- **Predict:** in `about.html`, change `../images/thamel.svg` to `images/thamel.svg`. Where does the browser look?
  Open F12 → Network to see the 404.

### Step 3: anchors, mailto and tel

File: `contact.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Contact</title>
</head>
<body>
  <h1 id="top">Contact Momo House</h1>
  <nav>
    <a href="#hours">Opening hours</a>
    <a href="#find-us">Find us</a>
  </nav>

  <h2 id="hours">Opening hours</h2>
  <p>Sunday to Friday, 10 am to 9 pm. Closed on Saturday.</p>
  <p>Lots of text here so the page can scroll.</p>
  <p>More text.</p>
  <p>Even more text.</p>

  <h2 id="find-us">Find us</h2>
  <p>Dillibazar, Kathmandu.</p>
  <p>Email: <a href="mailto:didi@momohouse.com.np">didi@momohouse.com.np</a></p>
  <p>Phone: <a href="tel:+9779800000000">+977 980 000 0000</a></p>

  <p><a href="#top">Back to top</a></p>
</body>
</html>
```

- `href="#hours"` jumps to `id="hours"`. No space, same spelling, no `#` in the `id`.
- Make the browser window short so you can see the jump.

## Quick reference

| You want... | Write |
|---|---|
| Another website, new tab | `<a href="https://…" target="_blank">Name of site</a>` |
| Page in the same folder | `<a href="menu.html">Menu</a>` |
| Page in a sub-folder | `<a href="pages/about.html">About</a>` |
| Page one floor down | `<a href="../index.html">Home</a>` |
| Jump on the same page | `<a href="#menu">Menu</a>` + `id="menu"` |
| Jump on another page | `<a href="treks.html#prices">Prices</a>` |
| Email | `<a href="mailto:name@site.com">…</a>` |
| Phone | `<a href="tel:+977…">…</a>` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| Broken image icon | Folder is `images`, path says `image/` (D1-09 bug 1) | `images/…` |
| 404 when clicking About | `about.html` is inside `pages/` (D1-09 bug 2) | `pages/about.html` |
| 404 with `…/www.wikipedia.org` in the URL bar | No `https://` (D1-09 bug 3, D1-15 bug 10) | `https://www.wikipedia.org` |
| "Home" link from a sub-page breaks | It needs to go down a floor (D1-09 bug 4) | `../index.html` |
| Image breaks only on a sub-page | Path starts from the wrong folder (D1-09 bug 5) | `../images/…` |
| A link works only on one laptop | A `C:\…` path (D1-09 bug 6) | A relative path |
| 404 on `menu.htm` / `treks` | Wrong or missing extension (D1-15 bug 1, D1-HW1 bug 3) | `menu.html`, `treks.html` |
| Image breaks when the next page is in the same folder | `../images/` used from the root (D1-15 bug 9) | `images/…` |
| The jump link does nothing | `href="#events"` but `id="event"` (D1-FF5 bug 11, D1-HW1 bug 7) | Make them match |
| The `<h1>` became a link | The last nav `<a>` was never closed (D1-15 bug 3) | Add `</a>` |
| Works on Windows, breaks online | `Everest.svg` vs `everest.svg` (D1-HW1 bug 2) — H | Match the case exactly; use lowercase |
| Image breaks, name looks right | A space in the name (D1-FF5 bug 10) | No spaces in file names |

## Check yourself

1. Absolute vs relative: which one do you use for Wikipedia? For your own `menu.html`? Why?
2. You are in `pages/menu.html`. Write the path to `index.html` and to `images/momo.svg`.
3. What does the browser do with `href="www.google.com"`? Why?
4. Why is `C:\Users\Aarav\Desktop\site\index.html` a bad link even if it works for Aarav?
5. Why can `Momo.svg` vs `momo.svg` work on your laptop and fail on a real server?
6. Write a link that jumps to `<h2 id="prices">` on the same page.
7. When should you use `target="_blank"`?
8. Explain `../` to a friend using the house idea.

## Try it

- **D1-09 Broken Paths**: 6 path bugs across 3 pages. Keep F12 → Network open: every red 404 row is a clue.
- **D1-FF2 Table of contents** (fast finishers): a long page with jump links and "back to top".
- **D1-FF6 Gallery detail page**: a `places/` sub-page with `../index.html`, `../images/` and `mailto:`.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "My page is `pages/about.html` and my image is `images/thamel.svg` in the root folder. Explain step by step how the browser follows a relative path. Do not write the path for me."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [07 · Images](07-images.md).*
