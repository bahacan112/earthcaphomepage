import React from 'react';
import Image from 'next/image';
import einlagensicherungData from '../../languages/einlagensicherung.json';

export default function EinlagensicherungHero() {
  const { hero } = einlagensicherungData;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {hero.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {hero.subtitle}
              </p>
            </div>
            
            <div className="space-y-4">
              {hero.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}