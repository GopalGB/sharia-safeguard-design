
import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const topics = [
    {
      category: "Getting Started",
      items: ["Introduction to ShariaGuard", "Creating Your Account", "Platform Overview", "Quick Start Guide"]
    },
    {
      category: "Core Features",
      items: ["Compliance Scanning", "Document Analysis", "Contract Generation", "Regulatory Updates"]
    },
    {
      category: "Integrations",
      items: ["API Overview", "Authentication", "Webhooks", "CRM Integrations", "Document Management Systems"]
    },
    {
      category: "Best Practices",
      items: ["Workflow Optimization", "Team Collaboration", "Security Guidelines", "Compliance Monitoring"]
    }
  ];
  
  const recentUpdates = [
    {
      title: "New Document Template Feature",
      date: "June 15, 2023",
      type: "Feature"
    },
    {
      title: "Updated DIFC Compliance Rules",
      date: "May 28, 2023",
      type: "Update"
    },
    {
      title: "API v2.1 Documentation",
      date: "May 10, 2023",
      type: "Documentation"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-deepCharcoal/60 hover:text-mutedTeal transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 h-fit">
              <h3 className="font-semibold text-lg text-navyTrust mb-4">Documentation</h3>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-deepCharcoal mb-2">{topic.category}</h4>
                    <ul className="space-y-1 pl-4">
                      {topic.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button className="text-deepCharcoal/70 hover:text-mutedTeal text-sm py-1 transition-colors">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h1 className="text-3xl font-bold text-navyTrust mb-6">
                  Documentation
                </h1>
                
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-deepCharcoal/40" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documentation..."
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {["Getting Started", "API Reference", "Tutorials", "Examples", "FAQs", "Release Notes"].map((card, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 hover:bg-mutedTeal/5 border border-gray-100 rounded-lg p-6 cursor-pointer transition-colors duration-300"
                    >
                      <h3 className="font-semibold text-navyTrust mb-2">{card}</h3>
                      <p className="text-sm text-deepCharcoal/70 mb-3">
                        {index === 0 ? "Learn the basics of using ShariaGuard" : 
                         index === 1 ? "Full API documentation and examples" :
                         index === 2 ? "Step-by-step guides for common tasks" :
                         index === 3 ? "Sample implementations and code" :
                         index === 4 ? "Answers to common questions" :
                         "What's new in each release"}
                      </p>
                      <div className="flex items-center text-mutedTeal text-sm font-medium">
                        View Documentation
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-navyTrust mb-4">
                    Recent Updates
                  </h2>
                  <div className="space-y-3">
                    {recentUpdates.map((update, index) => (
                      <div 
                        key={index} 
                        className="border-l-2 border-mutedTeal pl-4 py-2"
                      >
                        <div className="flex items-center mb-1">
                          <h4 className="font-medium text-deepCharcoal">{update.title}</h4>
                          <span className={`ml-3 px-2 py-0.5 text-xs rounded ${
                            update.type === 'Feature' ? 'bg-green-100 text-green-800' :
                            update.type === 'Update' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {update.type}
                          </span>
                        </div>
                        <div className="text-sm text-deepCharcoal/60">
                          {update.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
