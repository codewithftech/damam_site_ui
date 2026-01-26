import type { TabKey } from "@/components/kfia/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function KFIADestinations({
  tab,
  onTabChange,
  domesticDestinations,
}: {
  tab: TabKey;
  onTabChange: (tab: TabKey) => void;
  domesticDestinations: string[];
}) {
  const { isRTL } = useLanguage();

  return (
    <div className="mb-12 lg:mb-[72px]">
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] mb-4 lg:mb-6">
          Destinations
        </h2>
        <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
          King Fahd International Airport (DMM) connects the Eastern Province of Saudi
          Arabia with over{" "}
          <span className="font-extrabold text-brand-purple">61 destinations worldwide</span>,
          offering both domestic and international routes. From regional hubs in the
          Middle East to major cities across Asia, Africa, and Europe, our growing
          network ensures seamless travel options for business and leisure passengers
          alike.
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

        {/* Destinations Grid */}
        {tab === "domestic" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {domesticDestinations.map((destination, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 rounded-[15px] border border-[#EDEDED] bg-white py-4 h-[56px] overflow-hidden",
                  isRTL && "flex-row-reverse"
                )}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1b90cc85f7c794f052c906fa6288ba5718678d40?width=164"
                  alt="Saudi Arabia Flag"
                  className={cn(
                    "lg:w-[82px] w-[62px] h-[56px] object-cover flex-shrink-0",
                    isRTL ? "rounded-r-[15px]" : "rounded-l-[15px]"
                  )}
                />
                <span className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[24px] text-start">
                  {destination}
                </span>
              </div>
            ))}
          </div>
        )}

        {tab === "international" && (
          <div className="text-center py-12 text-brand-gray">
            <p className="text-[16px] font-medium">International destinations coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

