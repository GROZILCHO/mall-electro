import type { SolutionDetailPageContent, SolutionDetailsContent } from "../../types";

const contactCta = {
  imageAlt: "Analiză de inginerie și tablou electric industrial", projectLabel: "PROIECT: #8842",
  readyLabel: "PREGĂTIT PENTRU ANALIZĂ", badge: "SĂ DISCUTĂM", heading: "Să planificăm",
  highlightedHeading: "sistemul electric.",
  body: "Trimiteți domeniul proiectului, iar echipa noastră va analiza unitatea, sistemul și următorii pași tehnici.",
  strongBody: "Vă vom contacta pentru a clarifica instalația, condițiile de execuție și calendarul estimat.",
  primaryCta: "Trimiteți solicitarea", secondaryCta: "Discutați cu un inginer",
} as const;

const serviceLinks = [
  ["Tablouri electrice", "Distribuție, protecție și tablouri de comandă.", "/ro/servicii/tablouri-electrice", "LayoutDashboard"],
  ["Trasee de cabluri", "Trasee, suporturi și cablare industrială organizată.", "/ro/servicii/trasee-de-cabluri", "Factory"],
  ["Instalații electrice industriale", "Legături între tablouri, utilaje și zone.", "/ro/servicii/instalatii-electrice-industriale", "HardHat"],
  ["Automatizări", "Comandă, senzori și integrarea proceselor.", "/ro/servicii/automatizare", "Cpu"],
  ["Sisteme de joasă tensiune", "Alimentări, distribuție și legături auxiliare.", "/ro/servicii/sisteme-de-joasa-tensiune", "Zap"],
  ["Mentenanță și service", "Diagnosticare, mentenanță preventivă și suport tehnic.", "/ro/servicii/mentenanta-si-service", "Wrench"],
] as const;

const industries = [
  ["Industria alimentară", "Linii de producție, procese, tablouri și trasee.", "Factory"],
  ["Procesarea cerealelor", "Silozuri, transportoare, uscătoare și puncte de comandă.", "Wheat"],
  ["Mori", "Linii pentru făină, elevatoare, dozare și cernere.", "Activity"],
  ["Agricultură", "Ferme, baze de depozitare și zone sezoniere.", "Wheat"],
  ["Logistică", "Depozite, zone de încărcare și echipamente logistice.", "Warehouse"],
  ["Unități de producție", "Hale, utilaje, zone de lucru și linii tehnologice.", "Settings"],
] as const;

type Config = { seoPage: string; title: string; subtitle: string; image: string; alt: string; processImage: string; processAlt: string; status: string; subject: string; primary: string; technicalItemCount?: number };

