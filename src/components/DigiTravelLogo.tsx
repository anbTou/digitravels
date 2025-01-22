import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  onClick?: () => void;
}

export const DigiTravelLogo = ({ className = '', onClick }: DigiTravelLogoProps) => {
  return (
    <div 
      className={`flex items-center justify-center w-16 h-16 bg-[#005488] rounded-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src="/lovable-uploads/0f8cb71a-1993-40a5-92ae-4e8150311a9d.png" 
        alt="Digi Travels Globe Logo"
        className="w-12 h-12 object-contain"
      />
    </div>
  );
};