
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BarChart3, 
  FileText, 
  Users, 
  Settings,
  Bell,
  Search
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  // Mock data for dashboard
  const recentDocuments = [
    { id: 1, name: 'Contract Agreement #1207', status: 'Approved', date: '2025-03-31' },
    { id: 2, name: 'Sharia Compliance Certificate', status: 'Pending', date: '2025-04-02' },
    { id: 3, name: 'Business License Renewal', status: 'In Review', date: '2025-04-04' },
  ];

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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-navyTrust mb-1">Welcome back, Ahmed</h1>
            <p className="text-deepCharcoal/70">Here's an overview of your compliance status</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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

          {/* Recent Documents */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-navyTrust">Recent Documents</h2>
              <Link to="/documents" className="text-mutedTeal text-sm font-medium hover:underline">
                View all
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-xs font-medium text-deepCharcoal/60 uppercase tracking-wider">Document</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-deepCharcoal/60 uppercase tracking-wider">Status</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-deepCharcoal/60 uppercase tracking-wider">Date</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-deepCharcoal/60 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentDocuments.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-navyTrust">{doc.name}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          doc.status === 'Approved' 
                            ? 'bg-green-100 text-green-800' 
                            : doc.status === 'Pending' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                        }`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-deepCharcoal/70">{doc.date}</td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4 text-deepCharcoal/60" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-navyTrust mb-6">Quick Actions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white">
                Upload New Document
              </Button>
              <Button variant="outline" className="border-mutedTeal text-mutedTeal">
                Request Verification
              </Button>
              <Button variant="outline" className="border-mutedTeal text-mutedTeal">
                Generate Report
              </Button>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
