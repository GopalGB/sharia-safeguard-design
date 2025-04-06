
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Share, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  FileText,
  ExternalLink,
  MessageSquare,
  Tag
} from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DocumentDetail = () => {
  const { id } = useParams();
  
  // Mock document data
  const document = {
    id: id,
    name: 'Partnership Agreement - Dubai Properties',
    uploadedAt: '2025-04-04',
    status: 'Needs Review',
    type: 'PDF',
    size: '845 KB',
    language: 'English with Arabic sections',
    tags: ['Partnership', 'Real Estate', 'UAE Law'],
    complianceScore: 78,
    creator: 'Ahmed Hassan',
    processingProgress: 100, // percentage
    issues: [
      {
        id: 1,
        severity: 'High',
        rule: 'Sharia Compliance - Riba Prohibition',
        description: 'Section 4.2 contains interest terms that may violate Riba prohibition principles',
        recommendation: 'Replace with profit-sharing or flat fee structure'
      },
      {
        id: 2,
        severity: 'Medium',
        rule: 'PDPL Compliance',
        description: 'Missing mandatory data protection clause in Section 8',
        recommendation: 'Add standard PDPL compliance clause'
      }
    ],
    entities: [
      { name: 'Dubai Properties LLC', type: 'Organization', count: 12 },
      { name: 'Ahmed Al Maktoum', type: 'Person', count: 8 },
      { name: 'Dubai Land Department', type: 'Government Entity', count: 5 },
      { name: '1,500,000 AED', type: 'Monetary Value', count: 3 }
    ]
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Link to="/documents" className="flex items-center text-deepCharcoal/70 hover:text-navyTrust">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Documents
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Document Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="p-3 bg-mutedTeal/10 rounded-lg mr-4">
                  <FileText className="h-8 w-8 text-mutedTeal" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-navyTrust">{document.name}</h1>
                  <div className="flex flex-wrap items-center text-sm text-deepCharcoal/60 mt-1">
                    <span>{document.type}</span>
                    <span className="mx-2">•</span>
                    <span>{document.size}</span>
                    <span className="mx-2">•</span>
                    <span>Uploaded on {document.uploadedAt}</span>
                    <span className="mx-2">•</span>
                    <span>By {document.creator}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Reviewed
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm">
                <Clock className="h-4 w-4 mr-2 text-deepCharcoal/60" />
                <span>Processing Complete</span>
              </div>
              
              <div className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                document.status === 'Compliant' ? 'bg-green-100 text-green-800' : 
                document.status === 'Needs Review' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {document.status === 'Compliant' ? (
                  <CheckCircle className="h-4 w-4 mr-2" />
                ) : document.status === 'Needs Review' ? (
                  <AlertTriangle className="h-4 w-4 mr-2" />
                ) : (
                  <AlertTriangle className="h-4 w-4 mr-2" />
                )}
                <span>{document.status}</span>
              </div>
              
              <div className="flex items-center px-3 py-1.5 bg-mutedTeal/10 text-mutedTeal rounded-full text-sm">
                <Tag className="h-4 w-4 mr-2" />
                <span>Compliance Score: {document.complianceScore}%</span>
              </div>
            </div>
          </div>
          
          {/* Document Tabs */}
          <Tabs defaultValue="issues" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="issues">Compliance Issues</TabsTrigger>
              <TabsTrigger value="entities">Extracted Entities</TabsTrigger>
              <TabsTrigger value="preview">Document Preview</TabsTrigger>
              <TabsTrigger value="history">Processing History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="issues">
              <Card>
                <CardHeader>
                  <CardTitle>Compliance Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  {document.issues.length > 0 ? (
                    <div className="space-y-6">
                      {document.issues.map(issue => (
                        <div key={issue.id} className={`border-l-4 pl-4 py-3 ${
                          issue.severity === 'High' ? 'border-red-500' : 
                          issue.severity === 'Medium' ? 'border-yellow-500' : 
                          'border-blue-500'
                        }`}>
                          <div className="flex items-center">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full mr-2 ${
                              issue.severity === 'High' ? 'bg-red-100 text-red-800' : 
                              issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {issue.severity} Priority
                            </span>
                            <h3 className="font-medium text-navyTrust">{issue.rule}</h3>
                          </div>
                          <p className="text-sm text-deepCharcoal/80 mt-2">{issue.description}</p>
                          <div className="mt-3 bg-green-50 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-green-800">Recommendation:</h4>
                            <p className="text-sm text-green-800 mt-1">{issue.recommendation}</p>
                          </div>
                          <div className="mt-3 flex justify-end">
                            <Button variant="outline" size="sm" className="mr-2">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Add Comment
                            </Button>
                            <Button size="sm" className="bg-mutedTeal hover:bg-mutedTeal/90 text-white">
                              Resolve Issue
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <h3 className="text-xl font-medium text-navyTrust">No Compliance Issues Found</h3>
                      <p className="text-deepCharcoal/60 mt-2">This document passes all compliance checks</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="entities">
              <Card>
                <CardHeader>
                  <CardTitle>Extracted Entities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {document.entities.map((entity, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-navyTrust">{entity.name}</h3>
                          <span className="text-xs bg-mutedTeal/10 text-mutedTeal px-2 py-1 rounded-full">
                            {entity.type}
                          </span>
                        </div>
                        <p className="text-sm text-deepCharcoal/60 mt-1">
                          Appears {entity.count} times in document
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preview">
              <Card>
                <CardHeader>
                  <CardTitle>Document Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <FileText className="h-16 w-16 text-deepCharcoal/40 mx-auto mb-4" />
                    <p className="text-deepCharcoal/60">Document preview not available in this demo</p>
                    <Button variant="outline" className="mt-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Document
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Processing History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="w-0.5 h-12 bg-gray-200 mt-1"></div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-navyTrust">Compliance Check Completed</h3>
                        <p className="text-sm text-deepCharcoal/60 mt-1">April 4, 2025 • 13:45 PM</p>
                        <p className="text-sm text-deepCharcoal/80 mt-2">Document analyzed with 2 compliance issues found</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="w-0.5 h-12 bg-gray-200 mt-1"></div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-navyTrust">NLP Analysis Completed</h3>
                        <p className="text-sm text-deepCharcoal/60 mt-1">April 4, 2025 • 13:42 PM</p>
                        <p className="text-sm text-deepCharcoal/80 mt-2">Extracted 4 entity types and identified key clauses</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div className="w-0.5 h-12 bg-gray-200 mt-1"></div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-navyTrust">OCR Extraction Completed</h3>
                        <p className="text-sm text-deepCharcoal/60 mt-1">April 4, 2025 • 13:35 PM</p>
                        <p className="text-sm text-deepCharcoal/80 mt-2">Text extracted with 97% confidence score</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-navyTrust">Document Uploaded</h3>
                        <p className="text-sm text-deepCharcoal/60 mt-1">April 4, 2025 • 13:30 PM</p>
                        <p className="text-sm text-deepCharcoal/80 mt-2">Document uploaded by Ahmed Hassan</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </PageTransition>
  );
};

export default DocumentDetail;
