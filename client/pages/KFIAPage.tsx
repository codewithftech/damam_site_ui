import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, MapPin, Calendar, Users, Plane } from "lucide-react";
import { useState } from "react";

export default function KFIAPage() {
  const [destinationsTab, setDestinationsTab] = useState<
    "domestic" | "international"
  >("domestic");
  const [airlinesTab, setAirlinesTab] = useState<"domestic" | "international">(
    "domestic",
  );

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

      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-[120px] py-8 lg:py-[108px]">
        {/* Title and Image */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[72px] mb-12 lg:mb-[72px]">
          {/* Airport Image */}
          <div className="w-full lg:w-[1202px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/21be270597f270a5bd7a1e016cc5c50444c519a1?width=2404"
              alt="King Fahd International Airport"
              className="w-full h-[250px] lg:h-[546px] object-cover rounded-[20px]"
            />
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-[32px] lg:text-[48px] font-extrabold leading-[40px] lg:leading-[60px] tracking-tight mb-2">
            <span className="text-brand-purple">
              King Fahd International Airport{" "}
            </span>
            <span className="text-brand-gray">/DAMMAM</span>
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span className="text-[14px] font-medium">
                Visit Official Website
              </span>
            </button>
          </div>
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] max-w-[900px]">
            King Fahd International Airport (KFIA), located in Dammam, Saudi
            Arabia, is one of the world's largest airports by land area,
            covering{" "}
            <span className="font-bold text-brand-purple">
              776 square kilometers
            </span>
            . Situated just{" "}
            <span className="font-bold text-brand-purple">31 km</span> northwest
            of downtown Dammam, the airport serves as the primary international
            gateway to the Eastern Province, including cities such as Dhahran,
            Al Khobar, Jubail, and Qatif.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-[108px]">
          {/* Stat 1 - Opened */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
              </div>
              <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
                1990
              </div>
            </div>
            <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
              Opened
              <br />
              (commercial operations)
            </div>
          </div>

          {/* Stat 2 - Passengers */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
              </div>
              <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
                10M+
              </div>
            </div>
            <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
              Annual Passengers Traffic
            </div>
          </div>

          {/* Stat 3 - Destinations */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
              </div>
              <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
                60+
              </div>
            </div>
            <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
              Destinations worldwide
            </div>
          </div>

          {/* Stat 4 - Airlines */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
                <Plane className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
              </div>
              <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
                37+
              </div>
            </div>
            <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
              Airlines
            </div>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="mb-12 lg:mb-[72px]">
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] mb-4 lg:mb-6">
              Destinations
            </h2>
            <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
              King Fahd International Airport (DMM) connects the Eastern
              Province of Saudi Arabia with over{" "}
              <span className="font-extrabold text-brand-purple">
                61 destinations worldwide
              </span>
              , offering both domestic and international routes. From regional
              hubs in the Middle East to major cities across Asia, Africa, and
              Europe, our growing network ensures seamless travel options for
              business and leisure passengers alike.
            </p>

            {/* Tabs */}
            <div className="inline-flex p-[3px] items-center gap-[3px] rounded-[10px] bg-white mb-6 lg:mb-8">
              <button
                onClick={() => setDestinationsTab("domestic")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
                  destinationsTab === "domestic"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setDestinationsTab("international")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
                  destinationsTab === "international"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                International
              </button>
            </div>

            {/* Destinations Grid */}
            {destinationsTab === "domestic" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {domesticDestinations.map((destination, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-[15px] border border-[#EDEDED] bg-white p-4 h-[56px]"
                  >
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1b90cc85f7c794f052c906fa6288ba5718678d40?width=164"
                      alt="Saudi Arabia Flag"
                      className="w-[82px] h-[56px] object-cover rounded-l-[15px]"
                    />
                    <span className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[24px]">
                      {destination}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {destinationsTab === "international" && (
              <div className="text-center py-12 text-brand-gray">
                <p className="text-[16px] font-medium">
                  International destinations coming soon...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Airlines Section */}
        <div className="mb-12 lg:mb-[72px]">
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
            <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] mb-4 lg:mb-6">
              Airlines
            </h2>
            <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
              King Fahd International Airport (DMM) is home to a wide range of
              international and regional airlines, offering passengers access to
              dozens of destinations across the Middle East, Asia, Africa, and
              Europe. With more than{" "}
              <span className="font-extrabold text-brand-purple">
                37 airlines in operation
              </span>
              , travelers can enjoy reliable service, diverse travel options,
              and seamless global connectivity.
            </p>

            {/* Tabs */}
            <div className="inline-flex p-[3px] items-center gap-[3px] rounded-[10px] bg-white mb-6 lg:mb-8">
              <button
                onClick={() => setAirlinesTab("domestic")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
                  airlinesTab === "domestic"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setAirlinesTab("international")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
                  airlinesTab === "international"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                International
              </button>
            </div>

            {/* Airlines Grid */}
            {airlinesTab === "domestic" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {domesticAirlines.map((airline, index) => (
                  <div
                    key={index}
                    className="rounded-[15px] border border-[#EDEDED] bg-white p-4 h-[81px] flex items-center gap-4"
                  >
                    <div className="w-[61px] h-[61px] rounded-[5px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src={airline.logo}
                        alt={airline.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-brand-purple text-[12px] lg:text-[14px] font-extrabold leading-[24px] truncate">
                        {airline.name}
                      </div>
                      <div className="text-brand-gray text-[10px] lg:text-[12px] font-medium leading-[24px] truncate">
                        {airline.nameAr}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {airlinesTab === "international" && (
              <div className="text-center py-12 text-brand-gray">
                <p className="text-[16px] font-medium">
                  International airlines coming soon...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-[300px] lg:h-[481px] rounded-[20px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b4158e25523e76a691a6e7cd169f34117c151d01?width=2400"
            alt="Airport Location Map"
            className="w-full h-full object-cover"
          />
          {/* Location Pin */}
          <svg
            className="absolute"
            style={{
              left: "50%",
              top: "30%",
              transform: "translate(-50%, -50%)",
            }}
            width="23"
            height="36"
            viewBox="0 0 23 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_727_8579)">
              <path
                d="M11.4991 35.1658C16.439 35.1658 20.4436 33.1019 20.4436 30.556C20.4436 28.0101 16.439 25.9463 11.4991 25.9463C6.55925 25.9463 2.55469 28.0101 2.55469 30.556C2.55469 33.1019 6.55925 35.1658 11.4991 35.1658Z"
                fill="url(#paint0_radial_727_8579)"
              />
              <path
                d="M23 11.8537C23 16.7444 17.25 23.7073 12.5648 30.2927C11.943 31.1707 11.057 31.1707 10.4352 30.2927C5.75 23.7073 0 16.8761 0 11.8537C0 5.30341 5.14519 0 11.5 0C17.8548 0 23 5.30341 23 11.8537Z"
                fill="#60498C"
              />
              <path
                opacity="0.25"
                d="M11.5 0C5.14519 0 0 5.30341 0 11.8537C0 16.8761 5.75 23.7073 10.4352 30.2927C11.0741 31.1883 11.943 31.1707 12.5648 30.2927C17.25 23.7073 23 16.7444 23 11.8537C23 5.30341 17.8548 0 11.5 0ZM11.5 0.878049C17.3948 0.878049 22.1481 5.77756 22.1481 11.8537C22.1481 13.961 20.8704 16.841 18.9281 19.9668C16.9944 23.0927 14.2344 26.4644 11.8748 29.7746C11.7044 30.0117 11.5937 30.1346 11.5 30.24C11.4063 30.1346 11.2956 30.0117 11.1252 29.7746C8.75704 26.4556 6.31222 23.1015 4.2763 19.9932C2.23185 16.8849 0.851852 14.0049 0.851852 11.8537C0.851852 5.77756 5.60519 0.878049 11.5 0.878049Z"
                fill="#60498C"
              />
              <path
                d="M11.4996 16.683C14.0872 16.683 16.1848 14.5208 16.1848 11.8537C16.1848 9.18655 14.0872 7.02441 11.4996 7.02441C8.91208 7.02441 6.81445 9.18655 6.81445 11.8537C6.81445 14.5208 8.91208 16.683 11.4996 16.683Z"
                fill="white"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_727_8579"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11.4991 30.556) scale(8.94444 4.60976)"
              >
                <stop offset="0.1" stopOpacity="0.4" />
                <stop offset="1" stopOpacity="0.05" />
              </radialGradient>
              <clipPath id="clip0_727_8579">
                <rect width="23" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {/* View Google Maps Button */}
          <button className="absolute bottom-6 right-6 lg:bottom-[30px] lg:right-[30px] inline-flex items-center gap-2 px-4 lg:px-[18px] py-2 lg:py-3 rounded-[10px] bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors">
            <span className="text-[14px] lg:text-[16px] font-medium leading-[28px] tracking-tight">
              View Google Maps
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
