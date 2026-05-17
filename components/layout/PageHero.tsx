import React, { useEffect } from "react";
import FadeIn from "../ui/FadeIn";
import AnimatedPattern from "../ui/AnimatedPattern";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { Icons } from "../ui/LucideIcons";
import { SITE_PHONE_RAW } from "../../utils/siteConfig";

type BadgeVariant =
  | "accent"
  | "section-line"
  | "pill-light"
  | "pill-dark"
  | "section"
  | "blueprint"
  | "status";

interface PageHeroProps {
  title: string;
  subtitle?: React.ReactNode;
  theme?: "light" | "dark" | "blueprint";
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  badgeAlign?: "left" | "center";
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  primaryCtaVariant?: "primary" | "secondary" | "dark";
  secondaryCtaVariant?: "secondary" | "dark";
  primaryCtaIcon?: keyof typeof Icons;
  secondaryCtaIcon?: keyof typeof Icons;
  heroImage?: string;
  heroImageAlt?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  theme = "light",
  badgeText,
  badgeVariant = "accent",
  badgeAlign = "left",
  primaryCtaText = "Поискай консултация",
  secondaryCtaText = "Обади се сега",
  primaryCtaHref = "/bg/kontakti",
  secondaryCtaHref = `tel:${SITE_PHONE_RAW}`,
  primaryCtaVariant = "primary",
  primaryCtaIcon = "ChevronRight",
  secondaryCtaVariant = "dark",
  secondaryCtaIcon = "Phone",
  heroImage = "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImageAlt = "Engineering",
}) => {
  const isDark = theme === "dark";
  const showBadge = Boolean(badgeText);
  const optimizedBase =
    heroImage && heroImage.startsWith("/")
      ? `/optimized/${heroImage.split("/").pop()?.replace(/\.(png|jpg|jpeg)$/i, "")}`
      : null;

  useEffect(() => {
    if (!optimizedBase) {
      return;
    }

    const href = `${optimizedBase}-1024.avif`;

    try {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);

      return () => document.head.removeChild(link);
    } catch {
      return;
    }
  }, [optimizedBase]);

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isDark ? "bg-[#0B1621] text-white" : "bg-[#F5F7FA] text-brand-dark"
      }`}
    >
      {isDark && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full scale-105 object-cover opacity-30 grayscale mix-blend-luminosity"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-industrial-metal-factory-1236-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {isDark ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a1520] via-[#0a1520]/90 to-[#0a1520]/60" />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/95 to-[#e9f1fb]" />
      )}

      <div
        className={`absolute inset-0 z-0 ${
          isDark ? "cad-grid-white opacity-[0.07]" : "page-hero-light-grid opacity-[0.12]"
        }`}
      />

      <div
        className={`absolute inset-0 z-0 pointer-events-none ${
          isDark ? "opacity-[0.04]" : "opacity-[0.03]"
        } noise-texture`}
      />

      <div
        className={`absolute inset-0 pointer-events-none bg-[url('/patterns/blueprint.svg')] bg-repeat ${
          isDark ? "invert opacity-[0.22]" : "opacity-[0.10]"
        }`}
      />

      <div className="absolute inset-0 pointer-events-none">
        <AnimatedPattern speed={0.6} />
      </div>

      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1621] via-[#0B1621]/90 to-transparent" />
      )}

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              {showBadge && <Badge text={badgeText} variant={badgeVariant} align={badgeAlign} />}
            </FadeIn>

            <FadeIn delay={100}>
              <h1
                className={`text-4xl font-bold leading-tight drop-shadow-sm md:text-5xl ${
                  isDark ? "text-white" : "text-[#1C2A39]"
                }`}
              >
                {title}
              </h1>
            </FadeIn>

            {subtitle && (
              <FadeIn delay={200}>
                <div
                  className={`mt-4 max-w-2xl space-y-4 text-base leading-relaxed md:text-xl ${
                    isDark ? "text-gray-300" : "text-[#1C2A39]/80"
                  }`}
                >
                  {subtitle}
                </div>
              </FadeIn>
            )}

            <FadeIn delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant={primaryCtaVariant} icon={primaryCtaIcon} href={primaryCtaHref}>
                  {primaryCtaText}
                </Button>
                <Button
                  variant={isDark ? "secondary" : secondaryCtaVariant}
                  icon={secondaryCtaIcon}
                  href={secondaryCtaHref}
                >
                  {secondaryCtaText}
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative order-1 hidden lg:order-2 lg:block">
            <div className="absolute -inset-4 rounded-md border-2 border-white/10"></div>
            <div
              className={`absolute -inset-4 pointer-events-none rounded-2xl animate-shift-lines ${
                isDark ? "page-hero-frame-grid-dark opacity-20" : "page-hero-frame-grid-light opacity-[0.35]"
              }`}
            ></div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/50 shadow-2xl">
              <picture>
                {optimizedBase && (
                  <>
                    <source
                      type="image/avif"
                      srcSet={`${optimizedBase}-480.avif 480w, ${optimizedBase}-768.avif 768w, ${optimizedBase}-1024.avif 1024w, ${optimizedBase}-1600.avif 1600w`}
                      sizes="(min-width:1024px) 600px, 100vw"
                    />
                    <source
                      type="image/webp"
                      srcSet={`${optimizedBase}-480.webp 480w, ${optimizedBase}-768.webp 768w, ${optimizedBase}-1024.webp 1024w, ${optimizedBase}-1600.webp 1600w`}
                      sizes="(min-width:1024px) 600px, 100vw"
                    />
                  </>
                )}
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                  width={600}
                  height={450}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/60 to-transparent"></div>
              <div className="absolute left-1/4 top-1/4 h-3 w-3 animate-pulse rounded-full bg-white shadow-[0_0_10px_white]"></div>
              <div className="absolute bottom-1/3 right-1/4 h-3 w-3 animate-pulse rounded-full bg-[#FF6D2E] shadow-[0_0_10px_#FF6D2E]"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-mono text-xs opacity-70">ПРОЕКТ: #8842</p>
                <p className="font-bold">ПРЕГЛЕД НА ОБЕКТА</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
