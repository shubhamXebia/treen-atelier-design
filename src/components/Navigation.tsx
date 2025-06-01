
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LoginModal from './LoginModal';
import CartModal from './CartModal';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, logout } = useUser();

  const menuItems = [
    { name: 'Furniture', href: '/products?category=furniture' },
    { name: 'Kitchenware', href: '/products?category=kitchenware' },
    { name: 'Décor', href: '/products?category=decor' },
    { name: 'Handcrafted', href: '/products?category=handcrafted' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-treen-200 luxury-shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <h1 className="text-2xl font-playfair font-bold text-treen-800">
                  Treen
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-treen-700 hover:text-treen-900 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-treen-500 h-4 w-4" />
                <Input
                  placeholder="Search for premium furniture..."
                  className="pl-10 h-10 bg-treen-50 border-treen-200 focus:border-treen-400"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {user ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-10 text-treen-700 hover:text-treen-900">
                      <User className="h-4 w-4 mr-1" />
                      {user.name.split(' ')[0]}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2">
                    <div className="space-y-1">
                      <Link to="/orders" className="block">
                        <Button variant="ghost" className="w-full justify-start h-10">
                          My Orders
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        onClick={logout}
                        className="w-full justify-start h-10 text-red-600 hover:text-red-700"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsLoginOpen(true)}
                  className="h-10 text-treen-700 hover:text-treen-900"
                >
                  <User className="h-4 w-4 mr-1" />
                  Login
                </Button>
              )}
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsCartOpen(true)}
                className="h-10 text-treen-700 hover:text-treen-900 relative"
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-treen-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-10 text-treen-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-treen-200 py-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-treen-500 h-4 w-4" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 h-10 bg-treen-50 border-treen-200"
                  />
                </div>
                
                {/* Mobile Navigation Links */}
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-left text-treen-700 hover:text-treen-900 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={(userData) => {
          // Handle login in the modal
        }} 
      />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navigation;
