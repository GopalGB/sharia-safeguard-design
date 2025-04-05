
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BarChart3, 
  FileText, 
  Users, 
  Settings,
  Bell,
  Search,
  Plus,
  Upload,
  FileSpreadsheet,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  PieChart,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DocumentUploadModal from '@/components/DocumentUploadModal';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { PieChart as RechartsChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Mock data for dashboard
  const recentDocuments = [
    { id: 1, name: 'Contract Agreement #1207', status: 'Approved', date: '2025-03-31', processingStage: 'Completed' },
    { id: 2, name: 'Sharia Compliance Certificate', status: 'Pending', date: '2025-04-02', processingStage: 'OCR Processing' },
    { id: 3, name: 'Business License Renewal', status: 'In Review', date: '2025-04-04', processingStage: 'NLP Analysis' },
    { id: 4, name: 'Employee Handbook v2', status: 'Needs Review', date: '2025-04-01', processingStage: 'Compliance Check' },
    { id: 5, name: 'PDPL Compliance Report', status: 'Approved', date: '2025-03-29', processingStage: 'Completed' }
  ];

  // Mock data for analytics
  const complianceStats = [
    { name: 'Compliant', value: 72, color: '#2A9D8F' },
    { name: 'Minor Issues', value: 18, color: '#E9C46A' },
    { name: 'Major Issues', value: 10, color: '#E76F51' }
  ];

  const processingStats = [
    { name: 'Uploaded', value: 27, growth: '+4', period: 'this month' },
    { name: 'Processing', value: 8, growth: '+2', period: 'today' },
    { name: 'Completed', value: 19, growth: '+7', period: 'this month' },
    { name: 'Needs Review', value: 5, growth: '-2', period: 'this week' }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Approved':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'In Review':
        return <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />;
      case 'Needs Review':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const getProcessingStageInfo = (stage) => {
    switch(stage) {
      case 'Completed':
        return { color: 'bg-green-100 text-green-800', text: 'Completed' };
      case 'OCR Processing':
        return { color: 'bg-blue-100 text-blue-800', text: 'OCR Processing' };
      case 'NLP Analysis':
        return { color: 'bg-purple-100 text-purple-800', text: 'NLP Analysis' };
      case 'Compliance Check':
        return { color: 'bg-amber-100 text-amber-800', text: 'Compliance Check' };
      default:
        return { color: 'bg-gray-100 text-gray-800', text: stage };
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Dashboard Header */}
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

        {/* Dashboard Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Welcome Section with Quick Actions */}
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-navyTrust mb-1">Welcome back, Ahmed</h1>
              <p className="text-deepCharcoal/70">Here's an overview of your compliance status</p>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <Button 
                className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white flex items-center gap-2"
                onClick={() => setIsUploadModalOpen(true)}
              >
                <Upload className="h-4 w-4" />
                Upload Document
              </Button>
              <Button variant="outline" className="border-mutedTeal text-mutedTeal flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Client
              </Button>
              <Button variant="outline" className="border-mutedTeal text-mutedTeal flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Real-time Notifications */}
          <div className="bg-lightSand border-l-4 border-mutedTeal p-4 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-mutedTeal" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-navyTrust">Processing Updates</h3>
                <div className="mt-1 text-sm text-deepCharcoal/70">
                  <p>3 documents are currently being processed. 1 document requires your review for compliance issues.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards - Processing Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {processingStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-deepCharcoal/70 font-medium mb-2">{stat.name} Documents</h3>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-navyTrust">{stat.value}</p>
                  <p className={`text-sm ${stat.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                    <span>{stat.growth}</span>
                    <span className="ml-1 text-deepCharcoal/50">{stat.period}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Previous Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-deepCharcoal/70 font-medium">Documents</h3>
                <div className="p-2 bg-lightSand rounded-lg">
                  <FileText className="h-6 w-6 text-mutedTeal" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navyTrust mb-1">27</p>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-1">↑</span> 4 new this month
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-deepCharcoal/70 font-medium">Compliance Score</h3>
                <div className="p-2 bg-lightSand rounded-lg">
                  <BarChart3 className="h-6 w-6 text-mutedTeal" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navyTrust mb-1">92%</p>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-1">↑</span> 3% increase
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-deepCharcoal/70 font-medium">Team Members</h3>
                <div className="p-2 bg-lightSand rounded-lg">
                  <Users className="h-6 w-6 text-mutedTeal" />
                </div>
              </div>
              <p className="text-3xl font-bold text-navyTrust mb-1">8</p>
              <p className="text-sm text-deepCharcoal/50">Active collaborators</p>
            </div>
          </div>

          {/* Compliance Status Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Compliance Pie Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-navyTrust">Compliance Status</h2>
                <div className="p-2 bg-lightSand rounded-lg">
                  <PieChart className="h-5 w-5 text-mutedTeal" />
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsChart>
                    <Pie
                      data={complianceStats}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {complianceStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </RechartsChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between mt-4">
                {complianceStats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: stat.color }}></div>
                    <span className="text-sm text-deepCharcoal/70">{stat.name}: {stat.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Processing Pipeline Status */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-navyTrust">Processing Pipeline</h2>
                <Button variant="outline" size="sm" className="text-xs">
                  View Details
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <Upload className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navyTrust">Document Upload</p>
                      <p className="text-xs text-deepCharcoal/60">Files stored securely in cloud storage</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">100%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <FileText className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navyTrust">OCR Processing</p>
                      <p className="text-xs text-deepCharcoal/60">Text extraction from documents</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-blue-600">87%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-amber-100 rounded-lg mr-3">
                      <BarChart3 className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navyTrust">NLP Analysis</p>
                      <p className="text-xs text-deepCharcoal/60">Entity and clause extraction</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-amber-600">64%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navyTrust">Compliance Check</p>
                      <p className="text-xs text-deepCharcoal/60">Validation against UAE regulations</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-purple-600">92%</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link to="/reports" className="text-mutedTeal text-sm font-medium hover:underline flex items-center justify-end">
                  View detailed analytics <ArrowUpRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-navyTrust">Recent Documents</h2>
              <Link to="/documents" className="text-mutedTeal text-sm font-medium hover:underline flex items-center">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Processing Stage</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDocuments.map((doc) => {
                    const stageInfo = getProcessingStageInfo(doc.processingStage);
                    return (
                      <TableRow key={doc.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium text-navyTrust">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-gray-400" />
                            {doc.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getStatusIcon(doc.status)}
                            <span className={`ml-1.5 inline-block px-2 py-1 text-xs font-medium rounded-full ${
                              doc.status === 'Approved' 
                                ? 'bg-green-100 text-green-800' 
                                : doc.status === 'Pending' 
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : doc.status === 'In Review'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-orange-100 text-orange-800'
                            }`}>
                              {doc.status}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${stageInfo.color}`}>
                            {stageInfo.text}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-deepCharcoal/70">{doc.date}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                            <ExternalLink className="h-4 w-4 text-deepCharcoal/60" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Quick Resources Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-8">
            <h2 className="text-lg font-semibold text-navyTrust mb-4">Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-lightSand hover:border-mutedTeal transition-colors">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-lightSand rounded-lg mr-3">
                    <FileText className="h-4 w-4 text-mutedTeal" />
                  </div>
                  <h3 className="font-medium text-navyTrust">UAE PDPL Guidelines</h3>
                </div>
                <p className="text-sm text-deepCharcoal/70 mb-3">Latest data protection regulations in the UAE.</p>
                <a href="#" className="text-mutedTeal text-sm hover:underline">Learn more →</a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-lightSand hover:border-mutedTeal transition-colors">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-lightSand rounded-lg mr-3">
                    <BarChart3 className="h-4 w-4 text-mutedTeal" />
                  </div>
                  <h3 className="font-medium text-navyTrust">Sharia Compliance</h3>
                </div>
                <p className="text-sm text-deepCharcoal/70 mb-3">Updates on Sharia compliance requirements for contracts.</p>
                <a href="#" className="text-mutedTeal text-sm hover:underline">Learn more →</a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-lightSand hover:border-mutedTeal transition-colors">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-lightSand rounded-lg mr-3">
                    <Users className="h-4 w-4 text-mutedTeal" />
                  </div>
                  <h3 className="font-medium text-navyTrust">Team Training</h3>
                </div>
                <p className="text-sm text-deepCharcoal/70 mb-3">Interactive sessions for understanding compliance.</p>
                <a href="#" className="text-mutedTeal text-sm hover:underline">Learn more →</a>
              </div>
            </div>
          </div>
        </main>
        
        {/* Document Upload Modal */}
        <DocumentUploadModal 
          isOpen={isUploadModalOpen} 
          onClose={() => setIsUploadModalOpen(false)} 
        />
      </div>
    </PageTransition>
  );
};

export default Dashboard;
