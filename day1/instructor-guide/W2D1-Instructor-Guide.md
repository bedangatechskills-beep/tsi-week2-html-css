---
program: AI-Powered Full Stack Developer Program
label: Instructor Detail Guide
title: Week 2 · Day 1 — How the Web Works + HTML Core
subtitle: Build It, Break It, Fix It
duration: 4 hours · 240 minutes · 67% hands-on
footer: Tech Skills Institute (TSI) · Kathmandu, Nepal · Instructor: Bedanga
---

# 1. Session overview

Today the students learn how a web page travels to their screen, and then they build and repair HTML pages all day. The rhythm of every block is the same: a short hook and analogy, a few minutes of code-along from the staged demo folders, then a **bug-hunt** where they mend a broken page, then a 2-minute **reveal** of every bug. The day ends with a pairs relay on Didi's broken Momo House website. Tomorrow (Day 2) we dress the same Momo House site with CSS.

The One Rule, said at the start and repeated at every reveal: **"You may only ship code you can explain, line by line."** AI stage: **Stage 1, AI as Tutor.** Students may ask AI to explain a concept or an error. They type every line themselves.

## Learning objectives

By the end of the day, every student can:

- **Explain** what happens between pressing Enter and seeing a page (postal system: letter, DNS, IP, server, parcel).
- **Use** VS Code like a professional: Emmet, Alt+Shift+↓, Ctrl+/, Shift+Alt+F, Ctrl+D, linked editing, Live Server.
- **Type** a valid HTML skeleton from memory, with `lang="en"`, charset, viewport and title.
- **Choose** text tags by meaning (strong, em, br, hr, blockquote, q, span) and print special characters with entities.
- **Build** ul, ol (type, start), nested lists and dl/dt/dd.
- **Write** relative and absolute paths, including `../`, and add images with useful alt text.
- **Build** tables with caption, thead/tbody/tfoot, th scope, colspan and rowspan, and count cells correctly.
- **Build** forms with matching label for ↔ id, the right input types, radio groups, select, textarea, fieldset, and read the submitted data in the URL.
- **Find** bugs with their eyes, HTMLHint, F12 Elements and the URL bar, and name each bug's visibility tag.

## Materials & pre-session checklist

**Instructor (the day before):**

- The `W2D1` folder unzipped on the instructor laptop; open it in VS Code with **File → Open Folder**.
- Live Server + HTMLHint extensions installed; `.vscode/settings.json` and `.htmlhintrc` sit at the folder root (do not change them).
- Deck `deck/TSI-W2D1-HTML-Core-Deck.pptx` open in presenter view (the talk-track is in the speaker notes).
- Run through `instructor-demos/` once. Every `step-NN` folder is the **finished state** of that step: if a live demo breaks, open the next step folder and carry on.
- Have `classwork/<id>/solution/BUGS.md` files ready to open on the projector for each reveal.
- Whiteboard + marker for the guesses (slide 6) and the relay scoreboard (D1-15).
- Optional Wi-Fi bonuses: `ping google.com`, Network tab on a real site, validator.w3.org, Kahoot.

**Students (at home, before class — START-HERE.md):**

- VS Code installed, Live Server (Ritwick Dey) and HTMLHint extensions installed.
- The student zip unzipped; they open the **`W2D1`** folder, never a single file and never the zip.

**Fallback plan:**

- No Live Server? Double-click the HTML file to open it in Chrome; after each save press **F5**. Late installs happen at the 1:28 break. One install problem must never stop the room.
- No Wi-Fi? Everything works offline: images are local SVGs, `ping localhost` replaces `ping google.com`, the quiz runs from slide 52 with A/B/C/D hands.
- Demo broke? Open the next `step-NN` folder.

# 2. Session timing at a glance

T = instructor talks or demos (including reveals and show & tell). H = students' hands on the keyboard. H ratio = 148 / 220 non-break minutes = **67.3 %**.

| Clock | Min | Block | Activity (exercise id) | T | H |
|---|---|---|---|---|---|
| 0:00–0:10 | 10 | B0 Welcome & setup check | **D1-00** Setup check | 2 | 8 |
| 0:10–0:25 | 15 | B1 How the web works | **D1-01** See the letters arrive | 7 | 8 |
| 0:25–0:35 | 10 | B2 VS Code power tools + Emmet | Demo → **D1-02** Emmet speed drill | 3 | 7 |
| 0:35–1:05 | 30 | B3 Skeleton, anatomy, nesting, comments + spell-checker | Code-along (5) → **D1-03** → **D1-04** 🐞 Broken Skeleton → reveal | 11 | 19 |
| 1:05–1:28 | 23 | B4 Text = tone of voice + entities | Code-along (2) → **D1-05** → **D1-06** 🐞 Canteen News → reveal | 7 | 16 |
| 1:28–1:38 | 10 | ☕ Break | Late installs | — | — |
| 1:38–1:57 | 19 | B5 Lists & nesting | Code-along (2) → **D1-07** 🐞 Broken Lists → reveal → **D1-08** | 5 | 14 |
| 1:57–2:27 | 30 | B6 Links, paths & images | Code-along (3) → **D1-09** 🐞 Broken Paths → reveal → **D1-10** → show & tell (3) | 11 | 19 |
| 2:27–2:49 | 22 | B7 Tables | Code-along (2) → **D1-11** 🐞 Broken Timetable → reveal → **D1-12** | 6 | 16 |
| 2:49–2:59 | 10 | ☕ Break | Teaser: forms | — | — |
| 2:59–3:27 | 28 | B8 Forms | Code-along (3) → **D1-13** 🐞 Broken Signup → reveal → **D1-14** | 8 | 20 |
| 3:27–3:49 | 22 | B9 Capstone bug-hunt relay (pairs) | Rules (2) → **D1-15** 🐞 Momo House repair → reveal (3) | 5 | 17 |
| 3:49–4:00 | 11 | B10 Validate, quiz, homework, exit ticket | **D1-16** Validate & self-audit, quiz, exit ticket | 7 | 4 |
| **Total** | **240** | | | **72** | **148** |

**The bug visibility legend** (used on every bug list, README and BUGS.md):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can see it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it / Problems panel (Ctrl+Shift+M) | HTMLHint with the class `.htmlhintrc` |
| **D(F12)** | Only the Elements panel shows what the browser built | Chrome DevTools |
| **D(URL)** | Submit the form (`method="get"`) and read the address bar | the URL bar |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **H** | Hidden on Windows, breaks on a real Linux server (file-name case) | the instructor explains |
| **R** | Rule check: no tool fires; read the code against the rule | your brain + the notes |

Every bug-hunt README says **"There are N bugs. Find at least N−2."**, gives one hint per bug type, the legend, and the scoreboard line `I found __ / N. The reveal taught me: ________`.

# 3. B0 — Welcome & setup check (10 min, 0:00–0:10)

Slides 1–5.

## Hook

"A professional kitchen: before cooking, check the stove works." Today is mostly hands-on. Many pages are broken on purpose; the students are the repair crew. In class there are 42 planted bugs across 7 bug-hunts.

## Analogy

**The professional kitchen.** VS Code is the kitchen: every tool is labelled and within reach. Live Server is "taste as you cook": save and see the result at once.

## Demo talk-track

1. Slide 3: read the One Rule slowly. Walk the four cards: code-along, bug-hunts ("find at least N−2"), the scoreboard line, fast finishers.
2. Say: "If my demo breaks, I open the next step folder in `instructor-demos/`. You can open the same folders."
3. Slide 4: show the fallback once. Double-click `index.html` in File Explorer → Chrome opens it → change a word in VS Code → Ctrl+S → F5 in Chrome.

