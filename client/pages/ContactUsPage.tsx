import Header from "../components/Header";
import Footer from "../components/Footer";
import AirportOfficesCard from "../components/AirportOfficesCard";
import { Clock, Phone, Mail, Send, ChevronDown } from "lucide-react";
import { useState } from "react";

// Location Icon SVG Component
function LocationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4563 35.5675C21.1775 35.7677 20.8429 35.8754 20.4996 35.8754C20.1564 35.8754 19.8218 35.7677 19.543 35.5675C11.2934 29.6874 2.53821 17.5924 11.3891 8.85258C13.8189 6.46237 17.0912 5.1235 20.4996 5.125C23.9163 5.125 27.1946 6.46604 29.6102 8.85088C38.461 17.5907 29.7058 29.684 21.4563 35.5675Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4167 20.8333C21.3228 20.8333 22.1919 20.4734 22.8326 19.8326C23.4734 19.1919 23.8333 18.3228 23.8333 17.4167C23.8333 16.5105 23.4734 15.6415 22.8326 15.0007C22.1919 14.36 21.3228 14 20.4167 14C19.5105 14 18.6415 14.36 18.0007 15.0007C17.36 15.6415 17 16.5105 17 17.4167C17 18.3228 17.36 19.1919 18.0007 19.8326C18.6415 20.4734 19.5105 20.8333 20.4167 20.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Email Icon SVG Component
function EmailIcon({ className = "w-6 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 45 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.394 14.4231L23.8926 24.8123C23.5374 25.1076 23.0905 25.2693 22.6292 25.2693C22.1679 25.2693 21.721 25.1076 21.3658 24.8123L8.87032 14.4231C8.80327 14.6256 8.76917 14.8377 8.76933 15.0511V30.9488C8.76933 31.4758 8.97796 31.9813 9.34933 32.3539C9.7207 32.7266 10.2244 32.936 10.7496 32.936H34.5127C35.0379 32.936 35.5416 32.7266 35.913 32.3539C36.2844 31.9813 36.493 31.4758 36.493 30.9488V15.0511C36.4938 14.8378 36.4604 14.6258 36.394 14.4231ZM10.7496 11.0767H34.5127C35.5631 11.0767 36.5705 11.4954 37.3133 12.2407C38.056 12.9861 38.4733 13.997 38.4733 15.0511V30.9488C38.4733 32.0029 38.056 33.0138 37.3133 33.7591C36.5705 34.5045 35.5631 34.9232 34.5127 34.9232H10.7496C9.69919 34.9232 8.69182 34.5045 7.94907 33.7591C7.20633 33.0138 6.78906 32.0029 6.78906 30.9488V15.0511C6.78906 13.997 7.20633 12.9861 7.94907 12.2407C8.69182 11.4954 9.69919 11.0767 10.7496 11.0767ZM10.3337 13.0639L21.3757 22.211C21.7293 22.5041 22.1734 22.665 22.6321 22.6661C23.0908 22.6671 23.5356 22.5084 23.8906 22.217L35.0435 13.0639H10.3337Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Phone Icon SVG Component
function PhoneIcon({
  className = "w-[30px] h-[38px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4219 27.708C14.1069 27.708 13.8049 27.8331 13.5822 28.0558C13.3595 28.2785 13.2344 28.5806 13.2344 28.8955C13.2344 29.2105 13.3595 29.5125 13.5822 29.7352C13.8049 29.9579 14.1069 30.083 14.4219 30.083H17.5885C17.9035 30.083 18.2055 29.9579 18.4282 29.7352C18.6509 29.5125 18.776 29.2105 18.776 28.8955C18.776 28.5806 18.6509 28.2785 18.4282 28.0558C18.2055 27.8331 17.9035 27.708 17.5885 27.708H14.4219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.67187 3.16699C8.72704 3.16699 7.82091 3.54233 7.15281 4.21042C6.48471 4.87852 6.10938 5.78466 6.10938 6.72949V31.2712C6.10938 32.216 6.48471 33.1221 7.15281 33.7902C7.82091 34.4583 8.72704 34.8337 9.67187 34.8337H22.3385C23.2834 34.8337 24.1895 34.4583 24.8576 33.7902C25.5257 33.1221 25.901 32.216 25.901 31.2712V6.72949C25.901 5.78466 25.5257 4.87852 24.8576 4.21042C24.1895 3.54233 23.2834 3.16699 22.3385 3.16699H9.67187ZM8.48438 6.72949C8.48438 6.41455 8.60949 6.1125 8.83219 5.8898C9.05488 5.6671 9.35693 5.54199 9.67187 5.54199H22.3385C22.6535 5.54199 22.9555 5.6671 23.1782 5.8898C23.4009 6.1125 23.526 6.41455 23.526 6.72949V31.2712C23.526 31.5861 23.4009 31.8881 23.1782 32.1108C22.9555 32.3335 22.6535 32.4587 22.3385 32.4587H9.67187C9.35693 32.4587 9.05488 32.3335 8.83219 32.1108C8.60949 31.8881 8.48438 31.5861 8.48438 31.2712V6.72949Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Upload Icon SVG Component
function UploadIcon({
  className = "w-[18px] h-[18px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1969 11.7002V14.7002C16.1969 15.098 16.0283 15.4796 15.7282 15.7609C15.4282 16.0422 15.0212 16.2002 14.5969 16.2002H3.39687C2.97253 16.2002 2.56556 16.0422 2.2655 15.7609C1.96545 15.4796 1.79688 15.098 1.79688 14.7002V11.7002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5984 5.3998L8.99844 1.7998L5.39844 5.3998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1.7998V11.6998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Section Header Component
interface SectionHeaderProps {
  boldText: string;
  normalText: string;
}

function SectionHeader({ boldText, normalText }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-[10px] mb-6 lg:mb-8">
      <div className="w-1 h-[34px] bg-brand-purple flex-shrink-0"></div>
      <h2 className="text-[29px] leading-6 tracking-[-0.58px]">
        <span className="font-extrabold text-brand-purple">{boldText} </span>
        <span className="font-medium text-brand-gray">{normalText}</span>
      </h2>
    </div>
  );
}

// Contact Info Card Component
interface ContactInfoCardProps {
  icon: "clock" | "phone" | "email" | "location";
  title: string;
  content: string | string[];
}

function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
  const icons = {
    clock: <Clock className="w-5 h-5 text-brand-gray" />,
    phone: <PhoneIcon className="w-5 h-5 text-brand-gray" />,
    email: <EmailIcon className="w-6 h-5 text-brand-gray" />,
    location: <LocationIcon className="w-5 h-5 text-brand-gray" />,
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-2">
      <div className="flex items-center gap-[9px]">
        {icons[icon]}
        <h3 className="text-[16px] lg:text-[20px] font-bold leading-[18px] lg:leading-[29px] tracking-[-0.25px] lg:tracking-[-0.4px] text-[#454545]">
          {title}
        </h3>
      </div>
      <div className="lg:ml-[29px]">
        {Array.isArray(content) ? (
          <div className="flex flex-col gap-1">
            {content.map((line, idx) => (
              <p
                key={idx}
                className="text-[16px] font-medium leading-[18px] lg:leading-6 tracking-[-0.25px] text-brand-gray"
              >
                {line}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-[16px] font-medium leading-[18px] lg:leading-[29px] tracking-[-0.25px] text-brand-gray">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactUsPage() {
  const [inquiryCategory, setInquiryCategory] = useState("");
  const [inquirySubject, setInquirySubject] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [complaintLength, setComplaintLength] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 lg:px-[120px] pt-[40px] lg:pt-[108px] pb-8 lg:pb-12">
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[45px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-6 lg:mb-[30px]">
            <span className="font-extrabold text-brand-purple">Contact </span>
            <span className="font-medium text-brand-gray">Us</span>
          </h1>

          <p className="text-[16px] font-medium leading-6 text-brand-gray mb-6 lg:mb-[46px] max-w-[932px]">
            <span className="font-medium">
              For all media-related questions, interview requests, or press
              statements, please{" "}
            </span>
            <span className="font-bold text-brand-purple">
              contact our communications team:
            </span>
          </p>

          {/* Hero Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fd0fb8dfe54cf0703f12e68ab92d0c3957086aad?width=2400"
            alt="Airport Terminal"
            className="w-full max-w-[1200px] h-auto aspect-[40/11] rounded-[20px] object-cover"
          />
        </section>

        {/* Head Office Section */}
        <section className="px-4 lg:px-[120px] py-8 lg:py-12">
          <SectionHeader boldText="Head" normalText="Office" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1200px]">
            <ContactInfoCard
              icon="clock"
              title="Working Hours"
              content={[
                "Sunday – Thursday, 8:00 AM – 4:00 PM",
                "(Closed on Fridays, Saturdays, and public holidays)",
              ]}
            />
            <ContactInfoCard
              icon="phone"
              title="Phone"
              content="+966 (13) XXX XXXX"
            />
            <ContactInfoCard
              icon="email"
              title="Email"
              content="info@daco.sa"
            />
            <ContactInfoCard
              icon="location"
              title="Address"
              content="King Fahd International Airport, Main P.O Box 3477, Mezzanine Level, Dammam 31471, Saudi Arabia"
            />
          </div>
        </section>

        {/* Airport Offices Section */}
        <section className="px-4 lg:px-[120px] py-8 lg:py-12">
          <SectionHeader boldText="Airport" normalText="Offices" />

          <AirportOfficesCard />
        </section>

        {/* General Inquiry Form Section */}
        <section className="px-4 lg:px-[120px] py-8 lg:py-12">
          <SectionHeader boldText="General" normalText="Inquiry Form" />

          <p className="text-[16px] font-medium leading-6 tracking-[-0.32px] text-brand-gray mb-8 lg:mb-12 max-w-[1195px]">
            <span className="font-medium">
              For questions regarding airport services, procurement
              opportunities, or general company information, vendors and
              stakeholders{" "}
            </span>
            <span className="font-bold">may </span>
            <span className="font-bold text-brand-purple">submit</span>
            <span className="font-medium"> their inquiries via the </span>
            <span className="font-bold text-brand-purple">
              General Inquiry Form{" "}
            </span>
            <span className="font-medium">available on our website.</span>
          </p>

          <div className="max-w-[1200px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            <form className="space-y-6 lg:space-y-8">
              {/* Row 1: Full Name & Company */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Full Name
                    </span>
                    <span className="text-[14px] font-extrabold leading-4 text-red-600">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Company / Organization
                    </span>
                    <span className="text-[14px] font-extrabold leading-4 text-red-600">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="If applicable"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3 placeholder:text-brand-gray placeholder:text-[12px] placeholder:font-medium"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Email Address
                    </span>
                    <span className="text-[14px] font-extrabold leading-4 text-red-600">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Phone number
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                  />
                </div>
              </div>

              {/* Row 3: Category & Subject */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Category
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={inquiryCategory}
                      onChange={(e) => setInquiryCategory(e.target.value)}
                      className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3 appearance-none"
                    >
                      <option value=""></option>
                      <option value="procurement">Procurement</option>
                      <option value="operations">Operations</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Subject of Inquiry
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={inquirySubject}
                      onChange={(e) => setInquirySubject(e.target.value)}
                      className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3 appearance-none"
                    >
                      <option value=""></option>
                      <option value="services">Airport Services</option>
                      <option value="opportunities">
                        Business Opportunities
                      </option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 mb-4">
                  <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                    Message / Question
                  </span>
                  <span className="text-[14px] font-extrabold leading-4 text-red-600">
                    *
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    maxLength={200}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    className="w-full h-[125px] rounded-[10px] border border-[#EDEDED] bg-white px-3 py-3 resize-none"
                  ></textarea>
                  <span className="absolute bottom-3 right-3 text-[12px] font-medium text-brand-gray">
                    {messageLength} / 200
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 h-[32px] px-6 rounded-[10px] bg-brand-purple text-white"
                >
                  <Send className="w-[18px] h-5" strokeWidth={1.5} />
                  <span className="text-[16px] font-medium leading-[18px] tracking-[-0.25px]">
                    Submit an Inquiry
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Complaint Submission Section */}
        <section className="px-4 lg:px-[120px] py-8 lg:py-12">
          <SectionHeader boldText="Complaint" normalText="Submission" />

          <p className="text-[16px] font-medium leading-6 tracking-[-0.32px] text-brand-gray mb-8 lg:mb-12 max-w-[1195px]">
            <span className="font-medium">
              DACO is committed to ensuring the highest standards of service and
              transparency. If you wish to raise a complaint, please use
              the{" "}
            </span>
            <span className="font-bold text-brand-purple">
              Complaint Submission Form
            </span>
            <span className="font-medium"> available on our website.</span>
          </p>

          <div className="max-w-[1200px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            {/* Complainant Information */}
            <h3 className="text-[32px] font-medium leading-normal tracking-[-0.64px] text-brand-gray text-center mb-8 lg:mb-12">
              Complainant Information
            </h3>

            <form className="space-y-6 lg:space-y-8">
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Full Name
                    </span>
                    <span className="text-[14px] font-extrabold leading-4 text-red-600">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Phone number
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 mb-4">
                  <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                    Email Address
                  </span>
                  <span className="text-[14px] font-extrabold leading-4 text-red-600">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3"
                />
              </div>

              {/* Complainant Details */}
              <h3 className="text-[32px] font-medium leading-normal tracking-[-0.64px] text-brand-gray text-center pt-6 lg:pt-8">
                Complainant Details
              </h3>

              {/* Row 2: Type of Complaint & Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[50px]">
                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Type of Complaint
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value)}
                      className="w-full h-[44px] rounded-[10px] border border-[#EDEDED] bg-white px-3 appearance-none text-brand-gray text-[12px] font-medium"
                    >
                      <option value="">Select Complaint Type</option>
                      <option value="service">Service Quality</option>
                      <option value="facility">Facility Issue</option>
                      <option value="staff">Staff Conduct</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <span className="text-[14px] font-extrabold leading-6 text-brand-gray">
                      Details of Complaint
                    </span>
                    <span className="text-[14px] font-extrabold leading-4 text-red-600">
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <textarea
                      maxLength={200}
                      onChange={(e) =>
                        setComplaintLength(e.target.value.length)
                      }
                      className="w-full h-[125px] rounded-[10px] border border-[#EDEDED] bg-white px-3 py-3 resize-none"
                    ></textarea>
                    <span className="absolute bottom-3 right-3 text-[12px] font-medium text-brand-gray">
                      {complaintLength} / 200
                    </span>
                  </div>
                </div>
              </div>

              {/* Upload File Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 h-[32px] px-6 rounded-[10px] bg-[#D0D0D0] text-white"
                >
                  <UploadIcon className="text-white" />
                  <span className="text-[16px] font-bold leading-[18px] tracking-[-0.25px]">
                    Upload a File
                  </span>
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center h-[32px] px-6 rounded-[10px] bg-brand-purple text-white"
                >
                  <span className="text-[16px] font-medium leading-5">
                    Raise a Complaint
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-[16px] font-medium leading-6 tracking-[-0.32px] text-brand-gray mt-8 lg:mt-12 max-w-[891px]">
            <span className="font-medium">All complaints are reviewed by</span>
            <span className="font-bold"> </span>
            <span className="font-bold text-brand-purple">
              DACO's Customer Relations Department{" "}
            </span>
            <span className="font-medium">and acknowledged within </span>
            <span className="font-bold text-brand-purple">5 working days.</span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
