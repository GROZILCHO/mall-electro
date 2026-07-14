import React from "react";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/shared/ContactForm";
import SEO from "../components/seo/SEO";
import { enContent, pagesContent, roContent } from "../data/i18n/content";
import type { Locale } from "../data/i18n/content";
import { getLocalizedPath } from "../data/i18n/routes";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

interface ContactProps {
  locale?: Locale;
}

const Contact: React.FC<ContactProps> = ({ locale = "bg" }) => {
  const isEnglish = locale === "en";
  const localizedContent = locale === "ro" ? roContent : enContent;
  const contactPageContent = locale === "bg" ? pagesContent.contact : localizedContent.pages.contact;
  const contactFormContent = locale === "bg" ? undefined : localizedContent.forms.contact;

  return (
    <div>
      <SEO page={locale === "ro" ? "roContact" : isEnglish ? "enContact" : "contact"} />
      <PageHero
        title={contactPageContent.hero.title}
        subtitle={contactPageContent.hero.subtitle}
        theme="light"
        badgeText={contactPageContent.hero.badgeText}
        badgeVariant="accent"
        heroImage="/images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png"
        heroImageAlt={contactPageContent.hero.heroImageAlt}
        primaryCtaText={contactPageContent.hero.primaryCtaText}
        primaryCtaHref={getLocalizedPath("industries", locale)}
        secondaryCtaText={contactPageContent.hero.secondaryCtaText}
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
        overlayProjectLabel={locale === "en" ? "PROJECT: #8842" : locale === "ro" ? roContent.pages.home.full?.contactCta.projectLabel : undefined}
        overlayStatusLabel={locale === "en" ? "SITE INSPECTION" : locale === "ro" ? roContent.pages.home.full?.contactCta.readyLabel : undefined}
      />

      <ContactForm content={contactFormContent} />
    </div>
  );
};

export default Contact;
