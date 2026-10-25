# D1-HW3 · Self-Check & Interview Prep: How the Web Works + HTML Core
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Layer: Frontend · about 20 minutes*

**Mode:** Theory + coding, because Kathmandu interviewers ask HTML viva-style ("What is…? Difference between…?") and then ask you to mark up or fix a small page.

**How to use this sheet**
1. **Part 1** checks your memory. Answer on paper or in this file, without the notes. Then mark each one ✔ (knew it), ~ (half) or ✘ (didn't).
2. **Part 2** is an interview. Stand up, and say each answer **out loud** in 20–40 seconds. Interviews are spoken, not written.
3. Your instructor shares the answer key after you try. Don't peek first: a question you struggle with is the one you remember.

---

## How you'll be asked about this

- **Written / MCQ test:** "Which tag makes the biggest heading?", "Which attribute opens a link in a new tab?", "What does `&lt;` print?"
- **Viva round:** "What is HTML?", "What is the difference between `<strong>` and `<b>`?", "What is DOCTYPE for?", "Absolute vs relative path?"
- **Machine test:** "Make this signup form" or "Fix this page" in 20–30 minutes. They check labels, input types, and that the page is valid.
- **What they are really checking:** can you *explain* why, not only recite. "The browser guesses when you are wrong" is a stronger answer than a definition from a textbook.

## Topic map

| Sub-topic | Why interviewers care | Questions |
|---|---|---|
| How the web works | Every web job starts with request → response | S1, T1 |
| Skeleton, head/body, DOCTYPE | Shows you know what every page needs | S2, S3, T2, C1 |
| Elements, tags, attributes, nesting | The vocabulary of HTML | S4, T3 |
| Text tags and entities | Meaning vs looks | S5, T4 |
| Lists | Picking the right structure | S6 |
| Links and paths | The #1 bug on real sites | S7, T5 |
| Images and alt | Accessibility and broken pictures | S8, T6 |
| Tables | Data, not layout | S9, C2 |
| Forms | Every app collects data | S10, T7, C3, C4 |
| Debugging / validation | How juniors save time | T8 |

---

## Part 1: Self-check (10 questions)

**S1.** In the postal-system picture of the web, what are the **DNS**, the **IP address** and the **response**? Give one line for each.

**S2.** Write, from memory, the full skeleton of an HTML page with the title "Momo House". (10 lines.)

**S3.** What goes in the `<head>` and what goes in the `<body>`? Use the parcel picture.

**S4.** In `<a href="menu.html">Menu</a>`, which part is the **element**, which is the **tag**, which is the **attribute**, and which is the **value**?

**S5.** You want the browser to print the text `<p>` on the page, not start a paragraph. What do you type?

**S6.** Didi writes her shopping list (cabbage, flour, chicken) and her recipe steps (mix, fold, steam). Which list tag does each one get, and why?

**S7.** `index.html` is in the `W2D1` folder. `about.html` is in `W2D1/pages/`. Write the link **from `about.html` back to `index.html`**.

**S8.** Why is `<img>` called "a sticker, not an envelope"? And what is `alt` for?

**S9.** A table row has `rowspan="2"` on its first cell. The table has 3 columns. How many `<td>` must the **next** row have?

**S10.** Two radio buttons for "Morning" and "Evening" batch. Both can be ticked at the same time. What is wrong, and what does the URL show if they also have no `value`?

*At the bottom of this file, write: `My ✘ topics: ____________`*

---

## Part 2: Interview questions (12 questions)

### Theory (say it out loud)

**T1. (Warm-up)** What happens when you type `momohouse.com.np` in the browser and press Enter? Keep it to 5 steps.

**T2. (Warm-up)** What is `<!DOCTYPE html>` for? What happens if you forget it?

**T3. (Warm-up)** What is the difference between an **element**, a **tag** and an **attribute**?

**T4. (Core)** What is the difference between `<strong>` and `<b>`? And `<em>` and `<i>`? Which one should you use, and why?

**T5. (Core)** What is the difference between an **absolute** path and a **relative** path? Give one example of each, and say why `C:\Users\Aarav\Desktop\site\index.html` is a bad link.

**T6. (Core)** Why should every `<img>` have an `alt`? When is `alt=""` (empty) the right answer?

**T7. (Core)** In a form, what do the `name`, `id` and `for` attributes each do? Which one does the server see?

**T8. (Stretch)** "The browser never shows an HTML error." Is that true? How do you find HTML mistakes, then? Name three tools.

### Code (write it or say it)

**C1. Find the bugs.** This page looks almost fine in Chrome. Name **three** problems.
```html broken
<html>
<head>
  <titel>Aarav's Page</titel>
</head>
<body>
  <h1>Hello Kathmandu
  <p>I live in <strong>Kathmandu</p></strong>
</body>
</html>
```

**C2. Predict.** How many columns does the browser draw for this table, and where does the text "Tea break" end up?
```html broken
<table>
  <tr><th>Time</th><th>Sun</th><th>Mon</th></tr>
  Tea break
  <tr><td>10:00</td><td colspan="2">HTML lab</td></tr>
</table>
```

**C3. Write it (5 minutes).** Write a form for the TSI Canteen: a labeled **email** field, a labeled **phone** field (right type!), a "Veg / Non-veg" radio group, and a submit button. Use `method="get"`.

**C4. Find the bug.** Sunita says: "I click Submit and nothing happens." Why?
```html broken
<form method="get">
  <label for="msg">Message</label>
  <textarea id="msg" name="msg" />
</form>
<button type="submit">Send</button>
```

---

## Talk about your project

Be ready for these in a "walk me through it" round:
- "In the Momo House repair (D1-15), which bug was hardest to find? How did you find it?"
- "In your catering page (D1-HW2), how did you check that the form sends every field?"

---
*Remember the One Rule: you may only ship code you can explain, line by line.*

My ✘ topics: ____________
