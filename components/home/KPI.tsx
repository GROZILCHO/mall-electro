import React from "react";
import FadeIn from "../ui/FadeIn";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["kpi"] = {
  heading: "Инженерни Показатели",
  labelPrefix: "Показател //",
  metrics: [
    { id: "01", value: "15+", label: "Години опит", sub: "В индустриалния сектор" },
    { id: "02", value: "120+", label: "Завършени проекта", sub: "Индустриални инсталации" },
    { id: "03", value: "30+", label: "Ключови клиента", sub: "ХВП и Агро индустрия" },
    { id: "04", value: "98%", label: "Удовлетвореност", sub: "От дългосрочни партньори" },
  ],
};

interface KPIProps {
  content?: HomeFullContent["kpi"];
}

const KPI: React.FC<KPIProps> = ({ content = defaultContent }) => {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0B1219] overflow-hidden border-t border-white/5">
      <div className="cad-grid-white absolute inset-0 z-0 opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="h-[1px] w-12 bg-brand-orange"></div>
            <h3 className="text-white font-mono text-sm uppercase tracking-[0.2em]">{content.heading}</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {content.metrics.map((metric, index) => (
            <FadeIn key={metric.id} delay={index * 100} className="relative group">
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-[1px] bg-white/10 group-hover:bg-brand-blue/30 transition-colors duration-500"></div>
              )}
              {index !== 0 && (
                <div className="block lg:hidden absolute top-0 left-12 right-12 h-[1px] bg-white/10"></div>
              )}

              <div className="p-8 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-300 hover:bg-white/[0.02]">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 group-hover:text-brand-blue transition-colors">
                  {content.labelPrefix} {metric.id}
                </span>

                <div className="relative mb-2">
                  <span className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-[#ff9f7a] group-hover:to-brand-orange transition-all duration-500 font-sans tracking-tight">
                    {metric.value}
                  </span>
                  <div className="absolute inset-0 bg-brand-orange/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
                </div>

                <h4 className="text-white font-bold text-lg mb-1">{metric.label}</h4>
                <p className="text-gray-300 text-sm font-light">{metric.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPI;
