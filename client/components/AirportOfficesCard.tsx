// Reusable Airport Offices Card Component

// Location Icon SVG Component
function LocationIcon({
  className = "w-[41px] h-[41px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4563 35.5675C21.1775 35.7677 20.8429 35.8754 20.4996 35.8754C20.1564 35.8754 19.8218 35.7677 19.543 35.5675C11.2934 29.6874 2.53821 17.5924 11.3891 8.85258C13.8189 6.46237 17.0912 5.1235 20.4996 5.125C23.9163 5.125 27.1946 6.46604 29.6102 8.85088C38.461 17.5907 29.7058 29.684 21.4563 35.5675Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4167 20.8333C21.3228 20.8333 22.1919 20.4734 22.8326 19.8326C23.4734 19.1919 23.8333 18.3228 23.8333 17.4167C23.8333 16.5105 23.4734 15.6415 22.8326 15.0007C22.1919 14.36 21.3228 14 20.4167 14C19.5105 14 18.6415 14.36 18.0007 15.0007C17.36 15.6415 17 16.5105 17 17.4167C17 18.3228 17.36 19.1919 18.0007 19.8326C18.6415 20.4734 19.5105 20.8333 20.4167 20.8333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Email Icon SVG Component
function EmailIcon({
  className = "w-[45px] h-[39px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 45 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.394 14.4231L23.8926 24.8123C23.5374 25.1076 23.0905 25.2693 22.6292 25.2693C22.1679 25.2693 21.721 25.1076 21.3658 24.8123L8.87032 14.4231C8.80327 14.6256 8.76917 14.8377 8.76933 15.0511V30.9488C8.76933 31.4758 8.97796 31.9813 9.34933 32.3539C9.7207 32.7266 10.2244 32.936 10.7496 32.936H34.5127C35.0379 32.936 35.5416 32.7266 35.913 32.3539C36.2844 31.9813 36.493 31.4758 36.493 30.9488V15.0511C36.4938 14.8378 36.4604 14.6258 36.394 14.4231ZM10.7496 11.0767H34.5127C35.5631 11.0767 36.5705 11.4954 37.3133 12.2407C38.056 12.9861 38.4733 13.997 38.4733 15.0511V30.9488C38.4733 32.0029 38.056 33.0138 37.3133 33.7591C36.5705 34.5045 35.5631 34.9232 34.5127 34.9232H10.7496C9.69919 34.9232 8.69182 34.5045 7.94907 33.7591C7.20633 33.0138 6.78906 32.0029 6.78906 30.9488V15.0511C6.78906 13.997 7.20633 12.9861 7.94907 12.2407C8.69182 11.4954 9.69919 11.0767 10.7496 11.0767ZM10.3337 13.0639L21.3757 22.211C21.7293 22.5041 22.1734 22.665 22.6321 22.6661C23.0908 22.6671 23.5356 22.5084 23.8906 22.217L35.0435 13.0639H10.3337Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Phone Icon SVG Component
function PhoneIcon({
  className = "w-[30px] h-[38px]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4219 27.708C14.1069 27.708 13.8049 27.8331 13.5822 28.0558C13.3595 28.2785 13.2344 28.5806 13.2344 28.8955C13.2344 29.2105 13.3595 29.5125 13.5822 29.7352C13.8049 29.9579 14.1069 30.083 14.4219 30.083H17.5885C17.9035 30.083 18.2055 29.9579 18.4282 29.7352C18.6509 29.5125 18.776 29.2105 18.776 28.8955C18.776 28.5806 18.6509 28.2785 18.4282 28.0558C18.2055 27.8331 17.9035 27.708 17.5885 27.708H14.4219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.67187 3.16699C8.72704 3.16699 7.82091 3.54233 7.15281 4.21042C6.48471 4.87852 6.10938 5.78466 6.10938 6.72949V31.2712C6.10938 32.216 6.48471 33.1221 7.15281 33.7902C7.82091 34.4583 8.72704 34.8337 9.67187 34.8337H22.3385C23.2834 34.8337 24.1895 34.4583 24.8576 33.7902C25.5257 33.1221 25.901 32.216 25.901 31.2712V6.72949C25.901 5.78466 25.5257 4.87852 24.8576 4.21042C24.1895 3.54233 23.2834 3.16699 22.3385 3.16699H9.67187ZM8.48438 6.72949C8.48438 6.41455 8.60949 6.1125 8.83219 5.8898C9.05488 5.6671 9.35693 5.54199 9.67187 5.54199H22.3385C22.6535 5.54199 22.9555 5.6671 23.1782 5.8898C23.4009 6.1125 23.526 6.41455 23.526 6.72949V31.2712C23.526 31.5861 23.4009 31.8881 23.1782 32.1108C22.9555 32.3335 22.6535 32.4587 22.3385 32.4587H9.67187C9.35693 32.4587 9.05488 32.3335 8.83219 32.1108C8.60949 31.8881 8.48438 31.5861 8.48438 31.2712V6.72949Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AirportOfficesCard() {
  return (
    <div className="max-w-[1200px] rounded-[20px] overflow-hidden">
      {/* Airport Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* KFIA */}
        <div className="bg-[#F0EDF5] rounded-t-[20px] lg:rounded-tr-none">
          <div className="px-5 py-5 lg:py-[20px]">
            <h3 className="text-[20px] font-bold leading-[29px] tracking-[-0.4px] text-brand-purple">
              King Fahd International Airport (DMM)
            </h3>
          </div>
        </div>

        {/* Al Ahsa */}
        <div className="bg-brand-purple rounded-t-[20px] lg:rounded-none">
          <div className="px-5 py-5 lg:py-[20px]">
            <h3 className="text-[20px] font-medium leading-[29px] tracking-[-0.4px] text-white">
              Al Ahsa International Airport (HOF)
            </h3>
          </div>
        </div>

        {/* Al Qaisumah */}
        <div className="bg-brand-purple rounded-t-[20px] lg:rounded-tl-none">
          <div className="px-5 py-5 lg:py-[20px]">
            <h3 className="text-[20px] font-medium leading-[29px] tracking-[-0.4px] text-white">
              Al Qaisumah International Airport (AQI)
            </h3>
          </div>
        </div>
      </div>

      {/* Airport Details */}
      <div className="bg-[#F0EDF5] rounded-b-[20px] p-6 lg:p-9">
        <div className="mb-6 lg:mb-12">
          <h4 className="text-[16px] font-bold leading-6 tracking-[-0.32px] text-brand-purple mb-4">
            Procurement, Operations & Customer Service Offices
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex items-start gap-3">
            <LocationIcon className="w-[41px] h-[41px] text-brand-gray flex-shrink-0" />
            <div>
              <h5 className="text-[20px] font-bold leading-[29px] tracking-[-0.4px] text-[#454545] mb-2">
                Address
              </h5>
              <p className="text-[16px] font-medium leading-[29px] tracking-[-0.32px] text-brand-gray">
                Dammam, Eastern Province
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PhoneIcon className="w-[30px] h-[38px] text-brand-gray flex-shrink-0" />
            <div>
              <h5 className="text-[20px] font-bold leading-[29px] tracking-[-0.4px] text-[#454545] mb-2">
                Phone
              </h5>
              <p className="text-[16px] font-medium leading-[29px] tracking-[-0.32px] text-brand-gray">
                +966 (13) XXX XXXX
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <EmailIcon className="w-[45px] h-[39px] text-brand-gray flex-shrink-0" />
            <div>
              <h5 className="text-[20px] font-bold leading-[29px] tracking-[-0.4px] text-[#454545] mb-2">
                Email
              </h5>
              <p className="text-[16px] font-medium leading-[29px] tracking-[-0.32px] text-brand-gray">
                dmm@daco.com.sa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
