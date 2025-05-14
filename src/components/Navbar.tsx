
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import NavbarDesktop from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';
import AnimatedLogo from './navbar/AnimatedLogo';
import { Language } from '../types/language';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home and then scroll
      navigate('/#' + sectionId);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    // Here you would also update any i18n library or context if implemented
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };
  
  // Check if we're on the upload document page to add extra spacing
  const isUploadPage = location.pathname === '/upload-document';
  const navbarClasses = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-500", 
    scrolled 
      ? "bg-white bg-opacity-95 backdrop-filter backdrop-blur-md shadow-md py-2 animate-fade-in" 
      : "bg-transparent py-4"
  );
  
  return (
    <>
      <nav className={navbarClasses}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <AnimatedLogo size={scrolled ? "sm" : "md"} showText={true} />
          </div>

          {/* Desktop Navigation */}
          <NavbarDesktop 
            language={language}
            toggleLanguage={toggleLanguage}
            scrollToSection={scrollToSection}
          />

          {/* Mobile Navigation */}
          <NavbarMobile 
            language={language}
            toggleLanguage={toggleLanguage}
            scrollToSection={scrollToSection}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </nav>
      
      {/* Spacer div to prevent content from being hidden under the navbar */}
      <div className={`${isUploadPage ? 'h-20' : 'h-16'} w-full`} aria-hidden="true"></div>
    </>
  );
};

export default Navbar;
