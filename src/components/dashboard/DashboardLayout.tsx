
import React from 'react';
import DashboardHeader from './DashboardHeader';
import { useToast } from '@/hooks/use-toast';

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
      {/* Header */}
      <DashboardHeader username={username} />

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
    </div>
  );
};

export default DashboardLayout;
