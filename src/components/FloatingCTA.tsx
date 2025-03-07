
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Shield } from 'lucide-react';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [animateAttention, setAnimateAttention] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling 500px
      if (window.scrollY > 500 && !dismissed) {
        setVisible(true);
        
        // Pulse animation after user has been on page for a while
        if (window.scrollY > 1200 && !animateAttention) {
          setTimeout(() => {
            setAnimateAttention(true);
            setTimeout(() => setAnimateAttention(false), 2000);
          }, 5000);
        }
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed, animateAttention]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className={`bg-white rounded-lg shadow-xl p-4 border border-mutedTeal/20 flex items-center ${animateAttention ? 'animate-pulse' : ''}`}>
        <div className="bg-mutedTeal/10 rounded-full p-2 mr-3 hidden sm:flex">
          <Shield className="h-8 w-8 text-mutedTeal" />
        </div>
        <div className="mr-4">
          <p className="font-semibold text-navyTrust text-sm">Ready to ensure compliance?</p>
          <p className="text-deepCharcoal/70 text-xs mt-1">Limited time offer: Free consultation</p>
        </div>
        <Link
          to="/demo"
          className="bg-mutedTeal text-white px-4 py-2 rounded-md flex items-center whitespace-nowrap transition-all hover:bg-mutedTeal/90 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <button 
          onClick={handleDismiss}
          className="ml-3 text-deepCharcoal/40 hover:text-deepCharcoal transition-colors p-1 hover:bg-softGray/50 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
