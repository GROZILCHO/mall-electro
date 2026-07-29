import type { RouteKey, SupportedLocale } from "./types";

export const LEGAL_DOCUMENT_VERSION = "1.0";
export const LEGAL_PUBLICATION_DATE = "YYYY-MM-DD";
export const LEGAL_COMPANY_NUMBER = "205154709";
export const LEGAL_VAT_NUMBER = "BG205154709";

export const legalDocumentDetails = {
  bg: {
    pendingPublication: "Предстои публикуване",
    versionLabel: "Версия",
    effectiveDateLabel: "В сила от",
    lastUpdatedLabel: "Последна актуализация",
    companyDetailsHeading: "Данни за дружеството",
    legalEntityLabel: "Юридическо лице",
    legalEntity: "УНИ КОМПАНИ ЕООД",
    companyNumberLabel: "ЕИК",
    vatNumberLabel: "ДДС номер",
    registeredOfficeLabel: "Седалище и адрес на управление",
    registeredOffice: "Република България, 1000 София, район Оборище, ул. „Дунав“ № 9, офис 1",
    tradeNameLabel: "Търговско представяне на сайта",
    tradeName: "Mall Electro",
    contactEmailLabel: "Имейл за контакт",
  },
  en: {
    pendingPublication: "Pending publication",
    versionLabel: "Version",
    effectiveDateLabel: "Effective date",
    lastUpdatedLabel: "Last updated",
    companyDetailsHeading: "Company details",
    legalEntityLabel: "Legal entity",
    legalEntity: "UNI COMPANI EOOD",
    companyNumberLabel: "Company number / EIK",
    vatNumberLabel: "VAT number",
    registeredOfficeLabel: "Registered office",
    registeredOffice: "9 Dunav Street, Office 1, Oborishte District, 1000 Sofia, Republic of Bulgaria",
    tradeNameLabel: "Website/trade presentation name",
    tradeName: "Mall Electro",
    contactEmailLabel: "Contact email",
  },
  ro: {
    pendingPublication: "În așteptarea publicării",
    versionLabel: "Versiune",
    effectiveDateLabel: "Data intrării în vigoare",
    lastUpdatedLabel: "Ultima actualizare",
    companyDetailsHeading: "Datele societății",
    legalEntityLabel: "Persoană juridică",
    legalEntity: "UNI COMPANI EOOD",
    companyNumberLabel: "Număr companie / EIK",
    vatNumberLabel: "Cod de TVA",
    registeredOfficeLabel: "Sediu social",
    registeredOffice: "Strada Dunav nr. 9, biroul 1, districtul Oborishte, 1000 Sofia, Republica Bulgaria",
    tradeNameLabel: "Denumire de prezentare comercială a site-ului",
    tradeName: "Mall Electro",
    contactEmailLabel: "E-mail de contact",
  },
} as const satisfies Record<SupportedLocale, Record<string, string>>;

export type LegalPageKey = "privacyPolicy" | "cookiePolicy" | "termsOfUse";

export type LegalTextPart =
  | string
  | { type: "email" }
  | { type: "phone" }
  | { type: "routeLink"; routeKey: RouteKey; label: string };

export interface LegalSectionContent {
  heading: string;
  paragraphs?: readonly (readonly LegalTextPart[])[];
  items?: readonly string[];
}

export interface LegalPageContent {
  hero: {
    title: string;
    subtitle: string;
    badgeText: string;
    imageAlt: string;
    primaryCtaText: string;
    primaryCtaRouteKey: RouteKey;
    secondaryCtaText: string;
    secondaryCtaRouteKey: RouteKey;
    overlayProjectLabel: string;
    overlayStatusLabel: string;
  };
  notice?: string;
  sections: readonly LegalSectionContent[];
}

