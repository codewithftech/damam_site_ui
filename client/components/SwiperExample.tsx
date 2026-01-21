import SwiperSlider from "@/components/ui/swiper-slider";

/**
 * Example usage of Swiper Slider component
 * You can use this as a reference or import SwiperSlider directly in your components
 */
export default function SwiperExample() {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880",
      description: "First slide description",
    },
    {
      id: 2,
      title: "Slide 2",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f88c4a1d6e38df6c0666710b2b102bc444ce77e?width=2880",
      description: "Second slide description",
    },
    {
      id: 3,
      title: "Slide 3",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880",
      description: "Third slide description",
    },
  ];

  return (
    <div className="w-full py-12">
      {/* Basic Swiper with Navigation and Autoplay */}
      <SwiperSlider
        navigation={true}
        pagination={{ type: "bullets" }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[400px]"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex items-center justify-center bg-brand-purple/10 rounded-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-purple mb-2">
                {slide.title}
              </h3>
              <p className="text-brand-gray">{slide.description}</p>
            </div>
          </div>
        ))}
      </SwiperSlider>

      {/* Example with Images */}
      <div className="mt-12">
        <SwiperSlider
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-[300px] rounded-lg overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </SwiperSlider>
      </div>
    </div>
  );
}
