import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div className={`mx-auto max-w-[1280px] px-6 ${className || ""}`}>
      {children}
    </div>
  );
}