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

interface ReflectionsSectionProps {
  section: CenterHealthReflectionsSection
}

export default function ReflectionsSection({ section }: ReflectionsSectionProps) {
  return (
    <div className={styles.root}>

      <div className={styles.row}>

        <p className={styles.index}>{section.index}</p>

        <div className={styles.contentCol}>

          <h1 className={styles.heading}>{section.heading}</h1>

          <div className={styles.grid}>
            {section.reflections.map((item, i) => (
              <div key={i} className={styles.cell}>
                <div className={styles.cellDivider} aria-hidden="true" />
                <div className={styles.card}>
                  <p className={styles.cardNumber}>{item.number}</p>
                  <p className={styles.cardText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  )
}