## Activity: D1-00 Setup check

> **ACTIVITY:** **D1-00 Setup check** · 8 min · solo · `W2D1/classwork/D1-00-setup-check/`
> Brief: open the `W2D1` folder (File → Open Folder), open `index.html` with Live Server (or the double-click fallback), change the `<h1>` to your own name, save, see the reload, open F12 and find the `<h1>` in Elements.
> Done looks like: the browser shows the student's own name; F12 is open on Elements.

**Watch for while circulating:**

- They opened the zip, not the unzipped folder → unzip first.
- They opened one file, not the folder → "Open with Live Server" is missing → File → Open Folder → `W2D1`.
- The heading does not change → not saved (white dot on the tab).
- No Live Server at all → fallback, install at the break.

## Checkpoint

> **CHECKPOINT:** Hands up when your own name shows in the browser. Move on at about 80 % of hands.

## If behind, cut this

> **IF BEHIND:** Do not wait for installs. Anyone stuck after 4 minutes uses the double-click + F5 fallback and installs at the 1:28 break.

# 4. B1 — How the web works (15 min, 0:10–0:25)

Slides 6–9.

## Hook

Slide 6 (prediction, tagged ACTIVITY): "You type momohouse.com.np and press Enter. In 2 seconds a page appears. What happened?" Let them shout guesses for 1 minute. Write 3–4 words on the whiteboard. Do not correct yet.

## Analogy

**The Internet is a postal system.**

- The **browser** is you writing a letter. The letter says "please send me your home page". That letter is the **HTTP request**.
- **DNS** is the phone book. You know the name (momohouse.com.np); DNS gives you the address.
- The **IP address** is the precise home address, like 104.21.45.10. Computers only use numbers.
- The **server** is a warehouse. It finds the goods and mails them back.
- The **response** is the parcel: HTML, CSS, images.

Say the line: **"The internet is not magic. It is computers mailing text to each other."**

Then slide 8: **a page is many parcels.** First the HTML parcel arrives. The browser reads it and sends more letters for the CSS and the pictures. On our parcel page: 1 HTML + 1 CSS + 5 SVG = 7 parcels. Restaurant recap from Week 1: HTML = ingredients and menu structure, CSS = plating and decor, JS = the waiter.

*Story (speaker notes of slide 8, 1 min, only if time):* the first website (1991) was only text and links. The Wayback Machine (web.archive.org) shows old versions of sites. Show it only with Wi-Fi; it is not hands-on.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B1-internet/` (follow `STEPS.md`).

1. Open a terminal in VS Code (Terminal → New Terminal, or Ctrl + the key under Esc). Type `ping localhost` (offline) or `ping google.com` (Wi-Fi). Each "Reply" line = one letter there and back. Ctrl+C stops it.
2. Open `step-01-parcel-page/index.html` with Live Server. F12 → **Network** tab → F5. Point at the rows: index.html, style.css and 5 SVGs (logo-momo-house, momo, momo-plate, thamel, swayambhu). Ignore the `ws` row (Live Server's websocket); the page has `<link rel="icon" href="data:,">`, so no favicon.ico row appears.
3. Right-click the page → **View Page Source**. "This is exactly the text the server mailed us."

## Activity: D1-01 See the letters arrive

> **ACTIVITY:** **D1-01 See the letters arrive** · 8 min · solo · `W2D1/classwork/D1-01-see-the-letters-arrive/`
> Brief: (1) `ping localhost` or `ping google.com`. (2) Open the parcel page with Live Server → F12 → Network → refresh; count the parcels and write it in `my-findings.md`. (3) View Page Source and find the `<h1>`. Wi-Fi bonus: Network tab on any real site.
> Done looks like: `my-findings.md` has a ping time, the parcel count (7) and the `<h1>` text and line number. Sample answer: `solution/sample-findings.md`.

**Watch for while circulating:**

- The Network tab is empty → they opened it after the page loaded. Keep the tab open and press F5.
- The count is 8 → that is Live Server's websocket row (type `ws`); the README says do not count it. The page has `<link rel="icon" href="data:,">`, so Chrome adds no `favicon.ico` row.
- `ping` keeps going → Ctrl+C.

## Checkpoint

> **CHECKPOINT:** Ask 2 students: "How many parcels? Which one arrived first?" (7; the HTML first, because it tells the browser what else to fetch.) Go back to the slide 6 guesses: who was close?

## If behind, cut this

> **IF BEHIND:** Skip View Page Source (step 3). Do not cut the Network-tab count; D1-01 is the only hands-on part of this block.

# 5. B2 — VS Code power tools + Emmet (10 min, 0:25–0:35)

Slides 10–13.

## Hook

"Professional cooks do not walk to another room for a knife. Today you learn where every knife is."

## Analogy

**The kitchen:** knives within reach (slide 10). **Emmet = speed-dial for tags** (slide 11): you press one short code and VS Code types the whole thing.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B2-vscode-emmet/` (`STEPS.md`, `step-01-emmet-skeleton/index.html`, `step-02-emmet-structures/index.html`). Students watch; this demo is inside T.

