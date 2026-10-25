# D2-HW3 · Self-Check & Interview Prep: Semantic HTML, Accessibility, Media → CSS Basics
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 2 · Layer: Frontend · about 20 minutes*

**Mode:** Theory + coding, because interviewers ask semantic and CSS questions viva-style ("What is the box model?", "id vs class?") and then hand you a small "style this card" or "why is this CSS not working?" task.

**How to use this sheet**
1. **Part 1** checks your memory. Answer without the notes, then mark ✔ / ~ / ✘.
2. **Part 2**: say the theory answers **out loud** (20–40 seconds each). Write the code answers, then **check them in the browser** with F12 → Styles and Computed.
3. Your instructor shares the answer key after you try.

---

## How you'll be asked about this

- **Written / MCQ test:** "Which property adds space *inside* the border?", "Which selector has the highest specificity?", "Which tag is for the main content?"
- **Viva round:** "What is semantic HTML?", "What is the box model?", "Difference between `class` and `id`?", "Inline, block and inline-block?", "Three ways to add CSS?"
- **Machine test / take-home:** "Style this profile card", "Make this nav horizontal", "Fix this page so Lighthouse accessibility is above 90".
- **What they are really checking:** that you can *debug* CSS (find why a rule is ignored), not only write it. Saying "I inspected it and the rule was crossed out because…" wins interviews.

## Topic map

| Sub-topic | Why interviewers care | Questions |
|---|---|---|
| Semantic HTML5 | SEO, accessibility, readable code | S1, S2, T1, T2 |
| Accessibility and meta | Many companies now test it | S3, S4, T3 |
| Audio, video, iframe | Common on real sites | S5 |
| CSS rule and 3 ways to add CSS | The basics of every stylesheet | S6, T4, C4 |
| Selectors and specificity | "Why is my style not applied?" | S7, T5, T6, C1 |
| Colours, units, fonts | Valid values, `rem` | S8, C3 |
| Box model | The #1 CSS interview question | S9, T7, C2 |
| Display | Nav bars, hiding things | S10, T8, C5 |
| Debugging CSS / Bootstrap | Junior speed | T9 |

---

## Part 1: Self-check (10 questions)

**S1.** Name the semantic tag for: the top of the page, the menu of links, the main content, a blog post that makes sense on its own, a side box, the bottom of the page.

**S2.** Why is `<div class="btn">Subscribe</div>` a bad button? Give one thing you can test with your keyboard.

**S3.** Write a good `alt` for a photo of the TSI building, and the right `alt` for a decorative dhaka pattern strip.

**S4.** Name **three** things in the `<head>` that help a phone, a search engine or a screen reader.

**S5.** An `<audio>` tag shows nothing on the page. What attribute is missing? And what does a video's `poster` do?

**S6.** Inline style, a `<style>` block, and `<link rel="stylesheet">`. Which one is the **school uniform**, and why is it the best for a 4-page site?

**S7.** Write a selector for each: every `<p>`; everything with class `veg`; the element with id `todays-special`; only links inside `nav`; an element that has **both** classes `dish` and `spicy`.

**S8.** What is the difference between `px` and `rem`? Why do we give `font-family` a fallback?

**S9.** Draw (or describe) the box model from the inside out. Use the parcel words.

**S10.** What is the difference between `display: none` and `visibility: hidden`?

*At the bottom of this file, write: `My ✘ topics: ____________`*

---

## Part 2: Interview questions (14 questions)

### Theory (say it out loud)

**T1. (Warm-up)** What is semantic HTML? Why does it matter?

**T2. (Warm-up)** When should you use `<section>` and when `<article>`? Can a page have two `<main>` elements?

**T3. (Core)** What does Lighthouse's Accessibility report check? Name four things that lower the score.

**T4. (Core)** What are the three ways to add CSS to a page? Which one wins if all three set the colour of the same `<h1>`?

**T5. (Core)** What is the difference between a `class` and an `id`? When would you use each?

**T6. (Core)** What is specificity? Rank these from weakest to strongest: `#menu`, `p`, `.price`.

**T7. (Core)** Explain the box model. What does `box-sizing: border-box` change?

**T8. (Core)** What is the difference between `block`, `inline` and `inline-block`? Why does `margin-top` do nothing on a link?

**T9. (Stretch)** "My CSS is not working." Walk me through how you would debug it, step by step.

### Code (write it, then check it in the browser)

**C1. Predict the colour.** What colour is "Rs. 150"? Why? Would the answer change if `.price` came last in the file?
```html
<p id="special" class="price">Rs. 150</p>
```
```css
#special { color: green; }
.price   { color: red; }
p        { color: blue; }
```

**C2. Predict the width.** How wide is the card on screen (from the left edge of its border to the right edge)? And with `box-sizing: border-box`?
```css
.card {
  width: 300px;
  padding: 20px;
  border: 5px solid #14213D;
  margin: 10px;
}
```

**C3. Find the bugs.** Four mistakes. For each one, say what the browser does with it.
```css broken
h1 { color: #gg0000; font-size: 1.5 rem }
.card { padding: 20; border: 2px orange; }
```

**C4. Find the bugs.** Sunita says: "None of my CSS works, and the card class is ignored too." Find three problems.
```html broken
<head>
  <link rel="stylsheet" href="css/styles.css">
</head>
<body>
  <div class="Card">Sunita Gurung</div>
</body>
```
The file on disk is `css/style.css`, and it contains `.card { border: 2px solid #990011; }`.

**C5. Write it (5–10 minutes).** Turn this list into a horizontal nav bar: no bullets, links side by side, each link with `10px 16px` padding, navy `#14213D` background, white text, and a cherry `#990011` background on hover. Don't change the HTML.
```html
<nav>
  <ul class="menu">
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="order.html">Order</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
</nav>
```

---

## Talk about your project

- "In your portfolio (D2-HW2), why did you use one external stylesheet for every page?"
- "Show me one element in DevTools and explain its box: content, padding, border, margin."
- "What was your Lighthouse accessibility score? What did you change to raise it?"

## Coming later: you may still be asked

- **Flexbox and grid** ("How do you centre a div?"): sessions 3 / 3.2. Today's answer: `margin: 0 auto` with a width.
- **Positioning** (`relative`, `absolute`, `fixed`) and **media queries** (responsive design): sessions 3 / 3.2.
- **Bootstrap grid** (`row`, `col-md-6`): session 3.3.

---
*Remember the One Rule: you may only ship code you can explain, line by line.*

My ✘ topics: ____________
