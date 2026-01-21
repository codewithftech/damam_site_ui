import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function InvestWithUs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const services = [
    {
      title: "In-Terminal Services",
      description: "Our terminals are designed to elevate every moment of your journey. Our in-terminal services offer convenience, comfort, reliability",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77a377cc3f1fde737734bf3d8fe7bb8f754ef18d?width=750",
    },
    {
      title: "Cargo village",
      description: "Our state-of-the-art Cargo Village serves as a highly efficient central hub for streamlined freight handling and international logistics.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e08255b33d8c9f2bad17eb00eaf9cd58d20451de?width=752",
    },
    {
      title: "Retail & Hospitality",
      description: "Whether you're looking to shop gifts, indulge in dining or grab a bite, our retail and hospitality zones offer it all for every traveler.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c091a3b65da4fa63c8de5d8d22e4a3ccc1d152e5?width=750",
    },
    {
      title: "Retail & Hospitality",
      description: "Whether you're looking to shop gifts, indulge in dining or grab a bite, our retail and hospitality zones offer it all for every traveler.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c091a3b65da4fa63c8de5d8d22e4a3ccc1d152e5?width=750",
    },
  ];

  return (
    <section id="invest" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-tight mb-6">
          <span className="text-brand-purple font-extrabold">INVEST </span>
          <span className="text-brand-gray">WITH US</span>
        </h2>

        {/* Description */}
        <p className="text-brand-gray text-base font-medium leading-6 max-w-[1183px] mb-12">
          Dammam Airports is committed to working with its strategic partners and adding new ones to find mutually beneficial growth opportunities. This may range from the expansion of airport capacity and passenger flow, to the scope and magnitude of business and commercial activity enabled, to the value of investments attracted for both inside and outside the airport.
        </p>

        {/* Service Cards Slider */}
        <div className="relative lg:px-3">
          {/* Custom Navigation Buttons - Desktop Only, Outside Container */}
          <button
            ref={prevRef}
            className="group hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-11 h-11  items-center justify-center   transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-brand-purple transition-colors" />
          </button>
          <button
            ref={nextRef}
            className="group hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-11 h-11  items-center justify-center   transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-brand-purple  transition-colors" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.2}
            loop={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
            }}
            className="invest-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden h-[452px] flex flex-col justify-end p-6 bg-cover bg-center group hover:scale-[1.02] transition-transform"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(96, 73, 140, 0.70) 0%, rgba(28, 21, 80, 0.70) 100%), url('${image}')`,
      }}
    >
      <h3 className="text-white text-[28px] font-bold leading-8 mb-3">
        {title}
      </h3>
      <p className="text-[#FCFCFC] text-base font-medium leading-6">
        {description}
      </p>
    </div>
  );
}
