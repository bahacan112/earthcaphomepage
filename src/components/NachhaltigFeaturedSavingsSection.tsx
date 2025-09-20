import Image from "next/image";
import { ShieldCheck, Leaf } from "lucide-react";
import nachhaltigData from '../../languages/nachhaltig.json';

export default function NachhaltigFeaturedSavingsSection() {
  const { featuredSavingsSection } = nachhaltigData;

  return (
    <section className="bg-[#F8F6F4] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
          {featuredSavingsSection.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSavingsSection.accounts.map((acc, index) => (
            <div
              key={`${acc.name}-${acc.term}-${index}`}
              className={
                "group h-full bg-white rounded-2xl border p-6 transition-all border-gray-200 hover:border-2 hover:border-blue-500 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              }
            >
              {/* Header: Logo + Bank name */}
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <Image
                    src={acc.logo}
                    alt={`${acc.name} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md object-contain"
                  />
                </div>
                <div className="text-slate-900 font-medium">{acc.name}</div>
              </div>

              {/* Rate */}
              <div className="mt-6">
                <div className="text-4xl font-semibold text-slate-900">
                  {acc.rateAER.toFixed(2)}
                  <span className="text-base align-top">%</span>
                  <span className="ml-2 align-middle text-sm font-medium uppercase text-slate-500">
                    p.a.
                  </span>
                </div>
              </div>

              {/* Term & Country */}
              <div className="mt-3 text-sm text-slate-600">
                Laufzeit · {acc.term} · {acc.country}
              </div>

              {/* Sustainable Badge */}
              {acc.sustainable && (
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  <Leaf size={14} className="text-blue-700" />
                  Nachhaltig
                </div>
              )}

              {/* Simplified Tax Badge */}
              {acc.simplifiedTax && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-slate-700">
                  <ShieldCheck size={14} className="text-slate-700" />
                  Vereinfachte Steuerabführung
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}