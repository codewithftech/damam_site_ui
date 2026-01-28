import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, ExternalLink, Mail } from "lucide-react";

export default function AirlineDevelopmentPage() {
  const kfiaDocuments = [
    {
      title: "Airport charges scheduale 2025",
      iconBg: "#F5F0FF",
      iconColor: "#60498C",
    },
    {
      title: "Terms and Conditions for Airline Operations",
      iconBg: "#F5F0FF",
      iconColor: "#60498C",
    },
    {
      title: "Ground Handling Services Agreement",
      iconBg: "#F5F0FF",
      iconColor: "#60498C",
    },
    {
      title: "Slot Allocation Guidelines",
      iconBg: "#F5F0FF",
      iconColor: "#60498C",
    },
  ];

  const circularDocuments = [
    {
      title: "Airport charges scheduale 2025",
      iconBg: "#ECF7FF",
      iconColor: "#4D9CD3",
    },
    {
      title: "Airport charges scheduale 2025",
      iconBg: "#ECF7FF",
      iconColor: "#4D9CD3",
    },
    {
      title: "Airport charges scheduale 2025",
      iconBg: "#ECF7FF",
      iconColor: "#4D9CD3",
    },
    {
      title: "Airport charges scheduale 2025",
      iconBg: "#ECF7FF",
      iconColor: "#4D9CD3",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-12 lg:mb-[68px]">
          <span className="font-extrabold text-brand-purple">Airline </span>
          <span className="text-brand-gray">Development</span>
        </h1>

        {/* Hero Section - Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px] mb-12 lg:mb-[68px]">
          {/* Text Box */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] relative overflow-hidden h-[280px] lg:h-[333px]">
            {/* Watermark Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4cbc6093088016c1eea04ace28bb6269d835ea4e?width=454"
              alt=""
              className="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] w-[170px] lg:w-[227px] h-[156px] lg:h-[209px] opacity-100 pointer-events-none"
            />

            {/* Text Content */}
            <div className="relative z-10">
              <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-5">
                The Airline Development team at Dammam Airports Company works in
                partnership with passenger and cargo airlines to support the
                launch, expansion, and long-term success of air services across
                the Eastern Region of Saudi Arabia.
              </p>
              <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px]">
                Aligned with Saudi Vision 2030, we focus on enhancing air
                connectivity, enabling logistics growth, and positioning our
                airports as competitive regional gateways through data-driven
                planning and tailored commercial support.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-[20px] border border-[#EDEDED] overflow-hidden h-[280px] lg:h-[333px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1d1e91ecd89aed4fe0c55cb444a8d41ac807aa32?width=1170"
              alt="Airline Development"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Documents Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px] mb-12 lg:mb-[68px]">
          {/* KFIA Facts */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            {/* Title */}
            <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-2">
              King Fahd International Airport (KFIA) Facts
            </h2>
            <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.26px] lg:tracking-[-0.28px] mb-6 lg:mb-[30px]">
              (for passenger's airlines)
            </p>

            {/* Document List */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {kfiaDocuments.map((doc, index) => (
                <DocumentItem
                  key={index}
                  title={doc.title}
                  iconBg={doc.iconBg}
                  iconColor={doc.iconColor}
                />
              ))}
            </div>
          </div>

          {/* Circular */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            {/* Title */}
            <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-2">
              Circular
            </h2>
            <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.26px] lg:tracking-[-0.28px] mb-6 lg:mb-[30px]">
              (for passenger's airlines)
            </p>

            {/* Document List */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {circularDocuments.map((doc, index) => (
                <DocumentItem
                  key={index}
                  title={doc.title}
                  iconBg={doc.iconBg}
                  iconColor={doc.iconColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] max-w-[1200px]">
          <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-5">
            Contact Us
          </h2>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-4">
            For airline development opportunities, route studies, charges, or
            cargo operations support, please contact:
          </p>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-2 lg:mb-4">
            Airline Development Team
          </p>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
            Dammam Airports Company
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#F5F0FF]">
              <Mail className="w-6 h-6 text-brand-purple" strokeWidth={2} />
            </div>
            <a
              href="mailto:airlinesInfo@DammamAirports.sa"
              className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-normal tracking-[-0.28px] lg:tracking-[-0.32px] underline hover:opacity-80 transition-opacity"
            >
              airlinesInfo@DammamAirports.sa
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

interface DocumentItemProps {
  title: string;
  iconBg: string;
  iconColor: string;
}

function DocumentItem({ title, iconBg, iconColor }: DocumentItemProps) {
  return (
    <div className="flex items-center justify-between rounded-[15px] border border-[#EDEDED] overflow-hidden h-[64px]">
      <div className="flex items-center gap-3 lg:gap-4 px-3 lg:px-[12px]">
        {/* File Icon */}
        <div
          className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px]"
          style={{ backgroundColor: iconBg }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V8H20"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13H8"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17H8"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 9H9H8"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <span className="text-[#454545] text-[13px] lg:text-[14px] font-bold leading-[21px] lg:leading-[24px]">
          {title}
        </span>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-2 lg:gap-3 pr-3 lg:pr-4">
        <button
          className="hover:opacity-70 transition-opacity"
          aria-label="Download"
        >
          <Download className="w-6 h-6 text-[#454545]" />
        </button>
        <button
          className="hover:opacity-70 transition-opacity"
          aria-label="Open"
        >
          <ExternalLink className="w-6 h-6 text-[#454545]" />
        </button>
      </div>
    </div>
  );
}
