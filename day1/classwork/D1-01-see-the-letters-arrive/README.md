# D1-01 · See the letters arrive

**Time:** 8 min · **Type:** 🔍 Explore · **Work:** alone

**Goal:** See with your own eyes that a web page is many parcels sent by a server.

## Open it

This exercise uses a terminal, Live Server and Chrome DevTools.
No Live Server? Double-click the file. It opens in Chrome. Press F5 after each save.

## Your task

**Remember the postal system:** your browser writes a letter (the **request**). The server mails back a parcel (the **response**).
One page = many parcels.

1. **Ping (a letter there and back).** Open a terminal in VS Code: menu **Terminal → New Terminal** (shortcut: **Ctrl** + the key under Esc).
   - No Wi-Fi: type `ping localhost` and press Enter.
   - Wi-Fi: type `ping google.com` and press Enter.

   Copy one reply line into `my-findings.md`.
2. **Count the parcels.** Open `index.html` with Live Server. Press **F12** → **Network** tab → press **F5**.
   Count the lines. Write the number and the names in `my-findings.md`.
   - Do **not** count a line called `ws`. That is Live Server listening for your saves.
3. **Read the letter's answer.** Right-click on the page → **View Page Source** (or Ctrl+U).
   Find the `<h1>`. Write its text and its line number in `my-findings.md`.
4. **Wi-Fi bonus:** open any real website (for example a news site), F12 → Network → F5. How many requests?

## Done looks like

- `my-findings.md` has a ping reply line, the number of parcels (it should be **7**), and the `<h1>` text and line number.
- You can say in one sentence: "One page is many files; the browser asks for each one."

## Stuck?

1. The Network tab is empty? Keep it open and press F5 again. It only records while it is open.
2. You count 8? One line is `ws` (Live Server). Don't count it. Without Live Server (double-click), the Network tab shows the same 7 files as `file://`.
3. Ping says "could not find host"? No Wi-Fi. Use `ping localhost` instead.

## Fast?

Open `style.css` and change the `h1` colour from `#990011` to `#0B6E4F`. Save. Which parcel changed? Check the Network tab.
