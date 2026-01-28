import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Upload, Send, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactInvestmentTeamPage() {
  const [investmentAreas, setInvestmentAreas] = useState({
    airline: false,
    cargo: false,
    realEstate: false,
    mro: false,
    retail: false,
    other: false,
  });
  const [showOtherField, setShowOtherField] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const handleInvestmentAreaChange = (area: keyof typeof investmentAreas) => {
    const newAreas = { ...investmentAreas, [area]: !investmentAreas[area] };
    setInvestmentAreas(newAreas);
    if (area === "other") {
      setShowOtherField(!investmentAreas.other);
    }
  };

  const locations = [
    "KFIA International Airport",
    "AQI International Airport",
    "HOF International Airport",
    "No Preference",
  ];

  return (
    <div className="w-full min-h-screen bg-white font-loew">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-[120px] py-12 lg:py-[108px]">
        {/* Page Title */}
        <h1 className="text-[36px] lg:text-[48px] font-medium leading-[46px] lg:leading-[60px] tracking-[-0.72px] lg:tracking-[-0.96px] mb-6 lg:mb-8">
          <span className="font-extrabold text-brand-purple">Contact </span>
          <span className="text-brand-gray">Investment Team</span>
        </h1>

        {/* Description */}
        <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] mb-8 lg:mb-12 max-w-[1183px]">
          We welcome investors, partners, and businesses to explore
          opportunities with{" "}
          <span className="font-extrabold text-brand-purple">
            Dammam Airports Company (DACO).
          </span>{" "}
          Our dedicated investment team is here to guide you through every step
          of the process.
        </p>

        {/* Hero Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5193f4b794a95cbf786579322e5c20cf69c484a0?width=2400"
          alt="Dammam Airport"
          className="w-full h-[200px] lg:h-[330px] rounded-[20px] object-cover mb-8 lg:mb-12"
        />

        {/* Inquiry Points */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-start gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-purple mt-[9px] flex-shrink-0"></div>
            <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
              Submit your investment interest or proposal quickly through{" "}
              <span className="font-extrabold text-brand-purple">
                our online inquiry form.
              </span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-brand-purple mt-[9px] flex-shrink-0"></div>
            <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px]">
              Provide details about your business concept, partnership area, and
              requirements, and our team will respond with tailored
              opportunities and guidance.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-[10px] mb-8 lg:mb-12">
          <div className="w-[4px] h-[34px] bg-brand-purple"></div>
          <h2 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
            <span className="font-extrabold text-brand-purple">Inquiry</span>
            <span className="text-brand-gray"> Form</span>
          </h2>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[790px_380px] gap-6 lg:gap-[30px] max-w-[1200px]">
          {/* Form */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            {/* Section 01 - Investor Information */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center gap-2 mb-6 lg:mb-8">
                <div className="bg-brand-purple rounded-[14px] px-[15px] py-[10px]">
                  <span className="text-white text-[16px] font-bold tracking-[-0.32px]">
                    01
                  </span>
                </div>
                <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px]">
                  Investor Information
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Full Name */}
                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                    Full Name
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                    Company / Organization Name
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>

                {/* Position/Title */}
                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                    Position / Title
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>
              </div>

              {/* Business Registration Number */}
              <div className="mt-4 lg:mt-6">
                <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 block">
                  Business Registration Number
                </label>
                <input
                  type="text"
                  placeholder="If applicable"
                  className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4 text-[12px] text-brand-gray"
                />
              </div>

              {/* Contact Email and Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6">
                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                    Contact Email
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>

                <div>
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                    Contact Phone
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                </div>
              </div>
            </div>

            {/* Section 02 - Investment Area of Interest */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-purple rounded-[14px] px-[15px] py-[10px]">
                  <span className="text-white text-[16px] font-bold tracking-[-0.32px]">
                    02
                  </span>
                </div>
                <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px]">
                  Investment Area of Interest
                </h3>
              </div>

              <p className="text-brand-gray text-[12px] font-medium leading-[24px] mb-4">
                Choose one or more
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Airline Partnerships */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={investmentAreas.airline}
                    onChange={() => handleInvestmentAreaChange("airline")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Airline Partnerships
                  </span>
                </label>

                {/* MRO */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={investmentAreas.mro}
                    onChange={() => handleInvestmentAreaChange("mro")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Maintenance, Repair & Overhaul (MRO)
                  </span>
                </label>

                {/* Cargo & Logistics */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={investmentAreas.cargo}
                    onChange={() => handleInvestmentAreaChange("cargo")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Cargo & Logistics
                  </span>
                </label>

                {/* Retail & F&B */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={investmentAreas.retail}
                    onChange={() => handleInvestmentAreaChange("retail")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Retail & F&B Concessions
                  </span>
                </label>

                {/* Real Estate & Leasing */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={investmentAreas.realEstate}
                    onChange={() => handleInvestmentAreaChange("realEstate")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Real Estate & Leasing
                  </span>
                </label>
              </div>

              {/* Other Option */}
              <div className="mt-4">
                <label className="flex items-center gap-3 cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    checked={investmentAreas.other}
                    onChange={() => handleInvestmentAreaChange("other")}
                    className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5]"
                  />
                  <span className="text-brand-gray text-[14px] font-extrabold leading-[24px]">
                    Other (please specify)
                  </span>
                </label>
                {showOtherField && (
                  <input
                    type="text"
                    className="w-full lg:w-[350px] h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                  />
                )}
              </div>
            </div>

            {/* Section 03 - Proposal Details */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center gap-2 mb-6 lg:mb-8">
                <div className="bg-brand-purple rounded-[14px] px-[15px] py-[10px]">
                  <span className="text-white text-[16px] font-bold tracking-[-0.32px]">
                    03
                  </span>
                </div>
                <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px]">
                  Proposal Details
                </h3>
              </div>

              {/* Investment Project Title */}
              <div className="mb-4 lg:mb-6">
                <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                  Investment Project Title
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4"
                />
              </div>

              {/* Brief Description */}
              <div className="mb-4 lg:mb-6">
                <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 flex items-center gap-2">
                  Brief Description of the Proposal
                  <span className="text-red-600">*</span>
                </label>
                <textarea className="w-full h-[84px] rounded-[10px] border border-[#F5F5F5] bg-white px-4 py-3 resize-none"></textarea>
                <div className="text-right text-brand-gray text-[12px] font-medium mt-1">
                  0 / 200
                </div>
              </div>

              {/* Estimated Investment, Timeline, Location */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div>
                  <label className="text-brand-gray text-[14px] leading-[24px] mb-2 block">
                    <span className="font-extrabold">
                      Estimated Investment{" "}
                    </span>
                    <span className="font-medium">(opt)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., SAR 10.000"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4 text-[12px] text-brand-gray"
                  />
                </div>

                <div>
                  <label className="text-brand-gray text-[14px] leading-[24px] mb-2 block">
                    <span className="font-extrabold">Proposed Timeline </span>
                    <span className="font-medium">(opt)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 12-18 months"
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4 text-[12px] text-brand-gray"
                  />
                </div>

                <div className="relative">
                  <label className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-2 block">
                    Location Preference
                  </label>
                  <button
                    onClick={() =>
                      setShowLocationDropdown(!showLocationDropdown)
                    }
                    className="w-full h-[44px] rounded-[10px] border border-[#F5F5F5] bg-white px-4 flex items-center justify-between"
                  >
                    <span className="text-brand-gray text-[12px] font-medium">
                      {selectedLocation}
                    </span>
                    <ChevronDown className="w-6 h-6 text-brand-gray" />
                  </button>
                  {showLocationDropdown && (
                    <div className="absolute top-[76px] left-0 w-full rounded-[10px] bg-white border border-[#EDEDED] shadow-lg z-10">
                      {locations.map((location, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedLocation(location);
                            setShowLocationDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-brand-gray text-[12px] font-medium hover:bg-[#F5F5F5] ${
                            index !== locations.length - 1
                              ? "border-b border-[#EDEDED]"
                              : ""
                          }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 04 - Supporting Documents */}
            <div className="mb-8 lg:mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-brand-purple rounded-[14px] px-[15px] py-[10px]">
                  <span className="text-white text-[16px] font-bold tracking-[-0.32px]">
                    04
                  </span>
                </div>
                <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px]">
                  Supporting Documents
                </h3>
              </div>

              <p className="text-brand-gray text-[12px] font-medium leading-[24px] mb-6">
                Upload relevant documents to support your proposal (optional)
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Business Profile Upload */}
                <div className="h-[188px] rounded-[10px] border border-dashed border-[#F5F5F5] bg-white flex flex-col items-center justify-center p-6">
                  <Upload
                    className="w-[30px] h-[30px] text-brand-purple mb-4"
                    strokeWidth={2}
                  />
                  <p className="text-brand-gray text-[12px] font-medium text-center mb-1">
                    Upload Business Profile / Company Brochure
                  </p>
                  <p className="text-brand-gray text-[12px] font-medium text-center mb-4">
                    PDF format, max 10MB
                  </p>
                  <button className="h-[30px] px-6 rounded-[10px] border border-[#F5F5F5] bg-[#F5F5F5] text-brand-gray text-[12px] font-medium">
                    Choose File
                  </button>
                </div>

                {/* Detailed Proposal Upload */}
                <div className="h-[188px] rounded-[10px] border border-dashed border-[#F5F5F5] bg-white flex flex-col items-center justify-center p-6">
                  <Upload
                    className="w-[30px] h-[30px] text-brand-purple mb-4"
                    strokeWidth={2}
                  />
                  <p className="text-brand-gray text-[12px] font-medium text-center mb-1">
                    Upload Detailed Proposal
                  </p>
                  <p className="text-brand-gray text-[12px] font-medium text-center mb-4">
                    PDF or Word format, max 20MB
                  </p>
                  <button className="h-[30px] px-6 rounded-[10px] border border-[#F5F5F5] bg-[#F5F5F5] text-brand-gray text-[12px] font-medium">
                    Choose File
                  </button>
                </div>
              </div>
            </div>

            {/* Section 05 - Declaration & Consent */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-purple rounded-[14px] px-[15px] py-[10px]">
                  <span className="text-white text-[16px] font-bold tracking-[-0.32px]">
                    05
                  </span>
                </div>
                <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px]">
                  Declaration & Consent
                </h3>
              </div>

              <label className="flex items-start gap-2 cursor-pointer mb-8">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={() => setAgreedToTerms(!agreedToTerms)}
                  className="w-[22px] h-[22px] rounded-[6px] border border-[#CECECE] bg-[#F5F5F5] mt-1 flex-shrink-0"
                />
                <span className="text-brand-gray text-[14px] font-medium leading-[24px]">
                  I confirm that the information provided is accurate and agree
                  to DACO's investment review process and privacy policy.
                </span>
              </label>

              <button className="h-[32px] px-6 rounded-[10px] bg-[#D0D0D0] flex items-center gap-2 text-white text-[16px] font-medium">
                <Send className="w-[18px] h-[18px]" />
                Submit Investment Proposal
              </button>
            </div>
          </div>

          {/* Direct Contact Details Sidebar */}
          <div className="rounded-[20px] border border-[#EDEDED] bg-[#F5F5F5] p-6 lg:p-[30px]">
            <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-[24px] mb-3">
              Direct Contact Details
            </h3>
            <p className="text-brand-gray text-[14px] font-medium leading-[20px] mb-6 lg:mb-8">
              For direct communication, our investment officers are available to
              assist you.
            </p>

            {/* Investment Partnerships Department */}
            <div className="mb-6 lg:mb-8">
              <h4 className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-4">
                NationaliInvestment Partnerships Departmentty
              </h4>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-[46px] h-[36px] rounded-[14px] bg-brand-purple flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-brand-gray text-[14px] font-bold">Email</p>
                  <a
                    href="mailto:investment@daco.sa"
                    className="text-brand-gray text-[14px] font-medium underline"
                  >
                    investment@daco.sa
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-[46px] h-[36px] rounded-[14px] bg-brand-purple flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-brand-gray text-[14px] font-bold">Phone</p>
                  <a
                    href="tel:+966138831000"
                    className="text-brand-gray text-[14px] font-medium underline"
                  >
                    +966 (13) 883-1000
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#F5F5F5] mb-6 lg:mb-8"></div>

            {/* Corporate Relations Office */}
            <div>
              <h4 className="text-brand-gray text-[14px] font-extrabold leading-[24px] mb-4">
                Corporate Relations Office
              </h4>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-[46px] h-[36px] rounded-[14px] bg-brand-purple flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-brand-gray text-[14px] font-bold">Email</p>
                  <a
                    href="mailto:partners@daco.sa"
                    className="text-brand-gray text-[14px] font-medium underline"
                  >
                    partners@daco.sa
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-[46px] h-[36px] rounded-[14px] bg-brand-purple flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-brand-gray text-[14px] font-bold">Phone</p>
                  <a
                    href="tel:+966138832000"
                    className="text-brand-gray text-[14px] font-medium underline"
                  >
                    +966 (13) 883-2000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
