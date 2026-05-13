import { SITE_EMAIL, SITE_PHONE_RAW } from "../utils/siteConfig";
import { electricPanelsFaqItems } from "../data/electricPanelsFaq";
import { cableRoutesFaqItems } from "../data/cableRoutesFaq";
import { industrialElectricalInstallationsFaqItems } from "../data/industrialElectricalInstallationsFaq";
import { automationFaqItems } from "../data/automationFaq";
import { lowVoltageFaqItems } from "../data/lowVoltageFaq";
import { maintenanceServiceFaqItems } from "../data/maintenanceServiceFaq";
import { hvpIndustryFaqItems } from "../data/hvpIndustryFaq";
import type { FAQItem } from "../data/faqTypes";

export const SITE_URL = "https://mallelectro.com";
export const SITE_NAME = "Mall Electro";
export const DEFAULT_OG_IMAGE = "/images/home/hero-home.png";
export const BG_HOME_PATH = "/bg";

export type SeoPageKey =
  | "home"
  | "about"
  | "services"
  | "electricPanels"
  | "cableRoutes"
  | "industrialElectricalInstallations"
  | "automation"
  | "lowVoltage"
  | "maintenanceService"
  | "industries"
  | "industryHvp"
  | "contact"
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

export const seoRoutes: SeoRoute[] = [
  {
    key: "home",
    path: BG_HOME_PATH,
    title: "Mall Electro - индустриални електро системи и монтажни услуги",
    description:
      "Mall Electro проектира, монтира и поддържа електрически табла, кабелни трасета, ниско напрежение и индустриални електро системи за България и Румъния.",
    ogImage: "/images/home/hero-home.png",
  },
  {
    key: "about",
    path: "/bg/za-nas",
    title: "За Mall Electro - инженеринг, качество и електро експертиза",
    description:
      "Научете повече за Mall Electro, нашия инженерен опит, монтажни екипи и подход към безопасни индустриални електро решения по европейски стандарти.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    key: "services",
    path: "/bg/uslugi",
    title: "Електро услуги, електрически табла и индустриални инсталации",
    description:
      "Индустриални електро услуги от Mall Electro: електрически табла, кабелни трасета, електроинсталации, автоматизация, ниско напрежение, поддръжка и сервиз.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "electricPanels",
    path: "/bg/uslugi/elektricheski-tabla",
    title: "Електрически табла и командни шкафове за индустрията | Mall Electro",
    description:
      "Проектиране, изработка, окабеляване и тестване на електрически табла и командни шкафове за индустриални обекти, производствени линии и автоматизация.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "cableRoutes",
    path: "/bg/uslugi/kabelni-traseta",
    title: "Кабелни трасета и индустриално окабеляване | Mall Electro",
    description:
      "Монтаж на кабелни трасета, кабелни скари и индустриално окабеляване за производствени обекти, технологични линии, складови бази и електро системи.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "industrialElectricalInstallations",
    path: "/bg/uslugi/industrialni-elektroinstalatsii",
    title: "Индустриални електроинсталации за производствени обекти | Mall Electro",
    description:
      "Проектиране и изпълнение на индустриални електроинсталации, силови линии, окабеляване, кабелни трасета и електро системи за производствени обекти.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "automation",
    path: "/bg/uslugi/avtomatizatsia",
    title: "Автоматизация на индустриални процеси | Mall Electro",
    description:
      "Автоматизация на индустриални процеси, системи за управление, PLC, сензори, задвижвания, електрически табла и контрол на производствени линии.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "lowVoltage",
    path: "/bg/uslugi/nisko-naprezhenie",
    title: "Системи ниско напрежение за индустриални обекти | Mall Electro",
    description:
      "Изграждане на системи ниско напрежение, захранващи линии, електро връзки, табла, кабелни трасета и проверки за индустриални обекти.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "maintenanceService",
    path: "/bg/uslugi/poddrazhka-i-serviz",
    title: "Поддръжка и сервиз на индустриални електро системи | Mall Electro",
    description:
      "Поддръжка, диагностика и сервиз на електрически табла, ниско напрежение, автоматизация, кабелни трасета и индустриални електро системи.",
    ogImage: "/images/services/hero-services.png",
  },
  {
    key: "industries",
    path: "/bg/industrii",
    title: "Индустриални електро системи за ХВП, агро и логистика",
    description:
      "Mall Electro изгражда надеждни електро системи, трасета и автоматизация за ХВП, зърнопреработка, мелници, агро, логистика и производствени предприятия.",
    ogImage: "/images/industries/hero_industriy.png",
  },
  {
    key: "industryHvp",
    path: "/bg/industrii/hvp",
    title: "Електро системи за ХВП и хранително-вкусова промишленост | Mall Electro",
    description:
      "Електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз за ХВП, производствени линии и хранително-вкусови обекти.",
    ogImage: "/images/industries/stainless-steel-production-line_2.png",
  },
  {
    key: "contact",
    path: "/bg/kontakti",
    title: "Контакти с Mall Electro - заявка за оглед или консултация",
    description:
      "Свържете се с инженерния екип на Mall Electro за оглед, технически анализ, оферта или консултация за индустриални електро системи.",
    ogImage: "/images/about/hero-about.png",
  },
  {
    key: "notFound",
    path: "/404",
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

  return schemas;
};
