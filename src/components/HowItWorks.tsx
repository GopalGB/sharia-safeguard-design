
import React, { useState } from 'react';
import { FileUp, Search, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <FileUp className="h-14 w-14 text-mutedTeal" />,
      title: 'Upload',
      description: 'Upload documents in Arabic or English through our secure portal.'
    },
    {
      icon: <Search className="h-14 w-14 text-mutedTeal" />,
      title: 'Analyze',
      description: 'Our AI analyzes content against UAE regulations and Sharia principles.'
    },
    {
      icon: <ClipboardCheck className="h-14 w-14 text-mutedTeal" />,
      title: 'Review',
      description: 'Receive detailed compliance reports with specific recommendations.'
    },
    {
      icon: <CheckCircle className="h-14 w-14 text-mutedTeal" />,
      title: 'Implement',
      description: 'Make necessary changes with our guided assistance.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
            How ShariaGuard Works
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            Experience seamless compliance in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line with animated pulse effect */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-mutedTeal/20 via-mutedTeal to-mutedTeal/20 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-white/50 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 ${
                hoveredStep === index ? 'transform -translate-y-3 scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className={`bg-white rounded-full p-6 shadow-md mb-6 border border-softGray transition-all duration-300 ${
                hoveredStep === index ? 'shadow-lg bg-mutedTeal/5 border-mutedTeal/30' : ''
              }`}>
                <div className={`transition-transform duration-300 ${
                  hoveredStep === index ? 'animate-bounce-subtle' : ''
                }`}>
                  {step.icon}
                </div>
              </div>
              <span className={`inline-block bg-mutedTeal text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 absolute top-0 -right-1 transition-all duration-300 ${
                hoveredStep === index ? 'animate-highlight-pulse' : ''
              }`}>
                {index + 1}
              </span>
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                hoveredStep === index ? 'text-mutedTeal' : 'text-navyTrust'
              }`}>{step.title}</h3>
              <p className={`transition-all duration-300 ${
                hoveredStep === index ? 'text-deepCharcoal' : 'text-deepCharcoal/80'
              }`}>{step.description}</p>
              
              {/* Animated arrow that appears on hover */}
              <div className={`mt-4 transition-all duration-300 ${
                hoveredStep === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
              }`}>
                {index < steps.length - 1 ? (
                  <ArrowRight className="h-5 w-5 text-mutedTeal animate-pulse-soft" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-mutedTeal animate-pulse-soft" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/demo" 
            className="inline-flex items-center bg-mutedTeal text-white px-6 py-3 rounded-lg shadow-sm hover:bg-mutedTeal/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
          >
            <span>Start Your Compliance Journey</span>
            <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

