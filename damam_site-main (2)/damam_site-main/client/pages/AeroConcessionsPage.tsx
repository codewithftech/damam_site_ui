import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, ExternalLink, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AeroConcessionsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const circularDocuments = [
    { title: "MRO facility development guidelines" },
    { title: "Technical specifications for hangars" },
    { title: "Partnership models and investment terms" },
    { title: "Regional MRO market analysis" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px] flex flex-col gap-12 lg:gap-[72px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px]">
          <span className="font-extrabold text-brand-purple">Aero-</span>
          <span className="text-brand-gray">Concessions</span>
        </h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px]">
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
                Dammam Airports Company manages aeronautical concessions to
                ensure the availability of safe, efficient, and high-quality
                services that support passenger and cargo airline operations
                across its airports.
              </p>
              <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px]">
                All aero-concession services are delivered by licensed service
                providers in compliance with applicable aviation regulations and
                international standards.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-[20px] border border-[#EDEDED] overflow-hidden h-[280px] lg:h-[333px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/511b7e45648d41fe742e680e79f130c93f572cd7?width=1170"
              alt="Aero-Concessions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Services Sections */}
        <div className="flex flex-col gap-12 lg:gap-[72px] max-w-[1200px]">
          <div className="flex flex-col gap-6 lg:gap-[30px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            {/* Fuel Services */}
            <FuelServicesSection
              isExpanded={expandedSection === "fuel"}
              onToggle={() => toggleSection("fuel")}
            />

            {/* Aviation Ground Handling Services */}
            <GroundHandlingSection
              isExpanded={expandedSection === "ground"}
              onToggle={() => toggleSection("ground")}
            />

            {/* Line Maintenance */}
            <LineMaintenanceSection
              isExpanded={expandedSection === "maintenance"}
              onToggle={() => toggleSection("maintenance")}
            />
          </div>

          {/* Operational Framework */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/77b71211d345f8d5c46382d82d63ee24168e520f?width=2400"
            alt="Operational Framework"
            className="w-full h-auto rounded-[20px] border border-[#EDEDED]"
          />
        </div>

        {/* Circular Section */}
        <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] max-w-[1200px]">
          <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-2">
            Circular
          </h2>
          <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.26px] lg:tracking-[-0.28px] mb-6 lg:mb-[30px]">
            (for passenger's airlines)
          </p>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {circularDocuments.map((doc, index) => (
              <DocumentItem key={index} title={doc.title} />
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] max-w-[1200px]">
          <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-5">
            Contact Us
          </h2>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4">
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

// Fuel Services Component
function FuelServicesSection({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 lg:p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#F5F0FF]">
            <FuelIcon />
          </div>
          <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.36px] lg:tracking-[-0.25px]">
            Fuel Services
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-brand-purple transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-3 lg:px-[68px] pb-6 lg:pb-[30px]">
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] mb-6 lg:mb-[30px]">
            Fuel farm and into-plane fueling services are provided through an
            approved concessionaire to support aircraft operations.
          </p>

          <div className="rounded-[20px] bg-[#F5F0FF] p-2 lg:p-[9px] flex items-center justify-between">
            <span className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] pl-4">
              Modern Consortium for Refueling Aircrafts Co. Ltd. (MCRA)
            </span>
            <button className="flex items-center gap-4 bg-[rgba(96,73,140,0.05)] rounded-[10px] px-6 py-[5px] h-[34px] hover:bg-[rgba(96,73,140,0.1)] transition-colors">
              <ExternalLink
                className="w-6 h-6 text-brand-purple"
                strokeWidth={1.5}
              />
              <span className="text-brand-purple text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.36px] lg:tracking-[-0.25px]">
                Visit
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Ground Handling Component
function GroundHandlingSection({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 lg:p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#F5F0FF]">
            <PlaneIcon />
          </div>
          <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.36px] lg:tracking-[-0.25px]">
            Aviation Ground Handling Services
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-brand-purple transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-3 lg:px-[68px] pb-6 lg:pb-[30px] flex flex-col gap-6">
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px]">
            Ground handling services for passenger and cargo operations are
            provided by licensed operators.
          </p>

          {/* Passenger Handling */}
          <div>
            <h4 className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] mb-4">
              Passenger Handling
            </h4>
            <div className="flex flex-col gap-4">
              <ServiceProvider name="Saudi Ground Services (SGS)" />
              <ServiceProvider name="Swissport" />
            </div>
          </div>

          {/* Cargo Handling */}
          <div>
            <h4 className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] mb-4">
              Cargo Handling
            </h4>
            <div className="flex flex-col gap-4">
              <ServiceProvider name="Saudi Logistics Services (SAL)" />
              <ServiceProvider name="SATS Saudi Arabia Company" />
            </div>
          </div>

          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] mt-2">
            Approved Service Providers – Business Inquiries:
          </p>
        </div>
      )}
    </div>
  );
}

