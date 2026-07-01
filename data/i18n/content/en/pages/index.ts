import { aboutPageContent } from "./about";
import { contactPageContent } from "./contact";
import { homePageContent } from "./home";
import { servicesOverviewPageContent } from "./services";
import { solutionsOverviewPageContent } from "./solutions";
import type { PagesContent } from "../../types";

export const pagesContent = {
  home: homePageContent,
  about: aboutPageContent,
  servicesOverview: servicesOverviewPageContent,
  solutionsOverview: solutionsOverviewPageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export {
  aboutPageContent,
  contactPageContent,
  homePageContent,
  servicesOverviewPageContent,
  solutionsOverviewPageContent,
};
