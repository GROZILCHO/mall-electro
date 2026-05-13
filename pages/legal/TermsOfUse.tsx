import React from "react";
import PageHero from "../../components/layout/PageHero";
import SEO from "../../components/seo/SEO";
import { SITE_EMAIL } from "../../utils/siteConfig";

const TermsOfUse: React.FC = () => {
  return (
    <div>
      <SEO page="termsOfUse" />
      <PageHero
        title="Условия за ползване"
        subtitle="Тези условия описват основните правила за използване на сайта на Mall Electro и информационния характер на публикуваното съдържание."
        theme="light"
        badgeText="Правна информация"
        badgeVariant="accent"
        heroImage="/images/about/hero-about.png"
        heroImageAlt="Индустриална електро документация и инженерна среда."
        primaryCtaText="Свържете се"
        primaryCtaHref="/bg/kontakti"
        secondaryCtaText="Поверителност"
        secondaryCtaHref="/bg/politika-za-poveritelnost"
        secondaryCtaVariant="dark"
      />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-10 text-[#1C2A39]">
            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Информационен характер</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Съдържанието на сайта е предоставено с информационна цел и
                описва общо направление на дейности, услуги и индустриални
                приложения. То не представлява техническо задание, проектна
                документация или индивидуална консултация.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Оферти и договори</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Публикуваната информация не представлява автоматична оферта или
                договорно предложение. Всеки проект, оглед, техническо задание,
                срок и цена се уточняват индивидуално според конкретния обект,
                обхват и изисквания.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Интелектуална собственост</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Текстовете, структурата, изображенията, графичните елементи и
                другото съдържание на сайта са защитени. Използване, копиране
                или публикуване извън обичайното разглеждане на сайта е
                допустимо само при приложимо право или предварително съгласие.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Допустимо използване</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Не се допуска използване на сайта по начин, който нарушава
                закона, засяга сигурността, претоварва инфраструктурата,
                въвежда зловреден код или възпрепятства нормалното му
                функциониране.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Ограничаване на отговорността</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Mall Electro полага усилия информацията на сайта да бъде
                актуална и точна, но не гарантира, че всички материали са
                изчерпателни или приложими към всеки конкретен проект.
                Решенията за електро системи следва да се вземат след технически
                преглед и професионална оценка.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Контакт</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                За въпроси относно сайта или условията за ползване можете да ни
                пишете на{" "}
                <a className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
