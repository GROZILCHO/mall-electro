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
import type { ContactFormContent, HomeFullContent } from "../../data/i18n/content";

interface HomePageProps {
  content?: HomeFullContent;
  contactFormContent?: ContactFormContent;
}

export default function HomePage({ content, contactFormContent }: HomePageProps) {
  return (
    <>
      <Hero content={content?.hero} />
      <ValueProposition content={content?.valueProposition} />
      <Services content={content?.services} />
      <SolutionsTeaser content={content?.solutions} />
      <About content={content?.about} />
      <KPI content={content?.kpi} />
      <WhyChooseUs content={content?.whyChooseUs} />
      <PanelEngineering content={content?.panelEngineering} />
      <IndustriesPremium content={content?.industries} />
      <LogoStrip content={content?.logoStrip} />
      <Process content={content?.process} />
      <ContactForm content={contactFormContent} />
      <ContactCTA content={content?.contactCta} />
    </>
  );
}
