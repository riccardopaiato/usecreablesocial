# METHOD — how to build a UseCreable card

Read this before making anything. It is the workflow + the non-negotiable checklist. It was distilled from many rounds of real feedback.

## 0. Ground truth, every time
Open the references first and LOOK at how the exact slide type actually renders:
- `reference/Usecreable Social Template System (1).html` — the §-numbered rules.
- The rendered template PDF (Brand Kit / Social template) if available.
Don't design from memory of the rules — match the rendered look.

## 1. Inputs
- **Format**: Story 1080×1920 · Carousel 1080×1350 · Static Post 1080×1080.
- **Audience**: Brand = dark `#000` · Creator = cream `#f7f4ec` (lime `#8fc01a` bg only for rare creator CTA/stat).
- **Copy** + the archetype (cover / statement / educational / stat / feature+screenshot / CTA finale) via the §12 decision tree.

## 2. Typography FIRST (then fit keyword + breaks — never the reverse)
Set the type from the template scale before touching anything else.
- **Covers**: §12.5 char-count bands (count headline+body): ≤110 = large, 111–160 = standard, 161–210 = compact.
- **Internal slides**: fixed §04 scale — headline ~84–96px, body ~38–48px on the 1080 canvas.
- Never shrink the headline just to keep a keyword on one line; instead shorten the keyword or rebreak.

## 3. Composition
Everything **centered & balanced**: UC lime mark top-center, headline+body centered, block vertically centered. Clean and orderly — never piled/clustered/lopsided shape dumps.

## 4. Shapes (by background — see DESIGN-RULES.md)
- **Brand / dark internal** = ~4 different kit shapes in the soft "blur depth" treatment (blur 28–34px, opacity .6–.7, vivid, bleeding off corners). Vary shape/colour/position every slide; keep balanced.
- **Brand cover & CTA finale** = the "peak-star" signature (giant 4-point sparkle pushed off the bottom, only its tip showing; half crisp / half blurred, seam feathered). Evernote crisp/blur effect = COVERS/CTA only, never internal.
- **Creator / cream** = flat pastel paper-cutout shapes (NO blur, hard edges), scattered at edges. **Creator covers & CTA = playful, FULL of shapes** (~8–10 around all edges). Internal creator slides = ~4.
- Colour collision: keyword is lime → shapes near text use lavender/yellow/magenta/orange; lime only far.

## 5. Keyword, body, markers
- **Lime keyword = the single most important concept** of that slide (for Creators usually the money/benefit). Pick it; don't ask. 1–3 words. **Never repeat the same keyword across slides of one carousel.**
- **Body: EVERY sentence on its own line via `<br>`.** No merging. If a sentence is too long for one line, add a `<br>` at a clean phrase point so no single word is left orphaned. Measure before assuming it "won't fit".
- **Day/step markers** ("Day 1", "Days 2–5") = their own lime uppercase JetBrains-Mono eyebrow line ABOVE the headline, consistent across the journey slides.
- **Headline** broken on clean phrase units, not mid-phrase.

## 6. CTA / eyebrow
- Carousel cover = outlined "Swipe →" pill with a clean inline-SVG arrow (never the `→` glyph).
- CTA finale = `usecreable.com` pill (Brand: lime pill ink text; Creator: dark pill lime text).
- Internal slides = no pill.

## 6b. Images / logos
Check the template framing FIRST: image content sits INSIDE a rounded panel/frame, not floating. Build/source imagery yourself (logo strips, phone mockups). Logos go in a clean rounded white panel. Logo files: `assets/logos/` (monochrome ink, transparent). Process new ones with PIL: corner = background, alpha = distance-from-bg with a hard low cutoff (~70) to kill residue, recolour to ink `#1c1d18`, trim.

## 7. Render & deliver
Standalone HTML → Playwright Chromium screenshot → JPG quality 95 (`render/render.js`). One carousel = one folder; save only approved slides.

---

## ⛔ RIGID PRE-SLIDE CHECKLIST — run on EVERY slide before rendering
1. Type scale set from template FIRST (not shrunk to fit a keyword).
2. Lime keyword = the most important concept; distinct from every other slide.
3. Body: every sentence on its own `<br>` line; long sentences broken at a clean phrase point, no orphan words.
4. Day/step marker on its own eyebrow line above the headline.
5. Headline broken on clean phrase units.
6. Shapes match the background type; image content inside a rounded panel; shapes varied vs neighbours, balanced, never clustered.
7. Centered & balanced; safe margins (10% / 864px inner on carousel); logo clear.
8. MEASURE, don't assume ("too long" / "won't fit") — verify before compensating.
9. Render, then eyeball against the rendered template.

The failure mode to kill: letting a local aesthetic tweak quietly break a rule (especially #3). Discipline > vibe.
