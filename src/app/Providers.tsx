/*
 * app/Providers.tsx
 *
 * Client-side providers wrapper.
 * layout.tsx is a Server Component, so all client providers
 * are collected here and rendered as a single boundary.
 *
 * Current providers:
 *   - SmoothScrollProvider — Lenis-equivalent smooth scroll
 */

'use client'

import type { ReactNode } from 'react'
import SmoothScrollProvider from '@/shared/providers/SmoothScrollProvider'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SmoothScrollProvider duration={1.2}>
      {children}
    </SmoothScrollProvider>
  )
}
