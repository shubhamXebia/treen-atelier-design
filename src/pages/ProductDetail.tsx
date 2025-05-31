
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: 'Premium Oak Dining Table',
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 24,
    category: 'Furniture',
    inStock: 12,
    images: ['🪑', '🪑', '🪑', '🪑'],
    description: 'Handcrafted from premium oak wood, this dining table combines traditional craftsmanship with modern design. Each piece is carefully selected and finished to highlight the natural beauty of the wood grain.',
    features: [
      'Solid oak construction',
      'Natural oil finish',
      'Seats 6-8 people comfortably',
      'Sustainable sourcing',
      'Hand-sanded smooth finish'
    ],
    dimensions: {
      length: '72 inches',
      width: '36 inches',
      height: '30 inches',
      weight: '85 lbs'
    },
    care: 'Clean with a dry cloth. Apply wood oil every 6 months for best results. Avoid direct sunlight and excessive moisture.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center text-treen-600 hover:text-treen-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-treen-200 to-treen-300 rounded-lg h-96 flex items-center justify-center luxury-shadow">
              <span className="text-9xl">{product.images[selectedImage]}</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gradient-to-br from-treen-200 to-treen-300 rounded-lg h-20 flex items-center justify-center text-2xl transition-all ${
                    selectedImage === index ? 'ring-2 ring-treen-600' : 'hover:ring-1 ring-treen-400'
                  }`}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-treen-600 text-sm mb-2">{product.category}</p>
              <h1 className="text-3xl font-playfair font-bold text-treen-900 mb-4">
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
                  <span className="text-treen-600">({product.reviews} reviews)</span>
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {product.inStock} in stock
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-treen-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-treen-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-treen-bronze text-white px-2 py-1 rounded text-sm font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-treen-700">Quantity:</label>
                <div className="flex items-center border border-treen-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-treen-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-treen-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-treen-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-treen-800 hover:bg-treen-900">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-treen-50 rounded-lg">
                <Truck className="h-6 w-6 text-treen-600 mx-auto mb-2" />
                <p className="text-sm text-treen-600">Free Shipping</p>
              </div>
              <div className="text-center p-4 bg-treen-50 rounded-lg">
                <Shield className="h-6 w-6 text-treen-600 mx-auto mb-2" />
                <p className="text-sm text-treen-600">2 Year Warranty</p>
              </div>
              <div className="text-center p-4 bg-treen-50 rounded-lg">
                <RotateCcw className="h-6 w-6 text-treen-600 mx-auto mb-2" />
                <p className="text-sm text-treen-600">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specs</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-treen-700 leading-relaxed mb-6">{product.description}</p>
                  <h4 className="font-playfair font-semibold text-treen-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-treen-700 flex items-center">
                        <span className="w-2 h-2 bg-treen-bronze rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-treen-900">Length</p>
                      <p className="text-treen-600">{product.dimensions.length}</p>
                    </div>
                    <div>
                      <p className="font-medium text-treen-900">Width</p>
                      <p className="text-treen-600">{product.dimensions.width}</p>
                    </div>
                    <div>
                      <p className="font-medium text-treen-900">Height</p>
                      <p className="text-treen-600">{product.dimensions.height}</p>
                    </div>
                    <div>
                      <p className="font-medium text-treen-900">Weight</p>
                      <p className="text-treen-600">{product.dimensions.weight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-treen-700 leading-relaxed">{product.care}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
