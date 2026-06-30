import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../ui/LucideIcons";
import FadeIn from "../ui/FadeIn";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["industries"] = {
  heading: "Индустрии, които обслужваме",
  body:
    "Сектори и работни среди, в които електро услугите и проектните решения се адаптират към конкретния обект, процес и режим на работа.",
  cardCta: "Виж индустрията",
  items: [
    { title: "ХВП - хранително-вкусова промишленост", text: "Електрически табла, автоматизация и системи за управление на производствени линии в ХВП предприятия - от суровинно приемане до пакетиране.", href: "/bg/industrii/hvp", image: "/images/industries/stainless-steel-production-line_2.png", imageAlt: "Food Industry", icon: "Factory", bullets: ["Инсталации за процесни линии и машини", "Командни табла и шкафове за управление", "Системи за комуникация и безопасност"] },
    { title: "Зърнопреработка", text: "Системи за сушене, транспорт, окабеляване и автоматизация на силозни стопанства и зърнопреработвателни бази.", href: "/bg/industrii/zarnoprerabotka", image: "/images/industries/wheat-close-up.png", imageAlt: "Grain Processing", icon: "Wheat", bullets: ["Електроинсталации за силози и транспортни линии", "Захранване и управление на сушилни и вентилатори", "Автоматизация и мониторинг на нива и потоци"] },
    { title: "Мелници", text: "Окабеляване и интеграция на процесни линии за мелнични и брашнени производства.", href: "/bg/industrii/melnitsi", image: "/images/industries/industrial-flour-milling-facility.png", imageAlt: "Mills", icon: "Settings", bullets: ["Управление на мелнични линии и сепаратори", "Командни табла за дозиране и смесване", "Индикация и защити по ключови точки на процеса"] },
    { title: "Агро", text: "Индустриални трасета и електро табла за складови бази, ферми и специализирани агро съоръжения.", href: "/bg/industrii/agro", image: "/images/industries/golden-farmland-aerial_2.png", imageAlt: "Agro", icon: "Warehouse", bullets: ["Захранване на агро съоръжения и помпени станции", "Осветление и силови линии за складови бази", "Управление на вентилация, охлаждане и напояване"] },
    { title: "Логистика и складови бази", text: "Електроинсталации за логистични центрове, хладилни камери и високостелажни складове.", href: "/bg/industrii/logistika", image: "/images/industries/modern-warehouse-interior_1.png", imageAlt: "Logistics", icon: "Truck", bullets: ["Табла и трасета за складова техника и конвейери", "Захранване на хладилни и фризерни камери", "Осветление, безопасност и аварийни системи"] },
    { title: "Производствени предприятия", text: "Електро инфраструктура за индустриални халета, технологични линии, машини, работни зони и производствени процеси.", href: "/bg/industrii/proizvodstveni-predpriyatiya", image: "/images/industries/hero_industriy.png", imageAlt: "Производствени предприятия", icon: "Factory", bullets: ["Захранване за машини, линии и работни зони", "Кабелни трасета през халета и технически помещения", "Автоматизация, ниско напрежение и сервизна поддръжка"] },
  ],
};

interface IndustriesPremiumProps {
  content?: HomeFullContent["industries"];
}

const IndustryBullets = ({ bullets, reverse = false }: { bullets: readonly string[]; reverse?: boolean }) => (
  <ul className={`space-y-2 mt-auto ${reverse ? "md:items-end md:flex md:flex-col" : ""}`}>
    {bullets.map((item) => (
      <li key={item} className={`flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className={`w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3 ${reverse ? "md:mr-0 md:ml-3" : ""}`}></div>
        {item}
      </li>
    ))}
  </ul>
);

const IndustriesPremium: React.FC<IndustriesPremiumProps> = ({ content = defaultContent }) => {
  const [first, second, third, fourth, fifth, sixth] = content.items;

  const renderIcon = (icon: string, className = "w-8 h-8") => {
    const Icon = Icons[icon as keyof typeof Icons] ?? Icons.Factory;
    return <Icon className={className} strokeWidth={1.5} />;
  };

  return (
    <section className="py-28 lg:py-32 bg-[#F5F7FA] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-screen-xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2A39] font-sans relative inline-block pb-6">
              {content.heading}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#FF6D2E]"></div>
            </h2>
            <p className="mt-6 text-[#53616F] text-lg max-w-2xl mx-auto font-light">
              {content.body}
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[first, second].map((industry, index) => {
              const reverse = index === 1;

              return (
                <FadeIn key={industry.href} delay={index * 150}>
                  <Link to={industry.href} id={index === 0 ? "industry-food" : "industry-grain"} className={`bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                      <img src={industry.image} alt={industry.imageAlt} loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
                      <div className={`absolute top-6 ${reverse ? "left-6" : "right-6"} text-[#FF6D2E]`}>
                        {renderIcon(industry.icon)}
                      </div>
                      <h3 className={`text-2xl font-bold text-[#1C2A39] mb-3 group-hover:text-[#4A90E2] transition-colors ${reverse ? "md:text-right" : ""}`}>{industry.title}</h3>
                      <p className={`text-[#56677A] text-sm mb-6 leading-relaxed ${reverse ? "md:text-right" : ""}`}>{industry.text}</p>
                      <IndustryBullets bullets={industry.bullets} reverse={reverse} />
                      <span className={`mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E] ${reverse ? "md:justify-end" : ""}`}>
                        {content.cardCta} <Icons.ChevronRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[third, fourth, fifth].map((industry, index) => (
              <FadeIn key={industry.href} delay={300 + index * 100}>
                <Link to={industry.href} className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group h-full block">
                  <div className="h-40 relative overflow-hidden">
                    <img src={industry.image} loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={industry.imageAlt} />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-6 right-6 bg-white p-3 rounded-full shadow-md text-[#FF6D2E]">
                      {renderIcon(industry.icon, "w-6 h-6")}
                    </div>
                    <h4 className="text-xl font-bold text-[#1C2A39] mb-2">{industry.title}</h4>
                    <p className="text-sm mb-6 text-[#56677A]">{industry.text}</p>
                    <IndustryBullets bullets={industry.bullets} />
                    <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                      {content.cardCta} <Icons.ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <Link to={sixth.href} id="industry-production" className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img src={sixth.image} alt={sixth.imageAlt} loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
                <div className="absolute top-6 right-6 text-[#FF6D2E]">
                  {renderIcon(sixth.icon)}
                </div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3 group-hover:text-[#4A90E2] transition-colors">{sixth.title}</h3>
                <p className="text-[#56677A] text-sm mb-6 leading-relaxed">{sixth.text}</p>
                <IndustryBullets bullets={sixth.bullets} />
                <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                  {content.cardCta} <Icons.ChevronRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPremium;
