import React from "react";
import FadeIn from "../ui/FadeIn";
import GridContainer from "../layout/GridContainer";
import Badge from "../ui/Badge";
import { Icons } from "../ui/LucideIcons";

const links = [
  { href: "#industry-food", label: "ХВП", icon: "Factory" },
  { href: "#industry-grain", label: "Зърнопреработка", icon: "Wheat" },
  { href: "#industry-mills", label: "Мелници", icon: "Settings" },
  { href: "#industry-agro", label: "Агро", icon: "Warehouse" },
  { href: "#industry-logistics", label: "Логистика", icon: "Truck" },
];

const IndustriesQuickNav: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <GridContainer>
        <FadeIn>
          <div className="flex justify-center mb-6">
            <Badge
              text="Сектори, в които работим"
              variant="pill-light"
              align="center"
            />
          </div>

          <div
            className="
              flex justify-center gap-4 flex-wrap
              sm:flex-nowrap w-full
            "
          >
            {links.map((link) => {
              const Icon = Icons[link.icon];
              return (
                <button
                  key={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="
                    flex items-center gap-2
                    px-5 py-3
                    rounded-md
                    bg-white
                    border border-gray-200
                    text-brand-dark
                    font-medium
                    shadow-sm
                    hover:border-brand-orange
                    hover:text-brand-orange
                    hover:bg-orange-50/50
                    hover:shadow-md
                    transition-all duration-200
                    min-w-[160px]
                    justify-center
                  "
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {link.label}
                </button>
              );
            })}
          </div>
        </FadeIn>
      </GridContainer>
    </section>
  );
};

export default IndustriesQuickNav;
