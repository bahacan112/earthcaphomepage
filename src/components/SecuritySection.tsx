import Image from "next/image";
import languageData from '../../languages/language.json';

export default function SecuritySection() {
  const { securitySection } = languageData;

  return (
    <section className="bg-[#F8F6F4] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Heading */}
          <div className="md:self-center">
            <h2 className="text-[28px] leading-[1.25] md:text-[42px] md:leading-[1.2] font-semibold text-[#0F2745]">
              {securitySection.title}
            </h2>
          </div>

          {/* Right: Items */}
          <div className="flex flex-col gap-10">
            {securitySection.items.map((it) => (
              <div key={it.title} className="flex flex-col">
                <div className="mb-3">
                  <Image
                    src={it.icon}
                    alt={it.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0F2745]">
                  {it.title}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-[#163454]/90">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}