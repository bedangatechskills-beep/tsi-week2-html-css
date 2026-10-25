# D1-04 Broken Skeleton — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 1 | `<!DOCTYPE html>` is missing (line 1 starts with `<html>`) | Add `<!DOCTYPE html>` as the very first line | D(HH) doctype-first |
| 2 | index.html | 1 | `<html>` has no `lang="en"` | Write `<html lang="en">` | D(HH) html-lang-require |
| 3 | index.html | 5 | `<titel>` typo instead of `<title>` | Write `<title>Aarav's Page</title>` | V + D(HH) title-require |
| 4 | index.html | 8 | `<h1>` is never closed, so the paragraphs under it are giant and bold | Add `</h1>` at the end of the line | V + D(HH) tag-pair |
| 5 | index.html | 10 | Wrong nesting: `</p>` comes before `</strong>` | Last opened, first closed: `<p>I live in <strong>Kathmandu</strong>, near Dillibazar.</p>` | D(HH) tag-pair / D(F12) |
| 6 | index.html | 15 | The comment ends with `->` instead of `-->` | Close it with `-->` | V |

## How you could see each one

1. HTMLHint: "Doctype must be declared first". Without it Chrome uses old "quirks mode".
2. HTMLHint: "An lang attribute must be present on <html> elements". Screen readers need the language.
3. The tab shows the file name, not "Aarav's Page", and the words "Aarav's Page" appear at the top of the page.
4. Everything until the next heading is inside the h1. HTMLHint: "Tag must be paired".
5. The page looks almost normal. HTMLHint flags the pair, and F12 → Elements shows the browser moved the text out of the paragraph.
6. The comment never closes, so the line and footer text ("Made by Aarav") and everything after it disappear.
