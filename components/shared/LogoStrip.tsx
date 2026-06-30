import React from "react";
import FadeIn from "../ui/FadeIn";
import type { HomeFullContent } from "../../data/i18n/content";

const defaultContent: HomeFullContent["logoStrip"] = {
  heading: "Работим с компоненти от водещи производители",
  partners: ["Siemens", "Schneider", "Eaton", "ABB", "Rittal", "Phoenix Contact"],
};

interface LogoStripProps {
  content?: HomeFullContent["logoStrip"];
}

const LogoStrip: React.FC<LogoStripProps> = ({ content = defaultContent }) => {
  const marqueePartners = [...content.partners, ...content.partners, ...content.partners];

  return (
    <section className="py-24 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-screen-xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#1C2A39] font-sans mb-3">
              {content.heading}
            </h2>
            <div className="w-16 h-1 bg-[#FF6D2E] mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative w-full mask-gradient-x overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
              {marqueePartners.map((name, index) => (
                <div key={`${name}-${index}`} className="h-16 flex items-center justify-center bg-gray-50 border border-gray-100 px-8 py-3 rounded-lg min-w-[160px] hover:shadow-md transition-shadow group cursor-default">
                  <span className="text-xl font-bold text-gray-400 font-sans group-hover:text-[#1C2A39] transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LogoStrip;
