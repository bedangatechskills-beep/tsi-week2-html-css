# Week 2 · Day 1 Homework: How the Web Works + HTML Core
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Layer: Frontend*

> **Tonight in one sentence:** you repair a broken site, build one new page, then test yourself, so tomorrow you can dress the skeleton with CSS.

**Core time:** about 2.5 hours. **HW1 and HW3 are the must-do (1 hour).** Do HW2 if you can (about 1.5 hours). **Stretch:** HW4 adds about 30 minutes. It is optional.

---

## Before you start (5 minutes)

1. Open VS Code. **File → Open Folder → `W2D1`.** Open the folder, not a single file.
2. Check that **Live Server** and **HTMLHint** are installed (Extensions panel, `Ctrl+Shift+X`). If not, install them now.
3. Open the **Problems** panel with `Ctrl+Shift+M`. Keep it open all evening. It is your spell-checker for HTML.
4. Keep `notes/11-day1-cheatsheet.md` open in a second tab.

**The browser is a polite guesser.** It never shows you an error. It guesses and carries on. Your tools (HTMLHint, F12 Elements, the address bar) are how you catch its guesses.

---

## The plan for tonight

| # | Id | Title | Type | Time | Folder |
|---|---|---|---|---|---|
| 1 | **D1-HW1** | Kathmandu Treks repair | 🐞 bug-hunt, 12 bugs | 40 min (must-do) | `homework/D1-HW1-kathmandu-treks-repair/` |
| 2 | **D1-HW2** | Momo House catering page | 🔨 build | about 1.5 h (if you can) | `homework/D1-HW2-momo-house-catering-page/` |
| 3 | **D1-HW3** | Self-check & interview prep | 📝 questions | 20 min (must-do) | `homework/D1-HW3-Self-Check-and-Interview-Prep.md` |
| 4 | **D1-HW4** | Thamel Guesthouse replay (**stretch**) | 🐞 bug-hunt, 12 bugs | +30 min | `homework/D1-HW4-thamel-guesthouse-replay/` |

Do them in this order. Short on time? Do HW1 and HW3 first; they are the must-do. HW1 warms you up on every bug type from today. HW2 is the real build. HW3 checks that you can *explain* what you did. HW4 is for anyone who wants more.

---

## D1-HW1 · Kathmandu Treks repair (40 min, must-do) 🐞

**The story.** A small trekking company in Thamel has a 3-page website: a home page, a treks page with a price table, and a booking form. Their nephew built it in one night. It has **12 bugs**. You are the repair crew.

**Files:** `index.html`, `treks.html`, `booking.html`, and `images/` (Everest, Annapurna, Langtang).

**What you practise:** every bug type from today, on a site you have not seen before.
- skeleton and `<head>` mistakes
- file names and paths (including capital letters)
- links between pages and `#id` jumps
- lists inside lists
- tables: header cells, `rowspan`
- forms: labels, input types, radio groups, buttons

**How to work:**
1. Read the folder's `README.md` first. It has a **"fix this first"** note. Read it.
2. Open each page with Live Server. Click every link. Look at every picture.
3. Read the Problems panel (`Ctrl+Shift+M`).
4. For anything that looks fine but feels wrong, open **F12 → Elements** and compare what the browser built with what you wrote.
5. Fill the form and press the button. Read the address bar.

**Done when:**
- [ ] All 3 pages open, every image shows, and every link goes to the right place.
- [ ] The Problems panel shows **0 problems** for all 3 files.
- [ ] You wrote down every bug you found: file, what was wrong, how you saw it (V, D(HH), D(F12), D(URL), H or R).

**Scoreboard:** `I found __ / 12. The bug that fooled me longest: ________`

---

## D1-HW2 · Momo House catering page (about 1.5 h, if you can) 🔨

**The story.** Didi's Momo House now cooks for offices and parties. She needs a new page, `catering.html`, so customers can see the packages and send a booking request.

**Your starter** (in the HW2 folder) is the repaired Momo House site from class (D1-15): `index.html`, `menu.html`, `order.html`, `about.html` and the 4 Momo House pictures.

**Build `catering.html` with:**
1. The full skeleton: `<!DOCTYPE html>`, `lang="en"`, `meta charset`, `meta viewport`, a real `<title>`.
2. The same nav as the other pages, plus a new **Catering** link.
3. One `<h1>`, then headings in order (no jumps).
4. **One table of packages**: a `caption`, a header row with `th scope="col"`, at least 3 packages (for example Office Lunch, Birthday Party, Wedding Feast), with plates and price in Rs.
5. **One form** with `method="get"`:
   - a `date` field (event date)
   - a `number` field (how many people), with `min`
   - a **package** radio group (one shared `name`, a `value` on each radio) inside `<fieldset>` + `<legend>`
   - a `textarea` for notes (with a proper closing tag)
   - a submit button **inside** the form
   - a `<label>` for every input, with `for` matching the `id`
