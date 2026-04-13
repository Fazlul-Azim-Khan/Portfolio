/*
 * features/case-studies/adm/content.de.ts
 *
 * German translations for the ADM (ERP Administration) case study.
 * Structure mirrors content.ts exactly — only string values differ.
 * Image paths, slugs, hrefs, and IDs are unchanged.
 *
 * To update translations: edit string values only.
 * Do not modify object shapes or add/remove keys.
 */

import type {
  ADMCaseStudy,
  ADMProblemSection,
  ADMResearchSection,
  ADMConstraintsSection,
  ADMExecutionSection,
  ADMSalesModuleSection,
  ADMPrototypingSection,
  ADMOutcomeSection,
  ADMReflectionsSection,
  ADMNextCaseStudySection,
} from './content'

import type { CaseStudyDecisionsSection } from '@/types'


export const adm: ADMCaseStudy = {

  slug: 'erp-admin',


  /* ── Hero ────────────────────────────────────────────────── */

  hero: {
    title:     'Design zweier Geschäftsmodule für ein 32-SBU-Enterprise-ERP',
    heroImage: '/images/works/adm/hero.jpg',
    meta: {
      role:   'Product UI/UX Designer',
      stage:  'Produktion',
      year:   '2019 – 2020',
      sector: 'Enterprise ERP · Administration & Vertriebsoperationen',
      chips:  ['Fallstudie', 'Enterprise ERP', 'B2B-Produkt', 'Zwei Module'],
    },
  },


  sections: [

    /* ── (001) Das Problem ───────────────────────────────────── */
    {
      type:    'problem',
      index:   '(001)',
      heading: 'Das Problem',

      quote:
        '„ Zweiunddreißig Geschäftseinheiten, die auf Papierworkflows, mündlichen Rollenzuweisungen und ' +
        'getrennten Tabellen laufen. Jede Berechtigungsänderung, jede Genehmigung, jedes Konfigurationsupdate — ' +
        'manuell. Ein Unternehmen kann nicht auf institutionellem Gedächtnis allein skalieren. "',

      body: [
        {
          subheader: 'Ein 32-SBU-Unternehmen auf Papier',
          body:
            'Das gemeinsame Nipro–GMI-Unternehmen — mit 32 Strategischen Geschäftseinheiten in Bangladesch ' +
            'und Japan — betrieb seine wesentlichen Verwaltungs- und Vertriebsfunktionen durch papierbasierte ' +
            'Bürokratie. Benutzerzugriffe wurden über informelle Befehlsketten erteilt. Rollenberechtigungen ' +
            'existierten als mündliche Absprachen. Genehmigungsworkflows lebten in physischen Hauptbüchern.',
        },
        {
          subheader: 'Fragmentierte Abläufe in großem Maßstab',
          body:
            'Finanzdirektoren duplizierten Daten in getrennten Tabellen. Steuerabteilungsprozesse erforderten ' +
            'mehrstufige manuelle Verifikation ohne Prüfpfad. Vertriebsoperationen — Verfolgung von ' +
            'Medizinvertretern, Konsignationsverwaltung, Kundenschulden — liefen durch fragmentierte manuelle ' +
            'Systeme in 20 Vertriebsdepots.',
        },
        {
          subheader: 'Zwei grundlegende Module erforderlich',
          body:
            'Die Organisation benötigte zwei grundlegende Geschäftsmodule: ein Systemadministrationsmodul (ADM) ' +
            'zur Verwaltung von Benutzerzugang, Rollen, Berechtigungen, Konfiguration und Prüfpfaden über alle ' +
            '32 SBUs; und ein Vertriebsmodul zur Digitalisierung der gesamten Vertriebsoperationspipeline — ' +
            'von der Feldverfolgung der Medizinvertreter bis zur Krankenhaus- und Apothekenverteilung, ' +
            'Konsignationsverwaltung und B2B/B2C-Schuldenabstimmung.',
        },
        {
          subheader: 'Gebaut für jetzt und für die Skalierung',
          body:
            'Beide Module mussten einem doppelten Zweck dienen: als operatives Rückgrat für den unmittelbaren ' +
            'Bedarf von Nipro–GMI und als skalierbares ERP-Produkt, das an andere Organisationen vermarktet ' +
            'werden kann. Jede Designentscheidung musste für die aktuelle 32-SBU-Struktur funktionieren und ' +
            'gleichzeitig für unbekannte Zukunftskunden abstrakt konfigurierbar bleiben.',
        },
      ],
    } satisfies ADMProblemSection,


    /* ── (002) Nutzerforschung — Dunkelkarte ─────────────────── */
    {
      type:    'research',
      index:   '(002)',
      heading: 'Nutzerforschung',

      intro: [
        {
          subheader: 'Eingebettete Feldforschung',
          body:
            'Über sechs Monate war unser Designprozess in direkter Stakeholder-Immersion über alle ' +
            '32 Strategischen Geschäftseinheiten von Nipro–GMI verankert. Anstatt aus Dokumentation ' +
            'oder Annahmen heraus zu gestalten, tauchten wir in die operative Realität ein — besuchten ' +
            'SBU-Direktoren, saßen mit ihren Teams und beobachteten papierbasierte Workflows aus erster Hand.',
        },
        {
          subheader: 'Iterative Prototypenpräsentationen',
          body:
            'Jeder Feldbesuch wurde mit strukturierter Feedback-Erfassung durch interaktive ' +
            'Prototypvorführungen kombiniert. Stakeholder interagierten mit den Prototypen als laufende Systeme, ' +
            'testeten ihre Annahmen gegen die Designs und brachten Anforderungen zum Vorschein, die aus ' +
            'Spezifikationen allein nie aufgetaucht wären.',
        },
        {
          subheader: 'Institutionelles Gedächtnis in Papierflüssen',
          body:
            'Jede Abteilung hatte ihre eigenen operativen Variationen innerhalb desselben Unternehmensrahmens ' +
            'entwickelt. Diese Variationen zu verstehen — und das institutionelle Gedächtnis, das in physischen ' +
            'Dokumentenflüssen codiert war — war unverzichtbar, bevor ein Interface gestaltet werden konnte.',
        },
      ],

      stakeholderGroups: [
        'Finanzdirektoren',
        'Steuerabteilungsleiter',
        'Schuldenabteilungsdirektoren',
        'Geschäftsführer',
        'SBU-Operationsmanager',
        'Mitarbeiter des Tagesgeschäfts',
        'Solution Architects',
        'Entwicklungsteamleiter',
        'Medizinvertreter',
        'Vertriebsaußendienstmitarbeiter',
      ],

      conclusions: [
        'Stakeholder aus Finanz-, Steuer- und Schuldenabteilungen arbeiteten fast ausschließlich über ' +
        'papierbasierte Workflows. Die Digitalisierung dieser Prozesse erforderte nicht nur zu verstehen, ' +
        'was sie taten, sondern wie institutionelles Gedächtnis in physischen Dokumentenflüssen codiert war, ' +
        'die sich über Jahre des Organisationswachstums entwickelt hatten.',

        'Entscheidungsträger mussten das Systemverhalten durch interaktive Demonstrationen bewerten — ' +
        'statische Dokumentation, Wireframes oder Spezifikationsdokumente reichten nicht für ' +
        'Stakeholder aus, die noch nie ein digitales Governance-System genutzt hatten und nicht aus ' +
        'abstrakten Darstellungen extrapolieren konnten.',

        'Jede SBU hatte ihre eigenen operativen Variationen innerhalb desselben Unternehmensrahmens entwickelt. ' +
        'Das System musste diese Variationen berücksichtigen und gleichzeitig eine einheitliche Verwaltungsschicht ' +
        'beibehalten — Konfigurationsflexibilität ohne Konfigurationschaos.',
      ],

      painPoints: [
        'Papierbasierte Bürokratie in allen Abteilungen',
        'Keine zentralisierte Benutzerzugriffsverwaltung',
        'Manuelle Genehmigungsworkflows anfällig für Verzögerungen',
        'Inkonsistente Prozesse über 32 SBUs',
        'Kein Prüfpfad für Konfigurationsänderungen',
        'Rollenzuweisungen über mündliche Absprachen verwaltet',
        'Cross-Entity-Datenisolation manuell durchgesetzt',
        'Keine standardisierte Benachrichtigungsweiterleitung',
        'Dokumentenintensives Onboarding für neue Mitarbeiter',
        'Abteilungsspezifische Umgehungslösungen für gemeinsame Prozesse',
        'Vertriebsverfolgung durch fragmentierte manuelle Systeme',
        'Keine Sichtbarkeit in Aktivitäten der Außendienstmitarbeiter',
        'Konsignations- und Schuldenunterlagen in physischen Hauptbüchern',
        'Mehrstufige manuelle Verifikation ohne Fehlererkennung',
      ],

      workflowObservations: [
        'Direktoren führten physische Hauptbücher zur Verfolgung von Genehmigungen und Konfigurationsänderungen',
        'Steuerabteilungsworkflows erforderten mehrstufige manuelle Verifikation über Abteilungen hinweg',
        'Finanzteams duplizierten Dateneingaben in getrennten Tabellen ohne Synchronisation',
        'Neuer Mitarbeiterzugang über informelle mündliche Befehlsketten erteilt',
        'Keine Sichtbarkeit, welche SBU wem welchen Zugang gewährt hatte',
        'Vertriebsmitarbeiter meldeten Aktivitäten über wöchentlich gesammelte Papierformulare',
        'Konsignationsverfolgung basierte auf manueller Abstimmung zwischen Depot- und Felddaten',
      ],

      designImplications: [
        'Jeder Konfigurationsbildschirm muss selbsterklärend sein — keine Trainingsannahme',
        'Genehmigungsworkflows müssen bestehende Papierketten digital abbilden',
        'Datenisolation zwischen SBUs muss systemseitig durchgesetzt werden, nicht vertrauensbasiert',
        'Prüfpfad muss automatisch sein, nicht von manuellem Logging abhängig',
        'Rollen-Berechtigungs-Mapping muss von nicht-technischen Administratoren sichtbar und editierbar sein',
        'Vertriebsverfolgung muss Echtzeit-Sichtbarkeit bieten und wöchentliche Papierberichte ersetzen',
        'System muss SBU-spezifische Workflow-Variationen innerhalb eines einheitlichen Rahmens berücksichtigen',
      ],
    } satisfies ADMResearchSection,


    /* ── (003) Rahmenbedingungen ──────────────────────────────── */
    {
      type:    'constraints',
      index:   '(003)',
      heading: 'Rahmenbedingungen',

      constraints: [
        {
          title: 'Apache-basiertes ERP-Framework',
          body:
            'Die Plattform wurde auf einem bestehenden Apache-basierten ERP-Framework mit einer definierten ' +
            'Komponentenbibliothek aufgebaut — Tabellen, Popups, Navigationsstrukturen, Interaktionsmuster. ' +
            'Benutzerdefinierte UI-Entwicklung war in dieser Architektur teuer, daher musste jedes Design mit ' +
            'bestehenden technischen Mustern übereinstimmen oder die Abweichung begründen.',
        },
        {
          title: 'Keine Komponentenbibliothek oder Variantensystem',
          body:
            'Designkonsistenz über das gesamte Bildschirminventar ohne Komponentenbibliothek oder Variantensystem ' +
            'aufrechterhalten — durch manuelle Dokumentation, Namenskonventionen und disziplinierte Musterwiederverwendung.',
        },
        {
          title: 'Bewertung durch nicht-technische Stakeholder',
          body:
            'Stakeholder von Nipro, GMI, Finanzen und Abteilungsleitern konnten nicht allein aus Dokumentation ' +
            'bewerten. Jede Funktion musste durch interaktive Prototypen demonstriert werden — manuell verknüpft, ' +
            'zustandsgenau, mit jeder Anforderungsänderung aktualisiert.',
        },
        {
          title: 'Anforderung zur Produktkommerzialisierung',
          body:
            'Die Systemarchitektur konnte nicht auf Nipro–GMIs spezifische Workflows hartcodiert werden. ' +
            'Konfigurations-, Navigations- und Berechtigungsstrukturen mussten abstrakt genug sein, um ' +
            'unbekannte Zukunftskunden zu bedienen und gleichzeitig für die aktuelle 32-SBU-Organisation ' +
            'unmittelbar nutzbar zu bleiben.',
        },
        {
          title: 'Kontinuierliche Anforderungsentwicklung',
          body:
            'Agile Lieferung mit Feedback von mehreren SBUs, Finanz- und strategischen Einheiten. Anforderungen ' +
            'entwickelten sich sprint-zu-sprint, mit Funktionen, die inkrementell gesperrt und freigegeben wurden.',
        },
        {
          title: 'Grenzübergreifende Stakeholder-Abstimmung',
          body:
            'Nipro (Japan) lieferte Geschäftsrichtung und Finanzierung. GMI Group (Bangladesch) handhabte ' +
            'die Entwicklung durch MononSoft, ihre interne IT-Einheit. Das Design musste sowohl strategische ' +
            'als auch operative Stakeholder über Zeitzonen und Organisationskulturen hinweg zufriedenstellen.',
        },
      ],
    } satisfies ADMConstraintsSection,


    /* ── (004) Wichtige Designentscheidungen ─────────────────── */
    {
      type:    'decisions',
      index:   '(004)',
      heading: 'Wichtige Designentscheidungen',

      decisions: [
        {
          title: 'Etabliertes Enterprise-Navigationsparadigma statt moderner UX',
          chose:
            'Ein Master-Detail-Navigationsmuster mit linker Panel-Hierarchie — ausgerichtet an den ' +
            'Windows-basierten Enterprise-Umgebungen, in denen Benutzer bei Nipro und GMI täglich arbeiteten.',
          why:
            'Ein neues Interaktionsparadigma einzuführen hätte Schulungsaufwand zu einem bereits ' +
            'komplexen System hinzugefügt. Benutzer verstanden, wie linke Panel-Navigation, ' +
            'Einstellungspanels und hierarchische Systemabläufe funktionieren. Die Priorität war ' +
            'reibungslose Einführung über alle 32 SBUs.',
          tradeoff:
            'Das Interface würde sich ästhetisch nicht abheben, aber die Einführungsreibung sank auf ' +
            'nahe null, weil Benutzer die Interaktionsmuster aus ihrer bestehenden Arbeitsumgebung kannten.',
        },
        {
          title: 'Im Framework gestalten, nicht dagegen',
          chose:
            'Die bestehenden Komponenten des Apache-ERP-Frameworks — Tabellen, Popups, Navigationsstrukturen — ' +
            'studiert und innerhalb dieser Einschränkungen gestaltet, anstatt ideale UI zu erstellen, die ' +
            'benutzerdefinierte Entwicklung erfordern würde.',
          why:
            'Das Framework hatte bereits bewährte technische Muster. Dagegen zu gestalten hätte ' +
            'Implementierungsrisiken geschaffen, die Entwicklungsgeschwindigkeit verlangsamt und die ' +
            'QA-Fläche vergrößert. Die Strategie: das Kernsystemverhalten intakt halten, die UI-Schicht ' +
            'durch Konsistenz in Layout, Typografie und visueller Struktur aufwerten.',
          tradeoff:
            'Einige Interaktionen waren aus reiner UX-Perspektive zweitbeste Lösungen. Aber jedes Design ' +
            'entsprach einem bestehenden technischen Muster, und die Entwicklungsgeschwindigkeit blieb hoch.',
        },
        {
          title: 'Modulare Seitenzusammensetzung statt benutzerdefinierter Layouts',
          chose:
            'Jede Anforderung in unabhängige Funktionsblöcke zerlegt — Tabellenblöcke, Formularblöcke, ' +
            'Statusblöcke, Aktionsleisten — und Bildschirme aus diesen Blöcken mit konsistenten ' +
            'Platzierungsregeln zusammengesetzt.',
          why:
            'Bei einem System mit 12 Submodulen und Hunderten von Funktionen hätten benutzerdefinierte ' +
            'Layouts pro Bildschirm unvorhersehbare Erfahrungen und Skalierungsprobleme geschaffen. Jeder ' +
            'Konfigurationsbildschirm verwendete dieselbe Blockreihenfolge: Navigationskontext, Datentabelle, ' +
            'Aktionsleiste, Statusanzeige. Benutzer konnten zu einem unbekannten Bildschirm navigieren und ' +
            'sofort den Dateneingabebereich, die Aktionssteuerungen und den Navigationskontext finden.',
          tradeoff:
            'Weniger Layout-Flexibilität pro Bildschirm, aber Vorhersehbarkeit über das gesamte System. ' +
            'Der modulare Ansatz bewährte sich, als das Vertriebsmodul in das Design eintrat und ' +
            'deutlich schneller voranschritt, weil alle Interaktionsmuster bereits etabliert waren.',
        },
        {
          title: 'Datenstruktur-erstes Design',
          chose:
            'Direkt mit dem Solution Architect zusammengearbeitet, um das Datenbankschema zu verstehen — ' +
            'wie Daten gespeichert, abgerufen, wie IDs und Systemcodes strukturiert sind — bevor ' +
            'Konfigurationsinterfaces gestaltet wurden.',
          why:
            'Für die Strukturierung von Daten unter eindeutigen Bezeichnern eingesetzt, damit Einträge ' +
            'über alle Module hinweg wiederverwendet und querverwiesen werden können. Das Verständnis des ' +
            'Datenmodells ermöglichte es, Beziehungen in der Oberfläche darzustellen, die sonst hinter ' +
            'getrennten Bildschirmen verborgen geblieben wären.',
          tradeoff:
            'Erforderte Zeit in technischen Architektur-Sessions statt in visueller Exploration. Aber ' +
            'die resultierenden Interfaces spiegelten tatsächliche Systemlogik statt oberflächlicher ' +
            'Organisation wider.',
        },
        {
          title: 'Interaktiver Prototyp als Systemvertrag',
          chose:
            'Einen kontinuierlich evolvierende interaktiven Prototyp gepflegt — manuell verknüpft, zustandsgenau, ' +
            'mit jeder Anforderungsänderung aktualisiert — als primäres Kommunikationsartefakt zwischen ' +
            'Geschäft, Design und Engineering.',
          why:
            'Nicht-technische Stakeholder konnten nicht aus Spezifikationen oder statischen Bildschirmen ' +
            'bewerten. Entwickler benötigten eindeutige visuelle Referenzen. Der Solution Architect benötigte ' +
            'eine einzige Quelle der Wahrheit für das Systemverhalten. Der Prototyp bediente alle drei ' +
            'Zielgruppen gleichzeitig.',
          tradeoff:
            'Äußerst zeitintensiv. Als das System wuchs, wurde die Verwaltung manueller Bildschirmlinks ' +
            'dicht und arbeitsaufwendig. Aber diese Investition eliminierte Unklarheiten — Entwickler ' +
            'konnten direkt aus dem Prototyp heraus bauen, ohne Interpretation.',
        },
      ],
    } satisfies CaseStudyDecisionsSection,


    /* ── (005) Systemdesign — ADM-Modul ──────────────────────── */
    {
      type:    'execution',
      index:   '(005)',
      heading: 'Systemdesign — ADM-Modul',

      clusters: [
        {
          title:       'Konfigurationshierarchie',
          description:
            'Systemweite, SBU-weite und benutzerweite Einstellungskaskade. Einstellungspanels mit ' +
            'strukturierten Überschreibungen — zeigen, wo ein Wert geerbt wird gegenüber lokal konfiguriert. ' +
            'Die Hierarchie stellte sicher, dass organisationsweite Standardeinstellungen auf oberster Ebene ' +
            'festgelegt werden konnten, während einzelne SBUs spezifische Konfigurationen überschreiben konnten ' +
            'ohne andere zu beeinflussen.',
          images: [
            '/images/works/adm/config-hierarchy-01.jpg',
            '/images/works/adm/config-hierarchy-02.jpg',
          ],
        },
        {
          title:       'Zugangsverwaltung',
          description:
            'Rollenverwaltung mit Berechtigungen auf Navigationsebene, Feature-Schalter pro Modul und ' +
            'Submodul, und Genehmigungsthread-Konfiguration. Rollen an Navigationen gebunden mit Vererbungsmustern, ' +
            'die effektive Berechtigungen klar darstellen. Nicht-technische Administratoren konnten genau sehen, ' +
            'was jede Rolle gewährt — welche Module, welche Funktionen, welche Datenbereiche — ohne ' +
            'verschachtelte Berechtigungsbäume durchsuchen zu müssen.',
          images: [
            '/images/works/adm/access-governance-01.jpg',
            '/images/works/adm/access-governance-02.jpg',
          ],
        },
        {
          title:       'Multi-Entity-Administration',
          description:
            'SBU-Konfigurationspanels für 32 Geschäftseinheiten. Datenisolationskontrollen, ' +
            'Cross-Entity-Referenzverwaltung und organisationsweite Systemcode-Pflege mit Zusammenführen, ' +
            'Statusänderung und CRUD-Operationen. Jede SBU konnte unabhängig operieren und gleichzeitig ' +
            'gemeinsame Stammdaten teilen — Produktcodes, Mitarbeiterdatensätze, Organisationshierarchien — ' +
            'durch kontrollierte Querverweise.',
          images: [
            '/images/works/adm/multi-entity-01.jpg',
          ],
        },
        {
          title:       'Systemoperationen',
          description:
            'Prüfpfadkonfiguration — Daten, Login, Aktivität, Session. Backup- und Wiederherstellungsworkflows ' +
            'mit geplanten und schnellen Backups, Wiederherstellung mit Rollback. Benachrichtigungsverwaltung — ' +
            'Push-, SMS- und E-Mail-Vorlagen mit konfigurierbaren Hash-Variablen. Jede Aktion im System wurde ' +
            'automatisch protokolliert und ersetzte manuelle Prüfprozesse, die zuvor auf physische Hauptbücher angewiesen waren.',
          images: [
            '/images/works/adm/system-ops-01.jpg',
          ],
        },
        {
          title:       'Benutzerlebenszyklus',
          description:
            'Selbstregistrierungsablauf mit divergierenden Pfaden für Mitarbeiter und Nicht-Mitarbeiter-Benutzer. ' +
            'Genehmigungsworkflows für Benutzeranfragen. Erstanmeldungs-Profileinrichtung. IP/MAC-basierte ' +
            'Sicherheitsvalidierung. Multi-Rollen- und Multi-SBU-Benutzerunterstützung — ersetzt die mündliche ' +
            'Befehlskettenprovisionierung durch eine strukturierte, prüfbare Zugriffsanfragepipeline.',
          images: [
            '/images/works/adm/user-lifecycle-01.jpg',
          ],
        },
        {
          title:       'Submodul-Architektur',
          description:
            'Das ADM-Modul wurde als Komposition unabhängiger Submodule gestaltet — jedes als eigenständige ' +
            'Einheit, die unabhängig entwickelt, getestet und freigegeben werden kann. Submodule umfassten: ' +
            'Benutzerverwaltung, Rollen- & Berechtigungsverwaltung, SBU-Konfiguration, Systemcode-Verwaltung, ' +
            'Benachrichtigungsverwaltung, Prüfpfad, Backup & Wiederherstellung, und Genehmigungsworkflow-Engine. ' +
            'Diese Architektur ermöglichte parallele Entwicklungspfade und inkrementelle Feature-Freigaben ' +
            'über die Seitennavigation.',
        },
      ],
    } satisfies ADMExecutionSection,


    /* ── (006) Systemdesign — Vertriebsmodul ─────────────────── */
    {
      type:    'sales-module',
      index:   '(006)',
      heading: 'Systemdesign — Vertriebsmodul',

      intro: [
        {
          subheader: 'Nipro JMI Pharma im großen Maßstab',
          body:
            'Das zweite Geschäftsmodul umfasste die gesamte Vertriebsoperationspipeline von Nipro JMI ' +
            'Pharma — einem der größten Pharmaunternehmen und Medizingeräteunternehmen Bangladeschs ' +
            'mit 20 Vertriebsdepots, über 8.000 Mitarbeitern und einem landesweiten Netzwerk von ' +
            'Medizinvertretern, Krankenhausagenten und Apothekenvertriebskanälen.',
        },
        {
          subheader: 'Digitalisierung von B2B- und B2C-Operationen',
          body:
            'Das Vertriebsmodul musste jeden Aspekt der Vertriebsoperationen des Unternehmens digitalisieren: ' +
            'von der Feldverfolgung der Vertreter und Arztbesuchsplanung bis zur Konsignationsverwaltung, ' +
            'Depotvertriebslogistik und Kundenschuldenabstimmung über Krankenhäuser, Kliniken und ' +
            'Apothekeneinzelhandelsnetzwerke.',
        },
        {
          subheader: 'Administration steuert Zugang. Vertrieb steuert Aktion.',
          body:
            'Wo das ADM-Modul festlegte, wer auf was zugreifen kann — Rollen, Berechtigungen, ' +
            'Konfigurationen — steuerte das Vertriebsmodul, was das Unternehmen tatsächlich tat. ' +
            'Jeder Verkauf, jede Lieferung, jede Kundenbeziehung lief durch dieses System.',
        },
      ],

      clusters: [
        {
          title:       'Verfolgung von Medizinvertretern',
          description:
            'Aktivitätsverfolgung auf Feldebene für Medizinvertreter bei Arztbesuchen, ' +
            'Krankenhauspräsentationen und Apothekenakquise. Das System ersetzte papierbasierte wöchentliche ' +
            'Aktivitätsberichte durch digitale Echtzeit-Verfolgung — Besuchsprotokolle, Anrufberichte, ' +
            'Musterverteilungsunterlagen und Gebietsabdeckungskartierung. Vertreter konnten Aktivitäten ' +
            'im Feld protokollieren, während Manager sofortige Sichtbarkeit in die Teamleistung über ' +
            'Territorien und Produktlinien erhielten.',
          images: [
            '/images/works/adm/sales-rep-tracking-01.jpg',
          ],
        },
        {
          title:       'Konsignations- & Vertriebsverwaltung',
          description:
            'End-to-End-Verfolgung von Produktkonsignationen über 20 Vertriebsdepots. Das System ' +
            'verwaltete den vollständigen Lebenszyklus: Depotlagerbestände, Versand an Außendienstmitarbeiter, ' +
            'Lieferbestätigung und Rückgabeverarbeitung. Zuvor wurde die Konsignationsabstimmung zwischen ' +
            'Depotunterlagen und Feldberichten manuell durchgeführt — ein Prozess, der zu Unstimmigkeiten ' +
            'neigte, die Wochen zur Lösung benötigen konnten. Das digitale System ermöglichte Echtzeit-Abstimmung ' +
            'und automatisiertes Markieren von Abweichungen.',
          images: [
            '/images/works/adm/sales-consignment-01.jpg',
          ],
        },
        {
          title:       'Kundenschuldenverwaltung',
          description:
            'B2B- und B2C-Schulden-Verfolgung und -Abstimmung. Krankenhäuser, Kliniken, Apotheken und ' +
            'institutionelle Käufer operierten auf Kreditbasis mit unterschiedlichen Zahlungsplänen. Das ' +
            'Vertriebsmodul zentralisierte alle ausstehenden Schuldenunterlagen, automatisierte ' +
            'Zahlungserinnerungen und lieferte Fälligkeitsanalyse-Dashboards. Finanzteams konnten Schulden ' +
            'nach Kunde, Territorium, Produktlinie und Depot verfolgen — und ersetzten das fragmentierte ' +
            'physische Hauptbuchsystem, das zuvor manuelle Querverweise über Abteilungen erforderte.',
          images: [
            '/images/works/adm/sales-debt-01.jpg',
          ],
        },
        {
          title:       'Krankenhaus- & Apothekenvertriebsnetz',
          description:
            'Verwaltung der Vertriebspipeline zu Krankenhäusern, namhaften Apotheken und ' +
            'Einzelhandelsgeschäften. Das Modul verfolgte Auftragsplatzierung, Erfüllungsstatus, ' +
            'Lieferplanung und Rückgabeabwicklung. Vertriebsmitarbeiter, die Ärzte und Apotheken besuchten, ' +
            'konnten Bestellungen direkt über das System aufgeben, mit automatischer Weiterleitung zum ' +
            'nächstgelegenen Depot zur Erfüllung. Dies ersetzte die manuelle Bestellweiterleitungskette, ' +
            'die zuvor über mehrere Zwischenhändler zum Vertriebszentrum gelangte.',
          images: [
            '/images/works/adm/sales-distribution-01.jpg',
          ],
        },
        {
          title:       'Vertriebsanalyse & Territorienverwaltung',
          description:
            'Leistungsdashboards, die Daten über Territorien, Produktlinien und Vertreteraktivitäten ' +
            'aggregieren. Territorienzuweisungs- und Neuausgleichs-Tools ermöglichten es Managern, ' +
            'die Abdeckung auf Basis tatsächlicher Vertriebsdaten statt historischer Annahmen zu optimieren. ' +
            'Die Analyseebene brachte Muster zum Vorschein, die zuvor unsichtbar waren — welche Produkte ' +
            'in welchen Territorien performten, welche Vertreter die höchsten Konversionsraten erzielten ' +
            'und wo Vertriebsengpässe auftraten.',
        },
      ],
    } satisfies ADMSalesModuleSection,


    /* ── (007) Kontinuierliches Prototyping ──────────────────── */
    {
      type:    'prototyping',
      index:   '(007)',
      heading: 'Kontinuierliches Prototyping',

      phases: [
        {
          title: 'Prototypenentwicklung',
          body:
            'Jeder Feature-Satz begann mit einem interaktiven Prototyp, der in Figma gebaut wurde — nicht ' +
            'statische Wireframes, sondern manuell verknüpfte, zustandsgenaue Prototypen, die die tatsächliche ' +
            'Benutzererfahrung simulierten. Jeder Bildschirm, jede Zustandsübergang, jedes Formularverhalten ' +
            'wurde auf einem Detaillierungsgrad prototypisiert, bei dem Stakeholder damit interagieren konnten, ' +
            'als wäre es ein funktionierendes System. Dies war entscheidend, weil die Zielnutzer keine ' +
            'Vorerfahrung mit digitalen Governance-Tools hatten und nicht aus Abstraktionen bewerten konnten.',
        },
        {
          title: 'Stakeholder-Präsentation & Feedback-Erfassung',
          body:
            'Aktualisierte Prototypen wurden in regelmäßigen Meetings mit SBU-Direktoren, Finanzleitern, ' +
            'Steuerabteilungsleitern, Geschäftsführern und Betriebspersonal präsentiert. Das waren keine ' +
            'passiven Walkthroughs — Stakeholder interagierten mit dem Prototyp, testeten ihn gegen ihre ' +
            'tatsächlichen Workflows und gaben strukturiertes Feedback. Direktoren aus Finanz-, Steuer- und ' +
            'Schuldenabteilungen validierten, ob das System ihren realen Betriebsprozessen entsprach. ' +
            'Mitarbeiter des Tagesgeschäfts bestätigten, ob die Interaktionsmuster mit ihrer tatsächlichen ' +
            'Arbeitsweise übereinstimmten.',
        },
        {
          title: 'Iteration & Verfeinerung',
          body:
            'Feedback wurde synthetisiert, priorisiert und in die nächste Prototypen-Iteration integriert. ' +
            'Anforderungen entwickelten sich sprint-zu-sprint, als Stakeholder Klarheit darüber gewannen, ' +
            'was das digitale System bieten konnte. Einige Funktionen wurden nach dem Stakeholder-Testing ' +
            'vereinfacht, als unnötige Komplexität aufgedeckt wurde. Andere wurden erweitert, als reale ' +
            'Workflow-Anforderungen aufkamen, die in ersten Spezifikationen nicht erfasst worden waren. ' +
            'Der Prototyp diente als lebendiger Vertrag zwischen Geschäftsbedarf und Designumsetzung.',
        },
        {
          title: 'Submodul-Sperrung & Entwickler-Übergabe',
          body:
            'Sobald der Prototyp eines Submoduls die Stakeholder-Validierung bestand — funktional bestätigt, ' +
            'mit realen Workflows abgestimmt, alle bei Tests identifizierten Randfälle abgedeckt — wurde er ' +
            'gesperrt. Gesperrte Submodule wurden mit dem interaktiven Prototyp als definitive ' +
            'Implementierungsreferenz an das Entwicklungsteam übergeben. Entwickler bauten direkt aus dem ' +
            'Prototyp heraus ohne Interpretation, und der Solution Architect stellte die technische ' +
            'Machbarkeitsabstimmung während des gesamten Prozesses sicher.',
        },
        {
          title: 'Integration & Validierung',
          body:
            'Als Entwickler jedes Submodul fertigstellten, wurde es in das Live-System integriert. ' +
            'Das Team validierte die Implementierung gegen den gesperrten Prototyp — prüfte, dass jede ' +
            'Interaktion, jeder Zustand, jeder Datenfluss der Designspezifikation entsprach. Wenn ein ' +
            'Submodul die Integrationsvalidierung bestand, war es ein Meilenstein, den das gesamte Team ' +
            'feierte — ein greifbarer Fortschrittsmarker in einem komplexen, mehrmonatigen Projekt.',
        },
        {
          title: 'Musterbeschleunigung',
          body:
            'Als die Submodule des ADM-Moduls gesperrt und entwickelt wurden, beschleunigten die etablierten ' +
            'Muster das Design des Vertriebsmoduls. Layout-Blöcke, Navigationsstrukturen, Tabellenmuster, ' +
            'Formularverhalten und Aktionsleistenplatzierungen waren bereits bewährt. Die Designphase des ' +
            'Vertriebsmoduls schritt deutlich schneller voran — etwa in der Hälfte der Zeit — weil das ' +
            'Interaktionsvokabular bereits durch den kontinuierlichen Prototypingzyklus des ADM-Moduls ' +
            'etabliert und validiert war.',
        },
      ],
    } satisfies ADMPrototypingSection,


    /* ── (008) Ergebnis & Lieferung ──────────────────────────── */
    {
      type:    'outcome',
      index:   '(008)',
      heading: 'Ergebnis & Lieferung',

      primaryOutcome:
        'Das Admin-Modul wurde in Produktion gebracht und bedient 32 Strategische Geschäftseinheiten im ' +
        'Nipro–GMI-Ökosystem in Bangladesch und Japan. Das Vertriebsmodul erreichte den Design-Abschluss, ' +
        'alle Submodule wurden gesperrt und an das Entwicklungsteam übergeben.',

      deliveryMilestones: [
        {
          title: 'ADM-Submodule gesperrt & gebaut',
          body:
            'Alle 8 ADM-Submodule — Benutzerverwaltung, Rollen- & Berechtigungsverwaltung, SBU-Konfiguration, ' +
            'Systemcode-Verwaltung, Benachrichtigungsverwaltung, Prüfpfad, Backup & Wiederherstellung, und ' +
            'Genehmigungsworkflow-Engine — wurden individuell durch den kontinuierlichen Prototypingzyklus ' +
            'gesperrt, vom Entwicklungsteam gebaut und in das Live-System integriert.',
        },
        {
          title: 'ADM-Modul in Produktion',
          body:
            'Das vollständige ADM-Modul wurde in Produktion eingesetzt und bedient Operationsmanager, ' +
            'Finanzdirektoren und Administratoren über alle 32 SBUs. Das System ersetzte papierbasierte ' +
            'Zugangsverwaltung, manuelle Prüfpfade und mündliche Berechtigungsketten durch eine strukturierte ' +
            'digitale Governance-Schicht.',
        },
        {
          title: 'Vertriebsmodul-Design abgeschlossen',
          body:
            'Das Vertriebsmodul — umfasst Medizinvertreter-Verfolgung, Konsignationsverwaltung, ' +
            'Kundenschuldenverwaltung, Vertriebsnetzoperationen und Vertriebsanalyse — erreichte vollständigen ' +
            'Design-Abschluss. Alle Submodule wurden gesperrt und mit dem interaktiven Prototyp als definitiver ' +
            'Baureferenz an das Entwicklungsteam zur Implementierung übergeben.',
        },
        {
          title: 'Musterbibliothek im großen Maßstab validiert',
          body:
            'Die während des ADM-Moduls etablierten modularen Designmuster wurden validiert, als das ' +
            'Design des Vertriebsmoduls in etwa der Hälfte der Zeit voranschritt. Jeder Layout-Block, ' +
            'jedes Navigationsmuster, Tabellenverhalten und Formularinteraktion aus dem ADM-Modul wurde ' +
            'direkt wiederverwendet — und bewies die Skalierbarkeit des Designsystems über grundlegend ' +
            'unterschiedliche Geschäftsdomänen.',
        },
      ],

      processOutcomes: [
        'Die Implementierung blieb mit der ursprünglichen Architektur in Einklang — keine strukturellen ' +
        'Abweichungen trotz kontinuierlicher Anforderungsentwicklung von Stakeholdern über Abteilungen, ' +
        'Finanzen und strategische Einheiten.',

        'Jede Modulfreigabe wurde durch eine gesteuerte Feedback-Pipeline validiert: Endnutzer meldeten ' +
        'gegen reale operative Bedürfnisse, Solution Architects übersetzten Feedback in strukturierte ' +
        'Spezifikationen, Design- und Entwicklungsteams führten gegen diese Specs aus.',

        'Funktionen wurden inkrementell durch die Seitennavigationsstruktur gesperrt und freigegeben, ' +
        'schrittweise mit Stakeholdern von Nipro, GMI und Abteilungsleitern validiert.',

        'Die produktionsreife Architektur der Plattform wurde durchgehend aufrechterhalten: Das ERP war ' +
        'für B2B-Kommerzialisierung über den ursprünglichen Nipro–GMI-Einsatz hinaus positioniert.',
      ],

      impactStatement:
        'Governance- und Vertriebsschichten eines Multi-Modul-ERPs gestaltet — vom Konzept bis zur Produktion — ' +
        'für 32 Geschäftseinheiten in zwei Ländern, mit über 8.000 Endnutzern, gebaut um als Produkt zu liefern.',

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


    /* ── (009) Rückblick ──────────────────────────────────────── */
    {
      type:    'reflections',
      index:   '(009)',
      heading: 'Rückblick auf sechs Monate. Zwei Module. Eines ausgeliefert.',

      insights: [
        {
          number: '01',
          title:  'Feldforschung transformierte die Qualität der Designentscheidungen.',
          body:
            'SBU-Direktoren besuchen, mit Finanzteams arbeiten, Papierworkflows aus erster Hand beobachten — ' +
            'diese Immersion war die wertvollste Einzelaktivität im Projekt. Jedes Interface, das durch ' +
            'Stakeholder-Prototyp-Tests validiert wurde, wurde ohne große Überarbeitung ausgeliefert. Die ' +
            'aus Spezifikationen allein gestalteten erforderten die meiste Iteration. Würde ich dieses Projekt ' +
            'heute beginnen, würde ich in den ersten zwei Wochen auf noch tiefere eingebettete Forschung drängen.',
        },
        {
          number: '02',
          title:  'Ein dokumentiertes Komponentensystem hätte den Skalierungsaufwand reduziert.',
          body:
            'Konsistenz über das gesamte System ohne Komponentenbibliothek oder Variantensystem aufrechtzuerhalten ' +
            'war erreichbar, aber arbeitsintensiv. Als der zweite Designer Mitte des Projekts hinzukam, erforderte ' +
            'die Abstimmung manuelle Wissensübertragung. Früher in eine dokumentierte Musterbibliothek zu ' +
            'investieren hätte die Übergabe reibungsloser und das Vertriebsmodul-Design noch schneller gemacht.',
        },
        {
          number: '03',
          title:  'Framework-Einschränkungen wurden zu Design-Beschleunigern.',
          body:
            'Innerhalb der bestehenden Komponentenbibliothek des Apache-ERP-Frameworks zu gestalten fühlte sich ' +
            'anfangs wie eine Einschränkung an. In der Praxis wurde es zu einem Design-Beschleuniger — die ' +
            'Einschränkung erzwang Konsistenz, reduzierte Implementierungsrisiken und richtete Designentscheidungen ' +
            'von Anfang an an der Engineering-Realität aus. Der beschleunigte Design-Zeitplan des Vertriebsmoduls ' +
            'war direkter Beweis: etablierte Muster eliminierten die Notwendigkeit, Interaktionsmodelle für jede ' +
            'neue Geschäftsdomäne neu zu erfinden.',
        },
      ],
    } satisfies ADMReflectionsSection,


    /* ── Nächste Fallstudie ───────────────────────────────────── */
    {
      type:     'next-case-study',
      label:    'Nächste Fallstudie',
      index:    '02',
      title:    'Axion Ray',
      subtitle: 'KI-gestützte Fertigungsvorhersageplattform',
      href:     '/de/work/manufacturing-platform',
      image:    '/images/works/manufacturing-platform/axion-1.jpg',
    } satisfies ADMNextCaseStudySection,

  ],
}
