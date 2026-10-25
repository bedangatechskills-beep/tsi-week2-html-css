# 09 · Debugging CSS: What the Browser Drops
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · All CSS blocks (B4–B9)*
**Layer:** Frontend (CSS)

> **Today in one sentence:** CSS never shows an error message; when the browser does not understand something, it quietly **drops** it, so your job is to find what was dropped and why.

## The picture to keep in your head

On Day 1 you learnt that browsers are **polite guessers**: they never show an HTML error, they guess. With CSS the browser is polite in a different way: it does not guess, it **skips**. Anything it cannot read, it drops, and it carries on with the next thing it *can* read.

Think of the **school uniform** list (note 04) being read aloud by a strict school guard. If one line says "shirt: bloo", the guard does not guess "blue". He skips that line and reads the next one. If a line has no full stop at the end, he reads two lines as one long nonsense line and skips both. If a bracket is never closed, he thinks every line after it still belongs to the first item.

So debugging CSS means asking four questions, in this order:

```text
1. Did the stylesheet LOAD at all?            → F12 → Network (404?) and the <link> tag
2. Does the selector MATCH the element?       → Inspect the element: is the rule listed in Styles?
3. Did the browser UNDERSTAND the declaration? → a yellow ⚠ triangle = "Invalid property value" / "Unknown property name"
4. Did another rule WIN?                       → crossed out with no ⚠ = a later or stronger rule won
```

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Drop | The browser ignores something it cannot read, silently. | `width: 300;` → dropped |
| Invalid declaration | A `property: value` the browser cannot use (bad value, bad unit, unknown property). Only **that declaration** is dropped. | `color: #gg0000;` |
| Invalid selector | A selector the browser cannot read. The **whole rule** is dropped. | `h1, h2, { … }` |
| Parse | How the browser reads your text, symbol by symbol (`{`, `:`, `;`, `}`). | |
| ⚠ warning triangle | DevTools' mark for a declaration it did not understand. | "Invalid property value" |
| Crossed out | DevTools' mark for a declaration that lost the cascade. | a later `h1` rule won |
| 404 | "Not found": the browser asked for a file that is not there. | `css/styles.css` |
| Network panel | F12 → Network: every file the page asked for, with its status. | `style.css 200` |

## How it works

### The four kinds of drop

1. **A declaration is dropped** (the smallest drop). A bad value or an unknown property: just that one `property: value;` is ignored. The other lines in the rule still work.
2. **A whole rule is dropped**. If the **selector** is invalid (a trailing comma, an unknown `:state`, a `//` before it), the browser throws away the whole `{ … }` block.
3. **The next rule is swallowed**. A missing `}` means the rule never ends, so the browser reads the next rule as if it were **inside** the first one. It no longer works on its own.
4. **The whole file is missing**. A bad `rel` or a wrong `href`: no CSS loads at all, and every other bug is hidden. **Always fix this first.**

### The table: what the browser drops

Every row below was tested in Chrome (we loaded a test page and read the computed styles back). "Kept" means Chrome used it.

