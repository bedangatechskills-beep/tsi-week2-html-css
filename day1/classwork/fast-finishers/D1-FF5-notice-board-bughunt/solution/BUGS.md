# D1-FF5 Notice Board — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 11 | A second `<head>` instead of `</head>` | Write the closing tag `</head>` | D(F12) + D(HH) tag-pair |
| 2 | index.html | 45 | A `<p>` written after `</html>` | Move the paragraph inside `<body>`, before `</body>` | D(F12) / D(W3C) |
| 3 | index.html | 29 | Heading jump: `<h2>` then `<h5>` | Use `<h2>` (one level at a time) | R |
| 4 | index.html | 31 | `<h4>` used only to make a sentence bold | Use `<p><strong>…</strong></p>` | R |
| 5 | index.html | 27 | `<br><br><br>` used to make space | Use two separate `<p>` paragraphs | V |
| 6 | index.html | 28 | `</hr>` instead of `<hr>` | Write `<hr>` (a void tag: no closing tag) | V + D(HH) tag-pair |
| 7 | index.html | 21 | The nested list is after `</li>` instead of inside the `<li>` | Move `</li>` to after the inner `</ul>` | D(F12) |
| 8 | index.html | 42 | `<ol>` closed with `</ul>` | Close it with `</ol>` | D(HH) tag-pair |
| 9 | index.html | 18 | Bare text "Notices:" directly inside `<ul>` | Move it out: `<p>Notices:</p>` before the list | R / D(F12) |
| 10 | index.html | 14 | A space in the file name: `notice-board .svg` | Write `src="images/notice-board.svg"` | V |
| 11 | index.html | 38 | The link says `#events`, but the heading is `id="event"` | Make them match: `id="events"` | V |
| 12 | index.html | 35 | A row of `<td>`s directly in `<table>`, with no `<tr>` | Wrap the cells in `<tr>` … `</tr>` | D(F12) |

## How you could see each one

1. The page looks normal. The browser ignores the second `<head>` (F12 → Elements shows only one). HTMLHint also flags the unpaired tag.
2. It still shows! The browser moved it into `<body>` (F12 → Elements). Only the W3C validator complains.
3. No tool fires. The rule: never skip heading levels.
4. It is not a heading of a section. Headings are for the outline, not for bold text.
5. A big empty gap between two sentences. `<br>` is a pause inside one thought, not a spacer.
6. The divider line is missing. The browser ignores `</hr>`.
7. It looks almost the same. F12 → Elements shows the inner `<ul>` is a direct child of the outer `<ul>`, which is not allowed.
8. HTMLHint: "Tag must be paired". The list never ends, so the contact line under it is pushed in too.
9. A `<ul>` may only hold `<li>`s. The text shows, but it is not a list item. F12 shows it as a loose text node.
10. The notice-board picture is broken.
11. Click "Events" at the top (with a short window): nothing happens.
12. It looks right. F12 → Elements shows the browser invented a `<tr>` for you.
