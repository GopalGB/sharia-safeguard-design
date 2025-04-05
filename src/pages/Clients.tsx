
import React from 'react';
import { 
  ChevronRight, 
  Search, 
  Filter, 
  Users, 
  UserPlus,
  Bell,
  Mail,
  Phone
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

const Clients = () => {
  // Mock data for clients
  const clients = [
    { 
      id: 1, 
      name: 'Al Fardan Group', 
      contact: 'Mohammed Al Fardan', 
      email: 'm.alfardan@example.com', 
      phone: '+971 50 123 4567', 
      status: 'Active',
      complianceScore: 95,
      industry: 'Banking & Finance'
    },
    { 
      id: 2, 
      name: 'Emirates Trading Co.', 
      contact: 'Sara Al Maktoum', 
      email: 's.almaktoum@example.com', 
      phone: '+971 50 234 5678', 
      status: 'Active',
      complianceScore: 87,
      industry: 'Import & Export'
    },
    { 
      id: 3, 
      name: 'Dubai Properties LLC', 
      contact: 'Ahmed Al Qasimi', 
      email: 'a.alqasimi@example.com', 
      phone: '+971 50 345 6789', 
      status: 'Under Review',
      complianceScore: 76,
      industry: 'Real Estate'
    },
    { 
      id: 4, 
      name: 'Al Maha Investments', 
      contact: 'Fatima Al Hashemi', 
      email: 'f.alhashemi@example.com', 
      phone: '+971 50 456 7890', 
      status: 'Active',
      complianceScore: 92,
      industry: 'Investment'
    },
    { 
      id: 5, 
      name: 'Etihad Transport', 
      contact: 'Khalid Al Falasi', 
      email: 'k.alfalasi@example.com', 
      phone: '+971 50 567 8901', 
      status: 'Inactive',
      complianceScore: 65,
      industry: 'Transportation'
    },
    { 
      id: 6, 
      name: 'Abu Dhabi Hospitality Group', 
      contact: 'Layla Al Nahyan', 
      email: 'l.alnahyan@example.com', 
      phone: '+971 50 678 9012', 
      status: 'Active',
      complianceScore: 89,
      industry: 'Hospitality'
    },
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
                <Link to="/documents" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Documents</Link>
                <Link to="/clients" className="text-navyTrust font-medium px-1 py-2 border-b-2 border-mutedTeal">Clients</Link>
                <Link to="/reports" className="text-deepCharcoal/70 hover:text-navyTrust px-1 py-2 border-b-2 border-transparent">Reports</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search clients..." 
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
              <h1 className="text-2xl font-bold text-navyTrust mb-1">Clients</h1>
              <p className="text-deepCharcoal/70">Manage and monitor your client compliance</p>
            </div>
            <Button className="bg-gradient-to-r from-navyTrust to-mutedTeal text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search clients..." 
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
                    <DropdownMenuItem>Active</DropdownMenuItem>
                    <DropdownMenuItem>Under Review</DropdownMenuItem>
                    <DropdownMenuItem>Inactive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      Industry
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>Banking & Finance</DropdownMenuItem>
                    <DropdownMenuItem>Real Estate</DropdownMenuItem>
                    <DropdownMenuItem>Import & Export</DropdownMenuItem>
                    <DropdownMenuItem>Investment</DropdownMenuItem>
                    <DropdownMenuItem>Transportation</DropdownMenuItem>
                    <DropdownMenuItem>Hospitality</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9">
                      <Filter className="h-4 w-4 mr-2" />
                      Compliance Score
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All</DropdownMenuItem>
                    <DropdownMenuItem>90% and above</DropdownMenuItem>
                    <DropdownMenuItem>80% - 89%</DropdownMenuItem>
                    <DropdownMenuItem>70% - 79%</DropdownMenuItem>
                    <DropdownMenuItem>Below 70%</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Client</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Compliance Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <div className="p-2 mr-3 bg-lightSand rounded-lg">
                          <Users className="h-5 w-5 text-mutedTeal" />
                        </div>
                        {client.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{client.contact}</p>
                        <div className="flex items-center text-xs text-deepCharcoal/70 mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-xs text-deepCharcoal/70 mt-1">
                          <Phone className="h-3 w-3 mr-1" />
                          {client.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{client.industry}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className={`mr-2 font-medium ${
                          client.complianceScore >= 90 ? 'text-green-600' :
                          client.complianceScore >= 80 ? 'text-blue-600' :
                          client.complianceScore >= 70 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {client.complianceScore}%
                        </span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div 
                            className={`h-2 rounded-full ${
                              client.complianceScore >= 90 ? 'bg-green-500' :
                              client.complianceScore >= 80 ? 'bg-blue-500' :
                              client.complianceScore >= 70 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${client.complianceScore}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        client.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : client.status === 'Under Review' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {client.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4 text-deepCharcoal/60" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Clients;
