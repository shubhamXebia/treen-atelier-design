
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="luxury-shadow border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair font-bold text-treen-900">
                Welcome Back
              </CardTitle>
              <p className="text-treen-600">Sign in to your account</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-treen-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-treen-700">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-treen-800 hover:bg-treen-900 text-white"
                  size="lg"
                >
                  Sign In
                </Button>
              </form>

              <div className="text-center space-y-4">
                <Link to="/forgot-password" className="text-sm text-treen-600 hover:text-treen-800">
                  Forgot your password?
                </Link>
                
                <div className="border-t border-treen-200 pt-4">
                  <p className="text-sm text-treen-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-treen-800 hover:text-treen-900 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
