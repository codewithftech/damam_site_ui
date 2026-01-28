import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const timelineItems = [
    {
      year: "1946",
      title: "Dhahran Air Base",
      active: true,
      icon: "airport",
    },
    {
      year: "1983",
      title: "Construction Start",
      active: false,
      icon: "building",
    },
    {
      year: "1990",
      title: "Opening Year",
      active: false,
      icon: "award",
    },
    {
      year: "2017",
      title: "Vision 2030",
      active: false,
      icon: "target",
    },
    {
      year: "2025",
      title: "Current Status",
      active: false,
      icon: "plane",
    },
  ];

  const values = [
    {
      title: "INTEGRITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "integrity",
    },
    {
      title: "INNOVATION",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "innovation",
    },
    {
      title: "OWNERSHIP",
      description:
        "We take responsibility for our actions and are accountable for our results.",
      icon: "ownership",
    },
    {
      title: "SUSTAINABILITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "sustainability",
    },
    {
      title: "AGILITY",
      description:
        "We adapt quickly to change and respond swiftly to new opportunities.",
      icon: "agility",
    },
    {
      title: "CUSTOMER CENTRICITY",
      description:
        "We act with honesty and uphold strong moral principles in all our decisions.",
      icon: "customer",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[535px] lg:h-[812px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/87f24726ec8a62c200878817f8cbaf4df9ad258f?width=2880"
          alt="Dammam Airports"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-purple/60">
          <div className="container mx-auto px-4 lg:px-[120px] h-full flex flex-col justify-center">
            <h1
              className="text-white text-[40px] font-extrabold leading-[40px] lg:leading-[18px] tracking-tight uppercase mb-4 lg:mb-[88px]"
              style={{ fontWeight: 850 }}
            >
              DAMMAM AIRPORTS
            </h1>
            <p className="text-white text-[22px] lg:text-[24px] font-medium leading-[24px] lg:leading-[32px] tracking-tight max-w-[343px] lg:max-w-[1014px]">
              A key component of the Kingdom's efforts to improve the air
              transport industry in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-[#F5F5F5] py-4 lg:py-8">
        <div className="container mx-auto px-4 lg:px-[120px]">
          <div className="flex items-center gap-2 text-[14px] lg:text-[20px] font-bold leading-[24px] tracking-tight">
            <span className="text-brand-purple">Home</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-brand-purple">About Us</span>
            <span className="text-brand-purple font-medium">|</span>
            <span className="text-[#A799C4]">About Dammam Airports</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-[100px]">
        {/* About Section */}
        <div className="mb-[100px]">
          <h2 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-4 lg:mb-6">
            <span className="font-extrabold text-brand-purple">ABOUT </span>
            <span className="text-brand-gray">Dammam Airports</span>
          </h2>

          <h3 className="text-brand-purple text-[22px] font-extrabold leading-[21px] tracking-tight mb-4">
            Dammam Airports Company
          </h3>

          <div className="space-y-3 mb-[100px]">
            <p className="text-[16px] font-medium leading-[24px] tracking-tight">
              <span className="text-brand-gray">
                According to Saudi Vision 2030 and as part of the National
                Transformation Program,{" "}
              </span>
              <span className="text-brand-purple font-bold">
                Dammam Airports Company was established in Dammam on July 1,
                2017,
              </span>
              <span className="text-brand-gray">
                {" "}
                to be an integral part of the future vision to enhance the
                airport industry.
              </span>
            </p>

            <p className="text-brand-gray text-[16px] font-medium leading-[24px]">
              The company aims to operate and develop airport facilities,
              maintain them, improve infrastructure, manage commercial and
              investment relations, operate air cargo facilities, and enhance
              operational capabilities and efficiency of airports to keep up
              with the evolution of the aviation industry.
            </p>
          </div>

          {/* Company Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2b277a978c139bdd40eb807e1a27cadd1d350f76?width=440"
              alt="Dammam Airports Logo"
              className="w-[220px] h-auto"
            />
          </div>
        </div>

        {/* History & Timeline */}
        <div className="mb-[100px]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[34px] h-0 bg-brand-purple border-t-2 border-brand-purple"></div>
            <h3 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                History &{" "}
              </span>
              <span className="text-brand-gray">Timeline</span>
            </h3>
          </div>

          <p className="text-brand-gray text-[16px] font-medium leading-[24px] mb-12 max-w-[1136px]">
            Discover the remarkable journey of Dammam Airports from its humble
            beginnings to becoming one of the world's largest and most advanced
            aviation hubs, serving millions of passengers annually.
          </p>

          {/* Timeline - Desktop Only */}
          <div className="hidden lg:block mb-[40px]">
            <div className="relative flex items-start justify-between w-full max-w-[1201px] mb-[72px]">
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 w-[129px] relative"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-[74px] h-[74px] rounded-full flex items-center justify-center ${item.active ? "bg-[#F5F0FF]" : item.icon === "building" ? "bg-[#F5F5F5]" : "bg-[#EDEDED]"}`}
                  >
                    {item.icon === "airport" && (
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4153 33.9168H13.8736C11.6937 33.9168 10.6037 33.9168 9.92692 33.2385C9.24858 32.5617 9.24858 31.4717 9.24858 29.2918V18.5002H15.4153V33.9168ZM15.4153 33.9168V23.1252H27.7486C29.9316 23.1252 31.0215 23.1252 31.6953 23.8035C32.3736 24.4803 32.3736 25.5702 32.3736 27.7502V29.2918C32.3736 31.4717 32.3736 32.5617 31.6953 33.2385C31.02 33.9168 29.93 33.9168 27.7486 33.9168H15.4153ZM32.3736 9.25016L30.8319 10.7918M30.8319 10.7918H25.4361M30.8319 10.7918L26.2069 15.4168H24.6653M30.8319 10.7918V16.1877M12.3319 6.16683V3.0835M18.9133 15.5987C18.3475 17.0047 18.0654 17.7062 17.4795 18.104C16.8937 18.5002 16.1352 18.5002 14.6213 18.5002H10.0379C8.524 18.5002 7.7655 18.5002 7.17967 18.104C6.59383 17.7062 6.31017 17.0047 5.74592 15.5987L5.51467 15.0206C4.74383 13.1043 4.35842 12.147 4.82092 11.4686C5.27879 10.7918 6.31479 10.7918 8.38679 10.7918H16.2693C18.3413 10.7918 19.3773 10.7918 19.8368 11.4702C20.2993 12.147 19.9138 13.1043 19.143 15.0206L18.9133 15.5987ZM15.4091 10.7918H9.25475C7.99983 8.837 7.47567 7.85958 7.80404 7.08566C8.24188 6.37341 9.47983 6.16683 11.7461 6.16683H12.9178C15.184 6.16683 16.4235 6.37341 16.8613 7.08566C17.1897 7.85958 16.6655 8.837 15.4091 10.7918Z"
                          stroke="#60498C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === "building" && (
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
                    {item.icon === "award" && (
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
                    {item.icon === "target" && (
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
                    {item.icon === "plane" && (
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

                  {/* Year and Title */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`text-[20px] font-bold leading-[24px] text-center ${item.active ? "text-brand-purple" : "text-brand-gray"}`}
                    >
                      {item.year}
                    </div>
                    <div className="text-brand-gray text-[12px] font-medium leading-[24px] text-center">
                      {item.title}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className={`w-full h-2 rounded-lg border ${item.active ? "bg-brand-purple border-[#EDEDED]" : "bg-[#F5F5F5] border-[#EDEDED]"}`}
                  ></div>

                  {/* Dashed Connecting Line (except for last item) */}
                  {index < timelineItems.length - 1 && (
                    <div
                      className="absolute top-[37px] h-0 border-t border-dashed border-brand-gray"
                      style={{
                        width: "139px",
                        left: "129px",
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* 1946 Detail Card */}
            <div className="w-full max-w-[1200px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-10">
              {/* Year Header with Lines */}
              <div className="flex items-center justify-center gap-[29px] mb-[34px] h-[34px]">
                <div className="flex-1 h-0 border-t border-[#D2D2D2]"></div>
                <h2
                  className="text-brand-purple text-[36px] font-extrabold leading-[20px] text-center"
                  style={{ fontWeight: 800 }}
                >
                  1946
                </h2>
                <div className="flex-1 h-0 border-t border-[#D2D2D2]"></div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <div className="max-w-[545px]">
                  <h3 className="text-brand-purple text-[20px] font-bold leading-normal tracking-[-0.4px] mb-6">
                    Dhahran Air Base Foundation
                  </h3>

                  <p className="text-brand-gray text-[16px] font-medium leading-[24px] mb-[51px]">
                    Establishment of Dhahran Airfield by Aramco to support oil
                    operations in the Eastern Province, creating the first major
                    aviation infrastructure in the region that would later
                    influence the development of modern aviation facilities.
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-6 mb-[55px]">
                    <div className="inline-flex flex-col items-center w-[127px]">
                      <div className="text-brand-purple text-center text-[16px] font-bold leading-[24px]">
                        2.4 km
                      </div>
                      <div className="text-brand-gray text-[16px] font-medium leading-[24px]">
                        Runway Length
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-center w-[119px]">
                      <div className="text-brand-purple text-center text-[16px] font-bold leading-[24px]">
                        Oil Operations
                      </div>
                      <div className="text-brand-gray text-[16px] font-medium leading-[24px]">
                        Initial Purpose
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-brand-purple text-[20px] font-bold leading-normal tracking-[-0.4px] mb-[24px]">
                      Key Highlights
                    </h4>
                    <ul className="space-y-[20px]">
                      <li className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="4" fill="#60498C" />
                        </svg>
                        <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                          First concrete runway in Eastern Province
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="4" fill="#60498C" />
                        </svg>
                        <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                          Strategic location near oil discoveries
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="4" fill="#60498C" />
                        </svg>
                        <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                          Foundation for regional aviation development
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="4" fill="#60498C" />
                        </svg>
                        <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                          Aramco operations support facility
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0"
                        >
                          <circle cx="4" cy="4" r="4" fill="#60498C" />
                        </svg>
                        <span className="text-brand-gray text-[16px] font-medium leading-[24px]">
                          Gateway for international business travelers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-start justify-end">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5d7f9bb2db631d1cf78ed3f8a5a36b76d25a2293?width=1090"
                    alt="Historic airport facility"
                    className="w-[545px] h-[299px] rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values */}
        <div className="mb-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[34px] h-0 bg-brand-purple border-t-2 border-brand-purple"></div>
            <h3 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">
                Vision, Mission{" "}
              </span>
              <span className="text-brand-gray">& Values</span>
            </h3>
          </div>

          {/* Vision & Mission Layout - Desktop */}
          <div className="hidden lg:block mb-[100px]">
            <div className="relative w-full max-w-[1200px] h-[733px]">
              {/* Background Container with Cards */}
              <div className="absolute left-[137px] top-[115px] w-[926px] h-[615px]">
                {/* Background Image with Overlay */}
                <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/749ec5266f7f441ebbc7eaa34e90e7ae33f44a76?width=1852"
                    alt="Airport Terminal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-purple/30"></div>
                </div>

                {/* Mission Card - Bottom Left */}
                <div className="absolute left-0 top-[376px] w-[307px] h-[239px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 flex flex-col items-center text-center">
                  <svg
                    className="mb-[17px]"
                    width="39"
                    height="46"
                    viewBox="0 0 39 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.3315 33.8523L18.2213 27.7049C17.8299 27.3111 17.8299 26.6764 18.2213 26.2826C18.6127 25.8889 19.2435 25.8889 19.6349 26.2826L24.3315 31.0078L27.0303 28.2926L30.4359 31.7189C30.8273 32.1127 30.8273 32.7474 30.4359 33.1412C30.0445 33.5349 29.4137 33.5349 29.0223 33.1412L27.0303 31.1371L24.3315 33.8523Z"
                      fill="#60498C"
                    />
                    <path
                      d="M1.04139 46.0002C0.784364 46.0002 0.527324 45.9003 0.334553 45.7063C-0.0568301 45.3126 -0.0568301 44.6778 0.334553 44.2841L27.0362 17.4199L38.5441 28.9978C38.9355 29.3915 38.9355 30.0263 38.5441 30.42C38.1527 30.8138 37.5218 30.8138 37.1304 30.42L27.0362 20.2644L1.74823 45.7063C1.55546 45.9003 1.29842 46.0002 1.04139 46.0002Z"
                      fill="#60498C"
                    />
                    <path
                      d="M1.00034 35.1748C0.743313 35.1748 0.486308 35.0749 0.293537 34.881C-0.0978458 34.4872 -0.0978458 33.8525 0.293537 33.4587L11.8013 21.8809L15.832 25.9361C16.2234 26.3298 16.2234 26.9645 15.832 27.3583C15.4406 27.7521 14.8098 27.7521 14.4184 27.3583L11.8013 24.7312L1.70718 34.8868C1.51441 35.0808 1.25737 35.1807 1.00034 35.1807V35.1748Z"
                      fill="#60498C"
                    />
                    <path
                      d="M22.6429 46.0004C22.3859 46.0004 22.1289 45.9005 21.9361 45.7066C21.5447 45.3128 21.5447 44.6781 21.9361 44.2843L33.8996 32.248L38.4677 36.8439C38.859 37.2377 38.859 37.8724 38.4677 38.2662C38.0763 38.6599 37.4454 38.6599 37.054 38.2662L33.8996 35.0926L23.3498 45.7066C23.157 45.9005 22.8999 46.0004 22.6429 46.0004Z"
                      fill="#60498C"
                    />
                    <path
                      d="M39.0001 16.0271H32.2765L29.0111 12.7418H22.4102V10.7318H29.8406L33.106 14.0112H37.0023V7.38186H33.0885L29.9224 4.19649H22.4102V2.18652H30.7519L33.918 5.3719H39.0001V16.0271Z"
                      fill="#60498C"
                    />
                    <path
                      d="M21.6317 25.2832C21.0768 25.2832 20.6328 24.8307 20.6328 24.2782V1.00499C20.6328 0.446662 21.0826 0 21.6317 0C22.1808 0 22.6306 0.452539 22.6306 1.00499V24.2782C22.6306 24.8366 22.1808 25.2832 21.6317 25.2832Z"
                      fill="#60498C"
                    />
                  </svg>
                  <h4 className="text-brand-purple text-[20px] font-extrabold leading-[24px] tracking-[-0.4px] mb-[13px]">
                    Mission
                  </h4>
                  <p className="text-brand-gray text-[16px] font-medium leading-[24px] tracking-[-0.25px]">
                    To provide seamless customer experience in a safe innovative
                    and sustainable environment enabled by passionate human
                    capital.
                  </p>
                </div>

                {/* Vision Card - Top Right */}
                <div className="absolute left-[619px] top-0 w-[307px] h-[239px] rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 flex flex-col items-center text-center">
                  <svg
                    className="mb-[17px]"
                    width="38"
                    height="46"
                    viewBox="0 0 38 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20655 26.4543C9.20655 26.4543 9.15665 26.4543 9.12546 26.4543C8.58898 26.409 8.19597 25.9236 8.23964 25.367C8.4455 22.7264 9.55588 20.2346 11.3649 18.3577C15.3448 14.2286 21.6828 14.002 25.9247 17.6782L36.3423 6.86983C36.7228 6.47503 37.3342 6.47503 37.7147 6.86983C38.0952 7.26462 38.0952 7.89888 37.7147 8.29368L25.9559 20.4935L25.2697 19.7816C21.8138 16.1961 16.1932 16.1961 12.7373 19.7816C11.2526 21.3219 10.3419 23.3607 10.1735 25.5288C10.1298 26.053 9.7056 26.4543 9.20655 26.4543Z"
                      fill="#60498C"
                    />
                    <path
                      d="M0.971588 45.9935C0.722064 45.9935 0.472536 45.8965 0.285393 45.6958C-0.0951311 45.301 -0.0951311 44.6668 0.285393 44.272L12.0442 32.0721L12.7366 32.7776C14.4085 34.5121 16.6355 35.47 18.9997 35.47C21.3639 35.47 23.591 34.5121 25.2628 32.7776C26.7474 31.2372 27.6582 29.1985 27.8266 27.0304C27.8703 26.4738 28.3382 26.066 28.8746 26.1113C29.4111 26.1567 29.8041 26.6421 29.7604 27.1987C29.5546 29.8393 28.4442 32.331 26.6351 34.2079C24.5953 36.3243 21.8817 37.4892 18.9997 37.4892C16.4421 37.4892 14.0155 36.5702 12.0817 34.8875L1.65778 45.7023C1.47064 45.8965 1.22111 46 0.971588 46V45.9935Z"
                      fill="#60498C"
                    />
                    <path
                      d="M2.51916 33.8064L1.93278 31.923C-0.107079 25.2697 1.58345 18.0728 6.33689 13.1411C11.3648 7.92459 18.888 6.28716 25.5128 8.96659C26.0119 9.16723 26.2614 9.74971 26.0618 10.2675C25.8684 10.7852 25.307 11.0441 24.8079 10.837C18.9004 8.44883 12.1882 9.91151 7.70927 14.5585C3.77926 18.6359 2.20102 24.4478 3.43617 30.0008L8.51398 24.7325C8.89451 24.3378 9.50584 24.3378 9.88636 24.7325C10.2669 25.1273 10.2669 25.7616 9.88636 26.1564L2.51292 33.8064H2.51916Z"
                      fill="#60498C"
                    />
                    <path
                      d="M19.0241 44.8673C17.1964 44.8673 15.3499 44.5761 13.5471 43.9807C13.0356 43.8124 12.7548 43.2429 12.917 42.7186C13.0792 42.1879 13.6219 41.8967 14.1335 42.0649C19.8538 43.9613 26.0483 42.4015 30.2964 37.994C34.2451 33.8972 35.8171 28.1047 34.5695 22.5517L29.4854 27.8264C29.1049 28.2212 28.4936 28.2212 28.1131 27.8264C27.7325 27.4316 27.7325 26.7973 28.1131 26.4025L35.4678 18.772L35.9668 20.3059C38.1689 27.0562 36.522 34.3826 31.6688 39.4179C28.2503 42.9646 23.6965 44.8673 19.0241 44.8673Z"
                      fill="#60498C"
                    />
                    <path
                      d="M19.1176 29.7746C21.04 29.7746 22.5984 28.1577 22.5984 26.1632C22.5984 24.1686 21.04 22.5518 19.1176 22.5518C17.1952 22.5518 15.6367 24.1686 15.6367 26.1632C15.6367 28.1577 17.1952 29.7746 19.1176 29.7746Z"
                      fill="#60498C"
                    />
                    <path
                      d="M5.98098 5.8926C5.66284 5.8926 5.34469 5.73079 5.16379 5.42661C4.87683 4.96062 5.00783 4.33282 5.45698 4.03511C10.2853 0.837905 16.0929 -0.527699 21.8133 0.184228C22.3435 0.248949 22.7241 0.753777 22.6617 1.3039C22.5993 1.85403 22.1127 2.24883 21.5825 2.1841C16.305 1.52395 10.9527 2.786 6.49874 5.73726C6.33655 5.84729 6.15565 5.8926 5.97474 5.8926H5.98098Z"
                      fill="#60498C"
                    />
                  </svg>
                  <h4 className="text-brand-purple text-[20px] font-extrabold leading-[24px] tracking-[-0.4px] mb-[13px]">
                    Vision
                  </h4>
                  <p className="text-brand-gray text-[16px] font-medium leading-[24px] tracking-[-0.25px]">
                    To become the airport of choice for the region's travelers
                  </p>
                </div>

                {/* Logo - Top Left */}
                <div className="absolute left-0 top-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2b277a978c139bdd40eb807e1a27cadd1d350f76?width=440"
                    alt="Dammam Airports Logo"
                    className="w-[220px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission - Mobile */}
          <div className="lg:hidden grid grid-cols-1 gap-4 mb-6">
            {/* Vision Card */}
            <div className="rounded-[16px] border border-[#EDEDED] bg-[#F5F5F5] p-6 flex flex-col items-center text-center min-h-[239px]">
              <svg
                className="mb-[17px]"
                width="38"
                height="46"
                viewBox="0 0 38 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.20655 26.4543C9.20655 26.4543 9.15665 26.4543 9.12546 26.4543C8.58898 26.409 8.19597 25.9236 8.23964 25.367C8.4455 22.7264 9.55588 20.2346 11.3649 18.3577C15.3448 14.2286 21.6828 14.002 25.9247 17.6782L36.3423 6.86983C36.7228 6.47503 37.3342 6.47503 37.7147 6.86983C38.0952 7.26462 38.0952 7.89888 37.7147 8.29368L25.9559 20.4935L25.2697 19.7816C21.8138 16.1961 16.1932 16.1961 12.7373 19.7816C11.2526 21.3219 10.3419 23.3607 10.1735 25.5288C10.1298 26.053 9.7056 26.4543 9.20655 26.4543Z"
                  fill="#60498C"
                />
                <path
                  d="M0.971588 45.9935C0.722064 45.9935 0.472536 45.8965 0.285393 45.6958C-0.0951311 45.301 -0.0951311 44.6668 0.285393 44.272L12.0442 32.0721L12.7366 32.7776C14.4085 34.5121 16.6355 35.47 18.9997 35.47C21.3639 35.47 23.591 34.5121 25.2628 32.7776C26.7474 31.2372 27.6582 29.1985 27.8266 27.0304C27.8703 26.4738 28.3382 26.066 28.8746 26.1113C29.4111 26.1567 29.8041 26.6421 29.7604 27.1987C29.5546 29.8393 28.4442 32.331 26.6351 34.2079C24.5953 36.3243 21.8817 37.4892 18.9997 37.4892C16.4421 37.4892 14.0155 36.5702 12.0817 34.8875L1.65778 45.7023C1.47064 45.8965 1.22111 46 0.971588 46V45.9935Z"
                  fill="#60498C"
                />
                <path
                  d="M2.51904 33.8066L1.93266 31.9233C-0.107201 25.27 1.58333 18.073 6.33676 13.1413C11.3647 7.92483 18.8878 6.2874 25.5127 8.96684C26.0117 9.16747 26.2613 9.74995 26.0616 10.2677C25.8683 10.7855 25.3068 11.0444 24.8078 10.8373C18.9003 8.44907 12.1881 9.91176 7.70914 14.5587C3.77914 18.6361 2.2009 24.448 3.43604 30.0011L8.51386 24.7328C8.89438 24.338 9.50572 24.338 9.88624 24.7328C10.2668 25.1276 10.2668 25.7618 9.88624 26.1566L2.5128 33.8066H2.51904Z"
                  fill="#60498C"
                />
                <path
                  d="M19.0243 44.8673C17.1965 44.8673 15.35 44.5761 13.5472 43.9807C13.0357 43.8124 12.755 43.2429 12.9172 42.7186C13.0793 42.1879 13.6221 41.8967 14.1336 42.0649C19.8539 43.9613 26.0484 42.4015 30.2965 37.994C34.2452 33.8972 35.8172 28.1047 34.5696 22.5517L29.4856 27.8264C29.105 28.2212 28.4937 28.2212 28.1132 27.8264C27.7327 27.4316 27.7327 26.7973 28.1132 26.4025L35.4679 18.772L35.967 20.3059C38.169 27.0562 36.5221 34.3826 31.6689 39.4179C28.2504 42.9646 23.6966 44.8673 19.0243 44.8673Z"
                  fill="#60498C"
                />
                <path
                  d="M19.1176 29.7746C21.04 29.7746 22.5984 28.1577 22.5984 26.1632C22.5984 24.1686 21.04 22.5518 19.1176 22.5518C17.1952 22.5518 15.6367 24.1686 15.6367 26.1632C15.6367 28.1577 17.1952 29.7746 19.1176 29.7746Z"
                  fill="#60498C"
                />
                <path
                  d="M5.9808 5.8926C5.66265 5.8926 5.34451 5.73079 5.1636 5.42661C4.87665 4.96062 5.00765 4.33282 5.45679 4.03511C10.2851 0.837905 16.0928 -0.527699 21.8131 0.184228C22.3433 0.248949 22.7239 0.753777 22.6615 1.3039C22.5991 1.85403 22.1125 2.24883 21.5823 2.1841C16.3049 1.52395 10.9526 2.786 6.49856 5.73726C6.33637 5.84729 6.15546 5.8926 5.97456 5.8926H5.9808Z"
                  fill="#60498C"
                />
              </svg>
              <h4 className="text-brand-purple text-[20px] font-extrabold leading-[24px] tracking-[-0.4px] mb-[13px]">
                Vision
              </h4>
              <p className="text-brand-gray text-[16px] font-medium leading-[24px] tracking-tight max-w-[277px]">
                To become the airport of choice for the region's travelers
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-[16px] border border-[#EDEDED] bg-[#F5F5F5] p-6 flex flex-col items-center text-center min-h-[239px]">
              <svg
                className="mb-[17px]"
                width="39"
                height="46"
                viewBox="0 0 39 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3315 33.8521L18.2213 27.7046C17.8299 27.3109 17.8299 26.6761 18.2213 26.2824C18.6127 25.8886 19.2435 25.8886 19.6349 26.2824L24.3315 31.0076L27.0303 28.2923L30.4359 31.7187C30.8273 32.1125 30.8273 32.7472 30.4359 33.1409C30.0445 33.5347 29.4137 33.5347 29.0223 33.1409L27.0303 31.1369L24.3315 33.8521Z"
                  fill="#60498C"
                />
                <path
                  d="M1.04121 45.9999C0.784181 45.9999 0.52714 45.9 0.33437 45.7061C-0.0570132 45.3123 -0.0570132 44.6776 0.33437 44.2838L27.036 17.4197L38.5439 28.9975C38.9353 29.3913 38.9353 30.026 38.5439 30.4198C38.1525 30.8136 37.5216 30.8136 37.1302 30.4198L27.036 20.2642L1.74805 45.7061C1.55528 45.9 1.29824 45.9999 1.04121 45.9999Z"
                  fill="#60498C"
                />
                <path
                  d="M1.00034 35.1743C0.743313 35.1743 0.486308 35.0744 0.293537 34.8805C-0.0978458 34.4867 -0.0978458 33.852 0.293537 33.4582L11.8013 21.8804L15.832 25.9356C16.2234 26.3293 16.2234 26.9641 15.832 27.3578C15.4406 27.7516 14.8098 27.7516 14.4184 27.3578L11.8013 24.7308L1.70718 34.8864C1.51441 35.0803 1.25737 35.1802 1.00034 35.1802V35.1743Z"
                  fill="#60498C"
                />
                <path
                  d="M22.6429 45.9999C22.3859 45.9999 22.1289 45.9 21.9361 45.7061C21.5447 45.3123 21.5447 44.6776 21.9361 44.2838L33.8996 32.2476L38.4677 36.8434C38.859 37.2372 38.859 37.8719 38.4677 38.2657C38.0763 38.6595 37.4454 38.6595 37.054 38.2657L33.8996 35.0921L23.3498 45.7061C23.157 45.9 22.8999 45.9999 22.6429 45.9999Z"
                  fill="#60498C"
                />
                <path
                  d="M39.0001 16.0271H32.2765L29.0111 12.7418H22.4102V10.7318H29.8406L33.106 14.0112H37.0023V7.38186H33.0885L29.9224 4.19649H22.4102V2.18652H30.7519L33.918 5.3719H39.0001V16.0271Z"
                  fill="#60498C"
                />
                <path
                  d="M21.6317 25.2832C21.0768 25.2832 20.6328 24.8307 20.6328 24.2782V1.00499C20.6328 0.446662 21.0826 0 21.6317 0C22.1808 0 22.6306 0.452539 22.6306 1.00499V24.2782C22.6306 24.8366 22.1808 25.2832 21.6317 25.2832Z"
                  fill="#60498C"
                />
              </svg>
              <h4 className="text-brand-purple text-[20px] font-extrabold leading-[24px] tracking-[-0.4px] mb-[13px]">
                Mission
              </h4>
              <p className="text-brand-gray text-[16px] font-medium leading-[24px] tracking-tight">
                To provide seamless customer experience in a safe innovative and
                sustainable environment enabled by passionate human capital.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-[30px] lg:grid-rows-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-[16px] lg:rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-4 lg:p-5 flex items-center gap-4 h-[150px]"
              >
                <div className="flex-shrink-0 w-[110px] h-[110px] rounded-[14px] border border-[#EDEDED] bg-brand-purple flex items-center justify-center p-[5px_15px]">
                  {value.icon === "integrity" && (
                    <svg
                      width="48"
                      height="70"
                      viewBox="0 0 48 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.6737 33.4081L21.95 27.7668C21.4776 27.3012 21.4776 26.5473 21.95 26.0835C22.4225 25.6179 23.1874 25.6179 23.658 26.0835L27.6737 30.0433L39.8767 18.0143C40.3491 17.5486 41.114 17.5486 41.5865 18.0143C42.0589 18.4799 42.0589 19.2338 41.5865 19.6994L27.6737 33.41V33.4081Z"
                        fill="white"
                      />
                      <path
                        d="M2.50658 13.2086C2.45409 13.2234 2.41659 13.2714 2.41659 13.325L2.46908 38.0963C2.47658 43.9648 4.80131 49.4804 9.01019 53.6287L22.5967 67.0195C23.4066 67.8196 24.7265 67.8196 25.5383 67.0195L39.0442 53.7082C43.2624 49.5525 45.5853 44.024 45.5853 38.1443V13.325C45.5853 13.2714 45.5497 13.2234 45.4972 13.2086C38.823 11.3756 31.9406 10.4037 25.0189 10.3168C17.4186 10.2078 9.8426 11.1945 2.50846 13.2086H2.50658ZM23.6954 69.9852C22.5724 69.8965 21.5375 69.3422 20.7407 68.5569L7.30227 55.312C2.63782 50.7148 0.0637384 44.6005 0.0543645 38.1L0 11.5345C0 11.4809 0.0356249 11.4347 0.086244 11.4199L0.869901 11.1945C8.73273 8.93098 16.8524 7.84633 25.0489 7.93687C32.5218 8.03111 39.9516 9.12684 47.132 11.1945L47.9138 11.4199C47.9663 11.4347 48 11.4809 48 11.5326V38.1443C48 44.6614 45.4241 50.785 40.7521 55.3915L27.2462 68.7029C26.3088 69.6268 25.0339 70.0924 23.6954 69.9852Z"
                        fill="white"
                      />
                      <path
                        d="M1.20757 5.59721C0.686378 5.59721 0.202686 5.25907 0.0489535 4.73984C-0.138525 4.1079 0.228933 3.44825 0.870108 3.26347C8.73294 0.999942 16.8714 -0.0902466 25.0473 0.00583776C25.7128 0.0150766 26.2471 0.554627 26.2396 1.21244C26.2303 1.8647 25.6922 2.38762 25.0304 2.38762H25.0154C17.0795 2.26013 9.17913 3.35216 1.54502 5.54917C1.43254 5.58243 1.31818 5.59721 1.20569 5.59721H1.20757Z"
                        fill="white"
                      />
                      <path
                        d="M41.7832 53.5048C41.6032 53.5048 41.4195 53.4642 41.247 53.381C32.6155 49.1515 24.7602 43.6377 17.8947 36.9894C10.6431 29.9642 4.66629 21.8469 0.133073 12.8574C-0.165017 12.2698 0.0786972 11.5548 0.676752 11.261C1.27481 10.969 2.00035 11.2092 2.29657 11.7968C6.7098 20.5479 12.5291 28.4508 19.5877 35.2895C26.2694 41.7604 33.9204 47.1282 42.3213 51.245C42.9193 51.537 43.1612 52.252 42.8668 52.8415C42.655 53.2609 42.2275 53.503 41.7832 53.503V53.5048Z"
                        fill="white"
                      />
                      <path
                        d="M33.7691 61.7806C33.6041 61.7806 33.4373 61.7473 33.2761 61.6771C26.4106 58.6431 20.1151 54.5595 14.5695 49.5428C8.75581 44.2821 3.91511 38.1346 0.182424 31.2664C-0.132539 30.6862 0.0886876 29.9656 0.677369 29.6551C1.26605 29.3465 1.99722 29.5627 2.31218 30.1429C5.91551 36.7746 10.5893 42.7115 16.2024 47.7892C21.5568 52.6322 27.633 56.5735 34.2641 59.5041C34.8715 59.7739 35.1452 60.4779 34.8715 61.0784C34.6709 61.52 34.2284 61.7824 33.7672 61.7824L33.7691 61.7806Z"
                        fill="white"
                      />
                      <path
                        d="M36.3967 69.7706C36.0874 69.7706 35.7781 69.6542 35.5418 69.4213C35.0694 68.9557 35.0694 68.2018 35.5418 67.738L44.2989 59.107C44.7695 58.6414 45.5363 58.6414 46.0069 59.107C46.4793 59.5727 46.4793 60.3266 46.0069 60.7922L37.2498 69.4213C37.0135 69.6542 36.7042 69.7706 36.3949 69.7706H36.3967Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  {value.icon === "innovation" && (
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/969e087fc2108435441166a49d4ab5c9f71f0e26?width=96"
                      alt="Innovation icon"
                      className="w-[48px] h-[70px]"
                    />
                  )}
                  {value.icon === "ownership" && (
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/969e087fc2108435441166a49d4ab5c9f71f0e26?width=96"
                      alt="Ownership icon"
                      className="w-[48px] h-[70px]"
                    />
                  )}
                  {value.icon === "sustainability" && (
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/969e087fc2108435441166a49d4ab5c9f71f0e26?width=96"
                      alt="Sustainability icon"
                      className="w-[48px] h-[70px]"
                    />
                  )}
                  {value.icon === "agility" && (
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/969e087fc2108435441166a49d4ab5c9f71f0e26?width=96"
                      alt="Agility icon"
                      className="w-[48px] h-[70px]"
                    />
                  )}
                  {value.icon === "customer" && (
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/969e087fc2108435441166a49d4ab5c9f71f0e26?width=96"
                      alt="Customer Centricity icon"
                      className="w-[48px] h-[70px]"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h5 className="text-brand-purple text-[16px] font-bold leading-[14px] uppercase mb-[23px]">
                    {value.title}
                  </h5>
                  <p className="text-brand-gray text-[12px] font-medium leading-[24px]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
