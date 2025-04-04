
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const TermsOfService = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-deepCharcoal/80 mb-6">
                  Last Updated: April 1, 2025
                </p>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">1. Introduction</h2>
                  <p>
                    Welcome to ShariaGuard. These Terms of Service govern your use of our website, products, and services. By accessing or using ShariaGuard, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">2. Definitions</h2>
                  <p>"Service" refers to ShariaGuard's website, applications, and all products and services offered by ShariaGuard.</p>
                  <p>"User," "You," and "Your" refer to the individual or entity using our Service.</p>
                  <p>"Company," "We," "Us," and "Our" refer to ShariaGuard.</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">3. Use of Our Service</h2>
                  <p>
                    ShariaGuard provides AI-powered legal compliance solutions. You must use our Service only for lawful purposes and in accordance with these Terms.
                  </p>
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the Service in any way that violates applicable laws or regulations</li>
                    <li>Attempt to interfere with or disrupt the operation of the Service</li>
                    <li>Reverse engineer or attempt to extract the source code of our software</li>
                    <li>Use the Service to transmit any material that is offensive, harmful, or violates the rights of others</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">4. Accounts</h2>
                  <p>
                    When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">5. Intellectual Property</h2>
                  <p>
                    The Service and its content, features, and functionality are owned by ShariaGuard and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">6. Disclaimer of Warranties</h2>
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">7. Limitation of Liability</h2>
                  <p>
                    IN NO EVENT SHALL SHARIAGUARD BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">8. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">9. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at legal@shariaguard.com.
                  </p>
                </section>
              </div>
              
              <div className="mt-8">
                <Link to="/" className="inline-flex items-center text-deepCharcoal/60 hover:text-mutedTeal transition-colors">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
