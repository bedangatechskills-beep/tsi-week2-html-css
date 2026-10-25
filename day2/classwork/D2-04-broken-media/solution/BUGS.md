# D2-04 Broken media — answer key (BUGS.md)

Page: "TSI Canteen Media Corner" (`index.html`) + the map page shown in the iframe (`kathmandu-map.html`, no bugs).

Line = the line in the **starter** file. Tags: V = see it · D(HH) = HTMLHint · D(F12) = Elements panel · D(LH) = Lighthouse · D(W3C) = W3C validator · R = rule check.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | `index.html` | 17 | The first `<audio>` has no `controls`, so nothing shows on the page. | `<audio src="media/canteen-bell.wav" controls></audio>` | V |
| 2 | `index.html` | 19 | The second audio points to `media/canteen_bell.wav` (underscore). The file is `canteen-bell.wav` (dash). The player shows 0:00 and will not play. | `src="media/canteen-bell.wav"` | V |
| 3 | `index.html` | 23 | The `<video>` has no `controls`: no play button, so nobody can start it. | Add `controls` to `<video>`. | V |
| 4 | `index.html` | 23 | `poster="image/poster-momo-steam.svg"`: the folder is `images`. Before play you see an empty box, not the poster. | `poster="images/poster-momo-steam.svg"` | V |
| 5 | `index.html` | 30 | `<iframe src="kathmandu-map.htm">`: the file is `.html`. The window shows a 404 page. | `src="kathmandu-map.html"` | V |

**Reveal tip:** fix bug 3 before bug 4 on the projector. With controls and no poster, the room sees an empty box with a play button. Then fix the poster path and the momo picture appears.
