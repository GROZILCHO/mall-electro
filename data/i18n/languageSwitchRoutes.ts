import { getRouteKeyAndLocaleByPath } from "./routeBridge";
import { getLocalizedPath } from "./routes";
import type { RouteKey, SupportedLocale } from "./types";

type LocaleCode = SupportedLocale;

export interface LanguageSwitchOption {
  locale: LocaleCode;
  label: string;
  href: string;
  isActive: boolean;
}

export const languageSwitchRouteKeys = [
  "home", "services", "solutions", "industries", "about", "contact",
  "serviceElectricPanels", "serviceCableRoutes", "serviceIndustrialElectricalInstallations",
  "serviceAutomation", "serviceLowVoltage", "serviceMaintenance",
  "solutionNewProductionSite", "solutionModernization", "solutionPanelAutomationLine",
  "solutionCableInfrastructureBase", "solutionServiceExpansion", "solutionHeightInstallation",
  "industryAgro", "industryHvp", "industryZarnoprerabotka", "industryMelnitsi",
  "industryLogistika", "industryProizvodstveniPredpriyatiya",
  "privacyPolicy", "cookiePolicy", "termsOfUse",
] as const satisfies readonly RouteKey[];

const switchableRouteKeys = new Set<RouteKey>(languageSwitchRouteKeys);
const localeOrder = ["bg", "en", "ro"] as const satisfies readonly LocaleCode[];
const localeLabels = { bg: "BG", en: "EN", ro: "RO" } as const satisfies Record<LocaleCode, string>;

export const bgEnRoutePairs: ReadonlyArray<readonly [string, string]> = languageSwitchRouteKeys.map(
  (routeKey) => [getLocalizedPath(routeKey, "bg"), getLocalizedPath(routeKey, "en")] as const
);

export const getLanguageSwitchOptions = (path: string): readonly LanguageSwitchOption[] => {
  const routeMatch = getRouteKeyAndLocaleByPath(path);

  if (!routeMatch || !switchableRouteKeys.has(routeMatch.routeKey)) {
    return [];
  }

  return localeOrder.map((locale) => ({
    locale,
    label: localeLabels[locale],
    href: getLocalizedPath(routeMatch.routeKey, locale),
    isActive: locale === routeMatch.locale,
  }));
};
