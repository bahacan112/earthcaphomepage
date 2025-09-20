import React from 'react';

const NachhaltigImpact = () => {
  const impactStats = [
    {
      number: "2.5M",
      unit: "Tonnen",
      description: "CO₂ eingespart durch grüne Investitionen",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      number: "150+",
      unit: "Projekte",
      description: "Nachhaltige Projekte finanziert",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      number: "€5.2",
      unit: "Milliarden",
      description: "In grüne Finanzprodukte investiert",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      )
    },
    {
      number: "85%",
      unit: "Reduktion",
      description: "Weniger Papierverbrauch durch Digitalisierung",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Raisin hat uns geholfen, unsere Nachhaltigkeitsziele zu erreichen und gleichzeitig attraktive Renditen zu erzielen.",
      author: "Dr. Maria Schmidt",
      position: "Nachhaltigkeitsbeauftragte, GreenTech AG",
      avatar: "MS"
    },
    {
      quote: "Die Transparenz und das Engagement von Raisin für nachhaltige Finanzen ist beeindruckend.",
      author: "Thomas Weber",
      position: "CFO, EcoInvest GmbH",
      avatar: "TW"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Unser <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Messbare Ergebnisse unserer Nachhaltigkeitsbemühungen und 
              der positive Einfluss auf Umwelt und Gesellschaft.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                  <div className="text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-green-600 mb-3">
                  {stat.unit}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Timeline */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Meilensteine unserer Nachhaltigkeitsreise
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  2020
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Nachhaltigkeitsstrategie entwickelt
                  </h4>
                  <p className="text-gray-600">
                    Einführung unserer ersten umfassenden Nachhaltigkeitsstrategie mit klaren Zielen bis 2030.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  2022
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Grüne Produktlinie gestartet
                  </h4>
                  <p className="text-gray-600">
                    Launch unserer ersten nachhaltigen Finanzprodukte mit über 50 grünen Partnerbanken.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  2024
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    CO₂-Neutralität erreicht
                  </h4>
                  <p className="text-gray-600">
                    Vollständige CO₂-Neutralität in allen deutschen Geschäftsbereichen erreicht.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  2030
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Europäische Expansion abgeschlossen
                  </h4>
                  <p className="text-gray-600">
                    Ziel: CO₂-Neutralität in allen europäischen Märkten und 100% grüne Produktpalette.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigImpact;