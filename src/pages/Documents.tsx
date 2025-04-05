
import React, { useState } from 'react';
import { 
  ChevronRight, 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Plus,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import DocumentUploadModal from '@/components/DocumentUploadModal';

const Documents = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Mock data for documents
  const documents = [
    { id: 1, name: 'Contract Agreement #1207', status: 'Approved', date: '2025-03-31', type: 'Contract' },
    { id: 2, name: 'Sharia Compliance Certificate', status: 'Pending', date: '2025-04-02', type: 'Certificate' },
    { id: 3, name: 'Business License Renewal', status: 'In Review', date: '2025-04-04', type: 'License' },
    { id: 4, name: 'Employee Policy Update', status: 'Approved', date: '2025-03-28', type: 'Policy' },
    { id: 5, name: 'Financial Statement Q1 2025', status: 'In Review', date: '2025-04-01', type: 'Financial' },
    { id: 6, name: 'Shareholder Agreement', status: 'Approved', date: '2025-03-25', type: 'Agreement' },
    { id: 7, name: 'Product Certification', status: 'Rejected', date: '2025-03-20', type: 'Certificate' },
    { id: 8, name: 'Annual Audit Report', status: 'Pending', date: '2025-04-03', type: 'Report' },
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
                <Link to="/documents" className="text-navyTrust font-medium px-1 py-2 border-b-2 border-mutedTeal">Documents</Link>
                <Link to="/clients" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Clients</Link>
                <Link to="/reports" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Reports</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search documents..." 
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
              <h1 className="text-2xl font-bold text-navyTrust mb-1">Documents</h1>
              <p className="text-deepCharcoal/70">Manage and track your compliance documents</p>
            </div>
            <Button 
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search documents..." 
                  className="pl-10 w-full md:w-72"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      Status
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Approved</DropdownMenuItem>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuItem>In Review</DropdownMenuItem>
                    <DropdownMenuItem>Rejected</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      Document Type
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Contract</DropdownMenuItem>
                    <DropdownMenuItem>Certificate</DropdownMenuItem>
                    <DropdownMenuItem>License</DropdownMenuItem>
                    <DropdownMenuItem>Policy</DropdownMenuItem>
                    <DropdownMenuItem>Financial</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      Date
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                    <DropdownMenuItem>Custom range</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="p-2 mr-3 bg-lightSand rounded-lg">
                          <FileText className="h-5 w-5 text-mutedTeal" />
                        </div>
                        {doc.name}
                      </div>
                    </TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        doc.status === 'Approved' 
                          ? 'bg-green-100 text-green-800' 
                          : doc.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : doc.status === 'Rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                      }`}>
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4 text-deepCharcoal/60" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4 text-deepCharcoal/60" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
      
      <DocumentUploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </PageTransition>
  );
};

export default Documents;
