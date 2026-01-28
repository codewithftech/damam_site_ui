import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Mail } from "lucide-react";

// Custom SVG Icons
function EfficiencyIcon() {
  return (
    <svg
      width="66"
      height="67"
      viewBox="0 0 66 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 12.5626C26.1068 12.5628 21.3235 14.0355 17.2545 16.7944C13.1855 19.5534 10.0134 23.4748 8.13899 28.0633C6.26461 32.6517 5.7721 37.7012 6.72368 42.5737C7.67526 47.4462 10.0282 51.923 13.4853 55.4384C13.682 55.6318 13.8388 55.8631 13.9465 56.1187C14.0542 56.3743 14.1107 56.6491 14.1127 56.9271C14.1147 57.2051 14.0621 57.4807 13.958 57.7379C13.854 57.995 13.7005 58.2286 13.5066 58.4249C13.3127 58.6212 13.0822 58.7763 12.8286 58.8812C12.575 58.9861 12.3033 59.0387 12.0295 59.0359C11.7556 59.0331 11.4851 58.975 11.2336 58.8649C10.9821 58.7548 10.7547 58.595 10.5648 58.3948C6.53149 54.2934 3.78634 49.0703 2.67621 43.3856C1.56609 37.7009 2.1408 31.8097 4.32774 26.4565C6.51468 21.1033 10.2157 16.5283 14.9631 13.3096C19.7105 10.0909 25.2912 8.37305 31 8.37305C36.7088 8.37305 42.2896 10.0909 47.0369 13.3096C51.7843 16.5283 55.4853 21.1033 57.6723 26.4565C59.8592 31.8097 60.4339 37.7009 59.3238 43.3856C58.2137 49.0703 55.4685 54.2934 51.4353 58.3948C51.2453 58.595 51.0179 58.7548 50.7664 58.8649C50.515 58.975 50.2444 59.0331 49.9706 59.0359C49.6967 59.0387 49.4251 58.9861 49.1715 58.8812C48.9179 58.7763 48.6874 58.6212 48.4934 58.4249C48.2995 58.2286 48.1461 57.995 48.042 57.7379C47.9379 57.4807 47.8854 57.2051 47.8873 56.9271C47.8893 56.6491 47.9458 56.3743 48.0536 56.1187C48.1613 55.8631 48.3181 55.6318 48.5148 55.4384C51.9718 51.923 54.3248 47.4462 55.2763 42.5737C56.2279 37.7012 55.7354 32.6517 53.861 28.0633C51.9867 23.4748 48.8145 19.5534 44.7455 16.7944C40.6765 14.0355 35.8932 12.5628 31 12.5626ZM31 23.0314C28.1444 23.0311 25.3528 23.8906 22.9784 25.501C20.604 27.1115 18.7533 29.4005 17.6605 32.0788C16.5677 34.757 16.2818 37.704 16.8389 40.5472C17.3961 43.3904 18.7713 46.0019 20.7906 48.0517C20.9876 48.2448 21.1448 48.4758 21.2528 48.7313C21.3609 48.9867 21.4178 49.2615 21.4202 49.5395C21.4226 49.8175 21.3704 50.0932 21.2667 50.3505C21.163 50.6078 21.0099 50.8416 20.8162 51.0382C20.6225 51.2348 20.3923 51.3902 20.1388 51.4955C19.8853 51.6008 19.6137 51.6538 19.3399 51.6513C19.066 51.6489 18.7954 51.5912 18.5437 51.4814C18.2921 51.3717 18.0645 51.2122 17.8743 51.0122C15.2783 48.3769 13.5104 45.0192 12.7942 41.3639C12.078 37.7086 12.4456 33.9198 13.8505 30.4765C15.2555 27.0333 17.6347 24.0903 20.6873 22.0197C23.7398 19.9492 27.3287 18.844 31 18.844C34.6713 18.844 38.2602 19.9492 41.3128 22.0197C44.3653 24.0903 46.7445 27.0333 48.1495 30.4765C49.5545 33.9198 49.9221 37.7086 49.2059 41.3639C48.4896 45.0192 46.7218 48.3769 44.1258 51.0122C43.7368 51.3936 43.2158 51.6047 42.675 51.5999C42.1342 51.5951 41.6169 51.3749 41.2345 50.9867C40.8521 50.5985 40.6352 50.0734 40.6305 49.5244C40.6258 48.9754 40.8337 48.4466 41.2094 48.0517C43.2287 46.0019 44.6039 43.3904 45.1611 40.5472C45.7182 37.704 45.4323 34.757 44.3395 32.0788C43.2467 29.4005 41.396 27.1115 39.0216 25.501C36.6472 23.8906 33.8556 23.0311 31 23.0314ZM31 29.3126C28.812 29.3126 26.7136 30.195 25.1664 31.7656C23.6192 33.3362 22.75 35.4664 22.75 37.6876C22.75 39.9088 23.6192 42.039 25.1664 43.6096C26.7136 45.1802 28.812 46.0626 31 46.0626C33.188 46.0626 35.2865 45.1802 36.8336 43.6096C38.3808 42.039 39.25 39.9088 39.25 37.6876C39.25 35.4664 38.3808 33.3362 36.8336 31.7656C35.2865 30.195 33.188 29.3126 31 29.3126ZM26.875 37.6876C26.875 36.577 27.3096 35.5119 28.0832 34.7266C28.8568 33.9413 29.906 33.5001 31 33.5001C32.094 33.5001 33.1432 33.9413 33.9168 34.7266C34.6904 35.5119 35.125 36.577 35.125 37.6876C35.125 38.7982 34.6904 39.8633 33.9168 40.6486C33.1432 41.4339 32.094 41.8751 31 41.8751C29.906 41.8751 28.8568 41.4339 28.0832 40.6486C27.3096 39.8633 26.875 38.7982 26.875 37.6876Z"
        fill="#60498C"
      />
    </svg>
  );
}

