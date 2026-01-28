import { useState } from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  featured?: boolean;
}

function NewsCard({
  image,
  date,
  title,
  description,
  featured = false,
}: NewsCardProps) {
  if (featured) {
    return (
      <div className="w-full rounded-[30px] border border-[#EDEDED] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-[420px] flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-[240px] lg:h-[280px] object-cover lg:rounded-l-[20px]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 lg:p-[16px_30px] flex flex-col justify-between">
            <div>
              <h3 className="text-brand-purple text-[20px] lg:text-[24px] font-bold leading-[1.2] mb-4 lg:mb-[32px]">
                {title}
              </h3>
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[1.4] mb-4 lg:mb-0">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4 lg:mt-[48px]">
              <div className="inline-flex px-3 lg:px-[12.5px] py-1 rounded-[20px] bg-[#F0EDF5]">
                <span className="text-brand-purple text-[11px] lg:text-[12px] font-bold leading-[150%]">
                  {date}
                </span>
              </div>

              <button className="flex items-center gap-2 text-brand-gray hover:text-brand-purple transition-colors">
                <span className="text-[18px] lg:text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
                  Learn More
                </span>
                <div className="w-[41px] h-[41px] flex items-center justify-center">
                  <ChevronRight className="w-6 h-6" strokeWidth={2} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[40px] border border-[#EDEDED] overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] lg:h-[241px] object-cover rounded-[28px_28px_0_0]"
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-5 flex flex-col">
        <div className="inline-flex self-start px-2 py-1 rounded-[20px] bg-[#F0EDF5] mb-4 lg:mb-[27px]">
          <span className="text-brand-purple text-[11px] lg:text-[12px] font-bold leading-[150%]">
            {date}
          </span>
        </div>

        <h3 className="text-brand-purple text-[14px] lg:text-[16px] font-bold leading-[1.2] mb-4 lg:mb-[27px] flex-grow">
          {title}
        </h3>

        <div className="w-full h-[1.5px] bg-[#EDEDED] mb-4 lg:mb-[27px]"></div>

        <p className="text-brand-gray text-[13px] lg:text-[14px] font-medium leading-[1.4] mb-4 lg:mb-6 min-h-[54px]">
          {description}
        </p>

        <button className="flex items-center gap-2 self-end text-brand-purple hover:opacity-80 transition-opacity mt-auto">
          <span className="text-[18px] lg:text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
            Learn More
          </span>
          <div className="w-[41px] h-[41px] flex items-center justify-center">
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredNews = {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/46bb9ff7c6d75b3e3cfd95ce79bbbcb882a0f2c7?width=840",
    date: "26 August 2025",
    title:
      "Eastern Province Governor Inaugurates King Fahd International Airport Master Plan and Launches Development Projects",
    description:
      "The Governor of the Eastern Province, Prince Saud bin Nayef bin Abdulaziz, presided over the ceremony to inaugurate the new identity and master plan of King Fahd International Airport.",
  };

  const pressArchive = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e5abd812810b57545ac478b8d8c9f94aae0eaa11?width=726",
      date: "08 March 2023",
      title:
        "Developing the Scope of Cooperation between Dammam Airports and Zajil aims to Increase the Company's Capacity and Explore Development Opportunities",
      description:
        "Dammam Airports and Zajil signed a Memorandum of Understanding (MOU) aimed at developing the scope of its logistics business",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/175628a7a7a57f8044e64c69ea70e94f2d915af5?width=706",
      date: "02 March 2023",
      title:
        "Strategic Partnership between Imam Abdulrahman Bin Faisal University & Dammam Airports to Include Academic & Training Services",
      description:
        "Imam Abdul Rahman Bin Faisal University signed a memorandum of understanding (MOU) with Dammam Airports...",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/018e33d88f2c51c55f5badea86e7adf047c5b0fc?width=726",
      date: "26 August 2023",
      title:
        "King Fahd International Airport Prepares to Welcome Over 6,500 Pilgrims",
      description:
        'King Fahd International Airport has completed its preparations to implement its operational plan under the "Ease and Reassurance" initiative',
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/656c093ce22a151adb7b83d0e0f8a793d75412c7?width=726",
      date: "19 December 2023",
      title: "New Airlines Added to KFIA in 2019",
      description:
        "Dammam Airports announced the launch of two new airlines at King Fahd International Airport, Al Jazeerah Airlines, operating direct flights to Kuwait, and Go Air, flying direct flights to The City of Knorr, India.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b2194d7accdba0fa9aa4c9a0125b74bf5da5935d?width=726",
      date: "27 January 2023",
      title: "Coming Soon: Sleep Cabins at KFIA",
      description:
        'Dammam Airport, through its official account on Twitter announced that sleeping cabins and loungers will be available "soon" at King Fahd International Airport...',
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f27a88ef34ca30e77298648e35426b7d9d0d7943?width=722",
      date: "26 August 2023",
      title:
        "King Fahd International Airport Ranks First in Operational Performance Compliance",
      description:
        "This accomplishment underscores Dammam Airports' commitment to providing seamless customer experiences within a safe, innovative, together with sustainable environment...",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-[64px]">
            <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.25] lg:leading-[60px] tracking-[-0.96px] mb-4 lg:mb-0">
              <span className="font-extrabold text-brand-purple">News </span>
              <span className="text-brand-gray">& Press Releases</span>
            </h1>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 lg:gap-6">
              <span className="text-brand-gray text-[16px] lg:text-[18px] font-medium">
                Follow us on:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-purple transition-colors"
                >
                  <Facebook className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-purple transition-colors"
                >
                  <Instagram className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-purple transition-colors"
                >
                  <Twitter className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-purple transition-colors"
                >
                  <Linkedin className="w-6 h-6" fill="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-brand-gray hover:text-brand-purple transition-colors"
                >
                  <Youtube className="w-6 h-6" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[34px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Latest</span>
              <span className="font-medium text-brand-gray"> News</span>
            </h2>
          </div>

          <div className="mb-12 lg:mb-[96px]">
            <NewsCard {...featuredNews} featured />
          </div>

          {/* Press Archive Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[34px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Press </span>
              <span className="font-medium text-brand-gray">Archive</span>
            </h2>
          </div>

          {/* Press Archive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] mb-12 lg:mb-[92px]">
            {pressArchive.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 lg:gap-3">
            <button className="w-[40px] lg:w-[45px] h-[40px] rounded-[10px] bg-white border border-[#F1F1F1] flex items-center justify-center text-[#CCC] text-[14px] lg:text-[16px] font-medium hover:bg-gray-50 transition-colors">
              Prev
            </button>

            <button className="w-[40px] h-[40px] rounded-[10px] bg-brand-purple flex items-center justify-center text-white text-[18px] lg:text-[20px] font-medium">
              1
            </button>

            <button className="w-[39px] h-[39px] rounded-[10px] bg-white border-2 border-[#F1F1F1] flex items-center justify-center text-brand-gray text-[18px] lg:text-[20px] font-medium hover:bg-gray-50 transition-colors">
              2
            </button>

            <button className="w-[39px] h-[39px] rounded-[10px] bg-white border-2 border-[#F1F1F1] flex items-center justify-center text-brand-gray text-[18px] lg:text-[20px] font-medium hover:bg-gray-50 transition-colors">
              3
            </button>

            <div className="w-[40px] h-[40px] flex items-center justify-center text-brand-gray text-[18px]">
              ...
            </div>

            <button className="w-[39px] h-[39px] rounded-[10px] bg-white border-2 border-[#F1F1F1] flex items-center justify-center text-brand-gray text-[18px] lg:text-[20px] font-medium hover:bg-gray-50 transition-colors">
              10
            </button>

            <button className="w-[40px] lg:w-[48px] h-[40px] rounded-[10px] bg-white border border-[#F1F1F1] flex items-center justify-center text-brand-gray text-[14px] lg:text-[16px] font-medium hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
