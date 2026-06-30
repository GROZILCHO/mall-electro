import { getLocalizedPath } from "./routes";
import { getPageKeyForRouteKey, isRoutePublicForLocale } from "./routeBridge";
import type { RouteKey, RuntimePageKey } from "./types";

const BG_LOCALE = "bg";

const bgRuntimeRouteKeys = [
  "home",
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
  "about",
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
] as const satisfies readonly RouteKey[];

const bgSsrOnlyRouteKeys = ["notFound"] as const satisfies readonly RouteKey[];

const normalizeRuntimePath = (path: string): string => (path.length > 1 ? path.replace(/\/$/, "") : path);

const toRuntimeRoute = (routeKey: RouteKey) => ({
  routeKey,
  path: normalizeRuntimePath(getLocalizedPath(routeKey, BG_LOCALE)),
  pageKey: getPageKeyForRouteKey(routeKey),
});

export const bgRuntimeRoutes = bgRuntimeRouteKeys
  .filter((routeKey) => isRoutePublicForLocale(routeKey, BG_LOCALE))
  .map(toRuntimeRoute);

const bgRoutePageKeyEntries = [...bgRuntimeRouteKeys, ...bgSsrOnlyRouteKeys]
  .filter((routeKey) => isRoutePublicForLocale(routeKey, BG_LOCALE))
  .flatMap((routeKey): Array<[string, RuntimePageKey]> => {
    const localizedPath = getLocalizedPath(routeKey, BG_LOCALE);
    const normalizedPath = normalizeRuntimePath(localizedPath);
    const pageKey = getPageKeyForRouteKey(routeKey);

    return localizedPath === normalizedPath
      ? [[normalizedPath, pageKey]]
      : [
          [normalizedPath, pageKey],
          [localizedPath, pageKey],
        ];
  });

export const bgRoutePageKeys = Object.fromEntries(bgRoutePageKeyEntries) as Record<string, RuntimePageKey>;
