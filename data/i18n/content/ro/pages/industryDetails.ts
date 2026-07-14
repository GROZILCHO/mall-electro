import type { IndustryDetailPageContent, IndustryDetailsContent } from "../../types";

const contactCta = {
  imageAlt: "Analiză de inginerie și tablou electric industrial",
  projectLabel: "PROIECT: #8842",
  readyLabel: "PREGĂTIT PENTRU ANALIZĂ",
  badge: "SĂ DISCUTĂM",
  heading: "Să planificăm",
  highlightedHeading: "sistemul electric.",
  body: "Trimiteți domeniul proiectului, iar echipa noastră va analiza obiectivul, sistemul și următorii pași tehnici.",
  strongBody: "Vă vom contacta pentru a clarifica unitatea, condițiile de instalare și calendarul estimat.",
  primaryCta: "Trimiteți solicitarea",
  secondaryCta: "Discutați cu un inginer",
} as const;

const industryRoutes = {
  agriculture: "/ro/industrii/agro",
  foodIndustry: "/ro/industrii/industria-alimentara",
  grainProcessing: "/ro/industrii/procesarea-cerealelor",
  mills: "/ro/industrii/mori",
  logistics: "/ro/industrii/logistica",
  manufacturingCompanies: "/ro/industrii/unitati-de-productie",
} as const;

const commonServices = [
  { title: "Tablouri electrice", text: "Tablouri de distribuție și comandă, protecții și puncte de control.", href: "/ro/servicii/tablouri-electrice", icon: "LayoutDashboard" },
  { title: "Trasee de cabluri", text: "Jgheaburi, trasee și cablare industrială organizată.", href: "/ro/servicii/trasee-de-cabluri", icon: "Factory" },
  { title: "Instalații electrice industriale", text: "Alimentări și legături electrice între utilaje și zone.", href: "/ro/servicii/instalatii-electrice-industriale", icon: "HardHat" },
  { title: "Automatizări", text: "Puncte de control, senzori, circuite de comandă și integrarea proceselor.", href: "/ro/servicii/automatizare", icon: "Cpu" },
  { title: "Sisteme de joasă tensiune", text: "Alimentări, distribuție și infrastructură electrică auxiliară.", href: "/ro/servicii/sisteme-de-joasa-tensiune", icon: "Zap" },
  { title: "Mentenanță și service", text: "Diagnosticare, mentenanță preventivă și suport tehnic după punerea în funcțiune.", href: "/ro/servicii/mentenanta-si-service", icon: "Wrench" },
] as const;

const relatedBase = [
  { title: "Industria alimentară", text: "Sisteme electrice pentru linii de proces, tablouri, trasee și automatizări.", href: industryRoutes.foodIndustry },
  { title: "Procesarea cerealelor", text: "Infrastructură pentru silozuri, uscătoare, transport și funcționare sezonieră.", href: industryRoutes.grainProcessing },
  { title: "Mori", text: "Sisteme pentru producția de făină, transport, dozare și aspirație.", href: industryRoutes.mills },
  { title: "Agricultură", text: "Sisteme pentru ferme, baze de depozitare, uscătoare și infrastructură agricolă.", href: industryRoutes.agriculture },
  { title: "Logistică", text: "Infrastructură electrică pentru depozite, camere frigorifice și zone de încărcare.", href: industryRoutes.logistics },
  { title: "Unități de producție", text: "Sisteme pentru hale, utilaje, zone de lucru și linii de producție.", href: industryRoutes.manufacturingCompanies },
] as const;

type Pair = readonly [string, string];
type Config = {
  seoPage: string; route: string; badge: string; title: string; subtitle: string; image: string; alt: string;
  cta: string; status: string; overviewTitle: string; overviewText: string; overviewItems: readonly string[];
  systemsTitle: string; systemsText: string; needsText: string; needs: readonly string[];
  processTitle: string; steps: readonly Pair[]; processImage: string; processAlt: string; kicker: string; imageTitle: string;
  faqIntro: string; faq: readonly Pair[]; relatedTitle: string; relatedText: string;
};

