import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import Services from "../components/home/Services";
import SolutionsTeaser from "../components/home/SolutionsTeaser";
import About from "../components/about/About";
import KPI from "../components/home/KPI";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PanelEngineering from "../components/home/PanelEngineering";
import IndustriesPremium from "../components/industries/IndustriesPremium";
import LogoStrip from "../components/shared/LogoStrip";
import Testimonials from "../components/shared/Testimonials";
import Process from "../components/shared/Process";
import ContactForm from "../components/shared/ContactForm";
import ContactCTA from "../components/shared/ContactCTA";
import SEO from "../components/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO page="home" />
      <Hero />
      <ValueProposition />
      <Services />
      <SolutionsTeaser />
      <About />
      <KPI />
      <WhyChooseUs />
      <PanelEngineering />
      <IndustriesPremium />
      <LogoStrip />
      <Process />
      <ContactForm />
      <ContactCTA />
    </>
  );
}
