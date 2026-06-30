import type { CommonContent } from "../types";

export const commonContent = {
  brandName: "Mall Electro",
  cta: {
    sendInquiry: "Send inquiry",
    speakWithEngineer: "Speak with an engineer",
    viewServices: "View services",
    viewIndustries: "View industries",
    viewSolutions: "View solutions",
  },
} as const satisfies CommonContent;
