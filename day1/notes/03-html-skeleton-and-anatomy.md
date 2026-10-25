# 03 · The HTML Skeleton and Anatomy: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B3 · Layer: Frontend*

> **Today in one sentence:** Every web page stands on the same skeleton, built from labeled boxes inside boxes.

## The picture to keep in your head

**Skeleton** (nothing stands without it) + **labeled boxes inside boxes**: opening label, contents, closing label.
**Last box opened, first box closed.**

And for the two big parts of the page:
`<head>` = **the label on the parcel** (information about the page, invisible);
`<body>` = **what's inside the parcel**.

```text
┌─ <html lang="en"> ──────────────────────────────────────────┐
│ ┌─ <head>  = the label on the parcel (you can't see it) ──┐ │
│ │   <meta charset="UTF-8">     which alphabet             │ │
│ │   <meta name="viewport" …>   fit the phone screen       │ │
│ │   <title>Aarav's Page</title> the words on the tab      │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─ <body>  = what's inside the parcel (you see this) ─────┐ │
│ │   <h1>…</h1>                                            │ │
│ │   <p>… <strong>…</strong> …</p>                          │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| HTML | HyperText Markup Language: text with labels that say what each part **is** | `<h1>Momo House</h1>` |
| Tag | The label itself, in angle brackets | `<p>` (opening), `</p>` (closing) |
| Element | Opening tag + contents + closing tag, the whole box | `<p>Hello</p>` |
| Attribute | Extra information inside the opening tag: `name="value"` | `lang="en"`, `src="images/momo.svg"` |
| Void element | An element with no contents and no closing tag | `<meta>`, `<img>`, `<br>`, `<hr>`, `<input>` |
| DOCTYPE | The first line. Tells the browser "use modern HTML rules" | `<!DOCTYPE html>` |
| `lang` | The language of the page, for screen readers, Google and translators | `<html lang="en">` |
| `<head>` | Information **about** the page. Not shown inside the page | title, meta, link to CSS |
| `<body>` | Everything the visitor sees | headings, text, images |
| `meta charset` | Which set of letters to use. UTF-8 covers English, Nepali (नमस्ते), symbols | `<meta charset="UTF-8">` |
| `meta viewport` | Makes the page fit a phone screen | `width=device-width, initial-scale=1.0` |
| `<title>` | The text on the browser tab and in Google results | `<title>Aarav's Page</title>` |
| Nesting | Putting one element inside another | `<p>I live in <strong>Kathmandu</strong></p>` |
| Comment | A note for people. The browser ignores it | `<!-- add photo later -->` |
| Parent / child | The outer box is the parent, the inner box is the child | `<p>` is the parent of `<strong>` |

## How it works

### 1. Anatomy of one element

```text
   opening tag        contents        closing tag
 ┌──────┴───────┐ ┌──────┴──────┐ ┌─────┴─────┐
 <p class="intro">Namaste, I am Aarav.</p>
    └──┬┘ └──┬──┘
 attribute  attribute
   name       value (always in "double quotes")
```

- The closing tag has a slash: `</p>`.
- Attributes go **only** in the opening tag.
- Tag names are lowercase in this class: `<p>`, not `<P>`.

### 2. The skeleton, line by line

| Line | Why it is there |
|---|---|
| `<!DOCTYPE html>` | Without it, the browser switches to old "quirks mode" and copies 1990s mistakes. Always the very first line |
| `<html lang="en">` | The root box. Everything else goes inside it. `lang` tells screen readers to use an English voice |
| `<head>` | Opens the parcel label |
| `<meta charset="UTF-8">` | So `Rs.`, `©`, `→` and नमस्ते print correctly, not as `Ã©` |
| `<meta name="viewport" ...>` | So the page is not tiny on a phone |
| `<title>...</title>` | The tab text. Required. One per page |
| `</head>` | Closes the label |
| `<body>` ... `</body>` | The contents of the parcel |
| `</html>` | Closes the root box. **Nothing comes after it** |

### 3. The nesting rule: last opened, first closed

Boxes inside boxes must close in the opposite order they opened, like Russian dolls.

```text
RIGHT:  <p> I live in <strong> Kathmandu </strong> </p>
         1             2                  2        1     (open 1, open 2, close 2, close 1)

WRONG:  <p> I live in <strong> Kathmandu </p> </strong>
         1             2                  1     2         (crossed: box 1 closes while box 2 is still open)
```

You can never "cross" boxes. Shift+Alt+F (format) makes crossed boxes easier to spot: the indentation looks wrong.

### 4. Block and inline (a first look)

- **Block** elements start on a new line and take the full width: `h1`, `p`, `ul`, `table`.
- **Inline** elements sit inside a line of text: `strong`, `em`, `a`, `span`, `img`.
- Rule of thumb: an inline element goes **inside** a block, never the other way round. `<strong><p>…</p></strong>` is wrong.

### 5. Comments

```text
<!-- This is a comment. It opens with <!-- and closes with --> -->
```

A comment must close with `-->` (two dashes). If it does not close, **everything after it becomes part of the
comment and disappears**: the footer, the rest of the page, all of it (D1-04 bug 6).

### 6. Browsers are polite guessers

A browser **never shows an error message** for bad HTML. It guesses what you meant and keeps going. Sometimes
the guess is right, so the page looks fine and the bug stays hidden. Sometimes the guess is very wrong: a whole
page in bold, a footer that vanished. That is why you need a **spell-checker** (HTMLHint) and the **Elements panel**
(F12). Note 10 explains both and lists exactly what the browser repairs.

