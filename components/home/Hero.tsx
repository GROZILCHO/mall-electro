import React from "react";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import { SITE_PHONE_RAW } from "../../utils/siteConfig";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["hero"] = {
  badge: "Индустриален инженеринг",
  title: "Индустриални електро-инсталации и системи за",
  highlightedTitle: "надеждно производство",
  subtitle:
    "Mall Electro предоставя цялостни инженерни решения - от проектиране на електроинсталации и командни табла до изграждане на автоматизирани системи и индустриални трасета. Работим по утвърдени стандарти, гарантираме безопасност, ефективност и устойчивост на всеки производствен процес.",
  primaryCta: "Вижте нашите услуги",
  secondaryCta: "Свържете се с инженер",
  imageAlt: "Индустриална електро инфраструктура в производствена среда",
  cadLabel: "CAD_ИЗГЛЕД_01 [НА ЖИВО]",
};

const TechSVG = () => (
  <svg
    viewBox="0 0 600 400"
    className="h-full w-full drop-shadow-[0_0_15px_rgba(74,144,226,0.3)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M50 50 H 300 V 350 H 50 V 50 Z" className="draw-path text-brand-blue" strokeWidth="2" />
    <path d="M320 50 H 550 V 350 H 320 V 50 Z" className="draw-path-delay text-brand-blue/60" />
    <path d="M70 80 H 280 M 70 120 H 280 M 70 160 H 280" className="draw-path-delay-2 text-brand-orange" />
    <path d="M100 200 V 300 M 140 200 V 300 M 180 200 V 300 M 220 200 V 300" className="draw-path text-white/40" />
    <circle cx="100" cy="200" r="3" className="tech-pulse-dot fill-brand-orange text-brand-orange" stroke="none" />
    <circle cx="140" cy="200" r="3" className="tech-pulse-dot fill-brand-orange text-brand-orange" stroke="none" />
    <circle cx="180" cy="200" r="3" className="tech-pulse-dot fill-brand-orange text-brand-orange" stroke="none" />
    <circle cx="220" cy="200" r="3" className="tech-pulse-dot fill-brand-orange text-brand-orange" stroke="none" />
    <rect x="340" y="80" width="80" height="60" className="draw-path-delay text-white/30" />
    <rect x="440" y="80" width="80" height="60" className="draw-path-delay text-white/30" />
    <rect x="340" y="160" width="180" height="150" className="draw-path-delay-2 text-brand-blue/40" />
    <path d="M280 100 H 340 M 280 140 H 340" className="draw-path text-brand-blue" strokeDasharray="5 5" />
    <path d="M30 50 V 350 M 25 350 H 35 M 25 50 H 35" className="text-white/20" />
  </svg>
);

interface HeroProps {
  content?: HomeFullContent["hero"];
}

const Hero: React.FC<HeroProps> = ({ content = defaultContent }) => {
  return (
    <section className="relative flex min-h-[95vh] w-full items-center overflow-hidden bg-[#0a1520]">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/avif"
            srcSet="/optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-480.avif 480w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-768.avif 768w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1024.avif 1024w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1600.avif 1600w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-480.webp 480w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-768.webp 768w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1024.webp 1024w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png"
            alt={content.imageAlt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-105 object-cover opacity-30 grayscale mix-blend-luminosity"
          />
        </picture>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a1520] via-[#0a1520]/90 to-[#0a1520]/60" />
      <div className="absolute inset-0 z-0 bg-brand-blue/5 mix-blend-overlay" />
      <div className="cad-grid-white absolute inset-0 z-0 opacity-[0.05]" />
      <div className="noise-texture absolute inset-0 z-0 pointer-events-none opacity-[0.04]" />

      <div className="container relative z-10 mx-auto px-6 pb-24 pt-24 lg:px-12 lg:pb-32 lg:pt-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn delay={0}>
              <div className="mb-8 inline-flex items-center gap-3 border-l-2 border-brand-orange bg-white/5 px-3 py-1 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                  {content.badge}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 font-sans text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                {content.title}{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-blue/60 bg-clip-text text-transparent">
                  {content.highlightedTitle}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="mb-10 max-w-2xl border-l border-white/10 pl-4 text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                <strong>{content.subtitle}</strong>
              </h2>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-6 flex flex-col gap-8 sm:flex-row md:gap-10">
                <Button variant="primary" size="md" icon="ChevronRight" href="/bg/uslugi">
                  {content.primaryCta}
                </Button>
                <Button variant="secondary" size="md" icon="Phone" href={`tel:${SITE_PHONE_RAW}`}>
                  {content.secondaryCta}
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="perspective-1000 relative hidden lg:col-span-5 lg:block">
            <FadeIn delay={400} direction="left">
              <div className="relative aspect-[4/3] w-full rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-brand-orange"></div>
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-brand-blue"></div>
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-brand-blue"></div>
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-brand-orange"></div>

                <TechSVG />

                <div className="absolute bottom-6 right-6 border border-brand-blue/30 bg-brand-dark/80 px-3 py-1 font-mono text-[10px] text-brand-blue">
                  {content.cadLabel}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full text-white">
        <svg className="h-16 w-full md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,100 L0,40 L300,40 L340,0 L1440,0 L1440,100 Z" />
        </svg>

        <div className="absolute bottom-[60px] left-0 hidden h-[1px] w-[300px] bg-brand-blue/40 md:block md:bottom-[84px]"></div>
        <div className="absolute bottom-[60px] left-[300px] hidden h-[1px] w-[40px] origin-bottom-left -rotate-[45deg] bg-brand-blue/40 md:block md:bottom-[84px]"></div>
        <div className="absolute bottom-[58px] left-[298px] hidden h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
