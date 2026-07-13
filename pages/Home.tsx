import SEO from "../components/seo/SEO";
import HomePage from "../components/home/HomePage";
import { enContent, roContent } from "../data/i18n/content";
import type { Locale } from "../data/i18n/content";

interface HomeProps {
  locale?: Locale;
}

export default function Home({ locale = "bg" }: HomeProps) {
  const isEnglish = locale === "en";
  const localizedContent = locale === "ro" ? roContent : enContent;
  const isLocalized = locale !== "bg";

  return (
    <>
      <SEO page={locale === "ro" ? "roHome" : isEnglish ? "enHome" : "home"} />
      <HomePage
        locale={locale}
        content={isLocalized ? localizedContent.pages.home.full : undefined}
        contactFormContent={isLocalized ? localizedContent.forms.contact : undefined}
      />
    </>
  );
}
