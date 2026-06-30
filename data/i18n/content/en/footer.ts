import type { FooterContent } from "../types";

export const footerContent = {
  brand: {
    name: "Mall Electro",
    description:
      "Your reliable partner for industrial electrical solutions. Quality, safety and professional execution.",
    copyright: "© 2025 Mall Electro.",
    rightsReserved: "All rights reserved.",
  },
  sections: {
    menu: "Menu",
    services: "Services",
    contact: "Contact",
    legal: "Legal information",
  },
  menuRouteKeys: ["home", "services", "solutions", "industries", "about", "contact"],
  serviceRouteKeys: [
    "serviceElectricPanels",
    "serviceCableRoutes",
    "serviceIndustrialElectricalInstallations",
    "serviceAutomation",
    "serviceLowVoltage",
    "serviceMaintenance",
  ],
  legalRouteKeys: ["privacyPolicy", "cookiePolicy", "termsOfUse"],
  legalLabels: {
    privacyPolicy: "Privacy policy",
    cookiePolicy: "Cookie policy",
    termsOfUse: "Terms of use",
  },
  contact: {
    addressLines: ["9 Dunav St., fl. 1, office 1,", "Sofia, Bulgaria"],
    legalNavAriaLabel: "Legal information",
  },
} as const satisfies FooterContent;
