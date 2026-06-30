import type { ContactPageContent } from "../../types";

export const contactPageContent = {
  hero: {
    title: "Contact our team",
    subtitle:
      "Do you need a site inspection, project design, technical analysis or consultation? Our engineers are available for support, an offer or practical help with your project. We respond quickly and recommend the most suitable technical solution for the specifics of your system.",
    badgeText: "Contact",
    heroImageAlt:
      "Engineering consultation next to an electrical panel in an industrial environment",
    primaryCtaText: "View industries",
    secondaryCtaText: "Contact us",
  },
} as const satisfies ContactPageContent;
