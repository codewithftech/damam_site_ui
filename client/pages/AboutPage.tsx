import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbv1 from "@/components/Breadcrumbv1";
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";

export default function AboutPage() {
  const timelineItems = [
    {
      year: "1946",
      title: "Dhahran Air Base",
      active: true,
      icon: "airport",
    },
    {
      year: "1983",
      title: "Construction Start",
      active: false,
      icon: "building",
    },
    {
      year: "1990",
      title: "Opening Year",
      active: false,
      icon: "award",
    },
    {
      year: "2017",
      title: "Vision 2030",
      active: false,
      icon: "target",
    },
    {
      year: "2025",
      title: "Current Status",
      active: false,
      icon: "plane",
    },
  ];

  const values = [
    {
      title: "INTEGRITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "integrity",
    },
    {
      title: "INNOVATION",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "innovation",
    },
    {
      title: "OWNERSHIP",
      description:
        "We take responsibility for our actions and are accountable for our results.",
      icon: "ownership",
    },
    {
      title: "SUSTAINABILITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "sustainability",
    },
    {
      title: "AGILITY",
      description:
        "We adapt quickly to change and respond swiftly to new opportunities.",
      icon: "agility",
    },
    {
      title: "CUSTOMER CENTRICITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "customer",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />


      <AboutHero />

      {/* Breadcrumb */}
      <Breadcrumbv1 />

     <AboutUs/>

      <Footer />
    </div>
  );
}
