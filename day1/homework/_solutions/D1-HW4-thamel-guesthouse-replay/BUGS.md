# D1-HW4 Thamel Guesthouse replay — answer key (instructor)

Line = the line in the **starter** file.

| # | File | Line | Bug | Fix | Tag |
|---|---|---|---|---|---|
| 1 | index.html | 1 | `<!DOCTYPE html>` is missing | Add it as line 1 | D(HH) doctype-first |
| 2 | index.html | 7 | `<title>` is inside `<body>`, not `<head>` | Move the `<title>` line up into `<head>` | D(F12) |
| 3 | index.html | 12 | `Room-Deluxe.svg` with capitals, but the file is `room-deluxe.svg` | Write `src="images/room-deluxe.svg"` | H |
| 4 | index.html | 9 | The guesthouse picture has no `alt` | Add a useful `alt` | D(HH) alt-require |
| 5 | booking.html | 19 | The Double row has no `<tr>` | Wrap the cells in `<tr>` … `</tr>` | D(F12) |
| 6 | booking.html | 17 | `<caption>` comes after the first row | Move `<caption>` to be the first thing inside `<table>` | D(W3C) |
| 7 | booking.html | 30 | Email uses `type="text"` | Use `type="email"` | V |
| 8 | booking.html | 38 | The Deluxe `<option>` is after `</select>` | Move it inside the `<select>` | V |
| 9 | booking.html | 26 | `requred` typo | Write `required` | V |
| 10 | booking.html | 34 | The room `<select>` has no `name` | Add `name="room"` | D(URL) |
| 11 | booking.html | 42 | The room-type radios have different names | Give both `name="room-type"` | V |
| 12 | booking.html | 48 | The Book now button is after `</form>` | Move the button inside the form | V |

## How you could see each one

1. The page looks fine. HTMLHint: "Doctype must be declared first".
2. The tab **still** shows "Thamel Guesthouse"! The browser is a polite guesser. F12 → Elements shows the title in the wrong box.
3. Works on Windows, broken on a Linux web server.
4. HTMLHint: "An alt attribute must be present on <img> elements".
5. It looks right. F12 → Elements shows the browser invented the `<tr>`.
6. The caption still shows on top. Only the W3C validator reports it: a caption must be the first child of the table.
7. Type `abc` as the email and submit: the form is sent. With `type="email"` the browser stops you.
8. Deluxe is missing from the drop-down, and the word "Deluxe" appears loose next to it.
9. Submit with an empty name: the form is sent anyway.
10. Submit and read the URL: there is no `room=` part. The kitchen (server) never hears which room.
11. You can tick Standard **and** With balcony.
12. Click Book now: nothing happens.
