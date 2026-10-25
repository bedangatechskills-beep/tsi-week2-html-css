# D1-06 Canteen News — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 11 | Two `<h1>` elements on one page | Make "New on the menu" an `<h2>` | R |
| 2 | index.html | 14 | `<p>` written as a real tag, so it vanishes and the sentence breaks in two | Write `&lt;p&gt;` to print the characters < and > | V |
| 3 | index.html | 12 | `&nbps;` typo (letters swapped) | Write `&nbsp;` | V |
| 4 | index.html | 18 | `<blockquote>` closed with `</quote>` | Close it with `</blockquote>` | V + D(HH) tag-pair |
| 5 | index.html | 19 | `<em>` opened and never closed | Add `</em>` after "do not" | V + D(HH) tag-pair |

## How you could see each one

1. No tool complains. The rule is: one h1 per page (the page title). Sections are h2.
2. The page shows "Wrap text in" and "tags." on two lines. The `<p>` itself is missing.
3. The page shows the text `&nbps;` literally.
4. The blockquote never ends, so everything after it is pushed in (indented).
5. Everything after "do not" is italic, even the headings. (The indent comes from the blockquote; the italic comes from this.)
