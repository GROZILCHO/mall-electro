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
import { enContent } from "../data/i18n/content";
import type { IndustriesOverviewPageContent } from "../data/i18n/content";

interface EnglishIndustriesPageProps {
  content: IndustriesOverviewPageContent;
}

const EnglishIndustriesPage: React.FC<EnglishIndustriesPageProps> = ({ content }) => {
  return (
    <main className="pt-20">
      <SEO page="enIndustries" />
      <PageHero
        theme="light"
        badgeText={content.hero.badgeText}
        badgeVariant="accent"
        title={content.hero.title}
        subtitle={
          <>
            {content.hero.subtitleParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={index > 0 ? "mt-4" : undefined}>
                {paragraph}
              </p>
            ))}
          </>
        }
        heroImage="/images/industries/hero_industriy.png"
        heroImageAlt={content.hero.heroImageAlt}
        primaryCtaText={content.hero.primaryCtaText}
        primaryCtaHref={content.hero.primaryCtaHref}
        primaryCtaIcon="Search"
        secondaryCtaText={content.hero.secondaryCtaText}
        secondaryCtaHref={content.hero.secondaryCtaHref}
        secondaryCtaVariant="dark"
        secondaryCtaIcon="Phone"
        overlayProjectLabel={content.hero.overlayProjectLabel}
        overlayStatusLabel={content.hero.overlayStatusLabel}
      />

      <FadeIn>
        <GridContainer className="py-12">
          <IndustriesQuickNav content={content.quickNav} />
        </GridContainer>
      </FadeIn>

      <IndustryOverview content={content.overview} />
      <IndustriesPremium content={content.premium} />
      <IndustriesCasesStrip content={content.cases} />
      <ContactCTA content={content.contactCta} primaryCtaHref="/en/contact" />
    </main>
  );
};

interface IndustriesPageProps {
  locale?: "bg" | "en";
}

export default function IndustriesPage({ locale = "bg" }: IndustriesPageProps) {
  if (locale === "en") {
    const content = enContent.pages.industriesOverview;

    if (!content) {
      throw new Error("Missing English industries overview content.");
    }

    return <EnglishIndustriesPage content={content} />;
  }

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
        primaryCtaHref="#industry-food"
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
