import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';

const IndustriesPremium: React.FC = () => {
  return (
    <section className="py-28 lg:py-32 bg-[#F5F7FA] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-screen-xl">
        
        {/* SECTION TITLE */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C2A39] font-sans relative inline-block pb-6">
              Индустрии, които обслужваме
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#FF6D2E]"></div>
            </h2>
            <p className="mt-6 text-[#53616F] text-lg max-w-2xl mx-auto font-light">
              Електрически табла, автоматизация и системи за управление на производствени линии в ХВП предприятия – от суровинно приемане до пакетиране.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8">
          
          {/* ROW 1 — TWO LARGE PANELS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* PANEL A - Food Industry */}
            <FadeIn delay={0}>
              <Link to="/bg/industrii/hvp" id="industry-food" className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col md:flex-row">
                 {/* Image */}
                 <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                              <img 
                                  src="/images/industries/stainless-steel-production-line_2.png" 
                                 alt="Food Industry" 
                                 loading="lazy"
                                 decoding="async"
                                 fetchPriority="low"
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                 </div>
                 {/* Text */}
                 <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
                    <div className="absolute top-6 right-6 text-[#FF6D2E]">
                       <Icons.Factory className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C2A39] mb-3 group-hover:text-[#4A90E2] transition-colors">ХВП – хранително-вкусова промишленост</h3>
                    <p className="text-[#56677A] text-sm mb-6 leading-relaxed">
                      Електрически табла, автоматизация и системи за управление на производствени линии в ХВП предприятия – от суровинно приемане до пакетиране.
                    </p>
                    <ul className="space-y-2 mt-auto">
                        {['Инсталации за процесни линии и машини', 'Командни табла и шкафове за управление', 'Системи за комуникация и безопасност'].map((item, i) => (
                           <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                              <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3"></div>
                              {item}
                           </li>
                        ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                      Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                 </div>
              </Link>
            </FadeIn>

            {/* PANEL B - Grain Processing */}
            <FadeIn delay={150}>
              <Link to="/bg/industrii/zarnoprerabotka" id="industry-grain" className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col md:flex-row-reverse">
                 {/* Image */}
                 <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                              <img 
                                  src="/images/industries/wheat-close-up.png" 
                                 alt="Grain Processing" 
                                 loading="lazy"
                                 decoding="async"
                                 fetchPriority="low"
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                 </div>
                 {/* Text */}
                 <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
                    <div className="absolute top-6 left-6 text-[#FF6D2E]">
                       <Icons.Wheat className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C2A39] mb-3 group-hover:text-[#4A90E2] transition-colors md:text-right">Зърнопреработка</h3>
                    <p className="text-[#56677A] text-sm mb-6 leading-relaxed md:text-right">
                      Системи за сушене, транспорт, окабеляване и автоматизация на силозни стопанства и зърнопреработвателни бази.
                    </p>
                    <ul className="space-y-2 mt-auto md:items-end md:flex md:flex-col">
                        {['Електроинсталации за силози и транспортни линии', 'Захранване и управление на сушилни и вентилатори', '•	Автоматизация и мониторинг на нива и потоци'].map((item, i) => (
                           <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide md:flex-row-reverse">
                              <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3 md:mr-0 md:ml-3"></div>
                              {item}
                           </li>
                        ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E] md:justify-end">
                      Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                 </div>
              </Link>
            </FadeIn>

          </div>

          {/* ROW 2 — THREE SMALLER PANELS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
             {/* PANEL C - Mills */}
             <FadeIn delay={300}>
                <Link to="/bg/industrii/melnitsi" id="industry-mills" className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group h-full block">
                   <div className="h-40 relative overflow-hidden">
                       <img src="/images/industries/industrial-flour-milling-facility.png" loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mills" />
                   </div>
                   <div className="p-6 relative">
                       <div className="absolute -top-6 right-6 bg-white p-3 rounded-full shadow-md text-[#FF6D2E]">
                           <Icons.Settings className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold text-[#1C2A39] mb-2">Мелници</h4>
                       <p className="text-sm mb-6 text-[#56677A]">Окабеляване и интеграция на процесни линии за мелнични и брашнени производства.</p>
                        <ul className="space-y-2 mt-auto">
                           {['Управление на мелнични линии и сепаратори', 'Командни табла за дозиране и смесване', 'Индикация и защити по ключови точки на процеса'].map((item, i) => (
                              <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                                 <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                        <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                          Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                   </div>
                </Link>
             </FadeIn>

             {/* PANEL D - Agro */}
             <FadeIn delay={400}>
                <Link to="/bg/industrii/agro" id="industry-agro" className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group h-full block">
                   <div className="h-40 relative overflow-hidden">
                       <img src="/images/industries/golden-farmland-aerial_2.png" loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Agro" />
                   </div>
                   <div className="p-6 relative">
                       <div className="absolute -top-6 right-6 bg-white p-3 rounded-full shadow-md text-[#FF6D2E]">
                           <Icons.Warehouse className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold text-[#1C2A39] mb-2">Агро</h4>
                       <p className="text-sm mb-6 text-[#56677A]">Индустриални трасета и електро табла за складови бази, ферми и специализирани агро съоръжения.</p>
                       <ul className="space-y-2 mt-auto">
                           {['Захранване на агро съоръжения и помпени станции', 'Осветление и силови линии за складови бази', 'Управление на вентилация, охлаждане и напояване'].map((item, i) => (
                              <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                                 <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                        <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                          Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                   </div>
                </Link>
             </FadeIn>

             {/* PANEL E - Logistics */}
             <FadeIn delay={500}>
                <Link to="/bg/industrii/logistika" id="industry-logistics" className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.03)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group h-full block">
                   <div className="h-40 relative overflow-hidden">
                       <img src="/images/industries/modern-warehouse-interior_1.png" loading="lazy" decoding="async" fetchPriority="low" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Logistics" />
                   </div>
                   <div className="p-6 relative">
                       <div className="absolute -top-6 right-6 bg-white p-3 rounded-full shadow-md text-[#FF6D2E]">
                           <Icons.Truck className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold text-[#1C2A39] mb-2">Логистика и складови бази</h4>
                       <p className="text-sm mb-6 text-[#56677A]">Електроинсталации за логистични центрове, хладилни камери и високостелажни складове.</p>
                       <ul className="space-y-2 mt-auto">
                           {['Табла и трасета за складова техника и конвейери', 'Захранване на хладилни и фризерни камери', 'Осветление, безопасност и аварийни системи'].map((item, i) => (
                              <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                                 <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                        <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                          Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                        </span>
                   </div>
                </Link>
             </FadeIn>

          </div>

          {/* ROW 3 - PRODUCTION ENTERPRISES */}
          <FadeIn delay={600}>
            <Link to="/bg/industrii/proizvodstveni-predpriyatiya" id="industry-production" className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-t-[3px] border-t-[#FF6D2E] border-x border-b border-gray-100 overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img
                  src="/images/industries/hero_industriy.png"
                  alt="Производствени предприятия"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
                <div className="absolute top-6 right-6 text-[#FF6D2E]">
                  <Icons.Factory className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3 group-hover:text-[#4A90E2] transition-colors">
                  Производствени предприятия
                </h3>
                <p className="text-[#56677A] text-sm mb-6 leading-relaxed">
                  Електро инфраструктура за индустриални халета, технологични линии, машини, работни зони и производствени процеси.
                </p>
                <ul className="space-y-2 mt-auto">
                  {['Захранване за машини, линии и работни зони', 'Кабелни трасета през халета и технически помещения', 'Автоматизация, ниско напрежение и сервизна поддръжка'].map((item, i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 bg-[#FF6D2E] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center text-sm font-bold text-[#4A90E2] transition-colors group-hover:text-[#FF6D2E]">
                  Виж решенията <Icons.ChevronRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default IndustriesPremium;
