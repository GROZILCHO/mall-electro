import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/seo/SEO";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/FadeIn";
import { Icons } from "../components/ui/LucideIcons";
import ContactCTA from "../components/shared/ContactCTA";
import { enContent } from "../data/i18n/content";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

type LinkedItem = {
  title: string;
  text: string;
  href: string;
  icon: keyof typeof Icons;
};

const serviceLinks: LinkedItem[] = [
  {
    title: "Електрически табла",
    text: "Разпределителни табла, командни шкафове и табла за управление.",
    href: "/bg/uslugi/elektricheski-tabla",
    icon: "LayoutDashboard",
  },
  {
    title: "Кабелни трасета",
    text: "Кабелни скари, трасета и подредено индустриално окабеляване.",
    href: "/bg/uslugi/kabelni-traseta",
    icon: "Factory",
  },
  {
    title: "Индустриални електроинсталации",
    text: "Захранване, силови линии и връзки между машини, табла и зони.",
    href: "/bg/uslugi/industrialni-elektroinstalatsii",
    icon: "HardHat",
  },
  {
    title: "Автоматизация",
    text: "Контролни системи, сензори и процесна интеграция.",
    href: "/bg/uslugi/avtomatizatsia",
    icon: "Cpu",
  },
  {
    title: "Ниско напрежение",
    text: "Нисковолтови връзки, линии и свързана техническа инфраструктура.",
    href: "/bg/uslugi/nisko-naprezhenie",
    icon: "Zap",
  },
  {
    title: "Поддръжка и сервиз",
    text: "Диагностика, профилактика и последваща техническа поддръжка.",
    href: "/bg/uslugi/poddrazhka-i-serviz",
    icon: "Wrench",
  },
];

const processSteps = [
  "Технически оглед",
  "Уточняване на обхвата",
  "Планиране на табла, трасета и контролни точки",
  "Монтаж и проверка",
  "Поддръжка след пуск",
];

const industryLinks: LinkedItem[] = [
  {
    title: "ХВП",
    text: "Производствени линии и хранително-вкусови обекти.",
    href: "/bg/industrii/hvp",
    icon: "Factory",
  },
  {
    title: "Зърнопреработка",
    text: "Силозни комплекси, транспортни линии и сушилни.",
    href: "/bg/industrii/zarnoprerabotka",
    icon: "Wheat",
  },
  {
    title: "Мелници",
    text: "Брашномелни производства и технологични линии.",
    href: "/bg/industrii/melnitsi",
    icon: "Activity",
  },
  {
    title: "Агро",
    text: "Стопанства, бази и сезонна техническа инфраструктура.",
    href: "/bg/industrii/agro",
    icon: "Wheat",
  },
  {
    title: "Логистика",
    text: "Складове, товарни зони и вътрешна електро инфраструктура.",
    href: "/bg/industrii/logistika",
    icon: "Warehouse",
  },
  {
    title: "Производствени предприятия",
    text: "Халета, машини, работни зони и обслужващи системи.",
    href: "/bg/industrii/proizvodstveni-predpriyatiya",
    icon: "Settings",
  },
];

const valuePoints = [
  {
    title: "Инженерно мислене",
    text: "Гледаме на табла, трасета, управление и сервиз като на свързана система.",
  },
  {
    title: "Яснота на обхвата",
    text: "Уточняваме техническите граници рано, за да се работи по реални условия.",
  },
  {
    title: "Подредено изпълнение",
    text: "Стремим се към чист монтаж, проследими връзки и удобна бъдеща поддръжка.",
  },
  {
    title: "Развитие на системата",
    text: "Мислим за проверка, сервиз и възможност за следващо разширяване.",
  },
];

const taxonomyLinks = [
  {
    title: "Услуги",
    text: "Какво изпълняваме: табла, трасета, инсталации, автоматизация и сервиз.",
    href: "/bg/uslugi",
  },
  {
    title: "Решения",
    text: "Проектни ситуации: нов обект, модернизация, линия, база или разширяване.",
    href: "/bg/reshenia",
  },
  {
    title: "Индустрии",
    text: "Работни среди, в които адаптираме системата към процеса и натоварването.",
    href: "/bg/industrii",
  },
];

