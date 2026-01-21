import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Title */}
          <div className="lg:w-[328px]">
            <h2 className="text-[48px] font-medium leading-[60px] tracking-tight">
              <span className="text-brand-purple font-extrabold">CONTACT </span>
              <span className="text-brand-gray">US</span>
            </h2>
          </div>

          {/* Right - Contact Info */}
          <div className="flex-1 bg-white rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-brand-purple text-[29px] font-extrabold leading-[21px]">
                Dammam Airports Company
              </h3>

              <p className="text-brand-gray text-base font-medium leading-6">
                At Dammam Airports Company, we strive to provide the best customer experience to all travelers and visitors to our facilities.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                {/* Address */}
                <ContactItem
                  icon={<MapPin className="w-10 h-10 text-brand-gray" />}
                  title="Address"
                  content="King Fahd International Airport, Main P.O Box 3477, Mezzanine Level, Dammam 31471, Saudi Arabia"
                />

                {/* Passenger Relations */}
                <ContactItem
                  icon={<Phone className="w-9 h-9 text-brand-gray" />}
                  title="Passenger Relations"
                  content="+966 (13) 883 4445"
                />

                {/* General Inquiries */}
                <ContactItem
                  icon={<Mail className="w-10 h-10 text-brand-gray" />}
                  title="General Inquiries"
                  content="info@daco.sa"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-end mt-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-[61px] h-[61px] rounded-full border-2 border-brand-dark-purple flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-colors group"
          >
            <svg
              className="w-6 h-6 text-brand-dark-purple group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactItem({ icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-brand-gray text-sm font-bold leading-[18px] mb-2">
          {title}
        </h4>
        <p className="text-brand-gray text-sm font-medium leading-[18px]">
          {content}
        </p>
      </div>
    </div>
  );
}
