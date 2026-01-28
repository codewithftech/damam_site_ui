import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LogIn, Check } from "lucide-react";

// Custom Profile Icon SVG
function ProfileIcon() {
  return (
    <svg
      width="48"
      height="38"
      viewBox="0 0 48 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 0C3.52696 0 2.30606 0.500445 1.40589 1.39124C0.505713 2.28204 0 3.49022 0 4.75V33.25C0 34.5098 0.505713 35.718 1.40589 36.6088C2.30606 37.4996 3.52696 38 4.8 38H43.2C44.473 38 45.6939 37.4996 46.5941 36.6088C47.4943 35.718 48 34.5098 48 33.25V4.75C48 3.49022 47.4943 2.28204 46.5941 1.39124C45.6939 0.500445 44.473 0 43.2 0H4.8ZM28.8 11.875C28.8 11.2451 29.0529 10.641 29.5029 10.1956C29.953 9.75022 30.5635 9.5 31.2 9.5H38.4C39.0365 9.5 39.647 9.75022 40.0971 10.1956C40.5471 10.641 40.8 11.2451 40.8 11.875C40.8 12.5049 40.5471 13.109 40.0971 13.5544C39.647 13.9998 39.0365 14.25 38.4 14.25H31.2C30.5635 14.25 29.953 13.9998 29.5029 13.5544C29.0529 13.109 28.8 12.5049 28.8 11.875ZM28.8 19C28.8 18.3701 29.0529 17.766 29.5029 17.3206C29.953 16.8752 30.5635 16.625 31.2 16.625H38.4C39.0365 16.625 39.647 16.8752 40.0971 17.3206C40.5471 17.766 40.8 18.3701 40.8 19C40.8 19.6299 40.5471 20.234 40.0971 20.6794C39.647 21.1248 39.0365 21.375 38.4 21.375H31.2C30.5635 21.375 29.953 21.1248 29.5029 20.6794C29.0529 20.234 28.8 19.6299 28.8 19ZM28.8 26.125C28.8 25.4951 29.0529 24.891 29.5029 24.4456C29.953 24.0002 30.5635 23.75 31.2 23.75H38.4C39.0365 23.75 39.647 24.0002 40.0971 24.4456C40.5471 24.891 40.8 25.4951 40.8 26.125C40.8 26.7549 40.5471 27.359 40.0971 27.8044C39.647 28.2498 39.0365 28.5 38.4 28.5H31.2C30.5635 28.5 29.953 28.2498 29.5029 27.8044C29.0529 27.359 28.8 26.7549 28.8 26.125ZM9.6 14.25C9.6 12.3603 10.3586 10.5481 11.7088 9.21186C13.0591 7.87567 14.8904 7.125 16.8 7.125C18.7096 7.125 20.5409 7.87567 21.8912 9.21186C23.2414 10.5481 24 12.3603 24 14.25C24 16.1397 23.2414 17.9519 21.8912 19.2881C20.5409 20.6243 18.7096 21.375 16.8 21.375C14.8904 21.375 13.0591 20.6243 11.7088 19.2881C10.3586 17.9519 9.6 16.1397 9.6 14.25ZM14.2608 23.75C12.7494 23.7495 11.2761 24.2197 10.0497 25.0939C8.82335 25.9682 7.90612 27.2022 7.428 28.6211L7.3224 28.937L7.3128 28.9655C7.212 29.2647 7.1808 29.3621 7.212 29.4286C7.2264 29.4595 7.26 29.4833 7.3032 29.5213C7.38 29.5806 7.4952 29.6732 7.6536 29.8894C7.87597 30.1945 8.1684 30.4429 8.50679 30.6143C8.84519 30.7856 9.21987 30.875 9.6 30.875H24C24.3801 30.875 24.7548 30.7856 25.0932 30.6143C25.4316 30.4429 25.724 30.1945 25.9464 29.8894C26.0435 29.7497 26.1617 29.6256 26.2968 29.5213C26.3424 29.4833 26.3712 29.4595 26.388 29.4262C26.4216 29.3621 26.388 29.2647 26.2872 28.9655L26.2776 28.937L26.172 28.6211C25.694 27.2026 24.7771 25.9689 23.5513 25.0946C22.3254 24.2204 20.8526 23.75 19.3416 23.75H14.2608Z"
        fill="#60498C"
      />
    </svg>
  );
}

