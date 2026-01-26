import AwardsSectionHeading from "@/components/awards/AwardsSectionHeading";

export type MilestoneAward = {
  image: string;
  title: string;
  description: string;
  year: string;
  organization: string;
  type: "large" | "small";
};

export default function MilestoneAwardsSection({
  awards,
  onViewAll,
}: {
  awards: MilestoneAward[];
  onViewAll?: () => void;
}) {
  const large = awards[0];
  const small = awards.slice(1, 4);

  if (!large) return null;

  return (
    <div className="mb-16 lg:mb-[112px]">
      <AwardsSectionHeading leftBold="Milestone" rightText="Awards" />

      {/* Awards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-8 lg:mb-[72px]">
        {/* Large Award Card */}
        <div className="lg:col-span-1 rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden">
          <img
            src={large.image}
            alt={large.title}
            className="w-full h-[200px] lg:h-[355px] object-cover rounded-t-[20px]"
          />
          <div className="p-5 lg:p-6">
            <h4 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] lg:leading-[28px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-[10px]">
              {large.title}
            </h4>
            <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[24px]">
              {large.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
                <span className="text-brand-purple text-[16px] lg:text-[20px] font-medium leading-[150%]">
                  {large.year}
                </span>
              </div>
              <span className="text-brand-purple text-[12px] lg:text-[14px] font-bold leading-[150%]">
                {large.organization}
              </span>
            </div>
          </div>
        </div>

        {/* Small Award Cards Column */}
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {small.map((award, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden flex flex-col lg:flex-row items-start lg:items-stretch"
            >
              <div className="w-full lg:w-[223px] flex-shrink-0 p-[10px]">
                <div className="w-full h-[155px] lg:h-full rounded-[16px] lg:rounded-l-[20px] lg:rounded-tr-none lg:rounded-r-none overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="p-5 flex-1">
                <h4 className="text-brand-purple text-[14px] lg:text-[16px] font-extrabold leading-[24px] lg:leading-[28px] tracking-[-0.28px] lg:tracking-[-0.32px] mb-3 lg:mb-[10px]">
                  {award.title}
                </h4>
                <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[8px]">
                  {award.description}
                </p>
                <div className="inline-flex  justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
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
      <div className="flex lg:justify-center">
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex h-[40px] lg:h-[32px] px-6 lg:px-[24px] justify-center items-center gap-2 rounded-[10px] bg-brand-purple hover:bg-brand-purple/90 transition-colors"
        >
          <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
            View All
          </span>
        </button>
      </div>
    </div>
  );
}

