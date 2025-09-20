import Image from "next/image";
import Link from "next/link";
import languageData from '../../languages/language.json';

export default function MobileAppSection() {
  const { mobileAppSection } = languageData;
  return (
    <section className="bg-[#F8F6F4] py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{mobileAppSection.title}</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {mobileAppSection.description}
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
              {mobileAppSection.appStoreButton}
            </Link>
            <Link href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-900 text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
              {mobileAppSection.googlePlayButton}
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white p-4">
            <Image src="/images/689c74d4bb6fdec60de57e3e-raisin_ie_hand_with_mobile_phone_qr_code_.png" alt={mobileAppSection.imageAlt} width={520} height={500} className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}