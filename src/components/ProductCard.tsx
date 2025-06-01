
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import QuickViewModal from './QuickViewModal';

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

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard = ({ product, viewMode }: ProductCardProps) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  if (viewMode === 'list') {
    return (
      <>
        <Link to={`/products/${product.id}`}>
          <Card className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-300 border-0 overflow-hidden h-40">
            <CardContent className="p-0 h-full">
              <div className="flex gap-4 h-full">
                {/* Product Image */}
                <div className="w-40 h-full bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-treen-bronze text-white px-2 py-1 rounded-full text-xs font-medium">
                      SALE
                    </div>
                  )}
                  
                  {/* Hover Buttons */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <Button
                      size="sm"
                      onClick={handleQuickView}
                      className="h-8 w-8 p-0 bg-white text-treen-800 hover:bg-treen-50 rounded-full"
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleAddToCart}
                      className="h-8 w-8 p-0 bg-treen-800 hover:bg-treen-900 rounded-full"
                    >
                      <ShoppingCart className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair font-semibold text-treen-900 text-xl mb-2 group-hover:text-treen-700 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-treen-bronze fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-treen-600">({product.reviews})</span>
                    </div>

                    <p className="text-treen-600 capitalize mb-3 text-sm">{product.category}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-treen-900">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <QuickViewModal 
          product={product}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <Card className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden h-96">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Product Image */}
            <div className="h-56 bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center relative overflow-hidden">
              <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-treen-bronze text-white px-2 py-1 rounded-full text-xs font-medium">
                  SALE
                </div>
              )}
              
              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                <Button
                  size="sm"
                  onClick={handleQuickView}
                  className="h-10 w-10 p-0 bg-white text-treen-800 hover:bg-treen-50 rounded-full"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  className="h-10 w-10 p-0 bg-treen-800 hover:bg-treen-900 rounded-full"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-playfair font-semibold text-treen-900 text-lg mb-2 group-hover:text-treen-700 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-treen-bronze fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-treen-600">({product.reviews})</span>
                </div>

                <p className="text-treen-600 capitalize text-sm mb-3">{product.category}</p>
              </div>
              
              <div>
                <p className="text-xl font-bold text-treen-900">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
      
      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;
