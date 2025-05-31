
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin login - in real app this would validate against backend
    if (email === 'admin@treen.com' && password === 'admin123') {
      // Set admin session/token here
      navigate('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-treen-900 via-treen-800 to-treen-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-playfair font-bold text-treen-100 mb-2">Treen</h1>
          </Link>
          <div className="flex items-center justify-center gap-2 text-treen-200">
            <Shield className="h-5 w-5" />
            <p>Administrative Access</p>
          </div>
        </div>

        <Card className="luxury-shadow-lg border-0 bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-playfair text-center text-treen-900 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6" />
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-treen-700">
                  Admin Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@treen.com"
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-treen-700">
                  Admin Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-treen-500 hover:text-treen-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-treen-800 hover:bg-treen-900">
                <Shield className="h-4 w-4 mr-2" />
                Access Admin Panel
              </Button>
            </form>

            <div className="mt-6 p-4 bg-treen-50 rounded-lg">
              <p className="text-sm text-treen-600 text-center">
                <strong>Demo Credentials:</strong><br />
                Email: admin@treen.com<br />
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/login" className="text-sm text-treen-200 hover:text-white">
            ← Back to Customer Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
