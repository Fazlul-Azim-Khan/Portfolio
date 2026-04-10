/*
 * NoticeStrip/index.tsx
 * Confirmed from Figma node 1021:6892 — "Sub"
 *
 * Full-bleed strip directly below the NavBar.
 * Renders outside <Container> — no max-width constraint.
 *
 * Content is pulled from src/content/noticeStrip.ts.
 * To update the text: edit noticeStrip.ts only.
 *
 * Behavior note:
 *   Static display by default.
 *   The `marquee` prop is reserved for future scrolling behavior
 *   once confirmed — it will not break the layout if enabled later.
 *
 * Usage:
 *   <NoticeStrip />
 */

import { noticeStrip } from '@/content/noticeStrip'
import styles from './NoticeStrip.module.css'


/* ============================================================
   PROPS
   ============================================================ */

interface NoticeStripProps {
  marquee?:   boolean    // reserved — not yet implemented
  className?: string
}


/* ============================================================
   COMPONENT
   ============================================================ */

export default function NoticeStrip({
  marquee   = false,
  className,
}: NoticeStripProps) {

  const stripClass = [
    styles['notice-strip'],
    marquee   ? styles['notice-marquee'] : undefined,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      className={stripClass}
      role="banner"
      aria-label="Availability notice"
    >
      <p className={styles['notice-text']}>
        {noticeStrip.text}
      </p>
    </div>
  )
}
