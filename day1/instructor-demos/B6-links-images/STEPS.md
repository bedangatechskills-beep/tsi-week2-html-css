# B6 · Links, paths & images — demo steps

**Same house vs postal address**: a relative link = "the kitchen" (inside this house); an absolute link = the full
postal address. `../` = **go downstairs one floor**. Images are **a sticker, not an envelope** (a void tag); `alt` =
the description you read over the phone. (Two analogies, two slides.)

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · An external link (full postal address)

**Folder:** `step-01-external-link/`

**Emmet:** `a` + Tab

**Type exactly:**

```html
<p>Learn about momo on <a href="https://en.wikipedia.org/wiki/Momo_(food)" target="_blank">Wikipedia</a>.</p>
```

**Point at:** remove `https://` for a moment, click: 404 (the browser looks inside our house). Put it back.

> 🗣️ **Say this:** "Another website needs the full postal address, starting with https. Target blank opens it in a new tab."

## Step 2 · A relative link (same house)

**Folder:** `step-02-relative-pages/`

**Type exactly:**

```html
<!-- index.html -->
<p><a href="about.html">About us</a></p>
<!-- about.html (new file, ! + Tab) -->
<p><a href="index.html">Home</a></p>
```

**Point at:** click Home ↔ About both ways.

> 🗣️ **Say this:** "About.html is in the same folder, the same house. I just say: go to the kitchen. No https, no full address."

## Step 3 · Folders and `../` (go downstairs one floor)

**Folder:** `step-03-folders-dotdot/`

**Type exactly:**

```html
<!-- index.html -->
<p><a href="pages/about.html">About us</a></p>
<!-- pages/about.html -->
<p><a href="../index.html">Home</a></p>
```

**Point at:** drag `about.html` into a new `pages/` folder live; the links break (404); repair both. Draw the folder tree on the board.

> 🗣️ **Say this:** "From index.html, the about page is upstairs in pages. From pages, home is downstairs: dot dot slash means go down one floor."

## Step 4 · img: src, alt, width

**Folder:** `step-04-img-alt-width/`

**Emmet:** `img` + Tab

**Type exactly:**

```html
<!-- index.html -->
<img src="images/momo.svg" alt="A steaming plate of momo" width="300">
<!-- pages/about.html -->
<img src="../images/thamel.svg" alt="A busy street in Thamel with prayer flags" width="300">
```

**Point at:** rename `images/momo.svg` to `Momo.svg` in Explorer: on Windows it still works, on a Linux server it breaks. Rename it back. Then delete the `alt`: HTMLHint squiggles. Put it back.

> 🗣️ **Say this:** "An image is a sticker, not an envelope: no closing tag. Alt is what you would say about the picture over the phone."

## Step 5 · figure, #anchors, mailto, tel

**Folder:** `step-05-figure-anchors-mailto/`

**Type exactly:**

```html
<p><a href="pages/about.html">About us</a> | <a href="#contact">Contact</a></p>
<figure>
  <img src="images/momo.svg" alt="A steaming plate of momo" width="300">
  <figcaption>Our famous steam momo.</figcaption>
</figure>
<h2 id="contact">Contact</h2>
<p>Email <a href="mailto:hello@momohouse.com.np">hello@momohouse.com.np</a> or call <a href="tel:+97714400000">01-4400000</a>.</p>
<p><a href="#top">Back to top</a></p>
```

**Point at:** make the window short, click Contact, watch the URL end in `#contact`; Back to top. Click the email link.

> 🗣️ **Say this:** "Hash contact jumps to the element with id contact on the same page. Mailto opens email; tel opens the phone app on a mobile."
