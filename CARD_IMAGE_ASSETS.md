# Card image assets (shots + backups)

Reference pack from the crop-free card image work. Live product art on the site is under `web/public/images/`. This doc indexes the **QA screenshots** and **pre-regeneration backups** kept in the repo.

## Live product images (current)

Used by explore cards, tabs, treatment/intake surfaces:

| Path | Role |
|------|------|
| `web/public/images/novimid-card-glp1.png` | Explore / hero Metabolic card |
| `web/public/images/novimid-card-peptide.png` | Explore Peptides card |
| `web/public/images/novimid-card-trt.png` | Explore Hormones / TRT card |
| `web/public/images/tab-metabolic.png` | Explore tab thumb |
| `web/public/images/tab-peptides.png` | Explore tab thumb |
| `web/public/images/tab-hormones.png` | Explore tab thumb |
| `web/public/images/product-glp1-v2.png` | Treatment / intake / clinical product |
| `web/public/images/product-peptide-v2.png` | Treatment / intake / clinical product |
| `web/public/images/product-trt-v2.png` | Treatment / intake / clinical product |
| `web/public/images/icon-vial-a-v2.png` | Small vial thumb |
| `web/public/images/icon-vial-b-v2.png` | Small vial thumb |

Regeneration helper: `web/public/process_card_assets.py`

## Backup originals — `web/public/images/_backup_card_src/`

Copies of card/tab/product PNGs **before** they were normalized to square transparent canvases with safe padding. Keep these if you need to re-run processing or compare framing.

| File |
|------|
| `icon-vial-a-v2.png` |
| `icon-vial-b-v2.png` |
| `novimid-card-glp1.png` |
| `novimid-card-peptide.png` |
| `novimid-card-trt.png` |
| `product-glp1-v2.png` |
| `product-peptide-v2.png` |
| `product-trt-v2.png` |
| `tab-hormones.png` |
| `tab-metabolic.png` |
| `tab-peptides.png` |

## QA screenshots — `_shots/`

Playwright captures used to verify no product art is clipped desktop → mobile.

### Home

| File | Notes |
|------|-------|
| `home-desktop.png` | Full home @ 1440×900 |
| `home-mobile.png` | Full home @ 390×844 |
| `home-hero-desktop.png` | Hero / orbit crop |
| `home-hero-mobile.png` | Hero / orbit crop |

### Treatments explore cards

| File | Notes |
|------|-------|
| `treatments-desktop.png` | Full treatments page desktop |
| `treatments-mobile.png` | Full treatments page mobile |
| `treatments-metabolic-card-desktop.png` | Metabolic explore |
| `treatments-metabolic-card-mobile.png` | Metabolic explore |
| `treatments-metabolic-card-mobile-v2.png` | Metabolic explore (after tab fix) |
| `treatments-peptides-card-desktop.png` | Peptides explore |
| `treatments-peptides-card-mobile.png` | Peptides explore |
| `treatments-hormones-card-desktop.png` | Hormones explore |
| `treatments-hormones-card-mobile.png` | Hormones explore |
| `card-final-metabolic-mobile.png` | Final metabolic card check |

### Explore tabs

| File | Notes |
|------|-------|
| `treatments-tabs-mobile.png` | Tab bar (early) |
| `treatments-tabs-mobile-v2.png` | Metabolic active |
| `treatments-tabs-peptides-mobile-v2.png` | Peptides active |
| `treatments-tabs-hormones-mobile-v2.png` | Hormones active |
| `tabs-final-metabolic.png` | Final Metabolic tab |
| `tabs-final-peptides.png` | Final Peptides tab |
| `tabs-final-hormones.png` | Final Hormones tab |

### Clinical / expect / start

| File | Notes |
|------|-------|
| `treatments-clinical-desktop.png` | Clinical section |
| `treatments-clinical-desktop-v2.png` | Clinical after vial overflow fix |
| `treatments-expect-desktop.png` | Expect cards |
| `start-desktop.png` | Start intake |
| `start-interest-desktop.png` | Interest / goals step |
| `start-interest-mobile.png` | Interest / goals step |
| `start-products-desktop.png` | Product path cards |
| `start-products-mobile.png` | Product path cards |

## Framing rules (summary)

- Product PNGs: transparent square masters with ~12–18% safe padding
- Card stages: `object-fit: contain` (never `cover` for product cutouts)
- Explore tab thumbs: in-flow `object-contain` (not absolute flush to the border)
- Lifestyle/people photos may still use `object-cover`
