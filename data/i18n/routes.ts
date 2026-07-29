import { DEFAULT_LOCALE, isSupportedLocale, normalizeLocale } from "./locales";
import type { LocaleRouteMap, LocalizedRouteDefinition, LocalizedRoutes, RouteKey, SupportedLocale } from "./types";

const active = (path: string): LocalizedRouteDefinition => ({ path, status: "active" });
const planned = (path: string): LocalizedRouteDefinition => ({ path, status: "planned" });

export const localizedRoutes = {
  bg: {
    home: active("/bg/"),
    services: active("/bg/uslugi"),
    serviceElectricPanels: active("/bg/uslugi/elektricheski-tabla"),
    serviceCableRoutes: active("/bg/uslugi/kabelni-traseta"),
    serviceIndustrialElectricalInstallations: active("/bg/uslugi/industrialni-elektroinstalatsii"),
    serviceAutomation: active("/bg/uslugi/avtomatizatsia"),
    serviceLowVoltage: active("/bg/uslugi/nisko-naprezhenie"),
    serviceMaintenance: active("/bg/uslugi/poddrazhka-i-serviz"),
    solutions: active("/bg/reshenia"),
    solutionNewProductionSite: active("/bg/reshenia/nov-proizvodstven-obekt"),
    solutionModernization: active("/bg/reshenia/modernizatsia-na-elektro-sistema"),
    solutionCableInfrastructureBase: active("/bg/reshenia/kabelna-infrastruktura-za-baza"),
    solutionServiceExpansion: active("/bg/reshenia/serviz-i-razshiryavane"),
    solutionHeightInstallation: active("/bg/reshenia/elektromontazh-na-visochina-s-vishka"),
    solutionPanelAutomationLine: active("/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii"),
    about: active("/bg/za-nas"),
    industries: active("/bg/industrii"),
    industryHvp: active("/bg/industrii/hvp"),
    industryZarnoprerabotka: active("/bg/industrii/zarnoprerabotka"),
    industryMelnitsi: active("/bg/industrii/melnitsi"),
    industryAgro: active("/bg/industrii/agro"),
    industryLogistika: active("/bg/industrii/logistika"),
    industryProizvodstveniPredpriyatiya: active("/bg/industrii/proizvodstveni-predpriyatiya"),
    contact: active("/bg/kontakti"),
    privacyPolicy: active("/bg/politika-za-poveritelnost"),
    cookiePolicy: active("/bg/politika-za-biskvitki"),
    termsOfUse: active("/bg/usloviya-za-polzvane"),
    notFound: active("/404"),
  },
  // EN public and legal routes are active; the system route remains blocked.
  en: {
    home: planned("/en/"),
    services: planned("/en/services"),
    serviceElectricPanels: planned("/en/services/electrical-panels"),
    serviceCableRoutes: planned("/en/services/cable-routes"),
    serviceIndustrialElectricalInstallations: planned("/en/services/industrial-electrical-installations"),
    serviceAutomation: planned("/en/services/automation"),
    serviceLowVoltage: planned("/en/services/low-voltage-systems"),
    serviceMaintenance: planned("/en/services/maintenance-and-service"),
    solutions: planned("/en/solutions"),
    solutionNewProductionSite: planned("/en/solutions/new-production-site"),
    solutionModernization: planned("/en/solutions/electrical-system-modernization"),
    solutionCableInfrastructureBase: planned("/en/solutions/cable-infrastructure-for-base"),
    solutionServiceExpansion: planned("/en/solutions/service-and-expansion"),
    solutionHeightInstallation: planned("/en/solutions/high-access-installation"),
    solutionPanelAutomationLine: planned("/en/solutions/panels-and-automation-for-production-lines"),
    about: planned("/en/about"),
    industries: planned("/en/industries"),
    industryHvp: planned("/en/industries/food-industry"),
    industryZarnoprerabotka: planned("/en/industries/grain-processing"),
    industryMelnitsi: planned("/en/industries/mills"),
    industryAgro: planned("/en/industries/agriculture"),
    industryLogistika: planned("/en/industries/logistics"),
    industryProizvodstveniPredpriyatiya: planned("/en/industries/manufacturing-companies"),
    contact: planned("/en/contact"),
    privacyPolicy: active("/en/privacy-policy"),
    cookiePolicy: active("/en/cookie-policy"),
    termsOfUse: active("/en/terms-of-use"),
    notFound: planned("/en/404"),
  },
  // Approved RO public and legal routes are active; the system route remains blocked.
  ro: {
    home: active("/ro/"),
    services: active("/ro/servicii"),
    serviceElectricPanels: active("/ro/servicii/tablouri-electrice"),
    serviceCableRoutes: active("/ro/servicii/trasee-de-cabluri"),
    serviceIndustrialElectricalInstallations: active("/ro/servicii/instalatii-electrice-industriale"),
    serviceAutomation: active("/ro/servicii/automatizare"),
    serviceLowVoltage: active("/ro/servicii/sisteme-de-joasa-tensiune"),
    serviceMaintenance: active("/ro/servicii/mentenanta-si-service"),
    solutions: active("/ro/solutii"),
    solutionNewProductionSite: active("/ro/solutii/unitate-noua-de-productie"),
    solutionModernization: active("/ro/solutii/modernizare-sistem-electric"),
    solutionCableInfrastructureBase: active("/ro/solutii/infrastructura-de-cabluri-pentru-baza"),
    solutionServiceExpansion: active("/ro/solutii/service-si-extindere"),
    solutionHeightInstallation: active("/ro/solutii/instalatii-electrice-la-inaltime"),
    solutionPanelAutomationLine: active("/ro/solutii/tablouri-si-automatizare-pentru-linii-tehnologice"),
    about: active("/ro/despre-noi"),
    industries: active("/ro/industrii"),
    industryHvp: active("/ro/industrii/industria-alimentara"),
    industryZarnoprerabotka: active("/ro/industrii/procesarea-cerealelor"),
    industryMelnitsi: active("/ro/industrii/mori"),
    industryAgro: active("/ro/industrii/agro"),
    industryLogistika: active("/ro/industrii/logistica"),
    industryProizvodstveniPredpriyatiya: active("/ro/industrii/unitati-de-productie"),
    contact: active("/ro/contact"),
    privacyPolicy: active("/ro/politica-de-confidentialitate"),
    cookiePolicy: active("/ro/politica-cookie"),
    termsOfUse: active("/ro/termeni-de-utilizare"),
    notFound: planned("/ro/404"),
  },
} as const satisfies LocalizedRoutes;

