import React from 'react';
import { IndustryItem } from '../../types';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';

const industriesData: IndustryItem[] = [
  {
    id: 1,
    title: "ХВП",
    description: "Електро табла и автоматизация.",
    icon: <Icons.Factory className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Зърнопреработка",
    description: "Системи за сушене и транспорт.",
    icon: <Icons.Wheat className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Мелници",
    description: "Окабеляване за линии.",
    icon: <Icons.Settings className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Агро",
    description: "Индустриални трасета.",
    icon: <Icons.Warehouse className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Логистика",
    description: "Системи за складове.",
    icon: <Icons.Truck className="w-8 h-8" />
  }
];

const Industries: React.FC = () => {
  return (
    <section className="py-32 bg-[#F5F7FA] relative">
      {/* Optional blueprint overlay - faint */}
      <div className="cad-grid-black absolute inset-0 opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] font-sans relative inline-block">
              Индустрии, които обслужваме
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#FF6B35]"></span>
            </h2>
            <p className="mt-8 text-[#53616F] max-w-2xl mx-auto">
              Електроинсталации, трасета и автоматизация за различни производствени сектори.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8">
          {industriesData.map((ind, index) => (
            <FadeIn key={ind.id} delay={index * 100} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(20%-26px)] min-w-[200px]">
              <div 
                className="h-full bg-white p-8 rounded-2xl shadow-[0_8px_22px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(74,144,226,0.1)] border border-transparent hover:border-[#4A90E2]/20 group"
              >
                <div className="text-[#FF6B35] mb-6 transition-transform duration-300 group-hover:scale-110">
                  {React.cloneElement(ind.icon as React.ReactElement<any>, { strokeWidth: 2 })}
                </div>
                <h4 className="font-bold text-lg text-[#333333] mb-3">{ind.title}</h4>
                <p className="text-sm text-[#53616F] leading-relaxed">{ind.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
