import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Breadcrumbv1 from "@/components/Breadcrumbv1";

type Leader = {
  name: string;
  title: string;
  image: string;
  isLarge?: boolean;
};

function LeaderCard({
  leader,
  variant,
}: {
  leader: Leader;
  variant: "horizontal" | "largeVertical" | "smallVertical";
}) {
  if (variant === "horizontal") {
    return (
      <div className="w-full rounded-[20px] border border-[#EDEDED]  bg-[#F5F5F5] overflow-hidden flex items-stretch">
        {/* Image (flush left, same radius as card) */}
        <div className="w-[116px] h-[116px] bg-[#F5F5F5] flex-shrink-0">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0 px-6 py-5 flex flex-col justify-center">
          <div className="text-brand-purple text-[18px] font-bold leading-[22px]">
            {leader.name}
          </div>
          <div className="text-brand-gray text-[14px] font-medium leading-[20px] mt-2">
            {leader.title}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "largeVertical") {
    return (
      <div className="w-[400px] h-[400px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-[312px] object-cover rounded-t-[20px]"
        />
        <div className="p-3">
          <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
            {leader.name}
          </div>
          <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
            {leader.title}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[280px] h-[280px] rounded-[20px] border-[0.7px] border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-full h-[218px] object-cover rounded-t-[20px]"
      />
      <div className="p-[9px]">
        <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
          {leader.name}
        </div>
        <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
          {leader.title}
        </div>
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  const boardMembers: Leader[] = [
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

  const executiveTeam: Leader[] = [
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

  const ceoMessageLeader: Leader = {
    name: "Mohammed Ali Al Hassany",
    title: "CEO",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f5f60b422a87b9894552015f27076fa2fe3458c5?width=558",
  };

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

    
      <AboutHero />
         
         {/* Breadcrumb */}
         <Breadcrumbv1 />

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
            {/* Mobile/Tablet (compact horizontal cards) */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {boardMembers.map((member) => (
                <LeaderCard
                  key={`${member.name}-${member.title}`}
                  leader={member}
                  variant="horizontal"
                />
              ))}
            </div>

            {/* Desktop (as-is layout) */}
            <div className="hidden lg:block">
              {/* Chairman - Centered Large Card */}
              <div className="flex justify-center mb-[72px]">
                <LeaderCard leader={boardMembers[0]} variant="largeVertical" />
              </div>

              {/* Board Members - 4 Smaller Cards */}
              <div className="grid grid-cols-4 gap-[27px]">
                {boardMembers.slice(1).map((member) => (
                  <LeaderCard
                    key={`${member.name}-${member.title}`}
                    leader={member}
                    variant="smallVertical"
                  />
                ))}
              </div>
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
            {/* Mobile/Tablet (compact horizontal cards) */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {executiveTeam.map((member) => (
                <LeaderCard
                  key={`${member.name}-${member.title}`}
                  leader={member}
                  variant="horizontal"
                />
              ))}
            </div>

            {/* Desktop (as-is layout) */}
            <div className="hidden lg:block">
              {/* CEO - Centered Large Card */}
              <div className="flex justify-center mb-[72px]">
                <LeaderCard leader={executiveTeam[0]} variant="largeVertical" />
              </div>

              {/* Executive Team - 4 Smaller Cards */}
              <div className="grid grid-cols-4 gap-[27px]">
                {executiveTeam.slice(1).map((member) => (
                  <LeaderCard
                    key={`${member.name}-${member.title}`}
                    leader={member}
                    variant="smallVertical"
                  />
                ))}
              </div>
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
              {/* Mobile/Tablet: use same horizontal card UI */}
              <div className="lg:hidden">
                <LeaderCard leader={ceoMessageLeader} variant="horizontal" />
              </div>

              {/* Desktop: keep existing vertical card */}
              <div className="hidden lg:block w-[279px] h-[308px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
                <img
                  src={ceoMessageLeader.image}
                  alt={ceoMessageLeader.name}
                  className="w-full h-[249px] object-cover rounded-t-[20px]"
                />
                <div className="p-2">
                  <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                    {ceoMessageLeader.name}
                  </div>
                  <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                    {ceoMessageLeader.title}
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
