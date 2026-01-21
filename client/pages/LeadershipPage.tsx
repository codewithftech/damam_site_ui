import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeadershipPage() {
  const boardMembers = [
    {
      name: "Sufyan Zamil Al-Zamil",
      title: "Chairman",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5a320df00020ec56117fd42bef3e1b80c04f4f9d?width=800",
      isLarge: true,
    },
    {
      name: "Raed Hassan Al-Idrissi",
      title: "Vice Chairman",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4b8f9f7d926e0b40bb376bbeb2b9d8b54206043a?width=560",
    },
    {
      name: "Hamad Mohammad Al-Rugaib",
      title: "Board Member",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ff8ec87dcc2533ffad1c3db666059caea158e5c4?width=560",
    },
    {
      name: "Abdulaziz Abdulkarim Al-Khereiji",
      title: "Board Member",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5a4cacadb7575e23653a2fc9687a0ef2267ddcd8?width=560",
    },
    {
      name: "Ahmed Sulaiman Al-Muhaidib",
      title: "Board Member",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f0e8e974c34dc7735e52f33982160f016428a5a9?width=560",
    },
  ];

  const executiveTeam = [
    {
      name: "Sufyan Zamil Al-Zamil",
      title: "Chairman",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3498128c06d0de58d0d57d6313e126895835cc31?width=800",
      isLarge: true,
    },
    {
      name: "Hisham Hakami",
      title: "Manager 1",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/57b3bb3cf32b5ce3e81d994d9aa386f96ea8c947?width=560",
    },
    {
      name: "Mansour F. al-Otaibi",
      title: "Manager 2",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e75756da5e85d2f94ea50ec3990aa20fa422c214?width=560",
    },
    {
      name: "Fahad AlHarbi",
      title: "Manager 3",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/7b3cdb898a18575f722e80c7479c394293c6c9b8?width=560",
    },
    {
      name: "Bader AlBader",
      title: "General Manager",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6e4a74b0b9755c8db3be8888a5cbd5e31b9c8ec5?width=560",
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

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-[108px]">
        {/* Our Leadership Title */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] mb-[132px]">
          <span
            className="font-extrabold text-brand-purple"
            style={{ fontWeight: 800 }}
          >
            Our
          </span>
          <span className="text-brand-gray"> Leadership</span>
        </h2>

        {/* Board of Directors */}
        <div className="mb-[238px]">
          <div className="flex items-center gap-4 mb-[106px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h3 className="text-[29px] font-medium leading-[24px] tracking-[-0.58px]">
              <span className="font-bold text-brand-purple">Board of </span>
              <span className="text-brand-gray">Directors</span>
            </h3>
          </div>

          {/* Board Members Grid */}
          <div className="w-full max-w-[1201px]">
            {/* Chairman - Centered Large Card */}
            <div className="flex justify-center mb-[72px]">
              <div className="w-[400px] h-[400px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
                <img
                  src={boardMembers[0].image}
                  alt={boardMembers[0].name}
                  className="w-full h-[312px] object-cover rounded-t-[20px]"
                />
                <div className="p-3">
                  <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                    {boardMembers[0].name}
                  </div>
                  <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                    {boardMembers[0].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Board Members - 4 Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[27px]">
              {boardMembers.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="w-full max-w-[280px] h-[280px] rounded-[20px] border-[0.7px] border-[#EDEDED] bg-[#F5F5F5] overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[218px] object-cover rounded-t-[20px]"
                  />
                  <div className="p-[9px]">
                    <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                      {member.name}
                    </div>
                    <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                      {member.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Management */}
        <div className="mb-[102px]">
          <div className="flex items-center gap-4 mb-[106px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h3 className="text-[29px] font-medium leading-[24px] tracking-[-0.58px]">
              <span
                className="font-extrabold text-brand-purple"
                style={{ fontWeight: 800 }}
              >
                Executive
              </span>
              <span className="text-brand-gray"> Management</span>
            </h3>
          </div>

          {/* Executive Team Grid */}
          <div className="w-full max-w-[1201px]">
            {/* CEO - Centered Large Card */}
            <div className="flex justify-center mb-[72px]">
              <div className="w-[400px] h-[400px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
                <img
                  src={executiveTeam[0].image}
                  alt={executiveTeam[0].name}
                  className="w-full h-[312px] object-cover rounded-t-[20px]"
                />
                <div className="p-3">
                  <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                    {executiveTeam[0].name}
                  </div>
                  <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                    {executiveTeam[0].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Team - 4 Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[27px]">
              {executiveTeam.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="w-full max-w-[280px] h-[280px] rounded-[20px] border-[0.7px] border-[#EDEDED] bg-[#F5F5F5] overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[218px] object-cover rounded-t-[20px]"
                  />
                  <div className="p-[9px]">
                    <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                      {member.name}
                    </div>
                    <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                      {member.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mb-[100px]">
          <h2 className="text-[48px] font-medium leading-[60px] tracking-[-0.96px] mb-[132px]">
            <span
              className="font-extrabold text-brand-purple"
              style={{ fontWeight: 800 }}
            >
              CEO
            </span>
            <span className="text-brand-gray"> Message</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px]">
            {/* CEO Photo */}
            <div className="flex-shrink-0">
              <div className="w-full lg:w-[279px] h-[308px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5f60b422a87b9894552015f27076fa2fe3458c5?width=558"
                  alt="Mohammed Ali Al Hassany"
                  className="w-full h-[249px] object-cover rounded-t-[20px]"
                />
                <div className="p-2">
                  <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                    Mohammed Ali Al Hassany
                  </div>
                  <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                    CEO
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 max-w-[871px] rounded-[20px] bg-white py-10">
              <div className="relative">
                {/* Opening Quote */}
                <div
                  className="text-brand-purple text-[64px] font-extrabold leading-[60px] tracking-[-1.28px] mb-[-12px]"
                  style={{ fontWeight: 800 }}
                >
                  "
                </div>

                {/* Message Text */}
                <div className="space-y-6">
                  <p className="text-brand-gray text-[16px] leading-[24px]">
                    <span className="font-medium">
                      We kicked off Dammam Airports operations on{" "}
                    </span>
                    <span
                      className="font-extrabold"
                      style={{ fontWeight: 800 }}
                    >
                      July 1, 2017
                    </span>
                    <span className="font-medium">
                      {" "}
                      as part of a broader initiative to corporatize Saudi
                      Arabia's airports. Since that time, we have been on a
                      mission to achieve some very ambitious goals.
                    </span>
                  </p>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
                    We have identified a number of key projects that will serve
                    as prerequisites or catalysts to success, namely:
                  </p>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
                    The refurbishment and improvement of KFIA's infrastructure
                  </p>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
                    Enhancing the travel experience by upgrading the level of
                    services on offer
                  </p>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
                    Most importantly, the hiring and training of a vibrant,
                    skilled, and highly-productive workforce comprised of the
                    Saudi Nationals who will be empowered to lead the airport
                    industry into the future.
                  </p>

                  <p className="text-brand-gray text-[16px] leading-[24px]">
                    <span className="font-medium">
                      On behalf of all my colleagues at Dammam Airports, I would
                      like to emphasize our commitment to making every effort
                      towards achieving the goals set out in the
                    </span>
                    <span
                      className="font-extrabold"
                      style={{ fontWeight: 800 }}
                    >
                      {" "}
                      Kingdom's Vision 2030.
                    </span>
                  </p>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
                    In order to achieve this aim, we must join hands with
                    ourstrategic partners in the government and private sectors
                    in the implementation of our strategic and development
                    plans.
                  </p>

                  <p className="text-brand-gray text-[16px] leading-[24px]">
                    <span className="font-medium">
                      Dammam Airports is proud of its national team spirit, and
                      we aspire to become tomorrow's leaders of the air
                      transport industry, under the leadership of the{" "}
                    </span>
                    <span
                      className="font-extrabold"
                      style={{ fontWeight: 800 }}
                    >
                      Custodian of the Two Holy Mosques, and His Royal Highness
                      The Crown Prince.
                    </span>
                  </p>
                </div>

                {/* Signature Line */}
                <div className="mt-[70px] pt-6 border-t border-[#DFDFDF]">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-0 border-t-2 border-brand-purple"></div>
                    <div className="text-brand-gray text-[16px] font-medium leading-[24px]">
                      Mohammed Ali Al Hassany, <span className="ml-1">CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
