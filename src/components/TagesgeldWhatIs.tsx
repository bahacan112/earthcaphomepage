import tagesgeldData from '../../languages/tagesgeld.json';

export default function TagesgeldWhatIs() {
  const { whatIs, howItWorks, septemberUpdate, advantages, disadvantages, isTagesgeldWorthwhile, comparisonTips, highInterestRates, tagesgeldVsFestgeld } = tagesgeldData;

  if (!whatIs) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {whatIs.title}
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {whatIs.content.map((paragraph, index) => (
            <p key={index} className="text-lg">
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
              {!paragraph.link && paragraph.text}
            </p>
          ))}
        </div>

        {/* Yeni eklenen "Wie funktioniert ein Tagesgeldkonto?" bölümü */}
        {howItWorks && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {howItWorks.title}
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {howItWorks.content.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* September-Update bölümü */}
        {septemberUpdate && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {septemberUpdate.title}
            </h3>
            
            <p className="text-sm text-gray-600 italic mb-6">
              {septemberUpdate.lastUpdated}
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {septemberUpdate.content.map((paragraph, index) => (
                <p key={index} className="text-lg">
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

        {/* Vorteile bölümü */}
        {advantages && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {advantages.title}
            </h3>
            
            <div className="space-y-4">
              {advantages.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="text-gray-700"> {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {advantages.button && (
              <div className="mt-6">
                <a
                  href={advantages.button.url}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {advantages.button.text}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Nachteile bölümü */}
        {disadvantages && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {disadvantages.title}
            </h3>
            
            <div className="space-y-4">
              {disadvantages.items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="text-gray-700"> {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ist ein Tagesgeldkonto noch sinnvoll? bölümü */}
        {isTagesgeldWorthwhile && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {isTagesgeldWorthwhile.title}
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {isTagesgeldWorthwhile.content.map((paragraph, index) => (
                <p key={index} className="text-lg">
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

        {/* Vergleich von Tagesgeldkonten bölümü */}
        {comparisonTips && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {comparisonTips.title}
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              {comparisonTips.subtitle}
            </p>
            
            <div className="space-y-6">
              {comparisonTips.items.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wo gibt es hohe Zinsen für Tagesgeld bölümü */}
        {highInterestRates && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {highInterestRates.title}
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {highInterestRates.content.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.text}
                </p>
              ))}
            </div>
            
            {highInterestRates.button && (
              <div className="mt-6">
                <a
                  href={highInterestRates.button.url}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {highInterestRates.button.text}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Tagesgeld oder Festgeld bölümü */}
        {tagesgeldVsFestgeld && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {tagesgeldVsFestgeld.title}
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {tagesgeldVsFestgeld.content.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <a
            href={whatIs.button.url}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {whatIs.button.text}
          </a>
        </div>
      </div>
    </section>
  );
}