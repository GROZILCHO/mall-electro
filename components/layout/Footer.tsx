import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../ui/LucideIcons";
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_RAW,
} from "../../utils/siteConfig";

const Footer: React.FC = () => {
  const serviceLinks = [
    { label: "Електрически табла", href: "/bg/uslugi/elektricheski-tabla" },
    { label: "Кабелни трасета", href: "/bg/uslugi/kabelni-traseta" },
    { label: "Индустриални електроинсталации", href: "/bg/uslugi/industrialni-elektroinstalatsii" },
    { label: "Автоматизация", href: "/bg/uslugi/avtomatizatsia" },
    { label: "Ниско напрежение", href: "/bg/uslugi/nisko-naprezhenie" },
    { label: "Поддръжка и сервиз", href: "/bg/uslugi/poddrazhka-i-serviz" },
  ];

  return (
    <footer id="contact" className="relative bg-[#1C2A39] py-20 text-white/80">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-white/10"></div>
      <div className="footer-top-dash absolute left-0 top-0 h-[4px] w-full"></div>

      <div className="container mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="font-sans text-2xl font-bold tracking-tight text-white">
              Mall Electro
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Вашият надежден партньор за индустриални електро решения.
              Качество, сигурност и професионализъм.
            </p>
            <p className="pt-4 text-xs text-white/50">
              © 2025 Mall Electro.
              <br />
              Всички права запазени.
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              Меню
            </p>
            <ul className="space-y-3">
              <li>
                <a href="/bg/" className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                  Начало
                </a>
              </li>
              <li>
                <a href="/bg/uslugi" className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                  Услуги
                </a>
              </li>
              <li>
                <a href="/bg/industrii" className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                  Индустрии
                </a>
              </li>
              <li>
                <a href="/bg/za-nas" className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                  За нас
                </a>
              </li>
              <li>
                <a href="/bg/kontakti" className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              Услуги
            </p>
            <ul className="space-y-3 text-sm text-white/90">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className="transition-colors hover:text-[#FF6D2E]">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              Контакти
            </p>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start">
                <Icons.MapPin className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <span>
                  ул. Дунав 9, ет.1, офис 1,
                  <br />
                  София, България
                </span>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <a href={`tel:${SITE_PHONE_RAW}`} className="font-semibold transition-colors hover:text-[#FF6D2E]">
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <a href={`mailto:${SITE_EMAIL}`} className="transition-colors hover:text-[#FF6D2E]">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
