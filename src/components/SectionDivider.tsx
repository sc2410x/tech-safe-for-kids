
import React from 'react';

interface SectionDividerProps {
  color?: 'purple' | 'blue' | 'yellow' | 'green' | 'orange' | 'white';
  flip?: boolean;
}

const SectionDivider = ({ color = 'white', flip = false }: SectionDividerProps) => {
  const getColor = () => {
    switch (color) {
      case 'purple': return 'fill-kid-purple-light';
      case 'blue': return 'fill-kid-blue-light';
      case 'yellow': return 'fill-kid-yellow-light';
      case 'green': return 'fill-kid-green-light';
      case 'orange': return 'fill-kid-orange-light';
      default: return 'fill-white';
    }
  };
  
  return (
    <div className={`relative w-full h-16 -mt-1 ${flip ? 'transform rotate-180' : ''}`}>
      <svg 
        className="absolute bottom-0 w-full h-full" 
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 C30,30 70,0 100,10 L100,20 L0,20 Z"
          className={getColor()}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
