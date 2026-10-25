# 01 · How the Web Works: Student Notes
*TSI Nepal · AI-Powered Full Stack Developer Program · Week 2, Day 1 · Block B1 · Layer: Frontend (and the network under it)*

> **Today in one sentence:** The internet is not magic. It is computers mailing text to each other.

## The picture to keep in your head

**The Internet is a postal system.**

- The **browser** = you, writing a letter with a request ("please send me the Momo House home page").
- The **HTTP request** = the letter.
- The **IP address** = a precise home address (like `House 14, Dillibazar, Kathmandu`, but in numbers).
- **DNS** = the phone book. You know the name (`momohouse.com.np`); the phone book gives you the address (`203.0.113.25`).
- The **server** = a warehouse that mails back the goods.
- The **response** = the parcel (HTML, CSS, images).

```text
  YOU (browser)                         POST OFFICE                        WAREHOUSE (server)
  ┌───────────┐   1. "Where is          ┌────────────┐
  │  Chrome   │ ───── momohouse? " ───▶ │ DNS = phone │
  │           │ ◀──── "203.0.113.25" ── │    book     │
  │           │                         └────────────┘
  │           │   2. Letter (HTTP request): "GET /index.html"           ┌───────────┐
  │           │ ──────────────────────────────────────────────────────▶ │  server   │
  │           │   3. Parcel (HTTP response): 200 OK + the HTML          │ 203.0.113 │
  │           │ ◀────────────────────────────────────────────────────── │   .25     │
  │           │   4. "The HTML says I also need style.css and 5 images" └───────────┘
  │           │ ──── more letters ────▶      ◀──── more parcels ────
  └───────────┘   5. Chrome opens every parcel and paints the page
```

| Postal system | The web |
|---|---|
| You write a letter | The browser makes an **HTTP request** |
| The phone book | **DNS** (Domain Name System) |
| A home address | An **IP address** |
| The warehouse | A **server** (a computer that is always on and answers requests) |
| The parcel that comes back | The **HTTP response** (status code + the file) |
| One order, many parcels | One page = many files (HTML, CSS, every image) |

## A website is a restaurant (recap from Week 1)

| Restaurant | Web | Today? |
|---|---|---|
| Ingredients and the menu structure | **HTML**: what is on the page | Day 1 (today) |
| Plating and decor | **CSS**: how it looks | Day 2 |
| The waiter who reacts to you | **JavaScript**: behaviour | Later (session 4) |

## Words you now own

| Term | What it means (plain English) | Example |
|---|---|---|
| Browser | The program that asks for pages and paints them | Chrome, Edge, Firefox |
| Server | A computer that stores files and mails them to whoever asks | The computer that hosts `momohouse.com.np` |
| Client | The side that asks. Your browser is the client | Chrome on your laptop |
| URL | The full address of one file on the web | `https://momohouse.com.np/menu.html` |
| Domain name | The human name of a server | `momohouse.com.np` |
| IP address | The number address of a computer | `203.0.113.25`, `127.0.0.1` (your own computer) |
| DNS | The phone book that turns a domain name into an IP address | `momohouse.com.np` → `203.0.113.25` |
| HTTP / HTTPS | The language of the letters. HTTPS = the same, in a sealed envelope (encrypted) | `https://` at the start of a URL |
| Request | The letter: "please send me this file" | `GET /index.html` |
| Response | The parcel: a status code + the file | `200 OK` + the HTML |
| Status code | A number on the parcel that says how it went | `200` OK, `404` Not Found, `500` server error |
| `ping` | A command that sends a tiny test letter and times the reply | `ping localhost` |
| View Source | Shows the raw HTML text the server sent | Right-click → View Page Source (Ctrl+U) |
| Network tab | F12 panel that lists every parcel the page needed | F12 → Network → refresh |

## How it works

### 1. Reading a URL

```text
https://momohouse.com.np/pages/menu.html#specials
└─┬──┘   └──────┬──────┘└──────┬───────┘└───┬───┘
scheme       domain          path        fragment
(how)       (which server)  (which file)  (which spot on the page)
```

