import React from "react";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/shared/ContactForm";
import SEO from "../components/seo/SEO";
import { pagesContent } from "../data/i18n/content";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

const contactPageContent = pagesContent.contact;

const Contact: React.FC = () => {
  return (
    <div>
      <SEO page="contact" />
      <PageHero
        title={contactPageContent.hero.title}
        subtitle={contactPageContent.hero.subtitle}
        theme="light"
        badgeText={contactPageContent.hero.badgeText}
        badgeVariant="accent"
        heroImage="/images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png"
        heroImageAlt={contactPageContent.hero.heroImageAlt}
        primaryCtaText={contactPageContent.hero.primaryCtaText}
        primaryCtaHref="/bg/industrii"
        secondaryCtaText={contactPageContent.hero.secondaryCtaText}
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
      />

      <ContactForm />
    </div>
  );
};

export default Contact;
