# D1-HW3 · Answer Key: How the Web Works + HTML Core
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Instructor copy (share after students try)*

*Try every question before you read this. Say your answer out loud first; interviews are spoken.*

Every code answer below was checked in Chrome (headless `--dump-dom`, October 2026), so the "what the browser built" lines are real, not guessed.

---

## Part 1: Self-check answers

**S1.** DNS = the **phone book**: it turns a name (`momohouse.com.np`) into an address. IP address = the **precise home address** of the server computer (e.g. `142.250.193.14`). Response = the **parcel** the server mails back: the HTML, then the CSS and images, each as its own parcel.

**S2.**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House</title>
</head>
<body>
  <h1>Momo House</h1>
</body>
</html>
```
Full marks need: DOCTYPE, `lang="en"`, `meta charset`, `meta viewport`, `title`, and a body. (The `<h1>` is a bonus.)

**S3.** `<head>` = **the label on the parcel**: information *about* the page (title, charset, viewport, links to CSS). You don't see it on the page. `<body>` = **what's inside the parcel**: everything the visitor sees (headings, text, images, links, tables, forms).

**S4.** The whole thing, `<a href="menu.html">Menu</a>`, is the **element**. `<a …>` and `</a>` are the opening and closing **tags**. `href` is the **attribute**. `"menu.html"` is its **value**. `Menu` is the content.

**S5.** `&lt;p&gt;`. `&lt;` means "print a <, don't start a tag" (an escape code). See D1-06 bug 2.

**S6.** Shopping list → `<ul>` (order doesn't matter). Recipe steps → `<ol>` (order matters: you can't steam before you fold). See D1-07 bug 2.

**S7.** `<a href="../index.html">Home</a>`. `../` = "go downstairs one floor" (out of `pages/`). See D1-09 bug 4.

**S8.** `<img>` is a **void** tag: it has nothing inside it, so it has no closing tag. You stick it on the page, like a sticker; you don't put things in it, like an envelope. `alt` = **the description you read over the phone**: what a screen reader says, and what shows if the picture can't load.

**S9.** **2.** The first column of the next row is already taken by the cell above (it spans 2 rows), so the next row needs only 3 − 1 = 2 cells. If it has 3, one cell sticks out on the right. See D1-11 bug 4.

**S10.** The radios have **different `name`s**, so the browser thinks they are two separate questions. Give them **one shared name** (`name="batch"`). With no `value`, the URL shows `batch=on`, so the kitchen can't tell which one was picked. Add `value="morning"` / `value="evening"`. See D1-13 bugs 3 and 4.

---

## Part 2: Interview answer key

### T1. What happens when you type `momohouse.com.np` and press Enter?
**Say this:** "It works like the postal system. One: the browser asks DNS, the phone book, for the address of `momohouse.com.np`, and gets an IP address. Two: it sends an HTTP request, a letter, to that address. Three: the server, like a warehouse, finds the HTML file and mails it back as a response, a parcel. Four: the browser reads the HTML and sees it needs more parcels, the CSS and the images, so it sends more requests. Five: it builds the page and paints it on screen. I can see every parcel in F12 → Network."
**They're checking:** that you know a page is many request/response pairs, not one magic download.
**Weak answer:** "The website opens." Or a 7-layer OSI lecture with no link to what the browser actually does.
**Likely follow-up:** "What is DNS?" → "The phone book of the internet: it turns a name into an IP address."

### T2. What is `<!DOCTYPE html>` for?
**Say this:** "It is the first line of the page. It tells the browser: this is a modern HTML5 page, use standards mode. Without it, the browser switches to 'quirks mode' and copies old, buggy behaviour from the 1990s, so some sizes and spacing come out wrong. HTMLHint flags it with `doctype-first`."
**They're checking:** that you know it is an instruction to the browser, not an HTML tag.
**Weak answer:** "It is a tag that starts HTML." (It is not an element and has no closing tag.)
**Likely follow-up:** "Is it case-sensitive?" → "No, `<!doctype html>` also works, but we write it the standard way."

### T3. Element vs tag vs attribute?
**Say this:** "Think of labeled boxes. The **tag** is the label: `<p>` opens the box and `</p>` closes it. The **element** is the whole box: opening tag, contents and closing tag together. An **attribute** is extra information written inside the opening tag, as `name="value"`, like `href="menu.html"` on a link or `alt` on an image."
**They're checking:** precise vocabulary. Many juniors use "tag" for everything.
**Weak answer:** "They are all the same thing."
**Likely follow-up:** "Name a tag with no closing tag." → "`<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`: void elements."

### T4. `<strong>` vs `<b>`, `<em>` vs `<i>`?
**Say this:** "It's tone of voice. `<strong>` means 'this matters', and `<em>` means 'stress this word'. They carry meaning: a screen reader can say them with emphasis, and search engines notice them. `<b>` and `<i>` only change the look, bold or italic, with no meaning. So I use `<strong>` and `<em>` when the meaning matters, and I leave pure looks to CSS."
**They're checking:** meaning (semantics) vs appearance.
**Weak answer:** "Both make text bold." True for the look, but it misses the point.
**Likely follow-up:** "Then when is `<b>` OK?" → "For text that should stand out with no extra importance, like a product name in a review. It's rare."

### T5. Absolute vs relative path?
**Say this:** "Same house vs postal address. A relative path is like saying 'the kitchen': it starts from where the page is, e.g. `pages/about.html` or `../index.html`. An absolute URL is the full postal address with `https://`, e.g. `https://www.wikipedia.org`. `C:\Users\Aarav\Desktop\site\index.html` is a path on Aarav's own laptop. It works only on his computer. On the server or on my laptop it's a 404."
**They're checking:** that you can predict where a link goes, which is the #1 broken-site bug.
**Weak answer:** "Absolute is long, relative is short."
**Likely follow-up:** "What happens with `href="www.wikipedia.org"`?" → "Without `https://` the browser treats it as a relative path, a file called `www.wikipedia.org` in my folder, so I get a 404 (D1-09 bug 3)."

