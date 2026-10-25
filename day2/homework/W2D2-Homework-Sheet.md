# Week 2 · Day 2 Homework: Semantic HTML, Accessibility, Media → CSS Basics
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 2 · Layer: Frontend*

> **Tonight in one sentence:** you repair a haunted portfolio, then give your own page a semantic skeleton and a real outfit, and test yourself on why each rule works.

**Core time:** about 2.5 hours. **HW1 and HW3 are the must-do (1 hour).** Do HW2 if you can (about 1.5 hours). **Stretch:** HW4 adds about 30 minutes. It is optional.

---

## Before you start (5 minutes)

1. Open VS Code. **File → Open Folder → `W2D2`.** Open the folder, not a single file.
2. Live Server and HTMLHint must be installed (`Ctrl+Shift+X`). Open the **Problems** panel (`Ctrl+Shift+M`).
3. In Chrome, open **F12**. You will live in two places tonight:
   - **Elements → Styles**: which CSS rules reached this element, and which are crossed out.
   - **Elements → Computed** (the box diagram): content, padding, border, margin.
4. Keep `notes/11-day2-cheatsheet.md` and `notes/09-debugging-css.md` open in a second tab.

**CSS fails silently too.** A wrong rule is not an error message. The browser just drops it. Your job is to notice what is missing. F12 → Styles shows dropped declarations with a yellow ⚠ or a line through them.

---

## The plan for tonight

| # | Id | Title | Type | Time | Folder |
|---|---|---|---|---|---|
| 1 | **D2-HW1** | Haunted portfolio repair | 🐞 bug-hunt, 12 bugs | 40 min (must-do) | `homework/D2-HW1-haunted-portfolio-repair/` |
| 2 | **D2-HW2** | Style your portfolio | 🔨 build | about 1.5 h (if you can) | `homework/D2-HW2-style-your-portfolio/` |
| 3 | **D2-HW3** | Self-check & interview prep | 📝 questions | 20 min (must-do) | `homework/D2-HW3-Self-Check-and-Interview-Prep.md` |
| 4 | **D2-HW4** | Patan Craft Shop replay (**stretch**) | 🐞 bug-hunt, 10 bugs | +30 min | `homework/D2-HW4-patan-craft-shop-replay/` |

Do them in this order. Short on time? Do HW1 and HW3 first; they are the must-do. HW1 trains your eye on HTML *and* CSS bugs together. HW2 is your own page, so it goes in your portfolio. HW3 checks you can explain it. HW4 is extra practice.

---

## D2-HW1 · Haunted portfolio repair (40 min, must-do) 🐞

**The story.** Rajan built a 2-page portfolio (`index.html` and `projects.html`) with one shared stylesheet. Something haunts it: the page looks almost unstyled, the nav is a list, the cards overflow, and the footer ignores its colours. There are **12 bugs**.

