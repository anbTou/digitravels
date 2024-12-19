import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  imageSrc?: string;
}

export const DigiTravelLogo = ({ className = '', imageSrc }: DigiTravelLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/253ef851-0ef8-4f76-a182-567284b28778.png" 
        alt="Digi Travels Logo" 
        className="h-16 w-auto"
      />
    </div>
  );
};