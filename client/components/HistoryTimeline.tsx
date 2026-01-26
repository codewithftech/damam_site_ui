import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

type TimelineIconName = "airport" | "building" | "award" | "target" | "plane";

type TimelineItem = {
  year: string;
  title: string;
  icon: TimelineIconName;
};

type TimelineDetail = {
  year: string;
  title: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
};

function TimelineIcon({
  name,
  active,
}: {
  name: TimelineIconName;
  active?: boolean;
}) {
  return (
    <div className={cn(!active && "opacity-70")}>
      {name === "airport" && (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4153 33.9168H13.8736C11.6937 33.9168 10.6037 33.9168 9.92692 33.2385C9.24858 32.5617 9.24858 31.4717 9.24858 29.2918V18.5002H15.4153V33.9168ZM15.4153 33.9168V23.1252H27.7486C29.9316 23.1252 31.0215 23.1252 31.6953 23.8035C32.3736 24.4803 32.3736 25.5702 32.3736 27.7502V29.2918C32.3736 31.4717 32.3736 32.5617 31.6953 33.2385C31.02 33.9168 29.93 33.9168 27.7486 33.9168H15.4153ZM32.3736 9.25016L30.8319 10.7918M30.8319 10.7918H25.4361M30.8319 10.7918L26.2069 15.4168H24.6653M30.8319 10.7918V16.1877M12.3319 6.16683V3.0835M18.9133 15.5987C18.3475 17.0047 18.0654 17.7062 17.4795 18.104C16.8937 18.5002 16.1352 18.5002 14.6213 18.5002H10.0379C8.524 18.5002 7.7655 18.5002 7.17967 18.104C6.59383 17.7062 6.31017 17.0047 5.74592 15.5987L5.51467 15.0206C4.74383 13.1043 4.35842 12.147 4.82092 11.4686C5.27879 10.7918 6.31479 10.7918 8.38679 10.7918H16.2693C18.3413 10.7918 19.3773 10.7918 19.8368 11.4702C20.2993 12.147 19.9138 13.1043 19.143 15.0206L18.9133 15.5987ZM15.4091 10.7918H9.25475C7.99983 8.837 7.47567 7.85958 7.80404 7.08566C8.24188 6.37341 9.47983 6.16683 11.7461 6.16683H12.9178C15.184 6.16683 16.4235 6.37341 16.8613 7.08566C17.1897 7.85958 16.6655 8.837 15.4091 10.7918Z"
            stroke={active ? "#60498C" : "#808080"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "building" && (
         <svg
         width="29"
         height="30"
         viewBox="0 0 29 30"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M9.04167 8.4375C9.40634 8.4375 9.75608 8.28934 10.0139 8.02562C10.2718 7.7619 10.4167 7.40421 10.4167 7.03125C10.4167 6.65829 10.2718 6.3006 10.0139 6.03688C9.75608 5.77316 9.40634 5.625 9.04167 5.625C8.67699 5.625 8.32726 5.77316 8.06939 6.03688C7.81153 6.3006 7.66667 6.65829 7.66667 7.03125C7.66667 7.40421 7.81153 7.7619 8.06939 8.02562C8.32726 8.28934 8.67699 8.4375 9.04167 8.4375ZM10.4167 12.6562C10.4167 13.0292 10.2718 13.3869 10.0139 13.6506C9.75608 13.9143 9.40634 14.0625 9.04167 14.0625C8.67699 14.0625 8.32726 13.9143 8.06939 13.6506C7.81153 13.3869 7.66667 13.0292 7.66667 12.6562C7.66667 12.2833 7.81153 11.9256 8.06939 11.6619C8.32726 11.3982 8.67699 11.25 9.04167 11.25C9.40634 11.25 9.75608 11.3982 10.0139 11.6619C10.2718 11.9256 10.4167 12.2833 10.4167 12.6562ZM9.04167 19.6875C9.22223 19.6875 9.40103 19.6511 9.56786 19.5805C9.73468 19.5098 9.88626 19.4062 10.0139 19.2756C10.1416 19.145 10.2429 18.99 10.312 18.8194C10.3811 18.6488 10.4167 18.4659 10.4167 18.2812C10.4167 18.0966 10.3811 17.9137 10.312 17.7431C10.2429 17.5725 10.1416 17.4175 10.0139 17.2869C9.88626 17.1563 9.73468 17.0527 9.56786 16.982C9.40103 16.9114 9.22223 16.875 9.04167 16.875C8.67699 16.875 8.32726 17.0232 8.06939 17.2869C7.81153 17.5506 7.66667 17.9083 7.66667 18.2812C7.66667 18.6542 7.81153 19.0119 8.06939 19.2756C8.32726 19.5393 8.67699 19.6875 9.04167 19.6875ZM15.9167 7.03125C15.9167 7.40421 15.7718 7.7619 15.5139 8.02562C15.2561 8.28934 14.9063 8.4375 14.5417 8.4375C14.177 8.4375 13.8273 8.28934 13.5694 8.02562C13.3115 7.7619 13.1667 7.40421 13.1667 7.03125C13.1667 6.65829 13.3115 6.3006 13.5694 6.03688C13.8273 5.77316 14.177 5.625 14.5417 5.625C14.9063 5.625 15.2561 5.77316 15.5139 6.03688C15.7718 6.3006 15.9167 6.65829 15.9167 7.03125ZM14.5417 14.0625C14.9063 14.0625 15.2561 13.9143 15.5139 13.6506C15.7718 13.3869 15.9167 13.0292 15.9167 12.6562C15.9167 12.2833 15.7718 11.9256 15.5139 11.6619C15.2561 11.3982 14.9063 11.25 14.5417 11.25C14.177 11.25 13.8273 11.3982 13.5694 11.6619C13.3115 11.9256 13.1667 12.2833 13.1667 12.6562C13.1667 13.0292 13.3115 13.3869 13.5694 13.6506C13.8273 13.9143 14.177 14.0625 14.5417 14.0625ZM15.9167 18.2812C15.9167 18.6542 15.7718 19.0119 15.5139 19.2756C15.2561 19.5393 14.9063 19.6875 14.5417 19.6875C14.177 19.6875 13.8273 19.5393 13.5694 19.2756C13.3115 19.0119 13.1667 18.6542 13.1667 18.2812C13.1667 17.9083 13.3115 17.5506 13.5694 17.2869C13.8273 17.0232 14.177 16.875 14.5417 16.875C14.9063 16.875 15.2561 17.0232 15.5139 17.2869C15.7718 17.5506 15.9167 17.9083 15.9167 18.2812ZM20.0417 19.6875C20.2222 19.6875 20.401 19.6511 20.5679 19.5805C20.7347 19.5098 20.8863 19.4062 21.0139 19.2756C21.1416 19.145 21.2429 18.99 21.312 18.8194C21.3811 18.6488 21.4167 18.4659 21.4167 18.2812C21.4167 18.0966 21.3811 17.9137 21.312 17.7431C21.2429 17.5725 21.1416 17.4175 21.0139 17.2869C20.8863 17.1563 20.7347 17.0527 20.5679 16.982C20.401 16.9114 20.2222 16.875 20.0417 16.875C19.677 16.875 19.3273 17.0232 19.0694 17.2869C18.8115 17.5506 18.6667 17.9083 18.6667 18.2812C18.6667 18.6542 18.8115 19.0119 19.0694 19.2756C19.3273 19.5393 19.677 19.6875 20.0417 19.6875ZM4.91667 30C4.67355 30 4.44039 29.9012 4.26849 29.7254C4.09658 29.5496 4 29.3111 4 29.0625V2.8125C4 2.06658 4.28973 1.35121 4.80546 0.823762C5.32118 0.296316 6.02065 0 6.75 0H17.75C18.4793 0 19.1788 0.296316 19.6945 0.823762C20.2103 1.35121 20.5 2.06658 20.5 2.8125V11.25H23.25C23.9793 11.25 24.6788 11.5463 25.1945 12.0738C25.7103 12.6012 26 13.3166 26 14.0625V29.0625C26 29.3111 25.9034 29.5496 25.7315 29.7254C25.5596 29.9012 25.3264 30 25.0833 30H4.91667ZM5.83333 2.8125V28.125H9.5V23.4375C9.5 23.1889 9.59658 22.9504 9.76849 22.7746C9.94039 22.5988 10.1736 22.5 10.4167 22.5H19.5833C19.8264 22.5 20.0596 22.5988 20.2315 22.7746C20.4034 22.9504 20.5 23.1889 20.5 23.4375V28.125H24.1667V14.0625C24.1667 13.8139 24.0701 13.5754 23.8982 13.3996C23.7263 13.2238 23.4931 13.125 23.25 13.125H19.5833C19.3402 13.125 19.1071 13.0262 18.9352 12.8504C18.7632 12.6746 18.6667 12.4361 18.6667 12.1875V2.8125C18.6667 2.56386 18.5701 2.3254 18.3982 2.14959C18.2263 1.97377 17.9931 1.875 17.75 1.875H6.75C6.50688 1.875 6.27373 1.97377 6.10182 2.14959C5.92991 2.3254 5.83333 2.56386 5.83333 2.8125ZM18.6667 24.375H15.9167V28.125H18.6667V24.375ZM14.0833 24.375H11.3333V28.125H14.0833V24.375Z"
           fill="#808080"
         />
       </svg>
      )}

      {/* The remaining icons match existing page design (kept as-is) */}
      {name === "award" && (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5304 4.72229C16.4699 3.62925 17.438 3.0835 18.4987 3.0835C19.5594 3.0835 20.5275 3.62925 22.4669 4.72229L25.1649 6.24237C27.1767 7.3755 28.1835 7.94283 28.7369 8.89095C29.2904 9.83908 29.2904 10.9953 29.2904 13.3078V15.9842C29.2904 18.2967 29.2904 19.4529 28.7354 20.401C28.1834 21.3492 27.1783 21.9165 25.1649 23.0496L22.4669 24.5697C20.5275 25.6627 19.5594 26.2085 18.4987 26.2085C17.438 26.2085 16.4699 25.6627 14.5304 24.5697L11.8325 23.0496C9.82066 21.9165 8.81395 21.3492 8.26049 20.401C7.70703 19.4529 7.70703 18.2967 7.70703 15.9842V13.3078C7.70703 10.9953 7.70703 9.83908 8.26203 8.89095C8.81395 7.94283 9.81911 7.3755 11.8325 6.24237L14.5304 4.72229Z"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M13.8744 15.6741C13.8744 15.6741 15.0306 15.6741 16.1869 17.7292C16.1869 17.7292 19.8591 12.5908 23.1244 11.5625M26.0273 23.125L27.0602 28.0737C27.7232 31.2527 28.0562 32.8421 27.3732 33.596C26.6918 34.3499 25.5078 33.7024 23.1398 32.4058L19.634 30.4865C19.0744 30.1812 18.7954 30.027 18.4994 30.027C18.2034 30.027 17.9243 30.1812 17.3647 30.4865L13.8589 32.4058C11.4909 33.7008 10.3069 34.3499 9.62553 33.596C8.94411 32.8421 9.27557 31.2527 9.93849 28.0737L10.9714 23.125"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "target" && (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4987 33.9168C27.0131 33.9168 33.9154 27.0146 33.9154 18.5002C33.9154 9.98577 27.0131 3.0835 18.4987 3.0835C9.98431 3.0835 3.08203 9.98577 3.08203 18.5002C3.08203 27.0146 9.98431 33.9168 18.4987 33.9168Z"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 27.75C23.6086 27.75 27.75 23.6086 27.75 18.5C27.75 13.3914 23.6086 9.25 18.5 9.25C13.3914 9.25 9.25 13.3914 9.25 18.5C9.25 23.6086 13.3914 27.75 18.5 27.75Z"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5013 21.5832C20.2042 21.5832 21.5846 20.2027 21.5846 18.4998C21.5846 16.797 20.2042 15.4165 18.5013 15.4165C16.7984 15.4165 15.418 16.797 15.418 18.4998C15.418 20.2027 16.7984 21.5832 18.5013 21.5832Z"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "plane" && (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4417 29.6L24.6667 16.9583L30.0625 11.5625C32.375 9.25 33.1458 6.16667 32.375 4.625C30.8333 3.85417 27.75 4.625 25.4375 6.9375L20.0417 12.3333L7.4 9.55833C6.62917 9.40417 6.0125 9.7125 5.70417 10.3292L5.24167 11.1C4.93333 11.8708 5.0875 12.6417 5.70417 13.1042L13.875 18.5L10.7917 23.125H6.16667L4.625 24.6667L9.25 27.75L12.3333 32.375L13.875 30.8333V26.2083L18.5 23.125L23.8958 31.2958C24.3583 31.9125 25.1292 32.0667 25.9 31.7583L26.6708 31.45C27.2875 30.9875 27.5958 30.3708 27.4417 29.6Z"
            stroke="#808080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

function TimelineYearHeader({ year }: { year: string }) {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-[29px] mb-6 lg:mb-[34px] h-[34px]">
      <div className="flex-1 h-0 border-t border-[#D2D2D2] " />
      <h2
        className="text-brand-purple text-[36px] font-extrabold leading-[20px] text-center"
        style={{ fontWeight: 800 }}
      >
        {year}
      </h2>
      <div className="flex-1 h-0 border-t border-[#D2D2D2]" />
    </div>
  );
}

function TimelineDetailCard({ detail }: { detail: TimelineDetail }) {
  return (
    <div className="mb-10 w-full  mx-auto rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-10">
      <TimelineYearHeader year={detail.year} />

      {/* Desktop layout (matches screenshot):
          Row 1: title+description spans full width
          Row 2: stats on left
          Row 3: key highlights heading on left
          Row 4: highlights list on left, image on right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_545px] lg:gap-x-8">
        {/* Title + Description (full width on desktop) */}
        <div className="lg:col-span-2">
          <h3 className="text-brand-purple text-[20px] font-bold leading-normal tracking-[-0.4px] mb-4 lg:mb-6">
            {detail.title}
          </h3>

          <p className="text-brand-gray text-[16px] font-medium leading-[24px] mb-8 lg:mb-[51px]">
            {detail.description}
          </p>
        </div>

        {/* Stats (left only on desktop) */}
        <div className="lg:col-start-1 lg:row-start-2">
          <div className="grid grid-cols-2 gap-8 lg:flex lg:gap-12 lg:mb-[55px]">
            {detail.stats.map((s) => (
              <div key={s.label} className="inline-flex flex-col items-start">
                <div className="text-brand-purple text-[16px] font-bold leading-[24px]">
                  {s.value}
                </div>
                <div className="text-brand-gray text-[16px] font-medium leading-[24px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile divider like design */}
          <div className="h-px bg-[#D2D2D2] my-6 lg:hidden" />
        </div>

        {/* Key Highlights heading */}
        <h4 className="text-brand-purple text-[20px] font-bold leading-normal tracking-[-0.4px] mb-6 lg:mb-[24px] lg:col-start-1 lg:row-start-3">
          Key Highlights
        </h4>

        {/* Image: mobile above list; desktop on the right aligned with list */}
        <div className="lg:col-start-2 lg:row-start-4 lg:flex lg:justify-end">
          <img
            src={detail.imageSrc}
            alt={detail.imageAlt}
            className="w-full h-[230px] lg:w-[545px] lg:h-[299px] rounded-[20px] object-cover mb-6 lg:mb-0"
          />
        </div>

        {/* Highlights list */}
        <ul className="space-y-6 lg:space-y-[20px] lg:col-start-1 lg:row-start-4">
          {detail.highlights.map((h) => (
            <li key={h} className="flex items-start lg:items-center gap-4 lg:gap-2">
              <span className="mt-2 lg:mt-0 w-2 h-2 rounded-full bg-brand-purple flex-shrink-0" />
              <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                {h}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HistoryTimeline() {
  const { isRTL } = useLanguage();
  const mobileSwiperRef = useRef<SwiperInstance | null>(null);

  const timelineItems: TimelineItem[] = useMemo(
    () => [
      { year: "1946", title: "Dhahran Air Base", icon: "airport" },
      { year: "1983", title: "Construction Start", icon: "building" },
      { year: "1990", title: "Opening Year", icon: "award" },
      { year: "2017", title: "Vision 2030", icon: "target" },
      { year: "2025", title: "Current Status", icon: "plane" },
    ],
    []
  );

  // Detail content keyed by year (TimelineDetailCard reads from this)
  const timelineDetailsByYear: Record<string, TimelineDetail> = useMemo(
    () => ({
      "1946": {
        year: "1946",
        title: "Dhahran Air Base Foundation",
        description:
          "Establishment of Dhahran Airfield by Aramco to support oil operations in the Eastern Province, creating the first major aviation infrastructure in the region that would later influence the development of modern aviation facilities.",
        stats: [
          { value: "2.4 km", label: "Runway Length" },
          { value: "Oil Operations", label: "Initial Purpose" },
        ],
        highlights: [
          "First concrete runway in Eastern Province",
          "Strategic location near oil discoveries",
          "Foundation for regional aviation development",
          "Aramco operations support facility",
          "Gateway for international business travelers",
        ],
        imageSrc:
          "https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090",
        imageAlt: "Historic airport facility",
      },
      // TODO: Fill out real content for these years when available
      "1983": {
        year: "1983",
        title: "Construction Start",
        description:
          "Major expansion and modernization initiatives began, laying the groundwork for future passenger and cargo growth.",
        stats: [
          { value: "—", label: "Phase" },
          { value: "—", label: "Scope" },
        ],
        highlights: ["Infrastructure planning", "Capacity upgrade", "Operational readiness"],
        imageSrc:
          "https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090",
        imageAlt: "Airport development",
      },
      "1990": {
        year: "1990",
        title: "Opening Year",
        description:
          "A key milestone in opening and scaling services, strengthening regional connectivity and operations.",
        stats: [
          { value: "—", label: "Terminals" },
          { value: "—", label: "Capacity" },
        ],
        highlights: ["Service launch", "Operational ramp-up", "Passenger growth"],
        imageSrc:
          "https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090",
        imageAlt: "Airport opening",
      },
      "2017": {
        year: "2017",
        title: "Vision 2030",
        description:
          "Alignment with national transformation goals, focusing on passenger experience, efficiency, and sustainable growth.",
        stats: [
          { value: "—", label: "Programs" },
          { value: "—", label: "Initiatives" },
        ],
        highlights: ["Service excellence", "Digital initiatives", "Strategic partnerships"],
        imageSrc:
          "https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090",
        imageAlt: "Vision 2030",
      },
      "2025": {
        year: "2025",
        title: "Current Status",
        description:
          "Today, Dammam Airports continues to expand capabilities, delivering modern services and seamless travel experiences.",
        stats: [
          { value: "—", label: "Passengers" },
          { value: "—", label: "Destinations" },
        ],
        highlights: ["Operational performance", "Customer experience", "Future-ready growth"],
        imageSrc:
          "https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090",
        imageAlt: "Current airport",
      },
    }),
    []
  );

  const [activeYear, setActiveYear] = useState<string>(timelineItems[0]?.year ?? "1946");

  const activeTimelineDetail =
    timelineDetailsByYear[activeYear] ?? timelineDetailsByYear[timelineItems[0]?.year ?? "1946"];

  const handleActivate = (year: string, index?: number) => {
    setActiveYear(year);
    if (typeof index === "number") {
      mobileSwiperRef.current?.slideTo(index);
    }
  };

  return (
    <div className="mb-[100px]">
      <div className="flex items-center gap-3 mb-8 lg:mb-[106px]">
        <div className="w-1 h-[34px] bg-brand-purple" />
        <h3 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
          <span className="font-extrabold text-brand-purple">Milestone </span>
          <span className="text-brand-gray">Awards</span>
        </h3>
      </div>

      <p className="text-brand-gray text-[16px] font-medium leading-[24px] mb-12 max-w-[1136px]">
        Discover the remarkable journey of Dammam Airports from its humble
        beginnings to becoming one of the world's largest and most advanced
        aviation hubs, serving millions of passengers annually.
      </p>

      {/* Timeline - Mobile (Swiper) */}
      <div className="lg:hidden mb-8">
        <Swiper
          dir={isRTL ? "rtl" : "ltr"}
          spaceBetween={12}
          slidesPerView={2.2}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const idx = swiper.realIndex ?? swiper.activeIndex;
            const year = timelineItems[idx]?.year;
            if (year) setActiveYear(year);
          }}
          breakpoints={{
            480: { slidesPerView: 2.4, spaceBetween: 12 },
            640: { slidesPerView: 3.1, spaceBetween: 14 },
          }}
          className="w-full"
        >
          {timelineItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <button
                type="button"
                onClick={() => handleActivate(item.year, index)}
                className="w-[155px] flex flex-col items-center gap-3"
                aria-pressed={activeYear === item.year}
              >
                <div
                  className={cn(
                    "w-[74px] h-[74px] rounded-full flex items-center justify-center border",
                    activeYear === item.year
                      ? "bg-[#F5F0FF] border-[#EDEDED]"
                      : "bg-white border-[#EDEDED]"
                  )}
                >
                  <TimelineIcon name={item.icon} active={activeYear === item.year} />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div
                    className={cn(
                      "text-[20px] font-bold leading-[24px] text-center",
                      activeYear === item.year ? "text-brand-purple" : "text-brand-gray"
                    )}
                  >
                    {item.year}
                  </div>
                  <div className="text-brand-gray text-[12px] font-medium leading-[18px] text-center">
                    {item.title}
                  </div>
                </div>

                <div
                  className={cn(
                    "w-full h-2 rounded-lg border",
                    activeYear === item.year
                      ? "bg-brand-purple border-brand-purple"
                      : "bg-white border-[#EDEDED]"
                  )}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Timeline - Desktop */}
      <div className="hidden lg:block mb-[40px]">
        <div className="relative flex items-start justify-between w-full max-w-[1201px] mb-[72px]">
          {timelineItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleActivate(item.year)}
              className="flex flex-col items-center gap-4 w-[129px] relative"
              aria-pressed={activeYear === item.year}
            >
              <div
                className={`w-[74px] h-[74px] rounded-full flex items-center justify-center ${
                  activeYear === item.year
                    ? "bg-[#F5F0FF]"
                    : item.icon === "building"
                      ? "bg-[#F5F5F5]"
                      : "bg-[#EDEDED]"
                }`}
              >
                <TimelineIcon name={item.icon} active={activeYear === item.year} />
              </div>

              <div className="flex flex-col items-center gap-1">
                <div
                  className={`text-[20px] font-bold leading-[24px] text-center ${
                    activeYear === item.year ? "text-brand-purple" : "text-brand-gray"
                  }`}
                >
                  {item.year}
                </div>
                <div className="text-brand-gray text-[12px] font-medium leading-[24px] text-center">
                  {item.title}
                </div>
              </div>

              <div
                className={`w-full h-2 rounded-lg border ${
                  activeYear === item.year
                    ? "bg-brand-purple border-[#EDEDED]"
                    : "bg-[#F5F5F5] border-[#EDEDED]"
                }`}
              />

              {index < timelineItems.length - 1 && (
                <div
                  className="absolute top-[37px] h-0 border-t-2 border-dashed border-brand-gray"
                  style={{ width: "139px", left: "129px" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <TimelineDetailCard detail={activeTimelineDetail} />
    </div>
  );
}

