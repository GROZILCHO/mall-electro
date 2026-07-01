import type { SolutionDetailsContent } from "../../types";

const contactCta = {
  imageAlt: "Engineering review and industrial electrical panel",
  projectLabel: "PROJECT: #8842",
  readyLabel: "READY FOR REVIEW",
  badge: "READY TO TALK",
  heading: "Let us plan your",
  highlightedHeading: "electrical system.",
  body: "Send the project scope and our team will review the site, system and next technical steps.",
  strongBody: "We will contact you to clarify the facility, installation conditions and expected schedule.",
  primaryCta: "Send inquiry",
  secondaryCta: "Speak with an engineer",
} as const;

const serviceLinks = {
  panels: "/en/services/electrical-panels",
  cableRoutes: "/en/services/cable-routes",
  installations: "/en/services/industrial-electrical-installations",
  automation: "/en/services/automation",
  lowVoltage: "/en/services/low-voltage-systems",
  maintenance: "/en/services/maintenance-and-service",
} as const;

const industryItems = [
  {
    title: "Food processing",
    text: "Production lines, technological processes, panels, routes and service access.",
    href: "/en/industries",
    icon: "Factory",
  },
  {
    title: "Grain processing",
    text: "Silo bases, transport lines, dryers, aspiration and control points.",
    href: "/en/industries",
    icon: "Wheat",
  },
  {
    title: "Mills",
    text: "Flour production lines, elevators, conveyors, dosing and screening.",
    href: "/en/industries",
    icon: "Activity",
  },
  {
    title: "Agro",
    text: "Farms, storage bases, dryers and seasonally loaded zones.",
    href: "/en/industries",
    icon: "Wheat",
  },
  {
    title: "Logistics",
    text: "Warehouse complexes, loading zones, cold rooms and warehouse equipment.",
    href: "/en/industries",
    icon: "Warehouse",
  },
  {
    title: "Manufacturing facilities",
    text: "Industrial halls, machines, work zones and technological lines.",
    href: "/en/industries",
    icon: "Settings",
  },
] as const;

const baseCta = {
  badge: "Next step",
  primaryText: "Discuss the project",
  primaryHref: "/en/contact",
  secondaryText: "All solutions",
  secondaryHref: "/en/solutions",
} as const;

export const solutionDetailsContent = {
  newProductionSite: {
    seoPage: "enSolutionNewProductionSite",
    hero: {
      badgeText: "Engineering solution",
      title: "Electrical infrastructure for a new production site",
      subtitle:
        "We plan and build electrical infrastructure for new production, warehouse and technological facilities - from electrical panels and cable routes to low voltage systems, automation, commissioning and follow-up maintenance.",
      image: "/images/industrial/industrial-new-production-site-electrical-infrastructure-01.png",
      imageAlt: "New production site with planned electrical infrastructure",
      primaryCtaText: "Discuss the project",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "TECHNICAL PLANNING",
    },
    context: {
      badge: "Context",
      title: "When this solution is needed",
      text:
        "A new production site needs electrical infrastructure planned from the start around machines, work zones, routes and future maintenance.",
      items: [
        "Construction of a new production site, industrial hall or work zone.",
        "A new technological line, warehouse base or logistics zone with specific supply points.",
        "Need for clear electrical infrastructure before machines, lines and equipment are installed.",
        "Planning of electrical panels, cable routes, supplies and service access for future maintenance.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The exact scope depends on the site, but usually includes technical clarification, panels, routes, low voltage systems, automation, checks and service readiness.",
      items: [
        {
          title: "Technical inspection and scope clarification",
          text: "Review of zones, machines, lines, supplies and execution limitations.",
          icon: "Search",
        },
        {
          title: "Electrical panels and control cabinets",
          text: "Distribution panels, control cabinets, protections, control and organized wiring.",
          icon: "LayoutDashboard",
        },
        {
          title: "Cable routes and cabling",
          text: "Cable trays, routes, power lines, control links and marking.",
          icon: "Factory",
        },
        {
          title: "Low voltage systems and supplies",
          text: "Supply lines, low voltage links and distribution to machines and work zones.",
          icon: "Zap",
        },
        {
          title: "Automation and control points",
          text: "Preparation for sensors, control, process signals and connected systems.",
          icon: "Cpu",
        },
        {
          title: "Commissioning, checks and service readiness",
          text: "Connection checks, protections, route checks, operation readiness and follow-up maintenance.",
          icon: "Wrench",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services that build the infrastructure",
      text:
        "A new facility usually needs a combination of panels, routes, low voltage systems, industrial installations, automation and service.",
      items: [
        {
          title: "Electrical panels",
          text: "Distribution panels, control cabinets, protections and management.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Cable routes",
          text: "Cable trays, routes and organized industrial cabling.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Industrial electrical installations",
          text: "Power lines, installations and links between machines, panels and zones.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
        {
          title: "Automation",
          text: "Control points, sensors, management and process integration preparation.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Low voltage systems",
          text: "Supply lines, low voltage links and auxiliary infrastructure.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Maintenance and service",
          text: "Diagnostics, prevention and service readiness after commissioning.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where the solution applies",
      text:
        "Electrical infrastructure for a new site is planned according to environment, operating mode, equipment and future expansion.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From technical inspection to commissioning and maintenance",
      steps: [
        {
          title: "Technical inspection",
          text: "We review zones, machines, lines, routes, supply points and installation conditions.",
        },
        {
          title: "Scope clarification",
          text: "We define scope, stages, capacities, panels, routes, work zones and safety requirements.",
        },
        {
          title: "Planning of panels, routes and supplies",
          text: "We prepare a practical scope for panels, cable routes, low voltage systems, control and service access.",
        },
        {
          title: "Installation, cabling and checks",
          text: "We execute installation, connection, marking, connection checks, protections and commissioning readiness.",
        },
        {
          title: "Commissioning and maintenance",
          text: "We check the systems, make final corrections and prepare the site for follow-up maintenance.",
        },
      ],
      image: "/images/engineering/engineering-electrical-planning-documentation-01.png",
      imageAlt: "Technical planning and documentation for electrical infrastructure at a new production site",
      imageKicker: "SITE CHECK",
      imageTitle: "READY FOR COMMISSIONING",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "For a new production site, good planning reduces chaotic routes, difficult maintenance and costly changes after commissioning.",
      items: [
        "Correct distribution of supplies to machines, lines, work zones and warehouse zones.",
        "Safety, protections and clear separation of power, control and auxiliary connections.",
        "Access for maintenance, diagnostics, prevention and future service support.",
        "Clear labeling, marking and basic technical documentation.",
        "Possibility for future expansion of lines, machines, panels or control points.",
        "Coordination with machines, technological lines and other site contractors.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about early information, staged planning, scope and applicability for new production sites.",
      items: [
        {
          question: "When should electrical planning start?",
          answer: "As early as possible, before machines and routes are fixed on site.",
        },
        {
          question: "Can the solution be staged?",
          answer: "Yes. The scope can be split into practical stages according to site readiness and priorities.",
        },
        {
          question: "Can future expansion be considered?",
          answer: "Yes. Reserves and access for future lines, machines or panels can be planned from the start.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss electrical infrastructure for the new site",
      text:
        "Send information about the facility, zones, machines and future stages. We will clarify a realistic technical scope for panels, routes, supplies and commissioning.",
    },
    contactCta,
  },
  modernization: {
    seoPage: "enSolutionModernization",
    hero: {
      badgeText: "Engineering solution",
      title: "Modernization of an industrial electrical system",
      subtitle:
        "We assess and modernize existing industrial electrical systems - panels, cable routes, supplies, low voltage systems, automation and control points - with focus on safety, reliability and future expansion.",
      image: "/images/engineering/engineering-electrical-system-modernization-technical-room-01.png",
      imageAlt: "Modernization of an existing industrial electrical system",
      primaryCtaText: "Discuss modernization",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SYSTEM REVIEW",
    },
    context: {
      badge: "Context",
      title: "When modernization is needed",
      text:
        "Modernization is suitable when the existing electrical system no longer matches the real load, maintenance is difficult or the facility is expanding with new machines, lines and control points.",
      items: [
        "Old electrical panels, overloaded supplies or difficult diagnostics.",
        "Production expansion, new machines or new technological sections.",
        "Unclear cable routes, old connections or limited service access.",
        "Need for better protection, automation, control points and service support.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The scope depends on the current site condition, but usually includes assessment of panels, routes, supplies, control links, automation and safe replacement or expansion planning.",
      items: [
        {
          title: "Technical inspection and assessment",
          text: "Review of panels, routes, supplies, protections, operating modes and execution limitations.",
          icon: "Search",
        },
        {
          title: "Analysis of panels, routes and supplies",
          text: "Assessment of existing connections, loads, reserves, marking and upgrade options.",
          icon: "FileCheck",
        },
        {
          title: "Replacement or expansion of electrical panels",
          text: "Rework, replacement or addition of panels, protections, components and control cabinets.",
          icon: "LayoutDashboard",
        },
        {
          title: "Organization of cable routes and links",
          text: "Route arrangement, cabling, power lines, control links and service access.",
          icon: "Factory",
        },
        {
          title: "Automation and control point integration",
          text: "Adding or updating sensors, signals, control, control points and auxiliary links.",
          icon: "Cpu",
        },
        {
          title: "Checks, commissioning and service support",
          text: "Checks of links, protections, modes, documentation and readiness for follow-up maintenance.",
          icon: "Wrench",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services involved in modernization",
      text:
        "Modernization usually combines several areas - panels, routes, low voltage systems, automation, installation work and service after commissioning.",
      items: [
        {
          title: "Electrical panels",
          text: "Replacement, expansion and rework of panels, control cabinets, protections and management.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Cable routes",
          text: "Organization of cable trays, routes, links and industrial cabling.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Industrial electrical installations",
          text: "Power lines, machine links, installation work and integration into an active environment.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
        {
          title: "Automation",
          text: "Control points, sensors, control and process integration during system renewal.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Low voltage systems",
          text: "Low voltage links, supply lines and auxiliary electrical infrastructure.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Maintenance and service",
          text: "Diagnostics, prevention, service activities and follow-up technical support.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where modernization applies",
      text:
        "Electrical system modernization is applicable in active production, warehouse and technological facilities where safety, reliability and service access are critical.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From system assessment to commissioning and support",
      steps: [
        {
          title: "Technical inspection",
          text: "We review current panels, routes, supplies, machines, control points and work limitations.",
        },
        {
          title: "Assessment of the existing system",
          text: "We assess condition, load, risks, protections, marking, service access and required changes.",
        },
        {
          title: "Replacement, expansion or rework plan",
          text: "We clarify stages, scope, required panels, routes, supplies, control links and execution conditions.",
        },
        {
          title: "Installation, cabling and checks",
          text: "We execute replacement, installation, cabling, marking, connection checks, protections and modes.",
        },
        {
          title: "Commissioning, documentation and maintenance",
          text: "We prepare the system for operation, clarify service access and provide a basis for follow-up support.",
        },
      ],
      image: "/images/engineering/engineering-electrical-safety-inspection-01.png",
      imageAlt: "Engineering inspection of an electrical system before modernization",
      imageKicker: "MODERNIZATION CHECK",
      imageTitle: "READY FOR RENEWAL",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "In modernization, details matter because the system often works inside an active facility. The goal is safe change with clear structure and future expansion options.",
      items: [
        "Minimal production interruption through staged planning when site conditions allow it.",
        "Safety, protections and clear separation of power, control and auxiliary circuits.",
        "Clear labeling, marking and basic technical documentation.",
        "Access for future diagnostics, prevention and service support.",
        "Reserves for future expansion of machines, lines, panels or control points.",
        "Coordination with operating production and site limitations.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about initial assessment, staged work, scope and applicability for existing industrial electrical systems.",
      items: [
        {
          question: "Can modernization be done in stages?",
          answer: "Yes. When site conditions allow it, the work can be planned in practical stages.",
        },
        {
          question: "Can old panels be reused?",
          answer: "Only after technical assessment. Some systems can be reworked, while others require replacement.",
        },
        {
          question: "Can modernization include automation?",
          answer: "Yes. Control points, sensors and process links can be included in the modernization scope.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss modernization of the electrical system",
      text:
        "Send information about current panels, routes, machines, interruptions and planned expansions. We will clarify a realistic technical scope for safe modernization.",
      primaryText: "Discuss modernization",
    },
    contactCta,
  },
  panelAutomationLine: {
    seoPage: "enSolutionPanelAutomationLine",
    hero: {
      badgeText: "Engineering solution",
      title: "Panels and automation for production lines",
      subtitle:
        "We combine electrical panels, control, sensors, cable routes, low voltage systems and commissioning activities into a complete solution for machines, technological lines and industrial processes.",
      image: "/images/automation/automation-control-panel-technological-line-01.png",
      imageAlt: "Panels and automation for a technological production line",
      primaryCtaText: "Discuss the project",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "CONTROL REVIEW",
    },
    context: {
      badge: "Context",
      title: "When this solution is needed",
      text:
        "This solution is suitable when a machine or technological line needs a clear link between electrical panels, control, signals, supply and commissioning checks.",
      items: [
        "New machine, technological line or production section that needs a control panel.",
        "Modernization of existing control, old panels or unclear control links.",
        "Integration of sensors, control points, signals, drives and protection circuits.",
        "Preparation for commissioning, testing, service support and future expansion.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The scope is clarified according to the line, but usually combines electrical panels, automation, routes, low voltage systems and on-site checks.",
      items: [
        {
          title: "Electrical panel or control cabinet",
          text: "Control panel, protections, terminals, equipment and organized wiring.",
          icon: "LayoutDashboard",
        },
        {
          title: "Control and protection components",
          text: "Control circuits, modes, protections, signals and links to the machine or line.",
          icon: "Settings",
        },
        {
          title: "Cable routes and cabling",
          text: "Organized routes between panel, machines, sensors, drives and control points.",
          icon: "Factory",
        },
        {
          title: "Sensors, control points and signals",
          text: "Connection of inputs, outputs, sensors and control signals for an industrial process.",
          icon: "Cpu",
        },
        {
          title: "Low voltage systems and auxiliary links",
          text: "Supplies, low voltage links and related electrical infrastructure.",
          icon: "Zap",
        },
        {
          title: "Commissioning, checks and service support",
          text: "Checks of connections, functions, modes and access for follow-up maintenance.",
          icon: "Wrench",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services combined in the solution",
      text:
        "Panels and automation work reliably when they are planned together with routes, low voltage systems, installation work and service.",
      items: [
        {
          title: "Electrical panels",
          text: "Design, assembly and commissioning of panels and control cabinets.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Automation",
          text: "Control, sensors, control circuits and process integration.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Cable routes",
          text: "Cable trays, routes and organized cabling.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Industrial electrical installations",
          text: "Connections between panels, machines, power lines and technological sections.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
        {
          title: "Low voltage systems",
          text: "Supply lines, low voltage links and auxiliary infrastructure.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Maintenance and service",
          text: "Diagnostics, prevention and service activities after commissioning.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where the solution applies",
      text:
        "Panels and automation for technological lines are common in production processes, transport systems, machines, warehouse equipment and process sections.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From technical assignment to commissioning and support",
      steps: [
        {
          title: "Technical inspection",
          text: "We clarify the machine, line, existing panels, routes, environment and work limitations.",
        },
        {
          title: "Assignment clarification",
          text: "We define functions, modes, signals, sensors, supplies and expected control behavior.",
        },
        {
          title: "Panel, control and route planning",
          text: "We plan the panel, control circuits, cable routes, low voltage systems and maintenance access.",
        },
        {
          title: "Installation, cabling and checks",
          text: "We execute installation, connection, marking, connection checks, protections and control points.",
        },
        {
          title: "Commissioning and maintenance",
          text: "We check operating modes, make final corrections and prepare the system for service support.",
        },
      ],
      image: "/images/automation/automation-control-room-monitoring-support-01.png",
      imageAlt: "Industrial control and monitoring of an automated production line",
      imageKicker: "CONTROL CHECK",
      imageTitle: "READY FOR COMMISSIONING",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "For panels and automation in technological lines, details are important before installation because they affect safety, maintenance and future expansion.",
      items: [
        "Safety, protections and clear separation of power and control circuits.",
        "Access for diagnostics, prevention and service support.",
        "Clear labeling, marking and basic technical documentation.",
        "Possibility for future expansion of functions, sensors or equipment.",
        "Staged organization during modernization when production cannot fully stop.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about initial information, work on existing lines, cable routes and future expansion.",
      items: [
        {
          question: "Can this be applied to an existing line?",
          answer: "Yes. The current machine, panel, routes and control links are reviewed first.",
        },
        {
          question: "Can sensors and signals be included?",
          answer: "Yes. Sensors, inputs, outputs and control signals can be included in the scope.",
        },
        {
          question: "Can the solution support future expansion?",
          answer: "Yes. Access, reserve capacity and future control points can be considered during planning.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss panels and automation for your line",
      text:
        "Send information about the machine, line, existing panels, signals and expected operation. We will clarify a practical technical scope.",
    },
    contactCta,
  },
  cableInfrastructureBase: {
    seoPage: "enSolutionCableInfrastructureBase",
    hero: {
      badgeText: "Engineering solution",
      title: "Cable infrastructure for an industrial base",
      subtitle:
        "We organize cable routes, power lines, low voltage systems and connections for industrial bases, warehouses and production zones where clear routing and service access are essential.",
      image: "/images/cable-routing/cable-routing-industrial-base-overhead-trays-01.png",
      imageAlt: "Cable infrastructure and overhead cable trays in an industrial base",
      primaryCtaText: "Discuss cable infrastructure",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "ROUTE PLANNING",
    },
    context: {
      badge: "Context",
      title: "When this solution is needed",
      text:
        "Cable infrastructure is needed when a base, warehouse or production zone must connect machines, panels, systems and zones through organized routes.",
      items: [
        "New or expanding industrial base with multiple zones and consumers.",
        "Warehouse or logistics facility with machines, panels and low voltage systems.",
        "Unclear existing cable routes that make maintenance and expansion difficult.",
        "Need for organized power, control and auxiliary links across the facility.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The scope usually combines route planning, cable trays, organized cabling, low voltage links, panel connections and checks.",
      items: [
        {
          title: "Route inspection and planning",
          text: "Review of buildings, zones, machines, access points and route options.",
          icon: "Search",
        },
        {
          title: "Cable trays and support structures",
          text: "Installation of routes, trays, supports and organized cable paths.",
          icon: "Factory",
        },
        {
          title: "Power and control cabling",
          text: "Power lines, control links, markings and organized industrial cabling.",
          icon: "Activity",
        },
        {
          title: "Panel and zone connections",
          text: "Connections between panels, machines, work zones and auxiliary systems.",
          icon: "LayoutDashboard",
        },
        {
          title: "Low voltage and auxiliary systems",
          text: "Low voltage links and related infrastructure for consumers and systems.",
          icon: "Zap",
        },
        {
          title: "Checks and maintenance access",
          text: "Route checks, marking, fastening and readiness for future service.",
          icon: "Wrench",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services that form the cable infrastructure",
      text:
        "Cable infrastructure combines cable routes, industrial electrical installations, low voltage systems, panels and service readiness.",
      items: [
        {
          title: "Cable routes",
          text: "Cable trays, routes and organized industrial cabling.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Industrial electrical installations",
          text: "Connections between machines, panels and zones.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
        {
          title: "Low voltage systems",
          text: "Supply lines, low voltage links and auxiliary infrastructure.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Electrical panels",
          text: "Panels, protections and distribution points connected to route infrastructure.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Automation",
          text: "Control links, signals and preparation for process integration.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Maintenance and service",
          text: "Diagnostics, prevention and service access for the completed infrastructure.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where the solution applies",
      text:
        "Cable infrastructure is adapted to the facility type, access limitations, operating mode and maintenance needs.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From route inspection to checked infrastructure",
      steps: [
        {
          title: "Route inspection",
          text: "We review zones, existing paths, structures, machines, panels and route limitations.",
        },
        {
          title: "Scope and route planning",
          text: "We clarify routes, cable types, support points, separation and service access.",
        },
        {
          title: "Installation of routes and cabling",
          text: "We install cable trays, supports, organized cabling, marking and connections.",
        },
        {
          title: "Checks and preparation",
          text: "We check fastening, arrangement, marking, routes and readiness for connection.",
        },
        {
          title: "Maintenance readiness",
          text: "We prepare the infrastructure for diagnostics, additions and future service support.",
        },
      ],
      image: "/images/cable-routing/cable-routing-overhead-technical-detail-01.png",
      imageAlt: "Technical detail of overhead cable routes in an industrial facility",
      imageKicker: "ROUTE CHECK",
      imageTitle: "READY FOR CABLING",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "Cable infrastructure should be planned before installation starts so routes remain clear, accessible and ready for future expansion.",
      items: [
        "Logical route paths between panels, machines, zones and consumers.",
        "Separation of power, control and auxiliary links when required.",
        "Safe supports, fastening and access for future maintenance.",
        "Clear marking and route organization.",
        "Reserve capacity for future additions where appropriate.",
        "Coordination with facility structure, machines and other installation teams.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about cable route planning, existing facilities and future expansion.",
      items: [
        {
          question: "Can cable infrastructure be added to an existing base?",
          answer: "Yes. Existing routes, structures and access limitations are reviewed first.",
        },
        {
          question: "Can routes support future additions?",
          answer: "Yes. Reserve space and access can be considered during planning.",
        },
        {
          question: "Can power and control cables be separated?",
          answer: "Yes. Separation is planned according to the project and system requirements.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss cable infrastructure for your base",
      text:
        "Send information about zones, panels, consumers, existing routes and planned expansion. We will clarify the practical route scope.",
      primaryText: "Discuss cable infrastructure",
    },
    contactCta,
  },
  serviceExpansion: {
    seoPage: "enSolutionServiceExpansion",
    hero: {
      badgeText: "Engineering solution",
      title: "Service and expansion of existing electrical systems",
      subtitle:
        "We support diagnostics, maintenance, improvements and expansion of existing industrial electrical systems, panels, routes, low voltage systems and automation.",
      image: "/images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png",
      imageAlt: "Service and diagnostics of an existing industrial electrical system",
      primaryCtaText: "Request a service check",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "SERVICE REVIEW",
    },
    context: {
      badge: "Context",
      title: "When service and expansion are needed",
      text:
        "This solution is suitable when an existing system needs diagnostics, prevention, targeted corrections or expansion with new machines, panels or control points.",
      items: [
        "Existing production facility with unstable operation or difficult diagnostics.",
        "Need for preventive inspection of panels, routes, connections and protections.",
        "Expansion with new machines, consumers, lines or control points.",
        "Need for practical recommendations before modernization or targeted repair.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The scope usually combines diagnostics, checks, corrections, service work, expansion planning and follow-up recommendations.",
      items: [
        {
          title: "Initial diagnostics",
          text: "Review of issue history, system behavior, documentation and site limitations.",
          icon: "Search",
        },
        {
          title: "Panel and connection checks",
          text: "Checks of panels, protections, links, markings and main electrical components.",
          icon: "LayoutDashboard",
        },
        {
          title: "Route and cabling review",
          text: "Review of cable routes, cabling, fastening, marking and access.",
          icon: "Factory",
        },
        {
          title: "Expansion planning",
          text: "Clarification of new consumers, machines, panels, routes and control links.",
          icon: "Settings",
        },
        {
          title: "Service corrections",
          text: "Practical corrections or preparation of required materials and next actions.",
          icon: "Wrench",
        },
        {
          title: "Recommendations and prevention",
          text: "Summary of findings, prevention steps and improvement recommendations.",
          icon: "FileCheck",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services involved in service and expansion",
      text:
        "Service and expansion can include panels, automation, low voltage systems, cable routes and industrial installations.",
      items: [
        {
          title: "Maintenance and service",
          text: "Diagnostics, prevention and service activities for existing systems.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
        {
          title: "Electrical panels",
          text: "Checks, rework, expansion and replacement of panels and control cabinets.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Automation",
          text: "Diagnostics of control circuits, sensors, drives, signals and management systems.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Low voltage systems",
          text: "Checks of supply lines, consumers, connections, routes and safe operation.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Cable routes",
          text: "Route checks, cable organization, marking and preparation for expansion.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Industrial electrical installations",
          text: "Installation work and links between panels, machines and technological zones.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where service and expansion apply",
      text:
        "Service and expansion are suitable for operating facilities where reliability, response time and future system capacity matter.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From diagnostics to next actions",
      steps: [
        {
          title: "Initial diagnostics",
          text: "We collect information about the issue, system behavior, documentation and operating conditions.",
        },
        {
          title: "Checks of panels, routes and connections",
          text: "We review panels, protections, cable routes, markings and main electrical components.",
        },
        {
          title: "Correction or expansion plan",
          text: "When possible, we resolve the issue or clarify materials, changes and technical steps.",
        },
        {
          title: "Recommendations and prevention",
          text: "We summarize findings and recommend next actions for repair, prevention or improvement.",
        },
        {
          title: "Follow-up support",
          text: "When needed, we plan ongoing service, modernization or future expansion.",
        },
      ],
      image: "/images/engineering/engineering-diagnostics-maintenance-tools-01.png",
      imageAlt: "Tools and diagnostics during service of an industrial electrical system",
      imageKicker: "SERVICE CHECK",
      imageTitle: "READY FOR NEXT ACTIONS",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "Service and expansion work best when the current system condition, operating constraints and future needs are clarified before changes begin.",
      items: [
        "Current system behavior, symptoms and interruption history.",
        "Condition of panels, protections, routes, connections and markings.",
        "Safe access for diagnostics and correction work.",
        "Required additions for new consumers, machines or control points.",
        "Practical sequence for repair, expansion or modernization.",
        "Recommendations for prevention and future maintenance.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about diagnostics, prevention, expansion and service planning.",
      items: [
        {
          question: "Can you inspect an existing electrical system?",
          answer: "Yes. Panels, routes, connections, protections and system behavior can be reviewed on site.",
        },
        {
          question: "Can service lead to modernization?",
          answer: "Yes. Diagnostics often identifies targeted modernization or expansion needs.",
        },
        {
          question: "Can you add new consumers to an existing system?",
          answer: "Yes, after checking available capacity, routes, protections and connection conditions.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss service or expansion of the system",
      text:
        "Send information about the existing system, current issue, planned additions and site limitations. We will clarify the next technical steps.",
      primaryText: "Request a service check",
    },
    contactCta,
  },
  heightInstallation: {
    seoPage: "enSolutionHeightInstallation",
    hero: {
      badgeText: "Engineering solution",
      title: "Electrical installation at height",
      subtitle:
        "We execute electrical installation work in high industrial zones, halls, warehouse bases and difficult access points where safe access, route planning and clear execution are critical.",
      image: "/images/industrial/industrial-electrical-installation-height-lift-01.png",
      imageAlt: "Electrical installation at height using access equipment in an industrial hall",
      primaryCtaText: "Discuss installation at height",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "ACCESS REVIEW",
    },
    context: {
      badge: "Context",
      title: "When installation at height is needed",
      text:
        "This solution is suitable when electrical routes, lighting, cable trays or connections must be executed in high zones, halls or difficult access areas.",
      items: [
        "Industrial halls, warehouses or production zones with elevated installation points.",
        "Cable routes, trays, lighting or connections mounted above machine or work zones.",
        "Difficult access points that require coordinated equipment and safe planning.",
        "Need for organized installation without compromising production, routes or service access.",
      ],
    },
    included: {
      badge: "Scope",
      title: "What the solution includes",
      text:
        "The scope usually combines access review, route planning, installation work, cabling, checks and service-ready execution.",
      items: [
        {
          title: "Access and safety review",
          text: "Clarification of heights, access equipment, work zones and site limitations.",
          icon: "Search",
        },
        {
          title: "Cable routes at height",
          text: "Cable trays, route supports and organized elevated cabling.",
          icon: "Factory",
        },
        {
          title: "Industrial electrical installation",
          text: "Installation links between panels, machines, zones and high access points.",
          icon: "HardHat",
        },
        {
          title: "Low voltage and supply links",
          text: "Supply lines and auxiliary links where required by the project.",
          icon: "Zap",
        },
        {
          title: "Marking and service access",
          text: "Clear route marking and planning for future inspection and maintenance.",
          icon: "FileCheck",
        },
        {
          title: "Checks and completion",
          text: "Fastening, connection and route checks before handover.",
          icon: "Wrench",
        },
      ],
    },
    services: {
      badge: "Related services",
      title: "Services involved in installation at height",
      text:
        "Electrical installation at height often combines cable routes, industrial installations, low voltage systems, panels and service planning.",
      items: [
        {
          title: "Industrial electrical installations",
          text: "Electrical links and installation work in production zones and industrial halls.",
          href: serviceLinks.installations,
          icon: "HardHat",
        },
        {
          title: "Cable routes",
          text: "Cable trays, elevated routes and organized cabling.",
          href: serviceLinks.cableRoutes,
          icon: "Factory",
        },
        {
          title: "Low voltage systems",
          text: "Supply lines and low voltage links for consumers and zones.",
          href: serviceLinks.lowVoltage,
          icon: "Zap",
        },
        {
          title: "Electrical panels",
          text: "Panels and distribution points connected to elevated routes and zones.",
          href: serviceLinks.panels,
          icon: "LayoutDashboard",
        },
        {
          title: "Automation",
          text: "Control links, sensors and signals when needed by the process.",
          href: serviceLinks.automation,
          icon: "Cpu",
        },
        {
          title: "Maintenance and service",
          text: "Checks, diagnostics and service planning after installation.",
          href: serviceLinks.maintenance,
          icon: "Wrench",
        },
      ],
    },
    industries: {
      badge: "Application",
      title: "Industries where installation at height applies",
      text:
        "Installation at height is relevant for halls, warehouses, production zones and facilities where routes and equipment are mounted above the working area.",
      items: industryItems,
    },
    process: {
      badge: "Process",
      title: "From access review to safe completion",
      steps: [
        {
          title: "Access review",
          text: "We clarify height, equipment access, work areas, existing routes and site limitations.",
        },
        {
          title: "Route and work planning",
          text: "We define routes, supports, access points, sequence and safety considerations.",
        },
        {
          title: "Installation and cabling",
          text: "We execute elevated routes, cabling, fastening, marking and connections.",
        },
        {
          title: "Checks and corrections",
          text: "We check fastening, route arrangement, connections and service access.",
        },
        {
          title: "Handover and maintenance readiness",
          text: "We prepare the installation for operation, inspection and future maintenance.",
        },
      ],
      image: "/images/industrial/industrial-electrical-installation-high-access-technical-01.png",
      imageAlt: "High access electrical installation in an industrial facility",
      imageKicker: "ACCESS CHECK",
      imageTitle: "READY FOR HANDOVER",
    },
    technical: {
      badge: "Technical focus",
      title: "What is planned in advance",
      text:
        "Work at height requires clear access, route and safety planning before installation begins.",
      items: [
        "Access method, work zones and installation sequence.",
        "Safe fastening and support for elevated routes.",
        "Coordination with machines, production flow and other site activities.",
        "Clear marking and service access for future inspection.",
        "Route capacity and possible future additions.",
        "Checks before handover and maintenance readiness.",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about elevated installation, access planning and service readiness.",
      items: [
        {
          question: "Can installation be done in an active hall?",
          answer: "Yes, when site conditions allow it and access can be planned safely.",
        },
        {
          question: "Can cable routes be installed above production zones?",
          answer: "Yes. Routes, support points and access are clarified before execution.",
        },
        {
          question: "Is future maintenance considered?",
          answer: "Yes. Service access and inspection points are considered during planning.",
        },
      ],
    },
    cta: {
      ...baseCta,
      title: "Discuss electrical installation at height",
      text:
        "Send information about the hall, heights, access limitations, routes and required connections. We will clarify a practical execution scope.",
      primaryText: "Discuss installation at height",
    },
    contactCta,
  },
} as const satisfies SolutionDetailsContent;
