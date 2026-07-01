import React from "react";
import FadeIn from "../ui/FadeIn";
import GridContainer from "../layout/GridContainer";
import SectionTitle from "../ui/SectionTitle";
import AnimatedPattern from "../ui/AnimatedPattern";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Icons } from "../ui/LucideIcons";
import type { IndustryOverviewContent } from "../../data/i18n/content";

interface EnglishIndustryOverviewProps {
  content: IndustryOverviewContent;
}

const EnglishIndustryOverview: React.FC<EnglishIndustryOverviewProps> = ({ content }) => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <AnimatedPattern speed={0.35} />
      </div>

      <GridContainer>
        <FadeIn delay={0}>
          <div className="flex justify-center">
            <Badge
              text={content.badge}
              variant="status"
              align="center"
            />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <SectionTitle
            title={content.heading}
            subtitle={content.subtitle}
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <FadeIn delay={200}>
            <div className="relative aspect-[4/4] overflow-hidden rounded-xl border border-gray-200 shadow-xl">
              <img
                src="/images/industries/industry_overview.png"
                alt={content.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-6 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                {content.features.map((item) => {
                  const Icon = Icons[item.icon as keyof typeof Icons] ?? Icons.HardHat;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow">
                        <Icon className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12">
                <Button variant="primary" size="lg" icon="ChevronRight" href={content.ctaHref}>
                  {content.cta}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </GridContainer>
    </section>
  );
};

interface IndustryOverviewProps {
  content?: IndustryOverviewContent;
}

const IndustryOverview: React.FC<IndustryOverviewProps> = ({ content }) => {
  if (content) {
    return <EnglishIndustryOverview content={content} />;
  }

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <AnimatedPattern speed={0.35} />
      </div>

      <GridContainer>
        <FadeIn delay={0}>
          <div className="flex justify-center">
            <Badge
              text="Как добавяме стойност в индустриалните проекти"
              variant="status"
              align="center"
            />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <SectionTitle
            title="Инженерен подход, който гарантира безопасност, ефективност и предвидим резултат"
            subtitle="Обединяваме проектиране, индустриална автоматизация и монтаж по стандарти, за да изграждаме надеждни електро системи за всякакви производствени процеси."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <FadeIn delay={200}>
            <div className="relative aspect-[4/4] overflow-hidden rounded-xl border border-gray-200 shadow-xl">
              <img
                src="/images/industries/industry_overview.png"
                alt="Индустриални електро табла и автоматизация"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <p className="mb-6 leading-relaxed text-gray-700">
                Работим в секторите ХВП, зърнопреработка, агро, логистика и
                индустриално производство. Всеки проект започва с детайлен
                инженеринг и завършва с безопасна, ефективна и рационална
                електро система, изпълнена по европейски стандарти.
              </p>

              <p className="mb-6 leading-relaxed text-gray-700">
                От кабелни трасета и табла до интелигентни контролни системи -
                осигуряваме предвидимост, ясно планиране, техническа
                документация и дългосрочна поддръжка.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                {[
                  {
                    icon: <Icons.HardHat className="h-6 w-6 text-brand-blue" />,
                    label: "Инженерна експертиза",
                    desc: "Проектиране, окабеляване и интеграция от сертифицирани инженери.",
                  },
                  {
                    icon: <Icons.Cpu className="h-6 w-6 text-brand-blue" />,
                    label: "Автоматизация",
                    desc: "PLC, SCADA, контролери и интелигентно управление.",
                  },
                  {
                    icon: <Icons.ShieldCheck className="h-6 w-6 text-brand-blue" />,
                    label: "Безопасност и стандарти",
                    desc: "EN стандарти, защити и индустриална сертификация.",
                  },
                  {
                    icon: <Icons.Award className="h-6 w-6 text-brand-blue" />,
                    label: "Качество на изпълнение",
                    desc: "Точност, безопасност и контрол на всяка стъпка.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white shadow">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button variant="primary" size="lg" icon="ChevronRight" href="/bg/kontakti">
                  Вижте проектите по индустрии
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </GridContainer>
    </section>
  );
};

export default IndustryOverview;
