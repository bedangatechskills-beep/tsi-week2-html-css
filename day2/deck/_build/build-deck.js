// W2D2 deck — "From Skeleton to Outfit: Semantic HTML & CSS Basics" (PLAN.md §5.2, 49 slides)
// Build:  set NODE_PATH to a folder with pptxgenjs installed (npm i pptxgenjs), then
//         node build-deck.js            -> ../TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx
// Theme:  tsi-deck-theme-v2 (never type a hex or a font here; use D.T / D.F / D.Z)
const path = require('path');
const os = require('os');
const fs = require('fs');
const SKILL = process.env.TSI_THEME_DIR || path.join(os.homedir(), '.claude', 'skills', 'tsi-deck-theme-v2');
const { createDeck } = require(path.join(SKILL, 'deck-helpers'));
const SHOTS = path.join(__dirname, 'shots');   // real browser renders (made by render-shots.js), optional
const shot = (name) => { const p = path.join(SHOTS, name); return fs.existsSync(p) ? p : undefined; };

const D = createDeck({ title: 'W2D2 — From Skeleton to Outfit: Semantic HTML & CSS Basics' });
const { T, F, Z } = D;
const noLine = { type: 'none' };
const CW = 'W2D2/classwork/';
const DEMO = 'W2D2/instructor-demos/';

// ---------------------------------------------------------------- local helpers (theme helpers only, no new colours)
function ex({ id, title, icon, min, mode = 'solo', folder, items, done, bugs, lead, body, notes, gap = 0.5 }) {
  const s = D.activity(`${id}  ·  ${title}`, icon, { brief: `${min} minutes  ·  ${mode}  ·  ${CW}${folder}/`, notes });
  D.steps(s, { items, gap, w: 5.5 });
  D.doneCard(s, { body: done, h: 2.55 });
  if (bugs) D.callout(s, { lead: `${bugs} bugs. Find at least ${bugs - 2}.`, body: body || 'Then the reveal: solution/BUGS.md on the projector. Write your score line in the README.' });
  else if (lead) D.callout(s, { lead, body });
  return s;
}
function along(titleText, icon, { min, folder, title: fn, lines, side, sideHead, callout, fontSize = 12, notes, w }) {
  const s = D.activity(titleText, icon, { brief: `Code-along  ·  ${min} min  ·  type with me  ·  ${DEMO}${folder}`, notes });
  const cw = side ? (w || 5.5) : 8.8;
  const h = callout ? 2.95 : 3.5;
  D.codeBox(s, { x: 0.6, y: 1.6, w: cw, h, title: fn, lines, fontSize });
  if (side) D.cardText(s, { x: 0.6 + cw + 0.2, y: 1.6, w: 8.8 - cw - 0.2, h, head: sideHead || 'Look at', body: side, pink: true });
  if (callout) D.callout(s, { y: 4.68, ...callout });
  return s;
}
function box(s, { x, y, w, h, text, fill = T.CARD, ink = T.NAVY, font = F.body, size = Z.body, bold = true, line = T.FOOT, align = 'center', dash, valign = 'middle' }) {
  s.addText(text, { shape: 'roundRect', rectRadius: 0.06, x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 1.25, ...(dash ? { dashType: 'dash' } : {}) } : noLine, fontFace: font, fontSize: size, bold, color: ink, align, valign, margin: 4 });
}
function label(s, { x, y, w, h = 0.3, text, color = T.BODY, size = Z.cardBody, bold = false, align = 'center', italic = false, font = F.body }) {
  s.addText(text, { x, y, w, h, fontFace: font, fontSize: size, bold, italic, color, align, valign: 'middle', margin: 0 });
}

// ================================================================= B0 Hook: same skeleton, new outfit (slides 1-4)
D.title({
  kicker: 'Week 2  ·  Day 2  ·  4 hours',
  title: 'From Skeleton to Outfit:\nSemantic HTML & CSS Basics',
  sub: 'Yesterday you built and mended the skeleton. Today you give it names, then clothes.',
  pill: 'Today: 42 broken things to mend',
  notes: `SLIDE 1 — TITLE (0:00)
Say: "Namaste! Yesterday you built HTML skeletons and mended 42 bugs. Today the skeleton gets two things: proper names for its rooms, and an outfit."
"First hour: semantic HTML, accessibility, media. After the first break: CSS. At the end you style the Momo House website you repaired yesterday."
Homework spot-check (1 volunteer, 1 minute): "Who finished D1-HW1? Show me one bug you fixed." Then the One Rule: "You may only ship code you can explain, line by line."`,
});

let s = D.slide("Today's Roadmap", 'clock', { notes: `SLIDE 2 — ROADMAP
Read it quickly. Two breaks: 1:10 and 2:25.
Same rhythm as yesterday: I show, you type with me, you fix a broken page, we reveal together.
The big one is at 3:19: style Momo House, one stylesheet for 4 pages, 5 checkpoints.
If we fall behind: D2-09 and D2-11 go to homework first. D2-15 is never cut.` });
D.agenda(s, [
  { time: '0:00', name: 'Outfit hook + Semantic HTML', min: '33 min' },
  { time: '0:33', name: 'Accessibility + meta, then Media', min: '37 min' },
  { time: '1:10', name: 'Break', min: '10 min', isBreak: true },
  { time: '1:20', name: 'CSS intro + Selectors', min: '46 min' },
  { time: '2:06', name: 'Colours, units, fonts  ·  Break', min: '29 min' },
  { time: '2:35', name: 'Box model + DevTools', min: '28 min' },
  { time: '3:03', name: 'Display, then style Momo House', min: '46 min' },
  { time: '3:49', name: 'Bootstrap teaser, quiz, homework', min: '11 min' },
]);
D.callout(s, { y: 5.0, h: 0.42, lead: 'Breaks:', body: '1:10 – 1:20 and 2:25 – 2:35 (10 min each).', tone: 'pink' });

s = D.slide('Same skeleton, three outfits', 'palette', { notes: `SLIDE 3 — SAME SKELETON, THREE OUTFITS (B0 hook, CSS Zen Garden idea, shown locally)
Demo: W2D2/instructor-demos/B0-outfit/step-01-no-css (plain HTML, no CSS) then step-02-three-outfits.
In step-02 change ONE line in the <head>: <link rel="stylesheet" href="css/outfit-traditional.css"> → outfit-modern.css → outfit-night.css. Save each time.
Say: "The HTML did not change. Not one letter. Only the outfit changed. HTML = the skeleton. CSS = the outfit."
The real CSS Zen Garden (csszengarden.com) is one HTML file with hundreds of stylesheets. Show it only if Wi-Fi works.
SCREENSHOTS: rendered from step-02-three-outfits (one per stylesheet). If a slot still shows SCREENSHOT n, capture it in Chrome.` });
[['outfit-traditional.png', 'outfit-traditional.css'], ['outfit-modern.png', 'outfit-modern.css'], ['outfit-night.png', 'outfit-night.css']].forEach(([img, cap], i) => {
  D.screenshotSlot(s, { n: i + 1, label: `step-02-three-outfits with ${cap}`, x: 0.6 + i * 2.97, y: 1.45, w: 2.85, h: 1.6, image: shot(img), caption: cap });
});
D.navyBar(s, { y: 3.65, h: 0.6, text: 'Same HTML. Not one letter changed. Only the outfit (CSS).' });
D.callout(s, { y: 4.45, h: 0.6, lead: 'Skeleton & outfit:', body: 'HTML says WHAT is on the page. CSS says how it LOOKS. Change the CSS, keep the skeleton.' });

ex({
  id: 'D2-00', title: 'Outfit swap', icon: 'palette', min: 3, folder: 'D2-00-outfit-swap',
  items: ['Open index.html with Live Server', 'Find the <link> line in the <head>', 'Change href to css/outfit-modern.css. Save.', 'Now css/outfit-night.css. Save.', 'Write: what changed? What stayed the same?'],
  done: 'You saw 3 looks.\n\nThe HTML did not change at all. Only one href.',
  lead: 'One href, three looks.', body: 'Answer at the reveal.',
  notes: `SLIDE 4 — ACTIVITY D2-00 Outfit swap (3 min, solo) — W2D2/classwork/D2-00-outfit-swap/
Students change the <link href> between the 3 outfit stylesheets: css/outfit-traditional.css, css/outfit-modern.css, css/outfit-night.css.
Common problem: they type the file name wrongly (outfit_modern.css) → the page goes plain. "No outfit = a typo in href. Read it letter by letter."
Ask: "What changed?" (colours, fonts, spacing) "What stayed the same?" (all the text, all the tags).` });

// ================================================================= B1 Semantic HTML5 (slides 5-10)
s = D.slide('Boxes with names: div soup vs semantic', 'layout', { notes: `SLIDE 5 — BOXES WITH NAMES (B1, 0:07)
Analogy: rooms in a house. A house plan says "kitchen", "bedroom", "bathroom" — not "room 1, room 2, room 3".
A <div> is an unlabeled box. A page made only of divs is "div soup": it works, but nobody (Google, a screen reader, your teammate) knows which box is the menu and which is the footer.
Semantic tags are boxes WITH names: <header>, <nav>, <main>, <footer>. They look exactly like a div. The difference is the MEANING.
Code-along (3 min across slides 5-6): W2D2/instructor-demos/B1-semantic/step-01-div-soup → step-02-semantic.` });
D.compare(s, {
  h: 2.75,
  bad: { head: 'Div soup: unlabeled boxes', lines: ['<div class="header">', '  <div class="nav">…</div>', '</div>', '<div class="main">…</div>', '<div class="footer">…</div>'] },
  good: { head: 'Semantic: boxes with names', lines: ['<header>', '  <nav>…</nav>', '</header>', '<main>…</main>', '<footer>…</footer>'] },
});
D.callout(s, { y: 4.3, h: 0.6, lead: 'Rooms with names:', body: 'a house plan says "kitchen", not "room 1". Semantic tags look the same as a div, but they MEAN something.' });

