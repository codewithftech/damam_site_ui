import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, ExternalLink, Plus } from "lucide-react";
import { useState } from "react";

// Custom SVG Icons
function PlaneIcon() {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.3083 42.4L35.3333 24.2917L43.0625 16.5625C46.375 13.25 47.4792 8.83333 46.375 6.625C44.1667 5.52083 39.75 6.625 36.4375 9.9375L28.7083 17.6667L10.6 13.6917C9.49583 13.4708 8.6125 13.9125 8.17083 14.7958L7.50833 15.9C7.06667 17.0042 7.2875 18.1083 8.17083 18.7708L19.875 26.5L15.4583 33.125H8.83333L6.625 35.3333L13.25 39.75L17.6667 46.375L19.875 44.1667V37.5417L26.5 33.125L34.2292 44.8292C34.8917 45.7125 35.9958 45.9333 37.1 45.4917L38.2042 45.05C39.0875 44.3875 39.5292 43.5042 39.3083 42.4Z"
        stroke="#60498C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlaneRotationIcon() {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0139 38.4384C7.9594 35.1605 6.87267 31.3689 6.87893 27.5003C6.87893 17.7928 13.6027 9.64364 22.641 7.4551C24.2319 7.0713 25.8628 6.8782 27.4993 6.87989M45.1796 16.883C47.1104 20.0875 48.1279 23.7591 48.1221 27.5003C48.1221 36.2224 42.6954 43.6864 35.0389 46.6999C32.7014 47.6166 30.1577 48.123 27.4993 48.123M22.6387 32.3632C23.2753 33.0101 24.0336 33.5245 24.87 33.8768C25.7064 34.2292 26.6042 34.4124 27.5118 34.416C28.4193 34.4196 29.3186 34.2434 30.1577 33.8977C30.9968 33.552 31.7592 33.0436 32.4009 32.4018C33.0425 31.76 33.5508 30.9975 33.8963 30.1583C34.2418 29.3191 34.4177 28.4198 34.4139 27.5122C34.4101 26.6047 34.2266 25.7069 33.8741 24.8706C33.5216 24.0343 33.007 23.2761 32.36 22.6397C31.067 21.3679 29.3238 20.6585 27.5101 20.6661C25.6965 20.6737 23.9593 21.3976 22.677 22.6803C21.3947 23.9629 20.6712 25.7002 20.664 27.5139C20.6568 29.3275 21.3666 31.0705 22.6387 32.3632Z"
        stroke="#60498C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.3597 22.642C32.3597 22.642 32.3391 16.2184 35.6024 12.9184C38.8337 9.68947 42.0031 6.3528 45.3237 9.67572C48.4793 12.8336 45.3581 16.1153 42.0833 19.3993C38.8703 22.6213 32.3597 22.6397 32.3597 22.6397M22.6385 32.3586C22.6385 32.3586 22.6591 38.7822 19.3958 42.0822C16.1645 45.3111 12.9951 48.6478 9.67451 45.3249C6.51889 42.167 9.64014 38.8853 12.9149 35.6013C16.1278 32.3793 22.6385 32.3609 22.6385 32.3609"
        stroke="#60498C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 48.9975C22.4767 47.4963 18.3042 44.4344 14.9825 39.8118C11.6608 35.1892 10 29.9804 10 24.1853V10.5792L27.5 4L45 10.5792V24.1853C45 29.9787 43.3392 35.1867 40.0175 39.8093C36.6958 44.4319 32.5233 47.493 27.5 48.9975ZM27.5 46.3281C31.5417 45.0701 34.9167 42.586 37.625 38.8759C40.3333 35.1657 41.9167 31.0237 42.375 26.4497H27.5V6.6845L12.5 12.2976V25.2697C12.5 25.5951 12.5417 25.9884 12.625 26.4497H27.5V46.3281Z"
        fill="#60498C"
      />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4997 26.1605L11.4184 39.1992C11.0673 39.613 10.6341 39.9493 10.1463 40.187C9.65841 40.4247 9.12655 40.5586 8.58431 40.5802C8.04207 40.6018 7.50125 40.5106 6.99608 40.3124C6.4909 40.1142 6.03235 39.8133 5.64944 39.4287C5.26501 39.0443 4.96435 38.5845 4.76639 38.0781C4.56844 37.5718 4.47748 37.03 4.49925 36.4867C4.52102 35.9435 4.65505 35.4107 4.89289 34.9218C5.13073 34.433 5.46723 33.9986 5.88119 33.6462L18.8884 22.5425"
        stroke="#60498C"
        strokeWidth="2.9375"
        strokeLinejoin="round"
      />
      <path
        d="M40.5 22.6505L29.358 33.8172M22.392 4.50195L11.25 15.671M45 26.2325L49.5 22.5425M45 33.6125L49.5 36.0717M24.7545 49.4975H47.25M27.5108 49.4975C28.7505 47.2745 29.6775 43.0242 34.0695 42.7857C35.3745 42.7137 36.702 42.7137 38.007 42.7857C42.3968 43.0242 43.3283 47.2745 44.5703 49.4975M20.9993 5.8992L12.645 14.2737C12.645 14.2737 16.8232 19.8582 21.0015 24.0455C25.182 28.2327 30.753 32.4222 30.753 32.4222L39.1095 24.0455C39.1095 24.0455 34.9313 18.4632 30.753 14.2737C26.5748 10.0887 20.9993 5.8992 20.9993 5.8992Z"
        stroke="#60498C"
        strokeWidth="2.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EconomicIcon() {
  return (
    <svg
      width="53"
      height="47"
      viewBox="0 0 53 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.41406 18.2917L19.8724 3.9375L34.2266 19.3958L48.5807 5.04167"
        stroke="#60498C"
        strokeWidth="3"
      />
      <path
        d="M48.5833 13.8743V5.04102H39.75M6.625 44.791V26.0202M19.875 16.0827V44.791M33.125 29.3327V44.791M46.375 21.6035V44.791"
        stroke="#60498C"
        strokeWidth="3"
      />
    </svg>
  );
}

