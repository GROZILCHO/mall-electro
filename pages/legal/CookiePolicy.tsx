import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/layout/PageHero";
import SEO from "../../components/seo/SEO";

const CookiePolicy: React.FC = () => {
  return (
    <div>
      <SEO page="cookiePolicy" />
      <PageHero
        title="Политика за бисквитки"
        subtitle="Тази страница обяснява какво представляват бисквитките и какви технически механизми може да се използват при работа със сайта на Mall Electro."
        theme="light"
        badgeText="Правна информация"
        badgeVariant="accent"
        heroImage="/images/about/hero-about.png"
        heroImageAlt="Техническа среда за индустриални електро системи."
        primaryCtaText="Политика за поверителност"
        primaryCtaHref="/bg/politika-za-poveritelnost"
        secondaryCtaText="Контакти"
        secondaryCtaHref="/bg/kontakti"
        secondaryCtaVariant="dark"
      />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <div className="space-y-10 text-[#1C2A39]">
            <div className="rounded border border-[#E7EDF5] bg-[#F5F7FA] p-6">
              <p className="text-sm leading-relaxed text-[#1C2A39]/80">
                Към момента сайтът не използва добавени аналитични или
                маркетингови скриптове. Ако такива бъдат въведени по-късно,
                политиката ще бъде актуализирана и ще се приложи подходящ
                механизъм за съгласие.
              </p>
            </div>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Какво са бисквитките</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Бисквитките са малки файлове или записи, които сайтът може да
                съхранява в браузъра, за да поддържа основна функционалност,
                сигурност, предпочитания или статистика.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Текущо използване</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Сайтът може да използва техническо съхранение, необходимо за
                нормално зареждане, сигурност, кеширане и коректна работа на
                статичните страници. Не са добавени отделни аналитични,
                рекламни или поведенчески проследяващи бисквитки.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Аналитични и маркетингови бисквитки</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Ако в бъдеще бъдат добавени аналитични или маркетингови
                инструменти, те ще бъдат описани тук и ще се използват само при
                спазване на приложимите изисквания за информираност и съгласие.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Управление на бисквитки</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Можете да управлявате или изтривате бисквитки от настройките на
                браузъра си. Ограничаването на технически файлове може да
                повлияе на начина, по който някои сайтове се зареждат или
                функционират.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-bold">Връзка с поверителността</h2>
              <p className="leading-relaxed text-[#1C2A39]/80">
                Повече информация за обработването на лични данни е налична в{" "}
                <Link className="font-semibold text-[#4A90E2] hover:text-[#FF6D2E]" to="/bg/politika-za-poveritelnost">
                  Политиката за поверителност
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

export default CookiePolicy;