const createSolution = (c: Config): SolutionDetailPageContent => ({
  seoPage: c.seoPage,
  hero: { badgeText: "Soluție de inginerie", title: c.title, subtitle: c.subtitle, image: c.image, imageAlt: c.alt,
    primaryCtaText: c.primary, primaryCtaHref: "/ro/contact", secondaryCtaText: "Vedeți serviciile", secondaryCtaHref: "/ro/servicii",
    overlayProjectLabel: "PROIECT: #8842", overlayStatusLabel: c.status },
  context: { badge: "Context", title: "Când este necesară această soluție",
    text: `Soluția pentru ${c.subject} pornește de la condițiile reale din unitate, echipamente și cerințele de exploatare.`,
    items: ["La construirea sau extinderea unei unități industriale.", "La instalarea de utilaje, linii sau consumatori noi.", "Când sistemul existent este greu de întreținut sau extins.", "Când sunt necesare structură clară, protecții și acces pentru service."] },
  included: { badge: "Domeniu", title: "Ce include soluția", text: "Domeniul exact se stabilește după analiza tehnică și poate combina următoarele activități.",
    items: [
      { title: "Inspecție și clarificare tehnică", text: "Analiza zonelor, utilajelor, alimentărilor și limitărilor de execuție.", icon: "Search" },
      { title: "Tablouri electrice și de comandă", text: "Distribuție, protecții, comandă și cablare organizată.", icon: "LayoutDashboard" },
      { title: "Trasee și cablare", text: "Rute, suporturi, cabluri de putere și legături de comandă.", icon: "Factory" },
      { title: "Sisteme de joasă tensiune", text: "Alimentări și distribuție către utilaje și zone de lucru.", icon: "Zap" },
      { title: "Automatizări și puncte de control", text: "Senzori, semnale, comandă și pregătire pentru integrare.", icon: "Cpu" },
      { title: "Verificări și punere în funcțiune", text: "Controlul conexiunilor, protecțiilor și pregătirea pentru service.", icon: "Wrench" },
    ] },
  services: { badge: "Servicii conexe", title: "Servicii incluse în soluție", text: "Soluția reunește disciplinele electrice necesare într-un ansamblu tehnic coordonat.",
    items: serviceLinks.map(([title, text, href, icon]) => ({ title, text, href, icon })) },
  industries: { badge: "Aplicații", title: "Industrii în care se aplică soluția", text: "Soluția se adaptează mediului, regimului de lucru și cerințelor fiecărei unități.",
    items: industries.map(([title, text, icon]) => ({ title, text, href: "/ro/industrii", icon })) },
  process: { badge: "Proces", title: "De la inspecția tehnică la punerea în funcțiune",
    steps: [
      { title: "Inspecție tehnică", text: "Analizăm zonele, utilajele, traseele, alimentările și condițiile de lucru." },
      { title: "Clarificarea domeniului", text: "Definim etapele, capacitățile, protecțiile și cerințele de siguranță." },
      { title: "Proiectare și planificare", text: "Stabilim tablourile, traseele, conexiunile și accesul pentru mentenanță." },
      { title: "Instalare și verificări", text: "Executăm montajul, cablarea, marcarea și verificarea conexiunilor." },
      { title: "Punere în funcțiune și suport", text: "Facem corecțiile finale și pregătim sistemul pentru exploatare și service." },
    ], image: c.processImage, imageAlt: c.processAlt, imageKicker: "VERIFICARE TEHNICĂ", imageTitle: "PREGĂTIT PENTRU PREDARE" },
  technical: { badge: "Accent tehnic", title: "Ce se planifică în avans", text: "Planificarea coerentă reduce modificările costisitoare și simplifică exploatarea ulterioară.",
    items: ["Distribuția corectă a alimentărilor către utilaje și zone.", "Protecțiile și separarea circuitelor de putere și comandă.", "Accesul pentru diagnosticare, mentenanță preventivă și service.", "Etichetarea, marcarea și documentația tehnică de bază.", "Rezervele pentru extinderea viitoare a sistemului.", "Coordonarea cu utilajele și celelalte echipe din unitate."].slice(0, c.technicalItemCount ?? 6) },
  faq: { title: "Întrebări frecvente", intro: "Răspunsuri scurte despre planificare, execuție și extindere.", items: [
    { question: "Soluția poate fi executată în etape?", answer: "Da, atunci când starea unității și prioritățile permit o etapizare sigură." },
    { question: "Poate fi aplicată într-o unitate existentă?", answer: "Da. Sistemele și limitările actuale sunt analizate înainte de stabilirea domeniului." },
    { question: "Este luată în calcul extinderea viitoare?", answer: "Da, pot fi prevăzute capacitate, acces și puncte de conectare de rezervă." },
  ] },
  cta: { badge: "Pasul următor", title: c.primary, text: `Trimiteți informații despre ${c.subject}, echipamente și etapele planificate. Vom clarifica un domeniu tehnic realist.`, primaryText: c.primary, primaryHref: "/ro/contact", secondaryText: "Toate soluțiile", secondaryHref: "/ro/solutii" },
  contactCta,
});

