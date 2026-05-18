import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from "react";
import { BrowserRouter, Navigate, Route, Routes, StaticRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

type PageComponent = ComponentType<Record<string, never>>;
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
} satisfies Record<string, () => Promise<PageModule>>;

type PageKey = keyof typeof pageLoaders;
export type SsrPages = Partial<Record<PageKey, PageComponent>>;

const clientPages = Object.fromEntries(
  (Object.entries(pageLoaders) as Array<[PageKey, () => Promise<PageModule>]>).map(([key, loader]) => [key, lazy(loader)])
) as Record<PageKey, LazyExoticComponent<PageComponent>>;

const routePageKeys = {
  "/bg": "home",
  "/bg/": "home",
  "/bg/uslugi": "services",
  "/bg/reshenia": "solutions",
  "/bg/reshenia/nov-proizvodstven-obekt": "newProductionSiteSolution",
  "/bg/reshenia/modernizatsia-na-elektro-sistema": "electricalSystemModernizationSolution",
  "/bg/reshenia/kabelna-infrastruktura-za-baza": "cableInfrastructureBaseSolution",
  "/bg/reshenia/serviz-i-razshiryavane": "serviceExpansionSolution",
  "/bg/reshenia/elektromontazh-na-visochina-s-vishka": "heightInstallationSolution",
  "/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii": "panelAutomationLineSolution",
  "/bg/uslugi/elektricheski-tabla": "electricPanels",
  "/bg/uslugi/kabelni-traseta": "cableRoutes",
  "/bg/uslugi/industrialni-elektroinstalatsii": "industrialElectricalInstallations",
  "/bg/uslugi/avtomatizatsia": "automation",
  "/bg/uslugi/nisko-naprezhenie": "lowVoltage",
  "/bg/uslugi/poddrazhka-i-serviz": "maintenanceService",
  "/bg/za-nas": "about",
  "/bg/industrii": "industries",
  "/bg/industrii/hvp": "hvpIndustry",
  "/bg/industrii/zarnoprerabotka": "zarnoprerabotkaIndustry",
  "/bg/industrii/melnitsi": "melnitsiIndustry",
  "/bg/industrii/agro": "agroIndustry",
  "/bg/industrii/logistika": "logistikaIndustry",
  "/bg/industrii/proizvodstveni-predpriyatiya": "proizvodstveniPredpriyatiyaIndustry",
  "/bg/kontakti": "contact",
  "/bg/politika-za-poveritelnost": "privacyPolicy",
  "/bg/politika-za-biskvitki": "cookiePolicy",
  "/bg/usloviya-za-polzvane": "termsOfUse",
  "/404": "notFound",
} satisfies Record<string, PageKey>;

export const loadSsrPagesForPath = async (path: string): Promise<SsrPages> => {
  const normalizedPath = path.length > 1 ? path.replace(/\/$/, "") : path;
  const pageKey = routePageKeys[path] ?? routePageKeys[normalizedPath] ?? "notFound";
  const module = await pageLoaders[pageKey]();

  return { [pageKey]: module.default };
};

interface AppProps {
  ssrPath?: string;
  ssrPages?: SsrPages;
}

const AppRoutes = ({ ssrPages = {} }: { ssrPages?: SsrPages }) => {
  const page = (key: PageKey) => {
    const Component = ssrPages[key] ?? clientPages[key];
    return <Component />;
  };

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/bg" element={page("home")} />
          <Route path="/bg/uslugi" element={page("services")} />
          <Route path="/bg/reshenia" element={page("solutions")} />
          <Route path="/bg/reshenia/nov-proizvodstven-obekt" element={page("newProductionSiteSolution")} />
          <Route path="/bg/reshenia/modernizatsia-na-elektro-sistema" element={page("electricalSystemModernizationSolution")} />
          <Route path="/bg/reshenia/kabelna-infrastruktura-za-baza" element={page("cableInfrastructureBaseSolution")} />
          <Route path="/bg/reshenia/serviz-i-razshiryavane" element={page("serviceExpansionSolution")} />
          <Route path="/bg/reshenia/elektromontazh-na-visochina-s-vishka" element={page("heightInstallationSolution")} />
          <Route path="/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii" element={page("panelAutomationLineSolution")} />
          <Route path="/bg/uslugi/elektricheski-tabla" element={page("electricPanels")} />
          <Route path="/bg/uslugi/kabelni-traseta" element={page("cableRoutes")} />
          <Route path="/bg/uslugi/industrialni-elektroinstalatsii" element={page("industrialElectricalInstallations")} />
          <Route path="/bg/uslugi/avtomatizatsia" element={page("automation")} />
          <Route path="/bg/uslugi/nisko-naprezhenie" element={page("lowVoltage")} />
          <Route path="/bg/uslugi/poddrazhka-i-serviz" element={page("maintenanceService")} />
          <Route path="/bg/za-nas" element={page("about")} />
          <Route path="/bg/industrii" element={page("industries")} />
          <Route path="/bg/industrii/hvp" element={page("hvpIndustry")} />
          <Route path="/bg/industrii/zarnoprerabotka" element={page("zarnoprerabotkaIndustry")} />
          <Route path="/bg/industrii/melnitsi" element={page("melnitsiIndustry")} />
          <Route path="/bg/industrii/agro" element={page("agroIndustry")} />
          <Route path="/bg/industrii/logistika" element={page("logistikaIndustry")} />
          <Route path="/bg/industrii/proizvodstveni-predpriyatiya" element={page("proizvodstveniPredpriyatiyaIndustry")} />
          <Route path="/bg/kontakti" element={page("contact")} />
          <Route path="/bg/politika-za-poveritelnost" element={page("privacyPolicy")} />
          <Route path="/bg/politika-za-biskvitki" element={page("cookiePolicy")} />
          <Route path="/bg/usloviya-za-polzvane" element={page("termsOfUse")} />
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
