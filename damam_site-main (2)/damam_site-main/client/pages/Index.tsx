import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurAirports from "../components/OurAirports";
import InvestWithUs from "../components/InvestWithUs";
import VendorPortal from "../components/VendorPortal";
import Careers from "../components/Careers";
import MediaCenter from "../components/MediaCenter";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-brand-bg font-loew">
      <Header />
      <Hero />
      <AboutUs />
      <OurAirports />
      <InvestWithUs />
      <VendorPortal />
      <Careers />
      <MediaCenter />
      <ContactUs />
      <Footer />
    </div>
  );
}
