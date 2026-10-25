# 07 · Images: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B6 (part 2) · Layer: Frontend*

> **Today in one sentence:** An image is a sticker you put on the page, with a description for anyone who cannot see it.

## The picture to keep in your head

**A sticker, not an envelope** (void tag). alt = **the description you read over the phone**.

- An **envelope** (like `<p>…</p>`) holds things inside it, so it needs an opening and a closing.
- A **sticker** is stuck on in one go. Nothing goes inside it. So `<img>` has **no closing tag**.
- Imagine you call your friend and describe the Momo House page over the phone. For the logo you'd say
  "the Momo House logo". For a photo you'd say "a plate of ten steamed momos with red chutney".
  **That sentence is the `alt` text.**

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| `<img>` | Puts an image on the page. A void element | `<img src="images/momo.svg" alt="A momo">` |
| `src` | Source: the path to the image file (same path rules as links, note 06) | `src="images/momo.svg"` |
| `alt` | Alternative text: what the image shows, in words | `alt="A plate of momos"` |
| `alt=""` | Empty alt: "this image is decoration, skip it" | a dhaka border pattern (Day 2) |
| `width` / `height` | The size in pixels, numbers only | `width="300"` |
| `<figure>` | A box for an image (or table, or code) plus its caption | a gallery item |
| `<figcaption>` | The caption under the figure | "Swayambhu at sunrise" |
| SVG | An image format made of shapes, sharp at any size. Our class images are SVG | `momo.svg` |
| PNG / JPG | Photo formats made of pixels | `photo.jpg` |
| Screen reader | Software that reads the page aloud for blind visitors | Windows Narrator, NVDA |

## How it works

### 1. Who reads `alt`?

- **Screen readers** read it aloud to visitors who cannot see the image.
- **The browser** shows it when the image fails to load (a wrong path, slow internet).
- **Google** uses it to understand what the picture is.
- HTMLHint flags a missing `alt` (`alt-require`), so it is a **D(HH)** bug (D1-15 bug 2, D1-FF4, D1-HW4 bug 4).

### 2. Writing good alt text

| Image | Bad alt | Good alt |
|---|---|---|
| Momo House logo | `logo.svg`, `image` | `Momo House logo` |
| A photo of a momo plate | `momo` | `A plate of ten steamed momos with red chutney` |
| Swayambhu stupa | `picture of temple` | `Swayambhu stupa on its hill above Kathmandu` |
| Chef Didi | `didi.svg` | `Didi, the owner, smiling in her kitchen` |
| A decorative line | (long description) | `alt=""` (empty: skip it) |

Rules:
- Say what is **in** the picture and why it matters. Don't start with "image of".
- Short: one sentence.
- Pure decoration gets `alt=""`, not a missing alt.

### 3. Size

- `width="300"` = 300 pixels wide. Write only the number (no `px` in HTML attributes).
- If you set only `width`, the browser keeps the shape and works out the height.
- If you set both and they don't match the shape, the image **stretches**. Day 2 shows this with a round avatar.
- On Day 2 you will set sizes with CSS instead.

### 4. `figure` and `figcaption`

A `<figure>` groups an image and its caption, so a screen reader knows they belong together. The caption can be
**shown** to everyone; `alt` is for people who can't see the image. You often need both.

### 5. Where image paths go wrong

Images use the same path rules as links (note 06). Check, in this order:
1. Is the **folder** right? `images/` not `image/`.
2. Is the **file name** exact, with the right case and no spaces?
3. Are you on the right **floor**? From `pages/` you need `../images/`.
4. Open F12 → **Network**: a red **404** row shows the exact path the browser tried.

## Code you built today

### Step 1: one image with alt and width

Copy `momo.svg` and `thamel.svg` into an `images` folder next to the page.

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Images</title>
</head>
<body>
  <h1>Momo House</h1>
  <img src="images/momo.svg" alt="A single steamed momo" width="200">
  <p>Our momos are folded by hand every morning.</p>
  <img src="images/thamel.svg" alt="A busy street in Thamel with shop signs" width="400">
