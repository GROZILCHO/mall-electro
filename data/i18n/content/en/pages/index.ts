import { aboutPageContent } from "./about";
import { contactPageContent } from "./contact";
import { homePageContent } from "./home";
import { industriesOverviewPageContent } from "./industries";
import { serviceDetailsContent } from "./serviceDetails";
import { servicesOverviewPageContent } from "./services";
import { solutionDetailsContent } from "./solutionDetails";
import { solutionsOverviewPageContent } from "./solutions";
import type { PagesContent } from "../../types";

export const pagesContent = {
  home: homePageContent,
  about: aboutPageContent,
  servicesOverview: servicesOverviewPageContent,
  serviceDetails: serviceDetailsContent,
  solutionsOverview: solutionsOverviewPageContent,
  solutionDetails: solutionDetailsContent,
  industriesOverview: industriesOverviewPageContent,
  contact: contactPageContent,
} as const satisfies PagesContent;

export {
  aboutPageContent,
  contactPageContent,
  homePageContent,
  industriesOverviewPageContent,
  serviceDetailsContent,
  servicesOverviewPageContent,
  solutionDetailsContent,
  solutionsOverviewPageContent,
};
