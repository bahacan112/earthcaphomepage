import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import languageData from '../../languages/language.json';

export default function TermDepositsSection() {
  const { termDepositsSection } = languageData;
  return (
    <section className="bg-[#F8F6F4] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border-2 border-blue-300 bg-blue-50 p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {termDepositsSection.badges.map((badge, index) => (
                  <span key={index} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                {termDepositsSection.title}
              </h3>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-slate-700">
                {termDepositsSection.description}
              </p>

              <div className="mt-6">
                <Button asChild className="rounded-lg bg-blue-600 px-6 py-3 text-[16px] font-medium text-white hover:bg-blue-700">
                  <Link href="https://www.raisin.com/en-ie/savings-accounts/">{termDepositsSection.button}</Link>
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="rounded-2xl border-4 border-blue-200 overflow-hidden">
                <Image
                  src="/images/67fe21ff1871a29dd1d45a7e-raisin_fi_prod_woman_576X576.png"
                  alt={termDepositsSection.imageAlt}
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
