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
import { bgEnRoutePairs } from "../data/i18n/languageSwitchRoutes";
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
  | "enHome"
  | "enAbout"
  | "enServices"
  | "enSolutions"
  | "enIndustries"
  | "enContact"
  | "enElectricPanels"
  | "enCableRoutes"
  | "enIndustrialElectricalInstallations"
  | "enAutomation"
  | "enLowVoltage"
  | "enMaintenanceService"
  | "enSolutionNewProductionSite"
  | "enSolutionModernization"
  | "enSolutionCableInfrastructureBase"
  | "enSolutionServiceExpansion"
  | "enSolutionHeightInstallation"
  | "enSolutionPanelAutomationLine"
  | "enIndustryAgriculture"
  | "enIndustryFoodIndustry"
  | "enIndustryGrainProcessing"
  | "enIndustryMills"
  | "enIndustryLogistics"
  | "enIndustryManufacturingCompanies"
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

export interface HreflangAlternate {
  hreflang: "bg" | "en" | "x-default";
  href: string;
}

const createSeoRouteIdentity = (routeKey: RouteKey): Pick<SeoRoute, "key" | "path" | "includeInSitemap"> => {
  const route = getBgSeoRouteEntry(routeKey);

  return {
    key: route.seoKey,
    path: route.path,
    ...(route.includeInSitemap ? {} : { includeInSitemap: false }),
  };
};

const normalizeSeoPath = (path: string): string => (path.length > 1 ? path.replace(/\/$/, "") : path);

const bgEnSeoPathPairs = bgEnRoutePairs.map(([bgPath, enPath]) => ({
  bgPath: normalizeSeoPath(bgPath),
  enPath: normalizeSeoPath(enPath),
}));

const approvedEnSeoPaths = new Set(bgEnSeoPathPairs.map((pair) => pair.enPath));

export const isApprovedEnSeoPath = (path: string): boolean => approvedEnSeoPaths.has(normalizeSeoPath(path));

export const shouldNoindexRoute = (route: SeoRoute): boolean =>
  Boolean(route.noindex) && !isApprovedEnSeoPath(route.path);

export const shouldIncludeRouteInSitemap = (route: SeoRoute): boolean =>
  route.includeInSitemap !== false || isApprovedEnSeoPath(route.path);

export const getOgLocaleForPath = (path: string): "bg_BG" | "en_US" =>
  normalizeSeoPath(path).startsWith("/en") ? "en_US" : "bg_BG";

