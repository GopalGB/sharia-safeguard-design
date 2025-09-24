import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

// Inline PageTransition component
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

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    toast.success("Logging in...");
    // Authentication would happen here
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-lightSand to-white flex flex-col">
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <Link to="/" className="inline-flex items-center text-deepCharcoal/60 text-sm hover:text-mutedTeal transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to home
          </Link>
        </div>
        
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-softGray/50">
              <div className="text-center mb-8">
                <Link to="/" className="inline-block">
                  <img 
                    src="/lovable-uploads/78b75dca-97fc-448a-b653-c6945c45ac1f.png" 
                    alt="ShariaGuard Logo" 
                    className="h-16 mx-auto" 
                  />
                </Link>
                <p className="text-deepCharcoal/60 mt-2">Sign in to your account</p>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deepCharcoal mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    dir="ltr"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-deepCharcoal">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-mutedTeal hover:text-mutedTeal/80">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-mutedTeal border-gray-300 rounded focus:ring-mutedTeal"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-deepCharcoal">
                    Remember me
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-navyTrust to-mutedTeal text-white py-3 rounded-lg font-medium hover:opacity-95 transition-all duration-300 shadow-sm"
                >
                  Sign In
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-deepCharcoal/60 text-sm">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-mutedTeal hover:text-mutedTeal/80 font-medium">
                    Create account
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-4">
                  <Link to="/terms-of-service" className="text-deepCharcoal/70 hover:text-mutedTeal transition-colors">
                    Terms of Service
                  </Link>
                  <span className="text-deepCharcoal/40">•</span>
                  <Link to="/privacy-policy" className="text-deepCharcoal/70 hover:text-mutedTeal transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                <div className="mt-4 text-center text-xs text-deepCharcoal/50">
                  © {new Date().getFullYear()} ShariaGuard. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-sandGold/20 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-b from-mutedTeal/10 to-transparent rounded-full blur-3xl -z-10"></div>
      </div>
    </PageTransition>
  );
};

export default Login1;