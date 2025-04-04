
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";
import PageTransition from '@/components/PageTransition';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // This would connect to a backend to handle the password reset
    setSubmitted(true);
    toast.success("Password reset link sent to your email");
  };

  return (
    <PageTransition direction="right">
      <div className="min-h-screen bg-gradient-to-b from-lightSand to-white flex flex-col">
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <Link to="/login" className="inline-flex items-center text-deepCharcoal/60 text-sm hover:text-mutedTeal transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to login
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
                <p className="text-deepCharcoal/60 mt-2">Reset your password</p>
              </div>
              
              {!submitted ? (
                <>
                  <p className="text-deepCharcoal/80 mb-6">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                  
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
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-navyTrust to-mutedTeal text-white py-3 rounded-lg font-medium hover:opacity-95 transition-all duration-300 shadow-sm"
                    >
                      Send Reset Link
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                    Check your email for a reset link. It will be valid for 30 minutes.
                  </div>
                  <p className="text-deepCharcoal/80 mb-6">
                    Didn't receive an email? Check your spam folder or try again.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-mutedTeal hover:text-mutedTeal/80 font-medium"
                  >
                    Try again
                  </button>
                </div>
              )}
              
              <div className="mt-8 text-center">
                <p className="text-deepCharcoal/60 text-sm">
                  Remember your password?{' '}
                  <Link to="/login" className="text-mutedTeal hover:text-mutedTeal/80 font-medium">
                    Back to login
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
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

export default ForgotPassword;