s = D.activity('The semantic page map', 'layout', { brief: 'Code-along  ·  3 min  ·  type with me  ·  W2D2/instructor-demos/B1-semantic/step-01-div-soup → step-02-semantic', notes: `SLIDE 6 — THE SEMANTIC PAGE MAP (wireframe) — code-along W2D2/instructor-demos/B1-semantic/step-01-div-soup → step-02-semantic
Point at each box: header (logo + title) with nav inside (the links); main = the ONE main content of this page; inside main, sections (each with a heading) and articles (a complete piece you could post alone, like a blog post); aside = side information (related links, an advert); footer = contact, copyright.
Live: open step-01-div-soup, rename each <div class="…"> to the right tag. Linked editing renames the closing tag too.
Then F12 → Elements: the names are now visible. The page looks the same.
Rules: one <main> per page. Every <section> has a heading. figure = a picture with its caption.` });
const WX = 0.6, WY = 1.6;
box(s, { x: WX, y: WY, w: 5.6, h: 0.55, text: '<header>   logo + <nav> links', font: F.code, size: 12, fill: T.NAVY, ink: T.WHITE, line: null });
box(s, { x: WX, y: WY + 0.65, w: 3.95, h: 2.0, text: '', fill: T.PINK, line: T.CHERRY });
label(s, { x: WX + 0.1, y: WY + 0.7, w: 3.75, text: '<main>  (one per page)', bold: true, color: T.CHERRY, font: F.code, size: 12, align: 'left' });
box(s, { x: WX + 0.15, y: WY + 1.05, w: 3.65, h: 0.65, text: '<section>  with an <h2>', font: F.code, size: 12, fill: T.WHITE });
box(s, { x: WX + 0.15, y: WY + 1.8, w: 3.65, h: 0.7, text: '<article>  a blog post', font: F.code, size: 12, fill: T.WHITE });
box(s, { x: WX + 4.05, y: WY + 0.65, w: 1.55, h: 2.0, text: '<aside>\nrelated\nlinks', font: F.code, size: 12, fill: T.CARD });
box(s, { x: WX, y: WY + 2.75, w: 5.6, h: 0.5, text: '<footer>   contact · ©', font: F.code, size: 12, fill: T.NAVY, ink: T.WHITE, line: null });
D.cardText(s, { x: 6.45, y: 1.6, w: 2.95, h: 3.25, head: 'House rules', body: 'One <main> per page.\n\nEvery <section> has a heading.\n\n<article> = could be posted alone.\n\n<aside> = side information.', pink: true });

s = D.slide('Who reads the names?', 'users', { notes: `SLIDE 7 — WHO READS THE NAMES?
Say: "Your eyes do not care. But four readers do."
1. Google: it gives more weight to text inside <main> and <article>, and less to <nav> and <footer>.
2. Screen readers: a blind user can press one key to jump to the <nav> or the <main>. With div soup there is nothing to jump to.
3. AI tools: when you paste a page into an AI tutor, the names help it understand the page.
4. Teammates: next month, YOU are the teammate. <footer> is easier to find than <div class="box3">.` });
D.cards(s, [
  { head: 'Google', body: 'Knows which text is the main content and which is just the menu.' },
  { head: 'Screen readers', body: 'A blind user jumps straight to <nav> or <main> with one key.', pink: true },
  { head: 'AI tools', body: 'Understand your page faster when the boxes have names.' },
  { head: 'Teammates', body: '<footer> is easier to find than <div class="box3">.' },
], { h: 1.9 });
D.navyBar(s, { y: 3.5, h: 0.6, text: 'The page looks the same. The meaning is new.' });

ex({
  id: 'D2-01', title: 'Div soup → semantic', icon: 'edit', min: 7, folder: 'D2-01-div-soup-to-semantic',
  items: ['Open index.html: 7 <div class="…"> boxes', 'Rename each one to its semantic tag', 'Linked editing renames the closing tag too', 'Save. The page must look the SAME', 'F12 → Elements: read the new names'],
  done: 'No <div class="header / nav / main / … "> left.\n\nThe page looks the same.\n\nF12 shows header, nav, main, section, article, aside, footer.',
  lead: 'Closing tag did not follow?', body: 'Linked editing is in .vscode/settings.json: open the W2D2 folder, not one file.',
  notes: `SLIDE 8 — ACTIVITY D2-01 Div soup → semantic (7 min, solo, modify) — W2D2/classwork/D2-01-div-soup-to-semantic/
Replace 7 div class="…" boxes with header / nav / main / section / article / aside / footer. Linked editing ("editor.linkedEditing": true in W2D2/.vscode/settings.json) renames both tags at once.
Watch for: linked editing not working → they opened a single file, not the W2D2 folder. Second: deleting the class but keeping <div>.
Done: the page looks the same and F12 → Elements shows the names. Answer: solution/index.html.` });

s = D.slide('When NOT to use each tag', 'search', { notes: `SLIDE 9 — WHEN NOT TO USE EACH TAG
Semantic tags have rules. Go row by row. These are R bugs: no tool shows them, you check the rule.
- <main>: only ONE per page.
- <nav>: for groups of links, not a paragraph of text.
- <section>: needs a heading. No heading? It is probably just a <div>.
- <aside>: side information. The main post never goes in aside.
- <button>: anything you click to DO something. A <div class="btn"> looks like a button but the Tab key skips it and a screen reader does not know it is a button.
D2-02 has one bug for each row.` });
D.table(s, {
  head: ['Tag', 'Use it for', 'Do NOT use it for'],
  colW: [1.7, 3.4, 3.8], rowH: 0.5,
  rows: [
    ['<main>', 'the one main content', 'a second main on the same page'],
    ['<nav>', 'a group of links', 'a paragraph of text'],
    ['<section>', 'a part with its own heading', 'a box with no heading (use div)'],
    ['<aside>', 'side info: related posts', 'the main blog post'],
    ['<button>', 'anything you click to DO', '<div class="btn"> — Tab skips it'],
  ],
});
D.callout(s, { y: 4.4, h: 0.6, lead: 'R = rule check.', body: 'No tool fires for these. You read the code against the rule.' });

ex({
  id: 'D2-02', title: 'Semantic misuse', icon: 'wrench', min: 8, folder: 'D2-02-semantic-misuse-bughunt', bugs: 5,
  items: ['Open index.html: the TSI Blog', 'F12 → Elements: count the <main> tags', 'Read every nav, section and aside', 'Press Tab through the page: what gets skipped?', 'Use the "When NOT" table on slide 9'],
  done: 'One <main>.\n<nav> holds links.\nEvery <section> has a heading.\nThe post is in <main>, related posts in <aside>.\nSubscribe is a real <button>.',
  notes: `SLIDE 10 — ACTIVITY D2-02 Semantic misuse (8 min, solo) — W2D2/classwork/D2-02-semantic-misuse-bughunt/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. Two <main> elements — R / D(W3C). Fix: keep one <main>; the other becomes a <section> or <div>.
2. <nav> wraps a paragraph of text, not links — R. Fix: use <p> (or put real links in the nav).
3. <section> with no heading — R. Fix: add an <h2> (or make it a <div>).
4. <aside> holds the main blog post, while the "related posts" box sits in <main> — R. Fix: swap them.
5. <div class="btn">Subscribe</div> instead of <button> — V (the Tab key skips it). No JavaScript, no onclick. Fix: <button>Subscribe</button>.
Watch for: most bugs are R — no squiggle. Push students to use the slide 9 table as a checklist.` });

// ================================================================= B2 Accessibility + meta (slides 11-15)
s = D.slide('The parcel label read aloud', 'users', { notes: `SLIDE 11 — ANALOGY: THE PARCEL LABEL READ ALOUD (B2, 0:33)
Yesterday: <head> = the label on the parcel. Today: imagine someone who cannot see. A friend reads the label AND the contents aloud to them. That friend is a screen reader.
If the label is wrong (no lang), the friend reads Nepali with an English voice. If a picture has no alt, the friend says "image… image…". If a link says "click here", the friend says "click here, click here, click here" — click where?
Accessibility (a11y: a + 11 letters + y) = making the page work for everyone: blind users, keyboard-only users, people on slow phones.` });
D.table(s, {
  head: ['On the parcel', 'In HTML', 'Read aloud, it says…'],
  colW: [2.4, 2.9, 3.6], rowH: 0.48,
  rows: [
    ['the language of the label', '<html lang="en">', 'the right voice for the words'],
    ['a description of a photo', 'alt="TSI building"', '"TSI building, image"'],
    ['where a link goes', '<a>Momo menu</a>', '"Momo menu, link" (not "click here")'],
    ['what a box is for', '<label for="phone">', '"Phone, edit text"'],
    ['the chapter titles', 'h1 → h2 → h3', 'a list of headings to jump to'],
  ],
});
D.callout(s, { y: 4.4, h: 0.6, lead: 'a11y = accessibility.', body: 'A page that works for people who cannot see, cannot use a mouse, or have a slow phone.' });

s = D.slide('Alt text: meaningful vs decorative', 'search', { notes: `SLIDE 12 — ALT TEXT: MEANINGFUL vs DECORATIVE
Two kinds of pictures:
1. Meaningful: it carries information (the TSI building, a menu photo, a chart). alt = what you would say over the phone: alt="The TSI building in Dillibazar".
2. Decorative: it is only decoration (a dhaka pattern strip, a divider). alt="" (empty, but present!). The screen reader skips it quietly.
No alt at all = the worst: the screen reader reads the file name: "decorative-pattern dot svg".
Bad alt: alt="image", alt="photo", or a long sentence for a decoration (D2-03 bug 4).` });
D.cards(s, [
  { head: 'Meaningful picture', body: 'It carries information. Describe it like on the phone.\n\nalt="The TSI building in Dillibazar"' },
  { head: 'Decorative picture', body: 'Only decoration. Empty alt: the screen reader skips it.\n\nalt=""', pink: true },
  { head: 'No alt at all', body: 'The worst: the screen reader reads the file name aloud.\n\n"decorative-pattern dot svg"' },
], { h: 2.1 });
D.callout(s, { y: 3.65, h: 0.6, lead: 'alt="" is not the same as no alt.', body: 'Empty alt = "skip me, I am decoration". No alt = "I forgot".' });

