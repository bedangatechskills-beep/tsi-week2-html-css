# D1-FF4 Evil page — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 11 | `<img>` without `alt` | Add `alt="A plate of steamed momo"` | D(HH) alt-require |
| 2 | index.html | 12 | An `<a>` inside another `<a>` | Close the first link before the second one starts | D(F12) |
| 3 | index.html | 14 | A `<ul>` inside a `<p>` | End the paragraph before the list: `<p>Today we have:</p>` | D(F12) |
| 4 | index.html | 21 | The same `id="menu"` is used twice | Give the second heading its own id: `id="specials"` | D(HH) id-unique |
| 5 | index.html | 22 | `<li>` items inside a `<div>` (not a list) | Use `<ul>` … `</ul>` instead of the `<div>` | V + D(F12) |
| 6 | index.html | 29 | The number input has no `<label>` | Wrap the word: `<label for="plates">Plates</label>` | V |
| 7 | index.html | 9 | An `<h1>` inside a `<p>` | Remove the `<p>` and `</p>` around the heading | D(F12) |
| 8 | index.html | 18 | `&nbps;` typo | Write `&nbsp;` | V |

## How you could see each one

1. The picture looks fine. HTMLHint underlines the tag.
2. F12 → Elements: the browser closed the first link early, so there are two separate links. Links can't nest.
3. F12 → Elements: the browser closes the `<p>` before the `<ul>` and makes an extra empty `<p></p>` from the stray `</p>`.
4. HTMLHint: "The id value [ menu ] must be unique". A link to `#menu` can only go to one place.
5. No bullets and no indent (the bullets hang off the left edge). F12 → Elements shows `<li>` inside a `<div>`, not a list.
6. Click the word "Plates": nothing happens. With a label, the cursor jumps into the box.
7. F12 → Elements: an empty `<p></p>` before and after the h1. A heading can't live inside a paragraph.
8. The page shows `Rs.&nbps;25` as text.
