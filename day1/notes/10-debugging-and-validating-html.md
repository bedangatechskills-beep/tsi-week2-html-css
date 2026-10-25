# 10 · Debugging and Validating HTML: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Blocks B3 (spell-checker) + B9 + B10 · Layer: Frontend*

> **Today in one sentence:** The browser never tells you about your mistakes, so you need tools that do.

## The picture to keep in your head

Browsers are **polite guessers** (they never show an error, they guess). HTMLHint = **spell-checker for HTML**.

- A polite guest at dinner never says "this food is too salty". They smile and eat. You never learn.
- The browser is that guest. Your HTML can be broken in ten places and it still smiles and shows *something*.
- A **spell-checker** underlines mistakes as you type. HTMLHint does that for HTML, inside VS Code.
- And in the capstone you are the **repair crew**: Didi's Momo House website broke the night before opening.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Bug | A mistake in code that makes it do the wrong thing | `<titel>` instead of `<title>` |
| Debugging | Finding and fixing bugs, step by step | eyes → HTMLHint → F12 |
| Silent bug | A bug you cannot see on the page | a missing `lang` |
| HTMLHint | A VS Code extension that underlines HTML mistakes | red squiggle under `<h1>` |
| `.htmlhintrc` | The file with the list of rules HTMLHint checks. The class one is in the `W2D1` folder | `"alt-require": true` |
| Problems panel | The list of every HTMLHint message (Ctrl+Shift+M) | "Tag must be paired" |
| Elements panel | F12 tab that shows the page the browser **built** (the DOM) | the boxes inside boxes |
| DOM | Document Object Model: the browser's own tree of boxes, built from your HTML | what Elements shows |
| View Source | The text you wrote, before the browser fixed anything | Ctrl+U |
| Validator | A website that checks your HTML against the official rules | validator.w3.org |
| Reveal | After every hunt, the instructor shows each bug and how you could see it | `solution/BUGS.md` |

## The bug tags (legend)

Every bug in class, homework and these notes carries one of these tags:

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint with the class `.htmlhintrc` |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(URL)** | Submit the form (`method="get"`) and read the address bar | the URL bar |
| **D(LH)** | Lighthouse → Accessibility report (works offline) | Chrome DevTools, Day 2 only |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **H** | Hidden on Windows, breaks on a real Linux server (file-name case) | explained by the instructor |
| **R** | **Rule check**: no tool fires; you must read the code against the rule (e.g. "one h1", "no heading jumps") | your brain + the notes |

## How it works

### 1. The debugging routine (use it on every page)

```text
1. EYES      Open with Live Server. Does it look right? Click every link. Click every label.   → V
2. HTMLHINT  Ctrl+Shift+M. Read each message, top to bottom. Fix the FIRST one first.          → D(HH)
3. F12       Elements panel: open the boxes. Does the tree match what you meant?               → D(F12)
             Network panel: any red 404 rows?                                                  → V
4. URL       Forms: submit with method="get" and read every name=value pair.                  → D(URL)
5. RULES     Read against the rules: one h1? no heading jumps? every img has alt?             → R
6. W3C       With Wi-Fi: validator.w3.org → "Validate by File Upload".                         → D(W3C)
```

**Fix the first error first.** One unclosed tag can cause five more messages below it. Fix one, save, look again.

### 2. HTMLHint: your spell-checker

The class `.htmlhintrc` switches on 12 rules:

| Rule | What it catches | Class bug |
|---|---|---|
| `doctype-first` | No `<!DOCTYPE html>` on the first line | D1-04 bug 1, D1-HW4 bug 1 |
| `html-lang-require` | `<html>` with no `lang` | D1-04 bug 2 |
| `title-require` | No `<title>` in the head | D1-04 bug 3 |
| `tag-pair` | An opening tag with no closing tag, or crossed tags | D1-04 bugs 4–5, D1-06 bugs 4–5, D1-FF5 bug 8 |
| `alt-require` | `<img>` with no `alt` | D1-15 bug 2, D1-FF4, D1-HW4 bug 4 |
| `id-unique` | The same `id` twice | D1-FF4 |
| `tagname-lowercase` | `<P>` instead of `<p>` | — |
| `attr-lowercase` | `SRC=` instead of `src=` | — |
| `attr-value-double-quotes` | `href='x'` or `href=x` | — |
| `attr-no-duplication` | the same attribute twice on one tag | — |
| `src-not-empty` | `src=""` | — |
| `spec-char-escape` | a raw `<` or `>` in text | D1-06 bug 2 (sometimes) |

