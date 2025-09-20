import Image from "next/image";
import languageData from '../../languages/language.json';

export default function ProcessSection() {
  const { processSection } = languageData;
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {processSection.title}
          </h2>
          <p className="text-lg text-gray-600">
            {processSection.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSection.steps.map((step, index) => (
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