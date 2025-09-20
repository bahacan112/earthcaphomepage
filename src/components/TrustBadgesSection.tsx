import Image from "next/image";
import languageData from '../../languages/language.json';

export default function TrustBadgesSection() {
  const { trustBadgesSection } = languageData;
  
  return (
    <section className={`${trustBadgesSection.bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center text-white">
          {trustBadgesSection.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-medium leading-tight">
                {item.title}
              </h3>
              
              {/* Description and Rating (for Trustpilot) */}
              {item.description && (
                <p className="text-xs opacity-90">
                  {item.description}
                </p>
              )}
              
              {/* Star rating for Trustpilot */}
              {item.rating && (
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-4 h-4 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-2">{item.rating}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}