interface AboutProps {
  locale?: "bg" | "en";
}

const getIcon = (icon: string): keyof typeof Icons => icon as keyof typeof Icons;

const About: React.FC<AboutProps> = ({ locale = "bg" }) => {
  const isEnglish = locale === "en";
  const aboutContent = enContent.pages.about;
  const activeServiceLinks = isEnglish ? aboutContent?.services.items ?? serviceLinks : serviceLinks;
  const activeProcessSteps = isEnglish ? aboutContent?.process.steps ?? processSteps : processSteps;
  const activeIndustryLinks = isEnglish ? aboutContent?.industries.items ?? industryLinks : industryLinks;
  const activeValuePoints = isEnglish ? aboutContent?.principles.items ?? valuePoints : valuePoints;
  const activeTaxonomyLinks = isEnglish ? aboutContent?.taxonomy.items ?? taxonomyLinks : taxonomyLinks;

  if (isEnglish && aboutContent) {
    return (
      <main>
        <SEO page="about" />
        <PageHero
          title={aboutContent.hero.title}
          subtitle={aboutContent.hero.subtitle}
          theme="light"
          badgeText={aboutContent.hero.badgeText}
          badgeVariant="accent"
          heroImage="/images/about/hero-about.png"
          heroImageAlt={aboutContent.hero.heroImageAlt}
          primaryCtaText={aboutContent.hero.primaryCtaText}
          primaryCtaHref="/bg/industrii"
          secondaryCtaText={aboutContent.hero.secondaryCtaText}
          secondaryCtaHref={`tel:${SITE_PHONE_RAW}`}
          secondaryCtaVariant="dark"
          overlayProjectLabel="PROJECT: #8842"
          overlayStatusLabel="SITE INSPECTION"
        />

        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.2]" />
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-4xl">
                <Badge text={aboutContent.intro.badge} variant="section-line" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {aboutContent.intro.heading}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-[#56677A]">
                  {aboutContent.intro.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-14 max-w-4xl">
                <Badge text={aboutContent.services.badge} variant="blueprint" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {aboutContent.services.heading}
                </h2>
                <p className="text-lg leading-relaxed text-[#56677A]">
                  {aboutContent.services.body}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeServiceLinks.map((service, index) => {
                const Icon = Icons[getIcon(service.icon)];

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

        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              <FadeIn className="lg:col-span-5">
                <Badge text={aboutContent.process.badge} variant="section-line" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {aboutContent.process.heading}
                </h2>
                <p className="text-lg leading-relaxed text-[#56677A]">
                  {aboutContent.process.body}
                </p>
              </FadeIn>

              <div className="space-y-6 lg:col-span-7">
                {activeProcessSteps.map((step, index) => (
                  <FadeIn key={step} delay={index * 80}>
                    <div className="border-l-2 border-brand-orange bg-[#F5F7FA] p-6 pl-5">
                      <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#1C2A39]">{step}</h3>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
          <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-14 max-w-4xl">
                <Badge text={aboutContent.industries.badge} variant="pill-dark" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                  {aboutContent.industries.heading}
                </h2>
                <p className="text-lg leading-relaxed text-white/70">
                  {aboutContent.industries.body}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeIndustryLinks.map((industry, index) => {
                const Icon = Icons[getIcon(industry.icon)];

                return (
                  <FadeIn key={industry.href} delay={index * 70}>
                    <Link
                      to={industry.href}
                      className="group block h-full border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-brand-orange/60 hover:bg-white/[0.06]"
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

        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-14 max-w-4xl">
                <Badge text={aboutContent.principles.badge} variant="blueprint" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {aboutContent.principles.heading}
                </h2>
                <p className="text-lg leading-relaxed text-[#56677A]">
                  {aboutContent.principles.body}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {activeValuePoints.map((point, index) => (
                <FadeIn key={point.title} delay={index * 80}>
                  <Card className="h-full">
                    <span className="mb-5 block font-mono text-xs font-bold text-brand-orange">
                      0{index + 1}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-[#1C2A39]">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{point.text}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
          <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.18]" />
          <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-14 max-w-4xl">
                <Badge text={aboutContent.taxonomy.badge} variant="section-line" />
                <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                  {aboutContent.taxonomy.heading}
                </h2>
                <p className="text-lg leading-relaxed text-[#56677A]">
                  {aboutContent.taxonomy.body}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {activeTaxonomyLinks.map((item, index) => (
                <FadeIn key={item.href} delay={index * 80}>
                  <Link
                    to={item.href}
                    className="group block h-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
                  >
                    <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                      0{index + 1}
                    </span>
                    <h3 className="mb-4 text-xl font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{item.text}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA content={enContent.pages.home.full?.contactCta} />
      </main>
    );
  }

  return (
    <main>
      <SEO page="about" />
      <PageHero
        title="Инженеринг, качество и дългогодишна експертиза"
        subtitle="Mall Electro е партньор за индустриални електро системи, автоматизация и техническа инфраструктура. Работим практично и проектно - от огледа и планирането до монтажа, проверката и последващата поддръжка."
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.2]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl">
              <Badge text="За Mall Electro" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Кои сме ние
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-[#56677A]">
                <p>
                  Mall Electro работи по индустриални електро системи, електрически табла,
                  кабелни трасета, ниско напрежение, автоматизация и сервизна поддръжка.
                </p>
                <p>
                  Подходът ни е инженерно воден и съобразен с конкретния обект. Първо
                  разбираме процеса, средата и техническите ограничения, след това подреждаме
                  изпълнението така, че системата да бъде ясна за монтаж, пуск и бъдеща работа.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text="Обхват" variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Какво изграждаме
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Работим по основните технически направления, които държат индустриалния
                обект подреден, захранен и управляем.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service, index) => {
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text="Процес" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Как подхождаме
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Всяка система започва с реалните условия на обекта. След това уточняваме
                обхвата, подреждаме техническите решения и преминаваме към монтаж, проверка и
                последваща поддръжка.
              </p>
            </FadeIn>

            <div className="space-y-6 lg:col-span-7">
              {processSteps.map((step, index) => (
                <FadeIn key={step} delay={index * 80}>
                  <div className="border-l-2 border-brand-orange bg-[#F5F7FA] p-6 pl-5">
                    <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C2A39]">{step}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text="Индустриални среди" variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                Къде сме полезни
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Настройваме електро системата според процеса, натоварването и достъпа за
                монтаж и обслужване в различни индустриални среди.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryLinks.map((industry, index) => {
              const Icon = Icons[industry.icon];

              return (
                <FadeIn key={industry.href} delay={index * 70}>
                  <Link
                    to={industry.href}
                    className="group block h-full border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-brand-orange/60 hover:bg-white/[0.06]"
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text="Принципи" variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Какво ни отличава
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Фокусът е върху полезни инженерни решения, ясна организация и системи, които
                могат да се обслужват и развиват след пуск.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {valuePoints.map((point, index) => (
              <FadeIn key={point.title} delay={index * 80}>
                <Card className="h-full">
                  <span className="mb-5 block font-mono text-xs font-bold text-brand-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#1C2A39]">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">{point.text}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.18]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text="Навигация" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Услуги, решения и индустрии
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Използваме три гледни точки към работата: услугите показват какво изпълняваме,
                решенията описват проектните ситуации, а индустриите дават контекста на
                работната среда.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {taxonomyLinks.map((item, index) => (
              <FadeIn key={item.href} delay={index * 80}>
                <Link
                  to={item.href}
                  className="group block h-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
                >
                  <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">{item.text}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default About;
