# B6 · Colours, units, fonts, text — demo steps

**When:** 2:06–2:25 (D2-10, D2-11 follow) · **Analogy:** **Paint shop** (slide 32), then **measuring tape** (slide 33)

Open `W2D2/instructor-demos/B6-colors-units/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · the paint shop (`step-01-colors/`)

**In `css/style.css`, type:**

```css
/* Paint shop: four ways to name a colour */
body {
  background-color: rgb(253, 246, 236);
}

h1 {
  color: #990011;
}

.price {
  color: navy;
}

.price-card {
  background-color: rgba(20, 33, 61, 0.1);
}
```

**Emmet:** —

**Point at:** Click a colour square in the Styles panel: the colour picker shows hex, rgb and the same colour.

**Say this:** "Four names for paint: a word, a hex code, rgb mixing, and rgba with see-through."

## Step 02 · the measuring tape (`step-02-units/`)

**In `css/style.css`, type:**

```css
/* Measuring tape: px, %, rem, em */
.price-card {
  width: 60%;
  padding: 16px;
}

h1 {
  font-size: 2.5rem;
}

.price {
  font-size: 1.25rem;
}

.note {
  font-size: 0.875rem;
  padding: 1em;
}
```

**Emmet:** —

**Point at:** Resize the window: the 60% card grows and shrinks; the 16px padding stays. rem = times 16 px (the root).

**Say this:** "px is a fixed tape. % depends on the parent. rem depends on the root font size. em depends on my own font size."

## Step 03 · fonts and text (`step-03-fonts-text/`)

**In `css/style.css`, type:**

```css
/* Fonts and text */
body {
  font-family: "Segoe UI", Arial, sans-serif;
}

h1 {
  text-align: center;
  letter-spacing: 2px;
}

.note {
  line-height: 1.6;
  text-decoration: underline;
}
```

**Emmet:** —

**Point at:** Rename `"Segoe UI"` to `"Momo Sans"`, save: Arial takes over. Delete the whole fallback list: Times New Roman.

**Say this:** "Always give a fallback list that ends with a generic family. line-height without a unit is the safest."

**Then:** **D2-10** 🐞 (8 min) + reveal, **D2-11** (5 min).
