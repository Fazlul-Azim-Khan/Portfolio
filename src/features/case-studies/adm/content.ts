/*
 * features/case-studies/adm/content.ts
 *
 * Single source of truth for the ADM (System Administration) case study.
 * Slug: erp-admin  |  Client: Nipro–GMI (names cleared for public use)
 *
 * Section order:
 *   Hero · Problem (001) · Constraints (002) · DesignDecisions (003)
 *   Execution (004) · Outcome (005) · Reflections (006) · NextCaseStudy
 *
 * Image paths — ⚠️ placeholder paths, files not yet exported:
 *   public/images/works/adm/hero.jpg
 *   public/images/works/adm/config-hierarchy-01.jpg
 *   public/images/works/adm/config-hierarchy-02.jpg
 *   public/images/works/adm/access-governance-01.jpg
 *   public/images/works/adm/access-governance-02.jpg
 *   public/images/works/adm/multi-entity-01.jpg
 *   public/images/works/adm/system-ops-01.jpg
 *   public/images/works/adm/user-lifecycle-01.jpg
 *
 * To update content: edit strings in this file only.
 * To change layout: edit the section components.
 */


/* ============================================================
   INTERFACES
   Section-specific types not covered by @/types.
   Shared types (CaseStudyHeroData, etc.) imported from @/types.
   ============================================================ */

import type {
  CaseStudyHeroData,
  CaseStudyProblemSection,
  CaseStudyDecisionsSection,
} from '@/types'


/* ── Constraints ─────────────────────────────────────────── */

export interface ADMConstraint {
  /** Bold title — e.g. "Apache-based ERP framework" */
  title: string
  /** Body paragraph explaining the constraint */
  body:  string
}

export interface ADMConstraintsSection {
  type:        'constraints'
  index:       string
  heading:     string
  constraints: ADMConstraint[]
}


/* ── Execution ───────────────────────────────────────────── */

export interface ADMExecutionCluster {
  /** Pattern cluster title — e.g. "Configuration hierarchy" */
  title:       string
  /** Description of the pattern */
  description: string
  /** Image paths for this cluster (placeholder until exported) */
  images?:     string[]
}

export interface ADMExecutionSection {
  type:     'execution'
  index:    string
  heading:  string
  clusters: ADMExecutionCluster[]
}


/* ── Outcome ─────────────────────────────────────────────── */

export interface ADMOutcomeSection {
  type:             'outcome'
  index:            string
  heading:          string
  /** Primary outcome statement — the big line */
  primaryOutcome:   string
  /** Process outcomes — bullet-style supporting statements */
  processOutcomes:  string[]
  /** Impact statement — dark card, uppercase display */
  impactStatement:  string
  /** Skill chip labels */
  skills:           string[]
}


/* ── Reflections ─────────────────────────────────────────── */

export interface ADMReflectionsSection {
  type:    'reflections'
  index:   string
  heading: string
  insights: Array<{
    number: string   // '01', '02', '03'
    title:  string
    body:   string
  }>
}


/* ── NextCaseStudy ───────────────────────────────────────── */

export interface ADMNextCaseStudySection {
  type:     'next-case-study'
  label:    string
  index?:   string
  title:    string
  subtitle: string
  href:     string
  image?:   string
}


/* ── Union ───────────────────────────────────────────────── */

export type ADMSectionData =
  | CaseStudyProblemSection
  | ADMConstraintsSection
  | CaseStudyDecisionsSection
  | ADMExecutionSection
  | ADMOutcomeSection
  | ADMReflectionsSection
  | ADMNextCaseStudySection


/* ── Top-level shape ─────────────────────────────────────── */

export interface ADMCaseStudy {
  slug:     string
  hero:     CaseStudyHeroData
  sections: ADMSectionData[]
}


/* ============================================================
   CONTENT
   ============================================================ */

