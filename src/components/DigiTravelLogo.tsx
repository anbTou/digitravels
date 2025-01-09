import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  onClick?: () => void;
}

export const DigiTravelLogo = ({ className = '', onClick }: DigiTravelLogoProps) => {
  return (
    <div 
      className={`flex items-center ${className}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src="/lovable-uploads/7fc651a9-7ea7-424b-ad87-7293de76a7d4.png" 
        alt="DigiTravels Logo" 
        className="h-8 w-auto"
      />
    </div>
  );
};