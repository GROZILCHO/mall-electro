import React from "react";
import FadeIn from "../ui/FadeIn";
import { Icons } from "../ui/LucideIcons";
import Badge from "../ui/Badge";

const About: React.FC = () => {
  const advantages = [
    "Инженерна експертиза",
    "Опит в ХВП и агро сектора",
    "Собствени монтажни бригади",
    "Гаранция и поддръжка",
  ];

  return (
    <section id="about" className="relative overflow-hidden border-t border-gray-100 bg-white py-0">
      <div className="grid min-h-[700px] grid-cols-1 lg:grid-cols-2">
        <div className="group relative h-[500px] overflow-hidden bg-brand-dark lg:h-full">
          <div className="absolute inset-0">
            <picture>
              <source type="image/avif" srcSet="/optimized/hero-about-480.avif 480w, /optimized/hero-about-768.avif 768w, /optimized/hero-about-1024.avif 1024w, /optimized/hero-about-1600.avif 1600w" sizes="(min-width:1024px) 600px, 100vw" />
              <source type="image/webp" srcSet="/optimized/hero-about-480.webp 480w, /optimized/hero-about-768.webp 768w, /optimized/hero-about-1024.webp 1024w, /optimized/hero-about-1600.webp 1600w" sizes="(min-width:1024px) 600px, 100vw" />
              <img
                src="/images/about/hero-about.png"
                alt="Industrial Engineering Mall Electro"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover opacity-60 grayscale mix-blend-overlay transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39] via-[#1C2A39]/10 to-transparent"></div>
          </div>

          <div className="about-image-grid absolute inset-0 pointer-events-none opacity-20"></div>

          <div className="absolute bottom-12 left-12 right-12 z-10">
            <FadeIn direction="up">
              <div className="mb-4 inline-block border border-brand-orange/50 bg-brand-orange/10 px-3 py-1 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">
                  СЪСТОЯНИЕ НА СИСТЕМАТА: АКТИВНА
                </span>
              </div>
              <div className="mb-6 h-1 w-16 bg-white"></div>
              <p className="max-w-md font-mono text-sm text-white/80">
                CAD_РЕФ: 44-902 // СЕКТОР ИНДУСТРИАЛНА АВТОМАТИЗАЦИЯ
                <br />
                ЛОКАЦИЯ: ВАРНА, BG
              </p>
            </FadeIn>
          </div>

          <div className="absolute right-12 top-12 text-white/30">
            <Icons.Settings className="h-12 w-12 animate-spin-slow" />
          </div>
        </div>

        <div className="relative flex items-center bg-white p-12 lg:p-24">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-[40px] border-r-[1px] border-t-[1px] border-gray-100"></div>

          <div className="w-full max-w-lg">
            <FadeIn direction="left" delay={200}>
              <Badge text="За нас // 01" variant="pill-light" align="left" />

              <h2 className="mb-8 font-sans text-3xl font-bold leading-tight text-brand-dark lg:text-5xl">
                Кои сме ние
              </h2>

              <div className="mb-10 space-y-6 text-lg font-light leading-relaxed text-[#56677A]">
                <p className="border-l-2 border-brand-blue/20 pl-6">
                  <strong className="font-semibold text-brand-dark">Mall Electro</strong> инженерингова платформа част от групата на <strong>Уни Компани ЕООД</strong>, със специализация в {" "}
                  <strong>
                    електро обзавеждане, електрически табла, индустриална автоматизация, кабелни трасета и електроинсталации за ХВП, земеделието, индустриално и жилищно строителство
                  </strong>
                  . Работим на територията на <strong>България и Румъния</strong>, като
                  изпълняваме проекти по утвърдени европейски EN стандарти.
                </p>
                <p className="pl-6">
                  С опит в десетки индустриални обекти, комбинираме инженерно
                  мислене с практическа експертиза - от първоначален оглед и
                  проектиране до монтаж, пуск и поддръжка.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="group flex items-center">
                    <div className="relative mr-4 flex h-5 w-5 items-center justify-center">
                      <div className="absolute inset-0 rotate-45 rounded-sm bg-brand-orange/10 transition-transform duration-300 group-hover:rotate-90"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF6B35]"></div>
                    </div>
                    <span className="text-sm font-medium tracking-wide text-brand-dark transition-colors duration-300 group-hover:text-brand-blue">
                      {adv}
                    </span>
                  </div>
                ))}
              </div>

              <Badge variant="signature" text="Индустриална експертиза" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
