
import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'SME Starter',
      description: 'Essential compliance tools for small businesses',
      price: annualBilling ? 199 : 249,
      saving: annualBilling ? 'Save $600 yearly' : '',
      popular: false,
      features: [
        'Document scanning & analysis',
        'Basic compliance monitoring',
        'Up to 100 documents/month',
        'Arabic & English support',
        'Email support'
      ],
      limitations: [
        'No custom compliance rules',
        'Manual document uploading only',
        'Limited to 2 team members'
      ],
      cta: 'Start 14-day trial'
    },
    {
      name: 'Professional',
      description: 'Complete compliance solution for growing organizations',
      price: annualBilling ? 499 : 599,
      saving: annualBilling ? 'Save $1,200 yearly' : '',
      popular: true,
      features: [
        'Everything in SME Starter',
        'Custom compliance rule creation',
        'Up to 500 documents/month',
        'API access & integrations',
        'Automated document processing',
        'Priority support',
        'Up to 10 team members'
      ],
      limitations: [
        'Limited historical analysis'
      ],
      cta: 'Start 14-day trial'
    },
    {
      name: 'Enterprise',
      description: 'Tailored solutions for large organizations',
      price: 'Custom',
      popular: false,
      features: [
        'Everything in Professional',
        'Unlimited documents',
        'Custom integrations',
        'Dedicated account manager',
        'Private cloud deployment option',
        'On-premises deployment option',
        'SLA guarantees',
        'Unlimited team members'
      ],
      limitations: [],
      cta: 'Contact sales'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-lightSand">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
                Transparent Pricing
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
                Choose the Right Plan for Your Organization
              </h1>
              <p className="text-lg text-deepCharcoal/80">
                All plans include our core AI-powered compliance engine, with features tailored to your organization's needs.
              </p>
            </div>

            <div className="max-w-lg mx-auto mb-12">
              <div className="bg-white p-1 rounded-full flex items-center justify-center shadow-sm">
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                    annualBilling 
                      ? 'bg-mutedTeal text-white shadow-sm' 
                      : 'text-deepCharcoal hover:bg-gray-100'
                  }`}
                >
                  Annual Billing
                </button>
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                    !annualBilling 
                      ? 'bg-mutedTeal text-white shadow-sm' 
                      : 'text-deepCharcoal hover:bg-gray-100'
                  }`}
                >
                  Monthly Billing
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                    plan.popular ? 'md:scale-105 border-2 border-mutedTeal z-10' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 bg-mutedTeal text-white text-center text-sm py-1 font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-10' : ''}`}>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-navyTrust mb-2">{plan.name}</h3>
                      <p className="text-sm text-deepCharcoal/70">{plan.description}</p>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-navyTrust">
                          {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                        </span>
                        {typeof plan.price === 'number' && (
                          <span className="text-deepCharcoal/60 ml-2">/month</span>
                        )}
                      </div>
                      {plan.saving && (
                        <div className="text-mutedTeal text-sm mt-1">{plan.saving}</div>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-medium text-navyTrust mb-3 flex items-center">
                        Included Features
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-3" />
                            <span className="text-sm text-deepCharcoal/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-medium text-navyTrust mb-3 flex items-center">
                          Limitations
                          <HelpCircle className="h-4 w-4 text-deepCharcoal/40 ml-1" />
                        </h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start">
                              <X className="h-5 w-5 text-deepCharcoal/40 flex-shrink-0 mr-3" />
                              <span className="text-sm text-deepCharcoal/60">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <a
                      href={plan.name === 'Enterprise' ? '#contact' : '#signup'}
                      className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all ${
                        plan.popular
                          ? 'bg-mutedTeal text-white hover:bg-mutedTeal/90'
                          : 'border border-navyTrust text-navyTrust hover:bg-navyTrust hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-navyTrust mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-deepCharcoal/80 mb-8">
                Our team can build a tailored solution to meet your specific compliance and legal automation needs, including on-premises deployment options.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-navyTrust text-white px-6 py-3 rounded-lg shadow-sm hover:bg-navyTrust/90 transition-all duration-300"
              >
                Contact Our Sales Team
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-navyTrust mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="bg-lightSand rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-navyTrust mb-2">
                    What are the payment options?
                  </h3>
                  <p className="text-deepCharcoal/80">
                    We accept all major credit cards and wire transfers. For annual plans, we can also arrange invoicing. Enterprise plans can be customized with flexible payment schedules.
                  </p>
                </div>
                
                <div className="bg-lightSand rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-navyTrust mb-2">
                    Can I switch plans later?
                  </h3>
                  <p className="text-deepCharcoal/80">
                    Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing cycle.
                  </p>
                </div>
                
                <div className="bg-lightSand rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-navyTrust mb-2">
                    Is there a free trial?
                  </h3>
                  <p className="text-deepCharcoal/80">
                    Yes, we offer a 14-day free trial for our SME Starter and Professional plans with no credit card required. You'll get full access to all features during your trial period.
                  </p>
                </div>
                
                <div className="bg-lightSand rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-navyTrust mb-2">
                    How does the document counting work?
                  </h3>
                  <p className="text-deepCharcoal/80">
                    Document counts are based on the number of documents processed for compliance review each month. Document versions and revisions count as separate documents. Unused document allocations don't roll over to the next month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
