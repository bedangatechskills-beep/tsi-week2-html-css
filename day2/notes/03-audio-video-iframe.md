# 03 · Audio, Video and iframe: TV, Radio, and a Window into Another Room
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2 · Day 2 · Block B3*
**Layer:** Frontend (HTML media)

> **Today in one sentence:** `<audio>` is a radio, `<video>` is a TV, and `<iframe>` is a window that shows another page inside yours.

## The picture to keep in your head

**TV, radio, and a window into another room.**

| Analogy | Real thing | What you must give it |
|---|---|---|
| A **radio** on the canteen shelf | `<audio>` | a sound file, and **buttons** (`controls`) so people can switch it on |
| A **TV** on the wall | `<video>` | a video file, buttons (`controls`), a picture to show before it plays (`poster`) |
| The **channel** the TV is tuned to | `<source src="…" type="…">` | the right file and the right type |
| "If this TV is broken, read the menu on the board" | fallback text inside `<video>` / `<audio>` | a sentence for old browsers |
| A **window** into the next room | `<iframe>` | the page to show (`src`), a size, and a **title** (what room is it?) |

A radio with no buttons is still a radio, but nobody can switch it on. That is `<audio>` without `controls`: it exists, but you see **nothing**.

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| `<audio>` | Plays sound. | `<audio src="media/canteen-bell.wav" controls></audio>` |
| `<video>` | Plays video. | `<video src="media/momo-steam.mp4" controls width="640"></video>` |
| `controls` | A **boolean attribute**: just writing it turns on the play/pause/volume bar. | `controls` (no value needed) |
| Boolean attribute | An attribute that is ON when it is present and OFF when it is missing. `controls="false"` is still ON! | `controls`, `muted`, `autoplay`, `loop`, `required` |
| `<source>` | One file option for a video or audio. Goes **inside** `<video>`/`<audio>`. | `<source src="media/momo-steam.mp4" type="video/mp4">` |
| `type` (MIME type) | Tells the browser what kind of file it is, so it can skip ones it cannot play. | `video/mp4`, `audio/wav`, `audio/mpeg` |
| `poster` | The picture a video shows before it plays. | `poster="images/poster-momo-steam.svg"` |
| `autoplay` | Start playing by itself. Browsers allow it only when the video is `muted` (or the file has no sound track). | `autoplay muted` |
| `muted` | Start with the sound off. | `muted` |
| `loop` | Start again at the end. | `loop` |
| Fallback text | Text inside `<video>`/`<audio>` that only very old browsers show. | "Your browser cannot play this video." |
| `<iframe>` | Shows another web page inside a box on your page. | `<iframe src="kathmandu-map.html" title="Map of Kathmandu"></iframe>` |
| `title` (on iframe) | Tells a screen reader what is in the window. Required for accessibility. | `title="Map of Momo House in Thamel"` |

## How it works

### Audio and video are boxes, not stickers

`<img>` is a sticker (no closing tag). `<audio>` and `<video>` are **boxes**: they have a closing tag, because they can hold `<source>` tags and fallback text inside.

```text
<video controls width="640" poster="images/poster-momo-steam.svg">
  <source src="media/momo-steam.mp4" type="video/mp4">    ← channel option 1
  Your browser cannot play this video.                    ← fallback text
</video>
```

### src on the tag, or source inside?

Both work:
- **Short form:** `<video src="media/momo-steam.mp4" controls></video>` for one file.
- **Long form:** one or more `<source>` tags **inside**. The browser tries them from top to bottom and plays the first one it can. The `type` lets it skip files it knows it cannot play, without downloading them.

If you put `<source>` **after** `</video>`, it is not inside the TV any more. The TV has no channel, so the video stays empty.

### Common file types

| File | Use | `type` |
|---|---|---|
| `.mp4` (H.264) | video, works in every modern browser | `video/mp4` |
| `.webm` | video, smaller files | `video/webm` |
| `.mp3` | audio | `audio/mpeg` |
| `.wav` | audio, big but simple | `audio/wav` |

