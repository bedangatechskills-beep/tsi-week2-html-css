# 04 · CSS Basics: The Outfit, Rule Anatomy and Three Ways to Add CSS
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Blocks B0 + B4*
**Layer:** Frontend (CSS = style)

> **Today in one sentence:** HTML is the skeleton; CSS is the outfit, and one stylesheet file can dress every page of your site.

## The picture to keep in your head

**Skeleton & outfit** (the Zen Garden idea). In B0 you saw **one** HTML page wearing **three** different stylesheets: traditional, modern and night. The HTML did not change at all. Only one `href` changed. Same skeleton, new outfit.

Then, for the three ways to add CSS: **Outfit**: sticky note / outfit list / **school uniform**.

| Analogy | Real thing | Reach |
|---|---|---|
| A **sticky note** on one shirt: "make this shirt red" | **inline** CSS: `style="…"` on one tag | one element |
| An **outfit list** for one person: "today Aarav wears…" | **internal** CSS: a `<style>` block in the `<head>` | one page |
| The **school uniform**: one rule for every student | **external** CSS: a `.css` file linked with `<link>` | every page that links it |

At TSI, imagine changing the uniform colour. With a school uniform rule, you change **one** list and every student changes. With sticky notes, you would need a note on every single shirt. That is why real sites use **external** CSS.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| CSS | Cascading Style Sheets: the language for how a page **looks**. | colours, fonts, sizes, spacing |
| Rule | One instruction: "these elements → look like this". | `h1 { color: maroon; }` |
| Selector | **Which** elements the rule is for. | `h1`, `.price`, `#menu` |
| Declaration block | Everything between `{` and `}`. | `{ color: maroon; font-size: 2rem; }` |
| Declaration | One `property: value;` pair. | `color: maroon;` |
| Property | **What** you change. | `color`, `background-color`, `font-size` |
| Value | **To what** you change it. | `maroon`, `#14213D`, `2rem` |
| Inline style | CSS in a `style` attribute on one tag. | `<p style="color: red;">` |
| Internal stylesheet | CSS inside `<style>` … `</style>` in the `<head>`. | for a one-page demo |
| External stylesheet | CSS in its own file, linked from the `<head>`. | `<link rel="stylesheet" href="css/style.css">` |
| Comment | A note the browser ignores. In CSS **only** `/* … */` works. | `/* footer styles */` |
| Cascade | When two rules disagree, the browser picks a winner. With equal selectors, **the last rule wins**. | two `h1` rules → the later one wins |
| Styles panel | The DevTools pane that shows every rule on the selected element, and which ones lost (crossed out). | F12 → Elements → Styles |

## How it works

### Anatomy of a rule

```text
selector     declaration block
   │      ┌──────────────┴──────────────┐
   h1     {  color: maroon;  font-size: 2rem;  }
             └──┬──┘ └──┬──┘
           property   value
             └──── declaration ───┘ ← ends with ;
```

Four tiny pieces of punctuation hold it together:
- `{` opens the block and `}` closes it. **Every** `{` needs its `}`.
- `:` sits between the property and the value.
- `;` ends **each** declaration. (You may leave out the last `;`. Write it anyway. Then you can add a line later without breaking anything.)

### The three ways, side by side

```text
INLINE (sticky note)            INTERNAL (outfit list)            EXTERNAL (school uniform)
<p style="color: red;">         <head>                            <head>
                                  <style>                           <link rel="stylesheet"
                                    p { color: red; }                     href="css/style.css">
                                  </style>                        </head>
                                </head>                           ── css/style.css ──
                                                                  p { color: red; }
one element                     one page                          every page that links it
```

Use **external** for real work. Use internal for a quick one-page test. Use inline almost never (it is hard to find and hard to override).

### The link tag, letter by letter

```text
<link rel="stylesheet" href="css/style.css">
      │                │
      │                └─ the path to the file, from THIS html file (same path rules as Day 1)
      └─ "this file is a stylesheet". Spell it exactly: stylesheet (one word, all small letters)
```

- `<link>` goes in the `<head>`. It is a void tag (no closing tag), like `<img>`.
- If `rel` is misspelt (`stylsheet`), the browser does not know the file is CSS. **Nothing** loads.
- If `href` is wrong (`styles.css` instead of `style.css`), the browser asks for a file that does not exist. **Nothing** loads. F12 → Network shows the file in red with **404**.

### The cascade: last rule wins (for now)

When two rules with the **same kind of selector** set the same property, the rule that comes **later** wins:

```css
h1 { color: navy; }
h1 { color: maroon; }
```

The `h1` is maroon. In note 05 you learn the second part of the cascade: a more **specific** selector (like `#id`) beats a less specific one, wherever it is.

Order across files counts too: if a page links `a.css` and then `b.css`, the rules in `b.css` come later.

### DevTools Styles: your X-ray

1. Right-click any element → **Inspect**.
2. The **Styles** pane on the right lists every rule that matches, newest/strongest first.
3. A declaration that **lost** is ~~crossed out~~. A declaration the browser **did not understand** is crossed out with a yellow ⚠ warning triangle ("Invalid property value" or "Unknown property name").
4. You can click any value and type a new one to test. It is temporary: copy the good value back into your file.

### Comments

```css
/* Momo House: header styles */
header { background-color: #14213D; }
```

Only `/* … */` is a comment in CSS. `// like this` is JavaScript style. In CSS it is not a comment: it breaks the rule that follows it (see note 09).

## Code you built today

### Step 1: the outfit swap (B0, D2-00)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Outfit swap</title>
  <link rel="stylesheet" href="css/outfit-traditional.css">
</head>
<body>
  <h1>Momo House</h1>
  <p>Fresh momo, made by Didi in Thamel since 2010.</p>
  <p><a href="index.html">See the menu</a></p>
