
import React, { useState, useEffect } from 'react';
import { FileUp, Search, ClipboardCheck, CheckCircle, ArrowRight, PlayCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-it-works');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      // If the top of the element is in the viewport
      if (position.top < window.innerHeight * 0.75) {
        setVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <FileUp className="h-14 w-14 text-mutedTeal" />,
      title: 'Upload',
      description: 'Upload documents in Arabic or English through our secure portal.',
      demo: {
        title: 'Upload Documents',
        content: (
          <div className="space-y-4">
            <p className="text-deepCharcoal">Our secure document upload portal accepts:</p>
            <ul className="list-disc list-inside space-y-2 text-deepCharcoal/90">
              <li>PDF contracts and legal documents</li>
              <li>Microsoft Word files (.docx)</li>
              <li>Plain text files (.txt)</li>
              <li>Scanned documents with OCR support</li>
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 relative">
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white">
                <div className="text-center">
                  <FileUp className="mx-auto h-12 w-12 text-mutedTeal/60" />
                  <p className="mt-2 text-sm text-gray-600">Drag & drop files here or click to browse</p>
                  <button className="mt-3 px-4 py-2 bg-mutedTeal text-white rounded-md hover:bg-mutedTeal/90 transition-colors">
                    Select Files
                  </button>
                </div>
              </div>
              <div className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-500">
                Document Upload Interface
              </div>
            </div>
          </div>
        )
      }
    },
    {
      icon: <Search className="h-14 w-14 text-mutedTeal" />,
      title: 'Analyze',
      description: 'Our AI analyzes content against UAE regulations and Sharia principles.',
      demo: {
        title: 'AI Analysis in Progress',
        content: (
          <div className="space-y-4">
            <p className="text-deepCharcoal">Our AI engine performs multiple checks:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-green-500 rounded-full w-full"></div>
                    <p className="text-sm text-gray-600 mt-1">Interest (Riba) clause detection</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-green-500 rounded-full w-full"></div>
                    <p className="text-sm text-gray-600 mt-1">Gharar (uncertainty) assessment</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 rounded-full border-2 border-blue-600 border-t-transparent animate-spin"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-blue-500 rounded-full w-3/4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-300 animate-pulse"></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">UAE legal framework compliance</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <p className="text-sm text-gray-600 mt-1">Financial risk analysis</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-500">
                Real-time Analysis Panel
              </div>
            </div>
            <p className="text-sm text-center text-mutedTeal/80 italic">
              Average processing time: 3-5 minutes for a 30-page document
            </p>
          </div>
        )
      }
    },
    {
      icon: <ClipboardCheck className="h-14 w-14 text-mutedTeal" />,
      title: 'Review',
      description: 'Receive detailed compliance reports with specific recommendations.',
      demo: {
        title: 'Compliance Report',
        content: (
          <div className="space-y-4">
            <p className="text-deepCharcoal">Your comprehensive compliance report includes:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <h4 className="font-medium text-navyTrust">Contract Analysis Summary</h4>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">85% Compliant</span>
                </div>
                
                <div className="pt-3 space-y-4">
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                    <h5 className="font-medium text-red-700 flex items-center">
                      <X className="h-4 w-4 mr-1" /> Critical Issue
                    </h5>
                    <p className="text-sm text-gray-700">Section 4.2: Interest-bearing penalties violate Sharia principles</p>
                    <div className="mt-1 text-xs text-gray-500">
                      <span className="font-medium">Recommendation:</span> Replace with alternative late payment compensation structure.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <h5 className="font-medium text-yellow-700">Medium Risk</h5>
                    <p className="text-sm text-gray-700">Section 7.1: Ambiguous delivery terms create excessive gharar</p>
                    <div className="mt-1 text-xs text-gray-500">
                      <span className="font-medium">Recommendation:</span> Add specific timeframes and conditions.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                    <h5 className="font-medium text-green-700">Compliant Sections</h5>
                    <p className="text-sm text-gray-700">Sections 1, 2, 3, 5, 6, 8, 9, 10</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-500">
                Sample Report
              </div>
            </div>
          </div>
        )
      }
    },
    {
      icon: <CheckCircle className="h-14 w-14 text-mutedTeal" />,
      title: 'Implement',
      description: 'Make necessary changes with our guided assistance.',
      demo: {
        title: 'Guided Implementation',
        content: (
          <div className="space-y-4">
            <p className="text-deepCharcoal">Our platform helps you implement the necessary changes:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 relative">
              <div className="bg-white p-4 rounded shadow-sm space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Original Clause (Section 4.2):</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded border border-gray-200 my-1">
                      "In the event of late payment, the Client shall pay interest at a rate of 5% per month on the outstanding amount..."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Suggested Sharia-Compliant Alternative:</p>
                    <p className="text-sm text-gray-700 bg-green-50 p-2 rounded border border-green-200 my-1">
                      "In the event of late payment, the Client shall pay a fixed late payment charge of AED [amount] to cover administrative costs, with the remaining amount donated to charity..."
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 bg-mutedTeal text-white text-sm rounded hover:bg-mutedTeal/90 transition-colors">
                    Apply Change
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 text-sm rounded hover:bg-gray-50 transition-colors">
                    Edit Suggestion
                  </button>
                </div>
              </div>
              <div className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-500">
                Implementation Assistant
              </div>
            </div>
          </div>
        )
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4 animate-border-glow">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6 relative">
            How ShariaGuard Works
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-mutedTeal to-navyTrust transform -translate-x-1/2 animate-gradient-shift"></span>
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            Experience seamless compliance in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line with animated pulse effect */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-mutedTeal/20 via-mutedTeal to-mutedTeal/20 z-0 overflow-hidden animate-gradient-shift" style={{ backgroundSize: '200% 100%' }}>
            <div className="absolute inset-0 bg-white/50 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${hoveredStep === index ? 'transform -translate-y-3 scale-105' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div 
                className={`bg-white rounded-full p-6 shadow-md mb-6 border border-softGray transition-all duration-300 cursor-pointer group ${
                  hoveredStep === index ? 'shadow-lg bg-mutedTeal/5 border-mutedTeal/30 animate-border-glow' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`transition-transform duration-300 ${
                  hoveredStep === index ? 'animate-bounce-subtle' : ''
                }`}>
                  {step.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-mutedTeal/90 rounded-full p-2">
                    <PlayCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <span className={`inline-block bg-mutedTeal text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 absolute top-0 -right-1 transition-all duration-300 ${
                hoveredStep === index ? 'animate-highlight-pulse' : ''
              }`}>
                {index + 1}
              </span>
              <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                hoveredStep === index ? 'text-mutedTeal transform scale-110' : 'text-navyTrust'
              }`}>{step.title}</h3>
              <p className={`transition-all duration-300 ${
                hoveredStep === index ? 'text-deepCharcoal' : 'text-deepCharcoal/80'
              }`}>{step.description}</p>
              
              {/* Interactive button */}
              <button
                onClick={() => setActiveStep(index)}
                className={`mt-4 flex items-center justify-center px-4 py-2 bg-white border border-mutedTeal/30 rounded-md text-sm text-mutedTeal hover:bg-mutedTeal/5 transition-all duration-300 ${
                  hoveredStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 transform translate-y-5'
                }`}
              >
                See in action <PlayCircle className="ml-1 h-4 w-4" />
              </button>
              
              {/* Animated arrow */}
              <div className={`mt-4 transition-all duration-300 ${
                hoveredStep === index && index < steps.length - 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
              }`}>
                {index < steps.length - 1 && (
                  <div className="animate-pulse-soft">
                    <ArrowRight className="h-5 w-5 text-mutedTeal" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Demo Dialog */}
        <Dialog open={activeStep !== null} onOpenChange={(open) => !open && setActiveStep(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl font-bold text-navyTrust flex items-center">
                {activeStep !== null && (
                  <>
                    <div className="w-8 h-8 rounded-full bg-mutedTeal flex items-center justify-center text-white mr-2">
                      {activeStep + 1}
                    </div>
                    {steps[activeStep]?.demo.title}
                  </>
                )}
              </DialogTitle>
              <DialogDescription>
                See how this step works in the ShariaGuard platform
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              {activeStep !== null && steps[activeStep]?.demo.content}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(prev => (prev !== null && prev > 0) ? prev - 1 : null)}
                disabled={activeStep === 0}
                className="px-4 py-2 border border-gray-300 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="h-4 w-4 transform rotate-180 mr-2" /> Previous Step
              </button>
              
              {activeStep !== null && activeStep < steps.length - 1 ? (
                <button
                  onClick={() => setActiveStep(prev => (prev !== null && prev < steps.length - 1) ? prev + 1 : null)}
                  className="px-4 py-2 bg-mutedTeal text-white rounded-md flex items-center hover:bg-mutedTeal/90 transition-colors"
                >
                  Next Step <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <Link 
                  to="/demo" 
                  className="px-4 py-2 bg-mutedTeal text-white rounded-md flex items-center hover:bg-mutedTeal/90 transition-colors"
                >
                  Try It Now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              )}
            </div>
          </DialogContent>
        </Dialog>
        
        <div className={`text-center mt-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <Link 
            to="/demo" 
            className="inline-flex items-center bg-mutedTeal text-white px-6 py-3 rounded-lg shadow-sm hover:bg-mutedTeal/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group ripple-button overflow-hidden relative"
          >
            <span className="relative z-10">Start Your Compliance Journey</span>
            <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-navyTrust to-mutedTeal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
