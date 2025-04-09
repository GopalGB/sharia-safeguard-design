
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = ({ animateElements }: { animateElements: boolean }) => {
  return (
    <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${
      animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`} style={{
      transitionDelay: '700ms'
    }}>
      <Link to="/demo" className="bg-mutedTeal text-white font-medium px-6 py-3 rounded-lg shadow-md flex items-center justify-center hover:bg-mutedTeal/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group">
        <span className="relative z-10">Eliminate Risk Now</span>
        <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
        <span className="absolute inset-0 bg-gradient-to-r from-navyTrust to-mutedTeal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Link>
      <a href="#features" className="border border-deepCharcoal/20 text-deepCharcoal font-medium px-6 py-3 rounded-lg flex items-center justify-center hover:bg-deepCharcoal/5 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group">
        <span className="relative z-10">See How It Works</span>
        <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-mutedTeal to-navyTrust w-0 group-hover:w-full transition-all duration-500"></span>
      </a>
    </div>
  );
};

export default CallToAction;
