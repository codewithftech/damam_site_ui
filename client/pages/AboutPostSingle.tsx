import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Breadcrumbv1 from "@/components/Breadcrumbv1";
import AboutPostSingleIntro from "@/components/about-post-single/AboutPostSingleIntro";
import HistoryTimeline from "@/components/HistoryTimeline";
import VisionMissionValues from "@/components/VisionMissionValues";

export default function AboutPostSingle() {
  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      <AboutHero />

      {/* Breadcrumb */}
      <Breadcrumbv1 />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 py-[100px]">
        <AboutPostSingleIntro />
        <HistoryTimeline />
        <VisionMissionValues />
      </div>

      <Footer />
    </div>
  );
}

