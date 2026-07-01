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

export interface AboutLinkedItemContent {
  title: string;
  text: string;
  href: string;
  icon: string;
}

export interface AboutValuePointContent {
  title: string;
  text: string;
}

export interface AboutTaxonomyLinkContent {
  title: string;
  text: string;
  href: string;
}

export interface AboutPageContent {
  hero: PageHeroContent;
  intro: {
    badge: string;
    heading: string;
    paragraphs: readonly string[];
  };
  services: {
    badge: string;
    heading: string;
    body: string;
    items: readonly AboutLinkedItemContent[];
  };
  process: {
    badge: string;
    heading: string;
    body: string;
    steps: readonly string[];
  };
  industries: {
    badge: string;
    heading: string;
    body: string;
    items: readonly AboutLinkedItemContent[];
  };
  principles: {
    badge: string;
    heading: string;
    body: string;
    items: readonly AboutValuePointContent[];
  };
  taxonomy: {
    badge: string;
    heading: string;
    body: string;
    items: readonly AboutTaxonomyLinkContent[];
  };
}

export interface ServicesOverviewServiceContent {
  title: string;
  description: string;
  icon: string;
  href?: string;
  bullets: readonly string[];
}

export interface ServicesOverviewStepContent {
  title: string;
  text: string;
}

export interface ServicesOverviewPageContent {
  hero: PageHeroContent & {
    primaryCtaHref: string;
    secondaryCtaHref: string;
    overlayProjectLabel: string;
    overlayStatusLabel: string;
  };
  overview: {
    badge: string;
    heading: string;
    body: string;
    steps: readonly ServicesOverviewStepContent[];
  };
  services: {
    badge: string;
    heading: string;
    body: string;
    cardPrefix: string;
    cardCta: string;
    items: readonly ServicesOverviewServiceContent[];
  };
  engineering: {
    badge: string;
    heading: string;
    body: string;
    bullets: readonly string[];
    imageAlt: string;
    imageLabel: string;
    imageStatus: string;
  };
  projectTypes: {
    badge: string;
    heading: string;
    body: string;
    items: readonly string[];
    primaryCta: string;
    secondaryCta: string;
    primaryCtaHref: string;
    secondaryCtaHref: string;
  };
  contactCta: HomeFullContent["contactCta"];
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

export interface HomeValueItemContent {
  id: string;
  title: string;
  subtitle: string;
}

export interface HomeServiceCardContent {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface HomeSolutionCardContent {
  title: string;
  text: string;
  href: string;
  icon: string;
}

export interface HomeMetricContent {
  id: string;
  value: string;
  label: string;
  sub: string;
}

export interface HomeFeatureContent {
  id: number;
  title: string;
  description: string;
}

export interface HomeIndustryCardContent {
  title: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: string;
  bullets: readonly string[];
}

export interface HomeFullContent {
  hero: {
    badge: string;
    title: string;
    highlightedTitle: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    cadLabel: string;
  };
  valueProposition: {
    labelPrefix: string;
    items: readonly HomeValueItemContent[];
  };
  services: {
    badge: string;
    heading: string;
    body: string;
    items: readonly HomeServiceCardContent[];
  };
  solutions: {
    badge: string;
    heading: string;
    body: string;
    allCta: string;
    cardPrefix: string;
    cardCta: string;
    items: readonly HomeSolutionCardContent[];
  };
  about: {
    status: string;
    cadRef: string;
    location: string;
    badge: string;
    heading: string;
    paragraphs: readonly string[];
    advantages: readonly string[];
    signature: string;
  };
  kpi: {
    heading: string;
    labelPrefix: string;
    metrics: readonly HomeMetricContent[];
  };
  whyChooseUs: {
    badge: string;
    heading: string;
    subheading: string;
    body: string;
    cta: string;
    features: readonly HomeFeatureContent[];
  };
  panelEngineering: {
    eyebrow: string;
    heading: string;
    body: string;
    bullets: readonly string[];
    cta: string;
    imageAlt: string;
    status: string;
  };
  industries: {
    heading: string;
    body: string;
    cardCta: string;
    items: readonly HomeIndustryCardContent[];
  };
  logoStrip: {
    heading: string;
    partners: readonly string[];
  };
  process: {
    heading: string;
    body: string;
    steps: readonly {
      id: number;
      title: string;
      description: string;
    }[];
  };
  contactCta: {
    imageAlt: string;
    projectLabel: string;
    readyLabel: string;
    badge: string;
    heading: string;
    highlightedHeading: string;
    body: string;
    strongBody: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface HomePageContent {
  full?: HomeFullContent;
  hero?: HomeHeroContent;
  stats?: readonly HomeStatContent[];
  sectionIntros?: readonly HomeSectionIntroContent[];
  cta?: HomeCtaContent;
}

export interface PagesContent {
  home: HomePageContent;
  about?: AboutPageContent;
  servicesOverview?: ServicesOverviewPageContent;
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
export type EnContent = LocaleContent & { locale: "en" };
