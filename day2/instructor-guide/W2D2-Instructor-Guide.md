---
program: AI-Powered Full Stack Developer Program
label: Instructor Detail Guide
title: Week 2 · Day 2 — Semantic HTML, Accessibility, Media → CSS Basics
subtitle: From Skeleton to Outfit
duration: 4 hours · 240 minutes · 67% hands-on
footer: Tech Skills Institute (TSI) · Kathmandu, Nepal · Instructor: Bedanga
---

# 1. Session overview

Yesterday (Day 1) the students built HTML skeletons and mended 42 planted bugs, ending with Didi's Momo House website. Today the skeleton gets two things. First, **names**: semantic HTML5 tags, accessibility and meta, so Google, screen readers and teammates understand the page. Second, **an outfit**: CSS basics — how to add a stylesheet, selectors, colours, units, fonts, the box model and display. The day ends with every student styling the Momo House site with one shared stylesheet, then a short Bootstrap teaser. CSS stays at "basics" level: no flexbox, grid or positioning (sessions 3 / 3.2 do that).

The rhythm is the same as Day 1 in every block: a short hook and analogy, a code-along from the staged demo folders, a bug-hunt ("mend broken stuff"), a 2-minute reveal, then a small build or modify task. Students have their hands on the keyboard for 148 of the 220 non-break minutes (67.3 %).

The One Rule, on the board all day: **"You may only ship code you can explain, line by line."** AI stage: Stage 1, AI as Tutor (AI may explain concepts and errors; students type every line).

## Learning objectives

By the end of the session, students can:

- **Replace** div soup with header, nav, main, section, article, aside and footer, and say when NOT to use each tag.
- **Audit** a page for accessibility with the Tab walk and Lighthouse, and fix lang, title, alt, link text and labels.
- **Write** meaningful vs decorative alt text (`alt=""`) and a useful head: title, meta description, viewport, favicon.
- **Embed** audio, video (with poster and fallback text) and an iframe with a title, using local files.
- **Link** an external stylesheet and explain the three ways to add CSS (inline, internal, external).
- **Target** elements with element, .class, #id, grouping, descendant, .a.b and :hover selectors, and predict who wins (id > class > element).
- **Use** valid colours (named, hex, rgb, rgba), units (px, %, rem, em) and font stacks with a fallback.
- **Calculate** a box's real width (content-box vs border-box), and centre a box with `margin: 0 auto`.
- **Choose** block, inline, inline-block or none, and build a horizontal nav.
- **Style** a 4-page site with one shared stylesheet.
- **Debug** CSS with the DevTools Styles and Computed panels.

## Materials & pre-session checklist

**Instructor**

- The W2D2 folder open in VS Code (File → Open Folder → `W2D2`), Live Server and HTMLHint working.
- The deck `TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx` (49 slides). Speaker notes hold every talk-track and every reveal.
- `W2D2/instructor-demos/` — every demo is staged: `step-NN-*` = the finished state after step NN. If a live demo breaks, open the next step folder and carry on.
- **Speakers on the projector laptop** for the Windows Narrator demo (Block 2). Test Ctrl + Win + Enter before class.
- Chrome with DevTools; check that the Lighthouse tab is there (F12 → Lighthouse).
- The local Bootstrap copy: `W2D2/assets/vendor/bootstrap-5.3.3/bootstrap.min.css` (already copied into the B10 demo and D2-FF6 as `css/bootstrap.min.css`).
- Whiteboard: write the One Rule and the two break times (1:10, 2:25).
- Kahoot quiz loaded (optional, Wi-Fi only). The offline quiz is on slide 48.

**Students**

- The W2D2 student zip, unzipped (the top folder is `W2D2/`).
- VS Code with **Live Server** and **HTMLHint** installed **the day before, at home** (START-HERE.md).
- Day 1 homework open (one volunteer shows a fix in B0).

**Fallback plan**

- No Live Server: double-click the HTML file and press F5 after each save. Install at the first break.
- No Wi-Fi: everything works offline. Images, audio, video and Bootstrap are local. Lighthouse works offline. Wi-Fi only adds Kahoot and the real CSS Zen Garden.
- Narrator fails on the projector: read the screen reader output aloud yourself from slide 14's notes.
- If the room falls behind: cut D2-09, then D2-11 (they move to homework). D2-15 is never cut.

# 2. Session timing at a glance

**T** = instructor talks or demos (students watch). **H** = students' hands on the keyboard. Ratio on the 220 non-break minutes: 148 / 220 = 67.3 %.

| Clock | Min | Block | Activity | T | H |
|---|---|---|---|---|---|
| 0:00–0:07 | 7 | B0 Hook: same skeleton, new outfit | D2-00 Outfit swap | 4 | 3 |
| 0:07–0:33 | 26 | B1 Semantic HTML5 layout | Code-along (3) → D2-01 → D2-02 bug-hunt → reveal | 8 | 18 |
| 0:33–0:52 | 19 | B2 Accessibility + meta/SEO | Code-along (2) → Narrator demo → D2-03 bug-hunt → reveal | 7 | 12 |
| 0:52–1:10 | 18 | B3 Audio, video, iframe | Code-along (2) → D2-04 bug-hunt → reveal → D2-05 | 5 | 13 |
| 1:10–1:20 | 10 | Break | Teaser: "the skeleton gets its outfit" | — | — |
| 1:20–1:44 | 24 | B4 CSS intro: rule, 3 ways | Code-along (4) → D2-06 bug-hunt → reveal → D2-07 | 7 | 17 |
| 1:44–2:06 | 22 | B5 Selectors | Code-along (2) → D2-08 bug-hunt → reveal → D2-09 | 7 | 15 |
| 2:06–2:25 | 19 | B6 Colours, units, fonts | D2-10 bug-hunt → reveal → D2-11 | 6 | 13 |
| 2:25–2:35 | 10 | Break | Teaser: "everything is a box being shipped" | — | — |
| 2:35–3:03 | 28 | B7 Box model + DevTools | Code-along (3) → D2-12 bug-hunt → reveal → D2-13 → show & tell | 10 | 18 |
| 3:03–3:19 | 16 | B8 Display | Code-along (3) → D2-14 bug-hunt → reveal | 5 | 11 |
| 3:19–3:49 | 30 | B9 Mini-site: style Momo House | D2-15 (5 checkpoints) | 2 | 28 |
| 3:49–4:00 | 11 | B10 Bootstrap teaser + wrap-up | Demo, quiz, homework, exit ticket | 11 | 0 |
| **Total** | **240** | | | **72** | **148** |

