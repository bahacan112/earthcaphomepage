'use client';

import { useState, useEffect, useMemo } from 'react';

export default function EinlagensicherungWhatIs() {
  const [activeSection, setActiveSection] = useState('was-ist-einlagensicherung');

  const navigationSections = useMemo(() => [
    { id: 'was-ist-einlagensicherung', title: 'Was ist die Einlagensicherung?' },
    { id: 'einlagensicherung-deutschland', title: 'Einlagensicherung in Deutschland' },
    { id: 'weitere-informationen', title: 'Weitere Informationen' },
    { id: 'zusaetzliche-details', title: 'Zusätzliche Details' }
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Area - 2/3 width on left */}
          <div className="lg:w-2/3">
            {/* Was ist die Einlagensicherung? */}
            <div id="was-ist-einlagensicherung" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Was ist die Einlagensicherung?
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Die gesetzliche Einlagensicherung innerhalb der Europäischen Union ist Ausdruck des politischen Willens, um die Einlagen von Privatpersonen und Unternehmen bei Banken und anderen Finanzinstituten vor Verlusten abzusichern. So können europäische Sparer vor den Folgen einer Bankenkrise oder einer finanziellen Schieflage der Banken bewahrt werden. Im Rahmen des gesetzlichen Einlagensicherungssystems sind Bankeinlagen, wie beispielsweise Geld auf Girokonten, Tagesgeld- oder Festgeldkonten, bis zu 100.000 € pro Person und Bank abgesichert. Über die gesetzliche Einlagensicherung hinaus bieten einige Institute eine zusätzliche freiwillige Einlagensicherung an. Dabei handelt es sich um ein System, bei dem Finanzinstitute, wie Banken oder Kreditgenossenschaften, freiwillig zusätzliche Sicherheitsmaßnahmen ergreifen, beispielsweise durch sogenannte Einlagensicherungsfonds. So können Einlagen ihrer Kunden über die gesetzlich vorgeschriebene Mindestabsicherung hinaus abgesichert werden.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Außerdem spielt die Staatsgarantie bei der Sicherheit eine wichtige Rolle, die jedoch in Deutschland noch nicht gesetzlich verankert ist. Diese Garantie bedeutet, dass der Staat im Falle eines Ausfalls oder einer Zahlungsunfähigkeit des Schuldners die Verbindlichkeiten übernehmen oder abdecken wird.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Die drei Säulen der Einlagensicherung:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Gesetzliche Einlagensicherung</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Freiwillige Einlagensicherung</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Staatsgarantie</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  In Europa wurden die Mindestanforderungen an die gesetzlich garantierte Einlagensicherung seit Jahren weiterentwickelt, um die Absicherung der Anleger in der Europäischen Union zu verbessern.
                </p>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Einlagensicherung gilt innerhalb der EU
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die gesetzliche Einlagensicherung bei Festgeld und anderen Bankeinlagen ist innerhalb der Europäischen Union im Rahmen von EU-Richtlinien geregelt. Sie sehen bestimmte Mindestanforderungen für die Absicherung von Einlagen vor. In Deutschland ist dies das Einlagensicherungsgesetz. Andere EU-Staaten haben eigene Umsetzungsvorschriften. Durch die gesetzliche Einlagensicherung sind Einlagen innerhalb der gesamten EU bis zu einem Betrag von 100.000 € pro Person und Bank abgesichert.
                  </p>
                </div>
              </div>
            </div>

            {/* Einlagensicherung in Deutschland */}
            <div id="einlagensicherung-deutschland" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Einlagensicherung in Deutschland
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In Deutschland gibt es ein umfassendes Einlagensicherungssystem, das darauf abzielt, die Einlagen der Kunden bei Banken und Finanzinstituten abzusichern. Dieses System umfasst sowohl gesetzliche als auch freiwillige Einlagensicherungsmaßnahmen.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Gesetzliche Einlagensicherung:
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die gesetzliche Einlagensicherung in Deutschland ist durch das Einlagensicherungsgesetz (EinSiG) geregelt. Gemäß diesem Gesetz sind alle Banken in Deutschland dazu verpflichtet, einem Einlagensicherungsfonds beizutreten. Dieser Fonds wird von der Entschädigungseinrichtung deutscher Banken GmbH (EdB) verwaltet. Die EdB ist für nahezu alle Banken und Kreditinstitute in Deutschland verpflichtend, unabhängig von ihrer Größe oder ihrer Organisationsstruktur. Dies schließt Volksbanken, Raiffeisenbanken, Sparkassen, Privatbanken und andere Finanzinstitute ein.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Zusätzliches Sicherungssystem:
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Darüber hinaus gibt es in Deutschland eine sogenannte freiwillige zusätzliche Einlagensicherung, die über die gesetzliche Einlagensicherung hinausgeht. Dabei sind einige deutsche Banken und Genossenschaften Mitglied bei einem Verband wie dem Bundesverband deutscher Banken (BdB), dem Bundesverband Öffentlicher Banken Deutschlands (VÖB) oder nutzen die Institutionssicherung:
                  </p>
                </div>

                {/* Private Banken */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Private Banken
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Viele private Banken sind Mitglied im freiwilligen Einlagensicherungsfonds des Bundesverbandes deutscher Banken (BdB). Der BdB ist der Interessenverband der privaten Banken und Kreditinstitute in Deutschland. Er setzt sich für die gemeinsamen Interessen seiner Mitgliedsbanken in verschiedenen Bereichen ein, einschließlich der Einlagensicherung. Dabei sind Einlagen oberhalb der gesetzlichen Einlagensicherung mit bis zu 8,75 % (Stand: 2025) des Eigenkapitals der Bank gesichert.
                  </p>
                </div>

                {/* Öffentliche Banken */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Öffentliche Banken
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Mitglieder des Bundesverbandes Öffentlicher Banken Deutschlands (VÖB) stützen sich in der Regel auf ihre eigene Form der freiwilligen Einlagensicherung und sind oft Mitglieder eines Dachverbandes, der ihre Interessen in Bezug auf die Einlagensicherung und andere Angelegenheiten vertritt. Der VÖB ist der Dachverband der öffentlich-rechtlichen Banken in Deutschland. Hierzu gehören unter anderem Sparkassen, Landesbanken und Förderbanken.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Sparkassen und Genossenschaftsbanken
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sparkassen und Genossenschaftsbanken (Volksbanken und Raiffeisenbanken) sind zwei verschiedene Arten von Finanzinstituten in Deutschland. Diese haben jeweils ihre eigenen Ansätze zur Einlagensicherung und Institutssicherung.
                </p>

                {/* Sparkassen */}
                <div className="border-l-4 border-red-500 pl-6 mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Sparkassen
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Freiwillige Einlagensicherung:</span>
                      <span className="text-gray-700"> Die Sparkassen sind Mitglieder des Deutschen Sparkassen- und Giroverbandes (DSGV). Der DSGV betreibt eine freiwillige Einlagensicherung für seine Mitglieder.</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Institutssicherung:</span>
                      <span className="text-gray-700"> Die einzelnen Sparkassen haben interne Maßnahmen zur Institutssicherung implementiert, um ihre finanzielle Stabilität und Widerstandsfähigkeit zu gewährleisten. Dies kann Risikomanagement, Liquiditätsmanagement und andere Praktiken umfassen, um die Funktionsfähigkeit der Sparkassen abzusichern.</span>
                    </div>
                  </div>
                </div>

                {/* Genossenschaft */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Genossenschaft
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Freiwillige Einlagensicherung:</span>
                      <span className="text-gray-700"> Die Genossenschaftsbanken sind Mitglieder des Bundesverbandes der Deutschen Volksbanken und Raiffeisenbanken (BVR). Der BVR betreibt einen Einlagensicherungsfonds für seine Mitglieder.</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Institutssicherung:</span>
                      <span className="text-gray-700"> Ähnlich wie bei den Sparkassen haben auch Genossenschaftsbanken Maßnahmen zur Institutssicherung implementiert. Diese Maßnahmen sollen sicherstellen, dass die Banken stabil und widerstandsfähig sind, um potenzielle Krisen zu bewältigen.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weitere Informationen - Placeholder */}
            <div id="weitere-informationen" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Weitere Informationen
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Weitere Informationen zur Einlagensicherung folgen in Kürze...
                </p>
              </div>
            </div>

            {/* Zusätzliche Details - Placeholder */}
            <div id="zusaetzliche-details" className="scroll-mt-20 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Zusätzliche Details
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Zusätzliche Details zur Einlagensicherung folgen in Kürze...
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu - 1/3 width on right */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Seitenübersicht
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