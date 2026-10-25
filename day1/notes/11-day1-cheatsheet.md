# 11 · Day 1 Cheatsheet: How the Web Works + HTML Core
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Layer: Frontend*

> Keep this page open while you code. Details and examples are in notes 01–10.

## The analogies

| Topic | Remember it as |
|---|---|
| The Internet | **Postal system**: request = letter, DNS = phone book, IP = home address, server = warehouse, response = parcel |
| VS Code + Live Server | **Professional kitchen**; Live Server = "taste as you cook"; Emmet = **speed-dial for tags** |
| Skeleton | **Labeled boxes inside boxes**. Last box opened, first box closed |
| head / body | **The label on the parcel** / **what's inside the parcel** |
| Text tags | **Tone of voice** |
| Entities | **Escape codes**: `&lt;` = "print a <, don't start a tag" |
| Lists | **Shopping list** (ul) vs **recipe steps** (ol) |
| Paths | **Same house vs postal address**; `../` = "go downstairs one floor" |
| Images | **A sticker, not an envelope**; alt = the description you read over the phone |
| Tables | **Four tags, one team**; the canteen price board |
| Forms | **The order slip**; name = the column the kitchen files your answer under |
| Debugging | Browsers are **polite guessers**; HTMLHint = **spell-checker for HTML** |

## The skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Home</title>
</head>
<body>
  <h1>Momo House</h1>
  <p>Fresh momo every day.</p>
</body>
</html>
```

## Tags on one page

| Group | Tags |
|---|---|
| Text | `h1`–`h6` (one h1, no jumps) · `p` · `strong` · `em` · `br` · `hr` · `blockquote` · `q` · `span` |
| Entities | `&lt;` `&gt;` `&amp;` `&copy;` `&nbsp;` `&rarr;` `&hearts;` `&quot;` |
| Lists | `ul` / `ol` (`type`, `start`, `reversed`) → `li` · `dl` → `dt` + `dd` · nested list **inside** the `li` |
| Links | `<a href="…">` · `https://` for other sites · `pages/x.html` · `../x.html` · `#id` · `mailto:` · `tel:` · `target="_blank"` |
| Images | `<img src="…" alt="…" width="300">` (void) · `alt=""` for decoration · `figure` + `figcaption` |
| Tables | `table` · `caption` (first) · `thead` / `tbody` / `tfoot` · `tr` · `th scope="col"` or `"row"` · `td` · `colspan` · `rowspan` |
| Forms | `form method="get"` · `label for` ↔ `input id` · `name` · `value` · `select` / `option` · `textarea` (closing tag!) · `fieldset` / `legend` · `required` · `placeholder` · `button type="submit"` or `"reset"` |
| Input types | `text` `email` `tel` `password` `number` `date` `radio` `checkbox` `color` |
| Void elements | `meta` `link` `img` `br` `hr` `input` — no closing tag |

## Emmet

| Type | Get |
|---|---|
| `!` | full skeleton (then change the title!) |
| `h1+p` | h1 next to p |
| `ul>li*5` | list with 5 items |
| `nav>a*3` | nav with 3 links |
| `table>tr*3>td*2` | 3 rows × 2 cells |
| `.card>h2+p` | div.card with h2 and p |
| `ul>li.item$*3` | item1, item2, item3 |
| `lorem20` | 20 dummy words |

## Shortcuts

Ctrl+S save · Alt+Shift+↓ copy line · Alt+↑/↓ move line · Ctrl+/ comment · Shift+Alt+F format ·
Ctrl+D next match · Ctrl+Shift+M Problems · Ctrl+\` terminal · F12 DevTools · Ctrl+U View Source

## Paths in one picture

```text
site/
├── index.html          → pages/about.html   · images/momo.svg
├── images/momo.svg
└── pages/about.html    → ../index.html      · ../images/momo.svg   · menu.html (same floor)
```

Lowercase · no spaces · exact extension (`.html`, not `.htm`) · never `C:\…` · external = `https://…`

## Counting table cells

Every row adds up to the same number of columns. `colspan="3"` counts 3. A `rowspan="2"` cell takes a seat in the
next row too, so that row writes one cell less.

## Forms: the URL trick

`<form method="get">` → submit → `?name=value&name=value`. `on` = a radio/checkbox with no `value`.
A field missing from the URL = no `name`.

## The debugging routine

1. **Eyes** (V) · 2. **HTMLHint** Ctrl+Shift+M (D(HH)) · 3. **F12 Elements + Network** (D(F12)) ·
4. **Submit and read the URL** (D(URL)) · 5. **Read against the rules** (R) · 6. **W3C** with Wi-Fi (D(W3C)).
Fix the first error first. **Fix these first:** an unclosed `<title>` (blank page), a `<textarea />`, an unclosed comment.

## Bug tags

**V** see it · **D(HH)** HTMLHint · **D(F12)** Elements panel · **D(URL)** address bar · **D(LH)** Lighthouse (Day 2) ·
**D(W3C)** validator · **H** case on Linux · **R** rule check (no tool).

## Top 12 Day 1 bugs

| Bug | Fix | Tag |
|---|---|---|
| No DOCTYPE | `<!DOCTYPE html>` line 1 | D(HH) |
| No `lang` | `<html lang="en">` | D(HH) |
| `<titel>` / unclosed `<title>` | `<title>…</title>` | V + D(HH) |
| Crossed tags `<p><strong></p></strong>` | Last opened, first closed | D(HH) |
| Comment ends `->` | `-->` | V |
| Two `<h1>`, heading jumps | One h1, next level only | R |
| `&nbps;` | `&nbsp;` | V |
| `<li>` with no `<ul>` | Wrap in `<ul>` | V + D(F12) |
| `image/`, `about.html` from the wrong floor, no `https://` | Check folder, floor, scheme | V |
| `<img>` with no alt | A real description | D(HH) |
| Row with too few/many cells, `colspam` | Count every row | V |
| `for`/`id` mismatch, `<textarea />`, button after `</form>` | Match, close, move inside | V |

## AI rule (Stage 1: AI as Tutor)

AI may **explain** a concept or an error. You type every line. Try first, then ask:
"Explain what this HTMLHint message means. Don't rewrite my code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next session (Day 2): Semantic HTML, accessibility and media, then CSS basics. The skeleton gets its outfit.*
