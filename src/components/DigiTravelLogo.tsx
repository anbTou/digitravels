import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  imageSrc?: string;
}

export const DigiTravelLogo = ({ className = '', imageSrc }: DigiTravelLogoProps) => {
  if (imageSrc) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img 
          src={imageSrc} 
          alt="Digi Travel Logo" 
          className="h-16 w-auto"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 200 50" 
        className="h-12 w-auto"
      >
        <text 
          x="10" 
          y="35" 
          fontFamily="Arial, sans-serif" 
          fontSize="30" 
          fontWeight="bold" 
          fill="#1A73E8"
        >
          Digi Travel
        </text>
      </svg>
    </div>
  );
};