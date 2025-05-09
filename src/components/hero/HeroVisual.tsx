
import React from 'react';
import HeroAnimation from './HeroAnimation';
import HeroFeatureCard from './HeroFeatureCard';

const HeroVisual = ({ animateElements }: { animateElements: boolean }) => {
  return (
    <div 
      className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 ${
        animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
      }`} 
      style={{
        transitionDelay: '500ms'
      }}
    >
      <div className="relative">
        <HeroAnimation>
          <HeroFeatureCard />
        </HeroAnimation>
        
        <div className="absolute -top-16 -left-16 w-32 h-32 opacity-80">
          <img 
            src="/lovable-uploads/cfa6a0c9-b1d2-458a-92b6-32083849db01.png" 
            alt="ShariaGuard Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-br from-sandGold/40 to-sandGold/20 backdrop-blur-md border border-white/20"></div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-uaeRed/30 to-uaeRed/10 backdrop-blur-md border border-white/20"></div>
      </div>
    </div>
  );
};

export default HeroVisual;
