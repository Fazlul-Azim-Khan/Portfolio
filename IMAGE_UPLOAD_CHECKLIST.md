# Image Upload Checklist

All files below must be placed in `public/` before the site will display images correctly.
Upload each file to the exact path shown.

---

## Axion Ray Case Study
`public/images/works/manufacturing-platform/`

| File | Used in | Notes |
|------|---------|-------|
| `axion-1.png` | Case Study Hero | Full-width hero image |
| `phase-01.png` | Phase 01 section | Phase 01 mockup · aspect 4096/3072 |
| `phase-02.png` | Phase 02 section | Phase 02 mockup · aspect 1329/997 |
| `phase-03-panel1.png` | Phase 03 section | Chart panel 1 of 3 (Emerging Spikes) · ~390px tall, flex-1 |
| `phase-03-panel2.png` | Phase 03 section | Chart panel 2 of 3 (Manufacturing audit donut) · ~390px tall, flex-1 |
| `phase-03-panel3.png` | Phase 03 section | Chart panel 3 of 3 (Number of MDPs) · ~390px tall, flex-1 |
| `phase-03-geo.png` | Phase 03 section | Claim Frequency by Geo map · 1315×605 |
| `phase-03-axion.png` | Phase 03 section | "Designing for Axion" image · 1331×1187 |
| `milestone-sbir.png` | Section (007) FundingMilestone | "AXION Wins Air Force SBIR Contract!" photo · aspect ~1217/1005 |
| `ai-watermark.png` | ✅ Already present | — |

---

## Center Health Case Study
`public/images/works/center-health/`

| File | Used in | Notes |
|------|---------|-------|
| `mockup.png` | Next Case Study section | Preview image for case study link |

---

## Landing Page — Selected Works thumbnails
`public/images/works/`

These paths are determined by the `selectedWorks` entries in `src/features/landing/content.ts`.
Check that file for exact paths once confirmed.

---

## Notes
- All images should be optimised (WebP preferred, or compressed PNG/JPG)
- `milestone-sbir.png` aspect ratio is ~1217:1005 — the component will fill this ratio; crop or pad to match if needed
- Phase 03 image card (Figma 1014:6751): dark card with two rows:
  - **Row 1**: `phase-03-panel1/2/3.png` — three chart panels rendered side-by-side (gap-24), each flex-1 with aspect-ratio ~1:1
  - **Row 2**: `phase-03-geo.png` — geo map, full width, aspect 1315/605
  - Export panel images as individual files, not combined. Each panel should be approximately square.
