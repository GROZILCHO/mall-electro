import { commonContent } from "./common";
import { footerContent } from "./footer";
import { formsContent } from "./forms";
import { navigationContent } from "./navigation";
import { pagesContent } from "./pages";
import type { EnContent } from "../types";

export const enContent = {
  locale: "en",
  common: commonContent,
  navigation: navigationContent,
  footer: footerContent,
  forms: formsContent,
  pages: pagesContent,
} as const satisfies EnContent;

export { commonContent, footerContent, formsContent, navigationContent, pagesContent };
