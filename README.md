# UseCreable · Social Cards Kit

The reusable "brain" for producing on-brand UseCreable Instagram cards (Stories / Carousels / Static Posts), for both **Brand** (dark) and **Creator** (cream) audiences. Anyone on the team — or an AI agent — can use this to generate cards that match the system.

## What's inside
- **`METHOD.md`** — the step-by-step workflow + the rigid pre-slide checklist. Read this first.
- **`DESIGN-RULES.md`** — condensed design system: colours, typography scale, shapes, formats, archetypes, CTA rules.
- **`PROMPT.md`** — a ready-to-paste prompt to hand an AI agent (Claude) so it builds a card following this kit.
- **`templates/`** — starter HTML for each background/format. Edit copy + shapes, render to JPG.
- **`render/`** — `render.js` (Playwright → JPG q95) and `SETUP.md` (install fonts + Playwright).
- **`assets/`** — `uc-lime.png` (UC logo mark), `fonts/` (Poppins/Inter/JetBrains woff2), `logos/` (AI-tool logos, monochrome ink, transparent).
- **`reference/`** — the full Social Template System (source of truth, §-numbered rules).
- **`examples/`** — finished carousels to copy from.

## How to make a card (quick)
1. Read `METHOD.md` and skim the matching section of `reference/`.
2. Copy the right file from `templates/`, paste your copy, pick the archetype.
3. Apply the **pre-slide checklist** in `METHOD.md` (typography from scale first; lime keyword on the key concept; every sentence on its own `<br>` line; shapes per background; centered).
4. Render with `render/render.js` → 1080×1350 (carousel) / 1080×1920 (story) / 1080×1080 (post) JPG q95.
5. Save approved cards; one carousel = one folder.

## Output naming
`usecreable_[audience]_[format]_card_[nn].jpg`
