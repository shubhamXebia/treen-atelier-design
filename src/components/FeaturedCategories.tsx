
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Wooden Furniture',
      description: 'Premium handcrafted chairs, tables, and storage solutions',
      image: '🪑',
      color: 'from-treen-200 to-treen-300',
      href: '/products?category=furniture'
    },
    {
      title: 'Kitchenware',
      description: 'Sustainable cutting boards, utensils, and dining accessories',
      image: '🍽️',
      color: 'from-treen-300 to-treen-400',
      href: '/products?category=kitchenware'
    },
    {
      title: 'Home Décor',
      description: 'Artistic wooden sculptures, frames, and decorative pieces',
      image: '🏺',
      color: 'from-treen-400 to-treen-500',
      href: '/products?category=decor'
    },
    {
      title: 'Handcrafted Items',
      description: 'Unique artisanal pieces made with traditional techniques',
      image: '🎨',
      color: 'from-treen-500 to-treen-600',
      href: '/products?category=handcrafted'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-treen-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-treen-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-treen-700 max-w-2xl mx-auto">
            Discover our curated collection of premium wooden items, 
            each piece crafted with passion and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.title} to={category.href}>
              <Card 
                className={`group cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-treen-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-treen-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
