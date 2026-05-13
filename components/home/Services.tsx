import React from 'react';
import { ServiceItem } from '../../types';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';
import ServiceTile from '../ui/ServiceTile';
import Badge from '../ui/Badge';

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Електрически табла",
    description: "Проектиране, изработка и пуск на електрически табла, командни шкафове и табла за управление.",
    icon: "LayoutDashboard",
    href: "/bg/uslugi/elektricheski-tabla"
  },
  {
    id: 2,
    title: "Кабелни трасета",
    description: "Кабелни скари, трасета и подредено окабеляване за индустриални обекти и технологични линии.",
    icon: "Factory",
    href: "/bg/uslugi/kabelni-traseta"
  },
  {
    id: 3,
    title: "Индустриални електроинсталации",
    description: "Цялостно изпълнение на електроинсталации за производствени обекти, складове, машини и работни зони.",
    icon: "HardHat",
    href: "/bg/uslugi/industrialni-elektroinstalatsii"
  },
  {
    id: 4,
    title: "Автоматизация",
    description: "Интеграция на контролни системи, сензори, табла и управление на машини и процеси.",
    icon: "PenTool",
    href: "/bg/uslugi/avtomatizatsia"
  },
  {
    id: 5,
    title: "Ниско напрежение",
    description: "Захранващи линии, нисковолтови връзки и електро инфраструктура за машини, консуматори и обекти.",
    icon: "Zap",
    href: "/bg/uslugi/nisko-naprezhenie"
  },
  {
    id: 6,
    title: "Поддръжка и сервиз",
    description: "Диагностика, профилактика, сервизни дейности и поддръжка на индустриални електро системи.",
    icon: "Users",
    href: "/bg/uslugi/poddrazhka-i-serviz"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-[#F3F6FB] relative overflow-hidden">
       {/* Background CAD Grid Pattern */}
       <div className="cad-grid-slate absolute inset-0 z-0 opacity-[0.4] pointer-events-none" />
       {/* Industrial Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-20 max-w-4xl">
            <Badge text="System Capabilities" variant="section-line"/>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C2A39] leading-[1.1] font-sans tracking-tight">
              Основни електро услуги за индустриални обекти
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#56677A]">
              Шест основни направления покриват най-честите нужди на индустриални обекти — от електрически табла и кабелни трасета до автоматизация, ниско напрежение и сервиз.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <ServiceTile 
              index={index + 1}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
