import React from "react";

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3 rounded-full bg-brand-blue/10 text-brand-blue w-fit">
    {children}
  </div>
);
export default IconWrapper;