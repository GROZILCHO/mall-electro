import React from "react";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import SEO from "../components/seo/SEO";

const NotFound: React.FC = () => {
  return (
    <main className="relative overflow-hidden bg-[#F5F7FA] pt-20 text-brand-dark">
      <SEO page="notFound" />

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="page-hero-light-grid absolute inset-0 opacity-[0.12] pointer-events-none" />
        <div className="noise-texture absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <Badge
              text="СТРАНИЦАТА НЕ Е НАМЕРЕНА"
              variant="accent"
              align="left"
              className="mb-6"
            />

            <h1 className="mb-6 font-sans text-4xl font-bold leading-tight text-[#1C2A39] md:text-5xl">
              Тази страница не съществува
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-[#56677A] md:text-xl">
              Адресът може да е променен, преместен или временно недостъпен.
              Върнете се към началната страница или се свържете с нашия екип за съдействие.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" icon="ChevronRight" href="/bg/">
                Към началната страница
              </Button>
              <Button variant="dark" icon="Phone" href="/bg/kontakti">
                Свържете се с нас
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
