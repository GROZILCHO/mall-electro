import React from "react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import { Icons } from "../ui/LucideIcons";

const solutionCards = [
  {
    title: "Нов производствен обект",
    text: "Електро инфраструктура за нови производствени, складови и технологични обекти.",
    href: "/bg/reshenia/nov-proizvodstven-obekt",
    icon: "Factory",
  },
  {
    title: "Модернизация на електро система",
    text: "Оценка, подмяна и разширяване на съществуващи табла, трасета и захранвания.",
    href: "/bg/reshenia/modernizatsia-na-elektro-sistema",
    icon: "Settings",
  },
  {
    title: "Табла и автоматизация за технологични линии",
    text: "Комбинация от табла, управление, сензори, трасета и пуск на машини или линии.",
    href: "/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii",
    icon: "Cpu",
  },
  {
    title: "Кабелна инфраструктура за база",
    text: "Кабелни трасета, ниско напрежение и подредено окабеляване за индустриални бази.",
    href: "/bg/reshenia/kabelna-infrastruktura-za-baza",
    icon: "Activity",
  },
  {
    title: "Сервиз и разширяване",
    text: "Диагностика, поддръжка, подобрения и разширяване на работещи електро системи.",
    href: "/bg/reshenia/serviz-i-razshiryavane",
    icon: "Wrench",
  },
  {
    title: "Електромонтаж на височина с вишка",
    text: "Електромонтажни дейности във високи халета, складове и труднодостъпни точки.",
    href: "/bg/reshenia/elektromontazh-na-visochina-s-vishka",
    icon: "HardHat",
  },
] satisfies Array<{
  title: string;
  text: string;
  href: string;
  icon: keyof typeof Icons;
}>;

const SolutionsTeaser: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="cad-grid-blue absolute inset-0 pointer-events-none opacity-[0.04]" />
      <div className="container relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-8">
            <Badge text="Проектни сценарии" variant="blueprint" />
            <h2 className="max-w-4xl font-sans text-3xl font-bold leading-tight text-[#1C2A39] md:text-5xl">
              Решения според проектната ситуация
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#56677A]">
              Комбинираме услуги според конкретния обект - ново изграждане,
              модернизация, технологична линия, кабелна инфраструктура, сервиз
              или работа на височина.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-4 lg:text-right" delay={120}>
            <Button variant="dark" size="md" icon="ChevronRight" href="/bg/reshenia">
              Виж всички решения
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((solution, index) => {
            const Icon = Icons[solution.icon];

            return (
              <FadeIn key={solution.href} delay={index * 70}>
                <Link
                  to={solution.href}
                  className="group block h-full border border-gray-200 bg-[#F5F7FA] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-6 flex items-start justify-between border-b border-white pb-5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Решение {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#1C2A39] transition-colors duration-300 group-hover:text-brand-blue">
                    {solution.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#56677A]">{solution.text}</p>
                  <span className="mt-5 inline-flex items-center text-sm font-bold text-brand-blue transition-colors group-hover:text-brand-orange">
                    Виж решението <Icons.ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsTeaser;
