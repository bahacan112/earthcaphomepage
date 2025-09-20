'use client';

import { useState, useEffect, useMemo } from 'react';

export default function NachhaltigWhatIs() {
  const [activeSection, setActiveSection] = useState('section-1');

  // Navigasyon menüsü için 5 bölüm
  const navigationSections = useMemo(() => [
    { id: 'section-1', title: 'Was ist nachhaltiges Festgeld?' },
    { id: 'section-2', title: 'Optimale Laufzeit für nachhaltiges Festgeld' },
    { id: 'section-3', title: 'Zinsen bei nachhaltigem Festgeld' },
    { id: 'section-4', title: 'Sicherheit von nachhaltigem Festgeld' },
    { id: 'section-5', title: 'Nachhaltige Festgeldanlagen bei Raisin' }
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex gap-8">
          {/* Ana İçerik - Sol taraf (2/3) */}
          <div className="flex-1 w-2/3">
            
            {/* Was ist nachhaltiges Festgeld? */}
            <div id="section-1" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Was ist nachhaltiges Festgeld?
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Grundsätzlich funktioniert ein nachhaltiges Festgeldkonto nach dem gleichen Prinzip wie ein klassisches Festgeldkonto. Sparer legen einen Betrag für eine bestimmte Laufzeit zu einem festen Zinssatz an. Während der Laufzeit sind in der Regel keine Ein- oder Auszahlungen möglich. Am Ende der Laufzeit wird das angelegte Kapital inklusive der vereinbarten Zinsen ausgezahlt.
                </p>
                <p className="text-lg">
                  Der Unterschied beim nachhaltigen Festgeld ist, dass Sparer ihr Geld in Produkte anlegen, die gezielt auf nachhaltige Zwecke ausgerichtet sind. Im Gegensatz zu herkömmlichen Festgeldprodukten fließt das Geld in Projekte, die ökologische, ethische oder soziale Ziele unterstützen. Bei einem grünen, ethischen und/oder sozialen Festgeldkonto wird demnach die Bankeinlage nachhaltig genutzt und nicht in umstrittene Bereiche wie Waffenproduktion, fossile Energien oder andere umweltschädliche Industrien investiert. Stattdessen investiert die Bank beispielsweise in Projekte, die in den Bereichen erneuerbare Energien, nachhaltige Landwirtschaft oder soziale Initiativen tätig sind.
                </p>
              </div>
            </div>

            {/* Was ist die optimale Laufzeit für ein nachhaltiges Festgeldkonto? */}
            <div id="section-2" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Was ist die optimale Laufzeit für ein nachhaltiges Festgeldkonto?
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Die optimale Laufzeit für ein nachhaltiges Festgeld hängt von den individuellen Sparzielen und der aktuellen Marktsituation ab. Nachhaltige Festgeldkonten können über eine Laufzeit von wenigen Monaten bis hin zu mehreren Jahren abgeschlossen werden. Bei längeren Laufzeiten fällt der Zinssatz dabei meist etwas höher aus. Für Sparer, die eine ausgewogene Balance zwischen Flexibilität und attraktiven Zinsen bei nachhaltigen Sparkonten anstreben, können Laufzeiten zwischen einem und fünf Jahren eine passende Wahl sein.
                </p>
              </div>
            </div>

            {/* Wie hoch sind die Zinsen bei nachhaltigem Festgeld? */}
            <div id="section-3" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Wie hoch sind die Zinsen bei nachhaltigem Festgeld?
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Sparer können mit nachhaltigem Festgeld attraktive Renditen erhalten.
                </p>
                <p className="text-lg">
                  Da der Zinssatz für ökologisches, ethisches oder soziales Festgeld über die gesamte Laufzeit gleich bleibt, können Anleger genau errechnen, wie hoch die Rendite am Ende der Laufzeit ausfallen wird. Ein Vergleich der Zinsen verschiedener nachhaltiger Sparkonten kann dabei helfen, das Angebot mit den besten Konditionen zu finden.
                </p>
                <p className="text-lg">
                  Neben nachhaltigen Festgeldkonten gibt es weitere Geldanlagen. Bei Raisin kann außerdem in konventionelles Festgeld, Tagesgeld oder beispielsweise die Vermögensverwaltung investiert werden, die ebenfalls attraktive Renditen bieten.
                </p>
              </div>
            </div>

            {/* Wie sicher ist nachhaltiges Festgeld? */}
            <div id="section-4" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Wie sicher ist nachhaltiges Festgeld?
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Ebenso wie das herkömmliche Festgeld gilt ökologisches Festgeld als risikoarme Geldanlage. Das angelegte Geld auf dem nachhaltigen Sparkonto unterliegt der EU-weiten Einlagensicherung und ist somit bis zu einem Betrag von 100.000 € pro Person und Bank abgesichert. Durch die Einlagensicherung wird sichergestellt, dass das angelegte Geld bis zu einem gewissen Betrag auch bei einer Insolvenz der Bank abgesichert ist. Über die EU-weit harmonisierte nationale Einlagensicherung hinaus haben Banken die Möglichkeit, in private Einlagensicherungsfonds einzuzahlen. So kann bei manchen Banken der Betrag der Absicherung 100.000 € übersteigen.
                </p>
              </div>
            </div>

            {/* So funktionieren nachhaltige Festgeldanlagen bei Raisin */}
            <div id="section-5" className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                So funktionieren nachhaltige Festgeldanlagen bei Raisin
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bei Raisin können Sie einfach und sicher in nachhaltige Festgeldanlagen investieren. Unser Angebot umfasst eine Vielzahl von nachhaltigen Festgeldprodukten verschiedener europäischer Banken, die alle strengen Nachhaltigkeitskriterien entsprechen.
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