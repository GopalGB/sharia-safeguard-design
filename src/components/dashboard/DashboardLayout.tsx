
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Upload, FileText, LogOut, Languages } from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import { useToast } from '@/hooks/use-toast';
import DocumentUploadModal from '@/components/DocumentUploadModal';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showWelcome?: boolean;
  username?: string;
}

const DashboardLayout = ({ 
  children, 
  title = "Dashboard", 
  subtitle = "Here's an overview of your compliance dashboard", 
  showWelcome = true,
  username = "Ahmed"
}: DashboardLayoutProps) => {
  const { toast } = useToast();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  React.useEffect(() => {
    // Display a welcome notification only if showWelcome is true
    if (showWelcome) {
      setTimeout(() => {
        toast({
          title: `Welcome back, ${username}`,
          description: "You have new items that need attention",
        });
      }, 1000);
    }
  }, [toast, showWelcome, username]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-navyTrust text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-xl font-bold">
              ShariaGuard
            </Link>
            <div className="hidden md:flex space-x-1">
              <Link 
                to="/dashboard" 
                className="px-3 py-1.5 rounded-md text-sm font-medium hover:bg-navyTrust/90 flex items-center"
              >
                <LayoutDashboard className="mr-1.5 h-4 w-4" />
                Dashboard
              </Link>
              <Link 
                to="/upload-document" 
                className="px-3 py-1.5 rounded-md text-sm font-medium hover:bg-navyTrust/90 flex items-center"
              >
                <Upload className="mr-1.5 h-4 w-4" />
                Upload
              </Link>
              <Link 
                to="/documents" 
                className="px-3 py-1.5 rounded-md text-sm font-medium hover:bg-navyTrust/90 flex items-center"
              >
                <FileText className="mr-1.5 h-4 w-4" />
                Documents
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium hover:text-gray-200 transition-colors">
              <Languages className="h-4 w-4 mr-1" />
              EN
            </button>
            <div className="h-4 w-px bg-white/20"></div>
            <Link to="/login" className="flex items-center text-sm font-medium hover:text-gray-200 transition-colors">
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Link>
            <div className="h-8 w-8 rounded-full bg-mutedTeal text-white flex items-center justify-center font-medium">
              TE
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title Section */}
        {title && (
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-navyTrust mb-1">
              {showWelcome ? `Welcome back, ${username}` : title}
            </h1>
            {subtitle && <p className="text-deepCharcoal/70">{subtitle}</p>}
          </div>
        )}

        {/* Page Content */}
        {children}
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
            <div className="flex flex-wrap items-center gap-2">
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
      
      {/* Upload Modal */}
      <DocumentUploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default DashboardLayout;
