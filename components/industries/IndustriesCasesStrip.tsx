import GridContainer from "../layout/GridContainer";
import type { IndustriesCasesStripContent } from "../../data/i18n/content";

const items = [
  {
    title: "Електро инфраструктура за ХВП обект",
    subtitle: "Табла, трасета, ниско напрежение и контролни връзки за производствена среда.",
    image: "/images/industries/stainless-steel-production-line_2.png",
    tag: "ХВП",
  },
  {
    title: "Автоматизация за зърнопреработка",
    subtitle: "Контролни точки, датчици, табла и процесни връзки за приемане, транспорт и обработка.",
    image: "/images/industries/golden-hour-grain-complex.png",
    tag: "Зърнопреработка",
  },
  {
    title: "Кабелна инфраструктура за логистична база",
    subtitle: "Трасета, осветление, захранване и сервизни точки за складови и товаро-разтоварни зони.",
    image: "/images/industries/modern-warehouse-interior_1.png",
    tag: "Логистика",
  },
];

interface IndustriesCasesStripProps {
  content?: IndustriesCasesStripContent;
}

export default function IndustriesCasesStrip({ content }: IndustriesCasesStripProps) {
  const activeItems = content?.items ?? items;

  return (
    <GridContainer>
      <section className="py-16">
        <h2 className="mb-6 text-center font-sans text-3xl font-bold text-brand-dark">
          {content?.heading ?? "Типови индустриални сценарии"}
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          {content?.body ??
            "Примери за проектни ситуации, в които електрически табла, кабелни трасета, автоматизация и сервизна поддръжка се комбинират според средата и работния режим на обекта."}
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {activeItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <span className="mb-4 inline-block rounded-md bg-brand-orange px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {item.tag}
                </span>

                <h3 className="mb-2 text-xl font-semibold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </GridContainer>
  );
}