Messages look like this in the Problems panel:

```text
⚠ Tag must be paired, missing: [ </h1> ], start tag match failed [ <h1> ] on line 9.   htmlhint(tag-pair)  [Ln 9, Col 3]
⚠ An alt attribute must be present on <img> elements.                                    htmlhint(alt-require) [Ln 12, Col 3]
```

Click a message and VS Code jumps to that line.

**What HTMLHint does NOT catch** (so these are **R**): two `<h1>`s, heading jumps, `<b>` instead of `<strong>`,
a heading used only for bold, a nav without links. Tomorrow, Lighthouse catches some of these.

### 3. View Source vs Elements: before and after the guess

- **View Source (Ctrl+U)** = exactly what you wrote.
- **Elements (F12)** = what the browser built after guessing and repairing.

When they are different, you have found a silent bug. The table below lists the repairs Chrome makes.

### 4. The browser repair table

Every row below was tested in Chrome. "You wrote" is in View Source. "Chrome built" is what the Elements panel shows.

| Bug type | You wrote | Chrome built (Elements panel) | What you see | Class bug |
|---|---|---|---|---|
| Orphan `<td>` (no `<tr>`) | `<table><td>Steam</td><td>150</td></table>` | `<table><tbody><tr><td>Steam</td>…` — **an invented `<tr>`** (and `<tbody>`) | Looks fine | D1-FF5 bug 12, D1-HW4 bug 5 |
| Text between rows | `</tr>Tea break 3:00<tr>` | The text is **moved above the table** | Text floats over the table | D1-11 bug 5 |
| Misnested inline tags | `<p>I live in <strong>Kathmandu</p><p>Next</p></strong>` | `<p>I live in <strong>Kathmandu</strong></p><p><strong>Next</strong></p>` — **closed and re-opened** ("reconstructed") | The next paragraph turns bold too | D1-04 bug 5 |
| Unclosed `<a>`, then another `<a>` | `<a href="a.html">Home<a href="b.html">Menu</a>` | `<a …>Home</a><a …>Menu</a>` — **closed by the next `<a>`** | Looks fine (silent) | D1-15 bug 3 (why it must be the last link) |
| Unclosed **last** `<a>` | `…<a href="b.html">Menu</nav><h1>Hi</h1>` | `<h1><a href="b.html">Hi</a></h1>` — the link is **re-opened** in every following block | The `<h1>` and more become a link | D1-15 bug 3 |
| A second `<head>` | `<title>T</title><head><meta …></head>` | **The second `<head>` tag is ignored**; its `<meta>` joins the first head | Looks fine | D1-FF5 bug 1 |
| Content after `</html>` | `</body></html><p>Contact Didi</p>` | `<p>Contact Didi</p>` **moved into `<body>`** | Looks fine | D1-FF5 bug 2 |
| Unclosed `<title>` | `<title>Kathmandu Treks</head><body><h1>…` | The **whole rest of the file becomes the title text**; `<body>` is empty | A blank page | D1-HW1 bug 1 |
| `<textarea />` | `<textarea name="n" /><button>Send</button></form>` | `/>` is ignored; **the rest of the file becomes text inside the box** | Code shows inside the box; the button is gone | D1-13 bug 5, D1-15 bug 8 |
| Unclosed comment `->` | `<!-- note -> <footer>…</footer></body></html>` | **Everything after it is inside the comment** | The footer and the rest disappear | D1-04 bug 6 |
| Unknown tag `<titel>` in the head | `<head><titel>Aarav's Page</titel></head>` | `<titel>` is **moved into `<body>`**; the page has no title | The tab shows the file path; the words show on the page | D1-04 bug 3 |
| `<title>` inside `<body>` | `<body><title>Inside body</title>` | It stays in the body but is hidden; **the tab still uses it** | Looks fine (that is the lesson) | D1-HW4 bug 2 |
| `<ul>` inside `<p>` | `<p>Intro<ul><li>a</li></ul></p>` | `<p>Intro</p><ul>…</ul><p></p>` — **the `p` closes early**, plus an empty `p` | Looks almost fine | D1-FF4 |
| `<h1>` inside `<p>` | `<p>One<h1>Big</h1></p>` | `<p>One</p><h1>Big</h1><p></p>` — **the `p` closes early** | Looks almost fine | D1-FF4 |
| `<a>` inside `<a>` | `<a href="x.html">Out<a href="y.html">In</a></a>` | Two links side by side: **the outer `<a>` is closed** | Two links, not one | D1-FF4 |
| `</hr>` | `<p>a</p></hr><p>b</p>` | **Ignored** (no `<hr>` is made) | The divider is missing | D1-FF5 bug 6 |
| `</quote>` for a blockquote | `<blockquote>q</quote><p>after</p>` | `</quote>` ignored; **the blockquote stays open** to the end | The rest of the page is indented | D1-06 bug 4 |
| Entity typo `&nbps;` | `Rs.&nbps;150` | Printed **letter by letter** | `Rs.&nbps;150` on the page | D1-06 bug 3 |
| No `<!DOCTYPE html>` | `<html><head>…` | The page runs in **quirks mode** (`document.compatMode` = `BackCompat`) | Small layout differences; CSS on Day 2 behaves oddly | D1-04 bug 1 |
| What Chrome does **not** repair | `<li>` with no `<ul>`; `<li>` in a `<div>`; a `<ul>` placed after `</li>`; text directly in `<ul>` | **Left exactly as written** (invalid, but kept) | The text still shows, so it looks almost right (a lone `<li>` loses its indent and its bullet) | D1-07 bug 1, D1-FF5 bugs 7 and 9, D1-HW1 bug 4 |

