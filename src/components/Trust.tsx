
import React from 'react';
import { Shield, Lock, Globe, Check, Award, Star } from 'lucide-react';

const Trust = () => {
  const testimonials = [
    {
      quote: "ShariaGuard has revolutionized our compliance process, reducing document review time by 70% while maintaining perfect accuracy.",
      author: "Ahmed Al Mansouri",
      position: "Chief Legal Officer",
      company: "Dubai Islamic Bank"
    },
    {
      quote: "As a startup in the Islamic fintech space, ShariaGuard has been an invaluable partner in ensuring our products meet all regulatory requirements.",
      author: "Fatima Al Zaabi",
      position: "Founder & CEO",
      company: "HalalPay Technologies"
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "GDPR Compliant", description: "Data Protection" },
    { name: "UAE ISR", description: "Information Security Regulations" },
    { name: "BSI Kitemark", description: "AI Ethics Framework" }
  ];

  const partners = [
    "Dubai Financial Services Authority",
    "Abu Dhabi Global Market",
    "Emirates NBD",
    "Dubai Chamber of Commerce"
  ];

  return (
    <section id="trust" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
            Why Trust Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
            Compliance Without Compromise
          </h2>
          <p className="text-lg text-deepCharcoal/80">
            Security, accuracy, and ethical AI are the foundations of our platform, ensuring you can trust ShariaGuard with your most sensitive legal documents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-6">
              <div className="inline-block p-3 rounded-lg bg-mutedTeal/10">
                <Shield className="h-6 w-6 text-mutedTeal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-navyTrust mb-3">
              Secure Infrastructure
            </h3>
            <p className="text-deepCharcoal/80 mb-4">
              Enterprise-grade security with data stored in UAE-based servers, complying with local data sovereignty requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">End-to-end encryption</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Regular security audits</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Private cloud deployment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6">
              <div className="inline-block p-3 rounded-lg bg-mutedTeal/10">
                <Lock className="h-6 w-6 text-mutedTeal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-navyTrust mb-3">
              Ethical AI Governance
            </h3>
            <p className="text-deepCharcoal/80 mb-4">
              Our AI systems are built with Islamic ethical principles, ensuring transparent and culturally appropriate decision-making.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Human oversight</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Explainable AI decisions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Regular bias audits</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="inline-block p-3 rounded-lg bg-mutedTeal/10">
                <Globe className="h-6 w-6 text-mutedTeal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-navyTrust mb-3">
              Regulatory Excellence
            </h3>
            <p className="text-deepCharcoal/80 mb-4">
              Deep expertise in UAE and MENA region regulatory frameworks, with continuous monitoring of legal changes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">300+ regulatory updates monitored</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Local legal expertise</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-mutedTeal flex-shrink-0 mr-2" />
                <span className="text-sm text-deepCharcoal">Sharia board consultation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-navyTrust to-mutedTeal rounded-xl overflow-hidden shadow-lg animate-scale-in">
          <div className="p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <Star className="mr-3 h-6 w-6 text-sandGold" />
              Trusted by Leading UAE Organizations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-filter backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <blockquote className="mb-4 text-white/90 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="h-10 w-10 rounded-full bg-sandGold/30 flex items-center justify-center">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-white/70">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in">
          <h3 className="text-xl font-semibold text-navyTrust mb-6 text-center">
            <Award className="inline-block h-5 w-5 mr-2 text-mutedTeal" />
            Certifications & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm border border-softGray flex items-center hover:shadow-md transition-all duration-300">
                <div className="mr-2 text-mutedTeal">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-navyTrust">{cert.name}</div>
                  <div className="text-xs text-deepCharcoal/70">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-navyTrust mb-6">
            Strategic Partners in the UAE
          </h3>
          <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="h-16 w-16 bg-mutedTeal/10 rounded-full flex items-center justify-center mb-3">
                  <div className="text-navyTrust text-xl font-bold">{partner.split(' ').map(word => word[0]).join('')}</div>
                </div>
                <div className="text-sm font-medium text-center text-navyTrust">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