</body>
</html>
```

- `<img>` has no `</img>`. It is a sticker.
- **Predict:** change `momo.svg` to `momos.svg`. What does the page show in its place? (Your alt text, next to a
  broken-image icon.)

### Step 2: the Kathmandu gallery (D1-10 style)

Copy `swayambhu.svg` and `patan-durbar.svg` into `images`.

File: `gallery.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kathmandu Gallery</title>
</head>
<body>
  <h1 id="top">Kathmandu Gallery</h1>
  <p>Three places every TSI student should visit.</p>

  <figure>
    <img src="images/swayambhu.svg" alt="Swayambhu stupa on its hill above Kathmandu" width="400">
    <figcaption>Swayambhu, also called the Monkey Temple.</figcaption>
  </figure>

  <figure>
    <img src="images/patan-durbar.svg" alt="The old temples of Patan Durbar Square" width="400">
    <figcaption>Patan Durbar Square, the city of fine arts.</figcaption>
  </figure>

  <p>Learn more about <a href="https://en.wikipedia.org/wiki/Kathmandu" target="_blank">Kathmandu on Wikipedia</a>.</p>
  <p><a href="#top">Back to top</a></p>
</body>
</html>
```

- Each `<figure>` holds one image and one caption.
- **Predict:** what will a screen reader say for the first figure? (The alt, then the caption.)

### Step 3: images that are links

An image can sit inside a link. Then the alt must say where the link goes.

File: `logo-link.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Logo link</title>
</head>
<body>
  <a href="logo-link.html">
    <img src="images/logo-momo-house.svg" alt="Momo House home page" width="160">
  </a>
  <h1>Logo as a link</h1>
  <p>Click the logo to come back to this page.</p>
</body>
</html>
```

## Quick reference

| You want... | Write |
|---|---|
| An image | `<img src="images/momo.svg" alt="…" width="300">` |
| A decoration | `<img src="images/line.svg" alt="">` |
| Image + caption | `<figure><img …><figcaption>…</figcaption></figure>` |
| Image from a sub-page | `<img src="../images/momo.svg" alt="…">` |
| A clickable logo | `<a href="index.html"><img src="…" alt="Momo House home page"></a>` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| HTMLHint: "An alt attribute must be present" | `<img>` has no `alt` (D1-15 bug 2, D1-FF4, D1-HW4 bug 4) — D(HH) | Add a short, real description |
| A broken-image icon | Wrong folder, name or floor (D1-09 bugs 1 and 5, D1-15 bug 9) | Check F12 → Network for the 404 path |
| Shows on your laptop, broken online | `Room-Deluxe.svg` vs `room-deluxe.svg` (D1-HW4 bug 3, D1-HW1 bug 2) — H | Match the case; use lowercase names |
| Broken, name looks right | Space in the name (D1-FF5 bug 10) | Rename without spaces |
| `</img>` in your code | An image is a sticker: no closing tag | Delete `</img>` |
| `width="300px"` | HTML size attributes take numbers only | `width="300"` |
| `alt="image"` or `alt="momo.svg"` | That tells the listener nothing | Describe what is in the picture |

## Check yourself

1. Why does `<img>` have no closing tag? Use the sticker idea.
2. Who uses the `alt` text? Name three.
3. Write good alt text for: the Momo House logo; a photo of Boudha stupa; a decorative border.
4. What is the difference between `alt` and `<figcaption>`?
5. You are in `places/swayambhu.html`. Write the `src` for `images/swayambhu.svg` in the root.
6. What happens if you set `width` and `height` to a shape that doesn't match the image?
7. **Predict:** what shows on the page when `src` is wrong but `alt` is good?
8. Explain alt text to a friend using the "read it over the phone" idea.

## Try it

- **D1-10 Kathmandu gallery**: 2 `figure`s with figcaption + alt + width, 1 external link with `target="_blank"`,
  1 "back to top" `#top` anchor. Then show & tell.
- **D1-FF3 Mystery page** (fast finishers): rebuild a page from a picture (`target.svg`).
- **D1-FF6 Gallery detail page**: `../images/` from a sub-page.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "Here is my alt text for a photo of Patan Durbar Square: 'image'. Tell me why it is weak and what a good alt text should include. Don't write it for me."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [08 · Tables](08-tables.md).*
