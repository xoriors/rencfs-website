import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import FeaturesPage from "@/react-app/pages/Features";
import InstallationPage from "@/react-app/pages/Installation";
import DocumentationPage from "@/react-app/pages/Documentation";
import SecurityPage from "@/react-app/pages/Security";
import PerformancePage from "@/react-app/pages/Performance";
import CommunityPage from "@/react-app/pages/Community";
import DevelopmentPage from "@/react-app/pages/Development";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/installation" element={<InstallationPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </Router>
  );
}