// Custom Login Icon SVG
function LoginIcon() {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 17.9092C13.7348 17.9092 13.4804 18.0145 13.2929 18.2021C13.1054 18.3896 13 18.644 13 18.9092C13 19.1744 13.1054 19.4288 13.2929 19.6163C13.4804 19.8038 13.7348 19.9092 14 19.9092H19C19.5304 19.9092 20.0391 19.6985 20.4142 19.3234C20.7893 18.9483 21 18.4396 21 17.9092V3.90918C21 3.37875 20.7893 2.87004 20.4142 2.49497C20.0391 2.11989 19.5304 1.90918 19 1.90918H14C13.7348 1.90918 13.4804 2.01454 13.2929 2.20207C13.1054 2.38961 13 2.64396 13 2.90918C13 3.1744 13.1054 3.42875 13.2929 3.61629C13.4804 3.80382 13.7348 3.90918 14 3.90918H19V17.9092H14Z"
        fill="white"
      />
      <path
        d="M15.714 11.6093C15.8966 11.4231 15.9992 11.173 16 10.9123V10.9063C15.9991 10.6421 15.8938 10.389 15.707 10.2023L11.707 6.20226C11.6148 6.10675 11.5044 6.03057 11.3824 5.97816C11.2604 5.92575 11.1292 5.89816 10.9964 5.89701C10.8636 5.89586 10.7319 5.92116 10.609 5.97144C10.4861 6.02172 10.3745 6.09597 10.2806 6.18987C10.1867 6.28376 10.1125 6.39541 10.0622 6.51831C10.0119 6.6412 9.9866 6.77288 9.98775 6.90566C9.9889 7.03844 10.0165 7.16966 10.0689 7.29167C10.1213 7.41367 10.1975 7.52401 10.293 7.61626L12.586 9.90926H3C2.73478 9.90926 2.48043 10.0146 2.29289 10.2022C2.10536 10.3897 2 10.644 2 10.9093C2 11.1745 2.10536 11.4288 2.29289 11.6164C2.48043 11.8039 2.73478 11.9093 3 11.9093H12.586L10.293 14.2023C10.1975 14.2945 10.1213 14.4049 10.0689 14.5269C10.0165 14.6489 9.9889 14.7801 9.98775 14.9129C9.9866 15.0456 10.0119 15.1773 10.0622 15.3002C10.1125 15.4231 10.1867 15.5348 10.2806 15.6287C10.3745 15.7225 10.4861 15.7968 10.609 15.8471C10.7319 15.8974 10.8636 15.9227 10.9964 15.9215C11.1292 15.9204 11.2604 15.8928 11.3824 15.8404C11.5044 15.788 11.6148 15.7118 11.707 15.6163L15.707 11.6163L15.714 11.6093Z"
        fill="white"
      />
    </svg>
  );
}

interface CheckItemProps {
  text: string;
}

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex items-start gap-3 lg:gap-4">
      <div className="w-[47px] h-[36px] rounded-[14px] border border-[#EDEDED] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.5L6.66667 11L18 0"
            stroke="#60498C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-brand-gray text-[14px] lg:text-[16px] font-bold leading-[20px] pt-2">
        {text}
      </p>
    </div>
  );
}

export default function VendorProfilePage() {
  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-6 lg:mb-8">
          <span className="font-extrabold text-brand-purple">Vendor </span>
          <span className="text-brand-gray">Profile</span>
        </h1>

        {/* Description Paragraphs */}
        <div className="mb-8 lg:mb-12 max-w-[1200px]">
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-2">
            As part of our commitment to operational excellence and
            transparency,{" "}
            <span className="font-extrabold text-brand-purple">
              Dammam Airports
            </span>{" "}
            collaborates with qualified vendors and service providers across
            multiple categories including{" "}
            <span className="font-extrabold text-brand-purple">
              engineering, IT, facility management, retail, and passenger
              services.
            </span>
          </p>
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
            <span className="font-extrabold text-brand-purple">
              Vendor Profile
            </span>{" "}
            allows approved suppliers and service providers to manage their
            partnership with{" "}
            <span className="font-extrabold text-brand-purple">
              Dammam Airports
            </span>{" "}
            efficiently and transparently.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-[20px] border border-[#EDEDED] overflow-hidden mb-8 lg:mb-12 max-w-[1200px]">
          {/* Card Header */}
          <div className="p-6 lg:p-[60px] lg:pb-0">
            <div className="flex items-center gap-4 mb-8 lg:mb-12">
              <ProfileIcon />
              <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-extrabold leading-[24px]">
                Through your profile, you can:
              </h2>
            </div>

            {/* Separator Line */}
            <div className="h-[1px] bg-[#EDEDED] mb-6 lg:mb-8"></div>

            {/* Check Items Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-[60px] lg:gap-y-[45px] mb-8 lg:mb-12">
              <CheckItem text="Update your company and contact details." />
              <CheckItem text="Maintain valid compliance and certification documents." />
              <CheckItem text="Indicate capabilities or new areas of expertise." />
              <CheckItem text="Access and respond to procurement opportunities." />
              <CheckItem text="Track your registration status and notifications." />
            </div>

            {/* Note Section */}
            <div className="rounded-[15px] border border-[#EDEDED] bg-[#F5F5F5] p-3 lg:p-[10px] mb-6 lg:mb-[60px]">
              <p className="text-brand-gray text-[11px] lg:text-[12px] font-medium leading-[20px]">
                <span className="font-extrabold text-brand-purple">Note:</span>{" "}
                Keeping your profile up to date ensures continued eligibility
                for upcoming business opportunities and smooth coordination with
                our Procurement Department.
              </p>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 lg:gap-3 px-6 lg:px-[10px] py-[10px] rounded-[10px] bg-brand-purple hover:bg-opacity-90 transition-opacity">
            <LoginIcon />
            <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[18px]">
              Login to Vendor Portal
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
