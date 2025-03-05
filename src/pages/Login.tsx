
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-lightSand flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block">
                <img 
                  src="/lovable-uploads/78b75dca-97fc-448a-b653-c6945c45ac1f.png" 
                  alt="ShariaGuard Logo" 
                  className="h-12 mx-auto"
                />
              </Link>
              <p className="text-deepCharcoal/60 mt-2">Sign in to your account</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deepCharcoal mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                  placeholder="Enter your email"
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
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-mutedTeal border-gray-300 rounded focus:ring-mutedTeal"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-deepCharcoal">
                  Remember me
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-mutedTeal text-white py-3 rounded-lg font-medium hover:bg-mutedTeal/90 transition-all duration-300 shadow-sm"
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
              <Link to="/" className="inline-flex items-center text-deepCharcoal/60 text-sm hover:text-mutedTeal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
