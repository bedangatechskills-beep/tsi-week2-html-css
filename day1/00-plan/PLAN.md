# PLAN v2 — Week 2 · HTML & CSS Hands-On (Day 1 + Day 2)

> **Single source of truth for every builder.** If your build disagrees with this file, this file wins.
> The one exception: if something here does not work in a real browser, change it and log the change in **your own**
> change log `week2/dayN/CHANGES-FROM-PLAN-<builder>.md` (builder = A0, A1, A2, B or C; one line per change: id, what,
> why). QA merges the logs at the end.
> **v2** applies the Fable review (`.firstmate/reports/review-plan.md`) and the firstmate's decisions. §8 lists every
> change. **Day 1 exercise ids were renumbered in v2** (a new Internet block was added); §8.3 has the old→new map.

Program: AI-Powered Full Stack Developer Program · Tech Skills Institute (TSI) Nepal · Instructor: Bedanga
Covers old sessions **2 (Web Foundations)**, **2.1 (HTML Hands-On)** and **2.2 (HTML Example Gallery)**, then extends.
AI stage: **Stage 1, AI as Tutor** (AI may explain concepts and errors; students type every line).
The One Rule, quoted on both decks and both note sets: **"You may only ship code you can explain, line by line."**

---

## 0. Decision: two 4-hour sessions (and why)

One 4-hour session cannot fit HTML core, semantic/a11y/media and CSS basics while keeping hands-on dominant. Every
topic would get a quick look and no time to fix bugs. So:

| Day | Folder (source) | Zip top folder | Theme | Why this cut |
|---|---|---|---|---|
| **Day 1** | `week2/day1/` | `W2D1/` | **How the web works + HTML Core**: Internet (postal system), VS Code power tools, skeleton, text, entities, lists, links and paths, images, tables, forms, debugging/validation | Everything in the old 2 / 2.1 / 2.2 decks except CSS and Bootstrap. These are *content* tags and fit the "skeleton" analogy. Ends with a pairs bug-hunt on a whole broken site (Momo House). |
| **Day 2** | `week2/day2/` | `W2D2/` | **Semantic HTML, Accessibility, Media, Meta → CSS Basics**: selectors, colours, units, fonts, box model, display, a styled multi-page mini-site, Bootstrap teaser | Semantic tags and a11y are the bridge: students tidy the skeleton, *then* dress it. CSS stays at "basics" level (no flexbox, grid or positioning), so sessions **3 / 3.2** still have a job. Day 2 styles the Momo House site that Day 1 repaired. |

Shared storyline: **Momo House** (a Kathmandu momo restaurant), the **TSI Canteen**, the **Kathmandu gallery**, the
**TSI course signup**. Characters: **Aarav** (student), **Sunita Gurung** (student), **Didi** (canteen/restaurant
owner), **Rajan** (portfolio owner).

Mechanics used every day:
- **Bug-hunt ("mend broken stuff")** is the main exercise type. In-class hunts have **4–6 bugs** (about 1.5–2 min per
  bug). Every README says "There are N bugs. Find **at least N−2**." It gives one hint per bug type, the
  visibility legend, and a **scoreboard line**: `I found __ / N. The reveal taught me: ________`.
- **Reveal (2 min, T):** after every in-class bug-hunt the instructor opens `solution/BUGS.md` on the projector and
  walks through each bug: what it was and how you could see it. No bug goes unexplained.
- **Nothing is thrown away:** bugs cut from the in-class hunts (v1 had 66 on Day 1 + 63 on Day 2; v2 has 42 + 42 in class) all moved into extra fast-finisher and
  homework hunts (D1-FF5, D1-HW4, D2-FF5, D2-HW4).
- **Instructor demos** are staged folders. `step-NN-*` holds the *finished state of step NN*. If a live demo goes
  wrong, open the next step folder and carry on.
- **Fast finishers:** 6 per day in `classwork/fast-finishers/`. Ids: **D1-FF1, D1-FF2, D1-FF3, D1-FF4, D1-FF5,
  D1-FF6** and **D2-FF1, D2-FF2, D2-FF3, D2-FF4, D2-FF5, D2-FF6**.
- **Show & tell (3 min, T):** twice, after D1-10 (gallery) and D2-13 (profile card), 2–3 students' pages go on the
  projector. Code gets shown, not hidden.
- **No internet needed in class.** Images are local SVGs, media is local, and Bootstrap is a local copy. D1-01 has an
  offline path. The W3C validator, `ping google.com` and Kahoot are the bonus when Wi-Fi is up.

### Bug visibility legend (used in every bug list, README and BUGS.md)

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint with the class `.htmlhintrc` (§3.0) |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(URL)** | Submit the form (`method="get"`) and read the address bar | the URL bar |
| **D(LH)** | Lighthouse → Accessibility report (works offline) | Chrome DevTools, Day 2 only |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **H** | Hidden on Windows, breaks on a real Linux server (file-name case) | explained by the instructor |
| **R** | **Rule check**: no tool fires; you must read the code against the rule (e.g. "one h1", "no heading jumps") | your brain + the notes |

---

## 1. Run sheets (minute by minute)

**T** = instructor talks or demos (students watch, including reveals and show & tell). **H** = students' hands on the
keyboard (code-along typing, exercises). **The H ratio is computed on the 220 non-break minutes** (240 − 2 × 10 min
breaks). Target ≥ 65 %.

### 1.1 Day 1 — How the Web Works + HTML Core (240 min)

| Clock | Min | Block | Analogy / hook | Content | Activity (exercise id) | T | H |
|---|---|---|---|---|---|---|---|
| 0:00–0:10 | 10 | **B0 Welcome & setup check** | "A professional kitchen: before cooking, check the stove works" | Unzip `W2D1/`, File → Open Folder `W2D1`, Live Server, the One Rule. **No Live Server yet?** Double-click the file to open it in Chrome and press F5 after each save; install at the first break. Don't let one install stop the room | **D1-00** Setup check | 2 | 8 |
| 0:10–0:25 | 15 | **B1 How the web works** | **The Internet is a postal system**: browser = you writing a letter, DNS = phone book, IP = home address, server = warehouse, response = parcel | Request/response, DNS, IP, "a page is many parcels", restaurant recap (HTML structure / CSS style / JS behaviour) | **D1-01** See the letters arrive: ping, F12 Network tab, View Source | 7 | 8 |
| 0:25–0:35 | 10 | **B2 VS Code power tools + Emmet** | Kitchen: knives within reach. Emmet = **speed-dial for tags** | Emmet `!`, `>`, `+`, `*`, `.`, `$`, `lorem`; Alt+Shift+↓, Ctrl+/, Shift+Alt+F, Ctrl+D, **linked editing** (rename both tags at once) | Demo (watch, inside T) → **D1-02** Emmet speed drill | 3 | 7 |
| 0:35–1:05 | 30 | **B3 Skeleton, anatomy, nesting, comments + your spell-checker** | **Skeleton** + "labeled boxes inside boxes" | DOCTYPE, html **`lang="en"`**, head/body, meta charset/viewport, title, element vs tag vs attribute, nesting rule (last opened, first closed), comments. **"Browsers are polite guessers"**, then a 3-min demo: HTMLHint squiggles + Problems panel (Ctrl+Shift+M) + F12 Elements | Code-along (5) → **D1-03** Skeleton from memory → **D1-04** 🐞 Broken Skeleton → reveal | 11 | 19 |
| 1:05–1:28 | 23 | **B4 Text = tone of voice + entities** | **Tone of voice** (stress, pauses, quoting someone) | h1–h6 hierarchy (one h1), p, strong vs b, em vs i, br, hr, blockquote, q, span, entities `&lt; &gt; &amp; &copy; &nbsp;` | Code-along (2) → **D1-05** Grandmother's note → **D1-06** 🐞 Canteen News → reveal | 7 | 16 |
| 1:28–1:38 | 10 | ☕ **Break** | Teaser on screen: "This page has 6 broken links. After the break, you fix them." Late Live Server installs happen now | — | — | — | — |
| 1:38–1:57 | 19 | **B5 Lists & nesting** | **Shopping list vs recipe steps** (does order matter?) | ul, ol (`type`, `start`), li, nested lists (inside an li), dl/dt/dd | Code-along (2) → **D1-07** 🐞 Broken Lists → reveal → **D1-08** Momo recipe | 5 | 14 |
| 1:57–2:27 | 30 | **B6 Links, paths & images** | **Same house vs postal address** (slides 32–34), then **"a sticker, not an envelope"** (slide 35). The two analogies go on separate slides | a href, absolute vs relative, folders, `../`, `target="_blank"`, `mailto:` / `tel:`, `#id` anchors, img src/alt/width, figure/figcaption, case-sensitive names | Code-along (3) → **D1-09** 🐞 Broken Paths → reveal → **D1-10** Kathmandu gallery → **show & tell (3)** | 11 | 19 |
| 2:27–2:49 | 22 | **B7 Tables** | **Four tags, one team**; a table is the **canteen price board**: data, not layout | table, tr, th, td, caption, thead/tbody/tfoot, colspan, rowspan, `scope` | Code-along (2) → **D1-11** 🐞 Broken Timetable → reveal → **D1-12** Exam results table | 6 | 16 |
| 2:49–2:59 | 10 | ☕ **Break** | Teaser: "Forms let the visitor talk back." | — | — | — | — |
| 2:59–3:27 | 28 | **B8 Forms** | **The order slip** on a restaurant table (the waiter = the server, later in the course) | form action/method, label for↔id, input types (text, email, tel, password, number, date, radio, checkbox, color), name/value, select/option, textarea, fieldset/legend, required, placeholder, button submit/reset. **Trick: submit with `method="get"` and read the URL** | Code-along (3) → **D1-13** 🐞 Broken Signup → reveal → **D1-14** Extend the order slip | 8 | 20 |
| 3:27–3:49 | 22 | **B9 Capstone bug-hunt relay (pairs)** | "Didi's Momo House website broke the night before opening. You are the repair crew." | Everything above, across 4 pages. **Pairs who finish become helpers for another pair** (then FF) | Rules (2) → **D1-15** 🐞 Momo House repair (10 bugs) → reveal (3) | 5 | 17 |
| 3:49–4:00 | 11 | **B10 Validate, quiz, homework, exit ticket** | "Spell-checker for HTML", second round | W3C validator demo (1 min, Wi-Fi bonus), **10-question Kahoot-style quiz** (5 min, 30 s each; Kahoot if Wi-Fi, otherwise the deck slide + hands up A/B/C/D), homework + exit ticket (1) | **D1-16** Validate & self-audit (4) | 7 | 4 |
| **Total** | **240** | | | | | **72** | **148** |

**Minute sum:** 10+15+10+30+23+10+19+30+22+10+28+22+11 = **240** ✔
**Day 1 H ratio:** 148 / 220 non-break min = **67.3 %** ✔ (for reference, 61.7 % of all 240 min).
**Golden rule:** the longest T stretch without H is 8 min (B1 postal-system teach). ✔ ≤ 20.
**Stretch:** if the room sags after B3 (65 min in), the instructor calls a 3-min stand-up stretch and takes it from the
B10 quiz (cut to 7 questions).

### 1.2 Day 2 — Semantic HTML, A11y, Media → CSS Basics (240 min)

