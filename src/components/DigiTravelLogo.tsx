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
      <span className="text-xl font-bold text-[#005488]">Digi Travels</span>
    </div>
  );
};