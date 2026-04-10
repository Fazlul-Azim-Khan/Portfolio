/*
 * NextCaseStudy.tsx — Axion Ray → Center Health
 *
 * Delegates to the shared NextCaseStudyHero component,
 * which renders a normal preview section with scroll-triggered navigation.
 */

'use client'

import NextCaseStudyHero from '@/components/sections/NextCaseStudyHero'
import { centerHealth }  from '@/features/case-studies/center-health/content'
import type { NextCaseStudySection } from '../content'


interface NextCaseStudyProps {
  section: NextCaseStudySection
}

export default function NextCaseStudy({ section }: NextCaseStudyProps) {
  return (
    <NextCaseStudyHero
      hero={centerHealth.hero}
      href={section.href}
      label="Next case study"
    />
  )
}
