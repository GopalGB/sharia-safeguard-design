
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, FileText, Check } from 'lucide-react';

const Hero = () => {
  const animationRef = useRef<HTMLDivElement>(null);

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
      
      // Create particles
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['#1A365D', '#2A9D8F', '#E9C46A'][Math.floor(Math.random() * 3)]
        });
      }
      
      function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, i) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          
          // Connect particles
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
              AI-Powered Legal Compliance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navyTrust mb-6 leading-tight">
              Code & Creed. <span className="text-gradient">Perfected.</span>
            </h1>
            <p className="text-lg md:text-xl text-deepCharcoal/80 mb-8 max-w-xl">
              The premier AI-driven legal automation platform focused on Sharia compliance in UAE & MENA regions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#demo" className="bg-mutedTeal text-white font-medium px-6 py-3 rounded-lg shadow-sm flex items-center justify-center hover:bg-mutedTeal/90 transition-all duration-300 button-hover-effect">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="border border-deepCharcoal/20 text-deepCharcoal font-medium px-6 py-3 rounded-lg flex items-center justify-center hover:bg-deepCharcoal/5 transition-all duration-300">
                Learn More
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">98% Accuracy in Arabic NLP</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">UAE Data Hosting</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">Bilingual Support</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-mutedTeal" />
                </div>
                <div className="ml-2">
                  <p className="text-sm text-deepCharcoal font-medium">Sharia Compliant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div ref={animationRef} className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-gradient-to-br from-navyTrust/5 to-mutedTeal/5 backdrop-blur-sm border border-white/20 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform -rotate-6 opacity-80 floating-animation">
                    <div className="relative z-10 bg-white rounded-lg shadow-lg p-5 max-w-xs">
                      <div className="flex items-center mb-4">
                        <Shield className="h-6 w-6 text-mutedTeal mr-3" />
                        <span className="font-semibold text-navyTrust">Document Verification</span>
                      </div>
                      <div className="h-16 bg-mutedTeal/10 rounded-md mb-4 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-mutedTeal opacity-70" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-mutedTeal/20 rounded-full w-full animate-pulse-soft"></div>
                        <div className="h-3 bg-mutedTeal/20 rounded-full w-3/4 animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-3 bg-mutedTeal/20 rounded-full w-5/6 animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1 h-8 bg-navyTrust/10 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-sandGold/20 backdrop-blur-md border border-white/20 animate-rotate-slow"></div>
              <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-mutedTeal/20 backdrop-blur-md border border-white/20 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
