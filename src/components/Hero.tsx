import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, Check, FileCheck, Scale, Gavel } from 'lucide-react';
import TypedHeading from "./TypedHeading";

const Hero = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    { 
      icon: <FileCheck className="h-6 w-6 text-mutedTeal opacity-90 feature-icon-animation" />, 
      text: "Sharia compliant" 
    },
    { 
      icon: <Shield className="h-6 w-6 text-navyTrust opacity-90 feature-icon-animation" />, 
      text: "Verified contract" 
    },
    { 
      icon: <Scale className="h-6 w-6 text-uaeRed opacity-90 feature-icon-animation" />, 
      text: "Legal approved" 
    },
    { 
      icon: <Gavel className="h-6 w-6 text-mutedCoral opacity-90 feature-icon-animation" />, 
      text: "Court validated" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!animationRef.current) return;
    
    const animateGeometricPattern = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const container = animationRef.current!;
      
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      container.appendChild(canvas);
      
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        color: string;
      }> = [];
      
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['#1A365D', '#2A9D8F', '#E9C46A', '#8A1538'][Math.floor(Math.random() * 4)]
        });
      }
      
      function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, i) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = '#2A9D8F' + Math.floor((1 - distance / 100) * 40).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
        
        requestAnimationFrame(drawParticles);
      }
      
      drawParticles();
      
      return () => {
        if (container && canvas) {
          container.removeChild(canvas);
        }
      };
    };
    
    const cleanup = animateGeometricPattern();
    return cleanup;
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden geometric-pattern">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8 animate-slide-up">
            <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-6">
              Stop Risking Non-Compliance
            </div>
            <TypedHeading 
              englishText="Your reputation is at stake."
              arabicText="سمعتك على المحك"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navyTrust mb-6 leading-tight"
            />
            <p className="text-lg md:text-xl text-deepCharcoal/80 mb-8 max-w-xl">
              Your reputation is at stake. Don't let hidden compliance errors cost you clients. Our AI catches what humans miss – in half the time.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/demo" className="bg-mutedTeal text-white font-medium px-6 py-3 rounded-lg shadow-md flex items-center justify-center hover:bg-mutedTeal/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
                Eliminate Risk Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#features" className="border border-deepCharcoal/20 text-deepCharcoal font-medium px-6 py-3 rounded-lg flex items-center justify-center hover:bg-deepCharcoal/5 transition-all duration-300 transform hover:-translate-y-0.5">
                See How It Works
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">98% Accuracy Rate</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">UAE Data Hosting</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">60% Time Saved</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">Zero Compliance Risk</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div ref={animationRef} className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-gradient-to-br from-navyTrust/10 to-mutedTeal/10 backdrop-blur-sm border border-white/30 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform -rotate-6 opacity-90 floating-animation">
                    <div className="relative z-10 bg-white rounded-lg document-card-shadow p-5 max-w-xs feature-container">
                      <div className="flex items-center mb-4 pb-2 border-b border-softGray">
                        <div className="bg-gradient-to-r from-sandGold to-mutedTeal rounded-md p-1.5 mr-3 verification-badge">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-semibold text-navyTrust text-lg">Instant Verification</span>
                      </div>
                      <div className="h-20 bg-gradient-to-r from-navyTrust/5 to-mutedTeal/5 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
                          {features.map((feature, index) => (
                            <div 
                              key={index} 
                              className="h-20 w-full flex-shrink-0 flex items-center justify-center"
                              style={{ animation: activeFeature === index ? 'feature-slide-in 0.5s forwards' : 'none' }}
                            >
                              {feature.icon}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 px-1">
                        <div className="h-3 bg-gradient-to-r from-mutedTeal/30 to-mutedTeal/10 rounded-full w-full animate-pulse-soft"></div>
                        <div className="h-3 bg-gradient-to-r from-navyTrust/30 to-navyTrust/10 rounded-full w-3/4 animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-3 bg-gradient-to-r from-uaeRed/20 to-uaeRed/5 rounded-full w-5/6 animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <div className="mt-5 flex space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative document-approval-animation shadow-sm">
                          <Check className="h-4 w-4 text-green-600" />
                          <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></div>
                        </div>
                        <div className="flex-1 h-8 bg-gradient-to-r from-navyTrust/10 to-mutedTeal/5 rounded-md flex items-center px-3 overflow-hidden shadow-sm">
                          <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
                            {features.map((feature, index) => (
                              <span 
                                key={index} 
                                className="text-xs text-navyTrust font-medium whitespace-nowrap flex-shrink-0 w-full"
                                style={{ animation: activeFeature === index ? 'feature-slide-in 0.5s forwards' : 'none' }}
                              >
                                {feature.text}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-gradient-to-br from-sandGold/40 to-sandGold/20 backdrop-blur-md border border-white/20 animate-rotate-slow"></div>
              <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-gradient-to-br from-mutedTeal/40 to-mutedTeal/20 backdrop-blur-md border border-white/20 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-uaeRed/30 to-uaeRed/10 backdrop-blur-md border border-white/20 animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
