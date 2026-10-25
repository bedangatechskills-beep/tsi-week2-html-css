# D1-01 · Sample findings (instructor)

## 1. Ping

Offline: `ping localhost`. With Wi-Fi: `ping google.com`.

```
Reply from ::1: time<1ms
Reply from 142.250.194.78: bytes=32 time=38ms TTL=115
```

- `localhost` answers in under 1 ms: the "letter" never leaves your laptop.
- `google.com` answers in about 20–80 ms from Kathmandu. **DNS** (the phone book) turned the name into an IP address first: look at the
  first line, `Pinging google.com [142.250.194.78]`.

## 2. The Network tab

Open `index.html` with Live Server → F12 → **Network** → press F5.

**7 parcels**: 1 HTML + 1 CSS + 5 SVG.

| Name | Type | Size (about) |
|---|---|---|
| index.html | document | 1.4 kB (Live Server adds a small script, so it is a little bigger than the file) |
| style.css | stylesheet | 0.4 kB |
| logo-momo-house.svg | svg+xml | 2–4 kB |
| momo.svg | svg+xml | 2–4 kB |
| momo-plate.svg | svg+xml | 2–4 kB |
| thamel.svg | svg+xml | 5–10 kB |
| swayambhu.svg | svg+xml | 3–6 kB |

- The `ws` line (`websocket`) is **Live Server** listening for your saves. It is not part of the page. Don't count it.
- There is no `favicon.ico` request because the page sets `<link rel="icon" href="data:,">`.
- Exact sizes depend on the Chrome version. The **count** (7) is the point.

The biggest parcel is usually `thamel.svg` (it has the most shapes).

## 3. View Page Source

Right-click → **View Page Source** (Ctrl+U). The `<h1>` is on **line 13**:
`<h1>Momo House: a page made of parcels</h1>`.
Live Server's script is added near the end, before `</body>`, so the top lines match the file.

## 4. Wi-Fi bonus

Any news site shows 50–200 requests. Every picture, font, script and advert is one more parcel.
