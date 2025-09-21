import React from 'react';
import Image from 'next/image';

const NachhaltigHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nachhaltiges{' '}
              <span className="block">Festgeld (09/2025)</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Geld ökologisch, sozial und/oder ethisch anlegen und von bis zu 2,30 % p.a. profitieren
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Bestes nachhaltiges Festgeldkonto in unserem Vergleich finden</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Grünes Sparkonto mit attraktiven Zinsen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Kostenlose Kontoeröffnung, Kontoführung und frei von laufenden Kosten</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => window.location.href = '/festgeld'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Nachhaltig Festgeld anlegen
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/015.png"
                alt="Mann mit Brille in braunem Pullover"
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