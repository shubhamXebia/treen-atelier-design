
import { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
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
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'kitchenware', label: 'Kitchenware' },
    { value: 'decor', label: 'Décor' },
    { value: 'handcrafted', label: 'Handcrafted' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-bold text-treen-900 mb-2">
            Our Collection
          </h1>
          <p className="text-treen-600">Discover premium handcrafted wooden items</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg luxury-shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-treen-700">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-treen-500 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-treen-700">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-treen-700">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-10 w-10 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="h-10 w-10 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-treen-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
