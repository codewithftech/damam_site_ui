export type Leader = {
  name: string;
  title: string;
  image: string;
};

export function LeaderCard({
  leader,
  variant,
}: {
  leader: Leader;
  variant: "horizontal" | "largeVertical" | "smallVertical";
}) {
  if (variant === "horizontal") {
    return (
      <div className="w-full rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden flex items-stretch">
        {/* Image (flush left) */}
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