// Line Maintenance Component
function LineMaintenanceSection({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-white overflow-hidden">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 lg:p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#F5F0FF]">
            <ToolIcon />
          </div>
          <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.36px] lg:tracking-[-0.25px]">
            Line Maintenance
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-brand-purple transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-3 lg:px-[68px] pb-6 lg:pb-[30px] flex flex-col gap-6">
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px]">
            Line maintenance services at Dammam Airports Company support safe
            and efficient aircraft operations and are delivered by licensed and
            approved service providers.
          </p>

          <div>
            <h4 className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] mb-4">
              Approved Service Providers – Business Inquiries:
            </h4>
            <div className="flex flex-col gap-4">
              <ServiceProvider name="National Aviation Ground Support (NAGS)" />
              <ServiceProvider name="Saudi Aerospace Engineering Industries (SAEI)" />
              <ServiceProvider name="Bahrain Airport Services (BAS)" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Service Provider Row
function ServiceProvider({ name }: { name: string }) {
  return (
    <div className="rounded-[20px] bg-[#F5F0FF] p-2 lg:p-[9px] flex items-center justify-between">
      <span className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.28px] lg:tracking-[-0.25px] pl-4">
        {name}
      </span>
      <button className="flex items-center gap-4 bg-[rgba(96,73,140,0.05)] rounded-[10px] px-6 py-[5px] h-[34px] hover:bg-[rgba(96,73,140,0.1)] transition-colors">
        <ExternalLink className="w-6 h-6 text-brand-purple" strokeWidth={1.5} />
        <span className="text-brand-purple text-[18px] lg:text-[20px] font-medium leading-[24px] tracking-[-0.36px] lg:tracking-[-0.25px]">
          Visit
        </span>
      </button>
    </div>
  );
}

// Document Item
function DocumentItem({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between rounded-[15px] border border-[#EDEDED] overflow-hidden h-[64px]">
      <div className="flex items-center gap-3 lg:gap-4 px-3 lg:px-[12px]">
        <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#ECF7FF]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V8H20"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 9H9H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[#454545] text-[13px] lg:text-[14px] font-bold leading-[21px] lg:leading-[24px]">
          {title}
        </span>
      </div>

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

// Icons
function FuelIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_fuel)">
        <path
          d="M0.855469 7.71436H14.5698M0.855469 12.8572H14.5698M14.5698 19.7144H19.7126C20.6219 19.7144 21.494 19.3531 22.137 18.7101C22.78 18.0672 23.1412 17.1951 23.1412 16.2858C23.1412 15.3765 22.78 14.5044 22.137 13.8614C21.494 13.2184 20.6219 12.8572 19.7126 12.8572C19.258 12.8572 18.8219 12.6766 18.5004 12.3551C18.1789 12.0336 17.9983 11.5976 17.9983 11.1429V6.85721L23.1412 1.71436M0.855469 6.00007V21.4286C0.855469 21.8833 1.03608 22.3193 1.35757 22.6408C1.67906 22.9623 2.1151 23.1429 2.56975 23.1429H12.8555C13.3101 23.1429 13.7462 22.9623 14.0677 22.6408C14.3891 22.3193 14.5698 21.8833 14.5698 21.4286V6.00007C14.5698 5.09076 14.2085 4.21869 13.5655 3.5757C12.9226 2.93272 12.0505 2.5715 11.1412 2.5715H4.28404C3.37473 2.5715 2.50266 2.93272 1.85967 3.5757C1.21669 4.21869 0.855469 5.09076 0.855469 6.00007Z"
          stroke="#60498C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9994 9.42871L21.428 8.57157V3.42871M10.2852 17.143V18.8573"
          stroke="#60498C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_fuel">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8 19.2L16 11L19.5 7.5C21 6 21.5 4 21 3C20 2.5 18 3 16.5 4.5L13 8L4.8 6.2C4.3 6.1 3.9 6.3 3.7 6.7L3.4 7.2C3.2 7.7 3.3 8.2 3.7 8.5L9 12L7 15H4L3 16L6 18L8 21L9 20V17L12 15L15.5 20.3C15.8 20.7 16.3 20.8 16.8 20.6L17.3 20.4C17.7 20.1 17.9 19.7 17.8 19.2Z"
        stroke="#60498C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7013 6.30022C14.5181 6.48715 14.4155 6.73847 14.4155 7.00022C14.4155 7.26198 14.5181 7.5133 14.7013 7.70022L16.3013 9.30022C16.4882 9.48345 16.7396 9.58608 17.0013 9.58608C17.2631 9.58608 17.5144 9.48345 17.7013 9.30022L21.4713 5.53022C21.9742 6.64141 22.1264 7.87946 21.9078 9.07937C21.6892 10.2793 21.11 11.3841 20.2476 12.2465C19.3852 13.1089 18.2804 13.6881 17.0805 13.9067C15.8806 14.1253 14.6425 13.9731 13.5313 13.4702L6.62132 20.3802C6.2235 20.778 5.68393 21.0015 5.12132 21.0015C4.55871 21.0015 4.01914 20.778 3.62132 20.3802C3.2235 19.9824 3 19.4428 3 18.8802C3 18.3176 3.2235 17.778 3.62132 17.3802L10.5313 10.4702C10.0285 9.35904 9.87624 8.12099 10.0949 6.92108C10.3135 5.72117 10.8926 4.61638 11.755 3.75395C12.6175 2.89151 13.7223 2.31239 14.9222 2.09377C16.1221 1.87514 17.3601 2.02739 18.4713 2.53022L14.7113 6.29022L14.7013 6.30022Z"
        stroke="#60498C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
