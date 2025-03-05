import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Loader2, LogOut, Upload, FileText, Users, Settings, 
  PieChart, AlertCircle, CheckCircle, Clipboard, ArrowRight 
} from 'lucide-react';
import { authApi, documentsApi, DocumentResponse } from '@/lib/api-client';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [documents, setDocuments] = useState<DocumentResponse[]>([]);
  const [activeTab, setActiveTab] = useState('documents');
  const [isUploading, setIsUploading] = useState(false);
  
  // Hooks
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Effect to check authentication and load data
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is authenticated
        if (!authApi.isAuthenticated()) {
          navigate('/login');
          return;
        }
        
        // Get user data
        const user = await authApi.getCurrentUser();
        setUserName(user.name || user.email);
        
        // Get documents
        const docs = await documentsApi.getDocuments();
        setDocuments(docs);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        toast({
          title: 'Authentication error',
          description: 'Please sign in again',
          variant: 'destructive',
        });
        authApi.logout();
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [navigate, toast]);
  
  // Handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    
    const file = event.target.files[0];
    setIsUploading(true);
    
    try {
      const result = await documentsApi.uploadDocument(file);
      
      // Refresh documents list
      const docs = await documentsApi.getDocuments();
      setDocuments(docs);
      
      toast({
        title: 'Document uploaded',
        description: 'Your document has been uploaded and is being processed',
        variant: 'success',
      });
    } catch (error) {
      console.error('Error uploading document:', error);
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your document',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      // Reset file input
      event.target.value = '';
    }
  };
  
  // Handle document analysis
  const handleAnalyzeDocument = async (id: string) => {
    try {
      await documentsApi.analyzeDocument(id);
      
      toast({
        title: 'Analysis started',
        description: 'Document analysis has been initiated',
        variant: 'success',
      });
      
      // Refresh documents list after a delay
      setTimeout(async () => {
        const docs = await documentsApi.getDocuments();
        setDocuments(docs);
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
  
  // Handle document compliance check
  const handleCheckCompliance = async (id: string) => {
    try {
      await documentsApi.checkCompliance(id);
      
      toast({
        title: 'Compliance check started',
        description: 'Document compliance check has been initiated',
        variant: 'success',
      });
      
      // Refresh documents list after a delay
      setTimeout(async () => {
        const docs = await documentsApi.getDocuments();
        setDocuments(docs);
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
  
  // Handle logout
  const handleLogout = () => {
    authApi.logout();
    navigate('/login');
  };
  
  // Document status badges
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Pending</span>;
      case 'PROCESSING':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Processing</span>;
      case 'EXTRACTED':
        return <span className="px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800">Extracted</span>;
      case 'NEEDS_REVIEW':
        return <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Needs Review</span>;
      case 'ANALYZING':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Analyzing</span>;
      case 'COMPLETED':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Completed</span>;
      case 'ERROR':
        return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Error</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
  // Compliance status badges
  const getComplianceBadge = (status?: string) => {
    if (!status) return null;
    
    switch (status) {
      case 'COMPLIANT':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Compliant</span>;
      case 'NON_COMPLIANT':
        return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Non-Compliant</span>;
      case 'NEEDS_REVIEW':
        return <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Needs Review</span>;
      default:
        return null;
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-mutedTeal" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="flex flex-col h-screen">
          <div className="p-4 border-b">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/78b75dca-97fc-448a-b653-c6945c45ac1f.png" 
                alt="ShariaGuard Logo" 
                className="h-8 mx-auto"
              />
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              <button 
                onClick={() => setActiveTab('documents')}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium w-full ${
                  activeTab === 'documents' 
                    ? 'bg-mutedTeal text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FileText className="mr-3 h-5 w-5" />
                Documents
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium w-full ${
                  activeTab === 'analytics' 
                    ? 'bg-mutedTeal text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <PieChart className="mr-3 h-5 w-5" />
                Analytics
              </button>
              <button 
                onClick={() => setActiveTab('team')}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium w-full ${
                  activeTab === 'team' 
                    ? 'bg-mutedTeal text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="mr-3 h-5 w-5" />
                Team
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium w-full ${
                  activeTab === 'settings' 
                    ? 'bg-mutedTeal text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>
            </nav>
          </div>
          <div className="p-4 border-t">
            <button 
              onClick={handleLogout}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium w-full text-red-700 hover:bg-red-50"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              {activeTab === 'documents' && 'Documents'}
              {activeTab === 'analytics' && 'Analytics'}
              {activeTab === 'team' && 'Team Management'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
            <div className="text-sm font-medium text-gray-600">
              Welcome, {userName}
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {activeTab === 'documents' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-700">Your Documents</h2>
                <label className="relative cursor-pointer">
                  <input 
                    type="file" 
                    className="sr-only" 
                    onChange={handleFileUpload}
                    accept=".pdf,.docx,.doc,.txt,.jpg,.jpeg,.png"
                    disabled={isUploading}
                  />
                  <span className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium shadow-sm ${
                    isUploading 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-mutedTeal text-white hover:bg-mutedTeal/90'
                  }`}>
                    {isUploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Document
                      </>
                    )}
                  </span>
                </label>
              </div>
              
              {documents.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No documents yet</h3>
                  <p className="text-gray-500 mb-4">Upload your first document to get started</p>
                  <label className="relative cursor-pointer">
                    <input 
                      type="file" 
                      className="sr-only" 
                      onChange={handleFileUpload}
                      accept=".pdf,.docx,.doc,.txt,.jpg,.jpeg,.png"
                      disabled={isUploading}
                    />
                    <span className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium shadow-sm ${
                      isUploading 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-mutedTeal text-white hover:bg-mutedTeal/90'
                    }`}>
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Document
                        </>
                      )}
                    </span>
                  </label>
                </div>
              ) : (
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-800">{doc.filename}</div>
                          <div className="text-sm text-gray-500 mt-1">
                            Uploaded on {new Date(doc.upload_date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(doc.status)}
                          {getComplianceBadge(doc.compliance_status)}
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right flex justify-end space-x-2">
                        <button 
                          onClick={() => navigate(`/documents/${doc.id}`)}
                          className="px-3 py-1 rounded-md text-xs font-medium text-white bg-navyTrust hover:bg-navyTrust/90"
                        >
                          View Details
                        </button>
                        {doc.status === 'PENDING' || doc.status === 'EXTRACTED' ? (
                          <button 
                            onClick={() => handleAnalyzeDocument(doc.id)}
                            className="px-3 py-1 rounded-md text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            Analyze
                          </button>
                        ) : null}
                        {doc.status === 'EXTRACTED' ? (
                          <button 
                            onClick={() => handleCheckCompliance(doc.id)}
                            className="px-3 py-1 rounded-md text-xs font-medium text-white bg-green-600 hover:bg-green-700"
                          >
                            Check Compliance
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Analytics Coming Soon</h3>
              <p className="text-gray-500">This feature will be available in the next update</p>
            </div>
          )}
          
          {activeTab === 'team' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Team Management Coming Soon</h3>
              <p className="text-gray-500">This feature will be available in the next update</p>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Settings Coming Soon</h3>
              <p className="text-gray-500">This feature will be available in the next update</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;