import type { ServiceDetailPageContent, ServiceDetailsContent } from "../../types";

const contactCta = {
  imageAlt: "Inginer care verifică un tablou electric industrial",
  projectLabel: "PROIECT: #8842",
  readyLabel: "PREGĂTIT PENTRU ANALIZĂ",
  badge: "SĂ DISCUTĂM",
  heading: "Să planificăm",
  highlightedHeading: "sistemul electric.",
  body: "Trimiteți-ne datele proiectului, iar echipa noastră va analiza unitatea, sistemul și următorii pași tehnici.",
  strongBody: "Vă vom contacta pentru a clarifica instalația, condițiile de execuție și calendarul estimat.",
  primaryCta: "Trimiteți solicitarea",
  secondaryCta: "Discutați cu un inginer",
} as const;

type Config = {
  seoPage: string; title: string; subtitle: string; image: string; alt: string;
  overview: readonly string[]; suitable: readonly string[];
  steps: readonly (readonly [string, string])[]; processImage: string; processAlt: string;
  faq: readonly (readonly [string, string])[];
  related: readonly (readonly [string, string, string])[];
  kicker: string; status: string;
};

const createService = (c: Config): ServiceDetailPageContent => ({
  seoPage: c.seoPage,
  hero: {
    badgeText: "Serviciu industrial", title: c.title, subtitle: c.subtitle, image: c.image, imageAlt: c.alt,
    primaryCtaText: "Solicitați o ofertă", primaryCtaHref: "/ro/contact",
    secondaryCtaText: "Vedeți toate serviciile", secondaryCtaHref: "/ro/servicii", secondaryCtaIcon: "ChevronRight",
    overlayProjectLabel: "PROIECT: #8842", overlayStatusLabel: c.status,
  },
  overview: {
    badge: "Prezentare", title: `Ce includ serviciile de ${c.title.toLowerCase()}`,
    text: "Adaptăm domeniul lucrărilor la instalația, utilajele, mediul de lucru și cerințele tehnice ale proiectului.",
    items: c.overview,
  },
  suitability: { badge: "Aplicații", title: "Când este potrivit acest serviciu", items: c.suitable },
  process: {
    badge: "Proces", title: "De la analiza tehnică la verificarea finală",
    steps: c.steps.map(([title, text]) => ({ title, text })),
    image: c.processImage, imageAlt: c.processAlt, imageKicker: c.kicker, imageTitle: "PREGĂTIT PENTRU VERIFICARE",
  },
  faq: {
    title: "Întrebări frecvente", intro: "Răspunsuri scurte despre domeniul lucrărilor, execuție și verificări.",
    items: c.faq.map(([question, answer]) => ({ question, answer })),
  },
  related: {
    badge: "Servicii conexe", title: "Servicii care completează proiectul",
    text: "Combinăm disciplinele necesare într-un domeniu tehnic coerent și ușor de întreținut.",
    items: c.related.map(([title, text, href]) => ({ title, text, href })),
    primaryCtaText: "Toate serviciile", primaryCtaHref: "/ro/servicii", primaryCtaIcon: "ChevronRight",
    secondaryCtaText: "Industrii", secondaryCtaHref: "/ro/industrii", secondaryCtaIcon: "Factory",
  },
  contactCta,
});

