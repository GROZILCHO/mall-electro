import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  LEGAL_COMPANY_NUMBER,
  LEGAL_DOCUMENT_VERSION,
  LEGAL_PUBLICATION_DATE,
  LEGAL_VAT_NUMBER,
  legalContent,
  legalDocumentDetails,
  type LegalPageKey,
  type LegalTextPart,
} from "../../data/i18n/legalContent";
import { getLocalizedPath } from "../../data/i18n/routes";
import type { SupportedLocale } from "../../data/i18n/types";
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from "../../utils/siteConfig";
import PageHero from "../layout/PageHero";
import SEO from "../seo/SEO";

const legalSeoPages = {
  bg: {
    privacyPolicy: "privacyPolicy",
    cookiePolicy: "cookiePolicy",
    termsOfUse: "termsOfUse",
  },
  en: {
    privacyPolicy: "enPrivacyPolicy",
    cookiePolicy: "enCookiePolicy",
    termsOfUse: "enTermsOfUse",
  },
  ro: {
    privacyPolicy: "roPrivacyPolicy",
    cookiePolicy: "roCookiePolicy",
    termsOfUse: "roTermsOfUse",
  },
} as const;

interface LegalPageProps {
  locale: SupportedLocale;
  pageKey: LegalPageKey;
}

const renderTextPart = (part: LegalTextPart, locale: SupportedLocale, key: number): ReactNode => {
  if (typeof part === "string") {
    return part;
  }

  if (part.type === "email") {
    return (
      <a key={key} className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" href={`mailto:${SITE_EMAIL}`}>
        {SITE_EMAIL}
      </a>
    );
  }

  if (part.type === "phone") {
    return SITE_PHONE_DISPLAY;
  }

  return (
    <Link
      key={key}
      className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]"
      to={getLocalizedPath(part.routeKey, locale)}
    >
      {part.label}
    </Link>
  );
};

const LegalPage: React.FC<LegalPageProps> = ({ locale, pageKey }) => {
  const content = legalContent[locale][pageKey];
  const hero = content.hero;
  const details = legalDocumentDetails[locale];
  const publicationDate = LEGAL_PUBLICATION_DATE === "YYYY-MM-DD"
    ? details.pendingPublication
    : LEGAL_PUBLICATION_DATE;

  return (
    <div>
      <SEO page={legalSeoPages[locale][pageKey]} />
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        theme="light"
        badgeText={hero.badgeText}
        badgeVariant="accent"
        heroImage="/images/about/hero-about.png"
        heroImageAlt={hero.imageAlt}
        primaryCtaText={hero.primaryCtaText}
        primaryCtaHref={getLocalizedPath(hero.primaryCtaRouteKey, locale)}
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaHref={getLocalizedPath(hero.secondaryCtaRouteKey, locale)}
        secondaryCtaVariant="dark"
        overlayProjectLabel={hero.overlayProjectLabel}
        overlayStatusLabel={hero.overlayStatusLabel}
      />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-10 text-[#1C2A39]">
            <div className="grid gap-6 rounded border border-[#E7EDF5] bg-[#F5F7FA] p-6 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">{details.companyDetailsHeading}</h2>
                <dl className="space-y-3 text-sm text-[#1C2A39]/80">
                  <div><dt className="font-semibold">{details.legalEntityLabel}</dt><dd>{details.legalEntity}</dd></div>
                  <div><dt className="font-semibold">{details.companyNumberLabel}</dt><dd>{LEGAL_COMPANY_NUMBER}</dd></div>
                  <div><dt className="font-semibold">{details.vatNumberLabel}</dt><dd>{LEGAL_VAT_NUMBER}</dd></div>
                  <div><dt className="font-semibold">{details.registeredOfficeLabel}</dt><dd>{details.registeredOffice}</dd></div>
                  <div><dt className="font-semibold">{details.tradeNameLabel}</dt><dd>{details.tradeName}</dd></div>
                  <div>
                    <dt className="font-semibold">{details.contactEmailLabel}</dt>
                    <dd><a className="text-[#4A90E2] hover:text-[#FF6D2E]" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></dd>
                  </div>
                </dl>
              </div>
              <dl className="space-y-3 text-sm text-[#1C2A39]/80 md:border-l md:border-[#E7EDF5] md:pl-6">
                <div><dt className="font-semibold">{details.versionLabel}</dt><dd>{LEGAL_DOCUMENT_VERSION}</dd></div>
                <div><dt className="font-semibold">{details.effectiveDateLabel}</dt><dd>{publicationDate}</dd></div>
                <div><dt className="font-semibold">{details.lastUpdatedLabel}</dt><dd>{publicationDate}</dd></div>
              </dl>
            </div>

            {content.notice && (
              <div className="rounded border border-[#E7EDF5] bg-[#F5F7FA] p-6">
                <p className="text-sm leading-relaxed text-[#1C2A39]/80">{content.notice}</p>
              </div>
            )}

            {content.sections.map((section) => (
              <article key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold">{section.heading}</h2>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="leading-relaxed text-[#1C2A39]/80">
                    {paragraph.map((part, partIndex) => renderTextPart(part, locale, partIndex))}
                  </p>
                ))}
                {section.items && (
                  <ul className="space-y-3 text-[#1C2A39]/80">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
