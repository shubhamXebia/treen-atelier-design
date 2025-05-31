
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-treen-100 via-treen-50 to-treen-200 wood-grain flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-4xl font-playfair font-bold text-treen-800 mb-2">Treen</h1>
          </Link>
          <p className="text-treen-600">Welcome back to premium craftsmanship</p>
        </div>

        <Card className="luxury-shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-playfair text-center text-treen-900">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-treen-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-treen-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-treen-300" />
                  <span className="text-sm text-treen-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-treen-600 hover:text-treen-800">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full h-12 bg-treen-800 hover:bg-treen-900">
                Sign In
              </Button>

              <div className="text-center">
                <p className="text-treen-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-treen-800 hover:text-treen-900 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/admin/login" className="text-sm text-treen-600 hover:text-treen-800">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
