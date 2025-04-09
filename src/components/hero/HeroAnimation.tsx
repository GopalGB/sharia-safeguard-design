
import React, { useEffect, useRef, ReactNode } from 'react';

interface HeroAnimationProps {
  children?: ReactNode;
}

const HeroAnimation = ({ children }: HeroAnimationProps) => {
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
    <div 
      ref={animationRef} 
      className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl bg-gradient-to-br from-navyTrust/10 to-mutedTeal/10 backdrop-blur-sm border border-white/30 shadow-xl flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default HeroAnimation;
