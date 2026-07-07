import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../layout/PageHero";
import SEO from "../seo/SEO";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import { Icons } from "../ui/LucideIcons";
import FAQSection from "../shared/FAQSection";
import ContactCTA from "../shared/ContactCTA";
import type { FAQItem } from "../../data/faqTypes";
import type { HomeFullContent } from "../../data/i18n/content";
import type { SeoPageKey } from "../../seo/seoConfig";

interface IndustryHero {
  badgeText: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryCtaIcon?: keyof typeof Icons;
  overlayProjectLabel?: string;
  overlayStatusLabel?: string;
}

interface TextListSection {
  badge: string;
  title: string;
  text?: string;
  items: readonly string[];
}

interface ServiceLink {
  title: string;
  text: string;
  href: string;
  icon: keyof typeof Icons;
}

interface ProcessStep {
  title: string;
  text: string;
}

interface RelatedIndustry {
  title: string;
  text: string;
  href?: string;
}

interface IndustryDetailLayoutProps {
  seoPage: SeoPageKey;
  hero: IndustryHero;
  overview: TextListSection;
  systems: {
    badge: string;
    title: string;
    text: string;
    services: readonly ServiceLink[];
  };
  projectNeeds: TextListSection;
  process: {
    badge: string;
    title: string;
    steps: readonly ProcessStep[];
    image: string;
    imageAlt: string;
    imageKicker: string;
    imageTitle: string;
  };
  faq?: {
    title: string;
    intro: string;
    items: readonly FAQItem[];
  };
  relatedIndustries: {
    badge: string;
    title: string;
    text: string;
    ctaText?: string;
    items: readonly RelatedIndustry[];
  };
  relatedPrimaryHref?: string;
  relatedSecondaryText?: string;
  relatedSecondaryHref?: string;
  contactCta?: HomeFullContent["contactCta"];
  contactCtaPrimaryHref?: string;
}

const IndustryDetailLayout: React.FC<IndustryDetailLayoutProps> = ({
  seoPage,
  hero,
  overview,
  systems,
  projectNeeds,
  process,
  faq,
  relatedIndustries,
  relatedPrimaryHref = "/bg/kontakti",
  relatedSecondaryText = "Всички индустрии",
  relatedSecondaryHref = "/bg/industrii",
  contactCta,
  contactCtaPrimaryHref,
}) => {
  return (
    <main>
      <SEO page={seoPage} />

      <PageHero
        theme="light"
        badgeText={hero.badgeText}
        badgeVariant="accent"
        title={hero.title}
        subtitle={hero.subtitle}
        heroImage={hero.image}
        heroImageAlt={hero.imageAlt}
        primaryCtaText={hero.primaryCtaText}
        primaryCtaHref={hero.primaryCtaHref}
        primaryCtaIcon="ChevronRight"
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaHref={hero.secondaryCtaHref}
        secondaryCtaVariant="dark"
        secondaryCtaIcon={hero.secondaryCtaIcon ?? "Factory"}
        overlayProjectLabel={hero.overlayProjectLabel}
        overlayStatusLabel={hero.overlayStatusLabel}
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.2]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text={overview.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {overview.title}
              </h2>
              {overview.text && (
                <p className="text-lg leading-relaxed text-[#56677A]">{overview.text}</p>
              )}
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
              {overview.items.map((item, index) => (
                <FadeIn key={item} delay={index * 80}>
                  <Card className="h-full">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-brand-blue/10 text-brand-blue">
                      <Icons.CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#56677A]">{item}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-3xl">
              <Badge text={systems.badge} variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {systems.title}
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">{systems.text}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.services.map((service, index) => {
              const Icon = Icons[service.icon];

              return (
                <FadeIn key={service.href} delay={index * 80}>
                  <Link
                    to={service.href}
                    className="group block h-full border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{service.text}</p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-3xl">
              <Badge text={projectNeeds.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {projectNeeds.title}
              </h2>
              {projectNeeds.text && (
                <p className="text-lg leading-relaxed text-[#56677A]">{projectNeeds.text}</p>
              )}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectNeeds.items.map((item, index) => (
              <FadeIn key={item} delay={index * 80}>
                <div className="flex h-full items-start gap-5 border border-gray-200 bg-white p-6 shadow-sm">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium leading-relaxed text-[#1C2A39]">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <Badge text={process.badge} variant="blueprint" />
              <h2 className="mb-8 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {process.title}
              </h2>
              <div className="space-y-6">
                {process.steps.map((step, index) => (
                  <div key={step.title} className="border-l-2 border-brand-orange pl-5">
                    <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                      0{index + 1}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-[#1C2A39]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{step.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl shadow-[0_14px_42px_rgba(0,0,0,0.08)]">
                <div className="absolute -inset-4 rounded-lg border-2 border-[#1C2A39]/10" />
                <div className="contact-cta-panel-grid absolute -inset-4 animate-shift pointer-events-none opacity-20" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={process.image}
                    alt={process.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-mono text-xs opacity-70">{process.imageKicker}</p>
                    <p className="text-lg font-bold">{process.imageTitle}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {faq && <FAQSection title={faq.title} intro={faq.intro} items={faq.items} />}

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-3xl">
              <Badge text={relatedIndustries.badge} variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                {relatedIndustries.title}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">{relatedIndustries.text}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {relatedIndustries.items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 90}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="block h-full border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-orange/60 hover:bg-white/[0.06] sm:p-6"
                  >
                    <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                  </Link>
                ) : (
                  <div className="h-full border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.text}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button variant="primary" icon="ChevronRight" href={relatedPrimaryHref}>
                {relatedIndustries.ctaText ?? hero.primaryCtaText}
              </Button>
              <Button variant="ghost" icon="Factory" href={relatedSecondaryHref}>
                {relatedSecondaryText}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA content={contactCta} primaryCtaHref={contactCtaPrimaryHref} />
    </main>
  );
};

export default IndustryDetailLayout;
