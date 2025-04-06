
import React from 'react';
import { FileText, MoreHorizontal, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const RecentDocuments = () => {
  // Mock data for recent documents
  const documents = [
    { 
      id: 1, 
      name: 'Employment Contract - Al Fardan Group', 
      uploadedAt: '2025-04-05', 
      status: 'Compliant',
      type: 'PDF',
      size: '1.2 MB'
    },
    { 
      id: 2, 
      name: 'Partnership Agreement - Dubai Properties', 
      uploadedAt: '2025-04-04', 
      status: 'Needs Review',
      type: 'DOCX',
      size: '845 KB'
    },
    { 
      id: 3, 
      name: 'Investment Terms - Al Maha Investments', 
      uploadedAt: '2025-04-03', 
      status: 'Processing',
      type: 'PDF',
      size: '2.1 MB'
    },
    { 
      id: 4, 
      name: 'Rental Contract - Etihad Transport', 
      uploadedAt: '2025-04-02', 
      status: 'Non-Compliant',
      type: 'PDF',
      size: '1.5 MB'
    },
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Compliant':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Needs Review':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'Non-Compliant':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'Processing':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>Latest documents processed by the system</CardDescription>
        </div>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map(doc => (
            <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-md shadow-sm">
                  <FileText className="h-5 w-5 text-mutedTeal" />
                </div>
                <div>
                  <p className="font-medium text-navyTrust">{doc.name}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{doc.type}</span>
                    <span className="mx-2">•</span>
                    <span>{doc.size}</span>
                    <span className="mx-2">•</span>
                    <span>Uploaded on {doc.uploadedAt}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {getStatusIcon(doc.status)}
                  <span className={`text-sm ${
                    doc.status === 'Compliant' ? 'text-green-600' : 
                    doc.status === 'Needs Review' ? 'text-yellow-600' : 
                    doc.status === 'Non-Compliant' ? 'text-red-600' : 
                    'text-blue-600'
                  }`}>{doc.status}</span>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentDocuments;
