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
    </div>
  );
};