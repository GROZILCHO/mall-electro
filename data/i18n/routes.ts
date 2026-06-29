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
  // Future inactive route data only. EN detail slugs are planned architecture placeholders, not approved published copy.
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
    solutionHeightInstallation: planned("/en/solutions/electrical-installation-at-height"),
    solutionPanelAutomationLine: planned("/en/solutions/panels-and-automation-for-production-lines"),
    about: planned("/en/about"),
    industries: planned("/en/industries"),
    industryHvp: planned("/en/industries/food-processing-industry"),
    industryZarnoprerabotka: planned("/en/industries/grain-processing"),
    industryMelnitsi: planned("/en/industries/mills"),
    industryAgro: planned("/en/industries/agro"),
    industryLogistika: planned("/en/industries/logistics"),
    industryProizvodstveniPredpriyatiya: planned("/en/industries/manufacturing-facilities"),
    contact: planned("/en/contact"),
    privacyPolicy: planned("/en/privacy-policy"),
    cookiePolicy: planned("/en/cookie-policy"),
    termsOfUse: planned("/en/terms-of-use"),
    notFound: planned("/en/404"),
  },
  // Future inactive route data only. RO detail slugs are planned architecture placeholders, not approved published copy.
  ro: {
    home: planned("/ro/"),
    services: planned("/ro/servicii"),
    serviceElectricPanels: planned("/ro/servicii/tablouri-electrice"),
    serviceCableRoutes: planned("/ro/servicii/trasee-de-cabluri"),
    serviceIndustrialElectricalInstallations: planned("/ro/servicii/instalatii-electrice-industriale"),
    serviceAutomation: planned("/ro/servicii/automatizare"),
    serviceLowVoltage: planned("/ro/servicii/sisteme-de-joasa-tensiune"),
    serviceMaintenance: planned("/ro/servicii/mentenanta-si-service"),
    solutions: planned("/ro/solutii"),
    solutionNewProductionSite: planned("/ro/solutii/unitate-noua-de-productie"),
    solutionModernization: planned("/ro/solutii/modernizare-sistem-electric"),
    solutionCableInfrastructureBase: planned("/ro/solutii/infrastructura-de-cabluri-pentru-baza"),
    solutionServiceExpansion: planned("/ro/solutii/service-si-extindere"),
    solutionHeightInstallation: planned("/ro/solutii/instalatii-electrice-la-inaltime"),
    solutionPanelAutomationLine: planned("/ro/solutii/tablouri-si-automatizare-pentru-linii-tehnologice"),
    about: planned("/ro/despre-noi"),
    industries: planned("/ro/industrii"),
    industryHvp: planned("/ro/industrii/industria-alimentara"),
    industryZarnoprerabotka: planned("/ro/industrii/procesarea-cerealelor"),
    industryMelnitsi: planned("/ro/industrii/mori"),
    industryAgro: planned("/ro/industrii/agro"),
    industryLogistika: planned("/ro/industrii/logistica"),
    industryProizvodstveniPredpriyatiya: planned("/ro/industrii/unitati-de-productie"),
    contact: planned("/ro/contact"),
    privacyPolicy: planned("/ro/politica-de-confidentialitate"),
    cookiePolicy: planned("/ro/politica-cookie"),
    termsOfUse: planned("/ro/termeni-de-utilizare"),
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
