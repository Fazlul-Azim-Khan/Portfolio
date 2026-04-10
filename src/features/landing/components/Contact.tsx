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
 * Structure:
 *   .root       — dark bg, flex column, padding-64
 *   .body       — heading + email CTA, flex column, gap-64
 *   .heading    — H3 56px Integral CF, uppercase, white
 *   .emailLink  — H4 32px Integral CF, uppercase, white, mailto: href
 *   .divider    — 1px --color-divider-dark
 *   .footer     — flex row space-between, Inter Lead 12px
 *   .brand      — "FAZ" — H5 20px Integral CF, white
 *   .copyright  — Inter Lead 12px, --color-tertiary
 *
 * Background:
 *   --color-primary (#0a0a0a) — dark treatment, same as Experience.
 *   Negative-margin bleed fills to container edges.
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
    <div className={styles.root} aria-label="Contact">

      {/* ── Body: heading + email CTA ────────────────────── */}
      {/*
        ⚠️  Layout is a stub — update to match Figma when provided.
        Heading: "GET IN TOUCH" — H3 Integral CF 56px, uppercase.
        Email: mailto: link styled as H4 Integral CF 32px with ↗ arrow.
        Content from content.ts — all strings editable centrally.
      */}
      <div className={styles.body}>

        <div className={styles.headerRow}>
          <p className={styles.headerIndex}>{contact.meta.index}</p>
          <h1 className={styles.heading}>
            {contact.meta.heading}
          </h1>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className={styles.emailLink}
          aria-label={`Send email to ${contact.email}`}
        >
          {contact.email} ↗
        </a>

      </div>

      {/* ── Divider ──────────────────────────────────────── */}
      <hr className={styles.divider} aria-hidden="true" />

      {/* ── Footer bar ───────────────────────────────────── */}
      {/*
        Two-zone flex row: brand left · copyright right.
        Brand: nav.brand.label ("FAZ") — H5 Integral CF 20px.
        Copyright: Inter Lead 12px, --color-tertiary.
        ⚠️  Stub — update to match Figma footer design when provided.
      */}
      <footer className={styles.footer}>

        <p className={styles.brand}>
          {nav.brand.label}
        </p>

        <p className={styles.copyright}>
          © 2026 Fazlul Azim Khan
        </p>

      </footer>

    </div>
  )
}
