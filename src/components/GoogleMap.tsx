'use client';

import React from 'react';

interface GoogleMapProps {
  address?: string;
  className?: string;
}

export default function GoogleMap({ 
  address = "Saarbrücker Str. 36, 10405 Berlin, Deutschland",
  className = ""
}: GoogleMapProps) {
  // Google Maps embed URL with the address
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgaQzuU17R8&q=${encodeURIComponent(address)}&zoom=15&maptype=roadmap`;

  return (
    <div className={`relative w-full h-96 rounded-lg overflow-hidden shadow-md ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Earth Capital Management GmbH"
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
          Wegbeschreibung anzeigen
        </div>
      </div>
    </div>
  );
}