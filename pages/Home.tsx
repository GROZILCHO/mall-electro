import SEO from "../components/seo/SEO";
import HomePage from "../components/home/HomePage";
import { enContent } from "../data/i18n/content";

interface HomeProps {
  locale?: "bg" | "en";
}

export default function Home({ locale = "bg" }: HomeProps) {
  const isEnglish = locale === "en";

  return (
    <>
      <SEO page={isEnglish ? "enHome" : "home"} />
      <HomePage
        locale={locale}
        content={isEnglish ? enContent.pages.home.full : undefined}
        contactFormContent={isEnglish ? enContent.forms.contact : undefined}
      />
    </>
  );
}
