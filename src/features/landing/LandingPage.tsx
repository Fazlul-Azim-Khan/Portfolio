'use client'

/*
 * features/landing/LandingPage.tsx
 *
 * Composes all landing sections in order:
 *   Hero → BioBanner → Stats → SelectedWorks → MoreWork → Experience → HowIWork → Contact
 *
 * Scroll system:
 *   useSectionScroll handles step-based snapping.
 *   Each implemented section registers a ref.
 *   Stubs (not yet built) render without refs — natural scroll fallback.
 *   Add each section's ref to the `sections` array as the section is built.
 *
 * NavBar and NoticeStrip are full-bleed (outside Container).
 * ⚠️  NavBar / NoticeStrip are currently imported from legacy src/components/.
 *     Migrate to shared/ when those components are rebuilt.
 */

import { useRef, useMemo }     from 'react'
import { usePathname }         from 'next/navigation'
import { useSectionScroll }    from '@/shared/hooks/useSectionScroll'
import Container               from '@/shared/ui/Container/Container'

// Legacy — pending migration to shared/
import NavBar      from '@/components/layout/NavBar'
import NoticeStrip from '@/components/layout/NoticeStrip'

// Landing sections
import Hero          from './components/Hero'
import BioBanner     from './components/BioBanner'
import Stats         from './components/Stats'
import SelectedWorks from './components/SelectedWorks'
import MoreWork      from './components/MoreWork'
import Experience    from './components/Experience'
import HowIWork      from './components/HowIWork'
import Contact       from './components/Contact'

// ── Locale-aware content ────────────────────────────────────────────────────
// Both content files are imported; the right one is selected at runtime based
// on pathname. content.de.ts re-exports English until translations are provided.
import * as contentEN from './content'
import * as contentDE from './content.de'

import styles from './LandingPage.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function LandingPage() {

  // ── Locale ────────────────────────────────────────────────
  // Detects /de/* routes and selects the matching content file.
  const pathname  = usePathname()
  const isDE      = pathname.startsWith('/de')
  const c         = isDE ? contentDE : contentEN
  const workBasePath = isDE ? '/de/work' : '/work'

  // ── Section refs ──────────────────────────────────────────
  // One ref per scroll-snappable section.
  // Add each ref to `sections` as the section is implemented.
  const heroRef          = useRef<HTMLElement>(null)
  const bioBannerRef     = useRef<HTMLElement>(null)
  const statsRef         = useRef<HTMLElement>(null)
  const selectedWorksRef = useRef<HTMLElement>(null)
  const moreWorkRef      = useRef<HTMLElement>(null)
  const experienceRef    = useRef<HTMLElement>(null)
  const howIWorkRef      = useRef<HTMLElement>(null)
  const contactRef       = useRef<HTMLElement>(null)

  // Memoised so the hook's effect doesn't re-register on every render
  const sections = useMemo(() => [heroRef, bioBannerRef, statsRef, selectedWorksRef, moreWorkRef, experienceRef, howIWorkRef, contactRef], [])

  useSectionScroll({ sections })


  // ── Render ────────────────────────────────────────────────
  return (
    <>

      {/* ── Full-bleed — outside Container ───────────────── */}
      <NavBar />
      <NoticeStrip text={c.noticeStrip.text} />

      {/* ── Body content ─────────────────────────────────── */}
      <Container as="main">

        {/* (001) Hero */}
        <section ref={heroRef} className={styles['lp-section']}>
          <Hero content={c.hero} />
        </section>

        {/* (002) Bio Banner */}
        <section ref={bioBannerRef} className={styles['lp-section']}>
          <BioBanner content={c.bioBanner} />
        </section>

        {/* (003) Stats */}
        <section ref={statsRef} className={styles['lp-section']}>
          <Stats content={c.stats} />
        </section>

        {/* (004) Selected Works */}
        <section ref={selectedWorksRef} className={styles['lp-section']}>
          <SelectedWorks content={c.selectedWorks} workBasePath={workBasePath} />
        </section>

        {/* (005) More Work */}
        <section ref={moreWorkRef} className={styles['lp-section']}>
          <MoreWork content={c.gallery} />
        </section>

        {/* (006) Experience */}
        <section ref={experienceRef} className={styles['lp-section']}>
          <Experience content={c.experience} />
        </section>

        {/* (007) How I Work */}
        <section ref={howIWorkRef} className={styles['lp-section']}>
          <HowIWork content={c.howIWork} />
        </section>

        {/* (008) Contact + Footer */}
        <section ref={contactRef} className={styles['lp-section']}>
          <Contact content={c.contact} brandLabel={c.nav.brand.label} />
        </section>

      </Container>

    </>
  )
}