- The **scheme** says which language the letters use: `https` (sealed) or `http` (open postcard).
- The **domain** is looked up in DNS to get the IP address.
- The **path** is the folder and file on the server. Same idea as folders on your laptop.
- The **fragment** (`#specials`) never goes to the server. The browser uses it to scroll to `id="specials"`.

### 2. DNS: the phone book

Computers only understand number addresses. People remember names. DNS is the service that answers
"what is the number for this name?". Your laptop asks DNS once, then remembers the answer for a while (this
memory is called a **cache**).

### 3. Request and response

The browser sends a short text letter. The server sends back a parcel with a status line, some labels
(headers) and the file. A simplified real request looks like this:

```text
GET /index.html HTTP/1.1
Host: momohouse.com.np
```

And the response:

```text
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html lang="en"> ...
```

It really is just text going back and forth. That is why we say "computers mailing text to each other".

### 4. One page, many parcels

The first parcel is the HTML. Chrome reads it and finds more things it needs: a `<link>` to `style.css`, and an
`<img>` for every picture. **Each one is a new letter and a new parcel.** A page with 1 HTML file, 1 CSS file
and 5 images needs **7 parcels**. You will count them yourself in D1-01.
Live Server adds one more row called `ws`. It is not a parcel. Don't count it.

### 5. Status codes you will see this week

| Code | Meaning | When you will meet it |
|---|---|---|
| 200 | OK, here is your file | Every file that loads |
| 304 | Not Modified: "you already have it, use your copy" | Refresh a page twice (Chrome may show "(memory cache)" instead: same idea) |
| 404 | Not Found: no file at that path | A broken link or a wrong image path (D1-09) |
| 500 | The server itself broke | Later, when you write servers |

### 6. Live Server is a tiny warehouse on your own laptop

When you click **Open with Live Server**, VS Code starts a small server on your own computer. The address looks
like `http://127.0.0.1:5500/index.html`.

- `127.0.0.1` (also called `localhost`) means "this computer". The letter never leaves your laptop.
- `5500` is the **port**: which door of the warehouse to knock on.

So even with no Wi-Fi, you can watch real requests and responses in class.

### 7. Browser = translator

The server sends plain text. The browser translates that text into a page you can see: headings, pictures, colours.
**View Source** shows the text before translation. The **Elements** panel (F12) shows the page after translation.
(In note 10 you will see that these two can be different.)

## Code you built today

### Step 1: the parcel page

Make a folder `parcel-page` with an `images` folder inside. Copy in `logo-momo-house.svg`, `momo.svg`,
`momo-plate.svg`, `thamel.svg` and `swayambhu.svg`.

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Momo House · Parcel Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img src="images/logo-momo-house.svg" alt="Momo House logo" width="160">
  <h1>Welcome to Momo House</h1>
  <p>Every picture on this page is a separate parcel.</p>
  <img src="images/momo.svg" alt="A single steamed momo" width="150">
  <img src="images/momo-plate.svg" alt="A plate of ten momos" width="150">
  <img src="images/thamel.svg" alt="A street in Thamel" width="150">
  <img src="images/swayambhu.svg" alt="Swayambhu stupa on its hill" width="150">
</body>
</html>
```

File: `style.css`
```css
body {
  font-family: Arial, sans-serif;
  background-color: #fdf6ec;
  color: #14213d;
}

