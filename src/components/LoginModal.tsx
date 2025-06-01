
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would call an API
    const user = { id: 1, name: 'John Doe', email: loginData.email };
    onLogin(user);
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Mock registration
    const user = { id: 1, name: `${registerData.firstName} ${registerData.lastName}`, email: registerData.email };
    onLogin(user);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-treen-900">Welcome to Treen</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="login" className="h-10">Sign In</TabsTrigger>
            <TabsTrigger value="register" className="h-10">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-treen-700">Email</label>
                <Input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  placeholder="Enter your email"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-treen-700">Password</label>
                <Input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  placeholder="Enter your password"
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-treen-800 hover:bg-treen-900">
                Sign In
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-treen-700">First Name</label>
                  <Input
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                    placeholder="First name"
                    className="h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-treen-700">Last Name</label>
                  <Input
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                    placeholder="Last name"
                    className="h-12"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-treen-700">Email</label>
                <Input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  placeholder="Enter your email"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-treen-700">Password</label>
                <Input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  placeholder="Create a password"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-treen-700">Confirm Password</label>
                <Input
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  placeholder="Confirm your password"
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-treen-800 hover:bg-treen-900">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
