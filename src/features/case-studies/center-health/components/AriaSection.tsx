/*
 * AriaSection.tsx — Center Health (007)
 * Confirmed from Figma node 1161:6257.
 *
 * Self-contained — does NOT use CaseStudySectionWrapper.
 * White background, bottom border divider.
 *
 * Layout (index-left / content-right row):
 *
 *   ┌── section (py-96px, border-b) ───────────────────────────────────────────┐
 *   │                                                                          │
 *   │  (007)  ┌── content col (flex-1, gap-10) ────────────────────────────┐  │
 *   │         │                                                             │  │
 *   │         │  ARIA:\n GIVING THE PLATFORM…                               │  │
 *   │         │                                   body paragraph (392px)    │  │
 *   │         │                                                             │  │
 *   │         │  ┌── Sub 1: ARIA Chat & Feed (gap-64) ─────────────────┐   │  │
 *   │         │  │  heading (py-64, left)                               │   │  │
 *   │         │  │  5 feature items (flex row, gap-40, no stars)        │   │  │
 *   │         │  │  image (1760/1158, no radius)                        │   │  │
 *   │         │  └──────────────────────────────────────────────────────┘   │  │
 *   │         │                                                             │  │
 *   │         │  ┌── Sub 2: Notification System (gap-64) ──────────────┐   │  │
 *   │         │  │  heading (py-64, right, w-812px)                     │   │  │
 *   │         │  │  image (2004/1281, rounded-sm)                       │   │  │
 *   │         │  └──────────────────────────────────────────────────────┘   │  │
 *   │         │                                                             │  │
 *   │         │  Results   HEADING TEXT… (H4 32px)                          │  │
 *   │         └─────────────────────────────────────────────────────────────┘  │
 *   └──────────────────────────────────────────────────────────────────────────┘
 *
 * Typography:
 *   Index    — Inter 12px lead, --color-text-muted, uppercase
 *   Heading  — Integral CF 56px H3, tracking -0.84px, uppercase
 *   Body     — Inter 14px, black, line-height 20px
 *   Sub H    — Integral CF 56px H3, tracking -0.84px, uppercase
 *   Item     — Integral CF 20px H5, black (no stars)
 *   Results  — Integral CF 32px H4, black, uppercase
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthAriaSection } from '../content'
import styles from './AriaSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface AriaSectionProps {
  section: CenterHealthAriaSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function AriaSection({ section }: AriaSectionProps) {
  return (
    <div className={styles.root}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles.row}>

        {/* Index — left column */}
        <p className={styles.index}>{section.index}</p>

        {/* Content column */}
        <div className={styles.contentCol}>

          {/* ── 1. Heading ─────────────────────────────────── */}
          <h2 className={styles.heading}>{section.heading}</h2>


          {/* ── 2. Body paragraph — right-aligned ──────────── */}
          {/*
            Figma: flex row, items-center, justify-end, w-full
            Paragraph: w-392px
            Confirmed: Figma node 1242:11706
          */}
          <div className={styles.bodyRow}>
            <p className={styles.body}>{section.body}</p>
          </div>


        </div>

      </div>

      {/* ── 3. Sub-sections — full section width ─────────── */}
      {section.subSections.map((sub, i) => (
        <div key={i} className={styles.subSection}>

          {/* Sub-heading row — py-64, justify-between */}
          <div className={styles.subHeadingRow}>
            <h3
              className={`${styles.subHeading} ${
                sub.headingAlign === 'right'
                  ? styles.subHeadingRight
                  : styles.subHeadingLeft
              }`}
              style={sub.headingWidth ? { width: sub.headingWidth } : undefined}
            >
              {sub.heading}
            </h3>
          </div>

          {/* Feature items — only if sub-section has features */}
          {sub.features && sub.features.length > 0 && (
            <div className={styles.featureRow}>
              {sub.features.map((feat, j) => (
                <div key={j} className={styles.featureItem}>
                  <div className={styles.featureDivider} aria-hidden="true" />
                  <p className={styles.featureTitle}>{feat}</p>
                </div>
              ))}
            </div>
          )}

          {/* Image — full section width */}
          <div
            className={`${styles.imageWrap} ${sub.image.rounded ? styles.imageRounded : ''}`}
            style={{ aspectRatio: sub.image.aspect }}
          >
            <Image
              src={sub.image.src}
              alt={sub.image.alt}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>

        </div>
      ))}

      {/* ── 4. Results — full section width ──────────────── */}
      {/*
        Results text: H4 32px.
        Figma: flex row, gap 24px
        Confirmed: Figma node 1242:11740
      */}
      <div className={styles.results}>
        <p className={styles.resultsLabel}>Results</p>
        <h3 className={styles.resultsHeading}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
