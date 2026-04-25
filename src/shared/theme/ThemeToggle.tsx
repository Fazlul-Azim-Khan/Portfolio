/*
 * ThemeToggle.tsx
 * Two-segment toggle: sun (light) | moon (dark).
 *
 * Visual: matches the CTA outlined Button structure — same height,
 * border-radius, 0.5px outline, vertical separator between segments.
 *
 * Behaviour:
 *   - Click sun  → setTheme('light'), persisted in localStorage
 *   - Click moon → setTheme('dark'),  persisted in localStorage
 *   - Active segment reflects the EFFECTIVE theme (system-derived if no
 *     override, or the explicit choice if set).
 */

'use client'

import { useTheme } from './useTheme'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles['toggle-root']} role="group" aria-label="Theme">
      <button
        type="button"
        className={[
          styles['toggle-item'],
          theme === 'light' ? styles['toggle-item-active'] : styles['toggle-item-inactive'],
        ].join(' ')}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label="Light theme"
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className={[
          styles['toggle-item'],
          theme === 'dark' ? styles['toggle-item-active'] : styles['toggle-item-inactive'],
        ].join(' ')}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label="Dark theme"
      >
        <MoonIcon />
      </button>
    </div>
  )
}


/* ============================================================
   ICONS — inline SVG, currentColor, 16px
   ============================================================ */

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M1.5 8h1.5M13 8h1.5M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 9.46A6.5 6.5 0 0 1 6.54 2 6.5 6.5 0 1 0 14 9.46Z" />
    </svg>
  )
}