along('Head and meta: the parcel label', 'code', {
  min: 2, folder: 'B2-a11y-meta/step-01-before → step-02-after', title: 'index.html  (the <head>)',
  lines: [
    '<html lang="en">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '  <title>TSI Admissions · Tech Skills Institute</title>',
    '  <meta name="description" content="Join the AI-Powered Full Stack course in Kathmandu.">',
    '  <link rel="icon" href="favicon.svg">',
    '</head>',
  ],
  fontSize: 11,
  callout: { lead: 'title + description', body: 'are what Google shows in its results. "Document" (the Emmet default) tells nobody anything.' },
  notes: `SLIDE 13 — CODE-ALONG: HEAD AND META (2 min) — W2D2/instructor-demos/B2-a11y-meta/step-01-before → step-02-after
Type the head together. One sentence per line:
- lang="en" — the voice for the screen reader.
- viewport — phones show the page at the right width.
- title — the browser tab AND the blue link in Google. Make it descriptive, never "Document".
- meta description — the grey text under the link in Google.
- link rel="icon" — the favicon, the small picture on the tab (step-02-after has favicon.svg).
Show step-02-after in Live Server: the tab shows the momo favicon and the real title.` });

s = D.slide('Demo: Narrator, Tab walk, Lighthouse', 'monitor', { notes: `SLIDE 14 — INSTRUCTOR DEMO: NARRATOR (instructor only, projector + speakers), then the student tools
1. Narrator: press Ctrl+Win+Enter. Open W2D2/instructor-demos/B2-a11y-meta/step-01-before. Press Tab and let the room listen: "image", "click here, link", "edit text" (no label). Then step-02-after: "TSI building, image", "Apply for the course, link", "Phone, edit text". Ctrl+Win+Enter again to stop.
2. Student tool 1, the Tab walk: click the address bar, then press Tab again and again. You should reach every link, button and input in order. Anything skipped (like a <div class="btn">) is a bug.
3. Student tool 2, Lighthouse: F12 → Lighthouse tab → tick only Accessibility → Analyze page load. Works offline. A score and a list of problems.
Students use both in D2-03 next.
LIVE: Switch to the live tool here. Run Lighthouse on B2 step-01-before, then on step-02-after.
(Optional: a capture of Chrome DevTools Lighthouse tab with only "Accessibility" ticked, and a report with a score can go in deck/_build/shots/ and the slot shows it after a rebuild.)` });
D.screenshotSlot(s, { word: 'LIVE', n: 'DEMO', label: 'LIVE: open F12 → Lighthouse → tick Accessibility only → Analyze page load', x: 0.6, y: 1.3, w: 5.2, h: 2.93, image: shot('lighthouse.png') });
D.cardText(s, { x: 6.0, y: 1.3, w: 3.4, h: 2.93, head: 'Three tools', body: 'Narrator (instructor only):\nCtrl + Win + Enter\n\nTab walk: press Tab through the whole page\n\nLighthouse: F12 → Lighthouse → Accessibility', pink: true });
D.callout(s, { y: 4.45, h: 0.6, lead: 'Lighthouse works offline.', body: 'It is inside Chrome. D(LH) bugs in the bug lists = Lighthouse shows them.' });

ex({
  id: 'D2-03', title: 'A11y audit: TSI Admissions', icon: 'search', min: 10, folder: 'D2-03-a11y-audit', bugs: 6,
  items: ['Open index.html with Live Server', 'Tab walk: press Tab through the whole page', 'F12 → Lighthouse → Accessibility → Analyze', 'Ctrl+Shift+M: read the HTMLHint problems', 'Read the head and every alt yourself (R bugs)'],
  done: 'lang="en", a real title, every meaningful img has alt, the pattern has alt="", links say where they go, the phone input has a label.\n\nLighthouse a11y score goes up.',
  notes: `SLIDE 15 — ACTIVITY D2-03 A11y audit: TSI Admissions (10 min, solo) — W2D2/classwork/D2-03-a11y-audit/  (6 bugs, each counted once; find at least 4)
REVEAL (2 min) — solution/BUGS.md:
1. <html> has no lang — D(LH) / D(HH). Fix: <html lang="en">.
2. <title>Document</title> (the Emmet default) is not descriptive — R. Fix: e.g. <title>TSI Admissions · Tech Skills Institute</title>.
3. <img src="images/tsi-building.svg"> has no alt — D(LH) / D(HH). Fix: alt="The TSI building in Dillibazar".
4. The decorative decorative-pattern.svg has a long alt ("a picture of a pattern with lines…") — R. Fix: alt="".
5. Three links say "click here" (one bug, three places) — R (Lighthouse 13 skips same-page #links, so it does not flag them). Fix: link text that says where it goes ("See the course fees").
6. The phone input has a placeholder only, no <label> — V: clicking the words does nothing, and the hint disappears when you type (Lighthouse accepts the placeholder, so it passes: "don't trust one tool"). Fix: <label for="phone">Phone</label> + id="phone".
Watch for: students who run Lighthouse with all categories ticked (slow). Only Accessibility.
FAST FINISHER: D2-FF5 Lost & Found — W2D2/classwork/fast-finishers/D2-FF5-lost-and-found-bughunt/ (11 surplus bugs: semantic + a11y + CSS).` });

// ================================================================= B3 Audio, video, iframe (slides 16-19)
along('TV, radio and a window', 'monitor', {
  min: 2, folder: 'B3-media/step-01-audio … step-03-iframe', title: 'index.html  (inside <body>)',
  lines: [
    '<audio src="media/canteen-bell.wav" controls></audio>',
    '',
    '<video controls width="640" poster="images/poster-momo-steam.svg">',
    '  <source src="media/momo-steam.mp4" type="video/mp4">',
    '  Your browser cannot play this video.',
    '</video>',
    '',
    '<iframe src="kathmandu-map.html" title="Map of Kathmandu"',
    '        width="600" height="340"></iframe>',
  ],
  fontSize: 11.5,
  callout: { lead: 'Radio, TV, window:', body: 'audio = the radio, video = the TV, iframe = a window into another room (another page).' },
  notes: `SLIDE 16 — CODE-ALONG: AUDIO, VIDEO, IFRAME (B3, 0:52) — W2D2/instructor-demos/B3-media/step-01-audio, step-02-video, step-03-iframe
Analogy: TV, radio, and a window into another room.
step-01-audio: <audio> + controls. Without controls there is NOTHING on the page (D2-04 bug 1). Click play: the canteen bell.
step-02-video: <video controls> with a <source> and its type. poster = the picture shown before play. The text inside the video tag = fallback for very old browsers.
step-03-iframe: an iframe shows another page inside this page (kathmandu-map.html — a local page, so it works offline). title is required for screen readers ("Map of Kathmandu").
Paths work exactly like img src: media/ and images/ folders next to the page.` });

s = D.slide('Autoplay needs muted · poster · fallback text', 'monitor', { notes: `SLIDE 17 — THREE MEDIA RULES
1. Autoplay: browsers block sound that starts by itself. A video only autoplays if it is also muted: <video autoplay muted loop>. Nobody likes a page that shouts at them.
2. poster: the picture before play. A wrong poster path = an empty box (D2-04 bug 4).
3. Fallback text: the words inside <video>…</video> show only if the browser cannot play video at all.
Also: <source> must be INSIDE <video>, and type must match the file (video/mp4 for .mp4). Homework D2-HW4 has both of these bugs.` });
D.cards(s, [
  { head: 'Autoplay needs muted', body: 'Browsers block sound that starts by itself.\n\n<video autoplay muted loop>' },
  { head: 'poster', body: 'The picture before play. Wrong path = an empty box.\n\nposter="images/poster-momo-steam.svg"', pink: true },
  { head: 'Fallback text', body: 'Words inside <video>…</video> show only when video cannot play at all.' },
], { h: 2.1 });
D.callout(s, { y: 3.65, h: 0.6, lead: '<source> goes INSIDE <video>,', body: 'and its type matches the file: video/mp4 for a .mp4 file.' });

ex({
  id: 'D2-04', title: 'Broken media', icon: 'wrench', min: 8, folder: 'D2-04-broken-media', bugs: 5,
  items: ['Open index.html with Live Server', 'Can you see and play BOTH audio players?', 'Can you see the video controls and the poster?', 'Is the map window showing the map?', 'Compare every file name with the folders'],
  done: 'Two audio players that play the bell.\n\nThe video has controls and shows the poster before play.\n\nThe window shows the Kathmandu map.',
  notes: `SLIDE 18 — ACTIVITY D2-04 Broken media (8 min, solo) — W2D2/classwork/D2-04-broken-media/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. <audio src="media/canteen-bell.wav"> has no controls, so nothing shows — V. Fix: add controls.
2. Second audio uses media/canteen_bell.wav (underscore) — V (the player shows 0:00 and will not play). Fix: canteen-bell.wav.
3. <video> has no controls — V. Fix: add controls.
4. poster="image/poster-momo-steam.svg", wrong folder — V (an empty box before play, not the poster; the video has preload="none"). Fix: images/poster-momo-steam.svg.
5. <iframe src="kathmandu-map.htm">, wrong extension — V (404 inside the window). Fix: kathmandu-map.html.
Watch for: speakers muted on student laptops — "the player shows 2 seconds = it works".` });

