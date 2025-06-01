
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id || '1'),
    name: 'Premium Oak Dining Table',
    price: 1299,
    originalPrice: 1599,
    image: '🪑',
    category: 'furniture',
    rating: 4.8,
    reviews: 24,
    description: 'Handcrafted from premium oak wood, this dining table combines traditional craftsmanship with modern design. Perfect for family gatherings and entertaining guests.',
    features: [
      'Solid oak construction',
      'Hand-finished surface',
      'Seats 6-8 people comfortably',
      'Sustainable sourcing',
      'Easy assembly included'
    ],
    dimensions: {
      length: '72 inches',
      width: '36 inches',
      height: '30 inches'
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/products" className="flex items-center gap-2 text-treen-600 hover:text-treen-800 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="luxury-shadow border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 lg:h-[500px] bg-gradient-to-br from-treen-200 to-treen-300 flex items-center justify-center relative">
                  <div className="text-9xl">
                    {product.image}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-treen-bronze text-white px-3 py-2 rounded-full font-medium">
                      SALE
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-treen-600 capitalize mb-2">{product.category}</p>
              <h1 className="text-4xl font-playfair font-bold text-treen-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-treen-bronze fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-treen-600">{product.rating}</span>
                  <span className="text-treen-500">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <p className="text-4xl font-bold text-treen-900">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-2xl text-treen-500 line-through">${product.originalPrice}</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-treen-900 mb-3">Description</h3>
              <p className="text-treen-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-treen-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-treen-600">
                    <div className="w-2 h-2 bg-treen-bronze rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-playfair font-semibold text-treen-900 mb-3">Dimensions</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-treen-50 rounded-lg">
                  <p className="text-sm text-treen-600">Length</p>
                  <p className="font-medium text-treen-900">{product.dimensions.length}</p>
                </div>
                <div className="text-center p-3 bg-treen-50 rounded-lg">
                  <p className="text-sm text-treen-600">Width</p>
                  <p className="font-medium text-treen-900">{product.dimensions.width}</p>
                </div>
                <div className="text-center p-3 bg-treen-50 rounded-lg">
                  <p className="text-sm text-treen-600">Height</p>
                  <p className="font-medium text-treen-900">{product.dimensions.height}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-treen-800 hover:bg-treen-900 text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="h-12 w-12 p-0 border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
