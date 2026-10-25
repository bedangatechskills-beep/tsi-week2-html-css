# D2-HW3 · Answer Key: Semantic HTML, Accessibility, Media → CSS Basics
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 2 · Instructor copy (share after students try)*

*Try every question before you read this. Say your answer out loud first; interviews are spoken.*

Every CSS answer below was checked in Chrome with `getComputedStyle` and `offsetWidth` (headless, October 2026).

---

## Part 1: Self-check answers

**S1.** Top of the page → `<header>`. Menu of links → `<nav>`. Main content → `<main>` (only one). A post that makes sense on its own → `<article>`. Side box → `<aside>`. Bottom → `<footer>`. These are **boxes with names**, like rooms in a house: kitchen and bedroom, not "room 1, room 2".

**S2.** A `<div>` is not a button to the browser. The **Tab key skips it**, Enter does nothing, and a screen reader doesn't say "button". Test: press Tab through the page; the div never gets the focus ring. Use `<button>`. See D2-02 bug 5.

**S3.** TSI building: `alt="The Tech Skills Institute building in Dillibazar, Kathmandu"`. Decorative strip: `alt=""` (empty), so screen readers skip it. See D2-03 bugs 3 and 4.

**S4.** Any three: `<html lang="en">` (the reader picks the right voice), `<meta charset="UTF-8">`, `<meta name="viewport" …>` (phones), a descriptive `<title>` (tab, search result), `<meta name="description" …>` (the search result snippet), a favicon `<link rel="icon">`.

**S5.** `controls` is missing; without it the audio player is invisible. `poster` is the picture shown in the video box **before** the video plays. See D2-04 bugs 1 and 4.

**S6.** `<link rel="stylesheet" href="css/style.css">` is the **school uniform**: one file dresses every page. Change one line, and all 4 pages change. Inline style = a sticky note on one shirt; `<style>` = an outfit list for one person.

**S7.** `p` · `.veg` · `#todays-special` · `nav a` · `.dish.spicy` (no space). These are the D2-09 targets.

**S8.** `px` is a fixed size on screen. `rem` is relative to the root (`html`) font size, usually 16px, so `1.5rem` = 24px, and it grows if the visitor sets a bigger default font. A fallback (`"Momo Sans", Arial, sans-serif`) is used when the first font is not on the visitor's computer; without it, the browser falls back to its default, usually Times. See D2-10 bug 4.

**S9.** Parcels being shipped, from the inside out: **content** (the item) → **padding** (bubble wrap) → **border** (the cardboard box) → **margin** (the gap between parcels).

**S10.** `display: none` removes the element completely: it takes **no space** ("left the room"). `visibility: hidden` makes it invisible but it **still takes its space**, so you see an empty gap. See D2-HW4 bug 10.

---

## Part 2: Interview answer key

### T1. What is semantic HTML?
**Say this:** "Semantic HTML means using tags that say what the content *is*: `header`, `nav`, `main`, `article`, `footer`, instead of `div` for everything. It's like rooms in a house with names: kitchen, bedroom. Google, screen readers and even AI tools read those names. It doesn't change how the page looks; CSS does that. It changes what the page *means*."
**They're checking:** that you know semantics ≠ styling.
**Weak answer:** "HTML5 tags that look better." (They look the same as divs.)
**Likely follow-up:** "Is `<div>` bad, then?" → "No, a div is an unlabeled box. It's fine for grouping things only for styling, when no semantic tag fits."

### T2. `<section>` vs `<article>`; two `<main>`s?
**Say this:** "An `<article>` makes sense on its own: you could post it somewhere else, like one blog post or one news item. A `<section>` is a part of a page about one topic, and it should have a heading. And no: a page has exactly one visible `<main>`, the main content. Two `<main>`s is invalid; the W3C validator reports it."
**They're checking:** when *not* to use a tag (D2-02).
**Weak answer:** "They're the same."
**Likely follow-up:** "What goes in `<aside>`?" → "Related but not main content: a 'related posts' box, a sidebar, an ad."

