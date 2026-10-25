# D2-FF3 · Specificity duel

**Time:** fast finisher · **Type:** 🔨 Predict + check

**Goal:** 8 puzzles: two CSS rules fight over one element. Predict the winner, then check in DevTools.

Open `css/style.css` first. **Do not open the page yet.**

## Task

- [ ] For each puzzle, read the HTML element in `index.html` and its rules in `css/style.css`.
- [ ] Write your guess on paper: `1: ____  2: ____ … 8: ____`.
- [ ] Now open `index.html` with Live Server. Count your correct guesses.
- [ ] For each wrong guess: F12 → Elements → click the element → Styles. Which rule is crossed out?
- [ ] Then read `solution/ANSWERS.md` (ask the instructor).

## Done looks like

8 guesses on paper, checked against the page, and for each one you can say **why** it won.

## Stuck?

1. Score each selector: count ids, then classes, then elements. Compare from the left.
2. Same score? The rule written later wins.
3. Puzzle 6 and 7 are special: one is about `style=""`, one is about inheritance.

## Fast?

Try **D2-FF4** Haunted stylesheet.
