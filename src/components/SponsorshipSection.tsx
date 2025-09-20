import Image from 'next/image';
import languageData from '../../languages/language.json';

export default function SponsorshipSection() {
  const { sponsorshipSection } = languageData;

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {sponsorshipSection.title}
              </h2>
              <p className="text-lg text-red-100 leading-relaxed">
                {sponsorshipSection.description}
              </p>
            </div>

            {/* Subtitle */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg font-medium text-white">
                {sponsorshipSection.subtitle}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {sponsorshipSection.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    button.type === 'primary'
                      ? 'bg-white text-red-600 hover:bg-red-50 hover:shadow-lg transform hover:-translate-y-1'
                      : 'border-2 border-white text-white hover:bg-white hover:text-red-600'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={sponsorshipSection.image}
                alt={sponsorshipSection.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}