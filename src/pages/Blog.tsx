
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
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
              ShariaGuard Blog
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navyTrust/30 flex items-end">
                        <div className="p-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-mutedTeal text-white rounded-full">
                            Islamic Finance
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-deepCharcoal/60 mb-2">
                        May {item + 10}, 2023
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-navyTrust">
                        Understanding Sharia Compliance in Modern Banking
                      </h3>
                      <p className="text-deepCharcoal/80 mb-4">
                        Explore how modern banking systems are adapting to incorporate Islamic finance principles...
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Ahmed Al Mansouri</div>
                          <div className="text-xs text-deepCharcoal/60">Legal Expert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <button className="px-6 py-3 bg-white border border-mutedTeal text-mutedTeal rounded-lg hover:bg-mutedTeal hover:text-white transition-colors shadow-sm">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
