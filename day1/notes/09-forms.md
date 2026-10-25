# 09 · Forms: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B8 · Layer: Frontend (the door to the Backend)*

> **Today in one sentence:** A form is how the visitor talks back to you.

## The picture to keep in your head

**The order slip**: boxes to fill, ticks, "choose one" circles; label = the printed word next to each box;
name = **the column the kitchen writes your answer in**.

```text
┌──────────── MOMO HOUSE ORDER SLIP ────────────┐       <form>
│ Name:  [ Aarav__________ ]                      │       <label> + <input type="text" name="customer">
│ Phone: [ 9800000000_____ ]                      │       <label> + <input type="tel" name="phone">
│ Momo:  ( ) Steam  (•) Fried  ( ) Jhol  ← one    │       radios: same name="momo", different value
│ Extras: [x] Chutney  [ ] Soup         ← many    │       checkboxes
│ Plates: [ 2 ]                                   │       <input type="number">
│ Notes:  [ Less spicy please___________ ]        │       <textarea>
│                       [ Send to kitchen ]       │       <button type="submit">
└─────────────────────────────────────────────────┘
The waiter (the server, later in the course) carries the slip to the kitchen.
The kitchen writes every answer in the column with that name:  customer=Aarav  phone=9800000000  momo=fried …
```

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| `<form>` | The slip. It holds every field and the submit button | `<form method="get">` |
| `action` | Where the slip is sent. No `action` = the same page | `action="order.html"` |
| `method` | How it is sent. `get` puts the answers in the URL | `method="get"` |
| `<input>` | One box to fill. A void element. `type` decides what kind | `<input type="email">` |
| `<label>` | The printed word next to a box | `<label for="phone">Phone</label>` |
| `for` ↔ `id` | Ties a label to its box. Click the label → the cursor jumps into the box | `for="phone"` + `id="phone"` |
| `name` | The kitchen writes your answer in the column called `name`. **No name = not sent** | `name="phone"` |
| `value` | What is sent for a radio, checkbox or option | `value="fried"` |
| Radio group | "Choose one" circles: all share **one** `name` | `name="batch"` |
| Checkbox | "Tick any" boxes | extras |
| `<select>` / `<option>` | A drop-down list | momo type |
| `<textarea>` | A big box for many lines. Has a closing tag | notes |
| `<fieldset>` / `<legend>` | A box around a group of fields, with a title | "Choose your batch" |
| `required` | The browser won't send the form if this is empty | `<input required>` |
| `placeholder` | Grey example text inside the box. **Not** a label | `placeholder="98XXXXXXXX"` |
| Query string | The answers after `?` in the URL | `?customer=Aarav&momo=fried` |

## How it works

### 1. The URL trick: read what the form sends

With `method="get"` and no `action`, the form sends the slip to the same page and writes every answer into the
URL bar. Submit, then read the address bar:

```text
http://127.0.0.1:5500/index.html?fullname=Sunita+Gurung&email=sunita%40mail.com&batch=morning
                                 └───┬───┘ └────┬─────┘ └────┬────┘ └─────┬──────┘
                                    name     value         name         value
     ?  starts the answers      &  separates them      +  is a space      %40  is @
```

If a field is **missing** from the URL, it has no `name` (D1-HW4 bug 10). If a radio shows `batch=on`, it has no
`value` (D1-13 bug 4). This is the **D(URL)** tag.

### 2. Labels: always, and tied with for/id

- Every field needs a `<label>`. A placeholder disappears when you type, and screen readers may not read it.
- `<label for="X">` must match `id="X"` exactly. If they don't match, clicking the label does nothing
  (D1-13 bug 1, D1-15 bug 7, D1-HW1 bug 8). Test it: **click every label**.
- `name` and `id` often have the same word. They do different jobs: `id` ties the label; `name` is the column in the URL.

### 3. Pick the right `type`

| type | Gives you | Use it for |
|---|---|---|
| `text` | a plain box | names |
| `email` | checks for an `@` on submit; email keyboard on phones | email (D1-HW4 bug 7) |
| `tel` | phone keyboard on mobile, accepts `+977`, spaces and dashes as typed | phone numbers (D1-13 bug 2, D1-HW1 bug 9) |
| `password` | hides the letters | passwords |
| `number` | spinner arrows; you cannot type `+` or a space, and the arrows drop a leading 0 | a count of plates, an age |
| `date` | a date picker | trek date (D1-HW1 bug 10) |
| `radio` | choose one | batch, momo type |
| `checkbox` | tick any | extras |
| `color` | a colour picker | your TSI T-shirt colour |

