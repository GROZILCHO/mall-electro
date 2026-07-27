import type { RouteKey, SupportedLocale } from "./types";

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
          paragraphs: [["Администратор на личните данни е Mall Electro. За въпроси, свързани с поверителността и обработването на лични данни, можете да се свържете с нас на ", { type: "email" }, " или на телефон ", { type: "phone" }, "."]],
        },
        {
          heading: "Какви данни може да събираме",
          items: [
            "Име, фирма, телефон и имейл, когато изпратите запитване.",
            "Информация за проект, обект или техническо задание, предоставена от вас.",
            "Технически данни, нужни за нормалната работа и сигурност на сайта.",
          ],
        },
        {
          heading: "Цели и правни основания",
          paragraphs: [["Данните се обработват за отговор на запитвания, подготовка на оферти, комуникация по проекти, изпълнение на договорни или преддоговорни отношения, счетоводни и законови задължения, както и за защита на легитимни интереси, свързани със сигурността на сайта и коректната бизнес комуникация."]],
        },
        {
          heading: "Срокове за съхранение",
          paragraphs: [["Съхраняваме лични данни само за срока, необходим за съответната цел, или за сроковете, изисквани от приложимото законодателство. Данни от запитвания могат да се пазят за последваща комуникация по конкретен проект, освен ако не поискате тяхното изтриване и няма законово основание за по-дълго съхранение."]],
        },
        {
          heading: "Получатели и обработващи лица",
          paragraphs: [["Достъп до данни може да имат доставчици на хостинг, имейл, техническа поддръжка, счетоводни или правни услуги, когато това е необходимо за дейността и при подходящи мерки за защита. Данни могат да бъдат предоставени и на държавни органи, когато това се изисква по закон."]],
        },
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
      notice: "Към момента сайтът не използва добавени аналитични или маркетингови скриптове. Ако такива бъдат въведени по-късно, политиката ще бъде актуализирана и ще се приложи подходящ механизъм за съгласие.",
      sections: [
        { heading: "Какво са бисквитките", paragraphs: [["Бисквитките са малки файлове или записи, които сайтът може да съхранява в браузъра, за да поддържа основна функционалност, сигурност, предпочитания или статистика."]] },
        { heading: "Текущо използване", paragraphs: [["Сайтът може да използва техническо съхранение, необходимо за нормално зареждане, сигурност, кеширане и коректна работа на статичните страници. Не са добавени отделни аналитични, рекламни или поведенчески проследяващи бисквитки."]] },
        { heading: "Аналитични и маркетингови бисквитки", paragraphs: [["Ако в бъдеще бъдат добавени аналитични или маркетингови инструменти, те ще бъдат описани тук и ще се използват само при спазване на приложимите изисквания за информираност и съгласие."]] },
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
        { heading: "Оферти и договори", paragraphs: [["Публикуваната информация не представлява автоматична оферта или договорно предложение. Всеки проект, оглед, техническо задание, срок и цена се уточняват индивидуално според конкретния обект, обхват и изисквания."]] },
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
        { heading: "Personal data controller", paragraphs: [["The personal data controller is Mall Electro. For questions related to privacy and the processing of personal data, you can contact us at ", { type: "email" }, " or by telephone at ", { type: "phone" }, "."]] },
        { heading: "Data we may collect", items: ["Name, company, telephone number and email address when you submit an inquiry.", "Information about a project, site or technical assignment provided by you.", "Technical data required for the normal operation and security of the website."] },
        { heading: "Purposes and legal grounds", paragraphs: [["The data is processed to respond to inquiries, prepare quotations, communicate about projects, perform contractual or pre-contractual relations, comply with accounting and legal obligations, and protect legitimate interests related to website security and proper business communication."]] },
        { heading: "Retention periods", paragraphs: [["We retain personal data only for the period necessary for the relevant purpose or for the periods required by applicable law. Data from inquiries may be retained for subsequent communication about a specific project unless you request its deletion and there is no legal basis for longer retention."]] },
        { heading: "Recipients and processors", paragraphs: [["Hosting, email, technical support, accounting or legal service providers may have access to data when this is necessary for the business and subject to appropriate safeguards. Data may also be provided to public authorities where required by law."]] },
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
      notice: "The website currently does not use any added analytics or marketing scripts. If such scripts are introduced later, this policy will be updated and an appropriate consent mechanism will be implemented.",
      sections: [
        { heading: "What cookies are", paragraphs: [["Cookies are small files or records that a website may store in the browser to support basic functionality, security, preferences or statistics."]] },
        { heading: "Current use", paragraphs: [["The website may use technical storage necessary for normal loading, security, caching and the proper operation of static pages. No separate analytics, advertising or behavioural tracking cookies have been added."]] },
        { heading: "Analytics and marketing cookies", paragraphs: [["If analytics or marketing tools are added in the future, they will be described here and will only be used in compliance with the applicable information and consent requirements."]] },
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
        { heading: "Quotations and contracts", paragraphs: [["The published information does not constitute an automatic quotation or contractual offer. Each project, site inspection, technical assignment, deadline and price is agreed individually according to the specific site, scope and requirements."]] },
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
        { heading: "Operatorul de date cu caracter personal", paragraphs: [["Operatorul datelor cu caracter personal este Mall Electro. Pentru întrebări privind confidențialitatea și prelucrarea datelor cu caracter personal, ne puteți contacta la ", { type: "email" }, " sau la numărul de telefon ", { type: "phone" }, "."]] },
        { heading: "Ce date putem colecta", items: ["Numele, societatea, numărul de telefon și adresa de e-mail atunci când trimiteți o solicitare.", "Informații despre un proiect, un obiectiv sau o temă tehnică furnizate de dumneavoastră.", "Date tehnice necesare pentru funcționarea normală și securitatea site-ului."] },
        { heading: "Scopuri și temeiuri juridice", paragraphs: [["Datele sunt prelucrate pentru a răspunde solicitărilor, a pregăti oferte, a comunica în legătură cu proiectele, a derula relații contractuale sau precontractuale, a respecta obligațiile contabile și legale, precum și pentru protejarea intereselor legitime legate de securitatea site-ului și de comunicarea comercială corectă."]] },
        { heading: "Perioade de păstrare", paragraphs: [["Păstrăm datele cu caracter personal numai pe perioada necesară scopului respectiv sau pe perioadele impuse de legislația aplicabilă. Datele din solicitări pot fi păstrate pentru comunicări ulterioare privind un anumit proiect, cu excepția cazului în care solicitați ștergerea acestora și nu există un temei legal pentru o păstrare mai îndelungată."]] },
        { heading: "Destinatari și persoane împuternicite", paragraphs: [["Furnizorii de găzduire, e-mail, asistență tehnică, servicii contabile sau juridice pot avea acces la date atunci când acest lucru este necesar pentru desfășurarea activității și sub rezerva unor măsuri de protecție adecvate. Datele pot fi furnizate și autorităților publice atunci când acest lucru este impus de lege."]] },
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
      notice: "În prezent, site-ul nu utilizează scripturi analitice sau de marketing adăugate. Dacă astfel de scripturi vor fi introduse ulterior, politica va fi actualizată și va fi aplicat un mecanism adecvat de consimțământ.",
      sections: [
        { heading: "Ce sunt cookie-urile", paragraphs: [["Cookie-urile sunt fișiere sau înregistrări de mici dimensiuni pe care site-ul le poate stoca în browser pentru a susține funcționalitatea de bază, securitatea, preferințele sau statisticile."]] },
        { heading: "Utilizarea actuală", paragraphs: [["Site-ul poate utiliza stocare tehnică necesară pentru încărcarea normală, securitate, memorare în cache și funcționarea corectă a paginilor statice. Nu au fost adăugate cookie-uri analitice, publicitare sau de urmărire comportamentală distincte."]] },
        { heading: "Cookie-uri analitice și de marketing", paragraphs: [["Dacă în viitor vor fi adăugate instrumente analitice sau de marketing, acestea vor fi descrise aici și vor fi utilizate numai cu respectarea cerințelor aplicabile privind informarea și consimțământul."]] },
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
        { heading: "Oferte și contracte", paragraphs: [["Informațiile publicate nu constituie o ofertă automată sau o propunere contractuală. Fiecare proiect, inspecție la fața locului, temă tehnică, termen și preț se stabilesc individual, în funcție de obiectivul, domeniul de aplicare și cerințele specifice."]] },
        { heading: "Proprietate intelectuală", paragraphs: [["Textele, structura, imaginile, elementele grafice și celelalte elemente de conținut ale site-ului sunt protejate. Utilizarea, copierea sau publicarea în afara vizualizării obișnuite a site-ului este permisă numai în temeiul legislației aplicabile sau cu acordul prealabil."]] },
        { heading: "Utilizare permisă", paragraphs: [["Nu este permisă utilizarea site-ului într-un mod care încalcă legea, afectează securitatea, supraîncarcă infrastructura, introduce cod rău intenționat sau împiedică funcționarea normală a acestuia."]] },
        { heading: "Limitarea răspunderii", paragraphs: [["Mall Electro depune eforturi pentru ca informațiile de pe site să fie actuale și corecte, dar nu garantează că toate materialele sunt exhaustive sau aplicabile fiecărui proiect concret. Deciziile privind sistemele electrice trebuie luate în urma unei analize tehnice și a unei evaluări profesionale."]] },
        { heading: "Contact", paragraphs: [["Pentru întrebări privind site-ul sau acești Termeni de utilizare, ne puteți scrie la ", { type: "email" }, "."]] },
      ],
    },
  },
};
