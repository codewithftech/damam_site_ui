import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function AeroOpportunitiesPage() {
  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto  py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-12 lg:mb-[68px]">
          <span className="font-extrabold text-brand-purple">Aero </span>
          <span className="text-brand-gray">Opportunities</span>
        </h1>

        {/* Airline Development Section */}
        <div className="mb-12 lg:mb-[68px]">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8 lg:mb-[72px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Airline </span>
              <span className="text-brand-gray">Development</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] ">
            {/* Text Box */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] relative overflow-hidden h-[280px] lg:h-[333px]">
              {/* Watermark Logo */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4cbc6093088016c1eea04ace28bb6269d835ea4e?width=454"
                alt=""
                className="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] w-[170px] lg:w-[227px] h-[156px] lg:h-[209px] opacity-100 pointer-events-none"
              />

              {/* Text Content */}
              <div className="relative z-10">
                <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-5">
                  The Airline Development team at Dammam Airports Company works
                  in partnership with passenger and cargo airlines to support
                  the launch, expansion, and long-term success of air services
                  across the Eastern Region of Saudi Arabia.
                </p>
                <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-[30px]">
                  Aligned with Saudi Vision 2030, we focus on enhancing air
                  connectivity, enabling logistics growth, and positioning our
                  airports as competitive regional gateways through data-driven
                  planning and tailored commercial support.
                </p>

                {/* Learn More Button */}
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-purple transition-colors group">
                    <span className="text-[14px] lg:text-[16px] font-medium leading-[28px] tracking-[-0.28px] lg:tracking-[-0.32px]">
                      Learn More
                    </span>
                    <div className="w-[41px] h-[41px] flex items-center justify-center">
                      <ChevronRight
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                        strokeWidth={2}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-[20px] border border-[#EDEDED] overflow-hidden h-[280px] lg:h-[333px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d1e91ecd89aed4fe0c55cb444a8d41ac807aa32?width=1170"
                alt="Airline Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Aero-Concessions Section */}
        <div className="mb-12 lg:mb-0">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-8 lg:mb-[72px]">
            <div className="w-1 h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Aero-</span>
              <span className="text-brand-gray">Concessions</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] ">
            {/* Text Box */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] relative overflow-hidden h-[280px] lg:h-[333px]">
              {/* Watermark Logo */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4cbc6093088016c1eea04ace28bb6269d835ea4e?width=454"
                alt=""
                className="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] w-[170px] lg:w-[227px] h-[156px] lg:h-[209px] opacity-100 pointer-events-none"
              />

              {/* Text Content */}
              <div className="relative z-10">
                <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-4 lg:mb-5">
                  Dammam Airports Company manages aeronautical concessions to
                  ensure the availability of safe, efficient, and high-quality
                  services that support passenger and cargo airline operations
                  across its airports.
                </p>
                <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-[30px]">
                  All aero-concession services are delivered by licensed service
                  providers in compliance with applicable aviation regulations
                  and international standards.
                </p>

                {/* Learn More Button */}
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-purple transition-colors group">
                    <span className="text-[14px] lg:text-[16px] font-medium leading-[28px] tracking-[-0.28px] lg:tracking-[-0.32px]">
                      Learn More
                    </span>
                    <div className="w-[41px] h-[41px] flex items-center justify-center">
                      <ChevronRight
                        className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                        strokeWidth={2}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-[20px] border border-[#EDEDED] overflow-hidden h-[280px] lg:h-[333px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/511b7e45648d41fe742e680e79f130c93f572cd7?width=1170"
                alt="Aero-Concessions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
