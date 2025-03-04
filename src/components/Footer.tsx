
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navyTrust text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">ShariaGuard</h2>
              <p className="text-white/70 mt-3">
                AI-powered legal compliance platform designed specifically for the UAE and MENA region, combining cutting-edge technology with Islamic legal principles.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/70 hover:text-white transition-colors duration-300">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Compliance Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
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
                <span className="text-white/70">
                  info@shariaguard.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ShariaGuard. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
