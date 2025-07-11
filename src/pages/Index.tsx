
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import FAQ from '@/components/FAQ';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import PageTransition from '@/components/PageTransition';
import { AnimatedGrid, ScrollProgressRing } from '@/components/VisualElements';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Welcome to ShariaGuard",
        description: "Experience the future of compliance verification",
        duration: 5000,
      });
    }, 1500);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Enhanced scroll animations with Intersection Observer
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '-20px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const ratio = entry.intersectionRatio;
        
        // Apply different animations based on scroll progress
        if (ratio > 0.1) {
          element.style.transform = `translateY(${(1 - ratio) * 50}px) scale(${0.95 + ratio * 0.05})`;
          element.style.opacity = `${Math.min(ratio * 1.2, 1)}`;
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
        
        // Parallax effect for specific elements
        if (element.classList.contains('parallax-element')) {
          const scrollY = window.scrollY;
          const rate = scrollY * -0.3;
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        
        // Floating animations
        if (element.classList.contains('floating-element')) {
          const scrollY = window.scrollY;
          const rate = Math.sin(scrollY * 0.002) * 10;
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section, .animate-section');
    sections.forEach(section => observer.observe(section));
    
    // Advanced scroll effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Update scroll progress
      const progressBar = document.getElementById('scroll-progress') as HTMLElement;
      if (progressBar) {
        const progress = Math.min(scrollY / docHeight, 1);
        progressBar.style.transform = `scaleX(${progress})`;
      }
      
      // Background parallax with easing
      const hero = document.querySelector('.hero-section') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
      
      // Reveal animations with stagger and elastic easing
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.85) {
          setTimeout(() => {
            element.classList.add('revealed');
          }, index * 150);
        }
      });
      
      // Enhanced scale elements with rotation
      const scaleElements = document.querySelectorAll('.scale-on-scroll');
      scaleElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        const scale = 0.8 + (progress * 0.2);
        const rotate = (1 - progress) * 2;
        (element as HTMLElement).style.transform = `scale(${scale}) rotateX(${rotate}deg)`;
      });
      
      // Parallax elements with depth
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        (element as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      // Magnetic hover effect on scroll
      const magneticElements = document.querySelectorAll('.magnetic-hover');
      magneticElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const centerX = rect.left + rect.width / 2;
        const mouseY = windowHeight / 2;
        const mouseX = window.innerWidth / 2;
        
        const deltaX = (mouseX - centerX) * 0.05;
        const deltaY = (mouseY - centerY) * 0.05;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          (element as HTMLElement).style.transform += ` translate(${deltaX}px, ${deltaY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [toast]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <AnimatedGrid />
        <Navbar />
        
        {/* Enhanced floating background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="floating-element absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-2xl shimmer"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-xl shimmer"></div>
          <div className="floating-element absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl shimmer"></div>
          <div className="floating-element absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl shimmer"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg shimmer"></div>
        </div>
        
        <main className="flex-grow pt-0 relative z-10">
          <section className="hero-section animate-section parallax-container">
            <Hero />
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out magnetic-hover">
            <div className="relative">
              <Features />
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl floating-element"></div>
            </div>
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out scale-on-scroll">
            <div className="relative">
              <HowItWorks />
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-lg floating-element"></div>
            </div>
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out parallax-element">
            <div className="relative">
              <Solutions />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-accent/15 to-secondary/15 rounded-full blur-md floating-element"></div>
            </div>
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out magnetic-hover">
            <div className="relative">
              <Integrations />
              <div className="absolute -top-8 left-1/4 w-8 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm floating-element"></div>
            </div>
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out scale-on-scroll">
            <FAQ />
          </section>
          
          <section className="animate-section reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1200 ease-out">
            <Trust />
          </section>
        </main>
        
        <Footer />
        <FloatingCTA />
        <ScrollProgressRing />
        
        {/* Enhanced scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 transition-transform duration-500 ease-out z-50 glow" 
             id="scroll-progress"></div>
             
        {/* Ambient light effect */}
        <div className="fixed inset-0 bg-gradient-radial from-transparent via-primary/5 to-transparent pointer-events-none z-0"></div>
      </div>
    </PageTransition>
  );
};

export default Index;
