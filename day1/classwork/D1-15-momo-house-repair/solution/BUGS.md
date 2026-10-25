# D1-15 Momo House repair — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 12 | Nav link `menu.htm` (missing the `l`) | Write `href="menu.html"` | V |
| 2 | index.html | 17 | The big momo picture has no `alt` | Add `alt="A steaming plate of momo"` | D(HH) alt-require |
| 3 | index.html | 14 | The last nav link `<a href="about.html">About` is never closed | Add `</a>` after "About" | V + D(HH) tag-pair |
| 4 | menu.html | 29 | `colspan="2"` in a 3-column table | Write `colspan="3"` | V |
| 5 | menu.html | 32 | "Today's specials" `<li>`s have no `<ul>` | Wrap them in `<ul>` … `</ul>` | V + D(F12) |
| 6 | menu.html | 22 | Heading jump: `<h1>` then `<h4>` | Use `<h2>Momo prices</h2>` (no skipped levels) | R |
| 7 | order.html | 24 | `<label for="mobile">`, but the input is `id="phone"` | Write `for="phone"` | V |
| 8 | order.html | 41 | `<textarea />` is self-closed | Write `<textarea …></textarea>` | V |
| 9 | about.html | 17 | `../images/chef-didi.svg`, but `images/` is next to the page | Write `src="images/chef-didi.svg"` | V |
| 10 | about.html | 21 | Instagram link without `https://` | Write `href="https://www.instagram.com/momohouse.ktm"` | V |

## How you could see each one

1. Click "Menu" on the Home page: 404.
2. HTMLHint: "An alt attribute must be present on <img> elements".
3. The heading and the text under it turn blue and underlined: they became part of the About link.
4. The achar row stops short: an empty gap with no border at the right end of the last row.
5. No indent and no bullets (they hang off the left edge). F12 → Elements shows `<li>` directly inside `<body>`.
6. No tool fires. The rule: headings go down one level at a time.
7. Click the word "Phone": the cursor does not jump into the box.
8. The notes box is full of code, and the Send button and footer are gone.
9. Didi's picture is broken. `../` goes out of the Momo House folder, where there is no `images/`.
10. Clicking it looks for a local file → 404.
