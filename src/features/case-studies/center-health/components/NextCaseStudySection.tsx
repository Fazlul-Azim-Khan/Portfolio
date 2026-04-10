/*
 * NextCaseStudySection.tsx — Center Health → Axion Ray
 *
 * Delegates to the shared NextCaseStudyHero component,
 * which renders a normal preview section with scroll-triggered navigation.
 */

'use client'

import NextCaseStudyHero from '@/components/sections/NextCaseStudyHero'
import { axionRay }      from '@/features/case-studies/axion-ray/content'
import type { CenterHealthNextCaseStudySection } from '../content'


interface NextCaseStudySectionProps {
  section: CenterHealthNextCaseStudySection
}

export default function NextCaseStudySection({ section }: NextCaseStudySectionProps) {
  return (
    <NextCaseStudyHero
      hero={axionRay.hero}
      href={section.href}
      label="Next case study"
    />
  )
}
