import Header from "../components/Header";
import Footer from "../components/Footer";
import AirportOfficesCard from "../components/AirportOfficesCard";

export default function ComponentsLibPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 lg:px-[120px] pt-[40px] lg:pt-[108px] pb-8 lg:pb-12">
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[45px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-6 lg:mb-8">
            <span className="font-extrabold text-brand-purple">
              Components{" "}
            </span>
            <span className="font-medium text-brand-gray">Library</span>
          </h1>

          <p className="text-[14px] font-medium leading-6 text-brand-gray mb-8 lg:mb-12 max-w-[535px]">
            <span className="font-medium">Guidance on </span>
            <span className="font-bold text-brand-purple">photography </span>
            <span className="font-medium">and</span>
            <span className="font-bold text-brand-purple"> visual assets</span>
            <span className="font-medium">
              {" "}
              that align with DACO's identity.
            </span>
          </p>
        </section>

        {/* Image Gallery Section */}
        <section className="px-4 lg:px-[120px] pb-12 lg:pb-20">
          <div className="max-w-[1200px] mx-auto lg:mx-0">
            {/* Design Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6 lg:mb-8">
              <div className="inline-flex px-[10px] items-center justify-center rounded-[10px] bg-[#F2F2F2] h-6">
                <span className="text-[14px] font-medium leading-6 tracking-[-0.28px] text-brand-purple">
                  Round corner
                </span>
              </div>
              <div className="inline-flex px-[10px] items-center justify-center rounded-[10px] bg-[#F2F2F2] h-6">
                <span className="text-[14px] font-medium leading-6 tracking-[-0.28px] text-brand-purple">
                  20px
                </span>
              </div>
              <div className="inline-flex px-[10px] items-center justify-center rounded-[10px] bg-[#F2F2F2] h-6">
                <span className="text-[14px] font-bold leading-6 tracking-[-0.28px] text-brand-purple">
                  #F2F2F2
                </span>
              </div>
            </div>

            {/* Gallery Grid - Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-3 lg:auto-rows-auto">
              {/* Row 1 - Top Images */}
              <div className="lg:col-span-4 lg:row-span-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ecdf539a63f6af089e7bb3305e001a6eb174a84b?width=792"
                  alt="Airport Terminal Exterior"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "33/25" }}
                />
              </div>

              <div className="lg:col-span-2 lg:row-span-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1adca8522517f483f9f3698b348c47fc9424acf0?width=392"
                  alt="Palm Tree"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "49/113" }}
                />
              </div>

              <div className="lg:col-span-6 lg:row-span-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cba556ffd0de25507ee23278d20723baa68c5d6d?width=1168"
                  alt="Aerial View of Airport"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "146/75" }}
                />
              </div>

              {/* Row 2 - Bottom Images */}
              <div className="lg:col-span-4 lg:row-span-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a7583929e97f02d0cc6ac3972f4b6428f6a4483b?width=792"
                  alt="Traditional Architecture"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "99/35" }}
                />
              </div>

              <div className="lg:col-span-2 lg:row-span-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/13c94251d74fdc58e98240210c4a33cce6fb6c30?width=372"
                  alt="Sunset View"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "93/70" }}
                />
              </div>

              <div className="lg:col-span-2 lg:row-span-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0e0e824df634c55c248fc408073ae4bbc467261c?width=374"
                  alt="City Skyline"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "187/140" }}
                />
              </div>

              <div className="lg:col-span-2 lg:row-span-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e288381f2cf02643b9cdb92634ec9c1280d5668f?width=374"
                  alt="Rock Formation"
                  className="w-full h-full object-cover rounded-[20px]"
                  style={{ aspectRatio: "187/140" }}
                />
              </div>
            </div>

            {/* Gallery Grid - Mobile/Tablet Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ecdf539a63f6af089e7bb3305e001a6eb174a84b?width=792"
                alt="Airport Terminal Exterior"
                className="w-full h-auto object-cover rounded-[20px]"
              />

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1adca8522517f483f9f3698b348c47fc9424acf0?width=392"
                alt="Palm Tree"
                className="w-full h-auto object-cover rounded-[20px]"
              />

              <div className="sm:col-span-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cba556ffd0de25507ee23278d20723baa68c5d6d?width=1168"
                  alt="Aerial View of Airport"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>

              <div className="sm:col-span-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a7583929e97f02d0cc6ac3972f4b6428f6a4483b?width=792"
                  alt="Traditional Architecture"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/13c94251d74fdc58e98240210c4a33cce6fb6c30?width=372"
                alt="Sunset View"
                className="w-full h-auto object-cover rounded-[20px]"
              />

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0e0e824df634c55c248fc408073ae4bbc467261c?width=374"
                alt="City Skyline"
                className="w-full h-auto object-cover rounded-[20px]"
              />

              <div className="sm:col-span-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e288381f2cf02643b9cdb92634ec9c1280d5668f?width=374"
                  alt="Rock Formation"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Airport Offices Component Example */}
        <section className="px-4 lg:px-[120px] pb-12 lg:pb-20">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-[29px] leading-6 tracking-[-0.58px] mb-4">
              <span className="font-extrabold text-brand-purple">
                Airport Offices{" "}
              </span>
              <span className="font-medium text-brand-gray">
                Card Component
              </span>
            </h2>
            <p className="text-[14px] font-medium leading-6 text-brand-gray">
              <span className="font-medium">
                Reusable component for displaying{" "}
              </span>
              <span className="font-bold text-brand-purple">
                airport contact information
              </span>
              <span className="font-medium"> with tabbed navigation.</span>
            </p>
          </div>

          <AirportOfficesCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
