import Link from "next/link";
import { Button } from "@/components/ui/button";
import languageData from '../../languages/language.json';

export default function CTASection() {
  const { ctaSection } = languageData;
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {ctaSection.title}
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          {ctaSection.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/* Boş butonlar kaldırıldı */}
        </div>
      </div>
    </section>
  );
}