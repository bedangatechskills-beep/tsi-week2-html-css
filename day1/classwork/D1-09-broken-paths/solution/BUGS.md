# D1-09 Broken Paths — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 9 | Logo path uses `image/`, but the folder is `images/` | Write `src="images/logo-momo-house.svg"` | V |
| 2 | index.html | 13 | The About link points to `about.html`, but the file is in `pages/` | Write `href="pages/about.html"` | V |
| 3 | index.html | 18 | External link without `https://` becomes a relative path | Write `href="https://www.wikipedia.org"` | V |
| 4 | pages/about.html | 9 | Home link from inside `pages/` points to `index.html` (there is no index.html in `pages/`) | Go down one floor: `href="../index.html"` | V |
| 5 | pages/about.html | 12 | Image path from inside `pages/` has no `../` | Write `src="../images/thamel.svg"` | V |
| 6 | pages/menu.html | 9 | Home link is a path on Aarav's own laptop (`C:\Users\Aarav\…`) | Use a relative path: `href="../index.html"` | V |

## How you could see each one

1. A broken-image icon with the alt text "Momo House logo" shows instead of the logo.
2. Clicking "About us" gives a 404 / "Cannot GET /about.html".
3. Clicking "Wikipedia" looks for a file called `www.wikipedia.org` next to `index.html` → 404.
4. Clicking "Home" on the About page gives a 404.
5. The Thamel picture is broken on the About page.
6. Clicking "Home" on the Menu page does nothing or shows an error. It could only work on Aarav's laptop.
