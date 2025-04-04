
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-deepCharcoal/80 mb-6">
                  Last Updated: April 1, 2025
                </p>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">1. Introduction</h2>
                  <p>
                    At ShariaGuard, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">2. Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and other information you provide when creating an account or using our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our services, such as the features you use and the time spent on our platform.</li>
                    <li><strong>Device Information:</strong> Information about the device you use to access our services, including IP address, browser type, and operating system.</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">3. How We Use Your Information</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">4. Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With service providers who perform services on our behalf</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect the rights, property, or safety of ShariaGuard, our users, or others</li>
                    <li>In connection with a business transfer, such as a merger or acquisition</li>
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">6. Your Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">7. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-navyTrust mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@shariaguard.com.
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

export default PrivacyPolicy;
