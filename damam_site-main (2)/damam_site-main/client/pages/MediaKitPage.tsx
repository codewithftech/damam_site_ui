import { Eye, Download, FileText, Edit3 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ResourceCardProps {
  icon: "document" | "edit";
  title: string;
  description: string;
}

function ResourceCard({ icon, title, description }: ResourceCardProps) {
  return (
    <div className="w-full rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] overflow-hidden p-6 lg:p-[30px]">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-[67px] h-[42px] rounded-[14px] bg-[#F0EDF5] mb-4 lg:mb-[39px]">
        {icon === "document" ? (
          <FileText className="w-6 h-6 text-brand-purple" strokeWidth={1.5} />
        ) : (
          <Edit3 className="w-6 h-6 text-brand-purple" strokeWidth={1.5} />
        )}
      </div>

      {/* Title */}
      <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] tracking-[-0.4px] mb-4 lg:mb-[39px]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-6 lg:mb-[30px]">
        {description}
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#DFDFDF] mb-6 lg:mb-[30px]"></div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
        <button className="inline-flex items-center justify-center gap-2 lg:gap-[10px] px-4 lg:px-[10px] py-2 lg:py-[10px] rounded-[10px] bg-[#F0EDF5] hover:bg-[#E8E3F5] transition-colors">
          <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />
          <span className="text-brand-purple text-[14px] lg:text-[16px] font-medium leading-[20px]">
            View Online
          </span>
        </button>

        <button className="inline-flex items-center justify-center gap-2 lg:gap-[10px] px-4 lg:px-[10px] py-2 lg:py-[10px] rounded-[10px] bg-brand-purple hover:bg-[#503A7A] transition-colors">
          <Download className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          <span className="text-white text-[14px] lg:text-[16px] font-medium leading-[20px]">
            Download
          </span>
        </button>
      </div>
    </div>
  );
}

export default function MediaKitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Title */}
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[60px] tracking-[-0.96px] mb-8 lg:mb-[64px]">
            <span className="font-extrabold text-brand-purple">Media </span>
            <span className="text-brand-gray">Kit</span>
          </h1>

          {/* Logo & Brand Guidelines Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[30px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Logo </span>
              <span className="font-medium text-brand-gray">
                & Brand Guidelines
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-12 lg:mb-[140px]">
            <span className="text-brand-purple font-extrabold">
              Dammam Airports Company (DACO)
            </span>
            <span className="text-brand-gray font-medium">
              {" "}
              provides official branding materials to ensure consistent and
              accurate representation of the company in all external
              communications.
            </span>
          </p>

          {/* Brand Guidelines Section */}
          <div className="flex items-center gap-4 mb-6 lg:mb-[30px]">
            <div className="w-[34px] h-[2px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Brand </span>
              <span className="font-medium text-brand-gray">Guidelines</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-brand-gray text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[72px]">
            <span className="font-medium">The </span>
            <span className="text-brand-purple font-extrabold">
              Brand Guideline Manual{" "}
            </span>
            <span className="font-medium">
              outlines the proper use of DACO's identity, including:
            </span>
          </p>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-12 lg:mb-[136px]">
            <ResourceCard
              icon="document"
              title="Full Brand Guidelines"
              description="Get instant access to the complete Brand Guidelines Manual with detailed specifications about DACO's identity , including logo usage, color palettes, typography and application examples."
            />
            <ResourceCard
              icon="edit"
              title="Logotype usage"
              description="If you need DACO Logotype usage rules for positioning and maintaining visual integrity or any other artwork, please view or download the original file below."
            />
          </div>

          {/* Imagery Style Section */}
          <div className="flex items-center gap-4 mb-6 lg:mb-[30px]">
            <div className="w-[34px] h-[2px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] font-extrabold text-brand-purple leading-[24px] tracking-[-0.58px]">
              Imagery Style
            </h2>
          </div>

          {/* Imagery Description */}
          <p className="text-[13px] lg:text-[14px] font-medium leading-[24px] mb-8 lg:mb-[56px]">
            <span className="text-brand-gray">Guidance on </span>
            <span className="text-brand-purple font-bold">photography </span>
            <span className="text-brand-gray">and</span>
            <span className="text-brand-purple font-bold"> visual assets</span>
            <span className="text-brand-gray">
              {" "}
              that align with DACO's identity.
            </span>
          </p>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-[12px]">
            {/* Large image - left */}
            <div className="lg:col-span-4 relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ecdf539a63f6af089e7bb3305e001a6eb174a84b?width=792"
                alt="Airport terminal"
                className="w-full h-[240px] lg:h-[300px] object-cover rounded-[20px]"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-flex items-center px-[10px] py-0 h-6 rounded-[10px] bg-[#F2F2F2] text-brand-purple text-[12px] lg:text-[14px] font-medium leading-[24px] tracking-[-0.28px]">
                  Round corner
                </span>
                <span className="inline-flex items-center px-[10px] py-0 h-6 rounded-[10px] bg-[#F2F2F2] text-brand-purple text-[12px] lg:text-[14px] font-medium leading-[24px] tracking-[-0.28px]">
                  20px
                </span>
                <span className="inline-flex items-center px-[10px] py-0 h-6 rounded-[10px] bg-[#F2F2F2] text-brand-purple text-[12px] lg:text-[14px] font-bold leading-[24px] tracking-[-0.28px]">
                  #F2F2F2
                </span>
              </div>
            </div>

            {/* Tall image - middle */}
            <div className="lg:col-span-2 hidden lg:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1adca8522517f483f9f3698b348c47fc9424acf0?width=392"
                alt="Palm trees"
                className="w-full h-[452px] object-cover rounded-[20px]"
              />
            </div>

            {/* Large image - right */}
            <div className="lg:col-span-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cba556ffd0de25507ee23278d20723baa68c5d6d?width=1168"
                alt="Coastal view"
                className="w-full h-[240px] lg:h-[300px] object-cover rounded-[20px]"
              />
            </div>

            {/* Bottom row - 4 small images */}
            <div className="lg:col-span-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a7583929e97f02d0cc6ac3972f4b6428f6a4483b?width=792"
                alt="Traditional architecture"
                className="w-full h-[120px] lg:h-[140px] object-cover rounded-[20px]"
              />
            </div>

            <div className="lg:col-span-2 hidden md:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/13c94251d74fdc58e98320210c4a33cce6fb6c30?width=372"
                alt="Sunset palm"
                className="w-full h-[120px] lg:h-[140px] object-cover rounded-[20px]"
              />
            </div>

            <div className="lg:col-span-2 hidden md:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0e0e824df634c55c248fc408073ae4bbc467261c?width=374"
                alt="City view"
                className="w-full h-[120px] lg:h-[140px] object-cover rounded-[20px]"
              />
            </div>

            <div className="lg:col-span-2 hidden md:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e288381f2cf02643b9cdb92634ec9c1280d5668f?width=374"
                alt="Historical site"
                className="w-full h-[120px] lg:h-[140px] object-cover rounded-[20px]"
              />
            </div>

            <div className="lg:col-span-2 md:hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1adca8522517f483f9f3698b348c47fc9424acf0?width=392"
                alt="Palm trees"
                className="w-full h-[200px] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
