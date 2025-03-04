
import React from 'react';
import { FileUp, Search, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="h-10 w-10 text-mutedTeal" />,
      title: 'Upload',
      description: 'Upload documents in Arabic or English through our secure portal.'
    },
    {
      icon: <Search className="h-10 w-10 text-mutedTeal" />,
      title: 'Analyze',
      description: 'Our AI analyzes content against UAE regulations and Sharia principles.'
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-mutedTeal" />,
      title: 'Review',
      description: 'Receive detailed compliance reports with specific recommendations.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-mutedTeal" />,
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
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-mutedTeal/20 via-mutedTeal to-mutedTeal/20 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="bg-white rounded-full p-6 shadow-md mb-6 border border-softGray">
                {step.icon}
              </div>
              <span className="inline-block bg-mutedTeal text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 absolute top-0 -right-1">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-navyTrust mb-3">{step.title}</h3>
              <p className="text-deepCharcoal/80">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/demo" 
            className="inline-flex items-center bg-mutedTeal text-white px-6 py-3 rounded-lg shadow-sm hover:bg-mutedTeal/90 transition-all duration-300"
          >
            Start Your Compliance Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
