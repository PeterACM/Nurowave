import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Neurowave Inc." 
        className={`h-14 md:h-18 w-auto object-contain ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};
