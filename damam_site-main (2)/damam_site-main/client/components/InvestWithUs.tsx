export default function InvestWithUs() {
  return (
    <section id="invest" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-[120px]">
        {/* Header */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-tight mb-6">
          <span className="text-brand-purple font-extrabold">INVEST </span>
          <span className="text-brand-gray">WITH US</span>
        </h2>

        {/* Description */}
        <p className="text-brand-gray text-base font-medium leading-6 max-w-[1183px] mb-12">
          Dammam Airports is committed to working with its strategic partners and adding new ones to find mutually beneficial growth opportunities. This may range from the expansion of airport capacity and passenger flow, to the scope and magnitude of business and commercial activity enabled, to the value of investments attracted for both inside and outside the airport.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-3">
          <ServiceCard
            title="In-Terminal Services"
            description="Our terminals are designed to elevate every moment of your journey. Our in-terminal services offer convenience, comfort, reliability"
            image="https://api.builder.io/api/v1/image/assets/TEMP/77a377cc3f1fde737734bf3d8fe7bb8f754ef18d?width=750"
          />
          <ServiceCard
            title="Cargo village"
            description="Our state-of-the-art Cargo Village serves as a highly efficient central hub for streamlined freight handling and international logistics."
            image="https://api.builder.io/api/v1/image/assets/TEMP/e08255b33d8c9f2bad17eb00eaf9cd58d20451de?width=752"
          />
          <ServiceCard
            title="Retail & Hospitality"
            description="Whether you're looking to shop gifts, indulge in dining or grab a bite, our retail and hospitality zones offer it all for every traveler."
            image="https://api.builder.io/api/v1/image/assets/TEMP/c091a3b65da4fa63c8de5d8d22e4a3ccc1d152e5?width=750"
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden h-[452px] flex flex-col justify-end p-6 bg-cover bg-center group hover:scale-[1.02] transition-transform"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(96, 73, 140, 0.70) 0%, rgba(28, 21, 80, 0.70) 100%), url('${image}')`,
      }}
    >
      <h3 className="text-white text-[28px] font-bold leading-8 mb-3">
        {title}
      </h3>
      <p className="text-[#FCFCFC] text-base font-medium leading-6">
        {description}
      </p>
    </div>
  );
}
