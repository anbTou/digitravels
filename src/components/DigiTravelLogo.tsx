import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  imageSrc?: string;
}

export const DigiTravelLogo = ({ className = '' }: DigiTravelLogoProps) => {
  return (
    <a 
      href="https://booking.digitravels.io"
      className={`flex items-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="/lovable-uploads/7fc651a9-7ea7-424b-ad87-7293de76a7d4.png" 
        alt="DigiTravels Logo" 
        className="h-8 w-auto"
      />
    </a>
  );
};