import React from "react";
import { Link } from "react-router-dom";
import { footerContent, navigationContent } from "../../data/i18n/content";
import { getLocalizedPath } from "../../data/i18n/routes";
import type { RouteKey } from "../../data/i18n/types";
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_RAW,
} from "../../utils/siteConfig";
import { Icons } from "../ui/LucideIcons";

const ACTIVE_LOCALE = "bg";

const getFooterLabel = (routeKey: RouteKey): string =>
  footerContent.legalLabels[routeKey] ?? navigationContent.labels[routeKey] ?? routeKey;

const toFooterLink = (routeKey: RouteKey) => ({
  routeKey,
  label: getFooterLabel(routeKey),
  href: getLocalizedPath(routeKey, ACTIVE_LOCALE),
});

const menuLinks = footerContent.menuRouteKeys.map(toFooterLink);
const serviceLinks = footerContent.serviceRouteKeys.map(toFooterLink);
const legalLinks = footerContent.legalRouteKeys.map(toFooterLink);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#1C2A39] py-20 text-white/80">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-white/10"></div>
      <div className="footer-top-dash absolute left-0 top-0 h-[4px] w-full"></div>

      <div className="container mx-auto max-w-screen-xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="font-sans text-2xl font-bold tracking-tight text-white">
              {footerContent.brand.name}
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              {footerContent.brand.description}
            </p>
            <p className="pt-4 text-xs text-white/50">
              {footerContent.brand.copyright}
              <br />
              {footerContent.brand.rightsReserved}
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-wider text-white">
              {footerContent.sections.menu}
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
              {footerContent.sections.services}
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
              {footerContent.sections.contact}
            </p>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start">
                <Icons.MapPin className="mr-3 h-5 w-5 shrink-0 text-[#4A90E2]" />
                <span>
                  {footerContent.contact.addressLines.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < footerContent.contact.addressLines.length - 1 && <br />}
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
            aria-label={footerContent.contact.legalNavAriaLabel}
            className="grid gap-4 text-xs text-white/70 lg:grid-cols-[minmax(0,220px)_1fr] lg:items-center"
          >
            <p className="font-semibold uppercase tracking-wider text-white/70">
              {footerContent.sections.legal}
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
