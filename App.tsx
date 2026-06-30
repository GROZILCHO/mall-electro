import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from "react";
import { BrowserRouter, Navigate, Route, Routes, StaticRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { bgRoutePageKeys, bgRuntimeRoutes } from "./data/i18n/runtimeRoutes";
import type { RuntimePageKey } from "./data/i18n/types";

type PageComponent = ComponentType<{ locale?: "bg" | "en" }>;
type PageModule = { default: PageComponent };

const pageLoaders = {
  home: () => import("./pages/Home"),
  about: () => import("./pages/About"),
  services: () => import("./pages/Services"),
  solutions: () => import("./pages/Solutions"),
  panelAutomationLineSolution: () => import("./pages/solutions/PanelAutomationLineSolution"),
  newProductionSiteSolution: () => import("./pages/solutions/NewProductionSiteSolution"),
  electricalSystemModernizationSolution: () => import("./pages/solutions/ElectricalSystemModernizationSolution"),
  cableInfrastructureBaseSolution: () => import("./pages/solutions/CableInfrastructureBaseSolution"),
  serviceExpansionSolution: () => import("./pages/solutions/ServiceExpansionSolution"),
  heightInstallationSolution: () => import("./pages/solutions/HeightInstallationSolution"),
  electricPanels: () => import("./pages/services/ElectricPanels"),
  cableRoutes: () => import("./pages/services/CableRoutes"),
  industrialElectricalInstallations: () => import("./pages/services/IndustrialElectricalInstallations"),
  automation: () => import("./pages/services/Automation"),
  lowVoltage: () => import("./pages/services/LowVoltage"),
  maintenanceService: () => import("./pages/services/MaintenanceService"),
  industries: () => import("./pages/Industries"),
  hvpIndustry: () => import("./pages/industries/HvpIndustry"),
  zarnoprerabotkaIndustry: () => import("./pages/industries/ZarnoprerabotkaIndustry"),
  melnitsiIndustry: () => import("./pages/industries/MelnitsiIndustry"),
  agroIndustry: () => import("./pages/industries/AgroIndustry"),
  logistikaIndustry: () => import("./pages/industries/LogistikaIndustry"),
  proizvodstveniPredpriyatiyaIndustry: () => import("./pages/industries/ProizvodstveniPredpriyatiyaIndustry"),
  contact: () => import("./pages/Contact"),
  privacyPolicy: () => import("./pages/legal/PrivacyPolicy"),
  cookiePolicy: () => import("./pages/legal/CookiePolicy"),
  termsOfUse: () => import("./pages/legal/TermsOfUse"),
  notFound: () => import("./pages/NotFound"),
} satisfies Record<RuntimePageKey, () => Promise<PageModule>>;

type PageKey = keyof typeof pageLoaders;
export type SsrPages = Partial<Record<PageKey, PageComponent>>;

const clientPages = Object.fromEntries(
  (Object.entries(pageLoaders) as Array<[PageKey, () => Promise<PageModule>]>).map(([key, loader]) => [key, lazy(loader)])
) as Record<PageKey, LazyExoticComponent<PageComponent>>;

export const loadSsrPagesForPath = async (path: string): Promise<SsrPages> => {
  const normalizedPath = path.length > 1 ? path.replace(/\/$/, "") : path;
  const pageKey = normalizedPath === "/en" ? "home" : bgRoutePageKeys[path] ?? bgRoutePageKeys[normalizedPath] ?? "notFound";
  const module = await pageLoaders[pageKey]();

  return { [pageKey]: module.default };
};

interface AppProps {
  ssrPath?: string;
  ssrPages?: SsrPages;
}

const AppRoutes = ({ ssrPages = {} }: { ssrPages?: SsrPages }) => {
  const page = (key: PageKey, props: { locale?: "bg" | "en" } = {}) => {
    const Component = ssrPages[key] ?? clientPages[key];
    return <Component {...props} />;
  };

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          {bgRuntimeRoutes.map((route) => (
            <Route key={route.routeKey} path={route.path} element={page(route.pageKey)} />
          ))}
          <Route path="/en/" element={page("home", { locale: "en" })} />
          <Route path="/" element={<Navigate to="/bg/" replace />} />
          <Route path="/services" element={<Navigate to="/bg/uslugi" replace />} />
          <Route path="/about" element={<Navigate to="/bg/za-nas" replace />} />
          <Route path="/industries" element={<Navigate to="/bg/industrii" replace />} />
          <Route path="/contact" element={<Navigate to="/bg/kontakti" replace />} />
          <Route path="*" element={page("notFound")} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default function App({ ssrPath, ssrPages }: AppProps) {
  if (ssrPath) {
    return (
      <StaticRouter location={ssrPath}>
        <AppRoutes ssrPages={ssrPages} />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
