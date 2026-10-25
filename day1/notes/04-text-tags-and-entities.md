# 04 · Text Tags and Entities: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B4 · Layer: Frontend*

> **Today in one sentence:** Text tags are the tone of your voice: they say what each piece of text **means**, not just how it looks.

## The picture to keep in your head

**Tone of voice**: `strong` = "this matters", `em` = stressed word, `br` = a pause in one thought,
`blockquote` = "quoting someone else".

And for entities: **escape codes**. `&lt;` means "print a <, don't start a tag".

| When you speak... | In HTML |
|---|---|
| A title you shout across the room | `<h1>` |
| A smaller title for one part | `<h2>`, `<h3>` … `<h6>` |
| Normal talking, one idea at a time | `<p>` |
| "Listen, **this matters**" | `<strong>` |
| "I said *Thursday*, not Friday" (stressed word) | `<em>` |
| A short breath inside one thought (an address, a poem) | `<br>` |
| "Now, a new topic" (a change of subject) | `<hr>` |
| "As Didi always says: …" (a long quote) | `<blockquote>` |
| A short quote inside a sentence | `<q>` |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Heading | A title for the page or a part of it, level 1 to 6 | `<h2>Today's specials</h2>` |
| Heading hierarchy | Headings go in order like a book: chapter, section, sub-section | h1 → h2 → h3, no jumps |
| Paragraph | A block of text about one idea | `<p>…</p>` |
| Semantic | The tag says what the content **means** | `<strong>` = important |
| Presentational | The tag only says how it **looks** | `<b>` = bold, `<i>` = italic |
| `<span>` | An inline box with no meaning, used to label a few words (for CSS on Day 2) | `<span class="price">Rs. 150</span>` |
| Entity | A code that prints a special character | `&lt;` → `<` |
| `&nbsp;` | A non-breaking space: the two words never split onto two lines | `Rs.&nbsp;150` |
| `&copy;` | The © sign | `&copy; 2026 Momo House` |

## How it works

### 1. Headings: one h1, no jumps

Headings build an outline of the page. Screen readers and Google read that outline.

```text
h1  TSI Canteen Weekly                ← one per page: the main title
  h2  This week's menu
    h3  Monday
    h3  Tuesday
  h2  News
    h3  New tea machine
```

- **One `<h1>` per page.** It is the title of the whole page (D1-06 bug 1).
- **No jumps.** After an h2 comes h2 or h3, never h5 (D1-FF5 bug 3, D1-15 bug 6).
- **Never pick a heading for its size.** Want bold text? Use `<strong>`. Size comes from CSS on Day 2 (D1-FF5 bug 4).
- These are **R** bugs: no tool in Week 2 flags them. You must read the code against the rule.

### 2. `strong` vs `b`, `em` vs `i`

| Tag | Looks | Means | Use it when |
|---|---|---|---|
| `<strong>` | bold | "this is important" | a warning, a key price, a deadline |
| `<b>` | bold | nothing, just bold | a product name in a review (rare) |
| `<em>` | italic | stress on this word | "I said *Thursday*" |
| `<i>` | italic | a different voice: a foreign word, a ship name | *momo* in an English sentence, *dal bhat* |

A screen reader can change its voice for `strong` and `em`. It ignores `b` and `i`. So in this course:
**use `strong` and `em` by default.**

### 3. Line break and divider

- `<br>` = a line break **inside** one thought: an address, a poem. It is a void element (no closing tag).
- Do **not** use `<br><br><br>` to make space. Use two `<p>` elements (D1-FF5 bug 5). Space is CSS's job.
- `<hr>` = a change of topic, drawn as a line. Also void. `</hr>` is not a tag: the browser ignores it, so no line
  appears (D1-FF5 bug 6).

### 4. Quotes

- `<blockquote>` for a long quote, on its own. It is indented. Close it with `</blockquote>`, never `</quote>`
  (D1-06 bug 4).
- `<q>` for a short quote inside a sentence. The browser adds the quote marks for you.

### 5. Entities: escape codes

Some characters have a job in HTML. `<` starts a tag. `&` starts an entity. To **print** them, use an escape code.

| You want to show | Write | Why |
|---|---|---|
| `<` | `&lt;` | "less than": otherwise it starts a tag |
| `>` | `&gt;` | "greater than" |
| `&` | `&amp;` | otherwise it starts an entity |
| © | `&copy;` | copyright |
| a space that never breaks | `&nbsp;` | keeps `Rs. 150` together |
| → | `&rarr;` | "right arrow" |
| ♥ | `&hearts;` | heart |
| " | `&quot;` | a quote mark inside an attribute value |

**Every entity is `&` + name + `;`.** A typo like `&nbps;` is not a known name, so the browser prints it
letter by letter (D1-06 bug 3, D1-FF4).

### 6. HTML ignores extra spaces and Enter

You can type ten spaces or five new lines in your code. The browser shows **one** space. This is called
whitespace collapsing. To start a new paragraph you need a new `<p>`, not Enter.

## Code you built today

### Step 1: headings

File: `headings.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen Weekly</title>
</head>
<body>
  <h1>TSI Canteen Weekly</h1>
  <h2>This week's menu</h2>
  <h3>Sunday</h3>
  <p>Chicken momo and milk tea.</p>
  <h3>Monday</h3>
  <p>Veg chowmein and lemon tea.</p>
  <h2>News</h2>
  <p>Didi has a new tea machine.</p>
</body>
</html>
```