ex({
  id: 'D2-05', title: 'Media corner', icon: 'monitor', min: 3, folder: 'D2-05-media-corner',
  items: ['Open index.html: audio + video are done', 'Add an <iframe> of kathmandu-map.html', 'Give it a title, a width and a height', 'Save and check the map shows', 'Bonus: fallback text inside the <video>'],
  done: 'The map shows in a window on your page.\n\nThe iframe has a title (for screen readers).',
  lead: 'Every iframe needs a title.', body: 'A screen reader reads it to say what the window shows.',
  notes: `SLIDE 19 — ACTIVITY D2-05 Media corner (3 min, solo, build) — W2D2/classwork/D2-05-media-corner/
The starter has audio + video done. Add an iframe of kathmandu-map.html with a title and width/height. Bonus: video fallback text.
Answer: solution/index.html.
STRETCH NOTE: if the room sags here (about 70 min in), call a 3-min stand-up stretch and take it from the B10 quiz.` });

// ================================================================= Break 1 (slide 20)
D.breakSlide({ minutes: 10, sub: 'After the break, the skeleton gets its outfit.', notes: `SLIDE 20 — BREAK (1:10 – 1:20)
Teaser: "After the break, the skeleton gets its outfit."
Before the restart, open W2D2/instructor-demos/B4-css-intro/step-01-inline in Live Server.` });

// ================================================================= B4 CSS intro (slides 21-26)
D.dark({ kind: 'block', kicker: 'Block 4  ·  24 min', title: 'CSS is the outfit', sub: 'The skeleton stays the same. CSS chooses the colours, the fonts, the spacing: the clothes.', notes: `SLIDE 21 — B4 OPENER: CSS IS THE OUTFIT (1:20)
Say: "This morning we gave the rooms names. Now we dress the skeleton."
"HTML = the skeleton: what exists. CSS = the outfit: how it looks. Same skeleton, many outfits — you saw it at 0:00."
Block plan: the rule anatomy → three ways to add CSS (sticky note, outfit list, school uniform) → the cascade + DevTools → D2-06 bug-hunt → D2-07 restyle.` });

s = D.slide('A CSS rule = who + what', 'code', { notes: `SLIDE 22 — RULE ANATOMY
Point at each part:
- Selector (h1) = WHO gets dressed.
- { } = the curly brackets hold the outfit list.
- Property (color) = WHAT you change.
- Value (maroon) = HOW: the new setting.
- ; = the end of one instruction. Missing ; = both lines are lost (D2-06 bug 4).
Say: "Who, then a list of what: value pairs. Colon between, semicolon after."
American spelling: color, not colour (D2-06 bug 5). Comments in CSS are /* … */, never // (bug 6).` });
const RY = 1.75;
box(s, { x: 0.8, y: RY, w: 1.2, h: 0.75, text: 'h1', font: F.code, size: 22, fill: T.NAVY, ink: T.WHITE, line: null });
box(s, { x: 2.05, y: RY, w: 0.6, h: 0.75, text: '{', font: F.code, size: 22, fill: T.CARD });
box(s, { x: 2.7, y: RY, w: 1.7, h: 0.75, text: 'color', font: F.code, size: 22, fill: T.PINK, ink: T.CHERRY, line: null });
box(s, { x: 4.45, y: RY, w: 0.45, h: 0.75, text: ':', font: F.code, size: 22, fill: T.CARD });
box(s, { x: 4.95, y: RY, w: 1.9, h: 0.75, text: 'maroon', font: F.code, size: 22, fill: T.PINK, ink: T.CHERRY, line: null });
box(s, { x: 6.9, y: RY, w: 0.45, h: 0.75, text: ';', font: F.code, size: 22, fill: T.CARD });
box(s, { x: 7.4, y: RY, w: 0.6, h: 0.75, text: '}', font: F.code, size: 22, fill: T.CARD });
label(s, { x: 0.8, y: RY - 0.42, w: 1.2, text: 'selector', bold: true, color: T.NAVY });
label(s, { x: 2.7, y: RY - 0.42, w: 1.7, text: 'property', bold: true, color: T.CHERRY });
label(s, { x: 4.95, y: RY - 0.42, w: 1.9, text: 'value', bold: true, color: T.CHERRY });
label(s, { x: 6.6, y: RY + 0.8, w: 1.1, text: 'end of line', bold: true, color: T.NAVY, size: 11 });
s.addShape('line', { x: 2.05, y: RY + 1.2, w: 5.95, h: 0, line: { color: T.CHERRY, width: 2 } });
label(s, { x: 2.05, y: RY + 1.25, w: 5.95, text: 'declaration block = the outfit list', bold: true, color: T.CHERRY, size: Z.body });
D.cards(s, [
  { head: 'Who', body: 'The selector picks WHO gets dressed: h1, .card, #menu.' },
  { head: 'What', body: 'property: value; pairs. Colon between, semicolon after.', pink: true },
], { y: 3.4, h: 1.1 });
D.callout(s, { y: 4.65, h: 0.5, lead: 'CSS comments:', body: '/* like this */.  Never // like JavaScript: it breaks the next rule.' });

along('Three ways to add CSS', 'layout', {
  min: 4, folder: 'B4-css-intro/step-01-inline … step-03-external', title: 'three ways to add CSS',
  lines: [
    '<!-- 1. inline: a sticky note on one shirt -->',
    '<p style="color: maroon;">Hello</p>',
    '',
    '<!-- 2. internal: an outfit list for one page -->',
    '<style>  p { color: navy; }  </style>',
    '',
    '<!-- 3. external: the school uniform -->',
    '<link rel="stylesheet" href="css/style.css">',
  ],
  side: 'Sticky note: one element only.\n\nOutfit list: one page only.\n\nSchool uniform: one file, every page wears it.\n\nUse the uniform (external) for real sites.',
  sideHead: 'Three ways', w: 5.5, fontSize: 11.5,
  callout: { lead: 'External = school uniform.', body: 'Change css/style.css once, every page that links it changes.' },
  notes: `SLIDE 23 — CODE-ALONG: THREE WAYS TO ADD CSS (4 min) — W2D2/instructor-demos/B4-css-intro/step-01-inline, step-02-internal, step-03-external
Analogy: the outfit.
1. Inline (step-01): a sticky note on ONE shirt. style="…" on one element. Quick, but you repeat it everywhere.
2. Internal (step-02): an outfit list for ONE person. A <style> block in the <head> of one page.
3. External (step-03): the SCHOOL UNIFORM for everyone. One file css/style.css, linked from every page with <link rel="stylesheet" href="css/style.css">. This is what real sites use, and what you use in D2-15.
In step-03, type css/style.css together:
  body { background: #fdf6ec; }
  h1 { color: maroon; }
Watch for: rel="stylesheet" must be spelled exactly; href is a path like img src.` });

s = D.slide('The cascade + DevTools Styles panel', 'search', { notes: `SLIDE 24 — THE CASCADE + DEVTOOLS STYLES
Cascade = "the last rule wins" when two rules have the same strength. If style.css says h1 { color: navy; } and later h1 { color: maroon; }, the h1 is maroon.
DevTools: right-click the h1 → Inspect → the Styles panel (right side). It shows every rule that touches the h1. A rule that LOST is crossed out. An invalid value has a yellow warning triangle.
Say: "When CSS does not work, do not guess. Inspect. The Styles panel tells you: is my rule there? Is it crossed out? Is it invalid?"
You can also edit values live in the Styles panel — but it is not saved. Copy the good value back into your file.
LIVE: Switch to the live tool here. Inspect the h1 and point at the crossed-out rule and the yellow triangle.
(Optional: a capture of Chrome DevTools Styles panel with one crossed-out rule (the cascade) and one yellow-triangle invalid value can go in deck/_build/shots/ and the slot shows it after a rebuild.)` });
D.screenshotSlot(s, { word: 'LIVE', n: 'DEMO', label: 'LIVE: right-click the h1 → Inspect → Styles: find the crossed-out rule and the yellow ⚠', x: 0.6, y: 1.3, w: 4.6, h: 2.59, image: shot('devtools-styles.png') });
D.codeBox(s, { x: 5.4, y: 1.3, w: 4.0, h: 1.5, title: 'css/style.css', fontSize: 12.5, lines: ['h1 { color: navy; }', '', 'h1 { color: maroon; }  /* wins */'] });
D.cardText(s, { x: 5.4, y: 2.95, w: 4.0, h: 1.4, head: 'Read the Styles panel', body: 'Crossed out = lost the cascade.\nYellow triangle = invalid value.\nNot there = the file did not load.', pink: true });
D.callout(s, { y: 4.55, h: 0.6, lead: 'The cascade:', body: 'two rules, same strength → the LAST one wins. Not sure? Right-click → Inspect.' });

ex({
  id: 'D2-06', title: 'Stylesheet not loading', icon: 'wrench', min: 9, folder: 'D2-06-stylesheet-not-loading', bugs: 6,
  items: ['Open index.html: no style at all!', 'Read the <link> line letter by letter', 'Compare href with the real file name', 'Then read css/style.css rule by rule', 'Inspect → Styles: crossed out? yellow triangle?'],
  done: 'The stylesheet loads.\n\nEvery rule in style.css shows on the page.\n\nNo yellow triangles in the Styles panel.',
  body: 'Fix bugs 1 and 2 first: until the stylesheet loads, nothing else is visible.',
  notes: `SLIDE 25 — ACTIVITY D2-06 Stylesheet not loading (9 min, solo) — W2D2/classwork/D2-06-stylesheet-not-loading/  (6 bugs, find at least 4)
README: "Fix bugs 1 and 2 first; until the stylesheet loads, nothing else is visible."
REVEAL (2 min) — solution/BUGS.md:
1. rel="stylsheet" typo, so no CSS at all — V. Fix: rel="stylesheet".
2. href="css/styles.css", but the file is style.css — V. Fix: href="css/style.css".
3. Missing } after the h1 rule, so the next rule (.highlight) is lost — V. Fix: add }.
4. Missing ; between two declarations — V. Chrome reads "color: #2a3f63 line-height: 1.8" as one broken value and drops BOTH. Fix: add ;.
5. colour: maroon; (British spelling) — V. Fix: color.
6. // footer styles comment (JS style) breaks the next rule — V. Fix: /* footer styles */.
Watch for: students who fix bug 1, see SOME style, and stop. "Every rule in the file must show."
FAST FINISHER: D2-FF4 Haunted stylesheet — W2D2/classwork/fast-finishers/D2-FF4-haunted-stylesheet/ (10 mixed CSS bugs).` });

