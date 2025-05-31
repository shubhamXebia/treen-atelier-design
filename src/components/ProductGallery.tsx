
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ProductGallery = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Premium Oak Dining Table',
      price: 1299,
      originalPrice: 1599,
      image: '🪑',
      category: 'furniture',
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: 'Handcrafted Walnut Chair',
      price: 459,
      image: '🪑',
      category: 'furniture',
      rating: 4.9,
      reviews: 18
    },
    {
      id: 3,
      name: 'Bamboo Kitchen Set',
      price: 189,
      image: '🍽️',
      category: 'kitchenware',
      rating: 4.7,
      reviews: 31
    },
    {
      id: 4,
      name: 'Carved Wooden Sculpture',
      price: 329,
      image: '🏺',
      category: 'decor',
      rating: 4.6,
      reviews: 12
    },
    {
      id: 5,
      name: 'Rustic Coffee Table',
      price: 689,
      image: '🪑',
      category: 'furniture',
      rating: 4.8,
      reviews: 27
    },
    {
      id: 6,
      name: 'Artisan Cutting Board',
      price: 89,
      image: '🍽️',
      category: 'kitchenware',
      rating: 4.9,
      reviews: 45
    },
    {
      id: 7,
      name: 'Mahogany Bookshelf',
      price: 899,
      image: '📚',
      category: 'furniture',
      rating: 4.7,
      reviews: 19
    },
    {
      id: 8,
      name: 'Handwoven Basket',
      price: 149,
      image: '🧺',
      category: 'decor',
      rating: 4.5,
      reviews: 22
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-treen-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-treen-900 mb-4">
            Complete Collection
          </h2>
          <p className="text-lg text-treen-700 max-w-2xl mx-auto mb-8">
            Explore our entire range of premium handcrafted wooden items, 
            each piece telling its own unique story of craftsmanship and artistry.
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-treen-800 hover:bg-treen-900 text-white px-8 py-3 luxury-shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Products
            </Button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {allProducts.map((product, index) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card 
                className={`group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
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
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-playfair font-semibold text-treen-900 text-lg mb-2 group-hover:text-treen-700 transition-colors">
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
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-bold text-treen-900">${product.price}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-treen-600 mb-4">
            Discover even more exceptional pieces in our complete collection
          </p>
          <Link to="/products">
            <Button 
              variant="outline" 
              size="lg"
              className="border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white px-8 py-3 transition-all duration-300"
            >
              Browse All Items
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
