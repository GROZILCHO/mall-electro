import type { IndustryDetailsContent } from "../../types";

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

const industryRoutes = {
  agriculture: "/en/industries/agriculture",
  foodIndustry: "/en/industries/food-industry",
  grainProcessing: "/en/industries/grain-processing",
  mills: "/en/industries/mills",
  logistics: "/en/industries/logistics",
  manufacturingCompanies: "/en/industries/manufacturing-companies",
} as const;

const commonServices = [
  {
    title: "Electrical panels",
    text: "Distribution panels, control cabinets, protections and management points.",
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
    text: "Power lines, machine connections and electrical links between zones.",
    href: serviceLinks.installations,
    icon: "HardHat",
  },
  {
    title: "Automation",
    text: "Control points, sensors, control circuits and process integration.",
    href: serviceLinks.automation,
    icon: "Cpu",
  },
  {
    title: "Low voltage systems",
    text: "Supply lines, low voltage links and auxiliary electrical infrastructure.",
    href: serviceLinks.lowVoltage,
    icon: "Zap",
  },
  {
    title: "Maintenance and service",
    text: "Diagnostics, prevention and technical support after commissioning.",
    href: serviceLinks.maintenance,
    icon: "Wrench",
  },
] as const;

const relatedBase = [
  {
    title: "Food processing",
    text: "Electrical systems for process lines, panels, routes and automation.",
    href: industryRoutes.foodIndustry,
  },
  {
    title: "Grain processing",
    text: "Infrastructure for silos, dryers, transport lines and seasonal operation.",
    href: industryRoutes.grainProcessing,
  },
  {
    title: "Mills",
    text: "Electrical systems for flour production, transport, dosing and aspiration.",
    href: industryRoutes.mills,
  },
  {
    title: "Agriculture",
    text: "Systems for farms, storage bases, dryers and agricultural infrastructure.",
    href: industryRoutes.agriculture,
  },
  {
    title: "Logistics",
    text: "Electrical infrastructure for warehouses, cold rooms and loading zones.",
    href: industryRoutes.logistics,
  },
  {
    title: "Manufacturing companies",
    text: "Systems for industrial halls, machines, work zones and production lines.",
    href: industryRoutes.manufacturingCompanies,
  },
] as const;

const relatedWithout = (href: string) => relatedBase.filter((item) => item.href !== href).slice(0, 3);

