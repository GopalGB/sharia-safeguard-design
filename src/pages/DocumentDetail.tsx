import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Loader2, ArrowLeft, AlertCircle, CheckCircle, FileText, 
  FileWarning, Languages, Tag
} from 'lucide-react';
import { authApi, documentsApi, DocumentResponse } from '@/lib/api-client';
import { useToast } from '@/hooks/use-toast';

const DocumentDetail = () => {
  // Get document ID from URL params
  const { id } = useParams<{ id: string }>();
  
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState<DocumentResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Hooks
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Effect to load document
  useEffect(() => {
    const loadDocument = async () => {
      try {
        // Check if user is authenticated
        if (!authApi.isAuthenticated()) {
          navigate('/login');
          return;
        }
        
        if (!id) {
          setError('Document ID is required');
          setIsLoading(false);
          return;
        }
        
        // Get document
        const doc = await documentsApi.getDocument(id);
        setDocument(doc);
      } catch (error) {
        console.error('Error loading document:', error);
        setError('Failed to load document');
        
        toast({
          title: 'Error',
          description: 'Failed to load document',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDocument();
  }, [id, navigate, toast]);
  
  // Handle compliance check
  const handleCheckCompliance = async () => {
    if (!document) return;
    
    try {
      await documentsApi.checkCompliance(document.id);
      
      toast({
        title: 'Compliance check started',
        description: 'Document compliance check has been initiated',
        variant: 'success',
      });
      
      // Refresh document after a delay
      setTimeout(async () => {
        const doc = await documentsApi.getDocument(document.id);
        setDocument(doc);
      }, 2000);
    } catch (error) {
      console.error('Error checking compliance:', error);
      toast({
        title: 'Compliance check failed',
        description: 'There was an error checking your document',
        variant: 'destructive',
      });
    }
  };
  
  // Handle document analysis
  const handleAnalyzeDocument = async () => {
    if (!document) return;
    
    try {
      await documentsApi.analyzeDocument(document.id);
      
      toast({
        title: 'Analysis started',
        description: 'Document analysis has been initiated',
        variant: 'success',
      });
      
      // Refresh document after a delay
      setTimeout(async () => {
        const doc = await documentsApi.getDocument(document.id);
        setDocument(doc);
      }, 2000);
    } catch (error) {
      console.error('Error analyzing document:', error);
      toast({
        title: 'Analysis failed',
        description: 'There was an error analyzing your document',
        variant: 'destructive',
      });
    }
  };
  
  // Document status badges
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 flex items-center">
            <Loader2 className="mr-2 h-4 w-4" />
            Pending
          </span>
        );
      case 'PROCESSING':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing
          </span>
        );
      case 'EXTRACTED':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Extracted
          </span>
        );
      case 'NEEDS_REVIEW':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 flex items-center">
            <FileWarning className="mr-2 h-4 w-4" />
            Needs Review
          </span>
        );
      case 'ANALYZING':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="mr-2 h-4 w-4" />
            Completed
          </span>
        );
      case 'ERROR':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 flex items-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Error
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };
  
  // Compliance status badges
  const getComplianceBadge = (status?: string) => {
    if (!status) return null;
    
    switch (status) {
      case 'COMPLIANT':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="mr-2 h-4 w-4" />
            Compliant
          </span>
        );
      case 'NON_COMPLIANT':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 flex items-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Non-Compliant
          </span>
        );
      case 'NEEDS_REVIEW':
        return (
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 flex items-center">
            <FileWarning className="mr-2 h-4 w-4" />
            Needs Review
          </span>
        );
      default:
        return null;
    }
  };
  
  // Get language badge
  const getLanguageBadge = (language?: string) => {
    if (!language) return null;
    
    const languageLabels: Record<string, string> = {
      'ar': 'Arabic',
      'en': 'English',
      'mixed': 'Bilingual (AR/EN)'
    };
    
    return (
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex items-center">
        <Languages className="mr-2 h-4 w-4" />
        {languageLabels[language] || language}
      </span>
    );
  };
  
  // Get document type badge
  const getDocumentTypeBadge = (type?: string) => {
    if (!type) return null;
    
    const typeLabels: Record<string, string> = {
      'contract': 'Contract',
      'agreement': 'Agreement',
      'employment_contract': 'Employment Contract',
      'lease_agreement': 'Lease Agreement',
      'terms_and_conditions': 'Terms & Conditions',
      'non_disclosure_agreement': 'NDA',
      'legal_opinion': 'Legal Opinion',
      'court_filing': 'Court Filing',
      'other': 'Other'
    };
    
    return (
      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 flex items-center">
        <Tag className="mr-2 h-4 w-4" />
        {typeLabels[type] || type}
      </span>
    );
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-mutedTeal" />
      </div>
    );
  }
  
  if (error || !document) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center text-mutedTeal hover:text-mutedTeal/80 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">Error Loading Document</h3>
            <p className="text-gray-500 mb-4">{error || 'Document not found'}</p>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 bg-mutedTeal text-white rounded-md hover:bg-mutedTeal/90 inline-block"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-mutedTeal hover:text-mutedTeal/80 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h1 className="text-xl font-semibold text-gray-800">{document.filename}</h1>
              <div className="flex items-center space-x-3">
                {getStatusBadge(document.status)}
                {getComplianceBadge(document.compliance_status)}
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Uploaded</h3>
                <p className="text-gray-800">
                  {new Date(document.upload_date).toLocaleString()}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Processing Stage</h3>
                <p className="text-gray-800">
                  {document.processing_stage || 'Not started'}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">File Type</h3>
                <p className="text-gray-800">
                  {document.content_type}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Classification</h3>
                <div className="flex flex-wrap gap-2">
                  {getLanguageBadge(document.language)}
                  {getDocumentTypeBadge(document.document_type)}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pb-4 border-b">
              {(document.status === 'PENDING' || document.status === 'EXTRACTED') && (
                <button
                  onClick={handleAnalyzeDocument}
                  className="px-3 py-1.5 bg-navyTrust text-white rounded-md hover:bg-navyTrust/90 text-sm font-medium"
                >
                  Analyze Document
                </button>
              )}
              
              {document.status === 'EXTRACTED' && (
                <button
                  onClick={handleCheckCompliance}
                  className="px-3 py-1.5 bg-mutedTeal text-white rounded-md hover:bg-mutedTeal/90 text-sm font-medium"
                >
                  Check Compliance
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Document content */}
        {document.content && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">Document Content</h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap font-mono text-sm text-gray-700 max-h-96 overflow-y-auto">
                {document.content}
              </div>
            </div>
          </div>
        )}
        
        {/* Entities */}
        {document.entities && Object.keys(document.entities).length > 0 && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">Extracted Entities</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(document.entities).map(([entityType, entities]) => (
                  entities.length > 0 && (
                    <div key={entityType} className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-medium text-gray-700 mb-2">{entityType}</h3>
                      <ul className="space-y-2">
                        {entities.map((entity, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            <span className="font-medium">{entity.text}</span>
                            {entity.score && (
                              <span className="text-xs text-gray-500 ml-2">
                                ({Math.round(entity.score * 100)}% confidence)
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Compliance issues */}
        {document.compliance_issues && document.compliance_issues.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">Compliance Issues</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {document.compliance_issues.map((issue, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-md">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-red-800">{issue.description}</h3>
                        <p className="text-sm text-red-700 mt-1">{issue.message}</p>
                        {issue.remediation && (
                          <div className="mt-3 bg-white p-3 rounded-md text-sm">
                            <span className="font-medium text-gray-700">Recommendation: </span>
                            <span className="text-gray-600">{issue.remediation}</span>
                          </div>
                        )}
                        {issue.reference && (
                          <p className="text-xs text-red-600 mt-2">Reference: {issue.reference}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* If document is compliant */}
        {document.compliance_status === 'COMPLIANT' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">Compliance Status</h2>
            </div>
            <div className="p-6">
              <div className="bg-green-50 p-4 rounded-md flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-800">Document is Compliant</h3>
                  <p className="text-sm text-green-700 mt-1">
                    No compliance issues were found in this document.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentDetail;