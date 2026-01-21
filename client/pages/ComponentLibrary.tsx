import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurAirports from "@/components/OurAirports";
import InvestWithUs from "@/components/InvestWithUs";
import VendorPortal from "@/components/VendorPortal";
import Careers from "@/components/Careers";
import MediaCenter from "@/components/MediaCenter";
import ContactUs from "@/components/ContactUs";
import LeadershipHero from "@/components/LeadershipHero";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import ExecutiveManagement from "@/components/ExecutiveManagement";
import CEOMessage from "@/components/CEOMessage";
import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import HistoryTimeline from "@/components/HistoryTimeline";
import VisionMissionValues from "@/components/VisionMissionValues";
import { Separator } from "@/components/ui/separator";

export default function ComponentLibrary() {
  return (
    <div className="w-full min-h-screen bg-brand-bg font-loew">
      {/* Header Component */}
      <section id="header" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Header Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home, About, Leadership pages</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <Header />
        </div>
      </section>

      <Separator className="my-12" />

      {/* Hero Component */}
      <section id="hero" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Hero Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <Hero />
        </div>
      </section>

      <Separator className="my-12" />

      {/* AboutUs Component */}
      <section id="aboutus" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">AboutUs Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <AboutUs />
        </div>
      </section>

      <Separator className="my-12" />

      {/* OurAirports Component */}
      <section id="ourairports" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">OurAirports Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <OurAirports />
        </div>
      </section>

      <Separator className="my-12" />

      {/* InvestWithUs Component */}
      <section id="investwithus" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">InvestWithUs Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <InvestWithUs />
        </div>
      </section>

      <Separator className="my-12" />

      {/* VendorPortal Component */}
      <section id="vendorportal" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">VendorPortal Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <VendorPortal />
        </div>
      </section>

      <Separator className="my-12" />

      {/* Careers Component */}
      <section id="careers" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Careers Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <Careers />
        </div>
      </section>

      <Separator className="my-12" />

      {/* MediaCenter Component */}
      <section id="mediacenter" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">MediaCenter Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <MediaCenter />
        </div>
      </section>

      <Separator className="my-12" />

      {/* ContactUs Component */}
      <section id="contactus" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">ContactUs Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <ContactUs />
        </div>
      </section>

      <Separator className="my-12" />

      {/* About Hero Component */}
      <section id="about-hero" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">About Hero Section</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: About page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <AboutHero />
        </div>
      </section>

      <Separator className="my-12" />

      {/* About Section Component */}
      <section id="about-section" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">About Section Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: About page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <AboutSection />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* History Timeline Component */}
      <section id="history-timeline" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">History Timeline Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: About page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <HistoryTimeline />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Vision Mission Values Component */}
      <section id="vision-mission-values" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Vision Mission Values Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: About page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <VisionMissionValues />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Leadership Hero Component */}
      <section id="leadership-hero" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Leadership Hero Section</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Leadership page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <LeadershipHero />
        </div>
      </section>

      <Separator className="my-12" />

      {/* Board of Directors Component */}
      <section id="board-of-directors" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Board of Directors Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Leadership page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <h2 className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] mb-[132px]">
              <span
                className="font-extrabold text-brand-purple"
                style={{ fontWeight: 800 }}
              >
                Our
              </span>
              <span className="text-brand-gray"> Leadership</span>
            </h2>
            <BoardOfDirectors />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Executive Management Component */}
      <section id="executive-management" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Executive Management Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Leadership page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <ExecutiveManagement />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CEO Message Component */}
      <section id="ceo-message" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">CEO Message Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Leadership page</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden bg-white p-8">
          <div className="container mx-auto px-4 lg:px-[120px]">
            <CEOMessage />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Footer Component */}
      <section id="footer" className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-2xl font-bold text-brand-purple mb-2">Footer Component</h2>
          <p className="text-brand-gray text-sm mb-4">Used in: Home, About, Leadership pages</p>
        </div>
        <div className="border-2 border-dashed border-brand-purple/30 rounded-lg overflow-hidden">
          <Footer />
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-white p-8 rounded-lg shadow-sm mt-12 mb-8">
        <h2 className="text-3xl font-bold text-brand-purple mb-6">Component Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Home Page Components */}
          <div className="border border-brand-purple/20 rounded-lg p-4">
            <h3 className="text-xl font-bold text-brand-purple mb-3">Home Page Components</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>• Header</li>
              <li>• Hero</li>
              <li>• AboutUs</li>
              <li>• OurAirports</li>
              <li>• InvestWithUs</li>
              <li>• VendorPortal</li>
              <li>• Careers</li>
              <li>• MediaCenter</li>
              <li>• ContactUs</li>
              <li>• Footer</li>
            </ul>
          </div>

          {/* About Page Components */}
          <div className="border border-brand-purple/20 rounded-lg p-4">
            <h3 className="text-xl font-bold text-brand-purple mb-3">About Page Components</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>• Header</li>
              <li>• About Hero</li>
              <li>• Breadcrumb</li>
              <li>• About Section</li>
              <li>• History Timeline</li>
              <li>• Vision & Mission</li>
              <li>• Values Grid</li>
              <li>• Footer</li>
            </ul>
          </div>

          {/* Leadership Page Components */}
          <div className="border border-brand-purple/20 rounded-lg p-4">
            <h3 className="text-xl font-bold text-brand-purple mb-3">Leadership Page Components</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li>• Header</li>
              <li>• Leadership Hero</li>
              <li>• Breadcrumb</li>
              <li>• Board of Directors</li>
              <li>• Executive Management</li>
              <li>• CEO Message</li>
              <li>• Footer</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
