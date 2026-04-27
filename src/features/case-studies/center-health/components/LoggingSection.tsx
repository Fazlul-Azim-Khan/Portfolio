/*
 * LoggingSection.tsx — Center Health (008)
 * Confirmed from Figma node 1161:6410 (updated layout).
 *
 * Self-contained — does NOT use CaseStudySectionWrapper.
 * White background, bottom border divider.
 *
 * Layout (index-left / content-right row):
 *
 *   ┌── section (py-64px, border-b) ──────────────────────────────────────────┐
 *   │                                                                          │
 *   │  (008)  ┌── content col (flex-1, gap-64) ────────────────────────────┐  │
 *   │         │                                                             │  │
 *   │         │  HEADING (flex-1)                   body (310px)            │  │
 *   │         │                                                             │  │
 *   │         │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐             │  │
 *   │         │  │feat │  │feat │  │feat │  │feat │  │feat │  (gap-24)    │  │
 *   │         │  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘             │  │
 *   │         │                                                             │  │
 *   │         │  [full-width image]                                         │  │
 *   │         │                                                             │  │
 *   │         │  Results   HEADING TEXT… (H4 32px)                          │  │
 *   │         └─────────────────────────────────────────────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index    — Inter 12px lead, --color-text-muted, uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, uppercase
 *   Body     — Inter 14px, black, line-height 20px, pre-wrap
 *   Feature  — Integral CF 20px H5, black (divider + title, no stars)
 *   Results  — Integral CF 32px H4, black, uppercase
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthLoggingSection } from '../content'
import styles from './LoggingSection.module.css'
import SectionProblem from './SectionProblem'


/* ============================================================
   PROPS
   ============================================================ */

interface LoggingSectionProps {
  section: CenterHealthLoggingSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function LoggingSection({ section }: LoggingSectionProps) {
  return (
    <div className={styles['log-root']}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles['log-row']}>

        {/* Index — left column */}
        <p className={styles['log-index']}>{section.index}</p>

        {/* Content column — headingRow + features + image + results */}
        <div className={styles['log-content-col']}>

          {/* ── 1. Heading row — heading + body side-by-side ── */}
          {/*
            Figma: flex row, gap-48
            Left: H3 heading (flex-1)
            Right: body paragraph (310px, pre-wrap)
            Confirmed: Figma node 1242:11763
          */}
          <div className={styles['log-heading-row']}>
            <h1 className={styles['log-heading']}>{section.heading}</h1>
            <p className={styles['log-body']}>{section.body}</p>
          </div>

          {/* Problem block — frames the section's tension */}
          <SectionProblem text={section.problem} />


          {/* ── 2. Feature items — divider + title ─────────── */}
          {/*
            Figma: flex row, gap-24, each flex-1
            Item: divider (#e5e5e5) + H5 title — no stars, no bullets
            Confirmed: Figma node 1242:11746
          */}
          <div className={styles['log-feature-row']}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles['log-feature-item']}>
                <div className={styles['log-feature-divider']} aria-hidden="true" />
                <p className={styles['log-feature-title']}>{feat}</p>
              </div>
            ))}
          </div>


        </div>

      </div>

      {/* ── 3. Image — outside row for full section width ──── */}
      {/*
        Figma: aspect-[1600/1200], rounded-sm (8px)
        Confirmed: Figma node 1242:11764
      */}
      <div
        className={styles['log-image-wrap']}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles['log-image']}
        />
      </div>

      {/* ── 4. Results — full section width ──────────────── */}
      {/*
        Results text: H4 32px.
        Figma: flex row, gap 24px
        Confirmed: Figma node 1242:11765
      */}
      <div className={styles['log-results']}>
        <p className={styles['log-results-label']}>Results</p>
        <h3 className={styles['log-results-heading']}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
