'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Was kostet ein nachhaltiges Festgeldkonto?",
    answer: "Ein nachhaltiges Festgeldkonto bei Raisin ist für Anleger kostenfrei. Weder für die Kontoeröffnung noch für die Kontoführung fallen Gebühren an. Auch während der Laufzeit entstehen keine zusätzlichen Kosten. Dadurch bleibt der gesamte Anlagebetrag erhalten und kann zu den vereinbarten Zinsen im nachhaltigen Festgeldkonto wachsen."
  },
  {
    id: 2,
    question: "Welche Voraussetzungen gelten zur Eröffnung eines nachhaltigen Sparkontos?",
    answer: "Um ein nachhaltiges Festgeldkonto bei Raisin zu eröffnen, sind folgende Voraussetzungen zu erfüllen:\n\n• Volljährigkeit\n• Handlung im eigenen Namen\n• Wohnsitz in Deutschland\n• Referenzkonto bei einer in der EU ansässigen Bank\n• E-Mail-Adresse"
  },
  {
    id: 3,
    question: "Wie funktionieren Ein- und Auszahlungen auf ein nachhaltiges Festgeldkonto?",
    answer: "Als Verrechnungskonto für nachhaltiges Festgeld dient das persönliche Raisin-Konto, während beispielsweise das private Girokonto als Referenzkonto angegeben werden kann. Zunächst wird der gewünschte Anlagebetrag vom Referenzkonto auf das Raisin-Konto überwiesen. Anschließend wird das Geld an die gewünschte Ökobank weitergeleitet und mit attraktiven Zinsen angelegt. Nach Ende der Laufzeit wird das investierte Kapital inklusive Zinsen auf das Raisin-Konto zurücküberwiesen. Da Anlagesumme, Zinssatz und Laufzeit der nachhaltigen Spareinlage im Vorfeld fest vereinbart wurden, sind während der Laufzeit keine Ein- und Auszahlungen möglich."
  },
  {
    id: 4,
    question: "Gibt es eine Mindesteinlage bei nachhaltigem Festgeld?",
    answer: "Die Höhe der Mindesteinlage für ein nachhaltiges Festgeldkonto variiert je nach Angebot der jeweiligen Bank. Vom Gesetzgeber gibt es keine Vorgaben für Mindest- oder Maximaleinlagen. Typischerweise liegt die Mindesteinlage bei nachhaltigen Festgeldanlagen zwischen 500 € und 10.000 €. Beim Vergleich mehrerer Angebote kann es daher sinnvoll sein, genau auf die Konditionen zu achten."
  },
  {
    id: 5,
    question: "Können mehrere nachhaltige Festgeldkonten gleichzeitig eröffnet werden?",
    answer: "Sparer können ihr Geld gleichzeitig in mehrere nachhaltige Festgelder anlegen. So kann beispielsweise das investierte Geld auf verschiedene Laufzeiten verteilt und eine Zinstreppe gebildet werden. Dadurch kann von einer hohen Flexibilität und unterschiedlichen Zinssätzen profitiert werden."
  }
];

export default function NachhaltigFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen zum nachhaltigen Festgeld
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItem === item.id && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic">
            <strong>Hinweis:</strong> Die Inhalte auf dieser Seite dienen der allgemeinen Information und stellen keine steuerliche Beratung dar. Für detaillierte Informationen oder zur individuellen Klärung steuerrechtlicher Fragen empfehlen wir die Hinzuziehung eines Steuerberaters oder einer anderen gemäß §2 StBerG befähigten Person.
          </p>
        </div>
      </div>
    </section>
  );
}