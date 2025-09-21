"use client";

import Image from "next/image";
import tagesgeldData from "../../languages/tagesgeld.json";

export default function TagesgeldHero() {
  const { hero } = tagesgeldData;



  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="space-y-8 lg:pr-8">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-[#0F2745] leading-[1.1]">
              {hero.title}
            </h1>
            
            <div className="space-y-4">
              {hero.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0F2745] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-[#0F2745] text-[16px] lg:text-[18px] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => window.location.href = '/tagesgeld'}
                className="rounded-lg bg-[#4A90E2] px-6 py-3 text-[16px] font-medium text-white hover:bg-[#357ABD] transition-colors"
              >
                {hero.buttons.compare}
              </button>
            </div>
          </div>
          
          {/* Sağ taraf - Görsel ve Award Badge */}
          <div className="relative">
            {/* Ana görsel container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
              <Image
                src="/images/award.png"
                alt={hero.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}