A wrong `type` (for example `video/mp3` on an MP4 file) makes the browser think "I can't play that", and it **skips** the file.

### The autoplay rule

Nobody likes a page that shouts at them. So browsers block **autoplay with sound**. They allow `autoplay` when the video is also `muted`:

```text
<video src="media/momo-steam.mp4" autoplay muted loop width="320"></video>
```

Use autoplay rarely (a short silent background loop at most). Always give `controls` for anything with sound.
Our class checker (html-validate, with its accessibility rules) even warns about **every** `autoplay`, muted or not:
"The autoplay attribute is not allowed on `<video>`". Moving things distract some readers and make others feel
unwell. So the safe habit is: **no autoplay; give `controls` and let the user choose.**

### Boolean attributes: present = ON

`controls="false"` does **not** hide the controls. The browser only checks "is the word `controls` there?". To turn it off, delete the attribute.

### iframe: a window into another room

`<iframe>` shows a whole other page inside a box. It is used for maps, YouTube videos, payment forms and more. In class we show a **local** page (`kathmandu-map.html`), so it works without Wi-Fi.

- `src`: which page to show. A wrong name shows a 404 page **inside** the window.
- `width` and `height`: the size of the window, in pixels (no `px` in HTML attributes).
- `title`: says what the window shows. Screen readers read it. Lighthouse reports a missing title.

Many big sites (Google, banks) refuse to be shown in someone else's iframe, for safety. That is why a YouTube link must use its special "embed" address. For now, use your own local pages.

### Paths are the same as on Day 1

`media/canteen-bell.wav` means "the `media` folder next to this page". Spelling and case must match the real file name exactly: `canteen_bell.wav` (underscore) is a different file from `canteen-bell.wav`.

## Code you built today

### Step 1: the canteen bell (audio)

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TSI Canteen | The lunch bell</title>
</head>
<body>
  <main>
    <h1>The TSI Canteen bell</h1>
    <p>Didi rings this bell when lunch is ready.</p>
    <audio src="media/canteen-bell.wav" controls>
      Your browser cannot play audio. The bell means: lunch is ready!
    </audio>
  </main>
</body>
</html>
```
- `controls` shows the play bar. Without it, the `<audio>` is on the page but invisible.

**Predict:** delete `controls` and save. What do you see? Is the audio element still in the Elements panel?

### Step 2: the momo steam video

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | How we steam momo</title>
</head>
<body>
  <main>
    <h1>How Didi steams momo</h1>
    <video controls width="640" poster="images/poster-momo-steam.svg">
      <source src="media/momo-steam.mp4" type="video/mp4">
      Your browser cannot play this video. Visit Momo House in Thamel to see it live!
    </video>
    <p>Four seconds of steam. Ten minutes in real life.</p>
    <h2>Watch it again and again</h2>
    <video src="media/momo-steam.mp4" controls loop width="320"></video>
  </main>
</body>
</html>
```
- The first video starts with the **poster** picture and waits for the user.
- The second one has no poster, so it shows its first frame. It starts again at the end because of `loop`.
- Try it yourself: add `autoplay muted` to the second video. It plays by itself. On a video **with sound**, removing `muted` usually stops autoplay until the visitor has clicked on the site. (Our momo video has no sound track, so Chrome plays it anyway: that is why the class bug-hunts never test autoplay.)

**Predict:** change `poster="images/poster-momo-steam.svg"` to `poster="image/poster-momo-steam.svg"` (no "s"). What does the first video look like before you press play?

### Step 3: a window into the map page

File: `kathmandu-map.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kathmandu map</title>
</head>
<body>
  <h1>Find us in Kathmandu</h1>
  <img src="images/kathmandu-map.svg" alt="Map of Kathmandu with the Ring Road and pins for TSI Dillibazar, Thamel, Swayambhu, Patan and Boudha" width="500">
</body>
</html>
```

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House | Find us</title>
</head>
<body>
  <main>
    <h1>Find Momo House</h1>
    <p>We are in Thamel, a short walk from TSI.</p>
    <iframe src="kathmandu-map.html" title="Map of Kathmandu showing Momo House and TSI" width="600" height="450"></iframe>
  </main>
