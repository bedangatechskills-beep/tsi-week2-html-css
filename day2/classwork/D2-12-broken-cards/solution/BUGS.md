# D2-12 Broken cards — answer key (BUGS.md)

Page: "TSI Morning Batch" (`index.html` + `css/style.css`). Open it in a wide window (1280 px or more).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `css/style.css` | 27 | Each card is 300 + 2×20 padding + 2×5 border = **350 px** wide (content-box). Three cards = 1050 px, but `.row` is 960 px, so the third card wraps to a new line. | Add `box-sizing: border-box;` to `.card`: now 300 px *includes* padding and border. | V |
| 2 | `css/style.css` | 10 | `.wrapper { margin: 0 auto; }` has no width, so it is already full width and cannot centre: the cream box fills the whole window. | Add `max-width: 1000px;` (or `width: 1000px;`). | V |
| 3 | `css/style.css` | 43 | `padding: -10px;`: padding can never be negative. The browser drops it, so the red "Morning batch" tag is squashed against its text. | `padding: 4px 10px;` | V |
| 4 | `css/style.css` | 16 | `border: 2px orange;` has no style. The default style is `none`, so there is no border around the note. | `border: 2px solid orange;` | V |
| 5 | `css/style.css` | 36 | The avatar is 120 × 80. `border-radius: 50%` on a rectangle makes an **oval**, not a circle. | Equal width and height: `height: 120px;` | V |

**Reveal tip:** F12 → Elements → hover a card. The box diagram in **Computed** shows 300 + 40 + 10 = 350. Add
`box-sizing: border-box` live in the Styles panel and watch the third card jump up.
