'use client';

import { useState, useEffect, useMemo } from 'react';
import einlagensicherungData from '../../languages/einlagensicherung.json';

export default function EinlagensicherungWhatIs() {
  const [activeSection, setActiveSection] = useState('was-ist-einlagensicherung');
  const { whatIs } = einlagensicherungData;

  const navigationSections = useMemo(() => whatIs.navigationSections, [whatIs.navigationSections]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationSections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Area - 2/3 width on left */}
          <div className="lg:w-2/3">
            {/* Was ist die Einlagensicherung? */}
            <div id="was-ist-einlagensicherung" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {whatIs.sections.wasIstEinlagensicherung.title}
              </h2>
              
              <div className="space-y-6">
                {whatIs.sections.wasIstEinlagensicherung.content.map((item, index) => (
                  <div key={index}>
                    {item.type === 'paragraph' && (
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    {item.type === 'highlight' && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-blue-800 font-medium">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Einlagensicherung in Deutschland */}
            <div id="einlagensicherung-deutschland" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {whatIs.sections.einlagensicherungDeutschland.title}
              </h2>
              
              <div className="space-y-6">
                {whatIs.sections.einlagensicherungDeutschland.content.map((item, index) => (
                  <div key={index}>
                    {item.type === 'paragraph' && (
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    {item.type === 'list' && (
                      <ul className="space-y-2 ml-6">
                        {item.items.map((listItem, listIndex) => (
                          <li key={listIndex} className="text-gray-700 list-disc">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.type === 'subsection' && (
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Weitere Informationen */}
            <div id="weitere-informationen" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {whatIs.sections.weitereInformationen.title}
              </h2>
              
              <div className="space-y-6">
                {whatIs.sections.weitereInformationen.content.map((item, index) => (
                  <div key={index}>
                    {item.type === 'paragraph' && (
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    {item.type === 'highlight' && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-blue-800 font-medium">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Zusätzliche Details */}
            <div id="zusaetzliche-details" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {whatIs.sections.zusaetzlicheDetails.title}
              </h2>
              
              <div className="space-y-6">
                {whatIs.sections.zusaetzlicheDetails.content.map((item, index) => (
                  <div key={index}>
                    {item.type === 'paragraph' && (
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    )}
                    {item.type === 'list' && (
                      <ul className="space-y-2 ml-6">
                        {item.items.map((listItem, listIndex) => (
                          <li key={listIndex} className="text-gray-700 list-disc">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.type === 'highlight' && (
                      <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                        <p className="text-orange-800 font-medium">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Menu - 1/3 width on right */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {whatIs.navigation.title}
                </h3>
                
                <nav className="space-y-2">
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
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