# D2-10 Units & colours — answer key (BUGS.md)

Page: "TSI Canteen Prices" (`index.html` + `css/style.css`).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `css/style.css` | 16 | `width: 300;` has no unit. The browser drops it, so the price board stretches across the whole page. | `width: 300px;` | V |
| 2 | `css/style.css` | 23 | `#gg0000` is not a hex colour (hex uses only 0–9 and a–f). Dropped: prices are navy, not red. | `color: #cc0000;` | V |
| 3 | `css/style.css` | 28 | `font-size: 1.5 rem;` has a space between the number and the unit. Dropped: the special is not bigger. | `font-size: 1.5rem;` | V |
| 4 | `css/style.css` | 3 | `font-family: "Momo Sans";`: that font does not exist on any computer, and there is no fallback, so the browser uses Times New Roman. | `font-family: "Momo Sans", Arial, sans-serif;` | V |
| 5 | `css/style.css` | 34 | `line-height: 1.5px;` makes each line only 1.5 pixels tall, so the lines of the note sit on top of each other. | `line-height: 1.5;` (no unit = 1.5 × the font size) | V |

**Reveal tip:** F12 → Elements → click `.price-board`. In Styles, `width: 300;` is crossed out with ⚠ "Invalid property value". Bugs 1, 2 and 3 all show this way. Bugs 4 and 5 are valid CSS: no warning, only a bad result.
