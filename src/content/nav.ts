/*
 * content/nav.ts
 * Navigation content — confirmed from Figma node I966:7519
 *
 * To update a label or link: edit only this file.
 * Do not hardcode navigation strings in components.
 */

import type { NavCTA } from '@/types'


/* ============================================================
   BRAND
   ============================================================ */

export const navBrand = {
  label: 'FAZ',
  href:  '/',
} as const


/* ============================================================
   LANGUAGE SWITCHER
   Confirmed from Figma: EN is active (--primary), DE is muted (--tertiary)
   ============================================================ */

export const navLanguages = [
  { code: 'EN', label: 'EN', active: true  },
  { code: 'DE', label: 'DE', active: false },
] as const


/* ============================================================
   CTA BUTTONS
   Confirmed from Figma node I966:7519;958:5735
   Order: Download CV | LinkedIn | Contact me
   ============================================================ */

export const navCTAs: NavCTA[] = [
  {
    label:    'Download CV ↓',
    href:     '/cv.pdf',
    variant:  'outlined',
    download: true,            // HTML download attribute — triggers save dialog instead of navigation
  },
  {
    label:   'LinkedIn ↗',
    href:    'https://www.linkedin.com/in/fazlul-azim-khan/',
    variant: 'outlined',
  },
  {
    label:   'Contact me →',
    href:    '#contact',
    variant: 'primary',
  },
]
