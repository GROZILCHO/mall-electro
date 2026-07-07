import React from "react";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/seo/SEO";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/FadeIn";
import { Icons } from "../components/ui/LucideIcons";
import ContactCTA from "../components/shared/ContactCTA";
import { enContent } from "../data/i18n/content";
import type { ServicesOverviewPageContent } from "../data/i18n/content";

type Service = {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  bullets: string[];
  href?: string;
};

const services: Service[] = [
  {
    title: "Електрически табла",
    description:
      "Проектиране, изработка и пуск на разпределителни табла, командни шкафове и табла за управление.",
    icon: "LayoutDashboard",
    href: "/bg/uslugi/elektricheski-tabla",
    bullets: [
      "Проектна документация",
      "EN стандарти и защити",
      "Тестване и протоколиране",
    ],
  },
  {
    title: "Кабелни трасета",
    description:
      "Изграждане на кабелни скари, трасета и подредено окабеляване за натоварени индустриални среди.",
    icon: "Factory",
    href: "/bg/uslugi/kabelni-traseta",
    bullets: [
      "Трасета за машини и линии",
      "Чист монтаж на място",
      "Подготовка за бъдеща поддръжка",
    ],
  },
  {
    title: "Индустриални електроинсталации",
    description:
      "Цялостно изпълнение на електроинсталации за производствени обекти, складове и технологични линии.",
    icon: "HardHat",
    href: "/bg/uslugi/industrialni-elektroinstalatsii",
    bullets: [
      "Силови линии и захранване",
      "Монтажни екипи на обект",
      "Пуск и финална проверка",
    ],
  },
  {
    title: "Автоматизация",
    description:
      "Интеграция на контролни системи, сензори, табла и комуникация между машини и процеси.",
    icon: "Cpu",
    href: "/bg/uslugi/avtomatizatsia",
    bullets: [
      "PLC и контролери",
      "Процесна сигнализация",
      "Мониторинг на ключови точки",
    ],
  },
  {
    title: "Ниско напрежение",
    description:
      "Окабеляване, връзки между машини, табла и системи за надеждна работа на производствения процес.",
    icon: "Zap",
    href: "/bg/uslugi/nisko-naprezhenie",
    bullets: [
      "Кабели и връзки",
      "Машини, табла и линии",
      "Минимално прекъсване",
    ],
  },
  {
    title: "Поддръжка и сервиз",
    description:
      "Реакция при нужда, проверка на системи, ремонтни дейности и техническа поддръжка след изпълнение.",
    icon: "Wrench",
    href: "/bg/uslugi/poddrazhka-i-serviz",
    bullets: [
      "Оглед и диагностика",
      "Ремонт и корекции",
      "Дългосрочна поддръжка",
    ],
  },
];

const projectTypes = [
  "ХВП предприятия и производствени линии",
  "Зърнопреработка, силози и сушилни",
  "Мелници и брашнени производства",
  "Агро бази, складове и помпени станции",
  "Логистични центрове и хладилни камери",
  "Индустриални обекти с нужда от поддръжка",
];

interface EnglishServicesOverviewProps {
  content: ServicesOverviewPageContent;
}

