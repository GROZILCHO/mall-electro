import React from "react";
import { Icons } from "../ui/LucideIcons";

interface ServiceTileProps {
  index: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

const ServiceTile: React.FC<ServiceTileProps> = ({
  index,
  title,
  description,
  icon
}) => {
  const IconComponent = Icons[icon];

  return (
    <div
      className="
        p-8 group relative h-full bg-white
        border border-gray-200
        shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]
        hover:shadow-[0_20px_40px_-10px_rgba(74,144,226,0.15)]
        hover:-translate-y-1
        transition-all duration-300 overflow-hidden
        flex flex-col
        justify-between
      "
    >
      {/* Tech Corner Marker */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-100 group-hover:border-[#4A90E2] transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-100 group-hover:border-brand-orange transition-colors duration-300"></div>

      {/* Bottom Active Line Animation */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 shadow-[0_0_10px_rgba(255,107,53,0.5)]" />


      <div className="flex justify-between items-start mb-8 border-b border-gray-50 pb-6">
        {/* TOP LINE  — SERVICE NUMBER */}
          <div className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-brand-blue transition-colors">
            Service {String(index).padStart(2, "0")}
          </div>

          {/* ICON TOP-RIGHT */}
          <div className="absolute top-6 right-6">
            <div className="absolute inset-0 bg-brand-blue/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            <IconComponent
              className="
                w-7 h-7  text-brand-blue opacity-80 group-hover:text-brand-orange transition-all duration-300
              "
            />
          </div>
      </div>
      

      {/* TITLE */}
      <h3 className="flex justify-between text-xl font-bold text-[#1C2A39] mb-4
                    group-hover:text-brand-blue transition-colors font-sans tracking-tight">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[#56677A] text-sm leading-relaxed mb-6 font-light">
        {description}
      </p>

      {/* BOTTOM "VIEW SPECS" + ARROW */}
      <div className="mt-4 pt-4 border-t border-dashed border-gray-100 flex items-center justify-between
                      gap-2 text-sm text-gray-500 font-medium">
        <span className="text-gray-400 font-mono uppercase group-hover:text-brand-blue transition-colors">
          ВИЖ ПОДРОБНОСТИ
        </span>
        <Icons.ChevronRight
          className="
            w-6 h-6 flex items-center
            justify-center bg-gray-50 rounded
            group-hover:bg-brand-orange group-hover:text-white transition-all duration-300
          "
        />
      </div>

      {/* ORANGE ACCENT LINE WHEN ACTIVE */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[3px] 
          bg-brand-orange opacity-0 
          group-hover:opacity-100 transition-opacity duration-300
        "
      ></div>
    </div>
  );
};

export default ServiceTile;