**Predict:** if you change the second `<h2>` to `<h5>`, will the browser complain? (No. That is why it is an R bug.)

### Step 2: strong, em, br, hr

File: `tone.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tone of voice · TSI Canteen</title>
</head>
<body>
  <h1>Canteen notice</h1>
  <p>The canteen closes at <strong>4 pm sharp</strong> on Thursday.</p>
  <p>I said <em>Thursday</em>, not Friday.</p>
  <hr>
  <h2>Find us</h2>
  <p>TSI Canteen<br>
     Ground floor, Dillibazar<br>
     Kathmandu</p>
</body>
</html>
```

- `<br>` keeps the address as one thought on three lines.
- `<hr>` marks the change of topic.

### Step 3: blockquote, q and span

File: `quotes.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Didi says · TSI Canteen</title>
</head>
<body>
  <h1>Didi's words of wisdom</h1>
  <blockquote>
    <p>A good momo needs three things: fresh flour, patience, and a hungry student.</p>
  </blockquote>
  <p>Aarav asked for the recipe. Didi just said <q>come early tomorrow</q>.</p>
  <p>Today's price: <span class="price">Rs. 150</span> a plate.</p>
</body>
</html>
```

- `<span>` changes nothing you can see today. On Day 2, CSS will colour every `.price`.

### Step 4: entities

File: `entities.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Entities · TSI Canteen</title>
</head>
<body>
  <h1>HTML lesson in the canteen</h1>
  <p>Wrap text in &lt;p&gt; tags to make a paragraph.</p>
  <p>Momo &amp; tea: Rs.&nbsp;150</p>
  <p>Sunday &rarr; Thursday, we cook with &hearts;</p>
  <p>&copy; 2026 TSI Canteen</p>
</body>
</html>
```

**Predict:** what will the first paragraph show if you write `<p>` instead of `&lt;p&gt;`?
(Try it. The word disappears, because the browser starts a new paragraph instead. That is D1-06 bug 2.)

### Step 5: Grandmother's note (D1-05 style)

Plain text in, meaning out:

File: `grandmother.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A note from Grandmother</title>
</head>
<body>
  <h1>A note from Grandmother</h1>
  <p>Dear Aarav,<br>
     I hope Kathmandu is treating you well.</p>
  <p>Please <strong>eat proper food</strong>, not only momo from the canteen.</p>
  <p>And call your mother on <em>Saturday</em>, not Sunday.</p>
  <blockquote>
    <p>Work hard, sleep early, and the city will be kind to you.</p>
  </blockquote>
</body>
</html>
```

## Quick reference

| You want... | Write |
|---|---|
| Main title | `<h1>…</h1>` (once) |
| Section title | `<h2>…</h2>`, then `<h3>` inside it |
| Important | `<strong>…</strong>` |
| Stressed word | `<em>…</em>` |
| Line break in one thought | `<br>` |
| Topic change | `<hr>` |
| Long quote | `<blockquote><p>…</p></blockquote>` |
| Short quote | `<q>…</q>` |
| Label a few words | `<span class="…">…</span>` |
| `<` `>` `&` © space → ♥ | `&lt;` `&gt;` `&amp;` `&copy;` `&nbsp;` `&rarr;` `&hearts;` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| Two main titles on one page | Two `<h1>` (D1-06 bug 1) — R | Keep one h1; the other becomes h2 |
| "Wrap text in tags": the word `<p>` vanished | The browser read `<p>` as a real tag (D1-06 bug 2) | `&lt;p&gt;` |
| `Rs.&nbps;150` printed literally | Typo in the entity name (D1-06 bug 3, D1-FF4) | `&nbsp;` |
| The rest of the page is indented | `<blockquote>` closed with `</quote>` (D1-06 bug 4) | `</blockquote>` |
| Everything after one word is italic | `<em>` never closed (D1-06 bug 5) | Add `</em>` |
| h2 then h5 | Heading jump (D1-FF5 bug 3, D1-15 bug 6) — R | Use the next level only |
| A sentence in `<h4>` just to make it bold | Heading used for looks (D1-FF5 bug 4) — R | `<p><strong>…</strong></p>` |
| `<br><br><br>` for space | br used for layout (D1-FF5 bug 5) | Two `<p>` elements |
| The divider line is missing | `</hr>` is not a tag (D1-FF5 bug 6) | `<hr>` |

## Check yourself

1. Why only one `<h1>` per page? Who reads the headings besides you?
2. Is h1 → h2 → h4 correct? What rule does it break? Which tool will tell you? (Careful.)
3. `strong` and `b` both look bold. What is the difference?
4. When should you use `<br>`? When should you **not** use it?
5. Write the entities for `<`, `&`, © and a non-breaking space.
6. **Predict:** what does the browser show for `<p>5 &lt; 10 &amp;&amp; 10 &gt; 5</p>`?
7. Why does `Rs.&nbsp;150` matter on a phone screen?
8. Explain the "tone of voice" idea to a friend, with `strong` and `em` as examples.

## Try it

- **D1-05 Grandmother's note**: turn a plain 4-sentence note into HTML with strong, em, br, blockquote.
- **D1-06 Canteen News**: 5 bugs in "TSI Canteen Weekly".
- **D1-FF1 Entity art** (fast finishers): a price board and a paragraph that shows `<p>` literally.
- **D1-FF5 Notice Board**: bugs 3–6 are text bugs.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "What is the difference between `<strong>` and `<b>` for a screen-reader user? Give me a one-paragraph answer, no code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [05 · Lists](05-lists.md).*
