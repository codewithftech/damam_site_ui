import { ExternalLink } from "lucide-react";

export default function KFIAHero() {
  return (
    <>
      {/* Mobile layout: image top, centered description, button below */}
      <div className="lg:hidden mb-12">
        <h1 className="text-[32px] font-extrabold leading-[40px] tracking-tight text-left">
          <span className="text-brand-purple">King Fahd International Airport </span>
          <span className="text-brand-gray">/DAMMAM</span>
        </h1>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/17611bc801988a24a94f52db5947251eb920ab99?width=1184"
          alt="King Fahd International Airport"
          className="w-full h-[220px] sm:h-[260px] object-cover rounded-[20px] mt-6"
        />

        <p className="text-brand-gray text-[14px] font-medium leading-[21px] mt-4 text-left">
          King Fahd International Airport (KFIA), located in Dammam, Saudi Arabia, is one
          of the world's largest airports by land area, covering{" "}
          <span className="font-bold text-brand-purple">776 square kilometers</span>. Situated
          just <span className="font-bold text-brand-purple">31 km</span> northwest of downtown
          Dammam, the airport serves as the primary international gateway to the Eastern
          Province, including cities such as Dhahran, Al Khobar, Jubail, and Qatif.
        </p>

        <div className="mt-6 flex justify-start">
          <button className="inline-flex items-center gap-2 px-5 py-2 rounded-[10px] bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-[14px] font-medium">Visit Official Website</span>
          </button>
        </div>
      </div>

      {/* Desktop layout (as screenshot): title full width, then text left + image right */}
      <div className="hidden lg:block">
        <h1 className="text-[48px] font-extrabold leading-[60px] tracking-tight mb-8">
          <span className="text-brand-purple">King Fahd International Airport </span>
          <span className="text-brand-gray">/DAMMAM</span>
        </h1>

        <div className="grid grid-cols-2 items-start gap-[30px] mb-[72px]">
          <div className="w-full">
            <p className="text-brand-gray text-[16px] font-medium leading-[24px] mb-10">
              King Fahd International Airport (KFIA), located in Dammam, Saudi Arabia, is one
              of the world's largest airports by land area, covering{" "}
              <span className="font-bold text-brand-purple">776 square kilometers</span>. Situated
              just <span className="font-bold text-brand-purple">31 km</span> northwest of downtown
              Dammam, the airport serves as the primary international gateway to the Eastern
              Province, including cities such as Dhahran, Al Khobar, Jubail, and Qatif.
            </p>

            <button className="inline-flex items-center gap-2 px-5 py-2 rounded-[10px] bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span className="text-[14px] font-medium">Visit Official Website</span>
            </button>
          </div>

          <div className="w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17611bc801988a24a94f52db5947251eb920ab99?width=1184"
              alt="King Fahd International Airport"
              className="w-full h-[240px] object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

