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
    answer: "Bei Festgeld besteht die Möglichkeit, zu Beginn der Laufzeit eine feste Summe anzulegen. Dieser Betrag wird über einen festen Zeitraum zu einem festen Zinssatz angelegt. So ist es in der Regel nicht möglich, ein Festgeldkonto als Form der regelmäßigen Spareinlage, beispielsweise als Sparplan, zu nutzen."
  },
  {
    id: 2,
    question: "Kann man Festgeld vorzeitig kündigen?",
    answer: "Eine vorzeitige Kündigung des Festgeldkontos ist meistens nicht möglich. Festgeld wird über einen bestimmten Zeitraum fest angelegt und ist in dieser Zeit nicht verfügbar. In Ausnahmefällen kann das Kreditinstitut einer vorläufigen Kündigung zustimmen. Dazu ist jedoch mit zusätzlichen Gebühren und einer Minderung der Festgeldzinsen zu rechnen."
  },
  {
    id: 3,
    question: "Wird Festgeld automatisch verlängert?",
    answer: "Die Regelungen bezüglich einer Laufzeitverlängerung des Festgeldes können sich von Bank zu Bank unterscheiden. So gibt es auch Festgeldangebote mit einer automatischen Laufzeitverlängerung (Prolongation). Sollten Sparer ihrer Bank nicht mitteilen, dass sie die Anlage nicht verlängern möchten, kann es sein, dass die Bank das Geld erneut anlegt. Dabei verlängert sich der Zeitraum wieder um die gleiche Dauer. Das Festgeld erhöht sich lediglich um die erzielten Zinsen.\n\nBietet eine unserer Partnerbanken eine automatische Laufzeitverlängerung an, kann diese mit einem Klick im Raisin Onlinebanking deaktiviert werden. Sparer werden zu Beginn der Festgeldanlage über die Prolongation informiert und auch rechtzeitig vor dem Ende der Laufzeit noch einmal erinnert."
  },
  {
    id: 4,
    question: "Welche Möglichkeiten gibt es am Ende der Laufzeit meiner Festgeldanlage?",
    answer: "Am Ende der Laufzeit stehen Sparern mehrere Möglichkeiten zur Verfügung. Welche Option die passende ist, hängt von den individuellen Anlagezielen ab. Folgende Möglichkeiten gibt es:\n\n• Betrag bei derselben oder einer anderen Partnerbank zum aktuellen Zinssatz erneut anlegen (Prolongation)\n• Geldanlage inklusive Zinserträge auszahlen lassen"
  },
  {
    id: 5,
    question: "Lohnt es sich, Festgeld im Ausland anzulegen?",
    answer: "Im europäischen Ausland sind die Zinsen für Festgeld häufig höher als hierzulande, weshalb es sich lohnen kann, Festgeld im Ausland anzulegen und von der höheren Verzinsung zu profitieren. Die Einlagensicherung sichert Geldanlagen in der EU bis zu 100.000 € pro Anleger und Bank vollständig ab. Auch Länder außerhalb der EU, wie beispielsweise Großbritannien und Norwegen, unterliegen einer gesetzlichen Einlagensicherung. Raisin setzt auf Festgeldangebote im Ausland, um die aktuell besten Festgeldzinsen in unserem Vergleich bieten zu können."
  },
  {
    id: 6,
    question: "Besteht ein Wechselkursrisiko, wenn Festgeld im Ausland angelegt wird?",
    answer: "Wird das Geld in Euro angelegt, besteht kein Wechselkursrisiko. Bei einem Fremdwährungskonto sieht es anders aus. Da der Wechselkurs zwischen dem Euro und einer anderen Währung schwanken kann, besteht hier das Risiko einer Wertminderung. Gewinnt der Euro während der Laufzeit an Wert, kann es zu einer Reduzierung kommen. Umgekehrt ist jedoch auch ein Gewinn möglich. Entscheidend hierfür ist der Wechselkurs zum Zeitpunkt der Auszahlung."
  },
  {
    id: 7,
    question: "Gibt es eine Alternative zum Festgeld?",
    answer: "Für Sparer, die ihr Geld lieber kurzfristig anlegen möchten, stellt das Tagesgeld eine Alternative zum Festgeld dar. Beim Tagesgeld kann jederzeit auf das angelegte Geld zugegriffen werden. Auch hier sind attraktive Zinserträge möglich. Bei Raisin ist eine Verzinsung von Tagesgeldkonten mit bis zu 2,85 % Zinsen p. a. möglich."
  },
  {
    id: 8,
    question: "Lohnt es sich, ein Festgeldkonto für meine Kinder anzulegen?",
    answer: "Festgeld für Kinder anzulegen kann sich lohnen, wenn auf die angelegten Geldbeträge für die nächsten Jahre verzichtet werden kann. Der Anlagebetrag kann dann nach einigen Jahren beispielsweise für den Führerschein, das Studium oder die Ausbildung verwendet werden. Dabei ist das Festgeldkonto für Kinder besser verzinst als ein Sparbuch oder Tagesgeld.\n\nDas Kind kann erst nach Ablauf der Laufzeit auf das angelegte Geld zugreifen. Daher kann sich auch hier die Treppenstrategie lohnen. So kann der Nachwuchs immer wieder auf Teilbeträge zugreifen und zudem bei einer Wiederanlage vom aktuell besten Zins in unserem Festgeld-Vergleich profitieren."
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