const createIndustry = (c: Config): IndustryDetailPageContent => ({
  seoPage: c.seoPage,
  hero: {
    badgeText: c.badge, title: c.title, subtitle: c.subtitle, image: c.image, imageAlt: c.alt,
    primaryCtaText: c.cta, primaryCtaHref: "/ro/contact",
    secondaryCtaText: "Vedeți serviciile", secondaryCtaHref: "/ro/servicii", secondaryCtaIcon: "ChevronRight",
    overlayProjectLabel: "PROIECT: #8842", overlayStatusLabel: c.status,
  },
  overview: { badge: "Mediu și cerințe", title: c.overviewTitle, text: c.overviewText, items: c.overviewItems },
  systems: { badge: "Sisteme și servicii uzuale", title: c.systemsTitle, text: c.systemsText, services: commonServices },
  projectNeeds: { badge: "Cerințele proiectului", title: "Ce trebuie clarificat înainte de execuție", text: c.needsText, items: c.needs },
  process: {
    badge: "Proces", title: c.processTitle,
    steps: c.steps.map(([title, text]) => ({ title, text })),
    image: c.processImage, imageAlt: c.processAlt, imageKicker: c.kicker, imageTitle: c.imageTitle,
  },
  faq: {
    title: "Întrebări frecvente", intro: c.faqIntro,
    items: c.faq.map(([question, answer]) => ({ question, answer })),
  },
  relatedIndustries: {
    badge: "Industrii conexe", title: c.relatedTitle, text: c.relatedText, ctaText: c.cta,
    items: relatedBase.filter((item) => item.href !== c.route).slice(0, 3),
  },
  contactCta,
});

