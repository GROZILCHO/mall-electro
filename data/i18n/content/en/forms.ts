import type { FormsContent } from "../types";

export const formsContent = {
  contact: {
    heading: "Contact us",
    intro: "Fill in the form and one of our engineers will contact you.",
    labels: {
      name: "Full name",
      phone: "Phone",
      email: "Email",
      projectType: "Project type",
      message: "Message",
    },
    placeholders: {
      name: "Your name",
      phone: "+359...",
      email: "name@company.com",
      projectType: "Select from the list...",
      message: "Briefly describe your project needs...",
    },
    validation: {
      nameRequired: "Please enter your name.",
      phoneRequired: "Please enter a phone number.",
      emailRequired: "Please enter an email address.",
      emailInvalid: "Please enter a valid email address.",
      projectTypeRequired: "Please select a project type.",
      messageRequired: "Please describe the project briefly.",
    },
    projectOptions: [
      {
        key: "industrialElectricalInstallation",
        label: "Industrial electrical installation",
      },
      {
        key: "panelsAndAutomation",
        label: "Electrical panels and automation",
      },
      {
        key: "maintenanceAndService",
        label: "Maintenance and service",
      },
      {
        key: "other",
        label: "Other",
      },
    ],
    submit: {
      ariaLabel: "Send inquiry",
      label: "Send inquiry",
      helperPrefix: "On submit, your email client will open with a prepared message to",
      helperSuffix: ".",
      successPrefix:
        "The request details are prepared. If your email client does not open, send the inquiry manually to",
      successSuffix: ".",
    },
    mailto: {
      subjectPrefix: "Website inquiry",
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      projectTypeLabel: "Project type",
      messageLabel: "Message",
    },
    sidebar: {
      heading: "What do you receive?",
      items: [
        {
          title: "Fast response",
          text: "We respond within one business day.",
        },
        {
          title: "No obligation",
          text: "Free initial consultation.",
        },
        {
          title: "100% confidentiality",
          text: "Your data is protected according to GDPR.",
        },
      ],
      directContactLabel: "Direct contact:",
      emailPrefix: "Or write to us at",
      emailSuffix: ".",
    },
  },
} as const satisfies FormsContent;
