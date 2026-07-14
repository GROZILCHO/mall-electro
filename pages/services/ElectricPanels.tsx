import React from "react";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import { electricPanelsFaqItems } from "../../data/electricPanelsFaq";
import { enContent, roContent } from "../../data/i18n/content";
import type { Locale } from "../../data/i18n/content";
import type { SeoPageKey } from "../../seo/seoConfig";

interface ElectricPanelsProps {
  locale?: Locale;
}

const ElectricPanels: React.FC<ElectricPanelsProps> = ({ locale = "bg" }) => {
  if (locale !== "bg") {
    const content = ((locale === "ro" ? roContent : enContent) as unknown as typeof enContent).pages.serviceDetails?.electricPanels;

    if (!content) {
      throw new Error("Missing English electric panels service detail content.");
    }

    return (
      <ServiceDetailLayout
        seoPage={(locale === "ro" ? "roElectricPanels" : content.seoPage) as SeoPageKey}
        hero={content.hero}
        overview={content.overview}
        suitability={content.suitability}
        process={content.process}
        faq={content.faq}
        related={content.related}
        contactCta={content.contactCta}
        contactCtaPrimaryHref={locale === "ro" ? "/ro/contact" : "/en/contact"}
      />
    );
  }

  return (
    <ServiceDetailLayout
      seoPage="electricPanels"
      hero={{
        title: "Електрически табла и командни шкафове за индустриални обекти",
        subtitle:
          "Проектираме, изработваме, окабеляваме и тестваме електрически табла за производствени линии, машини, ниско напрежение и автоматизация. Подходът е практичен: ясно решение, подредено изпълнение и готовност за пуск.",
        badgeText: "Електрически табла",
        image: "/images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png",
        imageAlt: "Електрическо табло с подредено окабеляване и индустриални компоненти",
        primaryCtaText: "Обсъдете вашето табло",
        primaryCtaHref: "/bg/kontakti",
        secondaryCtaText: "Вижте всички услуги",
        secondaryCtaHref: "/bg/uslugi",
        secondaryCtaIcon: "ChevronRight",
      }}
      overview={{
        badge: "Какво включва услугата",
        title: "Табла, изградени за реална работа на обекта",
        text:
          "Електрическото табло трябва да е подредено, защитено и удобно за обслужване. Затова започваме от нуждите на инсталацията, а не само от списък с компоненти.",
        items: [
          "Проектиране на разпределителни табла, командни шкафове и табла за управление.",
          "Подбор на апаратура, защити, клеми, кабели и елементи за управление.",
          "Окабеляване, маркировка, подредба и подготовка за монтаж в индустриална среда.",
          "Пуск, тестване, проверка на връзки и базова техническа документация.",
        ],
      }}
      suitability={{
        badge: "Кога е подходящо",
        title: "Когато системата трябва да бъде ясна, защитена и подготвена за поддръжка",
        items: [
          "Нови производствени линии, машини и технологични участъци.",
          "Модернизация на стари електрически табла и командни шкафове.",
          "Обекти с нужда от надеждни защити, ниско напрежение и ясна поддръжка.",
          "Интеграция с автоматизация, сензори, задвижвания и контролни системи.",
        ],
      }}
      process={{
        badge: "Как протича изпълнението",
        title: "От задание до пуск и проверка",
        steps: [
          {
            title: "Технически оглед",
            text:
              "Уточняваме консуматори, натоварвания, среда, място за монтаж и връзки към съществуващи системи.",
          },
          {
            title: "Проект и конфигурация",
            text:
              "Подготвяме практично решение за табло, защити, окабеляване, управление и бъдеща поддръжка.",
          },
          {
            title: "Изработка и окабеляване",
            text:
              "Изпълняваме подредено окабеляване, маркировка и монтаж на апаратура според конкретния обект.",
          },
          {
            title: "Пуск и тестване",
            text:
              "Проверяваме връзки, функции, защити и готовност за работа преди предаване към клиента.",
          },
        ],
        image: "/images/electrical-panels/electrical-panels-cabinet-interior-detail-01.png",
        imageAlt: "Детайл от вътрешността на електрическо табло с подредено индустриално окабеляване.",
        imageKicker: "ПРОВЕРКА НА ТАБЛОТО",
        imageTitle: "ГОТОВО ЗА ТЕСТ",
      }}
      faq={{
        title: "Често задавани въпроси",
        intro:
          "Кратки отговори на най-честите въпроси при изработка на електрически табла и командни шкафове.",
        items: electricPanelsFaqItems,
      }}
      related={{
        badge: "Свързани направления",
        title: "Таблото е част от цялата електро система",
        text:
          "При нужда комбинираме таблата с индустриални електроинсталации, кабелни трасета, автоматизация и поддръжка.",
        items: [
          {
            title: "Индустриални електроинсталации",
            href: "/bg/uslugi/industrialni-elektroinstalatsii",
            text:
              "Захранване, силови линии и връзка между табла, машини и технологични зони.",
          },
          {
            title: "Автоматизация",
            href: "/bg/uslugi/avtomatizatsia",
            text:
              "Командни вериги, контролни сигнали и интеграция с машини, датчици и процеси.",
          },
          {
            title: "Кабелни трасета",
            href: "/bg/uslugi/kabelni-traseta",
            text:
              "Подготвени трасета и окабеляване за чист монтаж и по-лесна последваща поддръжка.",
          },
        ],
        primaryCtaText: "Обсъдете табло за вашия обект",
        primaryCtaHref: "/bg/kontakti",
        primaryCtaIcon: "ChevronRight",
        secondaryCtaText: "Вижте индустриите",
        secondaryCtaHref: "/bg/industrii",
        secondaryCtaIcon: "Factory",
      }}
    />
  );
};

export default ElectricPanels;
