'use client';

import { useState, useEffect } from 'react';
import festgeldData from '../../languages/festgeld.json';

export default function FestgeldWhatIs() {
  const [activeSection, setActiveSection] = useState('zinsen');

  const { zinsen, whatIs, septemberUpdate } = festgeldData;

  const navigationSections = [
    { id: 'zinsen', title: 'Zinsen beim Festgeld' },
    { id: 'was-ist-festgeld', title: 'Was ist Festgeld?' },
    { id: 'september-update', title: 'September-Update' }
  ];

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
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!zinsen || !whatIs || !septemberUpdate) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* Zinsen beim Festgeld */}
          <div id="zinsen" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {zinsen.title}
            </h2>
            
            <div className="space-y-6">
              {zinsen.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph.text}
                </p>
              ))}
            </div>

            {/* Zinsen Tabelle */}
            {zinsen.table && (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      {zinsen.table.headers.map((header, index) => (
                        <th key={index} className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {zinsen.table.rows.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-300 px-6 py-4 text-gray-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {zinsen.additionalContent && (
              <div className="mt-8 space-y-4">
                {zinsen.additionalContent.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Was ist Festgeld? */}
          <div id="was-ist-festgeld" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {whatIs.title}
            </h2>
            
            <div className="space-y-6">
              {whatIs.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>

          {/* September-Update */}
          <div id="september-update" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {septemberUpdate.title}
            </h2>
            
            <p className="text-sm text-gray-600 italic mb-6">
              {septemberUpdate.lastUpdated}
            </p>
            
            <div className="space-y-6">
              {septemberUpdate.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}