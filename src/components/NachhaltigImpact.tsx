import React from 'react';
import nachhaltigData from '../../languages/nachhaltig.json';

const NachhaltigImpact = () => {
  const { impact } = nachhaltigData;

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {impact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {impact.subtitle}
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {impact.stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <svg className="w-16 h-16 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{impact.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {impact.testimonial.author}
                  </div>
                  <div className="text-green-600 font-medium">
                    {impact.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigImpact;