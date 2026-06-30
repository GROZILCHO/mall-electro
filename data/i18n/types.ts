import type { SeoPageKey } from "../../seo/seoConfig";

export type SupportedLocale = "bg" | "en" | "ro";

export type RouteKey =
  | "home"
  | "services"
  | "serviceElectricPanels"
  | "serviceCableRoutes"
  | "serviceIndustrialElectricalInstallations"
  | "serviceAutomation"
  | "serviceLowVoltage"
  | "serviceMaintenance"
  | "solutions"
  | "solutionNewProductionSite"
  | "solutionModernization"
  | "solutionCableInfrastructureBase"
  | "solutionServiceExpansion"
  | "solutionHeightInstallation"
  | "solutionPanelAutomationLine"
  | "about"
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

export type RuntimePageKey =
  | "home"
  | "about"
  | "services"
  | "solutions"
  | "panelAutomationLineSolution"
  | "newProductionSiteSolution"
  | "electricalSystemModernizationSolution"
  | "cableInfrastructureBaseSolution"
  | "serviceExpansionSolution"
  | "heightInstallationSolution"
  | "electricPanels"
  | "cableRoutes"
  | "industrialElectricalInstallations"
  | "automation"
  | "lowVoltage"
  | "maintenanceService"
  | "industries"
  | "hvpIndustry"
  | "zarnoprerabotkaIndustry"
  | "melnitsiIndustry"
  | "agroIndustry"
  | "logistikaIndustry"
  | "proizvodstveniPredpriyatiyaIndustry"
  | "contact"
  | "privacyPolicy"
  | "cookiePolicy"
  | "termsOfUse"
  | "notFound";

export type RouteGroup = "core" | "service" | "solution" | "industry" | "legal" | "system";

export type LocaleRouteStatus = "active" | "planned";

export interface LocaleDefinition {
  code: SupportedLocale;
  label: string;
  nativeLabel: string;
  isDefault: boolean;
  isPublic: boolean;
}

export interface LocalizedRouteDefinition {
  path: string;
  status: LocaleRouteStatus;
}

export type LocaleRouteMap = Record<RouteKey, LocalizedRouteDefinition>;

export type LocalizedRoutes = Record<SupportedLocale, LocaleRouteMap>;

export interface RouteBridgeDefinition {
  routeKey: RouteKey;
  pageKey: RuntimePageKey;
  group: RouteGroup;
}

export type RouteBridgeMap = Record<RouteKey, RouteBridgeDefinition>;

export interface RouteLocaleBridgeStatus {
  routeKey: RouteKey;
  locale: SupportedLocale;
  status: LocaleRouteStatus;
  isActive: boolean;
  isLocalePublic: boolean;
  isPublicActive: boolean;
}

export interface SeoBridgeDefinition {
  routeKey: RouteKey;
  seoKey: SeoPageKey;
  bgPath: string;
  isIndexable: boolean;
  isPrerenderEligible: boolean;
  includeInSitemap: boolean;
  note?: string;
}

export type SeoBridgeMap = Record<RouteKey, SeoBridgeDefinition>;
