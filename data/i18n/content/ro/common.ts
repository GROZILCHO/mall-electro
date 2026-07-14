import type { CommonContent } from "../types";

export const commonContent = {
  brandName: "Mall Electro",
  cta: {
    sendInquiry: "Trimite o solicitare",
    speakWithEngineer: "Discută cu un inginer",
    viewServices: "Vezi serviciile",
    viewIndustries: "Vezi industriile",
    viewSolutions: "Vezi soluțiile",
  },
} as const satisfies CommonContent;
