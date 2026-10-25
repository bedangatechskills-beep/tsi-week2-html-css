# D2-00 · Outfit swap

**Time:** 3 min · **Type:** ✏️ Modify

**Goal:** See that one HTML page can wear many outfits. You change one word and the whole page changes.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

- [ ] Find line 7 in `index.html`: `<link rel="stylesheet" href="css/outfit-traditional.css">`.
- [ ] Change `outfit-traditional.css` to `outfit-modern.css`. Save (Ctrl+S). Look at the page.
- [ ] Change it to `outfit-night.css`. Save. Look again.
- [ ] Answer in your head: did you change any text inside `<body>`?

> Skeleton = HTML (what is on the page). Outfit = CSS (how it looks). Today you learn to sew the outfit.

## Done looks like

You saw three different looks, and you never touched the `<body>`. **Same skeleton, new outfit.**

## Stuck?

1. Nothing changes? Did you save? Is Live Server running (look for **Port: 5500** at the bottom of VS Code)?
2. The page is plain black and white? Check the spelling of the file name. Look in the `css/` folder: the names must match exactly.
3. Still stuck? Copy the name from the file list: right-click the CSS file → **Copy Relative Path**, then paste it after `href="` and delete the part before `css/`.

## Fast?

Open the three CSS files side by side. Find one selector that is in all three. What is different in each one?
