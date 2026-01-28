import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import LeadershipPage from "./pages/LeadershipPage";
import AwardsPage from "./pages/AwardsPage";
import OurAirportsPage from "./pages/OurAirportsPage";
import KFIAPage from "./pages/KFIAPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import AeroOpportunitiesPage from "./pages/AeroOpportunitiesPage";
import AirlineDevelopmentPage from "./pages/AirlineDevelopmentPage";
import AeroConcessionsPage from "./pages/AeroConcessionsPage";
import CargoLogisticsPage from "./pages/CargoLogisticsPage";
import InvestmentGuidelinesPage from "./pages/InvestmentGuidelinesPage";
import ContactInvestmentTeamPage from "./pages/ContactInvestmentTeamPage";
import VendorProfilePage from "./pages/VendorProfilePage";
import VendorRegistrationPage from "./pages/VendorRegistrationPage";
import ProcurementGuidelinesPage from "./pages/ProcurementGuidelinesPage";
import ContactProcurementPage from "./pages/ContactProcurementPage";
import InternshipGraduatePage from "./pages/InternshipGraduatePage";
import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";
import PublicationsPage from "./pages/PublicationsPage";
import MediaKitPage from "./pages/MediaKitPage";
import MediaContactPage from "./pages/MediaContactPage";
import ContactUsPage from "./pages/ContactUsPage";
import ComponentsLibPage from "./pages/ComponentsLibPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/our-airports" element={<OurAirportsPage />} />
          <Route path="/airports/kfia" element={<KFIAPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route
            path="/aero-opportunities"
            element={<AeroOpportunitiesPage />}
          />
          <Route
            path="/airline-development"
            element={<AirlineDevelopmentPage />}
          />
          <Route path="/aero-concessions" element={<AeroConcessionsPage />} />
          <Route path="/cargo-logistics" element={<CargoLogisticsPage />} />
          <Route
            path="/investment-guidelines"
            element={<InvestmentGuidelinesPage />}
          />
          <Route
            path="/contact-investment-team"
            element={<ContactInvestmentTeamPage />}
          />
          <Route path="/vendor-profile" element={<VendorProfilePage />} />
          <Route
            path="/vendor-registration"
            element={<VendorRegistrationPage />}
          />
          <Route
            path="/procurement-guidelines"
            element={<ProcurementGuidelinesPage />}
          />
          <Route
            path="/contact-procurement"
            element={<ContactProcurementPage />}
          />
          <Route
            path="/internship-graduate"
            element={<InternshipGraduatePage />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/media-kit" element={<MediaKitPage />} />
          <Route path="/media-contact" element={<MediaContactPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/components-lib" element={<ComponentsLibPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
