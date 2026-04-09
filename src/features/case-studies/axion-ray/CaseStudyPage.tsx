/*
 * features/case-studies/axion-ray/CaseStudyPage.tsx
 *
 * Full composition for the Axion Ray (manufacturing-platform) case study.
 *
 * Section order (13 sections):
 *   Hero · Problem (001) · UserResearch (002) · DesignDecisions (003)
 *   SolutionStructure (004) · PhaseOne (005) · PhaseTwo (006)
 *   FundingMilestone (007) · PhaseThree (008) · Outcome (009)
 *   Reflections (010) · ClientFeedback · NextCaseStudy
 *
 * Common sections (001–006, ClientFeedback) delegate to:
 *   @/components/sections/  (shared, confirmed implementations)
 *
 * New section types delegate to feature-local components:
 *   ./components/FundingMilestone
 *   ./components/Outcome
 *   ./components/Reflections
 *   ./components/NextCaseStudy
 *
 * Server Component — no scroll snapping on case study.
 * Natural long-form scroll is the intended reading experience.
 * NextCaseStudy is a client component that handles its own navigation.
 *
 * NavBar + NoticeStrip: legacy imports (same as LandingPage).
 * ⚠️ Migrate to @/shared/ when those components are rebuilt.
 */


// ── Layout — legacy (same paths as LandingPage) ──────────────────────────────
import NavBar      from '@/components/layout/NavBar'
import NoticeStrip from '@/components/layout/NoticeStrip'
import Container   from '@/shared/ui/Container/Container'

// ── Shared section components (common types) ──────────────────────────────────
import CaseStudyHero                  from '@/components/sections/CaseStudyHero'
import CaseStudySectionWrapper        from '@/components/sections/CaseStudySectionWrapper'
import CaseStudyProblemSection        from '@/components/sections/CaseStudyProblemSection'
import CaseStudyResearchSection       from '@/components/sections/CaseStudyResearchSection'
import CaseStudyDecisionsSection      from '@/components/sections/CaseStudyDecisionsSection'
import CaseStudySolutionSection       from '@/components/sections/CaseStudySolutionSection'
import CaseStudyPhaseSection          from '@/components/sections/CaseStudyPhaseSection'
import CaseStudyClientFeedbackSection from '@/components/sections/CaseStudyClientFeedbackSection'

// ── Feature-local section components (new types) ──────────────────────────────
import FundingMilestone from './components/FundingMilestone'
import Outcome          from './components/Outcome'
import Reflections      from './components/Reflections'
import NextCaseStudy    from './components/NextCaseStudy'

// ── Content ───────────────────────────────────────────────────────────────────
import { axionRay }              from './content'
import type { AxionRaySectionData } from './content'

import styles from './CaseStudyPage.module.css'


/* ============================================================
   SECTION RENDERER
   Dispatches each typed section to its component.
   Mirrors the pattern in app/work/[slug]/page.tsx but
   also handles the four new Axion Ray–specific types.
   ============================================================ */

function renderSection(section: AxionRaySectionData, i: number) {
  switch (section.type) {

    case 'problem':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyProblemSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'research':
      /*
        Research section manages its own dark bg, index label, and sticky layout.
        CaseStudySectionWrapper intentionally bypassed.
      */
      return (
        <CaseStudyResearchSection key={i} section={section} />
      )

    case 'decisions':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyDecisionsSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'solution':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudySolutionSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'phase':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyPhaseSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'funding-milestone':
      /*
        FundingMilestone is self-contained — dark card with its own index column.
        CaseStudySectionWrapper intentionally bypassed.
        Confirmed: Figma node 981:7629
      */
      return (
        <FundingMilestone key={i} section={section} />
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

    case 'client-feedback':
      /*
        Client Feedback renders as a self-contained full-width dark card.
        No CaseStudySectionWrapper — Figma node 1005:6253 has no index column.
      */
      return (
        <CaseStudyClientFeedbackSection key={i} section={section} />
      )

    case 'next-case-study':
      /*
        NextCaseStudy is a terminal section — no index column.
        It is a Client Component that handles router navigation.
      */
      return (
        <NextCaseStudy key={i} section={section} />
      )

    default:
      return null
  }
}


/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function AxionRayCaseStudyPage() {
  return (
    <>
      {/* Full-bleed — outside Container */}
      <NavBar />
      <NoticeStrip />

      {/* Body — inside Container */}
      <Container as="main">
        <div className={styles.body}>

          {/* Hero — title + meta sidebar + full-width image */}
          <CaseStudyHero hero={axionRay.hero} />

          {/* All sections, including the terminal NextCaseStudy */}
          {axionRay.sections.map((section, i) => (
            <div key={i} className={styles.sectionItem}>
              {renderSection(section, i)}
            </div>
          ))}

        </div>
      </Container>
    </>
  )
}
