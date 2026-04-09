/*
 * content/case-studies/center-health.ts
 * Metadata registry entry for the Center Health case study.
 * Slug: center-health  |  Client: Center Health
 *
 * Used by generateStaticParams + generateMetadata in app/work/[slug]/page.tsx.
 * Full content lives in features/case-studies/center-health/content.ts.
 *
 * Hero data confirmed from Figma node 1206:5756.
 */

import type { CaseStudy } from '@/types'


export const centerHealth: CaseStudy = {

  slug: 'center-health',

  hero: {
    title:       'ai-powered health & diabetes Management platform',
    heroImage:   '/images/works/center-health/hero.jpg',
    imageAspect: '1328 / 710',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Pre-Seed → Seed → Series A',
      year:   '2021 – 2022',
      sector: 'Clinical Healthcare · AI Health Management',
      note:   'Forbes 30 Under 30 - Consumer Technology (2021)',
      chips:  ['Case Study', 'Enterprise AI', 'Clinical Healthcare'],
    },
  },

  sections: [],   // Sections rendered from feature content — not used here
}