### T6. Why alt? When is `alt=""` right?
**Say this:** "`alt` is the description you read over the phone. A blind visitor's screen reader reads it, it shows if the image fails to load, and search engines use it. So 'Plate of 10 steamed chicken momos' is a good alt. If the image is only decoration, like a pattern strip, I write `alt=""` so the screen reader skips it. Leaving `alt` out completely is the bug: then the reader may read the file name."
**They're checking:** accessibility awareness, which more and more companies test.
**Weak answer:** "So the code is valid." (That's a side effect, not the reason.)
**Likely follow-up:** "What would you write for a logo?" → "The company name, e.g. `alt="Momo House"`."

### T7. `name`, `id`, `for` in a form?
**Say this:** "`id` is the input's unique name tag on the page. `for` on a `<label>` points to that `id`, so clicking the label puts the cursor in the box. `name` is the column the kitchen files your answer under: it's what the server sees. When I submit with `method="get"`, the URL shows `name=value` pairs, like `?email=sunita%40mail.com`. No `name`, no data."
**They're checking:** that you understand what actually gets sent.
**Weak answer:** "`id` and `name` are the same."
**Likely follow-up:** "How do you test it without a server?" → "Use `method="get"` and read the address bar after submitting."

### T8. "The browser never shows an HTML error"?
**Say this:** "True: browsers are polite guessers. They never complain, they guess and carry on, so a mistake can look fine. To find mistakes I use: one, HTMLHint in VS Code with the Problems panel, `Ctrl+Shift+M`, my spell-checker for HTML; two, F12 → Elements, to see what the browser actually built; three, the W3C validator at validator.w3.org. For forms, I also submit and read the URL."
**They're checking:** debugging habits. A junior who can find their own bugs saves the team time.
**Weak answer:** "I look at the page carefully."
**Likely follow-up:** "Give an example where Elements shows a hidden mistake." → "Three `<li>` with no `<ul>`: the text still shows, only the indent and bullets are gone, and Elements shows no list around them."

### C1. Find three problems
**Any three of these five:**
1. No `<!DOCTYPE html>` on line 1 → quirks mode. **D(HH)** doctype-first.
2. `<html>` has no `lang="en"`. **D(HH)** html-lang-require.
3. `<titel>` is a typo for `<title>`. The tab shows the file path, and "Aarav's Page" appears **on the page**: Chrome moved the unknown `<titel>` element into the body. **V** + **D(HH)** title-require.
4. `<h1>` is never closed, so the paragraph becomes part of the huge heading. Chrome built `<h1>Hello Kathmandu <p>…</p></h1>`. **V** + **D(HH)** tag-pair.
5. Wrong nesting: `<strong>` opened inside `<p>` but closed after `</p>`. Fix: `<p>I live in <strong>Kathmandu</strong></p>` (last opened, first closed). Chrome repaired it silently. **D(HH)** / **D(F12)**.

**Fixed version:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aarav's Page</title>
</head>
<body>
  <h1>Hello Kathmandu</h1>
  <p>I live in <strong>Kathmandu</strong></p>
</body>
</html>
```
**What earns full marks:** naming *how* you'd see each one (tab, HTMLHint, Elements), not only the fix. (Same bugs as D1-04.)

### C2. Predict the table
**Output:** **3 columns** (header: Time, Sun, Mon; second row: 10:00 + one cell spanning 2 = 3). "Tea break" is **moved above the table**, outside it.
**Why:** text is not allowed directly inside `<table>` between rows, so the browser moves the text out and puts it before the table. Chrome's DOM (checked) is `Tea break <table><tbody><tr>…</tr><tr>…</tr></tbody></table>`. It also adds a `<tbody>` you never wrote. (Same bug as D1-11 bug 5.)

### C3. Canteen form, reference solution
`canteen-form.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen order</title>
</head>
<body>
  <h1>TSI Canteen order</h1>
  <form method="get">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX">

    <fieldset>
      <legend>Meal</legend>
      <input type="radio" id="veg" name="meal" value="veg">
      <label for="veg">Veg</label>
      <input type="radio" id="nonveg" name="meal" value="non-veg">
      <label for="nonveg">Non-veg</label>
    </fieldset>

    <button type="submit">Order</button>
  </form>
</body>
</html>
```
**Tested with:** html-validate (0 errors). Submitting `sunita@mail.com`, `9841000000`, Veg gives `?email=sunita%40mail.com&phone=9841000000&meal=veg`.
**What earns full marks:** `type="tel"` (not `number`: a phone number is not a quantity; with `number` you cannot type `+` or a space, and the spinner arrow drops a leading 0: 09841000000 → ↑ → 9841000001), every input has a label with matching `for`/`id`, one shared radio `name` with a `value` on each, the button inside the form. `fieldset`/`legend` is a bonus.
**Common ways candidates fail:** `type="number"` for the phone; radios with different names; labels without `for`; the button outside `</form>`.

### C4. "I click Submit and nothing happens"
**Two bugs:**
1. `<textarea />` is **not** a void tag, so `/>` is ignored. The textarea stays open and swallows everything after it as text. Chrome (checked) put `</form>`, the button and `</body></html>` *inside* the textarea as plain text. So there is no button at all: you see the code inside the box. Fix: `<textarea id="msg" name="msg"></textarea>`. **Fix this one first; it hides bug 2.**
2. The `<button>` sits **after `</form>`**, so even when it shows, it is not part of the form and submits nothing. Move it inside the form.

**Fixed:**
```html
<form method="get">
  <label for="msg">Message</label>
  <textarea id="msg" name="msg"></textarea>
  <button type="submit">Send</button>
</form>
```
**They're checking:** void vs non-void elements, and that one bug can hide another. (Same as D1-13 bugs 5 and 6.)

---

## Talk-about-your-project prompts: what a good answer contains
- **Hardest bug in D1-15:** names the bug, the visibility tag (e.g. "the specials list had no `<ul>`; it looked fine, but F12 Elements showed no list: D(F12)"), and the tool used.
- **Catering form check:** "I submitted with `method="get"` and checked that every field appeared as `name=value` in the address bar; one was missing, so I added its `name`."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
