/*
 * content/case-studies/index.ts
 * Central registry — maps slugs to case study content objects.
 *
 * Keys must match the slug values in src/content/works.ts exactly.
 * The case study page (src/app/work/[slug]/page.tsx) imports this
 * registry and looks up content by slug.
 *
 * To add a new case study:
 *   1. Create src/content/case-studies/[slug].ts
 *   2. Export a CaseStudy object from it
 *   3. Import it below and add an entry to the record
 */

import type { CaseStudy }           from '@/types'
import { manufacturingPlatform }    from './manufacturing-platform'
import { centerHealth }             from './center-health'


export const caseStudies: Record<string, CaseStudy> = {
  'manufacturing-platform': manufacturingPlatform,
  'center-health':          centerHealth,

  // 'arrival-os': arrivalOs,   ← add when content file is created
}
