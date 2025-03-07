
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-navyTrust to-navyTrust/95 text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/78b75dca-97fc-448a-b653-c6945c45ac1f.png" 
                alt="ShariaGuard Logo" 
                className="h-12 mb-4 invert brightness-0 opacity-90"
              />
              <p className="text-white/70 mt-3">
                AI-powered legal compliance platform designed specifically for the UAE and MENA region, combining cutting-edge technology with Islamic legal principles.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Compliance Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2 w-1 h-1 bg-mutedTeal rounded-full"></span>
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-mutedTeal mr-3 flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  DIFC Innovation Hub, Gate Avenue, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-mutedTeal mr-3 flex-shrink-0" />
                <span className="text-white/70">
                  +971 4 123 4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-mutedTeal mr-3 flex-shrink-0" />
                <a href="mailto:info@shariaguard.com" className="text-white/70 hover:text-white transition-colors">
                  info@shariaguard.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6 bg-white/10 p-4 rounded-lg">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-mutedTeal mr-2" />
                <span className="text-sm font-medium">UAE Data Protection Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} ShariaGuard. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
            <div className="hidden md:flex items-center text-white/30">
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <span className="mr-1">🇦🇪</span> UAE Based
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
