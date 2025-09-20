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
    answer: "Nein, bei Festgeld handelt es sich um eine Einmalanlage. Sie zahlen den gewünschten Betrag zu Beginn der Laufzeit ein und können während der Laufzeit keine weiteren Einzahlungen vornehmen. Der eingezahlte Betrag wird für die vereinbarte Laufzeit zu einem festen Zinssatz angelegt. Wenn Sie regelmäßig Geld anlegen möchten, ist Tagesgeld eine bessere Alternative, da hier jederzeit Ein- und Auszahlungen möglich sind."
  },
  {
    id: 2,
    question: "Kann man Festgeld vorzeitig kündigen?",
    answer: "Eine vorzeitige Kündigung von Festgeld ist grundsätzlich nicht vorgesehen, da es sich um eine Anlage mit fester Laufzeit handelt. In Ausnahmefällen können manche Banken eine vorzeitige Kündigung gegen Zahlung einer Vorfälligkeitsentschädigung ermöglichen. Dies ist jedoch nicht garantiert und mit Kosten verbunden. Daher sollten Sie bei der Auswahl der Laufzeit sicherstellen, dass Sie das angelegte Geld während der gesamten Laufzeit nicht benötigen."
  },
  {
    id: 3,
    question: "Wird Festgeld automatisch verlängert?",
    answer: "Das hängt von den Bedingungen der jeweiligen Bank ab. Viele Banken verlängern Festgeld automatisch um die ursprüngliche Laufzeit, wenn Sie nicht rechtzeitig vor Ablauf kündigen. Andere Banken überweisen das Geld automatisch auf Ihr Referenzkonto zurück. In Ihrem Raisin-Konto erhalten Sie rechtzeitig vor Ablauf eine Benachrichtigung über die anstehende Fälligkeit und können entscheiden, ob Sie das Geld erneut anlegen oder auszahlen lassen möchten."
  },
  {
    id: 4,
    question: "Welche Möglichkeiten gibt es am Ende der Laufzeit meiner Festgeldanlage?",
    answer: "Am Ende der Laufzeit haben Sie mehrere Optionen:\n\n• Auszahlung: Das Geld wird auf Ihr Referenzkonto überwiesen\n• Verlängerung: Sie können das Festgeld zu den dann aktuellen Konditionen verlängern\n• Neuanlage: Sie können einen neuen Festgeldvertrag mit einer anderen Laufzeit oder bei einer anderen Bank abschließen\n• Umschichtung: Sie können das Geld in andere Anlageformen wie Tagesgeld investieren\n\nRaisin informiert Sie rechtzeitig vor Ablauf über Ihre Möglichkeiten und unterstützt Sie bei der Entscheidung."
  },
  {
    id: 5,
    question: "Lohnt es sich, Festgeld im Ausland anzulegen?",
    answer: "Festgeld im europäischen Ausland kann durchaus attraktiv sein, da ausländische Banken oft höhere Zinsen bieten als deutsche Institute. Wichtige Vorteile:\n\n• Höhere Zinssätze als bei deutschen Banken\n• EU-weite Einlagensicherung bis 100.000 € pro Bank und Kunde\n• Keine Währungsrisiken innerhalb der Eurozone\n• Einfache Abwicklung über Raisin\n\nBei Festgeld außerhalb der Eurozone sollten Sie zusätzlich Währungsrisiken beachten. Raisin arbeitet nur mit regulierten europäischen Banken zusammen, die den EU-Sicherheitsstandards entsprechen."
  },
  {
    id: 6,
    question: "Besteht ein Wechselkursrisiko, wenn Festgeld im Ausland angelegt wird?",
    answer: "Innerhalb der Eurozone besteht kein Wechselkursrisiko, da alle Transaktionen in Euro abgewickelt werden. Bei Festgeldanlagen in anderen EU-Währungen wie polnischen Zloty oder tschechischen Kronen besteht jedoch ein Währungsrisiko. Der Wert Ihrer Anlage kann durch Wechselkursschwankungen steigen oder fallen. Raisin bietet hauptsächlich Euro-Festgeld an, um dieses Risiko zu vermeiden. In den Produktdetails wird immer klar angegeben, in welcher Währung die Anlage erfolgt."
  },
  {
    id: 7,
    question: "Gibt es eine Alternative zum Festgeld?",
    answer: "Ja, es gibt verschiedene Alternativen zum Festgeld, je nach Ihren Anlagezielen:\n\n• Tagesgeld: Flexibel verfügbar, aber meist niedrigere Zinsen\n• Sparbriefe: Ähnlich wie Festgeld, aber von deutschen Banken\n• Staatsanleihen: Höhere Renditen möglich, aber mit Kursrisiko\n• Geldmarktfonds: Professionell verwaltete, kurzfristige Anlagen\n• ETFs: Langfristig höhere Renditen möglich, aber mit Schwankungsrisiko\n\nFür sicherheitsorientierte Anleger mit festem Anlagehorizont bleibt Festgeld eine der besten Optionen für garantierte Zinserträge."
  },
  {
    id: 8,
    question: "Lohnt es sich, ein Festgeldkonto für meine Kinder anzulegen?",
    answer: "Ein Festgeldkonto für Kinder kann eine sinnvolle langfristige Sparstrategie sein. Vorteile:\n\n• Garantierte Zinsen über die gesamte Laufzeit\n• Sicherheit durch Einlagensicherung\n• Diszipliniertes Sparen ohne Zugriffsmöglichkeit\n• Steuerliche Vorteile durch Freibeträge der Kinder\n\nBei längeren Laufzeiten sollten Sie jedoch bedenken, dass das Geld nicht verfügbar ist. Für Kinder kann auch ein Tagesgeldkonto sinnvoll sein, da es mehr Flexibilität bietet. Raisin bietet spezielle Konditionen für Minderjährige - sprechen Sie uns gerne an."
  }
];

export default function TagesgeldFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Festgeld von Raisin – Ihre Fragen, unsere Antworten
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