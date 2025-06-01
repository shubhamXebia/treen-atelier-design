
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { user, addOrder } = useUser();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to place an order');
      return;
    }
    
    const order = {
      date: new Date().toISOString(),
      status: 'pending' as const,
      items: [...items],
      total: getTotalPrice()
    };
    
    addOrder(order);
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-playfair font-bold text-treen-900 mb-2">
              Order Placed Successfully!
            </h2>
            <p className="text-treen-600 mb-4">
              Thank you for your purchase. You'll receive a confirmation email shortly.
            </p>
            <div className="bg-treen-50 p-4 rounded-lg">
              <p className="text-sm text-treen-700">
                Order Total: <span className="font-bold">${getTotalPrice()}</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-treen-900">Shopping Cart</DialogTitle>
        </DialogHeader>
        
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-treen-600 mb-4">Your cart is empty</p>
            <Button onClick={onClose} className="h-12 bg-treen-800 hover:bg-treen-900">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-4 p-4 border border-treen-200 rounded-lg">
                <div className="text-2xl">{item.image}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-treen-900">{item.name}</h3>
                  <p className="text-treen-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeFromCart(item.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="border-t border-treen-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-treen-900">Total:</span>
                <span className="text-xl font-bold text-treen-900">${getTotalPrice()}</span>
              </div>
              <Button 
                onClick={handleCheckout}
                className="w-full h-12 bg-treen-800 hover:bg-treen-900"
              >
                Place Order
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
