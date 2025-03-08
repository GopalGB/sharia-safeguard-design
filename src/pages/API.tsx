
import React from 'react';
import { ArrowLeft, Code, Copy, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const API = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add toast notification here
  };
  
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
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-4 md:mb-0">
                API Reference
              </h1>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="flex items-center bg-white text-navyTrust px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Full Documentation
                </a>
                <a 
                  href="#" 
                  className="flex items-center bg-mutedTeal text-white px-4 py-2 rounded-md hover:bg-mutedTeal/90 transition-colors"
                >
                  <Code className="w-4 h-4 mr-2" />
                  API Keys
                </a>
              </div>
            </div>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-navyTrust mb-6">Getting Started</h2>
                <p className="text-deepCharcoal/80 mb-6">
                  The ShariaGuard API provides programmatic access to all of our compliance tools and services. 
                  Use our API to integrate Sharia compliance checks directly into your workflow, analyze documents, 
                  and generate Sharia-compliant contracts.
                </p>
                
                <div className="bg-gray-900 rounded-xl overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <span className="text-white font-medium">Base URL</span>
                    <button 
                      onClick={() => copyToClipboard('https://api.shariaguard.com/v1')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 text-green-400 font-mono">
                    https://api.shariaguard.com/v1
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                    <span className="text-white font-medium">Authentication</span>
                    <button 
                      onClick={() => copyToClipboard('curl -X GET https://api.shariaguard.com/v1/user -H "Authorization: Bearer YOUR_API_KEY"')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 text-blue-400 font-mono text-sm">
                    <pre>
{`curl -X GET https://api.shariaguard.com/v1/user \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                    </pre>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-navyTrust mb-6">Endpoints</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      name: "Documents",
                      description: "Upload and analyze documents for Sharia compliance",
                      endpoints: [
                        { method: "POST", path: "/documents", description: "Upload a new document" },
                        { method: "GET", path: "/documents/{id}", description: "Get document details" },
                        { method: "POST", path: "/documents/{id}/analyze", description: "Analyze document compliance" }
                      ]
                    },
                    {
                      name: "Contracts",
                      description: "Generate and manage Sharia-compliant contracts",
                      endpoints: [
                        { method: "POST", path: "/contracts", description: "Create a new contract" },
                        { method: "GET", path: "/contracts/{id}", description: "Get contract details" },
                        { method: "PUT", path: "/contracts/{id}", description: "Update contract content" }
                      ]
                    },
                    {
                      name: "Compliance",
                      description: "Check compliance with various Sharia standards",
                      endpoints: [
                        { method: "POST", path: "/compliance/check", description: "Check text for compliance issues" },
                        { method: "GET", path: "/compliance/standards", description: "List available compliance standards" }
                      ]
                    }
                  ].map((group, groupIndex) => (
                    <div key={groupIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="text-xl font-semibold text-navyTrust">{group.name}</h3>
                        <p className="text-deepCharcoal/70 mt-1">{group.description}</p>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {group.endpoints.map((endpoint, endpointIndex) => (
                          <div key={endpointIndex} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                              <span className={`px-2 py-1 text-xs font-medium rounded ${
                                endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                                endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className="ml-3 text-deepCharcoal font-mono">{endpoint.path}</code>
                            </div>
                            <p className="mt-2 text-sm text-deepCharcoal/70">{endpoint.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-navyTrust mb-6">Rate Limits</h2>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium">Plan</span>
                      <span className="font-medium">Rate Limit</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Free</span>
                      <span>100 requests per day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Professional</span>
                      <span>10,000 requests per day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Enterprise</span>
                      <span>Unlimited</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default API;
