# 02 · Accessibility and Meta: The Parcel Label Read Aloud
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B2*
**Layer:** Frontend (HTML for everyone)

> **Today in one sentence:** write your page so that a person who cannot see it, cannot use a mouse, or reads it in another way still gets everything.

## The picture to keep in your head

**The parcel label read aloud.** The `<head>` and its `<meta>` tags are **the label** on the parcel. A screen reader reads the label **and** the contents aloud to someone who cannot see them.

Imagine Didi ships a parcel of momo to a customer who is blind. A helper reads everything aloud to the customer:
- the label: "From Momo House. Language: English. Contents: steam momo, 10 pieces",
- then each thing inside: "A plate of ten steamed momo with red chutney".

If the label is blank, the helper says "Unknown parcel." If a photo has no description, the helper says "image… image… image". That is exactly what a screen reader does with a page that has no `lang`, no `<title>` and no `alt`.

| Analogy (parcel read aloud) | Real thing (HTML) |
|---|---|
| "Language: English" on the label | `<html lang="en">` |
| "Contents: …" on the label | `<title>` and `<meta name="description">` |
| "Fits a small box / big box" | `<meta name="viewport">` |
| The little stamp on the corner | the favicon (`<link rel="icon">`) |
| Reading out the description of each item | `alt` on every `<img>` |
| "This is just packing paper, skip it" | `alt=""` on decorative images |
| Telling the person **where** a door leads, not "this door" | link text that makes sense alone |
| The printed word next to each box on a form | `<label>` |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Accessibility (a11y) | Making a page usable by **everyone**: blind users, keyboard-only users, people with low vision, slow internet, small phones. ("a11y" = a + 11 letters + y.) | A page you can use with only the Tab key |
| Screen reader | Software that reads the page aloud. | Windows **Narrator** (Ctrl+Win+Enter), NVDA, VoiceOver |
| `lang` | Tells the browser and screen reader which language the page is in, so it pronounces words correctly. | `<html lang="en">`, Nepali is `lang="ne"` |
| `alt` text | The description of an image, read aloud and shown if the image fails. | `alt="Didi serving momo at the counter"` |
| Decorative image | An image that adds no information (a border, a pattern). | `alt=""` (empty, but present) |
| Link text | The words inside `<a>`. Screen-reader users often list all links, so each must make sense **alone**. | "See the full menu", not "click here" |
| Label | The words linked to an input. Clicking the label focuses the input; screen readers read it. | `<label for="phone">Phone</label>` |
| Focus | The element the keyboard is on now. You see a **focus ring** around it. | Press Tab on any page |
| Contrast | How different the text colour is from the background. Low contrast is hard to read. | Grey `#aaa` on white = too low |
| `<meta>` | Information **about** the page, in `<head>`. Not shown on the page. | description, viewport, charset |
| Favicon | The small icon on the browser tab. | `<link rel="icon" href="favicon.svg">` |
| Lighthouse | A DevTools report that scores your page (Accessibility, SEO…). Works offline. | F12 → Lighthouse → Analyze |

## How it works

### Who is "everyone"?

- **Blind users** listen with a screen reader. They need `lang`, `alt`, good headings and good link text.
- **Keyboard users** (a broken mouse, a hand injury, power users) move with **Tab**, **Shift+Tab**, **Enter** and **Space**. They need real `<button>`, `<a>` and form elements.
- **Low-vision users** zoom in to 200 % and need strong contrast.
- **Everyone on a bad day**: a phone in the sun, a slow connection where images fail to load. `alt` text shows when an image is missing.

In Nepal and abroad, many government and bank sites must be accessible. Interviewers ask about `alt` and labels all the time.

### alt text: three cases

| The image is… | Write | Why |
|---|---|---|
| Information (a photo, a chart, a logo) | `alt="what it shows"` | The listener needs the same information |
| A link or button with no text (a logo that goes home) | `alt="Momo House home page"` | Say where it goes |
| Decoration only (a pattern, a divider) | `alt=""` | The screen reader skips it. Do **not** leave `alt` out: then it reads the file name |

Good alt text is **short** (one sentence) and says what matters. Do not start with "image of" (the screen reader already says "image").

### Link text must make sense alone

Screen-reader users can open a list of all links on a page. Imagine hearing:
"click here, click here, click here". Useless. Compare:
"Apply for the morning batch, see the fee table, download the brochure". Write the second kind.