export const solutionDetailsContent = {
  newProductionSite: createSolution({ seoPage: "enSolutionNewProductionSite", title: "Infrastructură electrică pentru o unitate nouă de producție", subtitle: "Planificăm și executăm infrastructura electrică pentru unități noi, de la tablouri și trasee până la automatizări, punere în funcțiune și mentenanță.", image: "/images/industrial/industrial-new-production-site-electrical-infrastructure-01.png", alt: "Unitate nouă de producție cu infrastructură electrică planificată", processImage: "/images/engineering/engineering-electrical-planning-documentation-01.png", processAlt: "Planificare tehnică a infrastructurii electrice pentru o unitate nouă", status: "PLANIFICARE TEHNICĂ", subject: "unitatea nouă de producție", primary: "Discutați proiectul" }),
  modernization: createSolution({ seoPage: "enSolutionModernization", title: "Modernizarea unui sistem electric industrial", subtitle: "Evaluăm și modernizăm tablouri, trasee, alimentări, automatizări și puncte de comandă, cu accent pe siguranță și fiabilitate.", image: "/images/engineering/engineering-electrical-system-modernization-technical-room-01.png", alt: "Modernizarea unui sistem electric industrial existent", processImage: "/images/engineering/engineering-electrical-safety-inspection-01.png", processAlt: "Inspecție tehnică înaintea modernizării sistemului electric", status: "ANALIZĂ SISTEM", subject: "modernizarea sistemului electric", primary: "Discutați modernizarea" }),
  panelAutomationLine: createSolution({ seoPage: "enSolutionPanelAutomationLine", title: "Tablouri și automatizări pentru linii tehnologice", subtitle: "Combinăm tablouri electrice, comandă, senzori, trasee și verificări într-o soluție completă pentru utilaje și procese.", image: "/images/automation/automation-control-panel-technological-line-01.png", alt: "Tablouri și automatizări pentru o linie tehnologică", processImage: "/images/automation/automation-control-room-monitoring-support-01.png", processAlt: "Comandă și monitorizare pentru o linie automatizată", status: "ANALIZĂ COMANDĂ", subject: "linia tehnologică și sistemul de comandă", primary: "Discutați proiectul", technicalItemCount: 5 }),
  cableInfrastructureBase: createSolution({ seoPage: "enSolutionCableInfrastructureBase", title: "Infrastructură de cabluri pentru o bază industrială", subtitle: "Organizăm trasee, alimentări, sisteme de joasă tensiune și conexiuni pentru baze, depozite și zone de producție.", image: "/images/cable-routing/cable-routing-industrial-base-technical-corridor-01.png", alt: "Infrastructură de cabluri într-o bază industrială", processImage: "/images/cable-routing/cable-routing-overhead-technical-detail-01.png", processAlt: "Detaliu tehnic al traseelor suspendate de cabluri", status: "PLANIFICARE TRASEU", subject: "infrastructura de cabluri", primary: "Discutați infrastructura" }),
  serviceExpansion: createSolution({ seoPage: "enSolutionServiceExpansion", title: "Service și extinderea sistemelor electrice existente", subtitle: "Asigurăm diagnosticare, mentenanță, îmbunătățiri și extinderea sistemelor electrice industriale existente.", image: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png", alt: "Service și diagnosticare pentru un sistem electric existent", processImage: "/images/engineering/engineering-diagnostics-maintenance-tools-01.png", processAlt: "Instrumente folosite la diagnosticarea unui sistem electric", status: "ANALIZĂ SERVICE", subject: "sistemul existent și extinderea planificată", primary: "Solicitați o verificare" }),
  heightInstallation: createSolution({ seoPage: "enSolutionHeightInstallation", title: "Lucrări de instalare electrică la înălțime", subtitle: "Executăm lucrări în hale, depozite și zone industriale greu accesibile, cu planificarea sigură a accesului și traseelor.", image: "/images/industrial/industrial-electrical-installation-aerial-lift-warehouse-01.png", alt: "Instalare electrică la înălțime cu echipament de acces", processImage: "/images/industrial/industrial-electrical-installation-production-zone-02.png", processAlt: "Instalare electrică într-o zonă industrială înaltă", status: "ANALIZĂ ACCES", subject: "lucrările electrice la înălțime", primary: "Discutați lucrările la înălțime" }),
} satisfies SolutionDetailsContent;
