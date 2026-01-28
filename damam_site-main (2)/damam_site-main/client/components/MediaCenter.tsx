import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function MediaCenter() {
  return (
    <section id="media" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-[120px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <p className="text-brand-gray text-base font-medium mb-2">
              <span className="font-medium">recent </span>
              <span className="font-bold text-brand-purple">NEWS on Dammam Airports</span>
            </p>
            <h2 className="text-[48px] font-medium leading-[60px] tracking-tight">
              <span className="text-brand-purple font-extrabold">MEDIA </span>
              <span className="text-brand-gray">CENTER</span>
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-brand-gray text-lg font-medium">Follow us on:</span>
            <div className="flex items-center gap-3">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<XIcon />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <NewsCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/cab29eb01bb491876d50063e909a9d32f7aee498?width=757"
            date="31 August 2024"
            title="Carbon Policy"
            description="In line with recent environmental actions of the Kingdom of Saudi Arabia (KSA) Saudi Arabia has announced that it will reach net-zero carbon emissions by 2060."
          />
          <NewsCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/2eb322cf81ee4435ac46d9cced6b71b50838f472?width=757"
            date="28 August 2024"
            title="Carbon Policy"
            description="In line with recent environmental actions of the Kingdom of Saudi Arabia (KSA) Saudi Arabia has announced that it will reach net-zero carbon emissions by 2060."
          />
          <NewsCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/0e9c2769348cafd6e604a6d129b19f3959552051?width=757"
            date="17 August 2024"
            title="Carbon Policy"
            description="In line with recent environmental actions of the Kingdom of Saudi Arabia (KSA) Saudi Arabia has announced that it will reach net-zero carbon emissions by 2060."
          />
        </div>
      </div>
    </section>
  );
}

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

function NewsCard({ image, date, title, description }: NewsCardProps) {
  return (
    <div className="flex flex-col gap-6 group hover:scale-[1.02] transition-transform">
      <img
        src={image}
        alt={title}
        className="w-full h-[252px] object-cover rounded-[20px]"
      />
      <div className="space-y-2">
        <div className="text-brand-gray text-sm font-medium">{date}</div>
        <h3 className="text-brand-gray text-[28px] font-bold leading-[140%]">
          {title}
        </h3>
        <p className="text-brand-gray text-base font-medium leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="text-brand-gray hover:text-brand-purple transition-colors">
      {icon}
    </button>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1761 4.24316H19.9362L13.9061 11.0206L21 20.2432H15.4456L11.0951 14.6498L6.11723 20.2432H3.35544L9.80517 12.994L3 4.24316H8.69545L12.6279 9.35578L17.1761 4.24316ZM16.2073 18.6186H17.7368L7.86441 5.78244H6.2232L16.2073 18.6186Z" />
    </svg>
  );
}
