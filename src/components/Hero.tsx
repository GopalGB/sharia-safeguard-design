
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, Check, FileCheck, Scale, Gavel, Award, CheckCircle, Lock } from 'lucide-react';
import TypedHeading from "./TypedHeading";

const Hero = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [animateElements, setAnimateElements] = useState(false);
  const [documentAnimState, setDocumentAnimState] = useState(0);
  
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
    setTimeout(() => {
      setAnimateElements(true);
    }, 300);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    const docAnimInterval = setInterval(() => {
      setDocumentAnimState(prev => (prev + 1) % 4);
    }, 2500);
    
    return () => {
      clearInterval(interval);
      clearInterval(docAnimInterval);
    };
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
          <div className="md:w-1/2 md:pr-8">
            <div 
              className={`inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Stop Risking Non-Compliance
            </div>
            <div className={`transition-all duration-700 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                style={{ transitionDelay: '300ms' }}>
              <TypedHeading 
                englishText="Code & Creed. Perfected."
                arabicText="الرمز والعقيدة. مُتقَن."
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-navyTrust mb-6 leading-tight"
              />
            </div>
            <p 
              className={`text-lg md:text-xl text-deepCharcoal/80 mb-8 max-w-xl transition-all duration-700 ${
                animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Missing one compliance detail can destroy your reputation. Our AI finds what others miss.
            </p>
            <div 
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${
                animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Link to="/demo" className="bg-mutedTeal text-white font-medium px-6 py-3 rounded-lg shadow-md flex items-center justify-center hover:bg-mutedTeal/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Eliminate Risk Now</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-navyTrust to-mutedTeal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <a href="#features" className="border border-deepCharcoal/20 text-deepCharcoal font-medium px-6 py-3 rounded-lg flex items-center justify-center hover:bg-deepCharcoal/5 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group">
                <span className="relative z-10">See How It Works</span>
                <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-mutedTeal to-navyTrust w-0 group-hover:w-full transition-all duration-500"></span>
              </a>
            </div>
            <div 
              className={`grid grid-cols-2 gap-4 max-w-md transition-all duration-700 ${
                animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`} 
              style={{ transitionDelay: '900ms' }}
            >
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
          <div 
            className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative">
              <div ref={animationRef} className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-gradient-to-br from-navyTrust/10 to-mutedTeal/10 backdrop-blur-sm border border-white/30 shadow-xl flex items-center justify-center overflow-hidden animate-pulse-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform -rotate-6 opacity-90 floating-animation">
                    <div className="relative z-10 bg-white rounded-lg document-card-shadow p-5 max-w-xs feature-container">
                      <div className="flex items-center mb-4 pb-2 border-b border-softGray">
                        <div className="bg-gradient-to-r from-navyTrust to-mutedTeal rounded-md p-1.5 mr-3 verification-badge group animate-border-glow hover:scale-105 transition-transform duration-300">
                          <Scale className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <span className="font-semibold text-navyTrust text-lg tracking-tight">Legal Verification</span>
                        <Lock className="h-4 w-4 text-mutedTeal ml-2 animate-pulse-soft" />
                      </div>
                      
                      <div className="relative h-28 mb-4 perspective-effect">
                        <div className="absolute inset-0 bg-softGray/70 rounded-md flex items-center justify-center transform transition-all duration-500 hover:translate-y-[-1px]">
                          <FileText className="h-10 w-10 text-deepCharcoal/40" />
                        </div>
                        
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r from-navyTrust/10 to-navyTrust/5 rounded-md flex items-center justify-center transform transition-all duration-700 shadow-md ${
                            documentAnimState >= 1 ? 'translate-y-[-6px] translate-x-[-6px]' : ''
                          }`}
                        >
                          <FileCheck className={`h-10 w-10 ${documentAnimState >= 1 ? 'text-navyTrust' : 'text-deepCharcoal/40'} transition-colors duration-700`} />
                        </div>
                        
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r from-mutedTeal/10 to-mutedTeal/5 rounded-md flex items-center justify-center transform transition-all duration-700 shadow-md ${
                            documentAnimState >= 2 ? 'translate-y-[-12px] translate-x-[-12px]' : ''
                          }`}
                        >
                          <Scale className={`h-10 w-10 ${documentAnimState >= 2 ? 'text-mutedTeal' : 'text-deepCharcoal/40'} transition-colors duration-700`} />
                        </div>
                        
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r from-sandGold/10 to-sandGold/5 rounded-md flex items-center justify-center transform transition-all duration-700 shadow-md ${
                            documentAnimState >= 3 ? 'translate-y-[-18px] translate-x-[-18px]' : ''
                          }`}
                        >
                          <Gavel className={`h-10 w-10 ${documentAnimState >= 3 ? 'text-sandGold' : 'text-deepCharcoal/40'} transition-colors duration-700`} />
                        </div>
                      </div>
                      
                      <div className="space-y-2.5 px-1">
                        <div className="flex items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-mutedTeal mr-2 flex-shrink-0" />
                          <div className="h-3 bg-gradient-to-r from-mutedTeal/30 to-mutedTeal/10 rounded-full w-full animate-pulse-soft"></div>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-navyTrust mr-2 flex-shrink-0" />
                          <div className="h-3 bg-gradient-to-r from-navyTrust/30 to-navyTrust/10 rounded-full w-3/4 animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-uaeRed mr-2 flex-shrink-0" />
                          <div className="h-3 bg-gradient-to-r from-uaeRed/20 to-uaeRed/5 rounded-full w-5/6 animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                      <div className="mt-5 flex space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative document-approval-animation shadow-sm overflow-hidden">
                          <Check className="h-4 w-4 text-green-600 z-10" />
                          <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></div>
                          <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
                        </div>
                        <div className="flex-1 h-8 bg-gradient-to-r from-navyTrust/10 to-mutedTeal/5 rounded-md flex items-center px-3 overflow-hidden shadow-sm relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
                            {features.map((feature, index) => (
                              <span 
                                key={index} 
                                className="text-xs text-navyTrust font-medium whitespace-nowrap flex-shrink-0 w-full flex items-center"
                                style={{ animation: activeFeature === index ? 'feature-slide-in 0.5s forwards' : 'none' }}
                              >
                                {React.cloneElement(feature.icon, { className: "h-3.5 w-3.5 mr-1.5" })}
                                {feature.text}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 filter drop-shadow-lg">
                        <div className="absolute inset-0 bg-navyTrust rounded-full opacity-10 animate-pulse"></div>
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center border-2 border-navyTrust shadow-md hover:scale-105 transition-transform duration-300 group cursor-pointer">
                          <Award className="absolute h-5 w-5 text-navyTrust/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-[-30deg] group-hover:rotate-0 transition-transform duration-300" />
                          <div className="text-navyTrust text-xs font-serif animate-rotate-slow group-hover:opacity-0 transition-opacity duration-300">CERTIFIED</div>
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
