import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icons } from "../ui/LucideIcons";
import type { NavItem } from "../../types";

const navItems: NavItem[] = [
  { label: "Начало", href: "/bg/" },
  { label: "Услуги", href: "/bg/uslugi" },
  { label: "За нас", href: "/bg/za-nas" },
  { label: "Индустрии", href: "/bg/industrii" },
  { label: "Контакти", href: "/bg/kontakti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300";

  const stateClasses = isScrolled
    ? "bg-[#1C2A39]/95 backdrop-blur-sm shadow-md py-3"
    : "bg-[#1C2A39]/85 py-5";

  return (
    <nav className={`${baseClasses} ${stateClasses}`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link to="/bg/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-blue text-white">
            <Icons.Zap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-white">Mall Electro</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-medium text-white/90 transition-colors hover:text-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="text-white transition-colors hover:text-brand-orange lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Отвори менюто"
        >
          {mobileMenuOpen ? (
            <Icons.X className="h-6 w-6" />
          ) : (
            <Icons.Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#1C2A39]/98 lg:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 font-medium text-white/90 transition-colors hover:text-brand-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
