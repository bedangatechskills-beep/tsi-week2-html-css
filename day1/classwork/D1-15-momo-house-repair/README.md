# D1-15 · Momo House repair (relay)

**Time:** 17 min · **Type:** 🐞 Bug-hunt · **Work:** in pairs (relay)

**Goal:** Use everything from today to repair a whole 4-page website.

> Didi's Momo House website broke the night before opening. You are the repair crew.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

```
D1-15-momo-house-repair/
├── index.html   3 bugs
├── menu.html    3 bugs
├── order.html   2 bugs
├── about.html   2 bugs
└── images/      (logo-momo-house.svg, momo.svg, momo-plate.svg, chef-didi.svg)
```

**There are 10 bugs. Find at least 8.**

> ⚠️ **Fix this first:** on `order.html`, the notes box is full of code. Repair that box first. It hides the rest of the page.

### Relay rules

1. Work in pairs. One person types (the **driver**). One person reads and points (the **navigator**).
2. **Swap seats after every bug.**
3. Score: **1 point** per bug repaired. **+1 bonus** if you can name its visibility tag (V, D(HH), D(F12), R …).
4. Scores go on the whiteboard at **3:38** and **3:45**.
5. **Finished early?** Become a **helper** for another pair. Helpers may point. Helpers may **not** type. Then go to the fast finishers.

### Hints (one per bug type)

- **Links**: click every link on every page. Check spelling and file endings.
- **Pictures**: every `<img>` needs `alt`. Is every path right from where the page is?
- **Closing tags**: if a heading looks like a link, a link never ended.
- **Tables**: count the columns. A `colspan` must fill the rest of the row exactly.
- **Lists**: every `<li>` needs a parent list.
- **Headings**: one level at a time (h1 → h2, never h1 → h4).
- **Forms**: click every label. Some tags cannot close themselves.
- **Other websites**: a full address starts with `https://`.

### How bugs hide (the visibility legend)

| Tag | Meaning | How you see it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code (Problems panel: Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser really built | F12 → Elements |
| **D(URL)** | Submit the form and read the address bar | the URL bar |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi) |
| **H** | Hidden on Windows; breaks on a real Linux server (capital letters in a file name) | the instructor explains |
| **R** | Rule check: no tool shows it. Read the code and check the rule | your brain + the notes |

## Scoreboard

Copy this on paper or the whiteboard:

| Pair | index (3) | menu (3) | order (2) | about (2) | Bonus tags | Total |
|---|---|---|---|---|---|---|
| | | | | | | |

And in your notebook:

`I found __ / 10. The reveal taught me: ________`

## Done looks like

- Home → Menu → Order → About → Home: every link works, every page.
- 4 pictures show: the logo on every page, momo on Home, momo plate on Menu, Didi on About.
- Only the heading "Welcome to Momo House" is big; it is **not** blue.
- The price table is a clean rectangle. Today's specials are indented.
- Click "Phone" on the order page: the cursor jumps into the box. Send an order and read the URL.
- The Problems panel (Ctrl+Shift+M) shows 0 problems for all 4 files.

## Stuck?

1. Open the Problems panel (Ctrl+Shift+M). It finds 1–2 bugs for you.
2. Go page by page. The bug count per page is in the box above.
3. Ask a helper pair, or check today's bug-hunts: every bug here appeared once before (D1-04 to D1-13).

## Fast?

Be a helper first. Then try **D1-FF6 Gallery detail page** in `classwork/fast-finishers/`.
