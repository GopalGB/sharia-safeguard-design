
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check } from 'lucide-react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const AnimatedLogo = ({ size = 'md', showText = true }: AnimatedLogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Set dimensions based on size prop
  const dimensions = {
    sm: { logoSize: 'h-8 w-8', textSize: 'text-lg', iconSize: 16 },
    md: { logoSize: 'h-10 w-10', textSize: 'text-xl', iconSize: 20 },
    lg: { logoSize: 'h-12 w-12', textSize: 'text-2xl', iconSize: 24 }
  };
  
  const { logoSize, textSize, iconSize } = dimensions[size];

  // Start animation when component mounts
  useEffect(() => {
    setIsAnimating(true);
    
    // Reset animation when component unmounts
    return () => setIsAnimating(false);
  }, []);

  const handleLogoHover = () => {
    // Restart animation on hover
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  return (
    <Link to="/" className="flex items-center group" aria-label="ShariaGuard Home">
      <div 
        ref={logoRef}
        className="flex items-center" 
        onMouseEnter={handleLogoHover}
      >
        {/* Animated Logo Mark */}
        <div className={`relative ${logoSize} flex items-center justify-center mr-2`}>
          <div className={`absolute inset-0 bg-gradient-to-r from-mutedTeal to-navyTrust rounded-lg transform transition-all duration-700 ${isAnimating ? 'scale-100 rotate-0 opacity-100' : 'scale-90 -rotate-90 opacity-0'}`}></div>
          
          <Shield
            size={iconSize}
            className={`text-white absolute z-10 transition-all duration-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ transitionDelay: '300ms' }}
          />
          
          <Check
            size={iconSize * 0.6}
            className={`text-white absolute z-20 transition-all duration-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: '600ms' }}
          />
          
          {/* Pulsing effect around logo */}
          <div className={`absolute inset-0 bg-mutedTeal/20 rounded-lg transform transition-all duration-1000 ${isAnimating ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}`}
            style={{ 
              animation: isAnimating ? 'pulse 2s infinite' : 'none',
              transitionDelay: '300ms'
            }}
          ></div>
        </div>
        
        {/* Logo Text */}
        {showText && (
          <div className="flex flex-col">
            <span 
              className={`font-bold ${textSize} text-deepCharcoal transition-transform duration-300 group-hover:text-mutedTeal group-hover:scale-105`}
              style={{ 
                transform: `translateY(${isAnimating ? '0' : '10px'})`,
                opacity: isAnimating ? 1 : 0,
                transition: 'transform 0.5s ease, opacity 0.5s ease, color 0.3s ease',
                transitionDelay: '200ms'
              }}
            >
              ShariaGuard
            </span>
            <span 
              className="text-xs text-deepCharcoal/70 tracking-wide"
              style={{ 
                transform: `translateY(${isAnimating ? '0' : '10px'})`,
                opacity: isAnimating ? 1 : 0,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                transitionDelay: '400ms'
              }}
            >
              Compliance Verification
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default AnimatedLogo;
