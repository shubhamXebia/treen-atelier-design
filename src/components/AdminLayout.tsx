
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/admin/dashboard'
    },
    {
      icon: Package,
      label: 'Products',
      href: '/admin/products'
    },
    {
      icon: ShoppingCart,
      label: 'Orders',
      href: '/admin/orders'
    },
    {
      icon: Users,
      label: 'Users',
      href: '/admin/users'
    },
    {
      icon: BarChart3,
      label: 'Analytics',
      href: '/admin/analytics'
    },
    {
      icon: Settings,
      label: 'Settings',
      href: '/admin/settings'
    }
  ];

  const handleLogout = () => {
    // Clear admin session/token here
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-treen-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-treen-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-treen-800">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <h1 className="text-xl font-playfair font-bold text-white">Treen Admin</h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:bg-treen-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-3 text-treen-200 hover:text-white hover:bg-treen-800 rounded-lg px-3 py-2 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-treen-200 hover:text-white hover:bg-treen-800"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-treen-200 h-16 flex items-center justify-between px-4 lg:px-8 luxury-shadow">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-sm text-treen-600 hover:text-treen-800"
            >
              ← Back to Store
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
