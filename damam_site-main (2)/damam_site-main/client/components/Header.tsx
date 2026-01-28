import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Awards & Achievements", path: "/awards" },
  { name: "Our Airports", path: "/our-airports" },
  { name: "King Fahd Int'l Airport", path: "/airports/kfia" },
  { name: "Sustainability & CSR", path: "/sustainability" },
  { name: "Aero Opportunities", path: "/aero-opportunities" },
  { name: "Airline Development", path: "/airline-development" },
  { name: "Aero Concessions", path: "/aero-concessions" },
  { name: "Cargo & Logistics", path: "/cargo-logistics" },
  { name: "Investment Guidelines", path: "/investment-guidelines" },
  { name: "Contact Investment Team", path: "/contact-investment-team" },
  { name: "Vendor Profile", path: "/vendor-profile" },
  { name: "Vendor Registration", path: "/vendor-registration" },
  { name: "Procurement Guidelines", path: "/procurement-guidelines" },
  { name: "Contact Procurement", path: "/contact-procurement" },
  { name: "Internship & Graduate", path: "/internship-graduate" },
  { name: "News & Press Releases", path: "/news" },
  { name: "Photo & Video Gallery", path: "/gallery" },
  { name: "Publications & Reports", path: "/publications" },
  { name: "Media Kit", path: "/media-kit" },
  { name: "Media Contact", path: "/media-contact" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Components Library", path: "/components-lib" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPassengerMenuOpen, setIsPassengerMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <header className="bg-brand-light-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between h-[72px] px-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7f7a8e258400340b4645d5a310f1ed9f6315a0ca?width=314"
              alt="Dammam Airports"
              className="h-[31px] w-[157px]"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-[5px]"
            aria-label="Menu"
          >
            <div className="w-[29px] h-[3px] bg-brand-purple"></div>
            <div className="w-[29px] h-[3px] bg-brand-purple"></div>
            <div className="w-[29px] h-[3px] bg-brand-purple"></div>
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-[77px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/41f2ee109141869fbe105b3c1a98b0e39321d67c?width=384"
              alt="Dammam Airports"
              className="h-[29px] w-[192px]"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center justify-center flex-1 px-12">
            <div className="flex items-center gap-8 px-10 py-2 rounded-[43px]">
              <Link
                to="/about"
                className="text-brand-gray text-xs font-medium hover:text-brand-purple transition-colors whitespace-nowrap leading-[21px] tracking-[-0.25px]"
              >
                About Us
              </Link>
              <Link
                to="/our-airports"
                className="text-brand-gray text-xs font-medium hover:text-brand-purple transition-colors whitespace-nowrap leading-[21px] tracking-[-0.25px]"
              >
                Our Airports
              </Link>

              {/* Pages Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                  className="flex items-center gap-2 text-brand-gray text-xs font-medium hover:text-brand-purple transition-colors leading-[21px] tracking-[-0.25px]"
                >
                  All Pages
                  <svg
                    className={`w-3 h-3 transition-transform ${isPagesDropdownOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Pages Dropdown Menu */}
                {isPagesDropdownOpen && (
                  <div className="absolute left-0 top-[calc(100%+8px)] w-[280px] bg-white rounded-[10px] shadow-lg overflow-hidden z-50 max-h-[500px] overflow-y-auto">
                    {pages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => setIsPagesDropdownOpen(false)}
                        className="block px-4 py-3 text-brand-gray text-xs font-medium hover:bg-brand-light-gray hover:text-brand-purple transition-colors leading-[21px] tracking-[-0.25px] border-b border-[#F0F0F0] last:border-b-0"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Right Side - Search, Language & Passenger Selector */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="text-brand-gray hover:text-brand-purple transition-colors">
              <Search className="w-[18px] h-[18px]" />
            </button>

            {/* Language Switcher */}
            <div className="relative flex items-center bg-[#E5E5E5] rounded-full p-0.5">
              <button className="px-3 py-1.5 text-[11px] font-medium text-brand-purple leading-[11px] tracking-[-0.88px] z-10">
                العربية
              </button>
              <button className="px-3 py-1.5 text-[11px] font-medium text-white bg-[#9F9F9F] rounded-full border border-[#EDEDED] leading-[11px] tracking-[-0.88px]">
                English
              </button>
            </div>

            {/* Passenger Selector */}
            <div className="relative">
              <button
                onClick={() => setIsPassengerMenuOpen(!isPassengerMenuOpen)}
                className="flex items-center bg-gradient-to-l from-brand-purple to-brand-dark-purple rounded-full px-4 py-1.5 gap-2 h-[24px]"
              >
                <span className="text-white text-sm font-medium leading-[21px] tracking-[-0.25px]">
                  Passengers
                </span>
                <svg
                  className={`w-3 h-3 text-white transition-transform ${isPassengerMenuOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Passenger Dropdown */}
              {isPassengerMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] w-[306px] bg-white rounded-[5px] shadow-lg overflow-hidden">
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار الملك فهد الدولي"
                    nameEn="King Fahd International Airport"
                  />
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار الأحساء الدولي"
                    nameEn="AlAhsa International Airport"
                  />
                  <AirportOption
                    icon={<AirplaneIcon />}
                    nameAr="مطار القيصومة الدولي"
                    nameEn="AlQaisumah International Airport"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-light-gray border-t border-[#EDEDED] rounded-b-[20px] shadow-lg max-h-[500px] overflow-y-auto">
          <div className="px-4 py-2">
            {pages.map((page, index) => (
              <div key={page.path}>
                <Link
                  to={page.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-brand-gray text-xs font-medium leading-[21px] tracking-[-0.25px] py-2 hover:text-brand-purple transition-colors"
                >
                  {page.name}
                </Link>
                {index < pages.length - 1 && (
                  <div className="h-px bg-[#EDEDED] my-2"></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end p-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7c1eacc18791db74219590313bb7e2f4879c5be?width=32"
              alt="Dammam Airports Icon"
              className="w-4 h-[15px]"
            />
          </div>
        </div>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-brand-gray text-xs font-medium hover:text-brand-purple transition-colors whitespace-nowrap leading-[21px] tracking-[-0.25px]"
    >
      {children}
    </a>
  );
}

interface MobileMenuItemProps {
  href: string;
  children: React.ReactNode;
}

function MobileMenuItem({ href, children }: MobileMenuItemProps) {
  return (
    <a
      href={href}
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
}

function AirportOption({ icon, nameAr, nameEn }: AirportOptionProps) {
  return (
    <button className="w-full flex items-center gap-4 px-[18px] py-4 bg-brand-purple hover:bg-brand-purple/90 transition-colors">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 text-left">
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
      width="22"
      height="26"
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
