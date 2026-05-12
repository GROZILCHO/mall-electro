import React from 'react';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';

const ValueProposition: React.FC = () => {
  const values = [
    {
      id: "01",
      title: "Електро табла",
      subtitle: "Проектиране и изработка",
      icon: <Icons.LayoutDashboard className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Кабелни трасета",
      subtitle: "Индустриално окабеляване",
      icon: <Icons.Activity className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Ниско напрежение",
      subtitle: "Системна интеграция",
      icon: <Icons.Zap className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Поддръжка",
      subtitle: "Гаранционен сервиз",
      icon: <Icons.ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="relative w-full bg-[#111822] text-white border-b border-white/5 overflow-hidden">
      {/* Diagonal Lines Texture */}
      <div className="diagonal-line-texture absolute inset-0 z-0 opacity-[0.04] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {values.map((val, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="group relative h-full py-10 px-8 transition-all duration-300 hover:bg-white/[0.02] cursor-default">
                {/* Active Hover Line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4A90E2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_#4A90E2]" />
                
                {/* Top Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 group-hover:text-[#4A90E2] transition-colors">
                    Metric {val.id}
                  </span>
                  <div className="text-[#FF6B35] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)] group-hover:scale-110">
                    {val.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-bold text-lg text-gray-100 leading-tight mb-1">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    {val.subtitle}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