ex({
  id: 'D2-07', title: 'Restyle the bio', icon: 'palette', min: 4, folder: 'D2-07-restyle-the-bio',
  items: ["Open index.html: Sunita's bio", 'Open css/style.css next to it', 'Change the body background', 'Change the h1 colour and the paragraph font-size', 'Change the link colour. Save after each one.'],
  done: 'Four changes in css/style.css, all visible on the page.\n\nYou did not touch index.html.',
  lead: 'Change CSS only.', body: 'If you edit the HTML, you are dressing the skeleton the wrong way.',
  notes: `SLIDE 26 — ACTIVITY D2-07 Restyle the bio (4 min, solo, modify) — W2D2/classwork/D2-07-restyle-the-bio/
Change 4 things in the CSS on Sunita's bio: body background, h1 colour, paragraph font-size, link colour.
Watch for: "colour" spelling, a missing unit on font-size (18 instead of 18px).
Answer: solution/css/style.css.` });

// ================================================================= B5 Selectors (slides 27-31)
s = D.slide('Selectors = calling students in class', 'users', { notes: `SLIDE 27 — ANALOGY: CALLING STUDENTS IN CLASS (B5, 1:44)
Say: "A selector is how you call people in class."
- "Everyone, stand up!" = an element selector: p { } dresses every <p>.
- "Red team, stand up!" = a class: .red-team { } — many people can be on the red team.
- "Aarav, stand up!" = an id: #aarav { } — only ONE Aarav in the class.
- "Red team in row 2, stand up!" = descendant: .row-2 .red-team { } — a space means "inside".
Ask the room to do it physically for 30 seconds if the energy is low.` });
D.cards(s, [
  { head: '"Everyone!"', body: 'element: tag name\n\np { }\n\nevery <p> on the page' },
  { head: '"Red team!"', body: 'a team: .class\n\n.red-team { }\n\nmany can share it' },
  { head: '"Aarav!"', body: 'by name: #id\n\n#aarav { }\n\nonly one per page', pink: true },
  { head: '"Row 2 reds!"', body: 'descendant (space)\n\n.row-2 .red-team { }\n\ninside another' },
], { h: 2.1 });
D.callout(s, { y: 3.65, h: 0.6, lead: 'In the HTML:', body: 'class="red-team" (no dot) and id="aarav" (no #). The dot and the # are only in the CSS.' });

s = D.activity('The selector table', 'list', { brief: 'Code-along  ·  2 min  ·  type with me  ·  W2D2/instructor-demos/B5-selectors/step-01-element … step-04-hover', notes: `SLIDE 28 — CODE-ALONG: SELECTORS (2 min) — W2D2/instructor-demos/B5-selectors/step-01-element, step-02-class-id, step-03-group-descendant, step-04-hover
Type one rule per row into each step's css/style.css and watch the page change.
step-01: p { color: #555; }
step-02: .price { font-weight: bold; }  and  #todays-special { font-size: 1.5rem; }
step-03: h1, h2 { color: maroon; }  and  nav a { text-decoration: none; }
step-04: a:hover { color: maroon; }
Say: ".card.spicy with NO space = one element with both classes. .card .spicy WITH a space = a .spicy inside a .card." That space is the most common selector bug.` });
D.table(s, {
  y: 1.55, head: ['Selector', 'Picks', 'Example'],
  colW: [2.4, 3.6, 2.9], rowH: 0.43,
  rows: [
    ['p', 'every <p>', 'p { color: #555; }'],
    ['.price', 'every element with class="price"', '.price { font-weight: bold; }'],
    ['#todays-special', 'the ONE element with that id', '#todays-special { … }'],
    ['h1, h2', 'h1 AND h2 (grouping)', 'h1, h2 { color: maroon; }'],
    ['nav a', 'links INSIDE nav (descendant)', 'nav a { text-decoration: none; }'],
    ['.card.spicy', 'one element with BOTH classes', '.card.spicy { … }'],
    ['a:hover', 'a link while the mouse is on it', 'a:hover { color: maroon; }'],
  ],
});

s = D.slide('Who wins? id > class > element', 'award', { notes: `SLIDE 29 — WHO WINS? (light specificity)
When two rules fight over the same element, the STRONGER selector wins, no matter the order:
id (#menu) beats class (.card) beats element (p).
Only when they are the SAME strength does the last rule win (the cascade, slide 24).
Example: <p id="special" class="note">. p { color: grey; } .note { color: navy; } #special { color: maroon; } → maroon.
Do not go deeper today (no counting points). D2-FF3 Specificity duel has 8 puzzles for fast finishers.` });
[['#id', 'strongest', T.CHERRY, T.WHITE, 3.0], ['.class', 'middle', T.NAVY, T.WHITE, 2.2], ['element', 'weakest', T.CARD, T.NAVY, 1.4]].forEach(([t, sub, fill, ink, h], i) => {
  const x = 0.8 + i * 1.75, y = 1.35 + (3.0 - h);
  box(s, { x, y, w: 1.55, h, text: t, font: F.code, size: 18, fill, ink, line: fill === T.CARD ? T.FOOT : null });
  label(s, { x, y: 4.42, w: 1.55, text: sub, bold: true, color: T.NAVY });
});
D.codeBox(s, { x: 6.2, y: 1.35, w: 3.2, h: 1.45, title: 'style.css', fontSize: 12, lines: ['p        { color: grey; }', '.note    { color: navy; }', '#special { color: maroon; }'] });
D.cardText(s, { x: 6.2, y: 2.95, w: 3.2, h: 1.75, head: 'Who wins here?', body: '<p id="special" class="note">\nis maroon. The id wins, whatever the order of the rules.', pink: true });
D.callout(s, { y: 4.85, h: 0.45, lead: 'Same strength?', body: 'Then the last rule wins (the cascade).' });

ex({
  id: 'D2-08', title: 'Selector mix-ups', icon: 'wrench', min: 8, folder: 'D2-08-selector-mixups', bugs: 5,
  items: ['Open index.html: the Momo House menu', 'Put index.html and css/style.css side by side', 'For each rule: does its selector match the HTML?', 'Check capitals, dots, # and commas', 'Hover over the links too'],
  done: 'Every rule in style.css shows on the page.\n\nThe cards, the menu, the prices and both headings are styled.\n\nLinks change on hover.',
  notes: `SLIDE 30 — ACTIVITY D2-08 Selector mix-ups (8 min, solo) — W2D2/classwork/D2-08-selector-mixups/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. CSS .card, HTML class="Card" (class names are case-sensitive) — V. Fix: class="card".
2. CSS #menu, HTML id="main-menu" — V. Fix: make them match.
3. price { … } is missing the dot — V. Fix: .price.
4. h1, h2, { … } has a trailing comma, so the whole rule is dropped — V. Fix: h1, h2 { … }.
5. a:hoverr typo — V (on hover). Fix: a:hover.
Teaching move: an invalid selector drops the WHOLE rule. One stray comma = nothing applies.` });

ex({
  id: 'D2-09', title: 'Selector target practice', icon: 'target', min: 5, folder: 'D2-09-selector-target-practice',
  items: ['every p → grey', 'only .veg dishes → light-green background', '#todays-special → bold + bigger', 'only links inside nav → no underline', '.dish.spicy → red border'],
  done: 'Five rules in css/style.css. Each one hits only its target.\n\nYou did not edit index.html.',
  lead: 'One rule per target. No HTML edits.', body: 'The classes and ids you need are already in the HTML.',
  notes: `SLIDE 31 — ACTIVITY D2-09 Selector target practice (5 min, solo, build) — W2D2/classwork/D2-09-selector-target-practice/
5 targets, one CSS rule each, no HTML edits. Only the taught selectors (element, .class, #id, grouping, descendant, .a.b, :hover).
Model answers (solution/css/style.css): p { color: grey; } · .veg { background: #dff3dc; } · #todays-special { font-weight: bold; font-size: 1.5rem; } · nav a { text-decoration: none; } · .dish.spicy { border: 2px solid red; }
IF BEHIND: D2-09 is the first cut (moves to homework).
FAST FINISHER: D2-FF3 Specificity duel — W2D2/classwork/fast-finishers/D2-FF3-specificity-duel/ (8 puzzles: predict the colour, then check in DevTools; solution/ANSWERS.md).` });

// ================================================================= B6 Colours, units, fonts (slides 32-36)
s = D.slide('Paint shop: named / hex / rgb / rgba', 'palette', { notes: `SLIDE 32 — ANALOGY 1: THE PAINT SHOP (B6, 2:06) — demo W2D2/instructor-demos/B6-colors-units/step-01-colors
At a paint shop you can ask for a colour four ways:
1. By name: "maroon" — easy, but only about 140 names.
2. By hex code: #990011 — # then 6 digits from 0-9 and a-f (red, green, blue). Exactly 6 (or 3). #gg0000 is invalid (D2-10 bug 2), #fffff (5 digits) is invalid.
3. rgb(153, 0, 17) — three numbers 0-255. All three are needed.
4. rgba(153, 0, 17, 0.5) — the a = how see-through (0 = invisible, 1 = solid).
The swatches on the slide are TSI colours.` });
box(s, { x: 0.6, y: 1.35, w: 2.05, h: 1.25, text: 'maroon\nnavy\nwhite', font: F.code, size: 13, fill: T.CARD });
label(s, { x: 0.6, y: 2.68, w: 2.05, text: 'about 140 names', font: F.code, size: 12, bold: true, color: T.NAVY });
label(s, { x: 0.6, y: 2.98, w: 2.05, text: 'named', color: T.BODY });
[['#990011', 'hex', T.CHERRY, 0], ['rgb(20, 33, 61)', 'rgb', T.NAVY, 0], ['rgba(20,33,61,0.5)', 'rgba = see-through', T.NAVY, 50]].forEach(([code, kind, color, tr], i) => {
  const x = 0.6 + (i + 1) * 2.25;
  s.addShape('roundRect', { x, y: 1.35, w: 2.05, h: 1.25, rectRadius: 0.08, fill: { color, ...(tr ? { transparency: tr } : {}) }, line: noLine });
  label(s, { x, y: 2.68, w: 2.05, text: code, font: F.code, size: 12, bold: true, color: T.NAVY });
  label(s, { x, y: 2.98, w: 2.05, text: kind, color: T.BODY });
});
D.table(s, {
  y: 3.4, rowH: 0.36, colW: [2.2, 6.7],
  head: ['Way', 'Rule'],
  rows: [['hex', '# + exactly 6 (or 3) of 0–9 and a–f.   #gg0000 and #fffff are invalid'], ['rgb / rgba', 'three numbers 0–255 (+ alpha 0–1). rgb(255, 200) is missing one']],
});

