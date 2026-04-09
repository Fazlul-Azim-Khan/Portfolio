/*
 * content/works.ts
 * Selected Works — confirmed from Figma nodes 966:7565, 942:5673, 942:5756, 942:5763
 *
 * These are the 3 featured case studies on the landing page.
 * Each links to a dedicated case study page at /work/[slug].
 *
 * Image paths point to /public/images/works/[slug]/mockup.png
 * ⚠️  Mockup images are not yet placed — paths are placeholders.
 *     Drop final images into the correct folder before building WorkCard.
 *
 * To add a new project: append an entry to this array.
 * To update a title: change the title field here only.
 */

import type { WorkItem } from '@/types'

export const selectedWorks: WorkItem[] = [
  {
    id:      'manufacturing-platform',
    index:   '01',
    // Client name is under NDA — confirmed from Figma node 942:5670
    client:  'Under NDA',
    title:   'AI-powered manufacturing reliability platform',
    slug:    'manufacturing-platform',
    mockup:  '/images/works/manufacturing-platform/mockup.jpg',
    tags:    [],
    summary: '',
  },
  {
    id:      'center-health',
    index:   '02',
    client:  'Center Health',
    title:   'AI-powered diabetes management platform',
    slug:    'center-health',
    mockup:  '/images/works/center-health/mockup.jpg',
    tags:    [],
    summary: '',
  },
  // {
  //   id:      'arrival-os',
  //   index:   '03',
  //   client:  'Arrival OS',
  //   title:   'Frictionless cross-border onboarding',
  //   slug:    'arrival-os',
  //   mockup:  '/images/works/arrival-os/mockup.png',
  //   tags:    [],
  //   summary: '',
  // },
]


/* ============================================================
   SECTION HEADER COPY
   Confirmed from Figma nodes 966:7566–7570
   ============================================================ */

export const selectedWorksMeta = {
  index:    '(002)',
  heading:  'Selected Works',
  count:    '2 Case Studies',
} as const
