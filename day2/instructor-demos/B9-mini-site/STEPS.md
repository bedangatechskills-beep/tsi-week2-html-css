# B9 · Mini-site build: style Momo House — demo steps

**When:** 3:19–3:49 (students build D2-15 alongside) · **Analogy:** **School uniform** (one stylesheet for every page)

Open `W2D2/instructor-demos/B9-mini-site/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · CP1 link + base (`step-01-link-and-base/`)

**In `css/style.css (+ the `<link>` in 4 pages at step 01)`, type:**

```css
/* CP1: the school uniform. Body font, background and colour for all 4 pages */
body {
  margin: 0;
  background-color: #fdf6ec;
  color: #2a3f63;
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
}
```

**Emmet:** —

**Point at:** Add the `<link>` to all 4 pages (`link:css` + Tab), then: Walk the room at this checkpoint; show this step folder on the projector for anyone behind.

**Say this:** "Click through all 4 pages: one file dressed all of them. That is the school uniform."

## Step 02 · CP2 header + nav (`step-02-header-nav/`)

**In `css/style.css (+ the `<link>` in 4 pages at step 01)`, type:**

```css
/* CP2: header + horizontal nav */
.site-header {
  background-color: #14213d;
  padding: 12px 24px;
}

.logo {
  display: block;
  width: 200px;
  height: auto;
}

.menu {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
}
```

**Emmet:** —

**Point at:** Walk the room at this checkpoint; show this step folder on the projector for anyone behind.

**Say this:** "The nav is the same three moves as B8: list-style, inline-block li, inline-block a."

## Step 03 · CP3 hero + h1 (`step-03-hero/`)

**In `css/style.css (+ the `<link>` in 4 pages at step 01)`, type:**

```css
/* CP3: hero banner + h1 */
.hero {
  text-align: center;
  background-color: white;
  border-radius: 12px;
  padding-bottom: 24px;
}

.hero-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
}

h1 {
  color: #990011;
  font-size: 2.5rem;
  margin-bottom: 8px;
}

h2 {
  color: #990011;
}

.tagline {
  font-size: 1.25rem;
}

.button {
  display: inline-block;
  background-color: #990011;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: bold;
}
```

**Emmet:** —

**Point at:** Walk the room at this checkpoint; show this step folder on the projector for anyone behind.

**Say this:** "width 100% and height auto: the picture fits any screen and keeps its shape."

## Step 04 · CP4 table + cards (`step-04-menu-table-cards/`)

**In `css/style.css (+ the `<link>` in 4 pages at step 01)`, type:**

```css
/* CP4: menu table + 3 dish cards (box model) */
.price-table {
  border-collapse: collapse;
  background-color: white;
  margin-bottom: 24px;
}

.price-table caption {
  font-weight: bold;
  padding: 8px;
}

.price-table th,
.price-table td {
  border: 1px solid #14213d;
  padding: 8px 24px;
}

.price-table th {
  background-color: #14213d;
  color: white;
}

.card {
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  width: 290px;
  margin: 0 8px 16px 0;
  padding: 16px;
  background-color: white;
  border: 2px solid #990011;
  border-radius: 12px;
}

.card img {
  width: 100%;
  height: auto;
}

.card h3 {
  margin: 8px 0 0;
}

.price {
  color: #990011;
  font-size: 1.25rem;
  font-weight: bold;
}

.order-form label {
  display: block;
  margin-top: 12px;
  font-weight: bold;
}

.order-form input,
.order-form select,
.order-form textarea {
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border: 1px solid #14213d;
  border-radius: 4px;
}

.order-form button {
  margin-top: 16px;
  background-color: #990011;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 1rem;
}

.about-img {
  width: 200px;
  height: auto;
  border-radius: 50%;
  border: 4px solid #990011;
}

blockquote {
  font-style: italic;
  border-left: 4px solid #990011;
  margin-left: 0;
  padding-left: 16px;
}
```

**Emmet:** —

**Point at:** Walk the room at this checkpoint; show this step folder on the projector for anyone behind.

**Say this:** "Cards are D2-12 and D2-13 again: border-box, or the third card falls."

## Step 05 · CP5 footer + hover (`step-05-footer-polish/`)

**In `css/style.css (+ the `<link>` in 4 pages at step 01)`, type:**

```css
/* CP5: footer + :hover on links */
.site-footer {
  background-color: #14213d;
  color: white;
  text-align: center;
  padding: 16px;
  margin-top: 32px;
}

.site-footer a {
  color: #ffcc66;
}

.menu a:hover {
  background-color: #990011;
}

.button:hover {
  background-color: #14213d;
}

.site-footer a:hover {
  color: white;
}
```

**Emmet:** —

**Point at:** Walk the room at this checkpoint; show this step folder on the projector for anyone behind.

**Say this:** "Hover is the reward. Now every page answers the mouse."

**How to run it:** students build **D2-15** in their own folder. You do not type the whole thing live; at each checkpoint (≈ every 6 min) open the matching step folder, show the new CSS for 1 minute, then walk the room. The complete answer is `step-05-footer-polish/css/style.css` (the same file as `D2-15/solution/css/style.css`).
