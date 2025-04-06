
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, Globe, ChevronDown, LogIn, Shield, Home } from 'lucide-react';

// Create a language context
export type Language = 'en' | 'ar';

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
  
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500", 
      scrolled ? "bg-white bg-opacity-95 backdrop-filter backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/389d5a05-7129-42d5-bec5-e81650db6590.png" 
              alt="ShariaGuard Logo" 
              className="h-14 md:h-16 transition-all duration-300 object-fill group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium text-base transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300"
              >
                Features
              </button>
            </li>
            <li className="relative group">
              <button className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium text-base transition-all duration-300">
                Solutions <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-1" role="menu">
                  <button 
                    onClick={() => scrollToSection('solutions')} 
                    className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
                  >
                    For Legal Teams
                  </button>
                  <button 
                    onClick={() => scrollToSection('solutions')} 
                    className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
                  >
                    For SMEs & Startups
                  </button>
                  <button 
                    onClick={() => scrollToSection('solutions')} 
                    className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
                  >
                    For Government
                  </button>
                </div>
              </div>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('trust')} 
                className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300"
              >
                About
              </button>
            </li>
            <li>
              <Link to="/pricing" className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300">
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center text-sm font-medium text-deepCharcoal hover:text-mutedTeal transition-colors duration-300"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <Link to="/login" className="flex items-center text-navyTrust font-medium px-4 py-2 rounded-md border border-navyTrust hover:bg-navyTrust hover:text-white transition-all duration-300">
              <LogIn className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Login' : 'تسجيل الدخول'}
            </Link>
            <Link to="/demo" className="bg-mutedTeal text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-opacity-90 button-hover-effect shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              {language === 'en' ? 'Request Demo' : 'طلب عرض توضيحي'}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-deepCharcoal p-2 rounded-md hover:bg-mutedTeal/10 transition-colors duration-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium py-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('trust')}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                About
              </button>
            </li>
            <li>
              <Link to="/pricing" className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <button 
                  onClick={toggleLanguage} 
                  className="flex items-center text-sm font-medium text-deepCharcoal"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'en' ? 'Arabic' : 'English'}
                </button>
                <div className="flex space-x-2">
                  <Link to="/login" className="flex items-center text-navyTrust border border-navyTrust px-3 py-2 rounded-md hover:bg-navyTrust hover:text-white transition-colors duration-300" onClick={() => setIsOpen(false)}>
                    <LogIn className="w-4 h-4 mr-1" />
                    {language === 'en' ? 'Login' : 'تسجيل الدخول'}
                  </Link>
                  <Link to="/demo" className="bg-mutedTeal text-white px-3 py-2 rounded-md hover:bg-mutedTeal/90 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                    {language === 'en' ? 'Request Demo' : 'طلب عرض'}
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
