import React from 'react';
import { ServiceItem } from '../../types';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';
import ServiceTile from '../ui/ServiceTile';
import Badge from '../ui/Badge';

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Електро табла и командни шкафове",
    description: "Проектиране и изработка на табла по спецификация — от малки разпределителни шкафове до комплексни индустриални системи.",
    icon: "LayoutDashboard"
  },
  {
    id: 2,
    title: "Кабелни трасета",
    description: "Монтаж на кабелни трасета и скари за натоварени промишлени среди. Чисто, подредено и безопасно окабеляване.",
    icon: "Factory"
  },
  {
    id: 3,
    title: "Ниско напрежение и окабеляване",
    description: "Полагане на кабели, връзки между машини, табла и линии. Бърза работа с минимално прекъсване на производството.",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Монтаж на височина с монтажни вишки",
    description: "Височинни монтажи за електроинсталации. Безопасност и устойчивост при работа на височина.",
    icon: "HardHat"
  },
  {
    id: 5,
    title: "Индустриални електро услуги",
    description: "Проектиране, реализация и пуск на електро системи според нуждите на клиента.",
    icon: "PenTool"
  },
  {
    id: 6,
    title: "Монтажни бригади и поддръжка",
    description: "Опитни екипи за монтаж, ремонт и поддръжка. Бърза реакция и професионален сервиз.",
    icon: "Users"
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
              Комплексни решения за <br/>
              <span className="text-[#4A90E2]">вашата инфраструктура</span>
            </h2>
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
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
