# B3 · Audio, video, iframe — demo steps

**When:** 0:52–1:10 (D2-04, D2-05 follow) · **Analogy:** **TV, radio, and a window into another room**

Open `W2D2/instructor-demos/B3-media/` in VS Code and start Live Server on the step you are typing in. Each `step-NN-*` folder is the **finished state after step NN**. If the live typing goes wrong, open the next step folder and carry on.

## Step 01 · the radio (`step-01-audio/`)

**In `index.html`, type:**

```html
      <h2>Radio: the canteen bell</h2>
      <audio controls>
        <source src="media/canteen-bell.wav" type="audio/wav">
        Your browser cannot play this sound.
      </audio>
```

**Emmet:** `audio` + Tab, then add `controls`; `source` + Tab inside

**Point at:** Delete `controls`, save: the player disappears. Put it back.

**Say this:** "No controls, no radio on the page. The text inside is for very old browsers: fallback text."

## Step 02 · the TV (`step-02-video/`)

**In `index.html`, type:**

```html
      <h2>TV: momos in the steamer</h2>
      <video controls width="640" height="360" poster="images/poster-momo-steam.svg">
        <source src="media/momo-steam.mp4" type="video/mp4">
        Your browser cannot play this video.
      </video>
      <h3>Autoplay? Only when muted</h3>
      <video autoplay muted loop width="320" height="180">
        <source src="media/momo-steam.mp4" type="video/mp4">
      </video>
```

**Emmet:** `video` + Tab

**Point at:** The poster is shown before play. The second video plays by itself only because it is `muted`: remove `muted`, save, and Chrome refuses to autoplay it. (html-validate flags every `autoplay`, even muted: use it rarely.)

**Say this:** "Browsers block noisy autoplay. If you want autoplay, it must be muted."

## Step 03 · a window into another room (`step-03-iframe/`)

**In `index.html`, type:**

```html
      <h2>A window: the Kathmandu map</h2>
      <iframe src="kathmandu-map.html" title="Map of Kathmandu with the TSI campus" width="620" height="520"></iframe>
```

**Emmet:** `iframe` + Tab (delete the old `frameborder`)

**Point at:** The map page lives in its own file, `kathmandu-map.html`, and shows inside the window. F12 → Elements: a whole second document inside the iframe.

**Say this:** "An iframe is a window into another page. The title tells a screen reader what is behind the window."

**Then:** **D2-04** 🐞 (8 min) + reveal, **D2-05** (3 min).
