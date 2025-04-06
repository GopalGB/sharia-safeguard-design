
import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ComplianceAlerts = () => {
  // Mock data for compliance alerts
  const alerts = [
    {
      id: 1,
      document: 'Partnership Agreement - Dubai Properties',
      issue: 'Missing mandatory Sharia compliance clause in Section 4.2',
      severity: 'High',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      document: 'Rental Contract - Etihad Transport',
      issue: 'Interest terms (Section 7.1) may violate Riba prohibition principles',
      severity: 'High',
      timestamp: '1 day ago'
    },
    {
      id: 3,
      document: 'Investment Terms - Al Maha Investments',
      issue: 'Incomplete disclosure requirements per PDPL Article 8',
      severity: 'Medium',
      timestamp: '2 days ago'
    }
  ];

  return (
    <Card>
      <CardHeader className="bg-red-50 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <CardTitle>Compliance Alerts</CardTitle>
        </div>
        <CardDescription>Critical issues requiring immediate attention</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {alerts.map(alert => (
            <div key={alert.id} className="border-l-4 border-red-500 pl-4 py-2">
              <h4 className="font-medium text-navyTrust">{alert.document}</h4>
              <p className="text-sm text-gray-600 mt-1">{alert.issue}</p>
              <div className="flex items-center mt-2">
                <span className={`inline-block px-2 py-1 text-xs rounded-full mr-2 ${
                  alert.severity === 'High' ? 'bg-red-100 text-red-800' : 
                  alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {alert.severity} Priority
                </span>
                <span className="text-xs text-gray-500">{alert.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4">
        <Button variant="ghost" className="ml-auto text-sm" size="sm">
          View All Alerts
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComplianceAlerts;