**Bug visibility legend** (used in every bug table below, the READMEs and BUGS.md):

| Tag | Meaning | Tool |
|---|---|---|
| V | You can see it on the page | your eyes |
| D(HH) | HTMLHint underlines it (Problems panel, Ctrl+Shift+M) | HTMLHint |
| D(F12) | Only the Elements panel shows what the browser built | Chrome DevTools |
| D(LH) | Lighthouse → Accessibility shows it (offline) | Chrome DevTools |
| D(W3C) | Only the W3C validator reports it | validator.w3.org (Wi-Fi) |
| R | Rule check: no tool fires; read the code against the rule | your brain + the notes |

# 3. Block 0 — Hook: same skeleton, new outfit (7 min)

Slides 1–4. Clock 0:00–0:07. T 4 · H 3.

## Hook

Say: "Yesterday you mended 42 bugs. Today the skeleton gets names, then an outfit." One volunteer shows one Day 1 homework fix (1 min).

## Analogy

**Skeleton & outfit.** HTML is the skeleton: what exists on the page, in what order. CSS is the outfit: colours, fonts, spacing. You can change the outfit without touching the skeleton. This is the idea of the CSS Zen Garden (one HTML file, hundreds of stylesheets). We show it locally, so no Wi-Fi is needed.

## Demo talk-track

**Step 1 —** Open `W2D2/instructor-demos/B0-outfit/step-01-no-css/index.html` with Live Server. Say: "Plain HTML. No outfit."

**Step 2 —** Open `W2D2/instructor-demos/B0-outfit/step-02-three-outfits/index.html`. Show the one line in the head:

```html
<link rel="stylesheet" href="css/outfit-traditional.css">
```

**Step 3 —** Change the href to `css/outfit-modern.css`, save, then `css/outfit-night.css`, save. Say: "Not one letter of HTML changed. Only the outfit."

## Activity: D2-00 Outfit swap

> **ACTIVITY:** D2-00 Outfit swap · 3 min · solo · `W2D2/classwork/D2-00-outfit-swap/` · Change the `<link href>` between `css/outfit-traditional.css`, `css/outfit-modern.css` and `css/outfit-night.css`. **Done looks like:** the student has seen 3 looks and can say "the HTML did not change, only one href". Answer: `solution/README-answer.md`.

**Watch for while circulating**

- A typo in the file name (`outfit_modern.css`) → the page goes plain. "No outfit = a typo in href. Read it letter by letter."

## Checkpoint

> **CHECKPOINT:** Ask: "What changed? What stayed the same?" (The outfit changed; every tag and word stayed.)

## If behind, cut this

> **IF BEHIND:** Skip the homework spot-check. Never skip D2-00: it is 3 minutes and it sets up the whole day.

# 4. Block 1 — Semantic HTML5 layout (26 min)

Slides 5–10. Clock 0:07–0:33. T 8 · H 18.

## Hook

Show slide 5. Ask: "If a house plan says room 1, room 2, room 3 — which one is the kitchen?" Nobody knows. That is div soup.

## Analogy

**Boxes with names / rooms in a house.** A house plan says "kitchen", "bedroom", not "room 1, room 2". A `<div>` is an unlabeled box. Semantic tags are boxes with names: `<div class="header">` becomes `<header>`. They look exactly the same on the page. The difference is the meaning. Google, screen readers, AI tools and teammates read the names (slide 7).

## Demo talk-track

**Step 1 —** Open `W2D2/instructor-demos/B1-semantic/step-01-div-soup/index.html`. Show the div soup:

```html
<div class="header">
  <div class="nav">…</div>
</div>
<div class="main">…</div>
<div class="footer">…</div>
```

**Step 2 —** Code-along (3 min): students type with you. Rename each div with linked editing (the closing tag follows; `"editor.linkedEditing": true` is in `W2D2/.vscode/settings.json`). The finished state is `W2D2/instructor-demos/B1-semantic/step-02-semantic/index.html`:

```html
<header>
  <nav>…</nav>
</header>
<main>…</main>
<footer>…</footer>
```

**Step 3 —** Walk the page map (slide 6): header with nav inside; one main; inside main, sections (each with a heading) and articles (a piece you could post alone); aside for side information; footer for contact and ©.

**Step 4 —** F12 → Elements: the names are now visible. The page looks the same.

**Step 5 —** Slide 9 — when NOT to use each tag: a second main, a nav with no links, a section with no heading, the main post in an aside, a `<div class="btn">` instead of a `<button>`.

## Activity: D2-01 Div soup → semantic

> **ACTIVITY:** D2-01 Div soup → semantic · 7 min · solo · modify · `W2D2/classwork/D2-01-div-soup-to-semantic/` · Replace 7 `div class="…"` boxes with header / nav / main / section / article / aside / footer. **Done looks like:** the page looks the same and F12 → Elements shows the semantic names. Answer: `solution/index.html`.

**Watch for while circulating**

- Linked editing not working → the student opened one file, not the W2D2 folder.
- `<div class="header">` changed to `<header class="header">` is fine; `<header>` alone is cleaner.
- Two `<main>`s because the student turned every big box into main.

## Activity: D2-02 Semantic misuse

> **ACTIVITY:** D2-02 Semantic misuse · 8 min · solo · bug-hunt · `W2D2/classwork/D2-02-semantic-misuse-bughunt/` · "TSI Blog". **There are 5 bugs. Find at least 3.** **Done looks like:** one main, the nav holds links, every section has a heading, the post is in main and related posts in aside, Subscribe is a real button.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | Two `<main>` elements | Keep one `<main>`; the other becomes a section or div | R / D(W3C) |
| 2 | `<nav>` wraps a paragraph of text, not links | Use `<p>` (or put real links in the nav) | R |
| 3 | `<section>` with no heading | Add an `<h2>` (or make it a `<div>`) | R |
| 4 | `<aside>` holds the main blog post, while the "related posts" box sits in `<main>` | Swap them | R |
| 5 | `<div class="btn">Subscribe</div>` instead of `<button>` (no JavaScript, no onclick) | `<button>Subscribe</button>` | V (the Tab key skips it) |

**Watch for while circulating**

- Four of five bugs are R: no squiggle. Push students to use the slide 9 table as a checklist.
- Bug 5: show the Tab walk — press Tab from the address bar; the div is skipped.

## Reveal script (2 min)

