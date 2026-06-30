import type { CommonContent } from "../types";

export const commonContent = {
  brandName: "Mall Electro",
  cta: {
    sendInquiry: "Изпратете запитване",
    speakWithEngineer: "Говорете с инженер",
    viewServices: "Вижте услугите",
    viewIndustries: "Разгледай секторите",
    viewSolutions: "Всички решения",
  },
} as const satisfies CommonContent;