The big lesson: **"it looks fine" does not mean "it is fine".** Google, screen readers and your future
JavaScript read the built tree, not your intentions.

### 5. The W3C validator (Wi-Fi bonus)

1. Go to **validator.w3.org**.
2. Choose **Validate by File Upload** and pick your `index.html` (or paste it under **Validate by Direct Input**).
3. Read each **Error** from the top. Fix the first, save, upload again.

It catches some things HTMLHint cannot: a `<caption>` in the wrong place (D1-HW4 bug 6), content after
`</html>`, a `<header>` inside `<footer>` (Day 2).

### 6. The capstone relay rules (D1-15)

- Pairs. One **driver** types; one **navigator** reads the README and points. Swap after every bug.
- 10 bugs across 4 pages (3 / 3 / 2 / 2).
- **1 point per bug + 1 bonus point** if you name its tag (V, D(HH), D(F12), R…).
- On `order.html`, fix the `<textarea />` first.
- Finished? Become **helpers** for another pair: you may point, not type. Then move on to the fast finishers.

## Code you built today

### Step 1: before (the B10 demo page, 5 errors)

File: `before.html`
```html broken
<html>
<head>
  <meta charset="UTF-8">
  <titel>Kathmandu Gallery</titel>
</head>
<body>
  <h1>Kathmandu Gallery
  <img src="images/swayambhu.svg" width="400">
  <p>Visit <a href="https://en.wikipedia.org/wiki/Swayambhunath">Swayambhu</a>.</p>
  <img src="images/boudha.svg" alt="Boudha stupa with prayer flags" width="400">
</body>
</html>
```

**Predict:** how many messages will the Problems panel show? Write your guess, then press Ctrl+Shift+M.
(The errors: no DOCTYPE, no `lang`, `<titel>` so no title, an unclosed `<h1>`, an `<img>` with no `alt`.)

### Step 2: after (zero problems)

File: `after.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kathmandu Gallery</title>
</head>
<body>
  <h1>Kathmandu Gallery</h1>
  <img src="images/swayambhu.svg" alt="Swayambhu stupa on its hill above Kathmandu" width="400">
  <p>Visit <a href="https://en.wikipedia.org/wiki/Swayambhunath">Swayambhu</a>.</p>
  <img src="images/boudha.svg" alt="Boudha stupa with prayer flags" width="400">
</body>
</html>
```

