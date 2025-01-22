import React from 'react';

interface HeroLogoProps {
  className?: string;
}

export const HeroLogo = ({ className = '' }: HeroLogoProps) => {
  return (
    <div 
      className={`flex items-center justify-center w-32 h-32 bg-[#005488] rounded-lg ${className}`}
    >
      <img 
        src="/lovable-uploads/0f8cb71a-1993-40a5-92ae-4e8150311a9d.png" 
        alt="Digi Travels Globe Logo"
        className="w-24 h-24 object-contain"
      />
    </div>
  );
};