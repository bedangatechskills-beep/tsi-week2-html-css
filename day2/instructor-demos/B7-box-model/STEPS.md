# B7 · Box model + DevTools — demo steps

**When:** 2:35–3:03 (D2-12, D2-13 follow) · **Analogy:** **Parcels being shipped**: content = item, padding = bubble wrap, border = cardboard, margin = gap between parcels

Open `W2D2/instructor-demos/B7-box-model/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · the item (content width) (`step-01-content-width/`)

**In `css/style.css`, type:**

```css
/* Boxes being shipped */
body {
  font-family: Arial, sans-serif;
  background-color: #eef1f6;
}

.card {
  width: 300px;
  background-color: white;
}

.avatar {
  width: 120px;
  height: 120px;
}
```

**Emmet:** —

**Point at:** F12 → Elements → `.card` → Computed: the box diagram shows 300 × height.

**Say this:** "This is the item in the parcel: 300 pixels wide."

## Step 02 · bubble wrap and cardboard (`step-02-padding-border/`)

**In `css/style.css`, type:**

```css
/* bubble wrap and cardboard */
.card {
  padding: 20px;
  border: 5px solid #14213d;
}
```

**Emmet:** —

**Point at:** The box diagram now says 300 + 2×20 + 2×5 = **350**. Ask the room: "I said 300. Why is it 350?"

**Say this:** "Padding is the bubble wrap inside, border is the cardboard. Both are added OUTSIDE the 300."

## Step 03 · the gap and centring (`step-03-margin-center/`)

**In `css/style.css`, type:**

```css
/* the gap between parcels, and centring */
.card {
  margin: 40px auto;
}
```

**Emmet:** —

**Point at:** Shorthand: 1 value = all sides; 2 values = top/bottom, left/right; 4 values = clockwise from the top. Delete `width`, save: `auto` can no longer centre it. Undo.

**Say this:** "margin: 40px auto means 40 above and below, and share the rest equally left and right. It only works with a width."

## Step 04 · the width trap + round corners (`step-04-border-box-radius/`)

**In `css/style.css`, type:**

```css
/* the width trap + round corners */
.card {
  box-sizing: border-box;
  border-radius: 16px;
  text-align: center;
}

.avatar {
  border-radius: 50%;
}
```

**Emmet:** —

**Point at:** The box diagram goes back to 300 total. Change the avatar `height` to 80px: an oval. Undo.

**Say this:** "border-box means 300 is the whole parcel, cardboard included. A circle needs a square."

**Then:** **D2-12** 🐞 (8 min) + reveal, **D2-13** (7 min), **show & tell** (3 min).
