# Yucca Treatments Page - Layout Spec

Source: https://tryyucca.com/treatments/
Captured HTML: web/_yucca_treatments.html
Primary CSS: https://tryyucca.com/_astro/Tabs.Cm3wcZ8V.css -> web/_yucca_tabs.css
Also: website.DW7ZXVjT.css, retro.CGA3votP.css, index.B55369rd.css

Scope: explore treatments block (headline -> tabs -> split hero).
Breakpoints: desktop >767; tablet mid 480-767; mobile <=479.
Container: .u-container; --container-main: 68rem.

## 1. Page headline structure

section.bg-white.pt-5.tablet:pt-9.desktop:pt-6.pb-8 > .u-container > h1
h1: max-w-[37.0625rem] mx-auto text-center text-2xl xs:text-[1.75rem] tablet:text-[2.25rem] leading-[1] tracking-[-0.04em] font-semibold text-neutral-900
Copy: Explore our treatments below and choose what is best *for you.* (em.italic.font-semibold)
Then: .retro-explore-tabs-wrap > [data-explore-tabs] > tab menu + panes (.relative.z-[2])

## 2. Category tabs

Markup:
- .explore-tab-menu.mx-auto.mb-6.tablet:mb-8.grid + data-explore-tab-menu + data-active-index=0|1|2
- button.explore-tab-link: relative flex min-h-[4.5625rem] items-center overflow-hidden rounded-xl bg-neutral-200 p-4 text-sm font-semibold leading-none tracking-[-0.02em] text-neutral-900 transition-colors duration-300; data-explore-tab-link; data-active; data-tone=wl|nad|sermorelin
- children: .explore-tab-border, .explore-tab-fill, label span.relative.z-[2], img.explore-tab-img.absolute.bottom-0.max-h-[4.5rem]

Heights/radius: min-h ~73px; p-4; radius 12px; img max-h 4.5rem; gap 8px; menu mb 24/32px.

Expanding grid (transition 0.3s ease):
- Desktop max-w 606px: active 240px, inactive 175px each (permute by data-active-index)
- 480-767: 48fr active / 35fr inactive
- <=479: width 418px; 184/109/109 with sliding margin-left

Active chrome base: transparent bg; border+fill opacity 1 (2px masked gradient ring radius 12; fill inset 2 radius 10).
Tone gradients: wl #b9a9fe-#fee9d4; nad #81c777-#a6d69f; sermorelin #ffcb9b-#ffddbe.
Retro active: 2px ink border; shadow 3px 4px 0; fill/border opacity 0; bgs #e6e3ff / #d7f3d3 / #fee7d1. Inactive imgs hidden.

Tab photos:
- https://tryyucca.com/Weight-Loss-Image-from-TinyPNG.avif
- https://tryyucca.com/Longevity--Image-.avif
- https://tryyucca.com/Muscle-Recovery-Image.avif

## 3. Main treatment split - NOT one bordered shell

.explore-hero-grid: flex-col gap-6; tablet:flex-row items-start gap-9; desktop:gap-8
Two siblings only:
1) Left .explore-card.explore-hero-card (bordered stage)
2) Right .explore-hero-content (no outer border)

Ratios: mobile left h-[27.5rem]; tablet left max-w-[31.5131rem] flex-1; desktop left fixed w-[31.5131rem] (~504px) aspect-[480/549]; right desktop:max-w-[47%]. Gaps 24/36/32.

