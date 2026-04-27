/*
 * ReflectionsSection.tsx — Center Health (014)
 * Confirmed from Figma node 1237:11350.
 *
 * Index-left / content-right row (gap-40).
 * Content: heading + 3×2 numbered grid.
 * Each cell: divider + card (white bg, rounded-16, p-4, gap-24).
 *
 * Server Component.
 */

import type { CenterHealthReflectionsSection } from '../content'
import styles from './ReflectionsSection.module.css'
import SectionProblem from './SectionProblem'

interface ReflectionsSectionProps {
  section: CenterHealthReflectionsSection
}

export default function ReflectionsSection({ section }: ReflectionsSectionProps) {
  return (
    <div className={styles['ch-ref-root']}>

      <div className={styles['ch-ref-row']}>

        <p className={styles['ch-ref-index']}>{section.index}</p>

        <div className={styles['ch-ref-content-col']}>

          <h1 className={styles['ch-ref-heading']}>{section.heading}</h1>

          {/* System Challenge — meta layer framing the whole case study */}
          <SectionProblem text={section.systemChallenge} label="System Challenge" />

          <div className={styles['ch-ref-grid']}>
            {section.reflections.map((item, i) => (
              <div key={i} className={styles['ch-ref-cell']}>
                <div className={styles['ch-ref-cell-divider']} aria-hidden="true" />
                <div className={styles['ch-ref-card']}>
                  <p className={styles['ch-ref-card-number']}>{item.number}</p>
                  <p className={styles['ch-ref-card-text']}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}
