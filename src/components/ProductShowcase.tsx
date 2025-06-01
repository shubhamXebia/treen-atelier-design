
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import QuickViewModal from './QuickViewModal';

const ProductShowcase = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Astra Chair',
      code: 'LP01049',
      price: 56,
      originalPrice: 75,
      image: '🪑',
      color: 'from-amber-100 to-amber-200',
      category: 'furniture',
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: 'Brixton Lounge',
      code: 'MS03695',
      price: 85,
      image: '🛋️',
      color: 'from-orange-400 to-red-500',
      category: 'furniture',
      rating: 4.9,
      reviews: 18
    },
    {
      id: 3,
      name: 'Odin Dining Set',
      code: 'SL25901',
      price: 94,
      image: '🍽️',
      color: 'from-orange-300 to-orange-400',
      category: 'kitchenware',
      rating: 4.7,
      reviews: 31
    },
    {
      id: 4,
      name: 'Nordic Console',
      code: 'NK18742',
      price: 128,
      image: '🗄️',
      color: 'from-treen-200 to-treen-300',
      category: 'furniture',
      rating: 4.6,
      reviews: 12
    }
  ];

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e, product) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-treen-900 mb-2">
                Trending Now
              </h2>
              <p className="text-treen-600">Discover our most popular pieces</p>
            </div>
            <Button variant="outline" className="border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden animate-fade-in h-96"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className={`h-56 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
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
                        onClick={(e) => handleQuickView(e, product)}
                        className="h-10 w-10 p-0 bg-white text-treen-800 hover:bg-treen-50 rounded-full"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => handleAddToCart(e, product)}
                        className="h-10 w-10 p-0 bg-treen-800 hover:bg-treen-900 rounded-full"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-playfair font-semibold text-treen-900 text-lg mb-1">
                        {product.name}
                      </h3>
                      <p className="text-treen-500 text-sm mb-2">{product.code}</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <p className="text-xl font-bold text-treen-900">${product.price}</p>
                          {product.originalPrice && (
                            <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full h-10 bg-treen-800 hover:bg-treen-900 text-white transition-colors duration-300"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <QuickViewModal 
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};

export default ProductShowcase;
