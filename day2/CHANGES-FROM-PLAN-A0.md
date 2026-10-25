# Changes from PLAN v2 — Builder A0 (Day 2 part)

The full list is in `week2/day1/CHANGES-FROM-PLAN-A0.md`. The Day 2 items:

| Id / area | What | Why |
|---|---|---|
| `.vscode/settings.json` | Written by A0. Content is exactly §3.0 (A2: don't rewrite it). | A0 brief |
| `assets/vendor/bootstrap-5.3.3/bootstrap.min.css` | Trailing `sourceMappingURL` comment removed. | No source-map 404 warning in DevTools offline |
| Avatars (D2-12 bug 5) | `preserveAspectRatio="none"`, so a 120×80 avatar with `border-radius: 50%` is a visible squashed oval. | Otherwise the SVG letterboxes and the bug hides |
| `media/momo-steam.mp4` | 4.0 s, 640×360, H.264 Main, yuv420p, no audio, 31 KB. Chrome plays it (`canPlayType` "probably"). | as planned |
| `media/canteen-bell.wav` | 2.0 s, mono, 22.05 kHz, 16-bit, 88 KB: an 880 + 1320 Hz bell with a fade. | as planned |
| html-validate config | Same as Day 1 (copy in `_tools/.htmlvalidate.json`). `check_pack.py` lives in `day1/_tools`. | §3.2 |
