
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  if (viewMode === 'list') {
    return (
      <Card className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-300 border-0">
        <CardContent className="p-0">
          <div className="flex">
            <div className="w-48 h-48 bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center">
              <span className="text-6xl">{product.image}</span>
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-playfair font-semibold text-treen-900 mb-2 group-hover:text-treen-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
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
                  <p className="text-treen-600 capitalize text-sm">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-treen-900">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-treen-800 hover:bg-treen-900">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden">
      <CardContent className="p-0">
        <div className="h-64 bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center relative overflow-hidden">
          <span className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
            {product.image}
          </span>
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-treen-bronze text-white px-2 py-1 rounded-full text-xs font-medium">
              SALE
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-playfair font-semibold text-treen-900 text-lg mb-2 group-hover:text-treen-700 transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-treen-bronze fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-xs text-treen-600">({product.reviews})</span>
          </div>

          <p className="text-treen-600 capitalize text-sm mb-3">{product.category}</p>
          
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-xl font-bold text-treen-900">${product.price}</p>
              {product.originalPrice && (
                <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
              )}
            </div>
          </div>
          
          <Button className="w-full bg-treen-800 hover:bg-treen-900 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
