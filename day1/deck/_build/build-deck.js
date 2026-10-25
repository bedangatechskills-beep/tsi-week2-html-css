// W2D1 deck — "How the Web Works + HTML Core: Build It, Break It, Fix It" (PLAN.md §5.1, 53 slides)
// Build:  set NODE_PATH to a folder with pptxgenjs installed (npm i pptxgenjs), then
//         node build-deck.js            -> ../TSI-W2D1-HTML-Core-Deck.pptx
// Theme:  tsi-deck-theme-v2 (never type a hex or a font here; use D.T / D.F / D.Z)
const path = require('path');
const os = require('os');
const SKILL = process.env.TSI_THEME_DIR || path.join(os.homedir(), '.claude', 'skills', 'tsi-deck-theme-v2');
const { createDeck } = require(path.join(SKILL, 'deck-helpers'));
const SHOTS = path.join(__dirname, 'shots');   // real browser renders (made by render-shots.js), optional
const fs = require('fs');
const shot = (name) => { const p = path.join(SHOTS, name); return fs.existsSync(p) ? p : undefined; };

const D = createDeck({ title: 'W2D1 — How the Web Works + HTML Core' });
const { T, F, Z } = D;
const noLine = { type: 'none' };
const CW = 'W2D1/classwork/';
const DEMO = 'W2D1/instructor-demos/';

// ---------------------------------------------------------------- local helpers (theme helpers only, no new colours)
// Exercise slide: id + title, time box + mode + folder in the brief, steps, DONE card, bug-count callout.
function ex({ id, title, icon, min, mode = 'solo', folder, items, done, bugs, lead, body, notes, gap = 0.5 }) {
  const s = D.activity(`${id}  ·  ${title}`, icon, { brief: `${min} minutes  ·  ${mode}  ·  ${CW}${folder}/`, notes });
  D.steps(s, { items, gap, w: 5.5 });
  D.doneCard(s, { body: done, h: 2.55 });
  if (bugs) D.callout(s, { lead: `${bugs} bugs. Find at least ${bugs - 2}.`, body: body || 'Then the reveal: solution/BUGS.md on the projector. Write your score line in the README.' });
  else if (lead) D.callout(s, { lead, body });
  return s;
}
// Code-along slide (students type with the instructor) -> tagged, points at the demo step folder.
function along(titleText, icon, { min, folder, title: fn, lines, side, sideHead, callout, fontSize = 12, notes, w }) {
  const s = D.activity(titleText, icon, { brief: `Code-along  ·  ${min} min  ·  type with me  ·  ${DEMO}${folder}`, notes });
  const cw = side ? (w || 5.5) : 8.8;
  const maxH = callout ? 2.95 : 3.5;
  const h = Math.min(maxH, Math.max(1.4, 0.62 + lines.length * fontSize * 1.28 / 72));
  D.codeBox(s, { x: 0.6, y: 1.6, w: cw, h, title: fn, lines, fontSize });
  s._codeBottom = 1.6 + h;
  if (side) D.cardText(s, { x: 0.6 + cw + 0.2, y: 1.6, w: 8.8 - cw - 0.2, h: Math.max(h, 2.2), head: sideHead || 'Look at', body: side, pink: true });
  if (callout) D.callout(s, { y: 4.68, ...callout });
  return s;
}
// little labelled box (anatomy / folder diagrams)
function box(s, { x, y, w, h, text, fill = T.CARD, ink = T.NAVY, font = F.body, size = Z.body, bold = true, line = T.FOOT, align = 'center', dash }) {
  s.addText(text, { shape: 'roundRect', rectRadius: 0.06, x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 1.25, ...(dash ? { dashType: 'dash' } : {}) } : noLine, fontFace: font, fontSize: size, bold, color: ink, align, valign: 'middle', margin: 4 });
}
function label(s, { x, y, w, h = 0.3, text, color = T.BODY, size = Z.cardBody, bold = false, align = 'center', italic = false, font = F.body }) {
  s.addText(text, { x, y, w, h, fontFace: font, fontSize: size, bold, italic, color, align, valign: 'middle', margin: 0 });
}
function arrow(s, { x, y, w = 0.4, h = 0.22, rotate = 0 }) {
  s.addShape('rightArrow', { x, y, w, h, rotate, fill: { color: T.KICK }, line: noLine });
}

// ================================================================= B0 Welcome & setup check (slides 1-5)
D.title({
  kicker: 'Week 2  ·  Day 1  ·  4 hours',
  title: 'How the Web Works\n+ HTML Core',
  sub: 'Build it, break it, fix it. Today you are the repair crew.',
  pill: 'Today: 42 broken things to mend',
  notes: `SLIDE 1 — TITLE (0:00)
Say: "Namaste! Welcome to Week 2. Last week you built a tiny About Me page. Today we go deep into HTML."
Say: "Today is very hands-on. I will show you, then YOU type. Many pages today are broken on purpose. Your job is to mend them."
Point at the pill: "In class today there are 42 planted bugs across 7 bug-hunts. By 4:00 you will have fixed most of them."
The One Rule comes on slide 3. Keep this slide short, about 30 seconds.`,
});

let s = D.slide("Today's Roadmap", 'clock', { notes: `SLIDE 2 — ROADMAP
Read the day quickly, not every line. Two breaks: 1:28 and 2:49.
Say: "Every block has the same rhythm: I show for a few minutes, you type with me, then you fix a broken page, then we reveal the answers together."
Say: "Around 3:27 you work in pairs on the big one: Didi's Momo House website. It broke the night before opening."
If the room is behind at any point, the cut list is in the instructor guide: D1-08 and D1-12 go to homework first. D1-15 is never cut.` });
D.agenda(s, [
  { time: '0:00', name: 'Welcome, setup, How the web works', min: '25 min' },
  { time: '0:25', name: 'VS Code power tools + Emmet', min: '10 min' },
  { time: '0:35', name: 'Skeleton, nesting + spell-checker', min: '30 min' },
  { time: '1:05', name: 'Text tags + entities  ·  Break', min: '33 min', isBreak: false },
  { time: '1:38', name: 'Lists, then Links, paths + images', min: '49 min' },
  { time: '2:27', name: 'Tables  ·  Break', min: '32 min' },
  { time: '2:59', name: 'Forms', min: '28 min' },
  { time: '3:27', name: 'Momo House relay, validate, quiz', min: '33 min' },
]);
D.callout(s, { y: 5.0, h: 0.42, lead: 'Breaks:', body: '1:28 – 1:38 and 2:49 – 2:59 (10 min each).', tone: 'pink' });

s = D.slide('The One Rule + how today works', 'target', { notes: `SLIDE 3 — THE ONE RULE
Read the rule aloud, slowly: "You may only ship code you can explain, line by line."
Say: "AI is your tutor this week. You can ask it to explain an error. But YOU type every line. If you cannot explain a line, it does not go in."
Walk the four cards:
1. Code-along: you type with me. Not copy-paste. Typing is how your fingers learn.
2. Bug-hunts: every README says "There are N bugs. Find at least N minus 2." You do not need all of them.
3. Reveal: after every hunt, I open solution/BUGS.md on the projector and we go through every bug. No bug goes unexplained.
4. Fast finishers: classwork/fast-finishers/ has 6 extra challenges. Finished early? Go there, or help a neighbour (point, do not type for them).
Staged demos: if my live demo breaks, I open the next step folder. You can open the same folders.` });
D.cards(s, [
  { head: 'Code-along', body: 'I type, you type. Same lines, same time. No copy-paste.' },
  { head: 'Bug-hunts', body: '"There are N bugs. Find at least N−2." Then the reveal: every bug explained.', pink: true },
  { head: 'Scoreboard line', body: 'I found __ / N. The reveal taught me: ______' },
  { head: 'Fast finishers', body: 'classwork/fast-finishers/ has 6 extra challenges. Or help a neighbour.' },
], { h: 1.85 });
D.callout(s, { y: 3.32, h: 0.6, lead: 'Staged demos:', body: 'if my live demo breaks, I open the next step folder in instructor-demos/. So can you.' });
D.navyBar(s, { y: 4.15, h: 0.6, text: '"You may only ship code you can explain, line by line."' });

s = D.slide('No Live Server? Double-click + F5', 'monitor', { notes: `SLIDE 4 — FALLBACK (say this before D1-00 so nobody panics)
Say: "Live Server should be installed from home (START-HERE.md). If it is not there, do not stop. Do this instead."
Show it once: in File Explorer, double-click index.html. It opens in Chrome. Change something in VS Code, press Ctrl+S, go to Chrome, press F5.
Say: "Same result, one more key. We install Live Server together at the first break (1:28)."
Rule for the room: one install problem must not stop 20 people. Students with problems use the fallback and wave at the break.` });
D.cards(s, [
  { head: 'With Live Server', body: '1. Right-click index.html → Open with Live Server\n2. Save (Ctrl+S): the page reloads by itself\n3. The address starts with 127.0.0.1:5500' },
  { head: 'Without it (fallback)', body: '1. Double-click index.html in File Explorer\n2. Save (Ctrl+S) in VS Code\n3. Go to Chrome and press F5 to reload', pink: true },
], { h: 1.75 });
D.punchline(s, { y: 3.2, h: 0.75, fontSize: 20, text: 'Same page, one more key: F5.' });
D.callout(s, { y: 4.15, h: 0.6, lead: 'Do not wait for an install.', body: 'Use the fallback now. We install Live Server together at the 1:28 break.' });

ex({
  id: 'D1-00', title: 'Setup check', icon: 'wrench', min: 8, folder: 'D1-00-setup-check',
  items: ['File → Open Folder → choose W2D1', 'Open classwork/D1-00-setup-check/index.html', 'Right-click → Open with Live Server (or double-click + F5)', 'Change the <h1> to your own name. Save.', 'Press F12. Find your <h1> in Elements.'],
  done: 'The browser shows YOUR name in the big heading.\n\nF12 is open and you can see the <h1> in the Elements panel.',
  lead: 'Hands up when your name shows.', body: 'Stuck after 4 minutes? Use the double-click + F5 fallback.',
  notes: `SLIDE 5 — ACTIVITY D1-00 Setup check (8 min, solo) — W2D1/classwork/D1-00-setup-check/
Say: "Open the W2D1 folder. Not the zip. Not a single file. The whole folder." (File → Open Folder.)
Circulate. Most common problems:
- They opened the zip, not the unzipped folder → unzip first.
- They opened one file, not the folder → Live Server greys out. File → Open Folder.
- No "Open with Live Server" in the menu → extension missing → fallback (double-click + F5).
- The heading does not change → they did not save. Look for the white dot on the tab.
Checkpoint: hands up when your own name shows. Move on at about 80% of hands.` });

