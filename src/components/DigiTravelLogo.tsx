import React from 'react';

interface DigiTravelLogoProps {
  className?: string;
  imageSrc?: string;
}

export const DigiTravelLogo = ({ className = '', imageSrc }: DigiTravelLogoProps) => {
  return (
    <a 
      href="https://booking.digitravels.io"
      className={`flex items-center justify-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-xl font-bold text-[#005488]">DigiTravels</span>
    </a>
  );
};