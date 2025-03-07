
import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-6 animate-pulse">
              Coming Soon
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6 animate-fade-in">
              We're Working On Something Amazing
            </h1>
            <p className="text-lg text-deepCharcoal/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              This page is currently under construction. We're working hard to bring you valuable content and resources. Please check back soon.
            </p>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex justify-center mb-6">
                <div className="bg-mutedTeal/10 rounded-full p-4">
                  <Calendar className="h-12 w-12 text-mutedTeal" />
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-navyTrust mb-4">
                Want to be notified when we launch?
              </h2>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal"
                />
                <button
                  type="submit"
                  className="bg-mutedTeal text-white px-6 py-3 rounded-lg hover:bg-mutedTeal/90 transition-colors shadow-sm"
                >
                  Notify Me
                </button>
              </form>
            </div>
            
            <Link to="/" className="inline-flex items-center text-deepCharcoal/60 hover:text-mutedTeal transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
