# D2-HW4 Patan Craft Shop replay — answer key (BUGS.md)

Stretch homework: the rest of the Day 2 surplus bugs (a11y 1–2, media 3–4, selectors 5, units 6–8, box model 9, display 10).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 6 | No `<meta name="description">`. Google and link previews have no summary of the page. | Add `<meta name="description" content="Patan Craft Shop: handmade pottery …">` in `<head>`. | D(LH) |
| 2 | `index.html` | 4 | No viewport meta. On a phone the page is shown zoomed out and tiny. | Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. | R |
| 3 | `index.html` | 28 | The `<source>` is placed **after** `</video>`, so the first video has nothing to play (0:00). | Move the `<source>` line inside the `<video>`, before the fallback text. | V |
| 4 | `index.html` | 33 | `type="video/mp3"` is not a real type for this file. The browser skips the source, so the short video will not play (you see only the poster). | `type="video/mp4"` | V |
| 5 | `css/style.css` | 9 | CSS `#Header`, but the HTML is `id="header"`. Case matters: no brown header band. | `#header {` | V |
| 6 | `css/style.css` | 41 | `padding` with 5 values. It takes 1 to 4. Dropped: the story card text touches its border. | `padding: 10px 20px 10px 20px;` (or `10px 20px`) | V |
| 7 | `css/style.css` | 28 | `rgb(255, 200)` is missing the blue value. Dropped: the banner has no orange background. | `rgb(255, 200, 120)` | V |
| 8 | `css/style.css` | 27 | `.banner { width: 120%; }` is wider than the window, so the whole page scrolls sideways. | `width: 100%;` | V |
| 9 | `css/style.css` | 40 | `.card { height: 100px; }` is too short for the story, so the text spills out of the card. | `min-height: 100px;` (or delete the height) | V |
| 10 | `css/style.css` | 17 | `.badge { visibility: hidden; }` hides the "Closed for Dashain" badge but **keeps its space**: a big empty gap under the header. The shop is open, so the badge should leave the room. | `display: none;` | V |

Bug 1 shows in Lighthouse → SEO: "Document does not have a meta description". Bug 2 is a rule check: Lighthouse 13 no longer reports a missing viewport, so test it with F12 → device toolbar (Ctrl+Shift+M): without the tag the page is drawn zoomed out on a phone.
