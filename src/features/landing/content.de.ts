/*
 * features/landing/content.de.ts
 *
 * German translations for all landing page content.
 * Structure mirrors content.ts exactly — only string values differ.
 *
 * To update translations: edit string values only.
 * Do not modify object shapes or add/remove keys.
 *
 * Types (GalleryItem, ExperienceEntry, etc.) are always sourced
 * from content.ts — no need to re-export them here.
 */

import type { GalleryItem, ExperienceEntry } from './content'


// ─── NOTICE STRIP ────────────────────────────────────────────────────────────

export const noticeStrip = {
  text: 'Deutschland  ·  Vollzeit verfügbar',
} as const


// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const nav = {
  brand: {
    label: 'faz',
    href:  '/de',
  },
  languages: [
    { code: 'EN', label: 'EN', active: false },
    { code: 'DE', label: 'DE', active: true  },
  ],
  links: [
    { label: 'Portfolio',  href: '/de'      },
    { label: 'Leistungen', href: '#works'   },
    { label: 'Profil',     href: '#contact' },
  ],
  ctas: [
    { label: 'Lebenslauf ↓', href: '/Fazlul_Azim_Khan_CV.pdf',                                        variant: 'outlined' as const },
    { label: 'LinkedIn ↗',   href: 'https://www.linkedin.com/in/fazlul-azim-khan/', variant: 'outlined' as const },
    { label: 'Kontakt →',    href: 'mailto:fazlul.azim.khan@gmail.com',              variant: 'primary-brand' as const },
  ],
} as const


// ─── HERO ────────────────────────────────────────────────────────────────────

export const hero = {
  decorativeArrow: '↗',

  name: 'FAZLUL AZIM KHAN',

  headline: {
    line1: 'Product Designer',
    line2: {
      ampersand: '&',
      rest:      ' UX Strategist',
    },
  },

  subline: 'Founding designer on two shipped AI products. 8 years. CS degree. Idea to deployment — no handoff required.',

  bio: 'Ich gestalte KI-gestützte Produkte für Fachnutzer-Domänen — klinische Entscheidungsunterstützung, metabolische Gesundheit und industrielle Zuverlässigkeit. Zwei ausgelieferte KI-Produkte. Zuletzt bei Center Health. Davor bei Axion Ray, gefördert von Boeing, Raytheon, Denso und Baxter.',

  chips: [
    'KI-Prognose & Analytik',
    'Enterprise-KI-Systeme',
    'KI-Datenvisualisierung',
    'Klinische KI-Visualisierung',
    'Interaktionsdesign',
    'Produktstrategie',
  ],
} as const


// ─── BIO BANNER ──────────────────────────────────────────────────────────────

export const bioBanner = {
  text:  hero.bio,
  chips: hero.chips,
} as const


// ─── STATS ───────────────────────────────────────────────────────────────────

export const stats = {
  meta: { index: '(003)' },
  items: [
    { value: '8+',     label: 'Jahre End-to-End Produktdesign'                  },
    { value: '~$25M',  label: 'Finanzierung als Gründungsdesigner unterstützt'  },
    { value: 'NPS 84', label: 'durch nutzerzentriertes klinisches UX erreicht'  },
    { value: '10+',    label: 'Kundenprodukte als Staff Designer geliefert'      },
  ],
} as const


// ─── SELECTED WORKS ──────────────────────────────────────────────────────────

export const selectedWorks = {
  meta: {
    index:   '(004)',
    heading: 'Ausgewählte Projekte',
    count:   '2 Fallstudien',  /* ← bei Veröffentlichung von ERP/ADM auf 3 erhöhen */
  },
  items: [
    {
      id:     'manufacturing-platform',
      index:  '01',
      client: 'Axion Ray',
      title:  'KI-gestützte Fertigungszuverlässigkeitsplattform',
      slug:   'manufacturing-platform',
      mockup: '/images/works/manufacturing-platform/mockup.jpg',
    },
    {
      id:     'center-health',
      index:  '02',
      client: 'Center Health',
      title:  'KI-gestützte Diabetesmanagementplattform',
      slug:   'center-health',
      mockup: '/images/works/center-health/mockup.jpg',
    },
    // ── (03) ERP / ADM — visuelle Assets in Arbeit; auskommentieren wenn fertig ──
    // {
    //   id:     'erp-admin',
    //   index:  '03',
    //   client: 'Nipro–GMI',
    //   title:  'ERP-Systemadministration für ein 32-SBU-Unternehmen',
    //   slug:   'erp-admin',
    //   mockup: '/images/works/adm/mockup.jpg',
    // },
  ],
} as const


// ─── GALLERY ─────────────────────────────────────────────────────────────────

export type GalleryRadiusVariant = 'default' | 'large'

