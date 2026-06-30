import { homePageContent } from "./home";
import type { ContactPageContent, PagesContent } from "../../types";

const contactPageContent = {
  hero: {
    title: "Contact",
    subtitle: "Contact Mall Electro for a site inspection, technical analysis, offer or consultation.",
    badgeText: "Contact",
    heroImageAlt: "Engineering consultation in an industrial hall",
    primaryCtaText: "Send inquiry",
    secondaryCtaText: "Speak with an engineer",
  },
} as const satisfies ContactPageContent;

export const pagesContent = {
  home: homePageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export { contactPageContent, homePageContent };
