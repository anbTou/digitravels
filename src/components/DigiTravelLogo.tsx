import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  onClick?: () => void;
}

export const DigiTravelLogo = ({ className = '', onClick }: DigiTravelLogoProps) => {
  return (
    <div 
      className={`flex flex-col ${className}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="w-32 h-32 bg-[#005488] rounded-lg flex items-center justify-center">
        <img 
          src="/lovable-uploads/0f8cb71a-1993-40a5-92ae-4e8150311a9d.png" 
          alt="Digi Travels Globe Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
    </div>
  );
};