</body>
</html>
```
- `index.html` shows `kathmandu-map.html` inside a 600 × 450 window.
- `title` tells a screen reader what the window shows.

**Predict:** change `src` to `kathmandu-map.htm` (no "l"). Where does the error appear: on your page or inside the window?

## Quick reference

```text
<audio src="media/canteen-bell.wav" controls></audio>

<video controls width="640" poster="images/poster-momo-steam.svg">
  <source src="media/momo-steam.mp4" type="video/mp4">
  Your browser cannot play this video.
</video>

<video src="media/momo-steam.mp4" autoplay muted loop width="320"></video>   (only if you really must)

<iframe src="kathmandu-map.html" title="Map of Kathmandu" width="600" height="450"></iframe>
```

| Attribute | On | Does |
|---|---|---|
| `controls` | audio, video | shows play/pause/volume |
| `poster` | video | picture before play |
| `autoplay` + `muted` | video | plays by itself, silently |
| `loop` | audio, video | repeats |
| `width` / `height` | video, iframe | size in pixels (no `px`) |
| `title` | iframe | names the window for screen readers |

## Mistakes everyone makes

| You see… | Because… | Fix | Planted in |
|---|---|---|---|
| Nothing at all where the audio should be | No `controls` | Add `controls` | D2-04 bug 1 |
| The player shows 0:00 and will not play | File name wrong (`canteen_bell.wav`) | Match the real name: `canteen-bell.wav` | D2-04 bug 2 |
| A still frame with no play button | `<video>` has no `controls` | Add `controls` | D2-04 bug 3 |
| A black box before play | `poster` path wrong (`image/` instead of `images/`) | Fix the folder name | D2-04 bug 4 |
| "Not found" **inside** the iframe | Wrong file name or extension (`.htm`) | `kathmandu-map.html` | D2-04 bug 5 |
| An empty video player | `<source>` is after `</video>` | Move `<source>` inside | D2-HW4 bug 3 |
| The second video never plays | `type="video/mp3"` on an MP4 file | `type="video/mp4"` | D2-HW4 bug 4 |
| Lighthouse: "`<frame>` or `<iframe>` elements do not have a title" | No `title` | Add a `title` | D2-FF5 bug 7 |
| Controls still show with `controls="false"` | Boolean attributes are ON when present | Remove the attribute | (class talk) |

## Check yourself

1. Why do `<audio>` and `<video>` need a closing tag, when `<img>` does not?
2. What does the `controls` attribute do? What happens without it?
3. Why does `controls="false"` still show the controls?
4. What is a `poster`, and when does the user see it?
5. Under which condition will a browser let a video autoplay?
6. Why should every `<iframe>` have a `title`?
7. The video player is empty but the file exists. Name two possible reasons.
8. Explain `<iframe>` to a friend using "a window into another room".

## Try it

- **D2-04** 🐞 Broken Media (5 bugs, all V).
- **D2-05** Media corner: the audio and video are done; add the iframe with a `title`, `width` and `height`. Bonus: fallback text.
- **D2-HW4** 🐞 Patan Craft Shop replay: bugs 3 and 4.
- **D2-FF5** 🐞 Lost & Found: bug 7.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line.
A good prompt: *"My video shows only a black box with a play button, and nothing happens when I press it. Here is my video tag and my folder list. What are the possible causes? Explain; don't rewrite it."*

## Go deeper

- MDN: [Video and audio content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- MDN: [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

---
*Remember the One Rule: **You may only ship code you can explain, line by line.***
*Next note: [04 · CSS basics and linking](04-css-basics-and-linking.md): the skeleton gets its outfit.*
