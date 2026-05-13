import { BrowserRouter, Navigate, Route, Routes, StaticRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import PanelAutomationLineSolution from "./pages/solutions/PanelAutomationLineSolution";
import ElectricPanels from "./pages/services/ElectricPanels";
import CableRoutes from "./pages/services/CableRoutes";
import IndustrialElectricalInstallations from "./pages/services/IndustrialElectricalInstallations";
import Automation from "./pages/services/Automation";
import LowVoltage from "./pages/services/LowVoltage";
import MaintenanceService from "./pages/services/MaintenanceService";
import Industries from "./pages/Industries";
import HvpIndustry from "./pages/industries/HvpIndustry";
import ZarnoprerabotkaIndustry from "./pages/industries/ZarnoprerabotkaIndustry";
import MelnitsiIndustry from "./pages/industries/MelnitsiIndustry";
import AgroIndustry from "./pages/industries/AgroIndustry";
import LogistikaIndustry from "./pages/industries/LogistikaIndustry";
import ProizvodstveniPredpriyatiyaIndustry from "./pages/industries/ProizvodstveniPredpriyatiyaIndustry";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import TermsOfUse from "./pages/legal/TermsOfUse";
import NotFound from "./pages/NotFound";

interface AppProps {
  ssrPath?: string;
}

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/bg" element={<Home />} />
      <Route path="/bg/uslugi" element={<Services />} />
      <Route path="/bg/reshenia" element={<Solutions />} />
      <Route path="/bg/reshenia/tabla-i-avtomatizatsia-za-tehnologichni-linii" element={<PanelAutomationLineSolution />} />
      <Route path="/bg/uslugi/elektricheski-tabla" element={<ElectricPanels />} />
      <Route path="/bg/uslugi/kabelni-traseta" element={<CableRoutes />} />
      <Route path="/bg/uslugi/industrialni-elektroinstalatsii" element={<IndustrialElectricalInstallations />} />
      <Route path="/bg/uslugi/avtomatizatsia" element={<Automation />} />
      <Route path="/bg/uslugi/nisko-naprezhenie" element={<LowVoltage />} />
      <Route path="/bg/uslugi/poddrazhka-i-serviz" element={<MaintenanceService />} />
      <Route path="/bg/za-nas" element={<About />} />
      <Route path="/bg/industrii" element={<Industries />} />
      <Route path="/bg/industrii/hvp" element={<HvpIndustry />} />
      <Route path="/bg/industrii/zarnoprerabotka" element={<ZarnoprerabotkaIndustry />} />
      <Route path="/bg/industrii/melnitsi" element={<MelnitsiIndustry />} />
      <Route path="/bg/industrii/agro" element={<AgroIndustry />} />
      <Route path="/bg/industrii/logistika" element={<LogistikaIndustry />} />
      <Route path="/bg/industrii/proizvodstveni-predpriyatiya" element={<ProizvodstveniPredpriyatiyaIndustry />} />
      <Route path="/bg/kontakti" element={<Contact />} />
      <Route path="/bg/politika-za-poveritelnost" element={<PrivacyPolicy />} />
      <Route path="/bg/politika-za-biskvitki" element={<CookiePolicy />} />
      <Route path="/bg/usloviya-za-polzvane" element={<TermsOfUse />} />
      <Route path="/" element={<Navigate to="/bg/" replace />} />
      <Route path="/services" element={<Navigate to="/bg/uslugi" replace />} />
      <Route path="/about" element={<Navigate to="/bg/za-nas" replace />} />
      <Route path="/industries" element={<Navigate to="/bg/industrii" replace />} />
      <Route path="/contact" element={<Navigate to="/bg/kontakti" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default function App({ ssrPath }: AppProps) {
  if (ssrPath) {
    return (
      <StaticRouter location={ssrPath}>
        <AppRoutes />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
