/*
 * components/icons/index.tsx
 *
 * Inline SVG icon set — Lucide design language.
 * All icons:
 *   viewBox  24 × 24
 *   stroke   currentColor   (inherits from parent CSS color)
 *   strokeWidth  1.5
 *   strokeLinecap  round
 *   strokeLinejoin round
 *   fill     none
 *
 * Usage:
 *   import { ArrowLeft, ArrowRight, X } from '@/components/icons'
 *   <ArrowLeft size={20} />
 *
 * To add an icon: paste Lucide SVG paths into a new export below.
 */


/* ============================================================
   BASE PROPS
   ============================================================ */

interface IconProps {
  size?:      number   // width = height, default 20
  className?: string
  'aria-hidden'?: boolean
}

const base = {
  fill:              'none',
  stroke:            'currentColor',
  strokeWidth:       1.5,
  strokeLinecap:     'round' as const,
  strokeLinejoin:    'round' as const,
}


/* ============================================================
   ARROW LEFT  ←
   Lucide: https://lucide.dev/icons/arrow-left
   ============================================================ */

export function ArrowLeft({ size = 20, className, 'aria-hidden': hidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={hidden}
      className={className}
      {...base}
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  )
}


/* ============================================================
   ARROW RIGHT  →
   Lucide: https://lucide.dev/icons/arrow-right
   ============================================================ */

export function ArrowRight({ size = 20, className, 'aria-hidden': hidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={hidden}
      className={className}
      {...base}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


/* ============================================================
   X  (close)
   Lucide: https://lucide.dev/icons/x
   ============================================================ */

export function X({ size = 20, className, 'aria-hidden': hidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={hidden}
      className={className}
      {...base}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


/* ============================================================
   CHEVRON LEFT  ‹
   Lucide: https://lucide.dev/icons/chevron-left
   ============================================================ */

export function ChevronLeft({ size = 20, className, 'aria-hidden': hidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={hidden}
      className={className}
      {...base}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


/* ============================================================
   CHEVRON RIGHT  ›
   Lucide: https://lucide.dev/icons/chevron-right
   ============================================================ */

export function ChevronRight({ size = 20, className, 'aria-hidden': hidden = true }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={hidden}
      className={className}
      {...base}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
