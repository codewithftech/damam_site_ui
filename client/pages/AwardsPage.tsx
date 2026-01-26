import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Breadcrumbv1 from "@/components/Breadcrumbv1";
import MilestoneAwardsSection, {
  type MilestoneAward,
} from "@/components/awards/MilestoneAwardsSection";
import CertificationsSection, {
  type CertificationItem,
} from "@/components/awards/CertificationsSection";

export default function AwardsPage() {
  const milestoneAwards: MilestoneAward[] = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8c31cd9fe553af5c61add5c4d04ded474f2871b0?width=1170",
      title: "ACI Level 3 Customer Experience Accreditation",
      description:
        "In September 2024 KFIA was granted Level 3 Customer Experience Accreditation by Airports Council International (ACI), recognizing our commitment to improving passenger satisfaction and service experience through innovative approaches and staff training.",
      year: "2024",
      organization: "Airports Council International",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e3544461349775532d65296602d318bcf5f34a86?width=446",
      title: "Skytrax Regional Recognition",
      description:
        "1st place as the best regional airport in the Middle East according to Skytrax Index 2022.",
      year: "2022",
      organization: "",
      type: "small",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a2a366e310ec4bceed6d18769f6287830664acb3?width=446",
      title: "3-Star Airport Certification",
      description:
        "Certified as a 3-Star Regional Airport by Skytrax based on comprehensive evaluation.",
      year: "2023",
      organization: "",
      type: "small",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a606f43c33185627c1f9821d8d3483e6840ce1cb?width=446",
      title: "Carbon Accreditation",
      description:
        "Joined the Airport Carbon Accreditation program at Level 1 for environmental sustainability.",
      year: "2024",
      organization: "",
      type: "small",
    },
  ];

  const certifications: CertificationItem[] = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef941b8e983bd63a002bc0027bc669260a40632f?width=436",
      title: "World Awards Organization",
      description:
        "The Dammam Airports Company won four global sustainability awards for its efforts in environmental sustainability, artificial intelligence, sustainable technologies, and achieving net-zero goals.",
      year: "2024",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6039f9f73cf5230812a032cd16e99687bdb8802a?width=402",
      title: "Skytrax World Airport Awards",
      description:
        "Dammam's King Fahd International Airport was recognized as the second-best regional airport in the Middle East and ranked eighth overall in the region.",
      year: "2022",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/450a53619fff4c8defb28ab8f7dba13cc589d106?width=670",
      title: "Sustainability Focus",
      description:
        "The Dammam Airports Company has shown a commitment to sustainability, earning specific awards for its initiatives and strategies.",
      year: "2023",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2d3cef2f82fe7b0a60a8ceb4925087a46f2a77e8?width=950",
      title: "World's Largest Airport",
      description:
        "King Fahd International Airport is the world's largest airport by land area of 776 square kilometers, which is a significant architectural and logistical achievement.",
      year: "2024",
      type: "large",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />
      <AboutHero />
      {/* Breadcrumb */}
      <Breadcrumbv1 /> 

      {/* Main Content */}
      <div className="container mx-auto   py-12 lg:py-[108px]">
        {/* Page Title */}
        <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-16 lg:mb-[132px]">
          <span className="font-extrabold text-brand-purple">Awards </span>
          <span className="text-brand-gray">& Achievements</span>
        </h2>

        <MilestoneAwardsSection awards={milestoneAwards} />
        <CertificationsSection certifications={certifications} />
      </div>

      <Footer />
    </div>
  );
}
