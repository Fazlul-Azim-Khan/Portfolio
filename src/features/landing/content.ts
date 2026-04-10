/*
 * features/landing/content.ts
 *
 * Single source of truth for ALL landing page content.
 * Components inside features/landing/ must import from here only.
 * No inline strings in JSX.
 *
 * Sections covered:
 *   noticeStrip · nav · hero · selectedWorks · gallery · experience · languages · contact
 *
 * Content confirmed verbatim from Figma unless marked ⚠️.
 */


// ─── NOTICE STRIP ────────────────────────────────────────────────────────────
// Confirmed from Figma node 1021:6894
// "Availibility" matches Figma source spelling exactly — update when confirmed

export const noticeStrip = {
  text: 'GERMANY  ·  CHANCENKARTE  ·  No Sponsorship Needed  ·  Available Full-Time',
} as const


// ─── NAVIGATION ──────────────────────────────────────────────────────────────
// Confirmed from Figma node I966:7519

export const nav = {
  brand: {
    label: 'FAZ',
    href:  '/',
  },
  languages: [
    { code: 'EN', label: 'EN', active: true  },
    { code: 'DE', label: 'DE', active: false },
  ],
  links: [
    { label: 'Portfolio', href: '/'       },
    { label: 'Services',  href: '#works'  },
    { label: 'Profile',   href: '#contact' },
  ],
  ctas: [
    { label: 'Download CV ↓', href: '/cv.pdf',                                          variant: 'outlined' as const },
    { label: 'LinkedIn ↗',    href: 'https://www.linkedin.com/in/fazlul-azim-khan/',   variant: 'outlined' as const },
    { label: 'Contact me →',  href: '#contact',                                         variant: 'primary'  as const },
  ],
} as const


// ─── HERO ────────────────────────────────────────────────────────────────────
// Confirmed from Figma node 966:7520

export const hero = {
  /** Large decorative ↗ in top-left cell — flipped vertically in CSS to appear as ↘ */
  decorativeArrow: '↗',

  /** Renders in H5 above the headline */
  name: 'FAZLUL AZIM KHAN',

  /** Renders in H1 (120px) — split to allow per-word colour control */
  headline: {
    line1: 'Product Designer',
    line2: {
      ampersand: '&',            // renders in --color-tertiary
      rest:      ' UX Strategist',
    },
  },

  /** Renders in H5 below the headline — Lead uppercase via CSS */
  subline: 'Enterprise AI · Clinical & Industrial · 2 AI Products Shipped',

  /** Renders in Lead (12px Inter, uppercase) in top-right grid cell */
  bio: 'I design AI-powered products for expert-user domains — clinical decision support, metabolic health, and industrial reliability. Two shipped AI products. Most recently at Center Health. Earlier at Axion Ray, backed by Boeing, Raytheon, Denso, and Baxter.',

  /** Specialty chip tags — order matches Figma layout (left→right, wrapping) */
  chips: [
    'AI prediction & analytics',
    'Enterprise AI systems',
    'AI data visualisation',
    'Clinical AI visualisation',
    'Interaction design',
    'Product Strategy',
  ],
} as const


// ─── SELECTED WORKS ──────────────────────────────────────────────────────────
// Confirmed from Figma nodes 966:7565, 942:5673, 942:5756, 942:5763
// Client #1 is under NDA — exposed as generic safe label

export const selectedWorks = {
  meta: {
    index:   '(002)',
    heading: 'Selected Works',
    count:   '2 Case Studies',
  },
  items: [
    {
      id:     'manufacturing-platform',
      index:  '01',
      client: 'Axion Ray',
      title:  'AI-Powered Manufacturing Reliability Platform',
      slug:   'manufacturing-platform',
      mockup: '/images/works/manufacturing-platform/mockup.jpg',
    },
    {
      id:     'center-health',
      index:  '02',
      client: 'Center Health',
      title:  'AI-Powered Diabetes Management Platform',
      slug:   'center-health',
      mockup: '/images/works/center-health/mockup.jpg',
    },
    // {
    //   id:     'arrival-os',
    //   index:  '03',
    //   client: 'Arrival OS',
    //   title:  'Frictionless cross-border onboarding',
    //   slug:   'arrival-os',
    //   mockup: '/images/works/arrival-os/mockup.png',
    // },
  ],
} as const


// ─── GALLERY ─────────────────────────────────────────────────────────────────
// Confirmed from Figma node 1021:6995
// 12 items · 3-column × 4-row grid · left-to-right, top-to-bottom

export type GalleryRadiusVariant = 'default' | 'large'

export interface GalleryItem {
  id:               string
  title:            string
  /**
   * Array of image paths for this work item.
   * Add more paths to the array as you add images to the project folder.
   *
   * Recommended folder pattern per item:
   *   public/images/gallery/{id}/01.png
   *   public/images/gallery/{id}/02.png
   *   ...
   *
   * Modal will show prev/next navigation when images.length > 1.
   */
  images:           string[]
  radiusVariant:    GalleryRadiusVariant
  backgroundColor?: string
}