6. Add the **Catering** link to the nav on **all 5 pages**.

**Test it like the class did:**
- Click every label. The cursor must jump into its box.
- Fill the form and submit. Read the address bar. Every answer must appear as `name=value`.

**Done when:**
- [ ] 5 pages, and the nav on every page has 5 links that all work.
- [ ] The table has a caption, header cells and at least 3 packages.
- [ ] Submitting the form shows every field in the address bar, for example `catering.html?event-date=2026-12-20&people=60&package=wedding&notes=…`.
- [ ] The Problems panel shows 0 problems for all 5 files.

**Bonus:** add a `tfoot` row to the table ("Prices include Rs. 0 delivery inside Ring Road"), and a "back to top" link that jumps to `#top`.

---

## D1-HW3 · Self-check & interview prep (20 min, must-do) 📝

Open `homework/D1-HW3-Self-Check-and-Interview-Prep.md`.

1. **Part 1, self-check (10 questions):** answer from memory first. Then check your notes. Mark each one ✔ (knew it), ~ (half) or ✘ (didn't).
2. **Part 2, interview questions (12 questions):** say each answer **out loud**, as if a Kathmandu tech lead asked you. 20–40 seconds each. Interviews are spoken.
3. Your instructor shares the answer key after you try. Compare. Re-read the notes for every ✘.

**Done when:** you have an answer (written or spoken) for all 22 questions, and a list of your ✘ topics.

---

## D1-HW4 · Thamel Guesthouse replay (stretch, +30 min) 🐞

**Optional.** Do it only after HW1–HW3.

**The story.** A guesthouse in Thamel has a home page and a booking page. It has **12 bugs**. They are the bugs we did not have time for in class, so some of them are new to you.

**Files:** `index.html`, `booking.html`, `images/` (guesthouse, deluxe room).

**What you practise:** the head and the title, image names and `alt`, table rows and `caption`, and the trickier form bugs (`select`, `option`, `required`, missing `name`).

**Hint:** some bugs only show up when you **submit** the form, or when you **leave a field empty** and submit. Some only show up in **F12 → Elements**. One only breaks on a real Linux server.

**Done when:** both pages pass HTMLHint, the room image shows, and an empty or wrong form cannot be sent.

**Scoreboard:** `I found __ / 12. The new thing I learnt: ________`

---

## Submit checklist (before the next class)

Tick every box. Zip each homework folder and send it the way your instructor asks. Also bring your `W2D1` folder on your laptop.

- [ ] **HW1:** the 3 Kathmandu Treks pages are fixed, with 0 problems in the Problems panel.
- [ ] **HW1:** my bug list (file + bug + visibility tag) is in `homework/D1-HW1-kathmandu-treks-repair/my-bugs.md`.
- [ ] **HW2:** `homework/D1-HW2-momo-house-catering-page/catering.html` exists, and all 5 pages link to it.
- [ ] **HW2:** I submitted the form once and copied the address bar into `homework/D1-HW2-momo-house-catering-page/my-url.txt`.
- [ ] **HW3:** I answered all 22 questions and wrote my ✘ list at the bottom of the HW3 file.
- [ ] *(Stretch)* **HW4:** the Thamel Guesthouse pages are fixed.
- [ ] I typed every line myself. I can explain every line. (Ask yourself: "Could I explain this line to Aarav?")
- [ ] **One volunteer** will show their HW2 page on the projector at the start of Day 2. It could be you.

---

## AI rule for this week

**Stage 1, AI as Tutor.** AI may **explain** a concept or an error to you. **You type every line.** Try first, then ask.

A good prompt for tonight:
> "My HTML table has one cell sticking out on the right of the second row. I used `rowspan="2"` in the first row. Explain how rowspan changes how many cells the next row needs. Don't write the code for me."

A bad prompt: "Fix my booking.html." (You learn nothing, and you can't explain the result.)

---

## Stuck?

1. Re-read the folder's `README.md` hints.
2. Open the matching notes file: paths → `notes/06-links-and-paths.md`, images → `07`, tables → `08`, forms → `09`, "it looks fine but HTMLHint is angry" → `10`.
3. Open **F12 → Elements**. Compare what the browser built with what you wrote.
4. Ask a classmate to *point* (not type).

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next class (Day 2): semantic HTML and accessibility, then the skeleton gets its outfit: CSS.*
