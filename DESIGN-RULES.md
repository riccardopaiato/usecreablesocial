# DESIGN-RULES — condensed system

Source of truth: `reference/Usecreable Social Template System (1).html` (§-numbered). This is the cheat-sheet.

## Colours
- Cream bg `#f7f4ec` · Dark bg `#000000` · Lime bg `#8fc01a` (rare, creator only)
- Ink (text/dark) `#1c1d18` · Body grey on cream `#5c5e52` · Body grey on dark `#9CA396`
- Lime keyword: on cream `#8fc01a`, on dark `#a4d435`
- Neon palette (shapes): lime `#a4d435`/`#cdf03c`, yellow `#FBBF24`, lavender `#A78BFA`, orange `#F97316`, magenta `#EC4899`, pink-soft `#FBCFE8`, lime-light `#cdec8d`

## Fonts (in `assets/fonts/`, embed via @font-face)
- **Poppins 900/800/700** — headlines / pills / labels
- **Inter 500/600** — body
- **JetBrains Mono 500** — eyebrows (SWIPE →, USECREABLE.COM, Day labels)

## Logo
UC mark only (no wordmark), top-center, ~94px tall on 1080 canvas. `assets/uc-lime.png` (lime) — used on cream AND dark.

## Formats & safe zones
- Story 1080×1920 — safe 250px top/bottom, 60px sides.
- Carousel 1080×1350 — 10% margins (108px) → inner 864px. logo top ~8%.
- Static Post 1080×1080 — 8% margins.
- Text no-go (shapes stay out): carousel `x 60–1020, y 300–950`.

## Typography scale (production px on 1080 canvas)
- Cover headline: standard ~127–140, large ~150–185 (limited by longest word). Internal headline ~84–96. Body ~38–55. Day/eyebrow ~38. Never below: headline 48 / body 26 / eyebrow 22.

## The 12 paper-cutout shapes
starburst · amoeba blob · solid circle · capsule pill · sparkle (4-pt thin) · flower · soft blob · squircle · diamond · 5-pt star · eye · drop. (Brand-kit PDF p.7.)
- **Cream/Creator** = flat, no blur, hard edges, ~50–85% opacity, scattered at edges. Covers/CTA = playful, full (~8–10 shapes).
- **Dark/Brand** = soft "blur depth" (blur 28–34px, op .6–.7, bleeding corners), ~4 per internal slide; covers/CTA = peak-star signature.

## Archetypes (§12 decision tree, first match wins)
1. hero number alone → Stat
2. quote + attribution → Social proof
3. CTA verb + outcome, last slide → CTA finale
4. product feature + screenshot → Feature + screenshot
5. numbered tips / "5 ways" → Educational tips list (left-aligned)
6. multi-paragraph teaching → Educational text (left-aligned)
7. first slide / opens topic → Cover
8. default → Statement
(Educational = the only left-aligned type; everything else centered.)

## Keyword rule (§15)
Exactly one lime keyword per headline, 1–3 consecutive words, on the most important concept. Never spans a line break. Never repeated across slides of one carousel.

## CTA rule (§02)
Pill always shows `usecreable.com`. Variants: dark+lime text, lime+ink text, white+ink. Cover uses `SWIPE →` eyebrow/pill instead. Stat/quote slides use `USECREABLE.COM` mono eyebrow, not a pill.

## Eyebrows that may be printed (§11.5)
Only `SWIPE →` (covers) and `USECREABLE.COM` (stat/quote). Plus content markers like `Day 1`. Section labels (THE PROBLEM, FOR BRANDS…) are internal only — never printed.
