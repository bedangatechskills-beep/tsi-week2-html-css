# D1-FF4 · Evil page

**Time:** 15 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Find bugs that the browser hides from you.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

This page **looks almost fine**. That is what makes it evil. The browser is a polite guesser: it quietly repairs your mistakes in the Elements panel, so the page looks OK while the code is wrong.

File: `index.html`. Use **three tools**: your eyes, the Problems panel (Ctrl+Shift+M), and F12 → Elements.

**There are 8 bugs. Find at least 6.**

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Pictures**: every `<img>` needs one attribute for people who can't see it.
- **Links**: a link cannot sit inside another link.
- **Boxes in the wrong box**: a `<p>` can't hold a list or a heading. A `<li>` needs a list parent.
- **ids**: each id is used once per page.
- **Forms**: click every word next to a box.
- **Entities**: read every `&…;` letter by letter.

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

- F12 → Elements shows no empty `<p></p>` and no surprise tags.
- Problems panel: 0.
- Clicking "Plates" puts the cursor in the box.

## Scoreboard

Write this in your notebook:

`I found __ / 8. The reveal taught me: ________`

## Stuck?

1. Open F12 → Elements and look for empty `<p></p>` pairs. They mark where the browser repaired something.
2. Compare the Elements panel with your code, line by line.
3. Read the "browser repair table" in `notes/10-debugging-and-validating-html.md`.

## Fast?

Try **D1-FF5 Notice Board**.
