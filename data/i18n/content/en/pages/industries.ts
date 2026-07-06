import type { IndustriesOverviewPageContent } from "../../types";

export const industriesOverviewPageContent = {
  hero: {
    badgeText: "Industrial solutions",
    title: "Industries where we build industrial electrical systems",
    subtitle:
      "Mall Electro designs and implements reliable electrical systems, automation, industrial routes and control panels across production sectors.",
    subtitleParagraphs: [
      "Mall Electro designs and implements reliable electrical systems, automation, industrial routes and control panels across production sectors.",
      "We combine engineering expertise with standardized processes to ensure safety, efficiency and a high level of control in every industrial project - from food processing and mills to agro, logistics and manufacturing facilities.",
    ],
    heroImageAlt:
      "Engineer performing final checks on an electrical panel in an industrial environment",
    primaryCtaText: "Explore sectors",
    primaryCtaHref: "#industry-food",
    secondaryCtaText: "Speak with an engineer",
    secondaryCtaHref: "tel:+359899015671",
    overlayProjectLabel: "PROJECT: #8842",
    overlayStatusLabel: "INDUSTRIAL SITE",
  },
  quickNav: {
    badge: "Sectors we work in",
    links: [
      { href: "#industry-food", label: "Food processing", icon: "Factory" },
      { href: "#industry-grain", label: "Grain processing", icon: "Wheat" },
      { href: "#industry-mills", label: "Mills", icon: "Settings" },
      { href: "#industry-agro", label: "Agro", icon: "Warehouse" },
      { href: "#industry-logistics", label: "Logistics", icon: "Truck" },
      { href: "#industry-production", label: "Manufacturing facilities", icon: "Factory" },
    ],
  },
  overview: {
    badge: "How we add value in industrial projects",
    heading:
      "An engineering approach that ensures safety, efficiency and predictable results",
    subtitle:
      "We combine design, industrial automation and installation according to standards to build reliable electrical systems for all types of production processes.",
    imageAlt: "Industrial electrical panels and automation",
    paragraphs: [
      "We work in food processing, grain processing, agro, logistics and industrial manufacturing. Every project starts with detailed engineering and ends with a safe, efficient and rational electrical system executed according to European standards.",
      "From cable routes and panels to intelligent control systems, we provide predictability, clear planning, technical documentation and long-term support.",
    ],
    features: [
      {
        icon: "HardHat",
        label: "Engineering expertise",
        desc: "Design, cabling and integration by certified engineers.",
      },
      {
        icon: "Cpu",
        label: "Automation",
        desc: "PLC, SCADA, controllers and intelligent management.",
      },
      {
        icon: "ShieldCheck",
        label: "Safety and standards",
        desc: "EN standards, protections and industrial certification.",
      },
      {
        icon: "Award",
        label: "Execution quality",
        desc: "Precision, safety and control at every step.",
      },
    ],
    cta: "View projects by industry",
    ctaHref: "#industry-food",
  },
  premium: {
    heading: "Industries we serve",
    body:
      "Sectors and working environments where electrical services and project solutions are adapted to the specific facility, process and operating mode.",
    cardCta: "View industry",
    items: [
      {
        title: "Food processing industry",
        text:
          "Electrical panels, automation and control systems for production lines in food processing facilities - from raw material intake to packaging.",
        href: "/en/industries/food-industry",
        image: "/images/industries/stainless-steel-production-line_2.png",
        imageAlt: "Food processing production line",
        icon: "Factory",
        bullets: [
          "Installations for process lines and machines",
          "Control panels and cabinets",
          "Communication and safety systems",
        ],
      },
      {
        title: "Grain processing",
        text:
          "Systems for drying, transport, cabling and automation of silo facilities and grain processing bases.",
        href: "/en/industries/grain-processing",
        image: "/images/industries/wheat-close-up.png",
        imageAlt: "Grain processing",
        icon: "Wheat",
        bullets: [
          "Electrical installations for silos and transport lines",
          "Power supply and control of dryers and fans",
          "Automation and monitoring of levels and flows",
        ],
      },
      {
        title: "Mills",
        text:
          "Cabling and integration of process lines for milling and flour production facilities.",
        href: "/en/industries/mills",
        image: "/images/industries/industrial-flour-milling-facility.png",
        imageAlt: "Mills",
        icon: "Settings",
        bullets: [
          "Control of milling lines and separators",
          "Control panels for dosing and mixing",
          "Indication and protections at key process points",
        ],
      },
      {
        title: "Agro",
        text:
          "Industrial routes and electrical panels for storage bases, farms and specialized agricultural facilities.",
        href: "/en/industries/agriculture",
        image: "/images/industries/golden-farmland-aerial_2.png",
        imageAlt: "Agro",
        icon: "Warehouse",
        bullets: [
          "Power supply for agro facilities and pumping stations",
          "Lighting and power lines for storage bases",
          "Control of ventilation, cooling and irrigation",
        ],
      },
      {
        title: "Logistics and warehouse bases",
        text:
          "Electrical installations for logistics centers, cold rooms and high-rack warehouses.",
        href: "/en/industries/logistics",
        image: "/images/industries/modern-warehouse-interior_1.png",
        imageAlt: "Logistics",
        icon: "Truck",
        bullets: [
          "Panels and routes for warehouse equipment and conveyors",
          "Power supply for cold and freezer rooms",
          "Lighting, safety and emergency systems",
        ],
      },
      {
        title: "Manufacturing facilities",
        text:
          "Electrical infrastructure for industrial halls, technological lines, machines, work zones and production processes.",
        href: "/en/industries/manufacturing-companies",
        image: "/images/industries/hero_industriy.png",
        imageAlt: "Manufacturing facilities",
        icon: "Factory",
        bullets: [
          "Power supply for machines, lines and work zones",
          "Cable routes through halls and technical rooms",
          "Automation, low voltage systems and service support",
        ],
      },
    ],
  },
  cases: {
    heading: "Typical industrial scenarios",
    body:
      "Examples of project situations where electrical panels, cable routes, automation and service support are combined according to the environment and operating mode of the facility.",
    items: [
      {
        title: "Electrical infrastructure for a food processing site",
        subtitle:
          "Panels, routes, low voltage systems and control connections for a production environment.",
        image: "/images/industries/stainless-steel-production-line_2.png",
        tag: "Food processing",
      },
      {
        title: "Automation for grain processing",
        subtitle:
          "Control points, sensors, panels and process connections for intake, transport and processing.",
        image: "/images/industries/golden-hour-grain-complex.png",
        tag: "Grain processing",
      },
      {
        title: "Cable infrastructure for a logistics base",
        subtitle:
          "Routes, lighting, power supply and service points for warehouse and loading zones.",
        image: "/images/industries/modern-warehouse-interior_1.png",
        tag: "Logistics",
      },
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
} as const satisfies IndustriesOverviewPageContent;
