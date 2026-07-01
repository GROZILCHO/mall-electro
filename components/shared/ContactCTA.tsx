import React from "react";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";
import { SITE_PHONE_RAW } from "../../utils/siteConfig";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["contactCta"] = {
  imageAlt: "Инженерен проект и електро табло",
  projectLabel: "ПРОЕКТ: #8842",
  readyLabel: "СИСТЕМАТА Е ГОТОВА",
  badge: "ГОТОВИ ЗА РАЗГОВОР",
  heading: "Нека изградим вашата",
  highlightedHeading: "система заедно.",
  body: "Инженерният ни екип е на разположение за оглед, проектиране и изпълнение.",
  strongBody:
    "Ще прегледаме запитването и ще се свържем с вас за уточняване на обхвата и следващите стъпки.",
  primaryCta: "Изпратете запитване",
  secondaryCta: "Говорете с инженер",
};

interface ContactCTAProps {
  content?: HomeFullContent["contactCta"];
  primaryCtaHref?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ content = defaultContent, primaryCtaHref = "/bg/kontakti" }) => {
  return (
    <section className="relative overflow-hidden bg-[#E7EDF5] py-24 lg:py-32">
      <div className="contact-cta-grid absolute inset-0 pointer-events-none opacity-[0.03]" />
      <div className="contact-cta-dots absolute inset-0 pointer-events-none opacity-[0.05]" />
      <div className="contact-cta-diagonal absolute inset-0 pointer-events-none opacity-[0.03]" />

      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5">
          <div className="relative hidden lg:col-span-3 lg:block">
            <FadeIn direction="left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg border-2 border-[#1C2A39]/10"></div>
                <div className="contact-cta-panel-grid absolute -inset-4 animate-shift pointer-events-none opacity-20"></div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/50 shadow-2xl">
                  <img
                    src="/images/Premium-Electrical-Panel-Display.png"
                    alt={content.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A39]/80 to-transparent"></div>
                  <div className="absolute left-1/4 top-1/4 h-3 w-3 animate-[pulse-dot_3s_infinite] rounded-full bg-white shadow-[0_0_10px_white]"></div>
                  <div className="absolute bottom-1/3 right-1/4 h-3 w-3 animate-[pulse-dot_3s_infinite_1s] rounded-full bg-[#FF6D2E] shadow-[0_0_10px_#FF6D2E]"></div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-mono text-xs opacity-70">{content.projectLabel}</p>
                    <p className="font-bold">{content.readyLabel}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#1C2A39]/10 bg-[#1C2A39]/5 px-3 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#FF6D2E]"></div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1C2A39]">
                  {content.badge}
                </span>
              </div>

              <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-[#1C2A39] lg:text-5xl">
                {content.heading} <br />
                <span className="text-[#4A90E2]">{content.highlightedHeading}</span>
              </h2>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#56677A]">
                {content.body}
                <br />
                <span className="font-semibold text-[#1C2A39]">{content.strongBody}</span>
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <Button variant="primary" size="md" icon="ArrowRight" href={primaryCtaHref}>
                  {content.primaryCta}
                </Button>
                <Button variant="outline" size="md" icon="Phone" href={`tel:${SITE_PHONE_RAW}`}>
                  {content.secondaryCta}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
