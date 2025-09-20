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
    question: "Ist es möglich, Festgeld monatlich einzuzahlen?",
    answer: "Bei Festgeld besteht die Möglichkeit, zu Beginn der Laufzeit eine feste Summe anzulegen. Dieser Betrag wird über einen festen Zeitraum zu einem festen Zinssatz angelegt. So ist es in der Regel nicht möglich, ein Festgeldkonto als Form der regelmäßigen Spareinlage, beispielsweise al..."
  },
  {
    id: 2,
    question: "Kann man Festgeld vorzeitig kündigen?",
    answer: "Eine vorzeitige Kündigung des Festgeldkontos ist meistens nicht möglich. Festgeld wird über einen bestimmten Zeitraum fest angelegt und ist in dieser Zeit nicht verfügbar. In Ausnahmefällen kann das Kreditinstitut einer vorläufigen Kündigung zustimmen. Dazu ist jedoch mit zusätz..."
  },
  {
    id: 3,
    question: "Wird Festgeld automatisch verlängert?",
    answer: "Die Regelungen bezüglich einer Laufzeitverlängerung des Festgeldes können sich von Bank zu Bank unterscheiden. So gibt es auch Festgeldangebote mit einer automatischen Laufzeitverlängerung (Prolongation). Sollten Sparer ihrer Bank nicht mitteilen, dass sie die Anlage nicht verlänge..."
  },
  {
    id: 4,
    question: "Welche Möglichkeiten gibt es am Ende der Laufzeit meiner Festgeldanlage?",
    answer: "Am Ende der Laufzeit haben Sie verschiedene Optionen: Sie können das Geld auf Ihr Referenzkonto überweisen lassen, eine neue Festgeldanlage tätigen oder das Geld auf einem Tagesgeldkonto parken. Die meisten Banken informieren Sie rechtzeitig vor Laufzeitende über Ihre Möglichkeiten."
  },
  {
    id: 5,
    question: "Wie sicher ist mein Geld bei einer Festgeldanlage?",
    answer: "Festgeldanlagen sind durch die gesetzliche Einlagensicherung geschützt. In Deutschland sind Einlagen bis zu 100.000 Euro pro Kunde und Bank durch die Entschädigungseinrichtung deutscher Banken abgesichert. Zusätzlich bieten viele Banken freiwillige Sicherungssysteme."
  },
  {
    id: 6,
    question: "Welche Unterlagen benötige ich für die Eröffnung eines Festgeldkontos?",
    answer: "Für die Kontoeröffnung benötigen Sie in der Regel einen gültigen Personalausweis oder Reisepass, eine Meldebescheinigung und gegebenenfalls Nachweise über Ihr Einkommen. Bei Online-Banken erfolgt die Legitimation meist über das VideoIdent-Verfahren."
  },
  {
    id: 7,
    question: "Lohnt es sich, ein Festgeldkonto für meine Kinder anzulegen?",
    answer: "Festgeld für Kinder anzulegen kann sich lohnen, wenn auf die angelegten Geldbeträge für die nächsten Jahre verzichtet werden kann. Der Anlagebetrag kann dann nach einigen Jahren beispielsweise für den Führerschein, das Studium oder die Ausbildung verwendet werden. Dabei ist das Fe..."
  }
];

export default function TagesgeldFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Festgeld von Raisin – Ihre Fragen, unsere Antworten
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg font-medium text-gray-900 pr-3 sm:pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform duration-200 ${
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
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-600 italic px-4">
            <strong>Hinweis:</strong> Die Inhalte auf dieser Seite dienen der allgemeinen Information und stellen keine steuerliche Beratung dar. Für detaillierte Informationen oder zur individuellen Klärung steuerrechtlicher Fragen empfehlen wir die Hinzuziehung eines Steuerberaters oder einer anderen gemäß §2 StBerG befähigten Person.
          </p>
        </div>
      </div>
    </section>
  );
}