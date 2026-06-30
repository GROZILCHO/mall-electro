import type { HomePageContent } from "../../types";

export const enHomePageContent = {
  hero: {
    badgeText: "Industrial electrical engineering",
    title: "Industrial electrical installations and systems for reliable production",
    subtitle:
      "Mall Electro delivers end-to-end engineering solutions for production facilities, warehouses and technical lines: electrical panels, cable routes, low-voltage systems, automation and ongoing service support.",
    heroImageAlt: "Industrial electrical infrastructure in a production environment",
    primaryCtaText: "View core services",
    secondaryCtaText: "Talk to an engineer",
  },
  stats: [
    {
      value: "15+",
      label: "Years of industrial experience",
    },
    {
      value: "120+",
      label: "Completed projects",
    },
    {
      value: "30+",
      label: "Key industrial clients",
    },
  ],
  sectionIntros: [
    {
      eyebrow: "Core services",
      heading: "Electrical infrastructure for industrial sites",
      body:
        "We cover the essential electrical needs of industrial facilities: panel engineering, cable routing, industrial installations, automation, low-voltage distribution and maintenance.",
    },
    {
      eyebrow: "Project scenarios",
      heading: "Solutions matched to the production context",
      body:
        "Our work is structured around real project situations: new production sites, modernization, technological lines, cable infrastructure, service expansion and height-access installation work.",
    },
  ],
  cta: {
    title: "Planning an industrial electrical project?",
    description:
      "Send the project scope and our engineering team will review the requirements, clarify the technical risks and propose the next practical step.",
    primaryCtaText: "Request a consultation",
    secondaryCtaText: "Return to Bulgarian site",
  },
} as const satisfies HomePageContent;