h1 {
  color: #990011;
}
```

- `<link rel="stylesheet" href="style.css">` is a request for **one more parcel**: the CSS file.
- Each `<img src="...">` is **another parcel**.

**Predict:** how many rows will the Network tab show after you refresh? Write your number down first.

### Step 2: watch the parcels arrive

1. Open `index.html` with Live Server.
2. Press **F12** → click the **Network** tab.
3. Press **F5** (refresh). Rows appear: one per parcel. Live Server adds one more row called `ws`. It is not a parcel. Don't count it.
4. Look at these columns:
   - **Name**: which file.
   - **Status**: `200` (or `304` / "from cache" the second time).
   - **Type**: `document` (the HTML), `stylesheet`, `svg+xml`.
   - **Size** and **Time**: how big, how long.
5. Rename one image in the HTML to a wrong name, save and refresh. **Predict:** what status will that row show?

### Step 3: View Source

Right-click the page → **View Page Source** (or Ctrl+U). You see the exact text the server mailed. Find the
`<h1>`. Nothing is hidden: every website's HTML is public. That is how many developers learnt.

### Step 4: `ping`

Open a terminal (in VS Code: Ctrl+\`) and type:

```bash
ping localhost
```

Each line is one tiny letter sent and its reply received. `time<1ms` means the round trip took under a
thousandth of a second, because the letter never left your laptop.

With Wi-Fi, try:

```bash
ping google.com
```

- The first line shows the IP address DNS found for `google.com`. That is the phone book at work.
- The time is now bigger (for example 30–80 ms): the letter travels across Nepal and out of the country and back.
- On Windows `ping` stops after 4 letters. On Mac/Linux, press Ctrl+C to stop.

## Quick reference

| You want to... | Do this |
|---|---|
| See every file a page loaded | F12 → Network → F5 |
| See the raw HTML the server sent | Ctrl+U (View Page Source) |
| See what the browser built | F12 → Elements |
| Test if a computer answers | `ping localhost` / `ping google.com` |
| Start your own little server | Right-click the HTML file → Open with Live Server |
| Check the address of your page | Look at the URL bar: `http://127.0.0.1:5500/...` |

## Mistakes everyone makes

| You see... | Because... | Fix |
|---|---|---|
| The Network tab is empty | You opened it **after** the page loaded | Keep F12 open and press F5 |
| An image row shows **404** in red | The path in `src` does not match the real file (see D1-09 bug 1) | Check the folder and file name letter by letter |
| The URL starts with `file:///C:/...` | You double-clicked the file instead of using Live Server | That is fine as a fallback; press F5 after each save. The Network tab still works |
| `ping google.com` says "could not find host" | No Wi-Fi, so DNS (the phone book) cannot answer | Use `ping localhost`; the offline path still works |
| You think the server "sends a page" | It sends **text files**. The browser builds the page | Remember: browser = translator |
| Your count of parcels is 2 (HTML + CSS) | You forgot that every image is its own parcel | Count every `<img>` and every `<link>` |
| Your count is 8, not 7 | You counted the `ws` row. Live Server adds it to reload the page when you save | `ws` is not a parcel. Don't count it |

## Check yourself

1. In the postal system, what are DNS, the IP address and the server?
2. Put these in order: Chrome paints the page · DNS answers · the server sends the HTML · Chrome asks for `style.css`.
3. A page has 1 HTML file, 2 CSS files and 8 images. How many parcels? Why?
4. What does status `404` tell you? Where have you seen it today?
5. What is `127.0.0.1`? Why does `ping localhost` work with no Wi-Fi?
6. What is the difference between View Source and the Elements panel?
7. Which part of `https://momohouse.com.np/menu.html#momo` never travels to the server?
8. Explain to a friend who has never coded what happens when they type a web address and press Enter. Use the
   postal system. Five sentences maximum.

## Try it

- **D1-01 See the letters arrive**: `ping`, the Network tab, View Source. Write your parcel count in `my-findings.md`.
- At home (Wi-Fi): open any big site (for example a news site), open the Network tab and refresh. How many parcels?
  Write the number in your notebook and bring it to class.

## AI rule for this week

**Stage 1: AI as Tutor.** AI may explain; you type every line. Example prompt:

> "I am a beginner. Using the postal-system idea, explain what DNS does when I type a website name. Do not give me any code."

---
*Remember the One Rule: you may only ship code you can explain, line by line.*
*Next: [02 · VS Code, Emmet and Live Server](02-vscode-emmet-live-server.md).*
