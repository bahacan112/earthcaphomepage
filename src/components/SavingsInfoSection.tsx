import Image from 'next/image';
import languageData from '../../languages/language.json';

export default function SavingsInfoSection() {
  const { savingsInfoSection } = languageData;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                {savingsInfoSection.subtitle}
              </h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {savingsInfoSection.title}
              </h2>
              <p className="text-lg text-gray-600">
                {savingsInfoSection.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {savingsInfoSection.features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {savingsInfoSection.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    button.type === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={savingsInfoSection.image}
              alt={savingsInfoSection.imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}