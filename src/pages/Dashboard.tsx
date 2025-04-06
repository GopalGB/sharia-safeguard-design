
import React from 'react';
import { 
  Search, 
  Bell, 
  Upload,
  BarChart3,
  Users,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProcessingPipeline from '@/components/dashboard/ProcessingPipeline';
import ComplianceStatus from '@/components/dashboard/ComplianceStatus';
import RecentDocuments from '@/components/dashboard/RecentDocuments';
import ComplianceAlerts from '@/components/dashboard/ComplianceAlerts';
import ResourcesSection from '@/components/dashboard/ResourcesSection';
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="mr-8">
                <img 
                  src="/lovable-uploads/78b75dca-97fc-448a-b653-c6945c45ac1f.png" 
                  alt="ShariaGuard Logo" 
                  className="h-10" 
                />
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/dashboard" className="text-navyTrust font-medium px-1 py-2 border-b-2 border-mutedTeal">Dashboard</Link>
                <Link to="/documents" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Documents</Link>
                <Link to="/clients" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Clients</Link>
                <Link to="/reports" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Reports</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 w-60 h-9 rounded-full bg-gray-100 border-gray-200"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <div className="h-8 w-8 rounded-full bg-mutedTeal text-white flex items-center justify-center font-medium">
                AH
              </div>
            </div>
          </div>
        </header>

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
      </div>
    </PageTransition>
  );
};

export default Dashboard;
