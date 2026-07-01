import { aboutPageContent } from "./about";
import { contactPageContent } from "./contact";
import { homePageContent } from "./home";
import { servicesOverviewPageContent } from "./services";
import type { PagesContent } from "../../types";

export const pagesContent = {
  home: homePageContent,
  about: aboutPageContent,
  servicesOverview: servicesOverviewPageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export { aboutPageContent, contactPageContent, homePageContent, servicesOverviewPageContent };
