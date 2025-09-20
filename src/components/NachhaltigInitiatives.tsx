import React from 'react';

const NachhaltigInitiatives = () => {
  const initiatives = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      ),
      title: "CO₂-Neutralität",
      description: "Bis 2030 erreichen wir vollständige CO₂-Neutralität in allen unseren Geschäftsbereichen.",
      progress: 75,
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Grüne Finanzprodukte",
      description: "Förderung nachhaltiger Investitionen durch speziell kuratierte grüne Finanzprodukte.",
      progress: 85,
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      title: "Soziale Verantwortung",
      description: "Unterstützung lokaler Gemeinschaften und Förderung finanzieller Bildung.",
      progress: 90,
      color: "teal"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Digitale Innovation",
      description: "Entwicklung digitaler Lösungen zur Reduzierung des ökologischen Fußabdrucks.",
      progress: 70,
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-green-600">Initiativen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konkrete Maßnahmen und Projekte, mit denen wir aktiv zu einer 
              nachhaltigeren Zukunft beitragen.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-${initiative.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <div className={`text-${initiative.color}-600`}>
                    {initiative.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {initiative.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {initiative.description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Fortschritt</span>
                    <span className={`text-sm font-bold text-${initiative.color}-600`}>
                      {initiative.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${initiative.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Werden Sie Teil unserer Mission
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Gemeinsam können wir eine nachhaltigere Finanzwelt schaffen. 
              Erfahren Sie, wie Sie beitragen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Nachhaltig investieren
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NachhaltigInitiatives;