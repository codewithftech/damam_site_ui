import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface GalleryItemProps {
  image: string;
  label: string;
}

function GalleryItem({ image, label }: GalleryItemProps) {
  return (
    <div className="relative rounded-[20px] overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={label}
        className="w-full h-[180px] md:h-[220px] lg:h-[259px] object-cover"
      />
      <div className="absolute bottom-0 left-0 inline-flex px-3 py-[6px] bg-white rounded-tr-[20px]">
        <span className="text-brand-purple text-[12px] lg:text-[14px] font-bold leading-[18px] tracking-[-0.28px]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const galleryItems = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b67293f3745cbf0f5496d8909354da29a464fda1?width=776",
      label: "Inside Terminal",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b277d93bcf52b847e3b1b9ad8e079e702077ac49?width=776",
      label: "Plaza Premium Lounge",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/59ecd0e5bc3275aa0144d7e25619a19814a07604?width=776",
      label: "Food & Beverage",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f657dd7c86498b87852982deb1bab1ebbb18bd5a?width=776",
      label: "Air Slide",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/477becc2dcbb936f6c59d5d2886b0b4de0d58b9e?width=776",
      label: "Airport exterior",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/53bc5ef57cdcbd5aabd1ac629fcf499a4f61be2e?width=776",
      label: "Check-In & At Gate",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e84b2f016d08051139fa81c20659400787a2f533?width=776",
      label: "Departure Terminal",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/dd8e40e5e1bf7d13cad086b239f7a0cbf3caebc2?width=776",
      label: "Duty Free Shopping",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-[64px]">
            <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.25] lg:leading-[60px] tracking-[-0.96px] mb-4 sm:mb-0">
              <span className="font-extrabold text-brand-purple">Photo </span>
              <span className="text-brand-gray">& Video Gallery</span>
            </h1>

            {/* Tab Toggle */}
            <div className="inline-flex p-[3px] items-center gap-[3px] rounded-[10px] bg-white border border-gray-100 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] transition-colors ${
                  activeTab === "photos"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                <span className="text-[18px] lg:text-[20px] font-bold leading-[18px] tracking-[-0.25px]">
                  Photos
                </span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-8 lg:px-[39px] py-[9px] rounded-[10px] transition-colors ${
                  activeTab === "videos"
                    ? "bg-brand-purple text-white"
                    : "bg-transparent text-[#737373]"
                }`}
              >
                <span className="text-[18px] lg:text-[20px] font-bold leading-[18px] tracking-[-0.25px]">
                  Videos
                </span>
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          {activeTab === "photos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[18px]">
              {galleryItems.map((item, index) => (
                <GalleryItem key={index} {...item} />
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-brand-gray text-[18px] lg:text-[20px] font-medium">
                Video gallery coming soon...
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
