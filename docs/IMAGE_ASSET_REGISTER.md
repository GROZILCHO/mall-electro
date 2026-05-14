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
| homeHeroIndustrialElectro | /images/industrial/industrial-electrical-infrastructure-production-hall-01.jpg | /bg/ | components/home/Hero.tsx | hero | photographic | industrial | planned | high | Индустриална електро инфраструктура в производствена среда | Future replacement for external/generic hero visual |
| contactEngineeringConsultation | /images/engineering/engineering-consultation-control-cabinet-industrial-hall-01.jpg | /bg/kontakti | Contact PageHero | hero | photographic | engineering | planned | high | Инженерна консултация до електрическо табло в индустриална среда | Replace external fallback/contact hero |
| servicesOverviewElectricalWorkshop | /images/industrial/industrial-electrical-workshop-technical-zone-01.jpg | /bg/uslugi | pages/Services.tsx | hero | photographic | industrial | planned | high | Индустриална електро работилница с табла и кабелна инфраструктура | Services overview |
| serviceElectricalPanelsHero | /images/electrical-panels/electrical-panels-control-cabinet-technical-room-01.jpg | /bg/uslugi/elektricheski-tabla | service detail PageHero | hero | photographic | electrical-panels | planned | high | Електрическо табло с подредено окабеляване и индустриални компоненти | Service detail hero |
| serviceCableRoutesHero | /images/cable-routing/cable-routing-overhead-trays-industrial-hall-01.jpg | /bg/uslugi/kabelni-traseta | service detail PageHero | hero | photographic | cable-routing | planned | high | Кабелни трасета и кабелни скари в индустриално хале | Service detail hero |
| serviceIndustrialInstallationsHero | /images/industrial/industrial-electrical-installation-production-zone-01.jpg | /bg/uslugi/industrialni-elektroinstalatsii | service detail PageHero | hero | photographic | industrial | planned | high | Индустриална електроинсталация в производствен обект | Service detail hero |
| serviceAutomationControlHero | /images/automation/automation-plc-control-system-production-line-01.jpg | /bg/uslugi/avtomatizatsia | service detail PageHero | hero | photographic | automation | planned | high | PLC автоматизация и контролно табло за индустриален процес | Service detail hero |
| serviceLowVoltageInfrastructureHero | /images/electrical-panels/electrical-panels-low-voltage-distribution-technical-room-01.jpg | /bg/uslugi/nisko-naprezhenie | service detail PageHero | hero | photographic | electrical-panels | planned | high | Нисковолтова електро инфраструктура и разпределително табло | Service detail hero |
| serviceMaintenanceDiagnosticsHero | /images/engineering/engineering-maintenance-diagnostics-control-cabinet-01.jpg | /bg/uslugi/poddrazhka-i-serviz | service detail PageHero | hero | photographic | engineering | planned | high | Инженерна диагностика на електрическо табло в индустриална среда | Service detail hero |
| solutionsOverviewIndustrialProject | /images/industrial/industrial-electrical-project-planning-production-hall-01.jpg | /bg/reshenia | pages/Solutions.tsx | hero | photographic | industrial | planned | high | Индустриален електро проект с табла, трасета и техническо планиране | Solutions overview |
| solutionNewProductionSiteHero | /images/industrial/industrial-new-production-site-electrical-infrastructure-01.jpg | /bg/reshenia/nov-proizvodstven-obekt | solution detail PageHero | hero | photographic | industrial | planned | high | Нов производствен обект с планирана електро инфраструктура | Solution detail hero |
| solutionModernizationElectricalSystemHero | /images/engineering/engineering-electrical-system-modernization-technical-room-01.jpg | /bg/reshenia/modernizatsia-na-elektro-sistema | solution detail PageHero | hero | photographic | engineering | planned | high | Модернизация на съществуваща индустриална електро система | Solution detail hero |
| solutionPanelAutomationLineHero | /images/automation/automation-control-panel-technological-line-01.jpg | /bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii | solution detail PageHero | hero | photographic | automation | planned | high | Табла и автоматизация за технологична производствена линия | Solution detail hero |
| solutionCableInfrastructureBaseHero | /images/cable-routing/cable-routing-industrial-base-technical-corridor-01.jpg | /bg/reshenia/kabelna-infrastruktura-za-baza | solution detail PageHero | hero | photographic | cable-routing | planned | high | Кабелна инфраструктура за индустриална база | Solution detail hero |
| solutionServiceExpansionHero | /images/engineering/engineering-service-expansion-electrical-system-01.jpg | /bg/reshenia/serviz-i-razshiryavane | solution detail PageHero | hero | photographic | engineering | planned | high | Сервиз и разширяване на индустриална електро система | Solution detail hero |
| solutionHeightInstallationLiftHero | /images/industrial/industrial-electrical-installation-aerial-lift-warehouse-01.jpg | /bg/reshenia/elektromontazh-na-visochina-s-vishka | solution detail PageHero | hero | photographic | industrial | planned | high | Електромонтаж на височина с монтажна вишка в индустриално хале | Solution detail hero |
