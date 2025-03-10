
import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Initial entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Setup navigation listener for exit animations
    const handleBeforeUnload = () => {
      setIsExiting(true);
      return null;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${isExiting ? 'opacity-0 -translate-y-4' : ''}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
