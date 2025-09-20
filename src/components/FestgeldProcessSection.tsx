import Image from "next/image";

export default function FestgeldProcessSection() {
  const steps = [
    {
      image: "/images/014.webp",
      title: "Registrieren und identifizieren",
      description: "Eröffnen Sie Ihr kostenloses Raisin-Konto schnell und einfach über das Videoident-Verfahren."
    },
    {
      image: "/images/015.webp", 
      title: "Angebot wählen",
      description: "Wählen Sie aus unseren Festgeldern und Tagesgeldern das für Sie passende Angebot aus."
    },
    {
      image: "/images/016.webp",
      title: "Geld überweisen", 
      description: "Überweisen Sie den gewünschten Anlagebetrag oder erteilen Sie eine Einzugsermächtigung. Unser Onlinebanking bietet volle Kontrolle."
    }
  ];
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Öffnen Sie Ihr Festgeldkonto in drei einfachen Schritten
          </h2>
          <p className="text-lg text-gray-600">
            In nur wenigen Schritten zu Ihrem Festgeld-Konto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  width={300} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}