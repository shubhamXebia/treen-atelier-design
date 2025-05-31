
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Astra Chair',
      code: 'LP01049',
      price: 56,
      originalPrice: 75,
      image: '🪑',
      color: 'from-amber-100 to-amber-200'
    },
    {
      id: 2,
      name: 'Brixton Lounge',
      code: 'MS03695',
      price: 85,
      image: '🛋️',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 3,
      name: 'Odin Dining Set',
      code: 'SL25901',
      price: 94,
      image: '🍽️',
      color: 'from-orange-300 to-orange-400'
    },
    {
      id: 4,
      name: 'Nordic Console',
      code: 'NK18742',
      price: 128,
      image: '🗄️',
      color: 'from-treen-200 to-treen-300'
    }
  ];

  return (
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
              className="group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-treen-bronze text-white px-2 py-1 rounded-full text-xs font-medium">
                      SALE
                    </div>
                  )}
                  
                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button 
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-treen-800 hover:bg-treen-800 hover:text-white"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-playfair font-semibold text-treen-900 text-lg">
                        {product.name}
                      </h3>
                      <p className="text-treen-500 text-sm">{product.code}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-treen-900">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-treen-500 line-through">${product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full mt-3 bg-treen-800 hover:bg-treen-900 text-white transition-colors duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
