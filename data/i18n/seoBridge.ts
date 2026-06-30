import { getLocalizedPath } from "./routes";
import type { RouteKey, SeoBridgeDefinition, SeoBridgeMap } from "./types";
import type { SeoPageKey } from "../../seo/seoConfig";

const BG_LOCALE = "bg";

const bgPath = (routeKey: RouteKey): string => {
  const path = getLocalizedPath(routeKey, BG_LOCALE);
  return path.length > 1 ? path.replace(/\/$/, "") : path;
};

const indexable = (routeKey: RouteKey, seoKey: SeoPageKey): SeoBridgeDefinition => ({
  routeKey,
  seoKey,
  bgPath: bgPath(routeKey),
  isIndexable: true,
  isPrerenderEligible: true,
  includeInSitemap: true,
});

export const seoBridge = {
  home: indexable("home", "home"),
  services: indexable("services", "services"),
  serviceElectricPanels: indexable("serviceElectricPanels", "electricPanels"),
  serviceCableRoutes: indexable("serviceCableRoutes", "cableRoutes"),
  serviceIndustrialElectricalInstallations: indexable(
    "serviceIndustrialElectricalInstallations",
    "industrialElectricalInstallations"
  ),
  serviceAutomation: indexable("serviceAutomation", "automation"),
  serviceLowVoltage: indexable("serviceLowVoltage", "lowVoltage"),
  serviceMaintenance: indexable("serviceMaintenance", "maintenanceService"),
  solutions: indexable("solutions", "solutions"),
  solutionNewProductionSite: indexable("solutionNewProductionSite", "solutionNewProductionSite"),
  solutionModernization: indexable("solutionModernization", "solutionModernization"),
  solutionCableInfrastructureBase: indexable(
    "solutionCableInfrastructureBase",
    "solutionCableInfrastructureBase"
  ),
  solutionServiceExpansion: indexable("solutionServiceExpansion", "solutionServiceExpansion"),
  solutionHeightInstallation: indexable("solutionHeightInstallation", "solutionHeightInstallation"),
  solutionPanelAutomationLine: indexable("solutionPanelAutomationLine", "solutionPanelAutomationLine"),
  about: indexable("about", "about"),
  industries: indexable("industries", "industries"),
  industryHvp: indexable("industryHvp", "industryHvp"),
  industryZarnoprerabotka: indexable("industryZarnoprerabotka", "industryZarnoprerabotka"),
  industryMelnitsi: indexable("industryMelnitsi", "industryMelnitsi"),
  industryAgro: indexable("industryAgro", "industryAgro"),
  industryLogistika: indexable("industryLogistika", "industryLogistika"),
  industryProizvodstveniPredpriyatiya: indexable(
    "industryProizvodstveniPredpriyatiya",
    "industryProizvodstveniPredpriyatiya"
  ),
  contact: indexable("contact", "contact"),
  privacyPolicy: indexable("privacyPolicy", "privacyPolicy"),
  cookiePolicy: indexable("cookiePolicy", "cookiePolicy"),
  termsOfUse: indexable("termsOfUse", "termsOfUse"),
  notFound: {
    routeKey: "notFound",
    seoKey: "notFound",
    bgPath: bgPath("notFound"),
    isIndexable: false,
    isPrerenderEligible: true,
    includeInSitemap: false,
    note: "Current /404 output is prerendered, noindexed, and excluded from sitemap.",
  },
} as const satisfies SeoBridgeMap;

const seoBridgeEntries = Object.entries(seoBridge) as Array<[RouteKey, SeoBridgeDefinition]>;

export const getSeoBridgeEntry = (routeKey: RouteKey): SeoBridgeDefinition => seoBridge[routeKey];

export const getSeoKeyForRouteKey = (routeKey: RouteKey): SeoPageKey => seoBridge[routeKey].seoKey;

export const getRouteKeyForSeoKey = (seoKey: SeoPageKey): RouteKey | null => {
  const match = seoBridgeEntries.find(([, definition]) => definition.seoKey === seoKey);
  return match?.[0] ?? null;
};

export const getBgSeoPathForRouteKey = (routeKey: RouteKey): string => seoBridge[routeKey].bgPath;

export const isRouteSeoIndexable = (routeKey: RouteKey): boolean => seoBridge[routeKey].isIndexable;

export const isRoutePrerenderEligible = (routeKey: RouteKey): boolean =>
  seoBridge[routeKey].isPrerenderEligible;

export const isRouteIncludedInSitemap = (routeKey: RouteKey): boolean => seoBridge[routeKey].includeInSitemap;

export const getPrerenderEligibleRouteKeys = (): RouteKey[] =>
  seoBridgeEntries.filter(([, definition]) => definition.isPrerenderEligible).map(([routeKey]) => routeKey);

export const getSitemapEligibleRouteKeys = (): RouteKey[] =>
  seoBridgeEntries.filter(([, definition]) => definition.includeInSitemap).map(([routeKey]) => routeKey);
