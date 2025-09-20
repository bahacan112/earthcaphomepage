'use client';

import nachhaltigData from '../../languages/nachhaltig.json';
import { useState, useEffect } from 'react';

export default function NachhaltigWhatIs() {
  const [activeSection, setActiveSection] = useState('section-1');

  // Navigasyon menüsü için 5 bölüm - içerikler sonra eklenecek
  const navigationSections = [
    { id: 'section-1', title: 'Bölüm 1' },
    { id: 'section-2', title: 'Bölüm 2' },
    { id: 'section-3', title: 'Bölüm 3' },
    { id: 'section-4', title: 'Bölüm 4' },
    { id: 'section-5', title: 'Bölüm 5' }
  ];

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex gap-8">
          {/* Ana İçerik - Sol taraf (2/3) */}
          <div className="flex-1 w-2/3">
            
            {/* Bölüm 1 */}
            <div id="section-1" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Bölüm 1 Başlığı
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bu bölümün içeriği sonra eklenecek.
                </p>
              </div>
            </div>

            {/* Bölüm 2 */}
            <div id="section-2" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bölüm 2 Başlığı
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bu bölümün içeriği sonra eklenecek.
                </p>
              </div>
            </div>

            {/* Bölüm 3 */}
            <div id="section-3" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bölüm 3 Başlığı
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bu bölümün içeriği sonra eklenecek.
                </p>
              </div>
            </div>

            {/* Bölüm 4 */}
            <div id="section-4" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bölüm 4 Başlığı
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bu bölümün içeriği sonra eklenecek.
                </p>
              </div>
            </div>

            {/* Bölüm 5 */}
            <div id="section-5" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Bölüm 5 Başlığı
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bu bölümün içeriği sonra eklenecek.
                </p>
              </div>
            </div>

          </div>

          {/* Sağ Taraf - Navigasyon Menüsü (1/3) */}
          <div className="w-1/3">
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