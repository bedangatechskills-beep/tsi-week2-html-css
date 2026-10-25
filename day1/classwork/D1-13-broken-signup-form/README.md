# D1-13 · Broken Signup

**Time:** 10 min · **Type:** 🐞 Bug-hunt · **Work:** alone

**Goal:** Repair a signup form: labels, input types, radio names and values, and the submit button.

## Open it

Open `index.html` with Live Server (right-click → **Open with Live Server**).
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

This is the TSI course signup form. It uses `method="get"`, so when you submit it, your answers appear in the **address bar**. That is your tool for this hunt.

File: `index.html` (one file).

**There are 6 bugs. Find at least 4.**

> ⚠️ **Fix this first:** the text box (textarea) is full of code. Repair the textarea first. It hides the last bug.

For each bug: find it, fix it, save, and check the page again.

### Hints (one per bug type)

- **Labels**: click each label. Does the cursor jump into its box? `for` must match the input's `id`.
- **Input types**: is a phone number something you add and subtract? Try typing `+977 980` in the phone box.
- **Radio buttons**: can you pick only one batch? Radios in one group share one `name`.
- **What the kitchen receives**: submit and read the URL. Does it say which batch you chose?
- **Self-closing**: some tags cannot close themselves.
- **Submit**: a button must be inside the form to send it.

### How bugs hide (the visibility legend)

| Tag | Meaning | How you see it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code (Problems panel: Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser really built | F12 → Elements |
| **D(URL)** | Submit the form and read the address bar | the URL bar |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi) |
| **H** | Hidden on Windows; breaks on a real Linux server (capital letters in a file name) | the instructor explains |
| **R** | Rule check: no tool shows it. Read the code and check the rule | your brain + the notes |

## Done looks like

- Clicking any label puts the cursor in its box.
- Phone has no arrows.
- Only one batch can be ticked.
- Fill the form, click **Sign up**, and the URL ends like:
  `?fullname=Sunita+Gurung&email=sunita%40example.com&phone=9841000000&batch=morning&message=I+love+HTML`

## Scoreboard

Write this in your notebook:

`I found __ / 6. The reveal taught me: ________`

## Stuck?

1. Submit and read the URL after `?`. Each `name=value` pair is one box.
2. Problems panel (Ctrl+Shift+M) will not help much here. Click, type and submit instead.
3. Compare each input with the examples in `notes/09-forms.md`.

## Fast?

Try **D1-FF5 Notice Board** in `classwork/fast-finishers/`.
