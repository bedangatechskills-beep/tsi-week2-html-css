# W2D2 Student Notes: Semantic HTML, Accessibility, Media → CSS Basics
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Layer: Frontend*

> **Today in one sentence:** first you give the skeleton's boxes real names, then you dress the skeleton with CSS.

Yesterday (Day 1) you built and repaired HTML skeletons. Today you do two things:
1. **Tidy the skeleton.** Use boxes with names (`<header>`, `<nav>`, `<main>`…), make the page work for everyone (accessibility), and add sound, video and a window into another page.
2. **Dress the skeleton.** Write CSS: rules, selectors, colours, units, fonts, the box model and display.

All the examples use the same story as class: **Momo House** (Didi's momo restaurant in Kathmandu), the **TSI Canteen**, and the students **Aarav**, **Sunita** and **Rajan**.

## How to use these notes

- Read a note **after** its class block, or before the homework.
- Every code block that starts with `File:` is a **complete file**. Make a new folder, create the file with that exact name, paste nothing: **type it**. Then open it with Live Server.
- Images and media: copy the SVG files you need from `W2D2/assets/images/` into an `images/` folder next to your file (and `.wav`/`.mp4` from `W2D2/assets/media/` into a `media/` folder).
- Code marked **broken** in the text is wrong on purpose. It shows a mistake. Do not copy it into your projects.
- **Predict:** lines ask you to guess before you run. Guess first. Then check. This habit makes you a strong developer.
- "Check yourself" questions have no answers here. Test yourself, then check with the code, your notes or the HW3 sheet.

## The notes

| # | File | Class block | What it covers |
|---|---|---|---|
| 01 | [01-semantic-html5.md](01-semantic-html5.md) | B1 | header, nav, main, section, article, aside, footer, figure; div and span; button vs div |
| 02 | [02-accessibility-and-meta.md](02-accessibility-and-meta.md) | B2 | lang, alt, link text, labels, heading order, contrast, title, meta description, viewport, favicon, Lighthouse, the Tab walk |
| 03 | [03-audio-video-iframe.md](03-audio-video-iframe.md) | B3 | audio, video, source + type, poster, autoplay + muted, fallback text, iframe + title |
| 04 | [04-css-basics-and-linking.md](04-css-basics-and-linking.md) | B0 + B4 | skeleton & outfit, rule anatomy, inline / internal / external CSS, comments, the cascade, DevTools Styles |
| 05 | [05-selectors.md](05-selectors.md) | B5 | element, .class, #id, grouping, descendant, .a.b, :hover, light specificity |
| 06 | [06-colours-units-fonts.md](06-colours-units-fonts.md) | B6 | named / hex / rgb / rgba, px / % / rem / em, font stacks, text properties |
| 07 | [07-box-model.md](07-box-model.md) | B7 | content, padding, border, margin, shorthand, margin: 0 auto, box-sizing, border-radius |
| 08 | [08-display.md](08-display.md) | B8 | block, inline, inline-block, none vs visibility: hidden, a horizontal nav |
| 09 | [09-debugging-css.md](09-debugging-css.md) | all CSS blocks | every CSS bug type + the table **"what the browser drops"** |
| 10 | [10-bootstrap-teaser.md](10-bootstrap-teaser.md) | B10 | Bootstrap = IKEA for websites: container, btn, card |
| 11 | [11-day2-cheatsheet.md](11-day2-cheatsheet.md) | all | one-page summary to keep next to your keyboard |

## The bug visibility legend (same as class)

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi) |
| **H** | Hidden on Windows, breaks on a real Linux server (file-name case) | the instructor |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + these notes |

## AI rule for this week

**Stage 1: AI as Tutor.** AI may **explain** any concept or error. You type every line yourself. Try to debug first; ask AI only after you have tried.

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
