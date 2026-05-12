import React from "react";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/seo/SEO";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

const About: React.FC = () => {
  return (
    <div>
      <SEO page="about" />
      <PageHero
        title="Инженеринг, качество и дългогодишна експертиза"
        subtitle="Mall Electro е вашият доверен партньор за електроинженеринг и автоматизация. Комбинираме технически опит, модерни технологии и професионален подход, за да доставяме устойчиви и сигурни системи за индустрията. Изграждаме решения, съобразени с нормативните изисквания и практиките на международния инженеринг."
        theme="light"
        badgeText="Винаги до Вас"
        badgeVariant="accent"
        heroImage="/images/about/hero-about.png"
        heroImageAlt="Инженер преглежда електрическо табло в индустриална среда."
        primaryCtaText="Разгледай секторите"
        primaryCtaHref="/bg/industrii"
        secondaryCtaText="Свържи се с нас"
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
      />
    </div>
  );
};

export default About;