export const serviceDetailsContent = {
  electricPanels: createService({
    seoPage: "enElectricPanels", title: "Tablouri electrice",
    subtitle: "Proiectăm, asamblăm, cablăm și verificăm tablouri electrice și tablouri de comandă pentru utilaje, linii și unități industriale.",
    image: "/images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png", alt: "Tablou electric industrial într-o cameră tehnică",
    overview: ["Proiectare conform consumatorilor și modurilor de lucru.", "Alegerea protecțiilor, componentelor și aparatajului.", "Asamblare, cablare organizată și marcare clară.", "Verificări electrice și pregătire pentru punerea în funcțiune."],
    suitable: ["Unități noi și linii tehnologice.", "Înlocuirea tablourilor vechi sau suprasolicitate.", "Extinderea cu utilaje și consumatori noi.", "Integrarea automatizărilor și a circuitelor de comandă."],
    steps: [["Analiză tehnică", "Clarificăm consumatorii, puterile, modurile de lucru și condițiile din unitate."], ["Proiectare", "Definim schema, protecțiile, componentele, bornele și rezerva necesară."], ["Asamblare și cablare", "Executăm montajul, cablarea, etichetarea și organizarea internă."], ["Testare", "Verificăm conexiunile, protecțiile și pregătirea pentru punerea în funcțiune."]],
    processImage: "/images/electrical-panels/electrical-panels-cabinet-interior-detail-01.png", processAlt: "Detaliu interior al unui tablou electric cablat", kicker: "VERIFICARE TABLOU", status: "ANALIZĂ TEHNICĂ",
    faq: [["Realizați tablouri după o schemă existentă?", "Da. Verificăm documentația și clarificăm eventualele neconcordanțe înainte de execuție."], ["Puteți moderniza un tablou existent?", "Da, după evaluarea stării, spațiului, protecțiilor și posibilităților de extindere."], ["Tabloul este testat înainte de livrare?", "Da. Conexiunile, marcajele și funcțiile incluse în domeniu sunt verificate."]],
    related: [["Automatizări", "Comandă, senzori și integrarea procesului.", "/ro/servicii/automatizare"], ["Instalații electrice industriale", "Legături între tablouri, utilaje și zone.", "/ro/servicii/instalatii-electrice-industriale"], ["Trasee de cabluri", "Rute organizate și cablare industrială.", "/ro/servicii/trasee-de-cabluri"]],
  }),
  cableRoutes: createService({
    seoPage: "enCableRoutes", title: "Trasee de cabluri",
    subtitle: "Planificăm și executăm trasee, jgheaburi, suporturi și cablare organizată pentru spații industriale și tehnologice.",
    image: "/images/cable-routing/cable-routing-overhead-trays-industrial-hall-02.png", alt: "Trasee de cabluri suspendate într-o hală industrială",
    overview: ["Analiza zonelor, structurilor și punctelor de acces.", "Planificarea rutelor și separarea circuitelor.", "Montarea jgheaburilor, suporturilor și elementelor de fixare.", "Cablare, marcare și verificarea accesului pentru service."],
    suitable: ["Unități noi cu infrastructură în curs de execuție.", "Extinderi cu utilaje, linii sau consumatori noi.", "Reorganizarea traseelor existente greu de întreținut.", "Separarea legăturilor de putere, comandă și auxiliare."],
    steps: [["Inspecție", "Verificăm structurile, zonele, tablourile și punctele de conectare."], ["Planificare", "Stabilim ruta, suporturile, separarea și capacitatea necesară."], ["Montaj", "Instalăm traseele, suporturile, cablurile și marcajele."], ["Verificare", "Controlăm fixarea, organizarea, accesul și pregătirea pentru conectare."]],
    processImage: "/images/cable-routing/cable-routing-overhead-technical-detail-01.png", processAlt: "Detaliu tehnic al unui traseu de cabluri industrial", kicker: "VERIFICARE TRASEU", status: "PLANIFICARE TRASEU",
    faq: [["Lucrați și în unități existente?", "Da, după verificarea accesului, structurilor și limitărilor de lucru."], ["Se poate prevedea rezervă pentru extindere?", "Da, capacitatea și accesul viitor pot fi incluse în planificare."], ["Se separă cablurile de putere și comandă?", "Da, atunci când proiectul și cerințele sistemului o impun."]],
    related: [["Tablouri electrice", "Puncte de distribuție și comandă.", "/ro/servicii/tablouri-electrice"], ["Instalații electrice industriale", "Conexiuni între utilaje și zone.", "/ro/servicii/instalatii-electrice-industriale"], ["Sisteme de joasă tensiune", "Legături și infrastructură auxiliară.", "/ro/servicii/sisteme-de-joasa-tensiune"]],
  }),
  industrialElectricalInstallations: createService({
    seoPage: "enIndustrialElectricalInstallations", title: "Instalații electrice industriale",
    subtitle: "Executăm instalații de alimentare și comandă pentru utilaje, linii tehnologice, hale și zone de producție.",
    image: "/images/industrial/industrial-electrical-installation-production-zone-02.png", alt: "Instalație electrică într-o zonă industrială de producție",
    overview: ["Analiza utilajelor, zonelor și condițiilor de montaj.", "Alimentări și legături între tablouri și consumatori.", "Cablare de putere și comandă cu marcare clară.", "Verificări înainte de punerea în funcțiune."],
    suitable: ["Hale și unități noi de producție.", "Montarea unei linii tehnologice noi.", "Extinderea sau reorganizarea unei instalații existente.", "Conectarea utilajelor, tablourilor și sistemelor auxiliare."],
    steps: [["Inspecție tehnică", "Clarificăm utilajele, alimentările, traseele și condițiile de lucru."], ["Planificare", "Definim circuitele, protecțiile, rutele și etapele de execuție."], ["Instalare", "Executăm montajul, cablarea, conexiunile și marcarea."], ["Verificări", "Controlăm legăturile, protecțiile și pregătirea pentru exploatare."]],
    processImage: "/images/industrial/industrial-electrical-infrastructure-production-hall-02.png", processAlt: "Infrastructură electrică într-o hală de producție", kicker: "VERIFICARE INSTALAȚIE", status: "ANALIZĂ INSTALAȚIE",
    faq: [["Puteți lucra într-o unitate activă?", "Da, când condițiile permit planificarea sigură și etapizată a lucrărilor."], ["Serviciul poate include tablouri și trasee?", "Da. Domeniul poate combina toate disciplinele electrice necesare."], ["Efectuați verificări finale?", "Da. Verificăm conexiunile, protecțiile și marcajele incluse în proiect."]],
    related: [["Tablouri electrice", "Distribuție, protecție și comandă.", "/ro/servicii/tablouri-electrice"], ["Trasee de cabluri", "Infrastructură organizată pentru cablare.", "/ro/servicii/trasee-de-cabluri"], ["Automatizări", "Comandă și integrarea proceselor.", "/ro/servicii/automatizare"]],
  }),
  automation: createService({
    seoPage: "enAutomation", title: "Automatizări industriale",
    subtitle: "Integrăm comandă, senzori, semnale, acționări și tablouri de comandă pentru utilaje și procese industriale.",
    image: "/images/automation/automation-plc-control-system-production-line-01.png", alt: "Sistem PLC de automatizare pentru o linie de producție",
    overview: ["Clarificarea funcțiilor și modurilor de lucru.", "Circuite de comandă, senzori, semnale și acționări.", "Cablare între tablou, utilaj și punctele de control.", "Teste funcționale și pregătire pentru exploatare."],
    suitable: ["Utilaje și linii tehnologice noi.", "Modernizarea unei comenzi existente.", "Adăugarea de senzori și puncte de control.", "Îmbunătățirea diagnosticării și a accesului pentru service."],
    steps: [["Clarificarea temei", "Definim procesul, funcțiile, semnalele și comportamentul așteptat."], ["Planificarea logicii", "Stabilim circuitele, intrările, ieșirile și protecțiile."], ["Conectare", "Executăm cablarea și legăturile dintre componente și utilaje."], ["Testare și punere în funcțiune", "Verificăm modurile de lucru, semnalele și funcțiile convenite."]],
    processImage: "/images/automation/automation-plc-technical-detail-01.png", processAlt: "Detaliu tehnic al unui sistem PLC industrial", kicker: "VERIFICARE COMANDĂ", status: "ANALIZĂ COMANDĂ",
    faq: [["Puteți moderniza automatizarea unui utilaj existent?", "Da, după analiza tabloului, semnalelor și funcțiilor actuale."], ["Includeți senzori și acționări?", "Da, acestea pot fi incluse conform domeniului tehnic stabilit."], ["Se poate prevedea extindere ulterioară?", "Da, pot fi planificate capacitate și puncte de control de rezervă."]],
    related: [["Tablouri electrice", "Tablouri de comandă și protecții.", "/ro/servicii/tablouri-electrice"], ["Instalații electrice industriale", "Legături către utilaje și linii.", "/ro/servicii/instalatii-electrice-industriale"], ["Trasee de cabluri", "Rute pentru putere și comandă.", "/ro/servicii/trasee-de-cabluri"]],
  }),
  lowVoltage: createService({
    seoPage: "enLowVoltage", title: "Sisteme de joasă tensiune",
    subtitle: "Realizăm alimentări, distribuție și legături de joasă tensiune pentru consumatori, utilaje și zone industriale.",
    image: "/images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.png", alt: "Distribuție de joasă tensiune într-o cameră tehnică",
    overview: ["Analiza consumatorilor și a puterilor necesare.", "Alegerea circuitelor, protecțiilor și conexiunilor.", "Execuția alimentărilor și distribuției.", "Marcare, verificări și pregătire pentru exploatare."],
    suitable: ["Consumatori și utilaje noi.", "Extinderea distribuției existente.", "Înlocuirea legăturilor și protecțiilor vechi.", "Organizarea alimentărilor în zone industriale."],
    steps: [["Inspecție", "Verificăm consumatorii, tablourile și condițiile de conectare."], ["Planificare", "Definim circuitele, protecțiile, traseele și secvența lucrărilor."], ["Instalare", "Executăm alimentările, conexiunile, marcarea și organizarea."], ["Verificare", "Controlăm legăturile, protecțiile și funcționarea sigură."]],
    processImage: "/images/electrical-panels/electrical-terminal-block-wiring-detail-01.png", processAlt: "Detaliu de cablare și borne pentru joasă tensiune", kicker: "VERIFICARE JOASĂ TENSIUNE", status: "ANALIZĂ DISTRIBUȚIE",
    faq: [["Puteți conecta un consumator nou?", "Da, după verificarea capacității, protecțiilor și traseului disponibil."], ["Includeți marcarea circuitelor?", "Da, marcarea clară face parte din execuția organizată."], ["Se poate lucra împreună cu tabloul electric?", "Da, tabloul și distribuția pot fi tratate într-un domeniu comun."]],
    related: [["Tablouri electrice", "Distribuție și protecția circuitelor.", "/ro/servicii/tablouri-electrice"], ["Trasee de cabluri", "Rute și suporturi pentru alimentări.", "/ro/servicii/trasee-de-cabluri"], ["Instalații electrice industriale", "Conectarea utilajelor și zonelor.", "/ro/servicii/instalatii-electrice-industriale"]],
  }),
  maintenanceService: createService({
    seoPage: "enMaintenanceService", title: "Mentenanță și service",
    subtitle: "Asigurăm diagnosticare, verificări preventive, corecții și suport tehnic pentru sisteme electrice industriale existente.",
    image: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png", alt: "Diagnosticarea unui tablou de comandă industrial",
    overview: ["Colectarea istoricului și a simptomelor sistemului.", "Verificarea tablourilor, protecțiilor și conexiunilor.", "Controlul traseelor, cablurilor și marcajelor.", "Recomandări pentru corecții, prevenție și modernizare."],
    suitable: ["Funcționare instabilă sau opriri repetate.", "Necesitatea unei verificări preventive.", "Pregătirea unei extinderi sau modernizări.", "Îmbunătățirea accesului pentru diagnosticare și service."],
    steps: [["Diagnosticare inițială", "Clarificăm problema, istoricul și condițiile de funcționare."], ["Verificări", "Controlăm tablourile, traseele, conexiunile și protecțiile."], ["Corecții", "Remediem problemele posibile sau definim materialele și pașii necesari."], ["Raport și recomandări", "Prezentăm constatările și măsurile pentru prevenție sau modernizare."]],
    processImage: "/images/engineering/engineering-diagnostics-maintenance-tools-01.png", processAlt: "Instrumente pentru diagnosticarea și mentenanța sistemelor electrice", kicker: "VERIFICARE SERVICE", status: "ANALIZĂ SERVICE",
    faq: [["Puteți verifica un sistem existent?", "Da. Analizăm tablourile, traseele, conexiunile și comportamentul sistemului."], ["Primesc recomandări după verificare?", "Da, prezentăm constatările și următorii pași tehnici recomandați."], ["Service-ul poate include modernizare?", "Da, diagnosticarea poate identifica lucrări țintite de modernizare sau extindere."]],
    related: [["Tablouri electrice", "Verificare, refacere și extindere.", "/ro/servicii/tablouri-electrice"], ["Automatizări", "Diagnosticarea circuitelor de comandă.", "/ro/servicii/automatizare"], ["Sisteme de joasă tensiune", "Verificarea alimentărilor și protecțiilor.", "/ro/servicii/sisteme-de-joasa-tensiune"]],
  }),
} satisfies ServiceDetailsContent;
