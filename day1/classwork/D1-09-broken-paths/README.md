# D1-09 · Broken Paths

**Time:** 9 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair broken links and image paths across folders.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

Momo House has a small website with a `pages/` folder and an `images/` folder. Some links go nowhere and some pictures are broken. Click **every** link and look at **every** picture.

Files:

```
D1-09-broken-paths/
├── index.html
├── images/   (logo-momo-house.svg, momo.svg, thamel.svg)
└── pages/    (about.html, menu.html)
```

**There are 6 bugs. Find at least 4.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Folder names**: is the folder in the path spelled exactly like the real folder?
- **Same house**: a link to a page in a sub-folder needs the folder name.
- **Postal address**: a link to another website needs the full address, starting with `https://`.
- **Go downstairs**: from inside `pages/`, use `../` to reach `index.html` and `images/`.
- **Only on my laptop**: a path with `C:\` works on one computer only.

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

## Done looks like

- All 3 pictures show (logo on Home, momo on Home and Menu, Thamel on About).
- Home → About → Home → Menu → Home works with no 404.
- The Wikipedia link opens wikipedia.org (Wi-Fi needed).

## Scoreboard

Write this in your notebook:

`I found __ / 6. The reveal taught me: ________`

## Stuck?

1. Hover over a link in Chrome. Look at the bottom-left corner: it shows where the link goes.
2. Open the VS Code Explorer. Follow the path with your finger: start at the file that has the link.
3. From `pages/about.html`, `../` means "go out of `pages/` first".

## Fast?

Go on to **D1-10 Kathmandu gallery**.
