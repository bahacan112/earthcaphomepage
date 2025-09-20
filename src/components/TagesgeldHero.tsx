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
              <button className="rounded-lg bg-[#4A90E2] px-6 py-3 text-[16px] font-medium text-white hover:bg-[#357ABD] transition-colors">
                {hero.buttons.compare}
              </button>
              <button className="rounded-lg border-2 border-[#4A90E2] px-6 py-3 text-[16px] font-medium text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-colors">
                {hero.buttons.register}
              </button>
            </div>
          </div>
          
          {/* Sağ taraf - Görsel ve Award Badge */}
          <div className="relative">
            {/* Award Badge - Sağ üst köşe */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-white rounded-full p-3 shadow-lg border-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-[10px] font-bold text-red-600 mb-1">FINANZ-AWARD 2025</div>
                  <div className="text-[8px] text-gray-600">BESTES TAGESGELD</div>
                  <div className="text-[12px] font-bold text-[#0F2745] mt-1">★★★★★</div>
                  <div className="text-[8px] text-gray-600">1. Platz Kategorie</div>
                  <div className="text-[8px] text-gray-600">Tagesgeld-Anbieter</div>
                </div>
              </div>
            </div>
            
            {/* Ana görsel container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
              <Image
                src="/images/hero.png"
                alt={hero.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* 2,85% Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#4A90E2] rounded-2xl p-6 text-white text-center shadow-2xl">
                  <div className="text-[48px] lg:text-[56px] font-bold leading-none">2,85%</div>
                  <div className="text-[14px] lg:text-[16px] mt-2">p.a. für 3 Monate</div>
                  <div className="text-[12px] lg:text-[14px] mt-1 opacity-90">Nur für Neukundinnen</div>
                  <div className="text-[12px] lg:text-[14px] opacity-90">und Neukunden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}