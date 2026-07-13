import type { FormsContent } from "../types";

export const formsContent = {
  contact: {
    heading: "Contactați-ne",
    intro: "Completați formularul, iar unul dintre inginerii noștri vă va contacta.",
    labels: {
      name: "Nume complet",
      phone: "Telefon",
      email: "E-mail",
      projectType: "Tipul proiectului",
      message: "Mesaj",
    },
    placeholders: {
      name: "Numele dumneavoastră",
      phone: "+359...",
      email: "nume@companie.ro",
      projectType: "Selectați din listă...",
      message: "Descrieți pe scurt cerințele proiectului...",
    },
    validation: {
      nameRequired: "Vă rugăm să introduceți numele.",
      phoneRequired: "Vă rugăm să introduceți un număr de telefon.",
      emailRequired: "Vă rugăm să introduceți o adresă de e-mail.",
      emailInvalid: "Vă rugăm să introduceți o adresă de e-mail validă.",
      projectTypeRequired: "Vă rugăm să selectați tipul proiectului.",
      messageRequired: "Vă rugăm să descrieți pe scurt proiectul.",
    },
    projectOptions: [
      {
        key: "industrialElectricalInstallation",
        label: "Instalație electrică industrială",
      },
      {
        key: "panelsAndAutomation",
        label: "Tablouri electrice și automatizări",
      },
      {
        key: "maintenanceAndService",
        label: "Mentenanță și service",
      },
      {
        key: "other",
        label: "Altul",
      },
    ],
    submit: {
      ariaLabel: "Trimite solicitarea",
      label: "Trimite solicitarea",
      helperPrefix: "La trimitere, clientul de e-mail se va deschide cu un mesaj pregătit către",
      helperSuffix: ".",
      successPrefix:
        "Datele solicitării sunt pregătite. Dacă aplicația de e-mail nu se deschide, trimiteți solicitarea manual la",
      successSuffix: ".",
    },
    mailto: {
      subjectPrefix: "Solicitare de pe site",
      nameLabel: "Nume",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      projectTypeLabel: "Tipul proiectului",
      messageLabel: "Mesaj",
    },
    sidebar: {
      heading: "Ce primiți?",
      items: [
        {
          title: "Răspuns rapid",
          text: "Răspundem în termen de o zi lucrătoare.",
        },
        {
          title: "Fără obligații",
          text: "Consultație inițială gratuită.",
        },
        {
          title: "Confidențialitate deplină",
          text: "Datele dumneavoastră sunt protejate conform GDPR.",
        },
      ],
      directContactLabel: "Contact direct:",
      emailPrefix: "Sau scrieți-ne la",
      emailSuffix: ".",
    },
  },
} as const satisfies FormsContent;
