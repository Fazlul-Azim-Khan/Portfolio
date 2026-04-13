/*
 * features/case-studies/adm/CaseStudyPage.tsx
 *
 * Full composition for the ADM (System Administration) case study.
 *
 * Expanded section order (11 sections):
 *   Hero · Problem (001) · Research (002) · Constraints (003)
 *   DesignDecisions (004) · Execution/ADM (005) · SalesModule (006)
 *   ContinuousPrototyping (007) · Outcome (008) · Reflections (009)
 *   NextCaseStudy
 *
 * Common sections (001, 004) delegate to:
 *   @/components/sections/  (shared, confirmed implementations)
 *
 * ADM-specific sections delegate to feature-local components:
 *   ./components/Research          (002) — dark card, self-contained
 *   ./components/Constraints       (003)
 *   ./components/Execution         (005)
 *   ./components/SalesModule       (006)
 *   ./components/ContinuousPrototyping (007)
 *   ./components/Outcome           (008)
 *   ./components/Reflections       (009)
 *   ./components/NextCaseStudy
 *
 * Server Component — no scroll snapping on case study.
 * Natural long-form scroll is the intended reading experience.
 */


// ── Layout — legacy (same paths as LandingPage) ──────────────────────────────
import NavBar      from '@/components/layout/NavBar'
import NoticeStrip from '@/components/layout/NoticeStrip'
import Container   from '@/shared/ui/Container/Container'

// ── Shared section components (common types) ──────────────────────────────────
import CaseStudyHero             from '@/components/sections/CaseStudyHero'
import CaseStudySectionWrapper   from '@/components/sections/CaseStudySectionWrapper'
import CaseStudyProblemSection   from '@/components/sections/CaseStudyProblemSection'
import CaseStudyDecisionsSection from '@/components/sections/CaseStudyDecisionsSection'

// ── Feature-local section components (ADM-specific types) ─────────────────────
import Research              from './components/Research'
import Constraints           from './components/Constraints'
import Execution             from './components/Execution'
import SalesModule           from './components/SalesModule'
import ContinuousPrototyping from './components/ContinuousPrototyping'
import Outcome               from './components/Outcome'
import Reflections           from './components/Reflections'
import NextCaseStudy         from './components/NextCaseStudy'

// ── Content ───────────────────────────────────────────────────────────────────
import { adm }              from './content'
import type { ADMSectionData } from './content'

import styles from './CaseStudyPage.module.css'


/* ============================================================
   SECTION RENDERER
   Dispatches each typed section to its component.
   ============================================================ */

function renderSection(section: ADMSectionData, i: number) {
  switch (section.type) {

    case 'problem':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyProblemSection section={section} />
        </CaseStudySectionWrapper>
      )

    /* Research — self-contained dark card (bypasses SectionWrapper) */
    case 'research':
      return <Research key={i} section={section} />

    case 'constraints':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <Constraints section={section} />
        </CaseStudySectionWrapper>
      )

    case 'decisions':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyDecisionsSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'execution':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <Execution section={section} />
        </CaseStudySectionWrapper>
      )

    case 'sales-module':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <SalesModule section={section} />
        </CaseStudySectionWrapper>
      )

    case 'prototyping':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <ContinuousPrototyping section={section} />
        </CaseStudySectionWrapper>
      )

    case 'outcome':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <Outcome section={section} />
        </CaseStudySectionWrapper>
      )

    case 'reflections':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <Reflections section={section} />
        </CaseStudySectionWrapper>
      )

    case 'next-case-study':
      return null

    default:
      return null
  }
}


/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function ADMCaseStudyPage() {
  return (
    <>
      {/* Full-bleed — outside Container */}
      <NavBar />
      <NoticeStrip />

      {/* Body — inside Container */}
      <Container as="main">
        <div className={styles['csp-body']}>

          {/* Hero — title + meta sidebar + full-width image */}
          <CaseStudyHero hero={adm.hero} />

          {/* All sections, including the terminal NextCaseStudy */}
          {adm.sections.map((section, i) => (
            <div key={i} className={styles['csp-section-item']}>
              {renderSection(section, i)}
            </div>
          ))}

        </div>
      </Container>
    </>
  )
}
