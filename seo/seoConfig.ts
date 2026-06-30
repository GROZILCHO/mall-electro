import { SITE_EMAIL, SITE_PHONE_RAW } from "../utils/siteConfig";
import { electricPanelsFaqItems } from "../data/electricPanelsFaq";
import { cableRoutesFaqItems } from "../data/cableRoutesFaq";
import { industrialElectricalInstallationsFaqItems } from "../data/industrialElectricalInstallationsFaq";
import { automationFaqItems } from "../data/automationFaq";
import { lowVoltageFaqItems } from "../data/lowVoltageFaq";
import { maintenanceServiceFaqItems } from "../data/maintenanceServiceFaq";
import { hvpIndustryFaqItems } from "../data/hvpIndustryFaq";
import { zarnoprerabotkaIndustryFaqItems } from "../data/zarnoprerabotkaIndustryFaq";
import { melnitsiIndustryFaqItems } from "../data/melnitsiIndustryFaq";
import { agroIndustryFaqItems } from "../data/agroIndustryFaq";
import { logistikaIndustryFaqItems } from "../data/logistikaIndustryFaq";
import { proizvodstveniPredpriyatiyaIndustryFaqItems } from "../data/proizvodstveniPredpriyatiyaIndustryFaq";
import { solutionPanelAutomationLineFaqItems } from "../data/solutionPanelAutomationLineFaq";
import { solutionNewProductionSiteFaqItems } from "../data/solutionNewProductionSiteFaq";
import { solutionModernizationFaqItems } from "../data/solutionModernizationFaq";
import { solutionCableInfrastructureBaseFaqItems } from "../data/solutionCableInfrastructureBaseFaq";
import { solutionServiceExpansionFaqItems } from "../data/solutionServiceExpansionFaq";
import { solutionHeightInstallationFaqItems } from "../data/solutionHeightInstallationFaq";
import { getBgSeoRouteEntry } from "../data/i18n/seoRuntimeRoutes";
import type { RouteKey } from "../data/i18n/types";
import type { FAQItem } from "../data/faqTypes";

export const SITE_URL = "https://mallelectro.com";
export const SITE_NAME = "Mall Electro";
export const DEFAULT_OG_IMAGE = "/images/home/hero-home.png";
export const BG_HOME_PATH = "/bg";

export type SeoPageKey =
  | "home"
  | "about"
  | "services"
  | "solutions"
  | "solutionNewProductionSite"
  | "solutionModernization"
  | "solutionCableInfrastructureBase"
  | "solutionServiceExpansion"
  | "solutionHeightInstallation"
  | "solutionPanelAutomationLine"
  | "electricPanels"
  | "cableRoutes"
  | "industrialElectricalInstallations"
  | "automation"
  | "lowVoltage"
  | "maintenanceService"
  | "industries"
  | "industryHvp"
  | "industryZarnoprerabotka"
  | "industryMelnitsi"
  | "industryAgro"
  | "industryLogistika"
  | "industryProizvodstveniPredpriyatiya"
  | "contact"
  | "privacyPolicy"
  | "cookiePolicy"
  | "termsOfUse"
  | "notFound";

export interface SeoRoute {
  key: SeoPageKey;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
  includeInSitemap?: boolean;
}

const createSeoRouteIdentity = (routeKey: RouteKey): Pick<SeoRoute, "key" | "path" | "includeInSitemap"> => {
  const route = getBgSeoRouteEntry(routeKey);

  return {
    key: route.seoKey,
    path: route.path,
    ...(route.includeInSitemap ? {} : { includeInSitemap: false }),
  };
};

