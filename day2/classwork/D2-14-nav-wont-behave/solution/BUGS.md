# D2-14 Nav won't behave — answer key (BUGS.md)

Page: Momo House header and hero (`index.html` + `css/style.css`).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `css/style.css` | 43 | `display: blok;` (typo). Dropped, so "Order now" stays an inline link: `width: 200px` and the top margin are ignored, so it is a small button squeezed against the text above. | `display: block;` | V |
| 2 | `css/style.css` | 15 | `.logo { display: none; }` was left in by mistake. The logo has left the room: it is not on the page at all. | Delete `display: none;` from `.logo`. | V |
| 3 | `css/style.css` | 18 | `.menu` has no `list-style: none`, so the menu shows bullets. (You see them while the `li`s are still blocks, bug 5. Mend 3 and 5 together.) | Add `list-style: none;` to `.menu`. | V |
| 4 | `css/style.css` | 28 | Nav links are `display: inline` with `padding: 12px 16px; margin-top: 20px;`. Inline boxes ignore vertical margin, and their vertical padding overlaps the boxes above and below (here: into the cream hero). | `display: inline-block;` (side by side, but keeps its own size and margin) | V |
| 5 | `css/style.css` | 23 | CSS `.menu-li`, but the HTML is `<ul class="menu"><li>`. No element has the class `menu-li`, so the `li`s stay blocks: the menu is a vertical list, not a bar. | `.menu li {` (a space: the `li`s inside `.menu`) | V |

**Reveal tip:** use the queue and the bench. Block = the queue (each on its own line). Inline = the bench (side by side, you can't push them up or down). Inline-block = side by side, but each keeps its own size. None = left the room.
