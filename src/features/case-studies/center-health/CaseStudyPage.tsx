/*
 * features/case-studies/center-health/CaseStudyPage.tsx
 *
 * Full composition for the Center Health case study.
 *
 * Section order (re-indexed — Figma (002) = code (001)):
 *   Hero · WhyItMattered (001) · Scope (002) · DesignSystem (003)
 *   Onboarding (004) · Devices (005) · Home (006) · ARIA (007)
 *   Logging (008) · … (remaining sections added as confirmed)
 *
 * Common sections delegate to:
 *   @/components/sections/  (shared implementations)
 *
 * Feature-local section components will be added here as needed.
 *
 * Server Component — natural long-form scroll.
 */


// ── Layout ────────────────────────────────────────────────────────────────────
import NavBar      from '@/components/layout/NavBar'
import NoticeStrip from '@/components/layout/NoticeStrip'
import Container   from '@/shared/ui/Container/Container'

// ── Shared section components ─────────────────────────────────────────────────
import CaseStudyHero             from '@/components/sections/CaseStudyHero'
import CaseStudySectionWrapper   from '@/components/sections/CaseStudySectionWrapper'
import CaseStudyProblemSection   from '@/components/sections/CaseStudyProblemSection'
import CaseStudyDecisionsSection from '@/components/sections/CaseStudyDecisionsSection'

// ── Feature-local section components ─────────────────────────────────────────
import WhyItMatteredSection   from './components/WhyItMatteredSection'
import ScopeSection           from './components/ScopeSection'
import DesignSystemSection    from './components/DesignSystemSection'
import OnboardingSection      from './components/OnboardingSection'
import DevicesSection         from './components/DevicesSection'
import HomeDashboardSection   from './components/HomeDashboardSection'
import AriaSection            from './components/AriaSection'
import LoggingSection         from './components/LoggingSection'
import MealLoggingSection     from './components/MealLoggingSection'
import WebsiteSection         from './components/WebsiteSection'
import ProviderPortalSection  from './components/ProviderPortalSection'
import BrandingSection        from './components/BrandingSection'
import ContinuousUXSection    from './components/ContinuousUXSection'
import ReflectionsSection              from './components/ReflectionsSection'
import RecommendationLetterSection     from './components/RecommendationLetterSection'
import NextCaseStudySection            from './components/NextCaseStudySection'

// ── Content ───────────────────────────────────────────────────────────────────
import { centerHealth }               from './content'
import type { CenterHealthSectionData } from './content'

import styles from './CaseStudyPage.module.css'


/* ============================================================
   SECTION RENDERER
   ============================================================ */

