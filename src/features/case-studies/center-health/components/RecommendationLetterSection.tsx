'use client'

/*
 * RecommendationLetterSection.tsx — Center Health (016)
 * UI adapted from Axion Ray ClientFeedback aesthetic.
 *
 * Dark card container with:
 *   - Large H1 heading (white)
 *   - Center Health blue quote card (clickable → PDF modal)
 *   - Right-aligned attribution
 *
 * Client Component — modal state requires client-side JS.
 */

import { useState, useEffect, useCallback } from 'react'
import type { CenterHealthRecommendationLetterSection } from '../content'
import IconButton from '@/components/ui/IconButton'
import { X } from '@/components/icons'
import styles from './RecommendationLetterSection.module.css'


/* ============================================================
   COMPONENT
   ============================================================ */

interface RecommendationLetterSectionProps {
  section: CenterHealthRecommendationLetterSection
}

export default function RecommendationLetterSection({
  section,
}: RecommendationLetterSectionProps) {

  // ── Modal state ───────────────────────────────────────────
  const [isOpen, setIsOpen] = useState(false)

  // ── Body scroll lock ──────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ── Escape key handler ────────────────────────────────────
  const closeModal = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeModal])


  // ── Render ────────────────────────────────────────────────
  return (
    <div className={styles.section}>

      {/* ── Heading ──────────────────────────────────────── */}
      <div className={styles.headingBlock}>
        <h1 className={styles.heading}>{section.heading}</h1>
      </div>

      {/* ── Clickable quote card (blue) ──────────────────── */}
      <button
        className={styles.card}
        onClick={() => setIsOpen(true)}
        aria-label="View recommendation letter PDF"
        type="button"
      >
        <p className={styles.quoteText}>{section.quote}</p>
        <p className={styles.quoteHint}>Click to view full letter</p>
      </button>

      {/* ── Attribution (right-aligned) ──────────────────── */}
      <div className={styles.attribution}>
        <p className={styles.attributionText}>{section.author}</p>
      </div>

      {/* ── PDF Modal ──────────────────────────────────────── */}
      {isOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Recommendation letter from Julian Laval"
          onClick={closeModal}
        >
          <div
            className={styles.modalPanel}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button — uses design-system IconButton (light variant for dark overlay) */}
            <IconButton
              icon={<X />}
              variant="light"
              onClick={closeModal}
              aria-label="Close preview"
              className={styles.modalClose}
            />


            {/* PDF iframe */}
            <div className={styles.modalPdfWrap}>
              <iframe
                className={styles.modalPdfIframe}
                src={section.pdfSrc}
                title="Recommendation letter — Julian Laval, CTO"
              />
            </div>

            {/* Caption */}
            <p className={styles.modalCaption}>
              Recommendation Letter — {section.author}
            </p>

          </div>
        </div>
      )}

    </div>
  )
}
