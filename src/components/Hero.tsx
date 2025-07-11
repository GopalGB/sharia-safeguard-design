
import React, { useState, useEffect } from "react";
import { Check, Shield } from 'lucide-react';
import TypedHeading from "./TypedHeading";
import HeroStats from "./hero/HeroStats";
import HeroVisual from "./hero/HeroVisual";
import CallToAction from "./hero/CallToAction";
import { ParticleField, WaveBackground } from "./VisualElements";

const Hero = () => {
  const [animateElements, setAnimateElements] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setAnimateElements(true);
    }, 300);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-0 overflow-hidden morphing-bg py-0">
      <ParticleField />
      <WaveBackground />
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20 glow transition-all duration-1000 magnetic-hover ${
              animateElements ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
            }`} style={{
              transitionDelay: '100ms'
            }}>
              ✨ Stop Risking Non-Compliance
            </div>
            
            <div className={`transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            } text-reveal`} style={{
              transitionDelay: '300ms'
            }}>
              <TypedHeading 
                englishText="Code & Creed. Perfected." 
                arabicText="الرمز والعقيدة. مُتقَن." 
                className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 leading-tight" 
              />
            </div>
            
            <p className={`text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`} style={{
              transitionDelay: '500ms'
            }}>
              Missing one compliance detail can destroy your reputation. Our AI finds what others miss.
            </p>
            
            <div className={`transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} style={{
              transitionDelay: '700ms'
            }}>
              <CallToAction animateElements={animateElements} />
            </div>
            
            <div className={`transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`} style={{
              transitionDelay: '900ms'
            }}>
              <HeroStats />
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1200 ${
            animateElements ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`} style={{
            transitionDelay: '600ms'
          }}>
            <HeroVisual animateElements={animateElements} />
          </div>
        </div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
