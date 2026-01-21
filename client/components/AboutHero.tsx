import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AboutHero() {
  const slides = [
    {
      id: 1,
      title: "DAMMAM AIRPORTS",
      description:
        "A key component of the Kingdom’s efforts to improve the air transport industry in Saudi Arabia.",
      // Desktop background (wide)
      imageDesktop:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880",
      // Mobile background (taller crop). Replace with your exact mobile image if different.
      imageMobile:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=1200",
    },
    {
      id: 2,
      title: "DAMMAM AIRPORTS",
      description:
        "A key component of the Kingdom’s efforts to improve the air transport industry in Saudi Arabia.",
      imageDesktop:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880",
      imageMobile:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=1200",
    },
    {
      id: 3,
      title: "DAMMAM AIRPORTS",
      description:
        "A key component of the Kingdom’s efforts to improve the air transport industry in Saudi Arabia.",
      imageDesktop:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880",
      imageMobile:
        "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=1200",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[535px] lg:h-[724px] overflow-hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true, enabled: true }}
          className="about-hero-swiper h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[535px] lg:h-[724px] overflow-hidden">
                {/* Background Image */}
                <picture className="absolute inset-0 h-full block">
                  <source
                    media="(min-width: 1024px)"
                    srcSet={slide.imageDesktop}
                  />
                  <img
                    src={slide.imageMobile}
                    alt={slide.title}
                    className="w-full h-full object-cover object-[60%_80%] lg:object-[50%_50%]"
                  />
                </picture>

                {/* Purple Overlay with Content - rgba(96, 73, 140, 0.60) */}
                <div
                  className="absolute inset-0 h-full flex items-start"
                  style={{ background: "rgba(96, 73, 140, 0.60)" }}
                >
                  <div className="container mx-auto w-full">
                    <div className="max-w-[922px] flex flex-col gap-8 lg:gap-12 pt-8 lg:pt-[220px]">
                      <h1
                        className="text-white text-[44px] leading-[44px] sm:text-3xl lg:text-[40px] font-extrabold lg:leading-[18px] tracking-tight uppercase"
                        style={{ fontWeight: 850 }}
                      >
                        {slide.title}
                      </h1>

                      <p className="text-white text-xl sm:text-lg lg:text-2xl font-medium leading-[28px] sm:leading-relaxed lg:leading-8 tracking-tight max-w-[922px]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