// ================================================================= B1 How the web works (slides 6-9)
s = D.activity('THINK: You press Enter. Then?', 'globe', { brief: 'Prediction  ·  1 minute  ·  shout out your guesses', notes: `SLIDE 6 — PREDICTION (B1 hook, 0:10)
Ask: "You type momohouse.com.np and press Enter. In 2 seconds a page appears. What happened in those 2 seconds?"
Let them shout guesses for 1 minute. Write 3-4 words on the board (e.g. "internet", "server", "Google", "WiFi").
Do not correct yet. Say: "Keep your guess. In 5 minutes we check it with the postal system."` });
D.punchline(s, { y: 1.75, h: 1.6, text: 'momohouse.com.np  ⏎\nWhat happens in the next 2 seconds?' });
D.cards(s, [
  { head: 'Guess 1', body: 'Who receives your request first?' },
  { head: 'Guess 2', body: 'How does your laptop find the right computer?' },
  { head: 'Guess 3', body: 'What comes back: one file or many?', pink: true },
], { y: 3.55, h: 1.25 });

s = D.slide('The Internet is a postal system', 'globe', { notes: `SLIDE 7 — ANALOGY: THE POSTAL SYSTEM (B1 teach, about 4 min)
Walk left to right:
1. Browser = YOU writing a letter. The letter says "please send me your home page".
2. DNS = the phone book. You know the NAME (momohouse.com.np). DNS gives you the ADDRESS.
3. IP address = the precise home address, like 104.21.45.10. Computers only use numbers.
4. Server = a warehouse. It finds the goods and mails them back.
5. Response = the parcel: HTML, CSS, images.
Say the line: "The internet is not magic. It is computers mailing text to each other."
Check their guesses from slide 6: who was close?` });
D.pipeline(s, {
  y: 1.45, h: 1.15,
  stations: [
    { label: 'Browser', sub: 'you write a letter: "send me the home page"' },
    { label: 'DNS', sub: 'the phone book: name → address' },
    { label: 'IP address', sub: 'the exact home address (numbers)' },
    { label: 'Server', sub: 'the warehouse finds the goods' },
    { label: 'Response', sub: 'the parcel comes back: HTML, CSS, images' },
  ], focus: 4,
});
D.navyBar(s, { y: 3.65, h: 0.6, text: 'The internet is not magic. It is computers mailing text to each other.' });
D.callout(s, { y: 4.45, h: 0.6, lead: 'HTTP request = the letter.', body: 'HTTP response = the parcel. Your browser opens the parcel and builds the page.' });

s = D.slide('A page is many parcels', 'box', { notes: `SLIDE 8 — A PAGE IS MANY PARCELS + RESTAURANT RECAP
Say: "One page is not one parcel. First the HTML parcel arrives. The browser reads it and finds it needs more: a CSS file and five pictures. So it sends more letters."
"On our parcel page you will count them: 1 HTML + 1 CSS + 5 SVG = 7 parcels."
Then the restaurant recap from Week 1: HTML = the ingredients and menu structure, CSS = the plating and decor, JS = the waiter who reacts to you.
STORY (web evolution, 1 min, only if time): the first website (1991) was only text and links. No CSS, no images. The Wayback Machine (web.archive.org) shows old versions of sites. Show it only if Wi-Fi works; it is not hands-on.` });
// the real 7 files of instructor-demos/B1-internet/step-01-parcel-page, in two rows
[['index.html', 'style.css', 'logo-momo-house.svg', 'momo.svg'], ['momo-plate.svg', 'thamel.svg', 'swayambhu.svg']].forEach((row, r) => {
  const ws = row.map((p) => 0.35 + p.length * 0.098), tot = ws.reduce((a, b) => a + b, 0) + 0.15 * (row.length - 1);
  let px = 0.6 + (8.8 - tot) / 2;
  row.forEach((p, j) => { const k = r * 4 + j; box(s, { x: px, y: 1.3 + r * 0.52, w: ws[j], h: 0.42, text: p, size: 12, fill: k === 0 ? T.NAVY : k === 1 ? T.PINK : T.CARD, ink: k === 0 ? T.WHITE : k === 1 ? T.CHERRY : T.NAVY, line: k === 0 ? null : T.FOOT, font: F.code }); px += ws[j] + 0.15; });
});
label(s, { x: 0.6, y: 2.33, w: 8.8, text: '1 HTML  +  1 CSS  +  5 SVG  =  7 parcels for ONE page  (you count them in D1-01)', bold: true, color: T.NAVY });
D.cards(s, [
  { head: 'HTML', body: 'The ingredients and the menu structure. WHAT is on the page.' },
  { head: 'CSS', body: 'The plating and the decor. How it LOOKS. (Day 2)', pink: true },
  { head: 'JavaScript', body: 'The waiter. What HAPPENS when you click. (Later.)' },
], { y: 2.75, h: 1.45 });
D.callout(s, { y: 4.4, h: 0.55, lead: 'The restaurant:', body: 'HTML = structure, CSS = style, JS = behaviour. Today is all HTML.' });

ex({
  id: 'D1-01', title: 'See the letters arrive', icon: 'search', min: 8, folder: 'D1-01-see-the-letters-arrive',
  items: ['Terminal: ping localhost (Wi-Fi: ping google.com)', 'Open index.html with Live Server', 'F12 → Network tab → press F5', 'Count the parcels. Write it in my-findings.md', 'Right-click → View Page Source → find the <h1>'],
  done: 'my-findings.md has:\n• your ping time\n• the parcel count (it should be 7)\n• the <h1> text and its line number in View Source',
  lead: 'No Wi-Fi?', body: 'ping localhost works offline. Wi-Fi bonus: open the Network tab on any real site.',
  notes: `SLIDE 9 — ACTIVITY D1-01 See the letters arrive (8 min, solo) — W2D1/classwork/D1-01-see-the-letters-arrive/
Demo first (inside T, 1 min) from W2D1/instructor-demos/B1-internet/STEPS.md: open a terminal (Ctrl+\` in VS Code), ping localhost. Each "Reply" line = one letter there and back. Then F12 → Network → F5 on step-01-parcel-page.
Students:
1. ping localhost (offline) or ping google.com (Wi-Fi). Press Ctrl+C to stop.
2. Open the parcel page index.html with Live Server, F12 → Network → refresh. Count the rows: 1 html + 1 css + 5 svg = 7.
3. View Page Source and find the <h1>: write its text and its line number.
Common problems: Network tab is empty → they opened it AFTER the load: press F5 with the tab open. Count shows 8 → that is Live Server's websocket row (type "ws"): do not count it (the README says so). The page has <link rel="icon" href="data:,"> so Chrome adds no favicon.ico row.
Answer: solution/sample-findings.md.` });

// ================================================================= B2 VS Code power tools + Emmet (slides 10-13)
s = D.slide('Your kitchen: a VS Code tour', 'monitor', { notes: `SLIDE 10 — VS CODE TOUR (B2, 0:25) — the professional kitchen
Analogy: a professional kitchen. Every tool is labelled and within reach. "Taste as you cook" = Live Server: save and see.
Show live in VS Code (do not stay on the slide):
1. Explorer (left): the W2D1 folder, every file.
2. Editor (middle): tabs; the white dot = not saved.
3. Problems panel: Ctrl+Shift+M (our spell-checker shows errors here; slide 21).
4. Terminal: Ctrl+\` (we used it for ping).
5. Status bar (bottom): "Go Live" button = Live Server.
LIVE: Switch to the live tool here. Open VS Code with W2D1 and walk the 5 parts above.
(Optional: a capture of VS Code with the W2D1 folder open, index.html in the editor, Problems panel and the Go Live button visible can go in deck/_build/shots/ and the slot shows it after a rebuild.)` });
D.screenshotSlot(s, { word: 'LIVE', n: 'DEMO', label: 'LIVE: open VS Code → Explorer, editor, Problems panel (Ctrl+Shift+M), terminal, Go Live', x: 0.6, y: 1.3, w: 5.6, h: 3.15, image: shot('vscode-tour.png') });
D.cardText(s, { x: 6.4, y: 1.3, w: 3.0, h: 3.15, head: 'The kitchen', body: 'Explorer = the shelves\nEditor = the chopping board\nTerminal = the back door\nGo Live = taste as you cook\n\nEvery tool within reach.', pink: true });
D.callout(s, { y: 4.65, h: 0.55, lead: 'White dot on a tab = not saved.', body: 'Ctrl+S, every time. Most "it does not work" moments are a missing save.' });

s = D.slide('Emmet = speed-dial for tags', 'code', { notes: `SLIDE 11 — EMMET (B2 demo, watch)
Analogy: speed-dial. You press one short code, VS Code types the whole thing.
Demo in W2D1/instructor-demos/B2-vscode-emmet/ (step-01-emmet-skeleton, step-02-emmet-structures): type each abbreviation, press Tab.
Live order: ! → h1+p → ul>li*5 → nav>a*3 → .card>h2+p → ul>li.item$*3 → lorem20.
Say: "> means inside, + means next to, * means repeat, . means class, $ means a number."
If Tab does nothing: the file must be saved as .html first (Emmet only works in an HTML file).` });
D.table(s, {
  head: ['Abbreviation + Tab', 'Emmet means', 'You get'],
  colW: [2.4, 2.4, 4.1],
  rows: [
    ['!', 'the whole skeleton', '<!DOCTYPE html> … <body></body>'],
    ['ul>li*5', '>  inside   ·   *  repeat', 'a <ul> with 5 <li> inside'],
    ['h1+p', '+  next to', '<h1></h1> then <p></p>'],
    ['.card>h2+p', '.  class', '<div class="card"> with h2 + p'],
    ['ul>li.item$*3', '$  number', 'class="item1", "item2", "item3"'],
    ['lorem20', 'dummy text', '20 words of practice text'],
  ], rowH: 0.48,
});

s = D.slide('6 shortcuts that save hours', 'wrench', { notes: `SLIDE 12 — SHORTCUTS (B2 demo)
Show each one live, 15 seconds each:
1. Alt+Shift+↓ — copy the line down (make 5 list items fast).
2. Ctrl+/ — comment / uncomment a line.
3. Shift+Alt+F — format the whole file (fixes messy indents).
4. Ctrl+D — select the next same word (rename 3 classes at once).
5. Linked editing — change <div> to <section>: the closing tag follows by itself. It is ON in our .vscode/settings.json.
6. Ctrl+S — save. Every time.
Say: "In the drill you will use at least three of these."` });
D.table(s, {
  head: ['Shortcut', 'What it does', 'Use it for'],
  colW: [2.3, 3.3, 3.3],
  rows: [
    ['Alt + Shift + ↓', 'copy this line down', '5 list items in 2 seconds'],
    ['Ctrl + /', 'comment / uncomment', 'hide a line while testing'],
    ['Shift + Alt + F', 'format the whole file', 'messy indents → clean'],
    ['Ctrl + D', 'select the next same word', 'rename 3 things at once'],
    ['Linked editing', 'rename both tags at once', '<div> → <section> safely'],
    ['Ctrl + S', 'save', 'every single time'],
  ], rowH: 0.48,
});

