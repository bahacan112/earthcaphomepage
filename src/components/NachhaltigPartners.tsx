import React from 'react';

const NachhaltigPartners = () => {
  const partners = [
    {
      name: "GreenBank Europe",
      logo: "GB",
      description: "Führende nachhaltige Bank mit Fokus auf erneuerbare Energien",
      rating: "A+",
      color: "green"
    },
    {
      name: "EcoCredit Union",
      logo: "EC",
      description: "Spezialisiert auf umweltfreundliche Kredite und Investitionen",
      rating: "A",
      color: "emerald"
    },
    {
      name: "Sustainable Finance AG",
      logo: "SF",
      description: "Pionier in nachhaltigen Finanzdienstleistungen seit 1995",
      rating: "A+",
      color: "teal"
    },
    {
      name: "Climate Investment Bank",
      logo: "CI",
      description: "Fokus auf Klimaschutz und nachhaltige Entwicklung",
      rating: "A",
      color: "green"
    },
    {
      name: "Renewable Energy Credit",
      logo: "RE",
      description: "Finanzierung von Solar-, Wind- und Wasserkraftprojekten",
      rating: "A+",
      color: "emerald"
    },
    {
      name: "Social Impact Bank",
      logo: "SI",
      description: "Soziale Verantwortung und ethische Bankgeschäfte",
      rating: "A",
      color: "teal"
    }
  ];

  const certifications = [
    {
      name: "B Corp Certified",
      description: "Zertifiziert für soziale und ökologische Leistung",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: "UN Global Compact",
      description: "Mitglied der UN-Initiative für Nachhaltigkeit",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      name: "ISO 14001",
      description: "Umweltmanagementsystem-Zertifizierung",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: "Climate Neutral",
      description: "Zertifiziert klimaneutral durch unabhängige Prüfung",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-green-600">Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir arbeiten ausschließlich mit Banken und Finanzinstituten zusammen, 
              die unsere Werte für Nachhaltigkeit und Verantwortung teilen.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-${partner.color}-100 rounded-xl flex items-center justify-center`}>
                    <span className={`text-${partner.color}-600 font-bold text-lg`}>
                      {partner.logo}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{partner.name}</h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${partner.color}-100 text-${partner.color}-800`}>
                      Rating: {partner.rating}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Warum wir diese Partner wählen
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Strenge ESG-Kriterien
                </h4>
                <p className="text-gray-600">
                  Alle Partner erfüllen höchste Standards für Umwelt, Soziales und Unternehmensführung.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparente Berichterstattung
                </h4>
                <p className="text-gray-600">
                  Regelmäßige Nachhaltigkeitsberichte und offene Kommunikation über Fortschritte.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Langfristige Partnerschaften
                </h4>
                <p className="text-gray-600">
                  Aufbau dauerhafter Beziehungen für nachhaltige Veränderungen in der Finanzbranche.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Unsere Zertifizierungen
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">
                      {cert.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigPartners;