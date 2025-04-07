import React from 'react';
import { Shield, FileText, Scale, BookOpen, Lock, Globe, Database, Check } from 'lucide-react';
const Features = () => {
  const features = [{
    id: 'ai-compliance',
    icon: <Shield className="h-12 w-12 text-mutedTeal" />,
    title: 'AI-Powered Compliance',
    description: 'Our advanced NLP technology is optimized for Arabic and English legal documents, ensuring 98% accuracy in compliance verification.',
    benefits: ['Real-time regulatory monitoring', 'Multilingual document processing', 'Automated compliance checks']
  }, {
    id: 'document-automation',
    icon: <FileText className="h-12 w-12 text-mutedTeal" />,
    title: 'Document Automation',
    description: 'Transform complex legal documents into automated workflows that save time and reduce human error in contract management.',
    benefits: ['Smart contract generation', 'Automated document review', 'Version control and audit trails']
  }, {
    id: 'ethical-ai',
    icon: <Scale className="h-12 w-12 text-mutedTeal" />,
    title: 'Ethical AI Governance',
    description: 'Our AI framework is built with Islamic ethical principles at its core, ensuring transparent and culturally sensitive decision-making.',
    benefits: ['Human-in-the-loop validation', 'Transparent reasoning', 'Sharia-compliant algorithms']
  }];
  return <section id="features" className="section-padding geometric-pattern py-[4px] px-0">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
            Core Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
            Built for Arabic. Designed for Compliance.
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            ShariaGuard combines cutting-edge AI technology with deep expertise in Islamic law to deliver a comprehensive compliance solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={feature.id} className="feature-card group animate-fade-in bg-white" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-6 relative">
                <div className="inline-block p-4 rounded-lg bg-mutedTeal/10 group-hover:bg-mutedTeal/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="absolute w-12 h-12 rounded-full -top-2 -right-2 bg-sandGold/10 -z-10 group-hover:scale-125 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-navyTrust mb-3 group-hover:text-mutedTeal transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-deepCharcoal/80 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 text-mutedTeal mr-2">
                      <Check className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-deepCharcoal">{benefit}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="mt-20 py-10 px-6 md:px-10 rounded-xl glass-card max-w-5xl mx-auto animate-scale-in">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
                Advanced Technology
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-navyTrust mb-4">
                Powerful Technology Built for MENA Region
              </h3>
              <p className="text-deepCharcoal/80 mb-6">
                Our platform is specifically optimized for the unique regulatory landscape of the UAE and wider MENA region, with specialized capabilities for Arabic legal text.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 text-mutedTeal mr-2" />
                  <span className="text-sm font-medium">Local Legal Expertise</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-6 w-6 text-mutedTeal mr-2" />
                  <span className="text-sm font-medium">UAE Data Hosting</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-mutedTeal mr-2" />
                  <span className="text-sm font-medium">Bilingual Interface</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-6 w-6 text-mutedTeal mr-2" />
                  <span className="text-sm font-medium">Regulatory Database</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-navyTrust to-mutedTeal rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="mb-4 opacity-90">
                      <Shield className="h-20 w-20 mx-auto" />
                    </div>
                    <div className="text-2xl font-bold mb-2">98% Accuracy</div>
                    <div className="text-white/80 max-w-xs mx-auto">
                      in Arabic legal document processing and compliance verification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;