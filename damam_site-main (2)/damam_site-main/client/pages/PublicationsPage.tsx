import { Eye, Download } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ReportCardProps {
  year: string;
  title: string;
  description: string;
}

function ReportCard({ year, title, description }: ReportCardProps) {
  return (
    <div className="w-full rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden p-6 lg:p-[30px_40px]">
      {/* Year Badge */}
      <div className="mb-4 lg:mb-[10px]">
        <span className="text-brand-purple text-[24px] lg:text-[28px] font-extrabold leading-[60px] tracking-[-0.56px]">
          {year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[60px] tracking-[-0.4px] mb-4 lg:mb-[20px]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[24px] mb-4 lg:mb-[24px]">
        {description}
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#DFDFDF] mb-4 lg:mb-[20px]"></div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
        <button className="inline-flex items-center justify-center gap-2 lg:gap-[10px] px-4 lg:px-[10px] py-2 lg:py-[10px] rounded-[10px] bg-[#F0EDF5] hover:bg-[#E8E3F5] transition-colors">
          <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          <span className="text-brand-purple text-[14px] lg:text-[16px] font-medium leading-[20px]">
            View Online
          </span>
        </button>

        <button className="inline-flex items-center justify-center gap-2 lg:gap-[10px] px-4 lg:px-[10px] py-2 lg:py-[10px] rounded-[10px] bg-brand-purple hover:bg-[#503A7A] transition-colors">
          <Download className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[20px]">
            Download
          </span>
        </button>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  const reports = [
    {
      year: "2025",
      title: "Financial Performance",
      description:
        "Detailed financial statements, revenue insights, and investment highlights.",
    },
    {
      year: "2025",
      title: "Sustainability & Governance",
      description:
        "Environmental, social and governance initiatives reflecting DACO's commitment to business practices.",
    },
    {
      year: "2025",
      title: "Operational Achievements",
      description:
        "Passenger traffic growth, cargo volumes, airline partnerships, and infrastructure developments.",
    },
    {
      year: "2025",
      title: "Strategic Initiatives",
      description:
        "Progress on expansion projects, digital transformation, and alignment with Saudi Vision 2030.",
    },
    {
      year: "2025",
      title: "Future Outlook",
      description:
        "Plans for the upcoming year, including development projects and new business opportunities.",
    },
    {
      year: "2025",
      title: "Operations Report",
      description:
        "Detailed financial statements, revenue insights, and investment highlights.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Title */}
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-normal tracking-[-0.25px] mb-8 lg:mb-[76px]">
            <span className="font-extrabold text-brand-purple">
              Publications{" "}
            </span>
            <span className="text-brand-gray">& Reports</span>
          </h1>

          {/* Hero Image */}
          <div className="w-full h-[200px] lg:h-[330px] rounded-[20px] overflow-hidden mb-8 lg:mb-[72px] relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fc082e751f56f8409020c24f61fd3df48b6eb19?width=2400"
              alt="Annual Reports"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(96,73,140,0.3)] to-[rgba(96,73,140,0.3)]"></div>
          </div>

          {/* Annual Reports Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[34px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Annual</span>
              <span className="font-medium text-brand-gray"> Reports</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.4px] mb-8 lg:mb-[72px]">
            The Annual Report provides stakeholders with:
          </p>

          {/* Report Cards Grid */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 mb-8 lg:mb-[72px]">
            {reports.map((report, index) => (
              <ReportCard key={index} {...report} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center px-6 py-2 rounded-[10px] bg-brand-purple hover:bg-[#503A7A] transition-colors">
              <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
                Load More
              </span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
