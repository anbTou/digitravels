import React from 'react';

export const DigiTravelLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
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