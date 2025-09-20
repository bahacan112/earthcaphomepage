import React from 'react';
import nachhaltigData from '../../languages/nachhaltig.json';

const NachhaltigInitiatives = () => {
  const { initiatives } = nachhaltigData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {initiatives.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {initiatives.subtitle}
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {initiatives.items.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{initiative.title}</h3>
                    <p className="text-green-600 font-semibold">{initiative.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    {initiative.timeline}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {initiative.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {initiatives.cta.title}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {initiatives.cta.description}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                {initiatives.cta.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigInitiatives;