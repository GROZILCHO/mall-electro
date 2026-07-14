import About from "../about/About";
import IndustriesPremium from "../industries/IndustriesPremium";
import ContactCTA from "../shared/ContactCTA";
import ContactForm from "../shared/ContactForm";
import LogoStrip from "../shared/LogoStrip";
import Process from "../shared/Process";
import Hero from "./Hero";
import KPI from "./KPI";
import PanelEngineering from "./PanelEngineering";
import Services from "./Services";
import SolutionsTeaser from "./SolutionsTeaser";
import ValueProposition from "./ValueProposition";
import WhyChooseUs from "./WhyChooseUs";
import type { ContactFormContent, HomeFullContent, Locale } from "../../data/i18n/content";
import { getLocalizedPath } from "../../data/i18n/routes";

interface HomePageProps {
  locale?: Locale;
  content?: HomeFullContent;
  contactFormContent?: ContactFormContent;
}

export default function HomePage({ locale = "bg", content, contactFormContent }: HomePageProps) {
  const isLocalized = locale !== "bg";

  return (
    <>
      <Hero content={content?.hero} primaryCtaHref={isLocalized ? getLocalizedPath("services", locale) : undefined} />
      <ValueProposition content={content?.valueProposition} />
      <Services content={content?.services} />
      <SolutionsTeaser content={content?.solutions} allCtaHref={isLocalized ? getLocalizedPath("solutions", locale) : undefined} />
      <About content={content?.about} />
      <KPI content={content?.kpi} />
      <WhyChooseUs content={content?.whyChooseUs} ctaHref={isLocalized ? getLocalizedPath("contact", locale) : undefined} />
      <PanelEngineering
        content={content?.panelEngineering}
        ctaHref={isLocalized ? getLocalizedPath("serviceElectricPanels", locale) : undefined}
      />
      <IndustriesPremium content={content?.industries} />
      <LogoStrip content={content?.logoStrip} />
      <Process content={content?.process} />
      <ContactForm content={contactFormContent} />
      <ContactCTA content={content?.contactCta} primaryCtaHref={isLocalized ? getLocalizedPath("contact", locale) : undefined} />
    </>
  );
}
