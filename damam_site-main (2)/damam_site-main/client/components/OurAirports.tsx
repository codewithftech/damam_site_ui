import { ChevronRight } from "lucide-react";

export default function OurAirports() {
  return (
    <section id="airports" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-[120px]">
        {/* Header */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-tight text-center mb-12">
          <span className="text-brand-gray font-medium">OUR </span>
          <span className="text-brand-purple font-extrabold">AIRPORTS</span>
        </h2>

        {/* Map and Airport Cards */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Map Section */}
          <div className="flex-1 relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/356b004b94b101e58ed416d650424844608a6b54?width=1334"
              alt="Saudi Arabia Map"
              className="w-full h-auto"
            />
          </div>

          {/* Airport Cards */}
          <div className="w-full lg:w-[415px] space-y-4">
            <AirportCard
              code="KFIA"
              color="#4D9CD3"
              nameAr="مطار الملك فهد الدولي"
              nameEn="King Fahd International Airport"
            />
            <AirportCard
              code="HOF"
              color="#EF7927"
              nameAr="مطار الأحساء الدولي"
              nameEn="AlAhsa International Airport"
            />
            <AirportCard
              code="AQI"
              color="#069C99"
              nameAr="مطار القيصومة الدولي"
              nameEn="AlQaisumah International Airport"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AirportCardProps {
  code: string;
  color: string;
  nameAr: string;
  nameEn: string;
}

function AirportCard({ code, color, nameAr, nameEn }: AirportCardProps) {
  return (
    <div className="bg-brand-light-gray border border-[#EDEDED] rounded-[20px] p-6 flex items-center gap-6 hover:shadow-lg transition-shadow">
      {/* Airport Icon */}
      <div className="flex-shrink-0 relative w-[75px] h-[75px]">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37" fill={color} opacity="0.2" stroke={color} strokeWidth="0.7" strokeDasharray="3 3"/>
          <circle cx="37.5" cy="37.5" r="30" fill={color}/>
          <circle cx="37.5" cy="37.5" r="29.5" fill="white" stroke={color}/>
        </svg>
      </div>

      {/* Airport Info */}
      <div className="flex-1">
        <div className="text-2xl font-bold mb-1" style={{ color }}>
          {code}
        </div>
        <div className="text-xs text-brand-gray mb-0.5">{nameAr}</div>
        <div className="text-xs text-brand-gray">{nameEn}</div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-5 h-5 text-brand-gray" />
    </div>
  );
}
