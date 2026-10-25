# D2-02 Semantic misuse — answer key (BUGS.md)

Page: "TSI Blog". No JavaScript in this exercise: the button only has to be a real, focusable button.

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 31 | Two `<main>` elements. A page has only **one** main content area. | Delete the second `<main>` and its `</main>`. Move its `<section>` into the first `<main>`. | R / D(W3C) |
| 2 | `index.html` | 11 | `<nav>` wraps a paragraph of text. `<nav>` is only for a group of navigation **links**. | Remove `<nav>` and `</nav>`; keep the `<p>`. | R |
| 3 | `index.html` | 32 | `<section>` with no heading. Every section needs a heading that says what it is. | Add `<h2>Get new posts</h2>` as the first line inside the section. | R |
| 4 | `index.html` | 23, 16 | Swapped: the main blog post sits in `<aside>`, and the "Related posts" box sits in `<main>`. | Put the `<article>` inside `<main>`. Put "Related posts" (h2 + ul) inside `<aside>`. | R |
| 5 | `index.html` | 34 | `<div class="btn">Subscribe</div>` is not a button: it looks like plain text and the **Tab** key skips it. | `<button type="button">Subscribe</button>` | V |

**Reveal tip:** press Tab through the starter page on the projector. Focus jumps over "Subscribe". Then press Tab on the solution: the button gets a focus ring.
