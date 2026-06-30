import type { FormsContent } from "../types";

export const formsContent = {
  contact: {
    heading: "Свържете се с нас",
    intro: "Попълнете формата и наш инженер ще се свърже с вас.",
    labels: {
      name: "Име и фамилия",
      phone: "Телефон",
      email: "Имейл",
      projectType: "Тип проект",
      message: "Съобщение",
    },
    placeholders: {
      name: "Вашето име",
      phone: "+359...",
      email: "name@company.com",
      projectType: "Изберете от списъка...",
      message: "Опишете накратко нуждите на проекта...",
    },
    validation: {
      nameRequired: "Моля, въведете име.",
      phoneRequired: "Моля, въведете телефон.",
      emailRequired: "Моля, въведете имейл.",
      emailInvalid: "Моля, въведете валиден имейл.",
      projectTypeRequired: "Моля, изберете тип проект.",
      messageRequired: "Моля, опишете проекта накратко.",
    },
    projectOptions: [
      {
        key: "industrialElectricalInstallation",
        label: "Индустриална електроинсталация",
      },
      {
        key: "panelsAndAutomation",
        label: "Ел. табла и автоматизация",
      },
      {
        key: "maintenanceAndService",
        label: "Поддръжка и сервиз",
      },
      {
        key: "other",
        label: "Друго",
      },
    ],
    submit: {
      ariaLabel: "Изпрати запитване",
      label: "Изпрати запитване",
      helperPrefix: "При изпращане ще се отвори вашият имейл клиент с готово съобщение до",
      helperSuffix: ".",
      successPrefix:
        "Данните са подготвени успешно. Ако не се отвори имейл клиент, изпратете ни запитването ръчно на",
      successSuffix: ".",
    },
    mailto: {
      subjectPrefix: "Запитване от сайта",
      nameLabel: "Име",
      phoneLabel: "Телефон",
      emailLabel: "Имейл",
      projectTypeLabel: "Тип проект",
      messageLabel: "Съобщение",
    },
    sidebar: {
      heading: "Какво получавате?",
      items: [
        {
          title: "Бърза реакция",
          text: "Връщаме отговор до 1 работен ден.",
        },
        {
          title: "Без ангажимент",
          text: "Безплатна първоначална консултация.",
        },
        {
          title: "100% конфиденциалност",
          text: "Вашите данни са защитени според GDPR.",
        },
      ],
      directContactLabel: "Директен контакт:",
      emailPrefix: "Или ни пишете на",
      emailSuffix: ".",
    },
  },
} as const satisfies FormsContent;
