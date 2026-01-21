export default function ExecutiveManagement() {
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
  );
}