</body>
</html>
```

File: `css/outfit-traditional.css`
```css
body {
  background-color: #fdf6ec;
  color: #5a1a00;
  font-family: Georgia, "Times New Roman", serif;
}

h1 {
  color: #990011;
}
```

File: `css/outfit-night.css`
```css
body {
  background-color: #14213D;
  color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #fca311;
}

a {
  color: #fca311;
}
```
- Change `outfit-traditional.css` to `outfit-night.css` in the `<link>`, save, and the whole page changes. The HTML did not change.

**Predict:** you link **both** files, traditional first, night second. What colour is the `h1`? Why?

### Step 2: a sticky note (inline)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunita's bio | Inline</title>
</head>
<body>
  <h1 style="color: maroon;">Sunita Gurung</h1>
  <p>Sunita is a student at TSI in Dillibazar.</p>
  <p>She likes jhol momo and long walks to Swayambhu.</p>
</body>
</html>
```
- Only this one `h1` changes. A second `h1` on the page would not.

**Predict:** you want every paragraph to be grey. How many sticky notes do you need on this page? On a site with 40 pages?

### Step 3: an outfit list (internal)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunita's bio | Internal</title>
  <style>
    h1 {
      color: maroon;
    }

    p {
      color: #555555;
    }
  </style>
</head>
<body>
  <h1>Sunita Gurung</h1>
  <p>Sunita is a student at TSI in Dillibazar.</p>
  <p>She likes jhol momo and long walks to Swayambhu.</p>
</body>
</html>
```
- One rule now styles **every** paragraph on this page. But another page would not get it.

### Step 4: the school uniform (external)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunita's bio</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Sunita Gurung</h1>
  <p>Sunita is a student at TSI in Dillibazar.</p>
  <p>She likes jhol momo and long walks to Swayambhu.</p>
  <p><a href="about.html">More about Sunita</a></p>
</body>
</html>
```

File: `about.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Sunita</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>About Sunita</h1>
  <p>Sunita wants to build websites for trekking companies in Pokhara.</p>
  <p><a href="index.html">Back to the bio</a></p>
</body>
</html>
```

File: `css/style.css`
```css
/* Sunita's site: one uniform for every page */
body {
  background-color: #fdf6ec;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: maroon;
}

p {
  color: #555555;
  font-size: 18px;
}

a {
  color: #14213D;
}
```
- Both pages link the **same** file. Change `maroon` to `navy` once, and both pages change.
- The path `css/style.css` means "the `css` folder next to this page".

**Predict:** you add `h1 { color: green; }` at the **end** of `style.css`. What colour are the headings now?

## Quick reference

| You want to… | Write |
|---|---|
| Link a stylesheet | `<link rel="stylesheet" href="css/style.css">` (in `<head>`) |
| Write a rule | `selector { property: value; }` |
| Add a comment | `/* like this */` |
| Style one element only, quickly | `style="color: red;"` (avoid) |
| Style one page for a test | `<style> … </style>` in `<head>` |
| See which rules apply | Right-click → Inspect → Styles |
| See if the CSS file loaded | F12 → Network → refresh → look for `style.css` (200 = OK, 404 = not found) |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| No CSS at all | `rel="stylsheet"` typo | `rel="stylesheet"` | D2-06 bug 1 |
| No CSS at all; Network shows **404** for the CSS file | `href="css/styles.css"`, but the file is `style.css` | Match the real file name | D2-06 bug 2 |
| No CSS; the HTML is in the root, the CSS in `css/` | `href="style.css"` misses the folder | `href="css/style.css"` | D2-HW1 bug 1 |
| One rule works, the next one doesn't | A missing `}` | Close every `{` | D2-06 bug 3, D2-HW1 bug 10, D2-FF4 |
| Both declarations are dropped: the browser reads them as one broken value | A missing `;` between them | End every declaration with `;` | D2-06 bug 4, D2-FF4 |
| The text stays black; DevTools says "Unknown property name" | `colour: maroon;` (British spelling) | CSS uses US spelling: `color` | D2-06 bug 5, D2-FF4 |
| The rule after a comment is ignored | `// footer styles` | `/* footer styles */` | D2-06 bug 6, D2-FF4 |
| A rule is crossed out in DevTools, no warning | A later rule (or a stronger selector) won | Remove one, or change the order | (the cascade) |

*Fix the link first:* until the stylesheet loads, no other CSS mistake is visible. The D2-06 README says the same.

## Check yourself

1. Label the parts of `p { color: grey; }`: selector, property, value, declaration, declaration block.
2. Name the three ways to add CSS. Which one would a real 10-page site use, and why?
3. Two rules set `h1` colour: `navy` first, `maroon` second. Which wins? What is this called?
4. Your page has no style at all. Name three things you check, in order.
5. What does DevTools show for a declaration the browser did not understand?
6. Why is `// comment` dangerous in a CSS file?
7. Explain the school uniform analogy to a friend in two sentences.

## Try it

- **D2-00** Outfit swap: change one `href`, get a new look.
- **D2-06** 🐞 Stylesheet Not Loading (6 bugs). Fix bugs 1 and 2 first.
- **D2-07** Restyle the bio: change 4 things in Sunita's CSS.
- **D2-15** Style Momo House, checkpoint 1: link `css/style.css` from all 4 pages.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"My page shows no CSS at all. Here is my link tag and a list of my folders and files. Explain the three most common reasons a stylesheet does not load and how to check each one in DevTools. Don't fix it for me."*

## Go deeper

- MDN: [CSS first steps: what is CSS?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
- The CSS Zen Garden (Wi-Fi): csszengarden.com: one HTML page, hundreds of outfits.

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [05 · Selectors](05-selectors.md): calling students in class.*
