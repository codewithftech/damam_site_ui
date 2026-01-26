export default function KFIAMap() {
  return (
    <div className="relative w-full h-[300px] lg:h-[481px] rounded-[20px] overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b4158e25523e76a691a6e7cd169f34117c151d01?width=2400"
        alt="Airport Location Map"
        className="w-full h-full object-cover"
      />

      {/* Location Pin */}
      <svg
        className="absolute"
        style={{
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
        width="23"
        height="36"
        viewBox="0 0 23 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_727_8579)">
          <path
            d="M11.4991 35.1658C16.439 35.1658 20.4436 33.1019 20.4436 30.556C20.4436 28.0101 16.439 25.9463 11.4991 25.9463C6.55925 25.9463 2.55469 28.0101 2.55469 30.556C2.55469 33.1019 6.55925 35.1658 11.4991 35.1658Z"
            fill="url(#paint0_radial_727_8579)"
          />
          <path
            d="M23 11.8537C23 16.7444 17.25 23.7073 12.5648 30.2927C11.943 31.1707 11.057 31.1707 10.4352 30.2927C5.75 23.7073 0 16.8761 0 11.8537C0 5.30341 5.14519 0 11.5 0C17.8548 0 23 5.30341 23 11.8537Z"
            fill="#60498C"
          />
          <path
            opacity="0.25"
            d="M11.5 0C5.14519 0 0 5.30341 0 11.8537C0 16.8761 5.75 23.7073 10.4352 30.2927C11.0741 31.1883 11.943 31.1707 12.5648 30.2927C17.25 23.7073 23 16.7444 23 11.8537C23 5.30341 17.8548 0 11.5 0ZM11.5 0.878049C17.3948 0.878049 22.1481 5.77756 22.1481 11.8537C22.1481 13.961 20.8704 16.841 18.9281 19.9668C16.9944 23.0927 14.2344 26.4644 11.8748 29.7746C11.7044 30.0117 11.5937 30.1346 11.5 30.24C11.4063 30.1346 11.2956 30.0117 11.1252 29.7746C8.75704 26.4556 6.31222 23.1015 4.2763 19.9932C2.23185 16.8849 0.851852 14.0049 0.851852 11.8537C0.851852 5.77756 5.60519 0.878049 11.5 0.878049Z"
            fill="#60498C"
          />
          <path
            d="M11.4996 16.683C14.0872 16.683 16.1848 14.5208 16.1848 11.8537C16.1848 9.18655 14.0872 7.02441 11.4996 7.02441C8.91208 7.02441 6.81445 9.18655 6.81445 11.8537C6.81445 14.5208 8.91208 16.683 11.4996 16.683Z"
            fill="white"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_727_8579"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.4991 30.556) scale(8.94444 4.60976)"
          >
            <stop offset="0.1" stopOpacity="0.4" />
            <stop offset="1" stopOpacity="0.05" />
          </radialGradient>
          <clipPath id="clip0_727_8579">
            <rect width="23" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* View Google Maps Button */}
      <button className="absolute bottom-6 right-6 lg:bottom-[30px] lg:right-[30px] inline-flex items-center gap-2 px-4 lg:px-[18px] py-2 lg:py-3 rounded-[10px] bg-brand-purple text-white hover:bg-brand-purple/90 transition-colors">
        <span className="text-[14px] lg:text-[16px] font-medium leading-[28px] tracking-tight">
          View Google Maps
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 18L15 12L9 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