export const getAlternateLinksForPath = (path: string): readonly HreflangAlternate[] => {
  const normalizedPath = normalizeSeoPath(path);
  const pair = bgEnSeoPathPairs.find(
    (entry) => entry.bgPath === normalizedPath || entry.enPath === normalizedPath
  );

  if (!pair) {
    return [];
  }

  const bgUrl = getCanonicalUrl(pair.bgPath);
  const enUrl = getCanonicalUrl(pair.enPath);

  return [
    { hreflang: "bg", href: bgUrl },
    { hreflang: "en", href: enUrl },
    { hreflang: "x-default", href: bgUrl },
  ];
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
    key: "enHome",
    path: "/en",
    title: "Mall Electro - Industrial Electrical Systems and Installation Services",
    description:
      "Mall Electro designs, installs and maintains electrical panels, cable routes, low voltage systems and industrial electrical systems for Bulgaria and Romania.",
    ogImage: "/images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enContact",
    path: "/en/contact",
    title: "Contact Mall Electro - engineering inquiry and consultation",
    description:
      "Contact the Mall Electro engineering team for a site inspection, technical analysis, offer or consultation for industrial electrical systems.",
    ogImage: "/images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png",
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
    key: "enAbout",
    path: "/en/about",
    title: "About Mall Electro | Industrial Electrical Engineering Partner",
    description:
      "Learn about Mall Electro, our engineering approach, industrial electrical systems expertise, process, sectors and principles.",
    ogImage: "/images/about/hero-about.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    ...createSeoRouteIdentity("services"),
    title: "Електро услуги, електрически табла и индустриални инсталации",
    description:
      "Индустриални електро услуги от Mall Electro: електрически табла, кабелни трасета, електроинсталации, автоматизация, ниско напрежение, поддръжка и сервиз.",
    ogImage: "/images/industrial/industrial-electrical-workshop-technical-zone-01.png",
  },
  {
    key: "enServices",
    path: "/en/services",
    title: "Professional Electrical Services, Engineering and Automation | Mall Electro",
    description:
      "Mall Electro provides industrial electrical services including panels, cable routes, installations, automation, low voltage systems and maintenance.",
    ogImage: "/images/industrial/industrial-electrical-workshop-technical-zone-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enElectricPanels",
    path: "/en/services/electrical-panels",
    title: "Electrical panels and control cabinets for industrial facilities",
    description:
      "Mall Electro designs, builds, wires and tests electrical panels and control cabinets for production lines, machines, low voltage systems and automation.",
    ogImage: "/images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enCableRoutes",
    path: "/en/services/cable-routes",
    title: "Cable routes and industrial cabling",
    description:
      "Mall Electro builds cable routes, cable trays and organized industrial cabling for production facilities, warehouses and technological lines.",
    ogImage: "/images/cable-routing/cable-routing-overhead-trays-industrial-hall-02.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustrialElectricalInstallations",
    path: "/en/services/industrial-electrical-installations",
    title: "Industrial electrical installations for production facilities",
    description:
      "Mall Electro executes industrial electrical installations for production lines, warehouse bases, machines and technological processes.",
    ogImage: "/images/industrial/industrial-electrical-installation-production-zone-02.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enAutomation",
    path: "/en/services/automation",
    title: "Automation of industrial processes and control systems",
    description:
      "Mall Electro builds automation, control and management systems for production processes, machines and technological lines.",
    ogImage: "/images/automation/automation-plc-control-system-production-line-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enLowVoltage",
    path: "/en/services/low-voltage-systems",
    title: "Low voltage systems for industrial facilities",
    description:
      "Mall Electro executes low voltage systems, supply lines and electrical connections for machines, panels and production zones.",
    ogImage: "/images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enMaintenanceService",
    path: "/en/services/maintenance-and-service",
    title: "Maintenance and service of industrial electrical systems",
    description:
      "Mall Electro provides maintenance, diagnostics and service for electrical panels, cable routes, low voltage systems, automation and industrial electrical installations.",
    ogImage: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    ...createSeoRouteIdentity("solutions"),
    title: "Решения за индустриални електро системи | Mall Electro",
    description:
      "Инженерни решения за нови обекти, модернизация, табла, автоматизация, кабелна инфраструктура, сервиз и разширяване на индустриални системи.",
    ogImage: "/images/industrial/industrial-electrical-project-planning-production-hall-01.png",
  },
  {
    key: "enSolutions",
    path: "/en/solutions",
    title: "Solutions for Industrial Electrical Systems | Mall Electro",
    description:
      "Mall Electro combines panels, cable routes, low voltage systems, automation and service into practical industrial electrical solutions.",
    ogImage: "/images/industrial/industrial-electrical-project-planning-production-hall-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionNewProductionSite",
    path: "/en/solutions/new-production-site",
    title: "Electrical infrastructure for a new production site",
    description:
      "Mall Electro plans and builds electrical infrastructure for new production, warehouse and technological facilities.",
    ogImage: "/images/industrial/industrial-new-production-site-electrical-infrastructure-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionModernization",
    path: "/en/solutions/electrical-system-modernization",
    title: "Modernization of an industrial electrical system",
    description:
      "Mall Electro assesses and modernizes existing industrial electrical systems, panels, routes, supplies, automation and control points.",
    ogImage: "/images/engineering/engineering-electrical-system-modernization-technical-room-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionPanelAutomationLine",
    path: "/en/solutions/panels-and-automation-for-production-lines",
    title: "Panels and automation for production lines",
    description:
      "Mall Electro combines electrical panels, control, sensors, cable routes and low voltage systems for production lines.",
    ogImage: "/images/automation/automation-control-panel-technological-line-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionCableInfrastructureBase",
    path: "/en/solutions/cable-infrastructure-for-base",
    title: "Cable infrastructure for an industrial base",
    description:
      "Mall Electro organizes cable routes, power lines, low voltage systems and connections for industrial bases and warehouse zones.",
    ogImage: "/images/cable-routing/cable-routing-industrial-base-overhead-trays-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionServiceExpansion",
    path: "/en/solutions/service-and-expansion",
    title: "Service and expansion of existing electrical systems",
    description:
      "Mall Electro supports diagnostics, maintenance, improvements and expansion of existing industrial electrical systems.",
    ogImage: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enSolutionHeightInstallation",
    path: "/en/solutions/high-access-installation",
    title: "Electrical installation at height",
    description:
      "Mall Electro executes electrical installation work in high industrial zones, halls, warehouse bases and difficult access points.",
    ogImage: "/images/industrial/industrial-electrical-installation-height-lift-01.png",
    noindex: true,
    includeInSitemap: false,
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
    key: "enIndustries",
    path: "/en/industries",
    title: "Industries Where We Build Industrial Electrical Systems | Mall Electro",
    description:
      "Mall Electro builds industrial electrical systems, cable routes and automation for food processing, grain processing, mills, agro, logistics and manufacturing facilities.",
    ogImage: "/images/industries/hero_industriy.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryAgriculture",
    path: "/en/industries/agriculture",
    title: "Electrical systems for agricultural facilities",
    description:
      "Mall Electro builds electrical infrastructure for agricultural facilities, farms, storage bases and technological zones.",
    ogImage: "/images/industries/golden-farmland-aerial_2.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryFoodIndustry",
    path: "/en/industries/food-industry",
    title: "Electrical systems for food processing facilities",
    description:
      "Mall Electro builds electrical panels, cable routes, low voltage systems and automation for food processing facilities.",
    ogImage: "/images/industries/stainless-steel-production-line_2.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryGrainProcessing",
    path: "/en/industries/grain-processing",
    title: "Electrical systems for grain processing facilities",
    description:
      "Mall Electro builds electrical infrastructure for grain processing bases, silo systems, dryers and transport lines.",
    ogImage: "/images/industries/golden-hour-grain-complex.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryMills",
    path: "/en/industries/mills",
    title: "Electrical systems for mills and flour production",
    description:
      "Mall Electro builds electrical infrastructure for mills, flour production lines, conveyors, dosing and aspiration systems.",
    ogImage: "/images/industries/industrial-flour-milling-facility.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryLogistics",
    path: "/en/industries/logistics",
    title: "Electrical systems for logistics and warehouse bases",
    description:
      "Mall Electro builds electrical infrastructure for logistics centers, warehouse bases, cold rooms and loading zones.",
    ogImage: "/images/industries/modern-warehouse-interior_1.png",
    noindex: true,
    includeInSitemap: false,
  },
  {
    key: "enIndustryManufacturingCompanies",
    path: "/en/industries/manufacturing-companies",
    title: "Electrical systems for manufacturing companies",
    description:
      "Mall Electro builds electrical infrastructure for industrial halls, technological lines, machines and production processes.",
    ogImage: "/images/industries/industries-heavy-industrial-electrical-infrastructure-01.png",
    noindex: true,
    includeInSitemap: false,
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
