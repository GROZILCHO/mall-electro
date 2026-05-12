import React from "react";
import PageHero from "../components/layout/PageHero";
import IndustryOverview from "../components/industries/IndustryOverview";
import IndustriesPremium from "../components/industries/IndustriesPremium";
import ContactCTA from "../components/shared/ContactCTA";
import IndustriesQuickNav from "../components/industries/IndustriesQuickNav";
import IndustriesCasesStrip from "../components/industries/IndustriesCasesStrip";
import FadeIn from "../components/ui/FadeIn";
import GridContainer from "../components/layout/GridContainer";
import SEO from "../components/seo/SEO";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

export default function IndustriesPage() {
  return (
    <main className="pt-20">
      <SEO page="industries" />
      <PageHero
        theme="light"
        badgeText="Индустриални решения"
        badgeVariant="accent"
        title="Индустрии, в които изграждаме индустриални електро системи"
        subtitle={
          <>
            <p>
              Mall Electro проектира и внедрява надеждни електро системи,
              автоматизация, индустриални трасета и командни табла в различни
              производствени сектори.
            </p>
            <p className="mt-4">
              Комбинираме инженерна експертиза със стандартизирани процеси, за
              да осигурим безопасност, ефективност и високо ниво на контрол във
              всеки индустриален проект - от ХВП и мелници до агро, логистика и
              индустриални предприятия.
            </p>
          </>
        }
        heroImage="/images/industries/hero_industriy.png"
        heroImageAlt="Инженер прави последни проверки на електрическо табло в индустриална среда"
        primaryCtaText="Разгледай секторите"
        primaryCtaHref="/bg/industrii"
        primaryCtaIcon="Search"
        secondaryCtaText="Свържете се с инженер"
        secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
        secondaryCtaVariant="dark"
        secondaryCtaIcon="Phone"
      />

      <FadeIn>
        <GridContainer className="py-12">
          <IndustriesQuickNav />
        </GridContainer>
      </FadeIn>

      <IndustryOverview />
      <IndustriesPremium />
      <IndustriesCasesStrip />
      <ContactCTA />
    </main>
  );
}
