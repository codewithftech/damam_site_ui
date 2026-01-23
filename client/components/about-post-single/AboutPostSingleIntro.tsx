export default function AboutPostSingleIntro() {
  return (
    <div className="mb-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-4 lg:mb-6">
            <span className="font-extrabold text-brand-purple">ABOUT </span>
            <span className="text-brand-gray">Dammam Airports</span>
          </h2>

          <h3 className="text-brand-purple text-[22px] font-extrabold leading-[21px] tracking-tight mb-4">
            Dammam Airports Company
          </h3>

          <div className="space-y-3">
            <p className="text-[16px] font-medium leading-[24px] tracking-tight">
              <span className="text-brand-gray">
                According to Saudi Vision 2030 and as part of the National
                Transformation Program,{" "}
              </span>
              <span className="text-brand-purple font-bold">
                Dammam Airports Company was established in Dammam on July 1,
                2017,
              </span>
              <span className="text-brand-gray">
                {" "}
                to be an integral part of the future vision to enhance the
                airport industry.
              </span>
            </p>

            <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
              The company aims to operate and develop airport facilities,
              maintain them, improve infrastructure, manage commercial and
              investment relations, operate air cargo facilities, and enhance
              operational capabilities and efficiency of airports to keep up
              with the evolution of the aviation industry.
            </p>
          </div>
        </div>

        {/* Right Logo (same as AboutSection, desktop only) */}
        <div className="hidden lg:block flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1c4b099e737447f11821f4523170086f48c38aaf?width=858"
            alt="Dammam Airports Logo"
            className="w-[429px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

