import type { ContactPageContent } from "../../types";

export const contactPageContent = {
  hero: {
    title: "Contactați echipa noastră",
    subtitle:
      "Aveți nevoie de o inspecție la fața locului, proiectare, analiză tehnică sau consultanță? Inginerii noștri vă pot oferi asistență, o ofertă sau sprijin practic pentru proiect. Răspundem rapid și recomandăm soluția tehnică potrivită particularităților sistemului dumneavoastră.",
    badgeText: "Contact",
    heroImageAlt:
      "Consultanță tehnică lângă un tablou electric într-un mediu industrial",
    primaryCtaText: "Vezi industriile",
    secondaryCtaText: "Contactați-ne",
  },
} as const satisfies ContactPageContent;