s = D.slide('Measuring tape: px / % / rem / em', 'target', { notes: `SLIDE 33 — ANALOGY 2: THE MEASURING TAPE — demo W2D2/instructor-demos/B6-colors-units/step-02-units
Every size needs a unit, like a measuring tape: "300" alone means nothing. 300 what? (D2-10 bug 1: width: 300;)
- px = fixed pixels. Good for borders.
- % = a part of the parent box. width: 50% = half the parent.
- rem = times the ROOT font size (usually 16px). 2rem = 32px. Use rem for font sizes: it respects the user's settings.
- em = times THIS element's font size (for font-size itself: the parent's). Can grow by surprise when nested. rem is simpler: use rem.
No space between number and unit: 1.5rem, not 1.5 rem (bug 3).
The one exception: line-height is best WITHOUT a unit: line-height: 1.6 (bug 5).` });
[['px', 'fixed pixels', '1px = one dot on the screen', 1.2], ['%', 'part of the parent', 'width: 50% = half the box it sits in', 2.2], ['rem', 'x the root font (16px)', '2rem = 32px. Use for font sizes', 3.2], ['em', 'x this element\'s font', 'grows when nested: careful', 4.2]].forEach(([u, what, ex_, w], i) => {
  const y = 1.35 + i * 0.68;
  box(s, { x: 0.6, y, w: 0.9, h: 0.5, text: u, font: F.code, size: 16, fill: T.NAVY, ink: T.WHITE, line: null });
  s.addShape('rect', { x: 1.65, y: y + 0.12, w, h: 0.26, fill: { color: i === 2 ? T.CHERRY : T.KICK }, line: noLine });
  label(s, { x: 1.65 + w + 0.15, y: y + 0.02, w: 6.5 - w, h: 0.25, text: what, bold: true, color: T.NAVY, align: 'left' });
  label(s, { x: 1.65 + w + 0.15, y: y + 0.26, w: 6.5 - w, h: 0.25, text: ex_, color: T.BODY, align: 'left', size: 11.5 });
});
D.callout(s, { y: 4.2, h: 0.85, lead: 'Every size needs a unit, with no space:', body: 'width: 300px; font-size: 1.5rem;   The exception: line-height: 1.6 (no unit, it means 1.6 × the font size).' });

s = D.slide('Fonts and text: stacks, line-height, text-align', 'edit', { notes: `SLIDE 34 — FONTS AND TEXT — demo W2D2/instructor-demos/B6-colors-units/step-03-fonts-text
Read the code:
- font-family is a STACK: try "Momo Sans"; if this laptop does not have it, try Arial; if not, any sans-serif. Always end with a generic family (sans-serif or serif). "Momo Sans" does not exist anywhere: without a fallback, the browser falls back to Times (D2-10 bug 4).
- font-size in rem, font-weight: bold (or 700), line-height: 1.6 for easy reading.
- text-align: center, text-decoration: none (remove link underlines), letter-spacing for headings.
Theme the canteen menu in D2-11 with exactly these properties.` });
D.codeBox(s, { x: 0.6, y: 1.3, w: 5.6, h: 3.0, title: 'css/style.css', fontSize: 12, lines: [
  'body {',
  '  font-family: "Momo Sans", Arial, sans-serif;',
  '  font-size: 1rem;',
  '  line-height: 1.6;',
  '}',
  'h1 {',
  '  font-weight: bold;',
  '  text-align: center;',
  '  letter-spacing: 2px;',
  '}',
  'a { text-decoration: none; }',
] });
D.cardText(s, { x: 6.4, y: 1.3, w: 3.0, h: 3.0, head: 'A font stack', body: 'Try the first font.\nNot installed? Try the next.\nAlways end with a family: sans-serif or serif.\n\nNo fallback = Times New Roman.', pink: true });
D.callout(s, { y: 4.5, h: 0.6, lead: 'line-height: 1.6', body: 'has no unit on purpose. 1.5px would squash the lines on top of each other.' });

ex({
  id: 'D2-10', title: 'Units & colours', icon: 'wrench', min: 8, folder: 'D2-10-units-and-colours', bugs: 5,
  items: ['Open index.html: the canteen price page', 'Inspect each element → Styles panel', 'Look for yellow triangles (invalid values)', 'Check every number has a unit (with no space)', 'Check the font and the line spacing'],
  done: 'The box has its width.\nThe heading is red.\nThe price is big.\nThe font is Arial, not Times.\nLines do not overlap.',
  notes: `SLIDE 35 — ACTIVITY D2-10 Units & colours (8 min, solo) — W2D2/classwork/D2-10-units-and-colours/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. width: 300; no unit — V. Fix: 300px.
2. color: #gg0000; invalid hex — V. Fix: a real hex, e.g. #cc0000.
3. font-size: 1.5 rem; (space) — V. Fix: 1.5rem.
4. font-family: "Momo Sans"; (a font that does not exist) with no fallback, so it falls back to Times — V. Fix: "Momo Sans", Arial, sans-serif.
5. line-height: 1.5px; makes lines overlap — V. Fix: 1.5.
Teaching move: the Styles panel shows a yellow triangle on 1, 2 and 3 — "the browser drops an invalid declaration and says nothing".` });

ex({
  id: 'D2-11', title: 'Theme the canteen menu', icon: 'palette', min: 5, folder: 'D2-11-theme-the-canteen-menu',
  items: ['Open index.html + css/style.css', 'Use the 3 hex colours given in the README', 'A font stack with a fallback', 'Sizes in rem', 'line-height: 1.6 on the body'],
  done: 'The menu uses the 3 colours, a font stack, rem sizes and line-height 1.6.\n\nNo yellow triangles in the Styles panel.',
  lead: 'Copy the hex codes exactly.', body: '# + 6 characters. One wrong letter and the colour is dropped.',
  notes: `SLIDE 36 — ACTIVITY D2-11 Theme the canteen menu (5 min, solo, modify) — W2D2/classwork/D2-11-theme-the-canteen-menu/
Apply a given 3-colour hex palette (in the README), a font stack with a fallback, rem sizes and line-height: 1.6 to the canteen menu.
IF BEHIND: D2-11 is the second cut (moves to homework, after D2-09).
Answer: solution/css/style.css.` });

// ================================================================= Break 2 (slide 37)
D.breakSlide({ minutes: 10, sub: 'Teaser: everything on a web page is a box being shipped.', notes: `SLIDE 37 — BREAK (2:25 – 2:35)
Teaser: "Everything on a web page is a box being shipped."
Before the restart, open W2D2/instructor-demos/B7-box-model/step-01-content-width in Live Server, with F12 open on the Computed tab.` });

// ================================================================= B7 Box model (slides 38-43)
s = D.slide('Everything is a box being shipped', 'box', { notes: `SLIDE 38 — ANALOGY: BOXES BEING SHIPPED (B7, 2:35)
Every element on a page is a parcel:
- content = the item inside (the text, the picture).
- padding = the bubble wrap around the item, INSIDE the box. It takes the background colour.
- border = the cardboard.
- margin = the gap between two parcels on the shelf. Always transparent.
DevTools: Inspect → Computed tab → the box diagram shows all four with their sizes. Hover each layer and Chrome highlights it on the page.
Code-along next: W2D2/instructor-demos/B7-box-model/ (step-01-content-width to step-04-border-box-radius).` });
const BX = 0.9, BYY = 1.35;
s.addShape('rect', { x: BX, y: BYY, w: 5.0, h: 3.3, fill: { color: T.WHITE }, line: { color: T.FOOT, width: 1.25, dashType: 'dash' } });
s.addShape('rect', { x: BX + 0.5, y: BYY + 0.45, w: 4.0, h: 2.4, fill: { color: T.NAVY }, line: noLine });
s.addShape('rect', { x: BX + 0.68, y: BYY + 0.63, w: 3.64, h: 2.04, fill: { color: T.PINK }, line: noLine });
box(s, { x: BX + 1.35, y: BYY + 1.2, w: 2.3, h: 0.9, text: 'content\nthe item', fill: T.CARD, line: T.FOOT });
label(s, { x: BX, y: BYY + 0.08, w: 5.0, text: 'margin = the gap between parcels', bold: true, color: T.NAVY, size: 12 });
label(s, { x: BX + 0.68, y: BYY + 0.7, w: 3.64, text: 'padding = the bubble wrap', bold: true, color: T.CHERRY, size: 12 });
label(s, { x: BX + 0.5, y: BYY + 2.88, w: 4.0, text: 'border = the cardboard', bold: true, color: T.NAVY, size: 12 });
D.cardText(s, { x: 6.2, y: 1.35, w: 3.2, h: 3.3, head: 'Inside → out', body: 'content: the item\npadding: bubble wrap (inside, takes the background)\nborder: the cardboard\nmargin: the gap to the next parcel (always clear)', pink: true });
D.callout(s, { y: 4.85, h: 0.45, lead: 'See it:', body: 'Inspect → Computed → the box diagram shows all four sizes.' });

