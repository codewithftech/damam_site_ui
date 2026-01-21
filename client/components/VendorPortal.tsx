import { ChevronRight } from "lucide-react";

export default function VendorPortal() {
  return (
    <section id="vendor" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-tight mb-6">
          <span className="text-brand-purple font-extrabold">VENDOR </span>
          <span className="text-brand-gray">PORTAL</span>
        </h2>

        {/* Description */}
        <p className="text-brand-gray text-base font-medium leading-6 max-w-[1142px] mb-12">
          The Dammam Airports is committed to engaging with reputable and qualified vendors, contractors, and service providers to support the growth and excellence of our operations.
        </p>

        {/* Card */}
        <div className="bg-[#AC9DD914] rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row">
          {/* Left Content */}
          <div className="bg-brand-light-gray p-8 lg:w-[608px] flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-brand-gray text-[28px] font-bold leading-[140%]">
                Our Vendor Portal offers access to information on current and upcoming procurement opportunities, tenders, and development projects.
              </h3>
              <p className="text-brand-gray text-base font-medium leading-[150%]">
                If you wish to apply or register as an approved vendor, please click below to be directed to our secure external registration platform.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button className="flex items-center gap-2 text-brand-gray hover:text-brand-purple transition-colors">
                <span className="text-xl font-medium">Learn More</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </button>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7fcd329485ccca1f0dfaa46686f25d180b71f960?width=388"
                alt="Dammam Airports"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/17611bc801988a24a94f52db5947251eb920ab99?width=1184"
              alt="Vendor Portal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
