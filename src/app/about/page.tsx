import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Über Raisin
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir machen Sparen einfach, transparent und rentabel. Seit 2013 helfen wir Millionen von Kunden dabei, 
              das Beste aus ihren Ersparnissen zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Unsere Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Finanzielle Freiheit für alle
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wir glauben, dass jeder Zugang zu den besten Sparprodukten haben sollte. 
                Deshalb haben wir eine Plattform geschaffen, die Transparenz, Sicherheit und 
                attraktive Zinsen miteinander verbindet.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Transparente und faire Konditionen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Höchste Sicherheitsstandards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Einfache und intuitive Bedienung</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Unsere Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Die Zukunft des Sparens
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wir arbeiten daran, das Sparen zu revolutionieren und unseren Kunden 
                dabei zu helfen, ihre finanziellen Ziele zu erreichen. Mit innovativen 
                Technologien und einem starken Partnernetzwerk.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Unsere Werte
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2013</div>
                    <div className="text-sm text-gray-600">Gegründet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-gray-600">Kunden</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">400+</div>
                    <div className="text-sm text-gray-600">Partnerbanken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">25B€</div>
                    <div className="text-sm text-gray-600">Vermittelt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Erfahrene Finanzexperten und Technologie-Enthusiasten arbeiten gemeinsam 
              daran, Ihnen die beste Spererfahrung zu bieten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">TK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Tamaz Koberidze
              </h3>
              <p className="text-blue-600 text-center mb-3">CEO & Gründer</p>
              <p className="text-gray-600 text-center text-sm">
                Über 15 Jahre Erfahrung in der Finanzbranche und Visionär 
                für digitale Finanzdienstleistungen.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">FS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Frank Schwab
              </h3>
              <p className="text-green-600 text-center mb-3">CTO</p>
              <p className="text-gray-600 text-center text-sm">
                Technologie-Experte mit Leidenschaft für sichere und 
                skalierbare Finanzplattformen.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">MH</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Maria Hoffmann
              </h3>
              <p className="text-purple-600 text-center mb-3">Head of Customer Success</p>
              <p className="text-gray-600 text-center text-sm">
                Sorgt dafür, dass unsere Kunden die bestmögliche 
                Erfahrung mit unseren Produkten machen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sicherheit & Vertrauen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ihre Sicherheit steht bei uns an erster Stelle. Wir arbeiten nur mit 
              regulierten Banken zusammen und erfüllen höchste Sicherheitsstandards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Security Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SSL-Verschlüsselung
              </h3>
              <p className="text-gray-600 text-sm">
                Alle Daten werden mit modernster SSL-Technologie verschlüsselt übertragen.
              </p>
            </div>

            {/* Security Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Einlagensicherung
              </h3>
              <p className="text-gray-600 text-sm">
                Bis zu 100.000 € pro Kunde und Bank durch die gesetzliche Einlagensicherung geschützt.
              </p>
            </div>

            {/* Security Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Regulierte Banken
              </h3>
              <p className="text-gray-600 text-sm">
                Wir arbeiten ausschließlich mit regulierten und lizenzierten Banken zusammen.
              </p>
            </div>

            {/* Security Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600 text-sm">
                Unsere Systeme werden rund um die Uhr überwacht und geschützt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, mit uns zu sparen?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entdecken Sie unsere attraktiven Sparprodukte und starten Sie noch heute 
            in eine bessere finanzielle Zukunft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              Jetzt registrieren
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Produkte vergleichen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}