export const industryDetailsContent = {
  agriculture: {
    seoPage: "enIndustryAgriculture",
    hero: {
      badgeText: "Agriculture // agricultural infrastructure",
      title: "Electrical systems for agricultural facilities and infrastructure",
      subtitle:
        "We build electrical infrastructure for agricultural facilities, farms, storage bases and technological zones - panels, cable routes, low voltage systems, automation and service support for reliable equipment operation.",
      image: "/images/industries/golden-farmland-aerial_2.png",
      imageAlt: "Agricultural base and infrastructure with industrial electrical systems",
      primaryCtaText: "Discuss an agricultural facility",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "AGRICULTURAL SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for farms, storage bases and technological zones",
      text:
        "Agricultural facilities often combine storage bases, dryers, transport systems, technological lines and technical rooms. Electrical systems must provide stable supply, organized routes, safety and service access during seasonal load and active operation.",
      items: [
        "Distribution of supply to machines, storage zones, dryers, transport systems and auxiliary equipment.",
        "Cable routes through yards, halls, technical rooms and production zones with maintenance access.",
        "Automation and control of transport, drying, technological lines, control points and connected processes.",
        "Service organization aligned with seasonal load, active operation and reliability requirements.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Combined services for agricultural infrastructure",
      text:
        "Agricultural facilities usually combine panels, routes, industrial installations, low voltage systems, automation and service for equipment, storage zones and technological processes.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The scope depends on the facility, seasonal mode, equipment and required reliability.",
      items: [
        "Machines, dryers, pumps, transport systems and technical zones that need power supply.",
        "Cable route paths across yards, halls, technical rooms and outdoor zones.",
        "Control points, automation needs and process links between equipment.",
        "Service access and maintenance planning during active seasonal operation.",
      ],
    },
    process: {
      badge: "Process",
      title: "From site review to reliable seasonal operation",
      steps: [
        {
          title: "Site inspection",
          text: "We review zones, machines, supplies, routes, seasonal load and access limitations.",
        },
        {
          title: "Scope clarification",
          text: "We define panels, routes, low voltage systems, automation and service requirements.",
        },
        {
          title: "Installation planning",
          text: "We plan execution around the facility layout, equipment and expected operating mode.",
        },
        {
          title: "Execution and checks",
          text: "We install, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-agro-industrial-facility-01.png",
      imageAlt: "Agricultural industrial facility with storage and technical infrastructure",
      imageKicker: "AGRO SYSTEM REVIEW",
      imageTitle: "READY FOR SEASONAL OPERATION",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for agricultural facilities.",
      items: [
        {
          question: "Can work be planned around seasonal load?",
          answer: "Yes. Execution can be planned according to access, operating windows and facility priorities.",
        },
        {
          question: "Can outdoor routes be included?",
          answer: "Yes. Route planning can include yards, halls, technical rooms and outdoor zones.",
        },
        {
          question: "Can automation be included?",
          answer: "Yes. Control points, sensors and process links can be included in the scope.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other industrial environments with similar requirements",
      text:
        "The approach is adapted for each sector, but many technical requirements overlap across production and storage environments.",
      ctaText: "Discuss an agricultural facility",
      items: relatedWithout(industryRoutes.agriculture),
    },
    contactCta,
  },
  foodIndustry: {
    seoPage: "enIndustryFoodIndustry",
    hero: {
      badgeText: "Food processing // production lines",
      title: "Electrical systems for food processing facilities",
      subtitle:
        "We build electrical panels, cable routes, low voltage systems, automation and service-ready infrastructure for food processing facilities and production lines.",
      image: "/images/industries/stainless-steel-production-line_2.png",
      imageAlt: "Food processing production line with industrial electrical systems",
      primaryCtaText: "Discuss a food processing facility",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "FOOD PROCESSING SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for production lines and process equipment",
      text:
        "Food processing facilities need stable supply, organized routes, clear control points and service access across production, packaging and auxiliary zones.",
      items: [
        "Power supply for production lines, machines, panels and control points.",
        "Cable routes planned around hygiene zones, equipment access and maintenance needs.",
        "Automation for dosing, transport, packaging, process control and safety systems.",
        "Service-ready infrastructure for diagnostics, prevention and future expansion.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Services combined in food processing projects",
      text:
        "Food processing projects often combine panels, industrial installations, automation, routes, low voltage systems and maintenance.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The electrical scope depends on line layout, equipment, environment and operational requirements.",
      items: [
        "Production line equipment, power consumers and control points.",
        "Cable route paths around production, packaging and technical zones.",
        "Automation, signals, sensors and process integration requirements.",
        "Maintenance access and service approach for active production.",
      ],
    },
    process: {
      badge: "Process",
      title: "From production review to service-ready operation",
      steps: [
        {
          title: "Technical inspection",
          text: "We review the production line, equipment, routes, panels and site limitations.",
        },
        {
          title: "Scope definition",
          text: "We clarify panels, cable routes, low voltage links, automation and service access.",
        },
        {
          title: "Execution planning",
          text: "We plan installation around production zones, safety and maintenance requirements.",
        },
        {
          title: "Installation and checks",
          text: "We execute, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-food-processing-production-line-01.png",
      imageAlt: "Food processing production line with industrial electrical infrastructure",
      imageKicker: "FOOD PROCESSING SYSTEM REVIEW",
      imageTitle: "READY FOR PRODUCTION FLOW",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for food processing facilities.",
      items: [
        {
          question: "Can you work around existing production?",
          answer: "Yes. The execution sequence can be planned around production constraints where possible.",
        },
        {
          question: "Can automation be part of the scope?",
          answer: "Yes. Control, sensors, signals and process links can be included.",
        },
        {
          question: "Can service access be planned from the start?",
          answer: "Yes. Access for diagnostics and maintenance is part of the technical planning.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other production environments with similar systems",
      text:
        "Similar electrical requirements appear in grain processing, mills, logistics and manufacturing facilities.",
      ctaText: "Discuss a food processing facility",
      items: relatedWithout(industryRoutes.foodIndustry),
    },
    contactCta,
  },
  grainProcessing: {
    seoPage: "enIndustryGrainProcessing",
    hero: {
      badgeText: "Grain processing // silos and transport",
      title: "Electrical systems for grain processing facilities",
      subtitle:
        "We build electrical infrastructure for grain processing bases, silo systems, dryers, transport lines and technological equipment.",
      image: "/images/industries/golden-hour-grain-complex.png",
      imageAlt: "Grain processing base with industrial electrical infrastructure",
      primaryCtaText: "Discuss a grain processing facility",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "GRAIN PROCESSING SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for silos, dryers and transport systems",
      text:
        "Grain processing facilities need reliable supply, structured cable routes and control points across intake, transport, drying, storage and dispatch processes.",
      items: [
        "Supply and control for dryers, fans, conveyors, elevators and storage systems.",
        "Cable routes across silo bases, technical rooms, yards and production zones.",
        "Automation and monitoring for levels, flows, transport and process equipment.",
        "Service access for seasonal operation, diagnostics and maintenance.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Combined services for grain processing bases",
      text:
        "Grain processing projects combine panels, routes, industrial installations, automation, low voltage systems and service readiness.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The scope depends on equipment, site layout, operating mode and seasonal load.",
      items: [
        "Dryers, fans, conveyors, elevators and silo equipment requiring supply and control.",
        "Routes through yards, technical corridors, storage zones and production points.",
        "Automation, control signals, level monitoring and process links.",
        "Seasonal operation requirements and service access.",
      ],
    },
    process: {
      badge: "Process",
      title: "From site review to seasonal readiness",
      steps: [
        {
          title: "Site inspection",
          text: "We review equipment, routes, panels, silos, dryers and operating constraints.",
        },
        {
          title: "Technical scope",
          text: "We define panels, routes, power supply, automation and maintenance access.",
        },
        {
          title: "Execution planning",
          text: "We plan work around seasonal deadlines, equipment access and safety requirements.",
        },
        {
          title: "Installation and checks",
          text: "We execute, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-grain-processing-facility-01.png",
      imageAlt: "Grain processing base with industrial electrical infrastructure and process equipment",
      imageKicker: "GRAIN SYSTEM REVIEW",
      imageTitle: "READY FOR SEASONAL LOAD",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for grain processing facilities.",
      items: [
        {
          question: "Can seasonal deadlines be considered?",
          answer: "Yes. The work sequence can be planned around seasonal operation where possible.",
        },
        {
          question: "Can transport and drying equipment be integrated?",
          answer: "Yes. Supply, control and automation links can be planned for those systems.",
        },
        {
          question: "Can maintenance access be improved?",
          answer: "Yes. Routes, markings and service access can be part of the scope.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other industrial environments with similar requirements",
      text:
        "Grain processing shares technical patterns with mills, agriculture, food processing and logistics.",
      ctaText: "Discuss a grain processing facility",
      items: relatedWithout(industryRoutes.grainProcessing),
    },
    contactCta,
  },
  mills: {
    seoPage: "enIndustryMills",
    hero: {
      badgeText: "Mills // flour production",
      title: "Electrical systems for mills and flour production",
      subtitle:
        "We build electrical infrastructure for mills, flour production lines, elevators, conveyors, dosing, screening and aspiration systems.",
      image: "/images/industries/industrial-flour-milling-facility.png",
      imageAlt: "Industrial flour milling facility with electrical systems",
      primaryCtaText: "Discuss a mill facility",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "MILLING SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for milling lines and process equipment",
      text:
        "Mills require stable supply and organized control across transport, dosing, screening, aspiration and production zones.",
      items: [
        "Power supply and control for milling lines, elevators, conveyors and auxiliary systems.",
        "Cable routes through production floors, technical rooms and process zones.",
        "Automation and monitoring for dosing, aspiration, screening and process points.",
        "Service access for diagnostics, prevention and future line upgrades.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Combined services for milling facilities",
      text:
        "Mill projects often require panels, cable routes, industrial installations, automation, low voltage systems and service support.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The scope depends on line configuration, equipment sequence, route access and operating mode.",
      items: [
        "Milling lines, transport systems, aspiration, dosing and screening equipment.",
        "Cable route paths through halls, technical rooms and process floors.",
        "Control points, sensors, operating modes and automation needs.",
        "Maintenance access and future modernization options.",
      ],
    },
    process: {
      badge: "Process",
      title: "From process review to stable production flow",
      steps: [
        {
          title: "Technical inspection",
          text: "We review production lines, machines, routes, panels and access limitations.",
        },
        {
          title: "Scope clarification",
          text: "We define panels, routes, low voltage systems, control and service needs.",
        },
        {
          title: "Installation planning",
          text: "We plan execution around process flow, safety and maintenance access.",
        },
        {
          title: "Execution and checks",
          text: "We install, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-flour-mill-production-01.png",
      imageAlt: "Milling production with industrial systems and electrical infrastructure",
      imageKicker: "MILLING SYSTEM REVIEW",
      imageTitle: "READY FOR PROCESS FLOW",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for mills and flour production.",
      items: [
        {
          question: "Can process equipment be connected in stages?",
          answer: "Yes. The sequence can be planned according to line readiness and site access.",
        },
        {
          question: "Can aspiration and dosing systems be included?",
          answer: "Yes. Control points and electrical links for those systems can be included.",
        },
        {
          question: "Can existing installations be modernized?",
          answer: "Yes. Existing panels, routes and links can be assessed before modernization.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other production environments with similar systems",
      text:
        "Mills share technical requirements with grain processing, food processing and manufacturing facilities.",
      ctaText: "Discuss a mill facility",
      items: relatedWithout(industryRoutes.mills),
    },
    contactCta,
  },
  logistics: {
    seoPage: "enIndustryLogistics",
    hero: {
      badgeText: "Logistics // warehouse bases",
      title: "Electrical systems for logistics and warehouse bases",
      subtitle:
        "We build electrical infrastructure for logistics centers, warehouse bases, cold rooms, loading zones and warehouse equipment.",
      image: "/images/industries/modern-warehouse-interior_1.png",
      imageAlt: "Modern warehouse interior with industrial electrical infrastructure",
      primaryCtaText: "Discuss a logistics base",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "LOGISTICS SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for warehouses, cold rooms and loading zones",
      text:
        "Logistics facilities need organized routes, reliable supply, lighting, low voltage systems and service access across large working areas.",
      items: [
        "Supply for warehouse equipment, conveyors, gates, cold rooms and work zones.",
        "Cable routes through halls, racks, technical rooms and loading zones.",
        "Lighting, low voltage systems, auxiliary links and safety systems.",
        "Service access for daily operation, diagnostics and future expansion.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Combined services for logistics facilities",
      text:
        "Logistics projects often combine panels, routes, installations, low voltage systems, automation and service support.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The scope depends on facility size, loading zones, equipment and operational schedule.",
      items: [
        "Warehouse equipment, cold rooms, loading areas, lighting and consumers.",
        "Cable route paths through halls, racks, technical rooms and service zones.",
        "Low voltage systems, controls, safety and auxiliary links.",
        "Work sequence that respects daily operation and access limitations.",
      ],
    },
    process: {
      badge: "Process",
      title: "From warehouse review to daily operation readiness",
      steps: [
        {
          title: "Site inspection",
          text: "We review zones, routes, panels, equipment, loading areas and access limitations.",
        },
        {
          title: "Scope clarification",
          text: "We define panels, routes, supplies, lighting, low voltage systems and service needs.",
        },
        {
          title: "Execution planning",
          text: "We plan installation around warehouse operation and safety requirements.",
        },
        {
          title: "Installation and checks",
          text: "We execute, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-logistics-warehouse-electrical-infrastructure-01.png",
      imageAlt: "Logistics warehouse with lighting, cable routes and industrial electrical infrastructure",
      imageKicker: "LOGISTICS SYSTEM REVIEW",
      imageTitle: "READY FOR DAILY OPERATION",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for logistics and warehouse bases.",
      items: [
        {
          question: "Can work be planned around active warehouse operation?",
          answer: "Yes. The sequence can be coordinated with access and operational constraints.",
        },
        {
          question: "Can cold room supply be included?",
          answer: "Yes. Supply, protections and related infrastructure can be included in the scope.",
        },
        {
          question: "Can route planning support future expansion?",
          answer: "Yes. Route capacity and access can be planned for future additions.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other environments with similar infrastructure needs",
      text:
        "Logistics facilities share route, supply and service requirements with manufacturing, food processing and agricultural sites.",
      ctaText: "Discuss a logistics base",
      items: relatedWithout(industryRoutes.logistics),
    },
    contactCta,
  },
  manufacturingCompanies: {
    seoPage: "enIndustryManufacturingCompanies",
    hero: {
      badgeText: "Manufacturing companies // industrial halls",
      title: "Electrical systems for manufacturing companies",
      subtitle:
        "We build electrical infrastructure for industrial halls, technological lines, machines, work zones and production processes.",
      image: "/images/industries/industries-heavy-industrial-electrical-infrastructure-01.png",
      imageAlt: "Manufacturing facility with industrial electrical infrastructure",
      primaryCtaText: "Discuss a manufacturing facility",
      primaryCtaHref: "/en/contact",
      secondaryCtaText: "View services",
      secondaryCtaHref: "/en/services",
      secondaryCtaIcon: "ChevronRight",
      overlayProjectLabel: "PROJECT: #8842",
      overlayStatusLabel: "MANUFACTURING SITE",
    },
    overview: {
      badge: "Environment and requirements",
      title: "Electrical infrastructure for machines, lines and work zones",
      text:
        "Manufacturing facilities need stable supply, clear routes, electrical panels, automation and service-ready infrastructure for changing production needs.",
      items: [
        "Power supply for machines, lines, work zones and auxiliary equipment.",
        "Cable routes through halls, technical rooms and production areas.",
        "Automation, control points, sensors and process links.",
        "Service access for diagnostics, maintenance, modernization and expansion.",
      ],
    },
    systems: {
      badge: "Typical systems and services",
      title: "Combined services for manufacturing facilities",
      text:
        "Manufacturing projects often combine panels, routes, industrial installations, low voltage systems, automation and service support.",
      services: commonServices,
    },
    projectNeeds: {
      badge: "Project needs",
      title: "What must be clarified before execution",
      text:
        "The scope depends on machines, production flow, route access and future expansion plans.",
      items: [
        "Machines, technological lines, work zones and auxiliary consumers.",
        "Cable routes and supply paths through halls and technical rooms.",
        "Automation, control points, sensors and operating modes.",
        "Modernization, expansion and maintenance requirements.",
      ],
    },
    process: {
      badge: "Process",
      title: "From production review to modernization readiness",
      steps: [
        {
          title: "Technical inspection",
          text: "We review machines, lines, panels, routes, supplies and site limitations.",
        },
        {
          title: "Scope clarification",
          text: "We define panels, routes, low voltage systems, automation and service access.",
        },
        {
          title: "Execution planning",
          text: "We plan work around production, safety and future expansion needs.",
        },
        {
          title: "Installation and checks",
          text: "We execute, connect, mark and check the system before handover.",
        },
      ],
      image: "/images/industries/industries-manufacturing-enterprise-production-floor-01.png",
      imageAlt: "Manufacturing company production floor with electrical infrastructure and industrial machines",
      imageKicker: "MANUFACTURING SYSTEM REVIEW",
      imageTitle: "READY FOR MODERNIZATION",
    },
    faq: {
      title: "Frequently asked questions",
      intro: "Short answers about electrical systems for manufacturing companies.",
      items: [
        {
          question: "Can you work with both new and existing production lines?",
          answer: "Yes. The scope can cover new installations, modernization and expansion.",
        },
        {
          question: "Can machines and panels be connected as one system?",
          answer: "Yes. Panels, routes, supplies and control links can be planned together.",
        },
        {
          question: "Can future expansion be considered?",
          answer: "Yes. Route capacity, panel reserves and service access can be planned in advance.",
        },
      ],
    },
    relatedIndustries: {
      badge: "Related industries",
      title: "Other production environments with similar needs",
      text:
        "Manufacturing facilities share electrical requirements with logistics, food processing, mills and grain processing.",
      ctaText: "Discuss a manufacturing facility",
      items: relatedWithout(industryRoutes.manufacturingCompanies),
    },
    contactCta,
  },
} as const satisfies IndustryDetailsContent;
