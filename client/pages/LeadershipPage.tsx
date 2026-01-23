import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Breadcrumbv1 from "@/components/Breadcrumbv1";
import BoardOfDirectors from "@/components/BoardOfDirectors";
import ExecutiveManagement from "@/components/ExecutiveManagement";
import CEOMessage from "@/components/CEOMessage";

export default function LeadershipPage() {
  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

    
      <AboutHero />
         
         {/* Breadcrumb */}
         <Breadcrumbv1 />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-[108px]">
        {/* Our Leadership Title */}
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

        <ExecutiveManagement />

        <CEOMessage />
      </div>

      <Footer />
    </div>
  );
}
