'use client'

/*
 * features/landing/LandingPage.tsx
 *
 * Composes all landing sections in order:
 *   Hero → SelectedWorks → MoreWork → Experience → Languages → Contact
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
import { useSectionScroll }    from '@/shared/hooks/useSectionScroll'
import Container               from '@/shared/ui/Container/Container'

// Legacy — pending migration to shared/
import NavBar      from '@/components/layout/NavBar'
import NoticeStrip from '@/components/layout/NoticeStrip'

// Landing sections
import Hero          from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import MoreWork      from './components/MoreWork'
import Experience    from './components/Experience'
import Languages     from './components/Languages'
import Contact       from './components/Contact'

import styles from './LandingPage.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function LandingPage() {

  // ── Section refs ──────────────────────────────────────────
  // One ref per scroll-snappable section.
  // Add each ref to `sections` as the section is implemented.
  const heroRef          = useRef<HTMLElement>(null)
  const selectedWorksRef = useRef<HTMLElement>(null)
  const moreWorkRef      = useRef<HTMLElement>(null)
  const experienceRef    = useRef<HTMLElement>(null)
  const languagesRef     = useRef<HTMLElement>(null)
  const contactRef       = useRef<HTMLElement>(null)

  // Memoised so the hook's effect doesn't re-register on every render
  const sections = useMemo(() => [heroRef, selectedWorksRef, moreWorkRef, experienceRef, languagesRef, contactRef], [])

  useSectionScroll({ sections })


  // ── Render ────────────────────────────────────────────────
  return (
    <>

      {/* ── Full-bleed — outside Container ───────────────── */}
      <NavBar />
      <NoticeStrip />

      {/* ── Body content ─────────────────────────────────── */}
      <Container as="main">

        {/* (001) Hero */}
        <section ref={heroRef} className={styles['lp-section']}>
          <Hero />
        </section>

        {/* (002) Selected Works */}
        <section ref={selectedWorksRef} className={styles['lp-section']}>
          <SelectedWorks />
        </section>

        {/* (003) More Work */}
        <section ref={moreWorkRef} className={styles['lp-section']}>
          <MoreWork />
        </section>

        {/* (004) Experience */}
        <section ref={experienceRef} className={styles['lp-section']}>
          <Experience />
        </section>

        {/* (005) Languages */}
        <section ref={languagesRef} className={styles['lp-section']}>
          <Languages />
        </section>

        {/* (006) Contact + Footer */}
        <section ref={contactRef} className={styles['lp-section']}>
          <Contact />
        </section>

      </Container>

    </>
  )
}
