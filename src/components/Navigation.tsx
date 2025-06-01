
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
  const { user, logout, login } = useUser();

  const menuItems = [
    { name: 'Furniture', href: '/products?category=furniture' },
    { name: 'Kitchenware', href: '/products?category=kitchenware' },
    { name: 'Décor', href: '/products?category=decor' },
    { name: 'Handcrafted', href: '/products?category=handcrafted' }
  ];

  const handleLogin = (userData: any) => {
    login(userData);
    setIsLoginOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-playfair font-bold text-treen-800 hover:text-treen-900 transition-colors">
                Treen
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-treen-800 font-medium text-sm transition-colors duration-200 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-treen-800 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-sm mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-9 bg-gray-50 border-gray-200 focus:border-treen-500 focus:ring-1 focus:ring-treen-200 transition-all duration-200"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* User Menu */}
              {user ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-9 px-3 text-gray-700 hover:text-treen-800 hover:bg-treen-50">
                      <User className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline text-sm font-medium">{user.name.split(' ')[0]}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2" align="end">
                    <div className="space-y-1">
                      <Link to="/orders" className="block">
                        <Button variant="ghost" className="w-full justify-start h-8 text-left text-sm">
                          My Orders
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        onClick={logout}
                        className="w-full justify-start h-8 text-red-600 hover:text-red-700 hover:bg-red-50 text-sm"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsLoginOpen(true)}
                  className="h-9 px-3 border-gray-300 text-gray-700 hover:bg-treen-800 hover:text-white hover:border-treen-800 transition-all duration-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline text-sm">Login</span>
                </Button>
              )}
              
              {/* Cart Button */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="h-9 w-9 p-0 border-gray-300 text-gray-700 hover:bg-treen-800 hover:text-white hover:border-treen-800 relative transition-all duration-200"
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-treen-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-9 w-9 p-0 text-gray-700 hover:text-treen-800 hover:bg-treen-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-9 bg-gray-50 border-gray-200 focus:border-treen-500"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-gray-700 hover:text-treen-800 hover:bg-treen-50 py-2 px-3 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onLoginRequired={openLoginModal}
      />
    </>
  );
};

export default Navigation;
