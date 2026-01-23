import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AwardsPage() {
  const milestoneAwards = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8c31cd9fe553af5c61add5c4d04ded474f2871b0?width=1170",
      title: "ACI Level 3 Customer Experience Accreditation",
      description:
        "In September 2024 KFIA was granted Level 3 Customer Experience Accreditation by Airports Council International (ACI), recognizing our commitment to improving passenger satisfaction and service experience through innovative approaches and staff training.",
      year: "2024",
      organization: "Airports Council International",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e3544461349775532d65296602d318bcf5f34a86?width=446",
      title: "Skytrax Regional Recognition",
      description:
        "1st place as the best regional airport in the Middle East according to Skytrax Index 2022.",
      year: "2022",
      organization: "",
      type: "small",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a2a366e310ec4bceed6d18769f6287830664acb3?width=446",
      title: "3-Star Airport Certification",
      description:
        "Certified as a 3-Star Regional Airport by Skytrax based on comprehensive evaluation.",
      year: "2023",
      organization: "",
      type: "small",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a606f43c33185627c1f9821d8d3483e6840ce1cb?width=446",
      title: "Carbon Accreditation",
      description:
        "Joined the Airport Carbon Accreditation program at Level 1 for environmental sustainability.",
      year: "2024",
      organization: "",
      type: "small",
    },
  ];

  const certifications = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ef941b8e983bd63a002bc0027bc669260a40632f?width=436",
      title: "World Awards Organization",
      description:
        "The Dammam Airports Company won four global sustainability awards for its efforts in environmental sustainability, artificial intelligence, sustainable technologies, and achieving net-zero goals.",
      year: "2024",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6039f9f73cf5230812a032cd16e99687bdb8802a?width=402",
      title: "Skytrax World Airport Awards",
      description:
        "Dammam's King Fahd International Airport was recognized as the second-best regional airport in the Middle East and ranked eighth overall in the region.",
      year: "2022",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/450a53619fff4c8defb28ab8f7dba13cc589d106?width=670",
      title: "Sustainability Focus",
      description:
        "The Dammam Airports Company has shown a commitment to sustainability, earning specific awards for its initiatives and strategies.",
      year: "2023",
      type: "large",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2d3cef2f82fe7b0a60a8ceb4925087a46f2a77e8?width=950",
      title: "World's Largest Airport",
      description:
        "King Fahd International Airport is the world's largest airport by land area of 776 square kilometers, which is a significant architectural and logistical achievement.",
      year: "2024",
      type: "large",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

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
              className="text-white text-[32px] lg:text-[40px] font-extrabold leading-[36px] lg:leading-[40px] tracking-tight uppercase mb-4 lg:mb-[88px]"
              style={{ fontWeight: 850 }}
            >
              DAMMAM AIRPORTS
            </h1>
            <p className="text-white text-[20px] lg:text-[24px] font-medium leading-[28px] lg:leading-[32px] tracking-tight max-w-[343px] lg:max-w-[1014px]">
              A key component of the Kingdom's efforts to improve the air
              transport industry in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#F5F5F5] py-4 lg:py-8">
        <div className="container mx-auto px-4 lg:px-[120px]">
          <div className="flex items-center gap-2 text-[14px] lg:text-[20px] font-bold leading-[24px] tracking-tight">
            <span className="text-brand-purple">Home</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-brand-purple">About Us</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-[#A799C4]">Awards & Achievements</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-16 lg:mb-[132px]">
          <span className="font-extrabold text-brand-purple">Awards </span>
          <span className="text-brand-gray">& Achievements</span>
        </h2>

        {/* Milestone Awards Section */}
        <div className="mb-16 lg:mb-[112px]">
          <div className="flex items-center gap-3 mb-8 lg:mb-[106px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h3 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Milestone{" "}
              </span>
              <span className="text-brand-gray">Awards</span>
            </h3>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-8 lg:mb-[72px]">
            {/* Large Award Card */}
            <div className="lg:col-span-1 rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden">
              <img
                src={milestoneAwards[0].image}
                alt={milestoneAwards[0].title}
                className="w-full h-[200px] lg:h-[355px] object-cover rounded-t-[20px]"
              />
              <div className="p-5 lg:p-6">
                <h4 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] lg:leading-[28px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-[38px]">
                  {milestoneAwards[0].title}
                </h4>
                <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[96px]">
                  {milestoneAwards[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
                    <span className="text-brand-purple text-[16px] lg:text-[20px] font-medium leading-[150%]">
                      {milestoneAwards[0].year}
                    </span>
                  </div>
                  <span className="text-brand-purple text-[12px] lg:text-[14px] font-bold leading-[150%]">
                    {milestoneAwards[0].organization}
                  </span>
                </div>
              </div>
            </div>

            {/* Small Award Cards Column */}
            <div className="flex flex-col gap-6 lg:gap-[30px]">
              {milestoneAwards.slice(1, 4).map((award, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-start"
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full lg:w-[223px] h-[155px] object-cover rounded-t-[20px] lg:rounded-tr-none lg:rounded-l-[20px] flex-shrink-0"
                  />
                  <div className="p-5 flex-1">
                    <h4 className="text-brand-purple text-[14px] lg:text-[16px] font-extrabold leading-[24px] lg:leading-[28px] tracking-[-0.28px] lg:tracking-[-0.32px] mb-3 lg:mb-[10px]">
                      {award.title}
                    </h4>
                    <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[21px]">
                      {award.description}
                    </p>
                    <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
                      <span className="text-brand-purple text-[16px] lg:text-[20px] font-medium leading-[150%]">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="inline-flex h-[40px] lg:h-[32px] px-6 lg:px-[24px] justify-center items-center gap-2 rounded-[10px] bg-brand-purple hover:bg-brand-purple/90 transition-colors">
              <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
                View All
              </span>
            </button>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12 lg:mb-0">
          <div className="flex items-center gap-3 mb-8 lg:mb-[106px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h3 className="text-[24px] lg:text-[29px] font-extrabold leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px] text-brand-purple">
              Certifications
            </h3>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-8 lg:mb-[72px]">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden"
              >
                <div className="flex items-center justify-center p-8 lg:p-12 bg-[#F6F6F6] h-[200px] lg:h-[287px]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-5 lg:p-8">
                  <h4 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[20px] lg:leading-[24px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-[44px]">
                    {cert.title}
                  </h4>
                  <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[98px] min-h-[48px] lg:min-h-[72px]">
                    {cert.description}
                  </p>
                  <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
                    <span className="text-brand-purple text-[16px] lg:text-[20px] font-medium leading-[150%]">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="inline-flex h-[40px] lg:h-[32px] px-6 lg:px-[24px] justify-center items-center gap-2 rounded-[10px] bg-brand-purple hover:bg-brand-purple/90 transition-colors">
              <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
                Load More
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
