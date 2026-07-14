import React from "react";
import ServiceDetailLayout from "../../components/services/ServiceDetailLayout";
import { automationFaqItems } from "../../data/automationFaq";
import { enContent, roContent } from "../../data/i18n/content";
import type { Locale } from "../../data/i18n/content";
import type { SeoPageKey } from "../../seo/seoConfig";

interface AutomationProps {
  locale?: Locale;
}

const Automation: React.FC<AutomationProps> = ({ locale = "bg" }) => {
  if (locale !== "bg") {
    const content = ((locale === "ro" ? roContent : enContent) as unknown as typeof enContent).pages.serviceDetails?.automation;

    if (!content) {
      throw new Error("Missing English automation service detail content.");
    }

    return (
      <ServiceDetailLayout
        seoPage={(locale === "ro" ? "roAutomation" : content.seoPage) as SeoPageKey}
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
      seoPage="automation"
      hero={{
        title: "Автоматизация на индустриални процеси и системи за управление",
        subtitle:
          "Изграждаме решения за автоматизация, управление и контрол на производствени процеси, машини и технологични линии. Свързваме електрически табла, сензори, задвижвания и контролни системи в ясна и поддържаема структура.",
        badgeText: "Автоматизация",
        image: "/images/automation/automation-plc-control-system-production-line-01.png",
        imageAlt: "PLC автоматизация и контролно табло за индустриален процес",
        primaryCtaText: "Обсъдете автоматизация",
        primaryCtaHref: "/bg/kontakti",
        secondaryCtaText: "Вижте всички услуги",
        secondaryCtaHref: "/bg/uslugi",
        secondaryCtaIcon: "ChevronRight",
      }}
      overview={{
        badge: "Какво включва услугата",
        title: "Управление, контрол и ясна връзка между процесите",
        text:
          "Автоматизацията трябва да направи процеса по-предвидим, управляем и лесен за обслужване. Затова свързваме табла, сензори, задвижвания и контролни вериги в практична система за реална работа.",
        items: [
          "Системи за управление и контрол на машини, производствени линии и технологични участъци.",
          "Връзка между електрически табла, PLC, сензори, задвижвания и контролни вериги.",
          "Настройка и тестване на работни режими, сигнали, защити и последователности.",
          "Подготовка за мониторинг, бъдещо разширяване и последваща поддръжка.",
        ],
      }}
      suitability={{
        badge: "Кога е подходящо",
        title: "Когато процесът има нужда от по-добър контрол и повторяемост",
        items: [
          "Нови производствени линии, машини и технологични процеси.",
          "Модернизация на съществуващи машини, участъци или производствени линии.",
          "Обекти с нужда от по-добър контрол, мониторинг и управление на процеса.",
          "Системи с електрически табла, сензори, мотори, задвижвания и автоматизирани режими.",
        ],
      }}
      process={{
        badge: "Как протича изпълнението",
        title: "От процесно задание до пуск и настройка",
        steps: [
          {
            title: "Техническо уточняване на процеса",
            text:
              "Уточняваме машините, сигналите, режимите на работа, ограниченията, безопасността и очаквания резултат от управлението.",
          },
          {
            title: "Контролна логика и компоненти",
            text:
              "Планираме PLC, сензори, задвижвания, табла, контролни вериги и връзки към съществуващи системи.",
          },
          {
            title: "Свързване, настройка и тестове",
            text:
              "Изпълняваме свързване, проверка на сигнали, настройка на режими и тестове на работните последователности.",
          },
          {
            title: "Пуск и предаване",
            text:
              "Проверяваме поведението на системата на обекта, настройваме финалните параметри и подготвяме системата за работа.",
          },
        ],
        image: "/images/automation/automation-plc-technical-detail-01.png",
        imageAlt: "Технически детайл от PLC автоматизация и контролна електро система.",
        imageKicker: "ПРОВЕРКА НА УПРАВЛЕНИЕТО",
        imageTitle: "ГОТОВО ЗА ПУСК",
      }}
      faq={{
        title: "Често задавани въпроси",
        intro:
          "Кратки отговори на най-честите въпроси при автоматизация на индустриални процеси и системи за управление.",
        items: automationFaqItems,
      }}
      related={{
        badge: "Свързани направления",
        title: "Автоматизацията работи най-добре като част от цялата система",
        text:
          "При нужда комбинираме автоматизацията с електрически табла, кабелни трасета, индустриални електроинсталации и поддръжка.",
        items: [
          {
            title: "Електрически табла",
            href: "/bg/uslugi/elektricheski-tabla",
            text:
              "Командни шкафове, контролни вериги и табла за управление на машини, линии и процеси.",
          },
          {
            title: "Индустриални електроинсталации",
            href: "/bg/uslugi/industrialni-elektroinstalatsii",
            text:
              "Захранване, ниско напрежение и окабеляване за връзка между машини, табла и технологични участъци.",
          },
          {
            title: "Кабелни трасета",
            href: "/bg/uslugi/kabelni-traseta",
            text:
              "Подредени трасета за сигнали, управление, комуникация, сензори и задвижвания.",
          },
        ],
        primaryCtaText: "Обсъдете автоматизация за вашия обект",
        primaryCtaHref: "/bg/kontakti",
        primaryCtaIcon: "ChevronRight",
        secondaryCtaText: "Вижте индустриите",
        secondaryCtaHref: "/bg/industrii",
        secondaryCtaIcon: "Factory",
      }}
    />
  );
};

export default Automation;
