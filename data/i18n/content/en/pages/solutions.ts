import type { SolutionsOverviewPageContent } from "../../types";

export const solutionsOverviewPageContent = {
  hero: {
    title: "Solutions for industrial electrical systems",
    subtitle:
      "We combine electrical panels, cable routes, low voltage systems, automation and service into complete solutions for new sites, modernization, technological lines and industrial infrastructure.",
    badgeText: "Engineering solutions",
    heroImageAlt:
      "Industrial electrical project with panels, cable routes and technical planning",
    primaryCtaText: "Discuss a project",
    secondaryCtaText: "View services",
    primaryCtaHref: "/en/contact",
    secondaryCtaHref: "/en/services",
    overlayProjectLabel: "PROJECT: #8842",
    overlayStatusLabel: "TECHNICAL PLANNING",
  },
  scope: {
    badge: "Solutions // scope",
    heading: "What a solution means",
    body:
      "A solution is not a single service and it is not only an industrial sector. It is a practical scope around a specific client situation - a new facility, modernization, production line, cable infrastructure or service expansion.",
    cards: [
      {
        title: "Services",
        text:
          "What we execute - panels, routes, low voltage systems, automation and service.",
      },
      {
        title: "Industries",
        text:
          "Where we work - food processing, grain processing, mills, agro, logistics and manufacturing.",
      },
      {
        title: "Solutions",
        text:
          "How we combine services for a specific project scenario.",
      },
    ],
  },
  scenarios: {
    badge: "Typical scenarios",
    heading: "Project situations where services work together",
    body:
      "Each scenario combines several work areas - from panels and routes to control, inspection and follow-up maintenance.",
    cardPrefix: "Solution",
    cardCta: "View solution",
    items: [
      {
        title: "New production site",
        description:
          "Planning and execution of electrical infrastructure for new production, warehouse or technological facilities.",
        icon: "Factory",
        href: "/en/solutions/new-production-site",
      },
      {
        title: "Electrical system modernization",
        description:
          "Assessment, replacement and expansion of existing panels, routes, power supply and control points.",
        icon: "Settings",
        href: "/en/solutions/electrical-system-modernization",
      },
      {
        title: "Panels and automation for production lines",
        description:
          "Combining electrical panels, control, sensors and automation for machines and technological lines.",
        icon: "Cpu",
        href: "/en/solutions/panels-and-automation-for-production-lines",
      },
      {
        title: "Cable infrastructure for a base",
        description:
          "Organization of cable routes, low voltage systems and power supply for industrial bases, warehouses and production zones.",
        icon: "Activity",
        href: "/en/solutions/cable-infrastructure-for-base",
      },
      {
        title: "Service and expansion",
        description:
          "Diagnostics, maintenance, improvements and expansion of existing industrial electrical systems.",
        icon: "Wrench",
        href: "/en/solutions/service-and-expansion",
      },
      {
        title: "Electrical installation at height",
        description:
          "Electrical installation work in high industrial zones, halls, warehouse bases and difficult installation points.",
        icon: "HardHat",
        href: "/en/solutions/high-access-installation",
      },
    ],
  },
  services: {
    badge: "Services in combination",
    heading: "How the services are combined",
    body:
      "The solution starts from the specific facility, but usually combines several technical areas into one organized scope.",
    items: [
      {
        title: "Electrical panels",
        text:
          "Distribution panels, control cabinets and management panels.",
        href: "/en/services/electrical-panels",
        icon: "LayoutDashboard",
      },
      {
        title: "Cable routes",
        text:
          "Cable trays, routes and organized industrial cabling.",
        href: "/en/services/cable-routes",
        icon: "Factory",
      },
      {
        title: "Industrial electrical installations",
        text:
          "Power supply, power lines and connections between machines, panels and zones.",
        href: "/en/services/industrial-electrical-installations",
        icon: "HardHat",
      },
      {
        title: "Automation",
        text:
          "Control, sensors, control circuits and process integration.",
        href: "/en/services/automation",
        icon: "Cpu",
      },
      {
        title: "Low voltage systems",
        text:
          "Low voltage connections, power lines and related infrastructure.",
        href: "/en/services/low-voltage-systems",
        icon: "Zap",
      },
      {
        title: "Maintenance and service",
        text:
          "Diagnostics, prevention and follow-up technical support.",
        href: "/en/services/maintenance-and-service",
        icon: "Wrench",
      },
    ],
  },
  industries: {
    badge: "Industrial environments",
    heading: "Where these solutions apply",
    body:
      "Electrical solutions are adapted to the environment, load, operating mode and access for installation and maintenance.",
    items: [
      {
        title: "Food processing",
        text:
          "Production lines and food processing facilities.",
        href: "/en/industries/food-industry",
        icon: "Factory",
      },
      {
        title: "Grain processing",
        text:
          "Silo complexes, transport lines and drying systems.",
        href: "/en/industries/grain-processing",
        icon: "Wheat",
      },
      {
        title: "Mills",
        text:
          "Flour production, aspiration and technological lines.",
        href: "/en/industries/mills",
        icon: "Activity",
      },
      {
        title: "Agro",
        text:
          "Farms, storage bases, drying systems and seasonal infrastructure.",
        href: "/en/industries/agriculture",
        icon: "Wheat",
      },
      {
        title: "Logistics",
        text:
          "Warehouse complexes, cold rooms and loading zones.",
        href: "/en/industries/logistics",
        icon: "Warehouse",
      },
      {
        title: "Manufacturing facilities",
        text:
          "Industrial halls, work zones, machines and processes.",
        href: "/en/industries/manufacturing-companies",
        icon: "Settings",
      },
    ],
    cta: "All industries",
    ctaHref: "/en/industries",
  },
  process: {
    badge: "Process",
    heading: "From technical inspection to maintenance after commissioning",
    body:
      "The approach remains practical: first the real site conditions are clarified, then panels, routes, control, installation and checks are planned.",
    steps: [
      "Technical inspection",
      "Scope clarification",
      "Planning of panels, routes and control",
      "Installation and checks",
      "Maintenance after commissioning",
    ],
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
} as const satisfies SolutionsOverviewPageContent;
