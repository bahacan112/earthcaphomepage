"use client";

import React from "react";
import Image from "next/image";
import languageData from '../../languages/language.json';

const DepositProtectionSection: React.FC = () => {
  const content = languageData.depositProtectionSection;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {content.title}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.description}
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              {content.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => window.location.href = 'https://investor.earthcap.de'}
              >
                {content.buttons[0].text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositProtectionSection;