import type { ContactPageContent } from "../../types";

export const contactPageContent = {
  hero: {
    title: "Свържете се с нашия екип",
    subtitle:
      "Нуждаете се от оглед, проект, технически анализ или консултация? Нашите инженери са на разположение за съдействие, оферта или помощ по вашия проект. Отговаряме бързо и предлагаме най-подходящото техническо решение според спецификата на вашата система.",
    badgeText: "Контакти",
    heroImageAlt:
      "Инженерна консултация до електрическо табло в индустриална среда",
    primaryCtaText: "Разгледай секторите",
    secondaryCtaText: "Свържи се с нас",
  },
} as const satisfies ContactPageContent;
