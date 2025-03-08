
import React from 'react';
import { ArrowLeft, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComplianceGuides = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-deepCharcoal/60 hover:text-mutedTeal transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
              Compliance Guides
            </h1>
            
            <p className="text-lg text-deepCharcoal/80 mb-12">
              Comprehensive resources to help you navigate the complex world of Sharia compliance and UAE regulatory requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "UAE Islamic Banking Regulations Guide",
                  description: "A comprehensive overview of regulations governing Islamic banking in the UAE.",
                  category: "Banking & Finance",
                  pages: 42,
                  updated: "April 2023"
                },
                {
                  title: "Sharia-Compliant Contracts Reference",
                  description: "Best practices for drafting and reviewing contracts that adhere to Islamic principles.",
                  category: "Legal Documentation",
                  pages: 35,
                  updated: "June 2023"
                },
                {
                  title: "Halal Investment Framework",
                  description: "Guidelines for ensuring investments align with Islamic ethical and legal standards.",
                  category: "Investment",
                  pages: 28,
                  updated: "March 2023"
                },
                {
                  title: "Zakat Compliance for Businesses",
                  description: "How to calculate, report, and distribute Zakat as a UAE-based business.",
                  category: "Financial Compliance",
                  pages: 24,
                  updated: "February 2023"
                },
                {
                  title: "Takaful Insurance Regulatory Guide",
                  description: "Navigating the regulatory landscape for Islamic insurance providers.",
                  category: "Insurance",
                  pages: 31,
                  updated: "May 2023"
                },
                {
                  title: "Implementing AAOIFI Standards",
                  description: "Practical steps for implementing Accounting and Auditing Organization for Islamic Financial Institutions standards.",
                  category: "Accounting & Auditing",
                  pages: 38,
                  updated: "January 2023"
                }
              ].map((guide, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-mutedTeal/10 text-mutedTeal text-sm rounded-full">
                        {guide.category}
                      </span>
                      <div className="text-sm text-deepCharcoal/60">
                        Updated: {guide.updated}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-navyTrust">{guide.title}</h3>
                    <p className="text-deepCharcoal/80 mb-6">{guide.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-deepCharcoal/70">
                        <FileText className="w-4 h-4 mr-2" />
                        {guide.pages} pages
                      </div>
                      <button className="flex items-center text-mutedTeal hover:text-navyTrust transition-colors">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplianceGuides;
