import { LeaderCard, type Leader } from "@/components/LeaderCard";

export default function CEOMessage() {
  const ceo: Leader = {
    name: "Mohammed Ali Al Hassany",
    title: "CEO",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f5f60b422a87b9894552015f27076fa2fe3458c5?width=558",
  };

  return (
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
          {/* Mobile/Tablet: horizontal card */}
          <div className="lg:hidden">
            <LeaderCard leader={ceo} variant="horizontal" />
          </div>

          {/* Desktop: keep the original vertical card size */}
          <div className="hidden lg:block w-[279px] h-[308px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden">
            <img
              src={ceo.image}
              alt={ceo.name}
              className="w-full h-[249px] object-cover rounded-t-[20px]"
            />
            <div className="p-2">
              <div className="text-brand-purple text-[14px] font-bold leading-[24px]">
                {ceo.name}
              </div>
              <div className="text-brand-gray text-[14px] font-medium leading-[24px]">
                {ceo.title}
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
  );
}
