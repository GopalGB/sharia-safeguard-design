
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, LogIn } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../../types/language';

interface NavbarDesktopProps {
  language: Language;
  toggleLanguage: () => void;
  scrollToSection: (sectionId: string) => void;
}

const NavbarDesktop = ({ language, toggleLanguage, scrollToSection }: NavbarDesktopProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8 animate-fade-in">
      <ul className="flex space-x-8">
        <li>
          <Link 
            to="/" 
            className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium text-base transition-all duration-300 hover:scale-105"
          >
            {language === 'en' ? 'Home' : 'الرئيسية'}
          </Link>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300 hover:scale-105"
          >
            {language === 'en' ? 'Features' : 'المميزات'}
          </button>
        </li>
        <li className="relative group">
          <button className="text-deepCharcoal hover:text-mutedTeal flex items-center font-medium text-base transition-all duration-300 hover:scale-105">
            {language === 'en' ? 'Solutions' : 'الحلول'} 
            <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
          </button>
          <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0 animate-fade-in">
            <div className="py-1" role="menu">
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
              >
                {language === 'en' ? 'For Legal Teams' : 'للفرق القانونية'}
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
              >
                {language === 'en' ? 'For SMEs & Startups' : 'للشركات الصغيرة والناشئة'}
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="block w-full text-left px-4 py-2 text-sm text-deepCharcoal hover:bg-mutedTeal hover:text-white transition-colors duration-200"
              >
                {language === 'en' ? 'For Government' : 'للحكومات'}
              </button>
            </div>
          </div>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('trust')} 
            className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300 hover:scale-105"
          >
            {language === 'en' ? 'About' : 'عن الشركة'}
          </button>
        </li>
        <li>
          <Link to="/pricing" className="text-deepCharcoal hover:text-mutedTeal link-underline font-medium text-base transition-all duration-300 hover:scale-105">
            {language === 'en' ? 'Pricing' : 'الأسعار'}
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
        <Link to="/login" className="flex items-center text-navyTrust font-medium px-4 py-2 rounded-md border border-navyTrust hover:bg-navyTrust hover:text-white transition-all duration-300 hover:scale-105">
          <LogIn className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Login' : 'تسجيل الدخول'}
        </Link>
        <Link to="/demo" className="bg-mutedTeal text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-opacity-90 button-hover-effect shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          {language === 'en' ? 'Request Demo' : 'طلب عرض توضيحي'}
        </Link>
      </div>
    </div>
  );
};

export default NavbarDesktop;
