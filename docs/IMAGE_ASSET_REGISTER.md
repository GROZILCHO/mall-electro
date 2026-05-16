# Image Asset Register

## Purpose

This register is the source of truth for planned, generated, approved, optimized and implemented images for the Mall Electro website. It exists to keep the future image replacement pipeline organized without changing current runtime image references until assets are reviewed and approved.

## Folder structure

Runtime image paths are served from `assets/` through Vite publicDir:

```text
assets/images/
  industrial/
  electrical-panels/
  cable-routing/
  automation/
  engineering/
  industries/
  shared/
  ui/

assets/optimized/
```

Folder rules:

- Use `assets/images/engineering/` for consultation, diagnostics, technical review, technicians and engineering workflow.
- Use `assets/images/shared/` only for truly universal reusable CTA/support images.
- Do not create `assets/images/documentary/`.
- Do not create language folders.

## Naming convention

Use this filename format:

```text
{category}-{subject}-{environment}-{index}.jpg
```

Optional extended format:

```text
{category}-{subject}-{environment}-{qualifier}-{index}.jpg
```

Rules:

- Use English-only filenames.
- Use lowercase filenames.
- Use hyphen-separated words.
- Use globally unique base filenames.
- Do not use Bulgarian filenames.
- Avoid page-role words such as `hero`, `card`, `cta`, or `section`.
- Track image role in the register, not in the filename.

## Optimized derivatives rule

For every local PageHero image, optimized files should follow this derivative set:

```text
assets/optimized/{base}-480.avif
assets/optimized/{base}-768.avif
assets/optimized/{base}-1024.avif
assets/optimized/{base}-1600.avif

assets/optimized/{base}-480.webp
assets/optimized/{base}-768.webp
assets/optimized/{base}-1024.webp
assets/optimized/{base}-1600.webp
```

The base filename must be globally unique because optimized derivatives are stored flat under `assets/optimized/`.

## Image register table

| Image ID | File path | Route | Component | Role | Image Type | Style Group | Status | Priority | Alt BG | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| homeHeroIndustrialElectro | /images/industrial/industrial-electrical-infrastructure-homepage-hero-wide-01.png | /bg/ | components/home/Hero.tsx | hero | photographic | industrial | implemented | high | Индустриална електро инфраструктура в производствена среда | Runtime PageHero reference implemented with optimized derivatives available. |
| contactEngineeringConsultation | /images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.png | /bg/kontakti | Contact PageHero | hero | photographic | engineering | implemented | high | Инженерна консултация до електрическо табло в индустриална среда | Runtime PageHero reference implemented with optimized derivatives available. |
| servicesOverviewElectricalWorkshop | /images/industrial/industrial-electrical-workshop-technical-zone-01.png | /bg/uslugi | pages/Services.tsx | hero | photographic | industrial | implemented | high | Индустриална електро работилница с табла и кабелна инфраструктура | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceElectricalPanelsHero | /images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.png | /bg/uslugi/elektricheski-tabla | service detail PageHero | hero | photographic | electrical-panels | implemented | high | Електрическо табло с подредено окабеляване и индустриални компоненти | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceCableRoutesHero | /images/cable-routing/cable-routing-overhead-trays-industrial-hall-02.png | /bg/uslugi/kabelni-traseta | service detail PageHero | hero | photographic | cable-routing | implemented | high | Кабелни трасета и кабелни скари в индустриално хале | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceIndustrialInstallationsHero | /images/industrial/industrial-electrical-installation-production-zone-02.png | /bg/uslugi/industrialni-elektroinstalatsii | service detail PageHero | hero | photographic | industrial | implemented | high | Индустриална електроинсталация в производствен обект | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceAutomationControlHero | /images/automation/automation-plc-control-system-production-line-01.png | /bg/uslugi/avtomatizatsia | service detail PageHero | hero | photographic | automation | implemented | high | PLC автоматизация и контролно табло за индустриален процес | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceLowVoltageInfrastructureHero | /images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.png | /bg/uslugi/nisko-naprezhenie | service detail PageHero | hero | photographic | electrical-panels | implemented | high | Нисковолтова електро инфраструктура и разпределително табло | Runtime PageHero reference implemented with optimized derivatives available. |
| serviceMaintenanceDiagnosticsHero | /images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.png | /bg/uslugi/poddrazhka-i-serviz | service detail PageHero | hero | photographic | engineering | implemented | high | Инженерна диагностика на електрическо табло в индустриална среда | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionsOverviewIndustrialProject | /images/industrial/industrial-electrical-project-planning-production-hall-01.png | /bg/reshenia | pages/Solutions.tsx | hero | photographic | industrial | implemented | high | Индустриален електро проект с табла, трасета и техническо планиране | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionNewProductionSiteHero | /images/industrial/industrial-new-production-site-electrical-infrastructure-01.png | /bg/reshenia/nov-proizvodstven-obekt | solution detail PageHero | hero | photographic | industrial | implemented | high | Нов производствен обект с планирана електро инфраструктура | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionModernizationElectricalSystemHero | /images/engineering/engineering-electrical-system-modernization-technical-room-01.png | /bg/reshenia/modernizatsia-na-elektro-sistema | solution detail PageHero | hero | photographic | engineering | implemented | high | Модернизация на съществуваща индустриална електро система | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionPanelAutomationLineHero | /images/automation/automation-control-panel-technological-line-01.png | /bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii | solution detail PageHero | hero | photographic | automation | implemented | high | Табла и автоматизация за технологична производствена линия | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionCableInfrastructureBaseHero | /images/cable-routing/cable-routing-industrial-base-technical-corridor-01.png | /bg/reshenia/kabelna-infrastruktura-za-baza | solution detail PageHero | hero | photographic | cable-routing | implemented | high | Кабелна инфраструктура за индустриална база | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionServiceExpansionHero | /images/engineering/engineering-service-expansion-electrical-system-01.png | /bg/reshenia/serviz-i-razshiryavane | solution detail PageHero | hero | photographic | engineering | implemented | high | Сервиз и разширяване на индустриална електро система | Runtime PageHero reference implemented with optimized derivatives available. |
| solutionHeightInstallationLiftHero | /images/industrial/industrial-electrical-installation-aerial-lift-warehouse-01.png | /bg/reshenia/elektromontazh-na-visochina-s-vishka | solution detail PageHero | hero | photographic | industrial | implemented | high | Електромонтаж на височина с монтажна вишка в индустриално хале | Runtime PageHero reference implemented with optimized derivatives available. |

## Implementation Phases

Phase 1:
Register approved PageHero source files.

Phase 2:
Generate optimized derivatives for approved PageHero source files:
- 480 AVIF/WebP
- 768 AVIF/WebP
- 1024 AVIF/WebP
- 1600 AVIF/WebP

Phase 3:
Replace PageHero image references in pages/components.

Phase 4:
Update SEO `ogImage` only after visual replacement is stable.