ex({
  id: 'D1-02', title: 'Emmet speed drill', icon: 'rocket', min: 7, folder: 'D1-02-emmet-speed-drill',
  items: ['Open index.html and target.html side by side', 'Type the 6 abbreviations: ! · h1+p · ul>li*5', 'nav>a*3 · table>tr*3>td*2 · .card>h2+p', 'Bonus: ul>li.item$*3 · lorem20', 'Shift+Alt+F to format. Compare with target.html'],
  done: 'index.html matches target.html.\n\nYou used Tab, not typing every tag by hand.\n\nBonus done? Rename a <div> with linked editing.',
  lead: 'Tab does nothing?', body: 'Save the file as .html first. Emmet only works in HTML files.',
  notes: `SLIDE 13 — ACTIVITY D1-02 Emmet speed drill (7 min, solo) — W2D1/classwork/D1-02-emmet-speed-drill/
Required (6): ! · h1+p · ul>li*5 · nav>a*3 · table>tr*3>td*2 · .card>h2+p. Bonus (2): ul>li.item$*3 · lorem20.
Also use Alt+Shift+↓, Ctrl+/, Shift+Alt+F and linked editing.
Circulate: the most common mistake is a space inside the abbreviation (ul > li) — Emmet stops at the space. Second: pressing Enter instead of Tab.
Done = index.html looks like target.html. Answer: solution/index.html.` });

// ================================================================= B3 Skeleton (slides 14-22)
D.dark({ kind: 'block', kicker: 'Block 3  ·  30 min', title: 'HTML is the Skeleton', sub: 'Nothing stands without it. Labelled boxes inside boxes: open the box, put things in, close the box.', notes: `SLIDE 14 — B3 OPENER: THE SKELETON (0:35)
Analogy: a skeleton. Your body has a shape because of the skeleton. Clothes (CSS) come tomorrow. Movement (JS) comes later.
Second picture: labelled boxes inside boxes. Every tag is a label on a box. <body> is a big box. Inside it, a <p> box. Inside that, a <strong> box.
Say: "If one box is not closed, everything after it falls inside it. That is most of today's bugs."
Block plan: anatomy → skeleton code-along (5 min) → D1-03 from memory → polite guessers → spell-checker demo → D1-04 bug-hunt.` });

s = D.slide('Anatomy: element, tag, attribute', 'layout', { notes: `SLIDE 15 — ANATOMY (labelled boxes)
Point at each part of the diagram:
- Opening tag <a ...> = the label on the front of the box.
- Attribute href="menu.html" = a sticker on the label with extra information. Name = value, in double quotes.
- Content "Our menu" = what is inside the box.
- Closing tag </a> = the lid. Note the slash.
- Element = the whole thing, opening tag + content + closing tag.
Void elements (img, br, hr, meta, input) have no content and no closing tag. They are stickers, not boxes. (More on slide 35.)
Ask: "What is the attribute name here? What is its value?"` });
const AY = 1.75;
box(s, { x: 0.8, y: AY, w: 0.8, h: 0.75, text: '<a', font: F.code, size: 18, fill: T.NAVY, ink: T.WHITE, line: null });
box(s, { x: 1.65, y: AY, w: 3.45, h: 0.75, text: 'href="menu.html">', font: F.code, size: 18, fill: T.PINK, ink: T.CHERRY, line: null });
box(s, { x: 5.15, y: AY, w: 1.95, h: 0.75, text: 'Our menu', font: F.code, size: 18, fill: T.CARD });
box(s, { x: 7.15, y: AY, w: 1.15, h: 0.75, text: '</a>', font: F.code, size: 18, fill: T.NAVY, ink: T.WHITE, line: null });
label(s, { x: 0.6, y: AY - 0.42, w: 1.2, text: 'opening tag', bold: true, color: T.NAVY });
label(s, { x: 1.65, y: AY - 0.42, w: 3.45, text: 'attribute = name="value"', bold: true, color: T.CHERRY });
label(s, { x: 5.15, y: AY - 0.42, w: 1.95, text: 'content', bold: true, color: T.NAVY });
label(s, { x: 7.15, y: AY - 0.42, w: 1.15, text: 'closing tag', bold: true, color: T.NAVY });
s.addShape('line', { x: 0.8, y: AY + 0.95, w: 7.5, h: 0, line: { color: T.CHERRY, width: 2 } });
label(s, { x: 0.8, y: AY + 1.0, w: 7.5, text: 'element = opening tag + content + closing tag', bold: true, color: T.CHERRY, size: Z.body });
D.cards(s, [
  { head: 'A box with a label', body: 'Most tags open, hold content, and close: <p> … </p>' },
  { head: 'A sticker (void)', body: 'No content, no closing tag: <img>, <br>, <hr>, <meta>, <input>', pink: true },
], { y: 3.3, h: 1.15 });
D.callout(s, { y: 4.65, h: 0.5, lead: 'Lowercase tags, double quotes:', body: 'href="menu.html", never HREF=menu.html.' });

along('Every page starts the same way', 'code', {
  min: 3, folder: 'B3-skeleton/  (steps 01–03)', title: 'index.html',
  lines: [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    "    <title>Sunita's Page</title>",
    '  </head>',
    '  <body>',
    '    <h1>Hello, I am Sunita</h1>',
    '    <p>I am learning HTML at Tech Skills Institute.</p>',
    '  </body>',
    '</html>',
  ],
  callout: { lead: 'lang="en"', body: 'tells the browser and screen readers the page language. Every page, every time.' },
  notes: `SLIDE 16 — CODE-ALONG: THE SKELETON (3 of the 5 code-along minutes)
Demo folders: W2D1/instructor-demos/B3-skeleton/step-01-doctype-html-lang, step-02-head-meta-title, step-03-body-h1-p. If the live typing goes wrong, open the next step folder.
Type it line by line. Students type with you. Say one sentence per line:
- <!DOCTYPE html> — "this is a modern HTML page".
- <html lang="en"> — the root box, and the language of the page.
- <head> — the parcel label: information ABOUT the page. Not shown on the page.
- meta charset — so Nepali names, ©, and emoji show correctly.
- meta viewport — so phones show the page at the right size.
- <title> — the text on the browser tab.
- <body> — what is inside the parcel: everything you see.
Then Emmet: delete it all, type ! and Tab. "Emmet gives you this in one key. But you must know every line."` });

s = D.slide('Nesting: last box opened, first box closed', 'layout', { notes: `SLIDE 17 — NESTING
Say: "Boxes inside boxes. You opened <p>, then <strong>. So you must close </strong> first, then </p>. Last opened, first closed."
Read the wrong one: <p>I live in <strong>Kathmandu</p></strong> — the boxes cross. The browser has to guess how to repair it.
Read the right one. Point at the indent: 2 spaces per level shows which box is inside which.
This exact bug is D1-04 bug 5.` });
D.compare(s, {
  h: 2.35,
  bad: { head: 'Crossed boxes', lines: ['<p>I live in', '  <strong>Kathmandu</p>', '</strong>', '', '<p> closed before <strong>'] },
  good: { head: 'Last opened, first closed', lines: ['<p>I live in', '  <strong>Kathmandu</strong>', '</p>', '', '<strong> closes first, then <p>'] },
});
D.punchline(s, { y: 3.85, h: 0.75, fontSize: 20, text: 'Open p → open strong → close strong → close p' });
D.callout(s, { y: 4.75, h: 0.48, lead: 'Indent 2 spaces per level.', body: 'Shift+Alt+F formats the file and shows the boxes.' });

along('Comments + head = parcel label', 'edit', {
  min: 2, folder: 'B3-skeleton/step-04-nesting-comments', title: 'index.html  (inside <body>)', fontSize: 11.5,
  lines: [
    '<!-- My introduction -->',
    '<h1>Hello, I am Sunita</h1>',
    '<p>I am learning <strong>HTML</strong>',
    '   at Tech Skills Institute.</p>',
    '<p>I live in <em>Patan</em>, near the Durbar Square.</p>',
    '<!-- My favourite things -->',
    '<h2>My favourite things</h2>',
    '<ul>',
    '  <li>Momo with achar</li>',
    '  <li>Evening walks in Patan</li>',
    '</ul>',
  ],
  side: '<!-- a comment -->\nThe browser skips it.\n\n<head> = the parcel label: facts about the page.\n\n<body> = what is inside the parcel.',
  sideHead: 'Comments', w: 6.0,
  callout: { lead: 'Careful:', body: '-> is not -->. A comment that never closes hides everything after it.' },
  notes: `SLIDE 18 — CODE-ALONG: COMMENTS + HEAD (2 min) — W2D1/instructor-demos/B3-skeleton/step-04-nesting-comments
Analogy: <head> = the label on the parcel (address, contents list, "fragile"). Nobody sees the label as part of the gift. <body> = what is inside the parcel.
Type the two comments into the body of step-04 ("My introduction", "My favourite things") and the strong / em nesting. Then show Ctrl+/ on a line.
Say: "A comment must close with -->: two dashes and an arrow. With only -> the comment never closes and swallows the rest of the page." (That is D1-04 bug 6.)` });

ex({
  id: 'D1-03', title: 'Skeleton from memory', icon: 'edit', min: 4, folder: 'D1-03-skeleton-from-memory',
  items: ['Close the notes. Close slide 16.', 'Open the empty index.html', 'Type the full skeleton by hand (no Emmet!)', 'Add an <h1> and a <p> about you', 'Save. Open with Live Server.'],
  done: 'DOCTYPE, html lang="en", head (charset, viewport, title), body with h1 + p.\n\nThe tab shows your title.',
  lead: 'Wrong is fine. Blank is not.', body: 'Type what you remember. Then compare with notes/03-html-skeleton-and-anatomy.md.',
  notes: `SLIDE 19 — ACTIVITY D1-03 Skeleton from memory (4 min, solo) — W2D1/classwork/D1-03-skeleton-from-memory/
Rule: no Emmet, no notes, no copying. "Wrong is fine. Blank is not."
After 4 minutes: show solution/index.html. Ask: "Who remembered lang="en"? Who remembered viewport?" Hands up.
Common errors: <!DOCTYPE> spelled wrong, <title> inside <body>, meta tags with a closing tag (they are void).` });

s = D.slide('Browsers are polite guessers', 'search', { notes: `SLIDE 20 — POLITE GUESSERS (B3, the big idea)
Say: "A browser never shows you an error. It is polite. When your HTML is broken, it GUESSES what you meant and shows something."
"Sometimes the guess looks fine. That is the dangerous part: the page looks OK on your laptop and breaks somewhere else."
"So we need a spell-checker. Next slide."` });
D.punchline(s, { text: 'A browser never says "error".\nIt guesses what you meant, quietly.' });
D.cards(s, [
  { head: 'Unclosed <h1>?', body: 'The browser guesses: everything after it becomes a giant heading.' },
  { head: 'Crossed boxes?', body: 'It rebuilds the boxes its own way. Only F12 shows the repair.', pink: true },
  { head: 'Missing DOCTYPE?', body: 'It switches to an old "quirks" mode. No warning at all.' },
], { y: 3.35, h: 1.35 });