export const gallery = {
  meta: {
    index:      '(005)',
    heading:    'Weitere Projekte',
    subheading: 'Ein breiteres Spektrum aus Fintech, Gesundheit, Produktivität und Consumer-Apps — aus früherer Kunden- und Studioarbeit.',
  },
  items: [
    {
      id:            'bm-solutions-btl-rates',
      title:         'BM Solutions BTL-Raten',
      images:        ['/images/gallery/bm-solutions-btl-rates.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'training-courses-platform',
      title:         'Weiterbildungsplattform',
      images:        ['/images/gallery/training-courses-platform.jpg'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'mnmridez-chauffeur-service',
      title:         'MnMridez Chauffeurservice',
      images:        ['/images/gallery/mnmridez-chauffeur-service.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'task-manager-app',
      title:         'Aufgaben-Manager-App',
      images:        ['/images/gallery/task-manager-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'sales-tracking-app',
      title:         'Verkaufsverfolgungsapp',
      images:        ['/images/gallery/sales-tracking-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'video-call-app',
      title:         'Videoanruf-App',
      images:        ['/images/gallery/video-call-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'nrb-banking-app',
      title:         'NRB-Banking-App',
      images:        ['/images/gallery/nrb-banking-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'groceries-mobile-app',
      title:         'Lebensmittel-App',
      images:        ['/images/gallery/groceries-mobile-app.png'],
      radiusVariant: 'large' as GalleryRadiusVariant,
    },
    {
      id:            'soda-finder-app',
      title:         'Getränke-Finder-App',
      images:        ['/images/gallery/soda-finder-app.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'yourself-online-dashboard',
      title:         'Yourself.online Dashboard',
      images:        ['/images/gallery/yourself-online-dashboard.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'click-on-offers-dashboard',
      title:         'Click on Offers Dashboard',
      images:        ['/images/gallery/click-on-offers-dashboard.png'],
      radiusVariant: 'default' as GalleryRadiusVariant,
    },
    {
      id:            'karaoke-singing-app',
      title:         'Karaoke-App',
      images:        ['/images/gallery/karaoke-singing-app.png'],
      radiusVariant: 'large' as GalleryRadiusVariant,
    },
  ] as GalleryItem[],
} as const


// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

export const experience = {
  meta: { index: '(006)', heading: 'Meine Designreise' },
  entries: [
    {
      id:       'gb3-services',
      company:  'GB3 Services LLC',
      location: 'Sheridan, Wyoming',
      role:     'Produktdesigner & UX-Stratege',
      period:   'Jan 2025 – Nov 2025',
    },
    {
      id:       'center-health',
      company:  'Center Health',
      location: 'San Francisco, Kalifornien',
      role:     'Produktdesigner & UX-Designer',
      period:   'Okt 2021 – Dez 2023',
    },
    {
      id:       'axion-ray',
      company:  'Axion Ray',
      location: 'Remote',
      role:     'Produktdesigner (Freiberufler)',
      period:   'Feb 2021 – Aug 2022',
    },
    {
      id:       'elo',
      company:  'Embedded Logic Operations (ELO)',
      location: 'Dhaka, Bangladesch',
      role:     'UI/UX-Designer',
      period:   'Dez 2020 – Nov 2021',
    },
    {
      id:       'jmi-group',
      company:  'JMI Group',
      location: 'Dhaka, Bangladesch',
      role:     'UI/UX-Designer',
      period:   'Jun 2020 – Nov 2020',
    },
    {
      id:       'future-junction',
      company:  'Future Junction Inc.',
      location: 'Miyazaki, Japan',
      role:     'UI/UX-Designer',
      period:   'Okt 2019 – Jun 2020',
    },
    {
      id:       'techorbital',
      company:  'TechOrbital',
      location: 'Dhaka, Bangladesch',
      role:     'User Interface Designer',
      period:   'Nov 2016 – Dez 2017',
    },
    {
      id:       'university-asia-pacific',
      company:  'University of Asia Pacific',
      location: 'Dhaka, Bangladesch',
      role:     'B.Sc. Informatik',
      period:   '2016 – 2020',
    },
  ] satisfies ExperienceEntry[],
} as const


// ─── LANGUAGES ───────────────────────────────────────────────────────────────

export const languages = {
  meta: { index: '(006)', heading: 'Sprachen' },
  items: [
    { language: 'Englisch', proficiency: 'Muttersprache'        },
    { language: 'Deutsch',  proficiency: 'Grundkenntnisse (A2)' },
  ],
} as const


// ─── HOW I WORK ──────────────────────────────────────────────────────────────

export const howIWork = {
  meta: { index: '(007)', heading: 'Meine Arbeitsweise' },
  steps: [
    { index: '01', label: 'Verstehen' },
    { index: '02', label: 'Gestalten' },
    { index: '03', label: 'Liefern'   },
    { index: '04', label: 'Entwickeln'},
  ],
} as const


// ─── CONTACT ─────────────────────────────────────────────────────────────────

export const contact = {
  meta: { index: '(008)', heading: 'Kontakt aufnehmen' },
  email: 'fazlul.azim.khan@gmail.com',
} as const
