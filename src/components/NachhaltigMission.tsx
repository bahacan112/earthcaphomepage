import React from 'react';
import nachhaltigData from '../../languages/nachhaltig.json';

const NachhaltigMission = () => {
  const { mission } = nachhaltigData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {mission.title} <span className="text-green-600">{mission.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {mission.subtitle}
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <svg className="w-48 h-48 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"/>
                  <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"/>
                </svg>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full p-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {mission.values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  {mission.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigMission;