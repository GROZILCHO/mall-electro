import React from "react";
import { Icons } from "../ui/LucideIcons";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  image?: string;
  bullets?: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  icon,
  image,
  bullets = [],
}) => {
  const Icon = Icons[icon];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image */}
      {image && (
        <div className="w-full h-40 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 relative">

        {/* Icon */}
        {Icon && (
          <div className="absolute top-4 right-4 text-brand-orange opacity-90">
            <Icon className="w-6 h-6" />
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        {bullets.length > 0 && (
          <ul className="mt-2 space-y-1">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="text-gray-700 text-sm flex gap-2 items-start"
              >
                <span className="text-brand-orange text-lg leading-[0]">•</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default IndustryCard;
