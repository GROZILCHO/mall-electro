import React from "react";
import { Icons } from "../ui/LucideIcons";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["whyChooseUs"] = {
  badge: "Нашите предимства",
  heading: "Защо да изберете Mall Electro?",
  subheading: "Инженерна прецизност",
  body:
    "Ние не просто инсталираме оборудване - ние създаваме устойчиви и ефективни системи, които работят безотказно за вашия бизнес.",
  cta: "Получете оферта",
  features: [
    { id: 1, title: "Инженерна прецизност", description: "Проекти, анализирани и подписани от сертифицирани инженери." },
    { id: 2, title: "Бързина и спазване на срокове", description: "Оптимизирани монтажни процеси с предвидимо изпълнение." },
    { id: 3, title: "Безкомпромисна безопасност", description: "Спазване на европейски стандарти за безопасност и качество." },
    { id: 4, title: "Прозрачно ценообразуване", description: "Ясни оферти без скрити такси и условия." },
  ],
};

const icons = [
  <Icons.Settings className="h-6 w-6" />,
  <Icons.Clock className="h-6 w-6" />,
  <Icons.ShieldCheck className="h-6 w-6" />,
  <Icons.FileCheck className="h-6 w-6" />,
];

interface WhyChooseUsProps {
  content?: HomeFullContent["whyChooseUs"];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content = defaultContent }) => {
  return (
    <section className="relative overflow-hidden bg-[#FDF7F4] py-28 text-[#1C2A39] lg:py-32">
      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="pt-4 lg:col-span-5">
            <FadeIn>
              <Badge text={content.badge} variant="accent" align="right" className="mb-6" />

              <h2 className="mb-6 font-sans text-3xl font-bold leading-[1.15] text-[#1C2A39] md:text-4xl lg:text-5xl">
                {content.heading}
              </h2>

              <h3 className="mb-4 text-xl font-bold text-[#1C2A39]">
                {content.subheading}
              </h3>

              <div className="mb-8 h-[1px] w-24 bg-[#FF6D2E]"></div>

              <p className="mb-10 text-lg font-light leading-relaxed text-[#56677A]">
                {content.body}
              </p>

              <Button variant="dark" size="md" icon="ChevronRight" href="/bg/kontakti">
                {content.cta}
              </Button>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
              {content.features.map((feature, index) => (
                <FadeIn key={feature.id} delay={index * 80} className="group">
                  <div className="flex items-start">
                    <div className="relative shrink-0 transition-transform duration-200 ease-out group-hover:scale-105">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6D2E]/10 text-[#FF6D2E] shadow-sm transition-colors duration-300 group-hover:bg-[#FF6D2E] group-hover:text-white group-hover:shadow-md lg:h-14 lg:w-14">
                        {React.cloneElement(icons[index] as React.ReactElement, {
                          strokeWidth: 1.75,
                        })}
                      </div>
                    </div>

                    <div className="ml-6 pt-1">
                      <h3 className="mb-2 text-lg font-bold leading-tight text-[#1C2A39] transition-colors duration-300 group-hover:text-[#FF6D2E]">
                        {feature.title}
                      </h3>
                      <p className="max-w-xs text-sm leading-relaxed text-[#6A6A6A]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
