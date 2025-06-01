
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/UserContext';

const Orders = () => {
  const { user, orders, cancelOrder } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-playfair font-bold text-treen-900 mb-4">
            Please login to view your orders
          </h1>
          <Link to="/">
            <Button className="h-12 bg-treen-800 hover:bg-treen-900">
              Go to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600';
      case 'confirmed': return 'text-blue-600';
      case 'shipped': return 'text-purple-600';
      case 'delivered': return 'text-green-600';
      case 'cancelled': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="flex items-center gap-2 text-treen-600 hover:text-treen-800 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-playfair font-bold text-treen-900 mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <Card className="luxury-shadow border-0">
            <CardContent className="text-center py-12">
              <p className="text-treen-600 mb-4">You haven't placed any orders yet</p>
              <Link to="/products">
                <Button className="h-12 bg-treen-800 hover:bg-treen-900">
                  Start Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <Card key={order.id} className="luxury-shadow border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-playfair text-treen-900">
                        Order #{order.id}
                      </CardTitle>
                      <p className="text-treen-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium capitalize ${getStatusColor(order.status)}`}>
                        {order.status}
                      </p>
                      <p className="text-xl font-bold text-treen-900">
                        ${order.total}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="text-2xl">{item.image}</div>
                        <div className="flex-1">
                          <p className="font-medium text-treen-900">{item.name}</p>
                          <p className="text-sm text-treen-600">
                            Quantity: {item.quantity} × ${item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {order.status === 'pending' && (
                    <Button
                      variant="outline"
                      onClick={() => cancelOrder(order.id)}
                      className="h-10 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Cancel Order
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
