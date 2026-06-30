import { isRoutePublicForLocale } from "./routeBridge";
import { getBgSeoPathForRouteKey as getBridgeBgSeoPathForRouteKey, getSeoBridgeEntry } from "./seoBridge";
import type { RouteKey } from "./types";
import type { SeoPageKey } from "../../seo/seoConfig";

const BG_LOCALE = "bg";

const bgSeoRouteKeys = [
  "home",
  "about",
  "services",
  "solutions",
  "solutionNewProductionSite",
  "solutionModernization",
  "solutionCableInfrastructureBase",
  "solutionServiceExpansion",
  "solutionHeightInstallation",
  "solutionPanelAutomationLine",
  "serviceElectricPanels",
  "serviceCableRoutes",
  "serviceIndustrialElectricalInstallations",
  "serviceAutomation",
  "serviceLowVoltage",
  "serviceMaintenance",
  "industries",
  "industryHvp",
  "industryZarnoprerabotka",
  "industryMelnitsi",
  "industryAgro",
  "industryLogistika",
  "industryProizvodstveniPredpriyatiya",
  "contact",
  "privacyPolicy",
  "cookiePolicy",
  "termsOfUse",
  "notFound",
] as const satisfies readonly RouteKey[];

export interface BgSeoRouteRegistryEntry {
  routeKey: RouteKey;
  seoKey: SeoPageKey;
  path: string;
  isIndexable: boolean;
  isPrerenderEligible: boolean;
  includeInSitemap: boolean;
}

const toBgSeoRouteRegistryEntry = (routeKey: RouteKey): BgSeoRouteRegistryEntry => {
  const bridgeEntry = getSeoBridgeEntry(routeKey);

  return {
    routeKey,
    seoKey: bridgeEntry.seoKey,
    path: getBridgeBgSeoPathForRouteKey(routeKey),
    isIndexable: bridgeEntry.isIndexable,
    isPrerenderEligible: bridgeEntry.isPrerenderEligible,
    includeInSitemap: bridgeEntry.includeInSitemap,
  };
};

export const bgSeoRouteRegistry = bgSeoRouteKeys
  .filter((routeKey) => isRoutePublicForLocale(routeKey, BG_LOCALE))
  .map(toBgSeoRouteRegistryEntry);

export const getBgSeoRouteRegistry = (): readonly BgSeoRouteRegistryEntry[] => bgSeoRouteRegistry;

export const getBgSeoRouteEntry = (routeKey: RouteKey): BgSeoRouteRegistryEntry => {
  const match = bgSeoRouteRegistry.find((entry) => entry.routeKey === routeKey);

  if (!match) {
    throw new Error(`Missing BG SEO route registry entry for "${routeKey}"`);
  }

  return match;
};

export const getBgSeoPathForRouteKey = (routeKey: RouteKey): string => getBgSeoRouteEntry(routeKey).path;

export const getPrerenderEligibleBgSeoRoutes = (): readonly BgSeoRouteRegistryEntry[] =>
  bgSeoRouteRegistry.filter((entry) => entry.isPrerenderEligible);

export const getSitemapEligibleBgSeoRoutes = (): readonly BgSeoRouteRegistryEntry[] =>
  bgSeoRouteRegistry.filter((entry) => entry.includeInSitemap);

export const isBgSeoRoutePrerenderEligible = (routeKey: RouteKey): boolean =>
  getBgSeoRouteEntry(routeKey).isPrerenderEligible;

export const isBgSeoRouteSitemapEligible = (routeKey: RouteKey): boolean =>
  getBgSeoRouteEntry(routeKey).includeInSitemap;

export const isBgSeoRouteIndexable = (routeKey: RouteKey): boolean =>
  getBgSeoRouteEntry(routeKey).isIndexable;
