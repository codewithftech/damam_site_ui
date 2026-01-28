import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Box,
  TrendingUp,
} from "lucide-react";

export default function CargoLogisticsPage() {
  const services = [
    {
      id: "air-cargo",
      title: "Air Cargo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fc160dfe2e35f6abc8c4d649c1301f75c7685311?width=1170",
    },
    {
      id: "express-cargo",
      title: "Express Cargo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/81a7062eacd95c280875678d5d5c7699d49cde53?width=1170",
    },
    {
      id: "logistics-zone",
      title: "Logistics Zone",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96cc9efade198f4681df7141496add5bcd07e235?width=1170",
    },
    {
      id: "bonded-zone",
      title: "Bonded Zone",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/a9bc2cd24ab785ce200ef8a7cad5c2bf1a495afe?width=1170",
    },
  ];

  const documents = [
    { title: "MRO facility development guidelines" },
    { title: "Technical specifications for hangars" },
    { title: "Partnership models and investment terms" },
    { title: "Regional MRO market analysis" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12 lg:mb-[72px]">
          <div className="w-1 h-[34px] bg-brand-purple"></div>
          <h1 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
            <span className="font-extrabold text-brand-purple">Cargo </span>
            <span className="text-brand-gray">Village</span>
          </h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px] mb-12 lg:mb-[72px]">
          {/* What is Cargo Village */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            <div className="inline-flex items-center justify-center gap-[10px] rounded-[14px] bg-white p-[10px_15px] mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/702fc81d2775da549ab4961f6df8b8a481f2907d?width=80"
                alt="Dammam Airports Logo"
                className="w-[40px] h-[31px]"
              />
            </div>
            <h2 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-normal tracking-[-0.4px] lg:tracking-[-0.48px] mb-6">
              What is Cargo Village?
            </h2>
            <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-5">
              The first of its kind in the Kingdom, the Cargo Village at KFIA
              provides a wide range of freighting, warehousing, and customs
              clearance solutions — all from one location.
            </p>
            <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px]">
              The Cargo Village can accommodate freight arriving from different
              transportation modes, which is then unloaded, collected, prepared
              and reloaded for onward transportation. The central location links
              and brings together different transportation-related companies who
              frequently do business together, supplementary transport services
              as well as industrial and trading companies. Having a central
              location promotes cooperation and increases operational
              efficiencies among businesses working on site.
            </p>
          </div>

          {/* What is Dammam Airports Role */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            <div className="inline-flex items-center justify-center gap-[10px] rounded-[14px] bg-white p-[10px_15px] mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/702fc81d2775da549ab4961f6df8b8a481f2907d?width=80"
                alt="Dammam Airports Logo"
                className="w-[40px] h-[31px]"
              />
            </div>
            <h2 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-normal tracking-[-0.4px] lg:tracking-[-0.48px] mb-6">
              What is Dammam Airports Role?
            </h2>
            <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] mb-5">
              Dammam Airports main interest lies in providing a competitive
              value proposition by streamlining procedures for all strategic
              partners. This includes providing an advanced infrastructure,
              modern facilities, and offering operational and marketing support
              through an advanced logistics unit.
            </p>
            <p className="text-[#454545] text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px]">
              Working to achieve the objectives of Vision 2030, the Cargo
              Village seeks to be a leader among its counterparts at the
              regional level, and to be recognized as an advanced logistics
              center that provides multiple solutions for supporting
              institutions and providers of various logistic services.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="relative rounded-[20px] overflow-hidden mb-12 lg:mb-[72px] max-w-[1200px] h-[250px] lg:h-[311px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/94d594ac4c1147dea7ac772b71155f1ba8cd8056?width=2400"
            alt="Cargo Village"
            className="w-full h-full object-cover"
          />

          {/* Stats Overlays */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full px-4 lg:px-[30px]">
              {/* 6M sqm */}
              <StatCard
                icon={<MapPin className="w-[30px] h-[30px]" strokeWidth={2} />}
                value="6M"
                unit="sqm"
                label="total size of cargo village"
              />

              {/* 650K Tons */}
              <StatCard
                icon={<Box className="w-[30px] h-[30px]" strokeWidth={2} />}
                value="650K"
                unit="Tons"
                label="Annual capacity"
              />

              {/* 1st Region */}
              <StatCard
                icon={
                  <TrendingUp className="w-[30px] h-[30px]" strokeWidth={2} />
                }
                value="1st"
                unit="Region"
                label="Bonded Zone in the Kingdom's airports"
              />

              {/* 2M Tons/Yr */}
              <StatCard
                icon={<CubesIcon />}
                value="2M"
                unit="Tons/Yr"
                label="capacity of cargo village in 2030"
              />
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] max-w-[1200px] mb-12 lg:mb-[72px]">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>

        {/* Circular Section */}
        <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] max-w-[1200px] mb-12 lg:mb-[72px]">
          <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-2">
            Circular
          </h2>
          <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[21px] lg:leading-[24px] tracking-[-0.26px] lg:tracking-[-0.28px] mb-6 lg:mb-[30px]">
            (for passenger's airlines)
          </p>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {documents.map((doc, index) => (
              <DocumentItem key={index} title={doc.title} />
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px] max-w-[1200px]">
          <h2 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.36px] lg:tracking-[-0.4px] mb-4 lg:mb-5">
            Contact Us
          </h2>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-4">
            For business opportunities and commercial inquiries, please contact:
          </p>
          <p className="text-[#454545] text-[14px] lg:text-[16px] font-medium leading-[21px] lg:leading-[24px] mb-6 lg:mb-8">
            Dammam Airports Company
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#F5F0FF]">
              <Mail className="w-6 h-6 text-brand-purple" strokeWidth={2} />
            </div>
            <a
              href="mailto:Commerce.info@dammamairports.sa"
              className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-normal tracking-[-0.28px] lg:tracking-[-0.32px] underline hover:opacity-80 transition-opacity"
            >
              Commerce.info@dammamairports.sa
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Stat Card Component
function StatCard({
  icon,
  value,
  unit,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="rounded-[20px] bg-[rgba(96,73,140,0.7)] backdrop-blur-[20px] p-4 lg:p-6 flex flex-col items-center justify-center min-h-[140px] lg:min-h-[175px]">
      <div className="text-white mb-3 lg:mb-4">{icon}</div>
      <div className="text-white text-[24px] lg:text-[36px] leading-normal tracking-[-0.48px] lg:tracking-[-0.72px] mb-2 lg:mb-3 text-center">
        <span className="font-extrabold">{value} </span>
        <span className="font-medium">{unit}</span>
      </div>
      <p className="text-white text-[10px] lg:text-[12px] font-medium leading-normal tracking-[-0.2px] lg:tracking-[-0.24px] text-center">
        {label}
      </p>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative rounded-[20px] overflow-hidden h-[350px] lg:h-[469px] group">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(96,73,140,0.3)] to-[rgba(96,73,140,0.3)]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <h3 className="text-white text-[24px] lg:text-[32px] font-bold mb-6 text-center">
          {title}
        </h3>

        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-white text-brand-purple text-[16px] lg:text-[18px] font-medium hover:bg-opacity-90 transition-all">
          <span>Explore</span>
          <ExternalLink className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// Document Item Component
function DocumentItem({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between rounded-[15px] border border-[#EDEDED] overflow-hidden h-[64px]">
      <div className="flex items-center gap-3 lg:gap-4 px-3 lg:px-[12px]">
        <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[11px] bg-[#ECF7FF]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V8H20"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 9H9H8"
              stroke="#4D9CD3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-[#454545] text-[13px] lg:text-[14px] font-bold leading-[21px] lg:leading-[24px]">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2 lg:gap-3 pr-3 lg:pr-4">
        <button
          className="hover:opacity-70 transition-opacity"
          aria-label="Download"
        >
          <Download className="w-6 h-6 text-[#454545]" />
        </button>
        <button
          className="hover:opacity-70 transition-opacity"
          aria-label="Open"
        >
          <ExternalLink className="w-6 h-6 text-[#454545]" />
        </button>
      </div>
    </div>
  );
}

// Cubes Icon Component
function CubesIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8555 23.45L21.0008 26.6317C21.2433 26.7572 21.512 26.8235 21.785 26.8253C22.058 26.8271 22.3276 26.7643 22.5717 26.6421L27.754 24.051C28.0417 23.9073 28.2837 23.6863 28.4528 23.4128C28.622 23.1393 28.7117 22.8241 28.7118 22.5025V17.7152C28.7117 17.3936 28.622 17.0784 28.4528 16.8049C28.2837 16.5314 28.0417 16.3105 27.754 16.1667L21.7837 13.1807L15.7908 16.2845C15.5089 16.4305 15.2726 16.6512 15.1076 16.9225C14.9427 17.1937 14.8554 17.5051 14.8555 17.8226V23.45Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.93531 23.9331L7.1453 26.6317C7.38781 26.7571 7.65653 26.8234 7.92954 26.8252C8.20256 26.827 8.47213 26.7643 8.71627 26.642L14.8564 23.5729V17.7151C14.8562 17.3935 14.7665 17.0783 14.5973 16.8048C14.4282 16.5314 14.1862 16.3104 13.8986 16.1666L7.92819 13.1806L1.93531 16.2844C1.65342 16.4304 1.4171 16.6511 1.25215 16.9224C1.0872 17.1936 0.999974 17.505 1 17.8225V22.3951C0.999974 22.7125 1.0872 23.0239 1.25215 23.2951C1.4171 23.5664 1.65342 23.7871 1.93531 23.9331ZM7.92819 13.0576L14.0735 16.2394C14.316 16.3648 14.5847 16.4311 14.8577 16.4329C15.1307 16.4347 15.4003 16.372 15.6445 16.2498L21.7846 13.1806V7.32279C21.7844 7.00121 21.6947 6.68604 21.5255 6.41255C21.3564 6.13907 21.1144 5.91808 20.8267 5.77434L15.6445 3.1832C15.4003 3.06099 15.1307 2.99823 14.8577 3.00004C14.5847 3.00184 14.316 3.06816 14.0735 3.19359L8.8635 5.89212C8.58161 6.03815 8.34529 6.25885 8.18034 6.5301C8.01539 6.80135 7.92816 7.11271 7.92819 7.43018V13.0576Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52585 6.55225L14.0805 9.32872C14.3209 9.44885 14.586 9.51139 14.8547 9.51139C15.1235 9.51139 15.3886 9.44885 15.629 9.32872L21.1248 6.58169M15.454 16.9445L21.0087 19.721C21.2491 19.8411 21.5142 19.9037 21.7829 19.9037C22.0517 19.9037 22.3168 19.8411 22.5572 19.721L28.0512 16.974M1.59766 16.9445L7.15233 19.721C7.39274 19.8411 7.65781 19.9037 7.92656 19.9037C8.19531 19.9037 8.46038 19.8411 8.70078 19.721L14.1948 16.974M14.8547 9.7167V16.6449M21.7829 20.109V26.1711M7.92656 20.109V26.1711"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
