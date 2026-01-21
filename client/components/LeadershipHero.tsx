export default function LeadershipHero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[535px] lg:h-[812px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880"
          alt="Dammam Airports"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-purple/60">
          <div className="container mx-auto px-4 lg:px-[120px] h-full flex flex-col justify-center">
            <h1
              className="text-white text-[40px] font-extrabold leading-[18px] tracking-[-0.25px] uppercase mb-[88px]"
              style={{ fontWeight: 850 }}
            >
              DAMMAM AIRPORTS
            </h1>
            <p className="text-white text-[22px] lg:text-[24px] font-medium leading-[32px] tracking-[-0.25px] max-w-[343px] lg:max-w-[1014px]">
              A key component of the Kingdom's efforts to improve the air
              transport industry in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#F5F5F5] py-8">
        <div className="container mx-auto px-4 lg:px-[120px]">
          <div className="flex items-center gap-2 text-[20px] font-bold leading-[24px] tracking-[-0.25px]">
            <span className="text-brand-purple">Home</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-brand-purple">About Us</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-[#A799C4]">Leadership</span>
          </div>
        </div>
      </div>
    </>
  );
}
