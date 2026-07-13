import type { AboutPageContent } from "../../types";

export const aboutPageContent = {
  hero: {
    title: "Inginerie, calitate și experiență pe termen lung",
    subtitle:
      "Mall Electro este partener pentru sisteme electrice industriale, automatizări și infrastructură tehnică. Lucrăm pragmatic, proiect cu proiect, de la inspecția și planificarea inițială până la instalare, testare și mentenanță continuă.",
    badgeText: "Mereu aproape de dumneavoastră",
    heroImageAlt:
      "Inginer care inspectează un tablou electric într-un mediu industrial.",
    primaryCtaText: "Vezi industriile",
    secondaryCtaText: "Contactați-ne",
  },
  intro: {
    badge: "Despre Mall Electro",
    heading: "Cine suntem",
    paragraphs: [
      "Mall Electro realizează sisteme electrice industriale, tablouri electrice, trasee de cabluri, sisteme de joasă tensiune, automatizări și lucrări de mentenanță.",
      "Abordarea noastră este bazată pe inginerie și adaptată fiecărei unități. Înțelegem mai întâi procesul, mediul și constrângerile tehnice, apoi organizăm execuția astfel încât sistemul să fie clar pentru instalare, punere în funcțiune și exploatare ulterioară.",
    ],
  },
  services: {
    badge: "Domeniu de lucru",
    heading: "Ce realizăm",
    body:
      "Acoperim domeniile tehnice esențiale care mențin o unitate industrială organizată, alimentată și controlabilă.",
    items: [
      {
        title: "Tablouri electrice",
        text: "Tablouri de distribuție, dulapuri de comandă și tablouri de control.",
        href: "/ro/servicii/tablouri-electrice",
        icon: "LayoutDashboard",
      },
      {
        title: "Trasee de cabluri",
        text: "Jgheaburi, trasee și cablare industrială organizată.",
        href: "/ro/servicii/trasee-de-cabluri",
        icon: "Factory",
      },
      {
        title: "Instalații electrice industriale",
        text: "Alimentare, linii de forță și conexiuni între utilaje, tablouri și zone.",
        href: "/ro/servicii/instalatii-electrice-industriale",
        icon: "HardHat",
      },
      {
        title: "Automatizări",
        text: "Sisteme de control, senzori și integrarea proceselor.",
        href: "/ro/servicii/automatizare",
        icon: "Cpu",
      },
      {
        title: "Sisteme de joasă tensiune",
        text: "Conexiuni, linii și infrastructură tehnică aferentă de joasă tensiune.",
        href: "/ro/servicii/sisteme-de-joasa-tensiune",
        icon: "Zap",
      },
      {
        title: "Mentenanță și service",
        text: "Diagnosticare, verificări preventive și asistență tehnică permanentă.",
        href: "/ro/servicii/mentenanta-si-service",
        icon: "Wrench",
      },
    ],
  },
  process: {
    badge: "Proces",
    heading: "Cum abordăm lucrările",
    body:
      "Fiecare sistem pornește de la condițiile reale ale unității. Clarificăm domeniul, organizăm soluția tehnică și continuăm cu instalarea, testarea și asistența ulterioară.",
    steps: [
      "Inspecție tehnică la fața locului",
      "Clarificarea domeniului lucrării",
      "Planificarea tablourilor, traseelor și punctelor de control",
      "Instalare și testare",
      "Mentenanță după punerea în funcțiune",
    ],
  },
  industries: {
    badge: "Medii industriale",
    heading: "Unde aducem valoare",
    body:
      "Adaptăm sistemul electric la proces, sarcină și cerințele de acces pentru instalare și service în diferite medii industriale.",
    items: [
      {
        title: "Industria alimentară",
        text: "Linii de producție și unități de procesare a alimentelor.",
        href: "/ro/industrii/industria-alimentara",
        icon: "Factory",
      },
      {
        title: "Procesarea cerealelor",
        text: "Complexe de silozuri, linii de transport și sisteme de uscare.",
        href: "/ro/industrii/procesarea-cerealelor",
        icon: "Wheat",
      },
      {
        title: "Mori",
        text: "Unități de producție a făinii și linii tehnologice.",
        href: "/ro/industrii/mori",
        icon: "Activity",
      },
      {
        title: "Agricultură",
        text: "Ferme, baze și infrastructură tehnică sezonieră.",
        href: "/ro/industrii/agro",
        icon: "Wheat",
      },
      {
        title: "Logistică",
        text: "Depozite, zone de încărcare și infrastructură electrică internă.",
        href: "/ro/industrii/logistica",
        icon: "Warehouse",
      },
      {
        title: "Unități de producție",
        text: "Hale, utilaje, zone de lucru și sisteme auxiliare.",
        href: "/ro/industrii/unitati-de-productie",
        icon: "Settings",
      },
    ],
  },
  principles: {
    badge: "Principii",
    heading: "Ce ne diferențiază",
    body:
      "Ne concentrăm pe soluții inginerești utile, organizare clară și sisteme care pot fi întreținute și extinse după punerea în funcțiune.",
    items: [
      {
        title: "Gândire inginerească",
        text: "Tratăm tablourile, traseele, controlul și service-ul ca un sistem unitar.",
      },
      {
        title: "Domeniu clar",
        text: "Clarificăm din timp limitele tehnice, astfel încât lucrările să urmeze condițiile reale din amplasament.",
      },
      {
        title: "Execuție organizată",
        text: "Urmărim o instalare curată, conexiuni ușor de identificat și mentenanță ulterioară eficientă.",
      },
      {
        title: "Dezvoltarea sistemului",
        text: "Planificăm testarea, service-ul și posibilitatea extinderii viitoare.",
      },
    ],
  },
  taxonomy: {
    badge: "Navigare",
    heading: "Servicii, soluții și industrii",
    body:
      "Privim lucrările din trei perspective: serviciile arată ce executăm, soluțiile descriu situațiile de proiect, iar industriile definesc mediul de lucru.",
    items: [
      {
        title: "Servicii",
        text:
          "Ce executăm: tablouri, trasee, instalații, automatizări și service.",
        href: "/ro/servicii",
      },
      {
        title: "Soluții",
        text:
          "Situații de proiect: unitate nouă, modernizare, linie, bază sau extindere.",
        href: "/ro/solutii",
      },
      {
        title: "Industrii",
        text:
          "Medii de lucru în care sistemul este adaptat procesului și sarcinii.",
        href: "/ro/industrii",
      },
    ],
  },
} as const satisfies AboutPageContent;
