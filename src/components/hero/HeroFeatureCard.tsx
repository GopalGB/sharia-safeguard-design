
import React, { useState, useEffect } from 'react';
import { FileText, Scale, Gavel, Award, FileCheck, CheckCircle, Lock, Shield, Check } from 'lucide-react';

const HeroFeatureCard = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: <FileCheck className="h-3.5 w-3.5 text-mutedTeal opacity-90" />,
      text: "Sharia compliant"
    }, 
    {
      icon: <Shield className="h-3.5 w-3.5 text-navyTrust opacity-90" />,
      text: "Verified contract"
    }, 
    {
      icon: <Scale className="h-3.5 w-3.5 text-uaeRed opacity-90" />,
      text: "Legal approved"
    }, 
    {
      icon: <Gavel className="h-3.5 w-3.5 text-mutedCoral opacity-90" />,
      text: "Court validated"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="transform -rotate-6">
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-5 max-w-xs">
        <div className="flex items-center mb-4 pb-2 border-b border-softGray">
          <div className="bg-gradient-to-r from-navyTrust to-mutedTeal rounded-md p-1.5 mr-3">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-navyTrust text-lg tracking-tight">Legal Verification</span>
          <Lock className="h-4 w-4 text-mutedTeal ml-2" />
        </div>
        
        <div className="relative h-28 mb-4">
          <div className="absolute inset-0 bg-softGray/70 rounded-md flex items-center justify-center">
            <FileText className="h-10 w-10 text-navyTrust" />
          </div>
        </div>
        
        <div className="space-y-2.5 px-1">
          <div className="flex items-center">
            <CheckCircle className="h-3.5 w-3.5 text-mutedTeal mr-2 flex-shrink-0" />
            <div className="h-3 bg-gradient-to-r from-mutedTeal/30 to-mutedTeal/10 rounded-full w-full"></div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-3.5 w-3.5 text-navyTrust mr-2 flex-shrink-0" />
            <div className="h-3 bg-gradient-to-r from-navyTrust/30 to-navyTrust/10 rounded-full w-3/4"></div>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-3.5 w-3.5 text-uaeRed mr-2 flex-shrink-0" />
            <div className="h-3 bg-gradient-to-r from-uaeRed/20 to-uaeRed/5 rounded-full w-5/6"></div>
          </div>
        </div>
        <div className="mt-5 flex space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center relative shadow-sm overflow-hidden">
            <Check className="h-4 w-4 text-green-600 z-10" />
          </div>
          <div className="flex-1 h-8 bg-gradient-to-r from-navyTrust/10 to-mutedTeal/5 rounded-md flex items-center px-3 overflow-hidden shadow-sm relative">
            <div className="flex w-full">
              <span className="text-xs text-navyTrust font-medium whitespace-nowrap flex-shrink-0 w-full flex items-center">
                {React.cloneElement(features[activeFeature].icon, {
                  className: "h-3.5 w-3.5 mr-1.5"
                })}
                {features[activeFeature].text}
              </span>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 w-16 h-16 filter drop-shadow-lg">
          <div className="absolute inset-0 bg-navyTrust rounded-full opacity-10"></div>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center border-2 border-navyTrust shadow-md">
            <Award className="h-6 w-6 text-navyTrust" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
