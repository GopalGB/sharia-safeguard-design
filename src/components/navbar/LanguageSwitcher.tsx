
import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../../types/language';

interface LanguageSwitcherProps {
  language: Language;
  toggleLanguage: () => void;
  className?: string;
}

const LanguageSwitcher = ({ language, toggleLanguage, className = '' }: LanguageSwitcherProps) => {
  return (
    <button 
      onClick={toggleLanguage} 
      className={`flex items-center text-sm font-medium text-deepCharcoal hover:text-mutedTeal transition-colors duration-300 hover:scale-105 ${className}`}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 mr-1" />
      {language === 'en' ? 'AR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
