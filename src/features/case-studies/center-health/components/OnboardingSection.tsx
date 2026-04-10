/*
 * OnboardingSection.tsx — Center Health (004)
 * Confirmed from Figma node 1161:5925 (updated layout).
 *
 * Self-contained section — owns its own header row (index + heading).
 * Does NOT use CaseStudySectionWrapper.
 *
 * Layout (updated — index-left / content-right row):
 *
 *   ┌── section (py-96px, border-b) ───────────────────────────────────────────┐
 *   │                                                                          │
 *   │  (004)  ┌── content col (flex-1, gap-64) ────────────────────────────┐  │
 *   │         │                                                             │  │
 *   │         │  HEADING                                                    │  │
 *   │         │                                                             │  │
 *   │         │                               body paragraph (right)        │  │
 *   │         │                                                             │  │
 *   │         │  WHAT I DESIGNED ────────────────────────────────           │  │
 *   │         │  ┌──────┐  ┌──────┐  ┌──────┐  (flex-wrap items)          │  │
 *   │         │  │ Item │  │ Item │  │ Item │                              │  │
 *   │         │  ├──────┤  ├──────┤  ├──────┤                              │  │
 *   │         │  │ Item │  │ Item │  │ Item │                              │  │
 *   │         │  └──────┘  └──────┘  └──────┘                              │  │
 *   │         │                                                             │  │
 *   │         │  [full-width image]                                         │  │
 *   │         │                                                             │  │
 *   │         │  Results   HEADING TEXT…                                     │  │
 *   │         └─────────────────────────────────────────────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index    — Inter 12px lead, #424242 (--color-text-muted), uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, black, uppercase
 *   Body     — Inter 14px, black, line-height 20px
 *   Label    — Integral CF 32px H4, black, uppercase
 *   Item     — Integral CF 20px H5, black
 *   Results  — Integral CF 56px H3, tracking -0.84px, black, uppercase
 *
 * No stars (*) on items — just divider + title.
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthOnboardingSection } from '../content'
import styles from './OnboardingSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface OnboardingSectionProps {
  section: CenterHealthOnboardingSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function OnboardingSection({ section }: OnboardingSectionProps) {
  return (
    <div className={styles.root}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles.row}>

        {/* Index — left column */}
        <p className={styles.index}>{section.index}</p>

        {/* Content column — heading + body + what + image + results */}
        <div className={styles.contentCol}>

          {/* ── 1. Heading ─────────────────────────────────── */}
          <h1 className={styles.heading}>{section.heading}</h1>


          {/* ── 2. Body paragraph — right-aligned ──────────── */}
          <div className={styles.bodyRow}>
            <div className={styles.bodySpacer} aria-hidden="true" />
            <div className={styles.bodyRight}>
              <p className={styles.bodyText}>{section.body}</p>
            </div>
          </div>


          {/* ── 3. What I Designed ─────────────────────────── */}
          <div className={styles.whatBlock}>

            {/* Label row — heading + extending line */}
            <div className={styles.whatLabelRow}>
              <h3 className={styles.whatLabel}>what i designed</h3>
              <div className={styles.whatLine} aria-hidden="true" />
            </div>

            {/* Flex-wrap items — divider + title (no stars) */}
            <div className={styles.whatItems}>
              {section.whatIDesigned.map((item, i) => (
                <div key={i} className={styles.whatItem}>
                  <div className={styles.whatDivider} aria-hidden="true" />
                  <p className={styles.whatItemTitle}>{item}</p>
                </div>
              ))}
            </div>

          </div>


        </div>

      </div>

      {/* ── 4. Full-width image — outside row for full section width ── */}
      <div className={styles.imageWrap}>
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

      {/* ── 5. Results — full section width ──────────────── */}
      <div className={styles.results}>
        <p className={styles.resultsLabel}>Results</p>
        <h3 className={styles.resultsHeading}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
