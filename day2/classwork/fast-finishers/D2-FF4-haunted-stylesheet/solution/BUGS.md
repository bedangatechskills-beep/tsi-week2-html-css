# D2-FF4 Haunted stylesheet — answer key (BUGS.md)

Page: "Kathmandu Ghost Walk". All 10 mistakes are in `css/style.css`.

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `css/style.css` | 77 | Missing `}` after the `.warning` rule. The next rule, `.highlight`, is swallowed: "no bell in the courtyard" has no green marker. | Add `}` after `font-weight: bold;` in `.warning`. | V |
| 2 | `css/style.css` | 19 | `padding: 20;` has no unit. Dropped: the header has no space around it. | `padding: 40px;` | V |
| 3 | `css/style.css` | 23 | CSS `.Title`, but the HTML is `class="title"`. Case matters: the h1 is not ghost-green or big. | `.title {` | V |
| 4 | `css/style.css` | 13 | CSS `#nav`, but the HTML is `id="navbar"`. The nav bar has no purple background. | `#navbar {` | V |
| 5 | `css/style.css` | 42 | `colour` is not a CSS property. The h2 headings stay grey instead of gold. | `color: #f5b700;` | V |
| 6 | `css/style.css` | 64 | Missing `;` after `color: #8a8a8a`. Both declarations are lost: the footer is not grey and not centred. | `color: #8a8a8a;` | V |
| 7 | `css/style.css` | 36 | `border: 1px red;` has no style, so the story boxes have no border. | `border: 1px solid red;` | V |
| 8 | `css/style.css` | 52 | `display: blok;` (typo). The badge stays inline, so `width: 140px` is ignored. | `display: block;` | V |
| 9 | `css/style.css` | 31 | `font-size: 24 px;` has a space between number and unit. Dropped: the subtitle is normal size. | `font-size: 24px;` | V |
| 10 | `css/style.css` | 69 | `// rules list` is a JavaScript comment. It breaks the next selector, so the rules list is not green. | `/* rules list */` | V |
