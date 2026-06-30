import { aboutPageContent } from "./about";
import { contactPageContent } from "./contact";
import { homePageContent } from "./home";
import type { PagesContent } from "../../types";

export const pagesContent = {
  home: homePageContent,
  about: aboutPageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export { aboutPageContent, contactPageContent, homePageContent };