| Clock | Min | Block | Analogy / hook | Content | Activity (exercise id) | T | H |
|---|---|---|---|---|---|---|---|
| 0:00–0:07 | 7 | **B0 Hook: same skeleton, new outfit** | **Skeleton & outfit** (CSS Zen Garden idea, shown locally) | One page wearing 3 stylesheets; homework spot-check (1 volunteer) | **D2-00** Outfit swap (change one `href`) | 4 | 3 |
| 0:07–0:33 | 26 | **B1 Semantic HTML5 layout** | **Boxes with names / rooms in a house** (kitchen, bedroom, not "room 1, room 2") | header, nav, main, section, article, aside, footer, figure; div/span = unlabeled boxes; one main; sections need headings; button vs div | Code-along (3) → **D2-01** Div soup → semantic → **D2-02** 🐞 Semantic Misuse → reveal | 8 | 18 |
| 0:33–0:52 | 19 | **B2 Accessibility + meta/SEO** | **The parcel label read aloud** (head/meta = the label; a screen reader reads label and contents to someone who can't see them) | lang, alt (meaningful vs `alt=""`), link text, labels, heading order, contrast, title, meta description, viewport, favicon. **Instructor-only demo:** Windows Narrator (Ctrl+Win+Enter) on the projector with speakers. Students use the Tab-key walk + Lighthouse | Code-along (2) → **D2-03** 🐞 A11y Audit → reveal | 7 | 12 |
| 0:52–1:10 | 18 | **B3 Audio, video, iframe** | **TV, radio, and a window into another room** | audio/video with controls, source + type, poster, the autoplay rule (muted), fallback text; iframe src + title (a local page, so it works offline) | Code-along (2) → **D2-04** 🐞 Broken Media → reveal → **D2-05** Media corner | 5 | 13 |
| 1:10–1:20 | 10 | ☕ **Break** | Teaser: "After the break, the skeleton gets its outfit." | — | — | — | — |
| 1:20–1:44 | 24 | **B4 CSS intro: rule anatomy, 3 ways to add CSS** | **The outfit**: inline = sticky note on one shirt, internal = outfit list for one person, external = **school uniform** for everyone | selector { property: value; }, inline vs `<style>` vs `<link rel="stylesheet">`, comments `/* */`, cascade (last rule wins), DevTools Styles panel | Code-along (4) → **D2-06** 🐞 Stylesheet Not Loading → reveal → **D2-07** Restyle the bio | 7 | 17 |
| 1:44–2:06 | 22 | **B5 Selectors** | **Calling students in class**: "everyone" (element), "red team" (.class), "Aarav, by name" (#id), "red team in row 2" (descendant) | element, .class, #id, grouping `,`, descendant (space), `.a.b`, `:hover`, light specificity (id > class > element) | Code-along (2) → **D2-08** 🐞 Selector Mix-ups → reveal → **D2-09** Selector target practice | 7 | 15 |
| 2:06–2:25 | 19 | **B6 Colours, units, fonts, text** | **Paint shop** (slide 32), then **measuring tape** (slide 33). Separate slides | named / hex / rgb / rgba; px / % / rem / em; font-family stacks with a fallback; font-size, font-weight, line-height, text-align, text-decoration, letter-spacing | **D2-10** 🐞 Units & Colours → reveal → **D2-11** Theme the canteen menu | 6 | 13 |
| 2:25–2:35 | 10 | ☕ **Break** | Teaser: "Everything on a web page is a box being shipped." | — | — | — | — |
| 2:35–3:03 | 28 | **B7 Box model + DevTools** | **Parcels being shipped**: content = item, padding = bubble wrap, border = cardboard, margin = gap between parcels | width/height, padding, border (width style colour), margin, shorthand (1/2/4 values), `margin: 0 auto`, `box-sizing: border-box`, border-radius, DevTools box diagram | Code-along (3) → **D2-12** 🐞 Broken Cards → reveal → **D2-13** Profile card → **show & tell (3)** | 10 | 18 |
| 3:03–3:19 | 16 | **B8 Display** | **The queue vs the bench** (block = each on their own line; inline = side by side on a bench, can't be pushed up or down; inline-block = side by side but keeps own size; none = left the room) | block, inline, inline-block, none vs `visibility: hidden`, `list-style: none`, horizontal nav, why inline ignores vertical margin | Code-along (3) → **D2-14** 🐞 Nav Won't Behave → reveal | 5 | 11 |
| 3:19–3:49 | 30 | **B9 Mini-site build: style Momo House** | "Opening night: dress the restaurant" (school uniform = one stylesheet for every page) | One shared `css/style.css` linked from 4 pages, 5 checkpoints about every 6 min (the instructor checks the room at each) | **D2-15** Style Momo House (build) | 2 | 28 |
| 3:49–4:00 | 11 | **B10 Bootstrap teaser + wrap-up** | **IKEA furniture** (ready-made parts vs raw wood) | 4-min instructor demo with local `bootstrap.min.css` (`container`, `btn btn-primary`, `card`); **10-question Kahoot-style quiz** (5 min); homework + exit ticket (2). Students try Bootstrap in **D2-FF6** or at home | — (T only) | 11 | 0 |
| **Total** | **240** | | | | | **72** | **148** |

**Minute sum:** 7+26+19+18+10+24+22+19+10+28+16+30+11 = **240** ✔
**Day 2 H ratio:** 148 / 220 non-break min = **67.3 %** ✔ (61.7 % of all 240 min).
**Golden rule:** the longest T stretch is 8 min (B1 teach, B2 teach + Narrator). ✔
**Stretch:** a 3-min stretch after B3 if needed, taken from the B10 quiz.

---

## 2. Topics and analogies (one analogy per block; where a block has two, they are on separate slides)

| Day·Block | Topic | Analogy (keep it the same in deck, notes and guide) | Source |
|---|---|---|---|
| D1·B0, B2 | VS Code, Live Server, Emmet | **Professional kitchen**: labeled tools within reach; "taste as you cook" = Live Server. Emmet = **speed-dial for tags** | old deck 2 |
| D1·B1 | Internet, DNS, request/response | **Postal system**: browser = you writing a letter with a request; HTTP request = the letter; IP = a precise home address; DNS = the phone book (name → address); server = a warehouse that mails back the goods; response = the parcel (HTML, CSS, images). "The internet is not magic. It is computers mailing text to each other." | old deck 2 (slides 3–6) |
| D1·B1 | What a website is (recap) | **Restaurant**: HTML = ingredients & menu structure, CSS = plating & decor, JS = the waiter | old deck 2 |
| D1·B3 | HTML skeleton, anatomy, nesting | **Skeleton** (nothing stands without it) + **labeled boxes inside boxes**: opening label, contents, closing label. Last box opened, first box closed | old deck 2 |
| D1·B3 | `<head>` vs `<body>` | `<head>` = **the label on the parcel** (information about the page, invisible); `<body>` = **what's inside the parcel** | old deck 2 |
| D1·B3, B10 | Debugging and validation | Browsers are **polite guessers** (they never show an error, they guess). HTMLHint = **spell-checker for HTML** | new |
| D1·B4 | Text tags | **Tone of voice**: strong = "this matters", em = stressed word, br = a pause in one thought, blockquote = "quoting someone else" | old deck 2.1 |
| D1·B4 | Entities | **Escape codes**: `&lt;` means "print a <, don't start a tag" | new |
| D1·B5 | Lists | **Shopping list** (order doesn't matter → ul) vs **recipe steps** (order matters → ol); a nested list = a **sub-list under one item** | new |
| D1·B6 | Links and paths | **Same house vs postal address**: relative = "the kitchen", absolute = full postal address. `../` = **"go downstairs one floor"** | old deck 2.1 |
| D1·B6 | Images | **A sticker, not an envelope** (void tag). alt = **the description you read over the phone** | old decks 2 / 2.1 |
| D1·B7 | Tables | **Four tags, one team** / the **canteen price board** | old deck 2.1 |
| D1·B8 | Forms | **The order slip**: boxes to fill, ticks, "choose one" circles; label = the printed word next to each box; name = **the column the kitchen files your answer under** | old deck 2.1 |
| D1·B9 | Capstone | **Repair crew** | new |
| D2·B0 | CSS idea | **Skeleton & outfit** (Zen Garden) | old deck 2 |
| D2·B1 | Semantic HTML5 | **Boxes / rooms with names**: `<div class="header">` → `<header>`; Google, screen readers and AI read the names | old deck 2 + old Day6 deck |
| D2·B2 | Accessibility and meta | **The parcel label read aloud** | old Day6 deck |
| D2·B3 | Media and iframe | **TV, radio, and a window into another room** | new |
| D2·B4 | CSS rule and 3 ways | **Outfit**: sticky note / outfit list / **school uniform** | old deck 2 |
| D2·B5 | Selectors | **Calling students in class** | old deck 2 |
| D2·B6 | Colours / units, fonts | **Paint shop** / **measuring tape** (two slides) | new |
| D2·B7 | Box model | **Boxes being shipped** | old deck 2 |
| D2·B8 | Display | **The queue vs the bench** | new |
| D2·B9 | Shared stylesheet | **School uniform** | ties back to B4 |
| D2·B10 | Bootstrap | **IKEA for websites** | old deck 2 |

**Coverage check against the old material:**
- Old deck 2's Internet block (postal system, ping, Network tab, View Source, browser = translator) is **re-taught in
  D1·B1** (15 min). The firstmate decided to add it because Week 1 Day 1 did not cover it. Web evolution and the
  Wayback Machine (old deck 2, slides 8–9) appear only as a speaker-notes story in B1. They need internet and are not
  hands-on.
- Every HTML tag from decks 2.1 and 2.2 is in Day 1: strong, em, br, hr, blockquote, span, img, a, target, table, th,
  td, form, label, input types, radio, select, checkbox, textarea.
- HTML5 semantic tags and Bootstrap (deck 2) are in Day 2.
- Deck 2.2's gallery examples 1–4 come back as starters: bio → **D1-05 / D2-07**, menu table → **D1-12 / D2-11**,
  signup → **D1-14**, linked home page → **D1-10**.

---

## 3. File trees (exact)

### 3.0 Shared naming and config rules (all builders)

- **Folders and code/asset files** (`.html`, `.css`, `.svg`, `.wav`, `.mp4`, `.py`) use lowercase kebab-case.
  **Document files** (`.md`, `.docx`, `.pdf`, `.pptx`) may use Title-Case exactly as named in this plan
  (e.g. `D1-HW3-Self-Check-and-Interview-Prep.md`). `README.md`, `BUGS.md` and `STEPS.md` stay upper-case.
- Exercise folder: `classwork/<ID>-<kebab-slug>/`. Inside: `README.md` (task), starter files, and `solution/` (a full
  working folder with the same structure). Bug-hunts also get `solution/BUGS.md` (table: #, file, line, bug, fix,
  visibility tag from the §0 legend).
- Homework folder: `homework/<ID>-<slug>/` (starter + `README.md`). Solutions go in `homework/_solutions/<ID>-<slug>/`
  (+ `BUGS.md`).
- Every HTML file has `<!DOCTYPE html>`, `lang="en"`, `meta charset`, `meta viewport`, 2-space indentation, LF line
  endings and UTF-8. The only exception is a starter that breaks a rule **as a listed planted bug**.
- Images used by an exercise are **copied into that exercise's own `images/` folder** from the master
  `assets/images/` made by A0. **Nobody redraws an asset.**
- Ids in text always look like `D1-04`, `D2-12`, `D1-FF2`, `D1-HW1`. Builder C's ACTIVITY slides and guide use exactly these.
- **`.vscode/settings.json`** (each day root):
  `{"editor.tabSize": 2, "files.eol": "\n", "editor.linkedEditing": true, "liveServer.settings.root": "/", "files.autoSave": "off"}`.
  `linkedEditing` = rename the opening tag and the closing tag follows (D2-01 depends on it).
- **`.htmlhintrc`** (each day root, same file):
  ```json
  { "doctype-first": true, "tag-pair": true, "tagname-lowercase": true, "attr-lowercase": true,
    "attr-value-double-quotes": true, "id-unique": true, "src-not-empty": true, "alt-require": true,
    "title-require": true, "spec-char-escape": true, "attr-no-duplication": true, "html-lang-require": true }
  ```
  A0 must check each rule against the current HTMLHint VS Code extension. If a rule (e.g. `html-lang-require`) is not
  supported, drop it, re-tag the bugs that relied on it as **R**, and log the change.
- **Zip top folders:** the student zip unpacks to **`W2D1/`** (Day 1) and **`W2D2/`** (Day 2). START-HERE, README, the
  D1-00 / D2-00 slides and the guides say "open the `W2D1` folder", never `week2/day1`.
- **Change logs:** `week2/dayN/CHANGES-FROM-PLAN-<A0|A1|A2|B|C>.md`. Each builder writes only their own.

### 3.1 `week2/day1/`  (zip root `W2D1/`)

```
week2/day1/
├── README.md                         # A1 — what this pack is, folder map, for students
├── START-HERE.md                     # A1 — open the W2D1 folder in VS Code; install Live Server + HTMLHint (at home, before class); "Open with Live Server"; no-Live-Server fallback (double-click + F5); troubleshooting
├── CHANGES-FROM-PLAN-<builder>.md    # each builder's own log
├── .vscode/settings.json             # A0 (already written; content in §3.0; A1 must not rewrite it)
├── .htmlhintrc                       # A0 (content in §3.0)
├── 00-plan/PLAN.md                   # this file
├── _tools/                           # A0 — tooling for both days
│   ├── check_pack.py                 # CLI: python check_pack.py --day 1|2 --root <path to week2/>   (see §6 A0)
│   ├── .htmlvalidate.json            # config for npx html-validate
│   ├── make_zips.py                  # builds both days' zips (see §6 A0)
│   └── CHECK-REPORT-day1.md          # A1 pastes the latest check_pack output here
├── _dist/{W2D1-Student-Pack.zip, W2D1-Instructor-Pack.zip}
├── assets/images/                    # A0 — master SVGs (§3.3)
├── instructor-demos/                 # A1
│   ├── README.md                     # how staged steps work + recovery tip
│   ├── B1-internet/
│   │   ├── STEPS.md                  # commands + what to point at: ping, F12 Network, View Source, offline path
│   │   └── step-01-parcel-page/{index.html, style.css, images/(logo-momo-house, momo, momo-plate, thamel, swayambhu).svg}
│   ├── B2-vscode-emmet/{STEPS.md, step-01-emmet-skeleton/index.html, step-02-emmet-structures/index.html}
│   ├── B3-skeleton/
│   │   ├── STEPS.md
│   │   ├── step-01-doctype-html-lang/index.html
│   │   ├── step-02-head-meta-title/index.html
│   │   ├── step-03-body-h1-p/index.html
│   │   ├── step-04-nesting-comments/index.html
│   │   └── step-05-htmlhint-demo/index.html     # 3 errors on purpose (doctype, unclosed h1, img no alt) to show squiggles
│   ├── B4-text/{STEPS.md, step-01-headings/, step-02-strong-em-br-hr/, step-03-blockquote-q-span/, step-04-entities/}   # each: index.html
│   ├── B5-lists/{STEPS.md, step-01-ul-ol/, step-02-nested/, step-03-dl/}                                                 # each: index.html
│   ├── B6-links-images/
│   │   ├── STEPS.md
│   │   ├── step-01-external-link/index.html
│   │   ├── step-02-relative-pages/{index.html, about.html}
│   │   ├── step-03-folders-dotdot/{index.html, pages/about.html, images/momo.svg}
│   │   ├── step-04-img-alt-width/{index.html, pages/about.html, images/momo.svg, images/thamel.svg}
│   │   └── step-05-figure-anchors-mailto/{index.html, pages/about.html, images/momo.svg, images/thamel.svg}
│   ├── B7-tables/{STEPS.md, step-01-basic-price-board/, step-02-caption-thead-tbody-tfoot/, step-03-colspan-rowspan/}   # each: index.html
│   ├── B8-forms/{STEPS.md, step-01-form-label-text-email/, step-02-radio-checkbox/, step-03-select-textarea/, step-04-fieldset-submit-read-url/}   # each: index.html
│   └── B10-validate/{STEPS.md, step-01-before/index.html (5 errors), step-02-after/index.html}
├── classwork/                        # A1 (README + code + solution)
│   ├── D1-00-setup-check/{README.md, index.html, solution/index.html}
│   ├── D1-01-see-the-letters-arrive/{README.md, my-findings.md, index.html, style.css, images/(logo-momo-house, momo, momo-plate, thamel, swayambhu).svg, solution/sample-findings.md}
│   ├── D1-02-emmet-speed-drill/{README.md, index.html, target.html, solution/index.html}
│   ├── D1-03-skeleton-from-memory/{README.md, index.html (empty), solution/index.html}
│   ├── D1-04-broken-skeleton/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D1-05-grandmothers-note/{README.md, index.html, solution/index.html}
│   ├── D1-06-canteen-news-bughunt/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D1-07-broken-lists/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D1-08-momo-recipe/{README.md, index.html, images/momo-plate.svg, solution/{index.html, images/momo-plate.svg}}
│   ├── D1-09-broken-paths/
│   │   ├── README.md, index.html, pages/about.html, pages/menu.html
│   │   ├── images/{logo-momo-house.svg, momo.svg, thamel.svg}
│   │   └── solution/{index.html, pages/about.html, pages/menu.html, images/…same 3…, BUGS.md}
│   ├── D1-10-kathmandu-gallery/{README.md, index.html (skeleton + h1), images/{swayambhu.svg, patan-durbar.svg}, solution/{index.html, images/…same 2…}}
│   ├── D1-11-broken-timetable/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D1-12-exam-results-table/{README.md, index.html, solution/index.html}
│   ├── D1-13-broken-signup-form/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D1-14-extend-order-slip/{README.md, index.html, solution/index.html}
│   ├── D1-15-momo-house-repair/
│   │   ├── README.md                 # relay rules, helper rule, scoreboard template, fix-the-textarea-first note
│   │   ├── index.html, menu.html, order.html, about.html
│   │   ├── images/{logo-momo-house.svg, momo.svg, momo-plate.svg, chef-didi.svg}
│   │   └── solution/{index.html, menu.html, order.html, about.html, images/…same 4…, BUGS.md}
│   ├── D1-16-validate-self-audit/README.md          # audits the student's own D1-10 folder; checklist only
│   └── fast-finishers/
│       ├── README.md                 # menu of the 6 challenges
│       ├── D1-FF1-entity-art/{README.md, index.html, solution/index.html}
│       ├── D1-FF2-table-of-contents/{README.md, index.html, solution/index.html}
│       ├── D1-FF3-mystery-page/{README.md, target.svg, index.html, images/chef-didi.svg, solution/{index.html, images/chef-didi.svg}}
│       ├── D1-FF4-evil-page-bughunt/{README.md, index.html, solution/{index.html, BUGS.md}}
│       ├── D1-FF5-notice-board-bughunt/{README.md, index.html, images/notice-board.svg, solution/{index.html, images/notice-board.svg, BUGS.md}}
│       └── D1-FF6-gallery-detail-page/{README.md, index.html, places/ (empty), images/{swayambhu.svg, boudha.svg, thamel.svg}, solution/{index.html, places/swayambhu.html, images/…same 3…}}
├── homework/
│   ├── W2D1-Homework-Sheet.md        # B — master sheet (HW1–HW4, timings, submit checklist)
│   ├── D1-HW1-kathmandu-treks-repair/{README.md, index.html, treks.html, booking.html, images/{everest.svg, annapurna.svg, langtang.svg}}   # A1
│   ├── D1-HW2-momo-house-catering-page/{README.md, index.html, menu.html, order.html, about.html, images/(4 Momo House SVGs)}            # A1 — starter = D1-15 solution
│   ├── D1-HW3-Self-Check-and-Interview-Prep.md                                                                                        # B
│   ├── D1-HW4-thamel-guesthouse-replay/{README.md, index.html, booking.html, images/{guesthouse.svg, room-deluxe.svg}}                 # A1 — stretch (bug 3 refers to it as Room-Deluxe.svg)
│   └── _solutions/
│       ├── D1-HW1-kathmandu-treks-repair/{index.html, treks.html, booking.html, images/…, BUGS.md}   # A1
│       ├── D1-HW2-momo-house-catering-page/{…5 pages…, images/…}                                   # A1
│       ├── D1-HW3-Answer-Key.md                                                                   # B
│       └── D1-HW4-thamel-guesthouse-replay/{index.html, booking.html, images/…, BUGS.md}            # A1
├── notes/                            # B
│   ├── README.md
│   ├── 01-how-the-web-works.md
│   ├── 02-vscode-emmet-live-server.md
│   ├── 03-html-skeleton-and-anatomy.md
│   ├── 04-text-tags-and-entities.md
│   ├── 05-lists.md
│   ├── 06-links-and-paths.md
│   ├── 07-images.md
│   ├── 08-tables.md
│   ├── 09-forms.md
│   ├── 10-debugging-and-validating-html.md       # includes the "browser repair table" (§6 B)
│   └── 11-day1-cheatsheet.md
├── print/                            # B
│   ├── _build_print.py               # --day 1|2 ; md → docx (TSI docx pattern) → pdf (Word COM / docx2pdf; LibreOffice fallback)
│   ├── W2D1-Student-Notes.docx / .pdf            # notes 01–11
│   ├── W2D1-Classwork-Booklet.docx / .pdf        # every classwork README (D1-00…D1-16 + FF1–FF6), id order, no solutions
│   ├── W2D1-Homework-Sheet.docx / .pdf           # homework sheet + HW1/HW2/HW4 READMEs + HW3
│   └── instructor/W2D1-Answer-Keys.docx / .pdf   # every BUGS.md + HW3 answer key — instructor only
├── deck/TSI-W2D1-HTML-Core-Deck.pptx             # C
└── instructor-guide/{W2D1-Run-Sheet.md, W2D1-Instructor-Guide.md, W2D1-Instructor-Guide.docx}   # C
```

### 3.2 `week2/day2/`  (zip root `W2D2/`)

```
week2/day2/
├── README.md, START-HERE.md                                    # A2 (same pattern; "open the W2D2 folder")
├── CHANGES-FROM-PLAN-<builder>.md
├── .vscode/settings.json                                      # A0 (already written; A2 must not rewrite it)
├── .htmlhintrc                                                # A0 (§3.0)
├── _tools/{.htmlvalidate.json (copy), CHECK-REPORT-day2.md}   # check_pack.py lives in day1/_tools and is run with --day 2
├── _dist/{W2D2-Student-Pack.zip, W2D2-Instructor-Pack.zip}
├── assets/
│   ├── images/                       # A0 — master SVGs (§3.3)
│   ├── media/{canteen-bell.wav, momo-steam.mp4}               # A0
│   └── vendor/bootstrap-5.3.3/{bootstrap.min.css, LICENSE}    # A0
├── instructor-demos/                 # A2
│   ├── README.md
│   ├── B0-outfit/{STEPS.md, step-01-no-css/index.html, step-02-three-outfits/{index.html, css/outfit-traditional.css, css/outfit-modern.css, css/outfit-night.css}}
│   ├── B1-semantic/{STEPS.md, step-01-div-soup/index.html, step-02-semantic/index.html}
│   ├── B2-a11y-meta/{STEPS.md, step-01-before/{index.html, images/…}, step-02-after/{index.html, favicon.svg, images/…}}
│   ├── B3-media/{STEPS.md, step-01-audio/{index.html, media/canteen-bell.wav}, step-02-video/{index.html, media/momo-steam.mp4, images/poster-momo-steam.svg}, step-03-iframe/{index.html, kathmandu-map.html, images/{kathmandu-map.svg, poster-momo-steam.svg}, media/…}}
│   ├── B4-css-intro/{STEPS.md, step-01-inline/index.html, step-02-internal/index.html, step-03-external/{index.html, css/style.css}}
│   ├── B5-selectors/{STEPS.md, step-01-element/, step-02-class-id/, step-03-group-descendant/, step-04-hover/}   # each: index.html + css/style.css
│   ├── B6-colors-units/{STEPS.md, step-01-colors/, step-02-units/, step-03-fonts-text/}                           # each: index.html + css/style.css
│   ├── B7-box-model/{STEPS.md, step-01-content-width/, step-02-padding-border/, step-03-margin-center/, step-04-border-box-radius/}   # each: index.html + css/style.css + images/avatar-sunita.svg
│   ├── B8-display/{STEPS.md, step-01-block-inline/, step-02-horizontal-nav/}
│   ├── B9-mini-site/{STEPS.md, step-01-link-and-base/, step-02-header-nav/, step-03-hero/, step-04-menu-table-cards/, step-05-footer-polish/}   # each: 4 pages + css/style.css + images/
│   └── B10-bootstrap/{STEPS.md, step-01-plain/index.html, step-02-bootstrap/{index.html, css/bootstrap.min.css}}
├── classwork/                        # A2
│   ├── D2-00-outfit-swap/{README.md, index.html, css/{outfit-traditional.css, outfit-modern.css, outfit-night.css}, solution/README-answer.md}
│   ├── D2-01-div-soup-to-semantic/{README.md, index.html, solution/index.html}
│   ├── D2-02-semantic-misuse-bughunt/{README.md, index.html, solution/{index.html, BUGS.md}}
│   ├── D2-03-a11y-audit/{README.md, index.html, images/{tsi-building.svg, decorative-pattern.svg}, solution/{index.html, images/…, BUGS.md}}
│   ├── D2-04-broken-media/{README.md, index.html, kathmandu-map.html, media/{canteen-bell.wav, momo-steam.mp4}, images/{poster-momo-steam.svg, kathmandu-map.svg}, solution/{…same…, BUGS.md}}
│   ├── D2-05-media-corner/{README.md, index.html, kathmandu-map.html, media/…, images/…, solution/{…}}
│   ├── D2-06-stylesheet-not-loading/{README.md, index.html, css/style.css, solution/{index.html, css/style.css, BUGS.md}}
│   ├── D2-07-restyle-the-bio/{README.md, index.html, css/style.css, solution/{index.html, css/style.css}}
│   ├── D2-08-selector-mixups/{README.md, index.html, css/style.css, solution/{index.html, css/style.css, BUGS.md}}
│   ├── D2-09-selector-target-practice/{README.md, index.html, css/style.css, solution/css/style.css}
│   ├── D2-10-units-and-colours/{README.md, index.html, css/style.css, solution/{index.html, css/style.css, BUGS.md}}
│   ├── D2-11-theme-the-canteen-menu/{README.md, index.html, css/style.css, solution/{index.html, css/style.css}}
│   ├── D2-12-broken-cards/{README.md, index.html, css/style.css, images/{avatar-aarav.svg, avatar-sunita.svg, avatar-rajan.svg}, solution/{…, BUGS.md}}
│   ├── D2-13-profile-card/{README.md, index.html, css/style.css (empty), images/avatar-sunita.svg, solution/{index.html, css/style.css, images/avatar-sunita.svg}}
│   ├── D2-14-nav-wont-behave/{README.md, index.html, css/style.css, images/logo-momo-house.svg, solution/{…, BUGS.md}}
│   ├── D2-15-style-momo-house/{README.md, index.html, menu.html, order.html, about.html, css/style.css (empty with 5 checkpoint comments), images/{logo-momo-house.svg, momo.svg, momo-plate.svg, chef-didi.svg, hero-momo.svg}, solution/{…same…, css/style.css}}
│   └── fast-finishers/
│       ├── README.md
│       ├── D2-FF1-tsi-id-card/{README.md, target.svg, index.html, css/style.css, images/avatar-aarav.svg, solution/{index.html, css/style.css, images/avatar-aarav.svg}}
│       ├── D2-FF2-hover-menu/{README.md, index.html, css/style.css, solution/{index.html, css/style.css}}
│       ├── D2-FF3-specificity-duel/{README.md, index.html, css/style.css, solution/ANSWERS.md}
│       ├── D2-FF4-haunted-stylesheet/{README.md, index.html, css/style.css, solution/{index.html, css/style.css, BUGS.md}}
│       ├── D2-FF5-lost-and-found-bughunt/{README.md, index.html, kathmandu-map.html, css/style.css, images/kathmandu-map.svg, solution/{…same…, BUGS.md}}
│       └── D2-FF6-bootstrap-try-it/{README.md, index.html, css/bootstrap.min.css, solution/index.html}
├── homework/
│   ├── W2D2-Homework-Sheet.md        # B
│   ├── D2-HW1-haunted-portfolio-repair/{README.md, index.html, projects.html, css/style.css, images/{avatar-rajan.svg, project-1.svg, project-2.svg}}   # A2
│   ├── D2-HW2-style-your-portfolio/{README.md, CHECKLIST.md}                                                                                         # A2
│   ├── D2-HW3-Self-Check-and-Interview-Prep.md                                                                                                        # B
│   ├── D2-HW4-patan-craft-shop-replay/{README.md, index.html, css/style.css, media/momo-steam.mp4, images/{craft-shop.svg, poster-momo-steam.svg}}       # A2 — stretch
│   └── _solutions/
│       ├── D2-HW1-haunted-portfolio-repair/{index.html, projects.html, css/style.css, images/…, BUGS.md}   # A2
│       ├── D2-HW2-style-your-portfolio/{index.html, about.html, css/style.css, images/avatar-rajan.svg}     # A2 — model answer (Rajan's portfolio)
│       ├── D2-HW3-Answer-Key.md                                                                           # B
│       └── D2-HW4-patan-craft-shop-replay/{index.html, css/style.css, media/…, images/…, BUGS.md}         # A2
├── notes/                            # B
│   ├── README.md
│   ├── 01-semantic-html5.md
│   ├── 02-accessibility-and-meta.md
│   ├── 03-audio-video-iframe.md
│   ├── 04-css-basics-and-linking.md
│   ├── 05-selectors.md
│   ├── 06-colours-units-fonts.md
│   ├── 07-box-model.md
│   ├── 08-display.md
│   ├── 09-debugging-css.md           # includes "what the browser drops" table (§6 B)
│   ├── 10-bootstrap-teaser.md
│   └── 11-day2-cheatsheet.md
├── print/{W2D2-Student-Notes, W2D2-Classwork-Booklet, W2D2-Homework-Sheet}.docx/.pdf + instructor/W2D2-Answer-Keys.docx/.pdf   # B
├── deck/TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx                                                                              # C
└── instructor-guide/{W2D2-Run-Sheet.md, W2D2-Instructor-Guide.md, W2D2-Instructor-Guide.docx}                                 # C
```

### 3.3 Assets (Builder **A0** makes ALL of them, for both days, before A1/A2 start)

Simple flat SVGs in the TSI palette, readable at 400 px wide, ≤ 30 KB each. A0 writes them into
`week2/day1/assets/images/` and `week2/day2/assets/images/`. The files are identical where both days use them. A1/A2 only *copy* them.

**Day 1:** `logo-momo-house.svg`, `momo.svg`, `momo-plate.svg`, `chef-didi.svg`, `thamel.svg`, `swayambhu.svg`,
`patan-durbar.svg`, `boudha.svg`, `everest.svg`, `annapurna.svg`, `langtang.svg`, `avatar-aarav.svg`,
`avatar-sunita.svg`, `mystery-target.svg` (D1-FF3 `target.svg`), `notice-board.svg` (D1-FF5), `guesthouse.svg` and
`room-deluxe.svg` (D1-HW4; the starter references a wrong-case copy name, see §4.2).

**Day 2:** copies of `logo-momo-house.svg`, `momo.svg`, `momo-plate.svg`, `chef-didi.svg`, `avatar-aarav.svg` and
`avatar-sunita.svg`, plus `avatar-rajan.svg`, `hero-momo.svg` (1200×400), `tsi-building.svg`,
`decorative-pattern.svg` (dhaka-style strip), `kathmandu-map.svg` (Ring Road + 5 pins), `poster-momo-steam.svg`
(16:9), `project-1.svg`, `project-2.svg`, `tsi-id-card-target.svg` (D2-FF1 `target.svg`), `craft-shop.svg` (D2-HW4),
`favicon.svg` (a momo).

**Day 2 media:** `canteen-bell.wav` is a 2-second bell made with Python `wave` + `math` (880 Hz + 1320 Hz with a
fade, mono 22 kHz, < 100 KB). `momo-steam.mp4` is 4 s, 640×360, H.264 yuv420p, **no audio track**, < 300 KB, made with
ffmpeg (`pip install imageio-ffmpeg` gives a bundled binary). **If no MP4 can be made, A0 stops and reports BLOCKED.**
D2-04, D2-05 and D2-HW4 need a real video.

**Day 2 vendor:** `bootstrap.min.css` + `LICENSE` for Bootstrap 5.3.3, downloaded once from
`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`.

---

## 4. Exercises (every id, with planted bugs)

**Type:** 🐞 bug-hunt · ✏️ modify · 🔨 build · 🔍 explore. **Min** = in-class time box. Visibility tags are from §0.
Rules for every bug-hunt:
- It must still render in Live Server, and the bugs must be findable.
- A **"fix this first"** note is required whenever one bug hides others (textarea, `<title>`, missing stylesheet).
- Bug placement constraints are written in *italics*; the builder must follow them.

### 4.1 Day 1 classwork

| Id | Title | Block | Min | Type | Learning goal |
|---|---|---|---|---|---|
| D1-00 | Setup check | B0 | 8 | 🔨 | Open `W2D1` in VS Code, Open with Live Server (or the double-click fallback), change `<h1>` to your own name, see the reload, open F12 |
| D1-01 | See the letters arrive | B1 | 8 | 🔍 | (1) `ping localhost` (offline) or `ping google.com` (Wi-Fi): each reply is a letter and back. (2) Open the parcel page with Live Server → F12 → Network → refresh, then count the parcels (1 html + 1 css + 5 svg = 7) and write it in `my-findings.md`. (3) Right-click → View Page Source and find the `<h1>`. Wi-Fi bonus: Network tab on any real site |
| D1-02 | Emmet speed drill | B2 | 7 | 🔨 | 6 required abbreviations (`!`, `h1+p`, `ul>li*5`, `nav>a*3`, `table>tr*3>td*2`, `.card>h2+p`) + 2 bonus (`ul>li.item$*3`, `lorem20`) until `index.html` matches `target.html`; use Alt+Shift+↓, Ctrl+/, Shift+Alt+F and linked editing |
| D1-03 | Skeleton from memory | B3 | 4 | 🔨 | Type the full skeleton with notes closed. "Wrong is fine. Blank is not." |
| D1-04 | Broken Skeleton | B3 | 10 | 🐞 6 | Structure bugs; nesting; using HTMLHint + F12 to see silent bugs |
| D1-05 | Grandmother's note | B4 | 4 | ✏️ | A short plain-text note (4 sentences, Kathmandu) → strong/em/br/blockquote |
| D1-06 | Canteen News | B4 | 10 | 🐞 5 | Heading rules, entities, unclosed inline tags |
| D1-07 | Broken Lists | B5 | 7 | 🐞 4 | List structure |
| D1-08 | Momo recipe | B5 | 5 | 🔨 | Required: ingredients `ul` with one nested sub-list inside an `li`, steps `ol`, one image with alt. Bonus: a `dl` glossary |
| D1-09 | Broken Paths | B6 | 9 | 🐞 6 | Relative/absolute paths, `../` |
| D1-10 | Kathmandu gallery | B6 | 7 | 🔨 | 2 `figure`s with figcaption + alt + width, 1 external link with `target="_blank"`, 1 "back to top" `#top` anchor. (The sub-page with `../` + `mailto:` moved to D1-FF6.) Then show & tell |
| D1-11 | Broken Timetable | B7 | 8 | 🐞 5 | th vs td, cell counts, colspan/rowspan arithmetic |
| D1-12 | Exam results table | B7 | 6 | ✏️ | The starter is a plain table with data rows. Add: `caption`, `thead`/`tbody`, `th scope="col"`, a "Total" row using `colspan`. Bonus: `tfoot`. (No rowspan; it was practised in D1-11 and D1-HW1) |
| D1-13 | Broken Signup | B8 | 10 | 🐞 6 | label/for, input types, radio name/value, submit → URL |
| D1-14 | Extend the order slip | B8 | 7 | ✏️ | **Required (3):** a `tel` field, a radio group (Morning / Evening batch) with one shared name, a `fieldset` + `legend` around them. **Bonus:** `date`, two checkboxes, `type="color"` ("favourite colour for your TSI T-shirt"). Every input is labeled; test by submitting and reading the URL. (No `optgroup`) |
| D1-15 | Momo House repair (pairs) | B9 | 17 | 🐞 10 | Find and fix 10 bugs across 4 pages; driver/navigator swap every bug; early pairs become helpers |
| D1-16 | Validate & self-audit | B10 | 4 | ✏️ | Run HTMLHint (and W3C if Wi-Fi) on your own D1-10 folder; fix every error; tick the audit checklist (skeleton, lang, one h1, every img has alt, every link works) |
| D1-FF1 | Entity art | FF | — | 🔨 | A price board and a paragraph that shows `<p>` literally, using `&lt; &gt; &amp; &copy; &nbsp; &rarr; &hearts;` |
| D1-FF2 | Table of contents | FF | — | 🔨 | A long page with a nested-list table of contents that jumps to `#id` sections + "back to top" links |
| D1-FF3 | Mystery page | FF | — | 🔨 | Rebuild a page from a picture (`target.svg`): h1, image, 2 lists, a table, a link |
| D1-FF4 | Evil page | FF | — | 🐞 8 | "The browser hides it" bugs |
| D1-FF5 | Notice Board | FF | — | 🐞 12 | Surplus bugs from the in-class hunts (the cut bugs, nothing thrown away) |
| D1-FF6 | Gallery detail page | FF | — | 🔨 | Extend a gallery: `places/swayambhu.html` with a `../index.html` back link, `../images/` image path, a `mailto:` link to the "TSI tour desk" |

**H check per block:** B0 8 · B1 8 · B2 7 · B3 5 + 4 + 10 = 19 · B4 2 + 4 + 10 = 16 · B5 2 + 7 + 5 = 14 · B6 3 + 9 + 7 = 19 ·
B7 2 + 8 + 6 = 16 · B8 3 + 10 + 7 = 20 · B9 17 · B10 4 → **148** ✔
**Bug pace:** D1-04 6/10 · D1-06 5/10 · D1-07 4/7 · D1-09 6/9 · D1-11 5/8 · D1-13 6/10 · D1-15 10/17. Every hunt is ≥ 1.5 min per bug ✔

#### Planted bugs — Day 1 classwork

**D1-04 Broken Skeleton** — `index.html`, "Aarav's first page" (6 bugs)
1. `<!DOCTYPE html>` missing — **D(HH)** doctype-first
2. `<html>` has no `lang="en"` — **D(HH)** html-lang-require (or **R** if that rule is unsupported)
3. `<titel>Aarav's Page</titel>` typo — **V**: the tab shows the file path, not the title; **D(HH)** title-require
4. `<h1>` is never closed, so the paragraph under it is huge — **V** + **D(HH)** tag-pair
5. Wrong nesting `<p>I live in <strong>Kathmandu</p></strong>` — **D(HH)** tag-pair / **D(F12)**
6. `<!-- todo: add photo ->` (`->` instead of `-->`) — **V**: *put it as the last thing before the footer, with no other comment after it, so "the footer and everything after it disappears"*
- README: "Fix bug 4 first if the page looks strange."

**D1-06 Canteen News** — `index.html`, "TSI Canteen Weekly" (5 bugs)
1. Two `<h1>` elements — **R** (one h1 per page)
2. Text "Wrap text in <p> tags" shows as "Wrap text in tags"; fix `&lt;p&gt;` — **V**
3. `Rs.&nbps;150` typo shows literally; fix `&nbsp;` — **V**
4. `<blockquote>` closed with `</quote>`, so the rest of the page is indented — **V** + **D(HH)**
5. `<em>` opened and never closed, so everything after it is italic — **V** + **D(HH)**. *Place it after the blockquote so the two effects can be told apart.*

**D1-07 Broken Lists** — `index.html`, "Momo shopping list + steps" (4 bugs)
1. Three `<li>` with no `<ul>` around them — **D(F12)**; README hint: "look for the missing indent" (bullets still show)
2. Cooking steps (order matters) are in a `<ul>`; should be `<ol>` — **V**
3. `<il>` typo instead of `<li>` — **V** (no bullet) + **D(HH)**
4. Glossary `<dl>` uses `<li>` for the definitions instead of `<dd>` — **V**

**D1-09 Broken Paths** — `index.html`, `pages/about.html`, `pages/menu.html`, `images/` (6 bugs)
1. `index.html`: `<img src="image/logo-momo-house.svg" …>`, but the folder is `images` — **V**
2. `index.html`: `<a href="about.html">` should be `pages/about.html` — **V** (404)
3. `index.html`: `href="www.wikipedia.org"` (missing `https://`) becomes a relative path — **V** (404)
4. `pages/about.html`: `<a href="index.html">Home</a>` should be `../index.html` — **V**
5. `pages/about.html`: `<img src="images/thamel.svg" …>` should be `../images/thamel.svg` — **V**
6. `pages/menu.html`: `href="C:\Users\Aarav\Desktop\site\index.html"` (a path on Aarav's own computer) should be `../index.html` — **V** (works only on Aarav's laptop)

**D1-11 Broken Timetable** — `index.html`, "TSI Week 2 timetable" (5 columns: Time + Sun–Thu) (5 bugs)
1. Header row uses `<td>` instead of `<th>` — **V** (not bold)
2. One row has 4 cells instead of 5, so the cells shift left — **V**
3. `colspam="5"` typo on the "Lunch" row, so it fills only 1 column — **V**
4. `rowspan="2"` on "Project lab", but the next row still has its own cell, so an extra cell sticks out — **V**
5. Text "Tea break 3:00" written between `</tr>` and `<tr>`, outside any cell; the browser moves it above the table — **V**

**D1-13 Broken Signup** — `index.html`, "TSI course signup", `<form method="get">` with no `action` (an empty `action=""` fails html-validate/W3C; without `action`, the form still submits to the same page) (6 bugs)
1. `<label for="fullname">` but the input is `id="name"` — **V** (clicking the label does nothing)
2. Phone `type="number"` (spinner arrows, a leading 0 is lost); should be `tel` — **V**
3. Batch radios have different names (`batch1`, `batch2`), so both can be ticked — **V**
4. Radios have no `value`, so the URL shows `batch=on` — **D(URL)**
5. `<textarea />` self-closed, so it swallows the rest of the form as text — **V**. *README: "Fix this one first; it hides bug 6."*
6. The Submit `<button>` sits after `</form>`, so it does nothing — **V** (visible once bug 5 is fixed)

**D1-15 Momo House repair** — 4 pages (10 bugs; the README shows the count per page: 3 / 3 / 2 / 2)
- `index.html`: 1 nav link `menu.htm` — **V** · 2 hero `<img>` without alt — **D(HH)** · 3 unclosed `<a>` — **V**: *it must be the LAST nav item, directly before the `<h1>`, so the h1 becomes part of the link (an earlier `<a>` would be auto-closed by the next `<a>`)*
- `menu.html`: 4 `colspan="4"` in a 3-column table — **V** · 5 "Today's specials" `<li>`s with no `<ul>` — **D(F12)** · 6 heading jump h1 → h4 — **R**
- `order.html`: 7 label `for`/`id` mismatch — **V** · 8 `<textarea />` self-closed — **V** (*README: fix this first on this page*)
- `about.html`: 9 `src="../images/chef-didi.svg"`, but `images/` is next to the page — **V** · 10 Instagram link without `https://` — **V**
- Relay: pairs; driver and navigator swap every bug; 1 point per bug + 1 bonus for naming its visibility tag. Pairs that
  finish become helpers for another pair (they may point, not type), then move to FF. Scores go on the whiteboard at
  3:38 and 3:45.

**D1-FF4 Evil page** (8 bugs): img without alt — D(HH) · `<a>` inside `<a>` — D(F12) · `<ul>` inside `<p>` (the p
closes early) — D(F12) · the same `id="menu"` twice — D(HH) id-unique · `<li>` inside a `<div>` — D(F12) · `<input>`
with no label — V (clicking text does nothing) · `<h1>` inside `<p>` — D(F12) · `&nbps;` typo — V.

**D1-FF5 Notice Board** — `index.html`, "TSI notice board" (12 bugs, the surplus from v1's class hunts)
1. A second `<head>` instead of `</head>` — D(F12) *(from Broken Skeleton)*
2. A `<p>Contact…</p>` after `</html>` — D(F12)/D(W3C) *(Skeleton)*
3. Heading jump h2 → h5 — R *(Canteen News)*
4. `<h4>` used only to make a sentence bold — R *(Canteen News)*
5. `<br><br><br>` used for spacing instead of two `<p>` — V *(Canteen News)*
6. `</hr>` instead of `<hr>`, so the divider is missing — V *(Canteen News)*
7. A nested list placed after `</li>` instead of inside the `<li>` — D(F12) *(Lists)*
8. `<ol>` closed with `</ul>` — D(HH) *(Lists)*
9. Bare text "Notices:" directly inside `<ul>` — R/D(F12) *(Lists)*
10. `src="images/notice-board .svg"` (space in the name) — V *(Paths)*
11. `<a href="#events">` but the section is `id="event"` — V *(Paths)*
12. A row of `<td>`s placed directly in `<table>` with no `<tr>` — D(F12) *(Timetable)*

### 4.2 Day 1 homework (core about 1.5 h + optional stretch)

| Id | Title | Type | Min (home) | Learning goal |
|---|---|---|---|---|
| D1-HW1 | Kathmandu Treks repair | 🐞 12 | 35 | Spaced repeat of every bug type on a new 3-page site |
| D1-HW2 | Momo House catering page | 🔨 | 40 | Add `catering.html` with one table (packages) and one form (date, people count, package radio, notes); add it to the nav on all 5 pages; everything passes HTMLHint |
| D1-HW3 | Self-check & interview prep | 📝 (B) | 15 | 10 self-check questions + 12 viva-style interview questions; answer key in `_solutions/` |
| D1-HW4 | Thamel Guesthouse replay (**stretch**, optional) | 🐞 12 | +30 | The rest of the surplus bugs from the class hunts |

**D1-HW1 Kathmandu Treks repair** — `index.html`, `treks.html`, `booking.html` (12 bugs)
1. `index.html`: `<title>Kathmandu Treks` never closed, so **the whole page is blank** — V. *README: "If a page is completely blank, fix this first."*
2. `index.html`: `src="images/Everest.svg"`, but the file is `everest.svg` — **H**
3. `index.html`: `<a href="treks">`, missing `.html` — V
4. `index.html`: nested `<ul>` placed outside its parent `<li>` — D(F12)
5. `treks.html`: header row uses `<td>` — V
6. `treks.html`: leftover cell under a `rowspan="2"` — V
7. `treks.html`: `<a href="booking.html#form">`, but the form is `id="booking-form"` — V
8. `booking.html`: label `for`/`id` mismatch — V
9. `booking.html`: phone `type="number"` — V
10. `booking.html`: trek date `type="text"`; should be `date` — V (no date picker)
11. `booking.html`: radio group with different names — V
12. `booking.html`: `<button type="reset">Book now</button>` wipes the form — V

**D1-HW4 Thamel Guesthouse replay** — `index.html`, `booking.html` (12 bugs, the rest of the surplus)
1. `index.html`: `<!DOCTYPE html>` missing — D(HH) *(from Momo House)*
2. `index.html`: `<title>` placed inside `<body>` — D(F12) (the tab still shows it; that is the lesson) *(Momo House)*
3. `index.html`: `src="images/Room-Deluxe.svg"`, but the file is `room-deluxe.svg` — H *(Paths)*
4. `index.html`: `<img src="images/guesthouse.svg">` without alt — D(HH) *(Paths)*
5. `booking.html`: room-rates table row missing its `<tr>` — D(F12) *(Momo House)*
6. `booking.html`: `<caption>` after the first row — D(W3C) *(Timetable)*
7. `booking.html`: email input `type="text"` — V on submit (no email check) *(Signup)*
8. `booking.html`: an `<option>` outside `</select>` — V *(Signup)*
9. `booking.html`: `requred` typo — V (empty submit allowed) *(Signup)*
10. `booking.html`: room `<select>` has no `name`, so it is missing from the URL — D(URL) *(Signup)*
11. `booking.html`: room-type radios with different names — V *(Momo House)*
12. `booking.html`: Submit button after `</form>` — V *(Momo House)*

### 4.3 Day 2 classwork

| Id | Title | Block | Min | Type | Learning goal |
|---|---|---|---|---|---|
| D2-00 | Outfit swap | B0 | 3 | ✏️ | Change the `<link href>` between 3 outfit stylesheets. Same HTML, 3 looks |
| D2-01 | Div soup → semantic | B1 | 7 | ✏️ | Replace 7 `div class="…"` boxes with header/nav/main/section/article/aside/footer (linked editing renames both tags); the page looks the same, and the Elements panel shows the names |
| D2-02 | Semantic misuse | B1 | 8 | 🐞 5 | When *not* to use each tag |
| D2-03 | A11y audit: TSI Admissions | B2 | 10 | 🐞 6 | alt, link text, labels, lang, title. Check with the Tab walk + Lighthouse (Narrator = instructor only) |
| D2-04 | Broken media | B3 | 8 | 🐞 5 | audio/video/iframe attributes and paths |
| D2-05 | Media corner | B3 | 3 | 🔨 | Starter has audio + video done; add an iframe of `kathmandu-map.html` with a `title` and width/height. Bonus: video fallback text |
| D2-06 | Stylesheet not loading | B4 | 9 | 🐞 6 | `<link>` mistakes and CSS syntax mistakes |
| D2-07 | Restyle the bio | B4 | 4 | ✏️ | Change 4 things in the CSS (body background, h1 colour, paragraph font-size, link colour) on Sunita's bio |
| D2-08 | Selector mix-ups | B5 | 8 | 🐞 5 | Selector syntax and matching rules |
| D2-09 | Selector target practice | B5 | 5 | 🔨 | 5 targets, one CSS rule each, no HTML edits. *Every target must be reachable with only element / `.class` / `#id` / grouping / descendant / `.a.b` / `:hover`; the starter HTML already carries the needed classes and ids (no `:nth-child`).* Targets: (1) every `p` → grey, (2) only `.veg` dishes → green, (3) `#todays-special` → bold + bigger, (4) only links inside `nav` → no underline, (5) `.dish.spicy` → red border |
| D2-10 | Units & colours | B6 | 8 | 🐞 5 | Valid values, units, fallbacks |
| D2-11 | Theme the canteen menu | B6 | 5 | ✏️ | Apply a given 3-colour hex palette, a font stack with a fallback, rem sizes and `line-height: 1.6` to the canteen menu |
| D2-12 | Broken cards | B7 | 8 | 🐞 5 | Box model arithmetic, border shorthand, centring |
| D2-13 | Profile card | B7 | 7 | 🔨 | A centred card: width, padding, border, border-radius, round avatar, `box-sizing: border-box`; then show & tell |
| D2-14 | Nav won't behave | B8 | 8 | 🐞 5 | display values, `list-style`, inline vs inline-block |
| D2-15 | Style Momo House | B9 | 28 | 🔨 | One `css/style.css` for 4 pages. CP1 (≈0:06) link on all 4 pages + body font/background · CP2 (≈0:12) header + horizontal nav · CP3 (≈0:18) hero banner + h1 · CP4 (≈0:24) menu table + 3 dish cards (box model) · CP5 (≈0:28) footer + `:hover` on links |
| D2-FF1 | TSI ID card | FF | — | 🔨 | Recreate an ID card from a picture with box model + fonts |
| D2-FF2 | Hover menu | FF | — | ✏️ | Momo House nav changes colour/background/underline on `:hover` |
| D2-FF3 | Specificity duel | FF | — | 🔨 | 8 puzzles: predict the colour, then check in DevTools (`solution/ANSWERS.md`) |
| D2-FF4 | Haunted stylesheet | FF | — | 🐞 10 | Mixed CSS bugs |
| D2-FF5 | Lost & Found | FF | — | 🐞 11 | Surplus Day 2 bugs (semantic + a11y + CSS) |
| D2-FF6 | Bootstrap try-it | FF | — | ✏️ | Add `container`, `btn btn-primary` and a `card` to a plain page with the local Bootstrap file; compare with hand-written CSS (was D2-16 in v1) |

**H check per block:** B0 3 · B1 3 + 7 + 8 = 18 · B2 2 + 10 = 12 · B3 2 + 8 + 3 = 13 · B4 4 + 9 + 4 = 17 · B5 2 + 8 + 5 = 15 ·
B6 8 + 5 = 13 · B7 3 + 8 + 7 = 18 · B8 3 + 8 = 11 · B9 28 · B10 0 → **148** ✔
**Bug pace:** D2-02 5/8 · D2-03 6/10 · D2-04 5/8 · D2-06 6/9 · D2-08 5/8 · D2-10 5/8 · D2-12 5/8 · D2-14 5/8 → all ≥ 1.5 min/bug ✔

#### Planted bugs — Day 2 classwork

**D2-02 Semantic misuse** — `index.html`, "TSI Blog" (5 bugs)
1. Two `<main>` elements — R / D(W3C)
2. `<nav>` wraps a paragraph of text, not links — R
3. `<section>` with no heading — R
4. `<aside>` holds the main blog post, while the "related posts" box sits in `<main>` (swap them) — R
5. `<div class="btn">Subscribe</div>` instead of `<button>` — V (the Tab key skips it). *No JavaScript, no `onclick`.*

**D2-03 A11y audit: TSI Admissions** — `index.html` (6 bugs; each counted once)
1. `<html>` has no `lang` — D(LH) / D(HH)
2. `<title>Document</title>` (the Emmet default) is not descriptive — R
3. `<img src="images/tsi-building.svg">` has no alt — D(LH) / D(HH)
4. The decorative `decorative-pattern.svg` has a long alt ("a picture of a pattern with lines…"); it should be `alt=""` — R
5. Three links say "click here" (one bug, three places) — D(LH)
6. The phone input has a placeholder only, no `<label>` — D(LH)

**D2-04 Broken media** — `index.html` + `kathmandu-map.html` (5 bugs)
1. `<audio src="media/canteen-bell.wav">` has no `controls`, so nothing shows — V
2. Second audio uses `media/canteen_bell.wav` (underscore) — V (the player shows 0:00 and won't play)
3. `<video>` has no `controls` — V
4. `poster="image/poster-momo-steam.svg"`, wrong folder — V (black box before play)
5. `<iframe src="kathmandu-map.htm">`, wrong extension — V (404 inside the window)

**D2-06 Stylesheet not loading** — `index.html` + `css/style.css` (6 bugs)
1. `rel="stylsheet"` typo, so no CSS at all — V
2. `href="css/styles.css"`, but the file is `style.css` — V
3. Missing `}` after the `h1` rule, so the next rule is lost — V
4. Missing `;` between two declarations, so the second is ignored — V
5. `colour: maroon;` (British spelling) — V
6. `// footer styles` comment (JS style) breaks the next rule; the fix is `/* */` — V
- *README: "Fix bugs 1 and 2 first; until the stylesheet loads, nothing else is visible."*

**D2-08 Selector mix-ups** — Momo House menu page (5 bugs)
1. CSS `.card`, HTML `class="Card"` (class names are case-sensitive) — V
2. CSS `#menu`, HTML `id="main-menu"` — V
3. `price { … }` is missing the dot — V
4. `h1, h2, { … }` has a trailing comma, so the whole rule is dropped — V
5. `a:hoverr` typo — V (on hover)

**D2-10 Units & colours** — canteen price page (5 bugs)
1. `width: 300;` no unit — V
2. `color: #gg0000;` invalid hex — V
3. `font-size: 1.5 rem;` (space) — V
4. `font-family: "Momo Sans";` (a font that doesn't exist) with no fallback, so it falls back to Times — V. Fix: `"Momo Sans", Arial, sans-serif`
5. `line-height: 1.5px;` makes lines overlap — V. Fix: `1.5`

**D2-12 Broken cards** — 3 student cards (5 bugs)
1. Three `.card { display: inline-block; width: 300px; padding: 20px; border: 5px solid …; }` inside `.row { width: 960px; }` add up to 350 px each, so the third card wraps; fix `box-sizing: border-box` — V. *(The starter sets inline-block; students don't touch display until B8.)*
2. `.wrapper { margin: 0 auto; background: #fdf6ec; }` with no `width`/`max-width`, so it never centres — V. *The wrapper must have a visible background so the problem shows.*
3. `padding: -10px;` (negative padding is invalid) — V
4. `border: 2px orange;` with no style, so there is no border — V
5. Avatar `border-radius: 50%` on a 120×80 image makes an oval; fix equal width and height — V

**D2-14 Nav won't behave** — Momo House header (5 bugs)
1. `display: blok;` typo — V
2. `.logo { display: none; }` left in by mistake — V
3. `list-style: none` missing, so bullets show — V
4. Nav links are `display: inline` with `padding: 12px 16px; margin-top: 20px;`. The vertical padding overlaps the hero and the margin-top does nothing (inline boxes ignore vertical margin); fix `display: inline-block` — V. *(Moved here from D2-12 in v2.)*
5. CSS `.menu-li { display: inline-block; }`, but the HTML is `<ul class="menu"><li>` — V

**D2-FF4 Haunted stylesheet** (10 bugs): missing `}` · `padding: 20` · `.Title` vs `class="title"` · `#nav` vs `id="navbar"` ·
`colour` · missing `;` · `border: 1px red` · `display: blok` · `font-size: 16 px` · `// comment`.

**D2-FF5 Lost & Found** — `index.html`, `kathmandu-map.html`, `css/style.css` (11 bugs, the surplus from v1's class hunts)
1. A `<header>` placed inside `<footer>` — D(W3C) *(Semantic)*
2. `<article>` used for the site navigation bar — R *(Semantic)*
3. `<b>` used for "Warning:" instead of `<strong>` — R *(Semantic)*
4. Heading order h1 → h3 → h2 — D(LH) *(A11y)*
5. `<div class="btn">Apply</div>` used as a button — V (the Tab key skips it) *(A11y)*
6. A fee table with no `<th>` (first row in `<b>`) — R *(A11y)*
7. `<iframe src="kathmandu-map.html">` with no `title` — D(LH) *(Media)*
8. `font-size: 20 px;` — V *(Stylesheet)*
9. `background-color = #fdf6ec;` — V *(Stylesheet)*
10. `.btn .primary` (descendant) but the HTML is `class="btn primary"` on one element — V *(Selectors)*
11. HTML `class="card, special"` (comma inside class) — V *(Selectors)*

### 4.4 Day 2 homework (core about 1.5 h + optional stretch)

| Id | Title | Type | Min (home) | Learning goal |
|---|---|---|---|---|
| D2-HW1 | Haunted portfolio repair | 🐞 12 | 35 | Semantic + CSS bugs together on Rajan's 2-page portfolio |
| D2-HW2 | Style your portfolio | 🔨 | 45 | Your own Week 1 About Me (or D1-10) page → semantic, accessible, one shared external CSS. The CHECKLIST lists 12 required items: header/nav/main/footer, horizontal nav, one box-model card, rem fonts, a 3-hex palette, a hover state, every img has alt, labels on every input, passes HTMLHint, Lighthouse a11y ≥ 90, works from the `W2D2` folder, and every link resolves. The model answer is in `_solutions/` |
| D2-HW3 | Self-check & interview prep | 📝 (B) | 15 | Self-check + 12–15 interview questions (theory + small code) |
| D2-HW4 | Patan Craft Shop replay (**stretch**, optional) | 🐞 10 | +30 | The rest of the Day 2 surplus bugs |

**D2-HW1 Haunted portfolio repair** — `index.html`, `projects.html`, `css/style.css` (12 bugs)
1. `<link href="style.css">`, but the file is `css/style.css` — V. *README: fix first.*
2. Two `<main>` elements — R / D(W3C)
3. `<section>` with no heading — R
4. Avatar `<img>` with no alt — D(HH) / D(LH)
5. `.nav li { display: inline-blok; }` — V
6. CSS `.Card`, HTML `class="card"` — V
7. `padding: 20;` no unit — V
8. `border: 1px #ddd;` with no style — V
9. `.card` width + padding overflow; fix `box-sizing` — V
10. Missing `}` after `.hero`, so the next rule is lost — V
11. `color: #fffff;` (5 digits) — V
12. CSS `#footer`, HTML `<footer class="footer">` — V

**D2-HW4 Patan Craft Shop replay** — `index.html`, `css/style.css`, `media/` (10 bugs)
1. No `<meta name="description">` — D(LH) *(A11y)*
2. No viewport meta — D(LH) *(A11y)*
3. `<source>` placed after `</video>`, so the video is empty — V *(Media; replaces v1's non-deterministic autoplay bug)*
4. A second video uses `<source src="media/momo-steam.mp4" type="video/mp3">`, so the browser skips it — V *(Media)*
5. CSS `#Header`, HTML `id="header"` — V *(Selectors)*
6. `padding: 10px 20px 10px 20px 5px;` (5 values, invalid) — V *(Units)*
7. `background-color: rgb(255, 200);` missing a value — V *(Units)*
8. `.banner { width: 120%; }`, so the page scrolls sideways — V *(Units)*
9. `.card { height: 100px; }` with long text, so the text spills out — V *(Box model)*
10. `.badge { visibility: hidden; }` leaves an empty gap; `display: none` was wanted — V *(Display)*

---

## 5. Deck slide lists (Builder C, tsi-deck-theme-v2)

Rules:
- Speaker notes on every slide; the ACTIVITY tag on every interactive slide.
- Each exercise slide shows its id, folder path (inside `W2D1/` or `W2D2/`), time box, "done looks like", and for
  bug-hunts "N bugs, find at least N−2".
- The **reveal** for each bug-hunt is in that slide's speaker notes (the bug list + visibility tags from §4); the
  instructor opens `solution/BUGS.md` on the projector. There are no separate reveal slides.
- No video slides, so no youtu.be chips are needed. Fast-finisher text goes in speaker notes where noted.
- Where a block has two analogies, they are on different slides.
- **Every ACTIVITY slide maps to an exercise id**, except the quiz and exit-ticket slides (tagged ACTIVITY, no id).

### 5.1 Day 1 deck — `TSI-W2D1-HTML-Core-Deck.pptx` (53 slides)

| # | Block | Slide | Pattern / activity id |
|---|---|---|---|
| 1 | B0 | Title: "How the Web Works + HTML Core: Build It, Break It, Fix It" — Week 2 · Day 1 | title |
| 2 | B0 | Today's roadmap (11 blocks with clock times) | agenda |
| 3 | B0 | The One Rule + how today works (code-along, 🐞 bug-hunts, reveals, scoreboard line, fast finishers, staged demos) | cards |
| 4 | B0 | No Live Server? Double-click + F5 (fallback) | callout |
| 5 | B0 | ACTIVITY → **D1-00** Setup check | activity |
| 6 | B1 | THINK: you type a website name and press Enter. What happens in 2 seconds? (shout guesses) | activity (prediction, no id) |
| 7 | B1 | The Internet is a postal system (browser, letter, IP, DNS phone book, server warehouse, parcel) | analogy |
| 8 | B1 | A page is many parcels (1 HTML + CSS + images) + restaurant recap HTML/CSS/JS | diagram |
| 9 | B1 | ACTIVITY → **D1-01** See the letters arrive (ping, Network tab, View Source) | activity |
| 10 | B2 | Your kitchen: VS Code tour | screenshot slot |
| 11 | B2 | Emmet = speed-dial (`!` `>` `+` `*` `.` `$`) | table |
| 12 | B2 | 6 shortcuts that save hours (incl. linked editing) | table |
| 13 | B2 | ACTIVITY → **D1-02** Emmet speed drill | activity |
| 14 | B3 | HTML is the Skeleton | analogy |
| 15 | B3 | Anatomy: element, tag, attribute (labeled boxes) | diagram |
| 16 | B3 | Every page starts the same way (skeleton with `lang="en"`) | code |
| 17 | B3 | Nesting: last box opened, first box closed | comparison |
| 18 | B3 | Comments + head = the parcel label | code |
| 19 | B3 | ACTIVITY → **D1-03** Skeleton from memory | activity |
| 20 | B3 | Browsers are polite guessers | big statement |
| 21 | B3 | Your spell-checker: HTMLHint squiggles + Problems panel + F12 Elements + the V/D/H/R legend | screenshot slot + table |
| 22 | B3 | ACTIVITY → **D1-04** 🐞 Broken Skeleton (6 bugs) | activity |
| 23 | B4 | Text = tone of voice | table |
| 24 | B4 | Headings are an outline (one h1, no jumps) | diagram |
| 25 | B4 | Entities: printing `<`, `&`, ©, nbsp | code |
| 26 | B4 | ACTIVITY → **D1-05** Grandmother's note | activity |
| 27 | B4 | ACTIVITY → **D1-06** 🐞 Canteen News (5 bugs) | activity |
| 28 | Break | Break — 10 min (+ teaser; late Live Server installs) | break |
| 29 | B5 | Shopping list vs recipe steps | comparison |
| 30 | B5 | Nested lists + dl/dt/dd | code |
| 31 | B5 | ACTIVITY → **D1-07** 🐞 Broken Lists (4 bugs) + **D1-08** Momo recipe (two-part slide) | activity |
| 32 | B6 | Same house vs postal address | analogy 1 |
| 33 | B6 | Folders and `../` ("go downstairs one floor") | diagram |
| 34 | B6 | Links type-along: external, relative, target, mailto, tel, #anchor | code |
| 35 | B6 | Images: a sticker, not an envelope (src/alt/width, figure, case-sensitive names) | analogy 2 + code |
| 36 | B6 | ACTIVITY → **D1-09** 🐞 Broken Paths (6 bugs) | activity |
| 37 | B6 | ACTIVITY → **D1-10** Kathmandu gallery | activity |
| 38 | B6 | ACTIVITY → **D1-10** show & tell on the projector (3 min) | activity |
| 39 | B7 | Tables: four tags, one team (canteen price board) | code |
| 40 | B7 | caption, thead/tbody/tfoot, colspan/rowspan (grid diagram) | diagram |
| 41 | B7 | Tables are for data, not layout | comparison |
| 42 | B7 | ACTIVITY → **D1-11** 🐞 Broken Timetable (5 bugs) | activity |
| 43 | B7 | ACTIVITY → **D1-12** Exam results table | activity |
| 44 | Break | Break — 10 min | break |
| 45 | B8 | Forms = the order slip | analogy |
| 46 | B8 | One tag, many types + label for↔id | code |
| 47 | B8 | name + value = what the kitchen receives: submit and read the URL | code + screenshot slot |
| 48 | B8 | ACTIVITY → **D1-13** 🐞 Broken Signup (6 bugs) | activity |
| 49 | B8 | ACTIVITY → **D1-14** Extend the order slip | activity |
| 50 | B9 | ACTIVITY → **D1-15** 🐞 Momo House repair relay (10 bugs, scoring, helper rule) | activity |
| 51 | B10 | ACTIVITY → **D1-16** Validate & self-audit (HTMLHint + W3C) | activity |
| 52 | B10 | Rapid quiz: 10 questions, Kahoot-style (A/B/C/D) | activity (quiz) |
| 53 | B10 | Homework **D1-HW1–HW4** + exit ticket + "Tomorrow: the outfit" | activity (exit ticket) |

Fast finishers in the speaker notes: D1-FF1 (slide 27), D1-FF2 (31), D1-FF3 (37), D1-FF4 (42), D1-FF5 (48), D1-FF6 (50).
Web-evolution / Wayback story: speaker notes of slide 8.

### 5.2 Day 2 deck — `TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx` (49 slides)

| # | Block | Slide | Pattern / activity id |
|---|---|---|---|
| 1 | B0 | Title: "From Skeleton to Outfit: Semantic HTML & CSS Basics" — Week 2 · Day 2 | title |
| 2 | B0 | Today's roadmap | agenda |
| 3 | B0 | Same skeleton, three outfits | 3 images |
| 4 | B0 | ACTIVITY → **D2-00** Outfit swap | activity |
| 5 | B1 | Boxes with names: div soup vs semantic | comparison |
| 6 | B1 | The semantic page map (wireframe) | wireframe |
| 7 | B1 | Who reads the names? Google, screen readers, AI, teammates | cards |
| 8 | B1 | ACTIVITY → **D2-01** Div soup → semantic | activity |
| 9 | B1 | When NOT to use each tag | table |
| 10 | B1 | ACTIVITY → **D2-02** 🐞 Semantic misuse (5 bugs) | activity |
| 11 | B2 | The parcel label read aloud | analogy |
| 12 | B2 | Alt text: meaningful vs decorative (`alt=""`) | comparison |
| 13 | B2 | Head and meta: title, description, viewport, favicon | code |
| 14 | B2 | Instructor demo: Narrator on the projector · you: Tab walk + Lighthouse | demo / screenshot slot |
| 15 | B2 | ACTIVITY → **D2-03** 🐞 A11y audit (6 bugs) | activity |
| 16 | B3 | TV, radio, window: audio / video / iframe | code |
| 17 | B3 | Autoplay needs muted · poster · fallback text | cards |
| 18 | B3 | ACTIVITY → **D2-04** 🐞 Broken media (5 bugs) | activity |
| 19 | B3 | ACTIVITY → **D2-05** Media corner | activity |
| 20 | Break | Break — 10 min | break |
| 21 | B4 | CSS is the outfit | analogy |
| 22 | B4 | A CSS rule = who + what | code diagram |
| 23 | B4 | Three ways: sticky note / outfit list / school uniform | cards + code |
| 24 | B4 | The cascade + DevTools Styles panel | screenshot slot |
| 25 | B4 | ACTIVITY → **D2-06** 🐞 Stylesheet not loading (6 bugs) | activity |
| 26 | B4 | ACTIVITY → **D2-07** Restyle the bio | activity |
| 27 | B5 | Calling students in class | analogy |
| 28 | B5 | Selector table | table |
| 29 | B5 | Who wins? id > class > element | diagram |
| 30 | B5 | ACTIVITY → **D2-08** 🐞 Selector mix-ups (5 bugs) | activity |
| 31 | B5 | ACTIVITY → **D2-09** Selector target practice (5 targets) | activity |
| 32 | B6 | Paint shop: named / hex / rgb / rgba | analogy 1 + swatches |
| 33 | B6 | Measuring tape: px / % / rem / em | analogy 2 + diagram |
| 34 | B6 | Fonts and text: stacks, line-height, text-align | code |
| 35 | B6 | ACTIVITY → **D2-10** 🐞 Units & colours (5 bugs) | activity |
| 36 | B6 | ACTIVITY → **D2-11** Theme the canteen menu | activity |
| 37 | Break | Break — 10 min | break |
| 38 | B7 | Everything is a box being shipped | analogy diagram |
| 39 | B7 | Shorthand 1/2/4 values + `margin: 0 auto` | code |
| 40 | B7 | The width trap: content-box vs border-box | comparison |
| 41 | B7 | ACTIVITY → **D2-12** 🐞 Broken cards (5 bugs) | activity |
| 42 | B7 | ACTIVITY → **D2-13** Profile card | activity |
| 43 | B7 | ACTIVITY → **D2-13** show & tell on the projector (3 min) | activity |
| 44 | B8 | The queue vs the bench | diagram |
| 45 | B8 | ACTIVITY → **D2-14** 🐞 Nav won't behave (5 bugs) | activity |
| 46 | B9 | ACTIVITY → **D2-15** Style Momo House: 5 checkpoints | activity (step/gate) |
| 47 | B10 | Bootstrap = IKEA for websites (instructor demo; try it in D2-FF6) | analogy + code |
| 48 | B10 | Rapid quiz: 10 questions, Kahoot-style | activity (quiz) |
| 49 | B10 | Homework **D2-HW1–HW4** + exit ticket + "Next: CSS deeper (flexbox, layout)" | activity (exit ticket) |

Fast finishers in the speaker notes: D2-FF1 (42), D2-FF2 (45), D2-FF3 (31), D2-FF4 (25), D2-FF5 (15), D2-FF6 (47).

**ACTIVITY mapping check:**
- Day 1 → D1-00 … D1-16 (17 ids, every classwork id has a slide) + prediction / quiz / exit ticket.
- Day 2 → D2-00 … D2-15 (16 ids) + quiz / exit ticket. ✔

---

## 6. Work split (A0 → A1 ∥ A2, with B and C in parallel)

### Builder A0 — assets + tooling (short pre-task; A1 and A2 wait for it, B and C don't)
Owns:
- `week2/day1/assets/**` and `week2/day2/assets/**` (all SVGs, media, vendor; §3.3)
- both `.htmlhintrc` files
- `week2/day1/_tools/{check_pack.py, .htmlvalidate.json, make_zips.py}` and `week2/day2/_tools/.htmlvalidate.json`

Must:
- **`check_pack.py --day N --root <path to week2/>`**: exit code 0 = pass. Checks:
  - every id in §4 for that day has its folder
  - every solution HTML passes `npx html-validate` (config `_tools/.htmlvalidate.json`) and has every `href`/`src` resolving
  - every bug-hunt has a `solution/BUGS.md` with the §4 bug count
  - the starter differs from the solution at each BUGS.md line
  - no starter contains the words "bug", "fix" or "TODO: bug"
  - every `assets/` file referenced by an exercise exists
  - prints a summary table
  
  It must run on a half-built pack and report what is missing, not crash.
- **`make_zips.py --day N --root <path>`**: builds the zips from `week2/dayN/`:
  - Student zip, top folder **`W2D1/` or `W2D2/`**: everything except `solution/`, `_solutions/`, `instructor-demos/`,
    `instructor-guide/`, `00-plan/`, `_tools/`, `_dist/`, `deck/`, `print/instructor/` and `CHANGES-FROM-PLAN-*.md`.
  - Instructor zip: everything except `_dist/`.
  - `--with-solutions` builds a student zip that also includes `solution/` and `_solutions/` (to share after class).
- Check every `.htmlhintrc` rule against the current HTMLHint extension (§3.0).
- Finish with `CHANGES-FROM-PLAN-A0.md` and a one-line "assets ready" in the report. Then A1 and A2 start.

### Builder A1 (Day 1) and A2 (Day 2) — code pack
Owns (for their day): `README.md`, `START-HERE.md`, `instructor-demos/**`, `classwork/**` (all READMEs,
starters, solutions, BUGS.md), `homework/D?-HW1*`, `D?-HW2*`, `D?-HW4*` folders and their `_solutions/`,
`_tools/CHECK-REPORT-dayN.md`.
A2 builds the D2-15 starter itself from the §4 spec: Momo House from the D1-15 solution, upgraded with
header/nav/main/footer and the same content. A2 does not wait for A1.
Must:
- Implement **exactly** the planted bugs in §4, including the *italic placement constraints*. Mark each bug in
  `BUGS.md` with file, line, fix and visibility tag. Starters contain no comments that give the bugs away.
- Each starter still opens and renders in Live Server, except D1-HW1 bug 1 (blank page on purpose, with a README "fix
  first" note).
- Every solution passes `npx html-validate` and HTMLHint with zero errors.
- Run `check_pack.py --day N` → pass. Paste the output into `CHECK-REPORT-dayN.md`.
- Render every starter and solution in headless Chrome/Playwright and look at the screenshots. For every V bug,
  confirm the starter screenshot shows it. This is "check and recheck".
- Classwork README order:
  1. Title + id + time box + type badge
  2. Goal (1 line)
  3. "Open `index.html` with Live Server"
  4. Task / checklist
  5. Bug-hunts only: "There are N bugs. Find at least N−2.", hint categories, the §0 visibility legend, any "fix this first" note
  6. "Done looks like"
  7. Scoreboard line (bug-hunts)
  8. "Stuck?" with a 3-hint ladder
  9. "Fast? Try D?-FFn"

  Plain English, short sentences (ESL).
- `STEPS.md` per demo block: for each step, the exact lines to type, the Emmet abbreviation if any, and one "say this"
  line. The step N folder = the finished state after step N.

### Builder B — notes + homework sheets + print
Owns: `notes/**`, `homework/W2D?-Homework-Sheet.md`, `homework/D?-HW3-*.md`, `homework/_solutions/D?-HW3-Answer-Key.md`,
`print/**` (incl. `day1/print/_build_print.py`).
Must:
- Each notes file follows the `tsi-student-pack` handout rules, in this order:
  1. **Layer** line (Frontend)
  2. The analogy, in the exact §2 wording
  3. The concept in plain English
  4. Runnable snippets: full small HTML (+ CSS) files to paste into a new file and open with Live Server
  5. "Common mistakes", each tied to the bug-hunt ids where it was planted (e.g. "see D1-09 bug 4")
  6. "Check yourself" (no answers)
  7. "Try it" (pointing to classwork ids)
  8. The Stage 1 AI rule with one example prompt
- Notes ↔ blocks:
  - Day 1: 01 = B1, 02 = B0 + B2, 03 = B3, 04 = B4, 05 = B5, 06 + 07 = B6, 08 = B7, 09 = B8, 10 = B3 spell-checker + B9 + B10, 11 = cheatsheet.
  - Day 2: 01 = B1, 02 = B2, 03 = B3, 04 = B0 + B4, 05 = B5, 06 = B6, 07 = B7, 08 = B8, 09 = all CSS bug types, 10 = B10, 11 = cheatsheet.
- **Day 1 notes 10** includes a one-page **"browser repair table"**: for each bug type, what the browser silently does.
  - an orphan `<td>` → an invented `<tr>`
  - text between rows → moved above the table (foster-parenting)
  - misnested inline tags → reconstructed
  - an unclosed `<a>` → closed by the next `<a>`
  - a second `<head>` → ignored
  - content after `</html>` → moved into body
  - an unclosed `<title>` or `<textarea>` → swallows the rest as text
  
  Also the V/D/H/R legend.
- **Day 2 notes 09** has the CSS equivalent, **"what the browser drops"**: an invalid declaration is dropped, an invalid
  selector drops the whole rule, a missing `}` swallows the next rule, and an unknown property is ignored.
- Use the same names and data as §4 (Momo House, TSI Canteen, Aarav, Sunita, Didi, Rajan; §3 file names), so the notes
  match the classwork without B reading A's files. B tests every snippet: render it or run `npx html-validate`.
- Homework sheets: summaries of HW1, HW2 and the stretch HW4, time estimates, and a submit checklist (pointing at A's
  folders by name). Write HW3 in full (self-check + viva-style interview questions; answer key in `_solutions/`).
- Print: build `Student-Notes` and `Homework-Sheet` as soon as their md is done. Build `Classwork-Booklet` and
  `instructor/Answer-Keys` **last**, from A1/A2's finished READMEs and `BUGS.md`. docx in the TSI docx pattern
  (session-designer `references/docx-pattern.md`), code in Courier New shaded blocks, then PDF. Render a sample of PDF
  pages to PNG and look at them.

### Builder C — decks + instructor guides
Owns: `deck/**`, `instructor-guide/**` for both days.
Must:
- Decks per §5 with `tsi-deck-theme-v2`:
  - `createDeck`, `D.activity`, strict save
  - `qa-check.py --min-slides 40` → PASS
  - render to PNG and look at every slide
  - code on slides ≤ 12 lines, copied from §4 / the guide
- Instructor guide per day (.md → .docx via the session-designer docx pattern):
  - cover, overview, objectives, the §1 run sheet
  - **one section per block**, in this order:
    1. hook
    2. analogy
    3. demo talk-track pointing at `instructor-demos/<block>/step-NN-*` (names from §3)
    4. activity callout: id, time box, brief, done looks like, **the §4 planted-bug list with fixes and visibility tags**, common errors while circulating
    5. **reveal script** (2 min)
    6. checkpoint
    7. "if behind, cut this"
  - setup checklist (Live Server + HTMLHint installed the day before; speakers for Narrator; Wi-Fi optional)
  - relay scoreboard template, quiz (10 Qs, Kahoot-style) with answers, exit-ticket questions
  - the stretch note (§1)
- `W2D?-Run-Sheet.md`: one printable page.
- C works from this PLAN, so it doesn't wait for A. At the end C reads every `CHANGES-FROM-PLAN-*.md` and updates the
  guide and deck to match.

### Order
1. **A0 first** (assets + tools). B and C start at the same time as A0.
2. When A0 reports "assets ready", A1 and A2 start in parallel.
3. A1/A2 done → B builds the classwork booklets + answer keys.
4. **QA** (separate crewmate):
   - run `check_pack.py --day 1` and `--day 2`
   - open every starter and solution in a browser
   - check every ACTIVITY id ↔ folder ↔ guide section
   - merge all `CHANGES-FROM-PLAN-*.md`
   - build the zips and test-unzip them: they open as `W2D1/` and `W2D2/` and Live Server works

---

## 7. Practical notes and open items for the captain

- **Before class, at home:** students install Live Server + HTMLHint (START-HERE). In class, the double-click + F5
  fallback keeps anyone without them working. Late installs happen at the first break.
- **Offline:** everything works without Wi-Fi. With Wi-Fi, three bonuses: `ping google.com`, the Network tab on a
  real site, and the W3C validator. Kahoot also needs Wi-Fi; otherwise the quiz runs from the deck slide.
- **Narrator** is instructor-only, on the projector with speakers.
- **Case-sensitivity bugs (H)** are kept on purpose (D1-HW1 bug 2, D1-HW4 bug 3) with the Linux-hosting talk-track.
- **Solutions release:** the student zip has no solutions; the `--with-solutions` zip is the captain's call each day.
- **CSS scope:** Day 2 stops at display. Flexbox, grid, positioning and responsive design wait for sessions 3 / 3.2
  ("Coming later" in the notes).
- **If the room falls behind** (the guide repeats this per block): Day 1, cut D1-08 and D1-12 to homework (builds; the
  bug-hunts stay), then shorten the quiz. Day 2, cut D2-09 and D2-11. **D1-15 and D2-15 are never cut.**

---

## 8. Review changelog (v1 → v2)

### 8.1 Required changes (review items 1–12)

| # | Review item | What changed in v2 |
|---|---|---|
| 1 | Bug-hunt pacing too dense; no debrief | In-class hunts cut to 4–6 bugs (capstone 10) at ≥ 1.5 min/bug (§4.1/§4.3 pace lines). "Find at least N−2" in every README. A 2-min **reveal** (T) after every hunt (3 min after the capstone). H ratio stated on the 220 non-break minutes: 67.3 % both days (§1). Cut bugs moved to D1-FF5, D1-HW4, D2-FF5 and D2-HW4 (firstmate decision c) |
| 2 | Over-scoped builds | D1-10 gallery → 2 figures + 1 external link + `#top` (sub-page + mailto → new **D1-FF6**). D1-12 exam table → modify task, no rowspan, tfoot bonus. D1-14 → 3 required + bonus; `optgroup` removed; `type="color"` added as bonus. **D2-15 → 30-min block (28 H)**. Bootstrap → 4-min T-only teaser; v1's D2-16 → **D2-FF6**. D2-09 → 5 targets, 5 min. D2-11 → 5 min |
| 3 | Spell-checker taught after the silent bugs | 3-min HTMLHint + Problems panel + F12 demo in D1·B3 right after "polite guessers", before D1-04 (deck slides 20–21; demo folder `B3-skeleton/step-05-htmlhint-demo`). B10 keeps W3C + the self-audit |
| 4 | HTMLHint ruleset + D-bug tooling | `.htmlhintrc` pinned in §3.0 (all 11 listed rules + `html-lang-require` with a fallback note). New legend in §0: D split into D(HH)/D(F12)/D(URL)/D(LH)/D(W3C), plus the **R** rule-check tag. Every bug in §4 is tagged |
| 5 | Wrong observability claims | `<title>` in body: now tagged D(F12) and moved to D1-HW4 bug 2; D1-04 uses the `<titel>` typo instead (V). Unclosed comment: placed last before the footer, described as "footer and everything after disappears". Unclosed `<a>`: must be the last nav item before the h1. textarea: "fix first" notes in D1-13 and D1-15 |
| 6 | Non-deterministic Day 2 bugs | Autoplay-without-muted removed; replaced by `<source>` after `</video>` (D2-HW4 bug 3). Poppins → the fictional **"Momo Sans"** (D2-10 bug 4) |
| 7 | D2-12 bug 7 uses display before B8 | Moved to D2-14 bug 4 (merged with the inline padding overlap) |
| 8 | D2-09 needs `:nth-child` | The constraint is stated: only taught selectors; the starter carries the classes and ids; 5 explicit targets listed |
| 9 | Settings/setup gaps | `.vscode/settings.json` content pinned with `"editor.linkedEditing": true`. Zip top folders **W2D1/** and **W2D2/** (firstmate decision d) used everywhere. No-Live-Server fallback in B0, START-HERE and deck slide 4 |
| 10 | Asset/changelog/tooling collisions | New **Builder A0** pre-task makes ALL SVGs, media and vendor for both days + `check_pack.py` (`--day N --root <path>`) + `make_zips.py` before A1/A2 start (firstmate decision b). Per-builder logs `CHANGES-FROM-PLAN-<builder>.md` |
| 11 | Old Internet content not covered | New **15-min D1·B1 "How the web works"** block (postal system, DNS, ping, F12 Network, View Source) with exercise **D1-01**, notes `01-how-the-web-works.md`, deck slides 6–9 and demo `B1-internet/` (firstmate decision a). Paid for by trims: B2 15→10, Text 25→23, Lists 22→19, Tables 25→22, Forms 30→28, Capstone 23→22, Wrap-up 15→11 |
| 12 | Narrator for 20 students; D2-03 count | Narrator is instructor-only (B2, slide 14, §7). D2-03 counts each bug once (6). Description/viewport moved to D2-HW4 as two separate bugs |

### 8.2 Smaller corrections and optional suggestions

| Item | What changed |
|---|---|
| B2 should name `lang="en"` | D1·B3 content lists `lang="en"`; demo step folder `step-01-doctype-html-lang`; slide 16 |
| D2-02 `onclick` JS | Now a plain `<div class="btn">Subscribe</div>`, with an explicit "no JavaScript" note |
| D2-12 bug 2 needs a background | The wrapper has `background: #fdf6ec`, written as an italic constraint |
| D1-06 bug 1 hint | Now D1-07 bug 1; the README hint is "look for the missing indent" |
| FF ids only as a range | All 12 FF ids are listed explicitly in §0 and in the §4 tables |
| Title-Case vs kebab-case | §3.0: folders and code/asset files kebab-case; document files may be Title-Case as named |
| Break timing / stretch | A 3-min stretch rule after B3 (Day 1) and B3 (Day 2) in §1, in the guide via C |
| Optional 1: show & tell moments | 3-min show & tell after D1-10 and D2-13 (in the run sheets; slides 38 and 43) |
| Optional 2: scoreboard line | Required in every bug-hunt README (§0, §6 A1/A2) |
| Optional 3: relay helpers | D1-15: pairs that finish become helpers, then FF |
| Optional 4: Kahoot-style quiz | 10-question Kahoot-style quiz both days (offline fallback: deck slide + A/B/C/D hands) |
| Optional 5: browser repair table | Day 1 notes 10 (+ Day 2 notes 09 "what the browser drops"), §6 B |

### 8.3 Day 1 id map (v1 → v2)

v1 D1-00 → v2 D1-00 · *(new)* → **D1-01** See the letters arrive · v1 D1-01 Emmet → D1-02 · D1-02 → D1-03 · D1-03 → D1-04 ·
D1-04 → D1-05 · D1-05 → D1-06 · D1-06 → D1-07 · D1-07 → D1-08 · D1-08 → D1-09 · D1-09 → D1-10 · D1-10 → D1-11 · D1-11 → D1-12 ·
D1-12 → D1-13 · D1-13 → D1-14 · D1-14 → D1-15 · D1-15 → D1-16. FF1–FF4 unchanged; **D1-FF5, D1-FF6, D1-HW4 are new**.
Day 2 ids are unchanged, except v1 **D2-16 → D2-FF6**; **D2-FF5 and D2-HW4 are new**. Day 1 block numbers also shift by
one from B2 onward (B1 is the new Internet block). Demo folders follow the new block numbers.

### 8.4 Post-A0 sync (after `.firstmate/reports/a0.md`)

- D1-13: `<form method="get">` with no `action` (A0 found that `action=""` fails html-validate and W3C).
- `.vscode/settings.json` (both days) is owned and already written by **A0**; A1/A2 must not rewrite it.
- `html-lang-require` is supported by HTMLHint VS Code v1.17.0, so no bug was re-tagged R.
- New tool `_tools/make_assets.py` regenerates every asset. A0's `CHANGES-FROM-PLAN-A0.md` has the `BUGS.md` table
  format that `check_pack.py` parses: `| # | File | Line | Bug | Fix | Tag |`. A1/A2 must use it.