Open `W2D2/classwork/D2-02-semantic-misuse-bughunt/solution/BUGS.md` on the projector. For each row say what it was and how you could see it: "Bugs 1 to 4 are rule checks: no tool fires, you read the code against the rule. Bug 5 you can feel: press Tab, the Subscribe box is skipped. A real button gets the focus." Ask for hands: "Who found 3? 4? All 5?" Students write their scoreboard line: `I found __ / 5. The reveal taught me: ______`.

## Checkpoint

> **CHECKPOINT:** Every student can name the one rule for main (only one) and for section (needs a heading).

## If behind, cut this

> **IF BEHIND:** Shorten slide 7 (who reads the names) to one sentence. Keep both exercises; they are the core of the block.

# 5. Block 2 — Accessibility + meta/SEO (19 min)

Slides 11–15. Clock 0:33–0:52. T 7 · H 12.

## Hook

Ask: "Close your eyes. A friend reads this web page to you. What do you hear when a picture has no description?" Answer: the file name, or just "image".

## Analogy

**The parcel label read aloud.** Yesterday the `<head>` was the label on the parcel. Today, imagine someone who cannot see. A friend (the screen reader) reads the label and the contents aloud. No lang → the wrong voice. No alt → "image… image…". "Click here" three times → "click here, link; click here, link" — click where? Accessibility (a11y) means the page works for everyone: blind users, keyboard-only users, people on slow phones.

## Demo talk-track

**Step 1 —** Slide 12 — alt text. Meaningful picture: describe it like on the phone (`alt="The TSI building in Dillibazar"`). Decorative picture: `alt=""` (empty but present: "skip me"). No alt at all: the screen reader reads the file name.

**Step 2 —** Code-along (2 min). Open `W2D2/instructor-demos/B2-a11y-meta/step-01-before/index.html` and type the head together; the finished state is `W2D2/instructor-demos/B2-a11y-meta/step-02-after/index.html` (with `favicon.svg`):

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Admissions · Tech Skills Institute</title>
  <meta name="description" content="Join the AI-Powered Full Stack course in Kathmandu.">
  <link rel="icon" href="favicon.svg">
</head>
```

- `lang` = the voice for the screen reader. `viewport` = the right width on phones.
- `title` = the browser tab and the blue link in Google. Never "Document" (the Emmet default).
- `meta description` = the grey text under the link in Google. `link rel="icon"` = the favicon on the tab.

**Step 3 —** **Instructor-only Narrator demo** (projector + speakers). Press Ctrl + Win + Enter. Open `step-01-before`, press Tab and let the room listen ("image", "click here, link", "edit text"). Then `step-02-after` ("TSI building, image", a real link text, "Phone, edit text"). Ctrl + Win + Enter to stop.

**Step 4 —** Show the two student tools: the **Tab walk** (press Tab through the page; anything skipped is a bug) and **Lighthouse** (F12 → Lighthouse → tick only Accessibility → Analyze page load; it works offline).

## Activity: D2-03 A11y audit: TSI Admissions

> **ACTIVITY:** D2-03 A11y audit: TSI Admissions · 10 min · solo · bug-hunt · `W2D2/classwork/D2-03-a11y-audit/` · Use the Tab walk + Lighthouse + HTMLHint. **There are 6 bugs (each counted once). Find at least 4.** **Done looks like:** lang="en", a real title, every meaningful img has alt, the pattern has `alt=""`, links say where they go, the phone input has a label; the Lighthouse score goes up.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `<html>` has no `lang` | `<html lang="en">` | D(LH) / D(HH) |
| 2 | `<title>Document</title>` (the Emmet default) is not descriptive | e.g. `<title>TSI Admissions · Tech Skills Institute</title>` | R |
| 3 | `<img src="images/tsi-building.svg">` has no alt | `alt="The TSI building in Dillibazar"` | D(LH) / D(HH) |
| 4 | The decorative `decorative-pattern.svg` has a long alt ("a picture of a pattern with lines…") | `alt=""` | R |
| 5 | Three links say "click here" (one bug, three places) | Link text that says where it goes ("See the course fees") | R (Lighthouse 13 skips same-page links) |
| 6 | The phone input has a placeholder only, no `<label>` | `<label for="phone">Phone</label>` + `id="phone"` | V (clicking the words does nothing; the hint disappears) |

**Watch for while circulating**

- Lighthouse run with all categories ticked (slow). Only Accessibility.
- Students who delete the decorative alt completely (no alt). It must be `alt=""`.
- A placeholder is not a label: it disappears as soon as you type.

## Reveal script (2 min)

Open `solution/BUGS.md`. Run Lighthouse on the starter (score low), then on the solution (score high) — the class sees the number jump. Walk the 6 rows: "Bugs 1 and 3 Lighthouse shows you. Bugs 2, 4 and 5 are rule checks: Lighthouse is happy with 'Document', a long alt and 'click here' links to the same page, but a human is not. Bug 6 you see by clicking the word Phone: nothing happens. Lighthouse accepts the placeholder — don't trust one tool." Scoreboard line: `I found __ / 6.`

## Checkpoint

> **CHECKPOINT:** Ask three students: "What alt does a decorative picture get?" (`alt=""`) "Why is 'click here' bad?" (it does not say where the link goes).

## If behind, cut this

> **IF BEHIND:** Shorten the Narrator demo to the "before" page only (1 minute). Keep D2-03.

# 6. Block 3 — Audio, video, iframe (18 min)

Slides 16–19. Clock 0:52–1:10. T 5 · H 13.

## Hook

Play the canteen bell from the demo folder. Say: "Two seconds of sound. One tag."

## Analogy

**TV, radio, and a window into another room.** `<audio>` is the radio. `<video>` is the TV. `<iframe>` is a window: through it you see another page, inside your page.

## Demo talk-track

Code-along (2 min), type with the class:

**Step 1 —** `W2D2/instructor-demos/B3-media/step-01-audio/index.html` — the audio player. Without `controls` there is nothing on the page.

**Step 2 —** `W2D2/instructor-demos/B3-media/step-02-video/index.html` — the video with a poster, a `<source>` and fallback text.

**Step 3 —** `W2D2/instructor-demos/B3-media/step-03-iframe/index.html` — an iframe of the local page `kathmandu-map.html`, with a title for screen readers.

```html
<audio src="media/canteen-bell.wav" controls></audio>

<video controls width="640" poster="images/poster-momo-steam.svg">
  <source src="media/momo-steam.mp4" type="video/mp4">
  Your browser cannot play this video.
</video>

<iframe src="kathmandu-map.html" title="Map of Kathmandu"
        width="600" height="340"></iframe>
