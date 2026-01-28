import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-light-gray py-12">
      <div className="container mx-auto px-6 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo and Copyright */}
          <div className="lg:w-[373px] flex flex-col justify-between">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ca5db84aa7b58429b64e1d16ed185c8f9c13fd1c?width=746"
              alt="Dammam Airports"
              className="h-[102px] w-auto mb-8"
            />
            <p className="text-brand-gray text-xs font-medium leading-[133%]">
              © 2025 Dammam Airports Company. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <SocialLink icon={<Facebook className="w-5 h-5" />} />
              <SocialLink icon={<Instagram className="w-5 h-5" />} />
              <SocialLink icon={<XIcon />} />
              <SocialLink icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Information */}
              <FooterSection title="Information">
                <FooterLink href="#contact">Contact Us</FooterLink>
                <FooterLink href="#faq">FAQs</FooterLink>
                <FooterLink href="#airports">KFIA, AQI, HOF</FooterLink>
                <FooterLink href="#sitemap">Site map</FooterLink>
              </FooterSection>

              {/* Legal */}
              <FooterSection title="Legal">
                <FooterLink href="#privacy">Privacy Policy</FooterLink>
                <FooterLink href="#terms">Terms & Conditions</FooterLink>
                <FooterLink href="#feedback">Feedback</FooterLink>
              </FooterSection>

              {/* About Us */}
              <FooterSection title="About Us">
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#careers">Careers</FooterLink>
                <FooterLink href="#datasharing">Data Sharing</FooterLink>
                <FooterLink href="#news">News</FooterLink>
              </FooterSection>

              {/* Related Links */}
              <FooterSection title="Related Links">
                <FooterLink href="#">GACA</FooterLink>
                <FooterLink href="#">
                  Ministry of Transportation & Logistics
                </FooterLink>
                <FooterLink href="#">MATARAT</FooterLink>
                <FooterLink href="#">Saudi Tourism</FooterLink>
              </FooterSection>

              {/* Our Airports */}
              <FooterSection title="Our Airports">
                <FooterLink href="#kfia">KFIA</FooterLink>
                <FooterLink href="#hof">HOF</FooterLink>
                <FooterLink href="#aqi">AQI</FooterLink>
              </FooterSection>
            </div>
          </div>
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
