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
    <div className={styles.root}>

      <div className={styles.row}>

        <p className={styles.index}>{section.index}</p>

        <div className={styles.contentCol}>

          {/* ── 1. Heading ─────────────────────────────────── */}
          <h2 className={styles.heading}>{section.heading}</h2>

          {/* ── 2. Body — right-aligned 369px ─────────────── */}
          <div className={styles.bodyRow}>
            <p className={styles.body}>{section.body}</p>
          </div>

          {/* ── 3. Feature items — gap-40 ─────────────────── */}
          <div className={styles.featureRow}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureDivider} aria-hidden="true" />
                <p className={styles.featureTitle}>{feat}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ── 4. Image — outside row for full section width ──── */}
      <div
        className={styles.imageWrap}
        style={{ aspectRatio: section.image.aspect }}
      >
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
