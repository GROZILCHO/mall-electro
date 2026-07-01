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
  | "serviceDetails"
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

export interface ServiceDetailHeroContent {
  badgeText: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryCtaIcon?: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryCtaIcon?: string;
  overlayProjectLabel?: string;
  overlayStatusLabel?: string;
}

export interface ServiceDetailOverviewContent {
  badge: string;
  title: string;
  text: string;
  items: readonly string[];
}

export interface ServiceDetailSuitabilityContent {
  badge: string;
  title: string;
  items: readonly string[];
}

export interface ServiceDetailProcessStepContent {
  title: string;
  text: string;
}

export interface ServiceDetailProcessContent {
  badge: string;
  title: string;
  steps: readonly ServiceDetailProcessStepContent[];
  image: string;
  imageAlt: string;
  imageKicker: string;
  imageTitle: string;
}

export interface ServiceDetailFaqItemContent {
  question: string;
  answer: string;
}

export interface ServiceDetailRelatedItemContent {
  title: string;
  text: string;
  href?: string;
}

export interface ServiceDetailRelatedContent {
  badge: string;
  title: string;
  text: string;
  items: readonly ServiceDetailRelatedItemContent[];
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryCtaIcon?: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryCtaIcon?: string;
  secondaryCtaVariant?: string;
}

export interface ServiceDetailPageContent {
  seoPage: string;
  hero: ServiceDetailHeroContent;
  overview: ServiceDetailOverviewContent;
  suitability: ServiceDetailSuitabilityContent;
  process: ServiceDetailProcessContent;
  faq: {
    title: string;
    intro: string;
    items: readonly ServiceDetailFaqItemContent[];
  };
  related: ServiceDetailRelatedContent;
  contactCta: HomeFullContent["contactCta"];
}

export interface ServiceDetailsContent {
  electricPanels: ServiceDetailPageContent;
  cableRoutes: ServiceDetailPageContent;
  industrialElectricalInstallations: ServiceDetailPageContent;
  automation: ServiceDetailPageContent;
  lowVoltage: ServiceDetailPageContent;
  maintenanceService: ServiceDetailPageContent;
}

export interface SolutionsOverviewCardContent {
  title: string;
  text: string;
}

export interface SolutionsOverviewLinkedItemContent {
  title: string;
  text: string;
  href: string;
  icon: string;
}

export interface SolutionsOverviewScenarioContent {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface SolutionsOverviewPageContent {
  hero: PageHeroContent & {
    primaryCtaHref: string;
    secondaryCtaHref: string;
    overlayProjectLabel: string;
    overlayStatusLabel: string;
  };
  scope: {
    badge: string;
    heading: string;
    body: string;
    cards: readonly SolutionsOverviewCardContent[];
  };
  scenarios: {
    badge: string;
    heading: string;
    body: string;
    cardPrefix: string;
    cardCta: string;
    items: readonly SolutionsOverviewScenarioContent[];
  };
  services: {
    badge: string;
    heading: string;
    body: string;
    items: readonly SolutionsOverviewLinkedItemContent[];
  };
  industries: {
    badge: string;
    heading: string;
    body: string;
    items: readonly SolutionsOverviewLinkedItemContent[];
    cta: string;
    ctaHref: string;
  };
  process: {
    badge: string;
    heading: string;
    body: string;
    steps: readonly string[];
  };
  contactCta: HomeFullContent["contactCta"];
}

export interface IndustriesHeroContent extends PageHeroContent {
  subtitleParagraphs: readonly string[];
  primaryCtaHref: string;
  secondaryCtaHref: string;
  overlayProjectLabel: string;
  overlayStatusLabel: string;
}

export interface IndustryOverviewFeatureContent {
  label: string;
  desc: string;
  icon: string;
}

export interface IndustryOverviewContent {
  badge: string;
  heading: string;
  subtitle: string;
  imageAlt: string;
  paragraphs: readonly string[];
  features: readonly IndustryOverviewFeatureContent[];
  cta: string;
  ctaHref: string;
}

export interface IndustriesQuickNavLinkContent {
  href: string;
  label: string;
  icon: string;
}

export interface IndustriesQuickNavContent {
  badge: string;
  links: readonly IndustriesQuickNavLinkContent[];
}

export interface IndustriesCaseStripItemContent {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface IndustriesCasesStripContent {
  heading: string;
  body: string;
  items: readonly IndustriesCaseStripItemContent[];
}

export interface IndustriesOverviewPageContent {
  hero: IndustriesHeroContent;
  quickNav: IndustriesQuickNavContent;
  overview: IndustryOverviewContent;
  premium: HomeFullContent["industries"];
  cases: IndustriesCasesStripContent;
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
  serviceDetails?: ServiceDetailsContent;
  solutionsOverview?: SolutionsOverviewPageContent;
  industriesOverview?: IndustriesOverviewPageContent;
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
