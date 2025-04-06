
import React from 'react';
import { BookOpen, FileText, GraduationCap, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: 'UAE Personal Data Protection Law',
      description: 'Complete guide to compliance with PDPL regulations',
      icon: FileText,
      link: '#',
      type: 'Legal Document'
    },
    {
      id: 2,
      title: 'Sharia Compliance Principles',
      description: 'Essential principles for Islamic finance and business',
      icon: BookOpen,
      link: '#',
      type: 'Guide'
    },
    {
      id: 3,
      title: 'Compliance Training',
      description: 'Online courses for legal compliance professionals',
      icon: GraduationCap,
      link: '#',
      type: 'Training'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources & Education</CardTitle>
        <CardDescription>Legal resources and compliance guides</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map(resource => (
            <a 
              key={resource.id} 
              href={resource.link}
              className="group block p-4 bg-lightSand rounded-lg hover:bg-navyTrust/5 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-mutedTeal/10 rounded-md">
                  <resource.icon className="h-5 w-5 text-mutedTeal" />
                </div>
                <div>
                  <h4 className="font-medium text-navyTrust group-hover:text-mutedTeal transition-colors">{resource.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  <div className="flex items-center mt-2 text-xs text-mutedTeal font-medium">
                    <span>{resource.type}</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
