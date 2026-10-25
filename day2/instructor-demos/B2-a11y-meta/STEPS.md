# B2 · Accessibility + meta — demo steps

**When:** 0:33–0:52 (D2-03 follows) · **Analogy:** **The parcel label read aloud**

Open `W2D2/instructor-demos/B2-a11y-meta/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · listen to the broken page (`step-01-before/`)

**In `index.html`, type:**

```html
<!-- nothing to type: open the page and LISTEN -->
```

**Emmet:** —

**Point at:** Turn on **Narrator** (Ctrl+Win+Enter), speakers on. Tab through the page: "link, click here", "edit text" with no name, the pattern alt is read out, the photo is "image". Then F12 → Lighthouse → Accessibility + SEO → Analyze (SEO will also show "Document does not have a meta description"; say: that is tomorrow's bug, D2-HW4 bug 1). Students tick Accessibility only in D2-03. Narrator off: Ctrl+Win+Enter again.

**Say this:** "Close your eyes. This is how a blind visitor meets Didi's menu. The label on the parcel is wrong or empty."

## Step 02 · write a good label (`step-02-after/`)

**In `index.html`, type:**

```html
<html lang="en">
<title>Momo House Menu · Dillibazar, Kathmandu</title>
<meta name="description" content="Momo House menu: steam, fried and jhol momos in Dillibazar, Kathmandu.">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<img src="images/decorative-pattern.svg" alt="" width="800" height="40">
<img src="images/momo-plate.svg" alt="A plate of ten momos with red tomato achar" width="400" height="300">
<a href="#order">Order your momos</a>
<label for="phone">Phone number</label>
```

**Emmet:** `meta:desc` doesn't exist: type `meta` + Tab and fill `name`/`content`. `link:favicon` + Tab for the icon

**Point at:** The momo icon in the browser tab (favicon). Run Narrator and Lighthouse again: score up.

**Say this:** "Decoration gets an empty alt, meaning gets words. Link text says where it goes. Every input gets a label you can click."

**Students never run Narrator** (20 laptops talking). They use the **Tab walk + Lighthouse** in **D2-03** (10 min).