Left panel: rounded-3xl (24px); flex col justify-between; pad px-6 pt-6 pb-5 / tablet px-7 pt-8 pb-7; data-card=wl|nad|sermorelin.
Title top center .explore-hero-card-title: 1.75/2.5/2.625rem leading-1 tracking-[-0.04em] font-medium; WL max-w-[15ch].
Product art = CSS background (not body img):
- wl: /Personalized-GLP-1-Injections.avif + gradient #c2bbdc-#736b94 (~39%)
- nad: /yucca-health-product-nad.avif (+ green variants)
- sermorelin: /expt-sermorelin-vial.png + #ffdfc2-#c69161 (~40%)
Retro: border 2px ink; box-shadow 6px 8px 0 shadow (WL/NAD).
Sticker: .explore-hero-card-price-badge absolute ~right 24 bottom 78 size ~103px.
Footer: social proof + .explore-hero-chip + .explore-hero-stock (#d4ffd6/#14884c + 6px dot).

## 4. Right panel

.explore-hero-content flex flex-col w-full tablet:flex-1 desktop:max-w-[47%]
Order (WL):
1. .explore-hero-copy summary
2. .explore-hero-products wrapping row (WL only): two .explore-hero-product with 34px circular thumbs (Sema/Tirz) - side-by-side product options, NOT plan cards. Longevity/MR omit.
3. .explore-hero-includes grid; desktop grid-cols-[0.75fr_1fr]:
   - .explore-hero-plans: All Plans Include: + 4 items with 24px circular icons (consultation, shipping, 24/7 support, portal)
   - .explore-hero-guarantee-card rounded-2xl bg-neutral-200 px-3 pt-8 pb-4 text-xs; logo(~56px)|rule|Guarantee word + body
4. .explore-hero-divider hairline #eee tablet+ mb-9
5. .explore-hero-pricing--badge-only: Starting as low as: + badge image. NO side-by-side duration/price option cards on captured page.

## 5. CTA placement

a.explore-hero-cta inside pricing, under price row: block w-full rounded-full bg-neutral-900 px-6 py-4 text-base font-medium text-white; copy See if I qualify. Mobile may order-first pricing.

## 6. Approximate spacing / padding

| Region | Spacing |
|--------|---------|
| Headline section | pt 20/36/24px; pb 32px |
| Tabs to hero | mb 24-32px |
| Hero bottom | pb 40 / 56 / 100px |
| Split gap | 24 / 36 / 32px |
| Left card pad | 24x24x20 -> 28x32x28 |
| Products | my 18px; mb 24px |
| Includes | mb 20px; gap 16-20px |
| Plan list | mt 10px; gap 12px |
| Guarantee | pt 20px; card px12 pt32 pb16; radius 16px |
| Divider | mb 36px |
| CTA | py 16 / px 24; pill |

Radii: tabs 12px, card 24px, guarantee 16px, CTA full pill.

## 7. Absolute image URLs

### Tabs
- https://tryyucca.com/Weight-Loss-Image-from-TinyPNG.avif
- https://tryyucca.com/Longevity--Image-.avif
- https://tryyucca.com/Muscle-Recovery-Image.avif

### Left-card backgrounds
- https://tryyucca.com/Personalized-GLP-1-Injections.avif
- https://tryyucca.com/yucca-health-product-nad.avif
- https://tryyucca.com/expt-sermorelin-vial.png
- https://tryyucca.com/Nad-Yucca-Image.avif

### WL product thumbs
- https://tryyucca.com/expt-wl-sema.jpg
- https://tryyucca.com/expt-wl-tirz.jpg

### Badges / logo
- https://tryyucca.com/lowest-price-ever-badge-6-mo.png
- https://tryyucca.com/lowest-price-ever-badge-3-mo.png
- https://tryyucca.com/new-yucca-logo.svg

### Vials elsewhere on page
- https://tryyucca.com/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif
- https://tryyucca.com/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif
- https://tryyucca.com/nad-plus-longevity-injection-vial-yucca-health.avif
- https://tryyucca.com/sermorelin-peptide-injection-vial-muscle-recovery-yucca-health.avif
- https://tryyucca.com/sermorelin-vial-amber-gradient.avif
- https://tryyucca.com/expt-tirz-sema-vials-together.png
- https://tryyucca.com/explore-nad-protocol-vials-figma.png
- https://tryyucca.com/expt-personalized-sermorelin-vial.png
- https://tryyucca.com/expt-personalized-sermorelin-vial-orange.jpg
- https://tryyucca.com/expt-personalized-sermorelin-vials.png
- https://tryyucca.com/semaglutide-tirzepatide-glp-1-injection-vials-yucca-health.avif
- https://tryyucca.com/personalized-semaglutide-glp-1-injection-vial-closeup-yucca-health.avif
- https://tryyucca.com/personalized-tirzepatide-glp-1-injection-vial-closeup-yucca-health.avif
- https://tryyucca.com/nad-plus-longevity-injection-vial-closeup-yucca-health.avif
- https://tryyucca.com/sermorelin-peptide-injection-vial-closeup-yucca-health.avif

## Key CSS notes (downloaded)

| File | Role |
|------|------|
| web/_yucca_tabs.css (Tabs.Cm3wcZ8V.css) | MAIN explore-tab grid, card backgrounds, badge placement, retro wrap overrides |
| web/_yucca_website_live.css | .u-container, --container-main/gutter |
| web/_yucca_treatments_index.css | section padding bundle including .explore-hero-section |
| web/_yucca_retro.css | retro tokens / utilities |

Must-port: expanding explore-tab-menu columns; tab border/fill/img opacity; explore-card[data-card] backgrounds; retro ink border+offset shadow; absolute .explore-hero-card-price-badge; guarantee heading flex; pane data-active show/hide.

## Replicate 100% structurally

1. Headline then 3-tab CSS grid driven by data-active-index (wide active + fade-in tab photo).
2. Pane = two siblings in .explore-hero-grid, not one bordered shell: left bordered rounded-3xl stage (title, CSS vial bg, absolute sticker, footer chips); right open stack.
3. Right order: copy -> (WL product thumbs row) -> includes+guarantee desktop 2-col -> divider -> badge-only price -> full-width pill CTA.
4. Do not invent side-by-side plan option cards; live is badge-only.
5. Match radii/gaps/left ~504px aspect 480:549; wire absolute URLs + Tabs.css backgrounds.
