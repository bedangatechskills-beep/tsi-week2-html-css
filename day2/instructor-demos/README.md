# Instructor demos · Day 2 (W2D2)

Instructor only: this folder is **not** in the student zip.

## How staged steps work

Each block has a folder (`B0-outfit/`, `B1-semantic/` … `B10-bootstrap/`) with a `STEPS.md` and numbered step folders.

- `step-NN-*` = the **finished state after step NN**. Step 01 is what you have after typing step 01, and so on.
- `STEPS.md` lists, for each step: the exact lines to type, the Emmet shortcut (if any), what to point at, and one
  **"say this"** line.
- **Recovery tip:** if a live demo goes wrong (a typo you can't find, Live Server stuck), don't debug in front of the
  room. Close the file, open the **next** step folder with Live Server, say "here is where we were going", and carry on.
- Every step opens with Live Server on its own (images, media and CSS are copied inside each step folder).

## Blocks

| Block | Folder | Steps | Students then do |
|---|---|---|---|
| B0 Same skeleton, new outfit | `B0-outfit/` | 2 | D2-00 |
| B1 Semantic HTML5 | `B1-semantic/` | 2 | D2-01, D2-02 |
| B2 Accessibility + meta | `B2-a11y-meta/` | 2 (Narrator on the projector) | D2-03 |
| B3 Audio, video, iframe | `B3-media/` | 3 | D2-04, D2-05 |
| B4 CSS intro | `B4-css-intro/` | 3 | D2-06, D2-07 |
| B5 Selectors | `B5-selectors/` | 4 | D2-08, D2-09 |
| B6 Colours, units, fonts | `B6-colors-units/` | 3 | D2-10, D2-11 |
| B7 Box model | `B7-box-model/` | 4 | D2-12, D2-13 |
| B8 Display | `B8-display/` | 2 | D2-14 |
| B9 Style Momo House | `B9-mini-site/` | 5 checkpoints | D2-15 (built alongside) |
| B10 Bootstrap teaser | `B10-bootstrap/` | 2 | D2-FF6 / at home |

## Before class

- Open `W2D2` in VS Code once and check that Live Server and HTMLHint are installed.
- B2: test the speakers and Narrator (Ctrl+Win+Enter turns it on and off).
- B3: open `B3-media/step-02-video` once, so Chrome has played the video before class.
