# D2-02 · Semantic misuse

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Learn when **not** to use each semantic tag.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Read the page in the browser, then read the code.
2. For every semantic tag, ask: "Is this the right name for this box?"
3. Mend each mistake in `index.html`. Save and check the page again.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Count the rooms:** some rooms must exist only once on a page.
- **Signposts:** `<nav>` is for links that take you somewhere. Is that true here?
- **Labels:** a `<section>` needs a heading that names it.
- **Main vs side:** what is the most important content? Is it in the right box?
- **Real controls:** press the **Tab** key again and again. Does focus reach every button?

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

## Done looks like

One `<main>`, a `<nav>` only around links (or no nav), every section has a heading, the blog post is the main content, and Tab reaches a real Subscribe button.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. Open F12 → Elements and look at the boxes in order. Which box holds what?
2. Read the "When NOT to use each tag" slide or `notes/01-semantic-html5.md`.
3. Ask the AI tutor: "When should I use aside instead of main?" Then mend it yourself.

## Fast?

Try **D2-FF5** Lost & Found (it has more semantic and a11y mistakes).
