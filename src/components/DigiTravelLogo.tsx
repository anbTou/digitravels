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
        src="/lovable-uploads/728f7a67-79f5-46c3-a0b2-c01e8e785fce.png" 
        alt="Digi Travels Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};