import { commonContent } from "./common";
import { footerContent } from "./footer";
import { formsContent } from "./forms";
import { navigationContent } from "./navigation";
import { aboutPageContent } from "./pages/about";
import { contactPageContent } from "./pages/contact";
import { homePageContent } from "./pages/home";
import { industriesOverviewPageContent } from "./pages/industries";
import { servicesOverviewPageContent } from "./pages/services";
import { serviceDetailsContent } from "./pages/serviceDetails";
import { solutionDetailsContent } from "./pages/solutionDetails";
import { solutionsOverviewPageContent } from "./pages/solutions";

export const roContent = {
  locale: "ro",
  common: commonContent,
  navigation: navigationContent,
  footer: footerContent,
  forms: formsContent,
  pages: {
    home: homePageContent,
    about: aboutPageContent,
    servicesOverview: servicesOverviewPageContent,
    serviceDetails: serviceDetailsContent,
    solutionsOverview: solutionsOverviewPageContent,
    solutionDetails: solutionDetailsContent,
    industriesOverview: industriesOverviewPageContent,
    contact: contactPageContent,
  },
} as const;

export {
  aboutPageContent,
  commonContent,
  contactPageContent,
  footerContent,
  formsContent,
  homePageContent,
  industriesOverviewPageContent,
  navigationContent,
  servicesOverviewPageContent,
  serviceDetailsContent,
  solutionDetailsContent,
  solutionsOverviewPageContent,
};