**The 3-step look:**
1. **Eyes** (V): does the page look right?
2. **HTMLHint** (D(HH)): any squiggles? Open the Problems panel with Ctrl+Shift+M.
3. **F12 → Elements** (D(F12)): what did the browser actually build? Click the arrows to open each box.

## Code you built today

### Step 1: DOCTYPE and html lang

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Aarav's Page</title>
</head>
<body>
  <p>The skeleton starts here.</p>
</body>
</html>
```

- `<!DOCTYPE html>` is first. `lang="en"` is on `<html>`.
- **Predict:** what text will the browser tab show?

### Step 2: head, meta and title

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aarav's Page</title>
</head>
<body>
  <p>Namaste! नमस्ते! Price: Rs. 150 → good value.</p>
</body>
</html>
```

- `meta charset` makes the Nepali word and the arrow print correctly.
- `meta` is a **void** element: no closing tag.
- **Predict:** delete the `meta charset` line and save. Does the Nepali text still show correctly? (Live Server
  usually sends UTF-8 anyway; with the double-click fallback you may see strange letters. Put the line back.)

### Step 3: body with a heading and a paragraph

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aarav's Page</title>
</head>
<body>
  <h1>Aarav's first page</h1>
  <p>I am a student at Tech Skills Institute in Kathmandu.</p>
  <p>I am learning to build websites.</p>
</body>
</html>
```

- One `<h1>` = the main title of the page.
- Each `<p>` is a paragraph: it starts on a new line with space around it.

### Step 4: nesting and comments

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aarav's Page</title>
</head>
<body>
  <h1>Aarav's first page</h1>
  <p>I live in <strong>Kathmandu</strong>, near Dillibazar.</p>
  <p>My favourite food is <strong>momo</strong>, of course.</p>
  <!-- next week: add a photo of Swayambhu -->
  <footer>
    <p>Made by Aarav, Week 2</p>
  </footer>
</body>
</html>
```

- `<strong>` opens and closes **inside** the `<p>`. Last opened, first closed.
- The comment ends with `-->`, so the footer still shows.
- **Predict:** change `-->` to `->` in the comment and save. What disappears? Then put it back.
- Open F12 → Elements. Click the arrow next to `<body>`. You see the boxes inside boxes.

### Step 5: the spell-checker demo (squiggles)

This page has three mistakes on purpose. Type it, save it, and press **Ctrl+Shift+M**.

File: `htmlhint-demo.html`
```html broken
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTMLHint demo</title>
</head>
<body>
  <h1>Momo House
  <img src="images/momo.svg">
</body>
</html>
```

- No DOCTYPE → HTMLHint `doctype-first`.
- `<h1>` never closed → `tag-pair`.
- `<img>` with no `alt` → `alt-require`.
- Fix all three until the Problems panel says "No problems".

## Quick reference

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A real title</title>
</head>
<body>
  <h1>One main heading</h1>
  <p>Content.</p>
</body>
</html>
```

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| HTMLHint: "Doctype must be declared first" | No `<!DOCTYPE html>` on line 1 (D1-04 bug 1, D1-HW4 bug 1) | Add it as the first line |
| HTMLHint: "An lang attribute must be present" | `<html>` has no `lang` (D1-04 bug 2) | `<html lang="en">` |
| The tab shows the file path, and "Aarav's Page" appears **on the page** | `<titel>` typo: the browser does not know that tag, so it moves it into the body as plain text (D1-04 bug 3) | `<title>…</title>` |
| Everything under the heading is huge | `<h1>` never closed (D1-04 bug 4) | Add `</h1>` |
| HTMLHint: "Tag must be paired" on a `</strong>` | Crossed boxes `<p>…<strong>…</p></strong>` (D1-04 bug 5) | Close `</strong>` before `</p>` |
| The footer and everything after it vanished | A comment ends with `->` instead of `-->` (D1-04 bug 6) | Two dashes: `-->` |
| A whole page is blank | `<title>` never closed: everything after it became the title (D1-HW1 bug 1) | Close `</title>` |
| Elements panel shows only one head, your second `<head>` is gone | A second `<head>` instead of `</head>`; the browser ignores it (D1-FF5 bug 1) | `</head>` |
| Text written after `</html>` still shows | The browser moves it into the body; still wrong (D1-FF5 bug 2) | Put it inside `<body>` |
| `<title>` inside `<body>`: the tab still shows it | The browser takes the first `<title>` anywhere and hides it; still wrong (D1-HW4 bug 2) | Move it into `<head>` |

## Check yourself

1. Draw the skeleton from memory: which 10 lines does every page need?
2. What is the difference between a **tag** and an **element**? Give an example.
3. Name four void elements.
4. What goes in `<head>`? What goes in `<body>`? Use the parcel idea.
5. Why does `lang="en"` matter if the page looks the same without it?
6. Is this right or wrong, and why? `<p>Momo is <em>very</p></em> tasty`
7. What happens to the page if a comment is never closed?
8. "Browsers are polite guessers." Explain it to a friend in two sentences.

## Try it

- **D1-03 Skeleton from memory**: type the whole skeleton with these notes closed. Wrong is fine. Blank is not.
- **D1-04 Broken Skeleton**: 6 bugs in "Aarav's first page". Use eyes, HTMLHint and F12. Fix bug 4 first if the page looks strange.
- **D1-FF5 Notice Board** (fast finishers): bugs 1 and 2 are skeleton bugs.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "HTMLHint says 'Tag must be paired, missing: [ </strong> ]' on line 12 of my page. Explain what this message means. Do not rewrite my code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [04 · Text tags and entities](04-text-tags-and-entities.md).*
