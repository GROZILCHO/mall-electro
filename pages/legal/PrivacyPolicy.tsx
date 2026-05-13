import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/layout/PageHero";
import SEO from "../../components/seo/SEO";
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from "../../utils/siteConfig";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <SEO page="privacyPolicy" />
      <PageHero
        title="Политика за поверителност"
        subtitle="Тази страница описва как Mall Electro обработва лични данни, получени чрез сайта, контактни форми, имейл или телефонна комуникация."
        theme="light"
        badgeText="Правна информация"
        badgeVariant="accent"
        heroImage="/images/about/hero-about.png"
        heroImageAlt="Индустриален електро инженеринг и техническа документация."
        primaryCtaText="Свържете се"
        primaryCtaHref="/bg/kontakti"
        secondaryCtaText="Бисквитки"
        secondaryCtaHref="/bg/politika-za-biskvitki"
        secondaryCtaVariant="dark"
      />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-10 text-[#1C2A39]">
            <div className="rounded border border-[#E7EDF5] bg-[#F5F7FA] p-6">
              <p className="text-sm leading-relaxed text-[#1C2A39]/80">
                Настоящият текст има информационен характер и подлежи на
                финален преглед от собственика на дружеството или правен
                консултант преди официално публикуване.
              </p>
            </div>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Администратор на лични данни</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Администратор на личните данни е Mall Electro. За въпроси,
                свързани с поверителността и обработването на лични данни,
                можете да се свържете с нас на{" "}
                <a className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>{" "}
                или на телефон {SITE_PHONE_DISPLAY}.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Какви данни може да събираме</h2>
              <ul className="space-y-3 text-[#1C2A39]/80">
                <li>Име, фирма, телефон и имейл, когато изпратите запитване.</li>
                <li>Информация за проект, обект или техническо задание, предоставена от вас.</li>
                <li>Технически данни, нужни за нормалната работа и сигурност на сайта.</li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Цели и правни основания</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Данните се обработват за отговор на запитвания, подготовка на
                оферти, комуникация по проекти, изпълнение на договорни или
                преддоговорни отношения, счетоводни и законови задължения, както
                и за защита на легитимни интереси, свързани със сигурността на
                сайта и коректната бизнес комуникация.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Срокове за съхранение</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Съхраняваме лични данни само за срока, необходим за съответната
                цел, или за сроковете, изисквани от приложимото законодателство.
                Данни от запитвания могат да се пазят за последваща комуникация
                по конкретен проект, освен ако не поискате тяхното изтриване и
                няма законово основание за по-дълго съхранение.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Получатели и обработващи лица</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Достъп до данни може да имат доставчици на хостинг, имейл,
                техническа поддръжка, счетоводни или правни услуги, когато това
                е необходимо за дейността и при подходящи мерки за защита.
                Данни могат да бъдат предоставени и на държавни органи, когато
                това се изисква по закон.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Вашите права</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Имате право на достъп, корекция, изтриване, ограничаване на
                обработването, възражение, преносимост на данните и оттегляне на
                съгласие, когато обработването се основава на съгласие.
              </p>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Имате право да подадете жалба до Комисията за защита на личните
                данни в Република България, ако считате, че обработването на
                данните ви нарушава приложимите правила.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Контакт за заявки</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                За заявки, свързани с лични данни, пишете на{" "}
                <a className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" href={`mailto:${SITE_EMAIL}`}>
                  {SITE_EMAIL}
                </a>
                . За информация относно технически файлове и съхранение вижте{" "}
                <Link className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" to="/bg/politika-za-biskvitki">
                  Политиката за бисквитки
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
