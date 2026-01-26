import type { Airline, TabKey } from "@/components/kfia/types";

export default function KFIAAirlines({
  tab,
  onTabChange,
  domesticAirlines,
}: {
  tab: TabKey;
  onTabChange: (tab: TabKey) => void;
  domesticAirlines: Airline[];
}) {
  return (
    <div className="mb-12 lg:mb-[72px]">
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] mb-4 lg:mb-6">
          Airlines
        </h2>
        <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
          King Fahd International Airport (DMM) is home to a wide range of international
          and regional airlines, offering passengers access to dozens of destinations
          across the Middle East, Asia, Africa, and Europe. With more than{" "}
          <span className="font-extrabold text-brand-purple">37 airlines in operation</span>,
          travelers can enjoy reliable service, diverse travel options, and seamless
          global connectivity.
        </p>

        {/* Tabs */}
        <div className="inline-flex p-[3px] items-center gap-[3px] rounded-[10px] bg-white mb-6 lg:mb-8">
          <button
            onClick={() => onTabChange("domestic")}
            className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
              tab === "domestic" ? "bg-brand-purple text-white" : "bg-transparent text-[#737373]"
            }`}
          >
            Domestic
          </button>
          <button
            onClick={() => onTabChange("international")}
            className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] text-[16px] lg:text-[20px] font-bold leading-[18px] tracking-tight transition-colors ${
              tab === "international"
                ? "bg-brand-purple text-white"
                : "bg-transparent text-[#737373]"
            }`}
          >
            International
          </button>
        </div>

        {/* Airlines Grid */}
        {tab === "domestic" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {domesticAirlines.map((airline, index) => (
              <div
                key={index}
                className="rounded-[15px] border border-[#EDEDED] bg-white p-4 h-[81px] flex items-center gap-4"
              >
                <div className="w-[61px] h-[61px] rounded-[5px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-brand-purple text-[12px] lg:text-[14px] font-extrabold leading-[24px] truncate">
                    {airline.name}
                  </div>
                  <div className="text-brand-gray text-[10px] lg:text-[12px] font-medium leading-[24px] truncate">
                    {airline.nameAr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "international" && (
          <div className="text-center py-12 text-brand-gray">
            <p className="text-[16px] font-medium">International airlines coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

