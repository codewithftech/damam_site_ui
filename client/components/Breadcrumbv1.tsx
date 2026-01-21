

import { ChevronRight } from "lucide-react";

export default function Breadcrumbv1() {
  return (
    <div className="w-full bg-[#F5F5F5] py-4 lg:py-8">
    <div className="container mx-auto">
      <div className="flex items-center gap-2 text-[14px] lg:text-[20px] font-bold leading-[24px] tracking-tight">
        <span className="text-brand-purple">Home</span>
        <span className="text-brand-purple font-medium">|</span>
        <span className="text-brand-purple">About Us</span>
        <span className="text-brand-purple font-medium">|</span>
        <span className="text-[#A799C4]">About Dammam Airports</span>
      </div>
    </div>
    </div>
    
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
