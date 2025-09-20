import React from 'react';
import nachhaltigData from '../../languages/nachhaltig.json';

const NachhaltigPartners = () => {
  const { partners } = nachhaltigData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {partners.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {partners.subtitle}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partners.list.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-green-50 transition-colors duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {partner.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  {partner.type}
                </p>
                <p className="text-gray-600 text-sm">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {partners.cta.title}
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {partners.cta.description}
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              {partners.cta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigPartners;