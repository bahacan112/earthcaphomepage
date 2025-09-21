import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import languageData from '../../languages/language.json';

export default function InvestmentSection() {
  const { investmentSection } = languageData;
  return (
    <section className="bg-[#F8F6F4] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`rounded-3xl border-2 ${investmentSection.borderColor} ${investmentSection.bgColor} p-6 sm:p-8 lg:p-10`}>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {investmentSection.badges.map((badge, index) => (
                  <span key={index} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${investmentSection.badgeColor}`}>
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                {investmentSection.title}
              </h3>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-slate-700">
                {investmentSection.description}
              </p>

              <div className="mt-6">
                {/* Boş buton kaldırıldı */}
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className={`rounded-2xl border-4 ${investmentSection.borderColor} overflow-hidden`}>
                <Image
                  src={investmentSection.image}
                  alt={investmentSection.imageAlt}
                  width={576}
                  height={576}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}