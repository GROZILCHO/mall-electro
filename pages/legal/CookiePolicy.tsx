import React from "react";
import LegalPage from "../../components/legal/LegalPage";
import type { SupportedLocale } from "../../data/i18n/types";

const CookiePolicy: React.FC<{ locale?: SupportedLocale }> = ({ locale = "bg" }) => (
  <LegalPage locale={locale} pageKey="cookiePolicy" />
);

export default CookiePolicy;
