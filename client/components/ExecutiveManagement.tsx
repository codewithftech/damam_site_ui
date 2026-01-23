import { LeaderCard, type Leader } from "@/components/LeaderCard";

export default function ExecutiveManagement() {
  const executiveTeam: Leader[] = [
    {
      name: "Sufyan Zamil Al-Zamil",
      title: "Chairman",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3498128c06d0de58d0d57d6313e126895835cc31?width=800",
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

        {/* Desktop (big CEO + small grid) */}
        <div className="hidden lg:block">
          <div className="flex justify-center mb-[72px]">
            <LeaderCard leader={executiveTeam[0]} variant="largeVertical" />
          </div>

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
  );
}
