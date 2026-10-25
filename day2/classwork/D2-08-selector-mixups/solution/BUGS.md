# D2-08 Selector mix-ups — answer key (BUGS.md)

Page: "Momo House Menu" (`index.html` + `css/style.css`).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 25 | HTML `class="Card"` but the CSS says `.card`. Class names are case-sensitive, so the Fried momo card has no border or white box. | `class="card"` | V |
| 2 | `css/style.css` | 15 | CSS `#menu`, but the HTML is `id="main-menu"`. Nothing matches, so the nav has no navy band (the white links become invisible on cream). | `#main-menu {` | V |
| 3 | `css/style.css` | 33 | `price { … }` has no dot, so it looks for a `<price>` tag. There is none: prices are not big, bold and red. | `.price {` | V |
| 4 | `css/style.css` | 10 | `h1, h2, {` has a trailing comma. One bad part of a selector list drops the **whole** rule: no cherry Georgia headings. | `h1, h2 {` | V |
| 5 | `css/style.css` | 39 | `:hoverr` (typo). An unknown pseudo-class makes the selector invalid, so the "Order" links never change on hover. | `.card a:hover {` | V (on hover) |

**Reveal tip:** in F12 → Elements, click the Fried card. The Styles panel shows no `.card` rule at all: the selector did not match. That is how you spot a selector mistake (versus a crossed-out declaration).
