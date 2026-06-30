import { commonContent } from "./common";
import { footerContent } from "./footer";
import { formsContent } from "./forms";
import { navigationContent } from "./navigation";
import type { BgContent } from "../types";

export const bgContent = {
  locale: "bg",
  common: commonContent,
  navigation: navigationContent,
  footer: footerContent,
  forms: formsContent,
} as const satisfies BgContent;

export { commonContent, footerContent, formsContent, navigationContent };
