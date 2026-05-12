import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-lg border border-blue-100 
        hover:shadow-xl transition-all duration-300 
        p-8 ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;