/*
 * ContinuousUXSection.tsx — Center Health (013)
 * Confirmed from Figma node 1161:6598.
 *
 * Index-left / content-right row (gap-48).
 * Content: heading + 4 features. No image, body, or results.
 *
 * Server Component.
 */

import type { CenterHealthContinuousUXSection } from '../content'
import styles from './ContinuousUXSection.module.css'

interface ContinuousUXSectionProps {
  section: CenterHealthContinuousUXSection
}

export default function ContinuousUXSection({ section }: ContinuousUXSectionProps) {
  return (
    <div className={styles.root}>

      <div className={styles.row}>

        <p className={styles.index}>{section.index}</p>

        <div className={styles.contentCol}>

          <h1 className={styles.heading}>{section.heading}</h1>

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

    </div>
  )
}
