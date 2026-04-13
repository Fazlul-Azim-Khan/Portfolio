/*
 * features/case-studies/adm/content.ts
 *
 * Single source of truth for the ADM (System Administration) case study.
 * Slug: erp-admin  |  Client: Nipro–GMI (names cleared for public use)
 *
 * Expanded section order (11 sections):
 *   Hero · Problem (001) · Research (002) · Constraints (003)
 *   DesignDecisions (004) · Execution/ADM (005) · SalesModule (006)
 *   ContinuousPrototyping (007) · Outcome (008) · Reflections (009)
 *   NextCaseStudy
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
 *   public/images/works/adm/sales-rep-tracking-01.jpg
 *   public/images/works/adm/sales-consignment-01.jpg
 *   public/images/works/adm/sales-debt-01.jpg
 *   public/images/works/adm/sales-distribution-01.jpg
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
  CaseStudyDecisionsSection,
} from '@/types'


/* ── Problem ─────────────────────────────────────────────── */

export interface ADMProblemSection {
  type:   'problem'
  index:  string
  heading: string
  quote:  string
  /** Body broken into subheader + paragraph blocks */
  body:   ADMIntroBlock[]
}


/* ── Shared intro block ──────────────────────────────────── */
/*
 * Used by Research and SalesModule sections.
 * Each block renders as: subheader (Integral CF H5) + body paragraph.
 */

export interface ADMIntroBlock {
  subheader: string
  body:      string
}


/* ── Research ───────────────────────────────────────────── */
/*
 * Dark-card section following the Axion Ray visual pattern.
 * Self-contained — bypasses CaseStudySectionWrapper.
 * Block structure:
 *   Intro blocks → Stakeholder Groups → Conclusions → Pain Points
 *   → Workflow Observations → Design Implications
 */

export interface ADMResearchSection {
  type:                  'research'
  index:                 string
  heading:               string
  intro:                 ADMIntroBlock[]
  stakeholderGroups:     string[]
  painPoints:            string[]
  workflowObservations:  string[]
  designImplications:    string[]
  conclusions:           [string, string, string]
}


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


/* ── Execution (ADM System Design) ───────────────────────── */

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


/* ── Sales Module ───────────────────────────────────────── */

export interface ADMSalesModuleSection {
  type:     'sales-module'
  index:    string
  heading:  string
  intro:    ADMIntroBlock[]
  clusters: ADMExecutionCluster[]
}


/* ── Continuous Prototyping ──────────────────────────────── */

export interface ADMPrototypingPhase {
  title: string
  body:  string
}

export interface ADMPrototypingSection {
  type:    'prototyping'
  index:   string
  heading: string
  intro?:  string   // optional — omit to render heading + grid only
  phases:  ADMPrototypingPhase[]
}


/* ── Outcome ─────────────────────────────────────────────── */

export interface ADMDeliveryMilestone {
  title: string
  body:  string
}

