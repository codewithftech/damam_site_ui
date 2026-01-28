import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

interface CheckItemProps {
  text: string;
}

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-4 lg:px-[16px] lg:py-[16px] rounded-[15px] border border-[#EDEDED]">
      <div className="flex-shrink-0">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id={`mask-${text.substring(0, 10)}`}
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="1"
            width="28"
            height="28"
          >
            <path
              d="M15 27.5C16.6418 27.502 18.2679 27.1796 19.7847 26.5513C21.3015 25.923 22.6793 25.0012 23.8388 23.8388C25.0012 22.6793 25.923 21.3015 26.5513 19.7847C27.1796 18.2679 27.502 16.6418 27.5 15C27.502 13.3582 27.1796 11.7322 26.5513 10.2153C25.923 8.69848 25.0012 7.32074 23.8388 6.16126C22.6793 4.99886 21.3015 4.07702 19.7847 3.44871C18.2679 2.82039 16.6418 2.49798 15 2.50001C13.3582 2.49798 11.7322 2.82039 10.2153 3.44871C8.69848 4.07702 7.32074 4.99886 6.16126 6.16126C4.99886 7.32074 4.07702 8.69848 3.44871 10.2153C2.82039 11.7322 2.49798 13.3582 2.50001 15C2.49798 16.6418 2.82039 18.2679 3.44871 19.7847C4.07702 21.3015 4.99886 22.6793 6.16126 23.8388C7.32074 25.0012 8.69848 25.923 10.2153 26.5513C11.7322 27.1796 13.3582 27.502 15 27.5Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 15L13.75 18.75L21.25 11.25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
          <g mask={`url(#mask-${text.substring(0, 10)})`}>
            <path d="M0 0H30V30H0V0Z" fill="#60498C" />
          </g>
        </svg>
      </div>
      <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
        {text}
      </span>
    </div>
  );
}

interface ProvisionItemProps {
  number: number;
  title: string;
  description: string;
}

