import React from "react";
import { Icons } from "../ui/LucideIcons";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  avatar,
  rating = 5,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-brand-orange text-xl leading-[0]">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 italic leading-relaxed mb-4">
        "{quote}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 mt-2">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <Icons.Users className="w-6 h-6 text-white" />
          </div>
        )}

        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{position}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
