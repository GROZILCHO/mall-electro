import type { ServiceDetailsContent } from "../../types";

const contactCta = {
  imageAlt: "Engineering review and industrial electrical panel",
  projectLabel: "PROJECT: #8842",
  readyLabel: "READY FOR REVIEW",
  badge: "READY TO TALK",
  heading: "Let us plan your",
  highlightedHeading: "electrical system.",
  body: "Send the project scope and our team will review the site, system and next technical steps.",
  strongBody:
    "We will contact you to clarify the facility, installation conditions and expected schedule.",
  primaryCta: "Send inquiry",
  secondaryCta: "Speak with an engineer",
} as const;

export const serviceDetailsContent = {
  electricPanels: {
    seoPage: "enElectricPanels",
    hero: {
      title: "Electrical panels and control cabinets for industrial facilities",
      subtitle:
        "We design, build, wire and test electrical panels for production lines, machines, low voltage systems and automation. The approach is practical: a clear solution, organized execution and readiness for commissioning.",
      badgeText: "Electrical panels",
      image: "/images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png",
      imageAlt: "Electrical panel with organized wiring and industrial components",
      primaryCtaText: "Discuss your electrical panel",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Panels built for real operation on site",
      text:
        "An electrical panel must be organized, protected and easy to service. We start from the needs of the installation, not only from a component list.",
      items: [
        "Design of distribution panels, control cabinets and management panels.",
        "Selection of equipment, protections, terminals, cables and control elements.",
        "Wiring, marking, arrangement and preparation for installation in an industrial environment.",
        "Commissioning, testing, connection checks and basic technical documentation.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When the system must be clear, protected and ready for maintenance",
      items: [
        "New production lines, machines and technological zones.",
        "Modernization of old electrical panels and control cabinets.",
        "Facilities that need reliable protections, low voltage systems and clear maintenance access.",
        "Integration with automation, sensors, drives and control systems.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From assignment to commissioning and checks",
      steps: [
        {
          title: "Technical inspection",
          text:
            "We clarify consumers, loads, environment, installation location and links to existing systems.",
        },
        {
          title: "Design and configuration",
          text:
            "We prepare a practical panel solution with protections, wiring, control and future maintenance in mind.",
        },
        {
          title: "Assembly and wiring",
          text:
            "We complete organized wiring, marking and equipment installation according to the specific facility.",
        },
        {
          title: "Commissioning and testing",
          text:
            "We check connections, functions, protections and readiness before handover to the client.",
        },
      ],
      image: "/images/electrical-panels/electrical-panels-cabinet-interior-detail-01.png",
      imageAlt: "Interior detail of an electrical panel with organized industrial wiring",
      imageKicker: "PANEL CHECK",
      imageTitle: "READY FOR TESTING",
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "Short answers to common questions about electrical panels and control cabinets.",
      items: [
        {
          question: "Can you build a panel for an existing machine or line?",
          answer:
            "Yes. We first clarify the existing consumers, control logic and available documentation, then prepare a practical panel solution.",
        },
        {
          question: "Do you support modernization of old panels?",
          answer:
            "Yes. We can review old panels, identify risks and propose replacement, rewiring or staged modernization.",
        },
        {
          question: "Is testing included before handover?",
          answer:
            "Yes. Connection checks, basic functional checks and readiness review are part of the execution process.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "The panel is part of the complete electrical system",
      text:
        "When required, we combine panels with industrial electrical installations, cable routes, automation and maintenance.",
      items: [
        {
          title: "Industrial electrical installations",
          href: "/en/services/industrial-electrical-installations",
          text:
            "Supply lines and connections between panels, machines and technological zones.",
        },
        {
          title: "Automation",
          href: "/en/services/automation",
          text:
            "Control circuits, signals and integration with machines, sensors and processes.",
        },
        {
          title: "Cable routes",
          href: "/en/services/cable-routes",
          text:
            "Prepared routes and cabling for clean installation and easier future maintenance.",
        },
      ],
      primaryCtaText: "Discuss a panel for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
  cableRoutes: {
    seoPage: "enCableRoutes",
    hero: {
      title: "Cable routes and industrial cabling",
      subtitle:
        "We build cable routes, cable trays and industrial cabling for production facilities, warehouse bases and technological lines. The goal is an organized, safe and serviceable electrical infrastructure.",
      badgeText: "Cable routes",
      image: "/images/cable-routing/cable-routing-overhead-trays-industrial-hall-02.png",
      imageAlt: "Cable routes and cable trays in an industrial hall",
      primaryCtaText: "Discuss a cable route",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Organized infrastructure for cables, machines and electrical systems",
      text:
        "A cable route must provide safe installation, clear access and logical arrangement. This makes future maintenance and system expansion more predictable.",
      items: [
        "Planning of cable routes according to machines, panels, technological lines and real site access.",
        "Installation of cable trays, support structures and organized routes for industrial cabling.",
        "Separation and arrangement of power lines, control, communication and low-current systems when needed.",
        "Marking, organized cabling and preparation for safe operation and future maintenance.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When cables must be clearly organized and accessible",
      items: [
        "New production facilities, warehouse bases and technological lines.",
        "Expansion of existing electrical systems and addition of new machines.",
        "Replacement of old cable lines, unclear routes or installations that are difficult to service.",
        "Facilities that need low voltage systems, control, communication and organized infrastructure.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From inspection to a completed route",
      steps: [
        {
          title: "Inspection and route definition",
          text:
            "We review machine locations, panels, walls, ceilings, structure and possible cable route paths.",
        },
        {
          title: "Technical planning",
          text:
            "We clarify cable types, power lines, low-current systems, separation zones and service access.",
        },
        {
          title: "Route installation",
          text:
            "We build cable trays, support elements and organized cabling according to site conditions.",
        },
        {
          title: "Check and preparation",
          text:
            "We check arrangement, fastening, marking and readiness for connection to panels, machines and systems.",
        },
      ],
      image: "/images/cable-routing/cable-routing-overhead-technical-detail-01.png",
      imageAlt: "Technical detail of cable trays and organized cable routing",
      imageKicker: "ROUTE CHECK",
      imageTitle: "READY FOR CABLING",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers to common questions about cable routes and industrial cabling.",
      items: [
        {
          question: "Can routes be added to an existing facility?",
          answer:
            "Yes. We inspect the existing structure and plan routes around current machines, panels and access conditions.",
        },
        {
          question: "Do you separate power and signal cables?",
          answer:
            "Yes, when the project requires it. Separation is planned according to the system and operational environment.",
        },
        {
          question: "Can cable routes be prepared for future expansion?",
          answer:
            "Yes. We can plan route capacity and access so later additions are easier and less disruptive.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "Routes are the base of stable electrical infrastructure",
      text:
        "When required, we combine cable routes with electrical panels, installations, low voltage systems and maintenance.",
      items: [
        {
          title: "Electrical panels",
          href: "/en/services/electrical-panels",
          text:
            "Routes provide a clean connection between panels, machines, protections and control points.",
        },
        {
          title: "Industrial electrical installations",
          href: "/en/services/industrial-electrical-installations",
          text:
            "Cable trays and lines are a base for stable electrical infrastructure in production environments.",
        },
        {
          title: "Low voltage systems",
          href: "/en/services/low-voltage-systems",
          text:
            "We plan routes for supply, control, communication and low-current systems with service access.",
        },
      ],
      primaryCtaText: "Discuss a route for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
  industrialElectricalInstallations: {
    seoPage: "enIndustrialElectricalInstallations",
    hero: {
      title: "Industrial electrical installations for production facilities",
      subtitle:
        "We execute industrial electrical installations for production lines, warehouse bases, machines and technological processes. We work with clear scope, organized cabling, protections and readiness for future maintenance.",
      badgeText: "Industrial electrical installations",
      image: "/images/industrial/industrial-electrical-installation-production-zone-02.png",
      imageAlt: "Industrial electrical installation in a production facility",
      primaryCtaText: "Discuss an electrical installation",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Electrical installations prepared for real industrial conditions",
      text:
        "An industrial electrical installation must connect machines, panels, lines and protections in a clear and serviceable way. The focus is reliable supply, organized cabling and safe operation.",
      items: [
        "Power and control cabling for machines, production lines and technological zones.",
        "Connection between electrical panels, cable routes, machines and facilities.",
        "Organized distribution of cable routes, power lines and low voltage systems.",
        "Checks, tests, protections and preparation for commissioning and future maintenance.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When the facility needs stable electrical infrastructure",
      items: [
        "New production facilities, warehouse bases and technological zones.",
        "Expansion or modernization of existing production lines.",
        "Replacement of old electrical installations, unclear connections or difficult maintenance.",
        "Facilities with machines, panels, control, automation and safety requirements.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From inspection to a checked system",
      steps: [
        {
          title: "Inspection and technical clarification",
          text:
            "We clarify machine locations, panels, routes, supplies, loads and operating conditions.",
        },
        {
          title: "Planning of routes and supply",
          text:
            "We prepare a practical scope for power lines, low voltage systems, cable routes, protections and links to existing systems.",
        },
        {
          title: "Installation and cabling",
          text:
            "We execute installation, organized cabling, marking and connection to panels, machines and technological lines.",
        },
        {
          title: "Checks and handover",
          text:
            "We check connections, routes, protections and readiness for safe commissioning before handover.",
        },
      ],
      image: "/images/industrial/industrial-electrical-infrastructure-production-hall-02.png",
      imageAlt: "Industrial electrical infrastructure in a production hall",
      imageKicker: "INSTALLATION CHECK",
      imageTitle: "READY FOR COMMISSIONING",
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "Short answers to common questions about industrial electrical installations.",
      items: [
        {
          question: "Can you work in an active production facility?",
          answer:
            "Yes. We plan execution around access, safety and production constraints whenever the site conditions allow it.",
        },
        {
          question: "Do you combine installation with panels and cable routes?",
          answer:
            "Yes. Industrial installations are often combined with panels, routes, low voltage systems and automation.",
        },
        {
          question: "Do you perform final checks?",
          answer:
            "Yes. Final checks are part of the handover process before the system is considered ready.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "The installation connects the complete electrical system",
      text:
        "When required, we combine industrial electrical installations with panels, cable routes, automation and maintenance.",
      items: [
        {
          title: "Electrical panels",
          href: "/en/services/electrical-panels",
          text:
            "Distribution panels and control cabinets for supply, control, protections and control circuits.",
        },
        {
          title: "Cable routes",
          href: "/en/services/cable-routes",
          text:
            "Organized routes and cable trays for clear links between panels, machines and lines.",
        },
        {
          title: "Automation",
          href: "/en/services/automation",
          text:
            "Preparation for sensors, drives, control circuits and future automated systems.",
        },
      ],
      primaryCtaText: "Discuss an installation for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
  automation: {
    seoPage: "enAutomation",
    hero: {
      title: "Automation of industrial processes and control systems",
      subtitle:
        "We build automation, control and management solutions for production processes, machines and technological lines. We connect electrical panels, sensors, drives and control systems in a clear and maintainable structure.",
      badgeText: "Automation",
      image: "/images/automation/automation-plc-control-system-production-line-01.png",
      imageAlt: "PLC automation and control panel for an industrial process",
      primaryCtaText: "Discuss automation",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Management, control and clear links between processes",
      text:
        "Automation must make a process more predictable, controllable and easier to maintain. We connect panels, sensors, drives and control circuits into a practical system for real operation.",
      items: [
        "Control and management systems for machines, production lines and technological zones.",
        "Connection between electrical panels, PLCs, sensors, drives and control circuits.",
        "Setup and testing of operating modes, signals, protections and sequences.",
        "Preparation for monitoring, future expansion and later maintenance.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When the process needs better control and repeatability",
      items: [
        "New production lines, machines and technological processes.",
        "Modernization of existing machines, zones or production lines.",
        "Facilities that need better process control, monitoring and management.",
        "Systems with electrical panels, sensors, motors, drives and automated modes.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From process assignment to commissioning and setup",
      steps: [
        {
          title: "Technical clarification of the process",
          text:
            "We clarify machines, signals, operating modes, limitations, safety and the expected result from control.",
        },
        {
          title: "Control logic and components",
          text:
            "We plan PLCs, sensors, drives, panels, control circuits and links to existing systems.",
        },
        {
          title: "Connection, setup and tests",
          text:
            "We complete connection, signal checks, mode setup and tests of the operating sequences.",
        },
        {
          title: "Commissioning and handover",
          text:
            "We check system behavior on site, adjust final parameters and prepare the system for operation.",
        },
      ],
      image: "/images/automation/automation-plc-technical-detail-01.png",
      imageAlt: "Technical detail of PLC automation and control electrical system",
      imageKicker: "CONTROL CHECK",
      imageTitle: "READY FOR COMMISSIONING",
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "Short answers to common questions about automation of industrial processes and control systems.",
      items: [
        {
          question: "Can automation be added to an existing machine?",
          answer:
            "Yes. We first clarify the current machine, signals, safety requirements and available technical documentation.",
        },
        {
          question: "Do you work with panels and control circuits?",
          answer:
            "Yes. Automation is typically combined with panels, sensors, drives and control wiring.",
        },
        {
          question: "Can you prepare for future monitoring?",
          answer:
            "Yes. Monitoring requirements can be considered during planning so the system remains expandable.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "Automation works best as part of the complete system",
      text:
        "When required, we combine automation with electrical panels, cable routes, industrial installations and maintenance.",
      items: [
        {
          title: "Electrical panels",
          href: "/en/services/electrical-panels",
          text:
            "Control cabinets, control circuits and panels for machine, line and process management.",
        },
        {
          title: "Industrial electrical installations",
          href: "/en/services/industrial-electrical-installations",
          text:
            "Supply, low voltage systems and cabling for links between machines, panels and technological zones.",
        },
        {
          title: "Cable routes",
          href: "/en/services/cable-routes",
          text:
            "Organized routes for signals, control, communication, sensors and drives.",
        },
      ],
      primaryCtaText: "Discuss automation for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
  lowVoltage: {
    seoPage: "enLowVoltage",
    hero: {
      title: "Low voltage systems for industrial facilities",
      subtitle:
        "We execute low voltage systems, supply lines and electrical connections for machines, panels, production zones and technological processes. The goal is safe, organized and reliable electrical infrastructure for everyday operation.",
      badgeText: "Low voltage systems",
      image: "/images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.png",
      imageAlt: "Low voltage electrical infrastructure and distribution panel",
      primaryCtaText: "Discuss low voltage systems",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Organized supply for machines, panels and consumers",
      text:
        "Low voltage systems must provide safe and predictable operation for consumers. We plan supply, routes, connections and protections so the system is clear for operation and maintenance.",
      items: [
        "Supply lines and electrical connections to consumers, machines and production zones.",
        "Low voltage distribution systems, electrical panels and related protections.",
        "Connections between panels, cable routes, production machines and technological zones.",
        "Checks, marking, protections and preparation for safe operation and maintenance.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When consumers must be clearly supplied and protected",
      items: [
        "New machines, production zones or technological lines.",
        "Modernization of existing supply, panels or cable lines.",
        "Facilities that need organized distribution of consumers and protections.",
        "Systems with electrical panels, routes, machines, control systems and maintenance needs.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From consumers to a checked low voltage system",
      steps: [
        {
          title: "Technical inspection",
          text:
            "We clarify consumers, capacities, existing panels, distances, routes and operating conditions.",
        },
        {
          title: "Planning of supply and routes",
          text:
            "We prepare a practical solution for supply lines, cable routes, protections, marking and maintenance access.",
        },
        {
          title: "Installation, connection and marking",
          text:
            "We complete cabling, connection to panels and consumers, route arrangement and clear marking.",
        },
        {
          title: "Checks, tests and handover",
          text:
            "We check connections, protections, routes and system readiness for safe operation before handover.",
        },
      ],
      image: "/images/electrical-panels/electrical-terminal-block-wiring-detail-01.png",
      imageAlt: "Terminal blocks and low voltage wiring in an industrial electrical panel",
      imageKicker: "LOW VOLTAGE CHECK",
      imageTitle: "READY FOR OPERATION",
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "Short answers to common questions about low voltage systems for industrial facilities.",
      items: [
        {
          question: "Can you connect new consumers to an existing system?",
          answer:
            "Yes. We first review the existing panels, loads, routes and protection requirements.",
        },
        {
          question: "Do you include marking and checks?",
          answer:
            "Yes. Marking and final checks are part of preparing the system for safe operation.",
        },
        {
          question: "Can low voltage work be combined with panel work?",
          answer:
            "Yes. Low voltage systems are often executed together with panels, cable routes and installation work.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "Low voltage is a base for a reliable electrical system",
      text:
        "When required, we combine low voltage systems with panels, cable routes, industrial installations and automation.",
      items: [
        {
          title: "Electrical panels",
          href: "/en/services/electrical-panels",
          text:
            "Distribution panels, protections and control cabinets for organized supply and management.",
        },
        {
          title: "Cable routes",
          href: "/en/services/cable-routes",
          text:
            "Organized routes for supply lines, control connections and future maintenance.",
        },
        {
          title: "Industrial electrical installations",
          href: "/en/services/industrial-electrical-installations",
          text:
            "Complete links between panels, machines, consumers and technological zones.",
        },
      ],
      primaryCtaText: "Discuss low voltage systems for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
  maintenanceService: {
    seoPage: "enMaintenanceService",
    hero: {
      title: "Maintenance and service of industrial electrical systems",
      subtitle:
        "We provide maintenance, diagnostics and service work for electrical panels, cable routes, low voltage systems, automation and industrial electrical installations. The goal is more reliable operation, faster response and lower risk of unplanned interruptions.",
      badgeText: "Maintenance and service",
      image: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png",
      imageAlt: "Engineering diagnostics of an electrical panel in an industrial environment",
      primaryCtaText: "Request a service check",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View all services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SITE INSPECTION",
    },
    overview: {
      badge: "What the service includes",
      title: "Checks, diagnostics and service for more reliable operation",
      text:
        "Maintenance helps problems be detected earlier, while service response becomes clearer and more organized. We work practically: system checks, issue localization and specific next actions.",
      items: [
        "Diagnostics of industrial electrical systems, electrical panels and connected zones.",
        "Preventive checks of connections, protections, components, cable routes and low voltage systems.",
        "Service work for problems, failures, interruptions or unstable production line operation.",
        "Recommendations for improvements, expansions and more reliable future operation.",
      ],
    },
    suitability: {
      badge: "When it is suitable",
      title: "When an existing system must operate more reliably",
      items: [
        "Existing production facilities, lines, machines and technological zones.",
        "Systems with frequent interruptions, unstable operation or difficult diagnostics.",
        "Facilities with electrical panels, automation, low voltage systems and cable routes.",
        "Need for planned prevention, technical response or improvement recommendations.",
      ],
    },
    process: {
      badge: "How execution works",
      title: "From diagnostics to next actions",
      steps: [
        {
          title: "Initial diagnostics",
          text:
            "We collect information about the issue, system behavior, available documentation and operating conditions.",
        },
        {
          title: "Check of panels, connections and routes",
          text:
            "We review electrical panels, protections, connections, markings, cable routes and main electrical components.",
        },
        {
          title: "Correction or recommendations",
          text:
            "When possible, we resolve the issue or clarify required materials, repairs, changes and technical steps.",
        },
        {
          title: "Report and prevention",
          text:
            "We summarize findings, recommend next actions and, when needed, plan prevention or expansion.",
        },
      ],
      image: "/images/engineering/engineering-diagnostics-maintenance-tools-01.png",
      imageAlt: "Tools and technical diagnostics during service of an industrial electrical system",
      imageKicker: "SERVICE CHECK",
      imageTitle: "READY FOR NEXT ACTIONS",
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "Short answers to common questions about maintenance, diagnostics and service of industrial electrical systems.",
      items: [
        {
          question: "Can you inspect an existing electrical system?",
          answer:
            "Yes. We can review panels, routes, connections, protections and system behavior on site.",
        },
        {
          question: "Do you provide recommendations after diagnostics?",
          answer:
            "Yes. We summarize findings and recommend practical next steps for repair, prevention or improvement.",
        },
        {
          question: "Can service be combined with modernization?",
          answer:
            "Yes. Diagnostics often leads to targeted modernization, replacement or system expansion.",
        },
      ],
    },
    related: {
      badge: "Related areas",
      title: "Service covers the complete electrical infrastructure",
      text:
        "When required, maintenance can include electrical panels, low voltage systems, automation, cable routes and industrial electrical installations.",
      items: [
        {
          title: "Electrical panels",
          href: "/en/services/electrical-panels",
          text:
            "Checks of panels, control cabinets, protections, connections and management components.",
        },
        {
          title: "Automation",
          href: "/en/services/automation",
          text:
            "Diagnostics of control circuits, sensors, drives, signals and management systems.",
        },
        {
          title: "Low voltage systems",
          href: "/en/services/low-voltage-systems",
          text:
            "Checks of supply lines, consumers, connections, routes and safe operation.",
        },
      ],
      primaryCtaText: "Discuss service for your facility",
      primaryCtaHref: "/en/contact",
      primaryCtaIcon: "ChevronRight",
      secondaryCtaText: "View industries",
      secondaryCtaHref: "/en/industries",
      secondaryCtaIcon: "Factory",
    },
    contactCta,
  },
} as const satisfies ServiceDetailsContent;
