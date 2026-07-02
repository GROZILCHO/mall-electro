import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../ui/LucideIcons";
import FadeIn from "../ui/FadeIn";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["panelEngineering"] = {
  eyebrow: "Инженерна експертиза",
  heading: "Проектиране и изработка на електрически табла",
  body:
    "Изработваме електрически табла по спецификация - от компактни командни шкафове до комплексни табла за управление на индустриални процеси. Работим по европейски стандарти, като гарантираме безопасност, ефективност и дългосрочна надеждност.",
  bullets: [
    "Проектна документация по EN стандарти",
    "Висококачествени компоненти (Siemens, Schneider, ABB)",
    "Тестване и протоколиране",
  ],
  cta: "Виж електрически табла",
  imageAlt: "Industrial Control Panel",
  status: "НАБЛЮДЕНИЕ НА ЖИВО",
};

interface PanelEngineeringProps {
  content?: HomeFullContent["panelEngineering"];
  ctaHref?: string;
}

const PanelEngineering: React.FC<PanelEngineeringProps> = ({
  content = defaultContent,
  ctaHref = "/bg/uslugi/elektricheski-tabla",
}) => {
  return (
    <section className="py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="cad-grid-blue absolute inset-0 opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#0A4A8A]"></div>
                <span className="text-[#0A4A8A] font-mono font-bold text-xs uppercase tracking-[0.2em]">{content.eyebrow}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-sans leading-[1.1] text-[#1C2A39]">
                {content.heading}
              </h2>

              <p className="text-lg text-[#56677A] mb-10 font-light leading-relaxed max-w-lg">
                {content.body}
              </p>

              <ul className="space-y-5 mb-12">
                {content.bullets.map((bullet, index) => {
                  const Icon = [Icons.FileCheck, Icons.Cpu, Icons.Activity][index] ?? Icons.FileCheck;

                  return (
                    <li key={bullet} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#0A4A8A]/5 border border-[#0A4A8A]/10 flex items-center justify-center text-[#0A4A8A] group-hover:bg-[#0A4A8A] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-[#333] font-medium text-base">{bullet}</span>
                    </li>
                  );
                })}
              </ul>

              <Link to={ctaHref} className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C2A39] text-white font-medium text-sm tracking-wide rounded hover:bg-black transition-all hover:gap-5 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
                <span>{content.cta}</span>
                <Icons.ChevronRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl shadow-[0_14px_42px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-xl">
                  <img
                    src="/images/home/hero-home.png"
                    alt={content.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-4 border border-white/20 rounded pointer-events-none z-10"></div>
                <div className="cad-grid-white absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay z-10"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/40 z-10"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/40 z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rounded-full animate-pulse z-10 pointer-events-none"></div>
                <div className="absolute bottom-10 right-10 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10 z-20">
                  <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-white font-mono tracking-wider">{content.status}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelEngineering;