s = D.slide('Your spell-checker: HTMLHint + F12', 'check', { notes: `SLIDE 21 — SPELL-CHECKER DEMO (3 min) — W2D1/instructor-demos/B3-skeleton/step-05-htmlhint-demo
Open step-05-htmlhint-demo/index.html. It has 3 errors on purpose: no doctype, an unclosed h1, an img with no alt.
1. Show the squiggles in the editor.
2. Ctrl+Shift+M: the Problems panel lists all 3 with a line number. Click one: VS Code jumps to the line.
3. F12 → Elements: show what the browser actually built (the h1 swallowed the next lines).
Then the legend. Say: "Every bug list today has a tag. V = you can see it. D(HH) = HTMLHint shows it. D(F12) = only the Elements panel shows it. H = hidden on Windows, breaks on a Linux server. R = no tool fires: you check the rule with your brain."
D(URL) = submit the form and read the address bar (forms block). D(W3C) = the online validator (Wi-Fi bonus).
LIVE: Switch to the live tool here. Open step-05-htmlhint-demo in VS Code and press Ctrl+Shift+M.
(Optional: a capture of VS Code with step-05-htmlhint-demo open, squiggles visible, Problems panel showing the 3 HTMLHint errors can go in deck/_build/shots/ and the slot shows it after a rebuild.)` });
D.screenshotSlot(s, { word: 'LIVE', n: 'DEMO', label: 'LIVE: open VS Code → step-05-htmlhint-demo → Problems panel (Ctrl+Shift+M)', x: 0.6, y: 1.3, w: 4.2, h: 2.36, image: shot('htmlhint-problems.png') });
D.table(s, {
  x: 5.0, w: 4.45, colW: [1.05, 3.4], rowH: 0.37,
  head: ['Tag', 'How you see the bug'],
  rows: [['V', 'your eyes, on the page'], ['D(HH)', 'HTMLHint squiggle / Ctrl+Shift+M'], ['D(F12)', 'only F12 → Elements shows it'], ['D(URL)', 'submit the form, read the URL'], ['H', 'hidden on Windows, breaks on Linux'], ['R', 'no tool: check the rule yourself']],
});
D.callout(s, { y: 4.2, h: 0.75, lead: 'HTMLHint = the spell-checker for HTML.', body: 'Red squiggle in the editor. Ctrl+Shift+M lists every problem with its line. Click it to jump there.' });

ex({
  id: 'D1-04', title: 'Broken Skeleton', icon: 'wrench', min: 10, folder: 'D1-04-broken-skeleton', bugs: 6,
  items: ['Open index.html with Live Server', 'Look at the page. What looks wrong?', 'Ctrl+Shift+M: read every HTMLHint problem', 'F12 → Elements: what did the browser build?', 'Fix, save, check. Repeat.'],
  done: 'No squiggles. Problems panel is empty.\n\nThe tab shows "Aarav\'s Page".\n\nThe footer is back.',
  body: 'Page looks strange? Fix the unclosed <h1> first.',
  notes: `SLIDE 22 — ACTIVITY D1-04 Broken Skeleton (10 min, solo) — W2D1/classwork/D1-04-broken-skeleton/  (6 bugs, find at least 4)
README note: "Fix bug 4 first if the page looks strange."
REVEAL (2 min) — open solution/BUGS.md on the projector:
1. <!DOCTYPE html> missing — D(HH) doctype-first. Fix: add it as line 1.
2. <html> has no lang="en" — D(HH) html-lang-require. Fix: <html lang="en">.
3. <titel>Aarav's Page</titel> typo — V: the tab shows the file path, not the title; D(HH) title-require. Fix: <title>.
4. <h1> never closed, so the paragraph under it is huge — V + D(HH) tag-pair. Fix: add </h1>.
5. Wrong nesting <p>I live in <strong>Kathmandu</p></strong> — D(HH) tag-pair / D(F12). Fix: </strong></p>.
6. <!-- todo: add photo -> (-> instead of -->) — V: the footer and everything after it disappears. Fix: -->.
While circulating: students fix bug 1 and think they are done. Point them to the Problems panel count. Bug 6 is the one nobody finds alone: ask "where did the footer go?"` });

// ================================================================= B4 Text = tone of voice + entities (slides 23-27)
s = D.slide('Text = tone of voice', 'edit', { notes: `SLIDE 23 — TEXT TAGS = TONE OF VOICE (B4, 1:05)
Analogy: when you speak, your voice changes: you stress a word, you pause, you quote somebody. Text tags are your tone of voice on the page.
Go row by row. Key differences:
- strong = "this matters" (meaning). b = just bold (looks only).
- em = a stressed word (meaning). i = just italic.
- br = a pause INSIDE one thought (an address, a poem). Not for spacing between paragraphs.
- blockquote = "quoting someone else" (a block). q = a short quote inside a sentence.
- span = no meaning, a hook for CSS later.
Code-along (2 min): type one line of each into W2D1/instructor-demos/B4-text/step-02-strong-em-br-hr and step-03-blockquote-q-span.` });
D.table(s, {
  head: ['Tag', 'Tone of voice', 'Example'],
  colW: [2.1, 3.2, 3.6], rowH: 0.43,
  rows: [
    ['<strong>', '"this matters"', 'Shop closes at <strong>5 pm</strong>'],
    ['<em>', 'the stressed word', 'I <em>love</em> jhol momo'],
    ['<br>', 'a pause in one thought', 'Dillibazar,<br>Kathmandu'],
    ['<hr>', 'a change of topic', 'a line between two sections'],
    ['<blockquote> / <q>', 'quoting someone else', 'Didi said: <q>Fresh today!</q>'],
    ['<span>', 'no tone, a hook for CSS', '<span class="price">Rs. 150</span>'],
  ],
});
D.callout(s, { y: 4.7, h: 0.5, lead: 'strong vs b, em vs i:', body: 'strong and em carry MEANING (screen readers stress them). b and i only change the look.' });

s = D.slide('Headings are an outline', 'list', { notes: `SLIDE 24 — HEADINGS ARE AN OUTLINE
Say: "Headings are not font sizes. They are the outline of your page, like a book: one title, then chapters, then sections."
Rule 1: one <h1> per page (the page title). Rule 2: no jumps: after h2 comes h3, not h5.
Why: Google and screen readers use headings to understand and jump through the page.
These are R bugs: no tool fires. You check them with your brain. D1-06 bug 1 is two <h1>s.` });
[['h1', 'TSI Canteen Weekly', 0], ['h2', "This week's menu", 1], ['h3', 'Momo of the week', 2], ['h3', 'New drinks', 2], ['h2', 'Notices', 1]].forEach(([t, txt, lvl], i) => {
  const x = 0.8 + lvl * 0.6, y = 1.35 + i * 0.58;
  box(s, { x, y, w: 0.75, h: 0.46, text: t, font: F.code, size: 14, fill: lvl === 0 ? T.CHERRY : T.NAVY, ink: T.WHITE, line: null });
  label(s, { x: x + 0.9, y: y + 0.06, w: 3.5, h: 0.34, text: txt, align: 'left', color: T.NAVY, bold: lvl === 0, size: lvl === 0 ? 16 : 13.5 });
});
D.cardText(s, { x: 5.6, y: 1.35, w: 3.8, h: 1.4, head: 'Rule 1: one h1', body: 'One page = one title. The h1 says what the whole page is about.', pink: true });
D.cardText(s, { x: 5.6, y: 2.9, w: 3.8, h: 1.4, head: 'Rule 2: no jumps', body: 'h1 → h2 → h3. Never h2 → h5. Pick the level by meaning, not by size.' });
D.callout(s, { y: 4.6, h: 0.55, lead: 'Want big bold text?', body: 'That is CSS (tomorrow), not a heading. Never use <h4> just to make a sentence bold.' });

s = along('Entities: printing <, & and ©', 'code', {
  min: 2, folder: 'B4-text/step-04-entities', title: 'index.html  (inside <body>)',
  lines: [
    '<p>Wrap text in &lt;p&gt; and &lt;/p&gt; tags.</p>',
    '<p>Momo &amp; milk tea: Rs.&nbsp;170</p>',
    '<p>&copy; 2026 TSI Canteen</p>',
  ],
  side: '&lt;  →  <\n&gt;  →  >\n&amp;  →  &\n&copy;  →  ©\n&nbsp;  →  fixed space\n\nStarts with &, ends with ;',
  sideHead: 'Escape codes', w: 6.0,
  callout: { lead: 'Escape codes:', body: '&lt; means "print a <, do not start a tag". One typo (&nbps;) and it prints as text.' },
  notes: `SLIDE 25 — CODE-ALONG: ENTITIES — W2D1/instructor-demos/B4-text/step-04-entities
Analogy: escape codes. The < sign normally means "a tag starts here". To PRINT a <, you write &lt; ("less than").
Type the three lines. Open in Live Server. Then show the broken version: type <p> without the entity and watch the browser hide it ("Wrap text in tags").
Show &nbsp;: "Rs. 170" never splits across two lines.
D1-06 has two entity bugs (bugs 2 and 3). D1-FF1 Entity art is the fast-finisher for this block.` });
D.cardText(s, { x: 0.6, y: s._codeBottom + 0.15, w: 6.0, h: 4.55 - s._codeBottom - 0.15, head: 'On the page you see', body: 'Wrap text in <p> and </p> tags.\nMomo & milk tea: Rs. 170\n© 2026 TSI Canteen' });

ex({
  id: 'D1-05', title: "Grandmother's note", icon: 'edit', min: 4, folder: 'D1-05-grandmothers-note',
  items: ['Open index.html: 4 plain sentences', 'The most important words → <strong>', 'One stressed word → <em>', 'The address on 2 lines → <br>', "Grandmother's saying → <blockquote>"],
  done: 'Live Server shows bold, italic, a line break and an indented quote.\n\nYou can say WHY each tag is there.',
  lead: 'Meaning first:', body: 'pick the tag for what the words MEAN, not for how they should look.',
  notes: `SLIDE 26 — ACTIVITY D1-05 Grandmother's note (4 min, solo, modify) — W2D1/classwork/D1-05-grandmothers-note/
A short plain-text note (4 sentences, Kathmandu). Students add strong / em / br / blockquote.
Ask 2 students: "Why strong here and not b?" The answer should be about meaning.
Answer: solution/index.html.` });

ex({
  id: 'D1-06', title: 'Canteen News', icon: 'search', min: 10, folder: 'D1-06-canteen-news-bughunt', bugs: 5,
  items: ['Open index.html with Live Server', 'Read the page top to bottom', 'Check the outline: how many h1?', 'Look for text that shows wrongly', 'Is everything after one point italic or indented?'],
  done: 'One h1.\n"Wrap text in <p> tags" shows the <p>.\n"Rs. 150" shows with a normal space.\nNo stray italic or indent.',
  notes: `SLIDE 27 — ACTIVITY D1-06 Canteen News (10 min, solo) — W2D1/classwork/D1-06-canteen-news-bughunt/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. Two <h1> elements — R (one h1 per page). Fix: the second becomes <h2>.
2. Text "Wrap text in <p> tags" shows as "Wrap text in tags" — V. Fix: &lt;p&gt;.
3. Rs.&nbps;150 typo shows literally — V. Fix: &nbsp;.
4. <blockquote> closed with </quote>, so the rest of the page is indented — V + D(HH). Fix: </blockquote>.
5. <em> opened and never closed, so everything after it is italic — V + D(HH). Placed after the blockquote so the two effects can be told apart. Fix: </em>.
Circulating: bug 1 has no squiggle (R). Ask "how many h1s are on the page?"
FAST FINISHER: D1-FF1 Entity art — W2D1/classwork/fast-finishers/D1-FF1-entity-art/ (a price board + a paragraph that shows <p> literally, using &lt; &gt; &amp; &copy; &nbsp; &rarr; &hearts;).` });

