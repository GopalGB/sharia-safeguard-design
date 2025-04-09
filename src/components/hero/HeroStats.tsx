
import React from 'react';
import { Check } from 'lucide-react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
        <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
          <Check className="h-4 w-4 text-mutedTeal" />
        </div>
        <div className="ml-2">
          <p className="text-sm text-deepCharcoal font-medium">98% Accuracy Rate</p>
        </div>
      </div>
      <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
        <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
          <Check className="h-4 w-4 text-mutedTeal" />
        </div>
        <div className="ml-2">
          <p className="text-sm text-deepCharcoal font-medium">UAE Data Hosting</p>
        </div>
      </div>
      <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
        <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
          <Check className="h-4 w-4 text-mutedTeal" />
        </div>
        <div className="ml-2">
          <p className="text-sm text-deepCharcoal font-medium">60% Time Saved</p>
        </div>
      </div>
      <div className="flex items-start group hover:transform hover:translate-x-1 transition-all duration-300">
        <div className="flex-shrink-0 bg-mutedTeal/10 rounded-full p-1 group-hover:bg-mutedTeal/20 transition-colors duration-300">
          <Check className="h-4 w-4 text-mutedTeal" />
        </div>
        <div className="ml-2">
          <p className="text-sm text-deepCharcoal font-medium">Zero Compliance Risk</p>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
