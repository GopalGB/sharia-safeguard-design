
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../../types/language';

interface NavbarMobileProps {
  language: Language;
  toggleLanguage: () => void;
  scrollToSection: (sectionId: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavbarMobile = ({ language, toggleLanguage, scrollToSection, isOpen, setIsOpen }: NavbarMobileProps) => {
  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-deepCharcoal p-2 rounded-md hover:bg-mutedTeal/10 transition-colors duration-300"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium py-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('features');
                  setIsOpen(false);
                }}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                {language === 'en' ? 'Features' : 'المميزات'}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('solutions');
                  setIsOpen(false);
                }}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                {language === 'en' ? 'Solutions' : 'الحلول'}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('trust');
                  setIsOpen(false);
                }}
                className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium w-full text-left"
              >
                {language === 'en' ? 'About' : 'عن الشركة'}
              </button>
            </li>
            <li>
              <Link to="/pricing" className="text-deepCharcoal hover:text-mutedTeal block py-2 font-medium" onClick={() => setIsOpen(false)}>
                {language === 'en' ? 'Pricing' : 'الأسعار'}
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <LanguageSwitcher 
                  language={language} 
                  toggleLanguage={toggleLanguage} 
                />
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
    </>
  );
};

export default NavbarMobile;
