
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with wood texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-treen-100 via-treen-50 to-treen-200 wood-grain"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-treen-bronze/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-treen-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-treen-900 mb-6 leading-tight">
              A Chair Made{' '}
              <span className="text-treen-bronze">For You</span>
            </h1>
            <p className="text-lg md:text-xl text-treen-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Repurposed Materials, Unique Style, Sustainable Comfort. 
              Handcrafted wooden furniture that tells your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-treen-800 hover:bg-treen-900 text-white px-8 py-6 text-lg font-medium luxury-shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Discover More
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-treen-600 text-treen-800 hover:bg-treen-800 hover:text-white px-8 py-6 text-lg font-medium transition-all duration-300"
                >
                  View Collection
                </Button>
              </Link>
            </div>
            
            {/* New Arrivals Badge */}
            <div className="inline-flex items-center mt-8 bg-treen-800 text-white px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-treen-bronze rounded-full mr-2"></span>
              <span className="text-sm font-medium">14 new arrivals</span>
            </div>
          </div>

          {/* Hero Chair Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 luxury-shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-96 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Chair silhouette */}
                <div className="w-48 h-64 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-black/20 rounded-full blur-sm"></div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-orange-700 rounded-t-full"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-orange-700 rounded-full"></div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-orange-600 rounded-full"></div>
                </div>
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 luxury-shadow">
                  <span className="text-2xl font-bold text-treen-800">$240.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
