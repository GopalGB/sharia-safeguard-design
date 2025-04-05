
import React from 'react';
import { 
  BarChart3, 
  Download, 
  Search, 
  Bell,
  FileText,
  PieChart,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const Reports = () => {
  // Mock data for compliance trends
  const complianceTrends = [
    { month: 'Jan', score: 78 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 80 },
    { month: 'Apr', score: 85 },
    { month: 'May', score: 87 },
    { month: 'Jun', score: 84 },
    { month: 'Jul', score: 88 },
    { month: 'Aug', score: 90 },
    { month: 'Sep', score: 92 },
    { month: 'Oct', score: 91 },
    { month: 'Nov', score: 93 },
    { month: 'Dec', score: 95 },
  ];

  // Mock data for industry breakdown
  const industryData = [
    { name: 'Banking & Finance', value: 35 },
    { name: 'Real Estate', value: 25 },
    { name: 'Import & Export', value: 20 },
    { name: 'Hospitality', value: 15 },
    { name: 'Other', value: 5 },
  ];

  // Mock data for recent reports
  const recentReports = [
    { id: 1, name: 'Annual Compliance Summary 2024', type: 'Annual', date: '2025-03-15', downloads: 28 },
    { id: 2, name: 'Q1 2025 Compliance Analysis', type: 'Quarterly', date: '2025-04-02', downloads: 12 },
    { id: 3, name: 'Risk Assessment Report', type: 'Special', date: '2025-04-01', downloads: 17 },
    { id: 4, name: 'Regulatory Changes Impact Analysis', type: 'Special', date: '2025-03-25', downloads: 9 },
    { id: 5, name: 'Client Onboarding Compliance', type: 'Monthly', date: '2025-03-20', downloads: 6 },
  ];

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
                <Link to="/dashboard" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Dashboard</Link>
                <Link to="/documents" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Documents</Link>
                <Link to="/clients" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Clients</Link>
                <Link to="/reports" className="text-navyTrust font-medium px-1 py-2 border-b-2 border-mutedTeal">Reports</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search reports..." 
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-navyTrust mb-1">Reports & Analytics</h1>
              <p className="text-deepCharcoal/70">Insights and analytics on your compliance performance</p>
            </div>
            <Button className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white">
              Generate New Report
            </Button>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Analytics</TabsTrigger>
              <TabsTrigger value="documents">Document Reports</TabsTrigger>
              <TabsTrigger value="clients">Client Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Overall Compliance</CardDescription>
                    <CardTitle className="text-3xl text-navyTrust">92%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">↑ 3% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Documents</CardDescription>
                    <CardTitle className="text-3xl text-navyTrust">148</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">↑ 12 new this month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Active Clients</CardDescription>
                    <CardTitle className="text-3xl text-navyTrust">24</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">↑ 2 new this month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Generated Reports</CardDescription>
                    <CardTitle className="text-3xl text-navyTrust">36</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">↑ 5 new this month</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Compliance Trend Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Compliance Trend</CardTitle>
                      <CardDescription>Monthly compliance score over the past year</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={complianceTrends}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis domain={[50, 100]} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Compliance Score']} />
                        <Bar dataKey="score" fill="#4B9C8E" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Reports</CardTitle>
                      <CardDescription>Recently generated compliance reports</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report) => (
                      <div key={report.id} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center">
                          <div className="p-2 mr-3 bg-lightSand rounded-lg">
                            <FileText className="h-5 w-5 text-mutedTeal" />
                          </div>
                          <div>
                            <p className="font-medium text-navyTrust">{report.name}</p>
                            <div className="flex items-center mt-1 text-sm text-deepCharcoal/70">
                              <span className={`inline-block px-2 py-0.5 text-xs rounded-full mr-2 ${
                                report.type === 'Annual' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : report.type === 'Quarterly' 
                                    ? 'bg-purple-100 text-purple-800'
                                    : report.type === 'Monthly'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-gray-100 text-gray-800'
                              }`}>
                                {report.type}
                              </span>
                              <Calendar className="h-3 w-3 mr-1" />
                              {report.date}
                              <span className="mx-2">•</span>
                              <Download className="h-3 w-3 mr-1" />
                              {report.downloads} downloads
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="compliance">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-navyTrust mb-4">Compliance Analytics</h2>
                <p className="text-deepCharcoal/70 mb-6">
                  More detailed analytics content would be shown here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="documents">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-navyTrust mb-4">Document Reports</h2>
                <p className="text-deepCharcoal/70 mb-6">
                  Document-specific reports would be shown here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="clients">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-navyTrust mb-4">Client Reports</h2>
                <p className="text-deepCharcoal/70 mb-6">
                  Client-specific analytics would be shown here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </PageTransition>
  );
};

export default Reports;
