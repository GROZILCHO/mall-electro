import type { FooterContent } from "../types";

export const footerContent = {
  brand: {
    name: "Mall Electro",
    description:
      "Вашият надежден партньор за индустриални електро решения. Качество, сигурност и професионализъм.",
    copyright: "© 2025 Mall Electro.",
    rightsReserved: "Всички права запазени.",
  },
  sections: {
    menu: "Меню",
    services: "Услуги",
    contact: "Контакти",
    legal: "Правна информация",
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
    privacyPolicy: "Политика за поверителност",
    cookiePolicy: "Бисквитки",
    termsOfUse: "Условия за ползване",
  },
  contact: {
    addressLines: ["ул. Дунав 9, ет.1, офис 1,", "София, България"],
    legalNavAriaLabel: "Правна информация",
  },
} as const satisfies FooterContent;
