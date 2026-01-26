import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OurAirportsList from "@/components/OurAirportsList";
import Breadcrumbv1 from "@/components/Breadcrumbv1";
import AboutHero from "@/components/AboutHero";

export default function OurAirportsPage() {
  const airports = [
    {
      id: "kfia",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/46bb9ff7c6d75b3e3cfd95ce79bbbcb882a0f2c7?width=840",
      titleEn: "King Fahd International Airport",
      titleAr: "مطار الملك فهد الدولي",
      description:
        "On July 1, 2017, the operation and management of King Fahd International Airport were entrusted to Dammam Airports.",
      operationalSince: "July 1, 2017",
      passengersCount: "12.6M",
      passengersText: "passengers",
      passengersSubtext: "annually",
    },
    {
      id: "hof",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/af6a8b02c69411e7381f26ca06118002ce1f0512?width=840",
      titleEn: "Al Ahsa International Airport (HOF)",
      titleAr: "مطار الأحساء الدولي",
      description:
        "On May 1, 2021, the operation and management of Al-Ahsa International Airport were assigned to Dammam Airports.",
      operationalSince: "May 1, 2021",
      passengersCount: "1M",
      passengersText: "passengers",
      passengersSubtext: "annually (April 2024)",
    },
    {
      id: "aqi",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/297b2d8c98e714589f3a9165822a05d7176ea257?width=840",
      titleEn: "Al Qaisumah International Airport (AQI)",
      titleAr: "مطار القيصومة الدولي",
      description:
        "On May 1, 2021, the operation and management of Al-Qaisumah International Airport were assigned to Dammam Airports.",
      operationalSince: "May 1, 2021",
      passengersCount: "700K",
      passengersText: "passengers",
      passengersSubtext: "annually (October 2022 )",
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
        <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] text-center mb-12 lg:mb-[132px]">
          <span className="font-extrabold text-brand-purple">OUR </span>
          <span className="text-brand-gray">AIRPORTS</span>
        </h2>

        {/* Airports List */}
        <OurAirportsList airports={airports} />
      </div>

      <Footer />
    </div>
  );
}
