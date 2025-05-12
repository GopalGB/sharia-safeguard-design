
import React, { useState } from 'react';
import { Search, Bell, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AnimatedLogo from '@/components/navbar/AnimatedLogo';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  username?: string;
}

const DashboardHeader = ({ username = 'Ahmed' }: DashboardHeaderProps) => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(3);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    
    if (query) {
      toast({
        title: "Search initiated",
        description: `Searching for: "${query}"`,
      });
    }
  };

  const viewNotifications = () => {
    toast({
      title: "Notifications",
      description: `You have ${notifications} unread notifications`,
    });
    setNotifications(0); // Mark as read
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <AnimatedLogo size="md" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-navyTrust font-medium px-1 py-2 border-b-2 border-mutedTeal">Dashboard</Link>
            <Link to="/documents" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Documents</Link>
            <Link to="/clients" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Clients</Link>
            <Link to="/reports" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Reports</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="text" 
              name="search"
              placeholder="Search..." 
              className="pl-10 w-60 h-9 rounded-full bg-gray-100 border-gray-200"
            />
          </form>
          <Button variant="ghost" size="icon" className="relative" onClick={viewNotifications}>
            <Bell className="h-5 w-5 text-gray-500" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative p-0 h-8 w-8">
                <div className="h-8 w-8 rounded-full bg-mutedTeal text-white flex items-center justify-center font-medium">
                  {username?.charAt(0) || 'A'}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
