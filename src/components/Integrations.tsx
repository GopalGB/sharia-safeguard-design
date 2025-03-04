
import React from 'react';
import { ArrowRight, Server, Webhook, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Integrations = () => {
  const integrations = [
    {
      name: 'Salesforce',
      icon: '✓',
      description: 'Sync compliance data directly with customer records'
    },
    {
      name: 'Microsoft 365',
      icon: '✓',
      description: 'Seamless document processing from SharePoint and OneDrive'
    },
    {
      name: 'DocuSign',
      icon: '✓',
      description: 'Automated compliance checks before document signing'
    },
    {
      name: 'UAE Government Portals',
      icon: '✓',
      description: 'Direct integration with regulatory submission systems'
    }
  ];

  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block bg-mutedTeal/10 text-mutedTeal px-3 py-1 rounded-full text-sm font-medium mb-4">
              Technical Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navyTrust mb-6">
              Seamless Integration
            </h2>
            <p className="text-lg text-deepCharcoal/80 mb-8">
              Connect ShariaGuard with your existing tools and workflows for a streamlined compliance process.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-mutedTeal/10 p-3 rounded-lg">
                  <Server className="h-6 w-6 text-mutedTeal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-navyTrust mb-1">REST API</h3>
                  <p className="text-deepCharcoal/80">Comprehensive documentation with examples and SDKs for popular languages.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-mutedTeal/10 p-3 rounded-lg">
                  <Webhook className="h-6 w-6 text-mutedTeal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-navyTrust mb-1">Webhook Support</h3>
                  <p className="text-deepCharcoal/80">Real-time updates and notifications for compliance events.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 bg-mutedTeal/10 p-3 rounded-lg">
                  <Box className="h-6 w-6 text-mutedTeal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-navyTrust mb-1">Pre-built Integrations</h3>
                  <p className="text-deepCharcoal/80">Connect with popular platforms in just a few clicks.</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/demo" 
              className="inline-flex items-center text-mutedTeal font-medium hover:text-mutedTeal/80 transition-colors duration-300"
            >
              Explore Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="md:w-1/2 bg-lightSand rounded-2xl p-8">
            <h3 className="font-semibold text-lg text-navyTrust mb-6">
              Popular Integrations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-mutedTeal/10 text-mutedTeal w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-3">
                      {integration.icon}
                    </div>
                    <h4 className="font-medium text-navyTrust">{integration.name}</h4>
                  </div>
                  <p className="text-sm text-deepCharcoal/70">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
