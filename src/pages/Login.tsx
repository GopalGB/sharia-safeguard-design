
import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '@/lib/api-client';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hooks
  const navigate = useNavigate();
  const { toast } = useToast();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Validate form
    if (!email || !password) {
      setErrorMessage('Please enter your email and password');
      return;
    }
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Attempt login
      await authApi.login(email, password);
      
      // On success, show success toast
      toast({
        title: 'Login successful',
        description: 'Welcome back to ShariaGuard',
        variant: 'success',
      });
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      // On error, show error message
      console.error('Login error:', error);
      setErrorMessage('Invalid email or password');
      
      // Show error toast
      toast({
        title: 'Login Failed',
        description: 'Please check your credentials and try again',
        variant: 'destructive',
      });
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

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
            
            {errorMessage && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm">
                {errorMessage}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deepCharcoal mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                  placeholder="Enter your email"
                  disabled={isLoading}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                  placeholder="Enter your password"
                  disabled={isLoading}
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-mutedTeal border-gray-300 rounded focus:ring-mutedTeal"
                  disabled={isLoading}
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-deepCharcoal">
                  Remember me
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-mutedTeal text-white py-3 rounded-lg font-medium hover:bg-mutedTeal/90 transition-all duration-300 shadow-sm flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
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