// ================================================================= Break 1 (slide 28)
D.breakSlide({ minutes: 10, sub: 'After the break: this page has 6 broken links. You fix them.\nNo Live Server yet? Wave now — we install it together.', notes: `SLIDE 28 — BREAK (1:28 – 1:38)
Teaser on screen: "This page has 6 broken links. After the break, you fix them."
Use the break for late Live Server + HTMLHint installs: Extensions (Ctrl+Shift+X) → "Live Server" (Ritwick Dey) → Install; "HTMLHint" → Install. Then reload the window.
Start again at 1:38 sharp.` });

// ================================================================= B5 Lists (slides 29-31)
s = D.slide('Shopping list vs recipe steps', 'list', { notes: `SLIDE 29 — LISTS: SHOPPING LIST vs RECIPE (B5, 1:38)
Ask: "Does order matter on a shopping list?" No → <ul> (unordered, bullets).
"Does order matter in a recipe?" Yes → <ol> (ordered, numbers). Step 3 before step 1 = a disaster.
Every item is an <li>, and an <li> must live inside a <ul> or <ol>. Never alone.
<ol> extras: type="A" (A, B, C) and start="5" (start counting at 5).
Code-along (2 min) in W2D1/instructor-demos/B5-lists/step-01-ul-ol.` });
label(s, { x: 0.6, y: 1.25, w: 4.3, text: 'Shopping list: order does not matter → bullets', bold: true, color: T.NAVY, align: 'left' });
label(s, { x: 5.1, y: 1.25, w: 4.3, text: 'Recipe steps: order matters → numbers', bold: true, color: T.CHERRY, align: 'left' });
D.codeBox(s, { x: 0.6, y: 1.6, w: 4.3, h: 2.5, title: 'shopping list', lines: ['<ul>', '  <li>Flour</li>', '  <li>Minced chicken</li>', '  <li>Onion</li>', '</ul>'], fontSize: 13 });
D.codeBox(s, { x: 5.1, y: 1.6, w: 4.3, h: 2.5, title: 'recipe steps', lines: ['<ol>', '  <li>Make the dough.</li>', '  <li>Make the filling.</li>', '  <li>Fold and steam.</li>', '</ol>'], fontSize: 13 });
D.callout(s, { y: 4.3, h: 0.6, lead: 'Every <li> lives inside a <ul> or an <ol>.', body: 'Extras for <ol>: type="A" counts A, B, C. start="5" starts at 5.' });

along('Nested lists + dl / dt / dd', 'list', {
  min: 2, folder: 'B5-lists/step-02-nested, step-03-dl', title: 'index.html  (excerpt of step-03)',
  lines: [
    '<ul>',
    '  <li>Onion</li>',
    '  <li>Spices',
    '    <ul>',
    '      <li>Ginger</li>',
    '      <li>Garlic</li>',
    '    </ul>',
    '  </li>',
    '</ul>',
    '<dl>',
    '  <dt>Jhol</dt>',
    '  <dd>A thin, warm soup poured over momo.</dd>',
  ],
  side: 'The sub-list goes INSIDE the <li>, before its </li>.\n\n<dl> = a glossary:\n<dt> the word\n<dd> what it means',
  sideHead: 'Look at', w: 5.5, fontSize: 11.5,
  callout: { lead: 'A nested list = a sub-list under one item.', body: 'Not after </li>. Inside it.' },
  notes: `SLIDE 30 — CODE-ALONG: NESTED + DL — W2D1/instructor-demos/B5-lists/step-02-nested and step-03-dl
Type it together. Point at line 8: the </li> of "Spices" comes AFTER the inner </ul>. "The sub-list lives inside the item."
dl/dt/dd = a dictionary or glossary: dt = the term, dd = the description.
Common mistake (D1-07 bug 4): using <li> inside <dl> instead of <dd>.` });

s = ex({
  id: 'D1-07 + D1-08', title: 'Fix, then build', icon: 'wrench', min: 12, folder: 'D1-07-broken-lists  →  D1-08-momo-recipe',
  items: ['D1-07 (7 min): open index.html, find 4 list bugs', 'Hint: missing indent + missing bullets', 'Reveal together (2 min)', 'D1-08 (5 min): ingredients <ul> with one sub-list', 'Steps <ol> + one image with alt. Bonus: a <dl>'],
  done: 'D1-07: every <li> is inside a list, the steps are numbered, the glossary uses <dd>.\n\nD1-08: ul + nested ul, ol, img with alt.',
  lead: 'D1-07: 4 bugs. Find at least 2.', body: 'Then D1-08 Momo recipe (classwork/D1-08-momo-recipe/).',
  notes: `SLIDE 31 — ACTIVITY D1-07 Broken Lists (7 min) → reveal → D1-08 Momo recipe (5 min). Folders: W2D1/classwork/D1-07-broken-lists/ and W2D1/classwork/D1-08-momo-recipe/
D1-07 (4 bugs, find at least 2). REVEAL — solution/BUGS.md:
1. Three <li> with no <ul> around them — V + D(F12). In Chrome the bullets hang off the left edge, so they seem to vanish. README hint: "look for the missing indent (and the missing bullets)". Fix: wrap them in <ul>.
2. Cooking steps (order matters) are in a <ul> — V. Fix: <ol>.
3. <il> typo instead of <li> — V (no bullet) + D(HH). Fix: <li>.
4. Glossary <dl> uses <li> for the definitions instead of <dd> — V. Fix: <dd>.
D1-08 (build): required = ingredients <ul> with one nested sub-list inside an <li>, steps <ol>, one image with alt (images/momo-plate.svg). Bonus: a <dl> glossary.
IF BEHIND: D1-08 goes to homework first (it is a build; the bug-hunt stays).
FAST FINISHER: D1-FF2 Table of contents — W2D1/classwork/fast-finishers/D1-FF2-table-of-contents/ (nested-list TOC jumping to #id sections + "back to top" links).` });

// ================================================================= B6 Links, paths & images (slides 32-38)
s = D.slide('Links: same house vs postal address', 'home', { notes: `SLIDE 32 — ANALOGY 1: SAME HOUSE vs POSTAL ADDRESS (B6, 1:57)
Say: "Inside your house you say 'the kitchen'. You do not say 'Dillibazar, Kathmandu, Nepal, the kitchen'. That is a RELATIVE path: relative to where you are."
"To send a letter to another city you need the full postal address. That is an ABSOLUTE URL: https:// and the whole address."
Relative: about.html, pages/menu.html, ../index.html, images/momo.svg.
Absolute: https://www.wikipedia.org — the https:// is NOT optional. Without it the browser thinks www.wikipedia.org is a file in your folder (D1-09 bug 3).
Code-along (3 min across slides 34-35): W2D1/instructor-demos/B6-links-images/ (step-01-external-link to step-05-figure-anchors-mailto).` });
D.cards(s, [
  { head: 'Relative = "the kitchen"', body: 'A path from where this page is.\n\nabout.html\npages/menu.html\nimages/momo.svg' },
  { head: 'Absolute = the postal address', body: 'The full address, from anywhere.\n\nhttps://www.wikipedia.org\nhttps://tsi.edu.np', pink: true },
], { h: 2.05 });
D.codeBox(s, { y: 3.55, h: 1.0, title: 'relative, then absolute', lines: ['<a href="pages/about.html">About us</a>', '<a href="https://www.wikipedia.org">Wikipedia</a>'], fontSize: 12 });
D.callout(s, { y: 4.7, h: 0.48, lead: 'No https:// ?', body: 'Then "www.wikipedia.org" is treated as a file in your folder → 404.' });

s = D.slide('Folders and ../ ("go downstairs one floor")', 'layout', { notes: `SLIDE 33 — FOLDERS AND ../
Point at the tree. index.html is on the ground floor. pages/ is upstairs. images/ is a room on the ground floor.
From index.html: "pages/about.html" (go up into pages) and "images/momo.svg".
From pages/about.html: you are upstairs. To reach index.html you first go downstairs one floor: "../index.html". To reach the image: "../images/thamel.svg".
Say it as a chant: "dot dot slash = go downstairs one floor".
Also: never use C:\\Users\\Aarav\\Desktop\\... That path exists only on Aarav's laptop (D1-09 bug 6).
And: names are case-sensitive on a real server. Momo.svg is not momo.svg.` });
// folder tree (native shapes)
const fx = 0.7, fy = 1.4;
box(s, { x: fx, y: fy, w: 1.9, h: 0.45, text: 'site/', font: F.code, size: 13, fill: T.NAVY, ink: T.WHITE, line: null });
[['index.html', 0.6, T.CARD], ['pages/', 1.12, T.PINK], ['images/', 2.52, T.PINK]].forEach(([t, dy, fill]) => box(s, { x: fx + 0.5, y: fy + dy, w: 1.7, h: 0.42, text: t, font: F.code, size: 12.5, fill, ink: fill === T.PINK ? T.CHERRY : T.NAVY }));
[['about.html', 1.62], ['menu.html', 2.05]].forEach(([t, dy]) => box(s, { x: fx + 1.0, y: fy + dy, w: 1.6, h: 0.36, text: t, font: F.code, size: 12, fill: T.CARD }));
[['momo.svg', 3.02], ['thamel.svg', 3.45]].forEach(([t, dy]) => box(s, { x: fx + 1.0, y: fy + dy, w: 1.6, h: 0.36, text: t, font: F.code, size: 12, fill: T.CARD }));
s.addShape('line', { x: fx + 0.3, y: fy + 0.45, w: 0, h: 2.28, line: { color: T.FOOT, width: 1.5 } });
s.addShape('line', { x: fx + 0.75, y: fy + 1.54, w: 0, h: 0.69, line: { color: T.FOOT, width: 1.5 } });
s.addShape('line', { x: fx + 0.75, y: fy + 2.94, w: 0, h: 0.69, line: { color: T.FOOT, width: 1.5 } });
D.table(s, {
  x: 4.0, w: 5.45, colW: [1.75, 1.65, 2.05], rowH: 0.5,
  head: ['From', 'To', 'Write'],
  rows: [
    ['index.html', 'about.html', 'pages/about.html'],
    ['index.html', 'momo.svg', 'images/momo.svg'],
    ['pages/about.html', 'index.html', '../index.html'],
    ['pages/about.html', 'thamel.svg', '../images/thamel.svg'],
  ],
});
D.callout(s, { x: 4.0, w: 5.45, y: 4.05, h: 0.75, lead: '../ = go downstairs one floor.', body: 'Never C:\\Users\\Aarav\\… — that path lives only on one laptop.' });

