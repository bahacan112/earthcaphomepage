import Link from "next/link";
import { Button } from "@/components/ui/button";
import languageData from '../../languages/language.json';

export default function CTASection() {
  const { ctaSection } = languageData;
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {ctaSection.title}
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          {ctaSection.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-[16px] font-medium">
            <Link href="https://www.raisin.com/en-ie/register/">{ctaSection.primaryButton}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-[16px] font-medium">
            <Link href="https://www.raisin.com/en-ie/savings-accounts/">{ctaSection.secondaryButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}