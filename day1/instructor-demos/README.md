# Instructor demos · Day 1

Staged demo folders, one per block. **Students do not get this folder** (it is not in the student zip).

## How the steps work

- Each block folder has a `STEPS.md` and numbered folders: `step-01-…`, `step-02-…`.
- **`step-NN` holds the finished state after step NN.** Step 2 = step 1 + what you type in step 2.
- `STEPS.md` gives, for each step: the folder, the **exact lines to type**, the **Emmet** abbreviation (if any),
  what to **point at**, and one **"say this"** line.

## Recovery tip

Live demo went wrong (typo, lost track, laptop froze)? Don't debug in front of the room. Close the file, open the
**next** step folder with Live Server, say "here is where we were going", and carry on.

## Blocks

| Block | Folder | Steps | Used before |
|---|---|---|---|
| B1 How the web works | `B1-internet/` | ping, Network tab, View Source on `step-01-parcel-page` | D1-01 |
| B2 VS Code + Emmet | `B2-vscode-emmet/` | 2 | D1-02 |
| B3 Skeleton + spell-checker | `B3-skeleton/` | 5 (step 5 has 3 errors on purpose) | D1-03, D1-04 |
| B4 Text + entities | `B4-text/` | 4 | D1-05, D1-06 |
| B5 Lists | `B5-lists/` | 3 | D1-07, D1-08 |
| B6 Links, paths, images | `B6-links-images/` | 5 | D1-09, D1-10 |
| B7 Tables | `B7-tables/` | 3 | D1-11, D1-12 |
| B8 Forms | `B8-forms/` | 4 | D1-13, D1-14 |
| B10 Validate | `B10-validate/` | 2 (step 1 has 5 errors on purpose) | D1-16 |

B9 (the Momo House relay) has no demo: it is all hands-on (D1-15).

## Before class

1. Open the `W2D1` folder in VS Code (not a sub-folder), so Live Server serves every step.
2. Zoom VS Code to 150 % (Ctrl+=) and Chrome to 125 % for the projector.
3. Check HTMLHint shows squiggles on `B3-skeleton/step-05-htmlhint-demo/index.html`.