along('Links type-along', 'globe', {
  min: 2, folder: 'B6-links-images/  (steps 01–05)', title: 'index.html  (inside <body>)',
  lines: [
    '<a href="https://en.wikipedia.org/wiki/Momo_(food)" target="_blank">Wikipedia</a>',
    '<a href="pages/about.html">About us</a>',
    '<a href="#contact">Contact</a>',
    '',
    '<h2 id="contact">Contact</h2>',
    '<a href="mailto:hello@momohouse.com.np">hello@momohouse.com.np</a>',
    '<a href="tel:+97714400000">01-4400000</a>',
    '<a href="#top">Back to top</a>',
  ],
  callout: { lead: 'target="_blank"', body: 'opens a new tab. href="#contact" jumps to the element with id="contact" on the same page.' },
  notes: `SLIDE 34 — CODE-ALONG: LINKS — W2D1/instructor-demos/B6-links-images/step-01-external-link, step-02-relative-pages, step-03-folders-dotdot, step-05-figure-anchors-mailto
Type line by line, test each link in Live Server:
1. Relative link into pages/ (step-02 / step-03).
2. External link with https:// and target="_blank" (new tab).
3. mailto: opens the email app. tel: opens the phone dialler on a phone.
4. #contact jumps to id="contact". The id has no #; the href has the #. #top jumps to the top of the page.
If a link 404s, read the address bar: it tells you exactly where the browser looked.` });

along('Images: a sticker, not an envelope', 'layout', {
  min: 1, folder: 'B6-links-images/step-04-img-alt-width', title: 'index.html  (inside <body>)',
  lines: [
    '<img src="images/momo.svg"',
    '     alt="A steaming plate of momo" width="300">',
    '',
    '<figure>',
    '  <img src="images/momo.svg"',
    '       alt="A steaming plate of momo" width="300">',
    '  <figcaption>Our famous steam momo.</figcaption>',
    '</figure>',
  ],
  side: 'No closing tag: a sticker on the page, not an envelope with content.\n\nalt = what you would read over the phone to someone who cannot see it.',
  sideHead: 'A sticker (void tag)', w: 5.8, fontSize: 12,
  callout: { lead: 'Case-sensitive names:', body: 'Momo.svg ≠ momo.svg. Windows forgives it, a Linux server does not.' },
  notes: `SLIDE 35 — ANALOGY 2 + CODE-ALONG: IMAGES — W2D1/instructor-demos/B6-links-images/step-04-img-alt-width and step-05-figure-anchors-mailto
Analogy: an <img> is a sticker, not an envelope. It has no content and no closing tag. Everything it needs is in its attributes.
src = where the picture file is (a path, like links). alt = the description you would read over the phone. width = the size in pixels (keep the shape: give width only).
figure + figcaption = a picture with its caption, kept together.
Case: on Windows, Momo.svg and momo.svg are the same file. On a real Linux server they are DIFFERENT. Use lowercase file names always. (H bugs in homework.)` });

ex({
  id: 'D1-09', title: 'Broken Paths', icon: 'wrench', min: 9, folder: 'D1-09-broken-paths', bugs: 6,
  items: ['Open index.html with Live Server', 'Click EVERY link. Read the address bar on a 404', 'Check every picture shows', 'Do the same on pages/about.html + pages/menu.html', 'Look at the folder tree in Explorer'],
  done: 'Every link opens the right page.\n\nEvery image shows, on every page.\n\nNo C:\\ paths left.',
  notes: `SLIDE 36 — ACTIVITY D1-09 Broken Paths (9 min, solo) — W2D1/classwork/D1-09-broken-paths/  (6 bugs, find at least 4)
REVEAL (2 min) — solution/BUGS.md:
1. index.html: <img src="image/logo-momo-house.svg">, but the folder is images — V. Fix: images/logo-momo-house.svg.
2. index.html: <a href="about.html"> should be pages/about.html — V (404).
3. index.html: href="www.wikipedia.org" (missing https://) becomes a relative path — V (404). Fix: https://www.wikipedia.org.
4. pages/about.html: <a href="index.html">Home</a> should be ../index.html — V.
5. pages/about.html: <img src="images/thamel.svg"> should be ../images/thamel.svg — V.
6. pages/menu.html: href="C:\\Users\\Aarav\\Desktop\\site\\index.html" should be ../index.html — V (works only on Aarav's laptop).
Teaching move: on every 404, read the address bar aloud. "The browser tells you exactly where it looked."` });

ex({
  id: 'D1-10', title: 'Kathmandu gallery', icon: 'layout', min: 7, folder: 'D1-10-kathmandu-gallery',
  items: ['Open index.html (skeleton + h1 are there)', '2 × <figure>: img + alt + width + <figcaption>', 'Use images/swayambhu.svg and images/patan-durbar.svg', '1 external link with target="_blank"', 'A "Back to top" link to #top'],
  done: 'Two captioned pictures.\n\nThe external link opens a new tab.\n\n"Back to top" jumps up.',
  lead: 'Show & tell next:', body: '2–3 pages go on the projector. Be ready to explain one line.',
  notes: `SLIDE 37 — ACTIVITY D1-10 Kathmandu gallery (7 min, solo, build) — W2D1/classwork/D1-10-kathmandu-gallery/
Required: 2 figures with figcaption + alt + width, 1 external link with target="_blank", 1 "back to top" #top anchor (the id="top" goes on the h1 or the body's first element).
Circulate: alt="image" is not a description. Ask "what would you say on the phone?"
Answer: solution/index.html.
FAST FINISHER: D1-FF3 Mystery page — W2D1/classwork/fast-finishers/D1-FF3-mystery-page/ (rebuild a page from a picture, target.svg: h1, image, 2 lists, a table, a link).` });

s = D.activity('D1-10  ·  Show & tell', 'users', { brief: '3 minutes  ·  2–3 volunteers  ·  your gallery on the projector', notes: `SLIDE 38 — ACTIVITY: SHOW & TELL (3 min) — D1-10 gallery
Pick 2-3 students (ask for volunteers first). Open their index.html on the projector with Live Server.
Ask each one: "Show me your alt text. Read it to us like on the phone." and "Which line makes the link open a new tab?"
Praise one specific line each. Code gets shown, not hidden. Mistakes on the projector are a gift to the room.` });
D.punchline(s, { y: 1.65, h: 1.3, text: 'Code gets shown, not hidden.' });
D.cards(s, [
  { head: 'Show', body: 'Your gallery in Live Server on the big screen.' },
  { head: 'Read', body: 'Read one alt text aloud, like on the phone.', pink: true },
  { head: 'Explain', body: 'Point at the line that opens a new tab.' },
], { y: 3.15, h: 1.35 });

// ================================================================= B7 Tables (slides 39-43)
along('Tables: four tags, one team', 'list', {
  min: 2, folder: 'B7-tables/step-01-basic-price-board', title: 'index.html  (inside <body>)',
  lines: [
    '<table>',
    '  <tr><th>Item</th><th>Price</th></tr>',
    '  <tr><td>Veg momo</td><td>Rs. 120</td></tr>',
    '  <tr><td>Chicken momo</td><td>Rs. 150</td></tr>',
    '  <tr><td>Milk tea</td><td>Rs. 25</td></tr>',
    '</table>',
  ],
  side: '<table> the board\n<tr> one row\n<th> a heading cell\n<td> a data cell\n\nThe canteen price board: data in rows and columns.',
  sideHead: 'Four tags, one team', w: 5.7,
  callout: { lead: 'Rows first, then cells.', body: 'A cell (th or td) always lives inside a <tr>. Every row has the same number of cells.' },
  notes: `SLIDE 39 — CODE-ALONG: TABLES (B7, 2:27) — W2D1/instructor-demos/B7-tables/step-01-basic-price-board
Analogy: the TSI canteen price board. Four tags, one team: table = the board, tr = a row, th = a heading cell (bold, centred), td = a data cell.
Type it (one row per line, like the step-01 file). The step-01 head also has a 2-line <style> that draws the cell borders: "CSS comes on Day 2". Say: "ignore it today".
Emmet shortcut: table>tr*3>td*2.
Say: "Rows first. A cell never sits directly in <table>; it lives in a <tr>."` });

s = D.slide('caption, thead / tbody / tfoot, colspan, rowspan', 'layout', { notes: `SLIDE 40 — TABLE PARTS + MERGED CELLS — W2D1/instructor-demos/B7-tables/step-02-caption-thead-tbody-tfoot and step-03-colspan-rowspan
caption = the title of the table (first thing inside <table>). thead = the heading rows, tbody = the data, tfoot = the totals.
scope="col" on a th tells screen readers "I am the heading for this column".
colspan="3" = one cell as wide as 3 columns (the tfoot line). rowspan="2" = one cell as tall as 2 rows (Chicken momo: half plate and full plate).
THE ARITHMETIC: count the cells in every row. A colspan="2" cell counts as 2. If a cell above has rowspan="2", the row below has ONE LESS cell of its own.
D1-11 bugs 3 and 4 are about this arithmetic. Chrome detail: a colspan that is too BIG is invisible (the extra column is 0 px wide); one that is too SMALL leaves a visible gap at the end of the row (D1-15 bug 4).` });
const grid = [
  [{ text: 'Item', options: { bold: true, color: T.WHITE, fill: { color: T.NAVY } } }, { text: 'Size', options: { bold: true, color: T.WHITE, fill: { color: T.NAVY } } }, { text: 'Price', options: { bold: true, color: T.WHITE, fill: { color: T.NAVY } } }],
  [{ text: 'Chicken momo\nrowspan="2"', options: { rowspan: 2, fill: { color: T.PINK }, color: T.CHERRY, bold: true } }, { text: 'Half plate', options: { fill: { color: T.STRIPE } } }, { text: 'Rs. 80', options: { fill: { color: T.STRIPE } } }],
  [{ text: 'Full plate', options: { fill: { color: T.SLIDE } } }, { text: 'Rs. 150', options: { fill: { color: T.SLIDE } } }],
  [{ text: 'Milk tea', options: { fill: { color: T.STRIPE } } }, { text: 'Cup', options: { fill: { color: T.STRIPE } } }, { text: 'Rs. 25', options: { fill: { color: T.STRIPE } } }],
  [{ text: 'All prices include achar.  (tfoot · colspan="3")', options: { colspan: 3, fill: { color: T.PINK }, color: T.CHERRY, bold: true, align: 'center' } }],
];
s.addText("Today's prices  (caption)", { x: 0.6, y: 1.25, w: 5.0, h: 0.3, fontFace: F.body, fontSize: Z.cardBody, italic: true, bold: true, color: T.NAVY, align: 'center', margin: 0 });
s.addTable(grid, { x: 0.6, y: 1.6, w: 5.0, colW: [1.8, 1.6, 1.6], rowH: 0.55, fontFace: F.body, fontSize: Z.tableBody, color: T.BODY, border: { type: 'solid', color: T.FOOT, pt: 1 }, valign: 'middle', align: 'center' });
D.cardText(s, { x: 5.85, y: 1.25, w: 3.55, h: 1.55, head: 'The parts', body: '<caption> title of the table\n<thead> heading rows\n<tbody> the data\n<tfoot> the totals' });
D.cardText(s, { x: 5.85, y: 2.95, w: 3.55, h: 1.45, head: 'Count the cells', body: 'colspan="3" counts as 3.\nUnder rowspan="2", the next row has one cell less (Full plate row: 2 cells).', pink: true });
D.callout(s, { y: 4.65, h: 0.5, lead: 'th scope="col"', body: 'tells a screen reader "I am the heading for this column".' });

