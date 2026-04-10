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
    <div className={styles['cux-root']}>

      <div className={styles['cux-row']}>

        <p className={styles['cux-index']}>{section.index}</p>

        <div className={styles['cux-content-col']}>

          <h1 className={styles['cux-heading']}>{section.heading}</h1>

          <div className={styles['cux-feature-row']}>
            {section.features.map((feat, i) => (
              <div key={i} className={styles['cux-feature-item']}>
                <div className={styles['cux-feature-divider']} aria-hidden="true" />
                <p className={styles['cux-feature-title']}>{feat}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}
