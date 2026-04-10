/*
 * ProviderPortalSection.tsx — Center Health (011)
 * Confirmed from Figma node 1245:11796.
 *
 * Self-contained — does NOT use CaseStudySectionWrapper.
 * White background, no bottom border.
 *
 * Layout (index-left / content-right row, gap-24):
 *   (011) + contentCol (heading + body right + features + image + results)
 *
 * Server Component — no client-side interaction.
 */

import Image from 'next/image'
import type { CenterHealthProviderPortalSection } from '../content'
import styles from './ProviderPortalSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface ProviderPortalSectionProps {
  section: CenterHealthProviderPortalSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function ProviderPortalSection({ section }: ProviderPortalSectionProps) {
  return (
    <div className={styles['pps-root']}>

      <div className={styles['pps-row']}>

        <p className={styles['pps-index']}>{section.index}</p>

        <div className={styles['pps-content-col']}>

          {/* ── 1. Heading ─────────────────────────────────── */}
          <h1 className={styles['pps-heading']}>{section.heading}</h1>

          {/* ── 2. Body — right-aligned 369px ─────────────── */}
          <div className={styles['pps-body-row']}>
            <p className={styles['pps-body']}>{section.body}</p>
          </div>

          {/* ── 3. Feature items — gap-40 ─────────────────── */}
          <div className={styles['pps-feature-row']}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles['pps-feature-item']}>
                <div className={styles['pps-feature-divider']} aria-hidden="true" />
                <p className={styles['pps-feature-title']}>{feat}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ── 4. Image — outside row for full section width ──── */}
      <div
        className={styles['pps-image-wrap']}
        style={{ aspectRatio: section.image.aspect }}
      >
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="100vw"
          className={styles['pps-image']}
        />
      </div>

      {/* ── 5. Results — full section width ──────────────── */}
      <div className={styles['pps-results']}>
        <p className={styles['pps-results-label']}>Results</p>
        <h3 className={styles['pps-results-heading']}>{section.resultsText}</h3>
      </div>

    </div>
  )
}