A phone number is **not** a number you do maths with (you never add two phone numbers). Use `tel`, not `number`.
With `type="number"` you cannot type `+` or a space; the spinner arrow changes the number and drops a leading 0 (try 09841000000, press ↑). Use `tel`.

### 4. Radio groups: one name, different values

```text
<input type="radio" name="batch" value="morning">   ← same name = one group = only one can be ticked
<input type="radio" name="batch" value="evening">
```

- Different names (`batch1`, `batch2`) make two separate groups, so both can be ticked (D1-13 bug 3, D1-HW1 bug 11,
  D1-HW4 bug 11).
- No `value` → the browser sends `on` (D1-13 bug 4).

### 5. Buttons

- `<button type="submit">` sends the slip. It must be **inside** `<form>…</form>`; after `</form>` it does nothing
  (D1-13 bug 6, D1-HW4 bug 12).
- `<button type="reset">` clears every field. Never label a reset button "Book now" (D1-HW1 bug 12).

### 6. `textarea` and `select` need closing tags

- `<textarea></textarea>` is **not** void. `<textarea />` does not close it, so the rest of the form becomes text
  inside the box (D1-13 bug 5, D1-15 bug 8). **Fix this first**: it hides other bugs.
- Every `<option>` lives inside `<select>…</select>`. An option after `</select>` shows as loose text
  (D1-HW4 bug 8).

### 7. Rules the browser checks for you

- `required` blocks an empty submit. A typo like `requred` is ignored, so empty forms go through (D1-HW4 bug 9).
- `type="email"` checks the `@`. `min`/`max` limit a number.
- This is only a first check for the visitor's convenience. A real server must check again (later in the course).

## Code you built today

### Step 1: form, label, text and email

File: `step1.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI course signup · Step 1</title>
</head>
<body>
  <h1>TSI course signup</h1>
  <form method="get">
    <p>
      <label for="fullname">Full name</label>
      <input type="text" id="fullname" name="fullname" placeholder="Sunita Gurung" required>
    </p>
    <p>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </p>
    <button type="submit">Sign up</button>
  </form>
</body>
</html>
```

**Predict:** type a name and `sunita@mail.com`, press Sign up. What appears after `?` in the URL bar?
Then try an email with no `@`. What happens?

### Step 2: radio and checkbox

File: `step2.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House order · Step 2</title>
</head>
<body>
  <h1>Momo House order slip</h1>
  <form method="get">
    <p>Choose your momo:</p>
    <p>
      <input type="radio" id="steam" name="momo" value="steam">
      <label for="steam">Steam</label>
      <input type="radio" id="fried" name="momo" value="fried">
      <label for="fried">Fried</label>
      <input type="radio" id="jhol" name="momo" value="jhol">
      <label for="jhol">Jhol</label>
    </p>
    <p>Extras:</p>
    <p>
      <input type="checkbox" id="chutney" name="extras" value="chutney">
      <label for="chutney">Extra chutney</label>
      <input type="checkbox" id="soup" name="extras" value="soup">
      <label for="soup">Soup</label>
    </p>
    <button type="submit">Send to kitchen</button>
  </form>
</body>
</html>
```

- Three radios, one `name`: only one can be ticked.
- **Predict:** tick both extras and submit. How many times does `extras=` appear in the URL?

### Step 3: select and textarea

File: `step3.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House order · Step 3</title>
</head>
<body>
  <h1>Momo House order slip</h1>
  <form method="get">
    <p>
      <label for="filling">Filling</label>
      <select id="filling" name="filling">
        <option value="chicken">Chicken</option>
        <option value="veg">Veg</option>
        <option value="buff">Buff</option>
      </select>
    </p>
    <p>
      <label for="plates">Plates</label>
      <input type="number" id="plates" name="plates" min="1" max="10" value="1">
    </p>
    <p>
      <label for="notes">Notes for Didi</label>
      <textarea id="notes" name="notes" rows="3" cols="40"></textarea>
    </p>
    <button type="submit">Send to kitchen</button>
  </form>
</body>
</html>
```

- `<textarea …></textarea>`: open and close, nothing in between (unless you want starting text).
- **Predict:** write `Less spicy please` in Notes and submit. How are the spaces shown in the URL?

### Step 4: fieldset, legend, submit, read the URL

