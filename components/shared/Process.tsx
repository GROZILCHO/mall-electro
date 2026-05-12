import React from 'react';
import { ProcessStep } from '../../types';
import FadeIn from '../ui/FadeIn';

const steps: ProcessStep[] = [
  { id: 1, title: "Анализ и оглед", description: "Оглед на обекта, спецификация на нуждите." },
  { id: 2, title: "Проектиране", description: "Създаване на ефективен инженерен план." },
  { id: 3, title: "Доставка", description: "Осигурено безопасно транспортиране до място за доставка." },
  { id: 4, title: "Монтаж", description: "Бърз монтаж от опитни бригади." },
  { id: 5, title: "Тестове и пуск", description: "Крайни проверки + дългосрочна поддръжка." }
];

const Process: React.FC = () => {
  return (
    <section className="py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2A39] font-sans">
              Как работим
            </h2>
            <div className="w-16 h-1 bg-[#FF6D2E] mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">Нашият процес гарантира предвидимост и резултати във всеки етап от проекта.</p>
          </div>
        </FadeIn>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mt-20">
          {/* Animated Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-[2px] bg-gray-100 -z-0 rounded-full overflow-hidden">
             <div className="process-line-fill h-full bg-[#FF6D2E] w-0 origin-left"></div>
          </div>

          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 150}>
              <div className="relative flex flex-col items-center text-center group z-10">
                <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-[#FF6D2E] group-hover:scale-110 transition-all duration-300 relative">
                   {/* Inner dot */}
                   <div className="absolute inset-2 border border-gray-100 rounded-full"></div>
                  <span className="text-3xl font-bold text-[#1C2A39] font-sans">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm max-w-[220px] leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
