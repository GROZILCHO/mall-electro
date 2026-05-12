import React from 'react';
import { Icons } from '../ui/LucideIcons';
import FadeIn from '../ui/FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 lg:py-32 bg-[#F5F7FA] border-y border-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <FadeIn>
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-[#1C2A39] mb-4">Доверие от индустрията</h2>
             <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">Работим с водещи компании в сектора на ХВП и зърнопреработката.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <FadeIn key={i} delay={i * 100}>
                    <div className="bg-white p-10 rounded-tl-3xl rounded-br-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <Icons.Quote className="absolute top-8 right-8 w-8 h-8 text-gray-100" />
                        <div className="flex items-center gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(star => (
                                <div key={star} className="w-4 h-4 bg-[#FF6D2E] rounded-full opacity-90"></div>
                            ))}
                        </div>
                        <p className="text-gray-600 mb-8 italic leading-relaxed text-lg flex-grow">
                           "Изключителен професионализъм при изпълнението на ел. инсталацията в новата ни производствена база. Сроковете бяха спазени точно."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold border border-gray-200">
                                {String.fromCharCode(64 + i)}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1C2A39]">Инж. Петър Петров</h4>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Технически Директор</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;