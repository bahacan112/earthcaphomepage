'use client';

import React from 'react';

interface OpenStreetMapProps {
  address?: string;
  className?: string;
}

export default function OpenStreetMap({ 
  address = "Saarbrücker Str. 36, 10405 Berlin, Deutschland",
  className = ""
}: OpenStreetMapProps) {
  // OpenStreetMap embed URL for Berlin location
  const mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=13.408974409103395%2C52.52628073399605%2C13.419016599655153%2C52.53073871966554&layer=mapnik";

  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden shadow-md ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: "1px solid black" }}
        loading="lazy"
        title="OpenStreetMap - Earth Capital Management GmbH"
        className="absolute inset-0"
      />
      
      {/* Overlay with company info */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h3 className="font-semibold text-gray-900 mb-2">
          Earth Capital Management GmbH
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          Saarbrücker Str. 36
        </p>
        <p className="text-sm text-gray-600 mb-2">
          10405 Berlin, Deutschland
        </p>
        <div className="flex items-center text-xs text-blue-600">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <a 
            href="https://www.openstreetmap.org/?#map=17/52.528510/13.413990" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Größere Karte anzeigen
          </a>
        </div>
      </div>
    </div>
  );
}