### Every input needs a label

A `placeholder` is **not** a label. It disappears when you type, it is often low contrast, and some screen readers skip it. Always use `<label for="…">` with a matching `id`.

### Heading order is the table of contents

Screen-reader users jump from heading to heading, like a table of contents. So headings must go in order: `h1` → `h2` → `h3`. Never jump from `h1` to `h3` to make text smaller. (Size is CSS's job.)

### The head: the parcel label

```text
<head>
  <meta charset="UTF-8">                    → "the letters are UTF-8" (so Nepali text like नमस्ते works)
  <meta name="viewport" ...>                → "fit the phone screen; don't zoom out"
  <title>Momo House | Menu</title>          → tab text, bookmark name, Google result title, first thing read aloud
  <meta name="description" content="...">   → the grey text under the title in Google results
  <link rel="icon" href="favicon.svg">      → the tab icon
</head>
```

- **`<title>`**: describe *this* page. "Document" (the Emmet default) tells nobody anything.
- **`description`**: one or two sentences, about 150 characters. Google often shows it.
- **`viewport`**: without it, a phone shows the page zoomed out and tiny. Lighthouse 13 may not report it, so check with the device toolbar (F12 → Ctrl+Shift+M).

### How to check: the Tab walk and Lighthouse

1. **The Tab walk.** Click on the page, then press **Tab** again and again. Every link, button and input should get a visible focus ring, in a sensible order. Anything you cannot reach is broken for keyboard users.
2. **Lighthouse.** F12 → **Lighthouse** tab → tick **Accessibility** (and **SEO** if you like) → **Analyze page load**. It lists problems such as "Image elements do not have [alt] attributes", "Links do not have a discernible name", "Form elements do not have associated labels", "`<html>` element does not have a [lang] attribute". It works offline.
3. **Narrator** (instructor demo only): Ctrl+Win+Enter turns it on and off. In class only the instructor uses it, with speakers, so 20 laptops don't talk at once.

## Code you built today

### Step 1: the admissions page before the audit

This is wrong on purpose. Read it and count the problems before you scroll on.

```html broken
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>TSI Admissions</h1>
  <img src="images/tsi-building.svg">
  <img src="images/decorative-pattern.svg" alt="a picture of a pattern with lines and diamonds in red and blue">
  <p>Morning batch starts on Sunday. <a href="index.html">Click here</a> for the fee table.</p>
  <form>
    <input type="tel" id="phone" placeholder="Phone number">
  </form>
</body>
</html>
```

**Predict:** run Lighthouse on this page in your head. Which four problems will it list? Which two will it *not* list, because only a human can judge them?

### Step 2: the same page after the audit

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Join the AI-Powered Full Stack Developer Program at Tech Skills Institute, Dillibazar, Kathmandu. Morning and evening batches.">
  <title>TSI Admissions | AI-Powered Full Stack Developer Program</title>
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
</head>
<body>
  <header>
    <h1>TSI Admissions</h1>
  </header>
  <main>
    <img src="images/tsi-building.svg" alt="The TSI building in Dillibazar, Kathmandu" width="400">
    <img src="images/decorative-pattern.svg" alt="" width="400">
    <h2>Batches</h2>
    <p>The morning batch starts on Sunday. <a href="index.html">See the fee table</a>.</p>
    <h2>Call me back</h2>
    <form method="get">
      <label for="phone">Phone number</label>
      <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX">
      <button type="submit">Send</button>
    </form>
  </main>
</body>
</html>
```
- `lang="en"`: the screen reader uses English pronunciation.
- A real `<title>` and `<meta name="description">`: the label says what is inside.
- The building photo says what it shows. The pattern has `alt=""`, so it is skipped.
- "See the fee table" makes sense alone. "Click here" does not.
- The phone input has a `<label>`. The placeholder is now only an example of the format.

**Predict:** run Lighthouse → Accessibility on Step 2. Is the score higher? Which items moved to "Passed audits"?

### Step 3: a logo that is also a link

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Momo House in Thamel: steam, fried and jhol momo made fresh every day by Didi.">
  <title>Momo House | Home</title>
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
</head>
<body>
  <header>
    <a href="index.html"><img src="images/logo-momo-house.svg" alt="Momo House home page" width="80"></a>
    <nav>
      <a href="index.html">Home</a> |
      <a href="index.html">Our menu</a> |
      <a href="index.html">Order online</a>
    </nav>
  </header>
  <main>
    <h1>Fresh momo in Thamel</h1>
    <h2>Opening hours</h2>
    <p>Sunday to Friday, 10:00 to 21:00.</p>
    <h3>Saturday</h3>
    <p>Closed. Didi visits her family in Patan.</p>
  </main>
</body>
</html>
```
- The logo is the only thing inside the link, so its `alt` says **where the link goes**.
- Headings go h1 → h2 → h3, never skipping a level.

**Predict:** press Tab from the top. What is the first thing that gets focus?

## Quick reference

| Check | Good | Bad |
|---|---|---|
| Language | `<html lang="en">` | `<html>` |
| Title | `Momo House | Menu` | `Document` |
| Informative image | `alt="Didi at the momo counter"` | no `alt`, or `alt="image"` |
| Decorative image | `alt=""` | a long description of the decoration |
| Link text | "See the full menu" | "click here", "read more", "link" |
| Input | `<label for="phone">` + `id="phone"` | a placeholder only |
| Headings | h1 → h2 → h3 | h1 → h3 (to make it smaller) |
| Phone screens | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | none |
| Search result text | `<meta name="description" content="…">` | none |
| Contrast | dark navy `#14213D` on white | light grey `#bbbbbb` on white |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| Lighthouse: "`<html>` element does not have a [lang] attribute" | `lang` missing | `<html lang="en">` | D2-03 bug 1 |
| The tab says "Document" | Emmet's default title was never changed | A title that names the page and site | D2-03 bug 2 |
| Lighthouse: "Image elements do not have [alt] attributes"; HTMLHint underlines the img | No `alt` | Describe the image | D2-03 bug 3, D2-HW1 bug 4 |
| The screen reader reads a long story about a border | A decorative image has a long alt | `alt=""` | D2-03 bug 4 |
| Three links all say "click here". Lighthouse may stay silent (it skips links to `#…` on the same page), so this is an **R** bug: read the link text | Vague link text | Say where the link goes | D2-03 bug 5 (R) |
| Clicking the word next to the box does nothing, and the hint vanishes when you type. Lighthouse accepts a placeholder, so don't trust one tool | Placeholder only, no `<label>` | Add `<label for>` + `id` | D2-03 bug 6 (V) |
| Lighthouse: "Heading elements are not in a sequentially-descending order" | h1 → h3 → h2 | Keep the order; use CSS for size | D2-FF5 bug 4 |
| The Tab key skips the "Apply" button | `<div class="btn">` | `<button>` | D2-FF5 bug 5 |
| A fee table with bold first row but no headers | `<b>` instead of `<th>` | Use `<th scope="col">` | D2-FF5 bug 6 |
| Lighthouse (SEO): "Document does not have a meta description" | No description | Add `<meta name="description">` | D2-HW4 bug 1 |
| On a phone (F12 → device toolbar, Ctrl+Shift+M) the page is tiny and you must zoom. Lighthouse 13 calls the check "not applicable", so it is an **R** bug | No viewport | Add the viewport meta | D2-HW4 bug 2 (R) |

## Check yourself

1. What does "a11y" stand for, and why is it written that way?
2. Name three groups of people who need an accessible page.
3. When do you write `alt=""`, and why is that different from no `alt` at all?
4. Why is "click here" bad link text? Write better text for a link to the fee table.
5. Give two reasons a placeholder is not enough instead of a label.
6. What does the viewport meta tag do on a phone?
7. Describe the Tab walk test in three steps.
8. Explain to a friend why a blind person needs `lang` and `alt`, using the parcel read aloud.

## Try it

- **D2-03** 🐞 A11y Audit: TSI Admissions (6 bugs). Check with the Tab walk and Lighthouse.
- **D2-FF5** 🐞 Lost & Found: bugs 4–7.
- **D2-HW4** 🐞 Patan Craft Shop replay: bugs 1–2.
- **D2-HW2**: your portfolio must reach Lighthouse Accessibility ≥ 90.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"Lighthouse says 'Form elements do not have associated labels' on my page. Here is my form. Explain what it means and how a screen reader uses a label. Don't rewrite my code."*

## Go deeper

- MDN: [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)
- web.dev: [Learn Accessibility](https://web.dev/learn/accessibility)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [03 · Audio, video, iframe](03-audio-video-iframe.md): TV, radio, and a window into another room.*
