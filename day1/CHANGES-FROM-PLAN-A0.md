# Changes from PLAN v2 — Builder A0 (assets + tooling, both days)

| Id / area | What | Why |
|---|---|---|
| `.vscode/settings.json` (day1 + day2) | Written by A0 (the plan tree says A1/A2). Content is exactly §3.0. | Firstmate's A0 brief assigns it to A0. A1/A2: don't rewrite it. |
| `.htmlhintrc` | Kept all 12 rules, including `html-lang-require`. No bug re-tagged as R. | Checked against the HTMLHint VS Code extension v1.17.0 (its VSIX bundles all 12 rule ids) and the htmlhint 1.9.2 CLI (`--list` + a broken sample fired every rule). |
| HTMLHint severity | `alt-require` is a **warning** in HTMLHint, not an error. `check_pack.py` counts warnings as failures. | VS Code still squiggles warnings, and "zero errors" should cover what students see. |
| `_tools/.htmlvalidate.json` | Presets `html-validate:standard` + `a11y` + `document`. Three rules are off: `require-sri` (local files), `no-implicit-button-type` (Week-2 level), `unique-landmark` (needs aria-label, not taught). | `recommended` alone flags beginner style (`prefer-tbody`, inline style). `standard` alone misses a missing DOCTYPE and a missing alt. |
| D1-13 `<form action="">` | html-validate (and W3C) reject an empty `action`. **A1: write `<form method="get">` (no `action`) in the starter and the solution**, and log it in your own change log. | Without `action`, the form still submits to the same page, so the URL trick works the same. |
| `_tools/make_assets.py` | New file (not in the §3 tree). It regenerates every SVG, the WAV and the MP4. | Reproducible assets. Nobody redraws by hand. Run it again if an asset must change. |
| Avatars | `avatar-aarav/sunita/rajan.svg` carry `preserveAspectRatio="none"`. | Without it, the SVG letterboxes inside a 120×80 box and D2-12 bug 5 (oval avatar) barely shows. With it, the avatar stretches like a photo: rendered and checked. |
| Bootstrap 5.3.3 | Removed the final `/*# sourceMappingURL=bootstrap.min.css.map */` comment. `LICENSE` comes from `cdn.jsdelivr.net/npm/bootstrap@5.3.3/LICENSE`. | Offline, DevTools would show a source-map 404 warning in class. |
| `check_pack.py` extras | Also checks: HTMLHint on solutions, README says "N bugs", pack files (README, START-HERE, .vscode, FF README, homework sheet, demos README), byte-identical asset copies, asset sizes. Options: `--only`, `--no-lint`, `--allow-missing`, `-v`. `--root` accepts `week2/` or `week2/dayN`. | §6 A1/A2 "must" items, made checkable. |
| `make_zips.py --with-solutions` | Builds **only** `W2DN-Student-Pack-with-Solutions.zip`. Without the flag it builds the Student and Instructor zips. Empty folders (D1-FF6 `places/`) are kept. Junk files (`__pycache__`, `~$*`, `Thumbs.db`) are skipped. | The solutions release is the captain's call each day (§7). |
