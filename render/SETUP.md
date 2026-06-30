# SETUP — rendering environment

One-time setup to render card HTML → JPG.

## Requirements
- Node.js 18+
- Playwright + Chromium

```bash
cd render
npm init -y
npm install playwright
npx playwright install chromium
```

## Fonts
The templates embed fonts via `@font-face` pointing at `../assets/fonts/*.woff2` — no system install needed. Keep the relative paths intact (templates expect `assets/` one level up, or adjust the `src:` URLs).

## Render
```bash
node render.js ../templates/creator-internal.html carousel out.jpg
# formats: story (1080×1920) · carousel (1080×1350) · post (1080×1080)
```

The script screenshots the `.card` element at `deviceScaleFactor:1`, JPEG quality 95.

## Tips
- The 600ms wait lets fonts + blurred shapes settle; bump it if a render looks unstyled.
- Keep `assets/` (fonts, uc-lime.png, logos) reachable from the HTML's relative paths.
