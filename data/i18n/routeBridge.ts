import { isSupportedLocale, localeDefinitions } from "./locales";
import { localizedRoutes } from "./routes";
import type {
  RouteBridgeDefinition,
  RouteBridgeMap,
  RouteKey,
  RouteLocaleBridgeStatus,
  RuntimePageKey,
  SupportedLocale,
} from "./types";

export const routeBridge = {
  home: { routeKey: "home", pageKey: "home", group: "core" },
  services: { routeKey: "services", pageKey: "services", group: "core" },
  serviceElectricPanels: { routeKey: "serviceElectricPanels", pageKey: "electricPanels", group: "service" },
  serviceCableRoutes: { routeKey: "serviceCableRoutes", pageKey: "cableRoutes", group: "service" },
  serviceIndustrialElectricalInstallations: {
    routeKey: "serviceIndustrialElectricalInstallations",
    pageKey: "industrialElectricalInstallations",
    group: "service",
  },
  serviceAutomation: { routeKey: "serviceAutomation", pageKey: "automation", group: "service" },
  serviceLowVoltage: { routeKey: "serviceLowVoltage", pageKey: "lowVoltage", group: "service" },
  serviceMaintenance: { routeKey: "serviceMaintenance", pageKey: "maintenanceService", group: "service" },
  solutions: { routeKey: "solutions", pageKey: "solutions", group: "core" },
  solutionNewProductionSite: {
    routeKey: "solutionNewProductionSite",
    pageKey: "newProductionSiteSolution",
    group: "solution",
  },
  solutionModernization: {
    routeKey: "solutionModernization",
    pageKey: "electricalSystemModernizationSolution",
    group: "solution",
  },
  solutionCableInfrastructureBase: {
    routeKey: "solutionCableInfrastructureBase",
    pageKey: "cableInfrastructureBaseSolution",
    group: "solution",
  },
  solutionServiceExpansion: {
    routeKey: "solutionServiceExpansion",
    pageKey: "serviceExpansionSolution",
    group: "solution",
  },
  solutionHeightInstallation: {
    routeKey: "solutionHeightInstallation",
    pageKey: "heightInstallationSolution",
    group: "solution",
  },
  solutionPanelAutomationLine: {
    routeKey: "solutionPanelAutomationLine",
    pageKey: "panelAutomationLineSolution",
    group: "solution",
  },
  about: { routeKey: "about", pageKey: "about", group: "core" },
  industries: { routeKey: "industries", pageKey: "industries", group: "core" },
  industryHvp: { routeKey: "industryHvp", pageKey: "hvpIndustry", group: "industry" },
  industryZarnoprerabotka: {
    routeKey: "industryZarnoprerabotka",
    pageKey: "zarnoprerabotkaIndustry",
    group: "industry",
  },
  industryMelnitsi: { routeKey: "industryMelnitsi", pageKey: "melnitsiIndustry", group: "industry" },
  industryAgro: { routeKey: "industryAgro", pageKey: "agroIndustry", group: "industry" },
  industryLogistika: { routeKey: "industryLogistika", pageKey: "logistikaIndustry", group: "industry" },
  industryProizvodstveniPredpriyatiya: {
    routeKey: "industryProizvodstveniPredpriyatiya",
    pageKey: "proizvodstveniPredpriyatiyaIndustry",
    group: "industry",
  },
  contact: { routeKey: "contact", pageKey: "contact", group: "core" },
  privacyPolicy: { routeKey: "privacyPolicy", pageKey: "privacyPolicy", group: "legal" },
  cookiePolicy: { routeKey: "cookiePolicy", pageKey: "cookiePolicy", group: "legal" },
  termsOfUse: { routeKey: "termsOfUse", pageKey: "termsOfUse", group: "legal" },
  notFound: { routeKey: "notFound", pageKey: "notFound", group: "system" },
} as const satisfies RouteBridgeMap;

const routeBridgeEntries = Object.entries(routeBridge) as Array<[RouteKey, RouteBridgeDefinition]>;

const normalizePath = (path: string): string => (path.length > 1 ? path.replace(/\/$/, "") : path);

export const getRouteBridgeDefinition = (routeKey: RouteKey): RouteBridgeDefinition => routeBridge[routeKey];

export const getPageKeyForRouteKey = (routeKey: RouteKey): RuntimePageKey => routeBridge[routeKey].pageKey;

export const getRouteKeyForPageKey = (pageKey: RuntimePageKey): RouteKey | null => {
  const match = routeBridgeEntries.find(([, definition]) => definition.pageKey === pageKey);
  return match?.[0] ?? null;
};

export const getRouteLocaleStatus = (
  routeKey: RouteKey,
  locale: SupportedLocale
): RouteLocaleBridgeStatus => {
  const route = localizedRoutes[locale][routeKey];
  const isLocalePublic = localeDefinitions[locale].isPublic;
  const isActive = route.status === "active";

  return {
    routeKey,
    locale,
    status: route.status,
    isActive,
    isLocalePublic,
    isPublicActive: isLocalePublic && isActive,
  };
};

export const isRouteActiveForLocale = (routeKey: RouteKey, locale: SupportedLocale): boolean =>
  getRouteLocaleStatus(routeKey, locale).isActive;

export const isRoutePublicForLocale = (routeKey: RouteKey, locale: SupportedLocale): boolean =>
  getRouteLocaleStatus(routeKey, locale).isPublicActive;

export const getRouteKeyAndLocaleByPath = (
  path: string,
  locale?: SupportedLocale
): { routeKey: RouteKey; locale: SupportedLocale } | null => {
  const normalizedPath = normalizePath(path);
  const localesToSearch = locale ? [locale] : Object.keys(localizedRoutes).filter(isSupportedLocale);

  for (const localeKey of localesToSearch) {
    const routeEntries = Object.entries(localizedRoutes[localeKey]) as Array<
      [RouteKey, { path: string }]
    >;

    const match = routeEntries.find(([, route]) => normalizePath(route.path) === normalizedPath);

    if (match) {
      return { routeKey: match[0], locale: localeKey };
    }
  }

  return null;
};