// Translation draft pending legal/native approval.
export const legalContent: Record<SupportedLocale, Record<LegalPageKey, LegalPageContent>> = {
  bg: {
    privacyPolicy: {
      hero: {
        title: "Политика за поверителност",
        subtitle: "Тази страница описва как Mall Electro обработва лични данни, получени чрез сайта, контактни форми, имейл или телефонна комуникация.",
        badgeText: "Правна информация",
        imageAlt: "Индустриален електро инженеринг и техническа документация.",
        primaryCtaText: "Свържете се",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Бисквитки",
        secondaryCtaRouteKey: "cookiePolicy",
        overlayProjectLabel: "ПРОЕКТ: #8842",
        overlayStatusLabel: "ПРЕГЛЕД НА ОБЕКТА",
      },
      notice: "Настоящият текст има информационен характер и подлежи на финален преглед от собственика на дружеството или правен консултант преди официално публикуване.",
      sections: [
        {
          heading: "Администратор на лични данни",
          paragraphs: [["Администратор на личните данни е УНИ КОМПАНИ ЕООД, което представя дейността си на сайта под името Mall Electro. За въпроси, свързани с поверителността и обработването на лични данни, можете да се свържете с нас на ", { type: "email" }, " или на телефон ", { type: "phone" }, "."]],
        },
        {
          heading: "Какви данни може да събираме",
          items: [
            "Име, телефон и имейл, въведени във формата за контакт.",
            "Избран тип проект и текст на съобщението, включително информация за проект, обект или техническо задание, която предоставите.",
            "Технически данни от заявките към сайта, които могат да бъдат обработвани от хостинг или защитна инфраструктура за доставка, сигурност и диагностика; конкретните логове и срокове подлежат на проверка в хостинг средата.",
          ],
        },
        {
          heading: "Цели и правни основания",
          paragraphs: [["Данните от запитвания се обработват, за да се предприемат стъпки по ваше искане преди сключване на договор, включително отговор, техническо уточнение и подготовка на оферта. Когато е приложимо, обработването може да е необходимо за изпълнение на договор или законово задължение. Легитимен интерес може да бъде основание за сигурността на сайта, предотвратяване на злоупотреби и коректна бизнес комуникация. Съгласие се използва само когато е поискано отделно и не е общо основание за всяко запитване."]],
        },
        {
          heading: "Начин на изпращане на формата",
          paragraphs: [["Формата се обработва в браузъра и подготвя имейл до ", { type: "email" }, " чрез функцията mailto. Сайтът не изпраща съдържанието на формата към собствен backend или към външен form processor. Реалното изпращане се извършва от избрания от вас имейл клиент и може да включва обработване от вашия и от нашия доставчик на електронна поща."]],
        },
        {
          heading: "Срокове за съхранение",
          paragraphs: [["Съхраняваме лични данни само за срока, необходим за съответната цел, или за сроковете, изисквани от приложимото законодателство. Данни от запитвания могат да се пазят за последваща комуникация по конкретен проект, освен ако не поискате тяхното изтриване и няма законово основание за по-дълго съхранение."]],
        },
        {
          heading: "Получатели и обработващи лица",
          paragraphs: [["Съобщенията се получават чрез използваните доставчици на електронна поща. Доставчици на хостинг, сигурност и техническа поддръжка могат да обработват технически данни от заявките към сайта. Счетоводни или правни доставчици могат да получат данни само когато това е необходимо за конкретни отношения. Данни могат да бъдат предоставени и на държавни органи, когато това се изисква по закон. Конкретните доставчици и договорни роли изискват оперативно потвърждение преди публикуване."]],
        },
        { heading: "Технически услуги, международни трансфери и профилиране", paragraphs: [["Шрифтовете на сайта се доставят локално от инфраструктурата на Mall Electro и не изискват външна шрифтова заявка. Това не изключва други инфраструктурни доставчици, чиито роли и евентуални международни трансфери изискват отделно оперативно потвърждение. Във frontend реализацията не са открити автоматизирано вземане на решения или профилиране."]] },
        {
          heading: "Вашите права",
          paragraphs: [
            ["Имате право на достъп, корекция, изтриване, ограничаване на обработването, възражение, преносимост на данните и оттегляне на съгласие, когато обработването се основава на съгласие."],
            ["Имате право да подадете жалба до Комисията за защита на личните данни в Република България, ако считате, че обработването на данните ви нарушава приложимите правила."],
          ],
        },
        {
          heading: "Контакт за заявки",
          paragraphs: [["За заявки, свързани с лични данни, пишете на ", { type: "email" }, ". За информация относно технически файлове и съхранение вижте ", { type: "routeLink", routeKey: "cookiePolicy", label: "Политиката за бисквитки" }, "."]],
        },
      ],
    },
    cookiePolicy: {
      hero: {
        title: "Политика за бисквитки",
        subtitle: "Тази страница обяснява какво представляват бисквитките и какви технически механизми може да се използват при работа със сайта на Mall Electro.",
        badgeText: "Правна информация",
        imageAlt: "Техническа среда за индустриални електро системи.",
        primaryCtaText: "Политика за поверителност",
        primaryCtaRouteKey: "privacyPolicy",
        secondaryCtaText: "Контакти",
        secondaryCtaRouteKey: "contact",
        overlayProjectLabel: "ПРОЕКТ: #8842",
        overlayStatusLabel: "ПРЕГЛЕД НА ОБЕКТА",
      },
      notice: "При одита на frontend изходния код и генерирания build не са открити аналитични или маркетингови скриптове. Това е техническа констатация, а не потвърждение за поведението на хостинг, CDN, защитна стена или други услуги в реалната среда.",
      sections: [
        { heading: "Какво са бисквитките", paragraphs: [["Бисквитките са малки файлове или записи, които сайтът може да съхранява в браузъра, за да поддържа основна функционалност, сигурност, предпочитания или статистика."]] },
        { heading: "Фактически инвентар и статус", items: ["Проверено в чиста Chrome Incognito сесия: не са открити first-party бисквитки от mallelectro.com.", "Browser storage: не са открити Local Storage, Session Storage или IndexedDB записи.", "Опционални аналитични и маркетингови технологии: не са открити Google Analytics, Google Tag Manager, gtag, analytics/collect, Facebook tracker, DoubleClick, Hotjar или Microsoft Clarity.", "Вградено съдържание и CAPTCHA: не са открити YouTube, Google Maps или reCAPTCHA.", "Шрифтове: Inter и Roboto се доставят локално от сайта, без външна шрифтова заявка. Бисквитката __Secure-ENID е наблюдавана само за домейн .google.com и не е first-party бисквитка на Mall Electro; няма доказателство, че е зададена от сайта.", "Google Search Console: конфигуриран е чрез DNS/domain verification за индексиране и наблюдение на резултатите от търсене; не е вграден аналитичен скрипт или first-party бисквитка.", "Изисква проверка на живо след всяка инфраструктурна промяна: Set-Cookie headers, hosting/CDN/WAF механизми и реални network requests."] },
        { heading: "Текущо използване", paragraphs: [["При проверената конфигурация не са открити first-party бисквитки или browser storage на Mall Electro. Хостинг или защитна инфраструктура може да обработва server request logs за доставка, сигурност и диагностика; server logs не са browser cookies и конкретното им съдържание и срокове изискват потвърждение от доставчика."]] },
        { heading: "Аналитични и маркетингови бисквитки", paragraphs: [["Ако в бъдеще бъдат добавени опционални аналитични, маркетингови или други third-party tracking технологии, политиката и всеки необходим механизъм за съгласие ще бъдат актуализирани преди активирането им."]] },
        { heading: "Управление на бисквитки", paragraphs: [["Можете да управлявате или изтривате бисквитки от настройките на браузъра си. Ограничаването на технически файлове може да повлияе на начина, по който някои сайтове се зареждат или функционират."]] },
        { heading: "Връзка с поверителността", paragraphs: [["Повече информация за обработването на лични данни е налична в ", { type: "routeLink", routeKey: "privacyPolicy", label: "Политиката за поверителност" }, "."]] },
      ],
    },
    termsOfUse: {
      hero: {
        title: "Условия за ползване",
        subtitle: "Тези условия описват основните правила за използване на сайта на Mall Electro и информационния характер на публикуваното съдържание.",
        badgeText: "Правна информация",
        imageAlt: "Индустриална електро документация и инженерна среда.",
        primaryCtaText: "Свържете се",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Поверителност",
        secondaryCtaRouteKey: "privacyPolicy",
        overlayProjectLabel: "ПРОЕКТ: #8842",
        overlayStatusLabel: "ПРЕГЛЕД НА ОБЕКТА",
      },
      sections: [
        { heading: "Информационен характер", paragraphs: [["Съдържанието на сайта е предоставено с информационна цел и описва общо направление на дейности, услуги и индустриални приложения. То не представлява техническо задание, проектна документация или индивидуална консултация."]] },
        { heading: "Оферти и договори", paragraphs: [["Публикуваната информация не представлява автоматична оферта или договорно предложение. Конкретна услуга изисква запитване и техническо уточнение, а параметрите на проекта се потвърждават индивидуално. Офертата и договорът, когато са приложими, са отделни от информацията на сайта."]] },
        { heading: "Интелектуална собственост", paragraphs: [["Текстовете, структурата, изображенията, графичните елементи и другото съдържание на сайта са защитени. Използване, копиране или публикуване извън обичайното разглеждане на сайта е допустимо само при приложимо право или предварително съгласие."]] },
        { heading: "Допустимо използване", paragraphs: [["Не се допуска използване на сайта по начин, който нарушава закона, засяга сигурността, претоварва инфраструктурата, въвежда зловреден код или възпрепятства нормалното му функциониране."]] },
        { heading: "Ограничаване на отговорността", paragraphs: [["Mall Electro полага усилия информацията на сайта да бъде актуална и точна, но не гарантира, че всички материали са изчерпателни или приложими към всеки конкретен проект. Решенията за електро системи следва да се вземат след технически преглед и професионална оценка."]] },
        { heading: "Контакт", paragraphs: [["За въпроси относно сайта или условията за ползване можете да ни пишете на ", { type: "email" }, "."]] },
      ],
    },
  },
  en: {
    privacyPolicy: {
      hero: {
        title: "Privacy Policy",
        subtitle: "This page describes how Mall Electro processes personal data received through the website, contact forms, email or telephone communication.",
        badgeText: "Legal information",
        imageAlt: "Industrial electrical engineering and technical documentation.",
        primaryCtaText: "Contact us",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Cookies",
        secondaryCtaRouteKey: "cookiePolicy",
        overlayProjectLabel: "PROJECT: #8842",
        overlayStatusLabel: "SITE REVIEW",
      },
      notice: "This text is for information purposes and is subject to final review by the company owner or legal counsel before official publication.",
      sections: [
        { heading: "Personal data controller", paragraphs: [["The personal data controller is UNI COMPANI EOOD, which presents its activities on the website under the name Mall Electro. For questions related to privacy and the processing of personal data, you can contact us at ", { type: "email" }, " or by telephone at ", { type: "phone" }, "."]] },
        { heading: "Data we may collect", items: ["Name, telephone number and email address entered in the contact form.", "Selected project type and message text, including any project, site or technical assignment information that you provide.", "Technical request data that may be processed by hosting or security infrastructure for delivery, security and diagnostics; the specific logs and retention periods require verification in the hosting environment."] },
        { heading: "Purposes and legal grounds", paragraphs: [["Inquiry data is processed to take steps at your request before entering into a contract, including responding, clarifying technical requirements and preparing a quotation. Where applicable, processing may be necessary for the performance of a contract or compliance with a legal obligation. Legitimate interests may provide a basis for website security, abuse prevention and proper business communication. Consent is used only where requested separately and is not the general basis for every inquiry."]] },
        { heading: "How the form is sent", paragraphs: [["The form is processed in the browser and prepares an email to ", { type: "email" }, " through a mailto link. The website does not send the form content to its own backend or to an external form processor. The actual message is sent by your selected email client and may be processed by your email provider and ours."]] },
        { heading: "Retention periods", paragraphs: [["We retain personal data only for the period necessary for the relevant purpose or for the periods required by applicable law. Data from inquiries may be retained for subsequent communication about a specific project unless you request its deletion and there is no legal basis for longer retention."]] },
        { heading: "Recipients and processors", paragraphs: [["Messages are received through the email service providers in use. Hosting, security and technical support providers may process technical request data. Accounting or legal service providers may receive data only where necessary for a specific relationship. Data may also be provided to public authorities where required by law. The specific providers and contractual roles require operational confirmation before publication."]] },
        { heading: "Technical services, international transfers and profiling", paragraphs: [["Website fonts are delivered locally by the Mall Electro infrastructure and do not require an external font request. This does not exclude other infrastructure providers whose roles and any international transfers require separate operational confirmation. No automated decision-making or profiling was detected in the frontend implementation."]] },
        { heading: "Your rights", paragraphs: [["You have the right of access, rectification, erasure, restriction of processing, objection, data portability and withdrawal of consent where processing is based on consent."], ["You have the right to lodge a complaint with the Commission for Personal Data Protection in the Republic of Bulgaria if you believe that the processing of your data infringes the applicable rules."]] },
        { heading: "Contact for requests", paragraphs: [["For requests related to personal data, write to ", { type: "email" }, ". For information about technical files and storage, see the ", { type: "routeLink", routeKey: "cookiePolicy", label: "Cookie Policy" }, "."]] },
      ],
    },
    cookiePolicy: {
      hero: {
        title: "Cookie Policy",
        subtitle: "This page explains what cookies are and what technical mechanisms may be used when operating the Mall Electro website.",
        badgeText: "Legal information",
        imageAlt: "Technical environment for industrial electrical systems.",
        primaryCtaText: "Privacy Policy",
        primaryCtaRouteKey: "privacyPolicy",
        secondaryCtaText: "Contact",
        secondaryCtaRouteKey: "contact",
        overlayProjectLabel: "PROJECT: #8842",
        overlayStatusLabel: "SITE REVIEW",
      },
      notice: "The audit of the frontend source and generated build did not detect analytics or marketing scripts. This is a technical finding, not confirmation of the behaviour of hosting, CDN, firewall or other services in the live environment.",
      sections: [
        { heading: "What cookies are", paragraphs: [["Cookies are small files or records that a website may store in the browser to support basic functionality, security, preferences or statistics."]] },
        { heading: "Factual inventory and status", items: ["Verified in a clean Chrome Incognito session: no first-party cookies from mallelectro.com were detected.", "Browser storage: no Local Storage, Session Storage or IndexedDB entries were detected.", "Optional analytics and marketing technologies: Google Analytics, Google Tag Manager, gtag, analytics/collect, Facebook tracker, DoubleClick, Hotjar and Microsoft Clarity were not detected.", "Embedded content and CAPTCHA: YouTube, Google Maps and reCAPTCHA were not detected.", "Fonts: Inter and Roboto are delivered locally by the website without an external font request. The __Secure-ENID cookie was observed only under the .google.com domain and is not a Mall Electro first-party cookie; there is no evidence that it was set by the website.", "Google Search Console: configured through DNS/domain verification for search indexing and performance monitoring; it is not an embedded analytics script or a first-party cookie.", "Requires live verification after any infrastructure change: Set-Cookie headers, hosting/CDN/WAF mechanisms and actual network requests."] },
        { heading: "Current use", paragraphs: [["In the verified configuration, no Mall Electro first-party cookies or browser storage were detected. Hosting or security infrastructure may process server request logs for delivery, security and diagnostics; server logs are not browser cookies, and their specific content and retention require provider confirmation."]] },
        { heading: "Analytics and marketing cookies", paragraphs: [["If optional analytics, marketing or other third-party tracking technologies are introduced later, this policy and any required consent mechanism will be updated before activation."]] },
        { heading: "Managing cookies", paragraphs: [["You can manage or delete cookies through your browser settings. Restricting technical files may affect how some websites load or function."]] },
        { heading: "Relationship to privacy", paragraphs: [["More information about the processing of personal data is available in the ", { type: "routeLink", routeKey: "privacyPolicy", label: "Privacy Policy" }, "."]] },
      ],
    },
    termsOfUse: {
      hero: {
        title: "Terms of Use",
        subtitle: "These terms describe the basic rules for using the Mall Electro website and the informational nature of the published content.",
        badgeText: "Legal information",
        imageAlt: "Industrial electrical documentation and engineering environment.",
        primaryCtaText: "Contact us",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Privacy",
        secondaryCtaRouteKey: "privacyPolicy",
        overlayProjectLabel: "PROJECT: #8842",
        overlayStatusLabel: "SITE REVIEW",
      },
      sections: [
        { heading: "Informational nature", paragraphs: [["The website content is provided for information purposes and gives a general description of activities, services and industrial applications. It does not constitute a technical assignment, project documentation or individual consultation."]] },
        { heading: "Quotations and contracts", paragraphs: [["The published information does not constitute an automatic quotation or contractual offer. A specific service requires an inquiry and technical clarification, and project parameters are confirmed individually. Any applicable quotation and contract are separate from the information on the website."]] },
        { heading: "Intellectual property", paragraphs: [["The texts, structure, images, graphic elements and other website content are protected. Use, copying or publication beyond ordinary viewing of the website is permitted only where allowed by applicable law or with prior consent."]] },
        { heading: "Acceptable use", paragraphs: [["The website must not be used in a manner that violates the law, compromises security, overloads the infrastructure, introduces malicious code or prevents its normal operation."]] },
        { heading: "Limitation of liability", paragraphs: [["Mall Electro endeavours to keep the information on the website current and accurate, but does not guarantee that all materials are complete or applicable to every specific project. Decisions concerning electrical systems should be made following a technical review and professional assessment."]] },
        { heading: "Contact", paragraphs: [["For questions about the website or these Terms of Use, you can write to us at ", { type: "email" }, "."]] },
      ],
    },
  },
  ro: {
    privacyPolicy: {
      hero: {
        title: "Politica de confidențialitate",
        subtitle: "Această pagină descrie modul în care Mall Electro prelucrează datele cu caracter personal primite prin intermediul site-ului, al formularelor de contact, prin e-mail sau prin comunicare telefonică.",
        badgeText: "Informații juridice",
        imageAlt: "Inginerie electrică industrială și documentație tehnică.",
        primaryCtaText: "Contactați-ne",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Cookie-uri",
        secondaryCtaRouteKey: "cookiePolicy",
        overlayProjectLabel: "PROIECT: #8842",
        overlayStatusLabel: "VERIFICARE LA FAȚA LOCULUI",
      },
      notice: "Prezentul text are caracter informativ și este supus unei verificări finale de către proprietarul societății sau de către un consultant juridic înainte de publicarea oficială.",
      sections: [
        { heading: "Operatorul de date cu caracter personal", paragraphs: [["Operatorul datelor cu caracter personal este UNI COMPANI EOOD, care își prezintă activitatea pe site sub denumirea Mall Electro. Pentru întrebări privind confidențialitatea și prelucrarea datelor cu caracter personal, ne puteți contacta la ", { type: "email" }, " sau la numărul de telefon ", { type: "phone" }, "."]] },
        { heading: "Ce date putem colecta", items: ["Numele, numărul de telefon și adresa de e-mail introduse în formularul de contact.", "Tipul de proiect selectat și textul mesajului, inclusiv informațiile despre un proiect, un obiectiv sau o temă tehnică pe care le furnizați.", "Date tehnice privind solicitările, care pot fi prelucrate de infrastructura de găzduire sau securitate pentru livrare, securitate și diagnosticare; jurnalele și perioadele de păstrare concrete necesită verificare în mediul de găzduire."] },
        { heading: "Scopuri și temeiuri juridice", paragraphs: [["Datele din solicitări sunt prelucrate pentru efectuarea unor demersuri la cererea dumneavoastră înainte de încheierea unui contract, inclusiv pentru răspuns, clarificarea cerințelor tehnice și pregătirea unei oferte. După caz, prelucrarea poate fi necesară pentru executarea unui contract sau respectarea unei obligații legale. Interesele legitime pot constitui un temei pentru securitatea site-ului, prevenirea abuzurilor și comunicarea comercială corectă. Consimțământul este utilizat numai atunci când este solicitat separat și nu reprezintă temeiul general pentru fiecare solicitare."]] },
        { heading: "Modul de trimitere a formularului", paragraphs: [["Formularul este prelucrat în browser și pregătește un e-mail către ", { type: "email" }, " prin intermediul unui link mailto. Site-ul nu trimite conținutul formularului către un backend propriu sau către un procesator extern de formulare. Mesajul efectiv este trimis de clientul de e-mail ales de dumneavoastră și poate fi prelucrat de furnizorul dumneavoastră de e-mail și de al nostru."]] },
        { heading: "Perioade de păstrare", paragraphs: [["Păstrăm datele cu caracter personal numai pe perioada necesară scopului respectiv sau pe perioadele impuse de legislația aplicabilă. Datele din solicitări pot fi păstrate pentru comunicări ulterioare privind un anumit proiect, cu excepția cazului în care solicitați ștergerea acestora și nu există un temei legal pentru o păstrare mai îndelungată."]] },
        { heading: "Destinatari și persoane împuternicite", paragraphs: [["Mesajele sunt primite prin intermediul furnizorilor de servicii de e-mail utilizați. Furnizorii de găzduire, securitate și asistență tehnică pot prelucra date tehnice privind solicitările. Furnizorii de servicii contabile sau juridice pot primi date numai atunci când acest lucru este necesar pentru o relație concretă. Datele pot fi furnizate și autorităților publice atunci când acest lucru este impus de lege. Furnizorii concreți și rolurile contractuale necesită confirmare operațională înainte de publicare."]] },
        { heading: "Servicii tehnice, transferuri internaționale și profilare", paragraphs: [["Fonturile site-ului sunt livrate local de infrastructura Mall Electro și nu necesită o solicitare externă pentru fonturi. Acest lucru nu exclude alți furnizori de infrastructură, ale căror roluri și eventuale transferuri internaționale necesită o confirmare operațională separată. În implementarea frontend nu au fost detectate procese decizionale automatizate sau profilare."]] },
        { heading: "Drepturile dumneavoastră", paragraphs: [["Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, opoziție, portabilitate a datelor și retragere a consimțământului atunci când prelucrarea se bazează pe consimțământ."], ["Aveți dreptul să depuneți o plângere la Comisia pentru Protecția Datelor cu Caracter Personal din Republica Bulgaria dacă apreciați că prelucrarea datelor dumneavoastră încalcă normele aplicabile."]] },
        { heading: "Contact pentru solicitări", paragraphs: [["Pentru solicitări privind datele cu caracter personal, scrieți la ", { type: "email" }, ". Pentru informații privind fișierele tehnice și stocarea, consultați ", { type: "routeLink", routeKey: "cookiePolicy", label: "Politica privind cookie-urile" }, "."]] },
      ],
    },
    cookiePolicy: {
      hero: {
        title: "Politica privind cookie-urile",
        subtitle: "Această pagină explică ce sunt cookie-urile și ce mecanisme tehnice pot fi utilizate în funcționarea site-ului Mall Electro.",
        badgeText: "Informații juridice",
        imageAlt: "Mediu tehnic pentru sisteme electrice industriale.",
        primaryCtaText: "Politica de confidențialitate",
        primaryCtaRouteKey: "privacyPolicy",
        secondaryCtaText: "Contact",
        secondaryCtaRouteKey: "contact",
        overlayProjectLabel: "PROIECT: #8842",
        overlayStatusLabel: "VERIFICARE LA FAȚA LOCULUI",
      },
      notice: "Auditul sursei frontend și al build-ului generat nu a identificat scripturi analitice sau de marketing. Aceasta este o constatare tehnică, nu o confirmare a comportamentului serviciilor de găzduire, CDN, firewall sau al altor servicii din mediul live.",
      sections: [
        { heading: "Ce sunt cookie-urile", paragraphs: [["Cookie-urile sunt fișiere sau înregistrări de mici dimensiuni pe care site-ul le poate stoca în browser pentru a susține funcționalitatea de bază, securitatea, preferințele sau statisticile."]] },
        { heading: "Inventar factual și statut", items: ["Verificat într-o sesiune Chrome Incognito curată: nu au fost detectate cookie-uri first-party de la mallelectro.com.", "Stocare în browser: nu au fost detectate înregistrări Local Storage, Session Storage sau IndexedDB.", "Tehnologii analitice și de marketing opționale: nu au fost detectate Google Analytics, Google Tag Manager, gtag, analytics/collect, Facebook tracker, DoubleClick, Hotjar sau Microsoft Clarity.", "Conținut încorporat și CAPTCHA: nu au fost detectate YouTube, Google Maps sau reCAPTCHA.", "Fonturi: Inter și Roboto sunt livrate local de site, fără o solicitare externă pentru fonturi. Cookie-ul __Secure-ENID a fost observat numai pentru domeniul .google.com și nu este un cookie first-party Mall Electro; nu există dovezi că a fost setat de site.", "Google Search Console: este configurat prin verificare DNS/domain pentru indexarea și monitorizarea performanței în căutare; nu este un script analitic încorporat sau un cookie first-party.", "Necesită verificare live după orice modificare a infrastructurii: antetele Set-Cookie, mecanismele de găzduire/CDN/WAF și solicitările reale de rețea."] },
        { heading: "Utilizarea actuală", paragraphs: [["În configurația verificată nu au fost detectate cookie-uri first-party Mall Electro sau stocare în browser. Infrastructura de găzduire sau securitate poate prelucra jurnale de solicitări ale serverului pentru livrare, securitate și diagnosticare; jurnalele serverului nu sunt cookie-uri de browser, iar conținutul și perioadele lor concrete necesită confirmarea furnizorului."]] },
        { heading: "Cookie-uri analitice și de marketing", paragraphs: [["Dacă în viitor vor fi introduse tehnologii opționale analitice, de marketing sau alte tehnologii third-party de urmărire, această politică și orice mecanism de consimțământ necesar vor fi actualizate înainte de activare."]] },
        { heading: "Gestionarea cookie-urilor", paragraphs: [["Puteți gestiona sau șterge cookie-urile din setările browserului dumneavoastră. Restricționarea fișierelor tehnice poate afecta modul în care anumite site-uri se încarcă sau funcționează."]] },
        { heading: "Legătura cu confidențialitatea", paragraphs: [["Mai multe informații despre prelucrarea datelor cu caracter personal sunt disponibile în ", { type: "routeLink", routeKey: "privacyPolicy", label: "Politica de confidențialitate" }, "."]] },
      ],
    },
    termsOfUse: {
      hero: {
        title: "Termeni de utilizare",
        subtitle: "Acești termeni descriu regulile de bază pentru utilizarea site-ului Mall Electro și caracterul informativ al conținutului publicat.",
        badgeText: "Informații juridice",
        imageAlt: "Documentație electrică industrială și mediu de inginerie.",
        primaryCtaText: "Contactați-ne",
        primaryCtaRouteKey: "contact",
        secondaryCtaText: "Confidențialitate",
        secondaryCtaRouteKey: "privacyPolicy",
        overlayProjectLabel: "PROIECT: #8842",
        overlayStatusLabel: "VERIFICARE LA FAȚA LOCULUI",
      },
      sections: [
        { heading: "Caracter informativ", paragraphs: [["Conținutul site-ului este furnizat în scop informativ și descrie în linii generale activități, servicii și aplicații industriale. Acesta nu reprezintă o temă tehnică, documentație de proiect sau consultanță individuală."]] },
        { heading: "Oferte și contracte", paragraphs: [["Informațiile publicate nu constituie o ofertă automată sau o propunere contractuală. Un serviciu concret necesită o solicitare și clarificări tehnice, iar parametrii proiectului se confirmă individual. Oferta și contractul, atunci când sunt aplicabile, sunt separate de informațiile de pe site."]] },
        { heading: "Proprietate intelectuală", paragraphs: [["Textele, structura, imaginile, elementele grafice și celelalte elemente de conținut ale site-ului sunt protejate. Utilizarea, copierea sau publicarea în afara vizualizării obișnuite a site-ului este permisă numai în temeiul legislației aplicabile sau cu acordul prealabil."]] },
        { heading: "Utilizare permisă", paragraphs: [["Nu este permisă utilizarea site-ului într-un mod care încalcă legea, afectează securitatea, supraîncarcă infrastructura, introduce cod rău intenționat sau împiedică funcționarea normală a acestuia."]] },
        { heading: "Limitarea răspunderii", paragraphs: [["Mall Electro depune eforturi pentru ca informațiile de pe site să fie actuale și corecte, dar nu garantează că toate materialele sunt exhaustive sau aplicabile fiecărui proiect concret. Deciziile privind sistemele electrice trebuie luate în urma unei analize tehnice și a unei evaluări profesionale."]] },
        { heading: "Contact", paragraphs: [["Pentru întrebări privind site-ul sau acești Termeni de utilizare, ne puteți scrie la ", { type: "email" }, "."]] },
      ],
    },
  },
};
