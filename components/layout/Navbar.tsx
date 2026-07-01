import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { enContent, navigationContent } from "../../data/i18n/content";
import type { NavigationContent } from "../../data/i18n/content";
import { getLocalizedPath } from "../../data/i18n/routes";
import type { RouteKey } from "../../data/i18n/types";
import { Icons } from "../ui/LucideIcons";

interface NavigationItem {
  routeKey: RouteKey;
  label: string;
  href: string;
}

const toNavigationItem = (
  routeKey: RouteKey,
  content: NavigationContent,
  labelResolver: (routeKey: RouteKey) => string,
  isEnglish: boolean
): NavigationItem => ({
  routeKey,
  label: labelResolver(routeKey),
  href:
    routeKey === "home" && isEnglish
      ? "/en/"
      : routeKey === "about" && isEnglish
        ? "/en/about"
      : routeKey === "services" && isEnglish
        ? "/en/services"
      : routeKey === "solutions" && isEnglish
        ? "/en/solutions"
      : routeKey === "contact" && isEnglish
        ? "/en/contact"
        : getLocalizedPath(routeKey, "bg"),
});

export default function Navbar() {
  const location = useLocation();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");
  const activeNavigationContent: NavigationContent = isEnglish
    ? enContent.navigation
    : navigationContent;
  const getNavigationLabel = (routeKey: RouteKey): string =>
    activeNavigationContent.labels[routeKey] ?? routeKey;
  const getDropdownLabel = (routeKey: RouteKey): string =>
    activeNavigationContent.groupOverviewLabels[routeKey] ?? getNavigationLabel(routeKey);
  const navItems = activeNavigationContent.groups.main.map((routeKey) =>
    toNavigationItem(routeKey, activeNavigationContent, getNavigationLabel, isEnglish)
  );
  const serviceLinks = activeNavigationContent.groups.services.map((routeKey) =>
    toNavigationItem(routeKey, activeNavigationContent, getDropdownLabel, isEnglish)
  );
  const solutionLinks = activeNavigationContent.groups.solutions.map((routeKey) =>
    toNavigationItem(routeKey, activeNavigationContent, getDropdownLabel, isEnglish)
  );
  const industryLinks = activeNavigationContent.groups.industries.map((routeKey) =>
    toNavigationItem(routeKey, activeNavigationContent, getDropdownLabel, isEnglish)
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }

      if (
        industriesDropdownRef.current &&
        !industriesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustriesOpen(false);
      }

      if (
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsSolutionsOpen(false);
        setIsIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const baseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300";

  const stateClasses = isScrolled
    ? "bg-[#1C2A39]/95 backdrop-blur-sm shadow-md py-3"
    : "bg-[#1C2A39]/85 py-5";

  const closeServicesDropdown = () => setIsServicesOpen(false);
  const closeSolutionsDropdown = () => setIsSolutionsOpen(false);
  const closeIndustriesDropdown = () => setIsIndustriesOpen(false);

  const handleServiceLinkClick = () => {
    closeServicesDropdown();
    setMobileMenuOpen(false);
  };

  const handleSolutionLinkClick = () => {
    closeSolutionsDropdown();
    setMobileMenuOpen(false);
  };

  const handleIndustryLinkClick = () => {
    closeIndustriesDropdown();
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${baseClasses} ${stateClasses}`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link to={isEnglish ? "/en/" : "/bg/"} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-blue text-white">
            <Icons.Zap className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold text-white">Mall Electro</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            item.routeKey === "services" ? (
              <div
                key={item.routeKey}
                ref={servicesDropdownRef}
                className="relative"
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-orange ${
                    isServicesOpen ? "text-brand-orange" : "text-white/90"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-dropdown-menu"
                  onClick={() => {
                    setIsServicesOpen((open) => !open);
                    setIsSolutionsOpen(false);
                    setIsIndustriesOpen(false);
                  }}
                >
                  {item.label}
                  <Icons.ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </button>

                <div
                  id="services-dropdown-menu"
                  className={`absolute left-0 top-full z-50 w-80 pt-4 transition-all duration-200 ${
                    isServicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden border border-white/10 bg-[#1C2A39]/95 shadow-lg">
                    <ul className="py-2">
                      {serviceLinks.map((service, index) => (
                        <li key={service.routeKey}>
                          <Link
                            to={service.href}
                            onClick={handleServiceLinkClick}
                            className={`block px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-brand-blue/15 hover:text-white focus:bg-brand-blue/15 focus:text-white ${
                              index === serviceLinks.length - 1
                                ? "mt-2 border-t border-white/10 text-brand-orange hover:text-brand-orange focus:text-brand-orange"
                                : ""
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.routeKey === "solutions" ? (
              <div
                key={item.routeKey}
                ref={solutionsDropdownRef}
                className="relative"
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-orange ${
                    isSolutionsOpen ? "text-brand-orange" : "text-white/90"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-dropdown-menu"
                  onClick={() => {
                    setIsSolutionsOpen((open) => !open);
                    setIsServicesOpen(false);
                    setIsIndustriesOpen(false);
                  }}
                >
                  {item.label}
                  <Icons.ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isSolutionsOpen ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </button>

                <div
                  id="solutions-dropdown-menu"
                  className={`absolute left-0 top-full z-50 w-96 pt-4 transition-all duration-200 ${
                    isSolutionsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden border border-white/10 bg-[#1C2A39]/95 shadow-lg">
                    <ul className="py-2">
                      {solutionLinks.map((solution, index) => (
                        <li key={solution.routeKey}>
                          <Link
                            to={solution.href}
                            onClick={handleSolutionLinkClick}
                            className={`block px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-brand-blue/15 hover:text-white focus:bg-brand-blue/15 focus:text-white ${
                              index === solutionLinks.length - 1
                                ? "mt-2 border-t border-white/10 text-brand-orange hover:text-brand-orange focus:text-brand-orange"
                                : ""
                            }`}
                          >
                            {solution.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : item.routeKey === "industries" ? (
              <div
                key={item.routeKey}
                ref={industriesDropdownRef}
                className="relative"
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-orange ${
                    isIndustriesOpen ? "text-brand-orange" : "text-white/90"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isIndustriesOpen}
                  aria-controls="industries-dropdown-menu"
                  onClick={() => {
                    setIsIndustriesOpen((open) => !open);
                    setIsServicesOpen(false);
                    setIsSolutionsOpen(false);
                  }}
                >
                  {item.label}
                  <Icons.ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isIndustriesOpen ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </button>

                <div
                  id="industries-dropdown-menu"
                  className={`absolute left-0 top-full z-50 w-80 pt-4 transition-all duration-200 ${
                    isIndustriesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden border border-white/10 bg-[#1C2A39]/95 shadow-lg">
                    <ul className="py-2">
                      {industryLinks.map((industry, index) => (
                        <li key={industry.routeKey}>
                          <Link
                            to={industry.href}
                            onClick={handleIndustryLinkClick}
                            className={`block px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-brand-blue/15 hover:text-white focus:bg-brand-blue/15 focus:text-white ${
                              index === industryLinks.length - 1
                                ? "mt-2 border-t border-white/10 text-brand-orange hover:text-brand-orange focus:text-brand-orange"
                                : ""
                            }`}
                          >
                            {industry.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.routeKey}
                to={item.href}
                className="font-medium text-white/90 transition-colors hover:text-brand-orange"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <button
          className="text-white transition-colors hover:text-brand-orange lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={activeNavigationContent.aria.openMenu}
        >
          {mobileMenuOpen ? (
            <Icons.X className="h-6 w-6" />
          ) : (
            <Icons.Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#1C2A39] lg:hidden">
          <div className="container mx-auto flex flex-col gap-2 px-6 py-4 pb-8">
            {navItems.map((item) =>
              item.routeKey === "services" ? (
                <div key={item.routeKey}>
                  <span className="block py-2 font-medium text-white/90">
                    {item.label}
                  </span>
                  <div className="ml-4 border-l border-white/10 pl-4">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.routeKey}
                        to={service.href}
                        onClick={handleServiceLinkClick}
                        className="block py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand-orange"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.routeKey === "solutions" ? (
                <div key={item.routeKey}>
                  <span className="block py-2 font-medium text-white/90">
                    {item.label}
                  </span>
                  <div className="ml-4 border-l border-white/10 pl-4">
                    {solutionLinks.map((solution) => (
                      <Link
                        key={solution.routeKey}
                        to={solution.href}
                        onClick={handleSolutionLinkClick}
                        className="block py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand-orange"
                      >
                        {solution.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.routeKey === "industries" ? (
                <div key={item.routeKey}>
                  <span className="block py-2 font-medium text-white/90">
                    {item.label}
                  </span>
                  <div className="ml-4 border-l border-white/10 pl-4">
                    {industryLinks.map((industry) => (
                      <Link
                        key={industry.routeKey}
                        to={industry.href}
                        onClick={handleIndustryLinkClick}
                        className="block py-2 text-sm font-medium text-white/85 transition-colors hover:text-brand-orange"
                      >
                        {industry.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.routeKey}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 font-medium text-white/90 transition-colors hover:text-brand-orange"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
