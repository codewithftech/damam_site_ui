import {
  Clock,
  Phone,
  Mail,
  ArrowRight,
  FileText,
  File,
  FileCheck,
  Award,
} from "lucide-react";
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

interface ProcessStepProps {
  icon: "form" | "document" | "check" | "pass";
  title: string;
  description: string;
  showArrow?: boolean;
}

function ProcessStep({
  icon,
  title,
  description,
  showArrow = true,
}: ProcessStepProps) {
  const icons = {
    form: (
      <FileText className="w-10 h-10 text-brand-purple" strokeWidth={1.5} />
    ),
    document: (
      <File className="w-10 h-10 text-brand-purple" strokeWidth={1.5} />
    ),
    check: (
      <FileCheck className="w-10 h-10 text-brand-purple" strokeWidth={1.5} />
    ),
    pass: <Award className="w-10 h-10 text-brand-purple" strokeWidth={1.5} />,
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
      <div className="w-full rounded-[20px] border border-[#EDEDED] bg-[#F0EDF5] p-5 lg:p-[20px] flex flex-col items-center min-h-[360px] lg:min-h-[436px]">
        {/* Icon */}
        <div className="w-10 h-10 mb-6 lg:mb-[62px] mt-12 lg:mt-[80px]">
          {icons[icon]}
        </div>

        {/* Title */}
        <h3 className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[24px] text-center mb-4 lg:mb-[24px]">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-full max-w-[207px] h-[1px] bg-[#E7DFF4] mb-4 lg:mb-[20px]"></div>

        {/* Description */}
        <p className="text-brand-purple text-[14px] lg:text-[16px] font-medium leading-[24px] text-center max-w-[207px]">
          {description}
        </p>
      </div>

      {/* Arrow */}
      {showArrow && (
        <div className="hidden lg:flex items-center justify-center px-4">
          <ArrowRight className="w-9 h-6 text-brand-gray" strokeWidth={2} />
        </div>
      )}
    </div>
  );
}

export default function MediaContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Title */}
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[60px] tracking-[-0.25px] mb-4 lg:mb-[26px]">
            <span className="font-extrabold text-brand-purple">Media </span>
            <span className="text-brand-gray">Contact</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[72px]">
            <span className="text-brand-gray font-medium">
              Here is the media contact and general communications information
              for{" "}
            </span>
            <span className="text-brand-purple font-extrabold">
              Dammam Airports Company (DACO).
            </span>
          </p>

          {/* Hero Image */}
          <div className="w-full h-[200px] lg:h-[330px] rounded-[20px] overflow-hidden mb-8 lg:mb-[72px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4711ba6c122f83acb082974610416e06031a86b8?width=2400"
              alt="Media Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Press Inquiries Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[72px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Press </span>
              <span className="font-medium text-brand-gray">Inquiries</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[64px]">
            <span className="text-brand-gray font-medium">For all </span>
            <span className="text-brand-purple font-bold">
              media-related questions,
            </span>
            <span className="text-brand-gray font-medium">
              {" "}
              interview requests, or press statements, please contact our
              communications team:
            </span>
          </p>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[55px] mb-12 lg:mb-[136px]">
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
                  href="mailto:press@daco.com.sa"
                  className="text-[13px] lg:text-[16px] font-medium text-brand-gray leading-[24px] hover:text-brand-purple transition-colors break-all"
                >
                  press@daco.com.sa
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

          {/* Media Accreditation Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[30px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Media </span>
              <span className="font-medium text-brand-gray">Accreditation</span>
            </h2>
          </div>

          {/* Media Accreditation Description */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[72px]">
            <span className="text-brand-purple font-bold">
              Dammam Airports Company (DACO)
            </span>
            <span className="text-brand-gray font-medium">
              {" "}
              welcomes accredited journalists, photographers, and media
              representatives to cover events and activities at our airports.
            </span>
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 mb-8 lg:mb-[72px]">
            <ProcessStep
              icon="form"
              title="Submit Request Form"
              description="Complete the online Media Accreditation Form available on the DACO website."
            />
            <ProcessStep
              icon="document"
              title="Provide Documentation"
              description="Submit a copy of your press ID, organization letter, and government-issued ID."
            />
            <ProcessStep
              icon="check"
              title="Approval Review"
              description="Our communications team will verify your request within 3–5 working days."
            />
            <ProcessStep
              icon="pass"
              title="Accreditation Issued"
              description="Approved media representatives will receive an official DACO Media Pass with access permissions as per event or facility guidelines."
              showArrow={false}
            />
          </div>

          {/* Footer Note */}
          <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
            All accredited media must comply with DACO's safety, security, and
            photography policies while on airport premises.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
