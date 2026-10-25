# D2-03 · A11y audit: TSI Admissions

**Time:** 10 min · **Type:** 🐞 Bug-hunt

**Goal:** Make the TSI Admissions page work for everyone, including people who use a screen reader.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. **Tab walk:** click in the address bar, then press **Tab** again and again. Where does focus go? Can you tell where each link goes?
2. **Lighthouse:** F12 → **Lighthouse** tab → tick **Accessibility** only → **Analyze page load**. Read the red items.
3. **Read the code** for the problems no tool can see.
4. Mend each problem in `index.html`, save, and run Lighthouse again.

## The bugs

**There are 6 bugs. Find at least 4.**

Hints, one per bug type:

- **Language:** what language should a screen reader speak?
- **The tab label:** look at the browser tab. Does it say what this page is?
- **Pictures:** a meaningful picture needs words. A decoration needs *empty* words.
- **Links:** read only the link texts, one after another. Do they make sense alone?
- **Forms:** every input needs a label you can click.

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

> **The parcel label read aloud.** A screen reader reads the label (`lang`, `title`, alt, link text) to someone who cannot see the parcel. If the label is wrong or empty, they are lost.

## Done looks like

Lighthouse Accessibility is 100 (or close), the tab shows a real title, every link says where it goes, and clicking "Phone number" puts the cursor in the phone box.

## Scoreboard

`I found __ / 6. The reveal taught me: ________`

## Stuck?

1. Lighthouse is in F12. If you can't see the tab, click **>>** at the top of DevTools.
2. Open `notes/02-accessibility-and-meta.md`: look at "alt: meaningful vs decorative".
3. Ask the AI tutor: "What alt text should a decorative image have, and why?"

## Fast?

Try **D2-FF5** Lost & Found.
