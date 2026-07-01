import type { AboutPageContent } from "../../types";

export const aboutPageContent = {
  hero: {
    title: "Engineering, quality and long-term expertise",
    subtitle:
      "Mall Electro is a partner for industrial electrical systems, automation and technical infrastructure. We work practically and project-by-project - from site inspection and planning to installation, testing and ongoing maintenance.",
    badgeText: "Always close to you",
    heroImageAlt:
      "Engineer inspecting an electrical panel in an industrial environment.",
    primaryCtaText: "View industries",
    secondaryCtaText: "Contact us",
  },
  intro: {
    badge: "About Mall Electro",
    heading: "Who we are",
    paragraphs: [
      "Mall Electro works on industrial electrical systems, electrical panels, cable routes, low voltage systems, automation and service maintenance.",
      "Our approach is engineering-led and aligned with the specific facility. We first understand the process, environment and technical constraints, then organize the execution so the system is clear for installation, commissioning and future operation.",
    ],
  },
  services: {
    badge: "Scope",
    heading: "What we build",
    body:
      "We work across the core technical areas that keep an industrial facility organized, powered and controllable.",
    items: [
      {
        title: "Electrical panels",
        text: "Distribution panels, control cabinets and management panels.",
        href: "/en/services/electrical-panels",
        icon: "LayoutDashboard",
      },
      {
        title: "Cable routes",
        text: "Cable trays, routes and structured industrial cabling.",
        href: "/en/services/cable-routes",
        icon: "Factory",
      },
      {
        title: "Industrial electrical installations",
        text: "Power supply, power lines and connections between machines, panels and zones.",
        href: "/en/services/industrial-electrical-installations",
        icon: "HardHat",
      },
      {
        title: "Automation",
        text: "Control systems, sensors and process integration.",
        href: "/en/services/automation",
        icon: "Cpu",
      },
      {
        title: "Low voltage systems",
        text: "Low-voltage connections, lines and related technical infrastructure.",
        href: "/en/services/low-voltage-systems",
        icon: "Zap",
      },
      {
        title: "Maintenance and service",
        text: "Diagnostics, preventive checks and ongoing technical support.",
        href: "/en/services/maintenance-and-service",
        icon: "Wrench",
      },
    ],
  },
  process: {
    badge: "Process",
    heading: "How we approach work",
    body:
      "Every system starts with the real conditions of the facility. We then clarify the scope, organize the technical solution and move into installation, testing and ongoing support.",
    steps: [
      "Technical site inspection",
      "Scope clarification",
      "Planning of panels, routes and control points",
      "Installation and testing",
      "Maintenance after commissioning",
    ],
  },
  industries: {
    badge: "Industrial environments",
    heading: "Where we are useful",
    body:
      "We adapt the electrical system to the process, load and access requirements for installation and service in different industrial environments.",
    items: [
      {
        title: "Food processing",
        text: "Production lines and food processing facilities.",
        href: "/en/industries/food-industry",
        icon: "Factory",
      },
      {
        title: "Grain processing",
        text: "Silo complexes, transport lines and drying systems.",
        href: "/en/industries/grain-processing",
        icon: "Wheat",
      },
      {
        title: "Mills",
        text: "Flour production facilities and process lines.",
        href: "/en/industries/mills",
        icon: "Activity",
      },
      {
        title: "Agro",
        text: "Farms, bases and seasonal technical infrastructure.",
        href: "/en/industries/agriculture",
        icon: "Wheat",
      },
      {
        title: "Logistics",
        text: "Warehouses, loading zones and internal electrical infrastructure.",
        href: "/en/industries/logistics",
        icon: "Warehouse",
      },
      {
        title: "Manufacturing facilities",
        text: "Halls, machines, work zones and supporting systems.",
        href: "/en/industries/manufacturing-companies",
        icon: "Settings",
      },
    ],
  },
  principles: {
    badge: "Principles",
    heading: "What makes us different",
    body:
      "The focus is on useful engineering solutions, clear organization and systems that can be serviced and expanded after commissioning.",
    items: [
      {
        title: "Engineering thinking",
        text: "We look at panels, routes, control and service as one connected system.",
      },
      {
        title: "Clear scope",
        text: "We clarify the technical boundaries early so work follows real site conditions.",
      },
      {
        title: "Organized execution",
        text: "We aim for clean installation, traceable connections and convenient future maintenance.",
      },
      {
        title: "System development",
        text: "We think about testing, service and the option for future expansion.",
      },
    ],
  },
  taxonomy: {
    badge: "Navigation",
    heading: "Services, solutions and industries",
    body:
      "We use three viewpoints for the work: services show what we execute, solutions describe project situations, and industries provide the context of the working environment.",
    items: [
      {
        title: "Services",
        text:
          "What we execute: panels, routes, installations, automation and service.",
        href: "/en/services",
      },
      {
        title: "Solutions",
        text:
          "Project situations: a new facility, modernization, a line, a base or expansion.",
        href: "/en/solutions",
      },
      {
        title: "Industries",
        text:
          "Working environments where the system is adapted to the process and load.",
        href: "/en/industries",
      },
    ],
  },
} as const satisfies AboutPageContent;
