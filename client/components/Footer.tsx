import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-brand-light-gray relative overflow-hidden py-12">
      {/* Desktop-only background image rendered as an <img> (not CSS background) */}
      <img
        src="/Dammam-Airports%20-Master-Logo-RGB%202.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-0 top-[41%] -translate-y-1/2 w-[min(900px,100%)] h-auto object-contain pointer-events-none select-none z-0 opacity-100"
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[373px_1fr] lg:gap-x-12">
          {/* Logo (top-left) */}
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ca5db84aa7b58429b64e1d16ed185c8f9c13fd1c?width=746"
              alt="Dammam Airports"
              className="h-12 sm:h-14 w-auto"
            />
          </div>

          {/* Links */}
          <div>
            {/* Desktop: 5 columns + dividers (matches wide screenshot) */}
            <div
              className={cn(
                "hidden lg:grid lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-[#EDEDED]",
                isRTL && "lg:divide-x-reverse"
              )}
            >
              <div className="px-6">
                <FooterSection title="Information">
                  <FooterLink href="#contact">Contact Us</FooterLink>
                  <FooterLink href="#faq">FAQs</FooterLink>
                  <FooterLink href="#airports">KFIA, AQI, HOF</FooterLink>
                  <FooterLink href="#sitemap">Site map</FooterLink>
                </FooterSection>
              </div>

              <div className="px-6">
                <FooterSection title="Legal">
                  <FooterLink href="#privacy">Privacy Policy</FooterLink>
                  <FooterLink href="#terms">Terms & Conditions</FooterLink>
                  <FooterLink href="#feedback">Feedback</FooterLink>
                </FooterSection>
              </div>

              <div className="px-6">
                <FooterSection title="About Us">
                  <FooterLink href="#about">About</FooterLink>
                  <FooterLink href="#careers">Careers</FooterLink>
                  <FooterLink href="#datasharing">Data Sharing</FooterLink>
                  <FooterLink href="#news">News</FooterLink>
                </FooterSection>
              </div>

              <div className="px-6">
                <FooterSection title="Related Links">
                  <FooterLink href="#">GACA</FooterLink>
                  <FooterLink href="#">
                    Ministry of Transportation & Logistics
                  </FooterLink>
                  <FooterLink href="#">MATARAT</FooterLink>
                  <FooterLink href="#">Saudi Tourism</FooterLink>
                </FooterSection>
              </div>

              <div className="px-6">
                <FooterSection title="Our Airports">
                  <FooterLink href="#kfia">KFIA</FooterLink>
                  <FooterLink href="#hof">HOF</FooterLink>
                  <FooterLink href="#aqi">AQI</FooterLink>
                </FooterSection>
              </div>
            </div>

            {/* Mobile/Tablet: 2 columns + center divider (matches tall screenshot) */}
            <div
              className={cn(
                "lg:hidden flex gap-6 sm:gap-10",
                isRTL && "flex-row-reverse"
              )}
            >
              <div className="flex-1 flex flex-col gap-8">
                <FooterSection title="Information">
                  <FooterLink href="#contact">Contact Us</FooterLink>
                  <FooterLink href="#faq">FAQs</FooterLink>
                  <FooterLink href="#airports">KFIA, AQI, HOF</FooterLink>
                  <FooterLink href="#sitemap">Site map</FooterLink>
                </FooterSection>

                <FooterSection title="About Us">
                  <FooterLink href="#contact">Contact Us</FooterLink>
                  <FooterLink href="#faq">FAQs</FooterLink>
                  <FooterLink href="#airports">KFIA, AQI, HOF</FooterLink>
                  <FooterLink href="#sitemap">Site map</FooterLink>
                </FooterSection>

                <FooterSection title="Our Airports">
                  <FooterLink href="#kfia">KFIA</FooterLink>
                  <FooterLink href="#hof">HOF</FooterLink>
                  <FooterLink href="#aqi">AQI</FooterLink>
                </FooterSection>
              </div>

              <div className="w-px bg-[#EDEDED] self-stretch" />

              <div className="flex-1 flex flex-col gap-8">
                <FooterSection title="Related Links">
                  <FooterLink href="#privacy">Privacy Policy</FooterLink>
                  <FooterLink href="#terms">Terms & Conditions</FooterLink>
                  <FooterLink href="#feedback">Feedback</FooterLink>
                </FooterSection>

                <FooterSection title="Legal">
                  <FooterLink href="#privacy">Privacy Policy</FooterLink>
                  <FooterLink href="#terms">Terms & Conditions</FooterLink>
                  <FooterLink href="#feedback">Feedback</FooterLink>
                </FooterSection>
              </div>
            </div>
          </div>

          {/* Bottom-left: socials + copyright (under logo area like screenshots) */}
          <div className="lg:col-start-1">
            <div className="flex items-center gap-6 lg:gap-10 mt-2">
              <SocialLink icon={<Facebook className="w-6 h-6" />} />
              <SocialLink icon={<Instagram className="w-6 h-6" />} />
              <SocialLink icon={<XIcon />} />
              <SocialLink icon={<Linkedin className="w-6 h-6" />} />
              <SocialLink icon={<Youtube className="w-6 h-6" />} />
            </div>

            <p className="text-brand-gray text-xs font-medium mt-6 lg:mt-8">
              © 2025 Dammam Airports Company. All rights reserved.
            </p>
          </div>

          {/* Desktop spacer (keeps bottom row only under logo) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </footer>
  );
}

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-brand-purple text-sm font-bold leading-[18px] tracking-tight">
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-brand-gray text-xs font-medium leading-[18px] hover:text-brand-purple transition-colors"
    >
      {children}
    </a>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-brand-gray hover:text-brand-purple transition-colors"
    >
      {icon}
    </a>
  );
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.1761 4.24316H19.9362L13.9061 11.0206L21 20.2432H15.4456L11.0951 14.6498L6.11723 20.2432H3.35544L9.80517 12.994L3 4.24316H8.69545L12.6279 9.35578L17.1761 4.24316ZM16.2073 18.6186H17.7368L7.86441 5.78244H6.2232L16.2073 18.6186Z" />
    </svg>
  );
}
