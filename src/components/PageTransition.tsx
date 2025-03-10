
import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  delay = 100,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Map directions to appropriate transform classes
  const directionMap = {
    up: {
      hidden: 'translate-y-4',
      exit: '-translate-y-4'
    },
    down: {
      hidden: '-translate-y-4',
      exit: 'translate-y-4'
    },
    left: {
      hidden: 'translate-x-4',
      exit: '-translate-x-4'
    },
    right: {
      hidden: '-translate-x-4',
      exit: 'translate-x-4'
    }
  };

  useEffect(() => {
    // Initial entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

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
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionMap[direction].hidden}`
      } ${isExiting ? `opacity-0 ${directionMap[direction].exit}` : ''}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
