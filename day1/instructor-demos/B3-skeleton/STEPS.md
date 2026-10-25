# B3 · Skeleton, anatomy, nesting, comments + your spell-checker — demo steps

HTML is the **skeleton**; tags are **labeled boxes inside boxes**. `<head>` = the label on the parcel,
`<body>` = what is inside. Type steps 1–4 **by hand** (no `!`): the students do the same in D1-03.

Each `step-NN` folder is the **finished state after step NN**. If the live demo breaks, open the next folder and carry on.

## Step 1 · DOCTYPE and `<html lang="en">`

**Folder:** `step-01-doctype-html-lang/`

**Type exactly:**

```html
<!DOCTYPE html>
<html lang="en">
</html>
```

**Point at:** `lang` is an **attribute**: name = "value", inside the opening tag.

> 🗣️ **Say this:** "Line one tells the browser: this is modern HTML. The lang attribute tells Google and screen readers: this page is in English."

## Step 2 · `<head>`: the label on the parcel

**Folder:** `step-02-head-meta-title/`

**Type exactly:**

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunita's Page</title>
</head>
```

**Point at:** open with Live Server: the page is empty, but the **tab** says "Sunita's Page".

> 🗣️ **Say this:** "The head is the label on the parcel. You don't see it on the page, but the browser reads it: the letters, the phone size, and the name on the tab."

## Step 3 · `<body>`: what is inside the parcel

**Folder:** `step-03-body-h1-p/`

**Type exactly:**

```html
<body>
  <h1>Hello, I am Sunita</h1>
  <p>I am learning HTML at Tech Skills Institute.</p>
</body>
```

**Point at:** draw the three parts on the board: `<h1>` (opening tag) · text (content) · `</h1>` (closing tag) = one element.

> 🗣️ **Say this:** "Element, tag, attribute: the h1 element is the opening tag, the content, and the closing tag together."

## Step 4 · Nesting and comments

**Folder:** `step-04-nesting-comments/`

**Emmet:** `ul>li*2` for the list

**Type exactly:**

```html
<!-- My introduction -->
<p>I am learning <strong>HTML</strong> at Tech Skills Institute.</p>
<p>I live in <em>Patan</em>, near the Durbar Square.</p>
<!-- My favourite things -->
<h2>My favourite things</h2>
<ul>
  <li>Momo with achar</li>
  <li>Evening walks in Patan</li>
</ul>
```

**Point at:** the indent: every box inside another box moves 2 spaces right. Press Shift+Alt+F to tidy.

> 🗣️ **Say this:** "Last box opened, first box closed. Strong opened inside p, so strong closes before p. Comments are notes for humans: the browser skips them."

## Step 5 · Browsers are polite guessers + your spell-checker (3 min)

**Folder:** `step-05-htmlhint-demo/`

**Type exactly:**

```html
<!-- this file has 3 mistakes on purpose: no DOCTYPE, h1 never closed, img with no alt -->
<html lang="en">
...
    <h1>Hello, I am Sunita
    <p>I am learning <strong>HTML</strong> at Tech Skills Institute.</p>
    <img src="images/momo.svg" width="200">
```

**Point at:** open `step-05-htmlhint-demo/index.html` (don't type it). (1) The page: the paragraph is giant, no error anywhere. (2) VS Code: red/yellow **squiggles** on line 1, the `<h1>` and the `<img>`; hover one. (3) **Ctrl+Shift+M** → the Problems panel lists 3 problems; click one, VS Code jumps to the line. (4) **F12 → Elements**: the `<p>` is *inside* the `<h1>`. That is the browser's guess. (5) Show the V / D / H / R legend slide. Then repair the 3 problems live and watch the panel go to 0.

> 🗣️ **Say this:** "The browser never shows an error. It guesses, politely. So we need a spell-checker that is not polite: HTMLHint."
