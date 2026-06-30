import type { RouteKey, SupportedLocale } from "../types";

export type ContentNamespace = "common" | "navigation" | "footer" | "forms" | "pages";

export type ContentKey =
  | "common"
  | "navigation"
  | "footer"
  | "forms"
  | "home"
  | "servicesOverview"
  | "serviceElectricPanels"
  | "serviceCableRoutes"
  | "serviceIndustrialElectricalInstallations"
  | "serviceAutomation"
  | "serviceLowVoltage"
  | "serviceMaintenance"
  | "solutionsOverview"
  | "solutionNewProductionSite"
  | "solutionModernization"
  | "solutionCableInfrastructureBase"
  | "solutionServiceExpansion"
  | "solutionHeightInstallation"
  | "solutionPanelAutomationLine"
  | "about"
  | "industriesOverview"
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

export interface CommonContent {
  brandName: string;
  cta: {
    sendInquiry: string;
    speakWithEngineer: string;
    viewServices: string;
    viewIndustries: string;
    viewSolutions: string;
  };
}

export interface NavigationContent {
  aria: {
    openMenu: string;
  };
  labels: Partial<Record<RouteKey, string>>;
  groupOverviewLabels: Partial<Record<RouteKey, string>>;
  groups: {
    main: readonly RouteKey[];
    services: readonly RouteKey[];
    solutions: readonly RouteKey[];
    industries: readonly RouteKey[];
  };
}

export interface FooterContent {
  brand: {
    name: string;
    description: string;
    copyright: string;
    rightsReserved: string;
  };
  sections: {
    menu: string;
    services: string;
    contact: string;
    legal: string;
  };
  menuRouteKeys: readonly RouteKey[];
  serviceRouteKeys: readonly RouteKey[];
  legalRouteKeys: readonly RouteKey[];
  legalLabels: Partial<Record<RouteKey, string>>;
  contact: {
    addressLines: readonly string[];
    legalNavAriaLabel: string;
  };
}

export type ContactProjectTypeKey =
  | "industrialElectricalInstallation"
  | "panelsAndAutomation"
  | "maintenanceAndService"
  | "other";

export interface ContactProjectOption {
  key: ContactProjectTypeKey;
  label: string;
}

export interface ContactFormContent {
  heading: string;
  intro: string;
  labels: {
    name: string;
    phone: string;
    email: string;
    projectType: string;
    message: string;
  };
  placeholders: {
    name: string;
    phone: string;
    email: string;
    projectType: string;
    message: string;
  };
  validation: {
    nameRequired: string;
    phoneRequired: string;
    emailRequired: string;
    emailInvalid: string;
    projectTypeRequired: string;
    messageRequired: string;
  };
  projectOptions: readonly ContactProjectOption[];
  submit: {
    ariaLabel: string;
    label: string;
    helperPrefix: string;
    helperSuffix: string;
    successPrefix: string;
    successSuffix: string;
  };
  mailto: {
    subjectPrefix: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    projectTypeLabel: string;
    messageLabel: string;
  };
  sidebar: {
    heading: string;
    items: readonly {
      title: string;
      text: string;
    }[];
    directContactLabel: string;
    emailPrefix: string;
    emailSuffix: string;
  };
}

export interface FormsContent {
  contact: ContactFormContent;
}

export interface PageHeroContent {
  title: string;
  subtitle: string;
  badgeText: string;
  heroImageAlt: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface PageSectionContent {
  heading: string;
  body?: string;
}

export interface ContactInfoContent {
  label: string;
  value: string;
}

export interface ContactPageContent {
  hero: PageHeroContent;
}

export interface HomeHeroContent extends PageHeroContent {
  highlightedTitle?: string;
  trustLabels?: readonly string[];
}

export interface HomeStatContent {
  value: string;
  label: string;
}

export interface HomeSectionIntroContent extends PageSectionContent {
  eyebrow?: string;
}

export interface HomeCtaContent {
  title: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export interface HomePageContent {
  hero?: HomeHeroContent;
  stats?: readonly HomeStatContent[];
  sectionIntros?: readonly HomeSectionIntroContent[];
  cta?: HomeCtaContent;
}

export interface PagesContent {
  home: HomePageContent;
  contact: ContactPageContent;
}

export interface LocaleContent {
  locale: SupportedLocale;
  common: CommonContent;
  navigation: NavigationContent;
  footer: FooterContent;
  forms: FormsContent;
  pages: PagesContent;
}

export type BgContent = LocaleContent & { locale: "bg" };