along('Box model shorthand', 'code', {
  min: 3, folder: 'B7-box-model/  (steps 01–04)', title: 'css/style.css',
  lines: [
    '.card {',
    '  width: 300px;',
    '  padding: 20px;               /* all 4 sides */',
    '  padding: 10px 20px;          /* top+bottom  left+right */',
    '  padding: 10px 20px 5px 0;    /* top right bottom left */',
    '  border: 2px solid #990011;   /* width style colour */',
    '  margin: 0 auto;              /* centre: needs a width */',
    '  border-radius: 12px;',
    '}',
  ],
  fontSize: 11.5,
  callout: { lead: '4 values go clockwise from the top:', body: 'top, right, bottom, left (TRouBLe). margin: 0 auto only centres a box that has a width.' },
  notes: `SLIDE 39 — CODE-ALONG: BOX MODEL (3 min) — W2D2/instructor-demos/B7-box-model/step-01-content-width, step-02-padding-border, step-03-margin-center, step-04-border-box-radius
Type step by step on the card with Sunita's avatar (images/avatar-sunita.svg):
step-01: width: 300px.
step-02: padding (1, 2, then 4 values) and border. Border shorthand = width style colour; the STYLE (solid) is required, without it there is no border (D2-12 bug 4).
step-03: margin: 0 auto — centres the card. It needs a width (D2-12 bug 2).
step-04: box-sizing: border-box and border-radius (next slide).
Memory trick for 4 values: clockwise from the top. TRouBLe = Top Right Bottom Left.
Negative padding is invalid (D2-12 bug 3).` });

s = D.slide('The width trap: content-box vs border-box', 'box', { notes: `SLIDE 40 — THE WIDTH TRAP
By default (content-box), width is ONLY the content. Padding and border are ADDED on the outside.
.card { width: 300px; padding: 20px; border: 5px solid; } → real width = 300 + 20 + 20 + 5 + 5 = 350px.
Three cards × 350 = 1050px, but the row is 960px → the third card wraps (D2-12 bug 1).
Fix: box-sizing: border-box → width now INCLUDES padding and border. 300px means 300px.
Many developers put this at the top of every stylesheet: * { box-sizing: border-box; }
Round avatar: border-radius: 50% only makes a CIRCLE on a SQUARE image (equal width and height). 120×80 gives an oval (D2-12 bug 5).` });
D.compare(s, {
  h: 2.3,
  bad: { head: 'content-box (default): adds up', lines: ['width: 300px;', 'padding: 20px;', 'border: 5px solid;', '', 'real width = 300+40+10 = 350px'] },
  good: { head: 'border-box: what you say', lines: ['box-sizing: border-box;', 'width: 300px;', 'padding: 20px; border: 5px solid;', '', 'real width = 300px'] },
});
D.codeBox(s, { y: 3.75, h: 0.8, title: 'top of css/style.css', fontSize: 12, lines: ['* { box-sizing: border-box; }   /* many developers start with this */'] });
D.callout(s, { y: 4.7, h: 0.5, lead: 'Round avatar:', body: 'border-radius: 50% gives a circle only when width = height.' });

ex({
  id: 'D2-12', title: 'Broken cards', icon: 'wrench', min: 8, folder: 'D2-12-broken-cards', bugs: 5,
  items: ['Open index.html: 3 student cards', 'Why does the third card wrap?', 'Is the wrapper in the middle?', 'Inspect → Computed: check every box', 'Look at the borders and the avatars'],
  done: '3 cards in one row.\nThe wrapper is centred.\nEvery card has padding and a visible border.\nThe avatars are round circles.',
  notes: `SLIDE 41 — ACTIVITY D2-12 Broken cards (8 min, solo) — W2D2/classwork/D2-12-broken-cards/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. Three .card { display: inline-block; width: 300px; padding: 20px; border: 5px solid …; } inside .row { width: 960px; } add up to 350px each, so the third card wraps — V. Fix: box-sizing: border-box. (The starter sets inline-block; students do not touch display until B8.)
2. .wrapper { margin: 0 auto; background: #fdf6ec; } with no width/max-width, so it never centres — V. Fix: add max-width (e.g. 1000px).
3. padding: -10px; (negative padding is invalid) — V. Fix: a positive value.
4. border: 2px orange; with no style, so there is no border — V. Fix: 2px solid orange.
5. Avatar border-radius: 50% on a 120×80 image makes an oval — V. Fix: equal width and height (e.g. 120×120).
Teaching move: open Computed and show 350px for bug 1.` });

ex({
  id: 'D2-13', title: 'Profile card', icon: 'users', min: 7, folder: 'D2-13-profile-card',
  items: ['Open index.html + the empty css/style.css', 'A card with a width, padding and a border', 'border-radius + box-sizing: border-box', 'Centre it with margin: 0 auto', "Make Sunita's avatar a round circle"],
  done: 'A centred card with padding, a border and round corners.\n\nThe avatar is a circle.\n\nComputed shows the width you wrote.',
  lead: 'Show & tell next:', body: '2–3 cards go on the projector. Be ready to explain one rule.',
  notes: `SLIDE 42 — ACTIVITY D2-13 Profile card (7 min, solo, build) — W2D2/classwork/D2-13-profile-card/
A centred card: width, padding, border, border-radius, round avatar (images/avatar-sunita.svg), box-sizing: border-box.
Watch for: margin: 0 auto with no width (it does not centre); a border with no style.
Answer: solution/css/style.css.
FAST FINISHER: D2-FF1 TSI ID card — W2D2/classwork/fast-finishers/D2-FF1-tsi-id-card/ (recreate the ID card in target.svg: 360×220, padding 16px, 2px navy border, radius 12px, 80px round avatar).` });

s = D.activity('D2-13  ·  Show & tell', 'users', { brief: '3 minutes  ·  2–3 volunteers  ·  your profile card on the projector', notes: `SLIDE 43 — ACTIVITY: SHOW & TELL (3 min) — D2-13 profile card
Pick 2-3 students. Open their card on the projector. Ask each one: "Right-click → Inspect → Computed: what is the real width?" and "Which rule makes the avatar round?"
Praise one specific rule each. Code gets shown, not hidden.` });
D.punchline(s, { y: 1.65, h: 1.3, text: 'Code gets shown, not hidden.' });
D.cards(s, [
  { head: 'Show', body: 'Your card in Live Server on the big screen.' },
  { head: 'Inspect', body: 'Computed tab: read the real width aloud.', pink: true },
  { head: 'Explain', body: 'Point at the rule that makes the avatar round.' },
], { y: 3.15, h: 1.35 });

// ================================================================= B8 Display (slides 44-45)
s = D.activity('Display: the queue vs the bench', 'layout', { brief: 'Code-along  ·  3 min  ·  type with me  ·  W2D2/instructor-demos/B8-display/  (steps 01–02)', notes: `SLIDE 44 — CODE-ALONG: THE QUEUE vs THE BENCH (B8, 3:03) — W2D2/instructor-demos/B8-display/step-01-block-inline, step-02-horizontal-nav
Analogy:
- block = the queue: each person on their own line, as wide as the room (div, p, h1, li, section).
- inline = sitting side by side on a bench: only as wide as the words, and you cannot push them up or down (vertical margin is ignored; vertical padding overlaps the neighbours) (a, span, strong).
- inline-block = side by side on the bench, but each keeps its own size (width, height, padding and margin all work).
- none = left the room: no space kept. visibility: hidden = still sitting there, just invisible: the gap stays.
step-02: the horizontal nav. Type together:
  .menu { list-style: none; padding: 0; }
  .menu li { display: inline-block; }
  .menu a { display: inline-block; padding: 12px 16px; }` });
[['block', 'the queue: each on its own line', 0], ['inline', 'the bench: side by side, no up / down push', 1], ['inline-block', 'the bench, but each keeps its own size', 2], ['none', 'left the room: no gap left', 3]].forEach(([d, what, i]) => {
  const y = 1.6 + i * 0.62;
  box(s, { x: 0.6, y, w: 1.7, h: 0.5, text: d, font: F.code, size: 13, fill: i === 2 ? T.CHERRY : T.NAVY, ink: T.WHITE, line: null });
  label(s, { x: 2.45, y: y + 0.1, w: 3.2, text: what, bold: true, color: T.NAVY, align: 'left', size: 12 });
});
D.codeBox(s, { x: 5.8, y: 1.6, w: 3.6, h: 2.4, title: 'css/style.css', fontSize: 11.5, lines: ['.menu {', '  list-style: none;', '  padding: 0;', '}', '.menu li {', '  display: inline-block;', '}'] });
D.callout(s, { y: 4.3, h: 0.75, lead: 'display: none vs visibility: hidden:', body: 'none = gone, no gap. hidden = invisible, but the gap stays. Inline boxes ignore margin-top.' });

ex({
  id: 'D2-14', title: "Nav won't behave", icon: 'wrench', min: 8, folder: 'D2-14-nav-wont-behave', bugs: 5,
  items: ['Open index.html: the Momo House header', 'Where is the logo?', 'Why are there bullets? Why is it a column?', 'Inspect a nav link: padding and margin-top?', 'Compare every class name with the HTML'],
  done: 'The logo shows.\n\nThe nav is ONE row, no bullets.\n\nThe links have clean padding and do not overlap the hero.',
  notes: `SLIDE 45 — ACTIVITY D2-14 Nav won't behave (8 min, solo) — W2D2/classwork/D2-14-nav-wont-behave/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. display: blok; typo on .order-button (an <a> meant to be a 200px block) — V: it stays a small inline link. Fix: display: block.
2. .logo { display: none; } left in by mistake — V. Fix: remove it.
3. list-style: none missing, so bullets show — V (visible only while bug 5 is there: mend 3 and 5 together). Fix: add list-style: none.
4. Nav links are display: inline with padding: 12px 16px; margin-top: 20px; — the vertical padding overlaps the hero and the margin-top does nothing (inline boxes ignore vertical margin) — V. Fix: display: inline-block.
5. CSS .menu-li { display: inline-block; }, but the HTML is <ul class="menu"><li> — V. Fix: .menu li.
FAST FINISHER: D2-FF2 Hover menu — W2D2/classwork/fast-finishers/D2-FF2-hover-menu/ (the Momo House nav changes colour / background / underline on :hover).` });

