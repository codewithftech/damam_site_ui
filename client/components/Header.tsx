import { Search, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

function Header() {
  const { language, setLanguage, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePassengerMenuOpen, setIsMobilePassengerMenuOpen] = useState(false);
  const [isPassengerMenuOpen, setIsPassengerMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isMobileAboutMenuOpen, setIsMobileAboutMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const passengerMenuRef = useRef<HTMLDivElement>(null);
  const mobilePassengerMenuRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
  const searchMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Navigation items with translations
  const navItems = [
    { href: "/about", en: "About Us", ar: "من نحن" },
    { href: "#airports", en: "Our Airports", ar: "مطاراتنا" },
    { href: "#invest", en: "Invest with Us", ar: "استثمر معنا" },
    { href: "#vendor", en: "Vendor Portal", ar: "بوابة الموردين" },
    { href: "#careers", en: "Careers", ar: "الوظائف" },
    { href: "#media", en: "Media Center", ar: "المركز الإعلامي" },
    { href: "#contact", en: "Contact Us", ar: "اتصل بنا" },
  ];

  // Pages (must match routes in client/App.tsx)
  const aboutMenuItems = [
    { href: "/about", en: "About Dammam Airports", ar: "عن مطارات الدمام" },
    { href: "/about-post-single", en: "About post single", ar: "الاستدامة والمسؤولية الاجتماعية" },
    { href: "/leadership", en: "Leadership", ar: "القيادة" },
    { href: "/awards", en: "Awards & Achievements", ar: "الجوائز والإنجازات" },
    { href: "/our-airports", en: "Our Airports", ar: "مطاراتنا" },
    { href: "/airports/kfia", en: "KFIA", ar: "KFIA" },
    { href: "/sustainability", en: "Sustainability", ar: "Sustainability" },
    // Invest with Us
    { href: "/aero-opportunities", en: "Aero Opportunities", ar: "Aero Opportunities" },
    { href: "/airline-development", en: "Airline Development", ar: "Airline Development" },
    { href: "/aero-concessions", en: "Aero Concessions", ar: "Aero Concessions" },
    { href: "/cargo-logistics", en: "Cargo & Logistics", ar: "Cargo & Logistics" },
    { href: "/investment-guidelines", en: "Investment Guidelines", ar: "Investment Guidelines" },
    { href: "/contact-investment-team", en: "Contact Investment Team", ar: "Contact Investment Team" },
    // Vendor Portal / Procurement
    { href: "/vendor-profile", en: "Vendor Profile", ar: "Vendor Profile" },
    { href: "/vendor-registration", en: "Vendor Registration", ar: "Vendor Registration" },
    { href: "/procurement-guidelines", en: "Procurement Guidelines", ar: "Procurement Guidelines" },
    { href: "/contact-procurement", en: "Contact Procurement", ar: "Contact Procurement" },
    // Careers / Media
    { href: "/internship-graduate", en: "Internship & Graduate", ar: "Internship & Graduate" },
    { href: "/news", en: "News", ar: "News" },
    { href: "/gallery", en: "Gallery", ar: "Gallery" },
    { href: "/publications", en: "Publications", ar: "Publications" },
    { href: "/media-kit", en: "Media Kit", ar: "Media Kit" },
    { href: "/media-contact", en: "Media Contact", ar: "Media Contact" },
    { href: "/contact-us", en: "Contact Us", ar: "Contact Us" },
    { href: "/component-library", en: "Component Library", ar: "مكتبة المكونات" },
    { href: "/components-lib", en: "Components Lib", ar: "Components Lib" },
  ];

  const searchItems = [
    { href: "/", en: "Home", ar: "الرئيسية" },
    ...aboutMenuItems,
    ...navItems,
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredSearchItems = normalizedQuery
    ? searchItems.filter((i) => {
        const label = (language === "ar" ? i.ar : i.en).toLowerCase();
        return label.includes(normalizedQuery);
      })
    : searchItems;

  const visibleSearchItems = filteredSearchItems.slice(0, 6);

  const handleSearchSelect = (href: string) => {
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
    setSearchQuery("");

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(href);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passengerMenuRef.current && !passengerMenuRef.current.contains(event.target as Node)) {
        setIsPassengerMenuOpen(false);
      }
      if (mobilePassengerMenuRef.current && !mobilePassengerMenuRef.current.contains(event.target as Node)) {
        setIsMobilePassengerMenuOpen(false);
      }
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target as Node)) {
        setIsAboutMenuOpen(false);
      }
      if (searchMenuRef.current && !searchMenuRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) return;
    searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePassengerMenuOpen(false);
    setIsMobileAboutMenuOpen(false);
    setIsMobileSearchOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="bg-brand-light-gray sticky top-0 z-50">
      {/* Mobile Header */}
      <div className="lg:hidden px-4">
        <div className={`flex items-center justify-between py-3 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={handleMobileNavClick}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7f7a8e258400340b4645d5a310f1ed9f6315a0ca?width=314"
              alt="Dammam Airports"
              className="h-auto w-auto max-h-[31px] max-w-[157px]"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label={language === "ar" ? "القائمة" : "Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`w-7 h-0.5 bg-brand-purple transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-7 h-0.5 bg-brand-purple transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-7 h-0.5 bg-brand-purple transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="container mx-auto  h-[77px] hidden lg:flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/249841acc5bf4708e3813fe50f64513970c9593f?width=384"
              alt="Dammam Airports Company"
              className="h-[29px] w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`hidden lg:flex items-center gap-2 px-2 xl:px-0 xl:gap-8 flex-1 justify-center ${isRTL ? "flex-row-reverse" : ""}`}>
          {navItems.map((item, index) => {
            if (item.href === "/about") {
              return (
                <div key={index} className="relative" ref={aboutMenuRef}>
                  <button
                    type="button"
                    onClick={() => setIsAboutMenuOpen((v) => !v)}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-brand-gray text-xs font-medium tracking-tight hover:text-brand-purple transition-colors",
                      isRTL && "flex-row-reverse"
                    )}
                    aria-label={language === "ar" ? "من نحن" : "About menu"}
                    aria-expanded={isAboutMenuOpen}
                  >
                    <span>{language === "ar" ? item.ar : item.en}</span>
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform",
                        isAboutMenuOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isAboutMenuOpen && (
                    <div
                      className={cn(
                        "absolute top-full mt-3 w-[min(270px,calc(100vw-2rem))] bg-brand-light-gray rounded-b-[20px] rounded-t-none shadow-lg border border-[#EDEDED] overflow-hidden z-50",
                        isRTL ? "right-0" : "left-0"
                      )}
                    >
                      <div className="max-h-[320px] overflow-y-auto divide-y divide-[#EDEDED]">
                        {aboutMenuItems.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.href}
                            onClick={() => setIsAboutMenuOpen(false)}
                            className={cn(
                              "block px-6 py-4 text-brand-gray text-sm font-medium leading-[21px] hover:bg-white transition-colors",
                              isRTL && "text-right"
                            )}
                          >
                            {language === "ar" ? sub.ar : sub.en}
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown footer (separate) + logo on right side */}
                      <div className="border-t border-[#EDEDED] px-5 py-3">
                        <div className={cn("flex", isRTL ? "justify-start" : "justify-end")}>
                          <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=48"
                            alt=""
                            className="w-6 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return item.href.startsWith("/") ? (
              <Link
                key={index}
                to={item.href}
                className="text-brand-gray text-xs font-medium tracking-tight hover:text-brand-purple transition-colors"
              >
                {language === "ar" ? item.ar : item.en}
              </Link>
            ) : (
              <NavLink key={index} href={item.href}>
                {language === "ar" ? item.ar : item.en}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Side - Search, Language & Passenger Selector */}
        <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Search Icon */}
          <div className="relative" ref={searchMenuRef}>
            <button
              type="button"
              onClick={() => {
                setIsSearchOpen((v) => !v);
                setIsPassengerMenuOpen(false);
                setIsAboutMenuOpen(false);
              }}
              className="text-brand-gray hover:text-brand-purple transition-colors"
              aria-label={language === "ar" ? "بحث" : "Search"}
              aria-expanded={isSearchOpen}
            >
              <Search className="w-[18px] h-[18px]" />
            </button>

            {isSearchOpen && (
              <div
                className={cn(
                  "absolute top-full mt-3 w-[min(320px,calc(100vw-2rem))] bg-brand-light-gray rounded-b-[20px] rounded-t-none shadow-lg border border-[#EDEDED] overflow-hidden z-50",
                  // Keep dropdown placement stable (same as LTR) even in RTL
                  "left-1/2 -translate-x-1/2"
                )}
              >
                {/* Search input */}
                <div className="p-4 border-b border-[#EDEDED]">
                  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 border border-[#EDEDED]">
                    <Search className="w-4 h-4 text-brand-gray flex-shrink-0" />
                    <input
                      ref={searchInputRef}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={language === "ar" ? "ابحث..." : "Search..."}
                      className={cn(
                        "w-full bg-transparent text-sm text-brand-gray placeholder:text-brand-gray/60 outline-none",
                        isRTL && "text-right"
                      )}
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="max-h-[260px] overflow-auto divide-y divide-[#EDEDED]">
                  {visibleSearchItems.length > 0 ? (
                    visibleSearchItems.map((item, idx) => (
                      <button
                        key={`${item.href}-${idx}`}
                        type="button"
                        onClick={() => handleSearchSelect(item.href)}
                        className={cn(
                          "w-full text-left px-6 py-3 text-brand-gray text-sm font-medium hover:bg-white transition-colors",
                          isRTL && "text-right"
                        )}
                      >
                        {language === "ar" ? item.ar : item.en}
                      </button>
                    ))
                  ) : (
                    <div className={cn("px-6 py-4 text-sm text-brand-gray/70", isRTL && "text-right")}>
                      {language === "ar" ? "لا توجد نتائج" : "No results"}
                    </div>
                  )}
                </div>

                {/* Dropdown footer */}
                <div className="border-t border-[#EDEDED] px-5 py-3">
                  {/* Keep footer logo aligned like LTR (stable position) */}
                  <div className="flex justify-end">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=48"
                      alt=""
                      className="w-6 h-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#E5E5E5] rounded-full p-0.5 h-[21px]">
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2 py-1 text-[11px] font-medium rounded-full leading-none transition-colors ${
                language === "ar"
                  ? "text-brand-purple bg-white z-10"
                  : "text-white bg-[#9F9F9F]"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-[11px] font-medium rounded-full leading-none transition-colors ${
                language === "en"
                  ? "text-brand-purple bg-white z-10"
                  : "text-white bg-[#9F9F9F]"
              }`}
            >
              English
            </button>
          </div>

          {/* Passenger Selector */}
          <div className="relative hidden md:flex" ref={passengerMenuRef}>
            <button
              onClick={() => setIsPassengerMenuOpen(!isPassengerMenuOpen)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-1 h-[24px]",
                isRTL 
                  ? "bg-gradient-to-l from-brand-dark-purple to-brand-purple"
                  : "bg-gradient-to-r from-brand-dark-purple to-brand-purple"
              )}
              aria-label={language === "ar" ? "الركاب" : "Passengers"}
              aria-expanded={isPassengerMenuOpen}
            >
              <span className="text-white text-sm font-medium tracking-tight">
                {language === "ar" ? "الركاب" : "Passengers"}
              </span>
              <ChevronDown className={`w-3 h-3 text-white transition-transform ${isPassengerMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Passenger Dropdown */}
            {isPassengerMenuOpen && (
              <div className={`absolute ${isRTL ? "left-0" : "right-0"} top-[calc(100%+8px)] w-[min(306px,calc(100vw-2rem))] bg-white rounded-[5px] shadow-lg overflow-hidden z-50`}>
                <AirportOption
                  icon={<AirplaneIcon />}
                  nameAr="مطار الملك فهد الدولي"
                  nameEn="King Fahd International Airport"
                  onClick={() => setIsPassengerMenuOpen(false)}
                />
                <AirportOption
                  icon={<AirplaneIcon />}
                  nameAr="مطار الأحساء الدولي"
                  nameEn="AlAhsa International Airport"
                  onClick={() => setIsPassengerMenuOpen(false)}
                />
                <AirportOption
                  icon={<AirplaneIcon />}
                  nameAr="مطار القيصومة الدولي"
                  nameEn="AlQaisumah International Airport"
                  onClick={() => setIsPassengerMenuOpen(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-light-gray border-t border-[#EDEDED] rounded-b-[20px] shadow-lg">
          <div className="px-4 py-2">
            {/* Navigation Links */}
            {navItems.map((item, index) => (
              <div key={index}>
                {item.href === "/about" ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsMobileAboutMenuOpen((v) => !v)}
                      className={cn(
                        "w-full flex items-center justify-between text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px] py-2 hover:text-brand-purple transition-colors",
                        isRTL && "flex-row-reverse"
                      )}
                      aria-expanded={isMobileAboutMenuOpen}
                    >
                      <span>{language === "ar" ? item.ar : item.en}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isMobileAboutMenuOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isMobileAboutMenuOpen && (
                      <div className="mt-2 bg-brand-light-gray rounded-b-[20px] rounded-t-none border border-[#EDEDED] overflow-hidden">
                        <div className="max-h-[260px] overflow-y-auto divide-y divide-[#EDEDED]">
                          {aboutMenuItems.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sub.href}
                              onClick={handleMobileNavClick}
                              className={cn(
                                "block px-5 py-3 text-brand-gray text-xs font-medium leading-[21px] hover:bg-white transition-colors",
                                isRTL && "text-right"
                              )}
                            >
                              {language === "ar" ? sub.ar : sub.en}
                            </Link>
                          ))}
                        </div>
                        {/* Submenu footer (separate) + logo on right side */}
                        <div className="border-t border-[#EDEDED] px-4 py-3">
                          <div className={cn("flex", isRTL ? "justify-start" : "justify-end")}>
                            <img
                              src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=48"
                              alt=""
                              className="w-5 h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    onClick={handleMobileNavClick}
                    className="block text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px] py-2 hover:text-brand-purple transition-colors"
                  >
                    {language === "ar" ? item.ar : item.en}
                  </Link>
                ) : (
                  <MobileMenuItem href={item.href} onClick={handleMobileNavClick}>
                    {language === "ar" ? item.ar : item.en}
                  </MobileMenuItem>
                )}
                {index < navItems.length - 1 && <div className="h-px bg-[#EDEDED] my-2"></div>}
              </div>
            ))}

            {/* Additional Links */}
            <div className="h-px bg-[#EDEDED] my-2"></div>

            {/* Search */}
            <div className="h-px bg-[#EDEDED] my-2"></div>
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen((v) => !v)}
              className={`w-full flex items-center gap-3 text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px] py-2 hover:text-brand-purple transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Search className="w-4 h-4 flex-shrink-0" />
              <span>{language === "ar" ? "بحث" : "Search"}</span>
            </button>

            {isMobileSearchOpen && (
              <div className="mt-2 bg-brand-light-gray rounded-b-[20px] rounded-t-none border border-[#EDEDED] overflow-hidden">
                <div className="p-4 border-b border-[#EDEDED]">
                  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 border border-[#EDEDED]">
                    <Search className="w-4 h-4 text-brand-gray flex-shrink-0" />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={language === "ar" ? "ابحث..." : "Search..."}
                      className={cn(
                        "w-full bg-transparent text-xs text-brand-gray placeholder:text-brand-gray/60 outline-none",
                        isRTL && "text-right"
                      )}
                    />
                  </div>
                </div>

                <div className="max-h-[220px] overflow-auto divide-y divide-[#EDEDED]">
                  {visibleSearchItems.length > 0 ? (
                    visibleSearchItems.map((item, idx) => (
                      <button
                        key={`m-${item.href}-${idx}`}
                        type="button"
                        onClick={() => {
                          handleMobileNavClick();
                          handleSearchSelect(item.href);
                        }}
                        className={cn(
                          "w-full text-left px-5 py-3 text-brand-gray text-xs font-medium hover:bg-white transition-colors",
                          isRTL && "text-right"
                        )}
                      >
                        {language === "ar" ? item.ar : item.en}
                      </button>
                    ))
                  ) : (
                    <div className={cn("px-5 py-4 text-xs text-brand-gray/70", isRTL && "text-right")}>
                      {language === "ar" ? "لا توجد نتائج" : "No results"}
                    </div>
                  )}
                </div>

                <div className="border-t border-[#EDEDED] px-4 py-3">
                  <div className={cn("flex", isRTL ? "justify-start" : "justify-end")}>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=48"
                      alt=""
                      className="w-5 h-auto"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Language Switcher */}
            <div className="h-px bg-[#EDEDED] my-2"></div>
            <div className={`flex items-center justify-between gap-2 py-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <span className="text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px]">
                {language === "ar" ? "اللغة" : "Language"}
              </span>
              <div className="flex items-center bg-[#E5E5E5] rounded-full p-0.5">
                <button
                  onClick={() => setLanguage("ar")}
                  className={`px-3 py-1.5 text-[11px] font-medium leading-[11px] tracking-[-0.88px] rounded-full transition-colors ${
                    language === "ar"
                      ? "text-brand-purple bg-white z-10"
                      : "text-white bg-[#9F9F9F]"
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 text-[11px] font-medium leading-[11px] tracking-[-0.88px] rounded-full transition-colors ${
                    language === "en"
                      ? "text-brand-purple bg-white border border-[#EDEDED] z-10"
                      : "text-white bg-[#9F9F9F]"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Passenger Selector */}
            <div className="h-px bg-[#EDEDED] my-2"></div>
            <div ref={mobilePassengerMenuRef}>
              <button
                onClick={() => setIsMobilePassengerMenuOpen(!isMobilePassengerMenuOpen)}
                className={cn(
                  "w-full flex items-center justify-between gap-2 rounded-full px-4 py-2.5 min-h-[40px]",
                  isRTL 
                    ? "bg-gradient-to-l from-brand-dark-purple to-brand-purple flex-row-reverse"
                    : "bg-gradient-to-r from-brand-dark-purple to-brand-purple"
                )}
              >
                <span className="text-white text-sm font-medium leading-[21px]" style={{ letterSpacing: '-1.785%' }}>
                  {language === "ar" ? "الركاب" : "Passengers"}
                </span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform flex-shrink-0 ${isMobilePassengerMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobilePassengerMenuOpen && (
                <div className="mt-2 space-y-1">
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار الملك فهد الدولي"
                    nameEn="King Fahd International Airport"
                    onClick={() => setIsMobilePassengerMenuOpen(false)}
                  />
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار الأحساء الدولي"
                    nameEn="AlAhsa International Airport"
                    onClick={() => setIsMobilePassengerMenuOpen(false)}
                  />
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار القيصومة الدولي"
                    nameEn="AlQaisumah International Airport"
                    onClick={() => setIsMobilePassengerMenuOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={`flex ${isRTL ? "justify-start" : "justify-end"} p-4`}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=32"
              alt="Dammam Airports Icon"
              className="h-auto w-auto max-h-4 max-w-4"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Smooth scroll to section
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-brand-gray text-xs font-medium tracking-tight hover:text-brand-purple transition-colors"
    >
      {children}
    </a>
  );
}

interface MobileMenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function MobileMenuItem({ href, children, onClick }: MobileMenuItemProps) {
  const handleClick = () => {
    // Smooth scroll to section
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px] py-2 hover:text-brand-purple transition-colors"
    >
      {children}
    </a>
  );
}

interface AirportOptionProps {
  icon: React.ReactNode;
  nameAr: string;
  nameEn: string;
  onClick?: () => void;
}

function AirportOption({ icon, nameAr, nameEn, onClick }: AirportOptionProps) {
  const { isRTL } = useLanguage();
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-[18px] py-4 bg-brand-purple hover:bg-brand-purple/90 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
        <div className="text-white text-sm font-medium leading-6 tracking-[-0.25px]">
          {nameAr}
        </div>
        <div className="text-white text-sm font-medium leading-6 tracking-[-0.25px]">
          {nameEn}
        </div>
      </div>
    </button>
  );
}

function AirplaneIcon() {
  return (
    <svg
      className="w-5 h-6 flex-shrink-0"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9183 15.9125L7.89194 24.1652H6.46226L8.67872 15.6213C8.71019 15.4965 8.69671 15.3613 8.64276 15.2469C8.58431 15.1273 8.4944 15.0441 8.382 15.0077C8.29658 14.9817 6.24194 14.3525 4.44359 14.1237C4.29522 14.1081 4.14688 14.1809 4.05696 14.3265L1.9619 17.6754H0.999761L2.362 12.7196C2.38448 12.626 2.38448 12.522 2.362 12.4232L0.999761 7.46743H1.9619L4.05696 10.8164C4.14688 10.962 4.29522 11.0347 4.44359 11.0191C6.24194 10.7955 8.29658 10.1611 8.382 10.1351C8.4944 10.0987 8.58431 10.0155 8.64276 9.90111C8.69671 9.7867 8.71019 9.64631 8.67872 9.5215L6.46226 0.977623H7.89194L12.9183 9.23032C12.9903 9.35512 13.1117 9.42792 13.242 9.43832C17.5311 9.66193 21.1548 11.0972 21.1548 12.574C21.1548 14.0457 17.5311 15.4861 13.242 15.7097C13.1117 15.7149 12.9903 15.7877 12.9183 15.9125ZM22 12.574C22 10.0987 17.6255 8.72587 13.4893 8.47106L8.45844 0.208008C8.37752 0.0780029 8.24713 0 8.11225 0H5.89579C5.76092 0 5.635 0.0727921 5.55408 0.197598C5.47765 0.322401 5.4507 0.478397 5.49116 0.629202L7.7391 9.3135C7.0917 9.4955 5.79237 9.84391 4.59646 10.0155L2.51936 6.69259C2.44293 6.56778 2.31257 6.48981 2.17769 6.48981H0.419774C0.284898 6.48981 0.159013 6.56258 0.0825834 6.69259C0.00165753 6.81739 -0.0207955 6.97862 0.0196674 7.12942L1.51231 12.574L0.0196674 18.0186C-0.0207955 18.1642 0.00165753 18.3254 0.0825834 18.4554C0.159013 18.5802 0.284898 18.653 0.419774 18.653H2.17769C2.31257 18.653 2.44293 18.5802 2.51936 18.4502L4.59646 15.1325C5.79237 15.3041 7.0917 15.6473 7.7391 15.8293L5.49116 24.5136C5.4507 24.6644 5.47765 24.8256 5.55408 24.9452C5.635 25.07 5.76092 25.1429 5.89579 25.1429H8.11225C8.24713 25.1429 8.37752 25.0649 8.45844 24.9348L13.4893 16.6717C17.6255 16.4221 22 15.0441 22 12.574Z"
        fill="white"
      />
    </svg>
  );
}