| You wrote (broken) | What Chrome does | What you see | Fix | Planted in |
|---|---|---|---|---|
| `colour: maroon;` | **Unknown property → declaration dropped.** The next declaration still works. | Text stays black | `color: maroon;` | D2-06 bug 5, D2-FF4 |
| `color: #gg0000;` | **Invalid value → declaration dropped** (g is not hex). Other declarations in the rule still apply. | Old colour stays | `#cc0000` | D2-10 bug 2 |
| `color: #fffff;` (5 digits) | Invalid value → dropped | Old colour stays | `#ffffff` | D2-HW1 bug 11 |
| `width: 300;` | No unit → dropped | Box stays full width | `300px` | D2-10 bug 1 |
| `padding: 20;` | No unit → dropped | No padding | `20px` | D2-HW1 bug 7, D2-FF4 |
| `font-size: 1.5 rem;` / `20 px` | A space between number and unit → dropped | Size does not change | `1.5rem` / `20px` | D2-10 bug 3, D2-FF4, D2-FF5 bug 8 |
| `padding: -10px;` | Negative padding is invalid → dropped (padding stays 0). *Negative **margin** is kept.* | No padding | `10px` | D2-12 bug 3 |
| `padding: 10px 20px 10px 20px 5px;` | 5 values → dropped | No padding | 1 to 4 values | D2-HW4 bug 6 |
| `background-color: rgb(255, 200);` | Missing a number → dropped | No background | `rgb(255, 200, 0)` | D2-HW4 bug 7 |
| `display: blok;` / `inline-blok` | Unknown keyword → dropped | Display stays the default | `block` / `inline-block` | D2-14 bug 1, D2-HW1 bug 5, D2-FF4 |
| `background-color = #fdf6ec;` | `=` instead of `:` → that declaration dropped; Chrome recovers at the next `;` | No background | `background-color: #fdf6ec;` | D2-FF5 bug 9 |
| `color: navy background-color: yellow;` (missing `;`) | The two lines become **one** bad value → **both** are dropped. Declarations after the next `;` work again | Neither colour applies | add `;` after `navy` | D2-06 bug 4, D2-FF4 |
| `h1, h2, { color: red; }` | Trailing comma = invalid selector → **whole rule dropped** | Neither h1 nor h2 is red | `h1, h2 { … }` | D2-08 bug 4 |
| `a:hoverr { … }` | Unknown pseudo-class = invalid selector → **whole rule dropped** | Nothing on hover | `a:hover` | D2-08 bug 5 |
| `// footer styles` then `footer { … }` | `//` is not a CSS comment. It becomes part of the next selector, which is now invalid → **the rule after it is dropped**. The rule after *that* works | Footer unstyled | `/* footer styles */` | D2-06 bug 6, D2-FF4 |
| `h1 { color: red;` (missing `}`) then `p { … }` | The `h1` rule never ends, so Chrome reads `p { … }` as a rule **nested inside** it. The `p` rule **no longer works on its own** (it is swallowed) | The next rule does nothing | close the `}` | D2-06 bug 3, D2-HW1 bug 10, D2-FF4 |
| `border: 2px orange;` | **Kept**, but the style defaults to `none` → no border is drawn | No border | `border: 2px solid orange;` | D2-12 bug 4, D2-HW1 bug 8 |
| `line-height: 1.5px;` | **Kept** (it is a valid length) → lines 1.5 px tall | Lines overlap | `line-height: 1.5;` | D2-10 bug 5 |
| `font-family: "Momo Sans";` | **Kept**, but the font does not exist → the browser's default font (Times New Roman) | Old-newspaper look | add `Arial, sans-serif` | D2-10 bug 4 |
| `.card` vs `class="Card"` | **Kept**, but it matches nothing (case-sensitive) | Rule does nothing | same case | D2-08 bug 1, D2-HW1 bug 6 |
| `rel="stylsheet"` / `href="css/styles.css"` | The file is **not loaded at all** | No CSS anywhere | `stylesheet` / the real path | D2-06 bugs 1–2, D2-HW1 bug 1 |

Notice the last five rows: the browser **kept** them. They are valid CSS that does the wrong thing. DevTools shows no ⚠ triangle for them. For those, you must read the code against what you meant (or use the box diagram).

### Where DevTools shows each kind

| Kind | What you see in F12 |
|---|---|
| File not loaded | Network: `style.css` in red, **404**. Styles: none of your rules appear at all |
| Selector does not match | Inspect the element: your rule is **not listed** in Styles |
| Invalid selector | The rule is **not listed** anywhere (it was thrown away) |
| Invalid declaration | Listed, crossed out, with a yellow **⚠** ("Invalid property value" or "Unknown property name") |
| Declaration lost the cascade | Listed, crossed out, **no** ⚠; the winner is higher up in the Styles list |
| Valid but wrong (`border: 2px orange`) | Listed, not crossed out. Check the Computed tab: `border-top-style: none` |

### The repair order

1. **Load it.** Check the `<link>`: `rel="stylesheet"`, the path from the HTML file, the exact file name.
2. **Close everything.** Every `{` has a `}`. Every declaration ends with `;`. VS Code helps: put the cursor on a `{` and its partner `}` is highlighted.
3. **Read the triangles.** Fix every ⚠ in Styles.
4. **Match the names.** Compare each selector with the HTML, letter by letter, case included.
5. **Check the maths.** Box sizes (`box-sizing`), units, number of values.

## Code you built today

### Step 1: a stylesheet with six silent problems

Read it like the strict guard. Which lines will Chrome skip?

```css broken
body {
  background-color = #fdf6ec;
  font-family: "Momo Sans";
}

h1, h2, {
  colour: #990011;
}

.price {
  font-size: 1.5 rem;
  color: #14213D
  font-weight: bold;
}

// footer styles
footer {
  border: 2px orange;
}
```

**Predict:** list each problem and say whether Chrome drops the declaration, drops the whole rule, or keeps it but it looks wrong. Then type the page below and the broken CSS, open F12, and check your list against the ⚠ triangles.

