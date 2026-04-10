/*
 * features/landing/components/Languages.tsx
 *
 * Languages section — Figma node 1036:7190 / 1036:7193
 *
 * Layout (top to bottom):
 *
 *   ┌─────────────────────────────────────────────────────────┐  ← light bg
 *   │  LANGUAGES                         H3 Integral CF 56px  │
 *   │                                                          │
 *   │  ENGLISH              GERMAN                            │
 *   │  Native               Elementary (A1)                   │
 *   │                                                          │
 *   │  ─────────────────────── divider ───────────────────── │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Server component — no interactivity required.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 *
 * Content: src/features/landing/content.ts
 */

import { languages } from '../content'
import styles        from './Languages.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Languages() {
  return (
    <div className={styles['lp-lang-root']} aria-label="Languages">

      {/* ── Heading ──────────────────────────────────────── */}
      <div className={styles['lp-lang-header-row']}>
        <p className={styles['lp-lang-header-index']}>{languages.meta.index}</p>
        <h1 className={styles['lp-lang-heading']}>
          {languages.meta.heading}
        </h1>
      </div>

      {/* ── Language grid ─────────────────────────────────── */}
      <div className={styles['lp-lang-grid']}>
        {languages.items.map((item) => (
          <div key={item.language} className={styles['lp-lang-item']}>
            <p className={styles['lp-lang-language']}>{item.language}</p>
            <p className={styles['lp-lang-proficiency']}>{item.proficiency}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