function VisibilityIcon() {
  return (
    <svg
      width="62"
      height="58"
      viewBox="0 0 62 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.84615 49.4737V9.68421H27.3077V29.5789H47.7692V32.4211C49.8154 32.4211 51.7738 32.7905 53.6154 33.4158V21.0526L36.0769 4H6.84615C3.60154 4 1 6.52947 1 9.68421V49.4737C1 50.9812 1.61593 52.427 2.7123 53.493C3.80867 54.559 5.29566 55.1579 6.84615 55.1579H31.2538C30.6108 53.3674 30.2308 51.4632 30.2308 49.4737H6.84615ZM33.1538 8.26316L49.2308 23.8947H33.1538V8.26316ZM58 44.5L44.1154 58L36.0769 49.4737L39.4677 46.1768L44.1154 50.6958L54.6092 40.4926L58 44.5Z"
        fill="#60498C"
      />
    </svg>
  );
}

function CollaborationIcon() {
  return (
    <svg
      width="58"
      height="55"
      viewBox="0 0 58 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.4422 20.9606C42.835 20.9619 45.1958 21.5161 47.3437 22.5805C49.4916 23.645 51.3696 25.1916 52.834 27.1018C54.2984 29.012 55.3103 31.2352 55.7921 33.601C56.2739 35.9669 56.2129 38.4127 55.6138 40.7511C55.0147 43.0895 53.8933 45.2585 52.3356 47.0919C50.7779 48.9254 48.8251 50.3746 46.6268 51.3287C44.4286 52.2827 42.0432 52.7163 39.6533 52.5961C37.2635 52.476 34.9326 51.8053 32.8391 50.6355L26.6054 52.5489C26.3586 52.6231 26.0966 52.6286 25.8469 52.5648C25.5973 52.5011 25.3694 52.3704 25.1873 52.1866C25.0052 52.0028 24.8758 51.7727 24.8126 51.5207C24.7494 51.2687 24.7548 51.0042 24.8284 50.7551L26.7239 44.4592C25.4011 42.0495 24.7244 39.333 24.7606 36.5783C24.7967 33.8236 25.5446 31.1261 26.9302 28.7526C28.3159 26.3791 30.2912 24.4118 32.661 23.0452C35.0308 21.6786 37.7129 20.96 40.4422 20.9606ZM25.6646 24.4778C23.7294 26.8446 22.3798 29.6423 21.7272 32.6396C21.0747 35.637 21.138 38.748 21.9119 41.7158C20.5878 41.9374 19.208 42.064 17.7933 42.064C13.6991 42.064 9.88359 41.1073 7.02983 39.3557C4.17259 37.5971 2.11328 34.9064 2.11328 31.5123C2.11328 29.6466 2.8475 27.8574 4.15442 26.5381C5.46134 25.2189 7.2339 24.4778 9.08217 24.4778H25.6646ZM33.4733 38.5468C33.0112 38.5468 32.5681 38.732 32.2413 39.0618C31.9146 39.3917 31.731 39.839 31.731 40.3054C31.731 40.7718 31.9146 41.2191 32.2413 41.5489C32.5681 41.8787 33.0112 42.064 33.4733 42.064H40.4422C40.9042 42.064 41.3474 41.8787 41.6741 41.5489C42.0008 41.2191 42.1844 40.7718 42.1844 40.3054C42.1844 39.839 42.0008 39.3917 41.6741 39.0618C41.3474 38.732 40.9042 38.5468 40.4422 38.5468H33.4733ZM33.4733 31.5123C33.0112 31.5123 32.5681 31.6976 32.2413 32.0274C31.9146 32.3572 31.731 32.8045 31.731 33.2709C31.731 33.7373 31.9146 34.1846 32.2413 34.5144C32.5681 34.8442 33.0112 35.0295 33.4733 35.0295H47.411C47.8731 35.0295 48.3162 34.8442 48.643 34.5144C48.9697 34.1846 49.1533 33.7373 49.1533 33.2709C49.1533 32.8045 48.9697 32.3572 48.643 32.0274C48.3162 31.6976 47.8731 31.5123 47.411 31.5123H33.4733ZM17.7933 1.61572C20.3346 1.61572 22.7719 2.63478 24.5689 4.44871C26.3659 6.26264 27.3755 8.72285 27.3755 11.2881C27.3755 13.8534 26.3659 16.3136 24.5689 18.1276C22.7719 19.9415 20.3346 20.9606 17.7933 20.9606C15.2519 20.9606 12.8146 19.9415 11.0176 18.1276C9.22061 16.3136 8.21106 13.8534 8.21106 11.2881C8.21106 8.72285 9.22061 6.26264 11.0176 4.44871C12.8146 2.63478 15.2519 1.61572 17.7933 1.61572ZM40.4491 5.12241C41.4796 5.12149 42.5001 5.32562 43.4523 5.72313C44.4045 6.12064 45.2698 6.70373 45.9986 7.43906C46.7274 8.17439 47.3054 9.04753 47.6996 10.0085C48.0939 10.9696 48.2965 11.9996 48.2961 13.0397C48.2956 15.0052 47.5673 16.8995 46.2542 18.3508C44.3758 17.7486 42.4165 17.4425 40.4456 17.4433C38.4749 17.4414 36.5157 17.7463 34.6371 18.3472C33.3273 16.8958 32.6016 15.003 32.6022 13.0397C32.6022 11.9999 32.8052 10.9702 33.1996 10.0096C33.594 9.04902 34.1722 8.17629 34.9009 7.44134C35.6297 6.70638 36.4948 6.1236 37.4467 5.72631C38.3987 5.32902 39.419 5.12149 40.4491 5.12241Z"
        fill="#60498C"
      />
    </svg>
  );
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string | React.ReactNode;
  hasButton?: boolean;
}