```

- Paths work exactly like `img src`: `media/` and `images/` are folders next to the page.
- Slide 17 — three rules: autoplay needs muted (`<video autoplay muted loop>`); poster = the picture before play (a wrong path = an empty box); fallback text shows only when video cannot play at all. `<source>` goes INSIDE `<video>`, and its type matches the file (`video/mp4`).

## Activity: D2-04 Broken media

> **ACTIVITY:** D2-04 Broken media · 8 min · solo · bug-hunt · `W2D2/classwork/D2-04-broken-media/` · `index.html` + `kathmandu-map.html`. **There are 5 bugs. Find at least 3.** **Done looks like:** two audio players that play the bell, a video with controls and a poster, and the map showing inside the window.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `<audio src="media/canteen-bell.wav">` has no `controls`, so nothing shows | Add `controls` | V |
| 2 | Second audio uses `media/canteen_bell.wav` (underscore) | `canteen-bell.wav` | V (the player shows 0:00 and won't play) |
| 3 | `<video>` has no `controls` | Add `controls` | V |
| 4 | `poster="image/poster-momo-steam.svg"`, wrong folder | `images/poster-momo-steam.svg` | V (an empty box before play; the video has `preload="none"`) |
| 5 | `<iframe src="kathmandu-map.htm">`, wrong extension | `kathmandu-map.html` | V (404 inside the window) |

**Watch for while circulating**

- Student laptops on mute: "If the player shows 0:02, it works."
- Students who rename the file instead of fixing the path. Fix the HTML, not the file.

## Reveal script (2 min)

Open `solution/BUGS.md`. All five are V bugs — show each one on the starter page first ("no player", "0:00", "no play button", "empty box", "404 in the window"), then the fix. Say: "Media bugs are path bugs and attribute bugs. Read the folder names letter by letter." Scoreboard line: `I found __ / 5.`

## Activity: D2-05 Media corner

> **ACTIVITY:** D2-05 Media corner · 3 min · solo · build · `W2D2/classwork/D2-05-media-corner/` · Audio and video are done. Add an iframe of `kathmandu-map.html` with a `title` and width/height. Bonus: video fallback text. **Done looks like:** the map shows in a window on the page and the iframe has a title. Answer: `solution/index.html`.

## Checkpoint

> **CHECKPOINT:** Every student's D2-05 page shows the map in an iframe. Ask: "Why does the iframe need a title?" (the screen reader reads it).

## If behind, cut this

> **IF BEHIND:** D2-05 can move to homework (3 minutes saved). Keep D2-04.

> **STRETCH:** If the room sags here (about 70 minutes in), call a 3-minute stand-up stretch now and take the 3 minutes from the B10 quiz (cut it to 7 questions).

# 7. Break (10 min)

Clock 1:10–1:20. Slide 20. Teaser on screen: "After the break, the skeleton gets its outfit." Late Live Server / HTMLHint installs happen now. Before the restart, open `W2D2/instructor-demos/B4-css-intro/step-01-inline/index.html`.

# 8. Block 4 — CSS intro: rule anatomy, 3 ways to add CSS (24 min)

Slides 21–26. Clock 1:20–1:44. T 7 · H 17.

## Hook

Slide 21 (dark): "CSS is the outfit." Say: "This morning we gave the rooms names. Now we dress the skeleton."

## Analogy

**The outfit.** Inline CSS = a sticky note on one shirt. Internal CSS = an outfit list for one person (one page). External CSS = the **school uniform**: one file, and every page that links it wears it. Real sites use the uniform.

## Demo talk-track

**Step 1 —** Slide 22 — the rule anatomy. Selector = WHO gets dressed. Property = WHAT you change. Value = HOW. Colon between, semicolon after. Comments are `/* … */`, never `//`.

```css
h1 { color: maroon; }
```

**Step 2 —** Code-along (4 min) through the three steps:
- `W2D2/instructor-demos/B4-css-intro/step-01-inline/index.html` — the sticky note.
- `W2D2/instructor-demos/B4-css-intro/step-02-internal/index.html` — the outfit list in `<style>`.
- `W2D2/instructor-demos/B4-css-intro/step-03-external/index.html` + `css/style.css` — the school uniform.

```html
<!-- 1. inline: a sticky note on one shirt -->
<p style="color: maroon;">Hello</p>

<!-- 2. internal: an outfit list for one page -->
<style>  p { color: navy; }  </style>

<!-- 3. external: the school uniform -->
<link rel="stylesheet" href="css/style.css">
```

In step-03, type `css/style.css` together:

```css
body { background: #fdf6ec; }
h1 { color: maroon; }
```

**Step 3 —** Slide 24 — the cascade and DevTools. Two rules with the same strength: the last one wins. Right-click → Inspect → the Styles panel: a crossed-out rule lost the cascade; a yellow triangle = an invalid value; a rule that is not there = the file did not load.

```css
h1 { color: navy; }

h1 { color: maroon; }  /* wins */
```

## Activity: D2-06 Stylesheet not loading

> **ACTIVITY:** D2-06 Stylesheet not loading · 9 min · solo · bug-hunt · `W2D2/classwork/D2-06-stylesheet-not-loading/` · `index.html` + `css/style.css`. **There are 6 bugs. Find at least 4.** **Fix bugs 1 and 2 first: until the stylesheet loads, nothing else is visible.** **Done looks like:** the stylesheet loads, every rule shows on the page, no yellow triangles.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `rel="stylsheet"` typo, so no CSS at all | `rel="stylesheet"` | V |
| 2 | `href="css/styles.css"`, but the file is `style.css` | `href="css/style.css"` | V |
| 3 | Missing `}` after the `h1` rule, so the next rule (`.highlight`) is lost | Add `}` | V |
| 4 | Missing `;` between two declarations: Chrome reads `color: #2a3f63 line-height: 1.8` as one broken value and drops both | Add `;` | V |
| 5 | `colour: maroon;` (British spelling) | `color: maroon;` | V |
| 6 | `// footer styles` comment (JS style) breaks the next rule | `/* footer styles */` | V |

**Watch for while circulating**

- Students who fix bug 1, see SOME style, and stop. "Every rule in the file must show."
- Students who rename `style.css` to `styles.css` instead of fixing the href. Both work, but the README asks for the HTML fix.

## Reveal script (2 min)

Open `solution/BUGS.md`. Say: "Bugs 1 and 2 stop the whole outfit. Bugs 3 to 6 each lose one rule quietly — the browser drops what it does not understand and says nothing. That is why you inspect." Show bug 3 in the Styles panel: the next rule is missing. Scoreboard line: `I found __ / 6.`

## Activity: D2-07 Restyle the bio