**Files:** `index.html`, `projects.html`, `css/style.css`, `images/` (Rajan's avatar and two project pictures).

**What you practise:**
- linking a stylesheet (the path!)
- semantic rules: one `<main>`, sections need headings
- `alt` on images
- display values, class and id matching (case matters)
- units, colours, border shorthand
- the box model and `box-sizing`
- a missing `}`

**How to work:**
1. Read the folder's `README.md`. It has a **"fix this first"** note. Until the stylesheet loads, no CSS bug is visible.
2. Open both pages with Live Server.
3. Right-click anything that looks wrong → **Inspect**. In **Styles**, look for crossed-out or ⚠ lines. In **Computed**, read the box diagram.
4. Run Lighthouse → Accessibility on `index.html` (F12 → Lighthouse, works offline).

**Done when:**
- [ ] Both pages are styled: horizontal nav, cards side by side without overflow, coloured footer.
- [ ] 0 problems in the Problems panel for both HTML files.
- [ ] Lighthouse Accessibility is **90 or more** on `index.html`.
- [ ] You wrote down every bug: file, what was wrong, how you saw it (V, D(HH), D(LH), D(W3C) or R).

**Scoreboard:** `I found __ / 12. The bug that fooled me longest: ________`

---

## D2-HW2 · Style your portfolio (about 1.5 h, if you can) 🔨

**The story.** This is *your* page, not Rajan's. Take your **Week 1 About Me page** (or your **D1-10 Kathmandu gallery**) and turn it into a small, styled portfolio. Copy it into a new folder `my-portfolio/` inside `homework/D2-HW2-style-your-portfolio/`, and add a second page (for example `about.html`), so you have **2 pages that share one stylesheet**: the "school uniform".

**Open** `homework/D2-HW2-style-your-portfolio/README.md` and `CHECKLIST.md`. The checklist has **12 required items**. In short:
1. `header`, `nav`, `main` and `footer` (semantic skeleton)
2. a horizontal nav (`display: inline-block` and `list-style: none`)
3. one box-model card (width, padding, border, margin, `box-sizing: border-box`)
4. font sizes in `rem`
5. a 3-colour hex palette
6. a `:hover` state
7. every `img` has a good `alt`
8. a `<label>` on every input
9. passes HTMLHint (0 problems)
10. Lighthouse Accessibility ≥ 90
11. works from the `W2D2` folder
12. every link resolves

**Tips:**
- Start with the HTML skeleton. Style only when the skeleton is right ("skeleton first, outfit second").
- Put the link in the `<head>` of every page: `<link rel="stylesheet" href="css/style.css">`.
- Change one thing, save, look. Live Server reloads for you.
- When something won't change, inspect it. Is your rule in Styles? Is it crossed out? Who won?

**Done when:** every one of the 12 boxes in `CHECKLIST.md` is ticked, and you can explain every CSS line.

**Bonus:** add a third page that uses the same stylesheet with no new CSS, or try D2-FF6 and compare your CSS with Bootstrap.

---

## D2-HW3 · Self-check & interview prep (20 min, must-do) 📝

Open `homework/D2-HW3-Self-Check-and-Interview-Prep.md`.

1. **Part 1, self-check (10 questions):** answer from memory first. Mark ✔ / ~ / ✘.
2. **Part 2, interview questions (14 questions, theory + small code):** say the theory answers **out loud** (20–40 seconds each). Write the code answers, then check them in the browser.
3. The answer key is shared by your instructor after you try. Re-read the notes for every ✘.

**Done when:** you have an answer for all 24 questions, and a list of your ✘ topics.

---

## D2-HW4 · Patan Craft Shop replay (stretch, +30 min) 🐞

**Optional.** Do it only after HW1–HW3.

**The story.** A craft shop near Patan Durbar Square has a one-page site with a video and a stylesheet. It has **10 bugs**. They are the Day 2 bugs we didn't have time for in class.

**Files:** `index.html`, `css/style.css`, `media/momo-steam.mp4`, `images/` (craft shop, video poster).

**What you practise:** the head for search engines and phones (Lighthouse finds one; the device toolbar shows the other), video sources, id case, invalid values (too many, too few), widths that are too wide, heights that are too small, and hiding things the right way.

**Hint:** scroll sideways. Resize the window. Press play on both videos. Run Lighthouse. Try the phone view (F12 → Ctrl+Shift+M).

**Done when:** both videos play, nothing scrolls sideways, no text spills out of a box, Lighthouse finds no head problems, and the phone view is not tiny.

**Scoreboard:** `I found __ / 10. The new thing I learnt: ________`

---

## Submit checklist (before the next class)

Zip each homework folder and send it the way your instructor asks. Also bring your `W2D2` folder on your laptop.

- [ ] **HW1:** Rajan's 2 pages are fixed; 0 HTMLHint problems; Lighthouse Accessibility ≥ 90 on `index.html`.
- [ ] **HW1:** my bug list is in `homework/D2-HW1-haunted-portfolio-repair/my-bugs.md`.
- [ ] **HW2:** my portfolio is in `homework/D2-HW2-style-your-portfolio/my-portfolio/` (2 HTML pages + `css/style.css` + `images/`).
- [ ] **HW2:** all 12 boxes in `CHECKLIST.md` are ticked, and I wrote my Lighthouse score next to item 10.
- [ ] **HW3:** I answered all 24 questions and wrote my ✘ list at the bottom of the HW3 file.
- [ ] *(Stretch)* **HW4:** the Patan Craft Shop page is fixed.
- [ ] I typed every line myself and can explain every line.
- [ ] **One volunteer** shows their HW2 portfolio at the start of the next class.

---

## AI rule for this week

**Stage 1, AI as Tutor.** AI may **explain** a concept or an error. **You type every line.** Try first, then ask.

A good prompt for tonight:
> "My three cards are 300px wide inside a 960px row, but the third one wraps to a new line. I have padding 20px and a 5px border. Explain how the box model adds these up, and what `box-sizing` changes. Don't write my CSS."

A bad prompt: "Write CSS for my portfolio." (It would not be your portfolio, and you could not explain it in an interview.)

---

## Stuck?

1. Re-read the folder's `README.md` hints.
2. Open the matching notes file: semantic tags → `notes/01`, alt/labels/Lighthouse → `02`, media → `03`, linking CSS → `04`, selectors → `05`, units/colours/fonts → `06`, box model → `07`, display → `08`, "my CSS is ignored" → `09`.
3. Inspect the element. Read Styles (crossed out?) and Computed (the box).
4. Ask a classmate to *point* (not type).

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Coming next: CSS from basics to advanced (sessions 3 / 3.2): flexbox, grid, positioning and responsive design.*
