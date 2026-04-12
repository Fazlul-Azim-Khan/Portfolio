/*
 * NextCaseStudy.tsx — ADM → Axion Ray
 *
 * Delegates to the shared NextCaseStudyHero component,
 * which renders a preview section with scroll-triggered navigation.
 */

'use client'

import NextCaseStudyHero from '@/components/sections/NextCaseStudyHero'
import { axionRay }      from '@/features/case-studies/axion-ray/content'
import type { ADMNextCaseStudySection } from '../content'


interface NextCaseStudyProps {
  section: ADMNextCaseStudySection
}

export default function NextCaseStudy({ section }: NextCaseStudyProps) {
  return (
    <NextCaseStudyHero
      hero={axionRay.hero}
      href={section.href}
      label="Next case study"
    />
  )
}
