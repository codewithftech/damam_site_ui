export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
<div className="container mx-auto px-4 lg:px-6">
  <div className="flex flex-col lg:flex-row gap-12 items-center">
    {/* Left Content */}
    <div className="flex-1 space-y-6">
      <h2 className="text-[48px] font-medium leading-[60px] tracking-tight">
        <span className="font-extrabold text-brand-purple">ABOUT </span>
        <span className="text-brand-gray">US</span>
      </h2>

      <h3 className="text-brand-purple text-2xl font-extrabold leading-[21px] tracking-tight">
        Dammam Airports Company
      </h3>

      <div className="space-y-4 text-base font-medium leading-6 tracking-tight">
        <p>
          <span className="text-brand-gray">According to Saudi Vision 2030 and as part of the National Transformation Program, </span>
          <span className="text-brand-purple font-bold">Dammam Airports Company was established in Dammam on July 1, 2017,</span>
          <span className="text-brand-gray"> to be an integral part of the future vision to enhance the airport industry.</span>
        </p>

        <p className="text-brand-gray">
          The company aims to operate and develop airport facilities, maintain them, improve infrastructure, manage commercial and investment relations, operate air cargo facilities, and enhance operational capabilities and efficiency of airports to keep up with the evolution of the aviation industry.
        </p>
      </div>
      <div className="flex justify-start lg:justify-end my-">
        <button className="inline-flex items-center  py-2  px-6 bg-brand-purple text-white text-base font-medium rounded-[10px] hover:bg-brand-dark-purple transition-colors">
          Read More
        </button>
      </div>
    
    </div>

    {/* Right Logo */}
    <div className="hidden lg:block flex-shrink-0">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1c4b099e737447f11821f4523170086f48c38aaf?width=858"
        alt="Dammam Airports Logo"
        className="w-[429px] h-auto"
      />
    </div>
  </div>
</div>

</section>
  );
}
