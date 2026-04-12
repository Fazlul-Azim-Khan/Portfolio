/*
 * content/case-studies/erp-admin.ts
 * Case study content — ERP System Administration (ADM)
 * Slug: erp-admin  |  Client: Nipro–GMI
 *
 * This is the METADATA REGISTRY entry for generateStaticParams + generateMetadata.
 * The full feature content lives in src/features/case-studies/adm/content.ts.
 *
 * This file only needs hero data for the metadata/routing system.
 * Section data is not used by the registry — it's consumed directly by the feature page.
 */

import type { CaseStudy } from '@/types'


export const erpAdmin: CaseStudy = {

  slug: 'erp-admin',

  hero: {
    title:     'ERP system administration for a 32-SBU enterprise',
    heroImage: '/images/works/adm/hero.jpg',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Production',
      year:   '2019 – 2020',
      sector: 'Enterprise ERP · System Administration',
      chips:  ['Case study', 'Enterprise ERP', 'B2B Product'],
    },
  },

  sections: [],   // Sections are handled by the feature page component
}
