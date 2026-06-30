import { contactPageContent } from "./contact";
import { homePageContent } from "./home";
import type { PagesContent } from "../../types";

export const pagesContent = {
  home: homePageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export { contactPageContent, homePageContent };
