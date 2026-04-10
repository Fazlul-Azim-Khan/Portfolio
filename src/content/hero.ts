/*
 * content/hero.ts
 * Hero section content — confirmed from Figma node 966:7520
 *
 * Typography rendering note:
 *   The headline splits across two lines in Figma:
 *     Line 1: "Product DESIGNER"
 *     Line 2: "& UX STRATEGIST"
 *   The "&" character renders in --color-tertiary (#ccc).
 *   This split is handled by the HeroSection component using headlineParts.
 *
 * The large decorative arrow (↗) in the top-left grid cell is a
 * purely visual element — it is defined here as a token so the
 * component can render it without hardcoding.
 */


/* ============================================================
   NAME LABEL
   Renders above the main headline in H5 (20px, Integral CF)
   ============================================================ */

export const heroName = 'FAZLUL AZIM KHAN'


/* ============================================================
   HEADLINE
   Renders in H1 (120px, Integral CF, lh 120px, tracking -1.5px)
   Split into parts to allow per-word color control in JSX.
   ============================================================ */

export const heroHeadline = {
  line1: 'Product DESIGNER',
  line2: {
    ampersand: '&',          // renders in --color-tertiary
    rest:      ' UX STRATEGIST',
  },
} as const


/* ============================================================
   SUBLINE
   Renders below the headline in H5 (20px, Integral CF)
   ============================================================ */

export const heroSubline = 'Enterprise AI · Safety-critical domains · MVP to $25M scale'


/* ============================================================
   BIO
   Renders in Lead (12px, Inter, uppercase) in the top-right grid cell
   Confirmed verbatim from Figma node 966:7526
   ============================================================ */

export const heroBio =
  'I design AI-powered enterprise products for expert-user domains — manufacturing reliability, clinical decision support, metabolic health intelligence. My work has contributed to $25M in venture funding and products deployed at Boeing, Raytheon, Denso, and Baxter.'


/* ============================================================
   SPECIALTY CHIPS
   Renders as Chip components in the top-right grid cell
   Confirmed from Figma nodes 848:87, 1002:5922–5937
   Order matches Figma layout (left-to-right, wrapping)
   ============================================================ */

export const heroChips: string[] = [
  'AI prediction & analytics',
  'AI personalities & avatars',
  'AI-assisted learning',
  'Clinical AI visualisation',
  'AI content & marketing tools',
  'Product strategy',
]


/* ============================================================
   DECORATIVE ARROW
   Large ↗ character in top-left grid cell
   Rendered in --color-tertiary, -scale-y-100 (flipped vertically in Figma)
   Defined here so the component references content, not hardcoded glyphs
   ============================================================ */

export const heroDecorativeArrow = '↗'
