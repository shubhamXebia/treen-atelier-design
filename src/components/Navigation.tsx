
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Main Navigation Row */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-playfair font-bold text-treen-800 hover:text-treen-900 transition-colors">
                  Treen
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-treen-800 transition-colors duration-200 font-medium text-sm relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-treen-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 h-10 bg-gray-50 border-gray-200 focus:border-treen-400 focus:bg-white transition-all duration-200 rounded-full"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* User Menu */}
              {user ? (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="h-10 px-3 text-gray-700 hover:text-treen-800 hover:bg-treen-50 rounded-full">
                      <User className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2" align="end">
                    <div className="space-y-1">
                      <Link to="/orders" className="block">
                        <Button variant="ghost" className="w-full justify-start h-10 text-left">
                          My Orders
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        onClick={logout}
                        className="w-full justify-start h-10 text-red-600 hover:text-red-700 hover:bg-red-50"
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
                  onClick={() => setIsLoginOpen(true)}
                  className="h-10 px-3 text-gray-700 hover:text-treen-800 hover:bg-treen-50 rounded-full"
                >
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
              )}
              
              {/* Cart Button */}
              <Button 
                variant="ghost" 
                onClick={() => setIsCartOpen(true)}
                className="h-10 w-10 text-gray-700 hover:text-treen-800 hover:bg-treen-50 relative rounded-full p-0"
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-treen-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="lg:hidden h-10 w-10 text-gray-700 hover:text-treen-800 hover:bg-treen-50 rounded-full p-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 h-10 bg-gray-50 border-gray-200 focus:border-treen-400 rounded-full"
                  />
                </div>
                
                {/* Mobile Navigation Links */}
                <div className="grid grid-cols-2 gap-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-700 hover:text-treen-800 hover:bg-treen-50 py-3 px-4 rounded-lg font-medium transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
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