const EnglishServicesOverview: React.FC<EnglishServicesOverviewProps> = ({ content }) => {
  return (
    <div>
      <SEO page="services" />

      <PageHero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        theme="light"
        badgeText={content.hero.badgeText}
        badgeVariant="accent"
        primaryCtaText={content.hero.primaryCtaText}
        primaryCtaHref={content.hero.primaryCtaHref}
        secondaryCtaText={content.hero.secondaryCtaText}
        secondaryCtaHref={content.hero.secondaryCtaHref}
        secondaryCtaVariant="dark"
        secondaryCtaIcon="ChevronRight"
        heroImage="/images/industrial/industrial-electrical-workshop-technical-zone-01.png"
        heroImageAlt={content.hero.heroImageAlt}
        overlayProjectLabel={content.hero.overlayProjectLabel}
        overlayStatusLabel={content.hero.overlayStatusLabel}
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.24]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <Badge text={content.overview.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {content.overview.heading}
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                {content.overview.body}
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {content.overview.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 100}>
                <Card className="h-full">
                  <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#1C2A39]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">{step.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16 max-w-4xl">
              <Badge text={content.services.badge} variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {content.services.heading}
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                {content.services.body}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service, index) => {
              const Icon = Icons[service.icon as keyof typeof Icons] ?? Icons.Zap;

              return (
                <FadeIn key={service.title} delay={index * 100}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                    <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-gray-100 transition-colors duration-300 group-hover:border-brand-blue" />
                    <div className="mb-8 flex items-start justify-between border-b border-gray-100 pb-6">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {content.services.cardPrefix} {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#56677A]">
                      {service.description}
                    </p>

                    <ul className="mt-auto space-y-2 text-sm text-[#56677A]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {service.href && (
                      <div className="mt-8 border-t border-dashed border-gray-100 pt-5">
                        <Button variant="secondary" icon="ChevronRight" href={service.href}>
                          {content.services.cardCta}
                        </Button>
                      </div>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <Badge text={content.engineering.badge} variant="blueprint" />
                <h2 className="mb-8 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {content.engineering.heading}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-[#56677A]">
                  {content.engineering.body}
                </p>

                <div className="space-y-5">
                  {content.engineering.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue">
                        <Icons.CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-base font-medium text-[#1C2A39]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl shadow-[0_14px_42px_rgba(0,0,0,0.08)]">
                <div className="absolute -inset-4 rounded-lg border-2 border-[#1C2A39]/10" />
                <div className="contact-cta-panel-grid absolute -inset-4 animate-shift pointer-events-none opacity-20" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src="/images/Premium-Electrical-Panel-Display.png"
                    alt={content.engineering.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-mono text-xs opacity-70">{content.engineering.imageLabel}</p>
                    <p className="text-lg font-bold">{content.engineering.imageStatus}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-3xl">
              <Badge text={content.projectTypes.badge} variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                {content.projectTypes.heading}
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                {content.projectTypes.body}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.projectTypes.items.map((type, index) => (
              <FadeIn key={type} delay={index * 80}>
                <div className="flex h-full items-start gap-4 border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-orange/60 sm:p-6">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-white/85">{type}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button variant="primary" icon="ChevronRight" href={content.projectTypes.primaryCtaHref}>
                {content.projectTypes.primaryCta}
              </Button>
              <Button variant="ghost" icon="Factory" href={content.projectTypes.secondaryCtaHref}>
                {content.projectTypes.secondaryCta}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA content={content.contactCta} primaryCtaHref="/en/contact" />
    </div>
  );
};

interface ServicesProps {
  locale?: "bg" | "en";
}

const Services: React.FC<ServicesProps> = ({ locale = "bg" }) => {
  if (locale === "en") {
    const content = enContent.pages.servicesOverview;

    if (!content) {
      throw new Error("Missing English services overview content.");
    }

    return <EnglishServicesOverview content={content} />;
  }

  return (
    <div>
      <SEO page="services" />

      <PageHero
        title="Професионални електро услуги, инженеринг и автоматизация"
        subtitle="Mall Electro изпълнява индустриални електро системи от оглед и проект до монтаж, пуск и поддръжка. Работим с ясна техническа организация, безопасно изпълнение и минимално прекъсване на производствения процес."
        theme="light"
        badgeText="Чисто изпълнение"
        badgeVariant="accent"
        primaryCtaText="Поискай консултация"
        primaryCtaHref="/bg/kontakti"
        secondaryCtaText="Виж индустриите"
        secondaryCtaHref="/bg/industrii"
        secondaryCtaVariant="dark"
        secondaryCtaIcon="ChevronRight"
        heroImage="/images/industrial/industrial-electrical-workshop-technical-zone-01.png"
        heroImageAlt="Индустриална електро работилница с табла и кабелна инфраструктура"
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.24]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <Badge text="Услуги // преглед" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Електро решения за индустриална инфраструктура
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Обединяваме проектиране, доставка, монтаж и сервиз в един последователен процес. Това помага на производствени екипи, инвеститори и технически ръководители да получат предвидимо изпълнение без излишно забавяне.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              ["Оглед", "Проверяваме обекта, трасетата, натоварванията и реалните условия за монтаж."],
              ["Проект", "Подготвяме техническо решение, съобразено със системите и стандартите."],
              ["Изпълнение", "Работим с монтажни екипи, контрол на качеството и финални проверки."],
            ].map(([title, text], index) => (
              <FadeIn key={title} delay={index * 100}>
                <Card className="h-full">
                  <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#1C2A39]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">{text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16 max-w-4xl">
              <Badge text="Основни услуги" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Основни електро услуги
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Шест основни направления покриват най-честите нужди на индустриални обекти — от табла и трасета до автоматизация и сервиз.              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = Icons[service.icon];

              return (
                <FadeIn key={service.title} delay={index * 100}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                    <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-gray-100 transition-colors duration-300 group-hover:border-brand-blue" />
                    <div className="mb-8 flex items-start justify-between border-b border-gray-100 pb-6">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Услуга {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#56677A]">
                      {service.description}
                    </p>

                    <ul className="mt-auto space-y-2 text-sm text-[#56677A]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {service.href && (
                      <div className="mt-8 border-t border-dashed border-gray-100 pt-5">
                        <Button variant="secondary" icon="ChevronRight" href={service.href}>
                          Виж подробности
                        </Button>
                      </div>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div>
                <Badge text="Инженерен подход" variant="blueprint" />
                <h2 className="mb-8 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  От технически анализ до стабилна работа на системата
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-[#56677A]">
                  При индустриалните електро системи качеството не е само в монтажа. Важно е трасето, таблото, защитите и бъдещата поддръжка да бъдат мислени заедно.
                </p>

                <div className="space-y-5">
                  {[
                    "Оценка на натоварвания, среда и достъп за монтаж",
                    "Съгласуване на табла, кабели, трасета и автоматика",
                    "Финална проверка, пуск и ясна техническа документация",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue">
                        <Icons.CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-base font-medium text-[#1C2A39]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl shadow-[0_14px_42px_rgba(0,0,0,0.08)]">
                <div className="absolute -inset-4 rounded-lg border-2 border-[#1C2A39]/10" />
                <div className="contact-cta-panel-grid absolute -inset-4 animate-shift pointer-events-none opacity-20" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src="/images/Premium-Electrical-Panel-Display.png"
                    alt="Индустриално електро табло и инженерно изпълнение"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-mono text-xs opacity-70">ИНЖЕНЕРНА ПРОВЕРКА</p>
                    <p className="text-lg font-bold">ГОТОВО ЗА ПУСК</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-3xl">
              <Badge text="Подходящи проекти" variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                За какви обекти работим
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Услугите са приложими при ново изграждане, разширение, модернизация или поддръжка на индустриална инфраструктура.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((type, index) => (
              <FadeIn key={type} delay={index * 80}>
                <div className="flex h-full items-start gap-4 border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-orange/60 sm:p-6">
                  <span className="font-mono text-xs font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-white/85">{type}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button variant="primary" icon="ChevronRight" href="/bg/kontakti">
                Обсъдете проект
              </Button>
              <Button variant="ghost" icon="Factory" href="/bg/industrii">
                Вижте индустриите
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default Services;
