import React from "react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  variant?:
    | "accent"
    | "section-line"
    | "pill-light"
    | "pill-dark"
    | "section"
    | "blueprint"
    | "status"
    | "engineering"
    | "signature";
  align?: "left" | "center" | "right";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "accent",
  align = "left",
  className = "",
}) => {
  const base = "uppercase tracking-[0.2em] font-mono text-xs";

  const variants: Record<string, string> = {
    accent: `
      border-l-2 border-brand-orange px-3 py-1 bg-white/20 backdrop-blur-sm
      text-brand-blue mb-6
    `,

    "section-line": `
      flex items-center mb-6 gap-3 text-brand-orange tracking-[0.3em]
      before:content-[''] before:w-10 before:h-[2px] before:bg-brand-orange
    `,

    "pill-light": `
      bg-blue-50 px-2 py-1 mb-6 rounded-sm text-brand-blue tracking-[0.25em]
    `,

    "pill-dark": `
      bg-[#1C2A39]/90 px-2 py-1 mb-6 rounded-sm text-brand-blue tracking-[0.25em]
      shadow-md border border-white/10
    `,

    section: `
      text-brand-blue tracking-[0.35em] mb-6
    `,

    blueprint: `
      flex items-center gap-3 mb-6 tracking-[0.3em] text-brand-blue
      before:content-[''] before:w-12 before:h-[1px] before:bg-brand-blue/40
    `,

    status: `
      inline-flex items-center mb-6 gap-2 px-4 py-2 rounded-lg
      bg-white/40 backdrop-blur text-brand-blue font-bold
      [&>span:first-child]:block
    `,

    engineering: `
      flex items-center gap-3 mb-6 text-brand-blue tracking-[0.25em]
      before:content-[''] before:flex-1 before:w-[10px] before:bg-gray-300 before:opacity-60
    `,

    signature: `
      flex items-center gap-3 mb-6 mt-12 text-gray-400 tracking-[0.25em] w-full justify-end
      before:content-[''] before:flex-1 before:w-full before:h-[1px] before:bg-gray-200
      font-mono uppercase text-[8px]
    `,
  };

  const extraContent =
    variant === "status" ? (
      <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
    ) : null;

  return (
    <div
      className={clsx(
        "inline-flex items-center",
        align === "center" && "mx-auto justify-center",
        align === "right" && "ml-auto justify-end",
        className,
        variants[variant]
      )}
    >
      {extraContent}
      <span className={base}>{text}</span>
    </div>
  );
};

export default Badge;
