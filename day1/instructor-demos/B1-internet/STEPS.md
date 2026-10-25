# B1 · How the web works — demo steps

The Internet is a **postal system**: the browser writes a letter (request), DNS is the phone book, the IP is the home
address, the server is a warehouse, and the response is a parcel. **One page = many parcels.**

`step-01-parcel-page/` is the finished page: 1 HTML + 1 CSS + 5 SVG = **7 parcels**. It is the same page the students
open in **D1-01**.

## Step 1 · A letter there and back (ping) — 2 min

Open the VS Code terminal: **Ctrl+`**.

**Type exactly:**

```
ping localhost
```

Wi-Fi up? Then also:

```
ping google.com
```

**Point at:** `time=…ms` (one letter there and back). With google.com, point at the first line
`Pinging google.com [142.250.x.x]`: that address came from **DNS**, the phone book.

> 🗣️ **Say this:** "Every reply is one letter that went to the other computer and came back. The internet is not magic. It is computers mailing text to each other."

**Offline path:** `ping localhost` always works. It is a letter to your own house: under 1 ms.

## Step 2 · Count the parcels (F12 → Network) — 3 min

**Folder:** `step-01-parcel-page/`

1. Right-click `index.html` → **Open with Live Server**.
2. **F12** → **Network** tab → press **F5**.

**Point at:**
- the 7 rows: `index.html`, `style.css`, 5 × `.svg`
- the **Type** column (document, stylesheet, svg+xml) and the **Size** column
- the bottom bar: "7 requests" (plus Live Server's `ws` line: "that is Live Server listening for my saves; not part of the page")
- click `index.html` → **Response** tab: "this is the letter the server sent back: plain text."

> 🗣️ **Say this:** "I asked for one page. My browser sent seven letters and got seven parcels back. Every picture is its own parcel."

**Wi-Fi bonus:** open any news site, F12 → Network → F5. Read the request count at the bottom (often 100+).

## Step 3 · Read the letter (View Source) — 1 min

Right-click the page → **View Page Source** (Ctrl+U).

**Point at:** the `<h1>` on line 13, and the `<link rel="stylesheet" href="style.css">` line:
"this line is why the browser sent a second letter for the CSS."

> 🗣️ **Say this:** "View Source shows the exact letter the server mailed back. The browser reads it top to bottom and asks for every file it mentions."

## Step 4 · Restaurant recap — 1 min

Point at the three files in the Explorer: `index.html` (HTML = ingredients and menu structure), `style.css`
(CSS = plating and decor), and no `.js` yet (JS = the waiter, later in the course).

> 🗣️ **Say this:** "HTML is what is on the plate. CSS is how it looks. JavaScript is the waiter who reacts when you call. Today is all HTML."

## Offline path

Everything above works with no Wi-Fi except `ping google.com` and the news-site bonus. Use `ping localhost` and the parcel page.
