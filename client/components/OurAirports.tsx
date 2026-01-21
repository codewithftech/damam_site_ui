import { ChevronRight, Plane } from "lucide-react";

export default function OurAirports() {
  return (
    <section id="airports" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <h2 className="text-[48px] font-medium leading-[60px] tracking-tight text-center mb-12">
          <span className="text-brand-gray font-medium">OUR </span>
          <span className="text-brand-purple font-extrabold">AIRPORTS</span>
        </h2>

        {/* Map and Airport Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="relative h-64 md:h-96">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2a83dffc98500732cb7eb369a210754747dbddd6?width=686"
              alt="Saudi Arabia Map"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Airport Cards */}
          <div className="w-full space-y-4">
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
    <div className="bg-brand-light-gray border border-[#EDEDED] rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
      {/* Airport Icon */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full border border-dashed flex items-center justify-center" style={{ borderColor: color }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center border-4"
          style={{ borderColor: color }}
        >
          <Plane className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Airport Info */}
      <div className="flex-1">
        <div className="text-2xl font-bold mb-1" style={{ color }}>
          {code}
        </div>
        <div className="text-sm text-brand-gray mb-1">{nameAr}</div>
        <div className="text-sm text-brand-gray">{nameEn}</div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-6 h-6 text-brand-gray" />
    </div>
  );
}
