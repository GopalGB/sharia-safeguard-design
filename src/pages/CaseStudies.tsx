
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies = () => {
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
              Case Studies
            </h1>
            
            <p className="text-lg text-deepCharcoal/80 mb-12">
              Discover how ShariaGuard has helped organizations across the UAE and MENA region achieve Sharia compliance and streamline their legal operations.
            </p>
            
            <div className="space-y-12">
              {[
                {
                  title: "Al Baraka Banking Group",
                  industry: "Islamic Banking",
                  challenge: "Needed to ensure all financial products met Sharia compliance standards across multiple jurisdictions.",
                  solution: "Implemented ShariaGuard's automated compliance scanning and verification tools.",
                  results: "98% reduction in compliance review time, 0 compliance violations in 12 months."
                },
                {
                  title: "Dubai Islamic Insurance Company",
                  industry: "Takaful Insurance",
                  challenge: "Struggling to maintain consistency in Sharia-compliant contract language across various insurance products.",
                  solution: "Utilized ShariaGuard's contract analysis and template generation features.",
                  results: "Standardized 200+ contract templates, reduced legal review costs by 65%."
                },
                {
                  title: "Maaden Mining Corporation",
                  industry: "Resource Extraction",
                  challenge: "Difficulty balancing international mining standards with Islamic legal and ethical requirements.",
                  solution: "Deployed ShariaGuard's regulatory mapping and compliance monitoring tools.",
                  results: "Successfully aligned operations with both international standards and Sharia principles, avoiding potential fines."
                }
              ].map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-5xl text-mutedTeal/30 font-bold">
                        0{index + 1}
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="flex items-center mb-3">
                        <span className="px-3 py-1 bg-mutedTeal/10 text-mutedTeal text-sm rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-navyTrust mb-4">{study.title}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-deepCharcoal mb-1">Challenge:</h4>
                          <p className="text-deepCharcoal/80">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-deepCharcoal mb-1">Solution:</h4>
                          <p className="text-deepCharcoal/80">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-deepCharcoal mb-1">Results:</h4>
                          <p className="text-deepCharcoal/80">{study.results}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button className="text-mutedTeal font-medium hover:underline">
                          Read Full Case Study →
                        </button>
                      </div>
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

export default CaseStudies;