1. Slide 10 tour (in VS Code, not on the slide): Explorer, editor tabs (white dot = not saved), Problems panel (Ctrl+Shift+M), terminal (Ctrl+`), the Go Live button.
2. In an empty `.html` file, type each abbreviation and press **Tab**: `!` → `h1+p` → `ul>li*5` → `nav>a*3` → `.card>h2+p` → `ul>li.item$*3` → `lorem20`.
3. Say: "**>** means inside, **+** means next to, ***** means repeat, **.** means class, **$** means a number."
4. Show the 6 shortcuts (slide 12), 15 seconds each: Alt+Shift+↓ (copy line down), Ctrl+/ (comment), Shift+Alt+F (format), Ctrl+D (next same word), linked editing (change `<div>` to `<section>`; the closing tag follows — it is on in our `.vscode/settings.json`), Ctrl+S.

What the abbreviations produce (the slide 11 table):

```html
<!-- ul>li*5 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<!-- .card>h2+p -->
<div class="card">
  <h2></h2>
  <p></p>
</div>
<!-- ul>li.item$*3 -->
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

## Activity: D1-02 Emmet speed drill

> **ACTIVITY:** **D1-02 Emmet speed drill** · 7 min · solo · `W2D1/classwork/D1-02-emmet-speed-drill/`
> Brief: 6 required abbreviations (`!`, `h1+p`, `ul>li*5`, `nav>a*3`, `table>tr*3>td*2`, `.card>h2+p`) + 2 bonus (`ul>li.item$*3`, `lorem20`) until `index.html` matches `target.html`. Use Alt+Shift+↓, Ctrl+/, Shift+Alt+F and linked editing.
> Done looks like: `index.html` matches `target.html`; they used Tab, not hand-typing every tag. Answer: `solution/index.html`.

**Watch for while circulating:**

- A space inside the abbreviation (`ul > li`) — Emmet stops at the space.
- Pressing Enter instead of Tab.
- Tab does nothing → the file is not saved as `.html` yet.

## Checkpoint

> **CHECKPOINT:** "Show me `table>tr*3>td*2` on your screen." Spot-check 3 laptops.

## If behind, cut this

> **IF BEHIND:** Drop the 2 bonus abbreviations. Keep the 6 required ones; students use Emmet all day.

# 6. B3 — Skeleton, anatomy, nesting, comments + your spell-checker (30 min, 0:35–1:05)

Slides 14–22.

## Hook

Slide 14 (dark opener): "HTML is the Skeleton." Your body has a shape because of the skeleton. Clothes (CSS) come tomorrow. Movement (JS) comes later.

## Analogy

Two pictures, used together:

- **The skeleton:** nothing stands without it.
- **Labelled boxes inside boxes:** every tag is a label on a box. `<body>` is a big box; inside it a `<p>` box; inside that a `<strong>` box. **Last box opened, first box closed.**
- `<head>` = **the label on the parcel** (information about the page, invisible). `<body>` = **what is inside the parcel**.
- Browsers are **polite guessers**: they never show an error; they guess. HTMLHint = **the spell-checker for HTML**.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B3-skeleton/` (`STEPS.md`).

1. **Slide 15 — anatomy** (talk, 2 min). Opening tag `<a`, attribute `href="menu.html"` (name="value", double quotes), content, closing tag `</a>`. Element = the whole thing. Void elements (img, br, hr, meta, input) are stickers, not boxes.
2. **Slide 16 — code-along, 3 min** (`step-01-doctype-html-lang`, `step-02-head-meta-title`, `step-03-body-h1-p`). Type line by line; students type with you. One sentence per line (see the notes on slide 16). Then delete everything, type `!` + Tab: "Emmet gives you this in one key, but you must know every line."

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunita's Page</title>
  </head>
  <body>
    <h1>Hello, I am Sunita</h1>
    <p>I am learning HTML at Tech Skills Institute.</p>
  </body>
</html>
```

- `<!DOCTYPE html>` — "this is a modern HTML page". Without it the browser switches to old "quirks" mode.
- `lang="en"` — tells the browser and screen readers the language. Every page, every time.
- `meta charset` — Nepali names, © and emoji show correctly. `meta viewport` — phones show the page at the right size.
- `<title>` — the text on the browser tab.

3. **Slide 17 — nesting** (talk). Crossed boxes vs last-opened-first-closed. Indent 2 spaces per level; Shift+Alt+F shows the boxes.

```html
<!-- wrong: the boxes cross -->
<p>I live in
  <strong>Kathmandu</p>
</strong>

<!-- right: last opened, first closed -->
<p>I live in
  <strong>Kathmandu</strong>
</p>
```

4. **Slide 18 — code-along, 2 min** (`step-04-nesting-comments`). Comments and the parcel label. Show Ctrl+/.

```html
<body>
  <!-- My introduction -->
  <h1>Hello, I am Sunita</h1>
  <p>I am learning <strong>HTML</strong> at Tech Skills Institute.</p>
  <p>I live in <em>Patan</em>, near the Durbar Square.</p>
  <!-- My favourite things -->
  <h2>My favourite things</h2>
  <ul>
    <li>Momo with achar</li>
    <li>Evening walks in Patan</li>
  </ul>
</body>
```

- The `<head>` (parcel label) stays as in step-03; the comments go in the body. Point at the strong/em nesting: last opened, first closed.

- A comment opens with `<!--` and closes with `-->`. With only `->` it never closes and hides everything after it (D1-04 bug 6).

5. **D1-03** (below).
6. **Slide 20 — polite guessers** (talk, 1 min). Unclosed `<h1>` → everything after it is a giant heading. Crossed boxes → rebuilt silently; only F12 shows it. Missing DOCTYPE → quirks mode, no warning.
7. **Slide 21 — the spell-checker demo, 3 min** (`step-05-htmlhint-demo/index.html`, 3 errors on purpose: no doctype, an unclosed h1, an img with no alt). Show the squiggles → Ctrl+Shift+M lists all 3 with line numbers (click one to jump) → F12 Elements shows what the browser built. Then teach the V / D(HH) / D(F12) / D(URL) / H / R legend.

## Activity: D1-03 Skeleton from memory

> **ACTIVITY:** **D1-03 Skeleton from memory** · 4 min · solo · `W2D1/classwork/D1-03-skeleton-from-memory/`
> Brief: notes and slides closed, no Emmet. Type the full skeleton into the empty `index.html`, add an h1 and a p, open with Live Server. "Wrong is fine. Blank is not."
> Done looks like: DOCTYPE, `html lang="en"`, head (charset, viewport, title), body with h1 + p; the tab shows their title. Answer: `solution/index.html`.

**Watch for while circulating:** `<!DOCTYPE>` misspelled; `<title>` inside `<body>`; closing tags on meta (they are void); `lang` forgotten.

## Activity: D1-04 Broken Skeleton

> **ACTIVITY:** **D1-04 Broken Skeleton** · 10 min · solo · `W2D1/classwork/D1-04-broken-skeleton/` · "Aarav's first page"
> Brief: open with Live Server, look, then Ctrl+Shift+M and F12 Elements. **There are 6 bugs. Find at least 4.** README note: "Fix bug 4 first if the page looks strange."
> Done looks like: no squiggles, Problems panel empty, the tab shows "Aarav's Page", the footer is back.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `<!DOCTYPE html>` missing | add it as line 1 | D(HH) doctype-first |
| 2 | `<html>` has no `lang="en"` | `<html lang="en">` | D(HH) html-lang-require |
| 3 | `<titel>Aarav's Page</titel>` typo — the tab shows the file path | `<title>…</title>` | V + D(HH) title-require |
| 4 | `<h1>` is never closed, so the paragraph under it is huge | add `</h1>` | V + D(HH) tag-pair |
| 5 | `<p>I live in <strong>Kathmandu</p></strong>` wrong nesting | `…Kathmandu</strong></p>` | D(HH) tag-pair / D(F12) |
| 6 | `<!-- todo: add photo ->` (`->` not `-->`), the last thing before the footer — the footer and everything after it disappears | `<!-- todo: add photo -->` | V |

**Watch for while circulating:**

- They fix bug 1 and think they are done → "What does the Problems panel count say?"
- Bug 6 is the one nobody finds alone → "Where did the footer go?"
- Bug 5 looks fine on the page → "Open F12. What did the browser build?"

## Reveal script (2 min)

Open `solution/BUGS.md` on the projector. For each bug: "What was it? How could you see it?" Ask for the tag before you say it. End with: "Five of these six had a tool. One (bug 6) you only see by looking — and the browser stayed polite the whole time."

## Checkpoint

> **CHECKPOINT:** Hands up: "I found at least 4." Everyone writes the scoreboard line in the README: `I found __ / 6. The reveal taught me: ____`.

## If behind, cut this

> **IF BEHIND:** Shorten the polite-guessers talk to 30 seconds (slide 20) and D1-03 to 3 minutes. Never skip the 3-minute spell-checker demo: every later hunt depends on it.

> **STRETCH:** If the room sags after B3 (65 minutes in), call a 3-minute stand-up stretch now and take it from the B10 quiz (cut to 7 questions).

# 7. B4 — Text = tone of voice + entities (23 min, 1:05–1:28)

Slides 23–27.

## Hook

"Say 'I LOVE momo' and 'I love momo'. Same words, different voice. HTML has a voice too."

## Analogy

**Tone of voice:** `strong` = "this matters", `em` = the stressed word, `br` = a pause inside one thought, `blockquote` = "quoting someone else". **Entities = escape codes:** `&lt;` means "print a <, do not start a tag".

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B4-text/` (`step-01-headings`, `step-02-strong-em-br-hr`, `step-03-blockquote-q-span`, `step-04-entities`; each holds `index.html`).

1. **Slide 23** — walk the tone-of-voice table. strong vs b and em vs i: strong and em carry meaning (screen readers stress them); b and i only change the look.
2. **Slide 24** — headings are an outline: one h1, no jumps (h2 → h3, never h2 → h5). Both are **R** rules: no tool fires. Big bold text is CSS, not `<h4>`.
3. **Code-along, 2 min** (`step-02` / `step-03`, then slide 25 `step-04-entities`):

```html
<h2>Didi's rules</h2>
<p><strong>Wash your plate</strong> after lunch.</p>
<p>I said <em>one</em> plate each, not two.</p>
<p>Canteen, TSI building<br>Dillibazar, Kathmandu</p>
<hr>
<p>Didi says:</p>
<blockquote>
  <p>Good food takes time.</p>
</blockquote>
<p>Aarav asked, <q>Is there chicken momo today?</q> The answer was <span>yes</span>.</p>
```

```html
<p>Wrap text in &lt;p&gt; and &lt;/p&gt; tags.</p>
<p>Momo &amp; milk tea: Rs.&nbsp;170</p>
<p>&copy; 2026 TSI Canteen</p>
```

- On the page you see: "Wrap text in <p> and </p> tags." · "Momo & milk tea: Rs. 170" · "© 2026 TSI Canteen".
- Every entity starts with `&` and ends with `;`. One typo (`&nbps;`) and it prints as text.
- Show the broken version live: type `<p>` without the entity → the browser hides it ("Wrap text in tags").

## Activity: D1-05 Grandmother's note

> **ACTIVITY:** **D1-05 Grandmother's note** · 4 min · solo · modify · `W2D1/classwork/D1-05-grandmothers-note/`
> Brief: a short plain-text note (4 sentences, Kathmandu). Add `strong`, `em`, `br` (the address on 2 lines) and `blockquote` (grandmother's saying).
> Done looks like: bold, italic, a line break and an indented quote show; the student can say why each tag is there. Answer: `solution/index.html`.

**Watch for while circulating:** `b` instead of `strong` ("why?"); `<br><br>` used for spacing.

## Activity: D1-06 Canteen News

> **ACTIVITY:** **D1-06 Canteen News** · 10 min · solo · `W2D1/classwork/D1-06-canteen-news-bughunt/` · "TSI Canteen Weekly"
> Brief: read the page top to bottom, check the outline, look for text that shows wrongly and for stray italic or indent. **There are 5 bugs. Find at least 3.**
> Done looks like: one h1; "Wrap text in <p> tags" shows the `<p>`; "Rs. 150" shows with a normal space; no stray italic or indent.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | Two `<h1>` elements | the second becomes `<h2>` | R (one h1 per page) |
| 2 | "Wrap text in <p> tags" shows as "Wrap text in tags" | `&lt;p&gt;` | V |
| 3 | `Rs.&nbps;150` typo shows literally | `&nbsp;` | V |
| 4 | `<blockquote>` closed with `</quote>`, so the rest of the page is indented | `</blockquote>` | V + D(HH) |
| 5 | `<em>` opened and never closed, so everything after it is italic (placed after the blockquote so the two effects can be told apart) | add `</em>` | V + D(HH) |

**Watch for while circulating:** bug 1 has no squiggle (R) → "How many h1s are on this page?"; students delete the second h1 instead of changing it to h2.

## Reveal script (2 min)

Open `solution/BUGS.md`. Point out that bugs 4 and 5 are both "a box never closed" — the same idea as D1-04 bug 4. Bug 1 is a rule check: "no tool will tell you; your brain is the tool."

## Checkpoint

> **CHECKPOINT:** Scoreboard line written. Ask one student to read their "the reveal taught me" sentence.

## If behind, cut this

> **IF BEHIND:** D1-05 can shrink to 3 minutes (strong + br only). Keep D1-06.

Fast finisher for this block: **D1-FF1 Entity art** — `W2D1/classwork/fast-finishers/D1-FF1-entity-art/` (a price board and a paragraph that shows `<p>` literally, using `&lt; &gt; &amp; &copy; &nbsp; &rarr; &hearts;`).

# 8. Break (10 min, 1:28–1:38)

Slide 28. Teaser on screen: "After the break: this page has 6 broken links. You fix them." Use the break for late installs: Extensions (Ctrl+Shift+X) → "Live Server" (Ritwick Dey) → Install; "HTMLHint" → Install; then reload the window. Start again at 1:38 sharp.

# 9. B5 — Lists & nesting (19 min, 1:38–1:57)

Slides 29–31.

## Hook

"Does order matter on your shopping list? Does order matter in a momo recipe?"

## Analogy

**Shopping list vs recipe steps.** Order does not matter → `ul` (bullets). Order matters → `ol` (numbers). A nested list = **a sub-list under one item**.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B5-lists/` (`step-01-ul-ol`, `step-02-nested`, `step-03-dl`; each holds `index.html`). Code-along, 2 min.

1. Slide 29: type both lists. Every `<li>` lives inside a `<ul>` or an `<ol>`. Show `type="A"` and `start="5"` on the ol.

```html
<ul>
  <li>Flour</li>
  <li>Minced chicken</li>
  <li>Onion</li>
</ul>
<ol>
  <li>Make the dough.</li>
  <li>Make the filling.</li>
  <li>Fold and steam.</li>
</ol>
```

2. Slide 30 (`step-02-nested`, `step-03-dl`): the nested list and the glossary. Point at the `</li>` of "Spices": it comes after the inner `</ul>`. "The sub-list lives inside the item."

```html
<ul>
  <li>Flour</li>
  <li>Minced chicken</li>
  <li>Onion</li>
  <li>Spices
    <ul>
      <li>Ginger</li>
      <li>Garlic</li>
      <li>Cumin</li>
    </ul>
  </li>
</ul>
<dl>
  <dt>Achar</dt>
  <dd>A spicy tomato sauce.</dd>
  <dt>Jhol</dt>
  <dd>A thin, warm soup poured over momo.</dd>
</dl>
```

- `dl` = a glossary: `dt` the word, `dd` what it means.

## Activity: D1-07 Broken Lists

> **ACTIVITY:** **D1-07 Broken Lists** · 7 min · solo · `W2D1/classwork/D1-07-broken-lists/` · "Momo shopping list + steps"
> Brief: find the list bugs. Hint: "look for the missing indent (and the missing bullets)". **There are 4 bugs. Find at least 2.**
> Done looks like: every `<li>` is inside a list, the steps are numbered, the glossary uses `<dd>`.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | Three `<li>` with no `<ul>` around them — in Chrome the bullets hang off the left edge | wrap them in `<ul>…</ul>` | V + D(F12) |
| 2 | Cooking steps (order matters) are in a `<ul>` | change to `<ol>` | V |
| 3 | `<il>` typo instead of `<li>` — no bullet | `<li>` | V + D(HH) tag-pair |
| 4 | Glossary `<dl>` uses `<li>` for the definitions | `<dd>` | V |

**Watch for while circulating:** bug 1 → "Where did the bullets go? Open F12. Where is the `<ul>`?" The missing indent in the code is the clue.

## Reveal script (2 min)

`solution/BUGS.md`. Bug 1 is the polite guesser again: the browser still shows the items, but with no `<ul>` the bullets hang off the left edge, the structure is wrong and a screen reader will not announce a list.

## Activity: D1-08 Momo recipe

> **ACTIVITY:** **D1-08 Momo recipe** · 5 min · solo · build · `W2D1/classwork/D1-08-momo-recipe/`
> Brief: required = an ingredients `ul` with one nested sub-list inside an `li`, the steps as an `ol`, one image with alt (`images/momo-plate.svg`). Bonus: a `dl` glossary.
> Done looks like: ul + nested ul, ol, img with alt. Answer: `solution/index.html`.

## Checkpoint

> **CHECKPOINT:** "Show me where your sub-list's `</li>` is." It must come after the inner `</ul>`.

## If behind, cut this

> **CUT THIS:** **D1-08 goes to homework first** (it is a build; the bug-hunt stays). This is the first cut of the day.

Fast finisher: **D1-FF2 Table of contents** — `W2D1/classwork/fast-finishers/D1-FF2-table-of-contents/` (a long page with a nested-list table of contents that jumps to `#id` sections + "back to top" links).

# 10. B6 — Links, paths & images (30 min, 1:57–2:27)

Slides 32–38.

## Hook

"You can give a friend directions inside your house in two words. To send a letter to Pokhara you need the whole address."

## Analogy

Two analogies, on separate slides:

- **Same house vs postal address** (slides 32–34): a relative path is "the kitchen" — a path from where this page is. An absolute URL is the full postal address with `https://`. `../` = **"go downstairs one floor"**.
- **A sticker, not an envelope** (slide 35): `<img>` is a void tag. **alt = the description you read over the phone** to someone who cannot see the picture.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B6-links-images/` (`step-01-external-link`, `step-02-relative-pages` {index.html, about.html}, `step-03-folders-dotdot` {index.html, pages/about.html, images/momo.svg}, `step-04-img-alt-width` {+ images/thamel.svg}, `step-05-figure-anchors-mailto`). Code-along, 3 min across slides 34–35.

1. Slide 32: relative vs absolute. Without `https://`, "www.wikipedia.org" is treated as a file in your folder → 404 (D1-09 bug 3).

```html
<a href="pages/about.html">About us</a>
<a href="https://www.wikipedia.org">Wikipedia</a>
```

2. Slide 33: the folder tree. From `index.html`: `pages/about.html`, `images/momo.svg`. From `pages/about.html`: `../index.html`, `../images/thamel.svg`. Chant: "dot dot slash = go downstairs one floor". Never `C:\Users\Aarav\…` — it exists only on Aarav's laptop. File names are case-sensitive on a real server.
3. Slide 34, type-along. Test each link in Live Server. On every 404, read the address bar aloud.

```html
<h1>Momo House</h1>
<p>Learn about momo on <a href="https://en.wikipedia.org/wiki/Momo_(food)" target="_blank">Wikipedia</a>.</p>
<p><a href="pages/about.html">About us</a> | <a href="#contact">Contact</a></p>
<h2 id="contact">Contact</h2>
<p>Email <a href="mailto:hello@momohouse.com.np">hello@momohouse.com.np</a> or call <a href="tel:+97714400000">01-4400000</a>.</p>
<p><a href="#top">Back to top</a></p>
```

- `target="_blank"` opens a new tab. `mailto:` opens the email app; `tel:` the phone dialler. `href="#contact"` jumps to `id="contact"` (the id has no #; the href has the #). `#top` jumps to the top of the page.

4. Slide 35, images (`step-04-img-alt-width`, `step-05-figure-anchors-mailto`):

```html
<!-- step-04-img-alt-width -->
<img src="images/momo.svg" alt="A steaming plate of momo" width="300">

<!-- step-05-figure-anchors-mailto -->
<figure>
  <img src="images/momo.svg" alt="A steaming plate of momo" width="300">
  <figcaption>Our famous steam momo.</figcaption>
</figure>
```

- `src` is a path, like a link. `alt` is the phone description. Give `width` only, so the shape stays. `figure` + `figcaption` keep a picture and its caption together.
- Momo.svg ≠ momo.svg on Linux. Use lowercase file names always (H bugs in homework).

## Activity: D1-09 Broken Paths

> **ACTIVITY:** **D1-09 Broken Paths** · 9 min · solo · `W2D1/classwork/D1-09-broken-paths/` (index.html, pages/about.html, pages/menu.html, images/)
> Brief: click every link, read the address bar on a 404, check every picture, on all three pages; look at the folder tree in Explorer. **There are 6 bugs. Find at least 4.**
> Done looks like: every link opens the right page, every image shows on every page, no `C:\` paths left.

| # | File | Bug | Fix | Tag |
|---|---|---|---|---|
| 1 | index.html | `<img src="image/logo-momo-house.svg">`, but the folder is `images` | `images/logo-momo-house.svg` | V |
| 2 | index.html | `<a href="about.html">` | `pages/about.html` | V (404) |
| 3 | index.html | `href="www.wikipedia.org"` (no `https://`) becomes a relative path | `https://www.wikipedia.org` | V (404) |
| 4 | pages/about.html | `<a href="index.html">Home</a>` | `../index.html` | V |
| 5 | pages/about.html | `<img src="images/thamel.svg">` | `../images/thamel.svg` | V |
| 6 | pages/menu.html | `href="C:\Users\Aarav\Desktop\site\index.html"` (works only on Aarav's laptop) | `../index.html` | V |

**Watch for while circulating:** students "fix" bug 4 by copying index.html into pages/ — no; fix the path. A 404 → "read the address bar: where did the browser look?"

## Reveal script (2 min)

`solution/BUGS.md`. Group them: two are "wrong folder", two are "forgot `../`", one is "forgot `https://`", one is "a path on my own laptop". All six are V: "your eyes and the address bar are enough".

## Activity: D1-10 Kathmandu gallery

> **ACTIVITY:** **D1-10 Kathmandu gallery** · 7 min · solo · build · `W2D1/classwork/D1-10-kathmandu-gallery/` (index.html has the skeleton + h1; images/swayambhu.svg, images/patan-durbar.svg)
> Brief: 2 `figure`s with `figcaption` + alt + width, 1 external link with `target="_blank"`, 1 "back to top" link to `#top`.
> Done looks like: two captioned pictures; the external link opens a new tab; "Back to top" jumps up. Answer: `solution/index.html`.

**Watch for while circulating:** `alt="image"` → "what would you say on the phone?"; `id="top"` missing or written `id="#top"`.

## Show & tell (3 min, slide 38, tagged ACTIVITY)

2–3 volunteers put their gallery on the projector. Ask each: "Read one alt text aloud, like on the phone." and "Which line opens a new tab?" Praise one specific line each. Code gets shown, not hidden.

## Checkpoint

> **CHECKPOINT:** Every student has at least one working `../` path or `#top` link they can explain.

## If behind, cut this

> **IF BEHIND:** Show & tell drops to 1 student. Do not cut D1-09 or D1-10 (D1-10 is audited in D1-16).

Fast finisher: **D1-FF3 Mystery page** — `W2D1/classwork/fast-finishers/D1-FF3-mystery-page/` (rebuild a page from the picture `target.svg`: h1 "Didi's Kitchen Corner", the chef-didi image, two lists, a price table, a link).

# 11. B7 — Tables (22 min, 2:27–2:49)

Slides 39–43.

## Hook

"Look at the TSI canteen price board. Rows, columns, a heading row. That is a table."

## Analogy

**Four tags, one team** — the **canteen price board**: `table` = the board, `tr` = a row, `th` = a heading cell, `td` = a data cell. Tables are for **data, not layout**.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B7-tables/` (`step-01-basic-price-board`, `step-02-caption-thead-tbody-tfoot`, `step-03-colspan-rowspan`; each holds `index.html`). Code-along, 2 min.

1. Slide 39, type the price board (one row per line, as in the step-01 file). Emmet: `table>tr*4>td*2`. The head of every table demo has a 2-line `<style>` that draws the borders — "CSS comes on Day 2, ignore it today".

```html
<table>
  <tr><th>Item</th><th>Price</th></tr>
  <tr><td>Veg momo</td><td>Rs. 120</td></tr>
  <tr><td>Chicken momo</td><td>Rs. 150</td></tr>
  <tr><td>Milk tea</td><td>Rs. 25</td></tr>
</table>
```

2. Slide 40, the parts and merged cells (`step-02`, `step-03`):

```html
<table>
  <caption>Today's prices</caption>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Size</th><th scope="col">Price</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="2">Chicken momo</td><td>Half plate</td><td>Rs. 80</td></tr>
    <tr><td>Full plate</td><td>Rs. 150</td></tr>
    <tr><td>Milk tea</td><td>Cup</td><td>Rs. 25</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">All prices include achar.</td></tr>
  </tfoot>
</table>
```

- Count the cells in every row. `colspan="3"` counts as 3. Under a `rowspan="2"` cell, the next row has one cell less (the Full plate row has 2 cells, not 3).
- Chrome detail: a colspan that is too **big** is invisible (the extra column is 0 px wide); one that is too **small** leaves a visible gap at the end of the row (D1-15 bug 4).
- The B7 demo tables and all exercise tables carry a 2-line `<style>` in the head that draws the cell borders (comment: "CSS comes on Day 2"); `border="1"` is obsolete and fails html-validate.
- `scope="col"` tells a screen reader "I am the heading for this column".

3. Slide 41: data, not layout. Layout (side by side) is CSS work (sessions 3 / 3.2).

## Activity: D1-11 Broken Timetable

> **ACTIVITY:** **D1-11 Broken Timetable** · 8 min · solo · `W2D1/classwork/D1-11-broken-timetable/` · "TSI Week 2 timetable" (6 columns: Time + Sun–Thu)
> Brief: count the cells in every row; check the header row and the "Lunch" row; look above the table too. **There are 5 bugs. Find at least 3.**
> Done looks like: header row bold; every row = 6 columns; "Lunch" spans the whole week; no cell sticks out; no stray text above the table.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | Header row uses `<td>` instead of `<th>` (not bold) | `<th scope="col">` for the six header cells | V |
| 2 | The 11:00 row has only 4 day cells (it needs 5), so the cells shift left | add `<td>Lab</td>` for Thursday | V |
| 3 | `colspam="5"` typo on the "Lunch" row, so it fills only 1 column | `colspan="5"` | V |
| 4 | `rowspan="2"` on "Project lab", but the 2:00 row still has its own Thursday cell, so an extra cell sticks out | delete the last `<td>Lab</td>` from the 2:00 row | V |
| 5 | Text "Tea break 3:00" between `</tr>` and `<tr>`, outside any cell; the browser moves it above the table | make it a row: `<tr><td>3:00</td><td colspan="5">Tea break</td></tr>` | V |

**Watch for while circulating:** students count `<td>`s but forget a `colspan` counts double; for bug 4 they add a cell instead of removing one.

## Reveal script (2 min)

`solution/BUGS.md`. For bug 5, open F12 → Elements: the text was moved out of the table. "The polite guesser again: it moved your text and said nothing."

## Activity: D1-12 Exam results table

> **ACTIVITY:** **D1-12 Exam results table** · 6 min · solo · modify · `W2D1/classwork/D1-12-exam-results-table/`
> Brief: the starter is a plain table with data rows. Add `caption`, `thead`/`tbody`, `th scope="col"`, and a "Total" row using `colspan`. Bonus: `tfoot`. (No rowspan here.)
> Done looks like: a title, bold column headings, and a Total row that spans the right columns. Answer: `solution/index.html`.

## Checkpoint

> **CHECKPOINT:** "Count your Total row's cells out loud. Does it match the header row?"

## If behind, cut this

> **CUT THIS:** **D1-12 goes to homework** (second cut of the day; D1-11 stays).

Fast finisher: **D1-FF4 Evil page** — `W2D1/classwork/fast-finishers/D1-FF4-evil-page-bughunt/` (8 bugs the browser hides: img without alt · `<a>` inside `<a>` · `<ul>` inside `<p>` · `id="menu"` twice · `<li>` inside a `<div>` · `<input>` with no label · `<h1>` inside `<p>` · `&nbps;`).

# 12. Break (10 min, 2:49–2:59)

Slide 44. Teaser: "Forms let the visitor talk back." Before the restart, open `W2D1/instructor-demos/B8-forms/step-01-form-label-text-email` in Live Server.

# 13. B8 — Forms (28 min, 2:59–3:27)

Slides 45–49.

## Hook

"Every restaurant table has an order slip. Today you build Momo House's slip — and you see exactly what the kitchen receives."

## Analogy

**The order slip:** boxes to fill (text), ticks (checkbox), "choose one" circles (radio), a list to pick from (select). The **label** = the printed word next to each box. **name** = the column the kitchen files your answer under. The waiter (the server) comes later in the course. **Trick:** submit with `method="get"` and read the URL.

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B8-forms/` (`step-01-form-label-text-email`, `step-02-radio-checkbox`, `step-03-select-textarea`, `step-04-fieldset-submit-read-url`; each holds `index.html`). Code-along, 3 min: type step-01 with me (2 min: the two label + input pairs). Watch steps 02–04 on the projector (open each step folder; step-04 is slide 47). You will type radios, select and textarea yourself in D1-13 and D1-14.

1. Slide 45: the order-slip table (talk).
2. Slide 46: students type `step-01` with you (the two label + input pairs; the demo files wrap each pair in a `<p>`). Then they watch while you open `step-02` and `step-03`: no typing for them; they type radios, select and textarea in D1-13 and D1-14. Click the words "Your name": the cursor jumps into the box — only when `for` and `id` match exactly. Change `type="text"` to `type="date"` live.

```html
<form method="get">
  <label for="name">Your name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email">

  <input type="radio" id="morning" name="batch" value="morning">
  <label for="morning">Morning</label>
</form>
```

- One tag, many types: text, email, tel, password, number, date, radio, checkbox, color.
- Every radio in one group shares one `name`; each has its own `value`. `required` refuses an empty submit. `placeholder` is a grey hint, not a label.
- Step-03 adds `<select>` with `<option>`s and `<textarea></textarea>` — always with a real closing tag:

```html
<input type="checkbox" id="achar" name="extras" value="achar">
<label for="achar">Extra achar</label>

<label for="momo">Which momo?</label>
<select id="momo" name="momo">
  <option value="chicken">Chicken</option>
  <option value="veg">Veg</option>
</select>

<label for="notes">Notes</label><br>
<textarea id="notes" name="notes" rows="3" cols="40"></textarea>
```

3. Slide 47 (`step-04-fieldset-submit-read-url`): wrap the batch radios in a fieldset, submit, and read the address bar aloud.

```html
<fieldset>
  <legend>Your batch</legend>
  <input type="radio" id="morning" name="batch" value="morning">
  <label for="morning">Morning</label>
  <input type="radio" id="evening" name="batch" value="evening">
  <label for="evening">Evening</label>
</fieldset>
<button type="submit">Send order</button>
<button type="reset">Clear</button>
```

After Submit the address bar shows:

```text
index.html?name=Sunita+Gurung&email=sunita%40mail.com&batch=morning&extras=achar&momo=chicken&notes=
```

- Each `name=value` pair is one answer on the slip; `+` is a space; `&` separates answers; `%40` is @.
- A radio with no `value` sends `batch=on`. An input with no `name` is not sent at all.

## Activity: D1-13 Broken Signup

> **ACTIVITY:** **D1-13 Broken Signup** · 10 min · solo · `W2D1/classwork/D1-13-broken-signup-form/` · "TSI course signup", `<form method="get">` with no `action`
> Brief: click every label, try to tick both batches, fill it in, submit and read the URL, check whether anything after the textarea is missing. **There are 6 bugs. Find at least 4.** README: "Fix this one first; it hides bug 6." (the textarea)
> Done looks like: every label works; only one batch can be ticked; the URL shows `batch=morning` (not `on`); Submit really submits.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `<label for="fullname">` but the input is `id="name"` — clicking the label does nothing | make `for` and `id` match | V |
| 2 | Phone `type="number"` (spinner arrows, a leading 0 is lost) | `type="tel"` | V |
| 3 | Batch radios have different names (`batch1`, `batch2`), so both can be ticked | one shared `name="batch"` | V |
| 4 | Radios have no `value`, so the URL shows `batch=on` | `value="morning"` / `value="evening"` | D(URL) |
| 5 | `<textarea />` self-closed, so it swallows the rest of the form as text | `<textarea></textarea>` | V |
| 6 | The Submit `<button>` sits after `</form>`, so it does nothing (visible once bug 5 is fixed) | move it inside the form | V |

Why no `action`: an empty `action=""` fails html-validate and W3C; without `action` the form submits to the same page, which is all we need to read the URL.

**Watch for while circulating:** students try to fix bug 6 before bug 5 and cannot see the button; for bug 4 they must actually submit — "read the URL".

## Reveal script (2 min)

`solution/BUGS.md`. Make the room say the rule for each: "for equals id", "one group, one name", "every radio needs a value", "a textarea always closes", "the button lives inside the form".

## Activity: D1-14 Extend the order slip

> **ACTIVITY:** **D1-14 Extend the order slip** · 7 min · solo · modify · `W2D1/classwork/D1-14-extend-order-slip/`
> Brief: **required (3):** a `tel` field, a radio group (Morning / Evening batch) with one shared name, a `fieldset` + `legend` around them. **Bonus:** `date`, two checkboxes, `type="color"` ("favourite colour for your TSI T-shirt"). Every input is labelled; test by submitting and reading the URL. (No `optgroup`.)
> Done looks like: every input has a label; the URL shows `phone=…&batch=morning`; the fieldset draws a box with a title. Answer: `solution/index.html`.

## Checkpoint

> **CHECKPOINT:** "Read me your URL after Submit." Every answer must be there with a name.

## If behind, cut this

> **IF BEHIND:** D1-14 bonus items become homework. Keep the 3 required items.

Fast finisher: **D1-FF5 Notice Board** — `W2D1/classwork/fast-finishers/D1-FF5-notice-board-bughunt/` (12 surplus bugs from all the in-class hunts).

# 14. B9 — Capstone bug-hunt relay, pairs (22 min, 3:27–3:49)

Slide 50.

## Hook

"Didi's Momo House website broke the night before opening. You are the repair crew."

## Analogy

**The repair crew:** a driver with the tools and a navigator with the plan. They swap after every repair.

## Demo talk-track (rules, 2 min)

1. Pairs. The **driver** types; the **navigator** reads the README and points. **Swap after every bug.**
2. 1 point per bug + 1 bonus point for naming its visibility tag (V, D(HH), D(F12), R…). Where a bug has two tags (e.g. V + D(HH)), accept either.
3. Bugs per page: index 3 · menu 3 · order 2 · about 2. On `order.html`, fix the textarea first.
4. Pairs that finish become **helpers** for another pair (they may point, not type), then move to fast finishers.
5. Scores go on the whiteboard at **3:38** and **3:45**.

## Activity: D1-15 Momo House repair

> **ACTIVITY:** **D1-15 Momo House repair (pairs)** · 17 min · `W2D1/classwork/D1-15-momo-house-repair/` (index.html, menu.html, order.html, about.html, images/)
> Brief: find and fix 10 bugs across 4 pages; driver/navigator swap every bug; early pairs become helpers. **There are 10 bugs. Find at least 8.**
> Done looks like: all 4 pages link to each other, every image shows, the menu table and lists are right, the order form works.

| # | Page | Bug | Fix | Tag |
|---|---|---|---|---|
| 1 | index.html | nav link `menu.htm` | `menu.html` | V |
| 2 | index.html | hero `<img>` without alt | add a real alt | D(HH) |
| 3 | index.html | unclosed `<a>` — the last nav item, directly before the `<h1>`, so the h1 becomes part of the link | add `</a>` | V + D(HH) |
| 4 | menu.html | `colspan="2"` in a 3-column table — a gap is left at the end of the row | `colspan="3"` | V |
| 5 | menu.html | "Today's specials" `<li>`s with no `<ul>` (no bullets) | wrap them in `<ul>` | V + D(F12) |
| 6 | menu.html | heading jump h1 → h4 | use `<h2>` | R |
| 7 | order.html | label `for` / `id` mismatch | make them match | V |
| 8 | order.html | `<textarea />` self-closed (fix first on this page) | `<textarea></textarea>` | V |
| 9 | about.html | `src="../images/chef-didi.svg"`, but `images/` is next to the page | `images/chef-didi.svg` | V |
| 10 | about.html | Instagram link without `https://` | add `https://` | V |

**Relay scoreboard template** (draw on the whiteboard):

| Pair | Driver / navigator | 3:38 bugs | 3:38 tags | 3:45 bugs | 3:45 tags | Total |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| … | | | | | | |

**Watch for while circulating:** the navigator typing (gently swap back); pairs stuck on order.html because the textarea hides the rest; helpers typing for other pairs (pointing only).

## Reveal script (3 min)

Open `solution/BUGS.md`. Go page by page. For each bug, ask the pair with the most points to name the tag first. Finish: "Every bug today was one of a few ideas: a box not closed, a path not right, a name not matching, a rule not kept. Now you can see them."

## Checkpoint

> **CHECKPOINT:** Final scores on the whiteboard. Applause for the top pair and for the best helper pair.

## If behind, cut this

> **CUT THIS:** **Never cut D1-15.** If time is short, take the minutes from the B10 quiz.

Fast finisher: **D1-FF6 Gallery detail page** — `W2D1/classwork/fast-finishers/D1-FF6-gallery-detail-page/` (`places/swayambhu.html` with a `../index.html` back link, a `../images/` image path and a `mailto:` link to the "TSI tour desk").

# 15. B10 — Validate, quiz, homework, exit ticket (11 min, 3:49–4:00)

Slides 51–53.

## Hook

"The spell-checker for HTML, second round."

## Analogy

HTMLHint is the spell-checker in your editor. The W3C validator is the strict teacher who reads the whole essay (Wi-Fi bonus).

## Demo talk-track

Demo folder: `W2D1/instructor-demos/B10-validate/` (`step-01-before/index.html` with 5 errors, `step-02-after/index.html` clean). 1 minute: show `step-01-before` in the Problems panel (and paste it into validator.w3.org if Wi-Fi works), then `step-02-after` with zero problems.

## Activity: D1-16 Validate & self-audit

> **ACTIVITY:** **D1-16 Validate & self-audit** · 4 min · solo · `W2D1/classwork/D1-16-validate-self-audit/` (README checklist only)
> Brief: run HTMLHint (and W3C if Wi-Fi) on your own D1-10 folder; fix every error; tick the audit checklist: skeleton, lang, one h1, every img has alt, every link works.
> Done looks like: Problems panel 0; checklist ticked.

## Quiz (5 min, slide 52)

Kahoot if Wi-Fi (30 s per question). Otherwise read each question; the class shows 1–4 fingers for A–D.

| # | Question | Options | Answer |
|---|---|---|---|
| 1 | What does DNS do? | A stores pages · B turns a name into an IP address · C draws the page · D sends email | **B** |
| 2 | Which line must come first in every HTML file? | A `<html>` · B `<head>` · C `<!DOCTYPE html>` · D `<title>` | **C** |
| 3 | Where does `<title>` show? | A on the page · B on the browser tab · C in the footer · D nowhere | **B** |
| 4 | How many `<h1>` per page? | A one · B two · C any · D none | **A** |
| 5 | How do you print a `<` sign? | A `<<` · B `&lt;` · C `\<` · D `&less;` | **B** |
| 6 | Recipe steps go in… | A `<ul>` · B `<ol>` · C `<dl>` · D `<li>` only | **B** |
| 7 | From `pages/about.html`, the home page is… | A `index.html` · B `/index.html` · C `../index.html` · D `pages/index.html` | **C** |
| 8 | A cell with `colspan="2"` counts as… | A 1 cell · B 2 cells · C half a cell · D a row | **B** |
| 9 | Clicking a label does nothing. Why? | A no name · B `for` and `id` do not match · C no value · D no required | **B** |
| 10 | Two radios can both be ticked. Why? | A different names · B no labels · C no form · D `type="checkbox"` | **A** |

> **STRETCH:** If the 3-minute stretch was taken after B3, cut the quiz to 7 questions (drop 3, 6 and 8).

## Homework (slide 53)

Sheet: `W2D1/homework/W2D1-Homework-Sheet.md` (core about 2.5 h: HW1 and HW3 are the must-do (1 h), HW2 if they can; + optional stretch).

1. **D1-HW1 Kathmandu Treks repair** — 12 bugs, 40 min (must-do), `homework/D1-HW1-kathmandu-treks-repair/` (index.html, treks.html, booking.html). If a page is completely blank, fix the `<title>` first (that bug is V + D(HH)).
2. **D1-HW2 Momo House catering page** — build, about 1.5 h (if they can), `homework/D1-HW2-momo-house-catering-page/` (starter = the D1-15 solution). Add `catering.html` with one table (packages) and one form (date, people count, package radio, notes); add it to the nav on all 5 pages; everything passes HTMLHint.
3. **D1-HW3 Self-check & interview prep** — 20 min (must-do), `homework/D1-HW3-Self-Check-and-Interview-Prep.md`.
4. **D1-HW4 Thamel Guesthouse replay** — stretch, optional, +30 min, 12 bugs, `homework/D1-HW4-thamel-guesthouse-replay/`.

Solutions are in `homework/_solutions/` (instructor pack only; the `--with-solutions` zip is the instructor's call after class).

## Exit ticket (1 min)

On paper or in chat:

1. One bug you fixed today and how you found it (which tag?).
2. One thing that is still confusing.

## Closing (read aloud)

"Today you learned how a page travels to your screen, and you built its skeleton: text, lists, links, images, tables and forms. You also learned that browsers are polite guessers, so you now check your own work with your eyes, HTMLHint and F12. Tomorrow the skeleton gets its outfit. First we give the boxes real names with semantic HTML, then we dress Momo House with CSS — the same site you repaired today."

## Checkpoint

> **CHECKPOINT:** Exit tickets collected. Read 3 "still confusing" answers before tomorrow and open Day 2 with them.

## If behind, cut this

> **IF BEHIND:** Quiz to 7 questions; the self-audit (D1-16) becomes the first homework task. Never skip the exit ticket (1 minute).

# 16. Fast finishers (all in `W2D1/classwork/fast-finishers/`)

| Id | Title | Type | Folder | Offer after |
|---|---|---|---|---|
| D1-FF1 | Entity art | build | `D1-FF1-entity-art/` | D1-06 |
| D1-FF2 | Table of contents | build | `D1-FF2-table-of-contents/` | D1-08 |
| D1-FF3 | Mystery page (rebuild from `target.svg`) | build | `D1-FF3-mystery-page/` | D1-10 |
| D1-FF4 | Evil page (8 bugs the browser hides) | bug-hunt 8 | `D1-FF4-evil-page-bughunt/` | D1-11 |
| D1-FF5 | Notice Board (12 surplus bugs) | bug-hunt 12 | `D1-FF5-notice-board-bughunt/` | D1-13 |
| D1-FF6 | Gallery detail page (`../`, `mailto:`) | build | `D1-FF6-gallery-detail-page/` | D1-15 |

**D1-FF5 Notice Board bug list** (for helping fast finishers; full fixes in its `solution/BUGS.md`): a second `<head>` instead of `</head>` (D(F12) + D(HH)) · a `<p>Contact…</p>` after `</html>` (D(F12)/D(W3C)) · heading jump h2 → h5 (R) · `<h4>` used only for bold (R) · `<br><br><br>` for spacing (V) · `</hr>` instead of `<hr>` (V + D(HH)) · a nested list after `</li>` (D(F12)) · `<ol>` closed with `</ul>` (D(HH)) · bare text inside `<ul>` (R/D(F12)) · `src="images/notice-board .svg"` with a space (V) · `href="#events"` but `id="event"` (V) · `<td>`s directly in `<table>` with no `<tr>` (D(F12)).

# 17. If the room falls behind (summary)

1. **D1-08** Momo recipe → homework (first cut).
2. **D1-12** Exam results table → homework (second cut).
3. Shorten the B10 quiz to 7 questions.
4. Show & tell after D1-10 drops to one student.

The bug-hunts stay. **D1-15 is never cut.** Every cut build is already in the student pack, so it can be done at home with the same README.

# 18. Instructor notes

- **Hands-on first.** The longest T stretch is 8 minutes (B1). If you notice you have talked for 5 minutes, give them something to type.
- **Reveal every hunt.** The reveal is where the learning sticks. Ask "how could you see it?" before saying the tag.
- **Debug live on the projector.** When your own typing breaks, say "polite guesser!", open F12 or the Problems panel, and fix it in front of them. Then open the next step folder if you need to catch up.
- **Circulate with a question, not an answer:** "What does the Problems panel say?", "Read the address bar", "Count the cells".
- **ESL:** short sentences, one instruction at a time, point at the screen. Repeat the key line of each analogy.
- **Pairs (D1-15):** mix confident and quieter students; enforce the swap.
- **Energy:** stand-up stretch after B3 if needed (taken from the quiz). Celebrate scoreboard lines.
- **Solutions:** the student zip has none. Release the `--with-solutions` zip only after class if you choose.
- **Screenshots to capture before class** (placeholders in the deck): slide 10 (VS Code with W2D1 open, Problems panel, Go Live), slide 21 (step-05-htmlhint-demo squiggles + Problems panel), slide 47 (Chrome address bar after submitting step-04).
