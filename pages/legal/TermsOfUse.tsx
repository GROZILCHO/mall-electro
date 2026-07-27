import React from "react";
import LegalPage from "../../components/legal/LegalPage";
import type { SupportedLocale } from "../../data/i18n/types";

const TermsOfUse: React.FC<{ locale?: SupportedLocale }> = ({ locale = "bg" }) => (
  <LegalPage locale={locale} pageKey="termsOfUse" />
);

export default TermsOfUse;