function ProcessStep({
  number,
  title,
  description,
  hasButton,
}: ProcessStepProps) {
  return (
    <div className="mb-8 lg:mb-12">
      <div className="flex items-start gap-4 lg:gap-[73px] relative">
        {/* Number */}
        <div className="flex-shrink-0 w-[36px] relative">
          <span className="text-brand-purple text-[32px] lg:text-[36px] font-bold">
            {number}
          </span>
          {number < 7 && (
            <div className="absolute top-[44px] left-[18px] w-[1px] h-[80px] lg:h-[100px] bg-brand-gray opacity-30"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-3">
            {title}
          </h3>
          <div className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
            {description}
          </div>
          {hasButton && (
            <button className="mt-4 lg:mt-6 px-6 py-2 rounded-[10px] bg-brand-purple text-white text-[16px] font-medium hover:bg-opacity-90 transition-opacity">
              Start Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="rounded-[20px] border border-[#EDEDED] bg-[#F0EDF5] p-6 lg:p-[70px_43px_48px] flex flex-col items-center text-center h-[260px]">
      <div className="mb-4 lg:mb-6">{icon}</div>
      <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.36px] lg:tracking-[-0.4px] mb-3 lg:mb-4">
        {title}
      </h3>
      <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[24px]">
        {description}
      </p>
    </div>
  );
}

interface DocumentItemProps {
  text: string;
}

function DocumentItem({ text }: DocumentItemProps) {
  return (
    <div className="flex items-center gap-4 lg:gap-[30px] px-4 py-4 lg:px-[16px] lg:py-[16px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5]">
      <div className="flex-shrink-0">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
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
          <g mask="url(#mask0)">
            <path d="M0 0H30V30H0V0Z" fill="#60498C" />
          </g>
        </svg>
      </div>
      <span className="text-brand-gray text-[16px] lg:text-[20px] font-medium leading-[20px]">
        {text}
      </span>
    </div>
  );
}

export default function VendorRegistrationPage() {
  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-6 lg:mb-8">
          <span className="font-extrabold text-brand-purple">Vendor </span>
          <span className="text-brand-gray">Registration</span>
        </h1>

        {/* Subtitle */}
        <p className="text-brand-purple text-[14px] lg:text-[16px] font-extrabold leading-[24px] mb-2">
          Interested in becoming a vendor with Dammam Airports?
        </p>
        <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-12 lg:mb-[72px]">
          Register with us to beconsidered for upcoming opportunities.
        </p>

        {/* Registration Process Steps */}
        <div className="mb-12 lg:mb-[126px]">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Registration{" "}
              </span>
              <span className="text-brand-gray">Process</span>
              <span className="font-extrabold text-brand-purple"> </span>
              <span className="text-brand-gray">Steps</span>
            </h2>
          </div>

          <div className="max-w-[1200px]">
            <ProcessStep
              number={1}
              title="Self-Registration on Ariba Network"
              description={
                <>
                  <p className="mb-2">
                    To begin the onboarding process, please follow these steps:
                  </p>
                  <p className="mb-2">
                    Complete the{" "}
                    <span className="font-extrabold text-brand-purple">
                      self-registration form
                    </span>{" "}
                    with accurate and up-to-date information.
                  </p>
                  <p>
                    <span className="font-extrabold text-brand-purple">
                      Verify
                    </span>{" "}
                    your email address by clicking on the confirmation link sent
                    to your registeredemail.
                  </p>
                </>
              }
              hasButton={true}
            />

            <ProcessStep
              number={2}
              title="Self-registration Validation and Approval"
              description="Self-registration request will be approved by DACO Vendor Relationship Management(VRM) team."
            />

            <ProcessStep
              number={3}
              title="Supplier Profile Completion"
              description={
                <>
                  <p className="mb-2">
                    After the Self-registration is approved , You will receive
                    registration link to complete the registration process.
                  </p>
                  <p className="mb-2">
                    <span className="font-extrabold text-brand-purple">
                      Log in to your Ariba Supplier{" "}
                    </span>
                    account and proceed to complete your company profile.
                  </p>
                  <p>
                    Ensure that all required information is provided, including
                    business details, certifications, and contact information.
                  </p>
                </>
              }
            />

            <ProcessStep
              number={4}
              title="Document Submission"
              description={
                <>
                  Upload the necessary documents as outlined in the{" "}
                  <span className="font-extrabold text-brand-purple">
                    Ariba Supplier
                  </span>{" "}
                  registration onboarding checklist. This may include legal
                  documents, certificates, and any other information required
                  for our records.
                </>
              }
            />

            <ProcessStep
              number={5}
              title="Supplier Registration Validation and Approval"
              description={
                <>
                  <p className="mb-2">
                    <span className="font-extrabold text-brand-purple">
                      DACO VRM
                    </span>{" "}
                    team will review the information and documents submitted.
                  </p>
                  <p>
                    Once the validation process is complete, you will receive
                    confirmation of your approved supplier registration status.
                  </p>
                </>
              }
            />

            <ProcessStep
              number={6}
              title="Supplier Qualification"
              description="Upon vendor registration approval, you will receive link to complete the vendor qualification process."
            />

            <ProcessStep
              number={7}
              title="Supplier Qualification Validation and Approval"
              description={
                <>
                  <p className="mb-2">
                    <span className="font-extrabold text-brand-purple">
                      DACO VRM
                    </span>{" "}
                    team will review the qualification process and will be
                    approved.
                  </p>
                  <p>
                    Once the qualification process is complete, you will receive
                    confirmation of your approved supplier qualification status.
                  </p>
                </>
              }
            />
          </div>
        </div>

        {/* Benefits of Ariba Supplier Network */}
        <div className="mb-12 lg:mb-[66px]">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Benefits of{" "}
              </span>
              <span className="text-brand-gray">Ariba</span>
              <span className="font-extrabold text-brand-purple"> </span>
              <span className="text-brand-gray">Supplier Network</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[20px] max-w-[1200px]">
            <BenefitCard
              icon={<EfficiencyIcon />}
              title="Efficiency"
              description="Streamlined communication and transaction processes."
            />
            <BenefitCard
              icon={<VisibilityIcon />}
              title="Visibility"
              description="Real-time access to purchase orders, invoices, and payment status."
            />
            <BenefitCard
              icon={<CollaborationIcon />}
              title="Collaboration"
              description="Improved collaboration with our procurement team."
            />
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-12 lg:mb-[70px]">
          <div className="flex items-center gap-4 mb-8 lg:mb-12">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Required{" "}
              </span>
              <span className="text-brand-gray">Documents</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-[1200px]">
            <DocumentItem text="Valid Commercial Registration (CR)" />
            <DocumentItem text="Company Profile & Portfolio" />
            <DocumentItem text="VAT Certificate" />
            <DocumentItem text="Previous Experience / Clients" />
            <DocumentItem text="Bank Account IBAN Letter" />
            <DocumentItem text="Relevant Certifications (ISO, safety, etc.)" />
          </div>
        </div>

        {/* Contact/Support */}
        <div>
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Contact/</span>
              <span className="text-brand-gray">Support</span>
            </h2>
          </div>

          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-8 lg:mb-12 max-w-[1186px]">
            If you have any questions or encounter any difficulties during the
            onboarding process, please do not hesitate to reach out to our
            dedicated{" "}
            <span className="font-bold text-brand-purple">support team.</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[99px] max-w-[930px]">
            <div className="flex items-start gap-3">
              <Mail className="w-8 h-8 text-brand-gray mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#454545] text-[16px] font-bold leading-[18px] mb-2">
                  Email
                </p>
                <a
                  href="mailto:supplierregistration@dammamairports.sa"
                  className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] hover:underline"
                >
                  supplierregistration@dammamairports.sa
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-8 h-8 text-brand-gray mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#454545] text-[16px] font-bold leading-[18px] mb-2">
                  Email
                </p>
                <a
                  href="mailto:nahmed@dammamairports.sa"
                  className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] hover:underline"
                >
                  nahmed@dammamairports.sa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
