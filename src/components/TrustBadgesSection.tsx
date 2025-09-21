import Image from "next/image";
import languageData from '../../languages/language.json';

export default function TrustBadgesSection() {
  const { trustBadgesSection } = languageData;
  
  return (
    <section className={`${trustBadgesSection.bgColor} py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center text-white">
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
              
              {/* Description */}
              {item.description && (
                <p className="text-xs opacity-90">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}