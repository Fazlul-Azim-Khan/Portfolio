/*
 * content/languages.ts
 * Languages section — confirmed from Figma node 1036:7190
 *
 * To add a language: append to the array.
 * To update proficiency: change the proficiency string here only.
 */

import type { LanguageEntry } from '@/types'

export const languages: LanguageEntry[] = [
  {
    language:    'English',
    proficiency: 'Native',
  },
  {
    language:    'German',
    proficiency: 'Elementary (A1)',
  },
]


/* ============================================================
   SECTION HEADER COPY
   Confirmed from Figma node 1036:7193
   ============================================================ */

export const languagesMeta = {
  heading: 'Languages',
} as const
