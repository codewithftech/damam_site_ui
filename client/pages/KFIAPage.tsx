import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import KFIAHero from "@/components/kfia/KFIAHero";
import KFIAStats from "@/components/kfia/KFIAStats";
import KFIADestinations from "@/components/kfia/KFIADestinations";
import KFIAAirlines from "@/components/kfia/KFIAAirlines";
import KFIAMap from "@/components/kfia/KFIAMap";
import type { TabKey } from "@/components/kfia/types";
import AboutHero from "@/components/AboutHero";
import Breadcrumbv1 from "@/components/Breadcrumbv1";

export default function KFIAPage() {
  const [destinationsTab, setDestinationsTab] = useState<
    TabKey
  >("domestic");
  const [airlinesTab, setAirlinesTab] = useState<TabKey>("domestic");

  const domesticDestinations = [
    "Jeddah",
    "Riyadh",
    "Al-Baha",
    "Abha",
    "Madinah",
    "Gassim",
    "Hail",
    "Taif",
    "Yanbu",
    "Jazan",
    "Al Ula",
    "Neom Bay",
    "Nejran",
    "Tabuk",
    "Bisha",
  ];

  const domesticAirlines = [
    {
      name: "Saudi Arabian Airlines",
      nameAr: "الخطوط الجوية العربية السعودية",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/bb8ace069c356568533e70686fd5e45ecdd940b5?width=100",
    },
    {
      name: "Flyadeal",
      nameAr: "طيران أديل",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/417a791cb0d079c9f8eeec30817695a16b6a31f8?width=122",
    },
    {
      name: "fly Nas",
      nameAr: "طيران فلاي ناس",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/flynas-logo.svg?width=122",
    },
    {
      name: "Nesma Airlines",
      nameAr: "نسما للطيران",
      logo: "https://api.builder.io/api/v1/image/assets/TEMP/bec4cdf55c023f01e31ceae8e014a2e5dc030727?width=116",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />
      <AboutHero />
      {/* Breadcrumb */}
      <Breadcrumbv1 />
      {/* Hero Section */}
      <div className="container mx-auto  py-8 lg:py-[108px]">
        <KFIAHero />
        <KFIAStats />
        <KFIADestinations
          tab={destinationsTab}
          onTabChange={setDestinationsTab}
          domesticDestinations={domesticDestinations}
        />
        <KFIAAirlines
          tab={airlinesTab}
          onTabChange={setAirlinesTab}
          domesticAirlines={domesticAirlines}
        />
        <KFIAMap />
      </div>

      <Footer />
    </div>
  );
}
