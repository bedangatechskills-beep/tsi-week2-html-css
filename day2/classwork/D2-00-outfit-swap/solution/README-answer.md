# D2-00 · Outfit swap — answer

1. **The only change** is the `href` on line 7:
   - `css/outfit-traditional.css` → cream paper, cherry headings, Georgia (serif)
   - `css/outfit-modern.css` → navy band, white cards, round red nav buttons, Segoe UI / Arial (sans-serif)
   - `css/outfit-night.css` → dark background, gold headings, Courier New (monospace)
2. **Did the `<body>` change?** No. Not one character of the HTML changed. This is the CSS Zen Garden idea:
   HTML is the skeleton (content and structure), CSS is the outfit (colours, fonts, spacing).
3. **A selector in all three files:** `body`, `h1`, `h2`, `nav a`, `main` and `footer` are in all three. The selector
   is the same ("who"), the declarations are different ("what").
4. **Why this matters:** one stylesheet can dress 100 pages (the school uniform, B4 and D2-15). Change one file and
   the whole site changes.
