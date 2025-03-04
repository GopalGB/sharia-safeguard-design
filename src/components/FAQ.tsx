
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How secure is my data with ShariaGuard?',
      answer: 'All documents are encrypted using AES-256 and stored in UAE-based servers compliant with local data sovereignty laws. We implement multiple security measures including two-factor authentication, role-based access controls, and regular security audits.'
    },
    {
      question: 'Do I need technical expertise to use ShariaGuard?',
      answer: 'No. Our platform is designed with an intuitive interface that requires no technical background. Our onboarding team provides comprehensive training and support throughout your journey.'
    },
    {
      question: 'How accurate is the Arabic document processing?',
      answer: 'Our specialized Arabic NLP achieves 98% accuracy for legal documents, significantly higher than generic AI solutions. For critical documents, we offer human verification as an additional service.'
    },
    {
      question: 'Can ShariaGuard integrate with our existing systems?',
      answer: 'Yes. We offer API access and pre-built integrations with popular legal management systems. Our Enterprise plan includes custom integration services.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer tiered support based on your plan. All customers receive email support, while Professional and Enterprise customers get priority support with faster response times. Enterprise customers also receive a dedicated account manager and 24/7 support.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-lightSand">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            Find answers to commonly asked questions about ShariaGuard.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                  openItem === index ? 'shadow-md' : ''
                }`}
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="font-semibold text-lg text-navyTrust">{faq.question}</h3>
                  {openItem === index ? 
                    <ChevronUp className="h-5 w-5 text-mutedTeal flex-shrink-0" /> : 
                    <ChevronDown className="h-5 w-5 text-deepCharcoal/60 flex-shrink-0" />
                  }
                </button>
                <div 
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openItem === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-deepCharcoal/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#all-faqs"
              className="inline-flex items-center text-mutedTeal font-medium hover:text-mutedTeal/80 transition-colors duration-300"
            >
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