s = D.slide('Tables are for data, not layout', 'check', { notes: `SLIDE 41 — DATA, NOT LAYOUT
Old websites (1990s) used tables to place things side by side: a menu on the left, text on the right. Do not do this.
Tables are for DATA: rows and columns that mean something (prices, results, a timetable).
Layout (side by side) is CSS work: flexbox and grid in sessions 3 / 3.2.
Why: screen readers read a table cell by cell ("row 2, column 3") — a layout table makes nonsense.` });
D.compare(s, {
  h: 2.6,
  bad: { head: 'Layout table (do not)', mono: false, lines: ['A table that puts the logo left and the menu right', 'Screen reader: "table, 1 row, 2 columns…" — nonsense', 'Hard to change later'] },
  good: { head: 'Data table (yes)', mono: false, lines: ['The canteen price board: item | price', 'Exam results: name | subject | marks', 'The TSI timetable: time | Sun … Thu'] },
});
D.navyBar(s, { y: 4.2, h: 0.6, text: 'If it has rows and columns that MEAN something, it is a table.' });

ex({
  id: 'D1-11', title: 'Broken Timetable', icon: 'clock', min: 8, folder: 'D1-11-broken-timetable', bugs: 5,
  items: ['Open index.html: TSI Week 2 timetable', '6 columns: Time + Sun – Thu', 'Count the cells in EVERY row', 'Check the header row and the "Lunch" row', 'Look above the table too'],
  done: 'Header row bold.\nEvery row = 6 columns.\n"Lunch" spans the whole week.\nNo cell sticks out.\nNo stray text above the table.',
  notes: `SLIDE 42 — ACTIVITY D1-11 Broken Timetable (8 min, solo) — W2D1/classwork/D1-11-broken-timetable/  (5 bugs, find at least 3)
REVEAL (2 min) — solution/BUGS.md:
1. Header row uses <td> instead of <th> — V (not bold). Fix: <th scope="col"> for the six header cells.
2. The 11:00 row has only 4 day cells (it needs 5), so the cells shift left — V. Fix: add <td>Lab</td> for Thursday.
3. colspam="5" typo on the "Lunch" row, so it fills only 1 column — V. Fix: colspan="5".
4. rowspan="2" on "Project lab", but the 2:00 row still has its own Thursday cell, so an extra cell sticks out — V. Fix: delete the last <td>Lab</td> from the 2:00 row.
5. Text "Tea break 3:00" written between </tr> and <tr>, outside any cell; the browser moves it above the table — V. Fix: make it a row: <tr><td>3:00</td><td colspan="5">Tea break</td></tr>.
The table is 6 columns (Time + Sun–Thu). A 2-line <style> in the head draws the borders ("CSS comes on Day 2").
Bug 5 is the "polite guesser" in action: show F12 → Elements, the text was moved out of the table.
FAST FINISHER: D1-FF4 Evil page — W2D1/classwork/fast-finishers/D1-FF4-evil-page-bughunt/ (8 "the browser hides it" bugs).` });

ex({
  id: 'D1-12', title: 'Exam results table', icon: 'award', min: 6, folder: 'D1-12-exam-results-table',
  items: ['Open index.html: a plain table of results', 'Add a <caption>', 'Wrap rows in <thead> and <tbody>', 'Heading cells: <th scope="col">', 'Add a "Total" row using colspan. Bonus: <tfoot>'],
  done: 'The table has a title, bold column headings, and a Total row that spans the right columns.',
  lead: 'No rowspan here.', body: 'You practised it in D1-11. Today: caption, thead/tbody, scope, colspan.',
  notes: `SLIDE 43 — ACTIVITY D1-12 Exam results table (6 min, solo, modify) — W2D1/classwork/D1-12-exam-results-table/
The starter is a plain table with data rows. Add: caption, thead/tbody, th scope="col", a "Total" row using colspan. Bonus: tfoot.
Circulate: the Total row's colspan must match the number of columns it should cover. Count!
IF BEHIND: D1-12 goes to homework (build; the bug-hunt D1-11 stays).
Answer: solution/index.html.` });

// ================================================================= Break 2 (slide 44)
D.breakSlide({ minutes: 10, sub: 'Teaser: forms let the visitor talk back.', notes: `SLIDE 44 — BREAK (2:49 – 2:59)
Teaser: "Forms let the visitor talk back."
Before the restart, open W2D1/instructor-demos/B8-forms/step-01-form-label-text-email in Live Server.` });

// ================================================================= B8 Forms (slides 45-49)
s = D.slide('Forms = the order slip', 'edit', { notes: `SLIDE 45 — ANALOGY: THE ORDER SLIP (B8, 2:59)
Picture the order slip on a restaurant table: boxes to fill (text), ticks (checkbox), "choose one" circles (radio), a list to pick from (select).
The printed word next to each box = the <label>.
name = the column the kitchen files your answer under. When you submit, the slip goes to the kitchen (later in the course: the server is the waiter who takes it).
Trick for today: method="get" puts the answers in the address bar, so you can SEE what the kitchen would receive.` });
D.table(s, {
  head: ['On the order slip', 'In HTML'],
  colW: [4.4, 4.5], rowH: 0.46,
  rows: [
    ['a box to write in', '<input type="text">'],
    ['a tick box', '<input type="checkbox">'],
    ['"choose one" circles', '<input type="radio" name="batch">'],
    ['a list to pick from', '<select> + <option>'],
    ['the printed word next to a box', '<label for="…">'],
    ['the column the kitchen files it under', 'name="…"'],
  ],
});
D.callout(s, { y: 4.65, h: 0.5, lead: 'The waiter (server) comes later in the course.', body: 'Today the slip goes into the address bar.' });

along('One tag, many types + label for ↔ id', 'code', {
  min: 2, folder: 'B8-forms/  (type 01, watch 02–04)', title: 'index.html  (inside <body>)',
  lines: [
    '<form method="get">',
    '  <label for="name">Your name</label>',
    '  <input type="text" id="name" name="name" required>',
    '',
    '  <label for="email">Email</label>',
    '  <input type="email" id="email" name="email">',
    '',
    '  <!-- watch only: steps 02–04 -->',
    '  <input type="radio" id="morning" name="batch" value="morning">',
    '  <label for="morning">Morning</label>',
    '</form>',
  ],
  callout: { lead: 'for = id.', body: 'Same word, exactly. Then clicking the label puts the cursor in the box.' },
  fontSize: 11.5,
  notes: `SLIDE 46 — CODE-ALONG: INPUTS + LABELS — W2D1/instructor-demos/B8-forms/step-01-form-label-text-email, step-02-radio-checkbox, step-03-select-textarea
Type step-01 with me (2 min: the two label + input pairs; the demo files wrap each pair in a <p>). Watch steps 02–04 on the projector (open step-02 and step-03 now, step-04 is the next slide): students do NOT type them. They type radios, select and textarea themselves in D1-13 and D1-14.
Test: click the words "Your name" — the cursor jumps into the box. That only works when for and id match exactly.
One tag, many types: text, email, tel, password, number, date, radio, checkbox, color. Change type="text" to type="date" live and watch the date picker appear.
Radio: every radio in one group shares ONE name. Each one has its own value.
required: the browser refuses an empty submit. placeholder: grey hint text (not a label!).
Step-03: <select> with <option>s, and <textarea></textarea> — always with a real closing tag.` });

s = D.activity('What the kitchen receives', 'search', { brief: 'Code-along  ·  1 min  ·  type with me  ·  W2D1/instructor-demos/B8-forms/step-04-fieldset-submit-read-url', notes: `SLIDE 47 — CODE-ALONG: SUBMIT AND READ THE URL — W2D1/instructor-demos/B8-forms/step-04-fieldset-submit-read-url
Fill the form, press Submit. Read the address bar aloud: ?name=Sunita+Gurung&email=sunita%40mail.com&batch=morning&extras=achar&momo=chicken&notes=
Say: "Each name=value pair is one answer on the slip. The + is a space. & separates two answers."
Show the bugs this reveals: a radio with no value sends batch=on. An input with no name is not sent at all.
fieldset + legend = a box with a title around a group of fields.
LIVE: Switch to the live tool here. Submit step-04 in Chrome and zoom (Ctrl +) so the URL is big.
(Optional: a capture of Chrome after submitting step-04 — the address bar showing ?name=…&batch=… (zoom the browser so the URL is big) can go in deck/_build/shots/ and the slot shows it after a rebuild.)` });
D.codeBox(s, { x: 0.6, y: 1.6, w: 4.6, h: 1.4, title: 'after Submit, the address bar shows', fontSize: 11.5, lines: ['index.html?name=Sunita+Gurung', '  &email=sunita%40mail.com&batch=morning', '  &extras=achar&momo=chicken&notes='] });
D.cardText(s, { x: 0.6, y: 3.15, w: 4.6, h: 1.35, head: 'Read it like the kitchen', body: 'name=value, joined by &.\n+ is a space.  No value?  batch=on.\nNo name?  Not sent at all.', pink: true });
D.screenshotSlot(s, { word: 'LIVE', n: 'DEMO', label: 'LIVE: open step-04 in Chrome → Submit → read the address bar aloud', x: 5.4, y: 1.6, w: 4.0, h: 2.25, image: shot('form-url.png') });
D.callout(s, { y: 4.68, h: 0.5, lead: 'D(URL) bugs:', body: 'only visible when you submit with method="get" and read the address bar.' });

