/*
 * MealLoggingSection.tsx — Center Health (009)
 * Confirmed from Figma node 1237:5781.
 *
 * Self-contained — does NOT use CaseStudySectionWrapper.
 * White background, bottom border divider.
 *
 * Same layout pattern as LoggingSection (008):
 *   index-left / content-right row, heading+body row,
 *   feature items, image, results.
 * Key difference: feature gap is 40px (vs 24px in 008).
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthMealLoggingSection } from '../content'
import styles from './MealLoggingSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface MealLoggingSectionProps {
  section: CenterHealthMealLoggingSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function MealLoggingSection({ section }: MealLoggingSectionProps) {
  return (
    <div className={styles['meal-root']}>

      {/* ── Row: index (left) + content (right) ────────────── */}
      <div className={styles['meal-row']}>

        {/* Index — left column */}
        <p className={styles['meal-index']}>{section.index}</p>

        {/* Content column */}
        <div className={styles['meal-content-col']}>

          {/* ── 1. Heading row — heading + body side-by-side ── */}
          {/*
            Figma: flex row, gap-48
            Left: H3 heading (flex-1)
            Right: body paragraph (310px, pre-wrap)
            Confirmed: Figma node 1242:11770
          */}
          <div className={styles['meal-heading-row']}>
            <h1 className={styles['meal-heading']}>{section.heading}</h1>
            <p className={styles['meal-body']}>{section.body}</p>
          </div>


          {/* ── 2. Feature items — divider + title ─────────── */}
          {/*
            Figma: flex row, gap-40, each flex-1
            Item: divider (#e5e5e5) + H5 title — no stars
            Confirmed: Figma node 1242:11772
          */}
          <div className={styles['meal-feature-row']}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles['meal-feature-item']}>
                <div className={styles['meal-feature-divider']} aria-hidden="true" />
                <p className={styles['meal-feature-title']}>{feat}</p>
              </div>
            ))}
          </div>


        </div>

      </div>

      {/* ── 3. Image — outside row for full section width ──── */}
      {/*
        Figma: h-932px at 1325px width, rounded-sm (8px)
        Confirmed: Figma node 1242:11789
      */}
      <div
        className={styles['meal-image-wrap']}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles['meal-image']}
        />
      </div>

      {/* ── 4. Results — full section width ──────────────── */}
      {/*
        Results text: H4 32px.
        Figma: flex row, gap 24px
        Confirmed: Figma node 1242:11790
      */}
      <div className={styles['meal-results']}>
        <p className={styles['meal-results-label']}>Results</p>
        <h3 className={styles['meal-results-heading']}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
