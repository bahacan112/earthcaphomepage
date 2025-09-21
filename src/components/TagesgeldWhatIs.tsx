'use client';

import tagesgeldData from '../../languages/tagesgeld.json';
import { useState, useEffect, useMemo } from 'react';

export default function TagesgeldWhatIs() {
  const { whatIs, howItWorks, septemberUpdate, advantages, disadvantages, isTagesgeldWorthwhile, comparisonTips, highInterestRates, tagesgeldVsFestgeld } = tagesgeldData;
  const [activeSection, setActiveSection] = useState('was-ist-tagesgeld');

  // Navigasyon menüsü için bölümler
  const navigationSections = useMemo(() => [
    { id: 'was-ist-tagesgeld', title: 'Was ist ein Tagesgeldkonto?' },
    { id: 'vorteile-tagesgeld', title: 'Ihre Vorteile von Tagesgeld auf einen Blick' },
    { id: 'vergleich-tagesgeld', title: 'Worauf ist beim Vergleich von Tagesgeldkonten zu achten?' },
    { id: 'hohe-zinsen', title: 'Wo gibt es hohe Zinsen für Tagesgeld?' },
    { id: 'vorteile-raisin', title: 'Ihre Vorteile bei Earth Capital' }
  ], []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(section => document.getElementById(section.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationSections]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!whatIs) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ana İçerik - Sol taraf (2/3) */}
          <div className="flex-1 lg:w-2/3">
            
            {/* Was ist ein Tagesgeldkonto? */}
            <div id="was-ist-tagesgeld" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                {whatIs.title}
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
                {whatIs.content.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg">
                    {paragraph.text}
                    {paragraph.link && (
                      <>
                        <a 
                          href={paragraph.link.url}
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          {paragraph.link.text}
                        </a>
                        {paragraph.continuation}
                      </>
                    )}
                  </p>
                ))}
              </div>


            </div>

            {/* Yeni eklenen "Wie funktioniert ein Tagesgeldkonto?" bölümü */}
            {howItWorks && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {howItWorks.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  {howItWorks.content.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* September-Update bölümü */}
            {septemberUpdate && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {septemberUpdate.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 italic mb-4 sm:mb-6">
                  {septemberUpdate.lastUpdated}
                </p>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  {septemberUpdate.content.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph.text}
                      {paragraph.link && (
                        <>
                          <a 
                            href={paragraph.link.url}
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                          >
                            {paragraph.link.text}
                          </a>
                          {paragraph.continuation}
                        </>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Ihre Vorteile von Tagesgeld auf einen Blick */}
            {advantages && (
              <div id="vorteile-tagesgeld" className="mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {advantages.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {advantages.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</span>
                        <span className="text-gray-700 text-sm sm:text-base"> {item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {advantages.button && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={advantages.button.url}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {advantages.button.text}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Nachteile bölümü */}
            {disadvantages && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {disadvantages.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {disadvantages.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</span>
                        <span className="text-gray-700 text-sm sm:text-base"> {item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ist ein Tagesgeldkonto noch sinnvoll? bölümü */}
            {isTagesgeldWorthwhile && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {isTagesgeldWorthwhile.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  {isTagesgeldWorthwhile.content.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph.text}
                      {paragraph.link && (
                        <>
                          <a 
                            href={paragraph.link.url}
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                          >
                            {paragraph.link.text}
                          </a>
                          {paragraph.continuation}
                        </>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Worauf ist beim Vergleich von Tagesgeldkonten zu achten? */}
            {comparisonTips && (
              <div id="vergleich-tagesgeld" className="mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {comparisonTips.title}
                </h3>
                
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {comparisonTips.subtitle}
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {comparisonTips.items.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                {comparisonTips.button && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={comparisonTips.button.url}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {comparisonTips.button.text}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Wo gibt es hohe Zinsen für Tagesgeld? */}
            {highInterestRates && (
              <div id="hohe-zinsen" className="mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {highInterestRates.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  {highInterestRates.content.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph.text}
                    </p>
                  ))}
                </div>
                
                {highInterestRates.button && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={highInterestRates.button.url}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {highInterestRates.button.text}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Tagesgeld oder Festgeld bölümü */}
            {tagesgeldVsFestgeld && (
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {tagesgeldVsFestgeld.title}
                </h3>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                  {tagesgeldVsFestgeld.content.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sağ Taraf - Navigasyon Menüsü (1/3) - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-4">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Seitenübersicht</h3>
                <nav className="space-y-2">
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}