export const seoRoutes: SeoRoute[] = [
  {
    ...createSeoRouteIdentity("home"),
    title: "Mall Electro - индустриални електро системи и монтажни услуги",
    description:
      "Mall Electro проектира, монтира и поддържа електрически табла, кабелни трасета, ниско напрежение и индустриални електро системи за България и Румъния.",
    ogImage: "/images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png",
  },
  {
    key: "home",
    path: "/en",
    title: "Mall Electro - industrial electrical systems and installation services",
    description:
      "Mall Electro designs, installs and maintains electrical panels, cable routes, low voltage systems and industrial electrical systems for Bulgaria and Romania.",
    ogImage: "/images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    ...createSeoRouteIdentity("about"),
    title: "За Mall Electro - инженеринг, качество и електро експертиза",
    description:
      "Научете повече за Mall Electro, нашия инженерен опит, монтажни екипи и подход към безопасни индустриални електро решения по европейски стандарти.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    ...createSeoRouteIdentity("services"),
    title: "Електро услуги, електрически табла и индустриални инсталации",
    description:
      "Индустриални електро услуги от Mall Electro: електрически табла, кабелни трасета, електроинсталации, автоматизация, ниско напрежение, поддръжка и сервиз.",
    ogImage: "/images/industrial/industrial-electrical-workshop-technical-zone-01.png",
  },
  {
    ...createSeoRouteIdentity("solutions"),
    title: "Решения за индустриални електро системи | Mall Electro",
    description:
      "Инженерни решения за нови обекти, модернизация, табла, автоматизация, кабелна инфраструктура, сервиз и разширяване на индустриални системи.",
    ogImage: "/images/industrial/industrial-electrical-project-planning-production-hall-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionNewProductionSite"),
    title: "Електро инфраструктура за нов производствен обект | Mall Electro",
    description:
      "Решение за електрически табла, кабелни трасета, ниско напрежение, автоматизация, пуск и поддръжка при нови производствени обекти.",
    ogImage: "/images/industrial/industrial-new-production-site-electrical-infrastructure-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionModernization"),
    title: "Модернизация на индустриална електро система | Mall Electro",
    description:
      "Решение за оценка, подмяна, разширяване и модернизация на електрически табла, трасета, захранвания, автоматизация и контролни точки.",
    ogImage: "/images/engineering/engineering-electrical-system-modernization-technical-room-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionCableInfrastructureBase"),
    title: "Кабелна инфраструктура за индустриална база | Mall Electro",
    description:
      "Решение за кабелни трасета, ниско напрежение, захранвания, окабеляване и поддръжка за индустриални бази, складове и производствени зони.",
    ogImage: "/images/cable-routing/cable-routing-industrial-base-technical-corridor-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionServiceExpansion"),
    title: "Сервиз и разширяване на индустриални електро системи | Mall Electro",
    description:
      "Решение за диагностика, поддръжка, подобрения, разширяване и сервиз на електрически табла, трасета, автоматизация и ниско напрежение.",
    ogImage: "/images/engineering/engineering-service-expansion-electrical-system-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionHeightInstallation"),
    title: "Електромонтаж на височина с монтажна вишка | Mall Electro",
    description:
      "Решение за електромонтаж на височина, кабелни трасета, захранвания, окабеляване и сервизни дейности в индустриални обекти, халета и складови бази.",
    ogImage: "/images/industrial/industrial-electrical-installation-aerial-lift-warehouse-01.png",
  },
  {
    ...createSeoRouteIdentity("solutionPanelAutomationLine"),
    title: "Табла и автоматизация за технологични линии | Mall Electro",
    description:
      "Решение за електрически табла, управление, автоматизация, кабелни трасета и пуск на машини и технологични линии.",
    ogImage: "/images/automation/automation-control-panel-technological-line-01.png",
  },
  {
    ...createSeoRouteIdentity("serviceElectricPanels"),
    title: "Електрически табла и командни шкафове за индустрията | Mall Electro",
    description:
      "Проектиране, изработка, окабеляване и тестване на електрически табла и командни шкафове за индустриални обекти, производствени линии и автоматизация.",
    ogImage: "/images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png",
  },
  {
    ...createSeoRouteIdentity("serviceCableRoutes"),
    title: "Кабелни трасета и индустриално окабеляване | Mall Electro",
    description:
      "Монтаж на кабелни трасета, кабелни скари и индустриално окабеляване за производствени обекти, технологични линии, складови бази и електро системи.",
    ogImage: "/images/cable-routing/cable-routing-overhead-trays-industrial-hall-02.png",
  },
  {
    ...createSeoRouteIdentity("serviceIndustrialElectricalInstallations"),
    title: "Индустриални електроинсталации за производствени обекти | Mall Electro",
    description:
      "Проектиране и изпълнение на индустриални електроинсталации, силови линии, окабеляване, кабелни трасета и електро системи за производствени обекти.",
    ogImage: "/images/industrial/industrial-electrical-installation-production-zone-02.png",
  },
  {
    ...createSeoRouteIdentity("serviceAutomation"),
    title: "Автоматизация на индустриални процеси | Mall Electro",
    description:
      "Автоматизация на индустриални процеси, системи за управление, PLC, сензори, задвижвания, електрически табла и контрол на производствени линии.",
    ogImage: "/images/automation/automation-plc-control-system-production-line-01.png",
  },
  {
    ...createSeoRouteIdentity("serviceLowVoltage"),
    title: "Системи ниско напрежение за индустриални обекти | Mall Electro",
    description:
      "Изграждане на системи ниско напрежение, захранващи линии, електро връзки, табла, кабелни трасета и проверки за индустриални обекти.",
    ogImage: "/images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.png",
  },
  {
    ...createSeoRouteIdentity("serviceMaintenance"),
    title: "Поддръжка и сервиз на индустриални електро системи | Mall Electro",
    description:
      "Поддръжка, диагностика и сервиз на електрически табла, ниско напрежение, автоматизация, кабелни трасета и индустриални електро системи.",
    ogImage: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png",
  },
  {
    ...createSeoRouteIdentity("industries"),
    title: "Индустриални електро системи за ХВП, агро и логистика",
    description:
      "Mall Electro изгражда надеждни електро системи, трасета и автоматизация за ХВП, зърнопреработка, мелници, агро, логистика и производствени предприятия.",
    ogImage: "/images/industries/hero_industriy.png",
  },
  {
    ...createSeoRouteIdentity("industryHvp"),
    title: "Електро системи за ХВП и хранително-вкусова промишленост | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за ХВП, производствени линии и хранително-вкусови обекти.",
    ogImage: "/images/industries/stainless-steel-production-line_2.png",
  },
  {
    ...createSeoRouteIdentity("industryZarnoprerabotka"),
    title: "Електро системи за зърнопреработка и силозни бази | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за зърнопреработвателни предприятия и силозни комплекси.",
    ogImage: "/images/industries/golden-hour-grain-complex.png",
  },
  {
    ...createSeoRouteIdentity("industryMelnitsi"),
    title: "Електро системи за мелници и брашномелни производства | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за мелници, брашномелни линии и производствени зони.",
    ogImage: "/images/industries/industrial-flour-milling-facility.png",
  },
  {
    ...createSeoRouteIdentity("industryAgro"),
    title: "Електро системи за агро обекти и земеделска инфраструктура | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за агро обекти, стопанства и складови бази.",
    ogImage: "/images/industries/golden-farmland-aerial_2.png",
  },
  {
    ...createSeoRouteIdentity("industryLogistika"),
    title: "Електро системи за логистични бази и складови комплекси | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за логистични бази, складове и хладилни камери.",
    ogImage: "/images/industries/modern-warehouse-interior_1.png",
  },
  {
    ...createSeoRouteIdentity("industryProizvodstveniPredpriyatiya"),
    title: "Електро системи за производствени предприятия | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за производствени предприятия и индустриални обекти.",
    ogImage: "/images/industries/hero_industriy.png",
  },
  {
    ...createSeoRouteIdentity("contact"),
    title: "Контакти с Mall Electro - заявка за оглед или консултация",
    description:
      "Свържете се с инженерния екип на Mall Electro за оглед, технически анализ, оферта или консултация за индустриални електро системи.",
    ogImage: "/images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png",
  },
  {
    ...createSeoRouteIdentity("privacyPolicy"),
    title: "Политика за поверителност | Mall Electro",
    description:
      "Информация за обработване на лични данни, права по GDPR, срокове за съхранение и контакт за заявки към Mall Electro.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    ...createSeoRouteIdentity("cookiePolicy"),
    title: "Политика за бисквитки | Mall Electro",
    description:
      "Информация за бисквитки, техническо съхранение, управление в браузъра и бъдещо използване на аналитични или маркетингови инструменти.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    ...createSeoRouteIdentity("termsOfUse"),
    title: "Условия за ползване | Mall Electro",
    description:
      "Условия за използване на сайта на Mall Electro, информационен характер на съдържанието, оферти, интелектуална собственост и контакт.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    ...createSeoRouteIdentity("notFound"),
    title: "Страницата не е намерена | Mall Electro",
    description:
      "Тази страница не съществува или е преместена. Върнете се към началната страница на Mall Electro или се свържете с нас.",
    ogImage: "/images/home/hero-home.png",
    noindex: true,
    includeInSitemap: false,
  },
];

export const getCanonicalUrl = (path: string) => {
  const normalizedPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${SITE_URL}${normalizedPath}`;
};

export const getAbsoluteAssetUrl = (path = DEFAULT_OG_IMAGE) => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getSeoRoute = (key: SeoPageKey) => {
  const route = seoRoutes.find((item) => item.key === key);

  if (!route) {
    throw new Error(`Missing SEO route config for "${key}"`);
  }

  return route;
};

export const getSeoRouteByPath = (path: string) => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  return seoRoutes.find((route) => route.path === normalizedPath) ?? seoRoutes[0];
};

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE_RAW,
  logo: getAbsoluteAssetUrl("/icons/icon-512x512.png"),
  areaServed: ["Bulgaria", "Romania"],
});

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE_RAW,
  image: getAbsoluteAssetUrl(DEFAULT_OG_IMAGE),
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Дунав 9, ет.1, офис 1",
    addressLocality: "София",
    addressCountry: "BG",
  },
  areaServed: ["Bulgaria", "Romania"],
});

export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Индустриални електро услуги",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: ["Bulgaria", "Romania"],
  serviceType: [
    "Електрически табла",
    "Кабелни трасета",
    "Ниско напрежение",
    "Индустриална автоматизация",
    "Електроинсталации",
  ],
});

export const createFAQPageSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const createBreadcrumbSchema = (route: SeoRoute) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: SITE_NAME,
      item: getCanonicalUrl(BG_HOME_PATH),
    },
    ...(route.path === BG_HOME_PATH
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name: route.title,
            item: getCanonicalUrl(route.path),
          },
        ]),
  ],
});

export const getSchemasForRoute = (route: SeoRoute) => {
  if (route.noindex) {
    return [];
  }

  const schemas: Record<string, unknown>[] = [
    createOrganizationSchema(),
    createLocalBusinessSchema(),
    createBreadcrumbSchema(route),
  ];

  if (
    route.key === "services" ||
    route.key === "electricPanels" ||
    route.key === "cableRoutes" ||
    route.key === "industrialElectricalInstallations" ||
    route.key === "automation" ||
    route.key === "lowVoltage" ||
    route.key === "maintenanceService" ||
    route.key === "industries"
  ) {
    schemas.push(createServiceSchema());
  }

  if (route.key === "electricPanels") {
    schemas.push(createFAQPageSchema(electricPanelsFaqItems));
  }

  if (route.key === "cableRoutes") {
    schemas.push(createFAQPageSchema(cableRoutesFaqItems));
  }

  if (route.key === "industrialElectricalInstallations") {
    schemas.push(createFAQPageSchema(industrialElectricalInstallationsFaqItems));
  }

  if (route.key === "automation") {
    schemas.push(createFAQPageSchema(automationFaqItems));
  }

  if (route.key === "lowVoltage") {
    schemas.push(createFAQPageSchema(lowVoltageFaqItems));
  }

  if (route.key === "maintenanceService") {
    schemas.push(createFAQPageSchema(maintenanceServiceFaqItems));
  }

  if (route.key === "industryHvp") {
    schemas.push(createFAQPageSchema(hvpIndustryFaqItems));
  }

  if (route.key === "industryZarnoprerabotka") {
    schemas.push(createFAQPageSchema(zarnoprerabotkaIndustryFaqItems));
  }

  if (route.key === "industryMelnitsi") {
    schemas.push(createFAQPageSchema(melnitsiIndustryFaqItems));
  }

  if (route.key === "industryAgro") {
    schemas.push(createFAQPageSchema(agroIndustryFaqItems));
  }

  if (route.key === "industryLogistika") {
    schemas.push(createFAQPageSchema(logistikaIndustryFaqItems));
  }

  if (route.key === "industryProizvodstveniPredpriyatiya") {
    schemas.push(createFAQPageSchema(proizvodstveniPredpriyatiyaIndustryFaqItems));
  }

  if (route.key === "solutionPanelAutomationLine") {
    schemas.push(createFAQPageSchema(solutionPanelAutomationLineFaqItems));
  }

  if (route.key === "solutionNewProductionSite") {
    schemas.push(createFAQPageSchema(solutionNewProductionSiteFaqItems));
  }

  if (route.key === "solutionModernization") {
    schemas.push(createFAQPageSchema(solutionModernizationFaqItems));
  }

  if (route.key === "solutionCableInfrastructureBase") {
    schemas.push(createFAQPageSchema(solutionCableInfrastructureBaseFaqItems));
  }

  if (route.key === "solutionServiceExpansion") {
    schemas.push(createFAQPageSchema(solutionServiceExpansionFaqItems));
  }

  if (route.key === "solutionHeightInstallation") {
    schemas.push(createFAQPageSchema(solutionHeightInstallationFaqItems));
  }

  return schemas;
};
