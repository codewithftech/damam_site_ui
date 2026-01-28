import { Mail, Phone, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LocationIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5588 3.93394L10.7442 8.76609C10.579 8.90347 10.3711 8.97865 10.1566 8.97865C9.94199 8.97865 9.73416 8.90347 9.56893 8.76609L3.75709 3.93394C3.7259 4.02813 3.71004 4.12675 3.71012 4.22601V11.6203C3.71012 11.8654 3.80715 12.1005 3.97989 12.2739C4.15262 12.4472 4.38689 12.5446 4.63117 12.5446H15.6838C15.9281 12.5446 16.1624 12.4472 16.3351 12.2739C16.5078 12.1005 16.6049 11.8654 16.6049 11.6203V4.22601C16.6052 4.1268 16.5897 4.02818 16.5588 3.93394ZM4.63117 2.37744H15.6838C16.1724 2.37744 16.6409 2.5722 16.9864 2.91887C17.3318 3.26555 17.5259 3.73574 17.5259 4.22601V11.6203C17.5259 12.1106 17.3318 12.5807 16.9864 12.9274C16.6409 13.2741 16.1724 13.4689 15.6838 13.4689H4.63117C4.14261 13.4689 3.67406 13.2741 3.3286 12.9274C2.98314 12.5807 2.78906 12.1106 2.78906 11.6203V4.22601C2.78906 3.73574 2.98314 3.26555 3.3286 2.91887C3.67406 2.5722 4.14261 2.37744 4.63117 2.37744ZM4.43775 3.30173L9.57354 7.55621C9.73802 7.69254 9.94457 7.76735 10.1579 7.76786C10.3712 7.76836 10.5781 7.69453 10.7433 7.55898L15.9306 3.30173H4.43775Z"
        fill="#808080"
      />
    </svg>
  );
}

export default function ContactProcurementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Title */}
          <h1 className="text-[36px] lg:text-[48px] font-medium lg:font-medium leading-[1.25] lg:leading-[60px] tracking-[-0.96px] mb-4 lg:mb-[30px]">
            <span className="font-extrabold text-brand-purple">Contact </span>
            <span className="text-brand-gray">Procurement </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[76px]">
            <span className="text-brand-gray font-medium">
              For all procurement-related matters with{" "}
            </span>
            <span className="text-brand-purple font-extrabold">
              Dammam Airports Company (DACO),{" "}
            </span>
            <span className="text-brand-gray font-medium">
              please check the contact details below.
            </span>
          </p>

          {/* Hero Image */}
          <div className="mb-8 lg:mb-[57px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb907d0f42fb141fc9649f89b5b64c84e%2F8013d142957442f2ab0b2438df3bcf1b?format=webp&width=800&height=1200"
              alt="Contact Procurement"
              className="w-full h-auto rounded-[20px] object-cover"
            />
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[34px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Email </span>
              <span className="font-medium text-brand-gray">& Hotline</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6 lg:mb-[62px] space-y-2">
            <p className="text-[14px] lg:text-[16px] leading-[24px]">
              <span className="text-brand-gray font-medium">For</span>
              <span className="text-brand-purple font-bold">
                {" "}
                all procurement-related inquiries,
              </span>
              <span className="text-brand-gray font-medium">
                {" "}
                vendors may reach out directly through the following channels:
              </span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[24px]">
              <span className="text-brand-gray font-medium">
                Our procurement team is available to assist with{" "}
              </span>
              <span className="text-brand-purple font-bold">
                vendor registration, sourcing opportunities, tender submissions,
                and contract-related queries.
              </span>
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[55px]">
            {/* Working Hours */}
            <div className="flex gap-3 lg:gap-[34px]">
              <div className="flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-gray" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#454545] leading-[18px] tracking-[-0.25px] mb-2 lg:mb-[10px]">
                  Working Hours
                </h3>
                <p className="text-[13px] lg:text-[16px] font-medium text-brand-gray leading-[1.5]">
                  Sunday – Thursday
                  <br />
                  9:00 AM – 5:00 PM (KSA Time)
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 lg:gap-[32px]">
              <div className="flex-shrink-0">
                <Phone className="w-5 h-5 text-brand-gray" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#454545] leading-[18px] tracking-[-0.25px] mb-2 lg:mb-[10px]">
                  Phone
                </h3>
                <a
                  href="tel:+966131234567"
                  className="text-[13px] lg:text-[16px] font-medium text-brand-gray leading-[24px] hover:text-brand-purple transition-colors"
                >
                  +966 (13) 123-4567
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 lg:gap-[32px]">
              <div className="flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-gray" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#454545] leading-[18px] tracking-[-0.25px] mb-2 lg:mb-[10px]">
                  Email
                </h3>
                <a
                  href="mailto:procurement@daco.com.sa"
                  className="text-[13px] lg:text-[16px] font-medium text-brand-gray leading-[24px] hover:text-brand-purple transition-colors break-all"
                >
                  procurement@daco.com.sa
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-3 lg:gap-[32px]">
              <div className="flex-shrink-0">
                <LocationIcon />
              </div>
              <div>
                <h3 className="text-[14px] lg:text-[16px] font-bold text-[#454545] leading-[18px] tracking-[-0.25px] mb-2 lg:mb-[10px]">
                  Address
                </h3>
                <p className="text-[12px] lg:text-[14px] font-medium text-brand-gray leading-[1.4] lg:leading-[1.3]">
                  King Fahd International Airport,
                  <br />
                  Main P.O Box 3477, Mezzanine Level,
                  <br />
                  Dammam 31471, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
