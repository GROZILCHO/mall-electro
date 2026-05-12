import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../ui/LucideIcons";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "ghost"
  | "outline"
  | "tertiary"
  | "monochrome";

type ButtonSize = "sm" | "md" | "lg" | "xl" | "block";

interface ButtonProps {
  children: React.ReactNode;
  icon?: keyof typeof Icons;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
  href,
  target,
  rel,
  ariaLabel,
}) => {
  const IconComponent = icon ? Icons[icon] : null;
  const isExternalHref =
    !!href &&
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#"));

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
    xl: "text-lg px-10 py-5",
    block: "w-full text-base px-8 py-4",
  };

  const variantClasses = {
    primary: `
      relative overflow-hidden bg-brand-orange text-white font-medium
      shadow-[0_0_20px_rgba(255,107,53,0.35)]
      hover:shadow-[0_0_45px_rgba(255,107,53,0.55)]
      transition-all duration-300 rounded-sm
    `,

    secondary: `
      group font-medium text-brand-blue
      dark:text-white
      hover:text-brand-blue/80
      transition-colors
    `,

    dark: `
      inline-flex items-center bg-[#1C2A39] text-white
      hover:bg-black transition-all font-medium shadow-lg rounded
    `,

    ghost: `
      bg-transparent text-white hover:bg-white/10
      border border-white/20 rounded transition-all
    `,

    outline: `
      border border-brand-blue text-brand-blue font-semibold
      hover:bg-brand-blue hover:text-white transition-all rounded-sm
      dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-brand-dark
    `,

    tertiary: `
      bg-gray-100 text-gray-700 hover:bg-gray-200
      rounded-sm transition-all
    `,

    monochrome: `
      bg-black text-white hover:bg-gray-900
      rounded-sm transition-all shadow-lg
    `,
  };

  const glowWipe =
    variant === "primary" ? (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span
          className="
            absolute inset-0
            bg-white/15
            translate-x-[-80%]
            translate-y-[20%]
            rotate-[18deg]
            group-hover:translate-x-[80%]
            group-hover:translate-y-[-20%]
            group-hover:blur-[12px]
            transition-transform duration-[650ms] ease-out
            blur-[8px]
            diagonal-wipe
          "
        />

        <span
          className="
            absolute left-0 top-0 w-[140%] h-[2px]
            bg-gradient-to-r from-transparent via-white to-transparent
            opacity-0
            group-hover:opacity-[0.45]
            animate-glitch-streak-1
          "
        ></span>

        <span
          className="
            absolute left-0 bottom-0 w-[120%] h-[1px]
            bg-gradient-to-r from-transparent via-[#FF6D2E] to-transparent
            opacity-0
            group-hover:opacity-[0.4]
            animate-glitch-streak-2
          "
        ></span>

        <span className="spark particle-1"></span>
        <span className="spark particle-2"></span>
        <span className="spark particle-3"></span>
      </div>
    ) : null;

  const secondaryUnderline =
    variant === "secondary" ? (
      <span className="relative">
        {children}
        <span
          className="
            absolute bottom-0 left-0 w-0 h-[1px] bg-brand-blue
            transition-all duration-300 group-hover:w-full
          "
        ></span>
      </span>
    ) : null;

  const content = (
    <>
      {variant !== "secondary" && (
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {IconComponent && (
            <IconComponent className="w-4 h-4 transition-all duration-300 group-hover:ml-1.5" />
          )}
        </span>
      )}

      {variant === "secondary" && (
        <span className="flex items-center gap-3">
          {secondaryUnderline}
          {IconComponent && (
            <IconComponent
              className="
                w-4 h-4 text-brand-blue opacity-0
                group-hover:opacity-100 -translate-x-2
                group-hover:translate-x-0 transition-all duration-300
              "
            />
          )}
        </span>
      )}

      {glowWipe}
    </>
  );

  const classes = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    inline-flex items-center gap-3 justify-center
    transition-all duration-300
    ${className}
    group
  `;

  if (href && !isExternalHref) {
    return (
      <Link to={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;
