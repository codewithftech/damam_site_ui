import { Calendar, MapPin, Plane, Users } from "lucide-react";

export default function KFIAStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-[108px]">
      {/* Stat 1 - Opened */}
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
            <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          </div>
          <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
            1990
          </div>
        </div>
        <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
          Opened
          <br />
          (commercial operations)
        </div>
      </div>

      {/* Stat 2 - Passengers */}
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
            <Users className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          </div>
          <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
            10M+
          </div>
        </div>
        <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
          Annual Passengers Traffic
        </div>
      </div>

      {/* Stat 3 - Destinations */}
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          </div>
          <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
            60+
          </div>
        </div>
        <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
          Destinations worldwide
        </div>
      </div>

      {/* Stat 4 - Airlines */}
      <div className="rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] bg-[#F5F0FF] flex items-center justify-center">
            <Plane className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          </div>
          <div className="text-[28px] lg:text-[36px] font-bold text-brand-purple leading-none">
            37+
          </div>
        </div>
        <div className="text-brand-gray text-[12px] lg:text-[14px] font-medium leading-[18px]">
          Airlines
        </div>
      </div>
    </div>
  );
}

