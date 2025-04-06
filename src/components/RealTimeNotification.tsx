
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  onClose?: () => void;
}

const RealTimeNotification: React.FC<NotificationProps> = ({
  message,
  type,
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const typeStyles = {
    info: 'bg-blue-50 border-blue-500 text-blue-800',
    success: 'bg-green-50 border-green-500 text-green-800',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
    error: 'bg-red-50 border-red-500 text-red-800'
  };

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-sm w-full shadow-lg rounded-lg border-l-4 ${typeStyles[type]} animate-slide-in-right`}>
      <div className="p-4 flex items-start">
        <div className="flex-grow">
          <p className="text-sm">{message}</p>
        </div>
        <button 
          onClick={handleClose} 
          className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default RealTimeNotification;
