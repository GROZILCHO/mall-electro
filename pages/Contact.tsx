import React from "react";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/shared/ContactForm";
import SEO from "../components/seo/SEO";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

const Contact: React.FC = () => {
  return (
    <div>
      <SEO page="contact" />
      <PageHero
        title="Свържете се с нашия екип"
        subtitle="Нуждаете се от оглед, проект, технически анализ или консултация? Нашите инженери са на разположение за съдействие, оферта или помощ по вашия проект. Отговаряме бързо и предлагаме най-подходящото техническо решение според спецификата на вашата система."
        theme="light"
        badgeText="Контакти"
        badgeVariant="accent"
        heroImageAlt="Контакт с инженерния екип на Mall Electro"
        primaryCtaText="Разгледай секторите"
        primaryCtaHref="/bg/industrii"
        secondaryCtaText="Свържи се с нас"
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
      />

      <ContactForm />
    </div>
  );
};

export default Contact;
