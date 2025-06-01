
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-treen-900">
            Quick View
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center rounded-lg">
            <div className="text-6xl">{product.image}</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-treen-600 capitalize text-sm">{product.category}</p>
              <h2 className="text-2xl font-playfair font-bold text-treen-900">
                {product.name}
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-treen-bronze fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-treen-600">({product.reviews} reviews)</span>
            </div>
            
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold text-treen-900">${product.price}</p>
              {product.originalPrice && (
                <p className="text-lg text-treen-500 line-through">${product.originalPrice}</p>
              )}
            </div>
            
            <p className="text-treen-600">
              Handcrafted with premium materials, this piece combines traditional craftsmanship 
              with modern design aesthetics.
            </p>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full h-12 bg-treen-800 hover:bg-treen-900"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
