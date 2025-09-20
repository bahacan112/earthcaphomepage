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
    question: "Wie sicher ist Ihr Tagesgeld?",
    answer: "Durch die EU-weit harmonisierte nationale Einlagensicherung ist Tagesgeld bis zu einem Betrag von 100.000 € pro Person und Bank abgesichert. Das bedeutet, dass im Falle einer Insolvenz die Bank dazu verpflichtet ist, Ihnen die Einlagen bis zu diesem Betrag auszuzahlen. Die Einlagensicherung gilt für Tagesgeldkonten in Deutschland und im EU-Ausland.\n\nBei privaten und öffentlichen Banken in Deutschland ist die gesetzliche Entschädigungseinrichtung deutscher Banken GmbH (EdB) für die Einlagensicherung verantwortlich. Über den Betrag von 100.000 € hinaus können Banken freiwillig zusätzliche Absicherungen anbieten. Dies geschieht über die freiwilligen Sicherungseinrichtungen beim Bundesverband deutscher Banken (BdB) und den Bundesverband Öffentlicher Banken Deutschlands (VÖB). Seit 2025 liegt die Maximalgrenze bei 3 Mio. Euro pro Person. Ob unsere Partnerbanken zusätzliche Einlagensicherungen anbieten, können Sie in unserem Tagesgeld-Vergleich nachsehen."
  },
  {
    id: 2,
    question: "Wie werden Zinsen beim Tagesgeld versteuert?",
    answer: "Auf Zinszahlungen aus Tagesgeldern fallen 25,00 % Abgeltungssteuer sowie 5,50 % Solidaritätszuschlag und gegebenenfalls Kirchensteuer an. Als Sparerin beziehungsweise Sparer haben Sie die Möglichkeit, einen Freibetrag von 1.000 € für Alleinstehende beziehungsweise 2.000 € für gemeinsam Veranlagte im Jahr zu nutzen (Stand: 2025). Bis zu diesem Betrag bleiben Ihre Zinszahlungen steuerfrei. Mit einem Freistellungsauftrag bei der Bank haben Sie die Möglichkeit, die Abgeltungssteuer zu vermeiden.\n\nFalls Sie mit Ihrem Gesamteinkommen unter dem Grundfreibetrag von 12.096 € (Stand: 2025) liegen und eine Nichtveranlagungsbescheinigung beim Finanzamt beantragt haben, entfällt die Besteuerung Ihrer Zinszahlungen. Hier ist zu beachten, dass unter dem Gesamteinkommen auch Löhne aus einem Angestelltenverhältnis und Einkommen aus selbstständiger Arbeit fallen.\n\nIn einigen Ländern ist zusätzlich eine Quellensteuer fällig. Diese wird bei Zinszahlungen ausländischer Banken einbehalten und abgeführt. Im Tagesgeld-Vergleich sehen Sie auf einen Blick, bei welchen Angeboten eine Quellensteuer fällig wird. In Ihrem Raisin Onlinebanking finden Sie zudem das Produktinformationsblatt Ihrer Anlage sowie detaillierte Informationen zu der entsprechenden Besteuerung."
  },
  {
    id: 3,
    question: "Wann werden die Tagesgeldzinsen ausgezahlt?",
    answer: "Die Auszahlung der Tagesgeldzinsen erfolgt zu unterschiedlichen Intervallen:\n\n• Monatsende\n• Quartalsende\n• Halbjahresende\n• Jahresende\n\nDie Auszahlungsintervalle legt die Bank individuell fest. In unserem Tagesgeldkonto-Vergleich können Sie in den Angebotsdetails nachlesen, wann die Zinszahlungen erfolgen."
  },
  {
    id: 4,
    question: "Warum zeigt der Tagesgeld-Vergleich bei einigen Angeboten \"Wochenkonto\" an?",
    answer: "Ein Wochenkonto ist eine Sonderform des Tagesgelds. Es handelt sich um ein wöchentlich verfügbares Sparprodukt, bei dem Sie Ein- und Auszahlungen an einem festen Wochentag vornehmen. Fällt dieser auf einen Feiertag, führen wir den Vorgang am nächsten Bankarbeitstag aus. Die Auszahlung erfolgt innerhalb von ein bis zwei Bankarbeitstagen auf Ihr Raisin-Konto. Eine Kündigung ist jederzeit möglich – das Guthaben überweisen wir Ihnen am nächsten geplanten Auszahlungstag aus."
  },
  {
    id: 5,
    question: "Darf eine andere Person mein Tagesgeldkonto in meinem Namen nutzen?",
    answer: "Die Nutzung Ihres Tagesgeldkontos durch eine andere Person ist nicht möglich. Eine Bankvollmacht können Sie daher bei Raisin nicht einreichen, da unsere Partnerbanken dem jeweiligen Landesrecht unterliegen. Bestandskunden können jedoch einer dritten Person mit einer Auskunftsvollmacht erlauben, telefonische Auskünfte zu Ihrem Raisin-Konto oder Ihren Anlagen beim Kundenservice einzuholen."
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
            Tagesgeld von Raisin – Ihre Fragen, unsere Antworten
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