function LawIcon() {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.501 4.56641C26.9002 4.56648 27.2831 4.72464 27.5654 5.00684C27.8479 5.28931 28.0068 5.67278 28.0068 6.07227V10.0869H32.5186C33.2634 10.0869 33.9918 10.3123 34.6074 10.7305L38.3545 13.2783L38.3555 13.2793C38.4727 13.3575 38.6043 13.3976 38.7461 13.3994H47.8066C48.2061 13.3994 48.5896 13.5583 48.8721 13.8408C49.1543 14.1232 49.3124 14.506 49.3125 14.9053C49.3125 15.3047 49.1545 15.6882 48.8721 15.9707C48.5896 16.2532 48.2061 16.4121 47.8066 16.4121H44.0928L44.1846 16.6221L51.6182 33.582C51.7534 33.8904 51.781 34.2354 51.6973 34.5615C51.6138 34.8868 51.4241 35.1749 51.1582 35.3799C50.9415 35.5402 50.7174 35.6889 50.4863 35.8262L50.4854 35.8271C49.9327 36.1595 49.3563 36.4507 48.7607 36.6982C46.7818 37.5258 44.6567 37.9493 42.5117 37.9434H42.5107C40.3664 37.9527 38.2421 37.5295 36.2646 36.7002H36.2637C35.6681 36.452 35.0916 36.1603 34.5391 35.8271L34.5361 35.8252C34.4213 35.7594 34.3087 35.6899 34.1982 35.6172L33.874 35.3896L33.8662 35.3838L33.8643 35.3818L33.7676 35.3008C33.551 35.1036 33.3955 34.8469 33.3223 34.5615C33.2386 34.2354 33.2671 33.8904 33.4023 33.582L40.8398 16.6221L40.9316 16.4121H38.7461C38.0943 16.4121 37.4555 16.2392 36.8936 15.916L36.6572 15.7686L32.9102 13.2207L32.9092 13.2197C32.8221 13.1608 32.7232 13.1229 32.6201 13.1074L32.5166 13.0996H28.0068V45.4199H38.0654C38.4649 45.4199 38.8484 45.5789 39.1309 45.8613C39.4133 46.1438 39.5723 46.5273 39.5723 46.9268C39.5722 47.326 39.4132 47.7088 39.1309 47.9912C38.8484 48.2737 38.4649 48.4326 38.0654 48.4326H14.9355C14.5361 48.4326 14.1526 48.2737 13.8701 47.9912C13.588 47.7089 13.4298 47.3259 13.4297 46.9268C13.4297 46.5274 13.5878 46.1438 13.8701 45.8613C14.1526 45.5789 14.5361 45.42 14.9355 45.4199H24.9941V13.0996H20.4824C20.3425 13.0998 20.2057 13.1413 20.0898 13.2197V13.2207L16.3438 15.7686C15.7282 16.1866 15.0006 16.412 14.2559 16.4121H12.0693L12.1611 16.6221L19.5996 33.582C19.7304 33.8816 19.7603 34.2162 19.6846 34.5342C19.6089 34.8517 19.4319 35.1363 19.1807 35.3447C19.008 35.485 18.8352 35.616 18.5088 35.8271C17.9569 36.1852 17.3786 36.5012 16.7793 36.7725C14.8049 37.6712 12.6595 38.1344 10.4902 38.1289L10.084 38.124C8.18881 38.0778 6.31915 37.6752 4.57324 36.9365L4.20117 36.7725C3.75169 36.569 3.31409 36.3406 2.89062 36.0879L2.47168 35.8271C2.24203 35.6789 2.01933 35.5199 1.80469 35.3506C1.55395 35.1398 1.37681 34.8538 1.30078 34.5352C1.22489 34.217 1.25374 33.883 1.38184 33.582L8.81641 16.6221L8.90918 16.4121H5.19727C4.79779 16.4121 4.41431 16.2532 4.13184 15.9707C3.84936 15.6882 3.69043 15.3048 3.69043 14.9053C3.69052 14.506 3.84953 14.1232 4.13184 13.8408C4.41431 13.5583 4.79778 13.3994 5.19727 13.3994H14.2559C14.3978 13.3993 14.53 13.3583 14.6494 13.2793L14.6514 13.2783L18.3945 10.7295C19.0097 10.3095 19.7401 10.0869 20.4854 10.0869H24.9941V6.07227C24.9941 5.67278 25.1531 5.28931 25.4355 5.00684C25.718 4.72444 26.1016 4.56641 26.501 4.56641ZM10.3525 20.627L4.70605 33.501L4.65039 33.6289L4.77344 33.6943C6.53261 34.6322 8.49668 35.1192 10.4902 35.1133C12.484 35.1192 14.4487 34.6324 16.208 33.6943L16.3301 33.6289L16.2744 33.501L10.6279 20.627L10.4902 20.3135L10.3525 20.627ZM42.374 20.625L36.749 33.4482L36.6914 33.5801L36.8203 33.6436C37.0037 33.733 37.2083 33.827 37.4336 33.9248H37.4355C38.5465 34.3922 40.1376 34.8673 42.1113 34.9248L42.5107 34.9307C44.48 34.9359 46.4248 34.4956 48.2002 33.6436L48.3311 33.5811L48.2734 33.4482L42.6484 20.625L42.5107 20.3115L42.374 20.625Z"
        fill="#60498C"
        stroke="#F0EDF5"
        strokeWidth="0.3"
      />
    </svg>
  );
}

