# D2-HW1 Haunted portfolio repair — answer key (BUGS.md)

Rajan's 2-page portfolio (`index.html`, `projects.html`, `css/style.css`). Bug 1 is only on the home page; the projects page links the CSS correctly.

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 7 | `<link href="style.css">`, but the file is `css/style.css`. The home page has no CSS at all. | `href="css/style.css"` | V |
| 2 | `projects.html` | 31 | Two `<main>` elements on the projects page. | Delete the extra `</main>` + `<main>` pair, so the section is inside the one main. | R / D(W3C) |
| 3 | `index.html` | 24 | The second `<section>` has no heading. | Add `<h2>About me</h2>`. | R |
| 4 | `index.html` | 20 | The avatar `<img>` has no `alt`. | `alt="Photo of Rajan, smiling, with round glasses"` | D(HH) / D(LH) |
| 5 | `css/style.css` | 21 | `.nav li { display: inline-blok; }` (typo). The menu stays vertical. | `display: inline-block;` | V |
| 6 | `css/style.css` | 30 | CSS `.Card`, HTML `class="card"`. Case matters: the project cards have no box at all. | `.card {` | V |
| 7 | `css/style.css` | 11 | `.site-header { padding: 20; }` has no unit. Dropped: the menu is squashed against the edge of the navy bar. | `padding: 20px;` | V |
| 8 | `css/style.css` | 35 | `border: 1px #999;` has no style, so the cards have no border. | `border: 1px solid #999;` | V |
| 9 | `css/style.css` | 33 | Each card is 420 + 2×20 + 2×1 = 462 px wide. Two cards do not fit in the 900 px main, so the second card drops below the first. | Add `box-sizing: border-box;` to `.card`. | V |
| 10 | `css/style.css` | 63 | Missing `}` after the `.hero` rule. The next rule, `main`, is lost: the content is not in a centred 900 px column any more (it runs edge to edge). | Add `}` after `border-radius: 12px;`. | V |
| 11 | `css/style.css` | 25 | `color: #fffff;` has 5 hex digits. Dropped: the nav links are blue on navy (hard to read). | `color: #ffffff;` (6 digits) or `white` | V |
| 12 | `css/style.css` | 52 | CSS `#footer`, but the HTML is `<footer class="footer">` (a class, not an id). The footer is plain. | `.footer {` | V |
