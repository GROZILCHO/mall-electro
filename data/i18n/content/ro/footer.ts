import type { FooterContent } from "../types";

export const footerContent = {
  brand: {
    name: "Mall Electro",
    description:
      "Partenerul dumneavoastră de încredere pentru soluții electrice industriale. Calitate, siguranță și execuție profesională.",
    copyright: "© 2025 Mall Electro.",
    rightsReserved: "Toate drepturile rezervate.",
  },
  sections: {
    menu: "Meniu",
    services: "Servicii",
    contact: "Contact",
    legal: "Informații juridice",
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
    privacyPolicy: "Politica de confidențialitate",
    cookiePolicy: "Politica privind cookie-urile",
    termsOfUse: "Termeni de utilizare",
  },
  contact: {
    addressLines: ["Str. Dunav nr. 9, et. 1, biroul 1,", "Sofia, Bulgaria"],
    legalNavAriaLabel: "Informații juridice",
  },
} as const satisfies FooterContent;
