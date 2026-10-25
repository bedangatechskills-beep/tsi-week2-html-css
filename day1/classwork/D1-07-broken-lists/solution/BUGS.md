# D1-07 Broken Lists — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 12 | Three `<li>` with no `<ul>` around them | Wrap the three items in `<ul>` … `</ul>` | V + D(F12) |
| 2 | index.html | 22 | Cooking steps (order matters) are in a `<ul>` | Use `<ol>` … `</ol>` so the steps get numbers | V |
| 3 | index.html | 19 | `<il>` typo instead of `<li>` | Write `<li>Garlic</li>` | V + D(HH) tag-pair |
| 4 | index.html | 31 | The glossary uses `<li>` for the definitions instead of `<dd>` | Use `<dd>` … `</dd>` for each definition | V |

## How you could see each one

1. No indent and no bullets: the bullets hang off the left edge of the page. F12 → Elements shows the `<li>`s sit directly in `<body>`.
2. The steps show bullets, not 1, 2, 3, 4.
3. "Garlic" has no bullet. HTMLHint: "Tag must be paired".
4. The definitions show bullets and no indent. In a `<dl>`, each `<dt>` (word) is followed by a `<dd>` (meaning).
