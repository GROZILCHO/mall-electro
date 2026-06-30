import SEO from "../components/seo/SEO";
import Button from "../components/ui/Button";
import FadeIn from "../components/ui/FadeIn";
import { enHomePageContent } from "../data/i18n/content/en";
import { SITE_PHONE_RAW } from "../utils/siteConfig";

export default function EnglishHomePreview() {
  const { hero, stats = [], sectionIntros = [], cta } = enHomePageContent;

  return (
    <div className="min-h-screen bg-[#0B1219] text-white font-body">
      <SEO page="englishHomePreview" />

      <main>
        <section className="relative overflow-hidden bg-[#0a1520]">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                type="image/avif"
                srcSet="/optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-768.avif 768w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1024.avif 1024w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1600.avif 1600w"
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet="/optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-768.webp 768w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1024.webp 1024w, /optimized/industrial-electrical-infrastructure-homepage-hero-wide-01-1600.webp 1600w"
                sizes="100vw"
              />
              <img
                src="/images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png"
                alt={hero?.heroImageAlt}
                fetchPriority="high"
                decoding="async"
                className="h-full min-h-[720px] w-full scale-105 object-cover opacity-25 grayscale mix-blend-luminosity"
              />
            </picture>
          </div>

          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a1520] via-[#0a1520]/90 to-[#0a1520]/50" />
          <div className="cad-grid-white absolute inset-0 z-0 opacity-[0.05]" />

          <div className="container relative z-10 mx-auto px-6 py-24 lg:px-12 lg:py-32">
            <FadeIn>
              <div className="mb-8 inline-flex border-l-2 border-brand-orange bg-white/5 px-3 py-1 backdrop-blur-md">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
                  {hero?.badgeText}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="max-w-5xl font-sans text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                {hero?.title}
              </h1>
            </FadeIn>

            <FadeIn delay={180}>
              <p className="mt-8 max-w-3xl border-l border-white/10 pl-5 text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                {hero?.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={260}>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row">
                <Button variant="primary" size="md" icon="ChevronRight" href="/bg/uslugi">
                  {hero?.primaryCtaText}
                </Button>
                <Button variant="secondary" size="md" icon="Phone" href={`tel:${SITE_PHONE_RAW}`}>
                  {hero?.secondaryCtaText}
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111822]">
          <div className="container mx-auto grid grid-cols-1 divide-y divide-white/10 px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 80}>
                <div className="py-10 md:px-8">
                  <p className="font-sans text-4xl font-bold text-brand-orange md:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-gray-300">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="bg-white py-24 text-[#1C2A39] lg:py-28">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-12">
            {sectionIntros.map((section, index) => (
              <FadeIn key={section.heading} delay={index * 120}>
                <article className="h-full border border-gray-200 bg-[#F5F7FA] p-8 shadow-sm">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-5 font-sans text-3xl font-bold leading-tight md:text-4xl">
                    {section.heading}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[#56677A]">{section.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="bg-[#0B1219] py-24 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-4xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange">
                  English preview
                </p>
                <h2 className="mt-5 font-sans text-3xl font-bold leading-tight md:text-5xl">{cta?.title}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{cta?.description}</p>
                <div className="mt-8 flex flex-col gap-6 sm:flex-row">
                  <Button variant="primary" size="md" icon="ChevronRight" href="/bg/kontakti">
                    {cta?.primaryCtaText}
                  </Button>
                  <Button variant="secondary" size="md" icon="ChevronRight" href="/bg/">
                    {cta?.secondaryCtaText}
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
