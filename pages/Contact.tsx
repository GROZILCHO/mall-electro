import React from "react";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/shared/ContactForm";
import SEO from "../components/seo/SEO";
import { enContent, pagesContent } from "../data/i18n/content";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

interface ContactProps {
  locale?: "bg" | "en";
}

const Contact: React.FC<ContactProps> = ({ locale = "bg" }) => {
  const isEnglish = locale === "en";
  const contactPageContent = isEnglish ? enContent.pages.contact : pagesContent.contact;
  const contactFormContent = isEnglish ? enContent.forms.contact : undefined;

  return (
    <div>
      <SEO page={isEnglish ? "enContact" : "contact"} />
      <PageHero
        title={contactPageContent.hero.title}
        subtitle={contactPageContent.hero.subtitle}
        theme="light"
        badgeText={contactPageContent.hero.badgeText}
        badgeVariant="accent"
        heroImage="/images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png"
        heroImageAlt={contactPageContent.hero.heroImageAlt}
        primaryCtaText={contactPageContent.hero.primaryCtaText}
        primaryCtaHref={isEnglish ? "/en/industries" : "/bg/industrii"}
        secondaryCtaText={contactPageContent.hero.secondaryCtaText}
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
        overlayProjectLabel={isEnglish ? "PROJECT: #8842" : undefined}
        overlayStatusLabel={isEnglish ? "SITE INSPECTION" : undefined}
      />

      <ContactForm content={contactFormContent} />
    </div>
  );
};

export default Contact;
