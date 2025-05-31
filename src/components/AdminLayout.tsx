
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Home } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-treen-50 to-treen-100">
      {/* Admin Navigation */}
      <nav className="bg-white border-b border-treen-200 luxury-shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/admin/dashboard">
                <h1 className="text-2xl font-playfair font-bold text-treen-800">
                  Treen Admin
                </h1>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-treen-700 hover:text-treen-900">
                  <Home className="h-4 w-4 mr-2" />
                  View Store
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
                className="border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
