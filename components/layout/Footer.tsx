import React from "react";
import { Link, useLocation } from "react-router-dom";
import { enContent, footerContent, navigationContent, roContent } from "../../data/i18n/content";
import type { FooterContent, Locale, NavigationContent } from "../../data/i18n/content";
import { getLocalizedPath } from "../../data/i18n/routes";
import type { RouteKey } from "../../data/i18n/types";
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_RAW,
} from "../../utils/siteConfig";
import { Icons } from "../ui/LucideIcons";

const enServiceDetailPaths: Partial<Record<RouteKey, string>> = {
  serviceElectricPanels: "/en/services/electrical-panels",
  serviceCableRoutes: "/en/services/cable-routes",
  serviceIndustrialElectricalInstallations: "/en/services/industrial-electrical-installations",
  serviceAutomation: "/en/services/automation",
  serviceLowVoltage: "/en/services/low-voltage-systems",
  serviceMaintenance: "/en/services/maintenance-and-service",
};

const enSolutionDetailPaths: Partial<Record<RouteKey, string>> = {
  solutionNewProductionSite: "/en/solutions/new-production-site",
  solutionModernization: "/en/solutions/electrical-system-modernization",
  solutionPanelAutomationLine: "/en/solutions/panels-and-automation-for-production-lines",
  solutionCableInfrastructureBase: "/en/solutions/cable-infrastructure-for-base",
  solutionServiceExpansion: "/en/solutions/service-and-expansion",
  solutionHeightInstallation: "/en/solutions/high-access-installation",
};

const enIndustryDetailPaths: Partial<Record<RouteKey, string>> = {
  industryAgro: "/en/industries/agriculture",
  industryHvp: "/en/industries/food-industry",
  industryZarnoprerabotka: "/en/industries/grain-processing",
  industryMelnitsi: "/en/industries/mills",
  industryLogistika: "/en/industries/logistics",
  industryProizvodstveniPredpriyatiya: "/en/industries/manufacturing-companies",
};

const toFooterLink = (
  routeKey: RouteKey,
  activeFooterContent: FooterContent,
  activeNavigationContent: NavigationContent,
  locale: Locale
) => ({
  routeKey,
  label: activeFooterContent.legalLabels[routeKey] ?? activeNavigationContent.labels[routeKey] ?? routeKey,
  href:
    locale === "ro" && activeFooterContent.legalRouteKeys.includes(routeKey)
      ? getLocalizedPath(routeKey, "bg")
      : locale === "ro"
        ? getLocalizedPath(routeKey, "ro")
      : routeKey === "home" && locale === "en"
      ? "/en/"
      : routeKey === "about" && locale === "en"
        ? "/en/about"
      : routeKey === "services" && locale === "en"
        ? "/en/services"
      : routeKey === "solutions" && locale === "en"
        ? "/en/solutions"
      : routeKey === "industries" && locale === "en"
        ? "/en/industries"
      : routeKey === "contact" && locale === "en"
        ? "/en/contact"
        : locale === "en" && enServiceDetailPaths[routeKey]
          ? enServiceDetailPaths[routeKey]
        : locale === "en" && enSolutionDetailPaths[routeKey]
          ? enSolutionDetailPaths[routeKey]
        : locale === "en" && enIndustryDetailPaths[routeKey]
          ? enIndustryDetailPaths[routeKey]
        : getLocalizedPath(routeKey, "bg"),
});

const Footer: React.FC = () => {
  const location = useLocation();
  const locale: Locale = location.pathname === "/en" || location.pathname.startsWith("/en/")
    ? "en"
    : location.pathname === "/ro" || location.pathname.startsWith("/ro/")
      ? "ro"
      : "bg";
  const activeFooterContent: FooterContent = locale === "en" ? enContent.footer : locale === "ro" ? roContent.footer : footerContent;
  const activeNavigationContent: NavigationContent = locale === "en" ? enContent.navigation : locale === "ro" ? roContent.navigation : navigationContent;
  const menuLinks = activeFooterContent.menuRouteKeys.map((routeKey) =>
    toFooterLink(routeKey, activeFooterContent, activeNavigationContent, locale)
  );
  const serviceLinks = activeFooterContent.serviceRouteKeys.map((routeKey) =>
    toFooterLink(routeKey, activeFooterContent, activeNavigationContent, locale)
  );
  const legalLinks = activeFooterContent.legalRouteKeys.map((routeKey) =>
    toFooterLink(routeKey, activeFooterContent, activeNavigationContent, locale)
  );

  return (
    <footer id="contact" className="relative bg-[#1C2A39] py-20 text-white/80">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-white/10"></div>
      <div className="footer-top-dash absolute left-0 top-0 h-[4px] w-full"></div>

      <div className="container mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="font-sans text-2xl font-bold tracking-tight text-white">
              {activeFooterContent.brand.name}
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              {activeFooterContent.brand.description}
            </p>
            <p className="pt-4 text-xs text-white/50">
              {activeFooterContent.brand.copyright}
              <br />
              {activeFooterContent.brand.rightsReserved}
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              {activeFooterContent.sections.menu}
            </p>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.routeKey}>
                  <a href={link.href} className="text-sm text-white/90 transition-colors hover:text-[#FF6D2E]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              {activeFooterContent.sections.services}
            </p>
            <ul className="space-y-3 text-sm text-white/90">
              {serviceLinks.map((service) => (
                <li key={service.routeKey}>
                  <Link to={service.href} className="transition-colors hover:text-[#FF6D2E]">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              {activeFooterContent.sections.contact}
            </p>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start">
                <Icons.MapPin className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <span>
                  {activeFooterContent.contact.addressLines.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < activeFooterContent.contact.addressLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <a href={`tel:${SITE_PHONE_RAW}`} className="font-semibold transition-colors hover:text-[#FF6D2E]">
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <a href={`mailto:${SITE_EMAIL}`} className="transition-colors hover:text-[#FF6D2E]">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <nav
            aria-label={activeFooterContent.contact.legalNavAriaLabel}
            className="grid gap-4 text-xs text-white/70 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-center"
          >
            <p className="font-semibold uppercase tracking-wider text-white/70">
              {activeFooterContent.sections.legal}
            </p>
            <ul className="flex flex-col gap-y-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 lg:justify-end">
              {legalLinks.map((link) => (
                <li key={link.routeKey} className="inline-flex items-center gap-2 leading-none">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#FF6D2E]" aria-hidden="true"></span>
                  <Link to={link.href} className="inline-flex items-center leading-5 text-white/80 transition-colors hover:text-[#FF6D2E]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
