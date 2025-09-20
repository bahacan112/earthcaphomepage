import Image from "next/image";
import languageData from '../../languages/language.json';

export default function TrustBadges() {
  const { trustBadges } = languageData;
  return (
    <section className="bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {trustBadges.badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={badge.image} alt={badge.alt} width={220} height={140} className="h-36 w-auto object-contain" />
              <p className="mt-3 text-[13px] text-slate-600">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
