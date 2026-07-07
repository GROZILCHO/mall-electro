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

interface SolutionHero {
  badgeText: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  overlayProjectLabel?: string;
  overlayStatusLabel?: string;
}

interface TextListSection {
  badge: string;
  title: string;
  text?: string;
  items: readonly string[];
}

interface LinkedCard {
  title: string;
  text: string;
  href: string;
  icon: keyof typeof Icons;
}

interface ProcessStep {
  title: string;
  text: string;
}

interface ProcessSection {
  badge: string;
  title: string;
  steps: readonly ProcessStep[];
  image: string;
  imageAlt: string;
  imageKicker: string;
  imageTitle: string;
}

interface SolutionDetailLayoutProps {
  seoPage: SeoPageKey;
  hero: SolutionHero;
  context: TextListSection;
  included: {
    badge: string;
    title: string;
    text: string;
    items: readonly {
      title: string;
      text: string;
      icon: keyof typeof Icons;
    }[];
  };
  services: {
    badge: string;
    title: string;
    text: string;
    items: readonly LinkedCard[];
  };
  industries: {
    badge: string;
    title: string;
    text: string;
    items: readonly LinkedCard[];
  };
  process: ProcessSection;
  technical: TextListSection;
  faq: {
    title: string;
    intro: string;
    items: readonly FAQItem[];
  };
  cta?: {
    badge: string;
    title: string;
    text: string;
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
  contactCta?: HomeFullContent["contactCta"];
  contactCtaPrimaryHref?: string;
}

const SolutionDetailLayout: React.FC<SolutionDetailLayoutProps> = ({
  seoPage,
  hero,
  context,
  included,
  services,
  industries,
  process,
  technical,
  faq,
  cta,
  contactCta,
  contactCtaPrimaryHref,
}) => {
  const finalCta = cta ?? {
    badge: "Следваща стъпка",
    title: "Обсъдете табло и автоматизация за вашата линия",
    text:
      "Изпратете информация за машината, линията, съществуващите табла и ограниченията за работа. Ще уточним практичен технически обхват.",
    primaryText: "Обсъдете проекта",
    primaryHref: "/bg/kontakti",
    secondaryText: "Всички решения",
    secondaryHref: "/bg/reshenia",
  };

  return (
    <main>
      <SEO page={seoPage} />

      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        theme="light"
        badgeText={hero.badgeText}
        badgeVariant="accent"
        primaryCtaText={hero.primaryCtaText}
        primaryCtaHref={hero.primaryCtaHref}
        primaryCtaIcon="ChevronRight"
        secondaryCtaText={hero.secondaryCtaText}
        secondaryCtaHref={hero.secondaryCtaHref}
        secondaryCtaVariant="dark"
        secondaryCtaIcon="Factory"
        heroImage={hero.image}
        heroImageAlt={hero.imageAlt}
        overlayProjectLabel={hero.overlayProjectLabel}
        overlayStatusLabel={hero.overlayStatusLabel}
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.2]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text={context.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {context.title}
              </h2>
              {context.text && (
                <p className="text-lg leading-relaxed text-[#56677A]">{context.text}</p>
              )}
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
              {context.items.map((item, index) => (
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
            <div className="mb-14 max-w-4xl">
              <Badge text={included.badge} variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {included.title}
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">{included.text}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.items.map((item, index) => {
              const Icon = Icons[item.icon];

              return (
                <FadeIn key={item.title} delay={index * 80}>
                  <Card className="h-full">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#1C2A39]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{item.text}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text={services.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {services.title}
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">{services.text}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service, index) => {
              const Icon = Icons[service.icon];

              return (
                <FadeIn key={service.href} delay={index * 70}>
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

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text={industries.badge} variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                {industries.title}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">{industries.text}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.items.map((industry, index) => {
              const Icon = Icons[industry.icon];

              return (
                <FadeIn key={industry.href} delay={index * 70}>
                  <Link
                    to={industry.href}
                    className="group block h-full border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-orange/60 hover:bg-white/[0.06] sm:p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-white/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-white">{industry.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{industry.text}</p>
                  </Link>
                </FadeIn>
              );
            })}
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text={technical.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {technical.title}
              </h2>
              {technical.text && (
                <p className="text-lg leading-relaxed text-[#56677A]">{technical.text}</p>
              )}
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
              {technical.items.map((item, index) => (
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
        </div>
      </section>

      <FAQSection title={faq.title} intro={faq.intro} items={faq.items} />

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <Badge text={finalCta.badge} variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                {finalCta.title}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                {finalCta.text}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon="ChevronRight" href={finalCta.primaryHref}>
                {finalCta.primaryText}
              </Button>
              <Button variant="ghost" icon="Factory" href={finalCta.secondaryHref}>
                {finalCta.secondaryText}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA content={contactCta} primaryCtaHref={contactCtaPrimaryHref} />
    </main>
  );
};

export default SolutionDetailLayout;
