import type { IndustriesOverviewPageContent } from "../../types";

export const industriesOverviewPageContent = {
  hero: {
    badgeText: "Soluții industriale",
    title: "Industrii în care construim sisteme electrice industriale",
    subtitle:
      "Mall Electro proiectează și implementează sisteme electrice fiabile, automatizări, trasee de cabluri industriale și tablouri de comandă în sectoare de producție diverse.",
    subtitleParagraphs: [
      "Mall Electro proiectează și implementează sisteme electrice fiabile, automatizări, trasee de cabluri industriale și tablouri de comandă în sectoare de producție diverse.",
      "Combinăm experiența inginerească și procesele standardizate pentru a asigura siguranță, eficiență și un nivel ridicat de control în fiecare proiect industrial, de la industria alimentară și mori până la agricultură, logistică și unități de producție.",
    ],
    heroImageAlt:
      "Inginer care efectuează verificările finale ale unui tablou electric într-un mediu industrial",
    primaryCtaText: "Explorează sectoarele",
    primaryCtaHref: "#industry-food",
    secondaryCtaText: "Discută cu un inginer",
    secondaryCtaHref: "tel:+359899015671",
    overlayProjectLabel: "PROIECT: #8842",
    overlayStatusLabel: "AMPLASAMENT INDUSTRIAL",
  },
  quickNav: {
    badge: "Sectoarele în care lucrăm",
    links: [
      { href: "#industry-food", label: "Industria alimentară", icon: "Factory" },
      { href: "#industry-grain", label: "Procesarea cerealelor", icon: "Wheat" },
      { href: "#industry-mills", label: "Mori", icon: "Settings" },
      { href: "#industry-agro", label: "Agricultură", icon: "Warehouse" },
      { href: "#industry-logistics", label: "Logistică", icon: "Truck" },
      { href: "#industry-production", label: "Unități de producție", icon: "Factory" },
    ],
  },
  overview: {
    badge: "Cum aducem valoare proiectelor industriale",
    heading:
      "O abordare inginerească pentru siguranță, eficiență și rezultate previzibile",
    subtitle:
      "Combinăm proiectarea, automatizările industriale și instalarea conform standardelor pentru a construi sisteme electrice fiabile pentru toate tipurile de procese de producție.",
    imageAlt: "Tablouri electrice industriale și automatizări",
    paragraphs: [
      "Lucrăm în industria alimentară, procesarea cerealelor, agricultură, logistică și producție industrială. Fiecare proiect începe cu o analiză inginerească detaliată și se încheie cu un sistem electric sigur, eficient și bine organizat, executat conform standardelor europene.",
      "De la trasee de cabluri și tablouri până la sisteme inteligente de control, oferim predictibilitate, planificare clară, documentație tehnică și asistență pe termen lung.",
    ],
    features: [
      {
        icon: "HardHat",
        label: "Experiență inginerească",
        desc: "Proiectare, cablare și integrare realizate de ingineri autorizați.",
      },
      {
        icon: "Cpu",
        label: "Automatizări",
        desc: "PLC, SCADA, controlere și sisteme inteligente de management.",
      },
      {
        icon: "ShieldCheck",
        label: "Siguranță și standarde",
        desc: "Standarde EN, protecții și certificare industrială.",
      },
      {
        icon: "Award",
        label: "Calitatea execuției",
        desc: "Precizie, siguranță și control la fiecare etapă.",
      },
    ],
    cta: "Vezi proiectele pe industrii",
    ctaHref: "#industry-food",
  },
  premium: {
    heading: "Industriile pentru care lucrăm",
    body:
      "Sectoare și medii de lucru în care serviciile electrice și soluțiile de proiect sunt adaptate unității, procesului și modului de operare.",
    cardCta: "Vezi industria",
    items: [
      {
        title: "Industria alimentară",
        text:
          "Tablouri electrice, automatizări și sisteme de control pentru linii de producție din unitățile alimentare, de la recepția materiilor prime până la ambalare.",
        href: "/ro/industrii/industria-alimentara",
        image: "/images/industries/stainless-steel-production-line_2.png",
        imageAlt: "Linie de producție din industria alimentară",
        icon: "Factory",
        bullets: [
          "Instalații pentru linii tehnologice și utilaje",
          "Tablouri electrice și dulapuri de comandă",
          "Sisteme de comunicație și siguranță",
        ],
      },
      {
        title: "Procesarea cerealelor",
        text:
          "Sisteme de uscare, transport, cablare și automatizare pentru silozuri și baze de procesare a cerealelor.",
        href: "/ro/industrii/procesarea-cerealelor",
        image: "/images/industries/wheat-close-up.png",
        imageAlt: "Procesarea cerealelor",
        icon: "Wheat",
        bullets: [
          "Instalații electrice pentru silozuri și linii de transport",
          "Alimentarea și controlul uscătoarelor și ventilatoarelor",
          "Automatizarea și monitorizarea nivelurilor și fluxurilor",
        ],
      },
      {
        title: "Mori",
        text:
          "Cablarea și integrarea liniilor tehnologice pentru măcinare și producția făinii.",
        href: "/ro/industrii/mori",
        image: "/images/industries/industrial-flour-milling-facility.png",
        imageAlt: "Mori industriale",
        icon: "Settings",
        bullets: [
          "Controlul liniilor de măcinare și al separatoarelor",
          "Tablouri de comandă pentru dozare și amestecare",
          "Semnalizare și protecții în punctele cheie ale procesului",
        ],
      },
      {
        title: "Agricultură",
        text:
          "Trasee industriale și tablouri electrice pentru baze de depozitare, ferme și unități agricole specializate.",
        href: "/ro/industrii/agro",
        image: "/images/industries/golden-farmland-aerial_2.png",
        imageAlt: "Infrastructură agricolă",
        icon: "Warehouse",
        bullets: [
          "Alimentarea unităților agricole și a stațiilor de pompare",
          "Iluminat și linii de alimentare pentru baze de depozitare",
          "Controlul ventilației, răcirii și irigațiilor",
        ],
      },
      {
        title: "Logistică și baze de depozitare",
        text:
          "Instalații electrice pentru centre logistice, camere frigorifice și depozite cu rafturi înalte.",
        href: "/ro/industrii/logistica",
        image: "/images/industries/modern-warehouse-interior_1.png",
        imageAlt: "Centru logistic",
        icon: "Truck",
        bullets: [
          "Tablouri și trasee pentru echipamente de depozitare și transportoare",
          "Alimentarea camerelor frigorifice și de congelare",
          "Sisteme de iluminat, siguranță și urgență",
        ],
      },
      {
        title: "Unități de producție",
        text:
          "Infrastructură electrică pentru hale industriale, linii tehnologice, utilaje, zone de lucru și procese de producție.",
        href: "/ro/industrii/unitati-de-productie",
        image: "/images/industries/hero_industriy.png",
        imageAlt: "Unitate de producție industrială",
        icon: "Factory",
        bullets: [
          "Alimentarea utilajelor, liniilor și zonelor de lucru",
          "Trasee de cabluri prin hale și încăperi tehnice",
          "Automatizări, sisteme de joasă tensiune și asistență tehnică",
        ],
      },
    ],
  },
  cases: {
    heading: "Situații industriale tipice",
    body:
      "Exemple de situații de proiect în care tablourile electrice, traseele de cabluri, automatizările și service-ul sunt combinate în funcție de mediul și modul de operare al unității.",
    items: [
      {
        title: "Infrastructură electrică pentru o unitate alimentară",
        subtitle:
          "Tablouri, trasee, sisteme de joasă tensiune și conexiuni de control pentru un mediu de producție.",
        image: "/images/industries/stainless-steel-production-line_2.png",
        tag: "Industria alimentară",
      },
      {
        title: "Automatizări pentru procesarea cerealelor",
        subtitle:
          "Puncte de control, senzori, tablouri și conexiuni de proces pentru recepție, transport și prelucrare.",
        image: "/images/industries/golden-hour-grain-complex.png",
        tag: "Procesarea cerealelor",
      },
      {
        title: "Infrastructură de cabluri pentru o bază logistică",
        subtitle:
          "Trasee, iluminat, alimentare și puncte de service pentru zone de depozitare și încărcare.",
        image: "/images/industries/modern-warehouse-interior_1.png",
        tag: "Logistică",
      },
    ],
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
} as const satisfies IndustriesOverviewPageContent;
