import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import languageData from '../../languages/language.json';

export default function DemandDepositsSection() {
  const { demandDepositsSection } = languageData;
  // Sadece ilk kartı (Tagesgeld) göster
  const firstCard = demandDepositsSection.cards[0];
  
  return (
    <section className="bg-[#F8F6F4] py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tek kart için grid yerine tek div kullan */}
        <div className={`rounded-3xl border-2 ${firstCard.borderColor} ${firstCard.bgColor} p-6 sm:p-8 lg:p-10`}>
          <div className="flex flex-col gap-6">
            {/* Top content */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {firstCard.badges.map((badge, badgeIndex) => (
                  <span key={badgeIndex} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${firstCard.badgeColor}`}>
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                {firstCard.title}
              </h3>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-slate-700">
                {firstCard.description}
              </p>

              <div className="mt-6">
                <Button asChild className="rounded-lg bg-blue-600 px-6 py-3 text-[16px] font-medium text-white hover:bg-blue-700">
                  <Link href="https://investor.earthcap.de">{firstCard.button}</Link>
                </Button>
              </div>
            </div>

            {/* Bottom image */}
            <div className="relative">
              <div className={`rounded-2xl border-4 ${firstCard.borderColor} overflow-hidden`}>
                <Image
                  src={firstCard.image}
                  alt={firstCard.imageAlt}
                  width={576}
                  height={320}
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