> **ACTIVITY:** D2-07 Restyle the bio · 4 min · solo · modify · `W2D2/classwork/D2-07-restyle-the-bio/` · Change 4 things in `css/style.css` on Sunita's bio: body background, h1 colour, paragraph font-size, link colour. **Done looks like:** four visible changes, `index.html` untouched. Answer: `solution/css/style.css`.

## Checkpoint

> **CHECKPOINT:** Ask: "Which way do real sites use, and why?" (external: change one file, every page changes).

## If behind, cut this

> **IF BEHIND:** Shorten D2-07 to two changes (background + h1 colour). Keep D2-06.

> **FAST FINISHER:** D2-FF4 Haunted stylesheet — `W2D2/classwork/fast-finishers/D2-FF4-haunted-stylesheet/` (10 mixed CSS bugs).

# 9. Block 5 — Selectors (22 min)

Slides 27–31. Clock 1:44–2:06. T 7 · H 15.

## Hook

Do it physically for 30 seconds: "Everyone, stand up! … Red team (this row), stand up! … Aarav, stand up!"

## Analogy

**Calling students in class.** "Everyone!" = the element selector (`p`). "Red team!" = a class (`.red-team`): many can share it. "Aarav, by name!" = an id (`#aarav`): only one. "Red team in row 2!" = descendant (`.row-2 .red-team`): a space means "inside". In the HTML there is no dot and no #: `class="red-team"`, `id="aarav"`.

## Demo talk-track

Code-along (2 min) through `W2D2/instructor-demos/B5-selectors/step-01-element`, `step-02-class-id`, `step-03-group-descendant`, `step-04-hover` (each has `index.html` + `css/style.css`). Type one rule per step:

```css
/* step-01-element */
p { color: #555; }

/* step-02-class-id */
.price { font-weight: bold; }
#todays-special { font-size: 1.5rem; }

/* step-03-group-descendant */
h1, h2 { color: maroon; }
nav a { text-decoration: none; }

/* step-04-hover */
a:hover { color: maroon; }
```

- `.card.spicy` with NO space = one element with both classes. `.card .spicy` WITH a space = a `.spicy` inside a `.card`. That space is the most common selector bug.
- Slide 29 — who wins: id beats class beats element, whatever the order. Only at the same strength does the last rule win.

```css
p        { color: grey; }
.note    { color: navy; }
#special { color: maroon; }
```

`<p id="special" class="note">` is maroon.

## Activity: D2-08 Selector mix-ups

> **ACTIVITY:** D2-08 Selector mix-ups · 8 min · solo · bug-hunt · `W2D2/classwork/D2-08-selector-mixups/` · The Momo House menu page. **There are 5 bugs. Find at least 3.** **Done looks like:** every rule in style.css shows on the page; the cards, menu, prices and both headings are styled; links change on hover.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | CSS `.card`, HTML `class="Card"` (class names are case-sensitive) | `class="card"` | V |
| 2 | CSS `#menu`, HTML `id="main-menu"` | Make them match | V |
| 3 | `price { … }` is missing the dot | `.price` | V |
| 4 | `h1, h2, { … }` has a trailing comma, so the whole rule is dropped | `h1, h2 { … }` | V |
| 5 | `a:hoverr` typo | `a:hover` | V (on hover) |

**Watch for while circulating**

- Students who edit the HTML for every bug. Either side may change, but they must match.
- Bug 4: nobody believes one comma kills the whole rule. Show it.

## Reveal script (2 min)

Open `solution/BUGS.md`. Say: "An invalid selector drops the WHOLE rule. One stray comma, one missing dot, one capital letter — and nothing applies." Scoreboard line: `I found __ / 5.`

## Activity: D2-09 Selector target practice

> **ACTIVITY:** D2-09 Selector target practice · 5 min · solo · build · `W2D2/classwork/D2-09-selector-target-practice/` · 5 targets, one CSS rule each, no HTML edits: (1) every `p` → grey, (2) only `.veg` dishes → light-green background, (3) `#todays-special` → bold + bigger, (4) only links inside `nav` → no underline, (5) `.dish.spicy` → red border. **Done looks like:** five rules, each hits only its target. Answer: `solution/css/style.css`.

```css
p { color: grey; }
.veg { background: #dff3dc; }
#todays-special { font-weight: bold; font-size: 1.5rem; }
nav a { text-decoration: none; }
.dish.spicy { border: 2px solid red; }
```

## Checkpoint

> **CHECKPOINT:** Ask: "`.card .spicy` or `.card.spicy` — which one picks one element with both classes?" (`.card.spicy`).

## If behind, cut this

> **CUT THIS:** D2-09 is the **first cut** of the day. It moves to homework; the bug-hunt D2-08 stays.

> **FAST FINISHER:** D2-FF3 Specificity duel — `W2D2/classwork/fast-finishers/D2-FF3-specificity-duel/` (8 puzzles: predict the colour, then check in DevTools; `solution/ANSWERS.md`).

# 10. Block 6 — Colours, units, fonts, text (19 min)

Slides 32–36. Clock 2:06–2:25. T 6 · H 13.

## Hook

Ask: "If I tell you 'make the box 300', is that enough?" (300 what? A unit is missing.)

## Analogy

Two analogies, on two slides. **The paint shop** (slide 32): you can ask for a colour by name (maroon), by code (hex `#990011`), or by mixing numbers (`rgb(20, 33, 61)`, and `rgba(…, 0.5)` for see-through). **The measuring tape** (slide 33): every size needs a unit — px (fixed), % (part of the parent), rem (× the root font, 16px), em (× this element's font size; for font-size itself, the parent's).

## Demo talk-track

**Step 1 —** `W2D2/instructor-demos/B6-colors-units/step-01-colors` — named, hex, rgb, rgba. Hex = # + exactly 6 (or 3) of 0–9 and a–f. `#gg0000` and `#fffff` are invalid. `rgb(255, 200)` is missing a value.

**Step 2 —** `W2D2/instructor-demos/B6-colors-units/step-02-units` — px, %, rem, em. No space between number and unit (`1.5rem`, not `1.5 rem`). The exception: `line-height: 1.6` has no unit.

**Step 3 —** `W2D2/instructor-demos/B6-colors-units/step-03-fonts-text` — fonts and text (slide 34):

```css
body {
  font-family: "Momo Sans", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
h1 {
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}
a { text-decoration: none; }
```

- A font stack: try the first font; not installed? the next; always end with a family (sans-serif or serif). "Momo Sans" does not exist anywhere — without a fallback, the browser uses Times.

## Activity: D2-10 Units & colours

