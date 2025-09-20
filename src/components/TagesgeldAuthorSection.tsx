import Image from "next/image";

export default function TagesgeldAuthorSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Flexibles sparen verständlich erklärt.
          </h2>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col items-center">
              <div className="mb-4 sm:mb-6">
                <Image 
                  src="/images/017.webp" 
                  alt="Alejandro Mekis" 
                  width={120} 
                  height={120} 
                  className="w-24 h-24 sm:w-30 sm:h-30 rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Autor: Alejandro Mekis
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Content Manager, Marketing
              </p>
              
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Mehr Lesen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}