import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  imageSrc?: string;
}

export const DigiTravelLogo = ({ className = '', imageSrc }: DigiTravelLogoProps) => {
  return (
    <a 
      href="https://booking.digitravels.io/"
      className={`flex items-center justify-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="/lovable-uploads/253ef851-0ef8-4f76-a182-567284b28778.png" 
        alt="Digi Travels Logo" 
        className="h-16 w-auto"
      />
    </a>
  );
};