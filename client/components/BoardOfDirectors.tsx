export default function BoardOfDirectors() {
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

  return (
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
  );
}
