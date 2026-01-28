import Header from "../components/Header";
import Footer from "../components/Footer";

function GraduationCapIcon() {
  return (
    <svg
      width="165"
      height="132"
      viewBox="0 0 165 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M144.274 57.8306V80.1949L148.965 84.8972L139.183 95.1045L129.287 85.1839L136.094 78.9907V61.3286C107.264 73.2563 97.9966 76.9837 91.647 79.8509C85.2402 82.7181 80.6639 82.7181 74.3143 80.3096C67.9647 77.9012 37.7611 66.8337 22.7737 59.6656C12.7059 54.906 12.0767 51.8667 22.8882 47.7953C37.0175 42.4622 60.3566 33.8032 72.7126 29.1009C80.0347 26.119 83.9245 24.5134 90.6173 27.8967C102.63 32.8857 130.031 43.2077 143.702 48.8275C155.601 54.0458 147.592 55.7662 144.274 57.8306ZM92.9627 88.7393C99.9416 85.8721 109.323 81.1125 119.562 76.6969V91.8932C119.562 91.8932 106.348 106 83.0092 106C57.8968 106 44.3395 91.8932 44.3395 91.8932V79.048C52.2337 82.3167 61.1574 85.0692 71.9117 88.7393C78.5474 91.0904 86.9563 91.9506 92.9627 88.7393Z"
        fill="#60498C"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="114"
      height="100"
      viewBox="0 0 114 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4727 38.9558V73.3125L23.9564 73.4924C24.7207 73.5823 26.2044 73.6723 27.1936 73.6723C29.3967 73.6723 35.8262 74.3468 39.3781 74.9314C43.1998 75.561 47.9208 76.7752 51.5177 78.0343C53.2712 78.6639 54.71 79.1585 54.7999 79.1585C54.8448 79.1585 54.8898 65.3529 54.8898 48.4893C54.8898 24.2058 54.7999 17.8202 54.5751 17.6852C54.3952 17.5953 47.8758 14.9421 40.0975 11.7493C32.2742 8.64638 25.1703 5.72336 24.2262 5.31863L22.4727 4.59912V38.9558Z"
        fill="#60498C"
      />
      <path
        d="M75.9944 11.1647L59.863 17.7752L59.7726 48.4444C59.7274 65.3529 59.7726 79.1585 59.8178 79.1585C59.9082 79.1585 60.9475 78.7538 62.1223 78.3491C68.855 75.7409 76.8982 74.2569 87.2006 73.6273C89.8666 73.4474 92.0807 73.3125 92.1259 73.2675C92.171 73.2226 92.171 57.7081 92.171 38.8659L92.0807 4.59912L75.9944 11.1647Z"
        fill="#60498C"
      />
      <path
        d="M3.03793 52.9845C3.08324 75.9248 3.21915 86.8726 3.40036 86.8271C3.58158 86.7817 6.61693 86.6454 10.2412 86.4637C23.0622 85.8278 34.8864 87.0997 42.8146 89.8707C44.1284 90.325 46.6654 91.4152 48.4323 92.2783C52.7814 94.5042 55.1372 95.3673 56.4963 95.3673C57.9007 95.3673 60.2112 94.5042 64.4698 92.3692C73.1228 88.0082 82.2288 86.3274 96.9072 86.3729C101.12 86.4183 105.787 86.5091 107.282 86.6454L110 86.8726V52.9845C110 25.9558 109.909 19.0964 109.683 19.2327C109.502 19.2781 107.463 19.9141 105.243 20.5955L101.12 21.822V51.0766C101.12 82.7842 101.166 81.5122 99.6254 82.3299C99.2177 82.5571 96.6807 82.7388 92.0597 82.875C88.2542 82.9659 83.9051 83.193 82.4553 83.3747C73.4399 84.4195 66.1007 86.6 59.3504 90.1433L56.6775 91.5515L52.6455 89.5527C43.3582 84.9647 35.2036 83.2384 20.8423 82.875L13.639 82.6933L12.8688 81.9211L12.0987 81.1488L12.0081 51.44L11.9628 21.7311L7.84013 20.55C5.57494 19.8686 3.58158 19.2781 3.40036 19.1872C3.03793 19.1418 2.99263 25.9103 3.03793 52.9845Z"
        fill="#60498C"
      />
    </svg>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4 lg:gap-[30px] mb-6 lg:mb-[32px] last:mb-0">
      {/* Number Box */}
      <div className="flex-shrink-0 w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] flex items-center justify-center">
        <span className="text-brand-purple text-[48px] lg:text-[64px] font-bold leading-[56px]">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 rounded-[20px] border border-[#EDEDED] bg-[#F6F6F6] p-4 lg:p-[18px_30px_36px_30px] min-h-[80px] lg:min-h-[110px] flex flex-col justify-center">
        <h3 className="text-brand-purple text-[18px] lg:text-[20px] font-bold leading-normal tracking-[-0.4px] mb-2 lg:mb-3">
          {title}
        </h3>
        <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[1.3] lg:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function InternshipGraduatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-[100px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
          {/* Page Title */}
          <h1 className="text-[36px] lg:text-[48px] font-medium leading-[1.25] lg:leading-[60px] tracking-[-0.96px] mb-8 lg:mb-[64px]">
            <span className="font-extrabold text-brand-purple">
              Internship{" "}
            </span>
            <span className="text-brand-gray">& Graduate </span>
            <span className="text-[#858585]">Programs</span>
          </h1>

          {/* Program Overview Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[30px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">Program </span>
              <span className="font-medium text-brand-gray">Overview</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-[14px] lg:text-[16px] leading-[24px] mb-8 lg:mb-[72px] max-w-[1180px]">
            <span className="text-brand-purple font-bold">
              Dammam Airports Company (DACO){" "}
            </span>
            <span className="text-brand-gray font-medium">
              is committed to developing the next generation of aviation and
              business leaders through structured internship and graduate
              programs. These initiatives are designed to provide students and
              fresh graduates with{" "}
            </span>
            <span className="text-brand-purple font-bold">
              valuable hands-on experience, professional mentoring, and exposure
              to the fast-paced airport and aviation industry.
            </span>
          </p>

          {/* Our programs include */}
          <h3 className="text-[20px] lg:text-[24px] font-extrabold text-brand-purple leading-[24px] tracking-[-0.48px] mb-6 lg:mb-[72px]">
            Our programs include:
          </h3>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-12 lg:mb-[136px]">
            {/* Internships Card */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F0EDF5] p-6 lg:p-[30px] min-h-[350px] lg:min-h-[392px] flex flex-col">
              <div className="flex justify-center mb-6 lg:mb-[40px] mt-2 lg:mt-[10px]">
                <div className="flex items-center justify-center w-[160px] h-[100px] lg:w-[200px] lg:h-[120px]">
                  <GraduationCapIcon />
                </div>
              </div>
              <h4 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-[60px] tracking-[-0.48px] text-center mb-2 lg:mb-[20px]">
                Internships
              </h4>
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] text-left">
                Short-term placements for undergraduate students to gain
                practical knowledge while completing their academic
                requirements.
              </p>
            </div>

            {/* Graduate Programs Card */}
            <div className="rounded-[20px] border border-[#EDEDED] bg-[#F0EDF5] p-6 lg:p-[30px] min-h-[350px] lg:min-h-[392px] flex flex-col">
              <div className="flex justify-center mb-6 lg:mb-[40px] mt-2 lg:mt-[10px]">
                <div className="flex items-center justify-center w-[160px] h-[100px] lg:w-[200px] lg:h-[120px]">
                  <BookIcon />
                </div>
              </div>
              <h4 className="text-brand-purple text-[20px] lg:text-[24px] font-extrabold leading-[60px] tracking-[-0.48px] text-center mb-2 lg:mb-[20px]">
                Graduate Programs
              </h4>
              <p className="text-brand-gray text-[14px] lg:text-[16px] font-medium leading-[24px] text-left">
                Structured entry-level programs that provide comprehensive
                training, rotational assignments across departments, and
                opportunities to work on real projects that shape the future of
                Saudi aviation.
              </p>
            </div>
          </div>

          {/* How to Apply Section */}
          <div className="flex items-center gap-[10px] mb-6 lg:mb-[30px]">
            <div className="w-[4px] h-[34px] bg-brand-purple"></div>
            <h2 className="text-[24px] lg:text-[29px] leading-[24px] tracking-[-0.58px]">
              <span className="font-extrabold text-brand-purple">How to </span>
              <span className="font-medium text-brand-gray">Apply</span>
            </h2>
          </div>

          {/* Application Information */}
          <div className="mb-8 lg:mb-[72px] space-y-2">
            <p className="text-[14px] lg:text-[16px] leading-[24px]">
              <span className="text-brand-gray font-medium">
                Students and graduates interested in our programs can apply
                through{" "}
              </span>
              <span className="text-brand-purple font-extrabold">
                DACO's Careers Portal.
              </span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[24px]">
              <span className="text-brand-purple font-bold">Applications</span>
              <span className="text-brand-gray font-medium">
                {" "}
                must be submitted{" "}
              </span>
              <span className="text-brand-purple font-bold">online</span>
              <span className="text-brand-gray font-medium">
                ; email or paper submissions will not be accepted.
              </span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[24px]">
              <span className="text-brand-purple font-bold">Deadlines </span>
              <span className="text-brand-gray font-medium">
                for applications{" "}
              </span>
              <span className="text-brand-purple font-bold">
                vary by program
              </span>
              <span className="text-brand-gray font-medium">
                , so students are encouraged to check regularly for
              </span>
              <span className="text-brand-purple font-bold"> updates.</span>
            </p>
          </div>

          {/* Application Steps */}
          <div>
            <StepCard
              number="1"
              title="Check Program Availability"
              description="Browse current openings for internships and graduate schemes under the Careers section."
            />
            <StepCard
              number="2"
              title="Create a Candidate Profile"
              description="Register on the careers portal with your personal and academic details."
            />
            <StepCard
              number="3"
              title="Prepare Required Documents"
              description="Upload your updated CV, academic transcripts, proof of enrollment or graduation, and recommendation letters (if available)."
            />
            <StepCard
              number="4"
              title="Submit Online Application"
              description="Complete the application form and submit before the deadline."
            />
            <StepCard
              number="5"
              title="Assessment & Selection"
              description="Shortlisted candidates may be invited for interviews or assessments before final placement."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