File: `signup.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI course signup</title>
</head>
<body>
  <h1>TSI course signup</h1>
  <form method="get">
    <p>
      <label for="fullname">Full name</label>
      <input type="text" id="fullname" name="fullname" required>
    </p>
    <p>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX">
    </p>
    <fieldset>
      <legend>Choose your batch</legend>
      <input type="radio" id="morning" name="batch" value="morning">
      <label for="morning">Morning (Sun–Thu)</label>
      <input type="radio" id="evening" name="batch" value="evening">
      <label for="evening">Evening (Sun–Thu)</label>
    </fieldset>
    <p>
      <label for="start">Start date</label>
      <input type="date" id="start" name="start">
    </p>
    <p>
      <label for="shirt">Favourite colour for your TSI T-shirt</label>
      <input type="color" id="shirt" name="shirt" value="#990011">
    </p>
    <p>
      <label for="message">Why do you want to join?</label>
      <textarea id="message" name="message" rows="4"></textarea>
    </p>
    <button type="submit">Sign up</button>
    <button type="reset">Clear the form</button>
  </form>
</body>
</html>
```

- `fieldset` draws a box around the batch radios; `legend` is its title.
- The submit button is **inside** the form.
- **Predict:** pick the colour red and submit. The URL shows `shirt=%23990011`. What is `%23`? (It is `#`, written
  in a URL-safe way.)

## Quick reference

| You want... | Write |
|---|---|
| A form you can test | `<form method="get">` … `<button type="submit">Send</button></form>` |
| A labelled box | `<label for="x">X</label> <input type="text" id="x" name="x">` |
| Phone | `type="tel"` |
| Choose one | radios with the **same** `name`, different `value` |
| Tick many | checkboxes, each with a `value` |
| Drop-down | `<select name="…"><option value="…">…</option></select>` |
| Many lines | `<textarea name="…" rows="4"></textarea>` |
| A group with a title | `<fieldset><legend>…</legend>…</fieldset>` |
| Must not be empty | `required` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| Clicking the label does nothing | `for` and `id` don't match (D1-13 bug 1, D1-15 bug 7, D1-HW1 bug 8) | Same word in both |
| Spinner arrows on the phone box; `+977` is not accepted | `type="number"` (D1-13 bug 2, D1-HW1 bug 9) | `type="tel"` |
| Two batch circles can both be ticked | Different `name`s (D1-13 bug 3, D1-HW1 bug 11, D1-HW4 bug 11) | One shared `name` |
| URL shows `batch=on` | Radio has no `value` (D1-13 bug 4) — D(URL) | `value="morning"` |
| The rest of the form appears as text in a box | `<textarea />` (D1-13 bug 5, D1-15 bug 8) | `<textarea></textarea>` — fix this first |
| Submit does nothing | Button after `</form>` (D1-13 bug 6, D1-HW4 bug 12) | Move it inside |
| No date picker | `type="text"` for a date (D1-HW1 bug 10) | `type="date"` |
| "Book now" wipes the form | `type="reset"` (D1-HW1 bug 12) | `type="submit"` |
| Email with no `@` is accepted | `type="text"` (D1-HW4 bug 7) | `type="email"` |
| An option shows as loose text | `<option>` after `</select>` (D1-HW4 bug 8) | Move it inside |
| An empty form is sent | `requred` typo (D1-HW4 bug 9) | `required` |
| A field is missing from the URL | No `name` (D1-HW4 bug 10) — D(URL) | Add `name` |
| Clicking text next to a box does nothing | An input with no label (D1-FF4) | Add a `<label for>` |

## Check yourself

1. What are the jobs of `id` and `name`? Why do you often need both?
2. Why is `placeholder` not a replacement for `label`?
3. Which `type` for: a phone number, a trek date, a password, a count of plates?
4. How do you make three radio buttons "choose one"? What else must each one have?
5. **Predict:** what does the URL show for a checkbox with `name="extras"` and no `value`, when ticked?
6. What happens to a submit button placed after `</form>`?
7. Why should you fix a self-closed `<textarea />` first?
8. Explain the order-slip idea to a friend: what are the label, the name and the waiter?

## Try it

- **D1-13 Broken Signup**: 6 bugs. Fix the textarea first; it hides bug 6. Submit and read the URL for bug 4.
- **D1-14 Extend the order slip**: a `tel` field, a Morning/Evening radio group with one name, a `fieldset` + `legend`.
  Bonus: `date`, two checkboxes, `type="color"`. Test by submitting and reading the URL.
- **D1-FF4 Evil page** (fast finishers): one bug is an input with no label.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "After I submit my form, the URL shows `batch=on`. Explain what that means and which attribute controls it. Don't fix my code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [10 · Debugging and validating HTML](10-debugging-and-validating-html.md).*