function FileIcon() {
  return (
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
  );
}

interface StepItemProps {
  number: number;
  text: string;
}

function StepItem({ number, text }: StepItemProps) {
  return (
    <div className="flex items-start gap-3 lg:gap-4 px-3 lg:px-[25px] py-[20px] rounded-[15px] border border-[#EDEDED] bg-white h-[80px]">
      <div className="text-brand-purple text-[24px] font-bold leading-[21px] mt-[9px] flex-shrink-0">
        {number}
      </div>
      <p className="text-brand-gray text-[12px] font-medium leading-[20px] flex-1">
        {text}
      </p>
    </div>
  );
}

interface RegulatoryCardProps {
  icon: React.ReactNode;
  title: string;
  highlighted?: boolean;
}

function RegulatoryCard({
  icon,
  title,
  highlighted = false,
}: RegulatoryCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-end gap-[26px] lg:gap-[30px] p-4 lg:px-[41px] lg:pt-[42px] lg:pb-[30px] rounded-[15px] border ${highlighted ? "border-[1.5px] border-brand-purple bg-[#F0EDF5]" : "border-[#EDEDED] bg-white"} h-[207px]`}
    >
      <div className="flex items-center justify-center h-[53px]">{icon}</div>
      <h3 className="text-brand-purple text-[20px] font-bold leading-[24px] tracking-[-0.4px] text-center">
        {title}
      </h3>
    </div>
  );
}

export default function InvestmentGuidelinesPage() {
  const [expandedItem, setExpandedItem] = useState<string | null>(
    "civil-aviation-law",
  );

  const aeroSteps = [
    "Submit initial inquiry through our online portal with basic business information.",
    "Complete the pre-qualification form with detailed company profile and credentials.",
    "Provide necessary aviation certifications and safety compliance documents.",
    "Undergo thorough security clearance and background verification for all key personnel.",
    "Participate in detailed technical evaluation sessions where our experts assess your operational capabilities and equipment standards.",
  ];

  const nonAeroSteps = [
    "Register your business interest through our commercial development portal.",
    "Submit a comprehensive business proposal including your concept details, target market analysis, financial projections.",
    "Provide complete company registration documents, financial statements for the past three years and tax clearance certificates",
    "Participate in the site selection and space allocation process, our team will guide you through available locations.",
    "Finalize the commercial lease agreement, obtain necessary operational permits, and complete all regulatory requirements.",
  ];

  const toggleItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-12 lg:mb-[68px]">
          <span className="font-extrabold text-brand-purple">Investment</span>
          <span className="text-brand-gray"> Guidelines</span>
        </h1>

        {/* How to Apply Section */}
        <div className="mb-12 lg:mb-[92px]">
          {/* Section Header */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-8">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">How to </span>
              <span className="text-brand-gray">Apply</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-8 lg:mb-12 max-w-[1170px]">
            Streamlined application process for both aeronautical and
            non-aeronautical investment opportunities. Choose your investment
            type and follow{" "}
            <span className="font-extrabold text-brand-purple">
              our guided steps.
            </span>
          </p>

          {/* Application Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px]">
            {/* Aero Opportunities Application */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
              <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-6 lg:mb-[30px]">
                Aero Opportunities Application
              </h3>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/724b2a8c8485814ab25cdbabd72c39343cf6fe40?width=1050"
                alt="Aero Opportunities"
                className="w-full h-[156px] rounded-[20px] object-cover mb-6 lg:mb-[30px]"
              />
              <div className="flex flex-col gap-[10px]">
                {aeroSteps.map((step, index) => (
                  <StepItem key={index} number={index + 1} text={step} />
                ))}
              </div>
            </div>

            {/* Non-Aero Opportunities Application */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
              <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-6 lg:mb-[30px]">
                Non-Aero Opportunities Application
              </h3>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/013a7a69eebe401f85c778942489045474ebc0f9?width=1050"
                alt="Non-Aero Opportunities"
                className="w-full h-[156px] rounded-[20px] object-cover mb-6 lg:mb-[30px]"
              />
              <div className="flex flex-col gap-[10px]">
                {nonAeroSteps.map((step, index) => (
                  <StepItem key={index} number={index + 1} text={step} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Requirements Section */}
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-[10px] mb-12 lg:mb-[72px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-normal tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Regulatory{" "}
              </span>
              <span className="text-brand-gray">Requirements</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-[268px_1fr] gap-6 lg:gap-[30px]">
              {/* Left Side - Icon Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-[30px]">
                <RegulatoryCard
                  icon={<LawIcon />}
                  title="Civil Aviation Laws"
                  highlighted={true}
                />
                <RegulatoryCard
                  icon={<PlaneIcon />}
                  title="Aviation Safety & Environmental Sustainability"
                />
                <RegulatoryCard
                  icon={<PlaneRotationIcon />}
                  title="Air Transport Facilitations"
                />
                <RegulatoryCard
                  icon={<LegalIcon />}
                  title="Beneficiary Experience & Rights Regulations"
                />
                <RegulatoryCard
                  icon={<EconomicIcon />}
                  title="Economic Regulations"
                />
                <RegulatoryCard
                  icon={<SecurityIcon />}
                  title="Security Regulations"
                />
              </div>

              {/* Right Side - Expandable Items */}
              <div className="flex flex-col gap-[10px]">
                {/* Civil Aviation Law - Expanded */}
                <div className="rounded-[15px] border border-[#EDEDED] bg-white overflow-hidden">
                  <button
                    onClick={() => toggleItem("civil-aviation-law")}
                    className="w-full flex items-center justify-between px-6 lg:px-[30px] py-[25px] lg:py-[30px]"
                  >
                    <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                      Civil Aviation Law
                    </span>
                    <div className="w-[30px] h-[30px] rounded-[10px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center">
                      <Plus className="w-[18px] h-[18px] text-brand-gray" />
                    </div>
                  </button>
                  {expandedItem === "civil-aviation-law" && (
                    <div className="px-6 lg:px-[30px] pb-6 lg:pb-[30px] pt-0">
                      {/* Document Item */}
                      <div className="flex items-center justify-between rounded-[15px] border border-[#EDEDED] overflow-hidden h-[80px] px-3 lg:px-[30px]">
                        <div className="flex items-center gap-3 lg:gap-4">
                          <div className="flex items-center justify-center w-[56px] h-[40px] rounded-[11px] bg-[#ECF7FF] flex-shrink-0">
                            <FileIcon />
                          </div>
                          <span className="text-[#454545] text-[13px] lg:text-[14px] font-bold leading-[24px]">
                            Airport charges scheduale 2025
                          </span>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                          <button className="hover:opacity-70">
                            <Download
                              className="w-6 h-6 text-[#454545]"
                              strokeWidth={1.5}
                            />
                          </button>
                          <button className="hover:opacity-70">
                            <ExternalLink
                              className="w-6 h-6 text-[#454545]"
                              strokeWidth={1.5}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Law of Civil Aviation Tariff */}
                <button
                  onClick={() => toggleItem("law-tariff")}
                  className="w-full flex items-center justify-between px-6 lg:px-[30px] py-[25px] lg:py-[30px] rounded-[15px] border border-[#EDEDED] bg-white"
                >
                  <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                    Law of Civil Aviation Tariff
                  </span>
                  <div className="w-[30px] h-[30px] rounded-[10px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center">
                    <Plus className="w-[18px] h-[18px] text-brand-gray" />
                  </div>
                </button>

                {/* GACA Statute */}
                <button
                  onClick={() => toggleItem("gaca-statute")}
                  className="w-full flex items-center justify-between px-6 lg:px-[30px] py-[25px] lg:py-[30px] rounded-[15px] border border-[#EDEDED] bg-white"
                >
                  <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                    GACA Statute
                  </span>
                  <div className="w-[30px] h-[30px] rounded-[10px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center">
                    <Plus className="w-[18px] h-[18px] text-brand-gray" />
                  </div>
                </button>

                {/* Regulatory Framework */}
                <button
                  onClick={() => toggleItem("regulatory-framework")}
                  className="w-full flex items-start justify-between px-6 lg:px-[30px] py-4 lg:py-[16px] rounded-[15px] border border-[#EDEDED] bg-white"
                >
                  <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] text-left">
                    Regulatory Framework for the Financial Consideration for
                    Services Provided by the Authority
                  </span>
                  <div className="w-[30px] h-[30px] rounded-[10px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 mt-[9px]">
                    <Plus className="w-[18px] h-[18px] text-brand-gray" />
                  </div>
                </button>

                {/* Investor Journey Guide */}
                <button
                  onClick={() => toggleItem("investor-journey")}
                  className="w-full flex items-center justify-between px-6 lg:px-[30px] py-[25px] lg:py-[30px] rounded-[15px] border border-[#EDEDED] bg-white"
                >
                  <span className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[20px]">
                    Investor Journey Guide
                  </span>
                  <div className="w-[30px] h-[30px] rounded-[10px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center">
                    <Plus className="w-[18px] h-[18px] text-brand-gray" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
