'use client';

import { useState, useEffect, useMemo } from 'react';
import festgeldData from '../../languages/festgeld.json';

export default function FestgeldWhatIs() {
  const [activeSection, setActiveSection] = useState('zinsen-beim-festgeld');

  const { zinsenBeimFestgeld, wasIstFestgeld, festgeldVergleichLaufzeit, fuerWenLohntSich, howItWorks } = festgeldData;

  const navigationSections = useMemo(() => [
    { id: 'zinsen-beim-festgeld', title: 'Wie hoch sind die Zinsen beim Festgeld?' },
    { id: 'was-ist-festgeld', title: 'Was ist Festgeld?' },
    { id: 'festgeld-vergleich-laufzeit', title: 'Festgeld-Vergleich: Die richtige Laufzeit bei Festgeld wählen' },
    { id: 'fuer-wen-lohnt-sich', title: 'Für wen lohnt sich ein Festgeldkonto als Anlage?' },
    { id: 'wie-funktioniert', title: 'Wie funktioniert die Festgeldanlage bei Raisin?' }
  ], []);

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

  if (!zinsenBeimFestgeld || !wasIstFestgeld || !festgeldVergleichLaufzeit || !fuerWenLohntSich || !howItWorks) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Area - 2/3 width on left */}
          <div className="lg:w-2/3">
            {/* Wie hoch sind die Zinsen beim Festgeld? */}
            <div id="zinsen-beim-festgeld" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {zinsenBeimFestgeld.title}
              </h2>
              
              <div className="space-y-6">
                {zinsenBeimFestgeld.content.map((paragraph: { text: string }, index: number) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Was ist Festgeld? */}
            <div id="was-ist-festgeld" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {wasIstFestgeld.title}
              </h2>
              
              <div className="space-y-6">
                {wasIstFestgeld.content.map((paragraph: { text: string }, index: number) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Festgeld-Vergleich: Die richtige Laufzeit bei Festgeld wählen */}
            <div id="festgeld-vergleich-laufzeit" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {festgeldVergleichLaufzeit.title}
              </h2>
              
              <div className="space-y-6">
                {festgeldVergleichLaufzeit.content.map((paragraph: { text: string }, index: number) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Für wen lohnt sich ein Festgeldkonto als Anlage? */}
            <div id="fuer-wen-lohnt-sich" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {fuerWenLohntSich.title}
              </h2>
              
              <div className="space-y-6">
                {fuerWenLohntSich.content.map((paragraph: { text: string }, index: number) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Wie funktioniert die Festgeldanlage bei Raisin? */}
            <div id="wie-funktioniert" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {howItWorks.title}
              </h2>
              
              <div className="space-y-6">
                {howItWorks.content.map((paragraph: { text: string }, index: number) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Menu - 1/3 width on right */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Inhaltsverzeichnis
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