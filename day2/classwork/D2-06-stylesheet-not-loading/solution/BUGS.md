# D2-06 Stylesheet not loading — answer key (BUGS.md)

Page: "Meet Didi" (`index.html` + `css/style.css`). Bugs 1 and 2 are on the same line (the `<link>`).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 7 | `rel="stylsheet"` (typo). The browser does not know this is a stylesheet, so **no CSS at all** loads. | `rel="stylesheet"` | V |
| 2 | `index.html` | 7 | `href="css/styles.css"`, but the file is `css/style.css` (no **s**). 404: no CSS at all. | `href="css/style.css"` | V |
| 3 | `css/style.css` | 32 | The `h1` rule has no closing `}`. The browser keeps reading and swallows the next rule: `.highlight` never works (the yellow marker on "She still folds every momo by hand" is missing). | Add `}` after `font-size: 3rem;`. | V |
| 4 | `css/style.css` | 15 | Missing `;` after `color: #2a3f63`. The browser reads `color: #2a3f63 line-height: 1.8` as one broken value and drops it: the text is not navy and the lines are tight. (Both declarations are lost, not only the second.) | `color: #2a3f63;` | V |
| 5 | `css/style.css` | 10 | `colour: maroon;`: British spelling. CSS only knows `color`, so the h2 text stays black (the line under it is maroon). | `color: maroon;` | V |
| 6 | `css/style.css` | 20 | `// footer styles` is a JavaScript comment. In CSS it becomes part of the next selector, so the whole `footer` rule is dropped: no navy band. | `/* footer styles */` | V |

**Reveal tip:** after bugs 1 + 2, open F12 → Sources (or Network) to show `style.css` now loads. Then F12 → Elements → click
`<h2>`: the Styles panel shows `colour` crossed out with a ⚠ "Invalid property name". That is the CSS spell-checker.

**About bug 3:** the `h1` rule itself still works. Modern Chrome reads the swallowed `.highlight { … }` as a rule
*nested inside* `h1`, so it would only style a `.highlight` inside the h1. There is none, so the marker disappears.