export interface ADMOutcomeSection {
  type:                'outcome'
  index:               string
  heading:             string
  /** Primary outcome statement — the big line */
  primaryOutcome:      string
  /** Delivery milestones — the success story */
  deliveryMilestones:  ADMDeliveryMilestone[]
  /** Process outcomes — bullet-style supporting statements */
  processOutcomes:     string[]
  /** Impact statement — dark card, uppercase display */
  impactStatement:     string
  /** Skill chip labels */
  skills:              string[]
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
  | ADMProblemSection
  | ADMResearchSection
  | ADMConstraintsSection
  | CaseStudyDecisionsSection
  | ADMExecutionSection
  | ADMSalesModuleSection
  | ADMPrototypingSection
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
    title:     'Designing two business modules for a 32-SBU enterprise ERP',
    heroImage: '/images/works/adm/hero.jpg',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Production',
      year:   '2019 – 2020',
      sector: 'Enterprise ERP · Administration & Sales Operations',
      chips:  ['Case study', 'Enterprise ERP', 'B2B Product', 'Two Modules'],
    },
  },


  sections: [

    /* ── (001) The Problem ─────────────────────────────────
       Paper bureaucracy → digital governance framing.
       ─────────────────────────────────────────────────────── */
    {
      type:    'problem',
      index:   '(001)',
      heading: 'The Problem',

      quote:
        '" Thirty-two business units running on paper workflows, verbal role assignments, and ' +
        'disconnected spreadsheets. Every permission change, every approval, every configuration ' +
        'update — manual. An enterprise cannot scale on institutional memory alone. "',

      body: [
        {
          subheader: 'A 32-SBU enterprise on paper',
          body:
            'The Nipro–GMI joint enterprise — spanning 32 Strategic Business Units across Bangladesh ' +
            'and Japan — operated its core administrative and sales functions through paper-based ' +
            'bureaucracy. User access was provisioned through informal chains of command. Role ' +
            'permissions existed as verbal agreements. Approval workflows lived in physical ledgers.',
        },
        {
          subheader: 'Fragmented operations at scale',
          body:
            'Finance directors duplicated data across disconnected spreadsheets. Tax department ' +
            'processes required multi-step manual verification with no audit trail. Sales operations — ' +
            'medical representative tracking, consignment management, customer debt — ran through ' +
            'fragmented manual systems across 20 distribution depots.',
        },
        {
          subheader: 'Two foundational modules required',
          body:
            'The organization needed two foundational business modules: a System Administration ' +
            'module (ADM) to govern user access, roles, permissions, configuration, and audit trails ' +
            'across all 32 SBUs; and a Sales module to digitize the entire sales operations pipeline — ' +
            'from medical representative field tracking to hospital and pharmacy distribution, ' +
            'consignment management, and B2B/B2C debt reconciliation.',
        },
        {
          subheader: 'Built for now and for scale',
          body:
            'Both modules had to serve dual purposes: as the operational backbone for Nipro–GMI\'s ' +
            'immediate needs, and as a scalable ERP product that could be commercialized to other ' +
            'organizations. Every design decision had to work for the current 32-SBU structure while ' +
            'remaining abstractly configurable for unknown future clients.',
        },
      ],
    } satisfies ADMProblemSection,


    /* ── (002) User Research — dark card ───────────────────
       Follows Axion Ray visual pattern (self-contained dark card).
       Bypasses CaseStudySectionWrapper.
       ─────────────────────────────────────────────────────── */
    {
      type:    'research',
      index:   '(002)',
      heading: 'User Research',

      intro: [
        {
          subheader: 'Embedded field research',
          body:
            'Over six months, our design process was grounded in direct stakeholder immersion ' +
            'across Nipro–GMI\'s 32 Strategic Business Units. Rather than designing from ' +
            'documentation or assumptions, we embedded ourselves in operational reality — visiting ' +
            'SBU directors, sitting with their teams, and observing paper-based workflows firsthand.',
        },
        {
          subheader: 'Iterative prototype presentations',
          body:
            'Each field visit was paired with structured feedback collection through interactive ' +
            'prototype demonstrations. Stakeholders engaged with the prototypes as working systems, ' +
            'testing their assumptions against the designs and surfacing requirements that would ' +
            'never have emerged from specifications alone.',
        },
        {
          subheader: 'Institutional memory in paper flows',
          body:
            'Each department had evolved its own operational variations within the same corporate ' +
            'framework. Understanding these variations — and the institutional memory encoded in ' +
            'physical document flows — was essential before any interface could be designed.',
        },
      ],

      stakeholderGroups: [
        'Finance Department Directors',
        'Tax Department Heads',
        'Debt Department Directors',
        'Managing Directors',
        'SBU Operations Managers',
        'Day-to-Day Employees',
        'Solution Architects',
        'Development Team Leads',
        'Medical Representatives',
        'Sales Field Agents',
      ],

      conclusions: [
        'Stakeholders across finance, tax, and debt departments operated almost entirely through ' +
        'paper-based workflows. Digitizing these processes required understanding not just what ' +
        'they did, but how institutional memory was encoded in physical document flows that had ' +
        'evolved over years of organizational growth.',

        'Decision-makers needed to evaluate system behavior through interactive demonstrations — ' +
        'static documentation, wireframes, or specification documents were insufficient for ' +
        'stakeholders who had never used a digital governance system and could not extrapolate ' +
        'from abstract representations.',

        'Each SBU had evolved its own operational variations within the same corporate framework. ' +
        'The system had to accommodate these variations while maintaining a unified administration ' +
        'layer — configuration flexibility without configuration chaos.',
      ],

      painPoints: [
        'Paper-based bureaucracy across all departments',
        'No centralized user access management',
        'Manual approval workflows prone to delays',
        'Inconsistent processes across 32 SBUs',
        'No audit trail for configuration changes',
        'Role assignments managed through verbal agreements',
        'Cross-entity data isolation enforced manually',
        'No standardized notification routing',
        'Document-heavy onboarding for new employees',
        'Department-specific workarounds for shared processes',
        'Sales tracking through fragmented manual systems',
        'No visibility into field representative activities',
        'Consignment and debt records maintained in physical ledgers',
        'Multi-step manual verification with no error detection',
      ],

      workflowObservations: [
        'Directors maintained physical ledgers for tracking approvals and configuration changes',
        'Tax department workflows required multi-step manual verification across departments',
        'Finance teams duplicated data entry across disconnected spreadsheets with no sync',
        'New employee access provisioned through informal verbal chains of command',
        'No visibility into which SBU had granted what access to whom',
        'Sales representatives reported activities through paper forms collected weekly',
        'Consignment tracking relied on manual reconciliation between depot and field records',
      ],

      designImplications: [
        'Every configuration screen must be self-explanatory — no training assumption',
        'Approval workflows must mirror existing paper chains digitally',
        'Data isolation between SBUs must be system-enforced, not trust-based',
        'Audit trail must be automatic, not dependent on manual logging',
        'Role-permission mapping must be visible and editable by non-technical admins',
        'Sales tracking must provide real-time visibility replacing weekly paper reports',
        'System must accommodate SBU-specific workflow variations within a unified framework',
      ],
    } satisfies ADMResearchSection,


    /* ── (003) Constraints & Givens ────────────────────────
       ADM-specific section type.
       ─────────────────────────────────────────────────────── */
    {
      type:    'constraints',
      index:   '(003)',
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


    /* ── (004) Key Design Decisions ────────────────────────
       Uses shared CaseStudyDecisionsSection type.
       ─────────────────────────────────────────────────────── */
    {
      type:    'decisions',
      index:   '(004)',
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


    /* ── (005) System Design — ADM Module ─────────────────
       ADM-specific section type — pattern clusters with images.
       ─────────────────────────────────────────────────────── */
    {
      type:    'execution',
      index:   '(005)',
      heading: 'System design — ADM Module',

      clusters: [
        {
          title:       'Configuration hierarchy',
          description:
            'System-level, SBU-level, and user-level preference cascade. Settings panels with ' +
            'structured overrides — showing where a value is inherited from versus locally configured. ' +
            'The hierarchy ensured that organization-wide defaults could be established at the top level ' +
            'while allowing individual SBUs to override specific configurations without affecting others.',
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
            'patterns that surface effective permissions clearly. Non-technical administrators could ' +
            'see exactly what each role grants — which modules, which features, which data scopes — ' +
            'without needing to trace through nested permission trees.',
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
            'change, and CRUD operations. Each SBU could operate independently while sharing common ' +
            'master data — product codes, employee records, organizational hierarchies — through ' +
            'controlled cross-referencing.',
          images: [
            '/images/works/adm/multi-entity-01.jpg',
          ],
        },
        {
          title:       'System operations',
          description:
            'Audit trail configuration — data, login, activity, session. Backup and restore workflows ' +
            'with scheduled and quick backup, restore with rollback. Notification management — push, SMS, ' +
            'and email templates with configurable hash variables. Every action in the system was logged ' +
            'automatically, replacing the manual audit processes that previously relied on physical ledgers.',
          images: [
            '/images/works/adm/system-ops-01.jpg',
          ],
        },
        {
          title:       'User lifecycle',
          description:
            'Self-registration flow with diverging paths for employee versus non-employee users. ' +
            'Approval workflows for user requests. First-login profile setup. IP/MAC-based security ' +
            'validation. Multi-role and multi-SBU user support — replacing the verbal chain-of-command ' +
            'provisioning with a structured, auditable access request pipeline.',
          images: [
            '/images/works/adm/user-lifecycle-01.jpg',
          ],
        },
        {
          title:       'Submodule architecture',
          description:
            'The ADM module was designed as a composition of independent submodules — each functioning ' +
            'as a self-contained unit that could be developed, tested, and released independently. ' +
            'Submodules included: User Management, Role & Permission Management, SBU Configuration, ' +
            'System Code Management, Notification Management, Audit Trail, Backup & Restore, and ' +
            'Approval Workflow Engine. This architecture allowed parallel development tracks and ' +
            'incremental feature releases through the sidebar navigation.',
        },
      ],
    } satisfies ADMExecutionSection,


    /* ── (006) System Design — Sales Module ───────────────
       ADM-specific sales module section.
       ─────────────────────────────────────────────────────── */
    {
      type:    'sales-module',
      index:   '(006)',
      heading: 'System design — Sales Module',

      intro: [
        {
          subheader: 'Nipro JMI Pharma at scale',
          body:
            'The second business module covered the entire sales operations pipeline of Nipro JMI ' +
            'Pharma — one of Bangladesh\'s largest pharmaceutical and medical device enterprises, ' +
            'with 20 distribution depots, 8,000+ employees, and a nationwide network of medical ' +
            'representatives, hospital agents, and pharmacy distribution channels.',
        },
        {
          subheader: 'Digitizing B2B and B2C operations',
          body:
            'The Sales module had to digitize every aspect of the company\'s sales operations: ' +
            'from field representative tracking and doctor-visit scheduling to consignment management, ' +
            'depot distribution logistics, and customer debt reconciliation across hospitals, clinics, ' +
            'and pharmacy retail networks.',
        },
        {
          subheader: 'Administration governs access. Sales governs action.',
          body:
            'Where the ADM module established who could access what — roles, permissions, ' +
            'configurations — the Sales module governed what the business actually did. Every sale, ' +
            'every delivery, every customer relationship passed through this system.',
        },
      ],

      clusters: [
        {
          title:       'Medical representative tracking',
          description:
            'Field-level activity tracking for medical representatives conducting doctor visits, ' +
            'hospital presentations, and pharmacy outreach. The system replaced paper-based weekly ' +
            'activity reports with real-time digital tracking — visit logs, call reports, sample ' +
            'distribution records, and territory coverage mapping. Representatives could log activities ' +
            'in the field while managers gained immediate visibility into team performance across ' +
            'territories and product lines.',
          images: [
            '/images/works/adm/sales-rep-tracking-01.jpg',
          ],
        },
        {
          title:       'Consignment & distribution management',
          description:
            'End-to-end tracking of product consignments across 20 distribution depots. The system ' +
            'managed the full lifecycle: depot inventory levels, dispatch to field agents, delivery ' +
            'confirmation, and return processing. Previously, consignment reconciliation between depot ' +
            'records and field reports was done manually — a process prone to discrepancies that could ' +
            'take weeks to resolve. The digital system provided real-time reconciliation and automated ' +
            'discrepancy flagging.',
          images: [
            '/images/works/adm/sales-consignment-01.jpg',
          ],
        },
        {
          title:       'Customer debt management',
          description:
            'B2B and B2C debt tracking and reconciliation. Hospitals, clinics, pharmacies, and ' +
            'institutional buyers operated on credit terms with varying payment schedules. The Sales ' +
            'module centralized all outstanding debt records, automated payment reminders, and provided ' +
            'aging analysis dashboards. Finance teams could track debt by customer, territory, product ' +
            'line, and depot — replacing the fragmented physical ledger system that previously required ' +
            'manual cross-referencing across departments.',
          images: [
            '/images/works/adm/sales-debt-01.jpg',
          ],
        },
        {
          title:       'Hospital & pharmacy distribution network',
          description:
            'Management of the distribution pipeline to hospitals, famous pharmacies, and retail ' +
            'outlets. The module tracked order placement, fulfillment status, delivery scheduling, ' +
            'and return handling. Sales agents visiting doctors and pharmacies could place orders ' +
            'directly through the system, with automatic routing to the nearest depot for fulfillment. ' +
            'This replaced the manual order-relay chain that previously passed through multiple ' +
            'intermediaries before reaching the distribution center.',
          images: [
            '/images/works/adm/sales-distribution-01.jpg',
          ],
        },
        {
          title:       'Sales analytics & territory management',
          description:
            'Performance dashboards aggregating data across territories, product lines, and ' +
            'representative activities. Territory assignment and rebalancing tools allowed managers ' +
            'to optimize coverage based on actual sales data rather than historical assumptions. ' +
            'The analytics layer surfaced patterns that were previously invisible — which products ' +
            'performed in which territories, which representatives drove the highest conversion rates, ' +
            'and where distribution bottlenecks occurred.',
        },
      ],
    } satisfies ADMSalesModuleSection,


    /* ── (007) Continuous Prototyping ─────────────────────
       Iterative methodology section.
       ─────────────────────────────────────────────────────── */
    {
      type:    'prototyping',
      index:   '(007)',
      heading: 'Continuous prototyping',

      phases: [
        {
          title: 'Prototype construction',
          body:
            'Each feature set began with an interactive prototype built in Figma — not static ' +
            'wireframes, but manually linked, state-accurate prototypes that simulated the actual ' +
            'user experience. Every screen, every state transition, every form behavior was ' +
            'prototyped at a fidelity level where stakeholders could interact with it as if it ' +
            'were a working system. This was critical because the target users had no prior ' +
            'experience with digital governance tools and could not evaluate from abstractions.',
        },
        {
          title: 'Stakeholder presentation & feedback collection',
          body:
            'Updated prototypes were presented in regular meetings with SBU directors, finance ' +
            'heads, tax department leads, managing directors, and operational staff. These were ' +
            'not passive walkthroughs — stakeholders interacted with the prototype, tested it ' +
            'against their actual workflows, and provided structured feedback. Directors from ' +
            'finance, tax, and debt departments would validate whether the system matched their ' +
            'real operational processes. Day-to-day employees would confirm whether the interaction ' +
            'patterns aligned with how they actually worked.',
        },
        {
          title: 'Iteration & refinement',
          body:
            'Feedback was synthesized, prioritized, and incorporated into the next prototype ' +
            'iteration. Requirements evolved sprint-to-sprint as stakeholders gained clarity on ' +
            'what the digital system could offer. Some features were simplified after stakeholder ' +
            'testing revealed unnecessary complexity. Others were expanded when real-world ' +
            'workflow requirements surfaced that weren\'t captured in initial specifications. ' +
            'The prototype served as the living contract between business needs and design execution.',
        },
        {
          title: 'Submodule lock & developer handoff',
          body:
            'Once a submodule\'s prototype passed stakeholder validation — confirmed functional, ' +
            'confirmed aligned with real workflows, confirmed covering all edge cases identified ' +
            'during testing — it was locked. Locked submodules were handed to the development team ' +
            'with the interactive prototype serving as the definitive implementation reference. ' +
            'Developers built directly from the prototype without interpretation, and the solution ' +
            'architect ensured technical feasibility alignment throughout.',
        },
        {
          title: 'Integration & validation',
          body:
            'As developers completed each submodule, it was integrated into the live system. ' +
            'The team validated the implementation against the locked prototype — checking that ' +
            'every interaction, every state, every data flow matched the design specification. ' +
            'When a submodule passed integration validation, it was a milestone celebrated by ' +
            'the entire team — a tangible marker of progress in a complex, multi-month effort.',
        },
        {
          title: 'Pattern acceleration',
          body:
            'As the ADM module\'s submodules were locked and developed, the established patterns ' +
            'accelerated the Sales module design. Layout blocks, navigation structures, table ' +
            'patterns, form behaviors, and action bar placements were already proven. The Sales ' +
            'module\'s design phase progressed significantly faster — approximately half the time — ' +
            'because the interaction vocabulary was already established and validated through the ' +
            'ADM module\'s continuous prototyping cycle.',
        },
      ],
    } satisfies ADMPrototypingSection,


    /* ── (008) Outcome & Delivery ─────────────────────────
       Expanded with delivery milestones.
       ─────────────────────────────────────────────────────── */
    {
      type:    'outcome',
      index:   '(008)',
      heading: 'Outcome & delivery',

      primaryOutcome:
        'The Admin module moved to production serving 32 Strategic Business Units across the ' +
        'Nipro–GMI ecosystem in Bangladesh and Japan. The Sales module reached design completion, ' +
        'with all submodules locked and handed to the development team.',

      deliveryMilestones: [
        {
          title: 'ADM submodules locked & built',
          body:
            'All 8 ADM submodules — User Management, Role & Permission Management, SBU Configuration, ' +
            'System Code Management, Notification Management, Audit Trail, Backup & Restore, and ' +
            'Approval Workflow Engine — were individually locked through the continuous prototyping cycle, ' +
            'built by the development team, and integrated into the live system.',
        },
        {
          title: 'ADM module in production',
          body:
            'The complete ADM module was deployed to production, serving operations managers, finance ' +
            'directors, and administrators across all 32 SBUs. The system replaced paper-based access ' +
            'governance, manual audit trails, and verbal permission chains with a structured digital ' +
            'governance layer.',
        },
        {
          title: 'Sales module design completed',
          body:
            'The Sales module — covering medical representative tracking, consignment management, ' +
            'customer debt management, distribution network operations, and sales analytics — reached ' +
            'full design completion. All submodules were locked and handed to the development team for ' +
            'implementation, with the interactive prototype serving as the definitive build reference.',
        },
        {
          title: 'Pattern library validated at scale',
          body:
            'The modular design patterns established during the ADM module were validated when the ' +
            'Sales module design progressed in approximately half the time. Every layout block, navigation ' +
            'pattern, table behavior, and form interaction from the ADM module was directly reused — ' +
            'proving the design system\'s scalability across fundamentally different business domains.',
        },
      ],

      processOutcomes: [
        'Implementation stayed aligned with the original architecture — no structural deviations despite ' +
        'continuous requirements evolution from stakeholders across departments, finance, and strategic units.',

        'Each module release was validated through a governed feedback pipeline: end users reported against ' +
        'real operational needs, solution architects translated feedback into structured specifications, ' +
        'design and development teams executed against those specs.',

        'Features were locked and released incrementally through the sidebar navigation structure, validated ' +
        'step by step with stakeholders from Nipro, GMI, and departmental leads.',

        'The platform\'s product-grade architecture was maintained throughout: the ERP was positioned for ' +
        'B2B commercialization beyond the initial Nipro–GMI deployment.',
      ],

      impactStatement:
        'Designed the governance and sales layers of a multi-module ERP — from concept to production — ' +
        'serving 32 business units across two countries, with 8,000+ end users, built to ship as a product.',

      skills: [
        'Enterprise product design',
        'Information architecture',
        'ERP system configuration UX',
        'Role-based access control design',
        'Multi-tenant administration design',
        'Sales operations system design',
        'Field force management UX',
        'Cross-border stakeholder collaboration',
        'Design system (manual component reuse)',
        'Continuous interactive prototyping',
        'Submodule architecture design',
      ],
    } satisfies ADMOutcomeSection,


    /* ── (009) Reflections ─────────────────────────────────
       ADM-specific section type (same shape as Axion Ray).
       ─────────────────────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(009)',
      heading: 'Reflections of six months. Two modules. One shipped.',

      insights: [
        {
          number: '01',
          title:  'Field research transformed the quality of design decisions.',
          body:
            'Visiting SBU directors, sitting with finance teams, observing paper workflows firsthand — ' +
            'this immersion was the single highest-value activity in the project. Every interface that was ' +
            'validated through stakeholder prototype testing shipped without major revision. The ones ' +
            'designed from specifications alone required the most iteration. If I were starting this ' +
            'project today, I would push for even deeper embedded research in the first two weeks.',
        },
        {
          number: '02',
          title:  'A documented component system would have reduced scaling overhead.',
          body:
            'Maintaining consistency across the full system without a component library or variant system ' +
            'was achievable but labor-intensive. When the second designer joined mid-project, alignment ' +
            'required manual knowledge transfer. Investing earlier in a documented pattern library would ' +
            'have made the handoff smoother and the Sales module design even faster.',
        },
        {
          number: '03',
          title:  'Framework constraints became design accelerators.',
          body:
            'Designing within the Apache ERP framework\'s existing component library initially felt like ' +
            'a limitation. In practice, it became a design accelerator — the constraint forced consistency, ' +
            'reduced implementation risk, and aligned design decisions with engineering reality from day one. ' +
            'The Sales module\'s accelerated design timeline was direct proof: established patterns ' +
            'eliminated the need to reinvent interaction models for each new business domain.',
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
