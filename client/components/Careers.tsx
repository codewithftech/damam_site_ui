import { ChevronRight } from "lucide-react";

export default function Careers() {
  return (
    <section id="careers" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <h2 className="text-brand-purple text-[48px] font-extrabold leading-[60px] tracking-tight uppercase mb-6">
          Careers
        </h2>

        {/* Description */}
        <p className="text-brand-gray text-base font-medium leading-[140%] max-w-[662px] mb-12">
          Our team is growing fast. We'd love your help in making this company truly special.
        </p>

        {/* Card */}
        <div className="bg-brand-purple rounded-[20px] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[429px]">
          {/* Left Image */}
          <div className="lg:flex-1 h-64 lg:h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f227fb90ccaeec0319ff44b55076b1442e84d24e?width=1328"
              alt="Airport Workers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-[579px] p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-2 mt-16">
              <h3 className="text-white text-[28px] font-bold leading-[140%]">
                Together we can build a bright future
              </h3>
              <p className="text-white text-base font-medium leading-6">
                We believe the success of our airline depends on the success of each individual - so you can have your dream career and count on our support every step of the way.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b911258100732cfe8175fae278e2aaf8f91c5d14?width=388"
                alt="Dammam Airports"
                className="hidden lg:block h-10 w-auto"
              />
              <button className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                <span className="text-base font-medium">View Opportunities</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
