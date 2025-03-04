
import React from 'react';
import { ArrowLeft, Calendar, Mail, Phone, User, MessageSquare, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
                Request a Demo
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-4">
                Experience ShariaGuard in Action
              </h1>
              <p className="text-lg text-deepCharcoal/80">
                Schedule a personalized demo with our team to see how ShariaGuard can transform your legal compliance workflow.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden animate-scale-in">
              <div className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-deepCharcoal mb-1">
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-deepCharcoal/40" />
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-deepCharcoal mb-1">
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-deepCharcoal/40" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-deepCharcoal mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-deepCharcoal/40" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-deepCharcoal mb-1">
                        Company Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-deepCharcoal/40" />
                        </div>
                        <input
                          id="company"
                          type="text"
                          className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                          placeholder="Your company"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-deepCharcoal mb-1">
                      What are you most interested in?*
                    </label>
                    <div className="relative">
                      <select
                        id="interest"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all appearance-none"
                        required
                      >
                        <option value="" disabled selected>Select an option</option>
                        <option value="document-automation">Document Automation</option>
                        <option value="compliance-monitoring">Compliance Monitoring</option>
                        <option value="risk-assessment">Risk Assessment</option>
                        <option value="full-platform">Full Platform</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <Globe className="h-5 w-5 text-deepCharcoal/40" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deepCharcoal mb-1">
                      Additional Information
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-deepCharcoal/40" />
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                        placeholder="Tell us more about your needs"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-deepCharcoal mb-1">
                      Preferred Demo Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-deepCharcoal/40" />
                      </div>
                      <input
                        id="preferredDate"
                        type="date"
                        className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mutedTeal focus:border-mutedTeal transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-mutedTeal border-gray-300 rounded focus:ring-mutedTeal"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-deepCharcoal/80">
                        I agree to the <a href="#" className="text-mutedTeal hover:underline">Terms of Service</a> and <a href="#" className="text-mutedTeal hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-mutedTeal text-white py-3 rounded-lg font-medium hover:bg-mutedTeal/90 transition-all duration-300 shadow-sm"
                  >
                    Schedule Demo
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/" className="inline-flex items-center text-deepCharcoal/60 text-sm hover:text-mutedTeal">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;
