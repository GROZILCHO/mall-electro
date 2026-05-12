import GridContainer from "../layout/GridContainer";

const items = [
  {
    title: "Ел. табла за ХВП предприятие",
    subtitle: "Проектиране, изработка и пуск",
    image: "/images/industries/stainless-steel-production-line_2.png",
    tag: "ХВП",
  },
  {
    title: "Автоматизация на силозен комплекс",
    subtitle: "PLC контрол и процесна визуализация",
    image: "/images/industries/golden-hour-grain-complex.png",
    tag: "Зърнопреработка",
  },
  {
    title: "Ел. инсталации за логистичен център",
    subtitle: "Окабеляване, ВОЛС и UPS системи",
    image: "/images/industries/modern-warehouse-interior_1.png",
    tag: "Логистика",
  },
];

export default function IndustriesCasesStrip() {
  return (
    <GridContainer>
      <section className="py-16">
        <h2 className="mb-6 text-center font-sans text-3xl font-bold text-brand-dark">
          Реализирани индустриални решения
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
          Примери от реални обекти в <strong>ХВП, зърнопреработка и логистични бази</strong>,
          изпълнени от нашите инженери и монтажни екипи.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
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
