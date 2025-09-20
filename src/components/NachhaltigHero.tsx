import React from 'react';
import Image from 'next/image';
import nachhaltigData from '../../languages/nachhaltig.json';

const NachhaltigHero = () => {
  const { hero } = nachhaltigData;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {hero.title}{' '}
              <span className="block">{hero.titleSecondLine}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {hero.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 ${index === 1 ? 'bg-green-600' : 'bg-blue-600'} rounded-full mt-2 flex-shrink-0`}></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {hero.cta}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/015.png"
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
};

export default NachhaltigHero;

    </section>
  );
};

export default NachhaltigHero;