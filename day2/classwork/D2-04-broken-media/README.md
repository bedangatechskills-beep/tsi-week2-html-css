# D2-04 · Broken media

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Mend audio, video and iframe tags so that the radio, the TV and the window all work.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Look at each section of the page. What should be there? What is missing?
2. Press play on every player that you can see.
3. Compare each `src` / `poster` with the real file names in the `media/` and `images/` folders.
4. Mend each problem in `index.html`. Save and test again.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Buttons:** a player without buttons is invisible or cannot be started.
- **Spelling of file names:** dash `-` and underscore `_` are different characters.
- **Folder names:** `image` is not `images`.
- **Extensions:** `.htm` is not `.html`.

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

Two audio players that both play the bell, a video with a momo poster that plays, and a map inside the window.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. Open F12 → **Console**. A red 404 line shows the exact path the browser could not find.
2. Open the `media/` and `images/` folders in VS Code and compare each name letter by letter.
3. Ask the AI tutor: "What does the controls attribute do on a video tag?"

## Fast?

Go on to **D2-05**. Done with that too? Try **D2-FF5**.
