/*
 * WhyItMatteredSection.tsx — Center Health (001)
 * Confirmed from Figma node 1161:5809 (updated layout).
 *
 * Self-contained section — does NOT use CaseStudySectionWrapper.
 *
 * Layout:
 *
 *   ┌── section (border-bottom, py-96px, items-end) ────────────────────────────┐
 *   │                                                                            │
 *   │  (001)  ┌── content col (flex-1, items-center, gap-10) ───────────────┐   │
 *   │         │                                                              │   │
 *   │         │  WHY THIS PRODUCT MATTERED         ← H2 64px, w-732px       │   │
 *   │         │                                                              │   │
 *   │         │  ┌── 370px ──────┐  ┌──────── w-971px ──────────────────┐   │   │
 *   │         │  │ JULIAN (CTO)  │  │                                    │   │   │
 *   │         │  │ Longtime…     │  │  QUOTE TEXT — H4 32px uppercase    │   │   │
 *   │         │  ├───────────────┤  │                                    │   │   │
 *   │         │  │ ALI (CEO)     │  │                                    │   │   │
 *   │         │  │ Father had…   │  └────────────────────────────────────┘   │   │
 *   │         │  └───────────────┘                                           │   │
 *   │         └──────────────────────────────────────────────────────────────┘   │
 *   └────────────────────────────────────────────────────────────────────────────┘
 *
 * The index sits LEFT in a row; heading + cards sit RIGHT in a flex-1 column.
 * This matches the index-left / content-right pattern used across other sections.
 *
 * Typography:
 *   Index   — Inter, --text-lead (12px), --color-text-muted, uppercase
 *   Heading — Integral CF, --text-h2 (64px), --tracking-h2 (-0.4px), uppercase
 *   Name    — Integral CF, --text-h4 (32px), uppercase
 *   Detail  — Inter, --text-body (14px)
 *   Quote   — Integral CF, --text-h4 (32px), uppercase
 *
 * Card style:
 *   White bg, rounded 16px, blue shadow, p-64, gap-12, top 1px divider.
 *
 * Server Component — no client-side interaction.
 */

import type { CenterHealthWhyItMatteredSection } from '../content'
import styles from './WhyItMatteredSection.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface WhyItMatteredSectionProps {
  section: CenterHealthWhyItMatteredSection
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function WhyItMatteredSection({ section }: WhyItMatteredSectionProps) {
  return (
    <section className={styles.section}>

      {/* ── Top-level row: index (left) + content (right) ── */}
      <div className={styles.row}>

        {/* Index — left column */}
        <p className={styles.index}>{section.index}</p>

        {/* Content column — heading + cards */}
        <div className={styles.contentCol}>

          {/* Heading — constrained to 732px, centered in column */}
          <h1 className={styles.heading}>{section.heading}</h1>

          {/* Cards row — people (left) + quote (right) */}
          <div className={styles.cardsRow}>

            {/* Left — stacked person cards */}
            <div className={styles.peopleCol}>
              {section.people.map((person, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardDivider} aria-hidden="true" />
                  <h3 className={styles.cardName}>{person.name}</h3>
                  <p className={styles.cardDetail}>{person.detail}</p>
                </div>
              ))}
            </div>

            {/* Right — quote card */}
            <div className={[styles.card, styles.quoteCard].join(' ')}>
              <div className={styles.cardDivider} aria-hidden="true" />
              <p className={styles.quote}>{section.quote}</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
