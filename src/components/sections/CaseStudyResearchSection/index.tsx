/*
 * CaseStudyResearchSection/index.tsx
 * User Research — Section (002)
 *
 * Single dark card. Natural page scroll.
 * NO scroll-snap. NO viewport-height panels.
 *
 * Layout (Figma node 978:6038):
 *
 *   ┌─────────────────────────────────────────────────────────────────────┐
 *   │  (002)  │  USER RESEARCH              │  Intro paragraph            │
 *   │         │                             │                             │
 *   │         │  PERSONALITY TRAITS         │  What Emotions...?          │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │                             │                             │
 *   │         │  Col 1       │  Col 2       │  Col 3  (20px Integral CF)  │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  CHALLENGES & PAINS         │  What Are We Trying...?     │
 *   │         │  [chip] [chip] [chip]...                                  │
 *   │         │──────────────────────────────────────────────────────────│
 *   │         │  EXISTING SYSTEMS CAUSES:                                 │
 *   │         │  [chip] [chip] [chip]                                     │
 *   │         │                                                           │
 *   │         │  HAVE TO BRING IN THESE EMOTIONS:                         │
 *   │         │  [chip] [chip] [chip]                                     │
 *   │         │──────────────────────────────────────────────────────────│
 *   └─────────────────────────────────────────────────────────────────────┘
 *
 * Confirmed from Figma: node 978:6038 (Container, 1408×2580px)
 * Server Component — no client-side interaction required.
 */

import type { CaseStudyResearchSection as ResearchType } from '@/types'
import styles from './CaseStudyResearchSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface Props {
  section: ResearchType
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function CaseStudyResearchSection({ section }: Props) {
  return (
    <div className={styles.root}>

      {/* ── Index column — "(002)" ────────────────────────────
          Figma node 978:6039 — 38.64px wide left column
          ──────────────────────────────────────────────────── */}
      <div className={styles.indexCol}>
        <span className={styles.index}>{section.index}</span>
      </div>


      {/* ── Main content column ───────────────────────────────
          Figma node 1005:5988 (Frame 61) — flex-col, gap 32px
          ──────────────────────────────────────────────────── */}
      <div className={styles.content}>


        {/* ── 1. Intro row — heading + paragraph ──────────────
            Figma 978:6042: flex-row, itemSpacing 20px
            Left:  "USER RESEARCH" heading (56px Integral CF)
            Right: intro paragraph (16px Inter)
            ──────────────────────────────────────────────────── */}
        <div className={styles.introRow}>
          <h1 className={styles.heading}>{section.heading}</h1>
          <p  className={styles.intro}>{section.intro}</p>
        </div>


        {/* ── 2. Personality Traits ────────────────────────────
            Figma 1005:6085: flex-col, gap 32px
            Heading row: "PERSONALITY TRAITS" (56px) + sub-label right
            Chip grid:   wrapping flex, gap 24px
            ──────────────────────────────────────────────────── */}
        <div className={`${styles.chipSection} ${styles.panel}`}>

          <div className={styles.chipSectionHead}>
            {/* Confirmed: Figma node 1005:6089 — fontSize 56, Integral CF */}
            <p className={styles.chipSectionHeading}>Personality Traits</p>
            {/* Confirmed: Figma node 1005:6093 — fontSize 12, Inter, uppercase */}
            <p className={styles.chipSectionSub}>What Emotions Do They Exhibit?</p>
          </div>

          {/* Personality Traits: gap-24px — Figma 1005:6096 */}
          <div className={styles.chipGrid}>
            {section.personalityTraits.map((trait) => (
              <span key={trait} className={styles.chip}>{trait}</span>
            ))}
          </div>

        </div>


        {/* ── 3. Three-column conclusions ──────────────────────
            Figma 1005:5983 "Causes": flex-row, gap 64px, padding 64px top/bottom
            20px Integral CF Regular — NOT uppercase (mixed case in Figma)
            ──────────────────────────────────────────────────── */}
        <div className={styles.conclusions}>
          {section.conclusions.map((col, i) => (
            <p key={i} className={styles.conclusionCol}>{col}</p>
          ))}
        </div>


        {/* Divider — Figma node 1014:6851 */}
        <hr className={styles.divider} aria-hidden="true" />


        {/* ── 4. Challenges & Pains ────────────────────────────
            Figma 1005:6113 "HorizontalBorder": padding 40px top/bottom
            Heading row: "CHALLENGES & PAINS" (56px) + sub-label right
            Chip grid:   wrapping flex, gap 32px (→ --gap-40 nearest token)
            ──────────────────────────────────────────────────── */}
        <div className={`${styles.borderedSection} ${styles.panel}`}>

          <div className={styles.chipSectionHead}>
            {/* Confirmed: Figma node 1005:6118 — fontSize 56, Integral CF */}
            <p className={styles.chipSectionHeading}>Challenges &amp; Pains</p>
            {/* Confirmed: Figma node 1005:6122 — fontSize 12, Inter, uppercase */}
            <p className={styles.chipSectionSub}>What Are We Trying To Solve?</p>
          </div>

          {/* Challenges & Pains: gap-32px — Figma 1005:6123 gap-[32px] */}
          <div className={styles.chipGridLarge}>
            {section.challengesPains.map((item) => (
              <span key={item} className={styles.chip}>{item}</span>
            ))}
          </div>

        </div>


        {/* Divider — Figma node 1014:6849 */}
        <hr className={styles.divider} aria-hidden="true" />


        {/* ── 5 & 6. Existing Systems + Have to Bring ──────────
            Combined 80vh panel — two borderedSections sharing one
            viewport-height breathing block. No divider between them,
            no trailing divider after the second (per Scope :002).
            ──────────────────────────────────────────────────── */}
        <div className={styles.panel}>

          {/* ── 5. Existing Systems Causes ───────────────────────
              Figma 1005:6151 "HorizontalBorder": padding 40px top/bottom
              Heading: "EXISTING SYSTEMS CAUSES:" (56px) — no sub-label
              Chip row: flex-row, gap 32px (→ --gap-40 nearest token)
              Confirmed: Figma node 1005:6156 — fontSize 56, Integral CF
              ──────────────────────────────────────────────────── */}
          <div className={styles.borderedSection}>
            <p className={styles.chipSectionHeading}>Existing Systems Causes:</p>
            {/* Existing Causes: gap-32px — Figma 1005:6157 gap-[0px_32px] */}
            <div className={styles.chipGridLarge}>
              {section.existingCauses.map((item) => (
                <span key={item} className={styles.chip}>{item}</span>
              ))}
            </div>
          </div>


          {/* ── 6. Target Emotions ───────────────────────────────
              Figma 1005:6166: padding 40px top/bottom
              Heading: "HAVE TO BRING IN THESE EMOTIONS:" (56px, wraps 2 lines)
              Chip row: flex-row, gap 32px (→ --gap-40 nearest token)
              Confirmed: Figma node 1005:6171 — fontSize 56, Integral CF
              ──────────────────────────────────────────────────── */}
          <div className={styles.borderedSection}>
            <p className={styles.chipSectionHeading}>Have to Bring In These Emotions:</p>
            {/* Target Emotions: gap-32px — Figma 1005:6172 gap-[0px_32px] */}
            <div className={styles.chipGridLarge}>
              {section.targetEmotions.map((item) => (
                <span key={item} className={styles.chip}>{item}</span>
              ))}
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}
