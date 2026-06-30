import { contactPageContent } from "./contact";
import type { PagesContent } from "../../types";

export const pagesContent = {
  contact: contactPageContent,
} as const satisfies PagesContent;

export { contactPageContent };
