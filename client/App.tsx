import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import LeadershipPage from "./pages/LeadershipPage";
import ComponentLibrary from "./pages/ComponentLibrary";
import NotFound from "./pages/NotFound";
import AboutPostSingle from "./pages/AboutPostSingle";
import AwardsPage from "./pages/AwardsPage";
import KFIAPage from "./pages/KFIAPage";
import OurAirportsPage from "./pages/OurAirportsPage";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-post-single" element={<AboutPostSingle />} />
            
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/component-library" element={<ComponentLibrary />} />
            <Route path="/awards" element={<AwardsPage />} />
          <Route path="/our-airports" element={<OurAirportsPage />} />
          <Route path="/airports/kfia" element={<KFIAPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
