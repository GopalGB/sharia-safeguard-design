
import React, { useState, useEffect, useRef } from 'react';

interface TypedHeadingProps {
  englishText: string;
  arabicText: string;
  className?: string;
}

const TypedHeading: React.FC<TypedHeadingProps> = ({ 
  englishText, 
  arabicText, 
  className = ""
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState(100); // Faster initial typing
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = isEnglish ? englishText : arabicText;
      
      // When deleting
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(35); // Faster deletion
        
        // When done deleting, switch language and start typing again
        if (currentText === '') {
          setIsDeleting(false);
          setIsEnglish(!isEnglish);
          setTypingSpeed(100);
        }
      } 
      // When typing
      else {
        setCurrentText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(100); // Normal typing speed
        
        // When done typing current language, pause then start deleting
        if (currentText === currentFullText) {
          setTypingSpeed(2000); // Longer pause before deletion
          setIsDeleting(true);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, isEnglish, englishText, arabicText, typingSpeed]);

  return (
    <h1 className={className}>
      <span className="text-gradient">{currentText}</span>
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypedHeading;