ex({
  id: 'D1-13', title: 'Broken Signup', icon: 'wrench', min: 10, folder: 'D1-13-broken-signup-form', bugs: 6,
  items: ['Open index.html: TSI course signup', 'Click every label. Does the cursor jump?', 'Try to tick both batches', 'Fill it in, press Submit, read the URL', 'Is anything after the textarea missing?'],
  done: 'Every label works.\nOnly one batch can be ticked.\nThe URL shows batch=morning (not on).\nSubmit really submits.',
  body: 'The form looks short? Fix the self-closed <textarea /> first: it hides another bug.',
  notes: `SLIDE 48 — ACTIVITY D1-13 Broken Signup (10 min, solo) — W2D1/classwork/D1-13-broken-signup-form/  (6 bugs, find at least 4)
The form is <form method="get"> with no action (an empty action="" fails the validators; without action the form submits to the same page).
README: "Fix this one first; it hides bug 6." (the textarea)
REVEAL (2 min) — solution/BUGS.md:
1. <label for="fullname"> but the input is id="name" — V (clicking the label does nothing). Fix: make them match.
2. Phone type="number" (spinner arrows, a leading 0 is lost) — V. Fix: type="tel".
3. Batch radios have different names (batch1, batch2), so both can be ticked — V. Fix: one shared name="batch".
4. Radios have no value, so the URL shows batch=on — D(URL). Fix: value="morning" / value="evening".
5. <textarea /> self-closed, so it swallows the rest of the form as text — V. Fix: <textarea></textarea>.
6. The Submit <button> sits after </form>, so it does nothing — V (visible once bug 5 is fixed). Fix: move it inside the form.
FAST FINISHER: D1-FF5 Notice Board — W2D1/classwork/fast-finishers/D1-FF5-notice-board-bughunt/ (12 surplus bugs from all the class hunts).` });

ex({
  id: 'D1-14', title: 'Extend the order slip', icon: 'edit', min: 7, folder: 'D1-14-extend-order-slip',
  items: ['Required: a tel field with a label', 'Required: Morning / Evening radios, one shared name', 'Required: a <fieldset> + <legend> around them', 'Bonus: date, 2 checkboxes, type="color" (T-shirt)', 'Submit. Read the URL. Every answer there?'],
  done: 'Every input has a label.\n\nThe URL shows phone=…&batch=morning.\n\nThe fieldset draws a box with a title.',
  lead: 'Test by submitting:', body: 'if an answer is missing from the URL, its input has no name.',
  notes: `SLIDE 49 — ACTIVITY D1-14 Extend the order slip (7 min, solo, modify) — W2D1/classwork/D1-14-extend-order-slip/
Required (3): a tel field, a radio group (Morning / Evening batch) with one shared name, a fieldset + legend around them.
Bonus: date, two checkboxes, type="color" ("favourite colour for your TSI T-shirt").
Every input is labelled. Test by submitting and reading the URL. (No optgroup.)
Answer: solution/index.html.` });

// ================================================================= B9 Capstone relay (slide 50)
s = D.activity('D1-15  ·  Momo House repair relay', 'users', { brief: `17 minutes  ·  pairs  ·  ${CW}D1-15-momo-house-repair/`, notes: `SLIDE 50 — ACTIVITY D1-15 Momo House repair relay (rules 2 min + 17 min + reveal 3 min, PAIRS) — W2D1/classwork/D1-15-momo-house-repair/
Story: "Didi's Momo House website broke the night before opening. You are the repair crew."
RULES (2 min): pairs. Driver types, navigator reads and points. Swap after EVERY bug. 1 point per bug + 1 bonus point for naming its visibility tag (V, D(HH), D(F12), R…). Pairs that finish become helpers for another pair (they may point, not type), then move to fast finishers. Scores on the whiteboard at 3:38 and 3:45. Where a bug has two tags (e.g. V + D(HH)), accept either for the bonus point.
Per page: index 3 · menu 3 · order 2 · about 2. On order.html: fix the textarea first.
REVEAL (3 min) — solution/BUGS.md:
index.html: 1 nav link menu.htm — V (fix menu.html) · 2 hero <img> without alt — D(HH) (add alt) · 3 unclosed <a>, the last nav item directly before the <h1>, so the h1 becomes part of the link — V + D(HH) (add </a>).
menu.html: 4 colspan="2" in a 3-column table, so a gap is left at the end of the row — V (colspan="3") · 5 "Today's specials" <li>s with no <ul> — V + D(F12) (wrap in <ul>) · 6 heading jump h1 → h4 — R (use h2).
order.html: 7 label for/id mismatch — V (match them) · 8 <textarea /> self-closed — V (<textarea></textarea>; fix first on this page).
about.html: 9 src="../images/chef-didi.svg", but images/ is next to the page — V (images/chef-didi.svg) · 10 Instagram link without https:// — V (add https://).
Never cut this block.
FAST FINISHER: D1-FF6 Gallery detail page — W2D1/classwork/fast-finishers/D1-FF6-gallery-detail-page/ (places/swayambhu.html with ../ paths and a mailto: link).` });
D.steps(s, { items: ['Driver types. Navigator reads and points.', 'Swap after EVERY bug.', '1 point per bug + 1 for naming its tag (V, D(HH), R…)', 'order.html: fix the textarea first', 'Done? Become helpers (point, do not type)'], gap: 0.5, w: 5.5 });
D.table(s, { x: 6.3, y: 1.7, w: 3.1, colW: [1.9, 1.2], rowH: 0.42, head: ['Page', 'Bugs'], rows: [['index.html', '3'], ['menu.html', '3'], ['order.html', '2'], ['about.html', '2']] });
D.callout(s, { y: 4.6, h: 0.6, lead: '10 bugs. Find at least 8.', body: 'Scores on the whiteboard at 3:38 and 3:45. Then the reveal.' });

// ================================================================= B10 Validate, quiz, homework (slides 51-53)
ex({
  id: 'D1-16', title: 'Validate & self-audit', icon: 'check', min: 4, folder: 'D1-16-validate-self-audit',
  items: ['Open YOUR D1-10 gallery folder', 'Ctrl+Shift+M: fix every HTMLHint problem', 'Tick the audit checklist in the README', 'Wi-Fi? Paste it into validator.w3.org', 'Problems panel at 0? Hand up.'],
  done: 'Problems panel: 0.\n\nChecklist ticked: skeleton, lang, one h1, every img has alt, every link works.',
  lead: 'Spell-checker, second round:', body: 'the W3C validator finds what HTMLHint cannot (Wi-Fi bonus).',
  notes: `SLIDE 51 — ACTIVITY D1-16 Validate & self-audit (4 min) — W2D1/classwork/D1-16-validate-self-audit/
First, 1-minute demo: W2D1/instructor-demos/B10-validate/step-01-before (5 errors) → paste into validator.w3.org (Wi-Fi) or show the Problems panel → step-02-after (clean).
Students audit their OWN D1-10 folder: run HTMLHint (and W3C if Wi-Fi), fix every error, tick the checklist: skeleton, lang, one h1, every img has alt, every link works.` });

s = D.activity('Rapid quiz: 10 questions, Kahoot-style', 'award', { brief: '5 minutes  ·  everyone  ·  30 seconds each  ·  Kahoot or hands up A / B / C / D', notes: `SLIDE 52 — QUIZ (5 min). Kahoot if Wi-Fi; otherwise read each question and the class shows A/B/C/D with fingers (1-4).
1. What does DNS do? A) stores pages B) turns a name into an IP address C) draws the page D) sends email → B
2. Which line must come first in every HTML file? A) <html> B) <head> C) <!DOCTYPE html> D) <title> → C
3. Where does <title> show? A) on the page B) on the browser tab C) in the footer D) nowhere → B
4. How many <h1> per page? A) one B) two C) any D) none → A
5. How do you print a < sign? A) << B) &lt; C) \\< D) &less; → B
6. Recipe steps go in… A) <ul> B) <ol> C) <dl> D) <li> only → B
7. From pages/about.html, the home page is… A) index.html B) /index.html C) ../index.html D) pages/index.html → C
8. A cell with colspan="2" counts as… A) 1 cell B) 2 cells C) half a cell D) a row → B
9. Clicking a label does nothing. Why? A) no name B) for and id do not match C) no value D) no required → B
10. Two radios can both be ticked. Why? A) different names B) no labels C) no form D) type="checkbox" → A
STRETCH NOTE: if a stretch was taken after B3, cut to 7 questions (drop 3, 6, 8).` });
D.cards(s, [
  { head: 'Kahoot (Wi-Fi)', body: 'Join on your phone. 30 seconds per question.' },
  { head: 'No Wi-Fi', body: 'I read the question. Show 1 – 4 fingers for A – D.', pink: true },
  { head: 'Topics', body: 'DNS, skeleton, headings, entities, lists, ../, colspan, labels, radios.' },
], { y: 1.65, h: 1.75 });
D.punchline(s, { y: 3.6, h: 0.9, fontSize: 20, text: 'Wrong answers are welcome. We fix them together.' });

s = D.activity('Homework + exit ticket', 'book', { brief: 'Exit ticket  ·  1 minute  ·  everyone  ·  on paper or in chat', notes: `SLIDE 53 — HOMEWORK + EXIT TICKET (1 min) + "Tomorrow: the outfit"
Homework sheet: W2D1/homework/W2D1-Homework-Sheet.md (core about 2.5 h; HW1 and HW3 are the must-do (1 h), HW2 if you can):
- D1-HW1 Kathmandu Treks repair (12 bugs, 40 min, must-do). If a page is completely blank, fix the <title> first.
- D1-HW2 Momo House catering page (build, about 1.5 h, if you can): add catering.html with a table and a form, link it from all 5 pages, pass HTMLHint.
- D1-HW3 Self-check & interview prep (20 min, must-do).
- D1-HW4 Thamel Guesthouse replay (stretch, optional, +30 min, 12 bugs).
Exit ticket (on paper or in chat): 1) One bug you fixed today and how you found it. 2) One thing that is still confusing.
Close: "Today you built the skeleton and mended it. Tomorrow the skeleton gets its outfit: semantic HTML, then CSS. We will style the Momo House site you repaired today."` });
D.table(s, {
  y: 1.6, colW: [1.4, 4.9, 1.2, 1.4], rowH: 0.44,
  head: ['Id', 'Task  ·  about 2.5 h: MUST-DO first (1 h), HW2 if you can', 'Type', 'Time'],
  rows: [
    ['D1-HW1', 'MUST-DO · Kathmandu Treks repair (blank? fix <title> first)', 'bug-hunt 12', '40 min'],
    ['D1-HW2', 'If you can · Momo House catering page: a table + a form', 'build', 'about 1.5 h'],
    ['D1-HW3', 'MUST-DO · Self-check & interview prep', 'questions', '20 min'],
    ['D1-HW4', 'Thamel Guesthouse replay (stretch, optional)', 'bug-hunt 12', '+30 min'],
  ],
});
D.callout(s, { y: 3.95, h: 0.62, tone: 'pink', lead: 'Exit ticket:', body: '1) One bug you fixed today and how you found it.  2) One thing that is still confusing.' });
D.navyBar(s, { y: 4.72, h: 0.5, text: 'Tomorrow: the skeleton gets its outfit. Semantic HTML, then CSS.' });

(async () => {
  const out = path.join(__dirname, '..', 'TSI-W2D1-HTML-Core-Deck.pptx');
  const r = await D.save(out, { strict: true });
  console.log(`${path.basename(out)}: ${r.slides} slides, ${r.activities} tagged, warnings: ${r.warnings.length}`);
  if (r.placeholders.length) console.log('screenshots to capture:', JSON.stringify(r.placeholders));
})().catch((e) => { console.error(e.message); process.exit(1); });
