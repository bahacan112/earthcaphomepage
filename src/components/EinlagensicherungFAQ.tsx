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
    question: "Wie erfolgt die Einlagensicherung bei einer Fremdwährung?",
    answer: "Die gesetzliche Einlagensicherung gilt nur für Einlagen, die in Euro oder einer anderen Währung eines Mitgliedes der Europäischen Union unterhalten werden. Die Höhe der Einlagensicherung liegt bei 100.000 € je Kunde und Bank.\n\nWird beispielsweise eine Einlage in US-Dollar (USD) getätigt, ist die Absicherung durch die gesetzliche Einlagensicherung ausgeschlossen. Anleger können dann prüfen, ob ein freiwilliges Einlagensicherungssystem besteht."
  },
  {
    id: 2,
    question: "Ist mein Geld bei deutschen Banken sicherer als im Ausland?",
    answer: "Die gesetzliche Einlagensicherung gilt für alle Länder in der EU in gleichem Maße. Das heißt: Im EU-Ausland sind Ihre Einlagen bis zu 100.000 € pro Anleger und Bank abgesichert. Zudem sind weitere Staaten des Europäischen Wirtschaftsraums (EWR) beteiligt: Island, Liechtenstein und Norwegen sowie zusätzlich Monaco, San Marino und die Schweiz. In Großbritannien gilt eine nationale Einlagensicherung, die bis zu 85.000 £ je Kunde und Bank absichert."
  },
  {
    id: 3,
    question: "Fallen Wertpapiere unter die Einlagensicherung?",
    answer: "Wertpapiergeschäfte, wie zum Beispiel Aktienkäufe, Fonds oder ETFs, fallen nicht unter die Einlagensicherung. Kapital in Fonds und ETFs zählen jedoch zum Sondervermögen. Kommt es also bei der Fondsgesellschaft oder der Depotbank zu einer Insolvenz, ist es möglich, die Wertpapiere zurückzufordern oder in ein anderes Wertpapierdepot zu übertragen."
  },
  {
    id: 4,
    question: "Wie hoch ist die Einlagensicherung bei Gemeinschaftskonten?",
    answer: "Da sich die Einlagensicherung auf den einzelnen Anleger bezieht, hat jeder Kontoinhaber einen separaten Entschädigungsanspruch. Bei Eheleuten verdoppelt sich die Summe der Einlagensicherung auf 200.000 €. Demnach macht es keinen Unterschied, ob ein Paar ein Gemeinschaftskonto oder zwei Einzelkonten führt."
  },
  {
    id: 5,
    question: "Sollte ich mein Geld aufgrund der Einlagensicherung auf mehrere Banken verteilen?",
    answer: "Wenn die Geldanlage die Einlagensicherungsgrenze von 100.000 € überschreitet, kann es sinnvoll sein, das Geld auf mehrere Banken zu verteilen. Da die staatliche Einlagensicherung eine Sicherungsgrenze von 100.000 € pro Anleger und Bank vorsieht, erhalten diese bei einer anderen Bank nach dem Sicherungssystem wieder eine Absicherung von bis zu 100.000 €."
  },
  {
    id: 6,
    question: "Wie kann man prüfen, ob eine Bank im Einlagensicherungsfonds ist?",
    answer: "Es gibt mehrere Möglichkeiten, um herauszufinden, ob eine Bank im Einlagensicherungsfonds ist. Folgende Schritte können dabei hilfreich sein:\n\nRecherche auf der Bank-Website: Kunden können die offizielle Website der Bank, bei der sie ein Konto haben, besuchen. Dort können Informationen zur Einlagensicherung oder Einlagensicherungsfonds gefunden werden. Banken sind oft verpflichtet, solche Informationen transparent auf ihrer Website bereitzustellen. Bei Earth Capital finden Sie alle wichtigen Informationen im Produktinformationsblatt der jeweiligen Bank.\n\nFinanzregulierungsbehörde: Jedes Land hat eine eigene Finanzregulierungsbehörde, die die Banken und Finanzinstitute überwacht. In Deutschland beispielsweise ist die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) zuständig. Kunden können die Website der entsprechenden Behörde besuchen und dort Informationen zur Einlagensicherung erhalten.\n\nBank oder Anbieter kontaktieren: Kunden können auch direkt eine Anfrage bei ihrer Bank oder ihrem Anbieter per Telefon oder E-Mail stellen, um Informationen zur Einlagensicherung zu erhalten. Der dortige Kundenservice gibt Auskunft über den Einlagensicherungsfonds der jeweiligen Bank. Das gilt selbstverständlich auch für die Partnerbanken von Earth Capital."
  }
];

export default function EinlagensicherungFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Weitere Fragen zur Einlagensicherung
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