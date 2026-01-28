import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function SustainabilityPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const environmentalInitiatives = [
    {
      id: "million-tree",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fc160dfe2e35f6abc8c4d649c1301f75c7685311?width=1170",
      title: "Million Tree Mission",
      description: (
        <>
          The airport is partnering with <strong>NetZero</strong> to launch the{" "}
          <strong>Green Airport Initiative</strong>, which aims to plant one
          million trees and empower passengers to participate in carbon
          offsetting efforts.
        </>
      ),
    },
    {
      id: "digital-afforestation",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/81a7062eacd95c280875678d5d5c7699d49cde53?width=1170",
      title: "Digital Afforestation",
      description: (
        <>
          In collaboration with <strong>Nesma & Partners</strong> and{" "}
          <strong>NetZero</strong>, the airport is deploying 4,000{" "}
          <strong>smart trees</strong> in a digital afforestation project to
          boost environmental impact and vegetation cover.
        </>
      ),
    },
    {
      id: "solar-energy",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96cc9efade198f4681df7141496add5bcd07e235?width=1170",
      title: "Solar Energy Implementation",
      description: (
        <>
          Installation of <strong>50MW</strong> solar panel systems across
          terminal rooftops and parking structures, generating clean energy for
          airport operations.
        </>
      ),
    },
    {
      id: "waste-to-energy",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a9bc2cd24ab785ce200ef8a7cad5c2bf1a495afe?width=1170",
      title: "Waste-to-Energy Program",
      description: (
        <>
          Converting airport waste into renewable energy through advanced biogas
          systems, reducing landfill dependency by <strong>80%</strong>.
        </>
      ),
    },
  ];

  const communityEngagement = [
    {
      id: "local-partnerships",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c4732bc484bf7e019cbba174d686d81341652248?width=758",
      title: "Local Community Partnerships",
      description:
        "Collaborating with 50+ local organizations to create employment opportunities and support community development projects in the Eastern Province.",
    },
    {
      id: "environmental-education",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d0fa32e7d975fc3e2e15f7ab99b722a04872d733?width=758",
      title: "Environmental Education Programs",
      description:
        "School outreach programs educating 10,000+ students annually about sustainability, climate change, and environmental conservation.",
    },
    {
      id: "volunteer-green-corps",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b2a8665b5426cfb6bda62e59c0200a27abb13268?width=758",
      title: "Volunteer Green Corps",
      description:
        "Employee volunteer program engaging 500+ staff members in monthly environmental cleanup activities and tree planting events.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % communityEngagement.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + communityEngagement.length) % communityEngagement.length,
    );
  };

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-12 lg:mb-[68px]">
          <span className="font-extrabold text-brand-purple">
            Sustainability
          </span>
          <span className="text-brand-gray"> & CSR</span>
        </h1>

        {/* Environmental Initiatives Section */}
        <div className="mb-12 lg:mb-[122px]">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8 lg:mb-[72px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Environmental{" "}
              </span>
              <span className="text-brand-gray">Initiatives</span>
            </h2>
          </div>

          {/* Environmental Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px]">
            {environmentalInitiatives.map((initiative) => (
              <div
                key={initiative.id}
                className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden"
              >
                {/* Card Image */}
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-[180px] lg:h-[220px] object-cover"
                />

                {/* Card Content */}
                <div className="p-6 lg:p-[30px]">
                  {/* Title */}
                  <h3 className="text-brand-purple text-[24px] lg:text-[28px] font-bold leading-[24px] tracking-[-0.48px] lg:tracking-[-0.56px] mb-4 lg:mb-[26px] text-left lg:text-left">
                    {initiative.title}
                  </h3>

                  {/* Description */}
                  <div className="text-brand-gray text-[18px] lg:text-[20px] font-medium leading-[27px] lg:leading-[30px] mb-6 lg:mb-[30px] h-[81px] lg:h-[120px]">
                    {initiative.description}
                  </div>

                  {/* Learn More Button */}
                  <div className="flex justify-end">
                    <button className="inline-flex items-center gap-[10px] text-brand-gray hover:text-brand-purple transition-colors group">
                      <span className="text-[18px] lg:text-[20px] font-medium leading-[28px] tracking-[-0.36px] lg:tracking-[-0.4px]">
                        Learn More
                      </span>
                      <div className="w-[41px] h-[41px] flex items-center justify-center">
                        <ChevronRight
                          className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                          strokeWidth={2}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Engagement Section */}
        <div className="relative">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8 lg:mb-[72px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[28px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.56px]">
              <span className="font-extrabold text-brand-purple">
                Community{" "}
              </span>
              <span className="text-brand-gray">Engagement</span>
            </h2>
          </div>

          {/* Desktop: All 3 Cards Visible */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-[30px] max-w-[1200px]">
            {communityEngagement.map((engagement) => (
              <div
                key={engagement.id}
                className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden"
              >
                {/* Card Image */}
                <img
                  src={engagement.image}
                  alt={engagement.title}
                  className="w-full h-[189px] object-cover"
                />

                {/* Card Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-brand-purple text-[16px] font-bold leading-normal tracking-[-0.32px] mb-4">
                    {engagement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-gray text-[14px] font-medium leading-[24px] h-[96px]">
                    {engagement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {communityEngagement.map((engagement) => (
                  <div
                    key={engagement.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
                      {/* Card Image */}
                      <img
                        src={engagement.image}
                        alt={engagement.title}
                        className="w-full h-[189px] object-cover"
                      />

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Title */}
                        <h3 className="text-brand-purple text-[16px] font-bold leading-normal tracking-[-0.32px] mb-4">
                          {engagement.title}
                        </h3>

                        {/* Description */}
                        <p className="text-brand-gray text-[14px] font-medium leading-[24px]">
                          {engagement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Mobile */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-[35px] h-[35px] flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Previous slide"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.93934 15.9393C9.35355 16.5251 9.35355 17.4749 9.93934 18.0607L19.4853 27.6066C20.0711 28.1924 21.0208 28.1924 21.6066 27.6066C22.1924 27.0208 22.1924 26.0711 21.6066 25.4853L13.1213 17L21.6066 8.51472C22.1924 7.92893 22.1924 6.97919 21.6066 6.3934C21.0208 5.80761 20.0711 5.80761 19.4853 6.3934L9.93934 15.9393ZM12 17V15.5H11V17V18.5H12V17Z"
                    fill="#1C1550"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-[35px] h-[35px] flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Next slide"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0607 15.9393C24.6464 16.5251 24.6464 17.4749 24.0607 18.0607L14.5147 27.6066C13.9289 28.1924 12.9792 28.1924 12.3934 27.6066C11.8076 27.0208 11.8076 26.0711 12.3934 25.4853L20.8787 17L12.3934 8.51472C11.8076 7.92893 11.8076 6.97919 12.3934 6.3934C12.9792 5.80761 13.9289 5.80761 14.5147 6.3934L24.0607 15.9393ZM22 17V15.5H23V17V18.5H22V17Z"
                    fill="#1C1550"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              className="absolute left-[-44px] top-[calc(50%+36px)] w-[35px] h-[35px] flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Previous slide"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.93934 15.9393C9.35355 16.5251 9.35355 17.4749 9.93934 18.0607L19.4853 27.6066C20.0711 28.1924 21.0208 28.1924 21.6066 27.6066C22.1924 27.0208 22.1924 26.0711 21.6066 25.4853L13.1213 17L21.6066 8.51472C22.1924 7.92893 22.1924 6.97919 21.6066 6.3934C21.0208 5.80761 20.0711 5.80761 19.4853 6.3934L9.93934 15.9393ZM12 17V15.5H11V17V18.5H12V17Z"
                  fill="#1C1550"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-44px] top-[calc(50%+36px)] w-[35px] h-[35px] flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Next slide"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0607 15.9393C24.6464 16.5251 24.6464 17.4749 24.0607 18.0607L14.5147 27.6066C13.9289 28.1924 12.9792 28.1924 12.3934 27.6066C11.8076 27.0208 11.8076 26.0711 12.3934 25.4853L20.8787 17L12.3934 8.51472C11.8076 7.92893 11.8076 6.97919 12.3934 6.3934C12.9792 5.80761 13.9289 5.80761 14.5147 6.3934L24.0607 15.9393ZM22 17V15.5H23V17V18.5H22V17Z"
                  fill="#1C1550"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
