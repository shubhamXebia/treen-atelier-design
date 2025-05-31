
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple admin authentication check
    if (credentials.email === 'admin@treen.com' && credentials.password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-treen-100 to-treen-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md luxury-shadow border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-playfair font-bold text-treen-900">
            Admin Login
          </CardTitle>
          <p className="text-treen-600">Access the administration panel</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-treen-700">
                Admin Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="admin@treen.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-treen-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter admin password"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-treen-800 hover:bg-treen-900 text-white"
              size="lg"
            >
              Sign In to Admin Panel
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-treen-500">
              Demo credentials: admin@treen.com / admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
