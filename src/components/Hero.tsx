
import React, { useState, useEffect } from "react";
import { Check, Shield } from 'lucide-react';
import TypedHeading from "./TypedHeading";
import HeroStats from "./hero/HeroStats";
import HeroVisual from "./hero/HeroVisual";
import CallToAction from "./hero/CallToAction";

const Hero = () => {
  const [animateElements, setAnimateElements] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setAnimateElements(true);
    }, 300);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-0 overflow-hidden geometric-pattern py-0">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className={`inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{
              transitionDelay: '100ms'
            }}>
              Stop Risking Non-Compliance
            </div>
            
            <div className={`transition-all duration-700 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{
              transitionDelay: '300ms'
            }}>
              <TypedHeading 
                englishText="Code & Creed. Perfected." 
                arabicText="الرمز والعقيدة. مُتقَن." 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-navyTrust mb-6 leading-tight" 
              />
            </div>
            
            <p className={`text-lg md:text-xl text-deepCharcoal/80 mb-8 max-w-xl transition-all duration-700 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{
              transitionDelay: '500ms'
            }}>
              Missing one compliance detail can destroy your reputation. Our AI finds what others miss.
            </p>
            
            <CallToAction animateElements={animateElements} />
            
            <div className={`transition-all duration-700 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`} style={{
              transitionDelay: '900ms'
            }}>
              <HeroStats />
            </div>
          </div>
          
          <HeroVisual animateElements={animateElements} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
