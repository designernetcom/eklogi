import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TechnologyTransformation from "./pages/TechnologyTransformation";
import UnlockingPowerOfData from "./pages/UnlockingPowerOfData";
import RiskFinanceTechnology from "./pages/RiskFinanceTechnology";
import PublicCloudAdoptionExpertise from "./pages/PublicCloudAdoptionExpertise";
import TechnologyCapabilityDevelopment from "./pages/TechnologyCapabilityDevelopment";
import FractionalTechnologyLeadership from "./pages/FractionalTechnologyLeadership";
import TechnologyRiskCompliance from "./pages/TechnologyRiskCompliance";
import FutureProofingIndianBanks from "./pages/FutureProofingIndianBanks";
import DevOpsInBanking from "./pages/DevOpsInBanking";
import WhyIndianBanksMustEmbrace from "./pages/WhyIndianBanksMustEmbrace";
import UnlockingTheFutureOfFinancial from "./pages/UnlockingTheFutureOfFinancial";
import FromRuleBasedSystemsToAIPoweredFraudDetection from "./pages/FromRuleBasedSystemsToAIPoweredFraudDetection";

// Optional: Create a 404 component
const NotFound = () => (
  <div className="container text-center py-5">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/unlocking-the-power-of-data"
          element={<UnlockingPowerOfData />}
        />
        <Route
          path="/technology-transformation"
          element={<TechnologyTransformation />}
        />
        <Route
          path="/risk-and-finance-technology"
          element={<RiskFinanceTechnology />}
        />
        <Route
          path="/public-cloud-adoption-expertise"
          element={<PublicCloudAdoptionExpertise />}
        />
        <Route
          path="/technology-capability-development"
          element={<TechnologyCapabilityDevelopment />}
        />
        <Route
          path="/technology-risk-and-compliance"
          element={<TechnologyRiskCompliance />}
        />
        <Route
          path="/fractional-technology-leadership"
          element={<FractionalTechnologyLeadership />}
        />
        <Route
          path="/future-proofing-indian-banks"
          element={<FutureProofingIndianBanks />}
        />
        <Route path="/devOps-in-banking" element={<DevOpsInBanking />} />
        <Route
          path="/why-indian-banks-must-embrace-full-stack-observability"
          element={<WhyIndianBanksMustEmbrace />}
        />
        <Route
          path="/unlocking-the-future-of-financial-insights"
          element={<UnlockingTheFutureOfFinancial />}
        />
        <Route
          path="/unlocking-the-future-of-financial-insights"
          element={<UnlockingTheFutureOfFinancial />}
        />
        <Route
          path="/from-rule-based-systems-to-AI-Powered-Fraud-Detection"
          element={<FromRuleBasedSystemsToAIPoweredFraudDetection />}
        />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Routes>
      {/* Move Sidebar inside main if it's part of the content layout */}
      <Sidebar />
    </main>
    <Footer />
  </Router>
);

export default App;
