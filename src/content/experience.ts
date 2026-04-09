/*
 * content/experience.ts
 * Experience / Design Journey — confirmed from Figma node 1036:7650
 *
 * 9 entries, rendered as a list of rows separated by dividers.
 * Each row: left column (company + location) | right column (role + period)
 *
 * ⚠️  Date notice: Several entries show "February 2022 - Present" in the
 *     Figma design — these appear to be placeholder dates in the design file.
 *     The actual dates should be confirmed and updated here before launch.
 *     Entries with confirmed dates are marked (confirmed).
 *     Entries with likely placeholders are marked (⚠️ confirm date).
 *
 * To update an entry: edit only this file.
 * To add a new role: append a new object to this array.
 * To reorder: change the array order.
 */

import type { ExperienceEntry } from '@/types'

export const experienceEntries: ExperienceEntry[] = [
  {
    id:       'gb3-services',
    company:  'GB3 Services LLC',
    location: 'Sheridan, Wyoming',
    role:     'Product Designer & UX Strategist',
    period:   'February 2022 – Present',     // confirmed
  },
  {
    id:       'faz-studio',
    company:  'Faz Studio',
    location: 'Bangladesh',
    role:     'Founder & Lead Product Designer',
    period:   'January 2020 – February 2022', // confirmed
  },
  {
    id:       'freelance',
    company:  'Upwork, PeoplePerHour',
    location: 'Freelance',
    role:     'Product Designer & UX Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'center-health',
    company:  'Center Health',
    location: 'San Francisco, California',
    role:     'Product Designer & UX Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'elo',
    company:  'Embedded Logic Operations (ELO)',
    location: 'Dhaka, Bangladesh',
    role:     'UI/UX Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'jmi-group',
    company:  'JMI Group',
    location: 'Dhaka, Bangladesh',
    role:     'UI/UX Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'future-junction',
    company:  'Future Junction Inc.',
    location: 'Miyazaki, Japan',
    role:     'UI/UX Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'self-employed',
    company:  'Self-employed',
    location: 'Dhaka, Bangladesh',
    role:     'UX Design Foundation',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
  {
    id:       'techorbital',
    company:  'TechOrbital',
    location: 'Dhaka, Bangladesh',
    role:     'User Interface Designer',
    period:   'February 2022 – Present',      // ⚠️ confirm date
  },
]


/* ============================================================
   SECTION HEADER COPY
   Confirmed from Figma node 1036:7716
   ============================================================ */

export const experienceMeta = {
  heading: 'Explore my design journey',
} as const
