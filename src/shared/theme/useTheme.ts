/*
 * useTheme.ts
 * Client-side theme state hook.
 *
 * Reads the effective theme on mount:
 *   1. localStorage 'theme' if set ('light' | 'dark') — explicit user choice
 *   2. Otherwise, system preference (prefers-color-scheme)
 *
 * setTheme(next) writes localStorage + sets data-theme on <html> + updates state.
 *
 * Listens to system preference changes and reflects them only when the
 * user hasn't set an override.
 *
 * Note: pre-hydration script in app/layout.tsx sets data-theme synchronously
 * before React mounts to avoid theme flash.
 */

'use client'

import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

function readEffectiveTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch (_) {
    /* localStorage may be blocked (private mode, sandboxed iframe) */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  // SSR-safe initial state — replaced on mount via the effect below
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    setThemeState(readEffectiveTheme())

    // Reflect system-preference changes only when the user has no override
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => {
      try {
        const stored = window.localStorage.getItem('theme')
        if (!stored) setThemeState(mql.matches ? 'dark' : 'light')
      } catch (_) {
        setThemeState(mql.matches ? 'dark' : 'light')
      }
    }
    mql.addEventListener('change', onSystemChange)
    return () => mql.removeEventListener('change', onSystemChange)
  }, [])

  const setTheme = (next: Theme) => {
    try {
      window.localStorage.setItem('theme', next)
    } catch (_) {
      /* ignore — toggle still works in-session via data-theme below */
    }
    document.documentElement.setAttribute('data-theme', next)
    setThemeState(next)
  }

  return { theme, setTheme }
}
