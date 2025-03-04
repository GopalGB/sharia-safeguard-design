
import React, { useState } from 'react';
import { User, Users, Database, ArrowRight, Check } from 'lucide-react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('legal');

  const solutions = [
    {
      id: 'legal',
      icon: <User size={24} />,
      title: 'For Legal Teams',
      subtitle: 'Reduce Review Time by 70%',
      description: 'Empower your legal department with AI-driven tools that streamline document review, automate compliance checks, and provide instant insights on regulatory requirements.',
      benefits: [
        'Automated contract review and risk identification',
        'Instant Sharia compliance verification',
        'Regulatory change monitoring and alerts',
        'Collaborative workflow for legal teams'
      ],
      cta: 'Discover Legal Solutions'
    },
    {
      id: 'sme',
      icon: <Users size={24} />,
      title: 'For SMEs & Startups',
      subtitle: 'Affordable Compliance for Growing Businesses',
      description: 'Ensure your business meets regulatory requirements without the cost of a large legal team. Our platform provides accessible compliance tools tailored for smaller organizations.',
      benefits: [
        'Cost-effective legal compliance automation',
        'Simple document templates and generators',
        'Basic compliance monitoring and alerts',
        'Essential legal risk assessment tools'
      ],
      cta: 'Explore SME Solutions'
    },
    {
      id: 'gov',
      icon: <Database size={24} />,
      title: 'For Government & Financial Institutions',
      subtitle: 'Streamlined Regulatory Excellence',
      description: 'Meet the highest standards of compliance with enterprise-grade solutions designed for government entities and financial institutions operating under strict regulatory frameworks.',
      benefits: [
        'Advanced compliance monitoring system',
        'Custom regulatory frameworks integration',
        'Comprehensive audit trails and reporting',
        'Enterprise-grade security and data protection'
      ],
      cta: 'View Enterprise Solutions'
    }
  ];

  const activeSolution = solutions.find(solution => solution.id === activeTab);

  return (
    <section id="solutions" className="section-padding bg-lightSand">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
            Tailored Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
            Solutions Designed for Your Needs
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            Our platform adapts to the specific requirements of different organizations, providing tailored compliance solutions for everyone.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-scale-in">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-navyTrust text-white p-6 md:p-8">
              <div className="space-y-6">
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeTab === solution.id 
                        ? 'bg-white/10 shadow-sm' 
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => setActiveTab(solution.id)}
                  >
                    <div className={`mr-4 p-2 rounded-lg ${
                      activeTab === solution.id 
                        ? 'bg-mutedTeal' 
                        : 'bg-white/10'
                    }`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{solution.title}</h3>
                      <p className="text-white/70 text-sm mt-1">
                        {solution.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:w-2/3 p-6 md:p-10">
              {activeSolution && (
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-navyTrust mb-3">
                    {activeSolution.subtitle}
                  </h3>
                  <p className="text-deepCharcoal/80 mb-6">
                    {activeSolution.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {activeSolution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3 bg-mutedTeal/10 p-1 rounded-full">
                          <Check className="h-4 w-4 text-mutedTeal" />
                        </div>
                        <span className="text-deepCharcoal">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href="#"
                      className="inline-flex items-center text-mutedTeal font-medium hover:text-mutedTeal/80 transition-colors duration-300"
                    >
                      {activeSolution.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <p className="text-lg text-deepCharcoal/80 mb-8 max-w-2xl mx-auto">
            Not sure which solution is right for your organization? 
            Schedule a consultation with our team to find the perfect fit.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-mutedTeal text-white px-6 py-3 rounded-lg shadow-sm hover:bg-mutedTeal/90 transition-all duration-300 button-hover-effect"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
