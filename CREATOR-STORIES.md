# UseCreable — "For Creators" Instagram Highlight — Knowledge

Vertical Story set (1080×1920, 9:16) targeting **creators**. Distinct from the Brand (dark) set: this one is **cream**. Cover → Story 13. Some cards are static JPG, some animated MP4 (15s loop).

## Global design rules (every Creator card)
- **Background: cream `#f7f4ec` — ALWAYS.** No exceptions. If a supplied asset is dark, rebuild it light rather than switching the story to dark.
- **Logo:** UC lime mark only (`uc-lime.png`), top-center, `top:280px` (h≈80). Never the wordmark.
- **Safe zones (Story):** logo top 280; content bottom-safe ≈1640 (keep cards/CTA above); side margins ≥60.
- **Type:** headline Poppins 900 ink `#181914`, ONE lime keyword `#7db518` (last significant words); body Inter 500 grey `#5c5e52`. Gap headline→subcopy ≥ ~60px on big headlines.
- **Shapes:** brand-kit pastel cutouts (lime, yellow `#FBBF24`, lavender `#A78BFA`, orange `#F97316`, magenta `#EC4899`), flat, bleeding the corners; rotate the combo per card; never off-brand colors.
- **CTA:** filled lime pill for the real action (cover/close); cream pill elsewhere. `USECREABLE.COM` (JetBrains Mono) allowed only on stat/close cards; internal section eyebrows (THE PROBLEM etc.) never printed.
- **QA discipline:** always render → Read the full frame + zoom mockups/rows BEFORE delivering. Nothing touching; faces centered; safe zones respected.

## Story-by-story

- **Cover** — "What if you could **get paid** to create content?" / "Guess what: no face, no followers needed" + lime "TAP THROUGH" pill; pastel corner shapes.
- **Story 2** — "Welcome to the **new era** of AI Content Creators." Joyful collage: phone reel mockups (♥ views), creator cards (@maya.ai, @leo.reels — **real avatars**, lime ▶ views pill), AI content tiles (✦ AI badge + metric), scattered brand shapes. Static.
- **Story 3** — Coverflow belt: 5 content-type video cards (AI avatar / fan page / educational / viral edit / product) rotating; center card biggest. Animated (PIL per-frame belt, `belt.py`).
- **Story 4** — Laptop mockup with stylized UseCreable dashboard (sidebar UC nav, "Benvenuto, Creator 👋", 3 stat cards, "Come funziona"), tool logos row scrolling (ffmpeg strip). Animated.
- **Story 5** — "Usecreable Academy" tile (grad-cap, FREE, 30 Lessons / 8+ Hours, 01–03 lessons). No CTA. Static.
- **Story 6** — "Find campaigns that fit **your style**." Campaign-type cards scrolling (Personal Brand / Fan Page / Product Demo / Music & Artist / Brand Awareness / Mass Distribution). Animated strip.
- **Story 7** — Personal Brand campaign tile (@TopG). Thumbnail + title row + **blinking Live** chip (green dot) + Brief + Payout `$X / 1K views` + 4 example-submission **playing videos** (tate clips). Animated. MP4.
- **Story 8** — Fan Page campaign tile (@madison.army). Fansite hero (contain), TikTok+IG+X badges, ACCOUNT/POSTING info tiles, Payout `$X / post`, blinking Live. Animated.
- **Story 9** — Product Demo campaign tile (OLIPOP). Product thumbnail (full can on brand-yellow, edge-feathered) with **playing product video**; spec rows: Assets provided / Content requirement / Payout model (`$X / approved video`) / **Approval status = PENDING** (orange, blinking dot). Animated.
- **Story 10** — Art & Music campaign tile (@novasound). Clean "spec-sheet" (like Story 9): artist thumbnail (collage hero the user supplied), Sound usage (mini waveform + 0:15), Visual direction, Platform (TikTok/IG/**YouTube**), Payout; blinking **Live** chip. Animated.
- **Story 11** — Campaign brief table (2-column, icon-chip rows, NOT UI-heavy): Assets / Requirements / Platform / Payout model / Budget / Approval rules. Static. (No "Field / What you see" headers — those are brief labels, not printed.)
- **Story 12** — "Meet the **top earning creators**." Double carousel like usecreable.com/aicreators: top row → right, bottom row ← left, seamless 15s. **16 unique light creator cards** (avatar, @handle, TOP EARNER, TOTAL EARNED gold, VIEWS/SUBMISSIONS, Last-30-days lime bar) — row1 ≠ row2 (no overlap/repeat). Cream bg (cards rebuilt light from the user's dark PNGs). Animated.
- **Story 13 (CTA/close)** — "Start earning **like an influencer.**" / "No face. No followers needed." Filled lime CTA "Start earning →" + `usecreable.com`. Earnings-celebration theme (distinct from Story 2): **4 influencer earnings cards** (one per corner, avatar + € earned), 2 payout notifications ("+€2,340 payout today", "+€980 new payout"), confetti/sparkles at the edges, center kept clear. Static.

## Reusable recipes / pipeline
- **Render:** HTML + local `@font-face` (Poppins 900/800/700, Inter 500/600, JetBrains Mono 500 in `fonts/`) → Playwright Chromium element screenshot of `.card` at 1080×1920, quality 95.
- **Env gotcha:** `/tmp` resets wipe Playwright + the libXdamage stub. Reinstall `playwright`, `npx playwright install chromium` (+ `chromium-headless-shell`), rebuild gcc `libXdamage.so.1` stub, run with `LD_LIBRARY_PATH=/tmp/libfix` and `PLAYWRIGHT_BROWSERS_PATH=/tmp/ms-playwright`.
- **Chromium can't decode H.264** → real videos handled with ffmpeg, never in the browser.
- **Playing video in a tile:** ffmpeg over the recorded base MP4 (which carries the blinking chip): per clip `scale/crop` identical (same crop for a whole row so subject scale matches), rounded-corner gray mask via PIL → `alphamerge` → `overlay` at each tile rect; `-stream_loop -1`.
- **Hero video in a wide thumbnail (keep subject same size as the still):** reuse the still's exact crop/scale; build the FULL-width banner as one uniform gradient (avoid a center block over a different-toned base → visible band); re-overlay category pill + platform badges as a transparent `chrome.png`. Bug: `eof_action=pass` on an overlay whose secondary is a still image makes it vanish after frame 0 → drop it, rely on `-t`.
- **Double carousel:** transparent row-strip PNG (one pattern = N·(cardW+gap)); `split`+`hstack` two copies; `overlay=x='-mod(t*speed\,pat)'` (left) / `'mod(t*speed\,pat)-pat'` (right). Seamless when speed = pat/duration → all cards pass once per loop, no repeat.
- **Blinking chip (Live/Pending):** record the CSS animation via Playwright `recordVideo` → ffmpeg → MP4. `@keyframes` opacity 1→.2 + glow on a dot; subtle bg pulse on the pill.
- **Light card corners:** element screenshot with `omitBackground:true` so rounded corners are transparent on cream.
- **Emoji render as tofu** in the sandbox → recreate as inline SVG.
- **Face crops:** use OpenCV Haar cascade (`opencv-python-headless`) to auto-locate faces when cropping avatars from video frames; AI characters (3D avatars, animal mascots) fit "AI creator" avatars too.

## Assets
- Story 12 source cards + avatars: `Highlight - For Creators/ASSET STORIA 12/` (dark PNGs → rebuilt light).
- Deliverables live in `Highlight - For Creators/` as `CoverStory.jpg`, `Story2.jpg`…`Story13.jpg` / `.mp4`.
