/*
 * features/landing/components/Contact.tsx
 *
 * Contact + Footer section — merged into one dark closing section.
 *
 * ⚠️  STUB — Contact section not yet designed in Figma.
 *     This implementation uses system-consistent tokens and patterns
 *     based on the established design language (same dark treatment as
 *     Experience). Update to match Figma when design is provided.
 *     Node ID to be confirmed by Faz.
 *
 * Layout (top to bottom):
 *
 *   ┌─────────────────────────────────────────────────────────┐  ← dark bg
 *   │                                                          │
 *   │  GET IN TOUCH                      H3 Integral CF 56px  │
 *   │                                                          │
 *   │  fazlul.azim.khan@gmail.com ↗      H4 Integral CF 32px  │
 *   │                                                          │
 *   │  ─────────────────── divider ─────────────────────────  │
 *   │                                                          │
 *   │  FAZ                      © 2025 Fazlul Azim Khan       │
 *   │  brand                    footer caption Lead 12px       │
 *   │                                                          │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Server component — no interactivity required.
 * The <section> wrapper and scroll ref are owned by LandingPage.
 *
 * Content: src/features/landing/content.ts
 */

import { contact, nav } from '../content'
import styles           from './Contact.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

export default function Contact() {
  return (
    <div className={styles['contact-root']} aria-label="Contact">

      {/* ── Body: heading + email CTA ────────────────────── */}
      <div className={styles['contact-body']}>

        <div className={styles['contact-header-row']}>
          <p className={styles['contact-header-index']}>{contact.meta.index}</p>
          <h1 className={styles['contact-heading']}>
            {contact.meta.heading}
          </h1>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className={styles['contact-email-link']}
          aria-label={`Send email to ${contact.email}`}
        >
          {contact.email} ↗
        </a>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <hr className={styles['contact-divider']} aria-hidden="true" />

      {/* ── Footer bar ───────────────────────────────────── */}
      <footer className={styles['contact-footer']}>

        <p className={styles['contact-brand']}>
          {nav.brand.label}
        </p>

        <p className={styles['contact-copyright']}>
          © 2026 Fazlul Azim Khan
        </p>

      </footer>

    </div>
  )
}
