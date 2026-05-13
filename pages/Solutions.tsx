import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/seo/SEO";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import FadeIn from "../components/ui/FadeIn";
import { Icons } from "../components/ui/LucideIcons";
import ContactCTA from "../components/shared/ContactCTA";

type LinkedItem = {
  title: string;
  text: string;
  href: string;
  icon: keyof typeof Icons;
};

const solutionScenarios = [
  {
    title: "Нов производствен обект",
    description:
      "Планиране и изпълнение на електро инфраструктура за нови производствени, складови или технологични обекти.",
    icon: "Factory",
  },
  {
    title: "Модернизация на електро система",
    description:
      "Оценка, подмяна и разширяване на съществуващи табла, трасета, захранвания и контролни точки.",
    icon: "Settings",
  },
  {
    title: "Табла и автоматизация за технологични линии",
    description:
      "Комбиниране на електрически табла, управление, сензори и автоматизация за машини и технологични линии.",
    icon: "Cpu",
    href: "/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii",
  },
  {
    title: "Кабелна инфраструктура за база",
    description:
      "Организация на кабелни трасета, ниско напрежение и захранвания за индустриални бази, складове и производствени зони.",
    icon: "Activity",
  },
  {
    title: "Сервиз и разширяване",
    description:
      "Диагностика, поддръжка, подобрения и разширяване на съществуващи индустриални електро системи.",
    icon: "Wrench",
  },
] satisfies Array<{
  title: string;
  description: string;
  icon: keyof typeof Icons;
  href?: string;
}>;

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
    text: "Управление, сензори, контролни вериги и процесна интеграция.",
    href: "/bg/uslugi/avtomatizatsia",
    icon: "Cpu",
  },
  {
    title: "Ниско напрежение",
    text: "Нисковолтови връзки, захранващи линии и свързана инфраструктура.",
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
    text: "Брашномелни производства, аспирация и технологични линии.",
    href: "/bg/industrii/melnitsi",
    icon: "Activity",
  },
  {
    title: "Агро",
    text: "Стопанства, складови бази, сушилни и сезонна инфраструктура.",
    href: "/bg/industrii/agro",
    icon: "Wheat",
  },
  {
    title: "Логистика",
    text: "Складови комплекси, хладилни камери и товарни зони.",
    href: "/bg/industrii/logistika",
    icon: "Warehouse",
  },
  {
    title: "Производствени предприятия",
    text: "Индустриални халета, работни зони, машини и процеси.",
    href: "/bg/industrii/proizvodstveni-predpriyatiya",
    icon: "Settings",
  },
];

const processSteps = [
  "Технически оглед",
  "Уточняване на обхвата",
  "Планиране на табла, трасета и управление",
  "Монтаж и проверка",
  "Поддръжка след пуск",
];

const Solutions: React.FC = () => {
  return (
    <main>
      <SEO page="solutions" />

      <PageHero
        title="Решения за индустриални електро системи"
        subtitle="Комбинираме електрически табла, кабелни трасета, ниско напрежение, автоматизация и сервиз в цялостни решения за нови обекти, модернизация, технологични линии и индустриална инфраструктура."
        theme="light"
        badgeText="Инженерни решения"
        badgeVariant="accent"
        primaryCtaText="Обсъдете проект"
        primaryCtaHref="/bg/kontakti"
        primaryCtaIcon="ChevronRight"
        secondaryCtaText="Вижте услугите"
        secondaryCtaHref="/bg/uslugi"
        secondaryCtaVariant="dark"
        secondaryCtaIcon="Factory"
        heroImage="/images/Premium-Electrical-Panel-Display.png"
        heroImageAlt="Инженерен проект за индустриална електро система."
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="cad-grid-slate absolute inset-0 pointer-events-none opacity-[0.2]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text="Решения // обхват" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Какво означава “решение”
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Решението не е отделна услуга и не е само индустриален сектор. То е
                практичен обхват около конкретна ситуация на клиента - нов обект,
                модернизация, производствена линия, кабелна инфраструктура или
                сервизно разширяване.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-7">
              {[
                ["Услуги", "Какво изпълняваме - табла, трасета, ниско напрежение, автоматизация и сервиз."],
                ["Индустрии", "Къде работим - ХВП, зърнопреработка, мелници, агро, логистика и производство."],
                ["Решения", "Как комбинираме услугите за конкретен проектен сценарий."],
              ].map(([title, text], index) => (
                <FadeIn key={title} delay={index * 80}>
                  <Card className="h-full">
                    <span className="mb-5 block font-mono text-xs font-bold text-brand-orange">
                      0{index + 1}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-[#1C2A39]">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#56677A]">{text}</p>
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
              <Badge text="Типови сценарии" variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Проектни ситуации, в които услугите работят заедно
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Всеки сценарий комбинира няколко направления - от табла и трасета
                до управление, проверка и последваща поддръжка.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionScenarios.map((scenario, index) => {
              const Icon = Icons[scenario.icon];
              const scenarioContent = (
                <>
                  <div className="mb-8 flex items-start justify-between border-b border-gray-100 pb-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Solution {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                    {scenario.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">
                    {scenario.description}
                  </p>
                  {scenario.href && (
                    <div className="mt-6 border-t border-dashed border-gray-100 pt-5 text-sm font-medium text-brand-blue">
                      <span className="inline-flex items-center">
                        Виж решението <Icons.ChevronRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  )}
                </>
              );

              return (
                <FadeIn key={scenario.title} delay={index * 80}>
                  {scenario.href ? (
                    <Link
                      to={scenario.href}
                      className="group block h-full rounded-xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
                    >
                      {scenarioContent}
                    </Link>
                  ) : (
                    <Card className="h-full">{scenarioContent}</Card>
                  )}
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
              <Badge text="Услуги в комбинация" variant="section-line" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                Как се комбинират услугите
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Решението започва от конкретния обект, но обикновено обединява
                няколко технически направления в един подреден обхват.
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

      <section className="relative overflow-hidden bg-[#1C2A39] py-24 text-white lg:py-32">
        <div className="cad-grid-white absolute inset-0 pointer-events-none opacity-[0.05]" />
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mb-14 max-w-4xl">
              <Badge text="Индустриални среди" variant="pill-dark" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight lg:text-5xl">
                Къде се прилагат тези решения
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Електро решенията се адаптират според средата, натоварването,
                режима на работа и достъпа за монтаж и поддръжка.
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

          <FadeIn delay={200}>
            <div className="mt-12">
              <Button variant="ghost" icon="Factory" href="/bg/industrii">
                Всички индустрии
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <Badge text="Процес" variant="blueprint" />
              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                От технически оглед до поддръжка след пуск
              </h2>
              <p className="text-lg leading-relaxed text-[#56677A]">
                Подходът остава практически: първо се уточняват реалните условия
                на обекта, след това се планират таблата, трасетата,
                управлението, монтажът и проверките.
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

      <ContactCTA />
    </main>
  );
};

export default Solutions;
