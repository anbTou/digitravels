import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  onClick?: () => void;
}

export const DigiTravelLogo = ({ className = '', onClick }: DigiTravelLogoProps) => {
  return (
    <div 
      className={`flex flex-col space-y-4 ${className}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Top space for square logo */}
      <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <span className="text-gray-500">Square Logo Space</span>
      </div>

      {/* Bottom space for different image */}
      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
        <span className="text-gray-500">Image Space</span>
      </div>

      <span className="text-xl font-bold text-[#005488]">Digi Travels</span>
    </div>
  );
};