### T3. What does Lighthouse Accessibility check?
**Say this:** "It runs automatic checks in Chrome DevTools, even offline, and scores out of 100. Four things that lower it: images without `alt`, inputs without a `<label>`, links with no text at all (an icon with no name), a missing `lang` on `<html>`. Also low colour contrast, headings out of order, and an iframe without a `title`. Vague text like 'click here' is NOT caught: a human must read the links. I aim for 90 or more, and then I also do a Tab-key walk, because a tool can't check everything."
**They're checking:** practical a11y experience.
**Weak answer:** "It checks if the site is fast." (That's the Performance report.)
**Likely follow-up:** "What can't Lighthouse catch?" → "Whether an alt text is actually *good*, or a fake div button that has a role; a human must check those."

### T4. Three ways to add CSS; which wins?
**Say this:** "Inline with the `style` attribute (a sticky note on one shirt), internal in a `<style>` block (an outfit list for one person), and external with `<link rel="stylesheet">` (the school uniform, best for many pages). If all three set the same property with the same selector strength, inline wins, because it is the most specific. Between the `<style>` block and the linked file, the one that comes **later** in the page wins: last rule wins."
**They're checking:** the cascade, not only the list.
**Weak answer:** "External is always applied first." (It's about order and specificity, not type.)
**Likely follow-up:** "Why avoid inline styles?" → "You can't reuse them, they are hard to override, and they mix outfit into skeleton."

### T5. `class` vs `id`?
**Say this:** "Calling students in class: a class is 'red team', many elements can share it, and one element can have several classes. An id is 'Aarav, by name': unique, one per page. I use classes for styling, almost always, and an id for one special thing, like a `#top` anchor or a label's `for`. In CSS, `.` means class and `#` means id. Both are case-sensitive: `Card` is not `card`."
**They're checking:** uniqueness and reuse.
**Weak answer:** "id is for JavaScript, class is for CSS." (Partly true in practice, but not the definition.)
**Likely follow-up:** "Can two elements have the same id?" → "They shouldn't; it's invalid, and HTMLHint's `id-unique` flags it."

### T6. Specificity
**Say this:** "Specificity is how the browser picks a winner when two rules set the same property on the same element. An id beats a class, and a class beats an element. So from weakest to strongest: `p`, then `.price`, then `#menu`. Only if they are equal does the later rule win."
**They're checking:** you can predict CSS instead of guessing.
**Weak answer:** "The last rule always wins." (Only when specificity is equal; see C1.)
**Likely follow-up:** "How do you see who won?" → "Inspect → Styles: the losing declaration is crossed out."

### T7. The box model; `border-box`
**Say this:** "Every element is a parcel being shipped: the content is the item, padding is the bubble wrap, border is the cardboard, margin is the gap between parcels. By default, `width` is only the content, so padding and border are **added** on top: `width: 300px` with 20px padding and a 5px border is 350px on screen. With `box-sizing: border-box`, the width *includes* padding and border, so it stays 300px, which is much easier to plan. Margin is never inside the width."
**They're checking:** the arithmetic. It's the #1 CSS interview question.
**Weak answer:** listing the four words without the maths.
**Likely follow-up:** "How do you centre a block?" → "Give it a width and `margin: 0 auto`."

### T8. block / inline / inline-block
**Say this:** "The queue vs the bench. A **block** element stands in a queue: each one on its own line, full width, like `div`, `p`, `h1`. **Inline** elements sit side by side on a bench, like `a`, `span`, `strong`; they take only the space of their text, and you can't push them up or down: vertical margin is ignored, and vertical padding just overlaps the neighbours. **Inline-block** sits on the bench but keeps its own size, so width, height and vertical margin work. That's why a nav uses `inline-block` links."
**They're checking:** why layouts behave as they do.
**Weak answer:** "Inline is small, block is big."
**Likely follow-up:** "How do you remove the bullets from a nav list?" → "`list-style: none` on the `ul`."

### T9. "My CSS is not working." How do you debug?
**Say this:** "Step by step. One: is the stylesheet loading? I check F12 → Network or Sources; a 404 or a typo in `rel` means nothing loads. Two: does my selector match? I inspect the element: if my rule is not in the Styles panel at all, the selector is wrong, maybe a missing dot or a case mismatch like `Card` vs `card`. Three: is my declaration crossed out? Then another rule won, by specificity or by coming later. Four: does it have a ⚠ warning? Then the value is invalid, like `20` with no unit, and the browser dropped it. Five: is a missing `}` or a `//` comment swallowing my rule? I look just above it."
**They're checking:** a method, not luck. This answer alone impresses many interviewers.
**Weak answer:** "I add `!important`." (It hides the real problem.)
**Likely follow-up:** "When is `!important` OK?" → "Almost never in your own code; it's a last resort that makes the next bug harder."

### C1. Predict the colour
**Output:** **green** (`rgb(0, 128, 0)`, checked in Chrome).
**Why:** all three rules match the same `<p>`. `#special` is an id, the strongest, so it wins. Moving `.price` to the end changes **nothing**: "last rule wins" only applies when specificity is equal. In DevTools, `.price` and `p` are crossed out.

### C2. Predict the width
**Output:** **350px** without `border-box` (300 content + 2 × 20 padding + 2 × 5 border). **300px** with `box-sizing: border-box` (Chrome `offsetWidth`: 350 and 300). The 10px margin is outside the border in both cases, so the card takes 370px of room in its row without `border-box`.
**Why:** by default (`content-box`), `width` sets only the content. This is D2-12 bug 1: three 350px cards in a 960px row don't fit, so the third wraps. (The D2-12 cards are `display: inline-block`, note 08; block boxes would stack anyway.)

### C3. Find the four bugs
1. `#gg0000`: `g` is not a hex digit (0–9, a–f). The declaration is **dropped**, so the colour stays the default (Chrome: `rgb(0, 0, 0)`). Fix e.g. `#990011`. (D2-10 bug 2)
2. `1.5 rem`: a space between the number and the unit makes it invalid; **dropped** (Chrome kept the default 32px for `h1`). Fix `1.5rem`. (D2-10 bug 3)
3. `padding: 20`: no unit; **dropped** (Chrome: `0px`). Only `0` may be written without a unit. Fix `20px`. (D2-FF4, D2-HW1 bug 7)
4. `border: 2px orange`: no **style** (`solid`, `dashed`…), and the default style is `none`, so there is **no border** (Chrome: `border-style: none`, width `0px`). Fix `2px solid orange`. (D2-12 bug 4)

The missing `;` after `1.5 rem` is not a bug here: the last declaration before `}` may leave it out (it's a good habit to always write it, though).

### C4. "None of my CSS works"
1. `rel="stylsheet"` is a typo, so the browser doesn't treat the link as a stylesheet and loads nothing. Fix `rel="stylesheet"`. (D2-06 bug 1)
2. `href="css/styles.css"` but the file is `style.css`: a 404 (see F12 → Network). Fix `href="css/style.css"`. (D2-06 bug 2)
3. `class="Card"` but the CSS is `.card`. Class names are **case-sensitive**, so the rule doesn't match even after the file loads. Fix `class="card"`. (D2-08 bug 1)

**Fix 1 and 2 first:** until the stylesheet loads, no other CSS bug is visible.

### C5. Horizontal nav, reference solution
File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav>
    <ul class="menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html">Menu</a></li>
      <li><a href="index.html">Order</a></li>
      <li><a href="index.html">About</a></li>
    </ul>
  </nav>
</body>
</html>
```
*(In this test file every link points to `index.html` so the page is self-contained; in the interview, keep the four real file names.)*

File: `css/style.css`
```css
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background: #14213D;
}

.menu li {
  display: inline-block;
}

.menu a {
  display: inline-block;
  padding: 10px 16px;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  background: #990011;
}
```
**Tested with:** html-validate (0 errors) and csstree-validator (0 errors); rendered in Chrome: one navy bar, 4 white links side by side, no bullets.
**What earns full marks:** `list-style: none`; `inline-block` (not `inline`) on the links so the vertical padding takes real space; the hover rule; not touching the HTML; explaining *why* while typing.
**Common ways candidates fail:** forgetting `list-style: none`; `display: inline` on the `a` so the 10px padding overlaps the text above (D2-14 bug 4); writing `.menu-li` instead of `.menu li` (D2-14 bug 5); `a:hoverr` (D2-08 bug 5).

---

## Talk-about-your-project prompts: what a good answer contains
- **One stylesheet:** "School uniform: one file, every page; a change in one place updates all pages; the browser caches it once."
- **One box in DevTools:** names all four layers with real numbers from the Computed box diagram.
- **Lighthouse:** a number, and two concrete fixes (e.g. "added labels to the contact form", "changed 'click here' to 'See the menu'").

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