export const adm: ADMCaseStudy = {

  slug: 'erp-admin',


  /* ── Hero ──────────────────────────────────────────────────
     ⚠️ Image placeholder — export from Figma when ready.
     ─────────────────────────────────────────────────────────── */

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


  sections: [

    /* ── (001) The Problem ─────────────────────────────────
       ─────────────────────────────────────────────────────── */
    {
      type:    'problem',
      index:   '(001)',
      heading: 'The Problem',

      quote:
        '" An ERP system that governs 32 business units cannot afford a learning curve. ' +
        'Every hour an admin spends figuring out the interface is an hour the entire organization waits. "',

      body:
        'User access. Role-based permissions. Approval workflows. System configuration. ' +
        'Notification routing. Audit trails. In a multi-entity conglomerate, these aren\'t ' +
        'settings — they\'re the operational backbone. When they break or confuse, every downstream ' +
        'module stalls. The Nipro–GMI joint enterprise needed a System Administration module that ' +
        'operations managers across 32 Strategic Business Units could configure without engineering ' +
        'support, without breaking data isolation between entities, and without training on a new ' +
        'interaction paradigm. The platform was designed with dual intent: as the internal governance ' +
        'layer for Nipro–GMI operations across Bangladesh and Japan, and as a scalable ERP product ' +
        'that could be commercialized to other organizations. Every design decision had to serve both ' +
        'purposes — immediately usable for the current organization, abstractly configurable for ' +
        'unknown future clients.',
    } satisfies CaseStudyProblemSection,


    /* ── (002) Constraints & Givens ────────────────────────
       ADM-specific section type.
       ─────────────────────────────────────────────────────── */
    {
      type:    'constraints',
      index:   '(002)',
      heading: 'Constraints & givens',

      constraints: [
        {
          title: 'Apache-based ERP framework',
          body:
            'The platform was built on an existing Apache-based ERP framework with a defined ' +
            'component library — tables, popups, navigation structures, interaction patterns. ' +
            'Custom UI development was expensive within this architecture, so every design had to ' +
            'align with existing technical patterns or justify the deviation.',
        },
        {
          title: 'No component library or variant system',
          body:
            'Maintained design consistency across the full screen inventory without a component ' +
            'library or variant system — through manual documentation, naming conventions, and ' +
            'disciplined pattern reuse.',
        },
        {
          title: 'Non-technical stakeholder evaluation',
          body:
            'Stakeholders from Nipro, GMI, finance, and departmental leads could not evaluate from ' +
            'documentation alone. Every feature had to be demonstrated through interactive prototypes — ' +
            'manually linked, state-accurate, updated with every requirements change.',
        },
        {
          title: 'Product commercialization requirement',
          body:
            'The system architecture could not be hardcoded to Nipro–GMI\'s specific workflows. ' +
            'Configuration, navigation, and permission structures had to be abstract enough to serve ' +
            'unknown future clients while remaining immediately usable for the current 32-SBU organization.',
        },
        {
          title: 'Continuous requirements evolution',
          body:
            'Agile delivery with feedback from multiple SBUs, finance, and strategic units. Requirements ' +
            'evolved sprint-to-sprint, with features being locked and released incrementally.',
        },
        {
          title: 'Cross-border stakeholder alignment',
          body:
            'Nipro (Japan) provided business direction and funding. GMI Group (Bangladesh) handled ' +
            'development through MononSoft, their internal IT entity. Design had to satisfy both ' +
            'strategic and operational stakeholders across time zones and organizational cultures.',
        },
      ],
    } satisfies ADMConstraintsSection,


    /* ── (003) Key Design Decisions ────────────────────────
       Uses shared CaseStudyDecisionsSection type.
       ─────────────────────────────────────────────────────── */
    {
      type:    'decisions',
      index:   '(003)',
      heading: 'Key design decisions',

      decisions: [
        {
          title: 'Established enterprise navigation paradigm over modern UX',
          chose:
            'A master-detail navigation pattern with left-panel hierarchy — aligned with the ' +
            'Windows-based enterprise environments users across Nipro and GMI already operated in daily.',
          why:
            'Introducing a novel interaction paradigm would have added training overhead to an already ' +
            'complex system. Users understood how left-panel navigation, settings panels, and hierarchical ' +
            'system flows worked. The priority was zero-friction adoption across 32 SBUs.',
          tradeoff:
            'The interface wouldn\'t stand out aesthetically, but adoption friction dropped to near-zero ' +
            'because users recognized the interaction patterns from their existing work environment.',
        },
        {
          title: 'Design within the framework, not against it',
          chose:
            'Studied the Apache ERP framework\'s existing components — tables, popups, navigation ' +
            'structures — and designed within those constraints rather than creating ideal UI that would ' +
            'require custom development.',
          why:
            'The framework already had proven technical patterns. Designing against them would create ' +
            'implementation risk, slow development velocity, and increase QA surface area. The strategy: ' +
            'keep the core system behavior intact, elevate the UI layer through consistency in layout, ' +
            'typography, and visual structure.',
          tradeoff:
            'Some interactions were second-best from a pure UX perspective. But every design mapped to an ' +
            'existing technical pattern, and development velocity stayed high.',
        },
        {
          title: 'Modular page composition over custom layouts',
          chose:
            'Decomposed each requirement into independent functional blocks — table blocks, form blocks, ' +
            'status blocks, action bars — and assembled screens from these blocks using consistent ' +
            'placement rules.',
          why:
            'With a system spanning 12 sub-modules and hundreds of features, per-screen custom layouts ' +
            'would have created unpredictable experiences and scaling pain. Every configuration screen used ' +
            'the same block order: navigation context, data table, action bar, status indicator. Users ' +
            'could navigate to an unfamiliar screen and immediately locate the data entry area, action ' +
            'controls, and navigation context because the spatial pattern was consistent.',
          tradeoff:
            'Less layout flexibility per screen, but predictability across the full system. The modular ' +
            'approach proved its value when the Sales module entered design and progressed significantly ' +
            'faster because all interaction patterns were already established.',
        },
        {
          title: 'Data-structure-first design',
          chose:
            'Worked directly with the solution architect to understand the database schema — how data is ' +
            'stored, retrieved, how IDs and system codes are structured — before designing configuration ' +
            'interfaces.',
          why:
            'Pushed for structuring data under unique identifiers so entries could be reused and ' +
            'cross-referenced across all modules. Understanding the data model meant the interface could ' +
            'surface relationships that would otherwise be hidden behind disconnected screens.',
          tradeoff:
            'Required investing design time in technical architecture sessions rather than visual exploration. ' +
            'But the resulting interfaces reflected actual system logic rather than surface-level organization.',
        },
        {
          title: 'Interactive prototype as system contract',
          chose:
            'Maintained a continuously evolving interactive prototype — manually linked, state-accurate, ' +
            'updated with every requirements change — as the primary communication artifact between ' +
            'business, design, and engineering.',
          why:
            'Non-technical stakeholders couldn\'t evaluate from specs or static screens. Developers needed ' +
            'unambiguous visual references. The solution architect needed a single source of truth for system ' +
            'behavior. The prototype served all three audiences simultaneously.',
          tradeoff:
            'Extremely time-intensive. As the system grew, managing manual screen links became dense and ' +
            'labor-heavy. But this investment eliminated ambiguity — developers could build directly from ' +
            'the prototype without interpretation.',
        },
      ],
    } satisfies CaseStudyDecisionsSection,


    /* ── (004) Execution — System design ───────────────────
       ADM-specific section type — pattern clusters with images.
       ─────────────────────────────────────────────────────── */
    {
      type:    'execution',
      index:   '(004)',
      heading: 'System design',

      clusters: [
        {
          title:       'Configuration hierarchy',
          description:
            'System-level, SBU-level, and user-level preference cascade. Settings panels with ' +
            'structured overrides — showing where a value is inherited from versus locally configured.',
          images: [
            '/images/works/adm/config-hierarchy-01.jpg',
            '/images/works/adm/config-hierarchy-02.jpg',
          ],
        },
        {
          title:       'Access governance',
          description:
            'Role management with navigation-level permissions, feature toggles per module and ' +
            'submodule, and approval thread configuration. Roles tied to navigations with inheritance ' +
            'patterns that surface effective permissions clearly.',
          images: [
            '/images/works/adm/access-governance-01.jpg',
            '/images/works/adm/access-governance-02.jpg',
          ],
        },
        {
          title:       'Multi-entity administration',
          description:
            'SBU configuration panels for 32 business units. Data isolation controls, cross-entity ' +
            'reference management, and organization-wide system code maintenance with merge, status ' +
            'change, and CRUD operations.',
          images: [
            '/images/works/adm/multi-entity-01.jpg',
          ],
        },
        {
          title:       'System operations',
          description:
            'Audit trail configuration — data, login, activity, session. Backup and restore workflows ' +
            'with scheduled and quick backup, restore with rollback. Notification management — push, SMS, ' +
            'and email templates with configurable hash variables.',
          images: [
            '/images/works/adm/system-ops-01.jpg',
          ],
        },
        {
          title:       'User lifecycle',
          description:
            'Self-registration flow with diverging paths for employee versus non-employee users. ' +
            'Approval workflows for user requests. First-login profile setup. IP/MAC-based security ' +
            'validation. Multi-role and multi-SBU user support.',
          images: [
            '/images/works/adm/user-lifecycle-01.jpg',
          ],
        },
      ],
    } satisfies ADMExecutionSection,


    /* ── (005) Outcome ─────────────────────────────────────
       ADM-specific section type.
       ─────────────────────────────────────────────────────── */
    {
      type:    'outcome',
      index:   '(005)',
      heading: 'Outcome',

      primaryOutcome:
        'The Admin module moved to production serving 32 Strategic Business Units across the ' +
        'Nipro–GMI ecosystem in Bangladesh and Japan.',

      processOutcomes: [
        'Implementation stayed aligned with the original architecture — no structural deviations despite ' +
        'continuous requirements evolution from stakeholders across departments, finance, and strategic units.',

        'Each module release was validated through a governed feedback pipeline: end users reported against ' +
        'real operational needs, solution architects translated feedback into structured specifications, ' +
        'design and development teams executed against those specs.',

        'Features were locked and released incrementally through the sidebar navigation structure, validated ' +
        'step by step with stakeholders from Nipro, GMI, and departmental leads.',

        'The modular design system proved its value when the Sales module reached design completion in ' +
        'approximately half the time because all interaction patterns, layout blocks, and navigation ' +
        'structures were already established.',

        'The platform\'s product-grade architecture was maintained throughout: the ERP was positioned for ' +
        'B2B commercialization beyond the initial Nipro–GMI deployment.',
      ],

      impactStatement:
        'Designed the governance layer of a 6-module ERP — from concept to production — serving 32 ' +
        'business units across two countries, built to ship as a product.',

      skills: [
        'Enterprise product design',
        'Information architecture',
        'ERP system configuration UX',
        'Role-based access control design',
        'Multi-tenant administration design',
        'Cross-border stakeholder collaboration',
        'Design system (manual component reuse)',
        'Interactive prototyping',
      ],
    } satisfies ADMOutcomeSection,


    /* ── (006) Reflections ─────────────────────────────────
       ADM-specific section type (same shape as Axion Ray).
       ─────────────────────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(006)',
      heading: 'Reflections of six months. One shipped module.',

      insights: [
        {
          number: '01',
          title:  'User research would have strengthened the navigation hierarchy.',
          body:
            'If I were designing this system today, I would push for a research phase with actual SBU ' +
            'administrators to validate the navigation hierarchy against their real workflows — specifically ' +
            'whether the module-to-submodule-to-feature-to-settings hierarchy matched their mental model or ' +
            'created unnecessary nesting.',
        },
        {
          number: '02',
          title:  'A documented component system would have reduced scaling overhead.',
          body:
            'Maintaining consistency across the full system without a component library or variant system ' +
            'was achievable but labor-intensive. When the second designer joined mid-project, alignment ' +
            'required manual knowledge transfer. Investing earlier in a documented pattern library would ' +
            'have made the handoff smoother.',
        },
        {
          number: '03',
          title:  'Framework constraints can be design accelerators.',
          body:
            'Designing within the Apache ERP framework\'s existing component library initially felt like ' +
            'a limitation. In practice, it became a design accelerator — the constraint forced consistency, ' +
            'reduced implementation risk, and aligned design decisions with engineering reality from day one.',
        },
      ],
    } satisfies ADMReflectionsSection,


    /* ── Next Case Study ───────────────────────────────────
       Terminal section — → Axion Ray
       ─────────────────────────────────────────────────────── */
    {
      type:     'next-case-study',
      label:    'Next case study',
      index:    '02',
      title:    'Axion Ray',
      subtitle: 'AI-powered manufacturing forecasting platform',
      href:     '/work/manufacturing-platform',
      image:    '/images/works/manufacturing-platform/axion-1.jpg',
    } satisfies ADMNextCaseStudySection,

  ],
}