export const industryDetailsContent = {
  agriculture: createIndustry({
    seoPage: "enIndustryAgriculture", route: industryRoutes.agriculture,
    badge: "Agricultură // infrastructură agricolă", title: "Sisteme electrice pentru obiective și infrastructură agricolă",
    subtitle: "Construim infrastructură electrică pentru ferme, baze de depozitare și zone tehnologice: tablouri, trasee, sisteme de joasă tensiune, automatizări și service.",
    image: "/images/industries/golden-farmland-aerial_2.png", alt: "Bază agricolă cu infrastructură și sisteme electrice industriale",
    cta: "Discutați despre un obiectiv agricol", status: "OBIECTIV AGRICOL",
    overviewTitle: "Infrastructură electrică pentru ferme, baze de depozitare și zone tehnologice",
    overviewText: "Obiectivele agricole reunesc depozite, uscătoare, sisteme de transport și spații tehnice. Instalațiile trebuie să asigure alimentare stabilă, trasee organizate și acces pentru service în perioadele de sarcină sezonieră.",
    overviewItems: ["Distribuția alimentării către utilaje, depozite, uscătoare și echipamente auxiliare.", "Trasee prin curți, hale, camere tehnice și zone exterioare, cu acces pentru mentenanță.", "Automatizarea transportului, uscării, liniilor tehnologice și punctelor de control.", "Organizarea activităților de service în funcție de sarcina sezonieră și cerințele de fiabilitate."],
    systemsTitle: "Servicii combinate pentru infrastructura agricolă", systemsText: "Proiectele agricole combină tablouri, trasee, instalații, automatizări și service pentru echipamente și procese tehnologice.",
    needsText: "Domeniul depinde de obiectiv, regimul sezonier, echipamente și nivelul de fiabilitate necesar.",
    needs: ["Utilajele, uscătoarele, pompele și sistemele de transport care necesită alimentare.", "Traseele prin curți, hale, spații tehnice și zone exterioare.", "Punctele de control, automatizările și legăturile dintre echipamente.", "Accesul pentru service și planificarea mentenanței în sezon."],
    processTitle: "De la analiza obiectivului la funcționarea sigură în sezon",
    steps: [["Inspecția obiectivului", "Analizăm zonele, utilajele, alimentările, traseele și sarcina sezonieră."], ["Clarificarea domeniului", "Definim tablourile, traseele, automatizările și cerințele de service."], ["Planificarea instalării", "Adaptăm execuția la amplasare, echipamente și regimul de lucru."], ["Execuție și verificări", "Instalăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-agro-industrial-facility-01.png", processAlt: "Obiectiv agroindustrial cu depozitare și infrastructură tehnică", kicker: "ANALIZĂ SISTEM AGRO", imageTitle: "PREGĂTIT PENTRU SEZON",
    faqIntro: "Răspunsuri scurte despre sistemele electrice pentru obiective agricole.",
    faq: [["Lucrările pot fi planificate în funcție de sezon?", "Da. Execuția poate fi corelată cu accesul, ferestrele de lucru și prioritățile obiectivului."], ["Pot fi incluse trasee exterioare?", "Da. Planificarea poate acoperi curți, hale, camere tehnice și zone exterioare."], ["Pot fi incluse automatizări?", "Da. Punctele de control, senzorii și legăturile de proces pot face parte din domeniu."]],
    relatedTitle: "Alte medii industriale cu cerințe similare", relatedText: "Abordarea se adaptează fiecărui sector, iar multe cerințe se regăsesc în producție și depozitare.",
  }),
  foodIndustry: createIndustry({
    seoPage: "enIndustryFoodIndustry", route: industryRoutes.foodIndustry,
    badge: "Industria alimentară // linii de producție", title: "Sisteme electrice pentru unități din industria alimentară",
    subtitle: "Construim tablouri, trasee, sisteme de joasă tensiune, automatizări și infrastructură pregătită pentru service în unități și linii de producție alimentară.",
    image: "/images/industries/stainless-steel-production-line_2.png", alt: "Linie de producție alimentară cu sisteme electrice industriale",
    cta: "Discutați despre o unitate alimentară", status: "UNITATE ALIMENTARĂ",
    overviewTitle: "Infrastructură electrică pentru linii de producție și echipamente de proces",
    overviewText: "Unitățile alimentare necesită alimentare stabilă, trasee organizate, puncte clare de comandă și acces pentru service în zonele de producție, ambalare și auxiliare.",
    overviewItems: ["Alimentarea liniilor, utilajelor, tablourilor și punctelor de comandă.", "Trasee adaptate zonelor de igienă, accesului la echipamente și mentenanței.", "Automatizări pentru dozare, transport, ambalare, controlul procesului și siguranță.", "Infrastructură pentru diagnosticare, mentenanță preventivă și extinderi viitoare."],
    systemsTitle: "Servicii combinate în proiectele pentru industria alimentară", systemsText: "Aceste proiecte reunesc tablouri, instalații industriale, automatizări, trasee și mentenanță.",
    needsText: "Domeniul electric depinde de amplasarea liniei, de echipamente, de mediu și de cerințele operaționale.",
    needs: ["Echipamentele liniei, consumatorii și punctele de comandă.", "Traseele prin zonele de producție, ambalare și spațiile tehnice.", "Automatizările, semnalele, senzorii și integrarea proceselor.", "Accesul pentru mentenanță și organizarea activităților de service în producție activă."],
    processTitle: "De la analiza producției la funcționarea pregătită pentru service",
    steps: [["Inspecție tehnică", "Analizăm linia, echipamentele, traseele, tablourile și limitările unității."], ["Definirea domeniului", "Clarificăm tablourile, traseele, automatizările și accesul pentru service."], ["Planificarea execuției", "Corelăm instalarea cu zonele de producție, siguranța și mentenanța."], ["Instalare și verificări", "Executăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-food-processing-production-line-01.png", processAlt: "Linie alimentară cu infrastructură electrică industrială", kicker: "ANALIZĂ SISTEM ALIMENTAR", imageTitle: "PREGĂTIT PENTRU PRODUCȚIE",
    faqIntro: "Răspunsuri scurte despre sistemele electrice din industria alimentară.",
    faq: [["Puteți lucra în jurul producției existente?", "Da. Succesiunea lucrărilor poate fi adaptată limitărilor producției, atunci când este posibil."], ["Automatizarea poate face parte din domeniu?", "Da. Comanda, senzorii, semnalele și legăturile de proces pot fi incluse."], ["Accesul pentru service poate fi planificat de la început?", "Da. Accesul pentru diagnosticare și mentenanță face parte din planificarea tehnică."]],
    relatedTitle: "Alte medii de producție cu sisteme similare", relatedText: "Cerințe electrice similare apar în procesarea cerealelor, mori, logistică și unități de producție.",
  }),
  grainProcessing: createIndustry({
    seoPage: "enIndustryGrainProcessing", route: industryRoutes.grainProcessing,
    badge: "Procesarea cerealelor // silozuri și transport", title: "Sisteme electrice pentru obiective de procesare a cerealelor",
    subtitle: "Construim infrastructură electrică pentru baze de cereale, silozuri, uscătoare, linii de transport și echipamente tehnologice.",
    image: "/images/industries/golden-hour-grain-complex.png", alt: "Bază de procesare a cerealelor cu infrastructură electrică industrială",
    cta: "Discutați despre un obiectiv cerealier", status: "BAZĂ DE CEREALE",
    overviewTitle: "Infrastructură electrică pentru silozuri, uscătoare și sisteme de transport",
    overviewText: "Obiectivele de procesare necesită alimentare fiabilă, trasee structurate și puncte de control pentru recepție, transport, uscare, depozitare și expediere.",
    overviewItems: ["Alimentare și comandă pentru uscătoare, ventilatoare, transportoare și elevatoare.", "Trasee prin silozuri, spații tehnice, curți și zone de producție.", "Automatizare și monitorizare pentru niveluri, fluxuri și echipamente de proces.", "Acces pentru service în timpul funcționării sezoniere, diagnosticării și mentenanței."],
    systemsTitle: "Servicii combinate pentru baze de procesare a cerealelor", systemsText: "Proiectele combină tablouri, trasee, instalații, automatizări și pregătirea pentru service.",
    needsText: "Domeniul depinde de echipamente, amplasare, regimul de lucru și sarcina sezonieră.",
    needs: ["Uscătoarele, ventilatoarele, transportoarele și echipamentele de siloz.", "Traseele prin curți, coridoare tehnice, depozite și puncte de producție.", "Automatizările, semnalele de comandă și monitorizarea nivelurilor.", "Cerințele de funcționare sezonieră și accesul pentru service."],
    processTitle: "De la analiza bazei la pregătirea pentru sezon",
    steps: [["Inspecția obiectivului", "Analizăm echipamentele, traseele, silozurile, uscătoarele și limitările."], ["Domeniul tehnic", "Definim tablourile, alimentările, automatizările și accesul pentru mentenanță."], ["Planificarea execuției", "Corelăm lucrările cu termenele sezoniere, accesul și siguranța."], ["Instalare și verificări", "Executăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-grain-processing-facility-01.png", processAlt: "Bază cerealieră cu infrastructură electrică și echipamente de proces", kicker: "ANALIZĂ SISTEM CEREALIER", imageTitle: "PREGĂTIT PENTRU SARCINA SEZONIERĂ",
    faqIntro: "Răspunsuri scurte despre sistemele electrice pentru procesarea cerealelor.",
    faq: [["Pot fi luate în calcul termenele sezoniere?", "Da. Succesiunea lucrărilor poate fi planificată în jurul funcționării sezoniere."], ["Pot fi integrate echipamentele de transport și uscare?", "Da. Alimentarea, comanda și automatizările pot fi planificate pentru aceste sisteme."], ["Poate fi îmbunătățit accesul pentru mentenanță?", "Da. Traseele, marcajele și accesul pentru service pot face parte din domeniu."]],
    relatedTitle: "Alte medii industriale cu cerințe similare", relatedText: "Procesarea cerealelor are cerințe comune cu morile, agricultura, industria alimentară și logistica.",
  }),
  mills: createIndustry({
    seoPage: "enIndustryMills", route: industryRoutes.mills,
    badge: "Mori // producția de făină", title: "Sisteme electrice pentru mori și producția de făină",
    subtitle: "Construim infrastructură pentru linii de măcinare, elevatoare, transportoare, dozare, cernere și sisteme de aspirație.",
    image: "/images/industries/industrial-flour-milling-facility.png", alt: "Moară industrială cu sisteme electrice",
    cta: "Discutați despre o moară", status: "UNITATE DE MORĂRIT",
    overviewTitle: "Infrastructură electrică pentru linii de măcinare și echipamente de proces",
    overviewText: "Morile necesită alimentare stabilă și comandă organizată pentru transport, dozare, cernere, aspirație și zonele de producție.",
    overviewItems: ["Alimentare și comandă pentru linii, elevatoare, transportoare și sisteme auxiliare.", "Trasee prin etajele de producție, spațiile tehnice și zonele de proces.", "Automatizare și monitorizare pentru dozare, aspirație, cernere și puncte de proces.", "Acces pentru diagnosticare, mentenanță preventivă și modernizarea viitoare a liniei."],
    systemsTitle: "Servicii combinate pentru unități de morărit", systemsText: "Proiectele pentru mori necesită tablouri, trasee, instalații, automatizări și suport de service.",
    needsText: "Domeniul depinde de configurația liniei, succesiunea echipamentelor, acces și regimul de lucru.",
    needs: ["Liniile de măcinare, transportul, aspirația, dozarea și cernerea.", "Traseele prin hale, spații tehnice și etajele de proces.", "Punctele de comandă, senzorii, modurile de lucru și automatizările.", "Accesul pentru mentenanță și opțiunile de modernizare."],
    processTitle: "De la analiza procesului la un flux stabil de producție",
    steps: [["Inspecție tehnică", "Analizăm liniile, utilajele, traseele, tablourile și limitările de acces."], ["Clarificarea domeniului", "Definim tablourile, traseele, comanda și cerințele de service."], ["Planificarea instalării", "Corelăm execuția cu fluxul, siguranța și accesul pentru mentenanță."], ["Execuție și verificări", "Instalăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-flour-mill-production-01.png", processAlt: "Producție de morărit cu sisteme industriale și infrastructură electrică", kicker: "ANALIZĂ SISTEM DE MORĂRIT", imageTitle: "PREGĂTIT PENTRU FLUXUL TEHNOLOGIC",
    faqIntro: "Răspunsuri scurte despre sistemele electrice pentru mori și producția de făină.",
    faq: [["Echipamentele pot fi conectate în etape?", "Da. Succesiunea poate fi stabilită conform pregătirii liniei și accesului în unitate."], ["Pot fi incluse aspirația și dozarea?", "Da. Punctele de comandă și legăturile electrice ale acestor sisteme pot fi incluse."], ["Instalațiile existente pot fi modernizate?", "Da. Tablourile, traseele și conexiunile existente pot fi evaluate înainte de modernizare."]],
    relatedTitle: "Alte medii de producție cu sisteme similare", relatedText: "Morile au cerințe comune cu procesarea cerealelor, industria alimentară și unitățile de producție.",
  }),
  logistics: createIndustry({
    seoPage: "enIndustryLogistics", route: industryRoutes.logistics,
    badge: "Logistică // baze de depozitare", title: "Sisteme electrice pentru baze logistice și depozite",
    subtitle: "Construim infrastructură electrică pentru centre logistice, depozite, camere frigorifice, zone de încărcare și echipamente de manipulare.",
    image: "/images/industries/modern-warehouse-interior_1.png", alt: "Depozit modern cu infrastructură electrică industrială",
    cta: "Discutați despre o bază logistică", status: "BAZĂ LOGISTICĂ",
    overviewTitle: "Infrastructură electrică pentru depozite, camere frigorifice și zone de încărcare",
    overviewText: "Obiectivele logistice necesită trasee organizate, alimentare fiabilă, iluminat, sisteme de joasă tensiune și acces pentru service în zone de lucru extinse.",
    overviewItems: ["Alimentarea echipamentelor de depozit, transportoarelor, porților și camerelor frigorifice.", "Trasee prin hale, rafturi, spații tehnice și zone de încărcare.", "Iluminat, sisteme de joasă tensiune, legături auxiliare și sisteme de siguranță.", "Acces pentru funcționare zilnică, diagnosticare și extindere viitoare."],
    systemsTitle: "Servicii combinate pentru obiective logistice", systemsText: "Proiectele logistice combină tablouri, trasee, instalații, automatizări și suport de service.",
    needsText: "Domeniul depinde de dimensiunea obiectivului, de zonele de încărcare, de echipamente și de programul operațional.",
    needs: ["Echipamentele de depozit, camerele frigorifice, zonele de încărcare și iluminatul.", "Traseele prin hale, rafturi, spații tehnice și zone de service.", "Sistemele de joasă tensiune, comenzile și legăturile auxiliare.", "Succesiunea lucrărilor raportată la operațiunile zilnice și acces."],
    processTitle: "De la analiza depozitului la pregătirea pentru operare zilnică",
    steps: [["Inspecția obiectivului", "Analizăm zonele, traseele, tablourile, echipamentele și accesul."], ["Clarificarea domeniului", "Definim alimentările, iluminatul, sistemele și cerințele de service."], ["Planificarea execuției", "Corelăm instalarea cu operațiunile depozitului și siguranța."], ["Instalare și verificări", "Executăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-logistics-warehouse-electrical-infrastructure-01.png", processAlt: "Depozit logistic cu iluminat, trasee și infrastructură electrică", kicker: "ANALIZĂ SISTEM LOGISTIC", imageTitle: "PREGĂTIT PENTRU OPERARE ZILNICĂ",
    faqIntro: "Răspunsuri scurte despre sistemele electrice pentru baze logistice și depozite.",
    faq: [["Lucrările pot fi planificate în jurul unui depozit activ?", "Da. Succesiunea poate fi coordonată cu accesul și limitările operaționale."], ["Poate fi inclusă alimentarea camerelor frigorifice?", "Da. Alimentarea, protecțiile și infrastructura aferentă pot face parte din domeniu."], ["Traseele pot permite extinderi viitoare?", "Da. Capacitatea și accesul pot fi planificate pentru adăugiri ulterioare."]],
    relatedTitle: "Alte medii cu cerințe similare de infrastructură", relatedText: "Logistica are cerințe comune de trasee, alimentare și service cu producția, industria alimentară și agricultura.",
  }),
  manufacturingCompanies: createIndustry({
    seoPage: "enIndustryManufacturingCompanies", route: industryRoutes.manufacturingCompanies,
    badge: "Unități de producție // hale industriale", title: "Sisteme electrice pentru companii de producție",
    subtitle: "Construim infrastructură electrică pentru hale, linii tehnologice, utilaje, zone de lucru și procese de producție.",
    image: "/images/industries/industries-heavy-industrial-electrical-infrastructure-01.png", alt: "Unitate de producție cu infrastructură electrică industrială",
    cta: "Discutați despre o unitate de producție", status: "UNITATE DE PRODUCȚIE",
    overviewTitle: "Infrastructură electrică pentru utilaje, linii și zone de lucru",
    overviewText: "Unitățile de producție necesită alimentare stabilă, trasee clare, tablouri, automatizări și infrastructură pregătită pentru schimbarea cerințelor de producție.",
    overviewItems: ["Alimentarea utilajelor, liniilor, zonelor de lucru și echipamentelor auxiliare.", "Trasee prin hale, camere tehnice și zone de producție.", "Automatizări, puncte de control, senzori și legături de proces.", "Acces pentru diagnosticare, mentenanță, modernizare și extindere."],
    systemsTitle: "Servicii combinate pentru unități de producție", systemsText: "Proiectele combină tablouri, trasee, instalații, sisteme de joasă tensiune, automatizări și service.",
    needsText: "Domeniul depinde de utilaje, fluxul de producție, accesul la trasee și planurile de extindere.",
    needs: ["Utilajele, liniile tehnologice, zonele de lucru și consumatorii auxiliari.", "Traseele și alimentările prin hale și spații tehnice.", "Automatizările, punctele de control, senzorii și modurile de lucru.", "Cerințele de modernizare, extindere și mentenanță."],
    processTitle: "De la analiza producției la pregătirea pentru modernizare",
    steps: [["Inspecție tehnică", "Analizăm utilajele, liniile, tablourile, traseele și limitările unității."], ["Clarificarea domeniului", "Definim tablourile, traseele, automatizările și accesul pentru service."], ["Planificarea execuției", "Corelăm lucrările cu producția, siguranța și extinderea viitoare."], ["Instalare și verificări", "Executăm, conectăm, marcăm și verificăm sistemul înainte de predare."]],
    processImage: "/images/industries/industries-manufacturing-enterprise-production-floor-01.png", processAlt: "Hală de producție cu utilaje și infrastructură electrică", kicker: "ANALIZĂ SISTEM DE PRODUCȚIE", imageTitle: "PREGĂTIT PENTRU MODERNIZARE",
    faqIntro: "Răspunsuri scurte despre sistemele electrice pentru companii de producție.",
    faq: [["Lucrați cu linii noi și existente?", "Da. Domeniul poate acoperi instalații noi, modernizare și extindere."], ["Utilajele și tablourile pot fi conectate ca un singur sistem?", "Da. Tablourile, traseele, alimentările și comenzile pot fi planificate împreună."], ["Poate fi luată în calcul extinderea viitoare?", "Da. Capacitatea traseelor, rezervele tablourilor și accesul pot fi planificate în avans."]],
    relatedTitle: "Alte medii de producție cu cerințe similare", relatedText: "Unitățile de producție au cerințe electrice comune cu logistica, industria alimentară, morile și procesarea cerealelor.",
  }),
} satisfies IndustryDetailsContent;
