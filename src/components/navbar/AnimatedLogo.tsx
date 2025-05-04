
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const AnimatedLogo = ({ size = 'md', showText = true }: AnimatedLogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Set dimensions based on size prop
  const dimensions = {
    sm: { logoSize: 'h-8', textSize: 'text-lg' },
    md: { logoSize: 'h-10', textSize: 'text-xl' },
    lg: { logoSize: 'h-12', textSize: 'text-2xl' }
  };
  
  const { logoSize, textSize } = dimensions[size];

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
        className="flex items-center" 
        onMouseEnter={handleLogoHover}
      >
        {/* Logo Image */}
        <div className={`relative ${logoSize} mr-2`}>
          <img
            src="/lovable-uploads/cfa6a0c9-b1d2-458a-92b6-32083849db01.png"
            alt="ShariaGuard Logo"
            className={`h-full transform transition-all duration-700 ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
            }`}
          />
        </div>
        
        {/* Logo Text (only shown if showText is true) */}
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
