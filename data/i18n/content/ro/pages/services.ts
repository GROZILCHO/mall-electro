import type { ServicesOverviewPageContent } from "../../types";

export const servicesOverviewPageContent = {
  hero: {
    title: "Servicii electrice profesionale, inginerie și automatizări",
    subtitle:
      "Mall Electro realizează sisteme electrice industriale de la inspecția la fața locului și proiectare până la instalare, punere în funcțiune și mentenanță. Lucrăm cu organizare tehnică clară, execuție sigură și perturbări minime ale procesului de producție.",
    badgeText: "Execuție organizată",
    heroImageAlt:
      "Atelier electric industrial cu tablouri și infrastructură de cabluri",
    primaryCtaText: "Solicită o consultație",
    secondaryCtaText: "Vezi industriile",
    primaryCtaHref: "/ro/contact",
    secondaryCtaHref: "/ro/industrii",
    overlayProjectLabel: "PROIECT: #8842",
    overlayStatusLabel: "INSPECȚIE LA FAȚA LOCULUI",
  },
  overview: {
    badge: "Servicii // prezentare generală",
    heading: "Soluții electrice pentru infrastructura industrială",
    body:
      "Combinăm proiectarea, furnizarea, instalarea și service-ul într-un proces coerent. Astfel, echipele de producție, investitorii și managerii tehnici beneficiază de o execuție previzibilă, fără întârzieri inutile.",
    steps: [
      {
        title: "Inspecție",
        text:
          "Analizăm unitatea, traseele, sarcinile și condițiile reale de instalare.",
      },
      {
        title: "Proiectare",
        text:
          "Pregătim o soluție tehnică aliniată sistemelor și standardelor aplicabile.",
      },
      {
        title: "Execuție",
        text:
          "Lucrăm cu echipe de instalare, controlul calității și verificări finale.",
      },
    ],
  },
  services: {
    badge: "Servicii principale",
    heading: "Servicii electrice principale",
    body:
      "Șase domenii principale acoperă cele mai frecvente cerințe ale unităților industriale, de la tablouri și trasee de cabluri până la automatizări și service.",
    cardPrefix: "Serviciu",
    cardCta: "Vezi detaliile",
    items: [
      {
        title: "Tablouri electrice",
        description:
          "Proiectarea, producția și punerea în funcțiune a tablourilor de distribuție, dulapurilor de comandă și tablourilor de control.",
        icon: "LayoutDashboard",
        href: "/ro/servicii/tablouri-electrice",
        bullets: [
          "Documentație de proiect",
          "Standarde EN și protecții",
          "Testare și documentație de verificare",
        ],
      },
      {
        title: "Trasee de cabluri",
        description:
          "Jgheaburi, trasee și cablare organizată pentru medii industriale solicitante.",
        icon: "Factory",
        href: "/ro/servicii/trasee-de-cabluri",
        bullets: [
          "Trasee pentru utilaje și linii",
          "Instalare curată la fața locului",
          "Pregătire pentru mentenanța ulterioară",
        ],
      },
      {
        title: "Instalații electrice industriale",
        description:
          "Execuția completă a instalațiilor electrice pentru unități de producție, depozite și linii tehnologice.",
        icon: "HardHat",
        href: "/ro/servicii/instalatii-electrice-industriale",
        bullets: [
          "Linii de forță și alimentare",
          "Echipe de instalare la fața locului",
          "Punere în funcțiune și verificări finale",
        ],
      },
      {
        title: "Automatizări",
        description:
          "Integrarea sistemelor de control, senzorilor, tablourilor și comunicației dintre utilaje și procese.",
        icon: "Cpu",
        href: "/ro/servicii/automatizare",
        bullets: [
          "PLC și controlere",
          "Semnalizarea proceselor",
          "Monitorizarea punctelor cheie",
        ],
      },
      {
        title: "Sisteme de joasă tensiune",
        description:
          "Cablare și conexiuni între utilaje, tablouri și sisteme pentru funcționarea fiabilă a producției.",
        icon: "Zap",
        href: "/ro/servicii/sisteme-de-joasa-tensiune",
        bullets: [
          "Cabluri și conexiuni",
          "Utilaje, tablouri și linii",
          "Întreruperi minime",
        ],
      },
      {
        title: "Mentenanță și service",
        description:
          "Intervenții, verificarea sistemelor, reparații și asistență tehnică după execuție.",
        icon: "Wrench",
        href: "/ro/servicii/mentenanta-si-service",
        bullets: [
          "Inspecție și diagnosticare",
          "Reparații și corecții",
          "Mentenanță pe termen lung",
        ],
      },
    ],
  },
  engineering: {
    badge: "Abordare inginerească",
    heading: "De la analiza tehnică la funcționarea stabilă a sistemului",
    body:
      "În sistemele electrice industriale, calitatea nu ține doar de instalare. Traseul, tabloul, protecțiile și mentenanța viitoare trebuie planificate împreună.",
    bullets: [
      "Evaluarea sarcinilor, mediului și accesului pentru instalare",
      "Coordonarea tablourilor, cablurilor, traseelor și automatizărilor",
      "Inspecție finală, punere în funcțiune și documentație tehnică clară",
    ],
    imageAlt: "Tablou electric industrial și execuție inginerească",
    imageLabel: "VERIFICARE TEHNICĂ",
    imageStatus: "PREGĂTIT PENTRU PUNERE ÎN FUNCȚIUNE",
  },
  projectTypes: {
    badge: "Proiecte potrivite",
    heading: "Unități pentru care lucrăm",
    body:
      "Serviciile se aplică lucrărilor de construcție nouă, extindere, modernizare și mentenanță a infrastructurii industriale.",
    items: [
      "Unități de procesare a alimentelor și linii de producție",
      "Procesarea cerealelor, silozuri și sisteme de uscare",
      "Mori și unități de producție a făinii",
      "Baze agricole, depozite și stații de pompare",
      "Centre logistice și camere frigorifice",
      "Unități industriale care necesită mentenanță tehnică",
    ],
    primaryCta: "Discutați proiectul",
    secondaryCta: "Vezi industriile",
    primaryCtaHref: "/ro/contact",
    secondaryCtaHref: "/ro/industrii",
  },
  contactCta: {
    imageAlt: "Proiect tehnic și tablou electric",
    projectLabel: "PROIECT: #8842",
    readyLabel: "SISTEM PREGĂTIT",
    badge: "DISPONIBILI PENTRU DISCUȚII",
    heading: "Să construim",
    highlightedHeading: "sistemul împreună.",
    body:
      "Echipa noastră de ingineri este disponibilă pentru inspecție, proiectare și execuție.",
    strongBody:
      "Vom analiza solicitarea și vă vom contacta pentru a clarifica domeniul și pașii următori.",
    primaryCta: "Trimite o solicitare",
    secondaryCta: "Discută cu un inginer",
  },
} as const satisfies ServicesOverviewPageContent;
