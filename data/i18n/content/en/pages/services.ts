import type { ServicesOverviewPageContent } from "../../types";

export const servicesOverviewPageContent = {
  hero: {
    title: "Professional electrical services, engineering and automation",
    subtitle:
      "Mall Electro delivers industrial electrical systems from site inspection and design to installation, commissioning and maintenance. We work with clear technical organization, safe execution and minimal disruption to the production process.",
    badgeText: "Clean execution",
    heroImageAlt:
      "Industrial electrical workshop with panels and cable infrastructure",
    primaryCtaText: "Request consultation",
    secondaryCtaText: "View industries",
    primaryCtaHref: "/en/contact",
    secondaryCtaHref: "/bg/industrii",
    overlayProjectLabel: "PROJECT: #8842",
    overlayStatusLabel: "SITE INSPECTION",
  },
  overview: {
    badge: "Services // overview",
    heading: "Electrical solutions for industrial infrastructure",
    body:
      "We combine design, supply, installation and service in one consistent process. This helps production teams, investors and technical managers receive predictable execution without unnecessary delays.",
    steps: [
      {
        title: "Inspection",
        text:
          "We review the facility, routes, loads and real installation conditions.",
      },
      {
        title: "Design",
        text:
          "We prepare a technical solution aligned with the systems and applicable standards.",
      },
      {
        title: "Execution",
        text:
          "We work with installation teams, quality control and final checks.",
      },
    ],
  },
  services: {
    badge: "Core services",
    heading: "Core electrical services",
    body:
      "Six core areas cover the most common needs of industrial facilities - from panels and cable routes to automation and service.",
    cardPrefix: "Service",
    cardCta: "View details",
    items: [
      {
        title: "Electrical panels",
        description:
          "Design, manufacturing and commissioning of distribution panels, control cabinets and management panels.",
        icon: "LayoutDashboard",
        href: "/en/services/electrical-panels",
        bullets: [
          "Project documentation",
          "EN standards and protections",
          "Testing and protocol documentation",
        ],
      },
      {
        title: "Cable routes",
        description:
          "Cable trays, routes and organized cabling for demanding industrial environments.",
        icon: "Factory",
        href: "/en/services/cable-routes",
        bullets: [
          "Routes for machines and lines",
          "Clean on-site installation",
          "Prepared for future maintenance",
        ],
      },
      {
        title: "Industrial electrical installations",
        description:
          "Complete electrical installation execution for production facilities, warehouses and technological lines.",
        icon: "HardHat",
        href: "/en/services/industrial-electrical-installations",
        bullets: [
          "Power lines and supply",
          "On-site installation teams",
          "Commissioning and final checks",
        ],
      },
      {
        title: "Automation",
        description:
          "Integration of control systems, sensors, panels and communication between machines and processes.",
        icon: "Cpu",
        href: "/en/services/automation",
        bullets: [
          "PLC and controllers",
          "Process signaling",
          "Monitoring of key points",
        ],
      },
      {
        title: "Low voltage systems",
        description:
          "Cabling and connections between machines, panels and systems for reliable production operation.",
        icon: "Zap",
        href: "/en/services/low-voltage-systems",
        bullets: [
          "Cables and connections",
          "Machines, panels and lines",
          "Minimal interruption",
        ],
      },
      {
        title: "Maintenance and service",
        description:
          "Response, system checks, repairs and technical support after execution.",
        icon: "Wrench",
        href: "/en/services/maintenance-and-service",
        bullets: [
          "Inspection and diagnostics",
          "Repair and corrections",
          "Long-term maintenance",
        ],
      },
    ],
  },
  engineering: {
    badge: "Engineering approach",
    heading: "From technical analysis to stable system operation",
    body:
      "In industrial electrical systems, quality is not only in the installation. The route, panel, protections and future maintenance must be planned together.",
    bullets: [
      "Assessment of loads, environment and installation access",
      "Coordination of panels, cables, routes and automation",
      "Final inspection, commissioning and clear technical documentation",
    ],
    imageAlt: "Industrial electrical panel and engineering execution",
    imageLabel: "ENGINEERING CHECK",
    imageStatus: "READY FOR COMMISSIONING",
  },
  projectTypes: {
    badge: "Suitable projects",
    heading: "Facilities we work with",
    body:
      "The services apply to new construction, expansion, modernization and maintenance of industrial infrastructure.",
    items: [
      "Food processing facilities and production lines",
      "Grain processing, silos and drying systems",
      "Mills and flour production facilities",
      "Agro bases, warehouses and pumping stations",
      "Logistics centers and cold rooms",
      "Industrial facilities that need technical maintenance",
    ],
    primaryCta: "Discuss your project",
    secondaryCta: "View industries",
    primaryCtaHref: "/en/contact",
    secondaryCtaHref: "/bg/industrii",
  },
  contactCta: {
    imageAlt: "Engineering project and electrical panel",
    projectLabel: "PROJECT: #8842",
    readyLabel: "SYSTEM READY",
    badge: "READY TO TALK",
    heading: "Let us build your",
    highlightedHeading: "system together.",
    body:
      "Our engineering team is available for site inspection, design and execution.",
    strongBody:
      "We will review the inquiry and contact you to clarify the scope and next steps.",
    primaryCta: "Send inquiry",
    secondaryCta: "Speak with an engineer",
  },
} as const satisfies ServicesOverviewPageContent;