> **ACTIVITY:** D2-10 Units & colours · 8 min · solo · bug-hunt · `W2D2/classwork/D2-10-units-and-colours/` · The canteen price page. **There are 5 bugs. Find at least 3.** **Done looks like:** the box has its width, the heading is red, the price is big, the font is Arial (not Times), lines do not overlap.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `width: 300;` no unit | `300px` | V |
| 2 | `color: #gg0000;` invalid hex | A real hex, e.g. `#cc0000` | V |
| 3 | `font-size: 1.5 rem;` (space) | `1.5rem` | V |
| 4 | `font-family: "Momo Sans";` (a font that doesn't exist) with no fallback, so it falls back to Times | `"Momo Sans", Arial, sans-serif` | V |
| 5 | `line-height: 1.5px;` makes lines overlap | `1.5` | V |

**Watch for while circulating**

- Point students to the yellow triangles in the Styles panel (bugs 1, 2, 3).
- Bug 4 looks "fine" to some students (Times is a font). Ask: "Is that the font the README asked for?"

## Reveal script (2 min)

Open `solution/BUGS.md`. Say: "The browser drops an invalid value and says nothing. The Styles panel shows a yellow triangle — that is your only warning." Scoreboard line: `I found __ / 5.`

## Activity: D2-11 Theme the canteen menu

> **ACTIVITY:** D2-11 Theme the canteen menu · 5 min · solo · modify · `W2D2/classwork/D2-11-theme-the-canteen-menu/` · Apply the 3-colour hex palette from the README, a font stack with a fallback, rem sizes and `line-height: 1.6`. **Done looks like:** the menu uses the 3 colours, a font stack, rem sizes and line-height 1.6; no yellow triangles. Answer: `solution/css/style.css`.

## Checkpoint

> **CHECKPOINT:** Ask: "Which one value in CSS is best with NO unit?" (`line-height`).

## If behind, cut this

> **CUT THIS:** D2-11 is the **second cut** of the day (after D2-09). It moves to homework; D2-10 stays.

# 11. Break (10 min)

Clock 2:25–2:35. Slide 37. Teaser: "Everything on a web page is a box being shipped." Before the restart, open `W2D2/instructor-demos/B7-box-model/step-01-content-width/index.html` with F12 on the Computed tab.

# 12. Block 7 — Box model + DevTools (28 min)

Slides 38–43. Clock 2:35–3:03. T 10 · H 18.

## Hook

Hold up a phone box (or any box). "Item, bubble wrap, cardboard, and the gap to the next box on the shelf."

## Analogy

**Boxes being shipped.** Content = the item. Padding = the bubble wrap (inside the box, it takes the background colour). Border = the cardboard. Margin = the gap between parcels (always transparent). Inspect → Computed shows all four.

## Demo talk-track

Code-along (3 min) on the card with Sunita's avatar (`images/avatar-sunita.svg`):

**Step 1 —** `W2D2/instructor-demos/B7-box-model/step-01-content-width` — `width: 300px`.

**Step 2 —** `W2D2/instructor-demos/B7-box-model/step-02-padding-border` — padding with 1, 2 and 4 values; border shorthand = width style colour (the style is required).

**Step 3 —** `W2D2/instructor-demos/B7-box-model/step-03-margin-center` — `margin: 0 auto` centres the card; it needs a width.

**Step 4 —** `W2D2/instructor-demos/B7-box-model/step-04-border-box-radius` — `box-sizing: border-box` and `border-radius`.

```css
.card {
  width: 300px;
  padding: 20px;               /* all 4 sides */
  padding: 10px 20px;          /* top+bottom  left+right */
  padding: 10px 20px 5px 0;    /* top right bottom left */
  border: 2px solid #990011;   /* width style colour */
  margin: 0 auto;              /* centre: needs a width */
  border-radius: 12px;
}
```

- 4 values go clockwise from the top: TRouBLe = Top Right Bottom Left. Negative padding is invalid.
- Slide 40 — the width trap. content-box (default): `width: 300px; padding: 20px; border: 5px solid;` → real width = 300 + 40 + 10 = 350px. border-box: real width = 300px.

```css
* { box-sizing: border-box; }   /* many developers start with this */
```

- Round avatar: `border-radius: 50%` gives a circle only when width = height.

## Activity: D2-12 Broken cards

> **ACTIVITY:** D2-12 Broken cards · 8 min · solo · bug-hunt · `W2D2/classwork/D2-12-broken-cards/` · 3 student cards (Aarav, Sunita, Rajan). **There are 5 bugs. Find at least 3.** **Done looks like:** 3 cards in one row, the wrapper centred, every card with padding and a visible border, round avatars.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | Three `.card { display: inline-block; width: 300px; padding: 20px; border: 5px solid …; }` inside `.row { width: 960px; }` add up to 350px each, so the third card wraps (the starter sets inline-block; students don't touch display until B8) | `box-sizing: border-box` | V |
| 2 | `.wrapper { margin: 0 auto; background: #fdf6ec; }` with no width/max-width, so it never centres | Add a `max-width` (e.g. 1000px) | V |
| 3 | `padding: -10px;` (negative padding is invalid) | A positive value | V |
| 4 | `border: 2px orange;` with no style, so there is no border | `border: 2px solid orange;` | V |
| 5 | Avatar `border-radius: 50%` on a 120×80 image makes an oval | Equal width and height (e.g. 120×120) | V |

**Watch for while circulating**

- Students who make the row wider instead of fixing the box sizing. Ask: "What does Computed say the card's width is?"
- Bug 2 needs a width; `margin: 0 auto` alone does nothing on a full-width box.

## Reveal script (2 min)

Open `solution/BUGS.md`. Inspect a starter card → Computed: 350px. Add `box-sizing: border-box`: 300px, the third card jumps up. Say: "Every box-model bug is arithmetic. Inspect, read the numbers." Scoreboard line: `I found __ / 5.`

## Activity: D2-13 Profile card + show & tell

> **ACTIVITY:** D2-13 Profile card · 7 min · solo · build · `W2D2/classwork/D2-13-profile-card/` · A centred card: width, padding, border, border-radius, round avatar (`images/avatar-sunita.svg`), `box-sizing: border-box`, in the empty `css/style.css`. **Done looks like:** a centred card with padding, a border and round corners; the avatar is a circle; Computed shows the width you wrote. Answer: `solution/css/style.css`.

**Show & tell (3 min, slide 43):** 2–3 students' cards go on the projector. Ask each: "Inspect → Computed: what is the real width?" and "Which rule makes the avatar round?" Code gets shown, not hidden.

## Checkpoint

> **CHECKPOINT:** Ask: "width 300, padding 20, border 5, no box-sizing — real width?" (350px).

## If behind, cut this

> **IF BEHIND:** Shorten show & tell to one student (1 minute). Keep D2-12 and D2-13.

> **FAST FINISHER:** D2-FF1 TSI ID card — `W2D2/classwork/fast-finishers/D2-FF1-tsi-id-card/` (recreate the ID card in `target.svg`: card 360×220 px, padding 16px, 2px solid navy border, radius 12px, 80px round avatar with a cherry ring).

# 13. Block 8 — Display (16 min)

Slides 44–45. Clock 3:03–3:19. T 5 · H 11.

## Hook

Ask: "Why does yesterday's nav show as a column of bullets, not a row?" Today you fix it.

## Analogy

**The queue vs the bench.** block = the queue: each person on their own line. inline = side by side on a bench: you can't push them up or down (vertical margin is ignored). inline-block = side by side, but each keeps its own size. none = left the room (no gap). `visibility: hidden` = still sitting there, invisible (the gap stays).

## Demo talk-track

Code-along (3 min):

**Step 1 —** `W2D2/instructor-demos/B8-display/step-01-block-inline` — show a `<p>` (block) and an `<a>` (inline). Add `margin-top: 20px` to the link: nothing moves.

**Step 2 —** `W2D2/instructor-demos/B8-display/step-02-horizontal-nav` — the horizontal nav:

```css
.menu {
  list-style: none;
  padding: 0;
}
.menu li {
  display: inline-block;
}
```

Then add `.menu a { display: inline-block; padding: 12px 16px; }` so the padding pushes the neighbours properly.

## Activity: D2-14 Nav won't behave

> **ACTIVITY:** D2-14 Nav won't behave · 8 min · solo · bug-hunt · `W2D2/classwork/D2-14-nav-wont-behave/` · The Momo House header. **There are 5 bugs. Find at least 3.** **Done looks like:** the logo shows, the nav is one row with no bullets, the links have clean padding and do not overlap the hero.

| # | Bug | Fix | Tag |
|---|---|---|---|
| 1 | `display: blok;` typo on `.order-button` (an `<a>` meant to be a 200px block) | `display: block;` | V |
| 2 | `.logo { display: none; }` left in by mistake | Remove it | V |
| 3 | `list-style: none` missing, so bullets show (visible only while bug 5 is there: mend 3 and 5 together) | Add `list-style: none` | V |
| 4 | Nav links are `display: inline` with `padding: 12px 16px; margin-top: 20px;` — the vertical padding overlaps the hero and the margin-top does nothing (inline boxes ignore vertical margin) | `display: inline-block` | V |
| 5 | CSS `.menu-li { display: inline-block; }`, but the HTML is `<ul class="menu"><li>` | `.menu li` | V |

**Watch for while circulating**

- Bug 4: let students inspect a link and hover the margin in Computed — it is there, but nothing moves.
- Bug 5 looks like a typo; it is a selector that matches nothing.

## Reveal script (2 min)

Open `solution/BUGS.md`. Fix the bugs live in order 3 → 5 → 4 so the class watches the nav turn from a bullet column into a clean row. Scoreboard line: `I found __ / 5.`

## Checkpoint

> **CHECKPOINT:** Ask: "display: none or visibility: hidden — which one leaves a gap?" (hidden).

## If behind, cut this

> **IF BEHIND:** Skip step-01 of the demo and go straight to the horizontal nav. Keep D2-14: D2-15 needs it.

> **FAST FINISHER:** D2-FF2 Hover menu — `W2D2/classwork/fast-finishers/D2-FF2-hover-menu/` (the Momo House nav changes colour / background / underline on `:hover`).

# 14. Block 9 — Mini-site build: style Momo House (30 min)

Slide 46. Clock 3:19–3:49. T 2 · H 28. **Never cut this block.**

## Hook

"Opening night. Yesterday you repaired Didi's website. Tonight it opens. Dress the restaurant."

## Analogy

**School uniform.** One stylesheet, `css/style.css`, is linked from all 4 pages. Change it once and every page changes (ties back to B4).

## Demo talk-track

Rules only (2 min). The starter `css/style.css` is empty with 5 checkpoint comments. If the room is stuck at a checkpoint, show the matching backup step on the projector:

**Step 1 —** `W2D2/instructor-demos/B9-mini-site/step-01-link-and-base`

**Step 2 —** `W2D2/instructor-demos/B9-mini-site/step-02-header-nav`

**Step 3 —** `W2D2/instructor-demos/B9-mini-site/step-03-hero`

**Step 4 —** `W2D2/instructor-demos/B9-mini-site/step-04-menu-table-cards`

**Step 5 —** `W2D2/instructor-demos/B9-mini-site/step-05-footer-polish`

## Activity: D2-15 Style Momo House

> **ACTIVITY:** D2-15 Style Momo House · 28 min · solo · build · `W2D2/classwork/D2-15-style-momo-house/` · One `css/style.css` for `index.html`, `menu.html`, `order.html`, `about.html`. **Done looks like:** all 4 pages wear the same uniform; click through every page.

| CP | By | The page has |
|---|---|---|
| 1 | ≈ 0:06 | the `<link>` on all 4 pages + body font and background |
| 2 | ≈ 0:12 | a header + a horizontal nav (no bullets, inline-block) |
| 3 | ≈ 0:18 | a hero banner (`images/hero-momo.svg`) + the h1 |
| 4 | ≈ 0:24 | the menu table + 3 dish cards (box model: padding, border, radius, border-box) |
| 5 | ≈ 0:28 | a footer + `:hover` on the links |

**Watch for while circulating**

- The `<link>` missing on one page: "click through all 4 pages".
- Inline `style=""` instead of the stylesheet. "Uniform, not sticky notes."
- A student stuck on one checkpoint for more than 3 minutes: point at the backup step folder.
- Dish cards are `width: 290px` (the README says so): 3 × 300px does not fit the 928px content box.

## Checkpoint

> **CHECKPOINT:** At each of the 5 checkpoint times, walk the rows and look at screens. Move on at about 80 % of the room. Students who finish: D2-FF6 or polish.

## If behind, cut this

> **CUT THIS:** Never cut D2-15. If the room is late, drop CP5 polish (hover) to homework, but every student reaches CP4.

# 15. Block 10 — Bootstrap teaser + wrap-up (11 min)

Slides 47–49. Clock 3:49–4:00. T 11 · H 0.

## Hook

"You just wrote a whole stylesheet by hand. What if the parts came ready-made?"

## Analogy

**IKEA for websites.** Hand-written CSS = raw wood: slow, but you understand every joint. Bootstrap = ready-made parts with names: fast, but your site looks like many others.

## Demo talk-track

Instructor demo (4 min):

**Step 1 —** `W2D2/instructor-demos/B10-bootstrap/step-01-plain/index.html` — plain HTML.

**Step 2 —** `W2D2/instructor-demos/B10-bootstrap/step-02-bootstrap/index.html` — add the local stylesheet and three classes:

```html
<link rel="stylesheet" href="css/bootstrap.min.css">

<div class="container">
  <div class="card">
    <div class="card-body">
      <h2>Steam momo</h2>
      <button class="btn btn-primary">
        Order
      </button>
    </div>
  </div>
</div>
```

**Step 3 —** Say: "Bootstrap is fast, but you only understand it if you can write the CSS yourself. Bootstrap deep-dive comes later." Students try it in D2-FF6 or at home.

Then the quiz (5 min), homework and the exit ticket (2 min) — see section 16.

## Checkpoint

> **CHECKPOINT:** Every student has written their two exit-ticket answers.

## If behind, cut this

> **IF BEHIND:** Shorten the quiz to 7 questions (drop 4, 8, 10). Never drop the exit ticket.

# 16. Wrap-up

## Quiz (10 questions, Kahoot-style)

Kahoot if Wi-Fi; otherwise slide 48 and fingers 1–4 for A–D. 30 seconds each.

| # | Question | Options | Answer |
|---|---|---|---|
| 1 | How many `<main>` elements on one page? | A) one B) two C) any D) none | A |
| 2 | A decorative picture should have… | A) no alt B) `alt=""` C) `alt="image"` D) a long alt | B |
| 3 | Which tag for a clickable "Subscribe"? | A) `<div class="btn">` B) `<span>` C) `<button>` D) `<a>` with no href | C |
| 4 | A `<video>` with no `controls`… | A) plays by itself B) shows no play button C) is invalid D) has sound | B |
| 5 | Which line links an external stylesheet? | A) `<style src="style.css">` B) `<link rel="stylesheet" href="css/style.css">` C) `<css href="style.css">` D) `<script src="style.css">` | B |
| 6 | `.card .spicy` (with a space) selects… | A) one element with both classes B) a `.spicy` inside a `.card` C) both D) nothing | B |
| 7 | Which selector wins? | A) `p` B) `.note` C) `#special` D) the first one | C |
| 8 | Which value is valid? | A) `width: 300` B) `font-size: 1.5 rem` C) `color: #gg0000` D) `line-height: 1.6` | D |
| 9 | width 300px + padding 20px + border 5px (content-box) = real width? | A) 300 B) 325 C) 350 D) 345 | C |
| 10 | Inline links ignore… | A) colour B) margin-top C) font-size D) text-decoration | B |