export const getRouteDefinition = (
  routeKey: RouteKey,
  locale: SupportedLocale = DEFAULT_LOCALE
): LocalizedRouteDefinition => localizedRoutes[locale][routeKey];

export const getLocalizedPath = (
  routeKey: RouteKey,
  locale: SupportedLocale = DEFAULT_LOCALE
): string => getRouteDefinition(routeKey, locale).path;

export const getLocaleRouteMap = (locale: string | null | undefined): LocaleRouteMap =>
  localizedRoutes[normalizeLocale(locale)];

export const getRouteKeyByPath = (
  path: string,
  locale?: SupportedLocale
): RouteKey | null => {
  const normalizedPath = path.length > 1 ? path.replace(/\/$/, "") : path;
  const localesToSearch = locale ? [locale] : Object.keys(localizedRoutes).filter(isSupportedLocale);

  for (const localeKey of localesToSearch) {
    const routeEntries = Object.entries(localizedRoutes[localeKey]) as Array<
      [RouteKey, LocalizedRouteDefinition]
    >;

    const match = routeEntries.find(([, route]) => {
      const routePath = route.path.length > 1 ? route.path.replace(/\/$/, "") : route.path;
      return routePath === normalizedPath;
    });

    if (match) {
      return match[0];
    }
  }

  return null;
};
