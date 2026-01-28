import { ChevronRight } from "lucide-react";

export default function AboutUs() {
  const cards = [
    {
      title: "About Dammam Airports",
      description:
        "Learn about our history, mission, our values and the vital role we play.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3176fd8f4638d3db52796e268327da49f9705fb5?width=1170",
    },
    {
      title: "Leadership",
      description:
        "Meet the visionary leaders who guide our organization towards excellence and innovation.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4ba162ad9e6b9d61c32cce10f490324ed0c0e5ae?width=1170",
    },
    {
      title: "Sustainability & CSR",
      description:
        "Discover our commitment to environmental responsibility and community engagement.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3de1b6d6ca342a6720f3475b7e3babd51d1cb427?width=1170",
    },
    {
      title: "Awards & Achievements",
      description:
        "Explore the recognition and milestones that highlight our dedication to excellence.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/edc386794573d292b80eaf213cbf9cdcc883e0bc?width=1170",
    },
  ];

  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="w-full px-4 lg:px-[120px] py-[100px] lg:pt-[108px] lg:pb-[108px]">
        {/* Heading */}
        <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-4 lg:mb-[72px] text-center lg:text-left">
          <span className="font-extrabold text-brand-purple">ABOUT </span>
          <span className="text-brand-gray">US</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-[30px] lg:gap-y-[30px] max-w-[343px] lg:max-w-[1200px] mx-auto lg:mx-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[16px] lg:rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden flex flex-col lg:h-[471px]"
            >
              {/* Image */}
              <div className="w-full h-[244px] lg:h-[248px] overflow-hidden flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 lg:p-[30px] flex flex-col flex-grow">
                {/* Title and Description */}
                <div className="flex-grow">
                  <h3 className="text-brand-purple text-[22px] lg:text-[28px] font-extrabold lg:font-bold leading-[26px] lg:leading-[28px] tracking-[-0.25px] lg:tracking-[-0.56px] mb-3 lg:mb-[14px]">
                    {card.title}
                  </h3>
                  <p className="text-brand-gray text-[16px] font-medium leading-[24px] tracking-[-0.32px]">
                    {card.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center justify-end gap-[10px] mt-4 lg:mt-[30px]">
                  <span className="text-brand-gray text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
                    Learn More
                  </span>
                  <div className="w-[41px] h-[41px] flex items-center justify-center">
                    <ChevronRight
                      className="w-6 h-6 text-brand-gray"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