## Homework

Homework sheet: `W2D2/homework/W2D2-Homework-Sheet.md` (core about 2.5 h: HW1 and HW3 are the must-do (1 h), HW2 if they can).

1. **D2-HW1 Haunted portfolio repair** — bug-hunt, 12 bugs, 40 min (must-do). Rajan's 2-page portfolio (`index.html`, `projects.html`, `css/style.css`). Fix the `<link>` first.
2. **D2-HW2 Style your portfolio** — build, about 1.5 h (if they can). Your own Week 1 About Me (or D1-10) page → semantic, accessible, one shared external CSS. `CHECKLIST.md` lists 12 required items (including Lighthouse a11y ≥ 90). Model answer in `_solutions/`.
3. **D2-HW3 Self-check & interview prep** — 20 min (must-do).
4. **D2-HW4 Patan Craft Shop replay** — stretch, optional, 10 bugs, +30 min.

## Exit ticket

On paper or in chat, 1 minute:

1. One CSS bug you fixed today, and how you found it (Styles panel? Computed?).
2. One thing that is still confusing.

## Closing (read aloud)

"Two days ago your page was plain text. Now it has a skeleton, names for every room, and an outfit. Next session: CSS deeper — flexbox and layout. Remember: you may only ship code you can explain, line by line."