### Step 2: the same stylesheet, repaired

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Debug lab</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Momo House</h1>
  <h2>Today's prices</h2>
  <p class="price">Steam momo: Rs. 150</p>
  <p class="price">Jhol momo: Rs. 200</p>
  <footer>
    <p>Thamel, Kathmandu · Open Sunday to Friday</p>
  </footer>
</body>
</html>
```

File: `css/style.css`
```css
body {
  background-color: #fdf6ec;
  font-family: "Momo Sans", Arial, Helvetica, sans-serif;
}

h1,
h2 {
  color: #990011;
}

.price {
  font-size: 1.5rem;
  color: #14213D;
  font-weight: bold;
}

/* footer styles */
footer {
  border: 2px solid orange;
}
```
- `=` → `:` · fallback fonts added · trailing comma removed · `colour` → `color` · `1.5 rem` → `1.5rem` · missing `;` added after `#14213D` · `//` → `/* */` · `solid` added to the border.

**Predict:** in the broken version, was `font-weight: bold` on `.price` working or not? (Hint: count the `;`.)

### Step 3: the missing `}` swallows the next rule

```css broken
h1 {
  color: #990011;

p {
  color: #14213D;
}
```

Chrome reads this as "an `h1` rule with a `p` rule inside it". So the paragraphs are **not** navy. (The `h1` is still cherry.) Add the `}` after `color: #990011;` and both rules work again.

## Quick reference: the debugging checklist

```text
☐ Network: style.css is 200, not 404
☐ <link rel="stylesheet" href="…"> spelt right, path right from THIS html file
☐ Every { has a }       ☐ Every declaration ends with ;
☐ Comments are /* */    ☐ US spelling: color, center
☐ Numbers have units, no space: 20px, 1.5rem (0 is fine alone)
☐ Hex: # + 3 or 6 digits of 0–9 a–f        ☐ rgb(): three numbers
☐ Selector names = HTML names, same case   ☐ No trailing comma in a selector list
☐ Border has a style (solid)               ☐ Box maths: box-sizing: border-box
☐ No ⚠ triangles left in Styles            ☐ Crossed out without ⚠? A stronger/later rule won
```

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| You fix CSS bugs but nothing changes | The stylesheet never loaded | Fix the `<link>` first | D2-06 (README: fix bugs 1 and 2 first), D2-HW1 bug 1 |
| You change the CSS but the page does not update | Not saved, or Live Server not running | Ctrl+S; check the Live Server "Port" button | (every exercise) |
| One rule is fine, the next is dead | Missing `}` | Close it | D2-06 bug 3 |
| A whole rule is dead, no ⚠ | Invalid selector (`h1, h2,` or `a:hoverr`) or a `//` line before it | Fix the selector / comment | D2-08 bugs 4–5, D2-06 bug 6 |
| Two declarations in a row are dead | Missing `;` | Add it | D2-06 bug 4 |
| Everything looks right in CSS, nothing matches | Selector and HTML names differ | Copy-paste the class name to compare | D2-08 bugs 1–3 |
| Ten mixed bugs in one file | All of the above | Follow the repair order | D2-FF4 (10 bugs), D2-HW1 (12 bugs) |

## Check yourself

1. Name the four questions to ask when a style does not work, in order.
2. What is the difference between a dropped **declaration** and a dropped **rule**? Give one example of each.
3. Why does a missing `;` break two declarations, not one?
4. Why does `// footer styles` break the footer rule but not the rule after it?
5. `border: 2px orange;` is not crossed out in DevTools, but there is no border. Why?
6. Your rule is not listed at all in the Styles pane. Name two possible reasons.
7. Explain "the browser drops what it can't read" to a friend, using the strict school guard.

## Try it

- **D2-06** 🐞 Stylesheet Not Loading · **D2-08** 🐞 Selector Mix-ups · **D2-10** 🐞 Units & Colours · **D2-12** 🐞 Broken Cards · **D2-14** 🐞 Nav Won't Behave
- **D2-FF4** 🐞 Haunted stylesheet (10 mixed bugs) · **D2-FF5** 🐞 Lost & Found (11 bugs)
- **D2-HW1** 🐞 Haunted portfolio repair (12 bugs) · **D2-HW4** 🐞 Patan Craft Shop replay (10 bugs, stretch)

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Try the checklist first, then ask.
A good prompt: *"DevTools shows a yellow warning triangle 'Invalid property value' next to `font-size: 1.5 rem;`. Explain what makes this value invalid. Don't fix the rest of my file."*

## Go deeper

- MDN: [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
- MDN: [CSS error handling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/Error_handling)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [10 · Bootstrap teaser](10-bootstrap-teaser.md): IKEA for websites.*