export const gallery = {
  meta: {
    index:      '(003)',
    heading:    'More works',
    subheading: 'A broader range across fintech, health, productivity, and consumer apps — from earlier client and studio work.',
  },
  items: [
    // Row 1
    {
      id:           'bm-solutions-btl-rates',
      title:        'BM Solutions BTL Rates',
      images:       ['/images/gallery/bm-solutions-btl-rates.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'training-courses-platform',
      title:        'Training Courses Platform',
      images:       ['/images/gallery/training-courses-platform.jpg'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'mnmridez-chauffeur-service',
      title:        'MnMridez Chauffeur Service',
      images:       ['/images/gallery/mnmridez-chauffeur-service.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    // Row 2
    {
      id:           'task-manager-app',
      title:        'Task Manager App',
      images:       ['/images/gallery/task-manager-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'sales-tracking-app',
      title:        'Sales Tracking App',
      images:       ['/images/gallery/sales-tracking-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'video-call-app',
      title:        'Video Call App',
      images:       ['/images/gallery/video-call-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    // Row 3
    {
      id:           'nrb-banking-app',
      title:        'NRB Banking App',
      images:       ['/images/gallery/nrb-banking-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'groceries-mobile-app',
      title:        'Groceries Mobile App',
      images:       ['/images/gallery/groceries-mobile-app.png'],
      radiusVariant: 'large' as GalleryRadiusVariant,
    },
    {
      id:           'soda-finder-app',
      title:        'Soda Finder App',
      images:       ['/images/gallery/soda-finder-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    // Row 4
    {
      id:           'yourself-online-dashboard',
      title:        'Yourself.online Dashboard',
      images:       ['/images/gallery/yourself-online-dashboard.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'click-on-offers-dashboard',
      title:        'Click On Offers Dashboard',
      images:       ['/images/gallery/click-on-offers-dashboard.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:           'karaoke-singing-app',
      title:        'Karaoke Singing App',
      images:       ['/images/gallery/karaoke-singing-app.png'],
      radiusVariant: 'large' as GalleryRadiusVariant,
    },
  ] as GalleryItem[],
} as const


// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
// Confirmed from Figma node 1036:7650
// ⚠️  Several "February 2022 – Present" periods are placeholder dates in Figma.
//     Confirm actual dates before launch — flagged inline below.

export interface ExperienceEntry {
  id:       string
  company:  string
  location: string
  role:     string
  period:   string
}

export const experience = {
  meta: { index: '(004)', heading: 'Explore my design journey' },
  entries: [
    // ── Work Experience ────────────────────────────────────────────────────────
    {
      id:       'gb3-services',
      company:  'GB3 Services LLC',
      location: 'Sheridan, Wyoming',
      role:     'Product Designer & UX Strategist',
      period:   'Jan 2025 – Nov 2025',
    },
    {
      id:       'center-health',
      company:  'Center Health',
      location: 'San Francisco, California',
      role:     'Product Designer & UX Designer',
      period:   'Oct 2021 – Dec 2023',
    },
    {
      id:       'axion-ray',
      company:  'Axion Ray',
      location: 'Remote',
      role:     'Product Designer (Contractor)',
      period:   'Feb 2021 – Aug 2022',
    },
    {
      id:       'elo',
      company:  'Embedded Logic Operations (ELO)',
      location: 'Dhaka, Bangladesh',
      role:     'UI/UX Designer',
      period:   'Dec 2020 – Nov 2021',
    },
    {
      id:       'jmi-group',
      company:  'JMI Group',
      location: 'Dhaka, Bangladesh',
      role:     'UI/UX Designer',
      period:   'Jun 2020 – Nov 2020',
    },
    {
      id:       'future-junction',
      company:  'Future Junction Inc.',
      location: 'Miyazaki, Japan',
      role:     'UI/UX Designer',
      period:   'Oct 2019 – Jun 2020',
    },
    {
      id:       'techorbital',
      company:  'TechOrbital',
      location: 'Dhaka, Bangladesh',
      role:     'User Interface Designer',
      period:   'Nov 2016 – Dec 2017',
    },
    // ── Education ─────────────────────────────────────────────────────────────
    {
      id:       'university-asia-pacific',
      company:  'University of Asia Pacific',
      location: 'Dhaka, Bangladesh',
      role:     'BSc in Computer Science',
      period:   '2016 – 2020',
    },
  ] satisfies ExperienceEntry[],
} as const


// ─── LANGUAGES ───────────────────────────────────────────────────────────────
// Confirmed from Figma node 1036:7190 / 1036:7193

export const languages = {
  meta: { index: '(005)', heading: 'Languages' },
  items: [
    { language: 'English', proficiency: 'Native'          },
    { language: 'German',  proficiency: 'Elementary (A2)' },
  ],
} as const


// ─── CONTACT ─────────────────────────────────────────────────────────────────
// ⚠️  Contact section not yet designed in Figma — content is a stub.
//     Populate when Figma design is provided.

export const contact = {
  meta: { index: '(006)', heading: 'Get in touch' },
  email: 'fazlul.azim.khan@gmail.com',
} as const