function renderSection(section: CenterHealthSectionData, i: number) {
  switch (section.type) {

    case 'why-it-mattered':
      /*
        WhyItMatteredSection is self-contained — owns its own index+heading,
        person cards and quote card. No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:5809
      */
      return (
        <WhyItMatteredSection key={i} section={section} />
      )

    case 'problem':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyProblemSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'decisions':
      return (
        <CaseStudySectionWrapper key={i} index={section.index}>
          <CaseStudyDecisionsSection section={section} />
        </CaseStudySectionWrapper>
      )

    case 'scope-of-work':
      /*
        ScopeSection is self-contained — owns its own index+heading inside
        the blue brand card. No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:5830
      */
      return (
        <ScopeSection key={i} section={section} />
      )

    case 'design-system':
      /*
        DesignSystemSection is self-contained — owns header, feature grid,
        demo card, and results block. No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:5872
      */
      return (
        <DesignSystemSection key={i} section={section} />
      )

    case 'onboarding':
      /*
        OnboardingSection is self-contained — header, body paragraph,
        "what I designed" block, image, results. Has bottom border.
        No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:5925
      */
      return (
        <OnboardingSection key={i} section={section} />
      )

    case 'devices':
      /*
        DevicesSection is a blue brand card — index at top, heading row
        with spacer, "what I designed" block, 4 images, stacked results.
        All text white. No CaseStudySectionWrapper.
        Confirmed: Figma node 1172:6231
      */
      return (
        <DevicesSection key={i} section={section} />
      )

    case 'home-dashboard':
      /*
        HomeDashboardSection — white bg, items-end (body right-aligns),
        3×2 CSS grid "what I designed", image, H4 results row.
        Has bottom border. No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:6208
      */
      return (
        <HomeDashboardSection key={i} section={section} />
      )

    case 'aria':
      /*
        AriaSection — white bg, bottom border.
        Index-left / content-right row. Two sub-sections:
        Chat & Feed (features + image) and Notification System (image).
        Results H4 32px. No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:6257
      */
      return (
        <AriaSection key={i} section={section} />
      )

    case 'logging':
      /*
        LoggingSection — white bg, bottom border.
        Two-column content rows: 252px muted label + flex-1 content.
        Adapted from Figma's absolute-positioned layout to site identity.
        py-64px / gap-40px (tighter rhythm than 005/007).
        No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:6410
      */
      return (
        <LoggingSection key={i} section={section} />
      )

    case 'meal-logging':
      /*
        MealLoggingSection — white bg, bottom border.
        Same pattern as LoggingSection (008) but feature gap is 40px.
        Index-left / content-right row.
        No CaseStudySectionWrapper.
        Confirmed: Figma node 1237:5781
      */
      return (
        <MealLoggingSection key={i} section={section} />
      )

    case 'website':
      /*
        WebsiteSection — white bg, bottom border.
        Flat vertical stack (no index-left/content-right row).
        py-64px, gap-40px. 4 features + 4 images + H4 results.
        No CaseStudySectionWrapper.
        Confirmed: Figma node 1161:6549
      */
      return (
        <WebsiteSection key={i} section={section} />
      )

    case 'provider-portal':
      /*
        ProviderPortalSection — white bg, no bottom border.
        Index-left / content-right row (gap-24, not 48).
        Body right-aligned 369px. 4 features (gap-40).
        Image + H4 results. No CaseStudySectionWrapper.
        Confirmed: Figma node 1245:11796
      */
      return (
        <ProviderPortalSection key={i} section={section} />
      )

    case 'branding':
      /*
        BrandingSection — simple: index+heading row + single image.
        py-96px, gap-24, border-b. No features/body/results.
        Confirmed: Figma node 1237:11424
      */
      return (
        <BrandingSection key={i} section={section} />
      )

    case 'continuous-ux':
      /*
        ContinuousUXSection — index-left / content-right (gap-48).
        Heading + 4 features (gap-40). No image/body/results.
        pt-96px, pb-1px, border-b.
        Confirmed: Figma node 1161:6598
      */
      return (
        <ContinuousUXSection key={i} section={section} />
      )

    case 'reflections':
      /*
        ReflectionsSection — index-left / content-right (gap-40).
        Heading + 3×2 numbered grid with cards.
        py-77px, white border-b.
        Confirmed: Figma node 1237:11350
      */
      return (
        <ReflectionsSection key={i} section={section} />
      )

    case 'recommendation-letter':
      /*
        RecommendationLetterSection — dark card (Axion Ray aesthetic).
        H1 heading + blue quote card (click opens PDF modal).
        Confirmed: Figma node 1161:6685
      */
      return (
        <RecommendationLetterSection key={i} section={section} />
      )

    case 'next-case-study':
      /*
        NextCaseStudySection — navigation card to next project.
        Cover image (1328/710) + index/label/title row.
        Confirmed: Figma node 1242:11481
      */
      return (
        <NextCaseStudySection key={i} section={section} />
      )

    default:
      return null
  }
}


/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function CenterHealthCaseStudyPage() {
  return (
    <>
      {/* Full-bleed — outside Container */}
      <NavBar />
      <NoticeStrip />

      {/* Body — inside Container */}
      <Container as="main">
        <div className={styles['csp-body']}>

          {/* Hero — title + meta sidebar + full-width image */}
          <CaseStudyHero hero={centerHealth.hero} />

          {/* All sections, including the terminal NextCaseStudy */}
          {centerHealth.sections.map((section, i) => (
            <div key={i} className={styles['csp-section-item']}>
              {renderSection(section, i)}
            </div>
          ))}

        </div>
      </Container>
    </>
  )
}
