import AwardsSectionHeading from "@/components/awards/AwardsSectionHeading";

export type CertificationItem = {
  image: string;
  title: string;
  description: string;
  year: string;
  type: "large";
};

export default function CertificationsSection({
  certifications,
  onLoadMore,
}: {
  certifications: CertificationItem[];
  onLoadMore?: () => void;
}) {
  return (
    <div className="mb-12 lg:mb-0">
      <AwardsSectionHeading singleText="Certifications" />

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-8 lg:mb-[72px]">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] overflow-hidden"
          >
            <div className="flex items-center justify-center p-8 lg:p-12 bg-[#F6F6F6] h-[200px] lg:h-[287px]">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-5 lg:p-8">
              <h4 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[20px] lg:leading-[24px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-[44px]">
                {cert.title}
              </h4>
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-[98px] min-h-[48px] lg:min-h-[72px]">
                {cert.description}
              </p>
              <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-[20px] border border-[#F5F5F5] bg-[#F5F5F5]">
                <span className="text-brand-purple text-[16px] lg:text-[20px] font-medium leading-[150%]">
                  {cert.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex lg:justify-center">
        <button
          type="button"
          onClick={onLoadMore}
          className="inline-flex h-[40px] lg:h-[32px] px-6 lg:px-[24px] justify-center items-center gap-2 rounded-[10px] bg-brand-purple hover:bg-brand-purple/90 transition-colors"
        >
          <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
            Load More
          </span>
        </button>
      </div>
    </div>
  );
}

