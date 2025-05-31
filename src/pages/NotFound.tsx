
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-treen-100 to-treen-200 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-treen-800 mb-4">404</h1>
          <h2 className="text-3xl font-playfair font-bold text-treen-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-treen-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link to="/">
          <Button 
            size="lg" 
            className="bg-treen-800 hover:bg-treen-900 text-white px-8 py-3"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
