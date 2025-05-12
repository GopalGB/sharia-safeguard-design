
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Upload,
  Clock
} from 'lucide-react';
import AnimatedLogo from '../navbar/AnimatedLogo';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon: Icon, label, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors
        ${isActive 
          ? 'bg-navyTrust text-white' 
          : 'text-gray-300 hover:bg-navyTrust/50 hover:text-white'
        }`}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span className="font-medium">{label}</span>
      {isActive && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-mutedTeal"></span>
      )}
    </Link>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/documents', icon: FileText, label: 'Documents' },
    { to: '/upload', icon: Upload, label: 'Upload Document' },
    { to: '/clients', icon: Users, label: 'Clients' },
    { to: '/reports', icon: BarChart3, label: 'Reports' },
    { to: '/history', icon: Clock, label: 'History' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-navyTrust min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-4 py-6 border-b border-white/10">
        <AnimatedLogo size="md" showText />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={currentPath === item.to}
          />
        ))}
      </div>

      {/* User Section */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center">
          <div className="h-9 w-9 rounded-full bg-mutedTeal text-white flex items-center justify-center font-medium">
            AH
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Ahmed Hassan</p>
            <p className="text-xs text-gray-400">admin@shariaGuard.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
