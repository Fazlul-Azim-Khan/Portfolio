/*
 * features/case-studies/center-health/content.de.ts
 *
 * German translations for the Center Health case study.
 * Structure mirrors content.ts exactly — only string values differ.
 * Image paths, slugs, hrefs, and IDs are unchanged.
 *
 * To update translations: edit string values only.
 * Do not modify object shapes or add/remove keys.
 */

import type {
  CenterHealthCaseStudy,
  CenterHealthWhyItMatteredSection,
  CenterHealthScopeSection,
  CenterHealthDesignSystemSection,
  CenterHealthOnboardingSection,
  CenterHealthDevicesSection,
  CenterHealthHomeDashboardSection,
  CenterHealthAriaSection,
  CenterHealthLoggingSection,
  CenterHealthMealLoggingSection,
  CenterHealthWebsiteSection,
  CenterHealthProviderPortalSection,
  CenterHealthBrandingSection,
  CenterHealthContinuousUXSection,
  CenterHealthReflectionsSection,
  CenterHealthRecommendationLetterSection,
  CenterHealthNextCaseStudySection,
  DemoImage,
  SectionImage,
} from './content'

import type { CaseStudyDecisionsSection } from '@/types'


export const centerHealth: CenterHealthCaseStudy = {

  slug: 'center-health',


  /* ── Hero ────────────────────────────────────────────────── */

  hero: {
    title:       'KI-gestützte Gesundheits- & Diabetes­management­plattform',
    heroImage:   '/images/works/center-health/hero.jpg',
    imageAspect: '1328 / 710',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Neugestaltung & Skalierung — Von der Strip-App zum vollständigen Health-Ökosystem',
      year:   '2021 – 2023',
      sector: 'Klinisches Gesundheitswesen · KI-Gesundheitsmanagement',
      note:   'Forbes 30 Under 30 - Consumer Technology (2021)',
      chips:  ['Fallstudie', 'Enterprise KI', 'Klinisches Gesundheitswesen'],
    },
  },


  sections: [

    /* ── (001) Warum dieses Produkt wichtig war ─────────────── */
    {
      type:    'why-it-mattered',
      index:   '(001)',
      heading: 'Warum dieses Produkt wichtig war',
      problem: 'Das Produkt war ursprünglich als Strip-basierte Begleit-App konzipiert, entwickelte sich aber rasch zu einer Multi-Signal-Plattform für metabolische Gesundheit. Die bestehende UX war nicht darauf ausgelegt, mehrere Datenquellen, KI-gestützte Erkenntnisse oder unterschiedliche Nutzertypen zu unterstützen — was bei wachsender Skalierung das Risiko der Fragmentierung mit sich brachte.',
      people: [
        { name: 'Julian (CTO)', detail: 'Langjähriger Typ-1-Diabetiker' },
        { name: 'Ali (CEO)',    detail: 'Vater hatte Typ 1' },
      ],
      quote: 'Center Health war nicht einfach eine weitere HealthTech-App. Es wurde von Menschen gebaut, die die Realität des Diabetes leben. Ich stieß zum perfekten Zeitpunkt dazu — das Produkt entwickelte sich von einer Strip-basierten Starter-App zu einem vollständigen KI-gestützten metabolischen Gesundheitsökosystem. Meine Rolle: Die Systeme, Oberflächen und Erfahrungen gestalten, die diese Evolution möglich machen würden. So klangen Entscheidungen oft nicht wie „Lass uns eine coole Funktion bauen", sondern wie: „Hätte mir das letzte Nacht geholfen?"',
    } satisfies CenterHealthWhyItMatteredSection,


    /* ── (002) Was ich gestaltet habe ───────────────────────── */
    {
      type:    'scope-of-work',
      index:   '(002)',
      heading: 'Was ich gestaltet habe',
      items: [
        'Feature-Forschung & Glaubwürdigkeitsbewertung.',
        'Aria-KI-UX-Flow & Interaktionsdesign — das GEHIRN & die Seele der App.',
        'Nutzerforschung & Flow-Architektur.',
        'Arzt- & Patientenportal.',
        'Website-Neugestaltung.',
        'Interaktionsdesign für verbundene Geräte.',
        'UX für Mobile-App-Neugestaltung.',
        'Schnelle Iterations-Pipelines (Hotjar, CS-Insights, Mikro-Korrekturen)',
        'Designsystem, plattformübergreifend, tokenisiert mit Dokumentation.',
        'Markendesign, Marketingmaterialien, Pitch Decks & Druckmaterialien.',
      ],
    } satisfies CenterHealthScopeSection,


    /* ── (003) Designsystem: Die unsichtbare Infrastruktur ──── */
    {
      type:     'design-system',
      index:    '(003)',
      heading:  'Designsystem: Die unsichtbare Infrastruktur',
      problem:  'Mehrere Teams lieferten plattformübergreifend ohne ein einheitliches System. Das führte zu inkonsistenten UI-Mustern, doppelten Komponenten und längeren Entwicklungszyklen — und erschwerte es, das Produkt zu skalieren, ohne den Aufwand für Design und Engineering zu erhöhen.',
      sideText: 'Drei Plattformen.\nMehrere Feature-Teams.\nWir brauchten Kohärenz.',
      features: [
        'Tokenisiertes Fundament: Farbe, Abstände, Typografie, Schatten.',
        'Alles ist eine Instanz einer atomaren Master-Komponente.',
        'Ebenenbasierte verschachtelte Block-Struktur mit vordefinierten Abständen, Gap- & Typografie-Verhalten.',
        'Benutzerdefinierte Icon-, Bild- & Illustrationsbibliothek mit farbkodierten Gesundheitsdomänen.',
        'Interaktion, Ton und Komponentenanwendungsfälle, adaptive Logik — alles dokumentiert.',
        'Dev-first-Struktur (Gap-Skalen, Boilerplate-Regeln)',
      ],
      demoImages: [
        {
          src:    '/images/works/center-health/ds-overview.jpg',
          alt:    'Center Health Designsystem — Komponentenbibliothek Übersicht',
          aspect: '2975 / 2038',
        },
        {
          src: '/images/works/center-health/ds-spacing.jpg',
          alt: 'Center Health Designsystem — Abstands-Skalen-Dokumentation',
        },
        {
          src: '/images/works/center-health/ds-components.jpg',
          alt: 'Center Health Designsystem — Komponentenraster-Dokumentation',
        },
        {
          src:    '/images/works/center-health/ds-component-demo.jpg',
          alt:    'Center Health Designsystem — Komponentenverwendungs-Demo',
          aspect: '2424 / 1558',
        },
      ] as DemoImage[],
      resultsText: '40 % schnellere Lieferzyklen. Sauberere UIs. Geringere kognitive Belastung für Nutzer. Und weniger Überraschungen für Entwickler.',
    } satisfies CenterHealthDesignSystemSection,


    /* ── (004) Onboarding: Adaptive UX ──────────────────────── */
    {
      type:    'onboarding',
      index:   '(004)',
      heading: 'Onboarding: Adaptive UX auf Basis personalisierter Vorerfahrung',
      problem: 'Ein einziger linearer Onboarding-Flow wurde für grundlegend verschiedene Nutzertypen verwendet — von Typ-1-Diabetiker:innen bis zu Pflegenden. Das führte zu irrelevanten Eingaben, niedrigeren Abschlussraten und schwacher initialer Datenqualität für Arias Personalisierung.',
      body:    'Center Health erweiterte sich von einem Nutzertyp auf fünf: Typ 1, Typ 2, Prä-Diabetes, Gewichtsverlust-Nutzer, Pflegende und Kliniker. Ein einziger Onboarding-Trichter würde nicht ausreichen.',
      whatIDesigned: [
        'Persona-basierte Verzweigung im ersten Schritt',
        'Modulare Schrittbibliothek: Diagnoseinformationen, A1c-Wert, Medikamente, Begleiterkrankungen',
        'Ziele & Verhaltensmuster',
        'Geräteeinrichtung (Duo, CGM, Dexcom, Apple/Google Health)',
        'Progressive Disclosure und jederzeit-fortsetzbare Logik',
        'Gestaltete Prompts, die sich wie ein freundliches Gespräch anfühlen, nicht wie ein Steuerformular',
      ],
      image: {
        src: '/images/works/center-health/onboarding.jpg',
        alt: 'Center Health Onboarding-Flow — adaptive UX-Bildschirme',
      },
      resultsText: 'Nutzer betraten die App bereits mit dem Gefühl, verstanden zu werden. Einrichtungsabschlussraten verbesserten sich — und Aria hatte von Anfang an bessere Daten.',
    } satisfies CenterHealthOnboardingSection,


    /* ── (005) Gerätintegration, Interaktion & Ergebnisse ───── */
    {
      type:    'devices',
      index:   '(005)',
      heading: 'Gerätintegration, Interaktion & Ergebnisse',
      problem: 'Jedes verbundene Gerät hatte seine eigene Pairing-Logik, Sonderfälle und Datenstrukturen. Die Erfahrung war inkonsistent und oft fragil, sodass Nutzer:innen manuelles Logging gegenüber Echtzeit-Integrationen bevorzugten.',
      body:    'Die Plattform unterstützte eine wachsende Palette vernetzter Gesundheitsgeräte. Jedes hatte seine eigene Kopplungslogik, sein eigenes Datenformat und eigene Sonderfälle — und jedes musste sich nahtlos anfühlen.',
      whatIDesigned: [
        'Blutzuckermessgeräte-Flow',
        'Blutdruck-Wadenmanschetten-Flow',
        'Körperwaage mit Pulserkennung-Flow',
        'CGM-Integrationsflow',
        'Fitness-Datenquellen-Integrationsmodule',
      ],
      images: [
        { src: '/images/works/center-health/devices-1.jpg', alt: 'Center Health — Blutzuckermessgeräte-Flow-Bildschirme', aspect: '828 / 701' },
        { src: '/images/works/center-health/devices-2.jpg', alt: 'Center Health — Blutdruck-Wadenmanschetten-Flow-Bildschirme', aspect: '828 / 602' },
        { src: '/images/works/center-health/devices-3.jpg', alt: 'Center Health — Körperwaage mit Pulserkennung', aspect: '828 / 638' },
        { src: '/images/works/center-health/devices-4.jpg', alt: 'Center Health — CGM-Integrationsflow-Bildschirme', aspect: '780 / 568' },
      ] as SectionImage[],
      resultsText: 'Jede Gerätintegration reduzierte die Reibung beim manuellen Logging und lieferte Aria reichhaltigere Echtzeit-Daten.',
    } satisfies CenterHealthDevicesSection,


    /* ── (006) Startseite: Messwerte in echtes Verständnis ──── */
    {
      type:    'home-dashboard',
      index:   '(006)',
      heading: 'Startseite: Messwerte in echtes Verständnis umwandeln',
      problem: 'Das Dashboard zeigte Gesundheitsmetriken isoliert, ohne den Nutzer:innen zu helfen, Zusammenhänge zwischen ihnen zu erkennen. Mit jeder zusätzlichen Datenquelle drohte die Oberfläche komplexer zu werden, ohne nützlicher zu werden.',
      body:    'Das v1-Dashboard war perfekt für frühe Strip-Nutzer.…aber das Produkt war zu etwas viel Größerem gewachsen: CGM-Daten, Ernährung, Medikamente, Schlaf, Aktivität, Stimmung, Gewicht, Pflegezugang. Wir brauchten ein Dashboard, das wie eine Gesundheits-Intelligenzschicht agiert, nicht nur wie ein Diagramm.',
      whatIDesigned: [
        '"Überblickbarer" Sicherheitsstreifen: aktueller BZ + Zeit im Bereich',
        '3×2 dynamische Gesundheits-Kacheln: automatisch nach häufigsten Logs des Nutzers gerankt',
        'Multifaktor-Vergleichsgrafiken: BZ vs. Mahlzeiten, Schlaf, Insulin, Sport, Kalorien',
        'Aria-Insight-Leiste in der Falte des Dashboards eingebaut',
        'Teilbare Zusammenfassungen für Ärzte & Pflegende',
        'Dev-first-Struktur (Gap-Skalen, Boilerplate-Regeln)',
      ],
      image: {
        src:    '/images/works/center-health/home-dashboard.jpg',
        alt:    'Center Health Startseiten-Dashboard — Messwerte in echtes Verständnis umwandeln',
        aspect: '1504 / 1128',
      },
      resultsText: 'Nutzer konnten endlich Muster, Ursachen und Trends sehen — keine isolierten Zahlen mehr. Das Dashboard wurde zum täglichen Kommandozentrum ihrer metabolischen Gesundheit.',
    } satisfies CenterHealthHomeDashboardSection,


    /* ── (007) ARIA: Der Plattform ein Gehirn & eine Seele ───── */
    {
      type:    'aria',
      index:   '(007)',
      heading: 'ARIA: Der Plattform\nein Gehirn & eine Seele geben',
      problem: 'Aria existierte als Backend-Intelligenzschicht, hatte aber keine klare Präsenz in der Nutzererfahrung. Erkenntnisse wirkten passiv und losgelöst und ließen die KI eher unsichtbar als zentral fürs Produkt erscheinen.',
      body:    'Aria wurde mit Insights, Trends und Vorschlägen zum Geist und zur Seele. Aria speiste bereits im Backend Insights ein. Aber für Nutzer fühlte es sich wie ein unsichtbarer Geist an. Wir mussten Aria ein Gesicht, eine Stimme, eine Persönlichkeit und sichere Grenzen geben.',
      subSections: [
        {
          heading:      'ARIA Chat & Feed',
          headingAlign: 'left',
          features: [
            'Im Kern personalisiert & auf den einzelnen Nutzer ausgerichtet.',
            'Aktive Überwachung, Vergleichsdarstellung.',
            'Insights, Trend-Präsentation.',
            'Gesundheitscoaching basierend auf Gesundheitsdatenpunkten.',
            'Sprachton- & Persönlichkeitspräferenzen.',
          ],
          image: {
            src:     '/images/works/center-health/aria-chat-feed.jpg',
            alt:     'Center Health Aria Chat & Feed — personalisiertes KI-Gesundheitscoaching-Interface',
            aspect:  '1760 / 1158',
            rounded: false,
          },
        },
        {
          heading:      'ARIA Benachrichtigungssystem',
          headingAlign: 'right',
          headingWidth: '812px',
          image: {
            src:     '/images/works/center-health/aria-notifications.jpg',
            alt:     'Center Health Aria Benachrichtigungssystem — kontextuelle Gesundheitswarnungen und Erinnerungen',
            aspect:  '2004 / 1281',
            rounded: true,
          },
        },
      ],
      resultsText: 'Aria wurde zum emotionalen Kern des Produkts — der Teil, mit dem Nutzer sprachen, nicht nur schauten. Es richtete auch Branding, Website und Produktgeschichte des Unternehmens auf KI-first-Gesundheitscoaching aus.',
    } satisfies CenterHealthAriaSection,


    /* ── (008) Logging, Erinnerungen & Gewohnheitssysteme ───── */
    {
      type:    'logging',
      index:   '(008)',
      heading: 'Logging, Erinnerungen & Gewohnheitssysteme',
      problem: 'Logging erforderte Aufwand und Konsequenz, doch das System reduzierte kaum Reibung und verstärkte keine Gewohnheiten. Die Datenqualität litt — was sich direkt auf die Wirksamkeit der KI-gestützten Erkenntnisse auswirkte.',
      body:    'Besseres Logging = klügeres Aria.\nAber Logging ist… Logging.\nMenschen vergessen.',
      features: [
        'One-Tap-Logging-Hub',
        'Kontextbewusste Standardeinstellungen (nüchtern, nach dem Essen, etc.)',
        'Logging-Typ aufsteigend nach Häufigkeit sortiert.',
        'Tägliche Aufgaben & Streaks für sanfte Konsistenzförderung',
        'Passive Integrationen (Apple Health, Google Fit)',
      ],
      image: {
        src:    '/images/works/center-health/logging.jpg',
        alt:    'Center Health Logging-Hub — One-Tap-Ereignis-Verfolgungsbildschirme',
        aspect: '1600 / 1200',
      },
      resultsText: 'Die Logging-Häufigkeit stieg deutlich. Aria wurde schärfer, relevanter und mehr „auf deiner Seite".',
    } satisfies CenterHealthLoggingSection,


    /* ── (009) Mahlzeiten-Logging, Ernährung & Restaurants ──── */
    {
      type:    'meal-logging',
      index:   '(009)',
      heading: 'Mahlzeiten-Logging, Ernährung & Restaurantmenü-Empfehlungen',
      problem: 'Blutzuckerwerte zeigten Ergebnisse, doch Nutzer:innen hatten kaum Einsicht in die Ursachen dahinter. Ernährungstracking war entweder zu generisch oder zu komplex — und damit nur eingeschränkt nützlich, um metabolische Muster zu verstehen.',
      body:    'Wenn BZ das „Was" ist, dann ist Essen das „Warum".\nDas Produkt brauchte einen diabetikerfreundlichen Umgang mit Mahlzeiten.',
      features: [
        'Kuratierte durchsuchbare Lebensmitteldatenbank',
        'Eigene Mahlzeit zusammenstellen mit Zutaten-genauer Präzision',
        'Individuelle Mahlzeiten für Two-Tap-Logging speichern',
        'Aria-Feedback zu Kohlenhydraten → Aktionen („Ein kurzer Spaziergang kann dabei helfen.")',
        'Restaurantmenü-Integration und Empfehlungen',
      ],
      image: {
        src:    '/images/works/center-health/meal-logging.jpg',
        alt:    'Center Health Mahlzeiten-Logging — Ernährungsverfolgung und Restaurantmenü-Empfehlungen',
        aspect: '1325 / 932',
      },
      resultsText: 'Essen wurde genauso messbar wie Blutzucker — und gab Aria den Kontext, den es benötigte, um präziser zu coachen.',
    } satisfies CenterHealthMealLoggingSection,


    /* ── (010) Website: Die Geschichte neu schreiben ─────────── */
    {
      type:    'website',
      index:   '(010)',
      heading: 'Website: Die Geschichte für eine KI-first Zukunft neu schreiben',
      problem: 'Das Produkt hatte sich zu einer KI-first-Gesundheitsplattform entwickelt, doch die Website kommunizierte weiterhin eine hardware-zentrierte Erzählung. Das schuf eine Lücke zwischen Nutzererwartungen und tatsächlichem Produkterlebnis.',
      features: [
        'Aria-getriebene Held-Erzählung, als das Produkt seinen Pitch von Strips zu ARIA verlagerte.',
        'Klare Erklärung, wie KI Daten in Coaching umwandelt',
        'Programmseiten für Diabetes, Prä-Diabetes, Gewichtsverlust, metabolische Gesundheit',
        'Visuelle Identität abgestimmt mit der App',
      ],
      images: [
        {
          src:     '/images/works/center-health/website-hero.jpg',
          alt:     'Center Health Website Hero — 100% genaue Blutzucker-Messwerte von Ihrem Telefon',
          aspect:  '1408 / 923',
          rounded: true,
        },
        {
          src:     '/images/works/center-health/website-aria.jpg',
          alt:     'Center Health Website — Lernen Sie Aria kennen, Ihren KI-Diabetes-Coach',
          aspect:  '1408 / 864',
          rounded: false,
        },
        {
          src:     '/images/works/center-health/website-teams.jpg',
          alt:     'Center Health Website — Verbinden Sie sich mit Ihrem Pflegeteam',
          aspect:  '1408 / 772',
          rounded: true,
        },
        {
          src:     '/images/works/center-health/website-privacy.jpg',
          alt:     'Center Health Website — Datenschutz von Patienten für Patienten gestaltet',
          aspect:  '1408 / 711',
          rounded: true,
        },
      ] as SectionImage[],
      resultsText: 'Die Website erzählte endlich die Geschichte, die das Produkt bereits lebte.',
    } satisfies CenterHealthWebsiteSection,


    /* ── (011) Anbieterportal: Klinikern Superkräfte geben ───── */
    {
      type:    'provider-portal',
      index:   '(011)',
      heading: 'Anbieterportal: Klinikern Superkräfte geben',
      problem: 'Klinikerinnen und Kliniker arbeiteten mit fragmentierten Daten und von Patient:innen geteilten Screenshots — was es schwer machte, Gesundheitsverläufe einzuschätzen oder fundierte Empfehlungen zu geben. Es gab keine strukturierte Oberfläche für klinische Entscheidungen.',
      body:    'Ärzte arbeiteten mit Screenshots, die Patienten schickten. Nicht skalierbar. Nicht sicher. Nicht hilfreich.',
      features: [
        'Triagefreundliche Patientenliste mit auf einen Blick erfassbaren Risikoindikatoren',
        'Detaillierte BZ-Zeitlinien mit Daten-Überlagerungen (Mahlzeiten, Medikamente, Schlaf, Aktivität)',
        'Ansicht der letzten Aria-Insights, damit Kliniker wussten, welches Coaching Patienten bereits erhalten hatten',
        'Klares, umkehrbares Berechtigungsmodell für den Datenzugriff',
      ],
      image: {
        src:    '/images/works/center-health/provider-portal.jpg',
        alt:    'Center Health Anbieter-Dashboard — triagefreundliche Patientenliste mit metabolischen Gesundheitsdaten',
        aspect: '1352 / 909',
      },
      resultsText: 'Kliniker hatten endlich ein aussagekräftiges Werkzeug zur Fernbewertung der metabolischen Gesundheit ihrer Patienten. Dies eröffnete neue strategische B2B-Gespräche für Center Health.',
    } satisfies CenterHealthProviderPortalSection,


    /* ── (012) Markengestaltung, Verpackungsdesign ───────────── */
    {
      type:    'branding',
      index:   '(012)',
      heading: 'Markengestaltung, Verpackungsdesign',
      image: {
        src:    '/images/works/center-health/branding.jpg',
        alt:    'Center Health Markengestaltung und Verpackungsdesign — Willkommensbrief und Erste-Schritte-Anleitung',
        aspect: '1408 / 950',
      },
    } satisfies CenterHealthBrandingSection,


    /* ── (013) Die kontinuierliche UX-Engine ─────────────────── */
    {
      type:     'continuous-ux',
      index:    '(013)',
      heading:  'Die kontinuierliche UX-Engine',
      problem:  'Nutzer-Feedback existierte in mehreren Kanälen, doch es gab kein strukturiertes System, um es kontinuierlich zu erfassen, zu analysieren und darauf zu reagieren. Das verlangsamte Iteration und ließ Verbesserungen reaktiv statt systematisch werden.',
      features: [
        'Hotjar-Session-Reviews',
        'Nutzer-Feedback aus App- & Play Store, Kundensupport analysieren & in Schleife einbringen',
        'Benachrichtigungs- & Copy-Experimente',
        'Reibungspunkte bereinigt, Flows gestrafft',
      ],
    } satisfies CenterHealthContinuousUXSection,


    /* ── (014) Rückblick auf zweieinhalb Jahre ───────────────── */
    {
      type:    'reflections',
      index:   '(014)',
      heading:         'Rückblick auf zweieinhalb Jahre. Die Scale-Up-Phase.',
      systemChallenge: 'Die Kernherausforderung lag nicht im Gestalten einzelner Funktionen, sondern im Aufbau eines Systems, in dem Datenerfassung, KI-Erkenntnisse und Nutzerverhalten sich gegenseitig kontinuierlich verstärken — und das Produkt so in eine echte Gesundheitsintelligenz-Schleife verwandeln.',
      reflections: [
        { number: '01', text: 'Domänentiefe verbessert Designentscheidungen.' },
        { number: '02', text: 'Adaptive KI-UX' },
        { number: '03', text: 'Plattformübergreifende Konsistenz durch Designsysteme' },
        { number: '04', text: 'Datenvisualisierung' },
        { number: '05', text: 'Komplexität im Healthcare-Design' },
        { number: '06', text: 'Business- & Produktintuition' },
      ],
    } satisfies CenterHealthReflectionsSection,


    /* ── (016) Empfehlungsschreiben ──────────────────────────── */
    {
      type:    'recommendation-letter',
      index:   '(016)',
      heading: 'Empfehlungsschreiben',
      author:  'CTO: Julian Laval',
      quote:   'Faz spielte eine führende Rolle bei der Gestaltung der nächsten Iteration unserer Produkte — von UX-Forschung und Designsystemen bis hin zu Branding und plattformübergreifender Implementierung.',
      pdfSrc:  '/images/works/center-health/recommendation-letter.pdf',
    } satisfies CenterHealthRecommendationLetterSection,


    /* ── Nächste Fallstudie ───────────────────────────────────── */
    {
      type:  'next-case-study',
      index: '01',
      label: 'Axion Ray',
      title: 'KI-gestützte Fertigungszuverlässigkeitsplattform',
      image: '/images/works/manufacturing-platform/mockup.jpg',
      href:  '/de/work/manufacturing-platform',
    } satisfies CenterHealthNextCaseStudySection,

  ],
}
