# D2-08 · Selector mix-ups

**Time:** 8 min · **Type:** 🐞 Bug-hunt

**Goal:** Make every selector find its element.

Open `index.html` with Live Server (right-click → **Open with Live Server**). No Live Server? Double-click the file and press F5 after each save.

## Task

1. Look at the page: which parts look plain when they should be styled?
2. For each plain part, find its rule in `css/style.css` and its tag in `index.html`. Do they match exactly?
3. Mend each mistake (in the CSS or the HTML). Save and check.

## The bugs

**There are 5 bugs. Find at least 3.**

Hints, one per bug type:

- **Capital letters:** `card` and `Card` are different names.
- **Ids:** the name after `#` must be the same as `id="…"`.
- **Classes need a dot:** `.price` finds `class="price"`.
- **Commas:** a selector list cannot end with a comma.
- **Hover:** move the mouse over every link. Check the spelling of the part after `:`.

How you can see a bug (the tag in the answer key):

| Tag | Meaning | Tool that shows it |
|---|---|---|
| **V** | You can **see** it on the page | your eyes |
| **D(HH)** | HTMLHint underlines it in VS Code / Problems panel (Ctrl+Shift+M) | HTMLHint |
| **D(F12)** | Only the Elements panel shows what the browser actually built | Chrome DevTools |
| **D(LH)** | Lighthouse → Accessibility report finds it (works offline) | Chrome DevTools |
| **D(W3C)** | Only the W3C validator reports it | validator.w3.org (Wi-Fi bonus) |
| **R** | **Rule check**: no tool fires; read the code against the rule | your brain + the notes |

## Done looks like

A navy nav bar with white links, cherry Georgia headings, three white cards with red borders, big bold red prices, and "Order" links that turn red-and-white on hover.

## Scoreboard

`I found __ / 5. The reveal taught me: ________`

## Stuck?

1. F12 → Elements → click the plain element. If its rule is **missing** from the Styles panel, the selector does not match.
2. Read the "Calling students in class" slide: element, `.class`, `#id`.
3. Ask the AI tutor: "Why does a trailing comma in a selector list break the rule?"

## Fast?

Go on to **D2-09**. Then try **D2-FF3** Specificity duel.
