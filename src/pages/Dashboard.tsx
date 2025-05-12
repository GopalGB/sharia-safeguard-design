
import React from 'react';
import { 
  Upload,
  BarChart3,
  Users,
  FileText,
  AlertTriangle
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProcessingPipeline from '@/components/dashboard/ProcessingPipeline';
import ComplianceStatus from '@/components/dashboard/ComplianceStatus';
import RecentDocuments from '@/components/dashboard/RecentDocuments';
import ComplianceAlerts from '@/components/dashboard/ComplianceAlerts';
import ResourcesSection from '@/components/dashboard/ResourcesSection';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    // Display a welcome notification
    setTimeout(() => {
      toast({
        title: "Welcome back",
        description: "You have 3 compliance alerts that need attention",
      });
    }, 1000);
  }, [toast]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <DashboardHeader />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-navyTrust mb-1">Welcome back, Ahmed</h1>
              <p className="text-deepCharcoal/70">Here's an overview of your compliance dashboard</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-deepCharcoal/60 mb-1">Total Documents</p>
                  <h2 className="text-3xl font-bold text-navyTrust">152</h2>
                  <p className="text-xs text-green-600 mt-1">↑ 7% from last month</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-deepCharcoal/60 mb-1">Compliance Rate</p>
                  <h2 className="text-3xl font-bold text-navyTrust">86%</h2>
                  <p className="text-xs text-green-600 mt-1">↑ 3% from last month</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-deepCharcoal/60 mb-1">Active Clients</p>
                  <h2 className="text-3xl font-bold text-navyTrust">27</h2>
                  <p className="text-xs text-green-600 mt-1">↑ 2 new clients</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-deepCharcoal/60 mb-1">Compliance Alerts</p>
                  <h2 className="text-3xl font-bold text-red-600">7</h2>
                  <p className="text-xs text-red-600 mt-1">↑ 3 new alerts</p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing Pipeline */}
          <div className="mb-8">
            <ProcessingPipeline />
          </div>

          {/* Charts and Documents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ComplianceStatus />
            <ComplianceAlerts />
          </div>

          {/* Recent Documents */}
          <div className="mb-8">
            <RecentDocuments />
          </div>

          {/* Resources */}
          <div className="mb-8">
            <ResourcesSection />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-deepCharcoal/60">
                  © 2025 ShariaGuard. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="px-2 py-1 bg-lightSand rounded-md border border-gray-200">
                  <span className="text-xs font-medium text-navyTrust">UAE-Hosted</span>
                </div>
                <div className="px-2 py-1 bg-lightSand rounded-md border border-gray-200">
                  <span className="text-xs font-medium text-navyTrust">PDPL Compliant</span>
                </div>
                <div className="px-2 py-1 bg-lightSand rounded-md border border-gray-200">
                  <span className="text-xs font-medium text-navyTrust">AWS me-central-1</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
