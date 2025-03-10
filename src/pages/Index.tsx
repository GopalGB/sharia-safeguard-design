
import React, { useEffect } from 'react';
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
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
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
            top: targetElement.offsetTop - 80, // Offset for the navbar
            behavior: 'smooth'
          });
        }
      });
    });

    // Add animation trigger on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      // Stagger animations
      const staggerContainers = document.querySelectorAll('.stagger-container');
      staggerContainers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        if (containerTop < window.innerHeight * 0.8) {
          const staggerItems = container.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * 100);
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toast]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <Solutions />
          <Integrations />
          <FAQ />
          <Trust />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </PageTransition>
  );
};

export default Index;
