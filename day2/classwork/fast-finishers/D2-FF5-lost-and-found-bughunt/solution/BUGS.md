# D2-FF5 Lost & Found — answer key (BUGS.md)

Page: "TSI Open Day" (`index.html` + `css/style.css`; `kathmandu-map.html` has no bugs). These are the Day 2 mistakes that did not fit in the class hunts: semantic (1–3), a11y (4–7), stylesheet (8–9), selectors (10–11).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 56 | A `<header>` inside the `<footer>`. A footer cannot contain a header. | Remove the `<header>` and `</header>` lines; keep the h2. | D(W3C) |
| 2 | `index.html` | 12 | `<article>` used for the site navigation bar. An article is a stand-alone story; links to other parts of the site go in `<nav>`. | `<nav>` … `</nav>` | R |
| 3 | `index.html` | 27 | `<b>` for "Warning:". `<b>` only looks bold; `<strong>` says "this is important". | `<strong>Warning:</strong>` | R |
| 4 | `index.html` | 21 | Heading order h1 → h3 → h2. Headings must not skip a level. | `<h2>Programme</h2>` | D(LH) |
| 5 | `index.html` | 45 | `<div class="btn primary">Apply</div>` is not a button: Tab skips it. | `<button type="button" class="btn primary">Apply</button>` | V |
| 6 | `index.html` | 33 | The fee table has no `<th>`: the first row is `<td>` with `<b>`. A screen reader does not know these are headers. | `<th scope="col">Course</th>` and `<th scope="col">Fee</th>` | R |
| 7 | `index.html` | 52 | The `<iframe>` has no `title`. A screen reader says only "frame". | Add `title="Map of Kathmandu with the TSI campus"`. | D(LH) |
| 8 | `css/style.css` | 16 | `font-size: 20 px;` (space). Dropped: the intro is normal size. | `font-size: 20px;` | V |
| 9 | `css/style.css` | 5 | `background-color = #fdf6ec;` uses `=` instead of `:`. Dropped: the page is white, not cream. | `background-color: #fdf6ec;` | V |
| 10 | `css/style.css` | 30 | `.btn .primary` (with a space) means "a .primary **inside** a .btn". The HTML has both classes on **one** element: `class="btn primary"`. | `.btn.primary {` (no space) | V |
| 11 | `index.html` | 49 | `class="card, special"`: no commas in a class list. The browser sees the classes `card,` and `special`, so `.card` never matches (no white box). | `class="card special"` | V |