### Step 3: see a repair with your own eyes

Type this broken table, open it, and compare **View Source** with **F12 → Elements**.

File: `repair.html`
```html broken
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Repair test</title>
</head>
<body>
  <h1>Repair test</h1>
  <table>
    <tr><td>Steam</td><td>Rs. 150</td></tr>
    Tea break 3:00
    <tr><td>Fried</td><td>Rs. 180</td></tr>
  </table>
  <p>I live in <strong>Kathmandu</p>
  <p>Where is the bold?</p>
</body>
</html>
```

**Predict:** where will "Tea break 3:00" appear? Will "Where is the bold?" be bold? Then check in Elements:
find the `<strong>` that Chrome added on its own.

### Step 4: the self-audit checklist (D1-16)

Run this on your own D1-10 gallery folder. Tick each line only when it is true.

```text
[ ] Line 1 is <!DOCTYPE html>
[ ] <html lang="en">
[ ] <meta charset="UTF-8"> and the viewport meta are in the head
[ ] A real <title> (not "Document")
[ ] Exactly one <h1>; no heading jumps
[ ] Every <img> has a real alt (or alt="" for decoration)
[ ] Every link works: click each one; external links start with https://
[ ] File and folder names are lowercase, no spaces
[ ] The Problems panel (Ctrl+Shift+M) says "No problems"
[ ] Bonus with Wi-Fi: the W3C validator shows no errors
```

## Quick reference

| You want to... | Do this |
|---|---|
| See HTMLHint messages | Ctrl+Shift+M |
| See what the browser built | F12 → Elements (click the ▶ arrows) |
| See exactly what you wrote | Ctrl+U |
| Find a broken path | F12 → Network → F5 → red 404 rows |
| Check a form | Submit with `method="get"`, read the URL |
| Official check | validator.w3.org → Validate by File Upload |
| Fix messy nesting | Shift+Alt+F, then look at the indentation |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| "It looks fine, so it's done" | The browser repaired it silently (the repair table above) | Always do steps 2 and 3 of the routine |
| 20 messages and you panic | One unclosed tag causes many messages below it (D1-04 bug 4) | Fix the first message, save, look again |
| No squiggles at all | HTMLHint not installed, or you opened a file, not the `W2D1` folder | Install it; File → Open Folder |
| You fix the page by deleting the broken part | That removes the content Didi needs | Repair, don't delete |
| Blank page, nothing in Elements | An unclosed `<title>` swallowed the page (D1-HW1 bug 1) | Close `</title>` first |
| The form looks short and code shows in a box | `<textarea />` swallowed the rest (D1-13 bug 5, D1-15 bug 8) | Fix the textarea first |
| HTMLHint is quiet but a heading is wrong | Heading rules are **R**: no tool checks them (D1-06 bug 1, D1-15 bug 6) | Read against the rule |

## Check yourself

1. Why do we call browsers "polite guessers"? Give one example of a guess.
2. What is the difference between View Source and the Elements panel?
3. Name three things HTMLHint catches and two it does not.
4. What does the browser do with text written between two `<tr>`s?
5. What does the browser do with an unclosed `<a>` when the next tag is another `<a>`? And when it is the last link?
6. Why should you fix the first HTMLHint message first?
7. Which tag would you give "two `<h1>` on one page"? Why that tag?
8. Explain to a friend why "it looks fine" is not enough, in three sentences.

## Try it

- **D1-04 Broken Skeleton**: the first hunt with HTMLHint + F12.
- **D1-15 Momo House repair** (pairs): 10 bugs across 4 pages. Name the tag for a bonus point.
- **D1-16 Validate & self-audit**: the checklist above on your own D1-10 folder.
- **D1-FF4 Evil page**: 8 "the browser hides it" bugs. Use the repair table.
- **D1-FF5 Notice Board**: 12 bugs of every kind.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Debug with AI only **after** you tried the
routine yourself. Example prompt:

> "In View Source my page has `<p>I live in <strong>Kathmandu</p>`, but the Elements panel shows an extra `<strong>` in the next paragraph. Why did Chrome add it? Explain the rule, don't fix my file."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [11 · Day 1 cheatsheet](11-day1-cheatsheet.md).*