// ================================================================= B9 Mini-site build (slide 46)
s = D.activity('D2-15  ·  Style Momo House', 'rocket', { brief: `28 minutes  ·  solo  ·  ${CW}D2-15-style-momo-house/  ·  one css/style.css for 4 pages`, notes: `SLIDE 46 — ACTIVITY D2-15 Style Momo House (28 min, solo, build; 2 min rules) — W2D2/classwork/D2-15-style-momo-house/
Story: "Opening night: dress the restaurant." School uniform = ONE css/style.css linked from all 4 pages (index, menu, order, about).
The starter css/style.css is empty with 5 checkpoint comments. Instructor demo backup (if the room is stuck at a checkpoint): W2D2/instructor-demos/B9-mini-site/step-01-link-and-base, step-02-header-nav, step-03-hero, step-04-menu-table-cards, step-05-footer-polish.
CHECKPOINTS — check the room at each one (walk the rows, look at screens):
CP1 (≈0:06) the <link> on all 4 pages + body font and background.
CP2 (≈0:12) header + horizontal nav (list-style none, inline-block).
CP3 (≈0:18) hero banner (images/hero-momo.svg) + h1.
CP4 (≈0:24) menu table + 3 dish cards (box model: padding, border, border-radius, border-box).
CP5 (≈0:28) footer + :hover on links.
Watch for: the link missing on one page (click through all 4 pages!); styling with inline style="" instead of the stylesheet.
Never cut this block. Students who finish: D2-FF6 or polish.` });
D.table(s, {
  y: 1.6, colW: [0.9, 1.0, 7.0], rowH: 0.45,
  head: ['CP', 'by', 'Your page has…'],
  rows: [
    ['1', '0:06', 'the <link> on ALL 4 pages + body font and background'],
    ['2', '0:12', 'a header + a horizontal nav (no bullets, inline-block)'],
    ['3', '0:18', 'a hero banner (images/hero-momo.svg) + the h1'],
    ['4', '0:24', 'the menu table + 3 dish cards (padding, border, radius)'],
    ['5', '0:28', 'a footer + :hover on the links'],
  ],
});
D.callout(s, { y: 4.55, h: 0.65, lead: 'DONE looks like: all 4 pages wear the same uniform.', body: 'Click through index, menu, order, about. One file, css/style.css, dresses them all.' });

// ================================================================= B10 Bootstrap teaser + wrap-up (slides 47-49)
s = D.slide('Bootstrap = IKEA for websites', 'box', { notes: `SLIDE 47 — BOOTSTRAP TEASER (instructor demo, 4 min) — W2D2/instructor-demos/B10-bootstrap/step-01-plain → step-02-bootstrap
Analogy: IKEA furniture. Hand-written CSS = raw wood: you saw and sand every piece, you understand every joint. Bootstrap = ready-made parts with names: you put class="btn btn-primary" on a button and it is styled.
Demo: step-01-plain is plain HTML. In step-02-bootstrap, add <link rel="stylesheet" href="css/bootstrap.min.css"> (a LOCAL copy, works offline) and the classes container, btn btn-primary, card. The page changes completely.
Say: "Bootstrap is fast, but you only understand it if you can write the CSS yourself. That is why we learned the raw wood first. Bootstrap deep-dive comes later."
Students try it in D2-FF6 Bootstrap try-it — W2D2/classwork/fast-finishers/D2-FF6-bootstrap-try-it/ — or at home.` });
D.cardText(s, { x: 0.6, y: 1.3, w: 3.9, h: 0.95, head: 'Raw wood = your CSS', body: 'You cut every piece. Slow, but you understand every joint.' });
D.cardText(s, { x: 0.6, y: 2.35, w: 3.9, h: 0.95, head: 'IKEA = Bootstrap', body: 'Ready-made parts with names. Fast. Looks like many other sites.', pink: true });
D.cardText(s, { x: 0.6, y: 3.4, w: 3.9, h: 0.85, head: 'Try it later', body: 'D2-FF6 Bootstrap try-it, or at home.' });
D.codeBox(s, { x: 4.7, y: 1.3, w: 4.7, h: 2.95, title: 'step-02-bootstrap/index.html', fontSize: 11.5, lines: [
  '<div class="container">',
  '  <div class="card">',
  '    <div class="card-body">',
  '      <h2>Steam momo</h2>',
  '      <button class="btn btn-primary">',
  '        Order',
  '      </button>',
  '    </div>',
  '  </div>',
  '</div>',
] });
D.callout(s, { y: 4.45, h: 0.6, lead: 'Local copy:', body: '<link rel="stylesheet" href="css/bootstrap.min.css"> (5.3.3) works with no internet.' });

s = D.activity('Rapid quiz: 10 questions, Kahoot-style', 'award', { brief: '5 minutes  ·  everyone  ·  30 seconds each  ·  Kahoot or hands up A / B / C / D', notes: `SLIDE 48 — QUIZ (5 min). Kahoot if Wi-Fi; otherwise read each question and the class shows A/B/C/D with fingers (1-4).
1. How many <main> elements on one page? A) one B) two C) any D) none → A
2. A decorative picture should have… A) no alt B) alt="" C) alt="image" D) a long alt → B
3. Which tag for a clickable "Subscribe"? A) <div class="btn"> B) <span> C) <button> D) <a> with no href → C
4. A <video> with no controls… A) plays by itself B) shows no play button C) is invalid D) has sound → B
5. Which line links an external stylesheet? A) <style src="style.css"> B) <link rel="stylesheet" href="css/style.css"> C) <css href="style.css"> D) <script src="style.css"> → B
6. .card .spicy (with a space) selects… A) one element with both classes B) a .spicy inside a .card C) both D) nothing → B
7. Which selector wins? A) p B) .note C) #special D) the first one → C
8. Which value is valid? A) width: 300 B) font-size: 1.5 rem C) color: #gg0000 D) line-height: 1.6 → D
9. width 300px + padding 20px + border 5px (content-box) = real width? A) 300 B) 325 C) 350 D) 345 → C
10. Inline links ignore… A) colour B) margin-top C) font-size D) text-decoration → B
STRETCH NOTE: if a stretch was taken after B3, cut to 7 questions (drop 4, 8, 10).` });
D.cards(s, [
  { head: 'Kahoot (Wi-Fi)', body: 'Join on your phone. 30 seconds per question.' },
  { head: 'No Wi-Fi', body: 'I read the question. Show 1 – 4 fingers for A – D.', pink: true },
  { head: 'Topics', body: 'main, alt, button, video, link, selectors, who wins, units, box model, display.' },
], { y: 1.65, h: 1.75 });
D.punchline(s, { y: 3.6, h: 0.9, fontSize: 20, text: 'Wrong answers are welcome. We fix them together.' });

s = D.activity('Homework + exit ticket', 'book', { brief: 'Exit ticket  ·  1 minute  ·  everyone  ·  on paper or in chat', notes: `SLIDE 49 — HOMEWORK + EXIT TICKET (2 min) + "Next: CSS deeper"
Homework sheet: W2D2/homework/W2D2-Homework-Sheet.md (core about 2.5 h; HW1 and HW3 are the must-do (1 h), HW2 if you can):
- D2-HW1 Haunted portfolio repair (12 bugs, 40 min, must-do): Rajan's 2-page portfolio. Fix the <link> first.
- D2-HW2 Style your portfolio (build, about 1.5 h, if you can): your Week 1 About Me (or D1-10) page → semantic, accessible, one external CSS. CHECKLIST.md has 12 required items (Lighthouse a11y ≥ 90).
- D2-HW3 Self-check & interview prep (20 min, must-do).
- D2-HW4 Patan Craft Shop replay (stretch, optional, +30 min, 10 bugs).
Exit ticket: 1) One CSS bug you fixed today and how you found it (Styles panel? Computed?). 2) One thing that is still confusing.
Close: "Two days ago your page was plain text. Now it has a skeleton, names, and an outfit. Next session: CSS deeper — flexbox and layout, so boxes sit side by side the modern way."` });
D.table(s, {
  y: 1.6, colW: [1.4, 4.9, 1.2, 1.4], rowH: 0.44,
  head: ['Id', 'Task  ·  about 2.5 h: MUST-DO first (1 h), HW2 if you can', 'Type', 'Time'],
  rows: [
    ['D2-HW1', "MUST-DO · Haunted portfolio repair (fix the <link> first)", 'bug-hunt 12', '40 min'],
    ['D2-HW2', 'If you can · Style your portfolio: CHECKLIST.md, 12 items', 'build', 'about 1.5 h'],
    ['D2-HW3', 'MUST-DO · Self-check & interview prep', 'questions', '20 min'],
    ['D2-HW4', 'Patan Craft Shop replay (stretch, optional)', 'bug-hunt 10', '+30 min'],
  ],
});
D.callout(s, { y: 3.95, h: 0.62, tone: 'pink', lead: 'Exit ticket:', body: '1) One CSS bug you fixed today and how you found it.  2) One thing that is still confusing.' });
D.navyBar(s, { y: 4.72, h: 0.5, text: 'Next: CSS deeper. Flexbox and layout: boxes side by side, the modern way.' });

(async () => {
  const out = path.join(__dirname, '..', 'TSI-W2D2-Semantic-HTML-and-CSS-Deck.pptx');
  const r = await D.save(out, { strict: true });
  console.log(`${path.basename(out)}: ${r.slides} slides, ${r.activities} tagged, warnings: ${r.warnings.length}`);
  if (r.placeholders.length) console.log('screenshots to capture:', JSON.stringify(r.placeholders));
})().catch((e) => { console.error(e.message); process.exit(1); });
