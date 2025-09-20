"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import languageData from "../../languages/language.json";

export default function HeroSection() {
  const { heroSection } = languageData;
  return (
    <section className="bg-[#F8F6F4] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold tracking-tight leading-[1.05] text-slate-900">
                {heroSection.title}
              </h1>
              
              <ul className="mt-6 space-y-3 text-slate-700 list-disc pl-6">
                {heroSection.features.map((feature, index) => (
                  <li key={index} className="text-[16px] md:text-[18px] leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3 text-[16px] font-medium shadow-sm"
              >
                <Link href="https://www.raisin.com/en-ie/register/">{heroSection.buttons.register}</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-7 py-3 text-[16px] font-medium"
              >
                <Link href="https://www.raisin.com/en-ie/savings-accounts/">{heroSection.buttons.compare}</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image and Award */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt={heroSection.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-2">
        <p className="text-xs text-slate-500">{heroSection.disclaimer}</p>
      </div>
    </section>
  );
}