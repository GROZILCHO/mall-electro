import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../ui/FadeIn";
import Badge from "../ui/Badge";
import { Icons } from "../ui/LucideIcons";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["services"] = {
  badge: "Системни възможности",
  heading: "Основни електро услуги за индустриални обекти",
  body:
    "Шест основни направления покриват най-честите нужди на индустриални обекти - от електрически табла и кабелни трасета до автоматизация, ниско напрежение и сервиз.",
  items: [
    { id: 1, title: "Електрически табла", description: "Проектиране, изработка и пуск на електрически табла, командни шкафове и табла за управление.", icon: "LayoutDashboard", href: "/bg/uslugi/elektricheski-tabla" },
    { id: 2, title: "Кабелни трасета", description: "Кабелни скари, трасета и подредено окабеляване за индустриални обекти и технологични линии.", icon: "Factory", href: "/bg/uslugi/kabelni-traseta" },
    { id: 3, title: "Индустриални електроинсталации", description: "Цялостно изпълнение на електроинсталации за производствени обекти, складове, машини и работни зони.", icon: "HardHat", href: "/bg/uslugi/industrialni-elektroinstalatsii" },
    { id: 4, title: "Автоматизация", description: "Интеграция на контролни системи, сензори, табла и управление на машини и процеси.", icon: "PenTool", href: "/bg/uslugi/avtomatizatsia" },
    { id: 5, title: "Ниско напрежение", description: "Захранващи линии, нисковолтови връзки и електро инфраструктура за машини, консуматори и обекти.", icon: "Zap", href: "/bg/uslugi/nisko-naprezhenie" },
    { id: 6, title: "Поддръжка и сервиз", description: "Диагностика, профилактика, сервизни дейности и поддръжка на индустриални електро системи.", icon: "Users", href: "/bg/uslugi/poddrazhka-i-serviz" },
  ],
};

interface ServicesProps {
  content?: HomeFullContent["services"];
}

const Services: React.FC<ServicesProps> = ({ content = defaultContent }) => {
  const isEnglish = content.badge === "System capabilities";
  const serviceLabel = isEnglish ? "Service" : "Услуга";
  const detailLabel = isEnglish ? "View details" : "ВИЖ ПОДРОБНОСТИ";

  return (
    <section id="services" className="py-28 bg-[#F3F6FB] relative overflow-hidden">
      <div className="cad-grid-slate absolute inset-0 z-0 opacity-[0.4] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn>
          <div className="mb-20 max-w-4xl">
            <Badge text={content.badge} variant="section-line" />
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C2A39] leading-[1.1] font-sans tracking-tight">
              {content.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#56677A]">
              {content.body}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <Link
                to={service.href}
                className="p-8 group relative h-full bg-white border border-gray-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(74,144,226,0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-100 group-hover:border-[#4A90E2] transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-100 group-hover:border-brand-orange transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 shadow-[0_0_10px_rgba(255,107,53,0.5)]" />

                <div className="flex justify-between items-start mb-8 border-b border-gray-50 pb-6">
                  <div className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                    {serviceLabel} {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute top-6 right-6">
                    <div className="absolute inset-0 bg-brand-blue/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    {React.createElement(Icons[service.icon as keyof typeof Icons], {
                      className: "w-7 h-7 text-brand-blue opacity-80 group-hover:text-brand-orange transition-all duration-300",
                    })}
                  </div>
                </div>

                <h3 className="flex justify-between text-xl font-bold text-[#1C2A39] mb-4 group-hover:text-brand-blue transition-colors font-sans tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[#56677A] text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-dashed border-gray-100 flex items-center justify-between gap-2 text-sm text-gray-500 font-medium">
                  <span className="text-gray-400 font-mono uppercase group-hover:text-brand-blue transition-colors">
                    {detailLabel}
                  </span>
                  <Icons.ChevronRight className="w-6 h-6 flex items-center justify-center bg-gray-50 rounded group-hover:bg-brand-orange group-hover:text-white transition-all duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