# 17. Fast finishers, stretch and cut list

## Fast finishers (D2-FF1 – D2-FF6)

All in `W2D2/classwork/fast-finishers/`. Mentioned on the slides named below.

| Id | Title | Type | Folder | Slide |
|---|---|---|---|---|
| D2-FF1 | TSI ID card | build | `D2-FF1-tsi-id-card/` | 42 |
| D2-FF2 | Hover menu | modify | `D2-FF2-hover-menu/` | 45 |
| D2-FF3 | Specificity duel | build (8 puzzles) | `D2-FF3-specificity-duel/` | 31 |
| D2-FF4 | Haunted stylesheet | bug-hunt, 10 bugs | `D2-FF4-haunted-stylesheet/` | 25 |
| D2-FF5 | Lost & Found | bug-hunt, 11 bugs | `D2-FF5-lost-and-found-bughunt/` | 15 |
| D2-FF6 | Bootstrap try-it | modify | `D2-FF6-bootstrap-try-it/` | 47 |

## The stretch note

> **STRETCH:** If the room sags after B3 (about 70 minutes in), call a 3-minute stand-up stretch. Take the 3 minutes from the B10 quiz (cut it to 7 questions).

## If the room falls behind

> **IF BEHIND:** Cut in this order: (1) D2-09 Selector target practice → homework; (2) D2-11 Theme the canteen menu → homework; (3) shorten the quiz to 7 questions. The bug-hunts stay. **D2-15 is never cut.**

# 18. Instructor notes

- **Debug live on the projector.** When your own demo breaks, do not hide it: inspect it with the class. Then open the next step folder if you need to recover.
- **Inspect, don't guess.** Every CSS question today has the same first answer: right-click → Inspect → Styles or Computed.
- **R bugs need you.** No tool fires on rule-check bugs (D2-02, D2-03 bugs 2 and 4). Say the rule aloud during the reveal.
- **Pace by the room, not the clock.** Move on from an exercise at about 80 % of hands. Early finishers go to the fast finishers or help a neighbour (point, do not type).
- **ESL students:** short sentences, one instruction at a time, and the same words every time ("Inspect", "Styles panel", "school uniform").
- **Energy:** the hardest stretch is after the second break (box model). Use the physical "calling students" game and the show & tell to keep the room awake.
- **Solutions:** the student zip has no solutions. Share the `--with-solutions` zip after class if you choose.
