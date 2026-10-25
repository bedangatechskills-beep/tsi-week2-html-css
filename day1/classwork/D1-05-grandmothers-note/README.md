# D1-05 · Grandmother's note

**Time:** 4 min · **Type:** ✏️ Modify · **Work:** alone

**Goal:** Give plain text a tone of voice with strong, em, br and blockquote.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Hajur Aama (grandmother) wrote Aarav a note. Right now it is one flat block of text. Give it her tone of voice:

- [ ] `<strong>`: the part she says is **important** ("the best momo in all of Kathmandu")
- [ ] `<em>`: the words she would **stress** when speaking ("do not")
- [ ] `<br>`: a pause inside one thought (and between "With love," and her name)
- [ ] `<blockquote>`: grandfather's words. She is **quoting someone else**
- [ ] Bonus: split the long paragraph into 3–4 short `<p>`s, and add an `<hr>` before "With love"

## Done looks like

- One bold phrase, one stressed (italic) phrase, an indented quote.
- "With love," and "Hajur Aama" are on two lines.

## Stuck?

1. `<strong>` and `<em>` go **inside** a `<p>`: `<p>… <strong>the best momo</strong> …</p>`.
2. `<br>` is a void tag: no closing tag.
3. `<blockquote>` holds a `<p>` inside it, like a box inside a box.

## Fast?

Go on to **D1-06 Canteen News**.