function ProvisionItem({ number, title, description }: ProvisionItemProps) {
  return (
    <div className="border-b border-[#EDEDED] last:border-b-0">
      <div className="flex gap-4 lg:gap-6 py-6 lg:py-8 px-4 lg:px-[30px]">
        <div className="flex-shrink-0 w-[73px] h-[73px] rounded-[15px] border border-[#EDEDED] bg-[#F6F6F6] flex items-center justify-center">
          <span className="text-brand-purple text-[36px] lg:text-[40px] font-bold">
            {number}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] lg:leading-[60px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-2 lg:mb-1">
            {title}
          </h3>
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProcurementGuidelinesPage() {
  const vendorHandbookItems = [
    "Vendor registration through the Ariba Portal.",
    "Use of the OpenText Document Portal for document submission and tracking.",
    "Procurement cycle stages: sourcing, tendering, contract award, and payment.",
    "Expectations on quality, safety, and service delivery standards.",
    "Guidelines for communication and escalation during active contracts.",
  ];

  const standardTermsProvisions = [
    {
      title: "Scope of Services",
      description: "Clear definition of the goods or services to be provided.",
    },
    {
      title: "Pricing & Payment Terms",
      description:
        "Agreed rates, invoicing requirements, and timelines for payment.",
    },
    {
      title: "Delivery & Performance",
      description:
        "Obligations regarding timeliness, quality standards, and milestones.",
    },
    {
      title: "Warranties & Liabilities",
      description:
        "Responsibilities of vendors in case of defects, delays, or damages.",
    },
    {
      title: "Confidentiality & Data Protection",
      description:
        "Safeguarding of sensitive information shared during the contract.",
    },
    {
      title: "Termination & Force Majeure",
      description:
        "Conditions under which the agreement may be ended or suspended.",
    },
  ];

  const complianceRequirements = [
    {
      title: "Legal Compliance",
      description:
        "Possession of valid licenses, permits, and certifications as required by Saudi Arabian law.",
    },
    {
      title: "Tax & Financial Compliance",
      description:
        "Fulfillment of Zakat, VAT, and financial reporting requirements.",
    },
    {
      title: "Health, Safety & Environment (HSE)",
      description:
        "Adherence to DACO's safety policies, industry best practices, and environmental sustainability standards.",
    },
    {
      title: "Anti-Corruption & Ethics",
      description:
        "Zero tolerance for bribery, fraud, or unethical practices in all dealings.",
    },
    {
      title: "Quality Assurance",
      description:
        "Compliance with international quality standards (ISO or equivalent) where applicable.",
    },
    {
      title: "Information Security",
      description:
        "Protection of data and systems in line with DACO's cybersecurity and confidentiality policies.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-12 lg:mb-[72px]">
          <span className="font-extrabold text-brand-purple">Procurement </span>
          <span className="text-brand-gray">Guidelines</span>
        </h1>

        {/* Vendor Handbook Section */}
        <div className="mb-12 lg:mb-[98px]">
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Vendor</span>
              <span className="text-brand-gray"> Handbook</span>
            </h2>
          </div>

          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-2">
            <span className="font-extrabold text-brand-purple">
              The Vendor Handbook
            </span>{" "}
            serves as a detailed reference guide for all suppliers and service
            providers wishing to do business with Dammam Airports Company
            (DACO).
          </p>
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-8 lg:mb-12">
            It outlines the end-to-end procurement process, from vendor
            registration to contract execution, ensuring transparency,
            efficiency, and compliance.
          </p>

          {/* Image and Checklist Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[465px_1fr] gap-6 lg:gap-[20px] mb-6 lg:mb-12 max-w-[1200px]">
            {/* Image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f645d2ad69a1757985ccf67b9372a144df831168?width=930"
              alt="Procurement"
              className="w-full h-[300px] lg:h-[374px] rounded-[20px] object-cover"
            />

            {/* Checklist */}
            <div className="flex flex-col gap-4 lg:gap-[16px]">
              {vendorHandbookItems.map((item, index) => (
                <CheckItem key={index} text={item} />
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="rounded-[15px] border border-[#EDEDED] bg-[#F5F5F5] p-3 lg:p-[10px] max-w-[990px]">
            <p className="text-brand-gray text-[11px] lg:text-[12px] font-medium leading-[20px]">
              <span className="font-bold text-brand-purple">Note:</span> This
              guide ensures that vendors have a clear understanding of DACO's
              procurement procedures and their responsibilities throughout the
              engagement.
            </p>
          </div>
        </div>

        {/* Standard Terms & Conditions Section */}
        <div className="mb-12 lg:mb-[186px]">
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Standard Terms{" "}
              </span>
              <span className="text-brand-gray">& Conditions</span>
            </h2>
          </div>

          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-6 lg:mb-8 max-w-[1199px]">
            All contracts and purchase orders with DACO are governed by Standard
            Terms & Conditions (T&Cs). These provide a consistent framework for
            fair, transparent, and mutually beneficial business relationships.
          </p>

          <h3 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-[24px] mb-6 lg:mb-8">
            General provisions typically include:
          </h3>

          {/* Provisions Card */}
          <div className="rounded-[15px] border border-[#EDEDED] bg-white overflow-hidden mb-6 lg:mb-8 max-w-[1200px]">
            {standardTermsProvisions.map((provision, index) => (
              <ProvisionItem
                key={index}
                number={index + 1}
                title={provision.title}
                description={provision.description}
              />
            ))}

            {/* Note inside card */}
            <div className="mx-4 lg:mx-[60px] my-6 lg:my-8 rounded-[15px] border border-[#EDEDED] bg-[#F5F5F5] p-3 lg:p-[10px]">
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                <span className="font-extrabold text-brand-purple">Note:</span>{" "}
                These terms are non-negotiable for standard engagements but may
                be supplemented by conditions depending on the work.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Requirements Section */}
        <div>
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Compliance
              </span>
              <span className="text-brand-gray"> Requirements</span>
            </h2>
          </div>

          <p className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[24px] mb-4 lg:mb-6 max-w-[1087px]">
            DACO upholds the highest standards of{" "}
            <span className="font-extrabold text-brand-purple">
              legal, regulatory, and operational compliance
            </span>
            , and all vendors are required to adhere strictly to these
            obligations.
          </p>

          <h3 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-[24px] mb-6 lg:mb-8">
            Compliance requirements include:
          </h3>

          {/* Compliance Card */}
          <div className="rounded-[15px] border border-[#EDEDED] bg-white overflow-hidden max-w-[1200px]">
            {complianceRequirements.map((requirement, index) => (
              <ProvisionItem
                key={index}
                number={index + 1}
                title={requirement.title}
                description={requirement.description}
              />
            ))}

            {/* Note inside card */}
            <div className="mx-4 lg:mx-[97px] my-6 lg:my-8 rounded-[15px] border border-[#EDEDED] bg-[#F5F5F5] p-3 lg:p-[10px]">
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                <span className="font-extrabold text-brand-purple">Note:</span>{" "}
                Vendors that fail to meet compliance obligations may be
                suspended or removed from DACO's approved vendor list.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
