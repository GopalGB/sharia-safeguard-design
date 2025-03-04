
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white bg-opacity-90 backdrop-filter backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-navyTrust font-bold text-2xl">
            ShariaGuard
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#features" className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium">
                Features
              </a>
            </li>
            <li className="relative group">
              <button className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1" role="menu">
                  <a href="#" className="block px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white">For Legal Teams</a>
                  <a href="#" className="block px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white">For SMEs & Startups</a>
                  <a href="#" className="block px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white">For Government</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#about" className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium">
                Pricing
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium text-deepCharcoal">
              <Globe className="w-4 h-4 mr-1" />
              EN
            </button>
            <a href="#contact" className="bg-mutedTeal text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-opacity-90 button-hover-effect">
              Request Demo
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-deepCharcoal"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <a 
                href="#features" 
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#solutions" 
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <button className="flex items-center text-sm font-medium text-deepCharcoal">
                  <Globe className="w-4 h-4 mr-1" />
                  English
                </button>
                <a 
                  href="#contact" 
                  className="bg-mutedTeal text-white px-4 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Request Demo
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
